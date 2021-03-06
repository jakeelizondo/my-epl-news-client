import config from '../config';
import TokenService from './token-service';

const ArticlesService = {
  getTeamArticles(team, page = 1) {
    return fetch(`${config.API_ENDPOINT}/articles/${team}?page=${page}`, {
      headers: {
        'content-type': 'application/json',
      },
    }).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => Promise.reject(error));
      }
      return response.json();
    });
  },

  getUserSavedArticles() {
    return fetch(`${config.API_ENDPOINT}/user/articles`, {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => Promise.reject(error));
      }
      return response.json();
    });
  },

  deleteSavedArticle(article_id) {
    return fetch(`${config.API_ENDPOINT}/user/articles`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({ article_id }),
    }).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => Promise.reject(error));
      }
    });
  },

  saveArticle(article_id) {
    return fetch(`${config.API_ENDPOINT}/user/articles`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({ article_id }),
    }).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => Promise.reject(error));
      }
    });
  },
};

export default ArticlesService;
