import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import TokenService from '../../../services/token-service';
import UserContext from '../../../contexts/UserContext';
import './Sidebar.css';

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const userContext = useContext(UserContext);

  const handleLogoutClick = () => {
    setMenuOpen(false);
    userContext.processLogout();
  };

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  let content = (
    <React.Fragment>
      <div>
        <Link
          className={'menu-item'}
          onClick={() => handleCloseMenu()}
          to={'/news'}
        >
          News
        </Link>
      </div>
      <br />
      <div>
        <Link
          className={'menu-item'}
          onClick={() => handleCloseMenu()}
          to={'/login'}
        >
          Login
        </Link>
      </div>

      <br />
      <div>
        <Link
          className={'menu-item'}
          onClick={() => handleCloseMenu()}
          to={'/register'}
        >
          Sign Up
        </Link>
      </div>
    </React.Fragment>
  );

  if (TokenService.hasAuthToken()) {
    content = (
      <React.Fragment>
        <div>
          <Link className={'menu-item'} onClick={handleCloseMenu} to={'/news'}>
            News
          </Link>
        </div>
        <br />
        <div>
          <Link
            className={'menu-item'}
            onClick={handleCloseMenu}
            to={'/saved-news'}
          >
            My Saved
          </Link>
        </div>
        <br />
        <div>
          <Link
            className={'menu-item'}
            onClick={handleCloseMenu}
            to={'/account'}
          >
            Account
          </Link>
        </div>
        <br />
        <div>
          <Link className={'menu-item'} onClick={handleLogoutClick} to={'/'}>
            Logout
          </Link>
        </div>
      </React.Fragment>
    );
  }

  return (
    <Menu
      right
      className={'header-links'}
      width={'50%'}
      isOpen={menuOpen}
      onStateChange={(state) => handleStateChange(state)}
    >
      {content}
    </Menu>
  );
};

export default Sidebar;
