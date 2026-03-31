import React, { useState, useEffect } from 'react';

const TechBackground = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="tech-bg-container">
      <svg className="tech-bg-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          {/* Abstract Tech / Circuit Line Art */}
          <g id="tech-paths">
            <path d="M 0 50 L 50 50 L 100 100 L 200 100" />
            <path d="M 150 0 L 150 50 L 200 100" />
            <path d="M 100 100 L 100 200" />
            <path d="M 0 150 L 50 150 L 100 200 L 150 200" />
            <path d="M 200 150 L 150 150 L 100 100" />
            <path d="M 50 50 L 50 0" />
            <path d="M 150 150 L 150 200" />
          </g>

          {/* Abstract Nodes/Intersections */}
          <g id="tech-nodes">
            <circle cx="50" cy="50" r="3" />
            <circle cx="100" cy="100" r="4" />
            <circle cx="150" cy="50" r="3" />
            <circle cx="50" cy="150" r="3" />
            <circle cx="150" cy="150" r="3" />
          </g>

          {/* 1. Base Pattern Layer - Made more transparent (opacity 0.05) */}
          <pattern id="base-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <use href="#tech-paths" stroke="var(--text-muted)" strokeWidth="1" fill="none" opacity="0.05" />
            <use href="#tech-nodes" fill="var(--text-muted)" opacity="0.05" />
          </pattern>

          {/* 2. Illuminated Pattern Layer - Brighter colors for the cursor hover */}
          <pattern id="glow-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <use href="#tech-paths" stroke="var(--primary)" strokeWidth="1.5" fill="none" opacity="0.35" />
            <use href="#tech-nodes" fill="var(--primary)" opacity="0.45" />
          </pattern>

          {/* 3. Radial Gradient that tracks the mouse position */}
          <radialGradient 
            id="cursor-glow" 
            cx={mousePos.x} 
            cy={mousePos.y} 
            r="200" /* Radius of the glow */
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="white" stopOpacity="0.5" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>

          {/* 4. Mask that applies the radial gradient */}
          <mask id="glow-mask">
            <rect width="100%" height="100%" fill="url(#cursor-glow)" />
          </mask>
        </defs>

        {/* Render Base Pattern */}
        <rect width="100%" height="100%" fill="url(#base-pattern)" />
        
        {/* Render Illuminated Pattern on top, masked by the mouse glow */}
        <rect width="100%" height="100%" fill="url(#glow-pattern)" mask="url(#glow-mask)" />
      </svg>
    </div>
  );
};

export default TechBackground;