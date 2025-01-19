import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Unlock = () => {
  const [selectedNav, setSelectedNav] = useState('Your brain decoded');
  const [currentPage, setCurrentPage] = useState(0);

  const navigationItems = [
    [
      'Your brain decoded',
      'Accelerate your Reading',
      'Unlock Your Potential',
      'Memory Hacking Secrets',
      'Mind Training',
    ],
    [
      'Focus Mastery',
      'Learning Strategies',
      'Brain Performance',
      'Cognitive Enhancement',
    ],
  ];

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? 1 : 0));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? 0 : 1));
  };

  const cardContent = {
    'Your brain decoded': {
      blackCard: {
        hashtag: '#YOUR BRAIN DECODED',
        description:
          'Unleash the untapped potential within yourself by exploring your strengths and overcoming self-limiting beliefs. Embrace personal growth and unlock abilities you never knew existed, transforming challenges into opportunities.',
      },
      whiteCards: [
        {
          title: 'Neural Pathways',
          image: '/brainroom.jpeg',
          tag: 'Neuroscience',
          description:
            'Discover how your brain creates and strengthens neural connections, leading to improved learning and memory retention.',
        },
        {
          title: 'Brain Plasticity',
          image: '/brainroom.jpeg',
          tag: 'Research',
          description:
            'Explore the amazing ability of your brain to reorganize itself by forming new neural connections throughout life.',
        },
        {
          title: 'Cognitive Functions',
          image: '/brainroom.jpeg',
          tag: 'Science',
          description:
            'Understanding the core cognitive functions that drive learning, memory, and problem-solving abilities.',
        },
      ],
    },
    // Add other sections similarly...
  };

  return (
    <div className="relative w-full bg-gray-50 py-4 sm:py-6 md:py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 font-inter">
        {/* Header Section */}
        <div className="flex items-center gap-2 mb-2">
          <div className="relative">
            <img
              alt="starsvg133"
              src="/starsvg133-iai6.svg"
              className="w-3 h-3 md:w-4 md:h-4"
            />
          </div>
          <span className="relative uppercase font-inter font-semibold text-darkgray-100 text-[10px] sm:text-xs md:text-sm">
            FROM STRUGGLER TO TOPPER
          </span>
        </div>

        {/* Title Section */}
        <div className="mb-4 sm:mb-6 relative">
          <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight sm:leading-[39px] font-bold text-black">
            Discover the{" "}
            <span className="relative inline-block">
              Hidden Powers
              <span className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 left-0 w-full h-[20px] sm:h-[30px] md:h-[40px]">
                <img
                  alt="degreeSectionsvgfill142"
                  src="/degreesectionsvgfill142-kl15.svg"
                  className="w-full h-full"
                />
              </span>
            </span>{" "}
            Within You
          </h1>
        </div>

        {/* Navigation Bar */}
        <div className="mt-4 sm:mt-6 md:mt-8 w-full rounded-xl bg-black p-3 sm:p-4">
          <div className="relative flex items-center">
            {/* Prev Button */}
            <button
              onClick={handlePrevPage}
              className={`absolute left-1 sm:left-2 rounded-full p-1 sm:p-2 text-white hover:bg-gray-800 ${
                currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>

            {/* Navigation Items */}
            <div className="flex-1 flex justify-center space-x-3 sm:space-x-4 md:space-x-8 text-white font-inter overflow-x-auto scrollbar-hide px-8 sm:px-10 md:px-12">
              {navigationItems[currentPage]?.map((item) => (
                <div
                  key={item}
                  onClick={() => setSelectedNav(item)}
                  className={`text-xs sm:text-sm whitespace-nowrap cursor-pointer transition-colors duration-300 py-1 ${
                    selectedNav === item
                      ? 'bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent'
                      : 'text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:via-yellow-300 hover:to-orange-400 hover:bg-clip-text hover:text-transparent'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextPage}
              className={`absolute right-1 sm:right-2 rounded-full p-1 sm:p-2 text-white hover:bg-gray-800 ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={currentPage === 1}
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>
          </div>
        </div>

        {/* Cards Container */}
        {cardContent[selectedNav] && (
          <div className="mt-4 sm:mt-6 md:mt-8 flex flex-row gap-4 sm:gap-5 md:gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-4 scrollbar-hide">
            {/* Black Card */}
            <div className="w-[280px] sm:w-80 rounded-xl border-2 border-black bg-black p-4 sm:p-5 md:p-6 flex-shrink-0 snap-start">
              <div className="h-full flex flex-col justify-between">
                <p className="text-white text-xs sm:text-sm leading-relaxed">
                  <p className="mt-40 sm:mt-48 md:mt-56 text-white text-xs sm:text-sm">
                    {cardContent[selectedNav].blackCard.hashtag}
                  </p>
                  {cardContent[selectedNav].blackCard.description}
                </p>
              </div>
            </div>

            {/* White Cards */}
            {cardContent[selectedNav].whiteCards.map((card, index) => (
              <div key={index} className="w-[280px] sm:w-80 rounded-xl bg-white p-3 sm:p-4 shadow-lg flex-shrink-0 snap-start">
                <div className="relative h-36 sm:h-40 md:h-44 rounded-lg bg-gray-200">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className="mt-3 sm:mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-semibold">{card.title}</h3>
                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="mt-3 sm:mt-4">
                    <span className="rounded-full bg-gray-100 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium">
                      {card.tag}
                    </span>
                  </div>
                  <hr className="my-3 sm:my-4" />
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Unlock;
