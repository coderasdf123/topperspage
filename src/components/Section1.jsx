import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

const Section1 = ({ className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesContainerRef = useRef(null);

  const slides = [
    {
      imgSrc: "/container-11@2x.png",
      name: "Arvind Kumar, Founder and CEO",
      company: "Qrius",
      details: "IIT-JEE, AIR 1'05",
    },
    {
      imgSrc: "/container-12@2x.png",
      name: "Mukul Agarwal, SDE",
      company: "Google",
      details: "IIT-JEE, AIR 1'07",
    },
    {
      imgSrc: "/container-13@2x.png",
      name: "Ankit Goyal, SDE",
      company: "Microsoft",
      details: "IIT-JEE, AIR 2'10",
    },
    {
      imgSrc: "/container-14@2x.png",
      name: "Mehul Soni",
      company: "Qualcomm",
      details: "AIR 3'08",
    },
    {
      imgSrc: "/container-12@2x.png",
      name: "Mukul Agarwal, SDE",
      company: "Google",
      details: "IIT-JEE, AIR 1'07",
    },
    {
      imgSrc: "/container-13@2x.png",
      name: "Ankit Goyal, SDE",
      company: "Microsoft",
      details: "IIT-JEE, AIR 2'10",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    scrollToSlide(currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < slides.length - 3 ? prevIndex + 1 : prevIndex
    );
    scrollToSlide(currentIndex + 1);
  };

  const scrollToSlide = (index) => {
    if (slidesContainerRef.current) {
      const slide = slidesContainerRef.current.children[index];
      slide?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  return (
    <div
  className={`w-full bg-black overflow-hidden flex flex-col items-start justify-start pt-10 pb-0  text-xs text-darkgray-100 font-inter
    sm:w-full sm:px-0
    md:w-full md:px-0
    lg:w-full lg:px-[14%]
    xl:max-w-[1000px] xl:px-[16%]
    ${className}`}
>
      <div className=" flex  flex-row items-start justify-between gap-5">
        <div className="h-auto flex flex-col items-start gap-1">
          <div className="flex flex-row items-center gap-1.75cm">
            <img
              className="w-4 h-4"
              alt="Star"
              src="/starsvg.svg"
            />
            <div className="text-md font-semibold text-gray-450 uppercase tracking-wider">
              TOPPERS SECRETS
            </div>
          </div>
          <div className="self-stretch h-auto relative text-11xl text-white">
            <h1 className="m-0 absolute top-0 left-0 text-inherit leading-[39px] font-bold font-inherit flex items-center w-[350px] h-[41px] mq450:text-lg mq450:leading-[23px] mq925:text-5xl mq925:leading-[31px]">
              {`Hear Straight from our`}
            </h1>
            <div className="absolute h-full top-0 bottom-0 left-[334px] w-[120.1px] text-10xl-9">
              <img
                className="absolute top-[24.6px] left-0 w-[119.9px] h-[41px]"
                alt=""
                src="/image-6.svg"
              />
              <b className="absolute top-0 left-0 leading-[39px] flex items-center w-[121.1px] h-[41px] min-w-[121.1px] z-[1] mq450:text-5xl mq450:leading-[31px]">
                Toppers
              </b>
            </div>
          </div>
        </div>
      </div>

      {/* Images Section */}
      <div
        ref={slidesContainerRef}
        className="flex flex-row items-start justify-start gap-10 text-base text-white overflow-x-auto scroll-smooth mt-4"
        style={{
          width: "100%", // Desktop width calculation
          paddingRight: "40px",
         
          // Desktop padding
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[40%] max-w-[35%] rounded-xl bg-gray-700 flex flex-col items-start p-5 gap-4"
          >
            <img
              className="rounded-lg object-cover w-full"
              alt={slide.name}
              src={slide.imgSrc}
            />
            <div className="text-center">
              <p className="text-lg font-semibold">{slide.name}</p>
              <p>{slide.company}</p>
              <p className="text-sm text-gray-400">{slide.details}</p>
            </div>
          </div>
        ))}
      </div>

      
      
    </div>
  );
};

Section1.propTypes = {
  className: PropTypes.string,
};

export default Section1;
