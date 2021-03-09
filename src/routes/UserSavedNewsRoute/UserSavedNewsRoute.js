import React, { useEffect, useState } from 'react';
import LargeArticleCard from '../../components/Desktop/LargeArticleCard/LargeArticleCard';
import ArticlesService from '../../services/articles-service';
import ErrorModal from '../../components/UI/ErrorModal/ErrorModal';
import SoccerLoadingIndicator from '../../components/UI/SoccerLoadingIndicator/SoccerLoadingIndicator';

const UserSavedNewsRoute = (props) => {
  const [userArticles, setUserArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    ArticlesService.getUserSavedArticles()
      .then((response) => {
        setIsLoading(false);
        setUserArticles(response);
      })
      .catch((res) => {
        setIsLoading(false);
        setError(res.error.message);
      });
  }, []);

  const clear = () => {
    setError(null);
    setIsLoading(false);
  };

  const makeSavedArticles = () => {
    return userArticles.map((article) => {
      return <LargeArticleCard article={article} />;
    });
  };
  return (
    <div>
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      {isLoading && <SoccerLoadingIndicator />}
      {makeSavedArticles()}
    </div>
  );
};

export default UserSavedNewsRoute;
