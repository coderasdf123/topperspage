import React, { useState } from 'react';

const Freq = () => {
  const [openItem, setOpenItem] = useState(0);
  const [selectedNav, setSelectedNav] = useState('Why Choose Us');

  // Comprehensive FAQ data with categories
  const faqs = {
    'Why Choose Us': [
      {
        question: "How does our community support IIT-JEE aspirants?",
        answer: "Our community offers personalized guidance from former IIT toppers, structured study plans tailored to individual needs, and regular doubt-clearing sessions. We've helped over 1,000 students successfully crack IIT-JEE with ranks under 5,000, creating a supportive environment where aspirants can learn collaboratively."
      },
      {
        question: "What makes our community different for NEET aspirants?",
        answer: "We provide specialized mentorship from NEET toppers and doctors, access to high-quality study resources, and personalized strategies for mastering NEET-specific concepts. Our community focuses on both theoretical knowledge and practical application, with regular mock tests and performance analytics."
      },
      {
        question: "How do we ensure consistent preparation for competitive exams?",
        answer: "Our community follows a structured approach with weekly goals, regular progress tracking, and personalized feedback. We organize topic-wise discussion forums, peer review sessions, and provide access to a vast repository of previous years' questions with detailed solutions."
      },
      {
        question: "What success stories have emerged from our community?",
        answer: "Our community has produced numerous success stories, including students who secured AIR under 100 in IIT-JEE and NEET. Many of our members have successfully entered prestigious institutions like IIT Bombay, IIT Delhi, AIIMS Delhi, and other top medical colleges across India despite coming from diverse educational backgrounds."
      }
    ],
    'About Our Platform': [
      {
        question: "What resources do we offer for IIT-JEE preparation?",
        answer: "Our platform provides comprehensive study materials covering all JEE topics, video lectures from top educators, practice problems with difficulty levels, topic-wise tests, full-length mock exams, and personalized performance analytics. We also offer specialized modules for JEE Advanced preparation."
      },
      {
        question: "How do we support NEET aspirants with our platform?",
        answer: "Our platform offers NEET-focused resources including detailed notes on biology, chemistry, and physics, NCERT-aligned study material, subject-wise question banks, previous years' papers with solutions, and regular mock tests. We provide special emphasis on diagram-based questions and conceptual clarity."
      },
      {
        question: "What technological features make our platform effective?",
        answer: "Our platform utilizes AI-driven personalized learning paths, spaced repetition algorithms for better retention, instant doubt resolution through our chatbot, peer-to-peer learning forums, and comprehensive performance analytics that identify strengths and weaknesses to optimize study strategies."
      },
      {
        question: "How frequently is the platform content updated?",
        answer: "We update our content regularly based on the latest exam patterns and syllabus changes. Our team of educators reviews and refreshes study materials monthly, adds new practice questions weekly, and updates mock tests to reflect the most recent examination trends for both IIT-JEE and NEET."
      }
    ],
    'Mentorship Opportunities': [
      {
        question: "How can IIT-JEE aspirants connect with toppers for guidance?",
        answer: "Our community facilitates one-on-one mentorship sessions with IIT toppers every week. Aspirants can book personalized guidance sessions, join group mentoring webinars, and participate in AMA (Ask Me Anything) sessions with recent JEE Advanced toppers who share strategies, common mistakes to avoid, and effective study techniques."
      },
      {
        question: "What mentorship options are available for NEET aspirants?",
        answer: "NEET aspirants can access mentorship from medical students and doctors through scheduled video calls, dedicated doubt-clearing sessions, and specialized guidance for biology practical preparations. Our mentors provide insights into the medical entrance process and help create customized study plans based on individual progress."
      },
      {
        question: "Can students request guidance on specific challenging topics?",
        answer: "Absolutely! Students can request topic-specific guidance through our 'Topic SOS' feature. Whether it's organic chemistry for JEE or human physiology for NEET, our mentors provide focused explanations, additional practice problems, and conceptual clarity through dedicated sessions on difficult topics."
      },
      {
        question: "How do mentors track student progress and provide feedback?",
        answer: "Our mentors use our integrated progress tracking system to monitor student performance across practice tests, assignments, and mock exams. They provide detailed feedback reports highlighting strengths, areas for improvement, and customized strategies to overcome specific challenges faced by IIT-JEE and NEET aspirants."
      }
    ],
    'Membership Benefits': [
      {
        question: "What exclusive resources do community members receive?",
        answer: "Community members gain access to premium study materials, solved papers from the past 15 years with detailed explanations, advanced problem-solving workshops, and specialized courses for JEE Advanced and NEET. Members also receive priority access to new features and resources before they're available to the general public."
      },
      {
        question: "How does joining the community improve exam readiness?",
        answer: "Community membership enhances exam readiness through structured weekly challenges, peer competitions, personalized study plans, and regular performance assessments. Our advanced analytics help identify knowledge gaps and provide targeted resources to strengthen weak areas for both IIT-JEE and NEET aspirants."
      },
      {
        question: "What networking opportunities exist within the community?",
        answer: "Our community facilitates connections with current IIT and medical college students, creating valuable networking opportunities. Members can participate in college-specific discussions, career guidance sessions, and alumni interactions that provide insights into campus life, branch selection, and future career prospects."
      },
      {
        question: "Are there any additional perks for active community members?",
        answer: "Active members receive recognition through our leaderboard system, opportunities to become peer mentors, exclusive invitations to webinars with industry experts, and access to scholarship programs. Long-term active members also get lifetime access to our alumni network after successfully clearing their exams."
      }
    ]
  };

  const navItems = [
    "Why Choose Us",
    "About Our Platform", 
    "Mentorship Opportunities",
    "Membership Benefits"
  ];

  // Handle card click
  const handleCardClick = (index, event) => {
    // Check if the click is on the button or its children
    const isButtonClick = event.target.closest('button') !== null;
    
    // Only toggle if the click is not on the button
    if (!isButtonClick) {
      setOpenItem(openItem === index ? -1 : index);
    }
  };

  // Handle button click
  const handleButtonClick = (index, event) => {
    event.stopPropagation(); // Prevent card click from being triggered
    setOpenItem(openItem === index ? -1 : index);
  };

  return (
    <div className="w-full relative bg-black py-6 sm:py-10 font-sf-pro max-h-screen sm:max-h-none">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8 relative">
          <div className="flex items-center gap-2 mb-2">
            <div className="relative">
              <img
                alt="starsvg133"
                src="/starsvg133-iai6.svg"
                className="w-4 h-4 relative top-[20px]"
              />
            </div>
            <span className="text-[#a3a3a3] text-xs relative top-[20px] right-[4px] font-sf-pro-bold tracking-[1px]">
              QUERIES
            </span>
          </div>
          <div className="mb-4 sm:mb-6 relative">
            <h1 className="text-[25px] sm:text-10xl-9 leading-[32px] sm:leading-[39px] font-bold text-white">Frequently Asked Questions</h1>
            <div className="absolute -bottom-6 sm:-bottom-8 left-19 w-24 sm:w-32 h-8 sm:h-10">
              <img
                alt="degreeSectionsvgfill142"
                src="/degreesectionsvgfill142-kl15.svg"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          {/* Navigation */}
          <div className="bg-gray-800 rounded-lg p-4 sm:p-6" style={{ height: 'fit-content'}}>
            <nav className="flex sm:block overflow-x-auto whitespace-nowrap sm:whitespace-normal">
              {navItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`cursor-pointer ${index !== navItems.length - 1 ? 'mr-6 sm:mr-0 sm:mb-8' : ''} mb-2`}
                  onClick={() => setSelectedNav(item)}
                >
                  <span className={`
                    font-sf-pro-bold text-sm 
                    ${selectedNav === item 
                      ? 'bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent' 
                      : 'text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:via-yellow-300 hover:to-orange-400 hover:bg-clip-text hover:text-transparent'
                    }
                  `}>
                    {item}
                  </span>
                </div>
              ))}
            </nav>
          </div>

          {/* FAQ Items */}
          <div className="flex-1">
            <div className="space-y-3 sm:space-y-4">
              {faqs[selectedNav].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-4 sm:p-6 cursor-pointer"
                  onClick={(e) => handleCardClick(index, e)}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-white text-sm sm:text-base font-sf-pro-medium leading-relaxed">{faq.question}</h3>
                    <button
                      onClick={(e) => handleButtonClick(index, e)}
                      className="ml-4 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0"
                    >
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        {openItem === index ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"/>
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                        )}
                      </svg>
                    </button>
                  </div>
                  {openItem === index && faq.answer && (
                    <p className="mt-3 sm:mt-4 text-white text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freq;