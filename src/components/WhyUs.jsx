// --- src/components/WhyUs.jsx ---

import React from 'react';
import { FaCheckCircle, FaUsers, FaLock, FaGift } from 'react-icons/fa';

const WhyUs = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title">
          <h2>🧭 Why Choose Galagama Jewelry</h2>
        </div>
        
        <div className="why-us-grid">
          <div className="why-us-item">
            <FaUsers className="icon" />
            <div>
              <h3>Trusted global jeweler network</h3>
            </div>
          </div>
          <div className="why-us-item">
            <FaCheckCircle className="icon" />
            <div>
              <h3>Precision 3D customization tools</h3>
            </div>
          </div>
          <div className="why-us-item">
            <FaLock className="icon" />
            <div>
              <h3>Safe and transparent trading</h3>
            </div>
          </div>
          <div className="why-us-item">
            <FaGift className="icon" />
            <div>
              <h3>Exclusive offers for loyal members</h3>
            </div>
          </div>
        </div>
        
        <div className="why-us-cta">
          <a href="#contact" className="btn btn-secondary">Join Now</a>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;