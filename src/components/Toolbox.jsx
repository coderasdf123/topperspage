import React from 'react';

const Toolbox = () => {
  return (
    <div className="relative w-full">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, 
              rgba(229, 231, 235, 0.2) 1px,
              transparent 1px
            ),
            linear-gradient(to bottom,
              rgba(229, 231, 235, 0.2) 1px,
              transparent 1px
            ),
            linear-gradient(to right,
              rgba(255, 255, 255, 1) 0%,
              rgba(255, 255, 255, 0) 50%
            )
          `,
          backgroundSize: '24px 24px, 24px 24px, 100% 100%',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-10 lg:px-8 py-4 relative flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-8 lg:space-y-0">
        {/* Left Content Section */}
        <div className="lg:w-1/2">
          {/* Header Group */}
          <div className="flex items-center mb-4">
            {/* Star SVG */}
            <img
              src="/starsvg145-ossh.svg"
              alt="starsvg145"
              className="w-[14px] h-[14px] mr-2"
            />
            <span className="text-gray-200 text-[12px] font-sf-pro-bold text-left">
              ONE-POINT ACCESS
            </span>
          </div>

          {/* Heading Section */}
          <div className="relative h-[82px] mb-8">
            <span className="text-black text-[30px] font-sf-pro-bold font-bold block">
              Toppers' ToolBox
            </span>
            <div className="relative mt-2">
              <img
                src="/degreesectionsvgfill153-5wgo.svg"
                alt="degreeSectionsvgfill153"
                className="w-[168px] h-[41px] absolute -bottom-8"
              />
              <span className="text-black text-[30px] font-sf-pro-bold font-bold relative z-10">
               
              </span>
            </div>
          </div>

          {/* Description Text */}
          <span className="block text-[#737373] text-[12.6px] font-sf-pro-regular mb-4">
            Your Exclusive Gateway to the Top 1% - Advanced Strategies, Precision Tools, and Unmatched Performance
          </span>

          {/* Button Link Section */}
          <div className="relative w-[252px] h-[58px]">
            <img
              src="/gradient159-ga6n-200h.png"
              alt="Gradient159"
              className="absolute top-0 left-0 w-full h-full rounded-[35px]"
            />
            <button className="absolute top-[1px] left-[1px] w-[250px] h-[56px] overflow-hidden rounded-[54px] bg-white flex items-center justify-center">
              <span className="text-[#090909] text-base font-sf-pro-bold font-bold">
                Access Toppers' ToolBox
              </span>
              <img
                src="/svg162-eu4.svg"
                alt="SVG162"
                className="w-[20px] h-[24px] ml-2"
              />
            </button>
          </div>
        </div>

        {/* Right Cards Section */}
        <div className="grid grid-cols-2 gap-4 top-[20px] lg:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2 font-sf-pro">Advanced Question Bank</h3>
            <p className="text-sm text-gray-600 font-sf-pro">
              Precision-crafted, subject-specific questions that challenge the top 1%.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2 font-sf-pro">Killer Techniques</h3>
            <p className="text-sm text-gray-600 font-sf-pro">
              High-speed problem-solving strategies across subjects.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2 font-sf-pro">AI-Driven Analysis</h3>
            <p className="text-sm text-gray-600 font-sf-pro">
              Personalized performance insights and improvement strategies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2 font-sf-pro">Time-Efficiency Toolkit</h3>
            <p className="text-sm text-gray-600 font-sf-pro">
              Master speed and accuracy with precision challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbox;