import React from 'react';
import './App.css';
import logo from './logo.png';

function Nav() {
    return (
        <div>
        <div className="topbarstyle">
        <div style={{ display: 'flex', justifyContent: 'left' }}>
            <a href="/" className="logo">
            <img src={logo} itemprop="logo" alt="Mozzarita Inc." />
            </a>
          </div>
          <div className="menu" style={{ display: 'flex', justifyContent: 'center' }}>
            <a href="/" className="navstyle">
              Home
            </a>
            <a href="/about" className="navstyle">
              About
            </a>
            <a href="/contact" className="navstyle">
              Contact
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Nav;