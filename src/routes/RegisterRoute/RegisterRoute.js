import React, { useCallback } from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './RegisterRoute.css';

const RegisterRoute = (props) => {
  const handleRegisterAttempt = useCallback(() => {
    props.history.push('/login');
  }, [props.history]);

  return (
    <div className="register-page">
      <h2 className="register-heading">Create your account</h2>
      <RegisterForm onRegisterSuccess={handleRegisterAttempt} />
    </div>
  );
};

export default RegisterRoute;
