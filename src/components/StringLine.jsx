import React from 'react';

export const StringLine = () => {
  return (
    <svg
      className="absolute left-0 top-[90%]" // Changed to start below the image
      width="40"
      height="60"
      viewBox="0 0 40 60"
      preserveAspectRatio="none"
      style={{
        pointerEvents: 'none',
        zIndex: 0
      }}
    >
      <path
        d="M8 0 V40 Q 10 50, 28 50" // Kept original curve coordinates
        stroke="#D1D5DB"
        strokeWidth="1.5"
        fill="transparent"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default StringLine;