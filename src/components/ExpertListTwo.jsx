import PropTypes from "prop-types";

const ExpertListTwo = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start gap-[4.4px] w-[calc(100%-30rem)] pb-[30px] -ml-[140px] text-left text-xs text-white font-inter bg-black ${className}`}
      style={{ paddingLeft: '25%', paddingRight: '7.5cm' }}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-5">
        <img
          className="h-28 flex-1 relative rounded-lg max-w-[300px] overflow-hidden object-cover min-w-[112px]"
          alt=""
          src="/container-5@2x.png"
        />
        <img
          className="h-28 flex-1 relative rounded-lg max-w-[300px] overflow-hidden object-cover min-w-[112px]"
          alt=""
          src="/container-6@2x.png"
        />
        <img
          className="h-28 flex-1 relative rounded-lg max-w-[300px] overflow-hidden object-cover min-w-[112px]"
          alt=""
          src="/container-7@2x.png"
        />
        <img
          className="h-28 flex-1 relative rounded-lg max-w-[300px] overflow-hidden object-cover min-w-[112px]"
          alt=""
          src="/container-8@2x.png"
        />
      </div>

      <div className="w-full flex flex-col items-start justify-start gap-px max-w-full">
        <div className="w-full flex flex-row items-start justify-center gap-[76.4px] max-w-full mq450:gap-[19px] mq925:gap-[38px] mq1400:flex-wrap">
          <div className="flex-1 relative leading-[16.8px] font-medium inline-block min-w-[115px] text-white">
            Dr Vishnuprasad Nagadevara
          </div>
          <div className="flex-[0.8861] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border min-w-[115px] mq450:flex-1">
            <div className="relative leading-[16.8px] font-medium inline-block min-w-[61.6px] text-white">
              Dr Lan Ma
            </div>
          </div>
          <div className="flex-[0.8861] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border min-w-[115px] mq450:flex-1">
            <div className="relative leading-[16.8px] font-medium inline-block min-w-[98.4px] text-white">
              Mr Rohit Kapoor
            </div>
          </div>
          <div className="relative leading-[16.8px] font-medium inline-block min-w-[98.3px] text-white">
            Ms Malthi Satish
          </div>
        </div>

        <div className="w-full flex flex-row items-start justify-center gap-[75.7px] text-black mq450:gap-[19px] mq925:gap-[38px] mq1400:flex-wrap">
          <div className="flex-[0.8863] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border min-w-[115px] mq450:flex-1">
            <div className="relative leading-[19.2px]">
              <p className="m-0 font-medium">Former Dean,</p>
              <p className="m-0">
                <b>IIM Bangalore</b>
              </p>
            </div>
          </div>
          <div className="flex-1 relative leading-[19.2px] inline-block min-w-[115px]">
            <p className="m-0 font-medium">Adjunct Professor of Business,</p>
            <p className="m-0">
              <b>NYU Shanghai</b>
            </p>
          </div>
          <div className="flex-[0.8863] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border min-w-[115px] mq450:flex-1">
            <div className="relative leading-[19.2px]">
              <p className="m-0 font-medium">CEO, Food Marketplace,</p>
              <p className="m-0">
                <b>Swiggy</b>
              </p>
            </div>
          </div>
          <div className="relative leading-[19.2px]">
            <p className="m-0 font-medium">Former Director of PM,</p>
            <p className="m-0">
              <b>Paypal</b>
            </p>
          </div>
        </div>
      </div>

      <div className="self-stretch flex flex-col items-start justify-start gap-px max-w-full text-white">
      </div>
    </div>
  );
};

ExpertListTwo.propTypes = {
  className: PropTypes.string,
};

export default ExpertListTwo;