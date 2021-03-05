import config from '../config';

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
};

export default ArticlesService;
