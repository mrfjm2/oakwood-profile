import React from 'react';
import './Header.css';
import oakwoodLogo from '../Images/oakwood-logo.png';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">
              <img src={oakwoodLogo} alt="Oakwood Group Logo" className="logo-image" />
            </div>
            <div className="logo-text">
              <h1>OAKWOOD GROUP</h1>
              <p>Construction • Interior Design • Joinery • Boutique</p>
            </div>
          </div>
          <div className="header-right">
            <nav className="nav">
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
