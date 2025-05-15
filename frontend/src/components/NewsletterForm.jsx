import React from 'react';
import './NewsletterForm.css';

const NewsletterForm = () => {
  return (
    <div className="newsletter-container">
      
      <p>
        Prijavite se na naš newsletter 
      </p>

      <form className="newsletter-form">
        <div className="input-group">
          <input type="email" placeholder="Vaša e-mail adresa...*" required />
        </div>
        <div className="input-group">
          <input type="text" placeholder="Vaše ime..." />
        </div>
        <div className="checkbox-group">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">
            Slažem se s <a href="/uvjeti-koristenja">Uvjetima korištenja</a>.*
          </label>
        </div>
        <button type="submit" className="subscribe-button">
          PRETPLATITE SE
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
