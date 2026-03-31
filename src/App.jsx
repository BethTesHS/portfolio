import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { 
  Mail, Github, Linkedin, Terminal, 
  Briefcase, Code2, Folder, ChevronDown 
} from 'lucide-react';
import TechBackground from './TechBackground';
import './App.css';

// Custom SVG Lightbulb Component
const CustomBulb = ({ isOn }) => (
  <svg 
    width="36" 
    height="64"
    viewBox="0 -15 24 47"
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
  const [isHovered, setIsHovered] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  // Physics states for the pull chain
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);
  
  const lineX2 = useTransform(dragX, (x) => x + 44); 
  const lineY2 = useTransform(dragY, (y) => y + 80); 

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    role: "Fullstack Software Developer",
    email: "bethelhemtesfaye95@gmail.com",
    location: "Nairobi, Kenya",
    linkedin: "https://www.linkedin.com/in/bethelhem-tesfaye-b26277272",
    github: "https://github.com/BethTesHS",
  };

  const skills = [
    "React", "JavaScript", "HTML", "CSS", "Tailwind CSS", 
    "Laravel", "PHP", "Python", "C#", "Java", 
    "Flutter", "Android Studio", 
    "MySQL", "PostgreSQL", "Supabase", "Firebase", 
    "Azure", "Vercel", "Kusto Query Language", "Microsoft Bot/Agent Framework", 
    "Git/GitHub", 
    "Figma", "Krita", "Clip Studio"
  ];

  const experience = [
    {
      role: "Software Developer",
      company: "Kenbright",
      date: "February 2025 - Present",
      points: [
        "Built a full-stack learning platform using React, Node.js, Express, and Tailwind CSS.",
        "Integrated Supabase for authentication and cloud storage to manage educational resources and PDF modules.",
        "Implemented interactive user features including an AI-based grading system for quizzes and progress tracking."
      ],
      tech: ["React", "Node.js", "Express", "Tailwind CSS", "Supabase", "Gemini AI API"]
    },
    {
      role: "Frontend Software Developer",
      company: "Homed-UK",
      date: "February 2025 - Present",
      points: [
        "Developed frontend flows using React and TypeScript, ensuring optimized user experiences for distinct persona requirements.",
        "Implemented UI designs into clean, responsive web pages and components for a high-traffic property platform using Tailwind CSS and Vite.",
        "Troubleshot and fixed UI bugs across devices and browsers, specifically resolving compatibility issues."
      ],
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"]
    },
    {
      role: "Software Engineering Intern",
      company: "Microsoft",
      date: "July 2025 - September 2025",
      points: [
        "Designed and developed core components of an AI-powered diagnostic chatbot handling build and deployment failures.",
        "Integrated Azure OpenAI and Azure AI Search to implement RAG for context-aware error analysis.",
        "Implemented secure authentication and authorization flows using Managed Identity and Microsoft Entra ID."
      ],
      tech: ["Azure OpenAI", "Azure AI Search", "RAG", "Microsoft Entra ID"]
    },
    {
      role: "POS System Developer",
      company: "Riset Software & Systems LTD",
      date: "January 2025 - March 2025",
      points: [
        "Built a full-stack Point of Sale (POS) application using Laravel and PHP.",
        "Engineered dynamic inventory control with real-time stock synchronization to prevent discrepancies.",
        "Integrated interactive charts to visualize data trends and display stock history on an admin dashboard."
      ],
      tech: ["Laravel", "PHP", "MySQL", "JavaScript"]
    }
  ];

  const projects = [
    {
      title: "Helo-Me-Find! - A Lost & Found Web Application",
      tech: ["Laravel", "PHP", "JavaScript", "Gemini AI API", "WebSockets", "Leaflet.js"],
      description: "Developed a full-stack platform for item management featuring a RAG-based search engine using Gemini AI for image-to-text and vector embeddings. Implemented real-time user messaging via Laravel Broadcasting/Reverb, integrated geospatial mapping for item tracking, and built a QR code generation system.",
      link: "#" 
    },
    {
      title: "Tembea Kenya - Mobile Application",
      tech: ["Flutter", "Dart", "Laravel", "Firebase", "MySQL", "Figma"],
      description: "Designed and developed a mobile application featuring a custom UI/UX framework designed in Figma. Built a robust backend utilizing Laravel, MySQL, and Firebase, integrated third-party services for enhanced scalability, and maintained comprehensive lifecycle documentation.",
      link: "#"
    },
    {
      title: "Media Downloader Web App",
      tech: ["Python", "Flask"],
      description: "Developed a simplified web application to seamlessly download audio and video of media/playlist from platforms like YouTube and Spotify, featuring custom format selection and directory management.",
      link: "#"
    },
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
    <div className="portfolio-container">
      {/* Animated Tech Pattern Background */}
      <TechBackground />

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
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="nav-link">Projects</a>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')} className="nav-link">Skills</a>
            <a href={`mailto:${personalInfo.email}`} className="nav-link">Contact</a>
            
            <div 
              className="pull-chain-wrapper"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Animated Hint Box */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="pull-hint-box"
                  >
                    Pull to turn {isLightMode ? 'off' : 'on'} the light
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="ceiling-bar"></div>
              <div className="bulb-position">
                <CustomBulb isOn={isLightMode} />
              </div>
              
              <svg className="chain-svg-canvas">
                <motion.line 
                  x1="44" y1="0"
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
                  Fullstack<br />
                  <span className="gradient-text">Software Developer</span>
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
                <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <Briefcase size={32} style={{ color: 'var(--primary)' }}/>
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
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                        {job.tech.map((techItem, techIndex) => (
                          <span key={techIndex} className="skill-tag" style={{ margin: 0, padding: '4px 10px', fontSize: '0.75rem' }}>
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              <motion.section id="projects" variants={slideDownVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <Folder size={32} style={{ color: 'var(--primary)' }}/>
                  Personal Projects
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '30px' }}>
                  {projects.map((project, index) => {
                    const isExpanded = expandedProject === index;
                    return (
                      <motion.div 
                        layout
                        key={index} 
                        className="card" 
                        onClick={() => setExpandedProject(isExpanded ? null : index)}
                        style={{ cursor: 'pointer', padding: '24px', overflow: 'hidden' }}
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div layout style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px' }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{project.title}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                              {project.tech.map((techItem, techIndex) => (
                                <span key={techIndex} className="skill-tag" style={{ margin: 0, padding: '4px 10px', fontSize: '0.75rem' }}>
                                  {techItem}
                                </span>
                              ))}
                            </div>
                          </div>
                          <motion.div 
                            animate={{ rotate: isExpanded ? 180 : 0 }} 
                            transition={{ duration: 0.3 }}
                            style={{ color: 'var(--text-muted)', flexShrink: 0 }}
                          >
                            <ChevronDown size={24} />
                          </motion.div>
                        </motion.div>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: 'auto', marginTop: 20 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                                <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                                  {project.description}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.section>

              <motion.section id="skills" variants={slideDownVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <Code2 size={32} style={{ color: 'var(--accent)' }}/>
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
      </div>
    </div>
  );
};

export default Portfolio;