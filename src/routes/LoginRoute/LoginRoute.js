import React, { useCallback } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginRoute.css';

const LoginRoute = (props) => {
  const handleLoginAttempt = useCallback(() => {
    props.history.push('/news');
  }, [props.history]);

  return (
    <div className="login-page">
      <LoginForm onLoginSuccess={handleLoginAttempt} />
    </div>
  );
};

export default LoginRoute;
