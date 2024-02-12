import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your custom CSS file

function Navbar() {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <strong>Humza Shah | Software Engineer</strong>
        </Link>
      </div>

      <div id="navbar" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/" className="button">
                <strong>Home</strong>
              </Link>
              <Link to="/Resume" className="button">
                <strong>Resume</strong>
              </Link>
              <Link to="/AboutMe" className="button">
                <strong>About Me</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
