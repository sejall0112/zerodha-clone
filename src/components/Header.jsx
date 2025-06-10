import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="./zeroda-logo.svg" alt="Zerodha Logo" />
        </div>

        <nav className="nav-links">
          <a href="/signup">Signup</a>
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/pricing">Pricing</a>
          <a href="/support">Support</a>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        
      </div>

      {menuOpen && (
        <div className={`dropdown-menu ${menuOpen ? 'show' : ''}`}>
          <div className="top-section">
            <div className="menu-item">
              <img src="/kite-logo.svg" alt="Kite" className="icon" />
              <span>Kite<br /><small>Trading platform</small></span>
            </div>
            <div className="menu-item">
              <img src="/console.svg" alt="Console" className="icon" />
              <span>Console<br /><small>Backoffice</small></span>
            </div>
            <div className="menu-item">
              <img src="/kite-connect.svg" alt="Kite Connect" className="icon" />
              <span>Kite Connect<br /><small>Trading APIs</small></span>
            </div>
            <div className="menu-item">
              <img src="/coin.svg" alt="Coin" className="icon" />
              <span>Coin<br /><small>Mutual funds</small></span>
            </div>
          </div>

          <div className="bottom-section">
            <div className="column">
              <strong>Utilities</strong>
              <ul>
                <li>Calculators</li>
                <li>Brokerage calculator</li>
                <li>Margin calculator</li>
                <li>SIP calculator</li>
              </ul>
            </div>
            <div className="column">
              <strong>Updates</strong>
              <ul>
                <li>Z-Connect blog</li>
                <li>Circulars / Bulletin</li>
                <li>IPOs</li>
                <li>Markets</li>
              </ul>
            </div>
            <div className="column">
              <strong>Education</strong>
              <ul>
                <img src="/varsity.png" alt="Varsity" className="icon" />
                <li>Varsity</li>
                <img src="/tqna.png" alt="Trading Q&A" className="icon" />
                <li>Trading Q&A</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
