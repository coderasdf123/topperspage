import React, { useState, useRef, useEffect } from "react";

const Section1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [playersReady, setPlayersReady] = useState(false);
  const [youtubeApiLoaded, setYoutubeApiLoaded] = useState(false);
  const slidesContainerRef = useRef(null);
  const playerRef = useRef({});
  const sectionRef = useRef(null);

  const slides = [
    {
      videoId: "Q511kge7-Hg",
      name: "Chidvilas Reddy",
      company: "IIT Bombay",
      details: "IIT-JEE, AIR 1'23",
    },
    {
      videoId: "P3cQDU_TAho",
      name: "Ved Lahoti",
      company: "IIT Bombay",
      details: "IIT-JEE, AIR 1'24",
    },
    {
      videoId: "oTePLRPskOc",
      name: "Dhruvin Doshi",
      company: "IIT Bombay",
      details: "IIT-JEE, AIR 9'24",
    },
    {
      videoId: "hcE48YYJv2I",
      name: "Aditya Verma",
      company: "IIT Bombay",
      details: "IIT-JEE, AIR 2'24",
    },
    {
      videoId: "2ivWmyX7sQI",
      name: "Dwija Patel",
      company: "IIT Bombay",
      details: "JEE Adv, AIR 7'24",
    },
    {
      videoId: "sY5Vaz8BWVo",
      name: "Aditya kumar Panda",
      company: "AIIMS Delhi",
      details: "NEET, AIR 1'24",
    },
  ];

  // Load YouTube API
  useEffect(() => {
    // Only load the API once
    if (window.YT) {
      setYoutubeApiLoaded(true);
      return;
    }
    
    // Define the callback function before loading the script
    window.onYouTubeIframeAPIReady = () => {
      console.log("YouTube API is ready");
      setYoutubeApiLoaded(true);
    };
    
    // Create and load the script
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    tag.id = "youtube-iframe-api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    
    return () => {
      // Clean up players on component unmount
      Object.values(playerRef.current).forEach(player => {
        try {
          if (player && typeof player.destroy === 'function') {
            player.destroy();
          }
        } catch (e) {
          console.error("Error destroying player:", e);
        }
      });
    };
  }, []);
  
  // Initialize YouTube players once API is loaded
  useEffect(() => {
    if (!youtubeApiLoaded || !window.YT?.Player) {
      return;
    }
    
    // Create new player instances
    const initializePlayers = () => {
      try {
        slides.forEach((slide) => {
          const containerId = `youtube-player-${slide.videoId}`;
          const container = document.getElementById(containerId);
          
          if (container && !playerRef.current[slide.videoId]) {
            console.log(`Creating player for ${containerId}`);
            
            // Create the player
            playerRef.current[slide.videoId] = new window.YT.Player(containerId, {
              videoId: slide.videoId,
              playerVars: {
                autoplay: 0,
                controls: 1,
                rel: 0,
                showinfo: 0,
                mute: 1,
                modestbranding: 1,
                enablejsapi: 1,
                origin: window.location.origin,
                playsinline: 1
              },
              events: {
                onReady: (event) => {
                  console.log(`Player for ${slide.videoId} is ready`);
                  const isCurrentVideo = slides[currentIndex].videoId === slide.videoId;
                  
                  if (isCurrentVideo && isSectionVisible) {
                    setTimeout(() => {
                      event.target.playVideo();
                      event.target.unMute();
                    }, 300);
                  }
                },
                onStateChange: (event) => {
                  // Optional: handle state changes
                },
                onError: (error) => {
                  console.error(`YouTube player error for ${slide.videoId}:`, error);
                }
              }
            });
          }
        });
        
        setPlayersReady(true);
      } catch (e) {
        console.error("Error initializing players:", e);
      }
    };
    
    // Delay initialization slightly to ensure DOM is ready
    const timer = setTimeout(() => {
      initializePlayers();
    }, 300);
    
    return () => clearTimeout(timer);
  }, [youtubeApiLoaded, slides, currentIndex, isSectionVisible]);

  // Handle visibility changes
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        const isNowVisible = entry.isIntersecting;
        
        console.log(`Section visibility changed to: ${isNowVisible}`);
        setIsSectionVisible(isNowVisible);
        
        if (isNowVisible && playersReady) {
          playCurrentVideo();
        } else {
          pauseAllVideos();
        }
      },
      { threshold: 0.3 }
    );
    
    observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [playersReady]);

  // Control video playback
  const playCurrentVideo = () => {
    if (!playersReady) return;
    
    try {
      // Pause all videos first
      pauseAllVideos();
      
      // Play the current video
      const currentVideoId = slides[currentIndex].videoId;
      const player = playerRef.current[currentVideoId];
      
      if (player && typeof player.playVideo === 'function') {
        console.log(`Playing video: ${currentVideoId}`);
        player.playVideo();
        player.unMute();
      }
    } catch (e) {
      console.error("Error playing current video:", e);
    }
  };

  const pauseAllVideos = () => {
    try {
      Object.values(playerRef.current).forEach(player => {
        if (player && typeof player.pauseVideo === 'function') {
          player.pauseVideo();
          player.mute();
        }
      });
    } catch (e) {
      console.error("Error pausing videos:", e);
    }
  };

  // Handle scroll-based video selection
  useEffect(() => {
    const container = slidesContainerRef.current;
    if (!container) return;
    
    let debounceTimer;
    
    const handleScroll = () => {
      clearTimeout(debounceTimer);
      
      debounceTimer = setTimeout(() => {
        const slideElements = Array.from(container.children);
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        
        let closestSlide = null;
        let closestDistance = Infinity;
        
        slideElements.forEach((slide, index) => {
          const slideRect = slide.getBoundingClientRect();
          const slideCenter = slideRect.left + slideRect.width / 2;
          const distance = Math.abs(containerCenter - slideCenter);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSlide = index;
          }
        });
        
        if (closestSlide !== null && closestSlide !== currentIndex) {
          setCurrentIndex(closestSlide);
        }
      }, 150);
    };
    
    container.addEventListener('scroll', handleScroll);
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(debounceTimer);
    };
  }, [currentIndex]);

  // Play the correct video when currentIndex changes
  useEffect(() => {
    if (isSectionVisible && playersReady) {
      playCurrentVideo();
    }
  }, [currentIndex, isSectionVisible, playersReady]);

  return (
    <div
      ref={sectionRef}
      className="w-full bg-black overflow-hidden flex flex-col items-start justify-start py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-row items-center gap-2 mb-4">
          <img
            className="w-4 h-4 relative top-[12px]"
            alt="Star"
            src="/starsvg.svg"
          />
          <div className="text-sm font-sf-pro relative top-[12px] right-[4px] font-bold text-gray-200 uppercase tracking-wider">
            TOPPERS SECRETS
          </div>
        </div>
        
        <h1 className="text-white text-xl font-sf-pro sm:text-3xl md:text-4xl font-bold leading-tight mb-8">
          Hear Straight from our Toppers
        </h1>

        {/* Videos Section */}
        <div
          ref={slidesContainerRef}
          className="flex flex-row gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
          style={{
            scrollSnapType: 'x mandatory',
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.videoId}
              className="flex-none w-[85%] sm:w-[65%] md:w-[55%] lg:w-[45%] rounded-xl bg-gray-700 overflow-hidden"
              style={{
                scrollSnapAlign: 'start',
              }}
            >
              <div className="w-full relative" style={{ paddingBottom: '56.25%' }}>
                <div 
                  id={`youtube-player-${slide.videoId}`}
                  className="absolute top-0 left-0 w-full h-full"
                >
                  {/* Placeholder while YouTube loads */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-800">
                    <div className="animate-pulse text-white">Loading video...</div>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center text-white">
                <p className="text-lg font-semibold">{slide.name}</p>
                <p className="text-gray-200">{slide.company}</p>
                <p className="text-sm text-gray-200">{slide.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;