import React, { Component } from 'react';
import logo from './XO_Logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="Header-body">
          <img src={logo} className="Header-logo" alt="logo" />
          <p>
            Xo game
          </p>
        </header>
      </div>
    );
  }
}

export default Header;
