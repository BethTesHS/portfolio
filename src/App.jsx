// src/App.jsx
import React, { useState, useEffect } from 'react';
import Portfolio from './components/Portfolio';
import Terminal from './components/Terminal';
import './App.css';

function App() {
  const [viewMode, setViewMode] = useState('gui'); // 'gui' or 'cli'
  const [isLightMode, setIsLightMode] = useState(false);

  // Apply the theme globally to the body tag
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  return (
    <>
      {viewMode === 'gui' ? (
        <Portfolio 
          onSwitchToCLI={() => setViewMode('cli')} 
          isLightMode={isLightMode}
          setIsLightMode={setIsLightMode}
        />
      ) : (
        <Terminal 
          onSwitchToGUI={() => setViewMode('gui')} 
          isLightMode={isLightMode}
          setIsLightMode={setIsLightMode}
        />
      )}
    </>
  );
}

export default App;