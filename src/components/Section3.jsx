import React, { useState } from "react";
import FrameComponent from "./FrameComponent"; // Ensure the path is correct

/**
 * @param {{ className?: string }} props
 */
const Section3 = ({ className = "" }) => {
  const [activeTab, setActiveTab] = useState("Reignite Your Focus");

  const tabContent = {
    "Reignite Your Focus": {
      cards: [
        {
          title: "Rediscover Your Motivation",
          description:
            "Learn techniques to regain focus and overcome distractions that hold you back from peak performance in your IIT-JEE preparation.",
          image: "/motivation.jpeg",
          buttonText: "Get Back on Track Today",
          additionalText: "Focus like never before",
          details: [
            "Motivation", "Overcome Distractions",
            "Performance", "Consistency"
          ],
        },
        {
          title: "Strengthen Your Concentration",
          description:
            "Master proven strategies to enhance your concentration and maintain sustained focus during long study sessions.",
          image: "/concentration 02.png",
          buttonText: "Boost Your Focus Now",
          additionalText: "Achieve laser-sharp focus",
          details: [
            "Focus", "Concentration",
            "Resilience", "Study Sessions"
          ],
        },
        {
          title: "Reignite Your Passion",
          description:
            "Engage with diverse study methods to keep learning exciting and prevent burnout during your IIT-JEE journey.",
          image: "/container-9@2x.png",
          buttonText: "Discover New Techniques",
          additionalText: "Refocus and reclaim your journey",
          details: [
            "Excitement", "Active Learning",
            "Gamification", "Burnout Prevention"
          ],
        },
        {
          title: "Dynamic Learning Methods",
          description:
            "Explore innovative study approaches that match your learning style and keep you engaged throughout your preparation.",
          image: "/container-9@2x.png",
          buttonText: "Transform Your Learning",
          additionalText: "Make learning exciting again",
          details: [
            "Adaptive", "Innovative",
            "Efficient", "Personalized"
          ],
        },
      ],
    },
    "Mix it Up": {
      cards: [
        {
          title: "Reignite Your Passion",
          description:
            "Engage with diverse study methods to keep learning exciting and prevent burnout during your IIT-JEE journey.",
          image: "/container-10@2x.png",
          buttonText: "Discover New Techniques",
          additionalText: "Refocus and reclaim your journey",
          details: [
            "Excitement", "Active Learning",
            "Gamification", "Burnout Prevention"
          ],
        },
        {
          title: "Dynamic Learning Methods",
          description:
            "Explore innovative study approaches that match your learning style and keep you engaged throughout your preparation.",
          image: "/container-10@2x.png",
          buttonText: "Transform Your Learning",
          additionalText: "Make learning exciting again",
          details: [
            "Adaptive", "Innovative",
            "Efficient", "Personalized"
          ],
        },
        {
          title: "Reignite Your Passion",
          description:
            "Engage with diverse study methods to keep learning exciting and prevent burnout during your IIT-JEE journey.",
          image: "/container-10@2x.png",
          buttonText: "Discover New Techniques",
          additionalText: "Refocus and reclaim your journey",
          details: [
            "Excitement", "Active Learning",
            "Gamification", "Burnout Prevention"
          ],
        },
        {
          title: "Dynamic Learning Methods",
          description:
            "Explore innovative study approaches that match your learning style and keep you engaged throughout your preparation.",
          image: "/container-10@2x.png",
          buttonText: "Transform Your Learning",
          additionalText: "Make learning exciting again",
          details: [
            "Adaptive", "Innovative",
            "Efficient", "Personalized"
          ],
        },
      ],
    },
    "Micro Planning": {
      cards: [
        {
          title: "Plan for Success",
          description:
            "Break your study schedule into smaller, manageable chunks to achieve consistent progress and excel in your exams.",
          image: "/micro.jpeg",
          buttonText: "Start Planning Today",
          additionalText: "Revitalize your study routine",
          details: [
            "Breakdown", "Realistic Goals",
            "Tracking", "Small Wins"
          ],
        },
        {
          title: "Smart Time Management",
          description:
            "Master the art of efficient time allocation and create a sustainable study schedule that drives results.",
          image: "/container-11@2x.png",
          buttonText: "Optimize Your Schedule",
          additionalText: "Time management mastery",
          details: [
            "Time-Blocking", "Focus",
            "Prioritization", "Deadlines"
          ],
        },
        {
          title: "Plan for Success",
          description:
            "Break your study schedule into smaller, manageable chunks to achieve consistent progress and excel in your exams.",
          image: "/container-11@2x.png",
          buttonText: "Start Planning Today",
          additionalText: "Revitalize your study routine",
          details: [
            "Breakdown", "Realistic Goals",
            "Tracking", "Small Wins"
          ],
        },
        {
          title: "Smart Time Management",
          description:
            "Master the art of efficient time allocation and create a sustainable study schedule that drives results.",
          image: "/container-11@2x.png",
          buttonText: "Optimize Your Schedule",
          additionalText: "Time management mastery",
          details: [
            "Time-Blocking", "Focus",
            "Prioritization", "Deadlines"
          ],
        },
      ],
    },
  };

  return (
    <div
      className={`
        self-stretch 
        bg-gray-100 
        flex 
        flex-row 
        items-start 
        justify-start 
        mt-0  // Removed negative margin and set to 0
        z-[1]  // Reduced z-index to avoid overlap issues
        text-left 
        text-xs 
        text-darkgray-100 
        font-inter 
        h-[60%]
        
        sm:w-full
        sm:px-0
        md:w-full
        md:px-0
        lg:max-w-3xl
        lg:px-[6rem]
        xl:max-w-[1000px]
        xl:px-[16%]
        
        ${className}
      `}
    >
      <div
        className="flex-1 overflow-hidden flex flex-grow flex-col items-start justify-start py-10 sm:py-20 px-[5%] md:py-10 md:px-[0%] box-border relative gap-[50px]"
      >
        <div className="self-stretch flex flex-col font-sf-pro-regular items-start justify-start gap-[20px] max-w-full">
          <FrameComponent jOINTHEUNION="BREAKING THROUGH THE PLATEAU" ourProgrammes="Got Stuck while Learning?" />
          <div
            className="self-stretch rounded-mini overflow-hidden flex flex-row items-start justify-start max-w-full z-[1] text-smi-9 text-darkgray-200"
          >
            <div
              className="flex-1 bg-gray-600 overflow-x-auto flex flex-row items-start justify-between pt-2 pb-[8px] sm:py-4 sm:px-[5%] pl-[8px] pr-[8px] xl:px-[30%] box-border max-w-full gap-5"
            >
              {Object.keys(tabContent).map((tab) => (
                <div
                  key={tab}
                  className={`relative capitalize font-medium cursor-pointer ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent"
                      : "text-white hover:text-gray-300"
                  } transition-colors duration-300`}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    marginLeft: tab === "Reignite Your Focus" ? "15px" : tab === "Micro Planning" ? "15px" : "",
                    marginRight: tab === "Micro Planning" ? "15px" : tab === "Reignite Your Focus" ? "15px" : "",
                  }}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex-1 rounded-xl bg-white overflow-x-auto flex items-start justify-start py-0 sm:py-4 sm:px-[3%] max-w-full"
        >
          <div className="flex flex-row gap-4 sm:gap-2 sm:w-[70%]">
            {tabContent[activeTab].cards.map((card, index) => (
              <div
                key={index}
                className="flex-none w-[calc(37%-1rem)] sm:w-[60%] rounded-lg bg-white shadow-lg p-5"
              >
                <div className="w-full aspect-video mb-0 flex justify-center">
                  <img
                    className="w-full h-[250px] sm:h-[200px] object-cover rounded-lg"
                    alt={card.title}
                    src={card.image}
                  />
                </div>
                <h2 className="text-xl text-black font-sf-pro-medium sm:text-lg">{card.title}</h2>
                <div className="text-2xs text-gray-600 sm:text-xs">
                  <div className="flex flex-row items-center gap-0">
                    <span className="text-lg font-sf-pro-regular">{card.icon}</span>
                    <span className="text-sm bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent font-medium">
                      {card.additionalText}
                    </span>
                  </div>
                </div>
                <p className="text-sm font-sf-pro-regular text-gray-500 mt-2 mb-4 sm:mt-1 sm:mb-2">{card.description}</p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 mt-4 mb-4 sm:grid-cols-1">
                  {card.details.map((point, index) => (
                    <div key={index} className="flex flex-row items-center gap-2">
                      <img
                        className="w-3.5 h-3.5 relative overflow-hidden shrink-0 z-[1]"
                        alt="Star Icon"
                        src="/starsvg.svg"
                      />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-full bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 p-0.5 inline-block">
                  <button className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                    {card.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;