
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, Phone, CheckIcon } from 'lucide-react';
import { navItems, classOptions, navCardItemsData, sectionImages, contentData, airRangeContent, regularContentData } from './content-data';
import StringLine from './StringLine';
import NavLine from './NavLine';

const NavigationStratsSection = () => {
  const [selectedNav, setSelectedNav] = useState('AIR Strategies');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedClass, setSelectedClass] = useState('Class 11th');
  const [selectedNavCard, setSelectedNavCard] = useState('Daily Schedule');
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const [showAirDropdown, setShowAirDropdown] = useState(false);
  const [selectedAirRange, setSelectedAirRange] = useState('AIR 1-10');
  const [selectedText, setSelectedText] = useState({ index: null, text: '' });
  const [isPlaying, setIsPlaying] = useState({});
  const [highlightedWordInfo, setHighlightedWordInfo] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isRinging, setIsRinging] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    class: '',
    stream: ''
  });

  const dropdownRef = useRef(null);
  const airDropdownRef = useRef(null);
  const speechRef = useRef(null);
  // Add a ref to track the section visibility
  const sectionRef = useRef(null);
  // Track if section is currently visible
  const [isInView, setIsInView] = useState(false);
  // Auto-selection variables
  let autoSelectInterval = useRef(null);
  let userHasSelected = useRef(false);
  let currentAutoSelectIndex = useRef(0);
  const [position, setPosition] = useState(0);
  const [imageCache, setImageCache] = useState({});
  
  // Improved animation for the phone button with more visible colors
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 30); // Slowed down for better visibility
    
    return () => clearInterval(interval);
  }, []);

  const handleTextSelection = (index) => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    if (selectedText) {
      setSelectedText({
        index: index,
        text: selectedText
      });
    }
  };

  const handlePhoneClick = () => {
    setIsRinging(true);
    setTimeout(() => {
      setIsRinging(false);
      setShowForm(true);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Form submission is handled by setting formSubmitted to true in the onSubmit handler
  };

  const speak = (index, fullText) => {
    window.speechSynthesis.cancel();
    if (speechRef.current) {
      speechRef.current.onboundary = null;
    }

    if (isPlaying[index]) {
      setIsPlaying(prev => ({ ...prev, [index]: false }));
      setHighlightedWordInfo(null);
      return;
    }

    const textToSpeak = (selectedText.index === index && selectedText.text)
      ? selectedText.text
      : fullText;

    if (textToSpeak) {
      const speech = new SpeechSynthesisUtterance(textToSpeak);
      speech.rate = 1.0;
      speech.pitch = 1.0;
      speech.volume = 1.0;

      const voices = window.speechSynthesis.getVoices();
      // Use a single "sweet" voice: Google UK English Female
      const sweetVoice = voices.find(voice => voice.name === "Victoria");
      if (sweetVoice) {
        speech.voice = sweetVoice;
        speech.pitch = 1.2; // Slightly higher pitch for a sweeter tone
        speech.rate = 1.0;  // Slightly slower for a soothing effect
      } else {
        // Fallback to any English voice if the sweet voice isn't available
        const fallbackVoice = voices.find(voice => voice.lang.startsWith('en-'));
        if (fallbackVoice) {
          speech.voice = fallbackVoice;
        }
      }

      const words = textToSpeak.split(' ').map((word, idx) => ({
        word,
        uniqueId: `${index}-${idx}`
      }));
      let currentWordIndex = 0;

      speech.onboundary = (event) => {
        if (event.name === 'word') {
          setHighlightedWordInfo({
            word: words[currentWordIndex].word,
            uniqueId: words[currentWordIndex].uniqueId
          });
          currentWordIndex++;
        }
      };

      speech.onend = () => {
        setIsPlaying(prev => ({ ...prev, [index]: false }));
        setHighlightedWordInfo(null);
      };

      speech.onerror = () => {
        setIsPlaying(prev => ({ ...prev, [index]: false }));
        setHighlightedWordInfo(null);
        console.error('Speech synthesis error occurred');
      };

      speechRef.current = speech;
      setIsPlaying(prev => ({ ...prev, [index]: true }));
      window.speechSynthesis.speak(speech);
    }
  };

  // Function to get content based on selections
  const getCurrentContent = () => {
    if (selectedNav === 'AIR Strategies') {
      return airRangeContent[selectedAirRange]?.content[selectedNavCard] || [];
    }
    return regularContentData[selectedNav]?.content[selectedNavCard] || [];
  };

  // Function to get all available options for the current navigation
  const getAvailableOptions = () => {
    if (selectedNav === 'AIR Strategies') {
      return Object.keys(airRangeContent[selectedAirRange]?.content || {});
    }
    return Object.keys(regularContentData[selectedNav]?.content || {});
  };

  // Function to handle manual user selection
  const handleUserSelection = (nav, card) => {
    userHasSelected.current = true;
    
    // If there's an interval running, stop it
    if (autoSelectInterval.current) {
      clearInterval(autoSelectInterval.current);
      autoSelectInterval.current = null;
    }
    
    // Update the selections
    setSelectedNavCard(card);
  };

  // Function to start auto-selection
  // Modify startAutoSelection function to handle the first item selection
  const startAutoSelection = () => {
    // Clear any existing interval
    if (autoSelectInterval.current) {
      clearInterval(autoSelectInterval.current);
    }
    
    // Get available options for current navigation
    const options = getAvailableOptions();
    
    // Set initial selection to first option if available
    if (options.length > 0) {
      setSelectedNavCard(options[0]);
    }
    
    // Start new interval for auto-selection
    autoSelectInterval.current = setInterval(() => {
      // Skip if user has manually selected
      if (userHasSelected.current) {
        clearInterval(autoSelectInterval.current);
        autoSelectInterval.current = null;
        return;
      }
      
      const options = getAvailableOptions();
      
      if (options.length > 0) {
        // Move to next index or reset to beginning
        currentAutoSelectIndex.current = (currentAutoSelectIndex.current + 1) % options.length;
        setSelectedNavCard(options[currentAutoSelectIndex.current]);
      }
    }, 3000); // 3 seconds interval
  };

  // Function to handle navigation change
  const handleNavChange = (navItem) => {
    // Reset the user selection flag when changing navigation
    userHasSelected.current = false;
    
    // Update selected navigation
    setSelectedNav(navItem);
    setShowDropdown(false);
  };

  // Reset user selection and start auto-selection when navigation changes
  useEffect(() => {
    // Clear any existing auto-selection interval
    if (autoSelectInterval.current) {
      clearInterval(autoSelectInterval.current);
      autoSelectInterval.current = null;
    }
    
    // Reset user selection flag
    userHasSelected.current = false;
    
    // Get the first option for the current navigation section
    const options = getAvailableOptions();
    const firstOption = options[0] || 
      navCardItemsData[selectedNav === 'Conceptual Clarity & Problem Solving' ? 'Conceptual Clarity' : selectedNav]?.[0];
    
    // Always reset to the first option when navigation changes
    if (firstOption) {
      setSelectedNavCard(firstOption);
    }
    
    // Start auto-selection
    startAutoSelection();
    
  }, [selectedNav, selectedAirRange]); // This effect runs when navigation changes

  // Initial class selection based on navigation
  useEffect(() => {
    switch (selectedNav) {
      case 'AIR Strategies':
        setSelectedNavCard('Daily Schedule');
        break;
      case 'Class 11th':
        setSelectedNavCard('"Why" Notebook');
        break;
      case 'Class 12th':
        setSelectedNavCard('The 60-40 Rule');
        break;
      case 'Custom Strategy':
        setSelectedNavCard('Personalized Plan');
        break;
      case 'Conceptual Clarity & Problem Solving':
        setSelectedNavCard('Visual Learning');
        break;
      default:
        if (selectedNav === 'Class 11th') {
          setSelectedNavCard('"Why" Notebook');
        } else if (selectedNav === 'Class 12th') {
          setSelectedNavCard('The 60-40 Rule');
        } else if (selectedNav === 'Custom Strategy') {
          setSelectedNavCard('Personalized Plan');
        }
    }
  }, [selectedNav]);

  const getCurrentImages = () => {
    if (selectedNav === 'Select your Class') {
      return sectionImages[selectedClass];
    }
    return sectionImages[selectedNav] || sectionImages['AIR Strategies'];
  };

  const handleClassSelect = (option) => {
    handleNavChange(option);
    setSelectedClass(option);
    setShowDropdown(false);
  };

  const getCurrentToppers = () => {
    if (selectedNav === 'AIR Strategies') {
      return airRangeContent[selectedAirRange]?.toppers[selectedNavCard];
    }
    if (['Custom Strategy', 'Conceptual Clarity & Problem Solving'].includes(selectedNav)) {
      return regularContentData[selectedNav]?.textHeaders[selectedNavCard];
    }
    return regularContentData[selectedNav]?.toppers[selectedNavCard];
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (airDropdownRef.current && !airDropdownRef.current.contains(event.target)) {
        setShowAirDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Clear any running intervals when component unmounts
      if (autoSelectInterval.current) {
        clearInterval(autoSelectInterval.current);
      }
    };
  }, []);

  // Fixed ContentSection component to prevent constant re-rendering
  const ContentSection = ({ toppers, index, isTextOnly }) => {
    // Load and cache image
    useEffect(() => {
      if (!isTextOnly && !imageCache[index] && toppers[index]?.image) {
        const img = new Image();
        img.src = toppers[index].image;
        img.onload = () => {
          setImageCache(prev => ({
            ...prev,
            [index]: toppers[index].image
          }));
        };
        img.onerror = () => {
          setImageCache(prev => ({
            ...prev,
            [index]: "/cropped-peer2.png"
          }));
        };
      }
    }, [index, isTextOnly, toppers]);

    return (
      <div className="flex items-center gap-2 relative">
        <div className="flex-shrink-0 relative w-4 h-4">
          <img
            src={imageCache[index] || (isTextOnly ? "/cropped-peer2.png" : toppers[index]?.image || "/cropped-peer2.png")}
            alt={isTextOnly ? "Icon" : `${toppers[index]?.name}'s photo`}
            className="w-full h-full object-cover rounded-full"
            style={{ transition: 'opacity 0.3s ease-in-out' }}
          />
        </div>
        <div className="bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 text-black text-xs font-bold font-sf-pro-bold px-2 py-1 rounded-full h-6 flex items-center">
          {isTextOnly ?
            toppers[index] :
            `${toppers[index].rank} - ${toppers[index].name} (${toppers[index].year})`
          }
        </div>
        <StringLine />
      </div>
    );
  };
  
  // Create an intersection observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When visibility changes
        const wasInView = isInView;
        const nowInView = entry.isIntersecting;
        
        setIsInView(nowInView);
        
        // If section comes back into view after being out of view
        if (nowInView && !wasInView) {
          // Reset auto-selection
          resetAutoSelection();
        }
      },
      {
        root: null, // viewport
        threshold: 0.2, // trigger when 20% of the element is visible
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isInView]);
  
  // Function to reset auto-selection to the first item
  const resetAutoSelection = () => {
    // Clear any existing interval
    if (autoSelectInterval.current) {
      clearInterval(autoSelectInterval.current);
      autoSelectInterval.current = null;
    }
    
    // Reset index counter
    currentAutoSelectIndex.current = 0;
    
    // Get available options for current navigation
    const options = getAvailableOptions();
    
    // Set selection to first option if available
    if (options.length > 0) {
      setSelectedNavCard(options[0]);
    }
    
    // Only start auto-selection if user hasn't manually selected
    if (!userHasSelected.current) {
      startAutoSelection();
    }
  };
  
  // First add these at the top of your component with other state variables
  const [isMobileNavSticky, setIsMobileNavSticky] = useState(false);
  const mobileNavRef = useRef(null);
  const activeItemRef = useRef(null);

  // Add this useEffect to handle the sticky behavior for the mobile navigation
  useEffect(() => {
    const handleScroll = () => {
      if (!mobileNavRef.current || !sectionRef.current) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;
      
      // Make nav sticky only when inside this specific section
      // and only for screens smaller than sm breakpoint
      if (window.innerWidth < 640 && sectionTop <= 0 && sectionBottom > 100) {
        setIsMobileNavSticky(true);
      } else {
        setIsMobileNavSticky(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Check initially
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add this useEffect to scroll the active nav item into view when it changes
  // or when the navigation becomes sticky
  useEffect(() => {
    // Only run this for mobile screens
    if (window.innerWidth >= 640) return;
    
    // Find the currently active nav item element
    const activeElement = document.querySelector('.active-nav-item');
    
    if (activeElement && mobileNavRef.current) {
      // Wait a moment for the DOM to update
      setTimeout(() => {
        // Calculate the scroll position to center the active item
        const navScrollContainer = mobileNavRef.current;
        const containerWidth = navScrollContainer.offsetWidth;
        const activeItemLeft = activeElement.offsetLeft;
        const activeItemWidth = activeElement.offsetWidth;
        
        // Center the item in the container
        const scrollPosition = activeItemLeft - (containerWidth / 2) + (activeItemWidth / 2);
        
        // Scroll smoothly to the position
        navScrollContainer.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }, 50);
    }
  }, [selectedNavCard, isMobileNavSticky]);

  return (
    <div ref={sectionRef} className="navigation-strats-section">
      <div className="w-full bg-[#FAFAFA] py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:left-[42%]">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <img src="/starsvg1774-xtkl.svg" alt="starsvg" className="w-3.5 h-3.5" />
              <span className="text-[#A3A3A3] text-xs font-sf-pro-bold">
                MASTER YOUR JEE/NEET JOURNEY
              </span>
            </div>
            <h2 className="text-black text-xl sm:text-3xl font-sf-pro-bold flex items-center mt-2">
              Learn Proven Strategies to Excel
              <span className="relative ml-2">
                {/*<img
                  src="/lightmuvectorsvgfill1782-5pf8.svg"
                  alt="Vector"
                  className="absolute -bottom-2 left-0 w-full"
                />*/}
              </span>
            </h2>
          </div>
          {/* Navigation Bar */}
          <div className="relative" ref={dropdownRef}>
            <div className="bg-[#090909] rounded-[15px] px-3 py-5 sm:py-2 sm:px-8 mb-1 sm:mb-8 h-8">
              <div className="flex justify-around sm:space-x-8 space-x-6 relative sm:top-[8px]">
                {navItems.map((item) => (
                  <div key={item} className="relative">
                    <span
                      onClick={() => {
                        if (item === 'Select your Class') {
                          setShowDropdown(!showDropdown);
                        }
                        else {
                          setSelectedNav(item);
                          setShowDropdown(false);
                        }
                      }}
                      className="flex items-center gap-1"
                    >
                      <span className={`text-[12.91px] font-sf-pro-medium cursor-pointer transition-all duration-300 ${
                        (selectedNav === item || (classOptions.includes(selectedNav) && item === 'Select your Class'))
                          ? 'bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent'
                          : 'text-[#999999]'
                      }`}>
                        {item === 'Select your Class' ? selectedClass : item}
                      </span>
                      {(item === 'Select your Class') && (
                        <ChevronDown className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                      )}
                    </span>
                    {(item === 'Select your Class') && showDropdown && (
                      <div className="absolute top-full left-0 mt-2 bg-[#090909] py-2 px-4 z-50 w-40">
                        {classOptions.map((option) => (
                          <div
                            key={option}
                            onClick={() => handleClassSelect(option)}
                            className="text-[12.91px] font-sf-pro-medium cursor-pointer py-2 text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:via-yellow-300 hover:to-orange-400 hover:bg-clip-text hover:text-transparent"
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AIR Strategies Dropdown */}
          <div className="relative" ref={airDropdownRef}>
            {selectedNav === 'AIR Strategies' && (
              <div className="absolute w-[60] sm:w-[30%] md:w-[20%] lg:w-[15%]" style={{ zIndex: 30 }}>
                <div
                  onClick={() => setShowAirDropdown(!showAirDropdown)}
                  className="flex items-center justify-between bg-white text-black rounded-lg p-3 cursor-pointer w-full"
                >
                  <span className="text-sm font-sf-pro-medium">{selectedAirRange || 'Select AIR Range'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${showAirDropdown ? 'rotate-180' : ''}`} />
                </div>
                {showAirDropdown && (
                  <div className="absolute top-full left-0 w-full bg-white rounded-lg mt-2 shadow-lg" style={{ zIndex: 51 }}>
                    {['AIR 1-10', 'AIR 10-50', 'AIR 50-1000', 'AIR 1000-5000', 'AIR 5000-10,000'].map((range) => (
                      <div
                        key={range}
                        onClick={() => {
                          setSelectedAirRange(range);
                          setShowAirDropdown(false);
                        }}
                        className="text-black text-sm font-sf-pro-medium px-4 py-3 hover:bg-gray-100 cursor-pointer first:rounded-t-lg last:rounded-b-lg"
                      >
                        {range}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            
            {/* Mobile NavCardItems - Only visible below sm */}
            <div 
              ref={mobileNavRef}
              className={`sm:hidden bg-white rounded-lg w-full flex overflow-x-auto whitespace-nowrap space-x-4 translate-x-[35%] h-10 ${
                isMobileNavSticky ? 'fixed top-[8%] z-50 px-4 -ml-[165px]' : ''
              }`}
            >
              <NavLine 
                navItems={navCardItemsData[selectedNav === 'Conceptual Clarity & Problem Solving' ? 'Conceptual Clarity' : selectedNav]} 
                selectedNavCard={selectedNavCard} 
              />
              {navCardItemsData[selectedNav === 'Conceptual Clarity & Problem Solving' ? 'Conceptual Clarity' : selectedNav].map((item) => (
                <div
                  key={item}
                  ref={selectedNavCard === item ? activeItemRef : null}
                  onClick={() => {
                    handleUserSelection(selectedNav, item);
                  }}
                  className={`py-3 px-4 -top-[3px] cursor-pointer transition-all duration-300 relative z-10 ${
                    selectedNavCard === item
                      ? 'bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent active-nav-item'
                      : 'text-gray-400'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex gap-8 mt-8">
            {/* Left Sidebar */}
            <div className="hidden sm:flex flex-col mt-12 w-[30%]">
              <div className="bg-white rounded-lg p-4 relative mb-8">
                <NavLine
                  navItems={navCardItemsData[selectedNav === 'Conceptual Clarity & Problem Solving' ? 'Conceptual Clarity' : selectedNav]}
                  selectedNavCard={selectedNavCard}
                />

                {navCardItemsData[selectedNav === 'Conceptual Clarity & Problem Solving' ? 'Conceptual Clarity' : selectedNav].map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      // Call handleUserSelection instead of just setSelectedNavCard
                      handleUserSelection(selectedNav, item);
                    }}
                    className={`py-3 px-4 cursor-pointer transition-all duration-300 relative z-10 ${
                      selectedNavCard === item
                        ? 'bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent'
                        : 'text-gray-400'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="w-full max-w-md">
                {!showForm ? (
                  <div className="w-full h-80 bg-black rounded-lg shadow-xl overflow-hidden relative">
                    {/* Decorative elements */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-10"></div>
                    <div className="absolute bottom-8 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-10"></div>
                    <div className="absolute top-1/3 right-8 w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 opacity-10"></div>
                    
                    <div className="flex flex-col items-center justify-center h-full px-6 py-8 text-center">
                      <h3 className="bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent text-2xl font-sf-pro font-bold mb-4">
                        Unlock Your JEE/NEET Success
                      </h3>
                      <p className="text-gray-200 text-lg sm:text-2xl font-sf-pro font-medium mb-6">
                        Learn proven strategies from top rankers
                      </p>
                      <button
  className="bg-gray-100 text-black rounded-full px-4 py-2 shadow-lg mb-4 font-sf-pro-bold transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
  onClick={() => setShowForm(true)}
>
  Book Your FREE Demo Session
</button>
<div
  className="relative flex items-center gap-1 bg-gray-100 overflow-hidden rounded-full px-4 py-2 cursor-pointer transform hover:scale-105 transition-all duration-300"
  onClick={handlePhoneClick}
>
  {/* Enhanced flashing animation for larger screens */}
  <div 
    className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 opacity-70"
    style={{
      transform: `translateX(${-100 + position}%)`,
      width: '200%',
      mixBlendMode: 'overlay'
    }}
  ></div>
  <Phone className="w-4 h-4 text-black relative z-10" />
  <span className="text-black font-sf-pro font-bold text-sm relative z-10">Call +91XXXXXXXXXX</span>
</div>
                      <div className="mt-4 flex gap-2">
                        <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">Personalized Plan</span>
                        <span className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">Expert Guidance</span>
                      </div>
                    </div>
                  </div>
                ) : formSubmitted ? (
                  <div className="w-full h-80 bg-black rounded-lg shadow-xl overflow-hidden relative">
                    <div className="flex flex-col items-center justify-center h-full px-6 py-8 text-center">
                      <div className="w-16 h-16 mb-4 bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 rounded-full flex items-center justify-center">
                        <CheckIcon className="w-8 h-8 text-black" />
                      </div>
                      <h3 className="bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent text-xl font-bold mb-4">
                        Thank you for booking your free demo session!
                      </h3>
                      <p className="text-gray-200 text-md font-medium mb-6">
                        Our team will get in touch with you within the next 6 hours.
                      </p>
                      <button
                        className="bg-gray-700 text-white rounded-full px-6 py-2 font-medium"
                        onClick={() => {
                          setFormSubmitted(false);
                          setShowForm(false);
                        }}
                      >
                        Back to Home
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-80 bg-black rounded-lg shadow-xl overflow-hidden relative">
                    <div className="flex flex-col items-center justify-center h-full px-6 py-4">
                      <h3 className="bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent text-xl font-bold mb-4">
                        Book Your Free Demo Session
                      </h3>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          setFormSubmitted(true); // Set immediately to show thank you message
                          handleSubmit(e); // Handle form submission logic (e.g., API call)
                        }}
                        className="w-full max-w-sm"
                      >
                        <div className="mb-2">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Full Name"
                            required
                            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                          />
                        </div>
                        <div className="mb-2">
                          <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                            required
                            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                          />
                        </div>
                        <div className="mb-2">
                          <select
                            name="class"
                            value={formData.class}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                          >
                            <option value="">Select Class</option>
                            <option value="11">Class 11</option>
                            <option value="12">Class 12</option>
                            <option value="Dropper">Dropper</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <select
                            name="stream"
                            value={formData.stream}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
                          >
                            <option value="">Select Stream</option>
                            <option value="JEE">JEE</option>
                            <option value="NEET">NEET</option>
                          </select>
                        </div>
                        <div className="flex justify-between gap-2">
                          <button
                            type="button"
                            onClick={() => setShowForm(false)}
                            className="bg-gray-700 text-white rounded-full px-4 py-2 font-medium"
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 text-black rounded-full px-6 py-2 font-bold shadow-lg"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6 ">
              {getCurrentContent().map((point, index) => {
                const toppers = getCurrentToppers();
                const isTextOnly = ['Custom Strategy', 'Conceptual Clarity & Problem Solving'].includes(selectedNav);
                const isLastItem = index === getCurrentContent().length - 1;

                return (
                  <div key={index} className="border-t border-gray-200 pt-5 sm:pt-4">
                    <div className="flex items-start gap-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => speak(index, point)}
                          className="mt-12 sm:-ml-6 p-2 rounded-full hover:bg-gray-100 transition-colors"
                          aria-label={isPlaying[index] ? "Stop speaking" : "Start speaking"}
                        >
                          {isPlaying[index] ? (
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                              <rect x="6" y="4" width="4" height="16" />
                              <rect x="14" y="4" width="4" height="16" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          )}
                        </button>
                      </div>
                      <div className="flex-1">
                        {toppers && toppers[index] && (
                          <ContentSection
                            toppers={toppers}
                            index={index}
                            isTextOnly={isTextOnly}
                          />
                        )}

                        {/* Text content with word highlighting */}
                        <p
                          className="text-black text-sm font-sf-pro-regular leading-[22.4px] ml-8"
                          onMouseUp={() => handleTextSelection(index)}
                        >
                          {point.split(' ').map((word, wordIndex) => (
                            <span
                              key={wordIndex}
                              className={`transition-colors duration-200 ${
                                highlightedWordInfo &&
                                highlightedWordInfo.word === word &&
                                highlightedWordInfo.uniqueId === `${index}-${wordIndex}`
                                  ? 'bg-yellow-200'
                                  : ''
                              }`}
                            >
                              {word}{' '}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Mobile CTA - Only visible below sm */}
          <div className="sm:hidden mt-6">
            {!showForm ? (
              <div className="w-full h-60 bg-black rounded-lg shadow-xl overflow-hidden relative">
                <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-10"></div>
                <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-10"></div>
                <div className="absolute top-1/3 right-3 w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 opacity-10"></div>
                <div className="flex flex-col items-center justify-center h-full px-4 py-3 text-center">
                  <h3 className="bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent text-lg font-sf-pro font-bold mb-2">
                    Unlock Your JEE/NEET Success
                  </h3>
                  
                  <p className="text-gray-200 text-sm font-sf-pro font-medium mb-4">
                    Learn proven strategies from top rankers
                  </p>
                  
                  <button
                    className="bg-gray-100 text-black rounded-full px-6 py-2 shadow-lg mb-4 font-bold transform hover:scale-105 transition-transform duration-300 hover:shadow-xl text-sm"
                    onClick={() => setShowForm(true)}
                  >
                    Book Your FREE Demo Session
                  </button>
                  
                  {/* Enhanced flashing phone button for mobile */}
                  <div
                    className="relative overflow-hidden flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 cursor-pointer transform hover:scale-105 transition-all duration-300"
                    onClick={handlePhoneClick}
                  >
                    {/* Animated gradient overlay with higher opacity */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 opacity-70"
                      style={{
                        transform: `translateX(${-100 + position}%)`,
                        width: '200%',
                        mixBlendMode: 'overlay'
                      }}
                    ></div>
                    
                    <Phone className="w-4 h-4 text-black relative z-10" />
                    <span className="text-black font-bold text-sm relative z-10">Call +91XXXXXXXXXX</span>
                  </div>
                  
                  <div className="mt-3 flex gap-2">
                    <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full text-[10px]">Personalized Plan</span>
                    <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full text-[10px]">Expert Guidance</span>
                  </div>
                </div>
              </div>
            ) : formSubmitted ? (
              <div className="w-full bg-black rounded-lg shadow-xl overflow-hidden relative">
                <div className="flex flex-col items-center justify-center px-6 py-8 text-center">
                  <div className="w-12 h-12 mb-4 bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 rounded-full flex items-center justify-center">
                    <CheckIcon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent text-lg font-bold mb-2">
                    Thank you for booking your free demo session!
                  </h3>
                  <p className="text-gray-200 text-sm font-medium mb-4">
                    Our team will get in touch with you within the next 6 hours.
                  </p>
                  <button
                    className="bg-gray-700 text-white rounded-full px-4 py-2 text-sm font-medium"
                    onClick={() => {
                      setFormSubmitted(false);
                      setShowForm(false);
                    }}
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            ) : (
              <div className="w-80 bg-black rounded-lg shadow-xl overflow-hidden relative p-4">
                <div className="flex flex-col items-center justify-center">
                  <h3 className="bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent text-lg font-bold mb-3">
                    Book Your Free Demo Session
                  </h3>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSubmitted(true);
                      handleSubmit(e);
                    }}
                    className="w-full"
                  >
                    <div className="mb-2">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        required
                        className="w-[93%] bg-gray-800 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-300 text-sm"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        required
                        className="w-[93%] bg-gray-800 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-300 text-sm"
                      />
                    </div>
                    <div className="mb-2">
                      <select
                        name="class"
                        value={formData.class}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-800 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-300 text-sm"
                      >
                        <option value="">Select Class</option>
                        <option value="11">Class 11</option>
                        <option value="12">Class 12</option>
                        <option value="Dropper">Dropper</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <select
                        name="stream"
                        value={formData.stream}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-800 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-300 text-sm"
                      >
                        <option value="">Select Stream</option>
                        <option value="JEE">JEE</option>
                        <option value="NEET">NEET</option>
                      </select>
                    </div>
                    <div className="flex justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="bg-gray-700 text-white rounded-full px-3 py-1.5 text-sm font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 text-black rounded-full px-4 py-1.5 text-sm font-bold shadow-lg"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationStratsSection;
