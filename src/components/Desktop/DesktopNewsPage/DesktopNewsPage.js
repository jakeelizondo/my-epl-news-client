import React, { useCallback, useEffect, useState } from 'react';
import ArticleList from '../../ArticleList/ArticleList';
import LargeArticleCard from '../LargeArticleCard/LargeArticleCard';
import TeamFilterSidebar from '../TeamFilterSidebar/TeamFilterSidebar';
import { TEAMKEY } from '../../../team-helpers/TEAMS';
import ArticlesService from '../../../services/articles-service';
import SoccerLoadingIndicator from '../../UI/SoccerLoadingIndicator/SoccerLoadingIndicator';
import TokenService from '../../../services/token-service';
import EmptyNewsMessage from '../../UI/EmptyNewsMessage/EmptyNewsMessage';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import './DesktopNewsPage.css';

const DesktopNewsPage = () => {
  const [team, setTeam] = useState('');
  const [teamCode, setTeamCode] = useState('');
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [page, setPage] = useState();
  const [error, setError] = useState(null);

  // if the user is already logged in, use their jwt token to pre-populate news page for them
  useEffect(() => {
    if (TokenService.hasAuthToken()) {
      let token = TokenService.getAuthToken();
      let user = TokenService.parseAuthToken(token);
      setPage(1);
      setTeamCode(user.team);
      setIsLoading(true);
      ArticlesService.getTeamArticles(user.team, page)
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

  const clear = () => {
    setError(null);
    setIsLoading(false);
  };

  const handleFilter = useCallback(
    (filterTeamCode) => {
      window.scrollTo(0, 0);
      setPage(1);
      setTeamCode(filterTeamCode);
      setIsLoading(true);
      ArticlesService.getTeamArticles(filterTeamCode, page)
        .then((res) => {
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
        setIsLoading(false);
        setArticles(res);
      })
      .catch((res) => {
        setError(res.error.message);
      });
  }, [teamCode, page]);

  return (
    <div className="desktop-news-page">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <div className="left-side">
        <TeamFilterSidebar handleFilter={handleFilter} currTeam={teamCode} />
      </div>
      <div className="right-side">
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
                <LargeArticleCard key={article.id} article={article} />
              ))}
          </ArticleList>
        )}
      </div>
    </div>
  );
};

export default DesktopNewsPage;
