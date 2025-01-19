import PropTypes from "prop-types";

const Section4 = ({ className = "" }) => {
  return (
    <div
      className={`
        // Base styles (mobile-first)
        self-stretch flex flex-col items-start justify-start relative shrink-0 z-[2] 
        text-left text-xs text-black font-inter
        bg-[url('/section2@3x.png')] bg-cover bg-no-repeat bg-[top]
        pt-12 px-4 pb-8 gap-4

        // Medium screens
        md:pt-16 md:px-8 md:pb-12

        // Large screens
        lg:pt-18 lg:px-12 lg:pb-16

        // XL screens - exact styling as provided
        xl:pt-20 xl:px-[335px] xl:pb-[84.1px] xl:-ml-[140px] xl:gap-[29px] xl:max-w-full
        ${className}
      `}
    >
      <div className="self-stretch flex flex-col items-start justify-start xl:mr-[10px] gap-2 text-darkgray-100">
        <div className="flex flex-row items-center justify-start gap-2 xl:ml-[85px] header-container">
          <img
            className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
            alt=""
            src="/starsvg.svg"
          />
          <div className="relative tracking-[1px] uppercase font-semibold">
            PEER INSIGHTS
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-between xl:ml-[90px] xl:gap-5 text-10xl-9 text-black mq925:flex-wrap">
          <b className="relative leading-[39px] section-title">
            <p className="m-0">Current IIT-JEE Aspirants</p>
            <p className="m-0">Exam Season 2025</p>
          </b>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px text-center text-sm text-gray-600 xl:mr-[75px] view-more-button">
            <div className="rounded-full bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 p-0.5">
              <div className="flex-1 rounded-35xl bg-white overflow-hidden flex flex-row items-start justify-start pt-3 px-5 pb-2.5 gap-[7.8px] z-[1]">
                <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[127px]">
                  <div className="self-stretch relative leading-[24px] font-semibold inline-block min-w-[119px]">
                    View More Insights
                  </div>
                </div>
                <img className="h-6 w-5 relative" alt="" src="/svg-20.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image rows with consistent XL styling */}
      <div className="self-stretch flex flex-row items-start justify-center gap-4 xl:gap-4 image-rows">
        {[
          { img: "gautampng@2x.png", name: "Rajesh Kumar", location: "IIT-JEE Aspirant, Kota" },
          { img: "radhikapng@2x.png", name: "Priya Sharma", location: "IIT-JEE Aspirant, Delhi" },
          { img: "tusharpng@2x.png", name: "Amit Patel", location: "IIT-JEE Aspirant, Mumbai" },
          { img: "apurvpng@2x.png", name: "Sneha Gupta", location: "IIT-JEE Aspirant, Bangalore" }
        ].map((student, index) => (
          <div key={index} className="flex flex-col items-center gap-2 image-card">
            <img
              className="h-28 w-[232px] relative rounded-lg overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src={`/${student.img}`}
            />
            <div className="text-center">
              <div className="font-medium student-name">{student.name}</div>
              <div className="text-gray-600 student-location">{student.location}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="self-stretch flex flex-row items-start justify-center gap-4 xl:gap-4 image-rows">
        {[
          { img: "srijanpng@2x.png", name: "Vikram Singh", location: "IIT-JEE Aspirant, Hyderabad" },
          { img: "gautampng@2x.png", name: "Ananya Reddy", location: "IIT-JEE Aspirant, Chennai" },
          { img: "radhikapng@2x.png", name: "Rahul Verma", location: "IIT-JEE Aspirant, Pune" },
          { img: "vanyapng@2x.png", name: "Meera Joshi", location: "IIT-JEE Aspirant, Ahmedabad" }
        ].map((student, index) => (
          <div key={index} className="flex flex-col items-center gap-2 image-card">
            <img
              className="h-28 w-[232px] relative rounded-lg overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src={`/${student.img}`}
            />
            <div className="text-center">
              <div className="font-medium student-name">{student.name}</div>
              <div className="text-gray-600 student-location">{student.location}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Section4.propTypes = {
  className: PropTypes.string,
};

export default Section4;