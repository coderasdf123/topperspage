import PropTypes from "prop-types";

const Section6 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-black flex flex-row items-end justify-between pt-20 px-[335px] pb-[86px] box-border shrink-0 max-w-full gap-5 z-[3] text-left text-xs text-darkgray-100 font-inter mq925:pl-[83px] mq925:pr-[83px] mq925:pb-14 mq925:box-border mq1400:pl-[167px] mq1400:pr-[167px] mq1400:box-border mq1875:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[51px] box-border min-w-[376.7px] min-h-[295px] max-w-full mq1400:min-w-full mq1875:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[39.8px] max-w-full mq450:gap-5">
          <div className="self-stretch flex flex-col items-start justify-start gap-[9px] shrink-0">
            <div className="flex flex-row items-start justify-start gap-2.5">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/starsvg-8.svg"
                />
              </div>
              <div className="relative tracking-[1px] uppercase font-semibold inline-block min-w-[96px]">
                SHIFT ORBITS
              </div>
            </div>
            <h1 className="m-0 self-stretch relative text-27xl leading-[59.8px] font-bold font-inherit text-white mq450:text-9xl mq450:leading-[36px] mq925:text-18xl mq925:leading-[48px]">
              <p className="m-0">Graduate With a</p>
              <p className="m-0">Diverse Cohort</p>
            </h1>
          </div>
          <div className="w-[345.8px] flex flex-row items-start justify-start p-px box-border max-w-full text-center text-sm text-white">
            <div className="h-[58px] w-[345.8px] relative rounded-16xl [background:linear-gradient(92.04deg,_#39b6d8,_#f7d344_50%,_#e38330)] hidden max-w-full" />
            <div className="flex-1 rounded-35xl bg-gray-600 overflow-hidden flex flex-row items-start justify-start pt-4 px-6 pb-3.5 box-border gap-[7.8px] max-w-full z-[1] mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[174px]">
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Watch PGP TBM '23 Convocation Video
                </div>
              </div>
              <img className="h-6 w-5 relative" alt="" src="/svg-3.svg" />
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-[625px] relative max-h-full overflow-hidden shrink-0 object-cover max-w-full mq1875:flex-1"
        loading="lazy"
        alt=""
        src="/academicexpeditionswebp@2x.png"
      />
    </div>
  );
};

Section6.propTypes = {
  className: PropTypes.string,
};

export default Section6;
