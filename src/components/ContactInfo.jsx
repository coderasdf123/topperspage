import PropTypes from "prop-types";

const ContactInfo = ({ className = "" }) => {
  return (
    <div className={`flex justify-center w-full text-sm text-darkgray-200 font-sf-pro-regular ${className}`}>
      <div className="w-full max-w-5xl flex flex-col items-start justify-start gap-[25px]">
        <div className="w-full flex flex-row items-end justify-between gap-5">
          <div className="flex flex-row items-start justify-start gap-10 ">
          </div>
          <div className="w-[290px] flex flex-col items-start justify-end ">
            <div className="flex flex-row items-end justify-start gap-3">
              <div className="flex flex-col items-start justify-start gap-[34px]">
                <img
                  className="w-[18px] h-[18px]"
                  alt=""
                  src="/svg-30.svg"
                />
                <img
                  className="w-[18px] h-4"
                  alt=""
                  src="/svg-31.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start -mt-[10%] gap-3">
                <div className="leading-[21px]">
                  <p className="m-0">Hyderabad</p>
                  <p className="m-0">Telangana,500040</p>
                </div>
                <div className="leading-[21px]">
                  info@nniit.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row items-start justify-between border-t border-solid border-darkslategray-200 pt-7 gap-5 mq925:flex-wrap">
          <div className="pt-0.5">
            <div className="leading-[21px]">
              Copyright @ 2024 NNIIT
            </div>
          </div>
          <div className="pt-0.5 text-darkgray-100">
            <div className="flex flex-row items-start gap-4 mq450:flex-wrap">
              <a className="leading-[22px] capitalize no-underline text-inherit min-w-[96px]">
                Privacy Policy
              </a>
              <a className="leading-[22px] capitalize no-underline text-inherit">{`Terms & Conditions`}</a>
              <div className="leading-[22px] capitalize min-w-[83px]">
                Cookie Policy
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start gap-4">
            <div className="pt-0.5">
              <img className="w-5 h-5" alt="" src="/link.svg" />
            </div>
            <img className="h-6 w-6" alt="" src="/link-1.svg" />
            <img className="h-6 w-6" alt="" src="/link-2.svg" />
            <img className="h-6 w-6" alt="" src="/link-3.svg" />
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