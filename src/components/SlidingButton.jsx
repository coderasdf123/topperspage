import React, { useState, useEffect } from 'react';

const SlidingButton = () => {
  const [mousePosition, setMousePosition] = useState({ x: '50%', y: '50%' });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [clickCount, setClickCount] = useState(0); // Track button clicks
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: ''
  });
  const totalSlides = 3;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100 + '%';
    const y = ((e.clientY - rect.top) / rect.height) * 100 + '%';
    setMousePosition({ x, y });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleButtonClick = () => {
    if (formSubmitted) return; // Don't increment clicks after form submission

    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 3) {
        setShowForm(true); // Show form on the third click
      }
      return newCount;
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setShowForm(false);
    setClickCount(0); // Reset click count after submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const slides = [
    {
      text: "Dream Big, Start Here – Your Inspiration Hub!",
      imagePosition: "right",
      alt: "Inspiration image"
    },
    {
      text: "Create, Innovate, Succeed – Begin Your Journey!",
      imagePosition: "left",
      alt: "Innovation image"
    },
    {
      text: "Transform Ideas into Reality – Launch Today!",
      imagePosition: "right",
      alt: "Transformation image"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!showForm) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [showForm]);

  return (
    <div className="relative w-full">
      {showForm ? (
        <div className="bg-gray-900 rounded-lg p-4 mb-6 text-white">
          <h3 className="text-lg font-semibold mb-3">Tell us about yourself</h3>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-[97%] px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-[97%] px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="interest" className="block text-sm font-medium mb-1">Select your Class</label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                required
              >
                <option value="">JEE/NEET</option>
                <option value="inspiration">Class 11</option>
                <option value="innovation">Class 12</option>
                <option value="transformation">Olympiad</option>
              </select>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  setClickCount(0); // Reset click count on cancel
                }}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 animate-pulse-custom"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-md text-white animate-pulse-custom"
                style={{
                  backgroundImage: 'linear-gradient(to right, #A855F7, #3B82F6)',
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          className="relative w-full py-3 mb-6 rounded-lg font-semibold text-white overflow-hidden
                    bg-gray-900 before:content-[''] before:absolute before:inset-0 before:transition-opacity
                    before:bg-[radial-gradient(circle_100px_at_var(--mouse-x)_var(--mouse-y),rgba(255,165,0,0.9),transparent)]
                    before:opacity-100 hover:before:opacity-100"
          onMouseMove={handleMouseMove}
          onClick={handleButtonClick}
          style={{
            "--mouse-x": mousePosition.x,
            "--mouse-y": mousePosition.y,
          }}
        >
          <div className="relative z-10 flex items-center justify-between px-6 flex-row">
            <div className={`hidden sm:flex items-center justify-center ${slides[currentSlide].imagePosition === "left" ? "order-first" : "order-none opacity-0"}`}>
              <img 
                src="/trying.png" 
                alt={slides[currentSlide].imagePosition === "left" ? slides[currentSlide].alt : ""} 
                className="w-28 h-10 rounded-full object-cover"
              />
            </div>
            
            <span className="flex-1 text-center mx-4 text-xs sm:text-base">
              {formSubmitted ? "Thanks for your interest! We'll be in touch soon." : slides[currentSlide].text}
            </span>
            
            <div className={`hidden sm:flex items-center justify-center ${slides[currentSlide].imagePosition === "right" ? "order-last" : "order-none opacity-0"}`}>
              <img 
                src="/trying.png" 
                alt={slides[currentSlide].imagePosition === "right" ? slides[currentSlide].alt : ""} 
                className="w-28 h-10 rounded-full object-cover"
              />
            </div>
          </div>

          <div className="absolute bottom-1 sm:bottom-2 left-0 right-0 flex justify-center space-x-2">
            {[...Array(totalSlides)].map((_, index) => (
              <div
                key={index}
                className={`w-1 h-1 sm:w-2 sm:h-2 rounded-full cursor-pointer ${
                  currentSlide === index ? 'bg-white' : 'bg-gray-500'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  goToSlide(index);
                }}
              />
            ))}
          </div>
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
            <button
              className="p-0.5 sm:p-1 bg-gray-800 rounded-full opacity-50 hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
            >
              <span className="sr-only">Previous</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
            <button
              className="p-0.5 sm:p-1 bg-gray-800 rounded-full opacity-50 hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
            >
              <span className="sr-only">Next</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1 sm:top-2 right-2 text-xs text-white font-normal">
            {currentSlide + 1}/{totalSlides}
          </div>
        </button>
      )}
    </div>
  );
};

export default SlidingButton;