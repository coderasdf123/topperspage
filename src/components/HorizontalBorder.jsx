import PropTypes from "prop-types";

const HorizontalBorder = ({ className = "" }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-5xl w-full">
        <div
          className={`self-stretch border-gray-300 border-t-[1px] border-solid box-border flex flex-row items-start justify-between pt-[29px] pb-[2.3px] max-w-full gap-5 text-left text-lg text-white font-inter
            md:px-6 md:flex-col md:items-center ${className}`}
        >
          <div className="w-[435.1px] flex flex-col items-start justify-start max-w-full md:w-full md:items-center">
            <img
              className="w-[80px] flex-1 relative max-h-full overflow-hidden object-cover mt-[10%] md:mt-0"
              loading="lazy"
              alt=""
              src="/logo.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[12.8px] px-0 pb-0 md:w-full md:items-start">
            <div className="flex flex-col items-start justify-start gap-[14.2px] md:items-center">
              <h3 className="m-0 relative text-inherit leading-[25.2px] font-semibold font-inherit inline-block min-w-[80px]">
                About NNIIT
              </h3>
              <h3 className="m-0 relative text-inherit leading-[25.2px] font-semibold font-inherit inline-block min-w-[71.4px]">
                Careers
              </h3>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[12.8px] px-0 pb-0 box-border max-w-full text-sm text-darkgray-100 md:w-full">
            <div className="flex flex-row items-start justify-start gap-[54px] mq925:gap-[27px] mq925:flex-wrap md:flex-col md:items-center md:gap-8">
              <div className="w-[190.4px] flex flex-col items-start justify-start gap-4 md:items-center">
                <h3 className="m-0 relative text-lg leading-[25.2px] font-semibold font-inherit text-white inline-block min-w-[99.2px]">
                  Academic Programmes
                </h3>
                <a className="[text-decoration:none] w-[179.8px] relative leading-[22.4px] capitalize text-[inherit] flex items-center">
                  IIT-JEE Preparation
                </a>
                <div className="self-stretch relative leading-[22.4px] capitalize text-center">
                  Foundation Courses
                </div>
                <div className="relative leading-[22.4px] capitalize">
                  Olympiad
                </div>
              </div>
              <div className="w-[144.2px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[16.3px] md:items-center md:w-full md:pr-0">
                <h3 className="m-0 relative text-lg leading-[25.2px] font-semibold font-inherit text-white inline-block min-w-[95.4px]">
                  Innovative Learning
                </h3>
                <div className="relative leading-[22.4px] capitalize inline-block min-w-[118.1px]">
                  Personalised learning
                </div>
                <div className="relative leading-[22.4px] capitalize inline-block min-w-[119.5px]">
                  Research Opportunites
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[15.8px] md:items-center">
                <h3 className="m-0 relative text-lg leading-[25.2px] font-semibold font-inherit text-white inline-block min-w-[103.1px]">
                  Other Links
                </h3>
                <div className="relative leading-[22.4px] capitalize inline-block min-w-[105.5px]">
                  Student Resources
                </div>
                <a className="[text-decoration:none] relative leading-[22.4px] capitalize text-[inherit] inline-block min-w-[34.2px]">
                  Workshops & Seminars
                </a>
                <div className="relative leading-[22.4px] capitalize inline-block min-w-[121.4px]">
                  Career Support
                </div>
                <a className="[text-decoration:none] h-[19px] relative leading-[22.4px] capitalize text-[inherit] flex items-center shrink-0 min-w-[47.2px]">
                  Study Groups
                </a>
                <a className="[text-decoration:none] h-[19px] relative leading-[22.4px] capitalize text-[inherit] flex items-center shrink-0 min-w-[31.5px]">
                  Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HorizontalBorder.propTypes = {
  className: PropTypes.string,
};

export default HorizontalBorder;