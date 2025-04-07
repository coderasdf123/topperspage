
import React from "react";

export const NavLine = ({ navItems, selectedNavCard, onSelect }) => {
  const offsetY = 8; // Adjust this value to control the initial offset
  
  return (
    <svg
      className="absolute -left-8 top-0 h-full"
      width="24"
      height="100%"
      viewBox="0 0 24 100"
      preserveAspectRatio="none"
      style={{ pointerEvents: "none" }}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgb(56, 189, 248)" />
          <stop offset="50%" stopColor="rgb(252, 211, 77)" />
          <stop offset="100%" stopColor="rgb(251, 146, 60)" />
        </linearGradient>
        
        {/* Create individual gradient IDs for each nav item */}
        {navItems.map((item, index) => (
          <linearGradient 
            key={`gradient-${index}`} 
            id={`gradient-${index}`} 
            x1="0%" 
            y1="0%" 
            x2="0%" 
            y2="100%"
          >
            <stop offset="0%" stopColor="rgb(56, 189, 248)" />
            <stop offset="50%" stopColor="rgb(252, 211, 77)" />
            <stop offset="100%" stopColor="rgb(251, 146, 60)" />
          </linearGradient>
        ))}
        
        {/* Radial gradient for the selected circle */}
        <radialGradient id="selectedCircleGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="rgb(252, 211, 77)" />
          <stop offset="100%" stopColor="rgb(251, 146, 60)" />
        </radialGradient>
      </defs>
      
      {/* Default gray vertical line */}
      <path d="M12 0 V100" stroke="#D1D5DB" strokeWidth="2" fill="transparent" />
      
      {/* Highlighted vertical path segments between each point */}
      {selectedNavCard && (
        <path
          d={`M12 ${offsetY} V${
            offsetY + (navItems.indexOf(selectedNavCard) / (navItems.length - 1)) * (100 - 2 * offsetY)
          }`}
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="transparent"
          className="nav-item-gradient"
        />
      )}
      
      {/* Circles for navigation points */}
      {navItems.map((item, index) => {
        const isSelected = item === selectedNavCard;
        let circleY = offsetY + (index / (navItems.length - 1)) * (100 - 2 * offsetY); // Positioning each node
        
        return (
          <g key={item}>
            {/* Regular circle with conditional fill */}
            <circle
              cx="12"
              cy={`${circleY}%`}
              r="3" // Reduced size for smaller nodes
              fill={isSelected ? "url(#selectedCircleGradient)" : "#D1D5DB"}
              className={`transition-all duration-300 ${isSelected ? 'nav-item-gradient' : ''}`}
              onClick={() => onSelect && onSelect(item)}
              style={{ cursor: onSelect ? 'pointer' : 'default' }}
            />
            
            {/* Optional: Add a subtle glow effect for the selected item */}
            {isSelected && (
              <circle
                cx="12"
                cy={`${circleY}%`}
                r="5"
                fill="transparent"
                stroke="url(#selectedCircleGradient)"
                strokeWidth="1"
                opacity="0.5"
                className="nav-item-gradient"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
};

export default NavLine;