// --- src/components/Hero.jsx ---

import React from 'react';
import heroBg from '../assets/hero-background.jpg'; // Imports the Figma hero image

const Hero = () => {
  return (
    <section 
      id="home" 
      className="hero" 
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container">
        <div className="hero-content">
          <h1 className="fade-in">
            ✨ The Smart Way to Buy, Sell & Value Jewelry
          </h1>
          <p className="subtitle fade-in">
            Create, customize, and trade stunning jewelry with confidence and craftsmanship.
          </p>
          <div className="hero-buttons fade-in">
            <a href="#custom" className="btn btn-primary">Start Designing</a>
            <a href="#marketplace" className="btn btn-secondary">Explore Marketplace</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;