import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Daniel Obeng</h3>
            <p className="footer-tagline">Aeronautical & Mechanical Engineer</p>
            <p className="footer-description">
              Dedicated to delivering innovative engineering solutions that make a difference.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map(link => (
                <li key={link.id}>
                  <button onClick={() => scrollToSection(link.id)}>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>📧 danielobeng016@gmail.com</li>
              <li>📱 +1 (864) 652-0059</li>
              <li>📍 Clemson, South Carolina</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/dkbobeng06" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/Daniel-eng06" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Daniel Obeng. All rights reserved.</p>
          <p className="footer-credit">
            Made to Design for Engineering Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
