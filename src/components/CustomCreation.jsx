// --- src/components/CustomCreation.jsx ---

import React from 'react';

const CustomCreation = () => {
  return (
    <section id="custom" className="section">
      <div className="container">
        <div className="section-title">
          <h2>💎 Custom Creation, Simplified</h2>
          <p>Turn your imagination into a masterpiece.</p>
        </div>
        
        <div className="custom-creation">
          <div className="custom-creation-content">
            <h3>3D Design Studio</h3>
            <p>
              Design your dream jewelry piece online. Choose your metal, select your stone, 
              and customize every detail with our intuitive 3D tools. 
              This connects to the core business plan of a proprietary 3D studio[cite: 22, 53].
            </p>
            
            <h3>Expert Craftsmanship</h3>
            <p>
              We connect you with a global network of skilled jewelers who craft your design 
              to the highest standards, as outlined in our Creator Network model[cite: 23, 54].
            </p>
          </div>
          
          <div className="custom-creation-offer">
            <h3>🎁 20% OFF</h3>
            <p>for the first 100 customers!</p>
            <a href="#custom" className="btn">Try 3D Design Studio</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomCreation;