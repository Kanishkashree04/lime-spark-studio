import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' }
  ];

  const servicesDropdownItems = [
    { path: '/services', label: 'All Services' },
    { path: '/services/technical', label: 'Technical' },
    { path: '/services/functional', label: 'Functional' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const closeDropdowns = () => {
    setIsServicesDropdownOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-text">Slash Labs</span>
        </Link>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={closeDropdowns}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Services Dropdown */}
          <div className="nav-dropdown">
            <button 
              className={`nav-link dropdown-toggle ${
                location.pathname.startsWith('/services') ? 'active' : ''
              }`}
              onClick={toggleServicesDropdown}
            >
              Services
              <ChevronDown 
                size={16} 
                className={`dropdown-icon ${isServicesDropdownOpen ? 'open' : ''}`} 
              />
            </button>
            
            <div className={`dropdown-menu ${isServicesDropdownOpen ? 'active' : ''}`}>
              {servicesDropdownItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`dropdown-item ${
                    location.pathname === item.path ? 'active' : ''
                  }`}
                  onClick={closeDropdowns}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;