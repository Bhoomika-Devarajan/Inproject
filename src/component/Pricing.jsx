import React, { useState } from 'react';
import './Pricing.css'; // Assuming you have a CSS file for custom styling

const Pricing = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <section className={`pricing ${darkMode ? 'dark' : 'light'}`}>
      <div className="toggle-container">
        <button className="toggle-button" onClick={toggleDarkMode}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
      <h2>Our Pricing</h2>
      <div className="pricing-cards">
        <div className="card">
          <h3>Basic Plan</h3>
          <p>$9.99/month</p>
          <p className="tooltip">Includes essential features.</p>
          <button className="button">Select Plan</button>
        </div>
        <div className="card popular">
          <span className="badge">Most Popular</span>
          <h3>Pro Plan</h3>
          <p>$19.99/month</p>
          <p className="tooltip">Advanced features for professionals.</p>
          <button className="button">Select Plan</button>
        </div>
        <div className="card">
          <h3>Enterprise Plan</h3>
          <p>$29.99/month</p>
          <p className="tooltip">All features for large organizations.</p>
          <button className="button">Select Plan</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
