import React from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "@mui/material";
import ImageCarousel from "./imageCarousel"; // Make sure to import the ImageCarousel component

const Section5 = ({ className = "" }) => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  
  const handleCarouselSelection = (selection) => {
    // Add your logic for handling carousel selection here
    console.log("Carousel selection:", selection);
  };

  return isSmallScreen ? (
    // Render the component for screens smaller than SM
    <section
  className={`flex flex-col items-center justify-center py-10 bg-[url('/section@3x.png')] bg-cover bg-no-repeat w-full ${className}`}
>
  {/* Carousel container with proper positioning */}
  <div className="w-full h-[250px] overflow-visible -mt-20 sm:mt-0 left-6 sm:left-0 relative ">
    <ImageCarousel onSelectionChange={handleCarouselSelection} />
  </div>
</section>
  ) : (
    // Render the component for screens larger than SM
    <section
      className={`self-stretch flex flex-row items-start justify-start py-10 px-[397px] box-border w-[120%] text-left text-11xl text-black font-inter mq450:pt-[26px] mq450:pb-[70px] mq450:box-border mq925:pl-[300px] mq925:pr-[300px] mq925:box-border mq1400:pl-[400px] mq1400:pr-[400px] mq1400:box-border relative overflow-hidden ${className}`}
    >
      {/* Video as background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/under.mp4" type="video/mp4" />
      </video>
      
      <div className="flex-1 rounded-2xl bg-white flex flex-row items-end justify-between pt-[35px] px-[70px] pb-[41px] box-border w-[120%] gap-5 mq1875:flex-wrap -ml-[30%]">
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[26.1px] box-border min-w-[439.6px] max-w-full mq1400:min-w-full mq1875:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[28.8px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-2.5 shrink-0">
              <h1 className="m-0 relative font-sf-pro-bold text-white text-10xl left-[5%]">
                <p className="m-0">Experience Learning That Works for You</p>
              </h1>
              <div className="self-stretch relative text-sm leading-[22.4px] text-white left-[5%]">
                <p className="m-0">
                  Take the first step towards your IIT-JEE journey
                  with expert mentors, innovative resources,
                  and personalized strategies designed for your success.
                </p>
              </div>
            </div>
            <div className={`w-full sm:w-[266.1px] flex flex-row items-start justify-start p-px box-border text-center text-sm text-gray-600 ${className}`}>
              <div className="rounded-full bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 p-0.5 gradient-animate hover:shadow-lg transition-shadow duration-300 w-full">
                <div className="flex-1 rounded-35xl bg-white overflow-hidden flex flex-row items-center justify-between py-3 px-5 gap-[7.8px] z-[1] hover:bg-opacity-95 transition-all duration-300">
                  <div className="flex-1 flex flex-col items-start justify-start left-[5%]">
                    <div className="self-stretch relative leading-[24px] font-semibold font-sf-pro whitespace-nowrap text-center text-white w-full left-[15%]">
                      Take your first Step with NNIIT
                    </div>
                  </div>
                  <img className="h-6 w-6 relative left-[10%]" alt="" src="/svg-4.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Removed commented out image */}
      </div>
    </section>
  );
};

Section5.propTypes = {
  className: PropTypes.string,
};

export default Section5;