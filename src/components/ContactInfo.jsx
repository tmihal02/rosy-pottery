import React from 'react';
import './ContactInfo.css';
import NewsletterForm from './NewsletterForm';

const ContactInfo = () => {
  return (
    <div className="contact-information">
      <p><strong>Telefon:</strong> +385 95 582 1641</p>
      <p><strong>Email:</strong> teamih@gmail.com</p>
      <p><strong>Adresa:</strong> 21000 Split, Hrvatska</p>
      
      <div className="social-links">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src="/facebook.png" alt="Facebook" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src="/insta.png" alt="Instagram" className="social-icon" />
        </a>
      </div>

      <div className="additional-links">
        <a href="/o-nama">O nama</a> | 
        <a href="/uvjeti-koristenja">Uvjeti korištenja i prodaje</a>
      </div>
        
    </div>
  );
};

export default ContactInfo;
