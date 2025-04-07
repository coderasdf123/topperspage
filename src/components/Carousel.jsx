import React, { useState, useRef, useEffect } from 'react';
import { VolumeX, Volume2 } from 'lucide-react';
import SlidingButtons from './SlidingButtons';

const Carousel = () => {
  const cards = [
    {
      id: 1,
      title: "Sleep Optimization",
      bgImages: ["/SLEEP.jpeg", "/con_sleep.png", "/limit.png", "/90min.png", "/5.5.png"],
      frontContent: "Unlock Your Brain's Potential with Quality Sleep",
      audioFiles: [
        "/dream.mp3",
        "/con_sleep.mp3",
        "/limit.mp3",
        "/90min.mp3",
        "/5_5.mp3"
      ]
    },
    {
      id: 2,
      title: "Pomodoro Mastery",
      bgImages: ["/grey.jpeg", "/pomo_tech.png", "/3-3-3.png", "/2minRule.png", "/80_20rule.png"],
      frontContent: "Master the Art of Focused Study Sessions",
      audioFiles: [
        "/pomo_main.mp3",
        "/pomo_tech.mp3",
        "/3_3_3.mp3",
        "/2minRule.mp3",
        "/80_20rule.mp3"
      ]
    },
    {
      id: 3,
      title: "Physical Wellness",
      bgImages: ["/back.png", "/test.png", "/Yoga.png", "/Strength_training.png", "/Aerobics.png"],
      frontContent: "Supercharge Your Brain with Daily Exercise",
      audioFiles: [
        "/dream.mp3",
        "/test.mp3",
        "/yoga.mp3",
        "/strength.mp3",
        "/aerobics.mp3"
      ]
    },
    {
      id: 4,
      title: "Mindfulness Practice",
      bgImages: ["/inverted_image.png", "/mindful_breathing.png", "/Mindful_Appreciation.png", "/study_mind.png", "/Mindful_Eating.png"],
      frontContent: "Calm Your Mind with Mindfulness and Meditation",
      audioFiles: [
        "/mindfulness_main.mp3",
        "/mindful_breathing.mp3",
        "/mindful_appreciation.mp3",
        "/study_mind.mp3",
        "/mindful_eating.mp3"
      ]
    },
    {
      id: 5,
      title: "Digital Detox",
      bgImages: ["/digital_detox.jpeg", "/screen2.png", "/window.png", "/plan_extra.png", "/earth.png"],
      frontContent: "Take Control of Your Time by Limiting Digital Distractions",
      audioFiles: [
        "/digital_detox.mp3",
        "/screen.mp3",
        "/window.mp3",
        "/plan_extra.mp3",
        "/earth.mp3"
      ]
    }
  ];
  
  const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" });
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseMove = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x: `${x}px`, y: `${y}px` });
  };

  const [currentIndex, setCurrentIndex] = useState(2);
  // For mobile view - separate tracking
  const [mobileIndex, setMobileIndex] = useState(0);
  const [imageIndices, setImageIndices] = useState(cards.map(() => 0));
  const [isMutedArray, setIsMutedArray] = useState(cards.map(() => true));
  const carouselRef = useRef(null);
  const mobileCarouselRef = useRef(null);
 
  const handlePrevious = () => {
    const newImageIndices = [...imageIndices];
    newImageIndices[currentIndex] = 0;
    setImageIndices(newImageIndices);
    const prevIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const handleNext = () => {
    const newImageIndices = [...imageIndices];
    newImageIndices[currentIndex] = 0;
    setImageIndices(newImageIndices);
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  // Mobile navigation handlers - now only triggered by user buttons, not auto-scroll
  const handleMobileUp = () => {
    setMobileIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const handleMobileDown = () => {
    setMobileIndex((prevIndex) => (prevIndex === cards.length - 1 ? cards.length - 1 : prevIndex + 1));
  };

  const moveToCard = (targetIndex) => {
    const newImageIndices = [...imageIndices];
    newImageIndices[currentIndex] = 0;
    setImageIndices(newImageIndices);
    setCurrentIndex(targetIndex);
  };
  {/* Add this to your component's useEffect for handling scroll events to maintain the peek layout */}
// Add this to your useEffect for scroll events
useEffect(() => {
  const mobileCarousel = mobileCarouselRef.current;
  
  if (mobileCarousel) {
    const handleScroll = () => {
      pauseAllAudio();
      
      const scrollPosition = mobileCarousel.scrollTop;
      const cardHeight = 404; // height + margin-bottom
      const calculatedIndex = Math.round(scrollPosition / cardHeight);
      
      if (calculatedIndex !== mobileIndex) {
        setMobileIndex(Math.min(calculatedIndex, cards.length - 1));
      }
    };
    
    mobileCarousel.addEventListener('scroll', handleScroll);
    return () => {
      mobileCarousel.removeEventListener('scroll', handleScroll);
    };
  }
}, [mobileIndex, cards.length, isMutedArray]);
 
  const getCardStyle = (index) => {
    let position = (index - currentIndex + cards.length) % cards.length;
    const baseClasses = "absolute transition-all duration-700 ease-in-out rounded-lg cursor-pointer";
    
    switch (position) {
      case 0: return `${baseClasses} z-30 w-[300px] h-[400px] top-[150px] left-1/2 -translate-x-1/2`;
      case 4: return `${baseClasses} z-10 w-[200px] h-[200px] top-[200px] left-[15%]`;
      case 3: return `${baseClasses} z-20 w-[250px] h-[350px] top-[175px] left-[25%]`;
      case 1: return `${baseClasses} z-20 w-[250px] h-[350px] top-[175px] right-[25%]`;
      case 2: return `${baseClasses} z-10 w-[200px] h-[200px] top-[200px] right-[15%]`;
      default: return `${baseClasses} opacity-0`;
    }
  };

  const isCardInCenter = (index) => {
    return (index - currentIndex + cards.length) % cards.length === 0;
  };

  const isFirstImage = (cardIndex) => {
    return imageIndices[cardIndex] === 0;
  };

  // Function to pause all audio
// Enhanced pause all audio function
const pauseAllAudio = () => {
  audioRefs.current.forEach((ref, index) => {
    if (ref && ref.current) {
      ref.current.pause();
      const newIsMutedArray = [...isMutedArray];
      newIsMutedArray[index] = true;
      setIsMutedArray(newIsMutedArray);
    }
  });
};

  // Ensure audio plays when card becomes center or image changes
  useEffect(() => {
    if (isCardInCenter(currentIndex) && audioRefs.current[currentIndex].current && !isMutedArray[currentIndex]) {
      audioRefs.current[currentIndex].current.src = cards[currentIndex].audioFiles[imageIndices[currentIndex]];
      audioRefs.current[currentIndex].current.play().catch(e => console.log("Play error on center change:", e));
    }
  }, [currentIndex, imageIndices]);

  // Handle tab visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseAllAudio();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isMutedArray]);

  // Handle scroll events to pause audio when carousel is out of view
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const rect = carouselRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (!isVisible) {
          pauseAllAudio();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMutedArray]);

  const audioRefs = useRef(cards.map(() => React.createRef()));
  const sliderRef = useRef(null);

  // Handle card click
  const handleCardClick = (index) => {
    setCurrentIndex(index);
  };

  // Audio controls
  const toggleMute = (index, e) => {
    if (e) e.stopPropagation();
    
    const newIsMutedArray = [...isMutedArray];
    newIsMutedArray[index] = !newIsMutedArray[index];
    setIsMutedArray(newIsMutedArray);
    
    // Update audio element
    if (audioRefs.current[index].current) {
      if (newIsMutedArray[index]) {
        audioRefs.current[index].current.pause();
      } else {
        audioRefs.current[index].current.src = cards[index].audioFiles[imageIndices[index]];
        audioRefs.current[index].current.play().catch(e => console.log("Play error on unmute:", e));
      }
    }
  };

  // Image navigation
  const handleImageNext = (index, e) => {
    if (e) e.stopPropagation();
    
    const newImageIndices = [...imageIndices];
    const nextIndex = (newImageIndices[index] + 1) % cards[index].bgImages.length;
    newImageIndices[index] = nextIndex;
    setImageIndices(newImageIndices);
  };

  const handleImagePrev = (index, e) => {
    if (e) e.stopPropagation();
    
    const newImageIndices = [...imageIndices];
    const prevIndex = (newImageIndices[index] - 1 + cards[index].bgImages.length) % cards[index].bgImages.length;
    newImageIndices[index] = prevIndex;
    setImageIndices(newImageIndices);
  };

  return (
    <div 
      ref={carouselRef}
      className="relative w-full h-[740px] sm:h-[800px] pt-[20px] sm:pt-[75px] sm:pl-[40px] bg-black flex items-start justify-center overflow-hidden"
    >
      <div className="mx-auto max-w-4xl px-8 font-sf-pro-regular w-full sm:w-auto">
        <div className="flex items-start gap-2 relative top-[16px] sm:top-[0px]">
          <img src="/starsvg1612-p01r.svg" alt="starsvg1612" className="w-[14px] h-[20px]" />
          <span className="text-[#a3a3a3] text-xs font-semibold font-sf-pro">
            COURSE OVERVIEW
          </span>
        </div>
        
        <div className="mt-4">
          <span className="text-white whitespace-nowrap sm:whitespace-normal text-[26px] sm:text-[30px] font-bold font-sf-pro leading-[39px]">
            LifeStyle Changes for Success
          </span>
        </div>

        <div className="hidden sm:block relative w-[1000px] -left-[20px] -top-[100px]">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`${getCardStyle(index)} shadow-lg`}
              onClick={() => handleCardClick(index)}
            >
              <div className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden">
                <audio
                  ref={audioRefs.current[index]}
                  src={card.audioFiles[imageIndices[index]]}
                  loop
                  onError={(e) => console.log(`Audio error for card ${index}:`, e)}
                />

                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(${card.bgImages[imageIndices[index]]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex flex-col items-center justify-between h-full text-white p-8">
                    {isFirstImage(index) && (
                      <>
                        <h2 className="text-lg font-bold tracking-wider text-center">
                          {card.title}
                        </h2>
                        <p className="text-xl text-center -translate-y-[30px]">{card.frontContent}</p>
                      </>
                    )}
                  </div>

                  {isCardInCenter(index) && (
                    <>
                      <svg 
                        onClick={(e) => { e.stopPropagation(); handleImagePrev(index); }}
                        xmlns="http://www.w3.org/2000/svg" 
                        className="absolute left-2 bottom-12 z-50 h-6 w-6 text-white cursor-pointer" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>

                      <svg 
                        onClick={(e) => { e.stopPropagation(); handleImageNext(index); }}
                        xmlns="http://www.w3.org/2000/svg" 
                        className="absolute right-2 bottom-12 z-50 h-6 w-6 text-white cursor-pointer" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>

                      <button
                        onClick={(e) => { e.stopPropagation(); toggleMute(index, e); }}
                        className="absolute bottom-2 left-2 z-50 bg-white/20 text-white p-2 rounded"
                      >
                        {isMutedArray[index] ? 
                          <VolumeX className="h-5 w-5" /> : 
                          <Volume2 className="h-5 w-5" />
                        }
                      </button>

                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                        {card.bgImages.map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            className={`w-2 h-2 rounded-full ${
                              imageIndices[index] === dotIndex ? 'bg-white' : 'bg-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="hidden sm:block translate-y-[530px]">
        <SlidingButtons />
        </div>
        {/* Modified Mobile View - Now showing a peek of the next card */}
{/* Modified Mobile View with proper audio handling and scrolling */}
<div className="block sm:hidden relative w-full mt-4">
  <div 
    ref={mobileCarouselRef}
    className="relative w-full h-[500px] overflow-y-auto translate-y-[5%]"
  >
    {cards.map((card, index) => (
      <div 
        key={card.id} 
        className="relative w-full h-[400px] mb-4"
        onTouchStart={(e) => {
          // Store the initial touch position
          const touchStartX = e.touches[0].clientX;
          e.currentTarget.dataset.touchStartX = touchStartX;
        }}
        onTouchEnd={(e) => {
          // Get the final touch position
          const touchEndX = e.changedTouches[0].clientX;
          const touchStartX = parseInt(e.currentTarget.dataset.touchStartX || "0");
          
          // Calculate the swipe distance
          const swipeDistance = touchEndX - touchStartX;
          
          // Minimum distance required to register as a swipe (in pixels)
          const minSwipeDistance = 50;
          
          if (swipeDistance > minSwipeDistance) {
            // Swipe right - go to previous image
            pauseAllAudio();
            handleImagePrev(index, e);
          } else if (swipeDistance < -minSwipeDistance) {
            // Swipe left - go to next image
            pauseAllAudio();
            handleImageNext(index, e);
          }
        }}
      >
        <div className="relative w-full h-[400px] mx-auto rounded-lg shadow-lg overflow-hidden">
          <audio
            ref={audioRefs.current[index]}
            src={card.audioFiles[imageIndices[index]]}
            loop
            onError={(e) => console.log(`Audio error for card ${index}:`, e)}
          />
          
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${card.bgImages[imageIndices[index]]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col items-center justify-between h-full text-white p-6">
              {isFirstImage(index) && (
                <>
                  <h2 className="text-lg font-bold tracking-wider text-center">
                    {card.title}
                  </h2>
                  <p className="text-xl text-center -translate-y-[30px]">{card.frontContent}</p>
                </>
              )}
            </div>
            
            {/* Controls for mobile - positioned relative to each card */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
              <button 
                onClick={() => {
                  pauseAllAudio();
                  setMobileIndex(Math.max(0, mobileIndex - 1));
                  mobileCarouselRef.current.scrollTo({
                    top: Math.max(0, mobileIndex - 1) * 404,
                    behavior: 'smooth'
                  });
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/30 text-white ${index === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                disabled={index === 0}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-6 h-6"
                >
                  <path d="M18 15l-6-6-6 6"/>
                </svg>
              </button>
              
              <button 
                onClick={() => {
                  pauseAllAudio();
                  setMobileIndex(Math.min(cards.length - 1, mobileIndex + 1));
                  mobileCarouselRef.current.scrollTo({
                    top: Math.min(cards.length - 1, mobileIndex + 1) * 404,
                    behavior: 'smooth'
                  });
                }}
                className={`w-10 h-10 rounded-full flex items-center justify-center bg-white/30 text-white ${index === cards.length - 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                disabled={index === cards.length - 1}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-6 h-6"
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>
            </div>
            
            <svg
              onClick={(e) => {
                pauseAllAudio();
                handleImagePrev(index, e);
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-2 bottom-12 z-50 h-6 w-6 text-white cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            
            <svg
              onClick={(e) => {
                pauseAllAudio();
                handleImageNext(index, e);
              }}
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-2 bottom-12 z-50 h-6 w-6 text-white cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            
            <button
              onClick={(e) => toggleMute(index, e)}
              className="absolute bottom-2 left-2 z-50 bg-white/20 text-white p-2 rounded"
            >
              {isMutedArray[index] ? 
                <VolumeX className="h-5 w-5" /> : 
                <Volume2 className="h-5 w-5" />
              }
            </button>
            
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {card.bgImages.map((_, dotIndex) => (
                <div
                  key={dotIndex}
                  className={`w-2 h-2 rounded-full ${
                    imageIndices[index] === dotIndex ? 'bg-white' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        {/* Desktop navigation buttons */}
        <svg 
          onClick={handlePrevious}
          xmlns="http://www.w3.org/2000/svg" 
          className="hidden sm:block absolute left-45 top-[40%] -translate-y-1/2 z-50 h-8 w-8 text-white cursor-pointer" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        
        <svg 
          onClick={handleNext}
          xmlns="http://www.w3.org/2000/svg" 
          className="hidden sm:block absolute right-32 top-[40%] -translate-y-1/2 z-50 h-8 w-8 text-white cursor-pointer" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        
      </div>
    </div>
  );
};

export default Carousel;