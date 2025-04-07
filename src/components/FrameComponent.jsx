import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent = ({
  className = "",
  jOINTHEUNION,
  jOINTHEUNIONMinWidth,
  ourProgrammes,
  ourProgrammesColor,
}) => {
  const jOINTHEUNIONStyle = useMemo(() => {
    return {
      minWidth: jOINTHEUNIONMinWidth,
    };
  }, [jOINTHEUNIONMinWidth]);

  const ourProgrammesStyle = useMemo(() => {
    return {
      color: ourProgrammesColor,
    };
  }, [ourProgrammesColor]);

  return (
    <div
      className={`flex flex-col items-start justify-start gap-2 text-left text-xs text-darkgray-100 font-sf-pro-bold ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-2.5">
        <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
          <img
            className="w-3.5 h-3.5 relative overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/starsvg.svg"
          />
        </div>
        <div
          className="relative tracking-[1px] uppercase font-sf-pro-medium inline-block min-w-[114px] z-[1]"
          style={jOINTHEUNIONStyle}
        >
          {jOINTHEUNION}
        </div>
      </div>
      <h1
        className="m-0 relative text-4xl leading-[39px] font-sf-pro-bold text-black z-[2] mq450:text-lg mq450:leading-[23px] mq925:text-5xl mq925:leading-[31px]"
        style={ourProgrammesStyle}
      >
        {ourProgrammes}
      </h1>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  jOINTHEUNION: PropTypes.string,
  ourProgrammes: PropTypes.string,

  /** Style props */
  jOINTHEUNIONMinWidth: PropTypes.string,
  ourProgrammesColor: PropTypes.string,
};

export default FrameComponent;
