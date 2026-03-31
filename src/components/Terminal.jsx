// src/components/Terminal.jsx
import React, { useState, useRef, useEffect } from 'react';
import { personalInfo, skills, experience, projects } from '../data';

// Helper component for the fast Windows-style typing effect
const TypewriterLine = ({ text, onComplete }) => {
  const [displayed, setDisplayed] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i += 4; // Type 4 characters per tick for a fast, mechanical feel
      if (i >= text.length) {
        setDisplayed(text);
        clearInterval(timer);
        if (onComplete) onComplete();
      }
    }, 10); // Very fast interval

    return () => clearInterval(timer);
  }, [text, onComplete]);

  return <pre>{displayed}</pre>;
};

const Terminal = ({ onSwitchToGUI, isLightMode, setIsLightMode }) => {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [history, setHistory] = useState([
    { type: 'output', content: `Microsoft Windows [Version 10.0.22631.3296]\n(c) Microsoft Corporation. All rights reserved.\n\nWelcome to ${personalInfo.name}'s interactive terminal.\nType "help" to see a list of available commands.` }
  ]);
  const endOfTerminalRef = useRef(null);
  const inputRef = useRef(null);

  const promptText = "C:\\Users\\guest\\portfolio>";

  // Handle Ctrl+C and Escape globally
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || (e.ctrlKey && e.key.toLowerCase() === 'c')) {
        e.preventDefault();
        onSwitchToGUI();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSwitchToGUI]);

  const scrollToBottom = () => {
    endOfTerminalRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history, isTyping]); // Scroll when history changes or while typing

  const handleCommand = (e) => {
    if (e.key === 'Enter' && !isTyping) {
      const command = input.trim().toLowerCase();
      const newHistory = [...history, { type: 'input', content: input }];
      
      let output = '';

      switch (command) {
        case 'help':
          output = `Available commands:
  about      - Learn more about who I am
  experience - View my work history
  projects   - Explore my recent projects
  skills     - View my technical stack
  contact    - Get my email and social links
  light      - Switch to Light Mode theme
  dark       - Switch to Dark Mode theme
  clear      - Clear the terminal screen
  exit       - Close terminal and return to standard view`;
          break;
        case 'about':
          output = `Hi, I'm ${personalInfo.name}.\nI am a ${personalInfo.role} based in ${personalInfo.location}.\nI specialize in building robust backend systems, databases, and seamless user interfaces.`;
          break;
        case 'experience':
          output = experience.map(exp => 
            `${exp.role} @ ${exp.company} (${exp.date})\n` + 
            exp.points.map(p => `  * ${p}`).join('\n') + `\n  Tech: ${exp.tech.join(', ')}`
          ).join('\n\n');
          break;
        case 'projects':
          output = projects.map((p, i) => 
            `${i + 1}. ${p.title} [${p.tech.join(', ')}]\n   ${p.description}`
          ).join('\n\n');
          break;
        case 'skills':
          output = `Technical Arsenal:\n[ ${skills.join(' | ')} ]`;
          break;
        case 'contact':
          output = `Email: ${personalInfo.email}\nGitHub: ${personalInfo.github}\nLinkedIn: ${personalInfo.linkedin}`;
          break;
        case 'light':
        case 'lightmode':
          setIsLightMode(true);
          output = "Theme updated: Light Mode engaged.";
          break;
        case 'dark':
        case 'darkmode':
          setIsLightMode(false);
          output = "Theme updated: Dark Mode engaged.";
          break;
        case 'clear':
        case 'cls':
          setHistory([]);
          setInput('');
          return;
        case 'exit':
        case 'gui':
          onSwitchToGUI();
          return;
        case '':
          output = '';
          break;
        default:
          output = `'${command}' is not recognized as an internal or external command,\noperable program or batch file. Type "help" for a list of commands.`;
      }

      if (output) {
        newHistory.push({ type: 'output', content: output });
        setIsTyping(true); // Trigger typing effect for the new output
      }

      setHistory(newHistory);
      setInput('');
    }
  };

  return (
    <div className="terminal-wrapper" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-header">
        <div className="terminal-title">Command Prompt - portfolio.exe</div>
        <div className="terminal-buttons-win">
          <span className="minimize">-</span>
          <span className="maximize">□</span>
          <span className="close" onClick={onSwitchToGUI}>×</span>
        </div>
      </div>
      
      <div className="terminal-body">
        {history.map((line, index) => {
          const isLastOutput = index === history.length - 1 && line.type === 'output';
          
          return (
            <div key={index} className={`terminal-line ${line.type}`}>
              {line.type === 'input' && <span className="prompt">{promptText} </span>}
              
              {/* Only animate the very last output */}
              {isLastOutput && isTyping ? (
                <TypewriterLine text={line.content} onComplete={() => setIsTyping(false)} />
              ) : (
                <pre>{line.content}</pre>
              )}
            </div>
          );
        })}
        
        {/* Only show the input field when we are done typing the previous output */}
        {!isTyping && (
          <div className="terminal-input-wrapper">
            <span className="prompt">{promptText} </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              autoFocus
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        )}
        <div ref={endOfTerminalRef} />
      </div>
    </div>
  );
};

export default Terminal;