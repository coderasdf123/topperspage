import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft,ChevronRight } from 'lucide-react';
const slides = [
  {
    title: "Personalized Learning",
    image: "/crack_1.jpeg",
    cta: "GET STARTED",
    points: [
      "AI-driven assessment of your current knowledge level",
      "Custom study schedules based on your learning pace",
      "Adaptive question patterns matching your progress",
      "Personalized feedback on solving techniques",
      "Individual attention through one-on-one sessions"
    ]
  },
  {
    title: "AI-Powered Performance Analytics",
    image: "/crack_4.jpeg",
    cta: "LEARN MORE",
    points: [
      "Real-time tracking of your solving speed and accuracy",
      "Detailed chapter-wise performance breakdown",
      "Comparative analysis with top performers",
      "Weekly progress reports with improvement suggestions",
      "Predictive scoring based on current performance"
    ]
  },
  {
    title: "Instant Doubt Resolution",
    image: "/crack_2.jpeg",
    cta: "EXPLORE NOW",
    points: [
      "24/7 access to expert mentors for doubt clearing",
      "Video solutions for complex problems",
      "Priority support during crucial exam phases",
      "Interactive doubt solving sessions",
      "Archived solutions for common doubts"
    ]
  },
  {
    title: "Mentorship & Guidance",
    image: "/crack_3.jpeg",
    cta: "DIVE IN",
    points: [
      "One-on-one sessions with IIT-JEE toppers",
      "Strategic guidance for exam preparation",
      "Mental health and motivation counseling",
      "Expert tips for time management",
      "Regular mock test analysis and feedback"
    ]
  },
  {
    title: "Custom Curriculum",
    image: "/crack_5.jpeg",
    cta: "DIVE IN",
    points: [
      "One-on-one sessions with IIT-JEE toppers",
      "Strategic guidance for exam preparation",
      "Mental health and motivation counseling",
      "Expert tips for time management",
      "Regular mock test analysis and feedback"
    ]
  }
];

function Crackiit() {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [flippedCards, setFlippedCards] = useState(new Array(slides.length).fill(false));
  const [showLeftMargin, setShowLeftMargin] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);


  // Track scroll position to adjust margin
  const handleScroll = () => {
    if (carouselRef.current) {
      const position = carouselRef.current.scrollLeft;
      setScrollPosition(position);
      setShowLeftMargin(position < 50); // Hide margin after scrolling a bit
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const newPosition = Math.max(carouselRef.current.scrollLeft - 350, 0);
      carouselRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const newPosition = carouselRef.current.scrollLeft + 350;
      carouselRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
    }
  };
  const [leftPadding, setLeftPadding] = useState(window.innerWidth >= 640 ? "10%" : "0px");

useEffect(() => {
  const handleResize = () => {
    setLeftPadding(window.innerWidth >= 640 ? "10%" : "0px");
  };

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  return (
    <div className="w-full bg-[#FAFAFA] py-10">
      <div className="mx-auto px-4">
        <div className="flex items-center gap-1 sm:gap-2 sm:mb-2 sm:ml-[16%]">
          <div className="relative">
            <img alt="starsvg133" src="/starsvg133-iai6.svg" className="w-4 h-4 relative top-[12px]" />
          </div>
          <span className="text-[#a3a3a3] text-xs font-sf-pro-bold tracking-[1px] relative top-[12px]">
            NNIIT APPROACHES
          </span>
        </div>
        
        <div className="mb-0">
          <div className="relative sm:ml-[16%]">
            <h1 className="text-3xl font-sf-pro-bold inline-block relative">
              Crack IIT-JEE with <span className="relative">NNIIT</span>
            </h1>
          </div>
        </div>
        
        <p className="text-[13px] font-sf-pro-regular leading-[20.81px] top-[40px] text-[#737373] pt-0 mb-8 sm:ml-[16%]">
          <span>Unlock your potential with guidance from seasoned IIT-JEE experts, </span>
          <span className="font-medium text-black">who provide tailored strategies, </span>
          <span>in-depth explanations, and the best study techniques to ensure you achieve </span>
          <span className="font-medium text-black">top ranks and make your IIT dream a reality.</span>
        </p>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth space-x-4 pb-4 relative right-1 sm:right-0"
            style={{ 
              scrollBehavior: 'smooth',
              paddingLeft: leftPadding,
              transition: 'padding-left 0.3s ease-out'
            }}
          >
            {/* Left padding for initial space - now controlled dynamically */}
            <div className="hidden sm:block w-16 flex-shrink-0"></div>
            {slides.map((slide, index) => {
              const zIndex = slides.length - index;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-[350px] h-[380px] bg-white rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                  style={{ zIndex: isHovered ? 20 : zIndex }}
                >
                  <div
                    className="flip-card w-full h-full cursor-pointer"
                    onClick={() => handleCardFlip(index)}
                    style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
                  >
                    <div
                      className="flip-card-inner w-full h-full relative transition-transform duration-500"
                      style={{
                        transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* Front of card */}
                      <div
                        className="flip-card-front w-full h-full absolute rounded-lg overflow-hidden"
                        style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                      >
                        <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white/20 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                          <h2 className="text-2xl font-sf-pro font-bold text-white mb-4 tracking-wider">{slide.title}</h2>
                          <button className="bg-yellow-400 text-black px-6 py-2 rounded font-semibold transform transition-all duration-300 hover:bg-yellow-300 hover:scale-105">
                            {slide.cta}
                          </button>
                        </div>
                      </div>
                      
                      {/* Back of card - you can uncomment and implement this if needed */}
                      {/* <div
                        className="flip-card-back w-full h-full absolute bg-white p-6 rounded-lg"
                        style={{ 
                          backfaceVisibility: 'hidden', 
                          WebkitBackfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)'
                        }}
                      >
                        <h3 className="text-xl font-bold mb-4">{slide.title}</h3>
                        <ul className="space-y-2">
                          {slide.points.map((point, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="inline-block w-4 h-4 mt-1 mr-2 bg-yellow-400 rounded-full flex-shrink-0"></span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Right padding for final space */}
            <div className="w-16 flex-shrink-0"></div>
          </div>
          
          {/* Navigation buttons - now working */}
          <button
  onClick={scrollLeft}
  className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-100'}`}
  style={{ zIndex: 30 }}
>
  <ChevronLeft size={32} strokeWidth={3} />
</button>
<button
  onClick={scrollRight}
  className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-100'}`}
  style={{ zIndex: 30 }}
>
  <ChevronRight size={32} strokeWidth={3} />
</button>
        </div>
      </div>
    </div>
  );
}

export default Crackiit;