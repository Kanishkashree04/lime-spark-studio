import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Slash Labs</h3>
            <p className="footer-description">
              Empowering businesses through innovative SAP solutions and cutting-edge open-source development.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <nav className="footer-nav">
              <Link to="/" className="footer-link">Home</Link>
              <Link to="/about" className="footer-link">About</Link>
              <Link to="/products" className="footer-link">Products</Link>
              <Link to="/contact" className="footer-link">Contact</Link>
            </nav>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="footer-contact">
              <p>Sivakasi, Tamil Nadu, India</p>
              <p>contact@slashlabs.in</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Slash Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;