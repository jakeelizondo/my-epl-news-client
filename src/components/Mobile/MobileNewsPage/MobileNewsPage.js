import React, { useCallback, useState } from 'react';
import NewsFilterBar from '../NewsFilterBar/NewsFilterBar';
import SmallArticleCard from '../SmallArticleCard/SmallArticleCard';
import ArticleList from '../../ArticleList/ArticleList';
import { TEAMKEY } from '../../../TEAMS';
import ArticlesService from '../../../services/articles-service';
import SoccerLoadingIndicator from '../../UI/SoccerLoadingIndicator/SoccerLoadingIndicator';

const MobileNewsPage = () => {
  const [team, setTeam] = useState('');
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFilter = useCallback((filterTeamCode) => {
    setIsLoading(true);
    ArticlesService.getTeamArticles(filterTeamCode).then((res) => {
      setIsLoading(false);
      setTeam(TEAMKEY[filterTeamCode]);
      setArticles(res);
    });
  }, []);

  return (
    <div className="mobile-news-page">
      <NewsFilterBar handleFilter={handleFilter} team={team} />
      {isLoading && <SoccerLoadingIndicator />}
      <ArticleList>
        {articles.map((article) => (
          <SmallArticleCard key={article.id} article={article} />
        ))}
      </ArticleList>
    </div>
  );
};

export default MobileNewsPage;
