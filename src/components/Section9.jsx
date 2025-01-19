import PropTypes from "prop-types";

const Section9 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start pt-[29px] px-[635px] pb-[50px] box-border gap-[19.8px] bg-[url('/public/section3@3x.png')] bg-cover bg-no-repeat bg-[top] shrink-0 max-w-full z-[3] text-center text-36xl text-gray-600 font-inter mq450:pb-8 mq450:box-border mq925:pl-[158px] mq925:pr-[158px] mq925:box-border mq1400:pl-[317px] mq1400:pr-[317px] mq1400:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pl-px pr-0 box-border max-w-full">
        <div className="w-[452.1px] flex flex-col items-end justify-start gap-px max-w-full">
          <h1 className="m-0 relative text-inherit leading-[18px] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(113.33deg,_#39b6d8,_#f7d344_50%,_#e38330)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-14xl mq450:leading-[11px] mq925:text-25xl mq925:leading-[14px]">
            ...
          </h1>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-9 box-border max-w-full text-17xl">
            <h1 className="m-0 flex-1 relative text-inherit leading-[46.8px] font-bold font-inherit inline-block max-w-full mq450:text-3xl mq450:leading-[28px] mq925:text-10xl mq925:leading-[37px]">{`Explore Masters' Union `}</h1>
          </div>
        </div>
      </div>
      <div className="self-stretch shadow-[0px_0px_36px_2px_rgba(192,_192,_192,_0.25)] rounded-mini bg-white overflow-hidden flex flex-col items-start justify-start p-10 gap-5 text-base">
        <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-5">
          <div className="flex-1 flex flex-row items-start justify-start p-px box-border min-w-[179px]">
            <div className="h-[58px] w-[275px] relative rounded-16xl [background:linear-gradient(92.57deg,_#39b6d8,_#f7d344_50%,_#e38330)] hidden" />
            <div className="flex-1 rounded-35xl bg-white overflow-hidden flex flex-row items-start justify-between py-3 px-8 gap-5 z-[1] mq925:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="self-stretch relative leading-[24px] font-medium inline-block min-w-[96.4px]">
                  Stay Consistent
                </div>
              </div>
              <img className="h-8 w-8 relative" alt="" src="/svg-26.svg" />
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start p-px box-border min-w-[179px]">
            <div className="h-[58px] w-[275px] relative rounded-16xl [background:linear-gradient(92.57deg,_#39b6d8,_#f7d344_50%,_#e38330)] hidden" />
            <div className="flex-1 rounded-35xl bg-white overflow-hidden flex flex-row items-start justify-between py-3 px-8 gap-5 z-[1] mq925:flex-wrap mq925:justify-center">
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="self-stretch relative leading-[24px] font-medium inline-block min-w-[127px]">
                  Handle Exam Pressure
                </div>
              </div>
              <img className="h-8 w-8 relative" alt="" src="/svg-26.svg" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-5">
          <div className="flex-1 flex flex-row items-start justify-start p-px box-border min-w-[179px]">
            <div className="h-[58px] w-[275px] relative rounded-16xl [background:linear-gradient(92.57deg,_#39b6d8,_#f7d344_50%,_#e38330)] hidden" />
            <div className="flex-1 rounded-35xl bg-white overflow-hidden flex flex-row items-start justify-start py-3 px-8 gap-[14.5px] z-[1] mq925:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[105px]">
                <div className="self-stretch relative leading-[24px] font-medium">
                  Build Mental Resilience
                </div>
              </div>
              <img className="h-8 w-8 relative" alt="" src="/svg-26.svg" />
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start p-px box-border min-w-[179px]">
            <div className="h-[58px] w-[275px] relative rounded-16xl [background:linear-gradient(92.57deg,_#39b6d8,_#f7d344_50%,_#e38330)] hidden" />
            <div className="flex-1 rounded-35xl bg-white overflow-hidden flex flex-row items-start justify-between py-3 px-8 gap-5 z-[1] mq925:flex-wrap mq925:justify-center">
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="self-stretch relative leading-[24px] font-medium inline-block min-w-[117.5px]">
                  Time Management Techniques
                </div>
              </div>
              <img className="h-8 w-8 relative" alt="" src="/svg-26.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Section9.propTypes = {
  className: PropTypes.string,
};

export default Section9;
