import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from 'framer-motion';
import { 
  Mail, Github, Linkedin, Terminal, FileJson, 
  Eye, Briefcase, Code2, Sun, Moon 
} from 'lucide-react';
import './App.css';

const Portfolio = () => {
  const [showJson, setShowJson] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Toggle Body Class for Light Mode Theme
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const personalInfo = {
    name: "Bethelhem Tesfaye Haileselassie",
    role: "Software Engineer",
    email: "bethelhemtesfaye95@gmail.com",
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
      date: "July 2025 - September 2025",
      points: [
        "Worked with the IDNA team to design core components of an AI-powered diagnostic chatbot.",
        "Integrated Azure OpenAI and RAG for intelligent error analysis.",
        "Implemented secure authentication using Microsoft Entra ID."
      ]
    },
    {
      role: "Web Application Developer",
      company: "Strathmore University (Lost & Found)",
      date: "April 2025 - November 2025",
      points: [
        "Developed a full-stack Laravel web app for item management.",
        "Engineered a RAG search endpoint using Gemini AI for image-to-text conversion.",
        "Built real-time messaging using WebSockets (Reverb/Pusher)."
      ]
    },
    {
      role: "POS System Developer",
      company: "Riset Software & Systems LTD",
      date: "January 2025 - March 2025",
      points: [
        "Built a full-stack Point of Sale application using Laravel.",
        "Engineered dynamic inventory control with real-time synchronization."
      ]
    }
  ];

  const slideDownVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="portfolio-container" onMouseMove={handleMouseMove}>
      
      {/* Interactive Cursor Spotlight */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              var(--spotlight),
              transparent 80%
            )
          `,
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* FULL WIDTH NAVBAR OUTSIDE THE WRAPPER */}
      <nav className={`full-width-nav ${isScrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <motion.a 
            href="#" 
            className="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            &lt;BethTesHS /&gt;
          </motion.a>
          
          <div className="nav-links">
            <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="nav-link">Experience</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="nav-link">Skills</a>
            <a href={`mailto:${personalInfo.email}`} className="nav-link">Contact</a>
            
            <button 
              className="theme-toggle" 
              onClick={() => setIsLightMode(!isLightMode)}
              aria-label="Toggle Theme"
            >
              {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* CENTERED CONTENT WRAPPER */}
      <div className="content-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatePresence mode="wait">
          {!showJson && (
            <motion.div 
              key="standard-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              
              <header className="hero">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="terminal-badge">
                    <Terminal size={14} /> 
                    <span>hello_world.exe</span>
                  </div>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Building digital <br />
                  <span className="gradient-text">experiences.</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Hi, I'm <strong>{personalInfo.name}</strong>. A {personalInfo.role.toLowerCase()} based in {personalInfo.location}, specializing in robust web architectures, AI integrations, and seamless user experiences.
                </motion.p>
                
                <motion.div 
                  className="social-links"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {[
                    { icon: Github, href: personalInfo.github },
                    { icon: Linkedin, href: personalInfo.linkedin },
                    { icon: Mail, href: `mailto:${personalInfo.email}` }
                  ].map((social, index) => (
                    <a key={index} href={social.href} target="_blank" rel="noreferrer" className="social-btn">
                      <social.icon size={22} />
                    </a>
                  ))}
                </motion.div>
              </header>

              <motion.section 
                id="experience"
                variants={slideDownVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="section-title">
                  <Briefcase size={32} style={{ display: 'inline', marginRight: '15px', verticalAlign: 'bottom', color: 'var(--primary)' }}/>
                  Where I've Worked
                </h2>
                
                <div className="experience-grid">
                  {experience.map((job, index) => (
                    <div key={index} className="card">
                      <div className="card-header">
                        <div>
                          <h3>{job.role}</h3>
                          <span className="company">@ {job.company}</span>
                        </div>
                        <span className="date">{job.date}</span>
                      </div>
                      <ul>
                        {job.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.section>

              <motion.section 
                id="skills"
                variants={slideDownVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="section-title">
                  <Code2 size={32} style={{ display: 'inline', marginRight: '15px', verticalAlign: 'bottom', color: 'var(--accent)' }}/>
                  Technical Arsenal
                </h2>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-tag">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.section>

              <footer>
                <p>Designed & Built by {personalInfo.name}</p>
                <p style={{ opacity: 0.5, marginTop: '8px' }}>&copy; {new Date().getFullYear()} All rights reserved.</p>
              </footer>

            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
           {showJson && (
             <motion.div
                className="json-view"
                style={{ width: '100%', padding: '4rem 0' }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
             >
                <div style={{ background: '#0d0d12', padding: '2rem', borderRadius: '12px', textAlign: 'left', fontFamily: 'monospace' }}>
                    <p style={{ color: 'var(--primary)' }}>// Developer Data</p>
                    <pre style={{ color: '#e2e8f0', marginTop: '1rem' }}>
                      {JSON.stringify({ name: personalInfo.name, skills }, null, 2)}
                    </pre>
                </div>
             </motion.div>
           )}
        </AnimatePresence>
      </div>

      <motion.button 
        className="dev-toggle"
        onClick={() => setShowJson(!showJson)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {showJson ? <Eye size={24} /> : <FileJson size={24} />}
      </motion.button>
    </div>
  );
};

export default Portfolio;