import { useMemo } from "react";
import PropTypes from "prop-types";

const Container = ({
  className = "",
  containerFlex,
  containerAlignSelf,
  campuspng,
  heading3TextDecoration,
  timeShippng,
  graduationsvg,
}) => {
  const containerStyle = useMemo(() => {
    return {
      flex: containerFlex,
      alignSelf: containerAlignSelf,
    };
  }, [containerFlex, containerAlignSelf]);

  const heading3Style = useMemo(() => {
    return {
      textDecoration: heading3TextDecoration,
    };
  }, [heading3TextDecoration]);

  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[10.8px] box-border gap-5 max-w-full text-left text-sm text-black font-inter mq925:flex-wrap ${className}`}
      style={containerStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[43.6px] min-w-[136px]">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[1.4px] gap-3 mq450:flex-wrap">
          <img
            className="h-[42px] w-[42px] relative overflow-hidden shrink-0"
            alt=""
            src="/timersvg.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[4.2px] px-0 pb-0">
            <div className="flex flex-col items-start justify-start gap-[3.4px]">
              <div className="relative leading-[19px] font-semibold inline-block min-w-[102.2px]">
              Focus Like Never Before
              </div>
              <div className="relative text-xs leading-[19.2px] font-medium text-dimgray-100 inline-block min-w-[83px]">
              Unlock Techniques to Sharpen Your Focus
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[1.4px] gap-3 mq450:flex-wrap">
          <img
            className="h-[42px] w-[42px] relative overflow-hidden shrink-0 object-cover"
            alt=""
            src={campuspng}
          />
          <div className="flex flex-col items-start justify-start pt-[4.2px] px-0 pb-0">
            <div className="flex flex-col items-start justify-start gap-[3.4px]">
              <div
                className="relative leading-[19px] font-semibold inline-block min-w-[81.8px]"
                style={heading3Style}
              >
                Revitalize Your Study Routine
              </div>
              <div className="relative text-xs leading-[19.2px] font-medium text-dimgray-100 inline-block min-w-[107.7px]">
              at your own pace
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[30.8px] min-w-[136px] text-sm-8">
        <div className="self-stretch flex flex-row items-start justify-start pt-px pb-[2.2px] pl-0 pr-[17px] gap-3 mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[5.4px] px-0 pb-0">
            <img
              className="w-[42px] h-[42px] relative overflow-hidden shrink-0 object-cover"
              alt=""
              src={timeShippng}
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[90px]">
            <div className="relative leading-[22.4px] font-semibold inline-block min-w-[52px] shrink-0">
            Refocus and Reclaim Your Journey
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-0 text-xs text-dimgray-100">
              <div className="mt-[-0.6px] relative leading-[19.2px] font-medium shrink-0">
                <p className="m-0">Take Action Today</p>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-px pb-[2.2px] pl-0 pr-[30px] gap-3 text-sm mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-[5.4px] px-0 pb-0">
            <img
              className="w-[42px] h-[42px] relative overflow-hidden shrink-0"
              alt=""
              src={graduationsvg}
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[3.4px] min-w-[81px]">
            <div className="relative leading-[19px] font-semibold inline-block min-w-[65.7px] shrink-0">
              Reignite your Motivation Today
            </div>
            <div className="relative text-xs-8 leading-[19.2px] font-medium text-dimgray-100 shrink-0">
              <p className="m-0">{`Class 12th Students &`}</p>
              <p className="m-0">Pass-outs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  campuspng: PropTypes.string,
  timeShippng: PropTypes.string,
  graduationsvg: PropTypes.string,

  /** Style props */
  containerFlex: PropTypes.string,
  containerAlignSelf: PropTypes.string,
  heading3TextDecoration: PropTypes.string,
};

export default Container;
