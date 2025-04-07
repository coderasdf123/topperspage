import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check, Star, Zap, Brain, Target } from 'lucide-react';
import ImageCarousel from './imageCarousel'; // Import the new carousel component

function Section({ onSelectionChange }) {
  const [isOpen, setIsOpen] = useState(true); 
  const [selectedOptions, setSelectedOptions] = useState([]); // Start empty for dropdown UI
  const [activeLevel, setActiveLevel] = useState(null);
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const [percentages, setPercentages] = useState({
    beginner: 0,
    intermediate: 0,
    advanced: 0
  });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [isSelectAllChecked, setIsSelectAllChecked] = useState(false);

  const keywords = [
    "MOTIVATION?",
    "PROCRASTINATION?",
    "CONFUSION?",
    "PEER-PRESSURE?",
    "SELF-DOUBT?"
  ];

  const options = [
    { id: '1', label: 'Timeline', level: 'beginner' },
    {id: '2', label: 'LifeAtIIT', level: 'beginner'},
    { id: '3', label: 'FirstActionBox', level: 'beginner' },
    { id: '4', label: 'UnlockTheSecrets', level: 'beginner' },
    { id: '5', label: 'PyschologicalTransformation', level: 'beginner' },
    { id: '6', label: 'LifeStyleChange', level: 'beginner' },
    { id: '7', label: 'BreakingThePlateau', level: 'intermediate' },
    { id: '8', label: 'RevisionZone', level: 'intermediate' },
    { id: '9', label: 'SuccessStories', level: 'intermediate' },
    { id: '10', label: 'StressManagement', level: 'intermediate' },
    { id: '11', label: 'MasterClassVideos', level: 'intermediate' },
    { id: '12', label: 'Toppers Secrets', level: 'advanced' },
    { id: '13', label: 'StrategySection', level: 'advanced' },
    { id: '14', label: 'PeerInsights', level: 'advanced' },
    { id: '15', label: 'MockExam', level: 'advanced' },
    { id: '16', label: 'StrategySection', level: 'advanced' }
  ];

  // Initialize with all options but keep select all unchecked
  useEffect(() => {
    const allOptions = options.map(opt => opt.id);
    setSelectedOptions([]); // Dropdown shows empty
    onSelectionChange(allOptions); // But parent gets all options
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword(prev => (prev + 1) % keywords.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const calculatePercentages = () => {
      const totalPerLevel = 5;
      const selectedCounts = {
        beginner: selectedOptions.filter(id => 
          options.find(opt => opt.id === id)?.level === 'beginner'
        ).length,
        intermediate: selectedOptions.filter(id => 
          options.find(opt => opt.id === id)?.level === 'intermediate'
        ).length,
        advanced: selectedOptions.filter(id => 
          options.find(opt => opt.id === id)?.level === 'advanced'
        ).length
      };

      setPercentages({
        beginner: Math.round((selectedCounts.beginner / totalPerLevel) * 100),
        intermediate: Math.round((selectedCounts.intermediate / totalPerLevel) * 100),
        advanced: Math.round((selectedCounts.advanced / totalPerLevel) * 100)
      });
    };

    calculatePercentages();
  }, [selectedOptions]);

  const toggleOption = (id) => {
    const newSelectedOptions = selectedOptions.includes(id)
      ? selectedOptions.filter(item => item !== id)
      : [...selectedOptions, id];
    
    const sortedOptions = newSelectedOptions.sort((a, b) => parseInt(a) - parseInt(b));
    setSelectedOptions(sortedOptions);
    
    // If no options are selected, pass all options to parent
    onSelectionChange(sortedOptions.length === 0 ? options.map(opt => opt.id) : sortedOptions);
    
    // Update select all checkbox
    setIsSelectAllChecked(sortedOptions.length === options.length);
  };

  const handleSelectAll = () => {
    const newSelectAllState = !isSelectAllChecked;
    setIsSelectAllChecked(newSelectAllState);
    
    if (newSelectAllState) {
      const allOptions = options.map(opt => opt.id);
      setSelectedOptions(allOptions);
      onSelectionChange(allOptions);
    } else {
      setSelectedOptions([]);
      onSelectionChange(options.map(opt => opt.id)); // Still show all sections
    }
  };

  const handleLevelClick = (level) => {
    setActiveLevel(level === activeLevel ? null : level);
    
    const levelOptions = options.filter(opt => opt.level === level).map(opt => opt.id);
    
    const newSelectedOptions = level === activeLevel
      ? selectedOptions.filter(id => !levelOptions.includes(id))
      : [...new Set([...selectedOptions, ...levelOptions])];
    
    const sortedOptions = newSelectedOptions.sort((a, b) => parseInt(a) - parseInt(b));
    setSelectedOptions(sortedOptions);
    
    // If no options are selected, pass all options to parent
    onSelectionChange(sortedOptions.length === 0 ? options.map(opt => opt.id) : sortedOptions);
    
    // Update select all checkbox
    setIsSelectAllChecked(sortedOptions.length === options.length);
  };

  const handleCarouselSelection = (level) => {
    handleLevelClick(level);
  };

  const dropdownRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth < 640) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
            !backgroundRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      } else {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleBackgroundClick = (e) => {
    if (window.innerWidth < 640 && !dropdownRef.current?.contains(e.target)) {
      setIsOpen(true);
    }
  };

  return (
    <div className="relative h-[650px] sm:h-[730px] w-full overflow-x:hidden">
      {/* Background Section with Dynamic Image */}
      <>
        {/* Mobile Background (hidden on sm and above) */}
        <div 
          ref={backgroundRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden"
          style={{
            backgroundImage: `url('/finall.jpeg')`
          }}
          onClick={handleBackgroundClick}
        />
        
        {/* Desktop Background (hidden below sm) */}
        <div 
          ref={backgroundRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block"
          style={{
            backgroundImage: `url('/Artboard 02.jpg')`
          }}
          onClick={handleBackgroundClick}
        />
      </>
      {/* Floating Shapes */}
      <div className="floating-shape absolute w-[40vw] h-[40vw] md:w-[600px] md:h-[600px] bg-[#a7c7e7]/10 rounded-full blur-3xl transition-transform duration-[10000ms] ease-in-out top-[-10%] left-[-10%]" />
      <div className="floating-shape absolute w-[35vw] h-[35vw] md:w-[500px] md:h-[500px] bg-[#a7e7c7]/10 rounded-full blur-3xl transition-transform duration-[10000ms] ease-in-out top-[20%] right-[-5%]" />
      <div className="floating-shape absolute w-[45vw] h-[45vw] md:w-[700px] md:h-[700px] bg-[#f7b0b0]/10 rounded-full blur-3xl transition-transform duration-[10000ms] ease-in-out bottom-[-15%] left-[30%]" />

      {/* Main Content Section */}
      <div className="relative z-10 flex flex-col sm:flex-row min-h-[3vh] px-0 sm:min-h-[4vh] items-start sm:px-2 xl:min-h-[5vh] xl:items-center xl:px-4">
        
        {/* Heading Section */}
        <div className="w-full sm:w-1/2 px-1 sm:px-2 sm:pl-[8%] sm:pr-10 translate-y-[100px] sm:translate-y-[160px] mt-4 sm:mt-0">
          <h2 className="text-lg sm:text-xl font-sf-pro text-white text-center translate-y-[30px] sm:pt-0 -ml-[5%] sm:-ml-[55%]">
          What's stopping you from acing your exams!
          </h2>

          {/* Dynamic Heading */}
          <div className="relative inline-block ml-[10%] sm:-ml-[15%] translate-y-[5px]">
            <h1 className="text-5xl sm:text-8xl font-sf-pro-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#B829DD] via-[#4285F4] to-[#00C9A7] mb-0 leading-tight">
              {keywords[currentKeyword]}
            </h1>
            <div
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: '0.75px',
                background: '#5A80B0',
                bottom: '-2px',
                animation: 'slideIn 0.5s ease-out forwards',
                transformOrigin: 'left'
              }}
            />
          </div>

          <div className="flex items-center translate-y-[355px] sm:translate-y-[0px] sm:-translate-x-20 space-x-2">
            {/* Large User Images */}
            <div className="flex gap-0 -space-x-4 translate-y-27 sm:translate-y-6">
            {['FACE1.jpeg', 'FACE2.jpeg', 'FACE3.jpg'].map((src, i) => (
                <img
                  key={i}
                  src={`/${src}`}
                  alt={`User ${i + 1}`}
                  className="h-8 w-8 -top-4 sm:h-10 sm:w-10 rounded-full border-2 border-purple-900 object-cover transition-transform duration-300 hover:scale-110"
                />
              ))}
            </div>

            <div className="flex flex-col sm:ml-0 sm:translate-y-4 ml-auto">
              <p className="text-xs font-sf-pro-medium text-gray-100 mb-2">
                Trusted by 1M+ users
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-sf-pro-medium text-gray-200">Rated 4.9</span>
                <div className="flex text-white">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - REPLACED WITH CAROUSEL */}
        <div className="w-full sm:w-[calc(50%-6rem)] pt-2 sm:pt-[240px] px-4 sm:px-0 sm:ml-[20%] -translate-y-[40%] sm:translate-y-[0%] sm:top-[80%]">
          <div className="max-w-2xl text-start">
           {/* <h1 className="mb-6 text-4xl sm:text-6xl font-sf-pro font-bold text-white">
              Where are you stuck at?
            </h1>*/}
            
            <div className="hidden sm:block">
        <ImageCarousel onSelectionChange={handleCarouselSelection} />
              </div>

            {/* Modified Dropdown Section */}
            {/*<div className="mt-6 mb-8">
              <div className="relative inline-block w-1/2 max-w-xs sm:max-w-lg" ref={dropdownRef}>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex w-full items-center justify-between rounded-lg bg-white/10 px-3 py-2 text-sm font-sf-pro-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 shadow-lg shadow-purple-500/70 sm:px-4 sm:py-3 sm:text-base"
                >
                  <span>
                    {selectedOptions.length === 0
                      ? 'Select your challenges'
                      : `${selectedOptions.length} selected`}
                  </span>
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="absolute mt-2 w-full max-h-[100px] overflow-auto rounded-lg bg-white/10 backdrop-blur-md scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent z-50 shadow-xl">
                    <label
                      className="flex cursor-pointer items-center px-3 py-1.5 transition-colors duration-200 hover:bg-white/10 backdrop-blur-md border-b border-white/10 sm:px-4 sm:py-2"
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={isSelectAllChecked}
                        onChange={handleSelectAll}
                      />
                      <div className="mr-2 flex h-4 w-4 items-center justify-center rounded border border-white/30">
                        {isSelectAllChecked && (
                          <Check className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <span className="text-white text-xs sm:text-sm font-sf-pro-medium">Select All</span>
                    </label>
                    
                    {options.map((option) => (
                      <label
                        key={option.id}
                        className="flex cursor-pointer items-center px-3 py-1.5 transition-colors duration-200 hover:bg-white/10 backdrop-blur-md sm:px-4 sm:py-2"
                      >
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={selectedOptions.includes(option.id)}
                          onChange={() => toggleOption(option.id)}
                        />
                        <div className="mr-2 flex h-4 w-4 items-center justify-center rounded border border-white/30">
                          {selectedOptions.includes(option.id) && (
                            <Check className="h-4 w-4 text-white" />
                          )}
                        </div>
                        <span className="text-white text-xs font-sf-pro-medium sm:text-sm">{option.label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>*/}

            {/* Percentages Display - Mobile Only */}
            {/* <div className="grid grid-cols-3 gap-4 mt-0 sm:hidden">
              <div className="text-center">
                <div
                  className="text-[#fe9816] font-bold text-lg"
                  style={{
                    transform: 'rotate(-30deg)',
                    marginTop: '130%',
                    marginRight: '10%',
                  }}
                >
                  {percentages.beginner}%
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-[#fe9113] font-bold text-lg"
                  style={{
                    transform: 'rotate(-30deg)',
                    marginTop: '85%',
                    marginRight: '10%',
                  }}
                >
                  {percentages.intermediate}%
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-[#f83600] font-bold text-lg"
                  style={{
                    transform: 'rotate(-30deg)',
                    marginBottom: '6%',
                    marginTop: '40%',
                    marginRight: '70%',
                  }}
                >
                  {percentages.advanced}%
                </div>
              </div>
            </div>*/}

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;