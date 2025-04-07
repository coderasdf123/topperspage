import PropTypes from "prop-types";

const HorizontalBorder = ({ className = "" }) => {
  return (
    <div className="w-full flex justify-center font-inter">
      <div className="max-w-5xl w-full">
        <div
          className={`border-t border-gray-300 py-4 flex flex-wrap gap-4 text-white ${className}`}
        >
          {/* Logo Section */}
          <div className="w-[200px] flex-shrink-0">
            <img
              className="w-20 h-auto object-contain"
              loading="lazy"
              alt="Company Logo"
              src="/logo.png"
            />
          </div>

          {/* First Column */}
          <div className="flex-1 min-w-[200px]">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-sf-pro-medium">About NNIIT</h3>
              <h3 className="text-lg font-sf-pro-medium">Careers</h3>
            </div>
          </div>

          {/* Second Column */}
          <div className="flex-1 min-w-[200px]">
            <div className="flex flex-col gap-4 font-sf-pro-regular">
              <h3 className="text-lg font-sf-pro-medium">Academic Programmes</h3>
              <a className="text-sm text-darkgray-100 hover:text-white">
                IIT-JEE Preparation
              </a>
              <div className="text-sm text-darkgray-100">
                Foundation Courses
              </div>
              <div className="text-sm text-darkgray-100">
                Olympiad
              </div>
            </div>
          </div>

          {/* Third Column - moves to next row on small screens */}
          <div className="sm:flex-1 w-full sm:w-auto min-w-[200px]">
            <div className="flex flex-col font-sf-pro-regular gap-4">
              <h3 className="text-lg font-semibold">Other Links</h3>
              <div className="text-sm text-darkgray-100">
                Student Resources
              </div>
              <a className="text-sm text-darkgray-100 hover:text-white">
                Workshops & Seminars
              </a>
              <div className="text-sm text-darkgray-100">
                Career Support
              </div>
              <a className="text-sm text-darkgray-100 hover:text-white">
                Study Groups
              </a>
              <a className="text-sm text-darkgray-100 hover:text-white">
                Blog
              </a>
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