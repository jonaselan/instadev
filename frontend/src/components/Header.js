import React from 'react';

import '../stylesheets/header.css'

import logo from '../assets/logo.svg'
import camera from '../assets/camera.svg'

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <img src={logo} alt="instadev" />
        <img src={camera} alt="send" />
      </div>
    </header>
  );
}
