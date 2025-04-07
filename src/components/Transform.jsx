import React from 'react';
import { useState, useEffect } from "react";
const Transform = () => {
  const [viewBox, setViewBox] = useState("0 0 480 480");
  const scaleLabels = [
    "Start",
    "Learning",
    "Progress",
    "Growth",
    "Practice",
    "Mastery",
    "Achievement",
    "Excellence",
    "Success"
  ];

  // Default for sm (≥640px)
  
    useEffect(() => {
      const updateViewBox = () => {
        if (window.innerWidth < 640) {
          setViewBox("0 0 380 380"); // For screens smaller than sm (<640px)
        } else {
          setViewBox("0 0 480 480"); // For sm (≥640px)
        }
      };
  
      updateViewBox(); // Initial call
      window.addEventListener("resize", updateViewBox);
      return () => window.removeEventListener("resize", updateViewBox);
    }, []);
  
  
  return (
    <div className="relative w-full sm:mx-auto h-[730px] sm:h-[900px] flex overflow-hidden bg-[#090909] bg-cover origin-top"
         style={{ backgroundImage: "url('tq_yvat5bg1lc-vxsz-1500h.png')" }}>
      <div className="relative w-full max-w-5xl sm:mx-auto sm:ml-[20%] px-2 sm:px-5 md:px-6">
      <img
        alt="starsvg133"
        src="/starsvg133-iai6.svg"
        className="absolute top-20 left-[10px]  sm:left-[50px] w-[14px] h-[14px] sm:top-20 sm:left-4 md:top-19 md:left-6"
      />
      <span className="absolute top-20 left-[25px] sm:left-[70px] text-[#a3a3a3] text-[10px] sm:text-xs font-semibold font-sf-pro whitespace-nowrap sm:left-8 md:left-12">
        PSYCHOLOGICAL TRANSFORMATION JOURNEY
      </span>

        <div className="absolute top-[104px] left-[12px] sm:left-[50px] w-full sm:static sm:mt-32 md:mt-24 sm:px-4 md:px-4">
          <div className="flex flex-col sm:flex-col md:flex-row items-start sm:items-start md:items-center gap-1 sm:gap-2">
            <span className="text-white text-xl sm:text-2xl md:text-[30px] font-bold font-sf-pro leading-tight sm:leading-[39px]">From</span>
            <span className="text-white text-xl sm:text-2xl md:text-[30px] font-bold font-sf-pro leading-tight sm:leading-[39px] relative">
              Self-Doubt
              <div className="absolute top-[23.6px] left-[50px] w-[130px] hidden md:block">
                <img
                  alt="degreeSectionsvgfill142"
                  src="/degreesectionsvgfill142-kl15.svg"
                  className="w-full h-[41px]"
                />
              </div>
            </span>
            <span className="text-white text-xl sm:text-2xl md:text-[29.88px] font-bold font-sf-pro leading-tight sm:leading-[39px]">
              to Self-Confidence: A Mental Evolution
            </span>
          </div>
        </div>

        <span className="absolute top-[200px] sm:top-[144px] left-[12px] sm:left-[50px] text-[#a3a3a3] text-sm sm:text-[13px] font-sf-pro leading-[18px] sm:leading-[20.81px] w-[380px] sm:w-[520px] sm:static sm:block sm:mt-4 sm:px-4 md:mt-4">
          <span className="font-sf-pro">
            Join thousands of students who transformed their IIT-JEE preparation journey from stress to success.{' '}
          </span>
          <span className="font-bold">Watch yourself grow with the right strategies,</span>
         
          <span> persistence, and a support system that believes in you!</span>
          </span>
          <div className="flex flex-col">
      <div className="hidden sm:flex items-center text-gray-200 text-sm space-x-2 max-w-[545px]">
        <img className="w-3 h-6" alt="" src="/svg-5.svg" />
        <p className="font-sf-pro-regular text-left">
          Transforming from self-doubt to self-confidence is crucial because self-doubt limits your potential, 
          making you second-guess your abilities and hesitate to take action, while self-confidence empowers 
          you to tackle challenges with clarity and resilience, leading to steady progress in your IIT-JEE journey.
        </p>
      </div>
      
      {/*<div className="hidden sm:flex items-center text-gray-200 text-sm space-x-2 mt-2 max-w-[545px]">
        <img className="w-3 h-3" alt="" src="/svg-5.svg" />
        <p className="font-sf-pro-regular text-left">
          When you shift to a confident mindset, you stop seeing difficulties as threats and start 
          treating them as opportunities to grow, making your preparation more effective and your success more achievable.
        </p>
      </div>*/}
    </div>
        
        
        <svg
  viewBox={viewBox}
  xmlns="http://www.w3.org/2000/svg"
  className="sm:mt-[-200px] sm:ml-[30px] mt-[280px] ml-[10px]"
>          <defs>
            <linearGradient id="horizontalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
            <filter id="brushEffect">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
          </defs>

          <path
  d="M 6 250 Q 180 250, 230 180 T 325 40"
  stroke="white"
  strokeOpacity="0.8"
  strokeWidth="3"
  fill="none"
/>

{/* Arrow at the end */}
<g transform="translate(327,35) rotate(-65)">
  <polygon points="0,0 -12,-7 -12,7" fill="white" fillOpacity="0.9" strokeOpacity="0.8"/>
</g>

<rect x="290" y="20" width="30" height="15" fill="black" opacity="1.7" rx="2" ry="2" filter="url(#brushEffect)"/>
<text x="330" y="22" fill="url(#horizontalGradient)" fontSize="8" textAnchor="middle">
  <tspan x="330" dy="0">Embrace</tspan>
  <tspan x="330" dy="12">Failure</tspan>
</text>


          
          {/* Text elements */}
          <g>
            {/* Challenge Your Thoughts */}
            <rect x="13" y="235" width="65" height="25" fill="black" opacity="1.7" rx="2" ry="2" filter="url(#brushEffect)" />
            <text x="45" y="235" fill="url(#horizontalGradient)" fontSize="8" textAnchor="middle">
            <tspan x="45" dy="0">Challenge</tspan>
            <tspan x="45" dy="12">Your Thoughts</tspan>
            </text>
            <text x="45" y="259" fill="white" fontSize="8" textAnchor="middle">
              <tspan x="45" dy="0">Reframe self-doubt</tspan>
              <tspan x="45" dy="12">and think logically.</tspan>
            </text>

            {/* Set Small, Achievable Goals */}
            <rect x="120" y="215" width="60" height="35" fill="black" opacity="2.7" rx="2" ry="2" filter="url(#brushEffect)" />
            <text x="150" y="225" fill="url(#horizontalGradient)" fontSize="8" textAnchor="middle">
              <tspan x="150" dy="0">Set Small,</tspan>
              <tspan x="150" dy="12">Achievable Goals</tspan>
            </text>
            <text x="155" y="247" fill="white" fontSize="8" textAnchor="middle">
              <tspan x="155" dy="0">Break big challenges</tspan>
              <tspan x="155" dy="12">into manageable steps</tspan>
            </text>

            {/* Strengthen Skills */}
            <rect x="220" y="175" width="40" height="25" fill="black" opacity="2.7" rx="2" ry="2" filter="url(#brushEffect)" />
            <text x="240" y="185" fill="url(#horizontalGradient)" fontSize="8" textAnchor="middle">
              <tspan x="240" dy="0">Strengthen Skills</tspan>
              <tspan x="240" dy="12">Consistently</tspan>
            </text>
            <rect x="210" y="200" width="40" height="25" fill="black" opacity="2.7" rx="2" ry="2" filter="url(#brushEffect)" />
            <text x="230" y="209" fill="white" fontSize="8" textAnchor="middle">
              <tspan x="232" dy="0">Build Skills</tspan>
              <tspan x="248" dy="12">with Regular Practice</tspan>
            </text>

            {/* Build Supportive Environment */}
            <rect x="288" y="80" width="40" height="25" fill="black" opacity="2.7" rx="2" ry="2" filter="url(#brushEffect)" />
            <text x="288" y="90" fill="url(#horizontalGradient)" fontSize="8" textAnchor="middle">
              <tspan x="288" dy="0">Build a Supportive</tspan>
              <tspan x="288" dy="12">Environment</tspan>
            </text>
            <rect x="268" y="105" width="40" height="25" fill="black" opacity="2.7" rx="2" ry="2" filter="url(#brushEffect)"/>
            <text x="288" y="115" fill="white" fontSize="8" textAnchor="middle">
              <tspan x="288" dy="0">Engage with mentors</tspan>
              <tspan x="288" dy="12">and communities</tspan>
            </text>
          </g>

          {/* Extended Horizontal Scale */}
          <g transform="translate(6, 300)">
            {/* Main horizontal line */}
            <line x1="0" y1="0" x2="360" y2="0" stroke="white" strokeWidth="1"/>
            
            {/* Vertical markers and text - generated programmatically */}
            {Array.from({ length: 41 }).map((_, i) => (
              <React.Fragment key={i}>
                {/* Long markers every 5th position with text */}
                {i % 5 === 0 ? (
                  <>
                    <line 
                      x1={i * 9} 
                      y1="-8" 
                      x2={i * 9} 
                      y2="8" 
                      stroke="white" 
                      strokeWidth="1"
                    />
                    {i / 5 < scaleLabels.length && (
                      <text 
                        x={i * 9} 
                        y="20" 
                        fill="white" 
                        fontSize="6" 
                        textAnchor="middle" 
                        transform={`rotate(0, ${i * 9}, 20)`}
                      >
                        {scaleLabels[i / 5]}
                      </text>
                    )}
                  </>
                ) : (
                  /* Short markers for other positions */
                  <line 
                    x1={i * 9} 
                    y1="-4" 
                    x2={i * 9} 
                    y2="4" 
                    stroke="white" 
                    strokeWidth="0.5"
                  />
                )}
              </React.Fragment>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Transform;