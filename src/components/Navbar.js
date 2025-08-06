import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Uncommented to use Link

import './Pages/css/Navbar.css'; // Import the dedicated CSS file

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  // Function to toggle the mobile menu for responsiveness
  const toggleBurger = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          {/* Brand/Logo - Using a placeholder image for the logo */}
          {/* Replace 'https://placehold.co/40x40/007bff/ffffff?text=Logo' with your actual logo path */}
          <Link to="/" className="navbar-item logo-container"> {/* Changed <a> to Link */}
            <img src="https://placehold.co/40x40/007bff/ffffff?text=JS" alt="Logo" className="logo-image" />
          </Link>

          {/* Burger menu for mobile - Bulma's default responsive behavior */}
          <a
            role="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded={isActive ? 'true' : 'false'}
            onClick={toggleBurger}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        {/* Navbar menu - Aligned to the right */}
        <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-end custom-navbar-end"> {/* Added custom-navbar-end for specific alignment */}
            {/* Navigation Links */}
            <Link to="/" className="navbar-item"> {/* Changed <a> to Link */}
              Home
            </Link>
            <Link to="/about" className="navbar-item"> {/* Changed <a> to Link */}
              About
            </Link>
            <Link to="/projects" className="navbar-item"> {/* Changed <a> to Link */}
              Projects
            </Link>
            <Link to="/skills" className="navbar-item"> {/* Changed <a> to Link */}
              Skills
            </Link>
            <Link to="/golf" className="navbar-item"> {/* Changed <a> to Link */}
              Golf
            </Link>
            <Link to="/contact" className="navbar-item"> {/* Changed <a> to Link */}
              Contact
            </Link>
            {/* Removed social media buttons as per the image */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
