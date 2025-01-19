import React, { useState } from 'react';

const Freq = () => {
  const [openItem, setOpenItem] = useState(0);

  const faqs = [
    {
      question: "Can IIT-JEE aspirants tailor their preparation?",
      answer: "Yes, aspirants can personalize their IIT-JEE preparation. Many coaching institutes offer tailored study plans, based on the student's strengths and weaknesses, allowing them to prioritize areas that need more attention. Self-paced learning tools, such as online platforms and mobile apps, also help students modify their learning schedules."
    },
    {
      question: "What is a typical day of an IIT-JEE aspirant?",
      answer: "A typical day involves dedicated study hours, attending coaching classes, practicing mock tests, and revising key concepts."
    },
    {
      question: "How will IIT-JEE aspirants be graded?",
      answer: "Grading is based on performance in the JEE Main and Advanced exams, which include multiple-choice and numerical questions."
    },
    {
      question: "What are the benefits of preparing for IIT-JEE?",
      answer: "Preparation helps build a strong foundation in science and math, enhances problem-solving skills, and opens doors to prestigious engineering institutions."
    },
    {
      question: "If an applicant is from a non-science background, is IIT-JEE a right fit for them?",
      answer: "Typically, IIT-JEE requires a strong foundation in science and mathematics, but with dedication and proper guidance, non-science students can adapt and excel."
    }
  ];

  const navItems = [
    "Eligibility Criteria",
    "Application Process", 
    "Entrance Exam Details",
    "Admission Policies"
  ];

  return (
    <div className="w-full relative bg-black py-20 font-inter">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8 relative">
          <div className="flex items-center gap-2 mb-2">
            <div className="relative">
              <img
                alt="starsvg133"
                src="/starsvg133-iai6.svg"
                className="w-4 h-4"
              />
            </div>
            <span className="text-[#a3a3a3] text-xs font-inter font-semibold tracking-[1px]">
              QUERIES
            </span>
          </div>
          <div className="mb-6 relative">
            <h1 className="text-10xl-9 leading-[39px] font-bold text-white">Frequently Asked Questions</h1>
            <div className="absolute -bottom-8 left-19 w-32 h-10">
              <img
                alt="degreeSectionsvgfill142"
                src="/degreesectionsvgfill142-kl15.svg"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Navigation */}
          <div className="bg-gray-800 rounded-lg p-6" style={{ height: 'fit-content'}}>
            <nav>
              {navItems.map((item, index) => (
                <div key={index} className={`${index !== navItems.length - 1 ? 'mb-8' : ''}`}>
                  <span className="text-white text-sm">{item}</span>
                </div>
              ))}
            </nav>
          </div>

          {/* FAQ Items */}
          <div className="flex-1">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-6"
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-white text-base font-medium leading-relaxed">{faq.question}</h3>
                    <button
                      onClick={() => setOpenItem(openItem === index ? -1 : index)}
                      className="ml-4 w-6 h-6 rounded-full bg-white flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        {openItem === index ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"/>
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                        )}
                      </svg>
                    </button>
                  </div>
                  {openItem === index && faq.answer && (
                    <p className="mt-4 text-white text-sm leading-relaxed">
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