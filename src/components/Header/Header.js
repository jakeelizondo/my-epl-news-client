import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import TokenService from '../../services/token-service';
import './Header.css';

const Header = (props) => {
  const userContext = useContext(UserContext);

  const handleLogoutClick = () => {
    userContext.processLogout();
  };

  let content = (
    <nav className="header-nav">
      <Link to="/news">News</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Sign up</Link>
    </nav>
  );

  if (TokenService.hasAuthToken()) {
    content = (
      <div className="header-login-nav">
        <nav className="header-nav">
          <Link to="/news">News</Link>
          <Link to="/saved-news">My Saved</Link>
          <Link to="/account">Account</Link>
          <Link onClick={handleLogoutClick} to="/">
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  return (
    <header className={'header'}>
      <h1 className="header-title ">
        <Link to="/">My EPL News</Link>
      </h1>
      {content}
    </header>
  );
};

export default Header;
