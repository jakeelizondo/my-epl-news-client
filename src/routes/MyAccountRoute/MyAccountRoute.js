import React, { useState, useContext } from 'react';
import AccountChangeForm from '../../components/AccountChangeForm/AccountChangeForm';
import AccountDeleteForm from '../../components/AccountDeleteForm/AccountDeleteForm';
import UserContext from '../../contexts/UserContext';
import './MyAccountRoute.css';

const MyAccountRoute = (props) => {
  const [changeVal, setChangeVal] = useState(null);
  const [isChanging, setIsChanging] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const userContext = useContext(UserContext);

  const handleChangeVal = (value) => {
    setIsChanging(true);
    setChangeVal(value);
  };

  const clear = () => {
    setIsChanging(false);
    setIsDeleting(false);
    setChangeVal(null);
  };

  const handleSuccess = () => {
    setIsChanging(false);
    setChangeVal(null);
    userContext.processLogout();
  };

  return (
    <div className="account-options">
      <button
        className="account-options-button"
        onClick={() => handleChangeVal('team')}
      >
        Change Favorite Team
      </button>
      <button
        className="account-options-button"
        onClick={() => handleChangeVal('username')}
      >
        Change Username
      </button>
      <button
        className="account-options-button"
        onClick={() => handleChangeVal('password')}
      >
        Change Password
      </button>

      <button
        className="account-options-button"
        onClick={() => setIsDeleting(true)}
      >
        Delete Account
      </button>
      {isChanging && (
        <AccountChangeForm
          changing={changeVal}
          onSuccess={handleSuccess}
          clear={clear}
        />
      )}
      {isDeleting && (
        <AccountDeleteForm onSuccess={handleSuccess} clear={clear} />
      )}
    </div>
  );
};

export default MyAccountRoute;
