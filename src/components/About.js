import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-label">Get to Know Me</span>
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Design & Manufacturing Engineer</h3>
            <p>
              I am an Aeronautical and Mechanical Engineer with experience in 
              aircraft structural design, CAD/CAM, composite materials, and DFMA principles. My approach 
              focuses on translating customer requirements into engineering specifications and creating 
              producible designs that meet performance requirements while optimizing for cost and quality.
            </p>
            <p>
              I have experience in GD&T tolerance analysis, manufacturing documentation, and design validation 
              that reduce rework and improve product quality. At Tormount Cimco Refrigeration Inc., I contributed to processes that 
              resulted in $20,000 in savings on rework costs. I work effectively in team 
              environments on engineering projects.
            </p>
            <p>
              I apply engineering principles and industry practices to solve technical problems. 
              I am committed to continuous learning and staying current with developments in 
              aerospace and mechanical engineering.
            </p>

            <div className="highlights">
              <div className="highlight-item">
                <div className="highlight-number">3+</div>
                <div className="highlight-text">Years Experience</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">6+</div>
                <div className="highlight-text">Projects Completed</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">5+</div>
                <div className="highlight-text">Certifications</div>
              </div>
            </div>

            <div className="detail-card">
              <h4>💡 Approach</h4>
              <p>
                Understanding customer needs and translating them into engineering specifications is 
                essential for successful product development. Designing for manufacturability from 
                the start reduces rework and ensures products meet requirements efficiently.
              </p>
            </div>
          </div>

          <div className="about-details">
            <div className="detail-card">
              <h4>🎯 Areas of Expertise</h4>
              <ul>
                <li>Design for Manufacturing and Assembly (DFMA)</li>
                <li>User Requirements to Engineering Metrics Translation</li>
                <li>CAD/CAM Design & Manufacturing</li>
                <li>Design & Manufacturing Solutions for Business Impact</li>
                <li>Process Optimization & Cost Reduction</li>
                <li>Quality Systems & Rework Prevention</li>
                <li>Aircraft Structural Design & Analysis</li>
                <li>Systems Integration & Product Development</li>
              </ul>
            </div>

            <div className="detail-card">
              <h4>🏆 Key Contributions</h4>
              <ul>
                <li>Contributed to systems implementation at Tormount Cimco Refrigeration Inc. that resulted in $20,000 savings on rework costs</li>
                <li>Worked on manufacturing process improvements</li>
                <li>Translated user requirements into engineering specifications</li>
                <li>Participated in cross-functional engineering project teams</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
