import React, { useState } from 'react';
import UserAccountService from '../../services/user-account-service';
import LoadingIndicator from '../UI/LoadingIndicator/LoadingIndicator';
import './AccountDeleteForm.css';

const AccountDeleteForm = (props) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAccountDelete = () => {
    setIsLoading(true);
    UserAccountService.deleteUser()
      .then((response) => {
        setIsLoading(false);
        if (response) {
          props.onSuccess();
        }
      })
      .catch((res) => {
        setIsLoading(false);
        setError(res.error.message);
      });
  };

  return (
    <React.Fragment>
      <div className="delete-backdrop" onClick={props.clear} />
      <div className="account-delete-modal">
        <h2>Are you sure you want to go?</h2>
        <div className="account-delete-message">
          <p>
            We'll miss you! You are welcome to continue using the news page to
            stay up to date with your favorite team.
          </p>
        </div>
        {error ? <p style={{ color: '#e90052' }}>Error: {error}</p> : null}
        <div className="account-delete-modal__actions">
          <button type="button" onClick={handleAccountDelete}>
            Delete Account
          </button>
          {isLoading && <LoadingIndicator />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AccountDeleteForm;
