import PropTypes from "prop-types";

const ContactInfo = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[190.4px] flex flex-row items-start justify-center py-0 px-5 box-border w-full text-left text-sm text-darkgray-200 font-inter ${className}`}
    >
      <div className="self-stretch max-w-5xl flex flex-col items-start justify-start gap-[25.1px] max-w-full">
        <div className="w-[1208.3px] flex flex-row items-end justify-between gap-5 max-w-full mq925:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-10 mq450:gap-5">
          </div>
          <div className="w-[290.3px] flex flex-col items-start justify-end pt-0 px-0 pb-[9.3px] box-border">
            <div className="self-stretch flex flex-row items-end justify-start gap-3">
              <div className="flex flex-col items-start justify-start gap-[34px]">
                <img
                  className="w-[18px] h-[18px] relative"
                  alt=""
                  src="/svg-30.svg"
                />
                <img
                  className="w-[18px] h-4 relative"
                  alt=""
                  src="/svg-31.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start -mt-[10%] gap-3">
                <div className="relative leading-[21px]">
                  <p className="m-0">Hyderabad</p>
                  <p className="m-0">Telangana,500040</p>
                </div>
                <div className="relative leading-[21px]">
                  info@nniit.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 border-darkslategray-200 border-t-[1px] border-solid box-border flex flex-row items-start justify-between pt-[29px] px-0 pb-[29.2px] max-w-full gap-5 mq925:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
            <div className="relative leading-[21px]">
              Copyright @ 2024 NNIIT
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0 box-border max-w-full text-darkgray-100">
            <div className="flex flex-row items-start justify-start gap-[15.8px] mq450:flex-wrap">
              <a className="[text-decoration:none] relative leading-[22.4px] capitalize text-[inherit] inline-block min-w-[96.6px]">
                Privacy Policy
              </a>
              <a className="[text-decoration:none] relative leading-[22.4px] capitalize text-[inherit]">{`Terms & Conditions`}</a>
              <div className="relative leading-[22.4px] capitalize inline-block min-w-[93.4px]">
                Cookie Policy
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-4">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img className="w-5 h-5 relative" alt="" src="/link.svg" />
            </div>
            <img className="h-6 w-6 relative" alt="" src="/link-1.svg" />
            <img className="h-6 w-6 relative" alt="" src="/link-2.svg" />
            <img className="h-6 w-6 relative" alt="" src="/link-3.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

ContactInfo.propTypes = {
  className: PropTypes.string,
};

export default ContactInfo;
