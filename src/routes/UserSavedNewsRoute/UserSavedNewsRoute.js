import React, { useEffect, useState, useCallback } from 'react';
import ArticlesService from '../../services/articles-service';
import ErrorModal from '../../components/UI/ErrorModal/ErrorModal';
import SoccerLoadingIndicator from '../../components/UI/SoccerLoadingIndicator/SoccerLoadingIndicator';
import SavedArticleCard from '../../components/SavedArticleCard.js/SavedArticleCard';
import './UserSavedNewsRoute.css';

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

  const handleDeleteSaved = useCallback(
    (id) => {
      setIsLoading(true);
      console.log('deleting', id);
      ArticlesService.deleteSavedArticle(id)
        .then((response) => {
          setIsLoading(false);
          setUserArticles(userArticles.filter((article) => article.id !== id));
        })
        .catch((res) => {
          setError(res.error.message);
        });
    },
    [userArticles]
  );

  const makeSavedArticles = () => {
    return userArticles.map((article) => {
      return (
        <SavedArticleCard
          handleDeleteSaved={handleDeleteSaved}
          key={article.id}
          id={article.id}
          article={article}
        />
      );
    });
  };

  return (
    <div className="user-saved-news-page">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      {isLoading && <SoccerLoadingIndicator />}
      {makeSavedArticles()}
    </div>
  );
};

export default UserSavedNewsRoute;
