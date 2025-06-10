import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="features-left">
        <h2>Trust with confidence</h2>

        <div className="feature-block">
          <h3>Customer-first always</h3>
          <p>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
        </div>

        <div className="feature-block">
          <h3>No spam or gimmicks</h3>
          <p>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{' '}
            <a href="/philosophies">Our philosophies.</a>
          </p>
        </div>

        <div className="feature-block">
          <h3>The Zerodha universe</h3>
          <p>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your
            needs.
          </p>
        </div>

        <div className="feature-block">
          <h3>Do better with money</h3>
          <p>
            With initiatives like <a href="/nudge">Nudge</a> and{' '}
            <a href="/switch">Kill Switch</a>, we don't just facilitate transactions,
            but actively help you do better with your money.
          </p>
        </div>
      </div>

      <div className="features-right">
        <img src="./ecosystem.png" alt="Zerodha apps ecosystem" />
            <div className="feature-links">
            <a href="/explore">Explore our products →</a>
            <a href="/demo">Try Kite demo →</a>
            </div>
      </div>

      <div className="press-logos">
        <img src="./press-logos.png" alt="Press Logos" />
      </div>
      
    </section>
  );
};

export default Features;
