import React, { useState, useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import { ChevronDown, Check, Star, Zap, Brain, Target } from 'lucide-react';

function Section() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [activeLevel, setActiveLevel] = useState(null);
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const [percentages, setPercentages] = useState({
    beginner: 0,
    intermediate: 0,
    advanced: 0
  });

  const keywords = [
    "MOTIVATION?",
    "PROCRASTINATION?",
    "CONFUSION?",
    "PEER-PRESSURE?",
    "SELF-DOUBT?"
  ];

  const options = [
    { id: '1', label: 'Timeline', level: 'beginner' },
    { id: '2', label: 'FirstActionBox', level: 'beginner' },
    { id: '3', label: 'UnlockTheSecrets', level: 'beginner' },
    { id: '4', label: 'PyschologicalTransformation', level: 'beginner' },
    { id: '5', label: 'LifeStyleChange', level: 'beginner' },
    { id: '6', label: 'BreakingThePlateau', level: 'intermediate' },
    { id: '7', label: 'RevisionZone', level: 'intermediate' },
    { id: '8', label: 'StressManagement', level: 'intermediate' },
    { id: '9', label: 'SuccessStories', level: 'intermediate' },
    { id: '10', label: 'MasterClassVideos', level: 'advanced' },
    { id: '11', label: 'Toppers Secrets', level: 'advanced' },
    { id: '12', label: 'PeerInsights', level: 'advanced' },
    { id: '13', label: 'StrategySection', level: 'advanced' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword(prev => (prev + 1) % keywords.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const calculatePercentages = () => {
      const levelCounts = {
        beginner: options.filter(opt => opt.level === 'beginner').length,
        intermediate: options.filter(opt => opt.level === 'intermediate').length,
        advanced: options.filter(opt => opt.level === 'advanced').length
      };

      const selectedCounts = selectedOptions.reduce((acc, id) => {
        const option = options.find(opt => opt.id === id);
        if (option) {
          acc[option.level]++;
        }
        return acc;
      }, { beginner: 0, intermediate: 0, advanced: 0 });

      setPercentages({
        beginner: Math.round((selectedCounts.beginner / levelCounts.beginner) * 100) || 0,
        intermediate: Math.round((selectedCounts.intermediate / levelCounts.intermediate) * 100) || 0,
        advanced: Math.round((selectedCounts.advanced / levelCounts.advanced) * 100) || 0
      });
    };

    calculatePercentages();
  }, [selectedOptions]);

  const toggleOption = (id) => {
    setSelectedOptions(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleLevelClick = (level) => {
    setActiveLevel(prev => (prev === level ? null : level));
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div style={{ height: '730px', width: '100%' }} className="relative">
      {/* Main content here */}
      {/* Background Image Section */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat min-height:100vh"
      style={{ backgroundImage: 'url("Artboard 02.jpg")' }}
    >
    </div>
    <div className="floating-shape absolute w-[40vw] h-[40vw] md:w-[600px] md:h-[600px] bg-[#a7c7e7]/10 rounded-full blur-3xl transition-transform duration-[10000ms] ease-in-out top-[-10%] left-[-10%]" />
        <div className="floating-shape absolute w-[35vw] h-[35vw] md:w-[500px] md:h-[500px] bg-[#a7e7c7]/10 rounded-full blur-3xl transition-transform duration-[10000ms] ease-in-out top-[20%] right-[-5%]" />
        <div className="floating-shape absolute w-[45vw] h-[45vw] md:w-[700px] md:h-[700px] bg-[#f7b0b0]/10 rounded-full blur-3xl transition-transform duration-[10000ms] ease-in-out bottom-[-15%] left-[30%]" />
    {/*<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.075)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.075)_1px,transparent_1px)] bg-[size:50px_50px] animate-[pulse_4s_ease-in-out_infinite]" />*/}
  
  {/* Grid Overlay with Black Color 
  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.075)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.075)_1px,transparent_1px)] bg-[size:50px_50px] animate-[pulse_4s_ease-in-out_infinite]" />*/}

      {/* Main Content Container */}
      <div className="relative z-10 flex min-h-[3vh] items-center px-4">
  {/* Left Column - Dynamic Keywords */}
<div className="w-1/2 pl-[8%] pr-10 translate-y-[160px]">

{/* Heading */}
<h2 className="text-3xl font-semibold text-white text-center mt-6 -ml-[70%]">
  What's stopping you from cracking IIT-JEE!
</h2>

{/* Dynamic Keyword Section */}
<div className="relative inline-block -ml-[15%]">
  <h1 
    className="text-8xl font-bold text-transparent bg-clip-text bg-[#5A80B0] mt-[7px] mb-0 leading-tight" 
  >
    {keywords[currentKeyword]}
  </h1>
  <div
    className="absolute bottom-0 left-0 w-full"
    style={{
      height: '0.75px',
      background: '#5A80B0', // Gradient underline
      bottom: '-2px',
      animation: 'slideIn 0.5s ease-out forwards',
      transformOrigin: 'left'
    }}
  />
</div>

{/* User Rating Section */}
<div className="flex items-center -ml-[100px] justify-start space-x-6 mt-4">
  {/* Rating Stars */}
  <div className="flex items-center space-x-2">
    <span className="text-lg font-semibold text-white">Rated 4.9</span>
    <div className="flex text-white">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-current" />
      ))}
    </div>
  </div>

  {/* User Images and Trust Count */}
  <div className="flex items-center">
    <div className="flex -space-x-4">
      {['FACE1.jpeg', 'FACE2.jpeg', 'FACE3.jpg'].map((src, i) => (
        <img
          key={i}
          src={`/${src}`} // Public folder images can be accessed with a leading '/'
          alt={`User ${i + 1}`}
          className="h-8 w-8 rounded-full border-2 border-purple-900 object-cover transition-transform duration-300 hover:scale-110"
        />
      ))}
    </div>
    <p className="text-sm text-gray-100">
      Trusted by 10,000+ users
    </p>
  </div>
</div>

</div>

        {/* Right Column - Main Content */}
        <div className="w-[calc(50%-8rem)] pt-[345px]">
          <div className="max-w-2xl text-center">
            {/* Heading Section */}
            <h1 className="mb-8 text-6xl font-bold text-white bg-clip-text text-transparent bg-white">
              Where are you stuck at?
            </h1>

            {/* Difficulty Level Buttons Section */}
            <div className="mb-12 flex flex-wrap justify-center gap-4">
  {/* Beginner Button */}
  <div className="flex flex-col items-center">
    <button
      onClick={() => handleLevelClick('beginner')}
      className={`group relative flex items-center space-x-2 rounded-lg px-6 py-3 text-lg font-semibold transition-all duration-300
        ${activeLevel === 'beginner'
          ? 'bg-green-500 text-white shadow-lg shadow-green-500/50'
          : 'bg-green-500 text-white hover:bg-green-600'}`}
    >
      <Zap className="h-5 w-5" />
      <span>Beginner</span>
      <div className="absolute inset-0 rounded-lg bg-white/0 transition-all duration-300 group-hover:bg-white/5" />
    </button>
    <div className="mt-2 text-sm font-medium text-green-400">{percentages.beginner}% Selected</div>
  </div>

  {/* Intermediate Button */}
  <div className="flex flex-col items-center">
    <button
      onClick={() => handleLevelClick('intermediate')}
      className={`group relative flex items-center space-x-2 rounded-lg px-6 py-3 text-lg font-semibold transition-all duration-300
        ${activeLevel === 'intermediate'
          ? 'bg-yellow-500 text-white shadow-lg shadow-yellow-500/50'
          : 'bg-yellow-500 text-white hover:bg-yellow-600'}`}
    >
      <Brain className="h-5 w-5" />
      <span>Intermediate</span>
      <div className="absolute inset-0 rounded-lg bg-white/0 transition-all duration-300 group-hover:bg-white/5" />
    </button>
    <div className="mt-2 text-sm font-medium text-white">{percentages.intermediate}% Selected</div>
  </div>

  {/* Advanced Button */}
  <div className="flex flex-col items-center">
    <button
      onClick={() => handleLevelClick('advanced')}
      className={`group relative flex items-center space-x-2 rounded-lg px-6 py-3 text-lg font-semibold transition-all duration-300
        ${activeLevel === 'advanced'
          ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
          : 'bg-purple-500 text-white hover:bg-purple-600'}`}
    >
      <Target className="h-5 w-5" />
      <span>Advanced</span>
      <div className="absolute inset-0 rounded-lg bg-white/0 transition-all duration-300 group-hover:bg-white/5" />
    </button>
    <div className="mt-2 text-sm font-medium text-purple-400">{percentages.advanced}% Selected</div>
  </div>
</div>

            


      <div className="mb-16">
      {/* Dropdown */}
      <div className="relative inline-block w-full max-w-md" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between rounded-lg bg-white/10 px-6 py-4 text-lg text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-purple-500/20"
        >
          <span>
            {selectedOptions.length === 0
              ? 'Select your challenges'
              : `${selectedOptions.length} selected`}
          </span>
          <ChevronDown className={`ml-2 h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute mt-2 w-full max-h-[110px] overflow-auto rounded-lg bg-white/10 backdrop-blur-md scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent [z-1500] shadow-xl">
            <div className="relative">
              {options.map((option) => (
                <label
                  key={option.id}
                  className={`flex cursor-pointer items-center px-6 py-3 transition-colors duration-200 hover:bg-white/10 backdrop-blur-md
                     // Add small padding to the third option to show 50%
                  `}
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={selectedOptions.includes(option.id)}
                    onChange={() => toggleOption(option.id)}
                  />
                  <div className="mr-3 flex h-5 w-5 items-center justify-center rounded border border-white/30">
                    {selectedOptions.includes(option.id) && (
                      <Check className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <span className="text-white">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>

</div>
            </div>
          </div>

    </div>
  );
}

const Section5 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start py-10 px-[397px] box-border bg-[url('/section@3x.png')] bg-cover bg-no-repeat bg-[left] w-[120%] text-left text-11xl text-black font-inter mq450:pt-[26px] mq450:pb-[70px] mq450:box-border mq925:pl-[300px] mq925:pr-[300px] mq925:box-border mq1400:pl-[400px] mq1400:pr-[400px] mq1400:box-border ${className}`}
    >
      <div className="flex-1 rounded-2xl bg-white flex flex-row items-end justify-between pt-[35px] px-[70px] pb-[41px] box-border w-[120%] gap-5 mq1875:flex-wrap -ml-[30%]">
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[26.1px] box-border min-w-[439.6px] max-w-full mq1400:min-w-full mq1875:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[28.8px]">
            {/* Content for Section5 */}
            <div className="self-stretch flex flex-col items-start justify-start gap-2.5 shrink-0">
              <h1 className="m-0 relative text-inherit leading-[39px] font-bold font-inherit mq450:text-lg mq450:leading-[23px] mq925:text-5xl mq925:leading-[31px]">
                <p className="m-0">What's the One Thing you can do</p>
                <p className="m-0">Today to move Forward</p>
              </h1>
              <div className="self-stretch relative text-sm leading-[22.4px] text-dimgray-100">
                <p className="m-0">
                  Take the first step towards your IIT-JEE journey with
                </p>
                <p className="m-0">personalized guidance and inspiring tools.</p>
              </div>
            </div>
            <div className="w-[266.1px] flex flex-row items-start justify-start p-px box-border text-center text-sm text-gray-600">
  <div className="h-[50px] w-[266.1px] relative rounded-16xl [background:linear-gradient(92.29deg,#39b6d8,#f7d344_50%,_#e38330)] hidden" />
  
  <div className="rounded-full bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 p-0.5"> {/* Gradient Outline */}
    <div className="flex-1 rounded-35xl bg-white overflow-hidden flex flex-row items-start justify-start pt-3 px-5 pb-2.5 gap-[7.8px] z-[1] mq925:flex-wrap">
      <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[127px]">
        <div className="self-stretch relative leading-[24px] font-semibold whitespace-nowrap">
          Take your first Step with NNIIT
        </div>
      </div>
      <img className="h-6 w-6 relative" alt="" src="/svg-4.svg" />
    </div>
  </div>
</div>

          </div>
        </div>
        <img
          className="w-[481px] relative max-h-full overflow-hidden shrink-0 object-cover max-w-full mq1875:flex-1"
          loading="lazy"
          alt=""
          src="/placementreport24webp@2x.png"
        />

          </div>
      

    </section>
  );
};

Section5.propTypes = {
  className: PropTypes.string,
};

export {Section,Section5};
