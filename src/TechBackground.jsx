import React from 'react';

const TechBackground = () => {
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

          {/* Static Pattern Layer */}
          <pattern id="base-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* You can adjust the opacity="0.15" below to make the lines darker or lighter */}
            <use href="#tech-paths" stroke="var(--text-muted)" strokeWidth="1" fill="none" opacity="0.15" />
            <use href="#tech-nodes" fill="var(--text-muted)" opacity="0.15" />
          </pattern>
        </defs>

        {/* Render Pattern */}
        <rect width="100%" height="100%" fill="url(#base-pattern)" />
      </svg>
    </div>
  );
};

export default TechBackground;