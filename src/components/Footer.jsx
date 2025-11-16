// --- src/components/Footer.jsx ---

import React from 'react';
import { FaGlobe, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: About */}
          <div className="footer-col">
            <h4>Galagama Jewelry</h4>
            <p>
              The smart way to buy, sell, and value jewelry. Create, customize, and trade 
              with confidence and craftsmanship.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#custom">Custom Design</a></li>
              <li><a href="#marketplace">Marketplace</a></li>
              <li><a href="#offers">Offers</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>
          
          {/* Column 3: Contact Info */}
          <div className="footer-col">
            <h4>📞 Contact Information</h4>
            <ul>
              <li>
                <FaGlobe className="icon" />
                <a href="http://www.galagamagemandjewellery.com" target="_blank" rel="noopener noreferrer">
                  www.galagamagemandjewellery.com
                </a>
              </li>
              <li>
                <FaEnvelope className="icon" />
                <a href="mailto:info@galagamagemandjewellery.com">
                  info@galagamagemandjewellery.com
                </a>
              </li>
              <li>
                <FaPhone className="icon" /> +94 77 123 4567
              </li>
              <li>
                <FaMapMarkerAlt className="icon" /> 45 Main Street, Colombo, Sri Lanka
              </li>
            </ul>
          </div>
          
          {/* Column 4: Social Media */}
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Pinterest"><FaPinterest /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Galagama Jewelry. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;