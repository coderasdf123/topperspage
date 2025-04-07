import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Individual Image Carousel Component
const LifeStyle = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(prevIndex => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index, e) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      {/* Main image container */}
      <div className="relative aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg">
        <img
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          className="w-full h-48 object-cover"
        />
        
        {/* Navigation arrows */}
        <button 
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={(e) => goToImage(index, e)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentImageIndex === index ? 'bg-white w-4' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Main Image Gallery Component
const Lifestyle = () => {
  // Image content data
  const imageContent = [
    {
      title: "Mindful Living",
      description: "Embrace a balanced lifestyle through mindful practices and daily routines.",
      images: [
        { src: "/api/placeholder/500/300", alt: "Mindful Living 1" },
        { src: "/api/placeholder/500/300", alt: "Mindful Living 2" },
        { src: "/api/placeholder/500/300", alt: "Mindful Living 3" },
        { src: "/api/placeholder/500/300", alt: "Mindful Living 4" },
        { src: "/api/placeholder/500/300", alt: "Mindful Living 5" }
      ]
    },
    {
      title: "Healthy Habits",
      description: "Build sustainable habits that promote long-term wellness and success.",
      images: [
        { src: "/api/placeholder/500/300", alt: "Healthy Habits 1" },
        { src: "/api/placeholder/500/300", alt: "Healthy Habits 2" },
        { src: "/api/placeholder/500/300", alt: "Healthy Habits 3" },
        { src: "/api/placeholder/500/300", alt: "Healthy Habits 4" },
        { src: "/api/placeholder/500/300", alt: "Healthy Habits 5" }
      ]
    },
    {
      title: "Personal Growth",
      description: "Continue growing through consistent learning and self-improvement.",
      images: [
        { src: "/api/placeholder/500/300", alt: "Personal Growth 1" },
        { src: "/api/placeholder/500/300", alt: "Personal Growth 2" },
        { src: "/api/placeholder/500/300", alt: "Personal Growth 3" },
        { src: "/api/placeholder/500/300", alt: "Personal Growth 4" },
        { src: "/api/placeholder/500/300", alt: "Personal Growth 5" }
      ]
    }
  ];

  return (
    <div className="mt-8 mb-12">
      <div className="w-full rounded-lg bg-[#171717] p-6">
        {/* Mobile view (< sm): Single row with horizontal scroll */}
        <div className="flex sm:hidden overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {imageContent.map((item, index) => (
            <div key={index} className="flex-none w-[280px]">
              <div className="flex flex-col space-y-4">
                <ImageCarousel images={item.images} />
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-white text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view (≥ sm): 3-column grid */}
        <div className="hidden sm:grid sm:grid-cols-3 gap-6">
          {imageContent.map((item, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <ImageCarousel images={item.images} />
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-white text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifeStyle;