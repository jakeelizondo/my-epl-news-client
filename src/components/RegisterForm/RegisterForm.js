import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TEAMS } from '../../team-helpers/TEAMS';
import AuthApiService from '../../services/auth-api-service';
import ErrorModal from '../UI/ErrorModal/ErrorModal';
import LoadingIndicator from '../UI/LoadingIndicator/LoadingIndicator';
import './RegisterForm.css';

const RegistrationForm = (props) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [enteredName, setEnteredName] = useState('');
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredTeam, setEnteredTeam] = useState('');

  const handleSubmit = (ev) => {
    setIsLoading(true);
    ev.preventDefault();

    let user = {
      username: enteredUsername,
      password: enteredPassword,
      name: enteredName,
      team: enteredTeam,
    };

    AuthApiService.postUser(user)
      .then((response) => {
        setIsLoading(false);
        setEnteredName('');
        setEnteredUsername('');
        setEnteredPassword('');
        setEnteredTeam('');
        props.onRegisterSuccess();
      })
      .catch((response) => {
        setIsLoading(false);
        setError(response.error.message);
      });
  };

  const clear = () => {
    setError(null);
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      {error && <ErrorModal onClose={clear}>{error}</ErrorModal>}
      <div className="registration-input">
        <label htmlFor="registration-name-input">Enter your name</label>
        <input
          id="registration-name-input"
          name="name"
          value={enteredName}
          onChange={(e) => setEnteredName(e.target.value)}
          required
        />
      </div>
      <div className="registration-input">
        <label htmlFor="registration-username-input">Choose a username</label>
        <input
          id="registration-username-input"
          name="username"
          value={enteredUsername}
          onChange={(e) => setEnteredUsername(e.target.value)}
          required
        />
      </div>
      <div className="registration-input">
        <label htmlFor="registration-password-input">Choose a password</label>
        <span className="tiny-text">
          (must contain at least 1 uppercase, 1 lowercase, 1 number, and 1
          special character)
        </span>
        <input
          id="registration-password-input"
          name="password"
          type="password"
          value={enteredPassword}
          onChange={(e) => setEnteredPassword(e.target.value)}
          required
        />
      </div>
      <div className="registration-input">
        <label htmlFor="registration-team-select">
          Select your favorite team
        </label>
        <select
          id="registration-team-select"
          name="favorite-team"
          value={enteredTeam}
          onChange={(e) => setEnteredTeam(e.target.value)}
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
      <button type="submit" className="red-back">
        Sign up
      </button>{' '}
      {isLoading && <LoadingIndicator />}
      <Link to="/login">Already have an account?</Link>
    </form>
  );
};

export default RegistrationForm;
