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

      ArticlesService.deleteSavedArticle(id)
        .then(() => {
          setIsLoading(false);
          console.log(id);
          console.log(userArticles);
          let newArticles = userArticles.filter((article) => article.id !== id);
          console.log(newArticles);
          setUserArticles(newArticles);
        })
        .catch((res) => {
          setIsLoading(false);
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
      <h2>Saved Articles</h2>
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      {userArticles.length < 1 && (
        <p>Looks like you don't have any saved articles!</p>
      )}
      {isLoading && <SoccerLoadingIndicator />}
      {makeSavedArticles()}
    </div>
  );
};

export default UserSavedNewsRoute;
