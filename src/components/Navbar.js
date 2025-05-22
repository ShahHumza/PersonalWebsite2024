import React from 'react';
import { Link } from 'react-router-dom';
import './Pages/css/Navbar.css'; // Import your custom CSS file

function Navbar() {
  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <span className="has-text-weight-semibold is-size-5">Humza Shah</span>
        </Link>

        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>

          <Link to="/projects" className="navbar-item">
            Projects
          </Link>

          <Link to="/Resume" className="navbar-item">
            Resume
          </Link>

          <Link to="/about" className="navbar-item">
            About
          </Link>

          <Link to="/blog" className="navbar-item">
            Blog
          </Link>

          <Link to="/contact" className="navbar-item">
            Contact
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="button is-light">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="button is-light">
                <span className="icon">
                  <i className="fab fa-linkedin-in"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;