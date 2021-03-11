import React from 'react';
import './NotFoundRoute.css';
import offsidesIcon from '../../assets/icons/008-referee.png';

const NotFoundRoute = () => {
  return (
    <div className="not-found-page">
      <img src={offsidesIcon} alt="page-not-found-icon" />
      <h3>Oops! Looks like the page you are looking for does not exist</h3>
    </div>
  );
};

export default NotFoundRoute;
