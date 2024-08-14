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
        <div className={`card ${darkMode ? 'dark' : 'light'}`}>
          <h3>Basic Plan</h3>
          <p>$9.99/month</p>
          <p className="tooltip">Includes essential features.</p>
          <button className="button">Select Plan</button>
        </div>
        <div className={`card popular ${darkMode ? 'dark' : 'light'}`}>
          <span className="badge">Most Popular</span>
          <h3>Pro Plan</h3>
          <p>$19.99/month</p>
          <p className="tooltip">Advanced features for professionals.</p>
          <button className="button">Select Plan</button>
        </div>
        <div className={`card ${darkMode ? 'dark' : 'light'}`}>
          <h3>Enterprise Plan</h3>
          <p>$29.99/month</p>
          <p className="tooltip">All features for large organizations.</p>
          <button className="button">Select Plan</button>
        </div>
      </div>
   
      <div className="pricing-container">
        <h2 className="pricing-title">API Pricing</h2>
        <p className="pricing-description">
          Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
        </p>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>API</th>
              <th>Model</th>
              <th>Price per 1K Tokens</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>OpenAI</td>
              <td>GPT-3.5</td>
              <td>$0.002</td>
            </tr>
            <tr>
              <td>OpenAI</td>
              <td>GPT-4</td>
              <td>$0.03</td>
            </tr>
            <tr>
              <td>Together AI</td>
              <td>Llama-2-70b</td>
              <td>$0.0008</td>
            </tr>
            <tr>
              <td>Together AI</td>
              <td>Llama-2-13b</td>
              <td>$0.0006</td>
            </tr>
          </tbody>
        </table>
        <div className="additional-info">
          <p><strong>Token Estimation</strong></p>
          <p>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
          <p><strong>Billing</strong></p>
          <p>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
