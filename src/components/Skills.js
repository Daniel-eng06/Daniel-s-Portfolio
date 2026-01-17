import React from 'react';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'CATIA V5/V6 & Dassault Systèmes', level: 90, icon: '🔧' },
    { name: 'SolidWorks', level: 90, icon: '⚙️' },
    { name: 'AutoCAD', level: 88, icon: '📐' },
    { name: 'ANSYS (FEA/CFD)', level: 90, icon: '📊' },
    { name: 'MATLAB', level: 80, icon: '💻' },
    { name: 'Python', level: 75, icon: '🐍' },
    { name: 'Microsoft Office Suite', level: 92, icon: '📊' },
    { name: 'PDM/BIM360/Enovia', level: 82, icon: '📁' },
    { name: 'SAP', level: 85, icon: '💼' },
  ];

  const engineeringSkills = [
    { name: 'Structural Analysis', level: 90 },
    { name: 'Aerodynamics', level: 88 },
    { name: 'Thermodynamics', level: 85 },
    { name: 'Fluid Mechanics', level: 87 },
    { name: 'Manufacturing Processes', level: 93 },
    { name: 'Materials Science & Material Selection', level: 90 },
    { name: 'Systems Design', level: 86 },
    { name: 'Project Management', level: 88 },
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 92 },
    { name: 'Team Collaboration', level: 88 },
    { name: 'Technical Communication', level: 85 },
    { name: 'Project Leadership', level: 90 },
    { name: 'Critical Thinking', level: 90 },
    { name: 'Attention to Detail', level: 93 },
    { name: 'Time Management', level: 87 },
    { name: 'Stakeholder Engagement', level: 82 },
  ];

  const certifications = [
    {
      title: 'Certified CATIA Mechanical Designer Associate',
      issuer: 'Dassault Systèmes',
      year: 'Jan 2026',
      image: `${process.env.PUBLIC_URL}/images/cert-catia.jpg`
    },
    {
      title: 'Engineering Job Simulation',
      issuer: 'GE Aerospace',
      year: 'March 2025',
      image: `${process.env.PUBLIC_URL}/images/GE Certificate.png`
    },
    {
      title: 'Introduction to CAD, CAM, and Practical CNC Machining',
      issuer: 'Autodesk',
      year: 'Aug 2021',
      image: `${process.env.PUBLIC_URL}/images/cert-autodesk.jpg`
    },
    {
      title: 'Digitalization in Aerospace Industry',
      issuer: 'TUM Technische Universität München',
      year: 'Feb 2021',
      image: `${process.env.PUBLIC_URL}/images/cert-tum.jpg`
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <span className="section-label">What I Bring</span>
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="title-underline"></div>
        </div>

        <div className="skills-grid">
          {/* Technical Software Skills */}
          <div className="skills-category">
            <h3>
              <span className="category-icon">💻</span>
              Technical Software
            </h3>
            <div className="skills-list-compact">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item-compact">
                  <div className="skill-header-compact">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-container-compact">
                    <div className="skill-bar-compact" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Skills */}
          <div className="skills-category">
            <h3>
              <span className="category-icon">⚡</span>
              Engineering Competencies
            </h3>
            <div className="skills-list-compact">
              {engineeringSkills.map((skill, index) => (
                <div key={index} className="skill-item-compact">
                  <div className="skill-header-compact">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-container-compact">
                    <div className="skill-bar-compact secondary" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skills-category">
            <h3>
              <span className="category-icon">🤝</span>
              Professional & Soft Skills
            </h3>
            <div className="skills-list-compact">
              {softSkills.map((skill, index) => (
                <div key={index} className="skill-item-compact">
                  <div className="skill-header-compact">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-container-compact">
                    <div className="skill-bar-compact tertiary" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="certifications-section">
          <h3>
            <span className="category-icon">🏆</span>
            Professional Certifications
          </h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <div className="cert-image">
                  <img src={cert.image} alt={cert.title} />
                </div>
                <h4>{cert.title}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-year">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
