// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import bulma from 'bulma/css/bulma.min.css';
import './Navbar.css';


function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
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
