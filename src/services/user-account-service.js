import config from '../config';
import TokenService from './token-service';

const UserAccountService = {
  updateUserDetails(newValue) {
    return fetch(`${config.API_ENDPOINT}/user`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newValue),
    }).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => Promise.reject(error));
      }
      return response.ok;
    });
  },
  deleteUser() {
    return fetch(`${config.API_ENDPOINT}/user`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((response) => {
      if (!response.ok) {
        return response.json().then((error) => Promise.reject(error));
      }
      return response.ok;
    });
  },
};

export default UserAccountService;
