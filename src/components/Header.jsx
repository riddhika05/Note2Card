import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
            <h1>Note to Card</h1>
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li><Link to="/home" className="nav-link">Home</Link></li>
            <li><Link to="/notes" className="nav-link">Notes</Link></li>
            <li><Link to="/cards" className="nav-link">Cards</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 