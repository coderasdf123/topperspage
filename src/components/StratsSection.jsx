import React from 'react';

const StratsSection = () => {
  return (
    <div className="w-full bg-[#FAFAFA] py-32">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img
                  src="/starsvg1774-xtkl.svg"
                  alt="starsvg"
                  className="w-3.5 h-3.5"
                />
                <span className="text-[#A3A3A3] text-xs font-semibold font-inter">
                  MASTERS YOUR JEE JOURNEY
                </span>
              </div>

              <div>
                <h2 className="text-black text-3xl font-bold font-inter whitespace-nowrap flex items-center">
                  Learn Proven Strategies to 
                  <div className="relative inline-flex items-center ml-2">
                    <span className="text-black text-3xl font-bold font-inter">
                      Excel
                    </span>
                    <img
                      src="/lightmuvectorsvgfill1782-5pf8.svg"
                      alt="Vector"
                      className="w-[104px] h-[22px] absolute -bottom-4"
                    />
                  </div>
                </h2>
              </div>
            </div>

            {/* Text Sections with reduced spacing */}
            <div className="space-y-8 mt-8">
              <div className="border-t border-[#E5E5E5] pt-6">
                <div className="flex gap-3">
                  <img
                    src="/greystarsvg1789-558.svg"
                    alt="Grey star"
                    className="w-3.5 h-3.5 mt-1"
                  />
                  <p className="text-[#737373] text-sm font-medium font-inter leading-[22.4px]">
                    Talking to current IIT-JEE aspirants helps me understand real challenges
                    and useful study strategies
                  </p>
                </div>
              </div>

              <div className="border-t border-[#E5E5E5] pt-6">
                <div className="flex gap-3">
                  <img
                    src="/greystarsvg1794-yrp7c.svg"
                    alt="Grey star"
                    className="w-3.5 h-3.5 mt-1"
                  />
                  <p className="text-[#737373] text-sm font-medium font-inter leading-[22.4px]">
                    By sharing experiences, I learn about the best resources and
                    how to balance subjects.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#E5E5E5] pt-6">
                <div className="flex gap-3">
                  <img
                    src="/greystarsvg1799-3f1.svg"
                    alt="Grey star"
                    className="w-3.5 h-3.5 mt-1"
                  />
                  <p className="text-[#737373] text-sm font-medium font-inter leading-[22.4px]">
                    Discussions with peers boost my confidence and help me manage stress during preparation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Video/Image */}
          <div className="relative">
            <img
              src="/gradientboxlinesvgfill1804-1ad.svg"
              alt="Gradient box"
              className="absolute -top-12 -right-2 w-[591px] h-[405px]"
            />
            <div className="relative overflow-hidden rounded-lg">
              <div 
                className="w-full h-[316.69px] bg-cover rounded-lg"
                style={{
                  backgroundImage: 'url("/tq_1e8eycfiar-hpii-1500h.png")'
                }}
              />
              <img
                src="/homeplayiconsvg1810-zsl.svg"
                alt="Play icon"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10"
              />
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="mt-16 bg-[#090909] rounded-[15px] py-4 px-8">
          <div className="flex justify-around">
            <span className="text-[#999999] text-[12.91px] font-medium font-inter">
              Strategies
            </span>
            <span className="text-[#999999] text-[12.8px] font-medium font-inter">
              Problem Solving Tips
            </span>
            <span className="text-[#999999] text-[11.7px] font-medium font-inter">
              Exam Day Tips
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StratsSection;