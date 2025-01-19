import PropTypes from "prop-types";

const Section2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch overflow-hidden flex flex-row items-start justify-start pt-[79px] px-[335px] pb-0 box-border gap-[112.5px] bg-[url('/public/section1@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-10xl-6 text-black font-inter mq925:gap-7 mq925:pl-[83px] mq925:pt-[51px] mq925:pr-[83px] mq925:box-border mq1400:gap-14 mq1400:pl-[167px] mq1400:pr-[167px] mq1400:box-border mq1875:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-[48.7px] min-w-[500px] max-w-full mq925:gap-6 mq1400:min-w-full mq1875:flex-1">
        <div className="w-[475.9px] h-[90.3px] relative shrink-0 max-w-full">
          <b className="absolute top-[0px] left-[0px] leading-[39px] flex items-center w-[476.9px] h-[41px] mq450:text-5xl mq450:leading-[31px]">
            Thrive With Real-Time Access to
          </b>
          <div className="absolute top-[39px] left-[0px] w-[203.3px] h-[51.3px] text-9xl-8">
            <img
              className="absolute top-[20.5px] left-[0px] w-[203.1px] h-[30.8px]"
              alt=""
              src="/image-7.svg"
            />
            <b className="absolute top-[0px] left-[0px] leading-[39px] flex items-center w-[204.3px] h-[41px] z-[1] mq450:text-4xl mq450:leading-[31px]">
              500+ Mentors
            </b>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[18px] shrink-0 max-w-full text-smi text-gray-600">
          <div className="flex flex-row items-start justify-start pt-px pb-[1.8px] pl-0 pr-5 gap-2 shrink-0">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-3 h-3 relative overflow-hidden shrink-0"
                alt=""
                src="/starsvg-2.svg"
              />
            </div>
            <div className="relative leading-[20.8px]">
              <p className="m-0">
                <span className="font-inter">{`Gain `}</span>
                <span className="font-semibold font-inter">
                  quick and easy access
                </span>
                <span> to interview prep, even if it's the night before</span>
              </p>
              <p className="m-0">your big day.</p>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-px px-0 pb-[1.8px] gap-2 shrink-0">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-3 h-3 relative overflow-hidden shrink-0"
                alt=""
                src="/starsvg-2.svg"
              />
            </div>
            <div className="relative leading-[20.8px]">
              <p className="m-0">
                <span>{`Connect instantly with expert mentors for `}</span>
                <span className="font-semibold font-inter">1:1 support</span>
                <span className="font-inter"> tailored to your</span>
              </p>
              <p className="m-0">startup needs.</p>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-px pb-[1.8px] pl-0 pr-[23px] box-border gap-2 max-w-full shrink-0 mq925:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-3 h-3 relative overflow-hidden shrink-0"
                alt=""
                src="/starsvg-2.svg"
              />
            </div>
            <div className="flex-1 relative leading-[20.8px] inline-block min-w-[296px] max-w-full">
              <p className="m-0">
                Whether it’s finishing an assignment or finding emotional
                support, log in
              </p>
              <p className="m-0">
                <span>{`and get the `}</span>
                <span className="font-semibold font-inter">
                  help you need within the hour
                </span>
                <span className="font-inter">.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[414px] max-w-full mq1400:min-w-full">
        <div className="self-stretch rounded-t-3xs rounded-b-none bg-gray-600 flex flex-row items-start justify-start pt-[25px] px-[18px] pb-0 box-border max-w-full">
          <img
            className="h-[370.1px] flex-1 relative max-w-full overflow-hidden object-cover"
            loading="lazy"
            alt=""
            src="/second-page3mp4@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

Section2.propTypes = {
  className: PropTypes.string,
};

export default Section2;
