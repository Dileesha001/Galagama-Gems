// --- src/components/Marketplace.jsx ---

import React from 'react';
import { FaStore, FaGavel } from 'react-icons/fa'; // Icons

const Marketplace = () => {
  return (
    <section id="marketplace" className="section section-alt">
      <div className="container">
        <div className="section-title">
          <h2>🛍️ Dynamic Marketplace</h2>
          <p>Buy, Sell, Trade, or Design – All in One Place</p>
        </div>
        
        <div className="marketplace-grid">
          <div className="marketplace-card">
            <FaStore className="icon" />
            <h3>Buy & Sell Jewelry</h3>
            <p>
              List your custom creations or browse unique jewelry pieces from others.
            </p>
          </div>
          <div className="marketplace-card">
            <FaGavel className="icon" />
            <h3>Bid & Sell Gems</h3>
            <p>
              Gem owners can bid and sell their rough or cut gems directly to jewelers 
              and collectors — no middlemen, a key feature of our B2B auction system[cite: 24, 63].
            </p>
          </div>
        </div>
        
        <div className="marketplace-cta">
          <a href="#marketplace" className="btn btn-primary">Visit Marketplace</a>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;