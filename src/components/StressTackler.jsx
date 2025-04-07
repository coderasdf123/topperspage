import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const BasicCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Card data
  const cards = [
    {
      icon: '/starsvg1356-ir4.svg',
      title: '"Movement is Medicine"',
      description: 
        "Physical activity releases endorphins, natural mood boosters that reduce stress. Regular exercise not only improves physical health but also alleviates mental tension and enhances sleep quality. Even just 20 minutes of movement can significantly reduce stress hormones in your body.",
    },
    {
      icon: '/gassesssvg1408-w67.svg',
      title: '"Seek Support, Strengthen Your Resolve"',
      description:
        "Talking to friends, family, or a therapist provides emotional support and perspective. Sharing your feelings and seeking guidance helps you feel heard and reduces the weight of stress. Remember that asking for help is a sign of strength, not weakness.",
    },
    {
      icon: '/asvg1371-njba.svg',
      title: '"Calm Begins with the Breath"',
      description:
        "Focusing on deep, intentional breathing calms the nervous system, reduces stress hormones, and anchors the mind in the present moment. Regular breathing practice improves emotional resilience and helps you stay centered during challenging IIT-JEE preparation periods.",
    },
    {
      icon: '/starsvg1356-ir4.svg',
      title: '"Mind Over Matter"',
      description: 
        "Positive visualization and mindfulness techniques can rewire your brain's response to stress. Taking just 10 minutes daily to practice mindfulness can improve concentration, enhance memory, and reduce anxiety. This is particularly beneficial before tackling complex JEE problems.",
    },
  ];

  // Auto scrolling logic
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, cards.length]);

  // Handle card click
  const handleCardClick = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-scrolling after a period of inactivity
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="flex flex-row items-center gap-2 mb-4">
          <img
            className="w-4 h-4 pt-[35px]"
            alt="Star"
            src="/starsvg.svg"
          />
          <div className="text-[#a3a3a3] text-xs font-semibold font-sf-pro pt-[35px]">
           TACKLE STRESS FROM HERE
          </div>
        </div>
      <div className="mb-8">
        <h1 className="text-[24px] sm:text-2xl font-sf-pro font-bold text-gray-900 mb-4 relative right-[4px] sm:right-[0px]">
          Fuel Your IIT-Journey with 
          <span className="ml-2 text-indigo-600">
            Proven Strategies
          </span>
        </h1>
        
        <p className="text-gray-600 font-sf-pro text-md sm:text-base w-[90%] sm:w-full">
          Unlock success with wisdom from top performers and research-backed techniques
          that shape habits, mindset, and focus during your preparation journey.
        </p>
      </div>

      {/* Current active card */}
      <div className="mb-8 pr-8 sm:pr-0">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-start mb-4">
            <div className="p-3 bg-purple-50 rounded-lg mr-4">
              <img
                src={cards[activeIndex].icon}
                alt="Card icon"
                className="w-10 h-10"
              />
            </div>
          </div>
          
          <h2 className="text-lg sm:text-xl font-sf-pro font-bold text-black  mb-3">
            {cards[activeIndex].title}
          </h2>
          
          <p className="text-gray-600 font-sf-pro text-md sm:text-base">
            {cards[activeIndex].description}
          </p>
          
          <div className="mt-4 flex items-center text-indigo-600 font-sf-pro font-medium">
            <span>Learn more</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center space-x-2 mb-4">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => handleCardClick(index)}
            className={`w-1 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              activeIndex === index 
                ? 'bg-indigo-600 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to strategy ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between">
  <button 
    onClick={() => handleCardClick((activeIndex - 1 + cards.length) % cards.length)}
    className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-lg"
  >
    <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" /> 
  </button>
  
  <button 
    onClick={() => handleCardClick((activeIndex + 1) % cards.length)}
    className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 relative right-6 sm:right-0 rounded-lg"
  >
    <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" /> 
  </button>
</div>
    </div>
  );
};

export default BasicCards;