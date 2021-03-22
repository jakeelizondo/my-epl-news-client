import React, { useState } from 'react';
import UserAccountService from '../../services/user-account-service';
import { TEAMS } from '../../team-helpers/TEAMS';
import LoadingIndicator from '../UI/LoadingIndicator/LoadingIndicator';
import './AccountChangeForm.css';

const AccountChangeForm = (props) => {
  const [newVal, setNewVal] = useState('');
  const [confirmVal, setConfirmVal] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitAccountChange = () => {
    setIsLoading(true);
    const changeObj = { [props.changing]: newVal };
    UserAccountService.updateUserDetails(changeObj)
      .then((response) => {
        setIsLoading(false);
        if (response) {
          setNewVal('');
          setConfirmVal('');
          props.onSuccess();
        }
      })
      .catch((res) => {
        setIsLoading(false);
        setError(res.error.message);
      });
  };

  const getChangeFields = () => {
    if (props.changing === 'password') {
      return (
        <div className="account-change-inputs">
          <label htmlFor="new-entry">Enter new {props.changing}:</label>
          <input
            id="new-entry"
            type="password"
            value={newVal}
            onChange={(e) => setNewVal(e.target.value)}
          />
          <label htmlFor="new-entry-confirm">
            Confirm new {props.changing}:
          </label>
          <input
            id="new-entry-confirm"
            type="password"
            value={confirmVal}
            onChange={(e) => setConfirmVal(e.target.value)}
          />
        </div>
      );
    } else if (props.changing === 'username') {
      return (
        <div className="account-change-inputs">
          <label htmlFor="new-entry">Enter new {props.changing}:</label>
          <input
            id="new-entry"
            type="text"
            value={newVal}
            onChange={(e) => setNewVal(e.target.value)}
          />
        </div>
      );
    } else {
      return (
        <div className="account-change-inputs">
          <label htmlFor="new-entry">Select new favorite team:</label>
          <select
            id="new-entry"
            name="new-team-select"
            onChange={(e) => setNewVal(e.target.value)}
            required
          >
            <option></option>
            {TEAMS.map((team) => (
              <option key={team.teamcode} value={team.teamcode}>
                {team.teamname}
              </option>
            ))}
          </select>
        </div>
      );
    }
  };

  return (
    <React.Fragment>
      <div className="backdrop" onClick={props.clear} />
      <div className="account-change-modal">
        <h2>Change {props.changing}</h2>
        <div className="account-change-message">
          <p>For security purposes you will be logged out on success.</p>
          {getChangeFields()}
        </div>
        {error ? <p style={{ color: '#e90052' }}>Error: {error}</p> : null}

        <div className="account-change-modal__actions">
          {props.changing === 'password' && newVal !== confirmVal ? (
            <p style={{ color: '#e90052' }}>Passwords must match</p>
          ) : null}
          <button
            type="button"
            onClick={handleSubmitAccountChange}
            disabled={
              !newVal ||
              (props.changing === 'password' && newVal !== confirmVal)
            }
          >
            Submit
          </button>
          {isLoading && <LoadingIndicator />}
        </div>
      </div>
    </React.Fragment>
  );
};

export default AccountChangeForm;
