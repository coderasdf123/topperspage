import React, { useRef, useMemo } from "react";

const Group1 = ({
  className = "",
  container,
  workingsTitlesWidth,
  aDeepDiveIntoTheWorkingsOf,
  aDeepDiveAlignSelf,
  company,
  companyTextDecoration,
  companyMinWidth,
  physicsWallah,
  physicsWallahMinWidth,
}) => {
  const workingsTitlesStyle = useMemo(() => ({
    width: workingsTitlesWidth,
  }), [workingsTitlesWidth]);

  const aDeepDiveStyle = useMemo(() => ({
    alignSelf: aDeepDiveAlignSelf,
  }), [aDeepDiveAlignSelf]);

  const companyStyle = useMemo(() => ({
    textDecoration: companyTextDecoration,
    minWidth: companyMinWidth,
  }), [companyTextDecoration, companyMinWidth]);

  const physicsWallahStyle = useMemo(() => ({
    minWidth: physicsWallahMinWidth,
  }), [physicsWallahMinWidth]);

  return (
      <div
        className={`bg-white flex flex-col items-start justify-start pt-2.5 px-2.5 pb-[14.4px] box-border gap-[15.9px] shrink-0 text-left text-sm text-gray-600 font-inter w-[calc(40% - 20px)] min-w-[300px] sm:min-w-[200px] xl:max-w-5xl ${className}`}
      >
      <img
        className="self-stretch h-[221.2px] relative rounded-lg w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={container}
      />
      <div
        className="flex flex-col items-start justify-start gap-[2.4px] w-full"
        style={workingsTitlesStyle}
      >
        <div className="relative leading-[19px]" style={aDeepDiveStyle}>
          {aDeepDiveIntoTheWorkingsOf}
        </div>
        <div className="flex flex-row items-start justify-start [row-gap:20px] mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <a
              className="[text-decoration:none] relative leading-[22.4px] text-[inherit] inline-block min-w-[78.9px] shrink-0"
              style={companyStyle}
            >
              {company}
            </a>
          </div>
          <div className="flex flex-col items-start justify-start py-0 px-0 text-base">
            <b
              className="ml-[-0.2px] relative inline-block min-w-[115.4px] shrink-0"
              style={physicsWallahStyle}
            >
              {physicsWallah}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section7 = ({ className = "" }) => {
  const scrollContainerRef = useRef(null);

  return (
    <div className={`
      self-stretch 
      bg-whitesmoke-100 
      flex 
      flex-col 
      items-center 
      -ml-[10px] 
      justify-start 
      pt-20 
      pb-20 
      box-border 
      shrink-0 
      text-left 
      text-xs 
      text-darkgray-100 
      font-inter 
      relative 
      px-[5%]
      mq1400:px-[14%]
      mq925:px-5
      mq450:px-5
      mq450:w-full
      mq925:w-full
      mq1400:max-w-full
      ${className}
    `}>
      <div className="w-full max-w-[calc(100% - 12cm)] sm:max-w-full mq450:w-full
      mq925:w-full
      mq1400:max-w-full mx-auto">
        <div className="flex flex-row items-start justify-start gap-2.5 mb-4">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
              alt=""
              src="/starsvg.svg"
            />
          </div>
          <div className="relative tracking-[1px] uppercase font-semibold">
            IIT-JEE Revision Techniques
          </div>
        </div>
        
        <div className="flex flex-col gap-[18.7px] max-w-full text-11xl text-black">
          <div className="flex flex-row items-start justify-start max-w-full gap-4">
            <h1 className="m-0 relative text-inherit leading-[39px] font-bold font-inherit">Knowledge</h1>
            <div className="relative">
              <img
                className="w-[180.3px] h-[30.8px] mt-5"
                alt=""
                src="/image-10.svg"
              />
              <h1 className="m-0 absolute top-0 left-0 text-inherit leading-[39px] font-bold font-inherit">
                from NNIIT
              </h1>
            </div>
          </div>

          <div className="flex flex-row justify-between gap-8 w-full mq925:flex-col">
            <div className="w-1/4 min-w-[250px] mq925:w-full">
              <div className="flex flex-col">
                {[
                  "Make Concepts Clear",
                  "Learn Formulas",
                  "Revise Basic Concepts",
                  "Challenges",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-3 py-4 border-b border-gainsboro-200 group"
                  >
                    <img
                      className="h-[23px] w-[23px] relative overflow-hidden shrink-0 object-cover group-hover:opacity-100"
                      alt=""
                      src="/gradientblacksvg@2x.png"
                    />
                    <b className="text-sm text-gray-600 leading-[22.4px]">
                      {item}
                    </b>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
            <div
  ref={scrollContainerRef}
  className="flex flex-row gap-5 overflow-x-auto scroll-smooth hide-scrollbar 
    sm:max-w-[30%] sm:-ml-[4%] sm:overflow-hidden
    md:max-w-[70%] md:-ml-[5%]
    lg:max-w-[70%] lg:-ml-[5%]
    xl:max-w-[70%] xl:-ml-[5%]"
>
                <Group1
                  container="/container-15@2x.png"
                  workingsTitlesWidth="100%"
                  aDeepDiveIntoTheWorkingsOf="Top 10 Revision Techniques for IIT-JEE You Need to Know!"
                  aDeepDiveAlignSelf="stretch"
                  companyTextDecoration="none"
                  companyMinWidth="78.9px"
                  physicsWallah="Physics"
                  physicsWallahMinWidth="105.4px"
                />
                <Group1
                  container="/container-16@2x.png"
                  workingsTitlesWidth="100%"
                  aDeepDiveIntoTheWorkingsOf="Quick Revision of Organic Chemistry for IIT-JEE"
                  aDeepDiveAlignSelf="stretch"
                  companyTextDecoration="none"
                  companyMinWidth="78.9px"
                  physicsWallah="Chemistry"
                  physicsWallahMinWidth="105.4px"
                />
                <Group1
                  container="/container-17@2x.png"
                  workingsTitlesWidth="100%"
                  aDeepDiveIntoTheWorkingsOf="Quick Revision of Integration for IIT-JEE"
                  aDeepDiveAlignSelf="stretch"
                  companyTextDecoration="none"
                  companyMinWidth="78.9px"
                  physicsWallah="Maths"
                  physicsWallahMinWidth="105.4px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;