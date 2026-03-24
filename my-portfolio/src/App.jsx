import React from 'react';
import './App.css';
import { 
    Mail, 
    Phone, 
    MapPin, 
    Github, 
    Linkedin, 
    ExternalLink, 
    Code, 
    Database, 
    Layout 
} from 'lucide-react';

const Portfolio = () => {
  const personalInfo = {
    name: "Bethelhem Tesfaye Haileselassie",
    role: "Software Engineering",
    email: "bethelhemtesfaye95@gmail.com",
    phone: "(+254) 115-190-303",
    location: "Nairobi, Kenya",
    linkedin: "https://www.linkedin.com/in/bethelhem-tesfaye-b26277272",
    github: "https://github.com/BethTesHS",
  };

  const skills = [
    "C#", "Java", "Dart", "Flutter", "Laravel", 
    "Python", "CSS", "JavaScript", "MySQL", 
    "Azure", "Git", "Figma",  
  ];

  const experience = [
    {
      role: "Software Engineering Intern",
      company: "Microsoft",
      location: "Nairobi, Kenya",
      date: "July 2025 - September 2025",
      points: [
        "Worked with the IDNA team to design core components of an AI-powered diagnostic chatbot.",
        "Integrated Azure OpenAI and RAG for intelligent error analysis.",
        "Implemented secure authentication using Microsoft Entra ID.",
        "Optimized Kusto query services to analyze telemetry logs."
      ]
    },
    {
      role: "Web Application Developer",
      company: "Strathmore University (Lost & Found Project)",
      location: "Nairobi, Kenya",
      date: "April 2025 - November 2025",
      points: [
        "Developed a full-stack Laravel web app for item management.",
        "Engineered a RAG search endpoint using Gemini AI for image-to-text conversion.",
        "Built real-time messaging using WebSockets (Reverb/Pusher).",
        "Integrated geospatial mapping and QR code generation."
      ]
    },
    {
      role: "POS System Developer",
      company: "Riset Software & Systems LTD",
      location: "Nairobi, Kenya",
      date: "January 2025 - March 2025",
      points: [
        "Built a full-stack Point of Sale application using Laravel.",
        "Engineered dynamic inventory control with real-time synchronization.",
        "Integrated interactive charts for business analysis dashboards.",
        "Optimized product management workflows with advanced search."
      ]
    },
    {
      role: "Mobile Application Developer",
      company: "Strathmore University",
      location: "Nairobi, Kenya",
      date: "April 2024 - July 2024",
      points: [
        "Developed a mobile app using Flutter/Dart and Firebase.",
        "Designed UI/UX frameworks in Figma focusing on user experience.",
        "Collaborated on comprehensive project documentation."
      ]
    }
  ];

  const education = {
    degree: "Bachelor of Informatics and Computer Science (BICS)",
    school: "Strathmore University",
    date: "2022 - 2026",
    note: "Dean's List Awardee (2022-2023)"
  };

  return (
    <div className="portfolio">
      <div className="container">
        
        {/* Navigation */}
        <nav>
          <div className="logo">BethTesHS</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href={`mailto:${personalInfo.email}`} className="btn">Contact Me</a>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="hero">
          <h1>
            Hello, I'm <br />
            <span>{personalInfo.name}</span>
          </h1>
          <p>
            {personalInfo.role} based in {personalInfo.location}. 
            Specializing in building robust web and mobile applications with 
            modern technologies like React, Laravel, and AI integrations.
          </p>
          
          <div className="social-links">
            <a href={`mailto:${personalInfo.email}`} className="social-icon" aria-label="Email">
              <Mail size={24} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href={`tel:${personalInfo.phone}`} className="social-icon" title={personalInfo.phone}>
              <Phone size={24} />
            </a>
          </div>
        </header>

        {/* Experience Section */}
        <section id="experience">
          <h2 className="section-title">Experience</h2>
          <div className="experience-grid">
            {experience.map((job, index) => (
              <div key={index} className="card">
                <div className="card-header">
                  <div>
                    <h3>{job.role}</h3>
                    <span className="company">{job.company}</span>
                  </div>
                  <span className="date">{job.date}</span>
                </div>
                <div className="location" style={{ fontSize: '0.9rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                  <MapPin size={14} style={{ display: 'inline', marginRight: '5px' }} />
                  {job.location}
                </div>
                <ul>
                  {job.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-tag">
                {skill}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', color: 'var(--primary)' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <Layout size={20} /> <span>Frontend & UI/UX</span>
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <Database size={20} /> <span>Backend & Database</span>
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <Code size={20} /> <span>AI Integration</span>
             </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education">
          <h2 className="section-title">Education</h2>
          <div className="card">
            <div className="card-header">
              <h3>{education.degree}</h3>
              <span className="date">{education.date}</span>
            </div>
            <span className="company">{education.school}</span>
            <p style={{ marginTop: '1rem', color: 'var(--text)' }}>
              {education.note}
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </footer>

      </div>
    </div>
  );
};

export default Portfolio;