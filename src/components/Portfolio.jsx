// src/components/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Mail, Github, Linkedin, Terminal as TerminalIcon, Briefcase, Code2, Folder, ChevronDown } from 'lucide-react';
import TechBackground from './TechBackground';
import CustomBulb from './CustomBulb';
import { personalInfo, skills, experience, projects } from '../data';

const Portfolio = ({ onSwitchToCLI, isLightMode, setIsLightMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);
  const lineX2 = useTransform(dragX, (x) => x + 44); 
  const lineY2 = useTransform(dragY, (y) => y + 80); 

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const slideDownVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="portfolio-container">
      <TechBackground />

      <nav className={`full-width-nav ${isScrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <motion.a href="#" className="logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            &lt;BethTesHS /&gt;
          </motion.a>
          
          <div className="nav-links">
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            
            <div className="pull-chain-wrapper">
              <div className="ceiling-bar"></div>
              <div className="bulb-position">
                <CustomBulb isOn={isLightMode} />
              </div>
              <svg className="chain-svg-canvas">
                <motion.line x1="44" y1="0" x2={lineX2} y2={lineY2} stroke="var(--text-muted)" strokeWidth="2" strokeDasharray="2 4"/>
              </svg>
              <motion.div
                className="chain-knob-draggable"
                style={{ x: dragX, y: dragY, backgroundColor: isLightMode ? 'var(--primary)' : 'var(--text-main)' }}
                drag dragSnapToOrigin={true} dragConstraints={{ top: 0, bottom: 50, left: -50, right: 50 }}
                onDragEnd={(e, info) => {
                  if (info.offset.y > 20) setIsLightMode(prev => !prev);
                }}
              />
            </div>
          </div>
        </div>
      </nav>

      <div className="content-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <AnimatePresence mode="wait">
          <motion.div key="standard-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <header className="hero">
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                Fullstack<br /><span className="gradient-text">Software Developer</span>
              </motion.h1>
              <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Hi, I'm <strong>{personalInfo.name}</strong>. A {personalInfo.role.toLowerCase()} based in {personalInfo.location}, specializing in robust web architectures, AI integrations, and seamless user experiences.
                </motion.p>
              <motion.div className="social-links" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="social-btn"><Github size={22} /></a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="social-btn"><Linkedin size={22} /></a>
                <a href={`mailto:${personalInfo.email}`} className="social-btn"><Mail size={22} /></a>
              </motion.div>
            </header>

            <motion.section id="experience" variants={slideDownVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="section-title"><Briefcase size={32} style={{ color: 'var(--primary)', marginRight: '10px' }}/> Where I've Worked</h2>
              <div className="experience-grid">
                {experience.map((job, index) => (
                  <div key={index} className="card">
                    <div className="card-header">
                      <div><h3>{job.role}</h3><span className="company">@ {job.company}</span></div>
                      <span className="date">{job.date}</span>
                    </div>
                    <ul>{job.points.map((point, i) => <li key={i}>{point}</li>)}</ul>
                    <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                      {job.tech.map((t, i) => <span key={i} className="skill-tag" style={{ padding: '4px 10px', fontSize: '0.75rem', margin: 0 }}>{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section id="projects" variants={slideDownVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="section-title"><Folder size={32} style={{ color: 'var(--primary)', marginRight: '10px' }}/> My Personal Projects</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {projects.map((project, index) => {
                  const isExpanded = expandedProject === index;
                  return (
                    <motion.div key={index} className="card" onClick={() => setExpandedProject(isExpanded ? null : index)} style={{ cursor: 'pointer', padding: '24px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <h3 style={{ fontSize: '1.25rem', margin: '0 0 10px 0' }}>{project.title}</h3>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {project.tech.map((t, i) => <span key={i} className="skill-tag" style={{ padding: '4px 10px', fontSize: '0.75rem', margin: 0 }}>{t}</span>)}
                          </div>
                        </div>
                        <ChevronDown size={24} style={{ transform: isExpanded ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
                      </div>
                      {isExpanded && <p style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border)' }}>{project.description}</p>}
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>

            <motion.section id="skills" variants={slideDownVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="section-title"><Code2 size={32} style={{ color: 'var(--accent)', marginRight: '10px' }}/> My Technical Skills</h2>
              <div className="skills-grid">
                {skills.map((skill, index) => <div key={index} className="skill-tag">{skill}</div>)}
              </div>
            </motion.section>
            
            <footer style={{ marginTop: '100px', textAlign: 'center', paddingBottom: '40px' }}>
              <p>Designed & Built by {personalInfo.name}</p>
            </footer>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* NEW FLOATING CLI BUTTON */}
      <button onClick={onSwitchToCLI} className="floating-cli-btn">
        <TerminalIcon size={20} /> <span className="cli-btn-text">C:\CLI_Mode.exe</span>
      </button>
    </div>
  );
};

export default Portfolio;