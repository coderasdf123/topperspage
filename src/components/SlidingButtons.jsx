import React, { useState, useEffect, useRef } from 'react';

const SlidingButtons = () => {
  const [mousePosition, setMousePosition] = useState({ x: '50%', y: '50%' });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: ''
  });
  const [errors, setErrors] = useState({}); // Add state for form validation errors

  const formRef = useRef(null);

  // Form validation function
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.interest) newErrors.interest = 'Please select a class';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
        setClickCount(0);
      }
    };
    
    if (showForm) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showForm]);

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
    if (formSubmitted) return;
    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 3) {
        setShowForm(true);
      }
      return newCount;
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      // Simulate an API call - replace this with your actual API endpoint
      console.log('Submitting form data:', formData);
      
      // You could add an actual API call here like:
      // const response = await fetch('/api/submit', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      setFormSubmitted(true);
      setShowForm(false);
      setClickCount(0);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        interest: ''
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setClickCount(0);
    setErrors({});
    setFormData({
      name: '',
      email: '',
      interest: ''
    });
  };

  const slides = [
    {
      text: "Small habits, remarkable changes – Transform your lifestyle today.",
      imagePosition: "right",
      alt: "Wellness image"
    },
    {
      text: "Balance mind and body – The foundation of a fulfilling life.",
      imagePosition: "left",
      alt: "Balance image"
    },
    {
      text: "Every healthy choice is a step toward your best self.",
      imagePosition: "right",
      alt: "Healthy choices image"
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
    <div className="relative w-full" style={{ 
      height: showForm ? '320px' : '60px',
      transition: 'height 0.3s ease' 
    }}>
      {showForm && (
        <div 
          ref={formRef}
          className="absolute rounded-lg p-4 text-white w-full shadow-lg z-20" 
          style={{
            top: '-50px',
            backgroundColor: '#121212',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div className="absolute inset-0 bg-gray-800 rounded-lg" style={{ zIndex: 10 }}></div>
          
          <h3 className="text-lg font-semibold mb-3">Tell us about yourself</h3>
          <form onSubmit={handleFormSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium mb-1">Name:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className={`px-3 py-2 bg-gray-900 border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-md text-white`}
                  required 
                />
                {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
              </div>
              
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium mb-1">Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className={`px-3 py-2 bg-gray-900 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-md text-white`}
                  required 
                />
                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="interest" className="block text-sm font-medium mb-1">Select your Class</label>
              <select 
                id="interest" 
                name="interest" 
                value={formData.interest} 
                onChange={handleInputChange} 
                className={`w-full max-w-xs px-3 py-2 bg-gray-900 border ${errors.interest ? 'border-red-500' : 'border-gray-600'} rounded-md text-white`}
                required 
              >
                <option value="">Select an option</option>
                <option value="jee-neet">JEE/NEET</option>
                <option value="class-11">Class 11</option>
                <option value="class-12">Class 12</option>
                <option value="olympiad">Olympiad</option>
              </select>
              {errors.interest && <span className="text-red-500 text-xs mt-1">{errors.interest}</span>}
            </div>
            
            {errors.submit && <span className="text-red-500 text-sm mb-2 block">{errors.submit}</span>}
            
            <div className="flex justify-end gap-2 mt-2">
              <button 
                type="button" 
                onClick={handleCancel} 
                className="px-3 py-1 bg-gray-800 rounded-md hover:bg-gray-700 text-white text-sm" 
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="px-3 py-1 rounded-md text-gray-900 bg-white hover:bg-gray-100 text-sm" 
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
      
      {/* Rest of your button/slideshow code remains the same */}
      <button
        className="relative w-full py-3 mb-6 rounded-lg font-semibold text-white overflow-hidden
                  bg-gray-500 before:content-[''] before:absolute before:inset-0 before:transition-opacity
                  before:bg-[radial-gradient(circle_100px_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.7),transparent)]
                  before:opacity-100 hover:before:opacity-100"
        onMouseMove={handleMouseMove}
        onClick={handleButtonClick}
        style={{
          "--mouse-x": mousePosition.x,
          "--mouse-y": mousePosition.y,
        }}
      ><div className="relative z-10 flex items-center justify-between px-6 flex-row">
      <div className={`hidden sm:flex items-center justify-center ${slides[currentSlide].imagePosition === "left" ? "order-first" : "order-none opacity-0"}`}>
        <img 
          src="/trying.png" 
          alt={slides[currentSlide].imagePosition === "left" ? slides[currentSlide].alt : ""} 
          className="w-28 h-10 rounded-full object-cover"
        />
      </div>
      
      <span className="flex-1 text-center mx-4 text-xs sm:text-base">
        {formSubmitted ? "Thanks for sharing your wellness goals! We'll be in touch soon." : slides[currentSlide].text}
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
        className="p-0.5 sm:p-1 bg-gray-700 rounded-full opacity-50 hover:opacity-100"
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
        className="p-0.5 sm:p-1 bg-gray-700 rounded-full opacity-50 hover:opacity-100"
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
        {/* ... rest of your button content ... */}
    
    </div>
  );
};

export default SlidingButtons;