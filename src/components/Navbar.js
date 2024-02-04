// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <strong>Humza Shah | Software Engineer</strong>
        </Link>
      </div>

      <div id="navbar" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/Resume" className="navbar-item">
            Resume
          </Link>
          <Link to="/AboutMe" className="navbar-item">
            About Me
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
