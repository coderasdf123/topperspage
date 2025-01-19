import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
    className={`w-full flex flex-row items-start justify-start pt-0 text-left text-11xl text-white font-inter mq925:pb-5 pl-35 pr-35 ${className}`}
  >
      <div className="flex-1 bg-gray-600 overflow-hidden flex flex-row items-start justify-start w-full ">
        <div className="flex-1 overflow-hidden flex flex-col items-start justify-start pt-[62px] px-[335px] pb-[81px] box-border relative gap-[61px] max-w-full mq450:pt-5 mq450:pb-[22px] mq450:box-border mq925:gap-[15px] mq925:pt-[26px] mq925:px-[83px] mq925:pb-[34px] mq925:box-border mq1400:gap-[30px] mq1400:pt-10 mq1400:px-[167px] mq1400:pb-[53px] mq1400:box-border">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[19px] box-border gap-[49px] max-w-full text-xs text-darkgray-100 mq450:gap-4 mq925:gap-6">
            <div className="w-full flex flex-row items-end justify-start gap-[70.4px] max-w-full  mq450:flex-wrap mq450:gap-[12px] mq925:gap-[18px] mq1400:gap-[35px]">
              <div className="flex flex-col items-start justify-start gap-2 max-w-full mq450:flex-1">
                <div className="flex flex-row items-start justify-start gap-2.5">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-3.5 h-3.5 relative overflow-hidden shrink-0 z-[1]"
                      alt=""
                      src="/starsvg.svg"
                    />
                  </div>
                  <div className="relative tracking-[1px] uppercase font-semibold z-[1]">{`Take Your First Step with NNIIT`}</div>
                </div>
                <b className="relative text-10xl-8 leading-[39px] text-white z-[1] mq450:text-5xl mq450:leading-[31px]">
            <span className="inline-block">What's the first Thing you want to do Today to move forward? </span>
              </b>
              </div>
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[406px] max-w-full text-smi mq450:min-w-[250px]">
                <div className="self-stretch flex flex-row items-start justify-start pt-[69.4px] pb-[1.8px] pl-[50px] pr-10 box-border relative gap-[5px] max-w-full mq450:flex-wrap mq450:pl-[20px]">
                  
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
                  <div className="flex-1 flex flex-col items-start justify-start gap-[12.8px] min-w-[250px] max-w-full">
                    <div className="self-stretch relative leading-[20.8px] z-[2]">
                      <span>{`Every great journey begins with a single step.`}</span>
                      <span className="font-medium text-white">{`Every great journey begins with a single step. `}</span>
                      <span>etc.</span>
                    </div>
                    <div className="w-[476.6px] relative leading-[20.8px] flex items-center max-w-full z-[2]">
                      <span className="w-full">
                        <span>{`Every great journey begins with a single step. Take action today to make progress, no matter how small`}</span>
                        <span className="font-medium text-white">
                        Success is built on daily choices
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </div>

                   <div
               className="flex flex-row items-start justify-start gap-[25px] overflow-x-auto scrollbar-hide max-w-full text-base text-gray-100"
                  style={{ whiteSpace: 'nowrap', scrollBehavior: 'smooth' }}
                            >
                      {/* Component 1 */}
                       <div className="flex-none flex flex-col items-start justify-start gap-3.5 min-w-[300px] max-w-full">
                    <div className="self-stretch h-[185.75px] relative rounded-lg bg-gray-100 flex items-center justify-center">
                   <img
                 className="absolute w-full h-full"
                 alt="Educational Icon"
                       src="/ed.png"
                  />
                   </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[6.8px]">
                  <div className="w-[229px] relative leading-[20.8px] flex items-center z-[5]">
                     <span className="w-full">
                   <p className="m-0">Easy Video Lessons</p>
                     <p className="m-0 font-medium text-transparent bg-gradient-to-r from-[#39b6d8] via-[#f7d344] to-[#e38330] bg-clip-text">
                 Understand complex concepts through engaging animations
                      </p>
                 </span>
               </div>
              </div>
        </div>

              {/* Component 2 */}
                <div className="flex-none flex flex-col items-start justify-start gap-3.5 min-w-[300px] max-w-full">
                    <div className="self-stretch h-[185.75px] relative rounded-lg max-w-full overflow-hidden shrink-0 z-[1] bg-gray-100 flex items-center justify-center">
                       <img
                     className="absolute w-full h-full relative overflow-hidden shrink-0 z-[1]"
                   alt="Educational Icon"
                  src="/ed.png"
               />
                 </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[6.8px]">
                <div className="w-[229px] relative leading-[20.8px] flex items-center z-[5]">
                    <span className="w-full">
                  <p className="m-0">Live Doubt Sessions</p>
                  <p className="m-0 font-medium text-transparent !bg-clip-text [background:linear-gradient(90.47deg,_#39b6d8_3.94%,_#f7d344_49.4%,_#e38330_94.86%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                 Get your queries answered in real time
                    </p>
                  </span>
            </div>
              </div>
              </div>

        {/* Component 3 */}
            <div className="flex-none flex flex-col items-start justify-start gap-3.5 min-w-[300px] max-w-full">
             <div className="self-stretch h-[185.75px] relative rounded-lg max-w-full overflow-hidden shrink-0 z-[1] bg-gray-100 flex items-center justify-center">
                <img
                className="absolute w-full h-full relative overflow-hidden shrink-0 z-[1]"
                alt="Educational Icon"
                    src="/ed.png"
              />
                </div>
               <div className="self-stretch flex flex-col items-start justify-start gap-[6.8px]">
             <div className="w-[229px] relative leading-[20.8px] flex items-center z-[1]">
               <span className="w-full">
           <p className="m-0">Mock Tests</p>
             <p className="m-0 font-medium text-transparent !bg-clip-text [background:linear-gradient(90.47deg,_#39b6d8_3.94%,_#f7d344_49.4%,_#e38330_94.86%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Practice with real-time exam simulations
          </p>
        </span>
      </div>
    </div>
  </div>

  {/* Component 4 */}
  <div className="flex-none flex flex-col items-start justify-start gap-3.5 min-w-[300px] max-w-full">
    <div className="self-stretch h-[185.75px] relative rounded-lg max-w-full overflow-hidden shrink-0 z-[1] bg-gray-100 flex items-center justify-center">
      <img
        className="absolute w-full h-full relative overflow-hidden shrink-0 z-[1]"
        alt="Educational Icon"
        src="/ed.png"
      />
    </div>
    <div className="self-stretch flex flex-col items-start justify-start gap-[6.8px]">
      <div className="w-[229px] relative leading-[20.8px] flex items-center z-[1]">
        <span className="w-full">
          <p className="m-0">Personalized Feedback</p>
          <p className="m-0 font-medium text-transparent !bg-clip-text [background:linear-gradient(90.47deg,_#39b6d8_3.94%,_#f7d344_49.4%,_#e38330_94.86%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Improve with AI-driven performance analysis
          </p>
        </span>
      </div>
    </div>
  </div>

  {/* Component 5 */}
  <div className="flex-none flex flex-col items-start justify-start gap-3.5 min-w-[300px] max-w-full">
    <div className="self-stretch h-[185.75px] relative rounded-lg max-w-full overflow-hidden shrink-0 z-[1] bg-gray-100 flex items-center justify-center">
      <img
        className="absolute w-full h-full relative overflow-hidden shrink-0 z-[1]"
        alt="Educational Icon"
        src="/ed.png"
      />
    </div>
    <div className="self-stretch flex flex-col items-start justify-start gap-[6.8px]">
      <div className="w-[229px] relative leading-[20.8px] flex items-center z-[1]">
        <span className="w-full">
          <p className="m-0">24/7 Assistance</p>
          <p className="m-0 font-medium text-transparent !bg-clip-text [background:linear-gradient(90.47deg,_#39b6d8_3.94%,_#f7d344_49.4%,_#e38330_94.86%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Access help whenever you need
          </p>
        </span>
      </div>
    </div>
  </div>

  {/* Component 6 */}
  <div className="flex-none flex flex-col items-start justify-start gap-3.5 min-w-[300px] max-w-full">
    <div className="self-stretch h-[185.75px] relative rounded-lg max-w-full overflow-hidden shrink-0 z-[1] bg-gray-100 flex items-center justify-center">
      <img
        className="absolute w-full h-full relative overflow-hidden shrink-0 z-[1]"
        alt="Educational Icon"
        src="/ed.png"
      />
    </div>
    <div className="self-stretch flex flex-col items-start justify-start gap-[6.8px]">
      <div className="w-[229px] relative leading-[20.8px] flex items-center z-[1]">
        <span className="w-full">
          <p className="m-0">Interactive Quizzes</p>
          <p className="m-0 font-medium text-transparent !bg-clip-text [background:linear-gradient(90.47deg,_#39b6d8_3.94%,_#f7d344_49.4%,_#e38330_94.86%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Test and reinforce your knowledge
          </p>
        </span>
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

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;