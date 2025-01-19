import { useMemo } from "react";
import PropTypes from "prop-types";

const Group1 = ({
  className = "",
  container,
  workingsTitlesWidth,
  aDeepDiveIntoTheWorkingsOf,
  aDeepDiveAlignSelf,
  company,
  companyTextDecoration,
  companyMinWidth,
  physicsWallah,
  physicsWallahMinWidth,
}) => {
  const workingsTitlesStyle = useMemo(() => {
    return {
      width: workingsTitlesWidth,
    };
  }, [workingsTitlesWidth]);

  const aDeepDiveStyle = useMemo(() => {
    return {
      alignSelf: aDeepDiveAlignSelf,
    };
  }, [aDeepDiveAlignSelf]);

  const companyStyle = useMemo(() => {
    return {
      textDecoration: companyTextDecoration,
      minWidth: companyMinWidth,
    };
  }, [companyTextDecoration, companyMinWidth]);

  const physicsWallahStyle = useMemo(() => {
    return {
      minWidth: physicsWallahMinWidth,
    };
  }, [physicsWallahMinWidth]);

  return (
    <div
      className={`bg-white flex flex-col items-start justify-start pt-2.5 px-2.5 pb-[14.4px] box-border gap-[15.9px] shrink-0 max-w-full text-left text-sm text-gray-600 font-inter ${className}`}
    >
      <img
        className="self-stretch h-[221.2px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={container}
      />
      <div
        className="flex flex-col items-start justify-start gap-[2.4px] max-w-full"
        style={workingsTitlesStyle}
      >
        <div className="relative leading-[19px]" style={aDeepDiveStyle}>
          {aDeepDiveIntoTheWorkingsOf}
        </div>
        <div className="flex flex-row items-start justify-start [row-gap:20px] mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <a
              className="[text-decoration:none] relative leading-[22.4px] text-[inherit] inline-block min-w-[78.9px] shrink-0"
              style={companyStyle}
            >
              {company}
            </a>
          </div>
          <div className="flex flex-col items-start justify-start py-0 px-0 text-base">
            <b
              className="ml-[-0.2px] relative inline-block min-w-[115.4px] shrink-0"
              style={physicsWallahStyle}
            >
              {physicsWallah}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

Group1.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
  aDeepDiveIntoTheWorkingsOf: PropTypes.string,
  company: PropTypes.string,
  physicsWallah: PropTypes.string,

  /** Style props */
  workingsTitlesWidth: PropTypes.string,
  aDeepDiveAlignSelf: PropTypes.string,
  companyTextDecoration: PropTypes.string,
  companyMinWidth: PropTypes.string,
  physicsWallahMinWidth: PropTypes.string,
};

export default Group1;
