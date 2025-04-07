import React, { useState } from 'react';
import PropTypes from "prop-types";
import { X } from 'lucide-react'; // For the close button

const FrameComponent1 = ({ className = "" }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardData = [
    { 
      title: "One-on-One Personalised Learning", 
      desc: "Understand complex concepts",
      image: "/easy.jpeg",
      details: "Personalized learning experiences tailored to your unique learning style and pace. Our one-on-one approach ensures you grasp complex concepts effectively."
    },
    { 
      title: "Live Doubt Sessions", 
      desc: "Get your queries answered in real time",
      image: "/doubt 01.jpg",
      details: "Real-time interactive sessions where expert instructors address your specific questions, helping you clear doubts instantly and boost your understanding."
    },
    { 
      title: "Mock Tests", 
      desc: "Practice with real-time exam simulations",
      image: "/mock_tests.jpeg",
      details: "Simulate exam conditions with our comprehensive mock tests. Get detailed performance analysis and insights to improve your exam preparation strategy."
    },
    { 
      title: "Personalized Feedback", 
      desc: "AI-driven performance analysis",
      image: "/personal-feedback.jpeg",
      details: "Advanced AI algorithms provide in-depth analysis of your performance, identifying strengths and areas for improvement with actionable insights."
    },
    { 
      title: "24/7 Assistance", 
      desc: "Access help whenever you need",
      image: "/ASSISTANCE 1.webp",
      details: "Round-the-clock support to ensure you never feel stuck. Our dedicated team is always available to guide you through your learning journey."
    },
    { 
      title: "Interactive Quizzes", 
      desc: "Test and reinforce your knowledge",
      image: "/interactive-quizzes.jpeg",
      details: "Engaging quizzes designed to test and reinforce your learning. Interactive format makes studying enjoyable and helps solidify your understanding."
    }
  ];

  const openCarousel = (card) => {
    setSelectedCard(card);
  };

  const closeCarousel = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <section
        className={`w-full flex flex-row items-start justify-start pt-0 text-left text-11xl text-black font-sf-pro mq925:pb-5 sm:pl-35 sm:pr-35 ${className}`}
      >
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

          <div className="flex-1 overflow-hidden flex flex-col items-start justify-start pt-10 sm:pt-[62px] sm:px-[335px] sm:pb-[81px] p-4 box-border relative gap-[20px] sm:gap-[61px] max-w-full mq450:pt-5 mq450:pb-[22px] mq450:box-border mq925:gap-[15px] mq925:pt-[26px] mq925:px-[83px] mq925:pb-[34px] mq925:box-border mq1400:gap-[30px] mq1400:pt-10 mq1400:px-[167px] mq1400:pb-[53px] mq1400:box-border">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[19px] box-border gap-[10px] sm:gap-[49px] max-w-full text-xs text-darkgray-100 mq450:gap-4 mq925:gap-6">
              {/* Previous section content remains unchanged */}
              <div className="w-full flex flex-col sm:flex-row items-start sm:items-end justify-start gap-[20px] sm:gap-[70.4px] max-w-full mq450:gap-[12px] mq925:gap-[18px] mq1400:gap-[35px]">
              <div className="w-full sm:w-auto flex flex-col items-start justify-start gap-2 max-w-full mq450:flex-1">
                <div className="flex flex-row items-start justify-start gap-2.5">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-3.5 h-3.5 relative overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/starsvg.svg"
                    />
                  </div>
                  <div className="relative tracking-[1px] uppercase font-sf-pro-bold z-[1]">{`Take Your First Step with NNIIT`}</div>
                </div>
                <b className="relative text-5xl leading-[39px] font-sf-pro-bold text-black z-[1] mq450:text-5xl mq450:leading-[31px]">
                  <span className="inline-block">What's the first Thing you want to do Today to move forward? </span>
                </b>
              </div>
              <div className="w-full sm:flex-1 flex flex-col items-start justify-end px-0 box-border sm:min-w-[406px] max-w-full text-smi mq450:min-w-[250px]">
                <div className="self-stretch flex flex-row items-start justify-start sm:pt-[39.4px] sm:pb-[1.8px] sm:pl-[50px] sm:pr-10 box-border relative gap-[5px] max-w-full mq450:flex-wrap mq450:pl-[20px]">
                  <div className="flex flex-col items-start justify-start px-0 pb-0">
                    <div className="w-3 h-[42.8px] relative">
                      <img
                        className="absolute top-[2px] left-[0px] w-3 h-3 z-[2]"
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
                  <div className="flex-1 flex flex-col items-start justify-start gap-[12.8px] min-w-[250px] max-w-full">
                    <div className="self-stretch font-sf-pro-regular relative leading-[20.8px] z-[2]">
                      <span>{` Build a solid foundation in key concepts before tackling advanced topics.

`}</span>
                      <span className="text-black">{``}</span>
                    
                    </div>
                    <div className="w-[476.6px] font-sf-pro-regular relative leading-[20.8px] flex items-center max-w-full z-[2]">
                      <span className="w-full">
                        <span>{`Choose a subject and dive into the core concepts to get a solid start. `}</span>
                        <span className="font-sf-pro-regular text-gray-200">
                        Start with one simple topic or problem. This small action will help you build momentum.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

              <div
                className="flex flex-row items-start justify-start gap-[25px] overflow-x-auto scrollbar-hide max-w-full text-base font-sf-pro-regular text-gray-100"
                style={{ whiteSpace: 'nowrap', scrollBehavior: 'smooth' }}
              >
                {cardData.map((card, index) => (
                  <div 
                    key={index} 
                    className="flex-none flex flex-col items-start justify-start gap-3.5 min-w-[280px] sm:min-w-[300px] max-w-full cursor-pointer"
                    onClick={() => openCarousel(card)}
                  >
                    <div className="self-stretch h-[185.75px] relative rounded-lg bg-gray-100 flex items-center justify-center">
                      <img
                        className="absolute w-full h-full object-cover"
                        alt={`${card.title} Icon`}
                        src={card.image}
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6.8px]">
                      <div className="w-[229px] relative leading-[20.8px] flex items-center z-[5]">
                        <span className="w-full">
                          <p className="m-0 text-black">{card.title}</p>
                          <div className='w-[400px]'>
                            <p className="m-0 font-medium text-transparent bg-gradient-to-r from-[#39b6d8] via-[#f7d344] to-[#e38330] bg-clip-text break-words">
                              {card.desc}
                            </p>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Modal */}
      {selectedCard && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={closeCarousel}
        >
          <div 
            className="bg-white rounded-lg shadow-xl w-full sm:w-[60%] sm:h-[60%] relative p-6 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-black hover:text-gray-700"
              onClick={closeCarousel}
            >
              <X size={24} />
            </button>

            <div className="flex flex-col sm:flex-row h-full">
              <div className="sm:w-1/2 mb-4 sm:mb-0 sm:mr-6">
                <img 
                  src={selectedCard.image} 
                  alt={selectedCard.title} 
                  className="w-full h-auto sm:h-full object-cover rounded-lg"
                />
              </div>
              <div className="sm:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">{selectedCard.title}</h2>
                <p className="text-gray-700">{selectedCard.details}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;