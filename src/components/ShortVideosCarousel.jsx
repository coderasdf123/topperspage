import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, MoreVertical, MapPin, Video, Calendar, UserCheck, MessageCircle } from 'lucide-react';

const ShortVideosCarousel = () => {
  const [activeTab, setActiveTab] = useState('campusVideos');
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Video data for each tab
  const videosData = {
    campusVideos: [
      {
        id: 1,
        title: "Watch to find out Paytm Founder and...",
        thumbnail: "https://i.ytimg.com/vi/example1/hqdefault.jpg",
        source: "YouTube",
        channel: "Paytm",
        videoId: "FOsp5AhYBiU",
        platform: "youtube"
      },
      {
        id: 2,
        title: "Vijay Shekhar Sharma's Biggest...",
        thumbnail: "https://i.ytimg.com/vi/example2/hqdefault.jpg",
        source: "Facebook",
        channel: "CNBC",
        videoId: "X4YmBqaPj_Q",
        platform: "youtube"
      },
      {
        id: 3,
        title: "Paytm's Vijay Shekhar on Future...",
        thumbnail: "https://i.ytimg.com/vi/example3/hqdefault.jpg",
        source: "YouTube",
        channel: "Tech Today",
        videoId: "lVt0Qm_DC1w",
        platform: "youtube"
      },
      {
        id: 4,
        title: "Payment Revolution with Paytm",
        thumbnail: "https://i.ytimg.com/vi/example4/hqdefault.jpg",
        source: "YouTube",
        channel: "Fintech Today",
        videoId: "tow1b6DH3UQ",
        platform: "youtube"
      },
      {
        id: 5,
        title: "Digital India and Paytm's Role",
        thumbnail: "https://i.ytimg.com/vi/example5/hqdefault.jpg",
        source: "YouTube",
        channel: "India Tech",
        videoId: "MHeAjLguwyg",
        platform: "youtube"
      }
    ],
    notableAlumni: [
      {
        id: 6,
        title: "Arvind Krishna - IBM CEO",
        videoUrl: "/arvind.mp4",
        platform: "local"
      },
      {
        id: 7,
        title: "Sundar Pichai - Google CEO",
        videoUrl: "/sundar.mp4",
        platform: "local"
      },
      {
        id: 8,
        title: "Chetan Bhagat - Author",
        videoUrl: "/chetan.mp4",
        platform: "local"
      },
      {
        id: 9,
        title: "Narayana Murthy - Infosys Founder",
        videoUrl: "/narayana.mp4",
        platform: "local"
      },
      {
        id: 10,
        title: "Arvind Krishna - IBM CEO",
        videoUrl: "/arvind.mp4",
        platform: "local"
      },
      {
        id: 11,
        title: "Sundar Pichai - Google CEO",
        videoUrl: "/sundar.mp4",
        platform: "local"
      },
      {
        id: 12,
        title: "Chetan Bhagat - Author",
        videoUrl: "/chetan.mp4",
        platform: "local"
      },
      {
        id: 13,
        title: "Narayana Murthy - Infosys Founder",
        videoUrl: "/narayana.mp4",
        platform: "local"
      }
    ],
    careerOpportunities: [
      {
        id: 16,
        title: "Highest Package in IIT Bombay",
        thumbnail: "https://i.ytimg.com/vi/example16/hqdefault.jpg",
        channel: "Career Hub",
        videoId: "CD4TBddElOc",
        platform: "youtube"
      },
      {
        id: 17,
        title: "How to Prepare for Placements",
        thumbnail: "https://i.ytimg.com/vi/example17/hqdefault.jpg",
        channel: "Placement Cell",
        videoId: "X4YmBqaPj_Q",
        platform: "youtube"
      },
      {
        id: 18,
        title: "Industries Hiring from IITs",
        thumbnail: "https://i.ytimg.com/vi/example18/hqdefault.jpg",
        channel: "Industry Insights",
        videoId: "lVt0Qm_DC1w",
        platform: "youtube"
      },
      {
        id: 19,
        title: "Internship to Full-time Conversion",
        thumbnail: "https://i.ytimg.com/vi/example19/hqdefault.jpg",
        channel: "Career Path",
        videoId: "tow1b6DH3UQ",
        platform: "youtube"
      },
      {
        id: 20,
        title: "Starting Your Own Venture",
        thumbnail: "https://i.ytimg.com/vi/example20/hqdefault.jpg",
        channel: "Entrepreneur IIT",
        videoId: "MHeAjLguwyg",
        platform: "youtube"
      }
    ],
    techInnovation: [
      {
        id: 21,
        title: "Breakthrough Research at IIT",
        thumbnail: "https://i.ytimg.com/vi/example21/hqdefault.jpg",
        channel: "Tech Innovations",
        videoId: "ZtXqgmcUsxk",
        platform: "youtube"
      },
      {
        id: 22,
        title: "Robotics Revolution from IIT Labs",
        thumbnail: "https://i.ytimg.com/vi/example22/hqdefault.jpg",
        channel: "Future Tech",
        videoId: "KslvTdT7cAA",
        platform: "youtube"
      },
      {
        id: 23,
        title: "AI Research Projects",
        thumbnail: "https://i.ytimg.com/vi/example23/hqdefault.jpg",
        channel: "AI Hub",
        videoId: "yMSuOdUIb8c",
        platform: "youtube"
      },
      {
        id: 24,
        title: "Sustainable Tech Solutions",
        thumbnail: "https://i.ytimg.com/vi/example24/hqdefault.jpg",
        channel: "Green Tech",
        videoId: "8IPYLbZQBeA",
        platform: "youtube"
      },
      {
        id: 25,
        title: "Patents from IIT Researchers",
        thumbnail: "https://i.ytimg.com/vi/example25/hqdefault.jpg",
        channel: "Innovation Today",
        videoId: "oMuUzYfy-WQ",
        platform: "youtube"
      }
    ]
  };

  // Get current videos based on active tab
  const currentVideos = videosData[activeTab] || [];
  
  // Calculate visible videos based on current index
  const visibleVideos = currentVideos.slice(currentIndex, currentIndex + getVisibleCount());

  // Handle next/previous navigation
  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => 
      Math.min(currentVideos.length - getVisibleCount(), prev + 1)
    );
  };

  // Touch handlers for swipe on mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    }
    if (touchStart - touchEnd < -50) {
      handlePrevious();
    }
  };

  // Helper function to determine how many videos should be visible based on screen size
  function getVisibleCount() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3; // Default for SSR
  }

  // Initialize YouTube API
  useEffect(() => {
    if (!window.YT && activeTab !== 'notableAlumni') {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = initializeYouTubePlayers;
    } else if (window.YT && activeTab !== 'notableAlumni') {
      initializeYouTubePlayers();
    }

    const handleResize = () => {
      const maxIndex = Math.max(0, currentVideos.length - getVisibleCount());
      if (currentIndex > maxIndex) {
        setCurrentIndex(maxIndex);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeTab, currentVideos.length]);

  // Initialize YouTube players after tab change
  useEffect(() => {
    if (window.YT && window.YT.Player && activeTab !== 'notableAlumni') {
      initializeYouTubePlayers();
    }
  }, [activeTab, currentIndex]);

  // Function to initialize YouTube players
  function initializeYouTubePlayers() {
    const youtubeVideos = document.querySelectorAll('.youtube-player');
    youtubeVideos.forEach(element => {
      const videoId = element.getAttribute('data-video-id');
      if (videoId && window.YT && window.YT.Player) {
        try {
          new window.YT.Player(element.id, {
            videoId: videoId,
            playerVars: {
              enablejsapi: 1,
              modestbranding: 1,
              rel: 0,
              origin: window.location.origin
            }
          });
        } catch (error) {
          console.error("Error initializing YouTube player:", error);
        }
      }
    });
  }

  // Render individual video card
  const renderVideoCard = (video) => {
    return (
      <div 
        key={video.id} 
        className="relative group overflow-hidden rounded-lg bg-gray-800 shadow-lg flex-shrink-0 flex-grow-0 w-[250px] sm:w-[280px] h-[340px]"
      >
        <div className="relative w-full aspect-square overflow-hidden">
          {video.platform === 'local' ? (
            <video
              className="w-full h-full object-cover"
              src={video.videoUrl}
              controls
              loop
              muted
              playsInline
            />
          ) : (
            <div 
              id={`youtube-player-${video.id}`}
              className="youtube-player w-full h-full bg-gray-900"
              data-video-id={video.videoId}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-pulse text-white">Loading video...</div>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-white text-lg font-sf-pro font-bold line-clamp-2 mb-1">
              {video.title}
            </h3>
            <p className="text-gray-400 text-sm mb-2">
              {video.subtitle || "Discover more in this short clip"}
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Render pagination dots
  const renderPaginationDots = () => {
    const dotsCount = Math.ceil(currentVideos.length / getVisibleCount());
    const activeDotIndex = Math.floor(currentIndex / getVisibleCount());
    
    return (
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: dotsCount }).map((_, i) => (
          <div 
            key={i}
            className={`h-2 rounded-full transition-all cursor-pointer ${
              i === activeDotIndex ? 'w-8 bg-white' : 'w-2 bg-gray-200'
            }`}
            onClick={() => setCurrentIndex(i * getVisibleCount())}
          />
        ))}
      </div>
    );
  };

  // Community Interaction Card
  const CommunityInteractionCard = () => {
    const [activeSection, setActiveSection] = useState('tour');

    const tourOptions = [
      { icon: <MapPin className="text-blue-500 w-6 h-6" />, text: "Locate Nearest Campus" },
      { icon: <Video className="text-green-500 w-6 h-6" />, text: "Virtual Campus Walk" },
      { icon: <Calendar className="text-purple-500 w-6 h-6" />, text: "Schedule On-Site Visit" }
    ];

    const mentorshipOptions = [
      { icon: <UserCheck className="text-orange-500 w-6 h-6" />, text: "Connect with Current Students" },
      { icon: <MessageCircle className="text-teal-500 w-6 h-6" />, text: "Live Q&A Sessions" },
      { icon: <Calendar className="text-indigo-500 w-6 h-6" />, text: "Book 1:1 Mentorship" }
    ];

    return (
      <div className="bg-black/90 rounded-2xl p-6 relative w-[80%] h-[70vh] mx-auto flex flex-col right-[2%]">
        <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
          <h2 className="text-2xl font-sf-pro font-bold text-white">
            {activeSection === 'tour' ? 'Get a Tour of IIT Near You' : 'Live Mentorship with IITians'}
          </h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => setActiveSection('tour')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeSection === 'tour' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Campus Tour
            </button>
            <button 
              onClick={() => setActiveSection('mentorship')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeSection === 'mentorship' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Live Mentorship
            </button>
          </div>
        </div>

        <div className="flex-grow grid grid-cols-1 sm:grid-cols-3 gap-6">
          {activeSection === 'tour' 
            ? tourOptions.map((option, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center space-y-4 transform transition-all hover:scale-105 hover:bg-gray-800 cursor-pointer"
                >
                  {option.icon}
                  <p className="text-white text-center text-lg font-sf-pro font-semibold">{option.text}</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                    Explore
                  </button>
                </div>
              ))
            : mentorshipOptions.map((option, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 rounded-xl p-6 flex flex-col items-center justify-center space-y-4 transform transition-all hover:scale-105 hover:bg-gray-800 cursor-pointer"
                >
                  {option.icon}
                  <p className="text-white text-center text-lg font-sf-pro font-semibold">{option.text}</p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors">
                    Connect
                  </button>
                </div>
              ))
          }
        </div>

        <div className="mt-6 bg-gray-800 rounded-full p-3 overflow-hidden">
          <div className="scrolling-text whitespace-nowrap text-white font-sf-pro">
            🔥 Breaking: IIT Placements Reach All-Time High • 🏆 Research Grant Awarded to Innovative Technology Project • 🌐 International Collaboration Announcement Coming Soon
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black text-white py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-2">
          <img src="/starsvg1612-p01r.svg" alt="starsvg1612" className="w-[14px] h-[14px] relative top-[18px]" />
          <span className="relative top-[18px] text-[#a3a3a3] text-xs font-semibold font-sf-pro">
            CAMPUS EXPERIENCE
          </span> 
        </div>
        
        <div className="mt-4">
          <span className="text-white text-[26px] font-bold font-sf-pro leading-[39px] mb-4">
            Life at IIT
          </span>
        </div>
        
        <div className="space-x-2 whitespace-nowrap mb-6 overflow-x-auto scrollbar-hidden">
          <button 
            className={`px-4 py-2 rounded-full transition-colors ${activeTab === 'campusVideos' ? 'bg-black text-white' : 'bg-gray-300 text-white'}`}
            onClick={() => {
              setActiveTab('campusVideos');
              setCurrentIndex(0);
            }}
          >
            Campus Videos
          </button>
          <button 
            className={`px-4 py-2 rounded-full transition-colors ${activeTab === 'notableAlumni' ? 'bg-black text-white' : 'bg-gray-300 text-white'}`}
            onClick={() => {
              setActiveTab('notableAlumni');
              setCurrentIndex(0);
            }}
          >
            Notable Alumni
          </button>
          <button 
            className={`px-4 py-2 rounded-full transition-colors ${activeTab === 'careerOpportunities' ? 'bg-black text-white' : 'bg-gray-300 text-white'}`}
            onClick={() => {
              setActiveTab('careerOpportunities');
              setCurrentIndex(0);
            }}
          >
            Career Opportunities
          </button>
          <button 
            className={`px-4 py-2 rounded-full transition-colors ${activeTab === 'techInnovation' ? 'bg-black text-white' : 'bg-gray-300 text-white'}`}
            onClick={() => {
              setActiveTab('techInnovation');
              setCurrentIndex(0);
            }}
          >
            Tech & Innovation
          </button>
          <button 
            className={`px-4 py-2 rounded-full transition-colors ${activeTab === 'exploreIIT' ? 'bg-black text-white' : 'bg-gray-300 text-white'}`}
            onClick={() => {
              setActiveTab('exploreIIT');
              setCurrentIndex(0);
            }}
          >
            Explore IIT with Us
          </button>
        </div>
        
        {activeTab !== 'exploreIIT' ? (
          <div className="relative">
            <button 
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/70 rounded-full text-white ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-100'}`}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={handleNext}
              disabled={currentIndex >= currentVideos.length - getVisibleCount()}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/70 rounded-full text-white ${currentIndex >= currentVideos.length - getVisibleCount() ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-100'}`}
            >
              <ChevronRight size={24} />
            </button>
            
            <div 
              ref={carouselRef}
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex gap-4 transition-transform duration-300"
                style={{ transform: `translateX(-${currentIndex * (100 / getVisibleCount())}%)` }}
              >
                {currentVideos.map(video => renderVideoCard(video))}
              </div>
            </div>
            
            {renderPaginationDots()}
          </div>
        ) : (
          <CommunityInteractionCard />
        )}
      </div>
        
      <div className="mt-6 flex justify-center">
        <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors">
          <span>More short videos</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ShortVideosCarousel;