import React, { useCallback, useEffect, useState } from 'react';
import NewsFilterBar from '../NewsFilterBar/NewsFilterBar';
import SmallArticleCard from '../SmallArticleCard/SmallArticleCard';
import ArticleList from '../../ArticleList/ArticleList';
import { TEAMKEY } from '../../../team-helpers/TEAMS';
import ArticlesService from '../../../services/articles-service';
import SoccerLoadingIndicator from '../../UI/SoccerLoadingIndicator/SoccerLoadingIndicator';
import TokenService from '../../../services/token-service';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import EmptyNewsMessage from '../../UI/EmptyNewsMessage/EmptyNewsMessage';

const MobileNewsPage = () => {
  const [team, setTeam] = useState('');
  const [teamCode, setTeamCode] = useState('');
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [page, setPage] = useState();
  const [error, setError] = useState(null);

  const clear = () => {
    setError(null);
    setIsLoading(false);
  };

  // if the user is already logged in, use their jwt token to pre-populate news page for them
  useEffect(() => {
    if (TokenService.hasAuthToken()) {
      let token = TokenService.getAuthToken();
      let user = TokenService.parseAuthToken(token);
      setPage(1);
      setTeamCode(user.team);
      setIsLoading(true);
      ArticlesService.getTeamArticles(user.team)
        .then((res) => {
          setIsLoading(false);
          setTeam(TEAMKEY[user.team].teamcode);
          setArticles(res);
        })
        .catch((res) => {
          setError(res.error.message);
        });
    }
  }, []);

  const handleFilter = useCallback(
    (filterTeamCode) => {
      setPage(1);
      setTeamCode(filterTeamCode);
      setIsLoading(true);
      ArticlesService.getTeamArticles(filterTeamCode, page)
        .then((res) => {
          window.scrollTo(0, 0);
          setIsLoading(false);
          setTeam(TEAMKEY[filterTeamCode].teamcode);
          setArticles(res);
        })
        .catch((res) => {
          setError(res.error.message);
        });
    },
    [page]
  );

  const handlePrevClick = useCallback(() => {
    setIsLoading(true);
    setIsEnd(false);

    ArticlesService.getTeamArticles(teamCode, page - 1)
      .then((res) => {
        setPage(page - 1);
        window.scrollTo(0, 0);
        setIsLoading(false);
        setArticles(res);
      })
      .catch((res) => {
        setError(res.error.message);
      });
  }, [teamCode, page]);

  const handleNextClick = useCallback(() => {
    setIsLoading(true);

    ArticlesService.getTeamArticles(teamCode, page + 1)
      .then((res) => {
        if (res.length < 1) {
          setIsEnd(true);
        }
        setPage(page + 1);
        window.scrollTo(0, 0);
        setIsLoading(false);
        setArticles(res);
      })
      .catch((res) => {
        setError(res.error.message);
      });
  }, [teamCode, page]);

  return (
    <div className="mobile-news-page">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <NewsFilterBar handleFilter={handleFilter} team={team} />
      {isLoading && <SoccerLoadingIndicator />}
      {!team && <EmptyNewsMessage />}
      {page && (
        <ArticleList
          handleNextClick={handleNextClick}
          page={page}
          handlePrevClick={handlePrevClick}
          atEnd={isEnd}
        >
          {!isEnd &&
            articles.map((article) => (
              <SmallArticleCard key={article.id} article={article} />
            ))}
        </ArticleList>
      )}
    </div>
  );
};

export default MobileNewsPage;
