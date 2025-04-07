import React from 'react';

const MotivationSection = () => {
  return (
    <section className="w-full px-2 bg-black mt-15">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-start justify-start gap-12 w-full">
          {/* Header section with responsive layout */}
          <div className="w-full flex flex-col sm:flex-row items-start justify-between gap-8 sm:gap-18">
            <div className="flex flex-col items-start justify-start gap-4">
              {/* Star and motivation text in one line */}
              <div className="flex flex-row items-center gap-2.5">
                <img
                  className="w-3.5 h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src="/starsvg.svg"
                />
                <div className="tracking-[1px] text-xs py-10 uppercase font-sf-pro-bold text-darkgray-100">
                  Motivation That Drives Success
                </div>
              </div>
              {/* Main heading */}
              <b className="text-4xl leading-[39px] font-sf-pro-bold text-white">
                Let These Words Guide You Through Every Challenge
              </b>
            </div>

             {/* Two stars with sentences - moved below for mobile */}
             <div className="flex flex-col items-start justify-start gap-[16px] mt-4 sm:mt-0">
                <div className="flex flex-row items-start justify-start gap-[5px] relative">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <div className="w-3 h-[42.8px] relative">
                      <img
                        className="absolute top-[6px] left-[0px] w-3 h-3 z-[2]"
                        alt=""
                        src="/svg-5.svg"
                      />
                      <img
                        className="absolute top-[59px] left-[0px] w-3 h-3 z-[2]"
                        alt=""
                        src="/svg-5.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[12.8px] w-[326px] sm:min-w-[336px] max-w-full">
  <div className="self-stretch relative leading-[20.8px] z-[2]">
    <span className="font-sf-pro-regular text-white">Believe in yourself. Take the first step toward IIT-JEE success.</span>
  </div>
  <div className="w-[456.6px] relative leading-[20.8px] flex items-center max-w-full z-[2]">
    <span className="w-full font-sf-pro-regular text-white">
      Stay focused. Build strong habits. Push beyond your limits.  
      <span className="font-sf-pro-regular text-white"> Your journey starts now.</span>
    </span>
  </div>
</div>
                </div>
              </div>
          </div>

          {/* Cards Section */}
          <div className="w-full mb-20">
            <div className="overflow-x-auto">
              <div className="flex flex-row gap-[25px] min-w-min">
                {/* Card 1 */}
                <div className="flex flex-col gap-3.5 sm:max-w-[calc(33.33%-17px)] w-[300px] flex-none">
                  <img
                    className="w-full h-[225.9px] rounded-lg object-cover"
                    loading="lazy"
                    alt=""
                    src="/TOP.jpeg"
                  />
                  <div className="flex flex-col gap-[6.8px]">
                    <div className="leading-[20.8px] font-sf-pro-medium">
                      <p className="m-0 text-white">Start Small,</p>
                      <p className="m-0 font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#39b6d8] via-[#f7d344] to-[#e38330]">
                        Dream Big!
                      </p>
                    </div>
                    <div className="text-xs leading-[18px] font-sf-pro-regular text-darkgray-100">
                      <p className="m-0">Each small success builds momentum.</p>
                      <p className="m-0">Take that first step today.</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col gap-3.5 sm:max-w-[calc(33.33%-17px)] w-[300px] flex-none">
                  <img
                    className="w-full h-[225.9px] rounded-lg object-cover"
                    loading="lazy"
                    alt=""
                    src="/moti1.jpeg"
                  />
                  <div className="flex flex-col gap-[6.8px]">
                    <div className="leading-[20.8px] font-sf-pro-medium">
                      <p className="m-0 text-white">Build Your Basics</p>
                      <p className="m-0 font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#39b6d8] via-[#f7d344] to-[#e38330]">
                        With Confidence
                      </p>
                    </div>
                    <div className="text-xs leading-[18px] font-sf-pro-regular text-darkgray-100">
                      <p className="m-0">Strong foundations lead to great heights.</p>
                      <p className="m-0">Focus on clarity, one concept at a time.</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="flex flex-col gap-3.5 sm:max-w-[calc(33.33%-17px)] w-[300px] flex-none">
                  <img
                    className="w-full h-[225.9px] rounded-lg object-cover"
                    loading="lazy"
                    alt=""
                    src="/challenges.jpeg"
                  />
                  <div className="flex flex-col gap-[6.8px]">
                    <div className="leading-[20.8px] font-sf-pro-medium">
                      <p className="m-0 text-white">Turn Challenges Into</p>
                      <p className="m-0 font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#39b6d8] via-[#f7d344] to-[#e38330]">
                        Opportunities
                      </p>
                    </div>
                    <div className="text-xs leading-[18px] font-sf-pro-regular text-darkgray-100">
                      <p className="m-0">Mistakes are stepping stones to success.</p>
                      <p className="m-0">Learn from them and keep moving forward.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotivationSection;