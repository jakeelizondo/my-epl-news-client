import React, { useState } from 'react';
import TokenService from '../services/token-service';

const UserContext = React.createContext({
  user: {},
  error: null,
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  processLogin: () => {},
  processLogout: () => {},
});

export default UserContext;

export const UserProvider = (props) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});

  const setErrorHandler = (error) => {
    console.error(error);
    setError(error);
  };

  const clearErrorHandler = () => {
    setError(null);
  };

  const setUserHandler = (user) => {
    setUser(user);
  };

  const processLoginHandler = (authToken) => {
    TokenService.saveAuthToken(authToken);
    let jwtPayload = TokenService.parseAuthToken();

    setUser({
      name: jwtPayload.sub,
      team: jwtPayload.team,
    });
  };

  const processLogoutHandler = () => {
    TokenService.clearAuthToken();
    setUser({});
  };

  return (
    <UserContext.Provider
      value={{
        user,
        error,
        setError: setErrorHandler,
        clearError: clearErrorHandler,
        setUser: setUserHandler,
        processLogin: processLoginHandler,
        processLogout: processLogoutHandler,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
