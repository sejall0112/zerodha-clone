import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src="./hero.png" alt="Hero" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Invest in everything</h1>
        <p className="hero-subtitle">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
        </p>
        <a href="/signup" className="hero-button">Sign up for free</a>
      </div>
    </section>
  );
};

export default Hero;
