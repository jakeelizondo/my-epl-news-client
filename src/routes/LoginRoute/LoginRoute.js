import React, { useCallback } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginRoute.css';

const LoginRoute = (props) => {
  const handleLoginAttempt = useCallback(() => {
    props.history.push('/news');
  }, [props.history]);

  return (
    <div className="login-page">
      <h2 className="login-heading"> Login to view your news</h2>
      <LoginForm onLoginSuccess={handleLoginAttempt} />
    </div>
  );
};

export default LoginRoute;
