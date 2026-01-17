import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Mechanical Engineering (Design and Manufacturing)',
      institution: 'Clemson University',
      location: 'Clemson, United States',
      period: 'Aug 2024 - May 2026',
      gpa: '3.62/4.0',
      highlights: [
        'Focus: Design for Manufacturing and Assembly (DFMA)',
        'Focus: Aircraft Structures and Production Engineering',
        'Advanced coursework in CAD/CAM and aerospace manufacturing',
      ],
      icon: '🎓'
    },
    {
      degree: 'Bachelor of Engineering in Aeronautical Engineering (Aircraft Manufacturing)',
      institution: 'Shenyang Aerospace University',
      location: 'Shenyang, China',
      period: 'Nov 2019 - Jun 2023',
      gpa: '7.826/10.0 (88.70%)',
      highlights: [
        'Specialized in aircraft manufacturing and production',
        'Strong foundation in aeronautical design principles',
        'Comprehensive training in aerospace engineering fundamentals',
      ],
      icon: '📚'
    },
  ];

  const additionalTraining = [
    {
      title: 'Advanced CFD Analysis Workshop',
      provider: 'ANSYS',
      year: '20XX',
      duration: '40 hours'
    },
    {
      title: 'Aircraft Structures Certification Program',
      provider: 'FAA',
      year: '20XX',
      duration: '80 hours'
    },
    {
      title: 'Composite Materials Manufacturing',
      provider: 'Industry Training Institute',
      year: '20XX',
      duration: '60 hours'
    },
    {
      title: 'Leadership in Engineering',
      provider: 'Professional Development Course',
      year: '20XX',
      duration: '30 hours'
    },
  ];

  return (
    <section id="education" className="education">
      <div className="education-container">
        <div className="section-header">
          <span className="section-label">Academic Background</span>
          <h2 className="section-title">Education & Training</h2>
          <div className="title-underline"></div>
        </div>

        {/* Formal Education */}
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">{edu.icon}</div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3>{edu.degree}</h3>
                    <h4>{edu.institution}</h4>
                    <p className="location">📍 {edu.location}</p>
                  </div>
                  <div className="timeline-meta">
                    <span className="period">{edu.period}</span>
                    {edu.gpa && <span className="gpa">GPA: {edu.gpa}</span>}
                    {edu.honors && <span className="honors">{edu.honors}</span>}
                  </div>
                </div>
                <ul className="highlights">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
