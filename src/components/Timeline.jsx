import React, { useState, useRef } from "react";

const Lock = ({ isOpen, onClick }) => {
  const audioRef = useRef(null);

  const handleClick = () => {
    if (!isOpen && audioRef.current) {
      audioRef.current.play();
    }
    onClick();
  };

  return (
    <div className="relative cursor-pointer -top-[25%] sm:-top-[20%] sm:-left-[25%] -translate-y-[20px] z-50" onClick={handleClick}>
      <svg width="80" height="96" viewBox="0 0 100 120" className="mx-auto sm:w-[100px] sm:h-[120px]">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "#FFD700" }} />
            <stop offset="100%" style={{ stopColor: "#DAA520" }} />
          </linearGradient>
        </defs>
        <rect x="25" y="50" width="50" height="40" rx="5" ry="5" fill="url(#goldGradient)" style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))" }} />
        <circle cx="50" cy="70" r="6" fill="#4A2C2C" className="animate-pulse" />
        <rect x="47" y="70" width="6" height="10" fill="#4A2C2C" className="animate-pulse" />
        <path
          d={!isOpen ? "M 35 30 Q 50 5, 65 30 V 50 H 35 Z" : "M 35 30 Q 50 10, 65 30 V 50 H 35"}
          stroke="url(#goldGradient)"
          strokeWidth="4"
          fill="none"
          style={{ transformOrigin: "50px 30px", transition: "d 0.6s ease-out" }}
        />
        <rect x="30" y="55" width="40" height="5" fill="rgba(255, 215, 0, 0.5)" rx="2" ry="2" />
        {isOpen && (
          <>
            <circle cx="70" cy="20" r="3" fill="#FFD700" className="animate-ping" />
            <circle cx="40" cy="15" r="2" fill="#FFD700" className="animate-ping" />
            <circle cx="55" cy="10" r="2.5" fill="#FFD700" className="animate-ping" />
          </>
        )}
      </svg>
      <div className="text-center text-sm text-yellow-600 top-[10%] font-bold mt-2">
        {isOpen ? "" : "Click to unlock"}
      </div>
      <audio ref={audioRef} className="hidden">
        <source src="https://assets.mixkit.co/sfx/preview/mixkit-lock-opening-1922.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
  };

  return (
    <div className="w-[86%] z-50 mx-auto sm:w-[400px] sm:-translate-x-[80%] bg-[#1e1e1e] p-4 rounded-2xl ">
      <h2 className="text-white text-lg font-bold">Enter Details</h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded bg-[#2e2e2e] text-white"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-[#2e2e2e] text-white"
          required
        />
        <button type="submit" className="w-full p-2 bg-[#5dc3c2] text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

const Card = ({ stage, title, description, isBlurred, top }) => (
  <div
    className={`w-[86%] mx-auto sm:mx-0 sm:absolute sm:left-[253.5px] sm:w-[729px] h-[240px] sm:h-[210px] flex flex-col sm:flex-row items-start sm:items-center flex-shrink-0 rounded-2xl bg-[#1e1e1e] p-4 sm:p-0 ${isBlurred ? "blur-sm" : ""}`}
    style={{ top }}
  >
    <div className="w-full sm:w-auto">
      <div className="-ml-[3px] sm:ml-[20px] -mt-[70px] flex flex-col space-y-1 translate-y-[70px] sm:translate-y-[0px]">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5dc3c2] via-[#a3bf63] to-[#f8d66d] text-lg font-bold leading-tight font-inter">
          {stage}
        </span>
        <span className="text-white text-xl font-sf-pro leading-7">{title}</span>
      </div>
      <span className="block mt-4 sm:mt-0 text-[#d4d4d4] text-[13px] font-sf-pro-regular leading-[20.8px] translate-y-[75px] sm:translate-y-[0px] sm:absolute sm:top-[31px] sm:left-[349.86px] sm:w-[380px]" dangerouslySetInnerHTML={{ __html: description }}>
      </span>
    </div>
    <img src="/svg1247-mqi9.svg" alt="icon" className="mt-24 sm:mt-0 w-10 h-10 sm:absolute sm:left-[352px] sm:top-[150px]" />
  </div>
);

const Timeline = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleLockClick = () => {
    if (isLocked) {
      setShowForm(true);
    }
  };

  const handleFormSubmit = (data) => {
    console.log("Form Data:", data);
    setFormSubmitted(true);
    setShowForm(false);
    setIsLocked(false);
  };

  const initialCards = [
    { top: "171.62px", stage: "Stage 1: Clarity", title: "Discover Your Purpose", description: 
        `Ask Yourself Why IIT-JEE?
        Think about your ultimate aspiration—whether it's getting into IIT for quality education, career growth, or personal achievement.<br />
       Example: Do I want to pursue engineering at IIT for its academic excellence or to work in cutting-edge technology?`},
   { top: "461.62px", stage: "Stage 2: Foundation", title: "Build Awareness of the Exam", description: "Understand the exam pattern, syllabus, and its importance.<br />Learn about the subjects, weightage, and structure of IIT-JEE (Main and Advanced). Get familiar with the level of difficulty and time commitment required." },
    { top: "751.62px", stage: "Stage 3: Strategy", title: "Identify Your Starting Point", description: "Analyze your current strengths and weaknesses in Physics, Chemistry, and Math.<br />Take diagnostic tests or solve basic problems to evaluate your understanding of concepts. This will help you create a personalized study plan." },
    { top: "1041.62px", stage: "Stage 4: Mastery", title: "Learn the Art of Time Management", description: "Plan your study schedule to balance school and IIT-JEE preparation.<br />Create a timetable that includes study hours, breaks, and revision slots. Allocate time for all three subjects and stick to the plan.", isBlurred: isLocked },
  ];

  const unlockedCards = [
    { top: "1331.62px", stage: "Stage 5: Practice", title: "Solve Problems Regularly", description: "Practice a variety of problems daily to build problem-solving skills.<br />Start with easy ones and gradually move to advanced levels." },
    { top: "1621.62px", stage: "Stage 6: Review", title: "Revise Key Concepts", description: "Set aside time weekly to revise formulas and concepts.<br />Focus on weak areas identified during practice." },
    { top: "1911.62px", stage: "Stage 7: Mock Tests", title: "Simulate Exam Conditions", description: "Take full-length mock tests under timed conditions.<br />Analyze your performance to improve speed and accuracy." },
    { top: "2201.62px", stage: "Stage 8: Final Prep", title: "Polish Your Skills", description: "Focus on revision, time management, and mental preparation.<br />Avoid new topics close to the exam date." },
  ];

  const cards = [...initialCards, ...(formSubmitted ? unlockedCards : [])];

  return (
    <div className={`w-full sm:w-[1000px] min-h-screen ${formSubmitted ? 'sm:h-[2500px]' : 'sm:h-[1400px]'} flex relative items-start flex-shrink justify-center`}>
      <div className="absolute top-0 w-full sm:left-8 sm:w-[1721px] flex relative items-start flex-shrink-0 justify-center bg-[#090909] sm:ml-[33%]">
        <div className={`w-full sm:absolute sm:top-0 sm:left-10 sm:w-[1820px] ${formSubmitted ? 'sm:h-[2500px]' : 'sm:h-[1400px]'} flex overflow-hidden items-center flex-shrink-50 bg-cover justify-center bg-[#090909]`}
             style={{backgroundImage: "url('/tq_ms74yqr32n-6kx-1500h.png')"}}>
          
          <div className={`w-full py-8 sm:py-0 px-2 sm:px-0 sm:absolute sm:top-20 sm:left-80 sm:w-[1480px] ${formSubmitted ? 'sm:h-[2300px]' : 'sm:h-[1200px]'} flex flex-col sm:flex-row items-start flex-shrink-0`}>
            {/* Header Section */}
            <div className="flex items-center gap-2 sm:gap-0 w-full px-2 sm:px-0">
              <img src="/starsvg1194-5q4j.svg" alt="star" className="w-[14px] h-[14px] sm:ml-[6px] sm:absolute sm:-top-[5px] sm:left-[75px]" />
              <span className="text-[#a3a3a3] ml-[60px] text-xs font-sf-pro-bold -translate-x-[65px] sm:translate-x-[0px] sm:absolute sm:left-[39px] sm:w-[272px]">TIMELINE</span>
            </div>
            
            <div className="w-full sm:mt-0 sm:absolute sm:top-[26px] sm:left-[15px] sm:w-[625px] sm:h-[39px] flex flex-col sm:flex-row items-start">
              <span className="text-white w-[220px] px-2 ml-[0px] sm:ml-[80px] sm:px-0 text-[24px] sm:text-[30px] font-bold font-sf-pro-bold leading-[39px] sm:absolute sm:-top-[1px] sm:w-[620px]">
              Start JEE Prep Now!
              </span>
            </div>

            <span className="mt-4 sm:mt-0 px-2 ml-[0px] sm:ml-[80px] sm:px-0 text-[#a3a3a3] text-[13px] font-sf-pro-regular leading-[20.81px] sm:absolute sm:top-[81px] sm:left-[15px] sm:w-[800px]">
              Start where you are, use what you have, and take that first step today! This simple and effective timeline is designed to help beginners build momentum, stay organized, and develop strong preparation habits for JEE success.
            </span>

            {/* Cards Container */}
            <div className="flex flex-col w-full gap-6 mt-2 sm:mt-0 sm:-ml-[3%]">
              {/* Dotted Lines */}
              <div className="hidden sm:block absolute left-[620px] top-[380px] w-[1px] h-[80px] border-l-[2px] border-dashed border-white/60" />
              <div className="hidden sm:block absolute left-[620px] top-[670px] w-[1px] h-[80px] border-l-2 border-dashed border-white/60" />
              <div className="hidden sm:block absolute left-[620px] top-[960px] w-[1px] h-[80px] border-l-2 border-dashed border-white/60" />
              {formSubmitted && (
                <>
                  <div className="hidden sm:block absolute left-[620px] top-[1250px] w-[1px] h-[80px] border-l-2 border-dashed border-white/60" />
                  <div className="hidden sm:block absolute left-[620px] top-[1540px] w-[1px] h-[80px] border-l-2 border-dashed border-white/60" />
                  <div className="hidden sm:block absolute left-[620px] top-[1830px] w-[1px] h-[80px] border-l-2 border-dashed border-white/60" />
                  <div className="hidden sm:block absolute left-[620px] top-[2120px] w-[1px] h-[80px] border-l-2 border-dashed border-white/60" />
                </>
              )}

              {/* Cards */}
              {cards.map((card, index) => (
                <React.Fragment key={index}>
                  <Card
                    stage={card.stage}
                    title={card.title}
                    description={card.description}
                    isBlurred={card.isBlurred}
                    top={card.top}
                  />
                  {index === 2 && (
                    <div className="w-full sm:absolute sm:top-[991.62px] sm:left-[253.5px] flex justify-center mt-6 sm:mt-0">
                      {showForm ? (
                        <Form onSubmit={handleFormSubmit} />
                      ) : (
                        <Lock isOpen={!isLocked} onClick={handleLockClick} />
                      )}
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Background Images */}
            <div className="hidden sm:block sm:absolute sm:top-[598.62px] sm:left-[929px] sm:w-[336px] sm:h-[226px] overflow-hidden bg-cover"
                 style={{backgroundImage: "url('/tq_3_h3hkwvb1-3ivw-300h.png')"}}></div>
            
            <div className="hidden sm:block sm:absolute sm:top-[1187.81px] sm:left-[15px] sm:w-[290px] sm:h-[161px] overflow-hidden bg-cover"
                 style={{backgroundImage: "url('/tq_bggvmymig--0o2d-200h.png')"}}></div>

            <img src="/backgroundimgvectorsvg1215-fb4.svg" alt="background" className="hidden sm:block sm:absolute sm:top-[171.62px] sm:left-[15px] sm:w-[263px] sm:h-[273px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;