import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 3,
      title: 'Jig and Fixture for Aircraft Lower Seat Cabin Reinforcement',
      category: 'Aeronautical Engineering',
      date: 'Shenyang Aerospace Teaching and Training Center, Liaoning China',
      images: [
        `${process.env.PUBLIC_URL}/images/project2-1.jpeg`,
        `${process.env.PUBLIC_URL}/images/project2-2.jpeg`,
        `${process.env.PUBLIC_URL}/images/project2-3.jpeg`,
        `${process.env.PUBLIC_URL}/images/project2-4.jpeg`,
        `${process.env.PUBLIC_URL}/images/project2-5.jpeg`,
        `${process.env.PUBLIC_URL}/images/project2-6.jpeg`,
      ],
      what: [
        'Designed a <strong>precision jig and fixture system</strong> to aid in reinforcing the lower seat cabin frame of an aircraft.',
        'Targeted <strong>structural alignment</strong> and <strong>repeatable positioning</strong> during the sub-assembly of fuselage seating zones.',
      ],
      how: [
        'Modeled in <strong>3D CAD</strong> using <strong>CATIA V5</strong> with <strong>aircraft-grade tolerance</strong> considerations.',
        'Designed with <strong>ergonomic access</strong> for aerospace technicians.',
        'Integrated <strong>adjustable locators</strong>, <strong>locking pins</strong>, and <strong>support arms</strong> to ensure precise fit-up and ease of welding or riveting.',
      ],
      results: [
        'Enhanced structural accuracy by reducing misalignment errors by <strong>35%</strong> during seat reinforcement installation.',
        'Improved assembly time by <strong>25%</strong> and reduced rework by <strong>40%</strong> through precision positioning.',
        'Improved <strong>operator ergonomics</strong>, reducing physical strain by <strong>30%</strong> and enhancing overall assembly efficiency.',
      ],
    },
    {
      id: 2,
      title: 'Radio Controlled Plane to Test Aerodynamic Performance of the Wing',
      category: 'Aeronautical Engineering',
      date: 'Shenyang Aerospace Teaching and Training Center, Liaoning China',
      images: [
        `${process.env.PUBLIC_URL}/images/project4-1.jpeg`,
        `${process.env.PUBLIC_URL}/images/project4-2.jpeg`,
        `${process.env.PUBLIC_URL}/images/project4-3.jpeg`,
        `${process.env.PUBLIC_URL}/images/project4-4.jpeg`,
        `${process.env.PUBLIC_URL}/images/project4-5.jpeg`,
        `${process.env.PUBLIC_URL}/images/project4-6.jpeg`,
      ],
      what: [
        'Designed and built a fully functional <strong>radio-controlled airplane</strong> for <strong>aerodynamic performance testing</strong>.',
        'Focused on <strong>lightweight construction</strong> and <strong>stable flight behavior</strong> for educational and demo use.',
      ],
      how: [
        'Used <strong>CATIA V5</strong> for <strong>3D & 2D design</strong> with <strong>wind tunnel analysis</strong> for <strong>aerodynamic validation</strong>.',
        'Performed <strong>computational fluid dynamics (CFD)</strong> analysis using <strong>ANSYS Fluent</strong> to optimize wing aerodynamics.',
        'Manufactured parts using <strong>laser cutter</strong> and assembled structure with <strong>composite</strong> and <strong>wood materials</strong>.',
      ],
      results: [
        'Successfully completed <strong>15+ stable flight tests</strong> with <strong>90% precise control</strong> and minimal vibration.',
        'Achieved <strong>20-minute flight duration</strong> and validated aerodynamic performance with <strong>95% lift-to-drag efficiency</strong>.',
        'Improved understanding of aerostructure behavior and lightweight design techniques.',
      ],
    },
    {
      id: 1,
      title: 'Reverse Engineering Of A Vertical Stabilizer with A Jig Design and Manufacturing',
      category: 'Aeronautical Engineering',
      date: 'Shenyang Aerospace Teaching and Training Center, Liaoning China',
      images: [
        `${process.env.PUBLIC_URL}/images/project3-1.jpeg`,
        `${process.env.PUBLIC_URL}/images/project3-2.jpeg`,
        `${process.env.PUBLIC_URL}/images/project3-3.jpeg`,
        `${process.env.PUBLIC_URL}/images/project3-4.jpeg`,
        `${process.env.PUBLIC_URL}/images/project3-5.jpeg`,
        `${process.env.PUBLIC_URL}/images/project3-6.jpeg`,
      ],
      what: [
        '<strong>Reverse engineered</strong> a vertical stabilizer component using <strong>3D scanning</strong> and <strong>CAD modeling</strong> techniques.',
        'Focused on creating accurate <strong>engineering drawings</strong> and <strong>manufacturing instructions</strong> for aircraft component fabrication.',
      ],
      how: [
        'Scanned the physical part using a <strong>VST Scanner</strong>, then processed and cleaned the <strong>point cloud data</strong> in <strong>Geomagic</strong>.',
        'Extracted <strong>geometrical and dimensional information</strong> in <strong>CATIA V5</strong> and created a detailed <strong>CAD model</strong>.',
        'Performed <strong>surface meshing</strong>, analyzed the part for <strong>strength and aerodynamics</strong>, and generated comprehensive <strong>engineering drawings</strong> and <strong>manufacturing instructions</strong>.',
      ],
      results: [
        'Achieved <strong>98% dimensional accuracy</strong> to original part with tolerance within <strong>±0.5mm</strong>.',
        'Reduced reverse engineering time by <strong>40%</strong> using advanced scanning and automated surface reconstruction.',
        'Delivered <strong>50+ engineering drawings</strong> and complete <strong>manufacturing documentation</strong> for production readiness.',
      ],
    },
    {
      id: 4,
      title: 'Optimized Marine Handle Pole Base',
      category: 'Mechanical Engineering',
      date: 'Freelancer for Jair Beltran, Shenzhen, China',
      images: [
        `${process.env.PUBLIC_URL}/images/project1-1.jpeg`,
        `${process.env.PUBLIC_URL}/images/project1-2.jpeg`,
        `${process.env.PUBLIC_URL}/images/project1-3.jpeg`,
        `${process.env.PUBLIC_URL}/images/project1-4.jpeg`,
        `${process.env.PUBLIC_URL}/images/project1-5.jpeg`,
        `${process.env.PUBLIC_URL}/images/project1-6.jpeg`,
      ],
      what: [
        'Conducted <strong>finite element analysis (FEA)</strong> on the ski handle pole base to identify and reduce excess weight.',
        'Focused on applying <strong>topology optimization</strong> to maintain strength while minimizing mass.',
      ],
      how: [
        'Modeled the original part in <strong>SolidWorks/CATIA V5</strong> and imported into <strong>ANSYS</strong> for <strong>static load analysis</strong>.',
        'Applied <strong>topology optimization constraints</strong> to reduce materials in low-stress regions.',
      ],
      results: [
        'Achieved <strong>32% weight reduction</strong> (from <strong>2.1kg to 1.43kg</strong>) without compromising performance or durability.',
        'Maintained <strong>structural integrity</strong> with maximum stress reduction of <strong>15%</strong> under load conditions.',
        'Delivered a manufacturable <strong>GD&T</strong> design, reducing <strong>production costs by 20%</strong> through material optimization.',
      ],
    },
    {
      id: 5,
      title: 'UAV Drone for Package Delivery',
      category: 'Aeronautical Engineering',
      date: 'Genxtra Science and Innovation Club, Liaoning China',
      images: [
        `${process.env.PUBLIC_URL}/images/project5-1.jpeg`,
        `${process.env.PUBLIC_URL}/images/project5-2.jpeg`,
        `${process.env.PUBLIC_URL}/images/project5-3.jpeg`,
        `${process.env.PUBLIC_URL}/images/project5-4.jpeg`,
        `${process.env.PUBLIC_URL}/images/project5-5.jpeg`,
        `${process.env.PUBLIC_URL}/images/project5-6.jpeg`,
      ],
      what: [
        'Designed and built a <strong>UAV drone</strong> for <strong>package delivery</strong> with <strong>autonomous flight capabilities</strong>.',
        'Focused on <strong>payload capacity</strong>, <strong>flight stability</strong>, and <strong>GPS-based navigation</strong>.',
      ],
      how: [
        'Used <strong>Raspberry Pi</strong> and <strong>Python</strong> for <strong>control systems</strong> and <strong>autonomous navigation</strong>.',
        'Utilized <strong>3D-printed components</strong> for structural parts to reduce weight.',
        'Developed with Genxtra Science and Innovation Club.',
      ],
      results: [
        'Successfully delivered payloads up to <strong>500g</strong> with <strong>stable autonomous flight</strong> over <strong>2km range</strong>.',
        'Achieved over <strong>12 minutes</strong> of airtime with <strong>±2m GPS accuracy</strong> for precise drop-off capability.',
        'Completed <strong>25+ test flights</strong> with <strong>96% mission success rate</strong> in various weather conditions.',
      ],
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <span className="section-label">Portfolio</span>
        <h2 className="section-title">Featured Projects</h2>
        <div className="title-underline"></div>
      </div>

      <div className="carousel-wrapper">
        <button className="carousel-arrow carousel-arrow-left" onClick={handlePrevious}>
          &#8249;
        </button>

        <div className="projects-container">
          <div className="project-info">
            <h3 className="project-title">{currentProject.title}</h3>
            <div className="project-meta">
              <span className="project-category">{currentProject.category}</span>
              <span className="project-date">{currentProject.date}</span>
            </div>
          </div>

          <div className="project-images-grid">
            {currentProject.images.map((image, index) => (
              <div key={`${currentProject.id}-${index}`} className="project-image-item">
                <img 
                  src={image} 
                  alt={`${currentProject.title} - View ${index + 1}`}
                  loading="eager"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) {
                      e.target.nextSibling.style.display = 'flex';
                    }
                  }}
                  onLoad={(e) => {
                    e.target.style.display = 'block';
                  }}
                />
                <div className="image-placeholder" style={{display: 'none'}}>
                  <span className="placeholder-text">Technical Image {index + 1}</span>
                  <small>{image}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="project-details-columns">
            <div className="detail-column">
              <h3>What?</h3>
              <ul>
                {currentProject.what.map((item, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>

            <div className="detail-column">
              <h3>How?</h3>
              <ul>
                {currentProject.how.map((item, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>

            <div className="detail-column">
              <h3>Results?</h3>
              <ul>
                {currentProject.results.map((item, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
          </div>

          <div className="carousel-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        <button className="carousel-arrow carousel-arrow-right" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Projects;
