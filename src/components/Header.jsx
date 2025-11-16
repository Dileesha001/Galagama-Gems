// --- src/components/Header.jsx ---

import React from 'react';
import logo from '../assets/logo.png'; // Imports your logo

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header-nav">
          <a href="#home" className="header-logo">
            <img src={logo} alt="Galagama Jewelry Logo" />
          </a>
          <ul className="header-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#custom">Custom Design</a></li>
            <li><a href="#marketplace">Marketplace</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;