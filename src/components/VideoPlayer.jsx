import React, { useState, useRef, useEffect } from 'react';
import { X, Maximize, Volume2, VolumeX } from 'lucide-react';

const VideoPlayer = ({ videoSrc = "/COURAGE.mp4" }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // Default to muted
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [position, setPosition] = useState({ x: 16, y: 450 }); // Updated default position (higher on screen)
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [controlsVisible, setControlsVisible] = useState(true); // Controls visible by default
  
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Handle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Handle fullscreen
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen();
      } else if (containerRef.current.msRequestFullscreen) {
        containerRef.current.msRequestFullscreen();
      }
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullScreen(false);
    }
  };

  // Listen for fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // Update position constraints when window is resized
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const maxX = window.innerWidth - containerRef.current.offsetWidth;
        const maxY = window.innerHeight - containerRef.current.offsetHeight;
        
        // Ensure the player stays within bounds when window is resized
        setPosition(prev => ({
          x: Math.max(0, Math.min(prev.x, maxX)),
          y: Math.max(0, Math.min(prev.y, maxY))
        }));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle close
  const handleClose = () => {
    setIsVisible(false);
  };

  // Dragging functionality - works on both mouse and touch events
  const handleDragStart = (e) => {
    if (isFullScreen) return;
    
    setIsDragging(true);
    const rect = containerRef.current.getBoundingClientRect();
    
    // Handle both mouse and touch events
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    
    setDragOffset({
      x: clientX - rect.left,
      y: clientY - rect.top
    });
    
    // Prevent text selection during drag
    e.preventDefault();
  };

  const handleDragMove = (e) => {
    if (isDragging && !isFullScreen) {
      // Handle both mouse and touch events
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      
      const newX = clientX - dragOffset.x;
      const newY = clientY - dragOffset.y;
      
      // Keep within viewport bounds
      const maxX = window.innerWidth - containerRef.current.offsetWidth;
      const maxY = window.innerHeight - containerRef.current.offsetHeight;
      
      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      });
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Add and remove event listeners for drag (both mouse and touch)
  useEffect(() => {
    const handleMouseMove = (e) => handleDragMove(e);
    const handleTouchMove = (e) => handleDragMove(e);
    const handleMouseUp = () => handleDragEnd();
    const handleTouchEnd = () => handleDragEnd();

    if (isDragging) {
      // Mouse events
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      // Touch events
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
      document.addEventListener('touchcancel', handleTouchEnd);
    } else {
      // Remove all listeners when not dragging
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchcancel', handleTouchEnd);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [isDragging]);

  if (!isVisible) return null;

  return (
    <div 
      ref={containerRef}
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
      className={`fixed ${
        isFullScreen 
          ? 'inset-0 flex items-center justify-center bg-black cursor-default' 
          : 'z-50 rounded-lg overflow-hidden shadow-xl cursor-move'
      } transition-all duration-300`}
      style={!isFullScreen ? { left: `${position.x}px`, top: `${position.y}px` } : {}}
      onMouseEnter={() => setControlsVisible(true)}
      onMouseLeave={() => setControlsVisible(true)} // Keep controls visible even on mouse leave
    >
      <div 
        className={`relative ${
          isFullScreen 
            ? 'w-full h-full max-w-4xl max-h-screen' 
            : 'w-[140px] h-[240px] sm:w-[200px] sm:h-[360px]'
        }`}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={videoSrc}
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />
        
        {/* Video controls overlay - Always visible */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent ${controlsVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
          {/* Top controls */}
          <div className="absolute top-2 right-2 flex space-x-2">
            {isFullScreen ? (
              <button 
                onClick={toggleFullScreen}
                className="p-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <X size={16} />
              </button>
            ) : (
              <button 
                onClick={handleClose}
                className="p-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>
          
          {/* Bottom controls */}
          <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
            <button 
              onClick={toggleMute}
              className="p-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            
            {!isFullScreen && (
              <button 
                onClick={toggleFullScreen}
                className="p-1.5 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
              >
                <Maximize size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;