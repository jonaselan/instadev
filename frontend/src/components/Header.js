import React from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/header.scss'

import { logout } from '../services/auth';

import logo from '../assets/logo.svg'
import camera from '../assets/camera.svg'

const Header = (props) => {
  function handleLogout(){
    logout();
    // TODO: consertar isso
    // props.history.push("/signin");
  }

  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/" >
          <img src={logo} alt="instadev" />
        </ Link>
        <Link to="/new" >
          <img src={camera} alt="send" />
        </ Link>
      </div>
      <button type="button" onClick={() => handleLogout()}>
        Logout
      </button>
    </header>
  );
};

export default Header;
