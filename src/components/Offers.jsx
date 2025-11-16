// --- src/components/Offers.jsx ---

import React from 'react';

const Offers = () => {
  return (
    <section id="offers" className="offers-section">
      <div className="container">
        <h2 className="fade-in">💰 Only Once a Year — 50% Off!</h2>
        <p className="fade-in" style={{animationDelay: '0.2s'}}>
          Hurry! Limited-time sale for our loyal customers.
        </p>
        
        <div className="offers-grid fade-in" style={{animationDelay: '0.4s'}}>
          <span className="offer-item">Gold from $350</span>
          <span className="offer-item">White Gold from $200</span>
          <span className="offer-item">Rose Gold from $250</span>
        </div>
        
        <a href="#offers" className="btn btn-primary fade-in" style={{animationDelay: '0.6s'}}>
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Offers;