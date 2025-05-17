import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-section company">
      <h4>Any Time Movers AU</h4>
      <p>Your trusted partner for stress-free moving.</p>
      <p>© {new Date().getFullYear()} Any Time Movers AU. All rights reserved.</p>
    </div>

    <div className="footer-section links">
      <h4>Quick Links</h4>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/quote">Get a Quote</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>

    <div className="footer-section contact">
      <h4>Contact Us</h4>
      <a href="tel:0469303269">📞 0469303269</a>
      <p>✉️ info@anytimemovers.com.au</p>
      <p>🏢 Munno Para, Adelaide</p>
    </div>

    <div className="social-bar">
      <a href="https://www.facebook.com/profile.php?id=61570093314772" target="_blank" rel="noreferrer">
        <img src="facebook.svg" alt="Facebook" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <img src="instagram.svg" alt="Instagram" />
      </a>
      <a href="https://www.tiktok.com/@anytimemovers0469303269" target="_blank" rel="noreferrer">
        <img src="tiktok.svg" alt="TikTok" />
      </a>
    </div>

  </footer>
);

export default Footer;
