import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header-body">
          <img src={logo} className="Header-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="Header-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Header;
