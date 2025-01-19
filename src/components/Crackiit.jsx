import React from 'react';

const Crackiit = () => {
  return (
    <div className="w-full bg-[#FAFAFA] py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-8">
  <div className="relative">
    <h1 className="text-3xl font-bold font-inter inline-block relative">
      Crack IIT-JEE with{" "}
      <span className="relative">
        NNIIT
        <img
          src="/degreesectionsvgfill1733-k9l8.svg"
          alt="degreeSectionsvgfill"
          className="absolute w-[251px] h-[41px] left-1/2 transform -translate-x-1/2 mt-2"
          style={{ top: "100%" }}
        />
      </span>
    </h1>
  </div>
</div>


        {/* Subheader Text */}
        <p className="text-[13px] font-inter leading-[20.81px] text-[#737373] mb-8">
          <span>Unlock your potential with guidance from seasoned IIT-JEE experts, </span>
          <span className="font-medium text-black">who provide tailored strategies, </span>
          <span>in-depth explanations, and the best study techniques to ensure you achieve </span>
          <span className="font-medium text-black">top ranks and make your IIT dream a reality.</span>
        </p>

        {/* Images Row */}
        <div className="flex gap-6 mb-4">
          <div className="w-1/3 h-[204px] rounded-lg overflow-hidden">
            <div 
              className="w-full h-full bg-cover rounded-lg"
              style={{ backgroundImage: 'url("/tq_1qijvqj-gg-ma6-1500h.png")' }}
            />
          </div>
          <div className="w-1/3 h-[204px] rounded-lg overflow-hidden">
            <div 
              className="w-full h-full bg-cover rounded-lg"
              style={{ backgroundImage: 'url("/tq_ecf51zkws8-tjj-1500h.png")' }}
            />
          </div>
          <div className="w-1/3 h-[204px] rounded-lg overflow-hidden">
            <div 
              className="w-full h-full bg-cover rounded-lg"
              style={{ backgroundImage: 'url("/tq_8mwxtxr329-jp2e-1500h.png")' }}
            />
          </div>
        </div>

        {/* Text Sections Row */}
        <div className="flex gap-6">
          {/* Text Section 1 */}
          <div className="w-1/3">
            <h3 className="text-base font-normal font-inter text-[#090909] mb-2">
              Personalized Learning Approach
            </h3>
            <p className="text-xs font-inter leading-[18px] text-[#737373]">
              <span>Proven Exam Strategies </span>
              <span className="text-black font-medium">expert-led insights</span>
              <br />
              <span className="text-black font-medium">
                and tips to help you tackle complex problems{' '}
              </span>
              Interactive Doubt Resolution
            </p>
          </div>

          {/* Text Section 2 */}
          <div className="w-1/3">
            <h3 className="text-base font-normal font-inter text-[#090909] mb-2">
              Interactive Doubt Resolution
            </h3>
            <p className="text-xs font-inter leading-[18px] text-[#737373]">
              <span className="text-black font-medium">
                Clarify your doubts instantly with interactive sessions
              </span>
              <span>, ensuring complete understanding of key concepts.</span>
            </p>
          </div>

          {/* Text Section 3 */}
          <div className="w-1/3">
            <h3 className="text-base font-normal font-inter text-[#090909] mb-2">
              Expert Mentorship & Crack Jobs Abroad
            </h3>
            <p className="text-xs font-inter leading-[18px] text-[#737373]">
              <span>Get guidance from experienced mentors</span>
              <br />
              <span>who provide personalized advice and motivation </span>
              <span>throughout your journey.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crackiit;