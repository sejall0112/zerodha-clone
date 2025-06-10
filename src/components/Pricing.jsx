import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <section className="pricings">
      <div className="pricing-left">

        <div className="pricing-block">
          <h2>Unbeatable pricing</h2>
          <p>
            We pioneered the concept of discount broking and price transparency in India. 
            Flat fees and no hidden charges.
          </p>
        </div>   

        <div className="pricing-links">
            <a href="/explore">See pricing →</a>
        </div>

      </div>

      <div className="pricing-right">
        <img src="./pricing-zero.svg" alt="Zerodha apps ecosystem" />
        <p>Free account opening</p>
        <img src="./pricing-zero.svg" alt="Zerodha apps ecosystem" />
        <p>Free equity delivery and direct mutual funds</p>
        <img src="./pricing-20.svg" alt="Zerodha apps ecosystem" />
        <p> Intraday and F&O</p>
      </div>
      
      <div className="varsity-section">
        <div className="varsity-img">
            <img src= "./varsity.svg" alt="Varsity Logo"/>
        </div>
        <div className="varsity-text">
        <div className="varsity-block">
          <h2>Free and open market education</h2>
          <p>
            Varsity, the largest online stock market education book in the world 
            covering everything from the basics to advanced trading.
          </p>
        <div className="pricing-links">
            <a href="/explore">Varsity →</a>
        </div>
          <p>
            TradingQ&A, the most active trading and investment community in India 
            for all your market related queries.
          </p>
        <div className="pricing-links">
            <a href="/explore">TradingQ&A →</a>
            </div>
        </div>
        </div>
        </div>

        <div className="login-content">
            <h1 className="login-title">Open a Zerodha account</h1>
            <p className="login-subtitle">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
            </p>
            <a href="/signup" className="login-button">Sign up for free</a>
      </div>

    </section>
  );
};

export default Pricing;
