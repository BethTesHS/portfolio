import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import { 
  Mail, Github, Linkedin, Terminal, FileJson, 
  Eye, Briefcase, Code2 
} from 'lucide-react';
import './App.css';

// Custom SVG Lightbulb Component - Hanging from the ceiling
const CustomBulb = ({ isOn }) => (
  <svg 
    width="36" 
    height="64" /* Increased from 48 to make room for the longer base */
    viewBox="0 -15 24 47" /* Shifted the viewBox up to prevent the longer rod from being cut off */
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{
      filter: isOn ? 'drop-shadow(0px 0px 12px rgba(251, 191, 36, 0.6))' : 'drop-shadow(0px 0px 2px rgba(0,0,0,0.3))',
      transition: 'all 0.4s ease'
    }}
  >
    <g transform="rotate(180 12 16)">
      <path 
        d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 15.6965 17.4811 18.9103 14 19.8V23C14 23.5523 13.5523 24 13 24H11C10.4477 24 10 23.5523 10 23V19.8C6.51888 18.9103 4 15.6965 4 12Z" 
        fill={isOn ? "rgba(251, 191, 36, 0.15)" : "var(--surface)"}
        stroke={isOn ? "#fbbf24" : "var(--text-muted)"} 
        strokeWidth="1.5"
      />
      <path 
        d="M10 10 L11.5 11L12.5 11L14 10" 
        stroke={isOn ? "#fbbf24" : "var(--text-muted)"} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12 11V15" 
        stroke={isOn ? "#fbbf24" : "var(--text-muted)"} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />
      <path d="M10 24H14V25.5H10V24Z" fill="var(--text-muted)" />
      <path d="M10.5 26.5H13.5V28H10.5V26.5Z" fill="var(--text-muted)" />
      <path d="M11 29H13V45.5C13 46.0523 12.5523 46.5 12 46.5C11.4477 46.5 11 46.0523 11 45.5V29Z" fill="var(--text-main)" />
    </g>
  </svg>
);

const Portfolio = () => {
  const [showJson, setShowJson] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Physics states for the pull chain
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);
  
  // The string starts from the ceiling at X=44, Y=0. 
  // The knob rests at X=44, Y=80.
  const lineX2 = useTransform(dragX, (x) => x + 44); 
  const lineY2 = useTransform(dragY, (y) => y + 80); 

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
            
            {/* UPDATED: Ceiling & Side Pull Chain */}
            <div className="pull-chain-wrapper">
              
              {/* The ceiling boundary line */}
              <div className="ceiling-bar"></div>

              {/* Bulb positioned on the left side */}
              <div className="bulb-position">
                <CustomBulb isOn={isLightMode} />
              </div>
              
              {/* The chain starting from the ceiling beside the bulb */}
              <svg className="chain-svg-canvas">
                <motion.line 
                  x1="44" y1="0"  /* Starts at ceiling, offset to the right */
                  x2={lineX2} 
                  y2={lineY2} 
                  stroke="var(--text-muted)" 
                  strokeWidth="2" 
                  strokeDasharray="2 4"
                  strokeLinecap="round"
                />
              </svg>

              <motion.div
                className="chain-knob-draggable"
                style={{
                  x: dragX,
                  y: dragY,
                  backgroundColor: isLightMode ? 'var(--primary)' : 'var(--text-main)',
                }}
                drag
                dragSnapToOrigin={true}
                dragConstraints={{ top: 0, bottom: 50, left: -50, right: 50 }}
                dragElastic={0.4}
                transition={{ type: "spring", stiffness: 150, damping: 3, mass: 0.6 }}
                whileTap={{ cursor: 'grabbing', scale: 1.1 }}
                onDragEnd={(e, info) => {
                  if (info.offset.y > 20) {
                    setIsLightMode(prev => !prev);
                    if (window.navigator?.vibrate) {
                       window.navigator.vibrate(40);
                    }
                  }
                }}
              />
            </div>

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

              <motion.section id="experience" variants={slideDownVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
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

              <motion.section id="skills" variants={slideDownVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
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

      {/* <motion.button 
        className="dev-toggle"
        onClick={() => setShowJson(!showJson)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {showJson ? <Eye size={24} /> : <FileJson size={24} />}
      </motion.button> */}
    </div>
  );
};

export default Portfolio;