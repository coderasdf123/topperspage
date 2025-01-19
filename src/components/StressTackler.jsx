import React from 'react';

const StressTackler = () => {
  return (
    <div className="w-full font-['Inter'] py-4 sm:py-2 md:py-8">
      <div className="max-w-4xl mx-auto relative min-h-[610px] md:h-[610px] flex flex-col md:flex-row items-start justify-start px-[3.36%] md:px-[3.36%]">
        {/* Star icon and heading */}
        <img
          src="/starsvg1356-ir4.svg"
          alt="starsvg1356"
          className="absolute top-0.5 left-22 w-3.5 h-3.5"
        />
        <span className="ml-8 md:absolute md:left-8 text-[#A3A3A3] text-xs font-bold">
          TACKLE STRESS FROM HERE
        </span>

        <div className="relative w-full pt-2">
      <div className="flex items-start w-full">
        <h1 className="text-3xl font-bold text-black flex items-center gap-1">
          <span className="leading-[29px] -ml-[-0.5rem]">Fuel your IIT-Journey</span>
          <div className="relative inline-flex items-center">
            <span className="leading-[39px]">with Strategies</span>
            <img
              src="/lightmuvectorsvgfill1364-zl1c.svg"
              alt="Vector"
              className="absolute -bottom-3.5 left-0 w-[221px] h-[31px]"
            />
          </div>
        </h1>
      </div>
    </div>

        {/* Description text */}
        <span className="absolute top-[85px] left-0 text-[#3B3B3B] text-[13px] leading-[20.81px] w-full">
          Unlock success with wisdom from life-changing books that shape habits, mindset, and focus.
          <br /><br />
        </span>

        {/* List section */}
        <div className="absolute top-[137.63px] left-0 w-full h-[313.91px] flex items-start justify-center">
          {/* Item 1 */}
          <div className="absolute top-[117.97px] left-0 w-full h-[77.97px]">
            <img
              src="/gstarsvg1385-ps6d.svg"
              alt="Star icon"
              className="absolute top-0 left-0 w-14 h-14"
            />
            <span className="absolute top-0 left-[73px] text-[#090909] text-lg font-bold leading-[25.2px]">
              "Movement is Medicine"
            </span>
            <span className="absolute top-[34.19px] left-[81px] text-[#3B3B3B] text-sm leading-[22.4px] w-full pr-8">
              Physical activity releases endorphins, natural mood boosters that reduce stress. Exercise not only improves physical health but also
            </span>
            <span className="absolute top-[34.19px] left-[81px] text-[#3B3B3B] text-sm leading-[62.4px] w-full pr-8">
              alleviate mental tension and improves sleep quality.
            </span>
          </div>

          {/* Item 2 */}
          <div className="absolute top-[235.94px] left-0 w-full h-[77.97px]">
            <img
              src="/gassesssvg1408-w67.svg"
              alt="Assess icon"
              className="absolute top-0 left-0 w-14 h-14"
            />
            <span className="absolute left-[81px] text-[#090909] text-lg font-bold leading-[25.2px]">
              "Seek Support, Strengthen Your Resolve"
            </span>
            <span className="absolute top-[34.18px] left-[81px] text-[#3B3B3B] text-sm leading-[22.4px] w-full pr-8">
              Talking to friends, family, or a therapist provides emotional support and perspective. Sharing your feelings and seeking guidance helps you
            </span>
            <span className="absolute top-[34.18px] left-[81px] text-[#3B3B3B] text-sm leading-[62.4px] w-full pr-8">
             feel heard and reduces the weight of stress.
            </span>
          </div>

          {/* Item 3 */}
          <div className="absolute top-0 left-0 w-full flex items-center flex-col">
            <div className="relative w-full h-[77.97px]">
              <img
                src="/asvg1371-njba.svg"
                alt="Breathing icon"
                className="absolute top-0 left-0 w-14 h-14"
              />
              <span className="absolute top-0.5 left-[65px] text-[#090909] text-lg font-bold leading-[25.2px]">
                "Calm Begins with the Breath"
              </span>
              <span className="absolute top-[34.19px] left-[81px] text-[#3B3B3B] text-sm leading-[22.4px] w-full pr-8">
                Focusing on deep, intentional breathing calms the nervous system, reduces stress hormones, and anchors the mind in the present moment.
                </span>
                <span className="absolute top-[34.19px] left-[81px] text-[#3B3B3B] text-sm leading-[62.4px] w-full pr-8">
                Regular practice improves emotional resilience.
                </span>
          
            </div>
          </div>
        </div>

        {/* Container 14 */}
        <div className="absolute top-[148px] right-0 w-[500px] h-[281.48px] overflow-hidden rounded-lg" />
      </div>
    </div>
  );
};

export default StressTackler;