import React, { useState, useEffect, useRef } from 'react';
import LoginPage from './LoginPage';

const ImageCarousel = ({ onSelectionChange }) => {
  const [activeCard, setActiveCard] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [windowWidth, setWindowWidth] = useState(null);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLockOpen, setIsLockOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(true);
  const modalRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      onSelectionChange(cards[0].level);
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, []);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowSignupModal(false);
      setIsLockOpen(false);
    }
  };

  const beginnerNavItems = [
    { id: 1, label: "IITLife", href: "#section-1" },
    { id: 2, label: "Inspiration", href: "#section-2" },
    { id: 3, label: "PeerInsights", href: "#section-3" },
    { id: 4, label: "Strategies", href: "#section-4" },
    { id: 5, label: "Transform", href: "#section-5" },
    { id: 6, label: "Stress", href: "#section-6" },
    { id: 7, label: "LifeStyle", href: "#section-7" },
  ];

  const intermediateNavItems = [
    { id: 8, label: "Revision", href: "#section-8" },
    { id: 9, label: "SuccessStories", href: "#section-9" },
    { id: 10, label: "MasterClass", href: "#section-10" },
    { id: 11, label: "TopperSecrets", href: "#section-11" },
    { id: 12, label: "Unlock", href: "#section-12" },
    { id: 13, label: "Timeline", href: "#section-13" },
    { id: 14, label: "Skills", href: "#section-14" },
  ];

  const advancedNavItems = [
    { id: 17, label: "ElitePrep", href: "" },
    { id: 18, label: "RankBoost", href: "" },
    { id: 19, label: "SecretHacks", href: "" },
    { id: 20, label: "TopperMindset", href: "" },
    { id: 21, label: "PrecisionStudy", href: "" },
  ];

  const cards = [
    {
      id: 'advanced',
      title: 'Pro Mode',
      image: '/black_bg.png',
      color: '#4CAF50',
      level: 'advanced',
      navItems: advancedNavItems,
      blurred: true
    },
    {
      id: 'intermediate',
      title: 'Hustle Mode',
      image: '/black_bg.png',
      color: '#FFC107',
      level: 'intermediate',
      navItems: intermediateNavItems
    },
    {
      id: 'beginner',
      title: 'Grind Mode',
      image: '/black_bg.png',
      color: '#e66e63',
      level: 'beginner',
      navItems: beginnerNavItems
    },
  ];

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
    if (index !== activeCard) {
      onSelectionChange(cards[index].level);
    }
    setIsScrolling(true);
  };

  const handleLockClick = (e) => {
    e.stopPropagation();
    setIsLockOpen(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    setTimeout(() => {
      setShowSignupModal(true);
    }, 800);
  };

  const handleSectionClick = (href, e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsScrolling(true);
    if (!href || activeCard === 2) return;
    const element = document.querySelector(href);
    if (element) {
      const offset = 109;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseEnter = (index) => setHoveredCard(index);
  const handleMouseLeave = () => setHoveredCard(null);
  const isCardExpanded = (index) => activeCard === index;
  const isCardHovered = (index) => hoveredCard === index && activeCard !== index;

  const handleCloseModal = () => {
    setShowSignupModal(false);
    setIsLockOpen(false);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setIsSignedUp(true);
    console.log("Form submitted");
  };

  const Lock = ({ isOpen, onClick }) => {
    return (
      <div
        className="relative cursor-pointer flex flex-col items-center justify-center w-full"
        onClick={onClick}
      >
        {/* Left Lightning Bolt */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 60 100"
          className="absolute left-[-5px] top-[5px] w-6 h-6 animate-bolt-fade"
        >
          <polygon
            points="35,0 10,55 30,55 15,100 50,40 30,40"
            fill="#FFC107"
            stroke="#D89200"
            strokeWidth="2"
            style={{ filter: "drop-shadow(0 0 8px rgba(255, 200, 0, 0.8))" }}
          />
        </svg>

        {/* Lock (Image for <sm, SVG for >=sm) */}
        {windowWidth < 640 ? (
          <img 
            src="/lock_img.png" // Replace with your actual lock SVG image path
            alt="Lock"
            className="w-[55px] h-[35px] animate-shake"
          />
        ) : (
          <svg
            className="w-10 h-10 animate-shake"
            viewBox="0 0 100 120"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#FFD700" }} />
                <stop offset="100%" style={{ stopColor: "#DAA520" }} />
              </linearGradient>
            </defs>
            <rect x="25" y="50" width="50" height="40" rx="5" ry="5" fill="url(#goldGradient)" />
            <circle cx="50" cy="70" r="6" fill="#4A2C2C" className="animate-pulse" />
            <rect x="47" y="70" width="6" height="10" fill="#4A2C2C" className="animate-pulse" />
            <path
              d={!isOpen ? "M 35 30 Q 50 5, 65 30 V 50 H 35 Z" : "M 35 30 Q 50 10, 65 30 V 50 H 35"}
              stroke="url(#goldGradient)"
              strokeWidth="5"
              fill="none"
            />
            <rect x="30" y="55" width="40" height="5" fill="rgba(255, 215, 0, 0.7)" rx="2" ry="2" />
            {isOpen && (
              <>
                <circle cx="70" cy="20" r="3" fill="#FFD700" className="animate-sparkle" />
                <circle cx="40" cy="15" r="2" fill="#FFD700" className="animate-sparkle" />
                <circle cx="55" cy="10" r="2.5" fill="#FFD700" className="animate-sparkle" />
                <circle cx="45" cy="25" r="1.5" fill="#FFD700" className="animate-sparkle" />
                <circle cx="60" cy="30" r="2" fill="#FFD700" className="animate-sparkle" />
              </>
            )}
          </svg>
        )}

        {/* Right Lightning Bolt */}
        <svg
          width="20"
          height="20"
          viewBox="0 0 60 100"
          className="absolute right-[-5px] top-[5px] w-6 h-6 animate-bolt-fade"
        >
          <polygon
            points="35,0 10,55 30,55 15,100 50,40 30,40"
            fill="#FFC107"
            stroke="#D89200"
            strokeWidth="2"
            style={{ filter: "drop-shadow(0 0 8px rgba(255, 200, 0, 0.8))" }}
          />
        </svg>

        <div className="text-center text-[10px] sm:text-[15px] text-green-500 font-bold mt-1">
          {isOpen ? "You're in! Let's crack JEE the smart way." : "Activate Topper Mode"}
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (showSignupModal) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showSignupModal]);

  return (
    <div className="w-full relative">
      <div className="flex flex-row h-[180px] sm:h-[296px] w-full gap-2 translate-y-20 sm:translate-y-0 sm:mt-44 relative">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`relative rounded-lg transition-all duration-500 ease-in-out cursor-pointer
              ${isCardExpanded(index) || index === 0 ? 'overflow-visible' : 'overflow-hidden'}
              ${isCardExpanded(index) ? 'w-1/2 sm:w-1/2' : 
                isCardHovered(index) ? 'w-16 sm:w-1/5' : 'w-16 sm:w-1/6'}`}
            onClick={() => handleCardClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
              boxShadow: isCardExpanded(index) ? `0 10px 25px -5px ${card.color}66` : '',
              zIndex: isCardExpanded(index) ? 20 : 10 - index
            }}
          >
            <div 
              className={`absolute inset-0 p-2 bg-cover bg-center transition-transform duration-700 ${card.blurred && isCardExpanded(index) ? 'blur-sm' : ''}`}
              style={{
                backgroundImage: `url(${card.image})`,
                transform: isCardExpanded(index) ? 'scale(1.05)' : 'scale(1)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            
            <div 
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300
                ${isCardExpanded(index) ? 'opacity-0' : 'opacity-100'}`}
            >
              <h3 
                className="text-white font-sf-pro-bold text-sm sm:text-xl mb-3 sm:mb-0 sm:text-2xl transform rotate-90 whitespace-nowrap -translate-y-12 sm:translate-y-0"
                style={{ color: card.color }}
              >
                {card.title}
              </h3>
            </div>
            
            <div 
              className={`absolute inset-0 p-3 sm:p-6 transition-opacity duration-500 flex flex-col
                ${isCardExpanded(index) ? 'opacity-100' : 'opacity-0'}`}
            >
              <h2 className="text-sm sm:text-4xl font-sf-pro-bold text-white -mb-4 sm:mb-2">{card.title}</h2>
              
              {isCardExpanded(index) && card.navItems.length > 0 && (
                <div 
                  className="w-full overflow-x-auto scrollbar-hide h-10 whitespace-nowrap mb-2"
                  onClick={() => setIsScrolling(false)}
                >
                  <div 
                    className={`inline-flex gap-4 px-4 pt-6 sm:pt-4 ${isScrolling ? 'animate-[scroll_20s_linear_infinite]' : 'animate-none'}`}
                  >
                    {card.navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={(e) => handleSectionClick(item.href, e)}
                        className={`text-xs sm:text-sm hover:underline bg-transparent border-none p-0 ${index === 0 ? 'blur-sm' : ''}`}
                        style={{ color: index === 0 ? '#9C27B0' : card.color }}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <p className={`text-white/80 text-xs sm:text-base mx-auto ${index === 0 && card.blurred ? '' : ''}`}>
                {index === 0 && "Perfect for beginners looking to ace their basics"}
                {index === 1 && "For students ready to go beyond foundation concepts"}
                {index === 2 && "Learn Advanced strategies used by top rank holders"}
              </p>
              
              {index === 0 ? (
                isCardExpanded(index) ? (
                  <div className="mt-1 flex flex-col items-center">
                    <Lock isOpen={isLockOpen} onClick={handleLockClick} />
                  </div>
                ) : (
                  <button 
                    className="mt-2 sm:mt-4 px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-white font-medium text-xs sm:text-sm transition-colors duration-300 self-start"
                    style={{ 
                      backgroundColor: card.color,
                      boxShadow: `0 4px 12px ${card.color}66`
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(index);
                    }}
                  >
                    Unlock Access
                  </button>
                )
              ) : (
                <button 
                  className="mt-2 sm:mt-4 px-3 sm:px-4 py-1 sm:py-2 rounded-lg text-white font-medium text-xs sm:text-sm transition-colors duration-300 self-start"
                  style={{ 
                    backgroundColor: card.color,
                    boxShadow: `0 4px 12px ${card.color}66`
                  }}
                >
                  Explore
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .scrolling-container {
          display: flex;
          white-space: nowrap;
          overflow: hidden;
          animation: scroll 10s linear infinite;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {showSignupModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:-translate-x-[140%] translate-y-[10%] sm:translate-y-[18%]">
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-2xl flex"
            style={{
              transform: "translateY(0cm)",
              width: window.innerWidth < 640 ? "100%" : "100%",
            }}
          >
            <LoginPage />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;