import { useState, useEffect, useRef } from 'react';

const StickyNavigator = () => {
  const [activeSection, setActiveSection] = useState('1');
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const observerRefs = useRef({});
  
  // Section mappings with background colors
  const sections = {
    '1': { name: 'IIT Life', bgColor: 'black', textColor: 'white' },
    '2': { name: 'Inspiration', bgColor: 'white', textColor: 'black' },
    '3': { name: 'Strategies', bgColor: '#FAFAFA', textColor: 'black' },
    '4': { name: 'Peer Insights', bgColor: 'black', textColor: 'white' },
    '5': { name: 'Timeline', bgColor: '#090909', textColor: 'white' },
    '6': { name: 'Transformation', bgColor: 'black', textColor: 'white' },
    '7': { name: 'Lifestyle', bgColor: 'black', textColor: 'white' },
    '8': { name: 'Breaking Through Plateau', bgColor: 'white', textColor: 'black' },
    '9': { name: 'Revision', bgColor: 'white', textColor: 'black' },
    '10': { name: 'Success', bgColor: 'black', textColor: 'white' },
    '11': { name: 'Stress', bgColor: 'white', textColor: 'black' },
    '12': { name: 'Master Class', bgColor: 'white', textColor: 'black' },
    '13': { name: 'Toppers', bgColor: 'black', textColor: 'white' },
    '15': { name: 'First Action', bgColor: 'white', textColor: 'black' },
    '14': { name: 'Unlock', bgColor: 'white', textColor: 'black' },
    '16': { name: 'SkillsAssessment', bgColor: 'white', textColor: 'black' },
  };

  useEffect(() => {
    // Track only sections 1-16
    Object.keys(sections).forEach(sectionId => {
      const sectionElement = document.getElementById(`section-${sectionId}`);
      if (sectionElement) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              setVisibleSections(prev => ({
                ...prev,
                [sectionId]: {
                  isIntersecting: entry.isIntersecting,
                  ratio: entry.intersectionRatio,
                  bgColor: sections[sectionId].bgColor,
                  textColor: sections[sectionId].textColor
                }
              }));
              
              if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                setActiveSection(sectionId);
              }
            });
          },
          { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] }
        );
        observer.observe(sectionElement);
        observerRefs.current[sectionId] = observer;
      }
    });
    
    // More precise tracking of visibility
    const checkExactVisibility = () => {
      // Get references to all relevant sections 
      const heroSection = document.querySelector('.hero-section'); // Adjust selector as needed
      const belowHeroSection = document.querySelector('.below-hero-section'); // Adjust selector as needed
      const section1 = document.getElementById('section-1');
      const section16 = document.getElementById('section-16');
      
      // Initial assumption - not visible
      let shouldBeVisible = false;
      
      if (section1 && section16) {
        const viewportHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        
        // Get section positions relative to the document
        const section1Top = section1.getBoundingClientRect().top + scrollPosition;
        const section16Bottom = section16.getBoundingClientRect().bottom + scrollPosition;
        
        // Calculate the viewport's current position
        const viewportTop = scrollPosition;
        const viewportBottom = scrollPosition + viewportHeight;
        
        // Check if we're in the section-1 to section-16 range
        // But exclude hero and below-hero sections
        if (viewportBottom > section1Top && viewportTop < section16Bottom) {
          // We're somewhere in the range of sections 1-16
          
          // But also make sure we're not in hero or below-hero sections
          let inBlockedSection = false;
          
          if (heroSection) {
            const heroBottom = heroSection.getBoundingClientRect().bottom + scrollPosition;
            if (viewportTop < heroBottom) {
              inBlockedSection = true;
            }
          }
          
          if (belowHeroSection && !inBlockedSection) {
            const belowHeroTop = belowHeroSection.getBoundingClientRect().top + scrollPosition;
            const belowHeroBottom = belowHeroSection.getBoundingClientRect().bottom + scrollPosition;
            
            if (viewportTop < belowHeroBottom && viewportBottom > belowHeroTop) {
              inBlockedSection = true;
            }
          }
          
          shouldBeVisible = !inBlockedSection;
        }
      }
      
      setIsVisible(shouldBeVisible);
    };
    
    // Initial check
    checkExactVisibility();
    
    // Check on scroll
    window.addEventListener('scroll', checkExactVisibility);
    
    return () => {
      window.removeEventListener('scroll', checkExactVisibility);
      Object.values(observerRefs.current).forEach(observer => {
        observer.disconnect();
      });
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(`section-${sectionId}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  // Calculate color percentages based on all visible sections
  const getProportionalStyles = () => {
    // Get all visible sections
    const activeVisibleSections = Object.entries(visibleSections)
      .filter(([_, data]) => data.isIntersecting && data.ratio > 0);
    
    // If no sections are visible, use the active section's colors
    if (activeVisibleSections.length === 0) {
      return {
        backgroundColor: sections[activeSection].bgColor,
        color: sections[activeSection].textColor,
        blackSections: [],
        whiteSections: []
      };
    }
    
    // Calculate total visible ratio
    const totalVisibleRatio = activeVisibleSections.reduce(
      (sum, [_, data]) => sum + data.ratio, 0
    );
    
    // Filter sections by their background color
    const blackSections = activeVisibleSections
      .filter(([_, data]) => data.bgColor === 'black' || data.bgColor === '#090909');
    
    const whiteSections = activeVisibleSections
      .filter(([_, data]) => data.bgColor === 'white' || data.bgColor === '#FAFAFA');
    
    // Calculate ratios for each background type
    const blackRatio = blackSections.reduce((sum, [_, data]) => sum + data.ratio, 0);
    const whiteRatio = whiteSections.reduce((sum, [_, data]) => sum + data.ratio, 0);
    
    // Normalize to percentages
    const blackPercentage = totalVisibleRatio > 0 ? (blackRatio / totalVisibleRatio) * 100 : 0;
    const whitePercentage = totalVisibleRatio > 0 ? (whiteRatio / totalVisibleRatio) * 100 : 0;
    
    // Determine text color based on which background is dominant
    const textColor = blackPercentage > whitePercentage ? 'white' : 'black';
    
    // Create a gradient background that matches the proportions
    const backgroundGradient = `linear-gradient(to bottom, 
      black ${blackPercentage}%, 
      white ${blackPercentage}%)`;
    
    return {
      backgroundImage: backgroundGradient,
      color: textColor,
      blackSections: blackSections.map(([id]) => id),
      whiteSections: whiteSections.map(([id]) => id),
      blackPercentage,
      whitePercentage
    };
  };

  const proportionalStyles = getProportionalStyles();

  // Helper function to determine text color for each section link
  const getTextColorForSection = (sectionId) => {
    // If this is the active section, use highlight color
    if (activeSection === sectionId) {
      // Use blue highlight color, but different shade depending on background
      return proportionalStyles.blackSections.includes(sectionId) ? '#3b82f6' : '#2563eb';
    }
    
    // Otherwise, use the appropriate text color based on the section's background
    if (proportionalStyles.blackSections.includes(sectionId)) {
      return 'white'; // White text on black background
    } else if (proportionalStyles.whiteSections.includes(sectionId)) {
      return 'black'; // Black text on white background
    } else {
      // For sections not currently visible, use the dominant text color
      return proportionalStyles.color;
    }
  };

  return (
    <div className="fixed left-4 top-1/2 transform z-20 -translate-y-1/2 pointer-events-none">
      <div 
        className="rounded-lg p-2 max-w-[160px] pointer-events-auto transition-all duration-300"
        style={{ backgroundImage: proportionalStyles.backgroundImage }}
      >
        <div className="relative z-20">
          <h3 
            className="text-xs font-semibold mb-1"
            style={{ color: proportionalStyles.color }}
          >
            Sections
          </h3>
          <div className="flex flex-col">
            {Object.entries(sections).map(([id, { name }]) => {
              const textColor = getTextColorForSection(id);
              // Determine if this section is in the black or white part of the split background
              const isInBlackPart = proportionalStyles.blackSections.includes(id);
              const isInWhitePart = proportionalStyles.whiteSections.includes(id);
              
              // Calculate vertical position percentage (black at top, white at bottom)
              const index = parseInt(id) - 1;
              const position = (index / Object.keys(sections).length) * 100;
              const isInBlackBgArea = position < proportionalStyles.blackPercentage;
              
              return (
                <div 
                  key={id}
                  className="relative cursor-pointer group pointer-events-auto"
                  onClick={() => scrollToSection(id)}
                >
                  <p 
                    className={`text-xs transition-all duration-300 ${
                      activeSection === id ? 'font-medium' : ''
                    }`}
                    style={{ 
                      color: activeSection === id 
                        ? isInBlackBgArea ? '#3b82f6' : '#2563eb'
                        : isInBlackBgArea ? 'white' : 'black'
                    }}
                  >
                    {name}
                  </p>
                  {activeSection === id && (
                    <div 
                      className="absolute left-0 bottom-0 h-0.5 w-2/3"
                      style={{ 
                        backgroundColor: isInBlackBgArea ? '#3b82f6' : '#2563eb'
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNavigator;