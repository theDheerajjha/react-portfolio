import React from 'react';
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="https://github.com/theDheerajjha" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/dheeraj-jha-65b2231b7" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/write4dheeraj" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <p className="footer-text">© 2023 Dheeraj Jha. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
