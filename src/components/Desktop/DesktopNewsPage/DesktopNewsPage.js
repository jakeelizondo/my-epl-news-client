import React, { useCallback, useEffect, useState } from 'react';
import ArticleList from '../../ArticleList/ArticleList';
import LargeArticleCard from '../LargeArticleCard/LargeArticleCard';
import TeamFilterSidebar from '../TeamFilterSidebar/TeamFilterSidebar';
import ArticlesService from '../../../services/articles-service';
import SoccerLoadingIndicator from '../../UI/SoccerLoadingIndicator/SoccerLoadingIndicator';
import TokenService from '../../../services/token-service';
import EmptyNewsMessage from '../../UI/EmptyNewsMessage/EmptyNewsMessage';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import './DesktopNewsPage.css';
import NoArticlesMessage from '../../UI/NoArticlesMessage/NoArticlesMessage';

const DesktopNewsPage = () => {
  const [teamCode, setTeamCode] = useState('');
  const [articles, setArticles] = useState([]);
  const [userArticles, setUserArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [page, setPage] = useState();
  const [error, setError] = useState(null);

  // if the user is already logged in, use their jwt token to pre-populate news page for them
  useEffect(() => {
    window.scrollTo(0, 0);
    if (TokenService.hasAuthToken()) {
      let token = TokenService.getAuthToken();
      let user = TokenService.parseAuthToken(token);
      setPage(1);
      setIsEnd(false);
      setTeamCode(user.team);
      setIsLoading(true);
      ArticlesService.getTeamArticles(user.team)
        .then((res) => {
          setArticles(res);
        })
        .then(() => {
          ArticlesService.getUserSavedArticles().then((articles) => {
            setIsLoading(false);
            let userSavedArticles = [];
            for (const article of articles) {
              userSavedArticles.push(article.id);
            }
            setUserArticles(userSavedArticles);
          });
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

  const handleArticleSave = useCallback((id) => {
    setIsLoading(true);
    ArticlesService.saveArticle(id)
      .then(() => {
        ArticlesService.getUserSavedArticles().then((articles) => {
          setIsLoading(false);
          let userSavedArticles = [];
          for (const article of articles) {
            userSavedArticles.push(article.id);
          }
          setUserArticles(userSavedArticles);
        });
      })
      .catch((res) => {
        setError(res.error.message);
      });
  }, []);

  const handleFilter = useCallback(
    (filterTeamCode) => {
      window.scrollTo(0, 0);
      setIsEnd(false);
      setPage(1);
      setTeamCode(filterTeamCode);
      setIsLoading(true);
      ArticlesService.getTeamArticles(filterTeamCode, page)
        .then((res) => {
          setIsLoading(false);
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

  const generateArticles = () => {
    if (TokenService.hasAuthToken()) {
      return articles.map((article) => (
        <LargeArticleCard
          key={article.id}
          article={article}
          handleArticleSave={handleArticleSave}
          loggedIn={true}
          isSaved={userArticles.includes(article.id) ? true : false}
        />
      ));
    } else {
      return articles.map((article) => (
        <LargeArticleCard key={article.id} article={article} />
      ));
    }
  };

  return (
    <div className="desktop-news-page">
      {isLoading && <SoccerLoadingIndicator />}
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}

      <TeamFilterSidebar handleFilter={handleFilter} currTeam={teamCode} />

      {!teamCode && <EmptyNewsMessage />}
      {articles.length >= 1 && page ? (
        <ArticleList
          handleNextClick={handleNextClick}
          page={page}
          handlePrevClick={handlePrevClick}
          atEnd={isEnd}
        >
          {!isEnd && generateArticles()}
        </ArticleList>
      ) : null}
      {teamCode && articles.length < 1 ? <NoArticlesMessage /> : null}
    </div>
  );
};

export default DesktopNewsPage;
