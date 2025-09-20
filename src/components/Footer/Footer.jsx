import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="giftsro-footer">
      <div className="footer-content">

        <div className="footer-brand">
          <p className="footer-tagline">
            Создан с заботой для <span className="brand-name">GiftsRo</span>
          </p>
        </div>

        <div className="footer-links">

          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-link telegram-link"
          >
            Telegram-канал
          </a>
          
          <a 
            href="#" 
            className="footer-link support-link"
          >
            Поддержка
          </a>
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;