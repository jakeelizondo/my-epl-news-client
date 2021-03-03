import React from 'react';
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

export class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    const state = { user: {}, error: null };

    let jwtPayload = TokenService.parseAuthToken();

    if (jwtPayload) {
      state.user = {
        id: jwtPayload.user_id,
        name: jwtPayload.sub,
        team: jwtPayload.team,
      };
    }
    this.state = state;
  }

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setUser = (user) => {
    this.setState({ user });
  };

  processLogin = (authToken) => {
    TokenService.saveAuthToken(authToken);
    let jwtPayload = TokenService.parseAuthToken();
    this.setUser({
      id: jwtPayload.user_id,
      name: jwtPayload.sub,
      team: jwtPayload.team,
    });
  };

  processLogout = () => {
    TokenService.clearAuthToken();
    this.setUser({});
  };

  render() {
    const value = {
      user: this.state.user,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      processLogin: this.processLogin,
      processLogout: this.processLogout,
    };

    return (
      <UserContext.Provider value={value}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
