import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import oakwoodLogo from '../Images/oakwood-logo.png';
import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <img src={oakwoodLogo} alt="Oakwood Group Logo" className="logo-image" />
            </div>
            <div className="logo-text">
              <h1>OAKWOOD GROUP</h1>
              <p>Construction • Interior Design • Joinery • Boutique</p>
            </div>
          </Link>
          <div className="header-right">
            <nav className="nav">
              <Link to="/construction" className="nav-link">Construction</Link>
              <Link to="/design" className="nav-link">Design</Link>
              <Link to="/joinery" className="nav-link">Joinery</Link>
              <Link to="/boutique" className="nav-link">Boutique</Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
