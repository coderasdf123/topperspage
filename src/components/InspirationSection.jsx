import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import SlidingButton from './SlidingButton';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  const handleOverlayClick = (e) => {
    // Check if the click occurred on the overlay itself, not its children
    if (e.target === e.currentTarget) {
      onClose();
    };
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div className="relative w-[90vw] h-[90vh] max-w-6xl max-h-[800px] bg-white rounded-lg">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 z-10 bg-white/80 rounded-full p-1"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="w-full h-full flex items-center justify-center">
          {React.Children.map(children, child => 
            React.cloneElement(child, {
              className: "max-w-full max-h-full object-contain"
            })
          )}
        </div>
      </div>
    </div>
  );
};

const ImageCarousel = ({ images, isModal = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);



  const nextSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleImageClick = () => {
    if (!isModal) {
      setIsModalOpen(true);
    }
  };

  const carouselContent = (
    <div className={`relative w-full ${isModal ? 'h-full' : 'h-[225.9px]'} group`}>
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-full flex-shrink-0"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className={`w-full h-full ${isModal ? 'object-contain' : 'object-cover'} ${
                  !isModal ? 'cursor-pointer' : ''
                }`}
                onClick={handleImageClick}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <>
      {carouselContent}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ImageCarousel images={images} isModal={true} />
      </Modal>
    </>
  );
};

const InspirationSection = () => {
  const cardImages = {
    card1: [
      '/bhavishh.jpeg',
      '/BHAVISH2.jpeg',
      '/bhavesh.jpeg',
      '/bhavish4.jpeg',
      '/BHAVISH5.jpeg'
    ],
    card2: [
      '/wheel7.jpeg',
      '/rule10.jpeg',
      '/IMAGE3-1.jpeg',
      '/time.jpeg',
      '/habit1.jpeg'
    ],
    card3: [
      '/trophy2.jpeg',
      '/start.jpeg',
      '/apply2.jpeg',
      '/rise.jpeg',
      '/universe.jpeg'
    ]
  };
  const [mousePosition, setMousePosition] = useState({ x: "50%", y: "50%" });
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseMove = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x: `${x}px`, y: `${y}px` });
  };
  return (
    <section className="w-full flex flex-row -mb-39 text-left h-[80%] text-11xl text-white font-sf-pro">
      <div className="flex-1 bg-white overflow-hidden flex flex-row items-start justify-start w-full relative">
        {/* Grid Background - Small Screens */}
        <div className="absolute inset-0 sm:hidden">
          <div className="w-full h-full" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(209, 213, 219, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(209, 213, 219, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        {/* Grid Background - SM and larger screens */}
        <div className="absolute inset-0 hidden sm:block">
          <div className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(209, 213, 219, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(209, 213, 219, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '10px 10px'
            }}
          />
        </div>

        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start px-2 sm:-mt-20 sm:-mb-20 -px-2 sm:px-20 xl:py-40 xl:px-80 gap-16 max-w-full relative">
          {/* Header section */}
          <div className="self-stretch flex flex-col items-start justify-start pb-5 gap-12 max-w-full text-xs text-darkgray-100">
            <div className="w-full bg-white flex flex-col sm:flex-row items-start justify-between gap-18 max-w-full">
              <div className="flex flex-col items-start justify-start gap-4 w-full sm:w-auto">
                <div className="flex flex-row items-center justify-start gap-2.5">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-3.5 h-3.5 top-[32px] relative overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/starsvg.svg"
                    />
                  </div>
                  <div className="relative tracking-[1px] top-[32px] text-xs uppercase font-sf-pro-bold z-[1]">
                    Wisdom from popular authors
                  </div>
                </div>
                <b className="relative text-4xl top-[18px] leading-[39px] font-sf-pro-bold px-1 text-black z-[1]">
                  <span className="inline-block">Get your Inspiration from here..</span>
                </b>
              </div>

              <div className="flex flex-col items-start justify-start gap-[16px] mt-4 sm:mt-0">
                <div className="flex flex-row items-start justify-start gap-[5px] relative">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="w-3 h-[42.8px] relative">
                      <img
                        className="absolute top-[6px] left-[0px] w-3 h-3 z-[2]"
                        alt=""
                        src="/svg-5.svg"
                      />
                      <img
                        className="absolute top-[59px] left-[0px] w-3 h-3 z-[2]"
                        alt=""
                        src="/svg-5.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[12.8px] w-[326px] sm:min-w-[336px] max-w-full">
                    <div className="self-stretch relative leading-[20.8px] z-[2]">
                      <span className="font-sf-pro-medium text-black">Transform your IIT-JEE/NEET journey by learning from the wisdom of top self-help books.</span>
                    </div>
                    <div className="w-[456.6px] relative leading-[20.8px] flex items-center max-w-full z-[2]">
                      <span className="w-full font-sf-pro-regular">
                        Gain inspiration and practical strategies from books that have shaped millions of successful individuals.
                        <span className="font-sf-pro-medium text-black"> Learn how to build the mindset that will drive you toward your IIT-JEE/NEET goals.</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards Section */}
            <div className="self-stretch bg-white flex flex-row items-start justify-start gap-[25px] max-w-full top-[45px] sm:top-[0px] mb-[40px] text-base text-gray-100">
              <div className="w-full overflow-x-auto sm:overflow-x-hidden">
                <div className="flex flex-row items-start justify-start gap-[25px]">
                  {/* Card 1 */}
                  <div className="flex flex-col items-start justify-start gap-3.5 sm:max-w-[calc(33.33%-12px)] sm:flex-shrink-0 w-[80%] flex-none">
                    <ImageCarousel images={cardImages.card1} />
                    <div className="flex flex-col items-start justify-start gap-[6.8px]">
                      <div className="leading-[20.8px]">
                        <p className="m-0 font-sf-pro-medium text-black">From Atomic Habits by James Clear</p>
                        <p className="m-0 font-sf-pro-medium text-transparent bg-clip-text bg-gradient-to-r from-[#39b6d8] via-[#f7d344] to-[#e38330]">
                          "You do not rise to the level of your goals. You fall to the level of your systems."
                        </p>
                      </div>
                      <div className="text-xs font-sf-pro-regular leading-[18px] text-darkgray-100">
                        <p className="m-0">Many IIT-JEE/NEET students struggle with procrastination and managing their time effectively.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex flex-col items-start justify-start gap-3.5 sm:max-w-[calc(33.33%-12px)] sm:flex-shrink-0 w-[80%] flex-none">
                    <ImageCarousel images={cardImages.card2} />
                    <div className="flex flex-col items-start justify-start gap-[6.8px]">
                      <div className="leading-[20.8px]">
                        <p className="m-0 font-sf-pro-medium text-black">From Deep Work by Cal Newport</p>
                        <p className="m-0 font-sf-pro-medium text-transparent bg-clip-text bg-gradient-to-r from-[#39b6d8] via-[#f7d344] to-[#e38330]">
                          "The ability to concentrate is a skill that must be trained."
                        </p>
                      </div>
                      <div className="text-xs leading-[18px] font-sf-pro-regular text-darkgray-100">
                        <p className="m-0">The vast IIT-JEE/NEET syllabus demands deep focus.</p>
                        <p className="m-0">Focus on clarity, one concept at a time.</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="flex flex-col items-start justify-start gap-3.5 sm:max-w-[calc(33.33%-2rem)] sm:flex-shrink-0 w-[80%] flex-none">
                    <ImageCarousel images={cardImages.card3} />
                    <div className="flex flex-col items-start justify-start gap-[6.8px]">
                      <div className="leading-[20.8px]">
                        <p className="m-0 font-sf-pro-medium text-black">From The Secret by Rhonda Byrne</p>
                        <p className="m-0 font-sf-pro-medium text-transparent bg-clip-text bg-gradient-to-r from-[#39b6d8] via-[#f7d344] to-[#e38330]">
                          "Your thoughts become things."
                        </p>
                      </div>
                      <div className="text-xs font-sf-pro-regular leading-[18px] text-darkgray-100">
                        <p className="m-0">Students facing complex problems often struggle with self-doubt.</p>
                        <p className="m-0">Focusing on solutions instead of the difficulty can boost their creative thinking skills.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
        <SlidingButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;