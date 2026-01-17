import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="greeting">Hello, I'm</span>
            <h1 className="hero-title">
              <span className="name-highlight">Daniel Obeng</span>
            </h1>
            <h2 className="hero-subtitle">
                Aeronautical & Mechanical Engineer
            </h2>
            <p className="hero-description">
              Experienced in aircraft component design, structural analysis, and Design for Manufacturing 
              and Assembly (DFMA) with expertise in translating user requirements into engineering specifications. 
              Proven track record delivering cost-effective, high-quality aerospace products, including saving 
              a previous employer $200,000 on rework through improved design processes, tolerance management, 
              and manufacturing documentation.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </button>
              {/* Add your resume PDF to public/files/ folder and uncomment below */}
              {/* <a 
                href="/files/resume.pdf" 
                className="btn btn-outline"
                download
              >
                Download Resume
              </a> */}
            </div>
          </div>
          
          <div className="hero-image">
            <img src="/images/ProfilePic.jpg" alt="Daniel Obeng" />
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
