import PropTypes from "prop-types";
import { useState } from "react";

const FrameComponent2 = ({ className = "" }) => {
  const [activeCategory, setActiveCategory] = useState("VIDEO_TUTORIALS");

  const categories = [
    { id: "VIDEO_TUTORIALS", label: "Video Tutorials" },
    { id: "TRICKY_ZONE", label: "Tricky Zone" },
  ];

  const data = {
    VIDEO_TUTORIALS: [
      {
        title: "Learn Mole Concept in 25 mins",
        subject: "Chemistry",
        class: "Class 11",
        date: "14th December",
        time: "11:00 AM - 01:00 PM",
        videoId: "6_O27lfGWfc",
      },
      {
        title: "Master Kirchoff's Law in 10 minutes!",
        subject: "Physics",
        class: "Class 12",
        date: "14th December",
        time: "04:00 PM - 05:30 PM",
        videoId: "vuCJP_5KOlI",
      },
    ],
    TRICKY_ZONE: [
      {
        title: "Shortcut to Solve Quadratic Equations",
        subject: "Mathematics",
        class: "Class 10",
        date: "15th December",
        time: "03:00 PM - 04:00 PM",
        videoId: "yPzQdrQwU-k",
      },
      {
        title: "Quick Tips for Periodic Table",
        subject: "Chemistry",
        class: "Class 11",
        date: "16th December",
        time: "02:00 PM - 03:30 PM",
        videoId: "I3MCw4zDTGw",
      },
    ],
  };

  const duplicateData = data[activeCategory].concat(data[activeCategory]);

  return (
    <section
      className={`
        self-stretch flex flex-row items-start justify-center py-10 box-border 
        text-left text-xs-5 text-darkgray-100 font-sf-pro
        px-4 
        sm:px-6
        xl:ml-[80px] xl:px-5
        ${className}
      `}
    >
      <div className="flex flex-col items-start justify-start gap-2.5 mb-4 w-full max-w-[1200px]">
        <style>
          {`
            .video-scroll {
              scroll-snap-type: x mandatory;
              -webkit-overflow-scrolling: touch;
              scrollbar-width: none;
              -ms-overflow-style: none;
              padding: 30px 20px;
              display: flex;
              overflow-x: scroll;
            }
            
            .video-scroll::-webkit-scrollbar {
              display: none;
            }
            
            .video-card {
              scroll-snap-align: start;
              flex-shrink: 0;
            }
            
            .buttons-container {
              position: relative;
              width: 100%;
            }
            
            .buttons-wrapper {
              position: absolute;
              left: 40%;
              transform: translateX(-50%);
              display: flex;
              gap: 0.5rem;
              z-index: 10;
              width: 100%; /* Allow buttons to use full available width */
              justify-content: center; /* Center buttons horizontally */
            }

            /* Button width for screens smaller than 640px */
            @media (max-width: 640px) {
              .buttons-wrapper {
                gap: 0.25rem;
                padding: 0 10px; /* Ensure some padding */
                left: 50%
              }
              .custom-button {
                width: 60%; /* Increased width for visibility */
                max-width: 180px; /* Cap the width for smaller screens */
                min-width: 140px; /* Ensure minimum width */
              }
            }

            /* Default button width for larger screens */
            @media (min-width: 641px) {
              .custom-button {
                width: auto; /* Default width based on content */
                padding-left: 1.5rem; /* Consistent with px-6 */
                padding-right: 1.5rem;
              }
            }
            
            @media (min-width: 1280px) {
              .video-scroll {
                margin-left: 10%;
                padding-left: 8%;
                padding-right: 6%;
                width: 770px;
                gap: 20px;
              }
              
              .video-card {
                width: 584.8px;
                max-width: 100%;
              }
            }
            
            @media (max-width: 1279px) {
              .video-scroll {
                width: calc(100% + 40px);
                margin-left: -20px;
                padding-left: 20px;
                gap: 16px;
              }
              
              .video-card {
                width: 80%;
                min-width: 280px;
                max-width: 100%;
              }
              
              .video-container {
                width: 40% !important;
              }
              
              .video-details {
                width: 60%;
              }
            }
            
            @media (max-width: 640px) {
              .video-scroll {
                padding: 20px 10px;
              }
              
              .video-card {
                width: 85%;
                min-width: 260px;
              }
              
              .video-container {
                width: 35% !important;
              }
              
              .video-details {
                width: 55%;
              }
            }
          `}
        </style>

        <div className="flex flex-row items-center gap-2.5 mb-2 sm:ml-[3cm]">
          <img className="w-3.5 h-3.5 " alt="Star" src="/starsvg.svg" />
          <div className="tracking-[1px] uppercase font-sf-pro-bold relative right-[7px]">
            MasterClass Videos
          </div>
        </div>

        <div className="w-full max-w-2xl buttons-container">
          <div className="buttons-wrapper">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  custom-button relative px-6 py-2 sm:py-3
                  rounded-lg font-semibold
                  transition-all duration-200 ease-in-out
                  bg-white border border-black
                  group
                  ${activeCategory === category.id 
                    ? "transform -translate-y-0.5" 
                    : ""
                  }
                `}
              >
                <div
                  className={`
                  absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 opacity-0
                  transition-opacity duration-200
                  -z-10
                  ${activeCategory === category.id || "group-hover:opacity-100"}
                `}
                ></div>
                <div className="absolute inset-[1px] rounded-lg bg-white -z-5"></div>
                <span
                  className={`
                  relative z-10
                  transition-all duration-200
                  ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent"
                      : "text-black group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-yellow-300 group-hover:to-orange-400 group-hover:bg-clip-text group-hover:text-transparent"
                  }
                `}
                >
                  {category.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="video-scroll flex flex-row items-start justify-start overflow-x-auto">
          {duplicateData.map((item, index) => (
            <div
              key={index}
              className="video-card rounded-2xl bg-white shadow-[0px_2px_36px_rgba(192,_192,_192,_0.25)] flex flex-row items-start justify-start pt-[21.9px] px-[15px] pb-[13.1px] box-border gap-[15px]"
            >
              <div className="video-container relative w-[237.6px] h-[158.4px]">
                <iframe
                  className="w-full h-full rounded-3xs object-cover"
                  src={`https://www.youtube.com/embed/${item.videoId}`}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="video-details flex-1 flex flex-col items-start justify-start pt-[8.1px] px-0 pb-0 box-border min-w-[196px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[15.7px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-2">
                    <h3 className="m-0 self-stretch relative text-mid leading-[20.4px] font-sf-pro-medium text-black">
                      {item.title}
                    </h3>
                    <div className="flex flex-col items-start justify-start gap-[15px] text-xs text-gray-300">
                      <div className="flex flex-row items-start justify-start gap-[6.1px]">
                        <div className="rounded-8xs bg-gray-500 flex flex-row items-start justify-start pt-[5px] pb-[2.2px] pl-2 pr-[7px]">
                          <div className="relative leading-[19.2px] font-sf-pro-medium text-transparent !bg-clip-text [background:linear-gradient(90deg,#39b6d8_6.41%,#f7d344_51.47%,_#e38330_96.52%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            {item.subject}
                          </div>
                        </div>
                        <div className="rounded-8xs bg-whitesmoke-200 flex flex-row items-start justify-start pt-[5px] pb-[2.2px] pl-2 pr-[7px]">
                          <div className="relative leading-[19.2px] font-sf-pro-medium">
                            {item.class}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[11.8px] text-gray-700">
                        <div className="flex flex-row items-end justify-start gap-1">
                          <img className="h-3.5 w-3.5 relative" alt="" src="/svg-11.svg" />
                          <div className="relative leading-[14.4px] font-sf-pro-medium">
                            {item.date}
                          </div>
                        </div>
                        <div className="flex flex-row items-end justify-start gap-1">
                          <img className="h-3.5 w-3.5 relative" alt="" src="/svg-12.svg" />
                          <div className="relative leading-[14.4px] font-sf-pro-medium">
                            {item.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px relative border-t border-solid border-gainsboro-200" />
                  <div className="flex flex-row items-start justify-start gap-[4.4px] text-sm">
                    <div className="flex flex-col items-start justify-start pt-0.5">
                      <div className="relative leading-[24px] font-sf-pro-medium text-transparent !bg-clip-text [background:linear-gradient(90deg,#39b6d8_7.41%,#f7d344_21.47%,_#e38330_45.52%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Watch Now
                      </div>
                    </div>
                    <img className="h-6 w-[25px] relative" alt="" src="/svg-13.svg" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;