import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="/logo.png" alt="Any Time Movers AU" className="logo" />
        </Link>
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/services" onClick={toggleMenu}>Services</Link>
        <Link to="/quote" onClick={toggleMenu}>Get a Quote</Link>
        <Link to="/about" onClick={toggleMenu}>About Us</Link>
        <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
