import React, { useCallback } from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const RegisterRoute = (props) => {
  const handleRegisterAttempt = useCallback(() => {
    props.history.push('/login');
  }, [props.history]);

  return (
    <div className="register-page">
      <RegisterForm onRegisterSuccess={handleRegisterAttempt} />
    </div>
  );
};

export default RegisterRoute;
