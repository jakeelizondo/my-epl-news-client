import React, { useCallback, useEffect, useState } from 'react';
import NewsFilterBar from '../NewsFilterBar/NewsFilterBar';
import SmallArticleCard from '../SmallArticleCard/SmallArticleCard';
import ArticleList from '../../ArticleList/ArticleList';
import { TEAMKEY } from '../../../team-helpers/TEAMS';
import ArticlesService from '../../../services/articles-service';
import SoccerLoadingIndicator from '../../UI/SoccerLoadingIndicator/SoccerLoadingIndicator';
import TokenService from '../../../services/token-service';

const MobileNewsPage = () => {
  const [team, setTeam] = useState('');
  const [teamCode, setTeamCode] = useState('');
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [page, setPage] = useState();

  // if the user is already logged in, use their jwt token to pre-populate news page for them
  useEffect(() => {
    if (TokenService.hasAuthToken()) {
      let token = TokenService.getAuthToken();
      let user = TokenService.parseAuthToken(token);
      setPage(1);
      setTeamCode(user.team);
      setIsLoading(true);
      ArticlesService.getTeamArticles(user.team, page).then((res) => {
        setIsLoading(false);
        setTeam(TEAMKEY[user.team].teamcode);
        setArticles(res);
      });
    }
  }, [page]);

  const handleFilter = useCallback(
    (filterTeamCode) => {
      setPage(1);
      setTeamCode(filterTeamCode);
      setIsLoading(true);
      ArticlesService.getTeamArticles(filterTeamCode, page).then((res) => {
        setIsLoading(false);
        setTeam(TEAMKEY[filterTeamCode].teamcode);
        setArticles(res);
      });
    },
    [page]
  );

  const handlePrevClick = useCallback(() => {
    setIsLoading(true);
    setIsEnd(false);

    ArticlesService.getTeamArticles(teamCode, page - 1).then((res) => {
      setPage(page - 1);
      setIsLoading(false);
      setArticles(res);
    });
  }, [teamCode, page]);

  const handleNextClick = useCallback(() => {
    setIsLoading(true);

    ArticlesService.getTeamArticles(teamCode, page + 1).then((res) => {
      if (res.length < 1) {
        setIsEnd(true);
      }
      setPage(page + 1);
      setIsLoading(false);
      setArticles(res);
    });
  }, [teamCode, page]);

  return (
    <div className="mobile-news-page">
      <NewsFilterBar handleFilter={handleFilter} team={team} />
      {isLoading && <SoccerLoadingIndicator />}
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
