// src/components/CustomBulb.jsx
import React from 'react';

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

export default CustomBulb;