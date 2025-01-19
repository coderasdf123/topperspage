import PropTypes from "prop-types";
import { useState } from "react";

const FrameComponent2 = ({ className = "" }) => {
  const [activeCategory, setActiveCategory] = useState("VIDEO_TUTORIALS");

  const data = {
    VIDEO_TUTORIALS: [
      {
        title: "Learn Mole Concept in 10 mins",
        subject: "Chemistry",
        class: "Class 11",
        date: "14th December",
        time: "11:00 AM - 01:00 PM",
        videoId: "bI-yhj9WgxQ",
      },
      {
        title: "Master Kirchoff's Law in 7 minutes!",
        subject: "Physics",
        class: "Class 12",
        date: "14th December",
        time: "04:00 PM - 05:30 PM",
        videoId: "5FcEqe-FAMc",
      },
    ],
    TRICKY_ZONE: [
      {
        title: "Shortcut to Solve Quadratic Equations",
        subject: "Mathematics",
        class: "Class 10",
        date: "15th December",
        time: "03:00 PM - 04:00 PM",
        videoId: "yejWh3kni-o",
      },
      {
        title: "Quick Tips for Periodic Table",
        subject: "Chemistry",
        class: "Class 11",
        date: "16th December",
        time: "02:00 PM - 03:30 PM",
        videoId: "20Yt_P7TBVg&t=588s",
      },
    ],
  };

  const duplicateData = data[activeCategory].concat(data[activeCategory]);

  return (
    <section
      className={`
        self-stretch flex flex-row items-start justify-center pt-0 pb-[50px] box-border 
        text-left text-xs-5 text-darkgray-100 font-inter
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
            }
            
            .video-scroll::-webkit-scrollbar {
              display: none;
            }
            
            .video-card {
              scroll-snap-align: start;
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
                flex-shrink: 0;
              }
              
              .video-container {
                width: 40% !important;
              }
              
              .video-details {
                width: 60%;
              }
            }
            
            @media (max-width: 640px) {
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

        <div className="flex flex-row items-center gap-2.5 mb-2">
          <img className="w-3.5 h-3.5" alt="Star" src="/starsvg.svg" />
          <div className="tracking-[1px] uppercase font-semibold">
            MasterClass Videos
          </div>
        </div>

        <div className="category-tabs flex flex-col items-start justify-start w-full">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5">
            <div className="rounded-mini overflow-hidden flex flex-row items-start justify-start gap-1">
              <div
                className={`category-tab rounded-lg flex flex-row items-start justify-start pt-4 pb-[21px] pl-4 pr-[9px] text-gray-600 cursor-pointer ${
                  activeCategory === "VIDEO_TUTORIALS" ? "bg-gray-300" : "bg-whitesmoke-200"
                }`}
                onClick={() => setActiveCategory("VIDEO_TUTORIALS")}
              >
                <div className="relative capitalize font-semibold inline-block min-w-[63px]">
                  <ul className="m-0 font-inherit text-inherit pl-[15px]">
                    <li>VIDEO TUTORIALS</li>
                  </ul>
                </div>
              </div>
              <div
                className={`category-tab flex-1 rounded-lg flex flex-row items-start justify-start pt-4 pb-5 pl-4 pr-2 box-border min-w-[84px] text-smi-4 cursor-pointer ${
                  activeCategory === "TRICKY_ZONE" ? "bg-gray-300" : "bg-whitesmoke-200"
                }`}
                onClick={() => setActiveCategory("TRICKY_ZONE")}
              >
                <div className="relative capitalize font-medium inline-block min-w-[105px]">
                  <ul className="m-0 font-inherit text-inherit pl-[17px]">
                    <li>TRICKY ZONE</li>
                  </ul>
                </div>
              </div>
            </div>
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
                    <h3 className="m-0 self-stretch relative text-mid leading-[20.4px] font-semibold text-black">
                      {item.title}
                    </h3>
                    <div className="flex flex-col items-start justify-start gap-[15px] text-xs text-gray-300">
                      <div className="flex flex-row items-start justify-start gap-[6.1px]">
                        <div className="rounded-8xs bg-gray-500 flex flex-row items-start justify-start pt-[5px] pb-[2.2px] pl-2 pr-[7px]">
                          <div className="relative leading-[19.2px] font-medium text-transparent !bg-clip-text [background:linear-gradient(90deg,#39b6d8_6.41%,#f7d344_51.47%,_#e38330_96.52%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            {item.subject}
                          </div>
                        </div>
                        <div className="rounded-8xs bg-whitesmoke-200 flex flex-row items-start justify-start pt-[5px] pb-[2.2px] pl-2 pr-[7px]">
                          <div className="relative leading-[19.2px] font-semibold">
                            {item.class}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[11.8px] text-gray-700">
                        <div className="flex flex-row items-end justify-start gap-1">
                          <img className="h-3.5 w-3.5 relative" alt="" src="/svg-11.svg" />
                          <div className="relative leading-[14.4px] font-medium">
                            {item.date}
                          </div>
                        </div>
                        <div className="flex flex-row items-end justify-start gap-1">
                          <img className="h-3.5 w-3.5 relative" alt="" src="/svg-12.svg" />
                          <div className="relative leading-[14.4px] font-medium">
                            {item.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px relative border-t border-solid border-gainsboro-200" />
                  <div className="flex flex-row items-start justify-start gap-[4.4px] text-sm">
                    <div className="flex flex-col items-start justify-start pt-0.5">
                      <div className="relative leading-[24px] font-semibold text-transparent !bg-clip-text [background:linear-gradient(90deg,#39b6d8_7.41%,#f7d344_21.47%,_#e38330_45.52%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
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