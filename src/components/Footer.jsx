import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="footer-container">
      <p className="footer-text">
        © {currentYear} Copyright. Made with ❤️ by{' '}
        <a 
          href="https://www.instagram.com/panduz33" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-link"
        >
          Pandu
        </a>
      </p>
    </div>
  );
}

export default Footer;