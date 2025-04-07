import React from 'react';
import PropTypes from "prop-types";
import { PlayCircle } from 'lucide-react';

const ExpertListTwo = ({ className = "" }) => {
  const experts = [
    {
      name: "Vishnuprasad Nagadevara",
      role: "Former Dean",
      company: "IIM Bangalore",
      topic: "Decision Making in Complex Environments",
      image: "/peer_5.jpeg"
    },
    {
      name: "Dr Lan Ma",
      role: "Adjunct Professor of Business",
      company: "NYU Shanghai",
      topic: "Global Business Strategy",
      image: "/peer_6.jpeg"
    },
    {
      name: "Mr Rohit Kapoor",
      role: "CEO, Food Marketplace",
      company: "Swiggy",
      topic: "Scaling Digital Businesses",
      image: "/peer_7.jpeg"
    },
    {
      name: "Ms Malthi Satish",
      role: "Head of Operations",
      company: "Leading Tech Firm",
      topic: "Operational Excellence",
      image: "/peer_8.jpeg",
    }
  ];

  return (
    <div className="flex flex-col items-start justify-start gap-[4.4px] py-[50px] text-left text-xs text-white font-inter bg-black w-full sm:pl-[20%] sm:pr-[7.5cm] sm:max-w-4xl">
      {/* Mobile layout */}
      <div className="w-full overflow-x-auto">
        <div className="sm:hidden whitespace-nowrap inline-flex flex-nowrap gap-4 px-2">
          {experts.map((expert, index) => (
            <div key={index} className="inline-block w-[280px] bg-[#111111] rounded-xl overflow-hidden">
              <div className="relative">
                <img
                  className="h-36 w-full object-cover rounded-t-xl"
                  alt={expert.name}
                  src={expert.image}
                />
                <button className="absolute bottom-3 right-3 bg-white/20 rounded-full p-1.5 backdrop-blur-sm">
                  <PlayCircle className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold mb-1">{expert.name}</h3>
                <p className="text-sm text-white mb-1">{expert.role}</p>
                <p className="text-xs text-white font-medium mb-2">{expert.company}</p>
                <p className="text-sm text-white">{expert.topic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 px-4 w-full">
        {experts.map((expert, index) => (
          <div key={index} className="w-full bg-[#111111] rounded-xl overflow-hidden">
            <div className="relative">
              <img
                className="h-36 w-full object-cover rounded-t-xl"
                alt={expert.name}
                src={expert.image}
              />
              <button className="absolute bottom-3 right-3 bg-white/20 rounded-full p-1.5 backdrop-blur-sm">
                <PlayCircle className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold mb-1">{expert.name}</h3>
              <p className="text-sm text-white mb-1">{expert.role}</p>
              <p className="text-xs text-white font-medium mb-2">{expert.company}</p>
              <p className="text-sm text-white">{expert.topic}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View Trending Insights button */}
      {/*<div className="sm:hidden w-full flex justify-center mt-8">
        <div className="rounded-full bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 p-0.5">
          <div className="rounded-35xl bg-black overflow-hidden flex items-center justify-center px-4 py-2">
            <span className="text-white text-xs font-semibold whitespace-nowrap">
              View Trending Insights
            </span>
          </div>
        </div>
      </div>*/}
    </div>
  );
};

ExpertListTwo.propTypes = {
  className: PropTypes.string,
};

export default ExpertListTwo;