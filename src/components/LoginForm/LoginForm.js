import React, { useContext, useState } from 'react';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext';
import './LoginForm.css';
import ErrorModal from '../UI/ErrorModal/ErrorModal';
import LoadingIndicator from '../UI/LoadingIndicator/LoadingIndicator';

const LoginForm = (props) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const userContext = useContext(UserContext);

  const clear = () => {
    setError(null);
    setIsLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    let { username, password } = e.target;

    AuthApiService.postlogin({
      username: username.value,
      password: password.value,
    })
      .then((response) => {
        setIsLoading(false);
        userContext.processLogin(response.token);
        props.onLoginSuccess();
      })
      .catch((response) => {
        setIsLoading(false);
        setError(response.error.message);
      });
  };

  return (
    <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <div className="login-input">
        <label htmlFor="login-username-input">Username</label>
        <input id="login-username-input" name="username" required />
      </div>
      <div className="login-input">
        <label htmlFor="login-password-input">Password</label>
        <input
          id="login-password-input"
          name="password"
          type="password"
          required
        />
      </div>
      <button>Login</button>
      {isLoading && <LoadingIndicator />}
    </form>
  );
};

export default LoginForm;
