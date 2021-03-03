import config from '../config';

const AuthApiService = {
  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/user`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => Promise.reject(error));
      }
      return response.json();
    });
  },

  postlogin({ username, password }) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => Promise.reject(error));
      }
      return response.json();
    });
  },
};

export default AuthApiService;
