import config from '../config';

const ArticlesService = {
  getTeamArticles(team) {
    return fetch(`${config.API_ENDPOINT}/articles/${team}`, {
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
};

export default ArticlesService;
