import React from 'react';

const WeeklyScheduleSection = () => {
  return (
    <div className="w-full bg-[#090909]">
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        {/* Header with star and text */}
        <div className="flex items-center gap-4 mb-4 md:mb-6">
          <img
            src="/starsvg1758-d1lj.svg"
            alt="Star"
            className="w-3 h-3 md:w-3.5 md:h-3.5"
          />
          <span className="text-[#a3a3a3] text-[10px] md:text-xs font-semibold font-inter">
            INSIDE THE CLASSROOM
          </span>
        </div>

        {/* Title section */}
        <div className="space-y-2">
          <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight">
            A Glimpse Into Your Weekly Schedule
          </h2>
          <div className="relative">
            <img
              src="/lightmuvectorsvgfill1766-zj2l.svg"
              alt="Vector"
              className="w-[240px] md:w-[324px] h-[24px] md:h-[31px]"
            />
          </div>
        </div>

        {/* Main image - Responsive container */}
        <div className="mt-8 md:mt-16 w-full relative">
          {/* This ensures the aspect ratio is maintained */}
          <div className="relative w-full" style={{ paddingTop: 'calc(715.72 / 1070 * 100%)' }}>
            <div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-lg transition-all duration-300"
              style={{
                backgroundImage: 'url("/tq_hqgbgo4skm-bj5m-1500h.png")',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyScheduleSection;