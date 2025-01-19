import React from 'react';
const InspirationSection = ({ className }) => {
  return (
    <section
      className={`w-full flex flex-row  mb-80px items-start justify-start pt-0 pb-[50px] -mt-[70px] text-left text-11xl text-white font-inter mq925:pb-5 mq1400:pb-[21px] pl-35 pr-35 ${className}`}
    >
      <div className="flex-1 bg-gray-600 overflow-hidden flex flex-row items-start justify-start w-full px-[0px] -ml-[70px]">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start pt-[62px] px-[335px] pb-[81px] box-border relative gap-[61px] max-w-full mq450:pt-5 mq450:pb-[22px] mq450:box-border mq925:gap-[15px] mq925:pt-[26px] mq925:px-[83px] mq925:pb-[34px] mq925:box-border mq1400:gap-[30px] mq1400:pt-10 mq1400:px-[167px] mq1400:pb-[53px] mq1400:box-border">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[19px] box-border gap-[49px] max-w-full text-xs text-darkgray-100 mq925:gap-6"></div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[19px] box-border gap-[49px] max-w-full text-xs text-darkgray-100 mq925:gap-6">
        <div className="w-full flex flex-row items-start justify-between gap-[70.4px] max-w-full mq925:gap-[18px]">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-3.5 h-3.5 relative overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/starsvg.svg"
                />
              </div>
              <div className="relative tracking-[1px] uppercase font-semibold z-[1]">
                Wisdom from popular authors
              </div>
            </div>
            <b className="relative text-10xl-8 leading-[39px] text-white z-[1] mq450:text-4xl mq450:leading-[31px]">
              <span className="inline-block">Get your Inspiration from here..</span>
            </b>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[5px] relative">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="w-3 h-[42.8px] relative">
                  <img
                    className="absolute top-[0px] left-[0px] w-3 h-3 z-[2]"
                    alt=""
                    src="/svg-5.svg"
                  />
                  <img
                    className="absolute top-[30.8px] left-[0px] w-3 h-3 z-[2]"
                    alt=""
                    src="/svg-5.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[12.8px] min-w-[336px] max-w-full">
                <div className="self-stretch relative leading-[20.8px] z-[2]">
                  <span>
                    Learn from industry leaders who shape the future. Your
                    journey to excellence
                  </span>
                  <span className="font-medium text-white">
                    begins with the right guidance and knowledge.
                  </span>
                </div>
                <div className="w-[476.6px] relative leading-[20.8px] flex items-center max-w-full z-[2]">
                  <span className="w-full">
                    Gain hands-on experience through live projects and
                    mentorship.
                    <span className="font-medium text-white">
                      Build the skills that will make you a leader in your
                      field.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="self-stretch flex flex-row items-start justify-start gap-[25px] max-w-full mb-[50px] text-base text-gray-100 mq1400:flex-wrap">
  <div className="w-full overflow-x-auto">
    <div className="flex flex-row items-start justify-start gap-[25px]">
      {/* Card 1 */}
      <div className="flex flex-col items-start justify-start gap-3.5 max-w-[calc(33.33%-12px)] sm:max-w-[66.66%] flex-shrink-0">
        <img
          className="w-full h-[225.9px] rounded-lg object-cover"
          loading="lazy"
          alt=""
          src="/border-6@2x.png"
        />
        <div className="flex flex-col items-start justify-start gap-[6.8px]">
          <div className="leading-[20.8px]">
            <p className="m-0">From Atomic Habits by James Clear</p>
            <p className="m-0 font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#39b6d8] via-[#f7d344] to-[#e38330]">
              “You do not rise to the level of your goals. You fall to the level of your systems.”
            </p>
          </div>
          <div className="text-xs leading-[18px] text-darkgray-100">
            <p className="m-0">
              Many IIT-JEE students struggle with procrastination and managing their time effectively.
            </p>
          </div>
        </div>
      </div>
      {/* Card 2 */}
      <div className="flex flex-col items-start justify-start gap-3.5 max-w-[calc(33.33%-12px)] sm:max-w-[66.66%] flex-shrink-0">
        <img
          className="w-full h-[225.9px] rounded-lg object-cover"
          loading="lazy"
          alt=""
          src="/border-7@2x.png"
        />
        <div className="flex flex-col items-start justify-start gap-[6.8px]">
          <div className="leading-[20.8px]">
            <p className="m-0">From Deep Work by Cal Newport</p>
            <p className="m-0 font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#39b6d8] via-[#f7d344] to-[#e38330]">
              “The ability to concentrate is a skill that must be trained.”
            </p>
          </div>
          <div className="text-xs leading-[18px] text-darkgray-100">
            <p className="m-0">
              The vast IIT-JEE syllabus demands deep focus.
            </p>
            <p className="m-0">Focus on clarity, one concept at a time.</p>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="flex flex-col items-start justify-start gap-3.5 max-w-[calc(33.33%-12px)] sm:max-w-[66.66%] flex-shrink-0">
        <img
          className="w-full h-[225.9px] rounded-lg object-cover"
          loading="lazy"
          alt=""
          src="/border-8@2x.png"
        />
        <div className="flex flex-col items-start justify-start gap-[6.8px]">
          <div className="leading-[20.8px]">
            <p className="m-0">From The Secret by Rhonda Byrne</p>
            <p className="m-0 font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#39b6d8] via-[#f7d344] to-[#e38330]">
              "Your thoughts become things."
            </p>
          </div>
          <div className="text-xs leading-[18px] text-darkgray-100">
            <p className="m-0">
              Students facing complex problems often struggle with self-doubt.
            </p>
            <p className="m-0">
              Focusing on solutions instead of the difficulty can boost their creative thinking skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style jsx>{`
  .card-width {
    width: calc(85%);
  }
  @media (max-width: 768px) {
    .card-width {
      width: calc(85%); /* Each card takes 2/3 of the viewport */
    }
  }
  @media (min-width: 768px) {
    .card-width {
      width: calc(33.33% - 12px); /* Desktop view remains unaffected */
    }
  }
`}</style>





        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[19px] box-border gap-[49px] max-w-full text-xs text-darkgray-100 mq925:gap-6">

  <div className="w-full flex flex-row items-start justify-between gap-[70.4px] max-w-full mq925:gap-[18px]">
    
  
    <div className="flex flex-col items-start justify-start gap-[16px]">
     
      <div className="flex flex-row items-start justify-start gap-[10px]">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <img
            className="w-3.5 h-3.5 relative overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/starsvg.svg"
          />
        </div>
        <div className="relative tracking-[1px] uppercase font-semibold z-[1]">
        Motivation That Drives Success
        </div>
      </div>
     
      <b className="relative text-10xl-8 leading-[39px] text-white z-[1] mq450:text-4xl mq450:leading-[31px]">
        <span className="inline-block">
        Let These Words Guide You Through Every Challenge
        </span>
      </b>
    </div>

    
    <div className="flex flex-col items-start justify-start gap-[16px]">
      
      <div className="flex flex-row items-start justify-start gap-[5px] relative">
        
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="w-3 h-[42.8px] relative">
            <img
              className="absolute top-[0px] left-[0px] w-3 h-3 z-[2]"
              alt=""
              src="/svg-5.svg"
            />
            <img
              className="absolute top-[30.8px] left-[0px] w-3 h-3 z-[2]"
              alt=""
              src="/svg-5.svg"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[12.8px] min-w-[336px] max-w-full">
          <div className="self-stretch relative leading-[20.8px] z-[2]">
            <span>Learn from industry leaders who shape the future. Your journey to excellence </span>
            <span className="font-medium text-white">begins with the right guidance and knowledge.</span>
          </div>
          <div className="w-[476.6px] relative leading-[20.8px] flex items-center max-w-full z-[2]">
            <span className="w-full">
            Gain hands-on experience through live projects and mentorship.
              <span className="font-medium text-white">
              Build the skills that will make you a leader in your field.
              </span>
            </span>
          </div>
      </div>
</div>
</div>
</div>
</div>

        <div className="self-stretch flex flex-row items-start justify-start gap-[25px] max-w-full mb-[50px] text-base text-gray-100 mq1400:flex-wrap">
  {/* Card 1 */}
  <div className="flex flex-col items-start justify-start gap-3.5 max-w-[calc(33.33%-12px)]">
    <img
      className="w-full h-[225.9px] rounded-lg object-cover"
      loading="lazy"
      alt=""
      src="/border-6@2x.png"
    />
    <div className="flex flex-col items-start justify-start gap-[6.8px]">
      <div className="leading-[20.8px]">
        <p className="m-0">Start Small,</p>
        <p className="m-0 font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#39b6d8] via-[#f7d344] to-[#e38330]">
          Dream Big!
        </p>
      </div>
      <div className="text-xs leading-[18px] text-darkgray-100">
        <p className="m-0">Each small success builds momentum.</p>
        <p className="m-0">Take that first step today.</p>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-start justify-start gap-3.5 max-w-[calc(33.33%-12px)]">
    <img
      className="w-full h-[225.9px] rounded-lg object-cover"
      loading="lazy"
      alt=""
      src="/border-7@2x.png"
    />
    <div className="flex flex-col items-start justify-start gap-[6.8px]">
      <div className="leading-[20.8px]">
        <p className="m-0">Build Your Basics</p>
        <p className="m-0 font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#39b6d8] via-[#f7d344] to-[#e38330]">
          With Confidence
        </p>
      </div>
      <div className="text-xs leading-[18px] text-darkgray-100">
        <p className="m-0">Strong foundations lead to great heights.</p>
        <p className="m-0">Focus on clarity, one concept at a time.</p>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col items-start justify-start gap-3.5 max-w-[calc(33.33%-12px)]">
    <img
      className="w-full h-[225.9px] rounded-lg object-cover"
      loading="lazy"
      alt=""
      src="/border-8@2x.png"
    />
    <div className="flex flex-col items-start justify-start gap-[6.8px]">
      <div className="leading-[20.8px]">
        <p className="m-0">Turn Challenges Into</p>
        <p className="m-0 font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#39b6d8] via-[#f7d344] to-[#e38330]">
          Opportunities
        </p>
      </div>
      <div className="text-xs leading-[18px] text-darkgray-100">
        <p className="m-0">Mistakes are stepping stones to success.</p>
        <p className="m-0">Learn from them and keep moving forward.</p>
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

export default InspirationSection;