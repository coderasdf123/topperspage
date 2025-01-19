import { useMemo } from "react";
import PropTypes from "prop-types";

const Link = ({
  className = "",
  linkPadding,
  linkBorderTop,
  exploreCareers,
}) => {
  const linkStyle = useMemo(() => {
    return {
      padding: linkPadding,
      borderTop: linkBorderTop,
    };
  }, [linkPadding, linkBorderTop]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-5 gap-5 text-left text-lg text-white font-inter mq450:flex-wrap ${className}`}
      style={linkStyle}
    >
      <div className="flex flex-col items-start justify-start pt-[7.4px] px-0 pb-0">
        <h3 className="m-0 relative text-inherit leading-[25.2px] font-medium font-inherit">
          {exploreCareers}
        </h3>
      </div>
      <img
        className="h-10 w-10 relative rounded-xl overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/container-18.svg"
      />
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  exploreCareers: PropTypes.string,

  /** Style props */
  linkPadding: PropTypes.string,
  linkBorderTop: PropTypes.string,
};

export default Link;
