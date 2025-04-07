import React, { useState, useRef, useEffect } from "react";
import { PlayCircle } from "lucide-react";
import LoginPage from "./LoginPage"; // Ensure this path is correct

const MasterCarousel = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const modalRef = useRef(null);

  const handleLogin = () => {
    console.log("Opening modal...");
    setShowSignupModal(true);
  };

  const handleCloseModal = () => {
    console.log("Closing modal...");
    setShowSignupModal(false);
  };

  useEffect(() => {
    console.log("Modal State Changed:", showSignupModal);

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        console.log("Clicked outside, closing modal...");
        handleCloseModal();
      }
    };

    if (showSignupModal) {
      setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 200);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSignupModal]);

  useEffect(() => {
    if (showSignupModal) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showSignupModal]);

  const toppers = [
    {
      name: "Manoj Kohli",
      role: "Fmr. Country Head",
      company: "SoftBank",
      topic: "Mapping the Future of Energy Sector",
      image: "/peer_1.jpeg",
    },
    {
      name: "Dr Tathagata Dasgupta",
      role: "Chief Data & Analytics Officer",
      company: "SAATCHI & SAATCHI",
      topic: "New-Age Supply Chains",
      image: "/peer_2.jpeg",
    },
    {
      name: "Dr Edward W Rogers",
      role: "Fmr. Chief Knowledge Officer",
      company: "NASA",
      topic: "Art of Managing Complexities",
      image: "/peer_3.jpeg",
    },
    {
      name: "Mr Elkana Ezekiel",
      role: "Fmr. CEO",
      company: "SAMSUNG",
      topic: "Building Marketing Strategies",
      image: "/peer_4.jpeg",
    },
  ];

  return (
    <div className="flex flex-col items-start justify-start gap-[4.4px] mt-[8px] py-10 text-left text-xs text-white font-sf-pro bg-black w-full sm:pl-[20%] sm:pr-[7.5cm] sm:max-w-4xl ">
      <div className="self-stretch flex flex-col items-start justify-start gap-2 text-white">
        <div className="flex flex-row items-start justify-start gap-0 sm:gap-2.5">
          <div className="flex flex-col items-start justify-start pt-px px-2 sm:px-0 pb-0">
            <img className="w-3.5 h-3.5 relative overflow-hidden shrink-0 top-[46px]" alt="" src="/starsvg.svg" />
          </div>
          <div className="relative tracking-[1px] uppercase font-sf-pro-medium relative top-[46px] right-[4px]">Success Stories</div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-between gap-5 text-10xl-9 font-sf-pro-bold text-white mq925:flex-wrap">
          <b className="relative leading-[30px] -top-[5px] px-4 text-3xl whitespace-nowrap">Meet the Toppers</b>

          {/* View Trending Insights Button */}
          <div className="flex justify-end pb-10">
            <button
              onClick={handleLogin}
              className="relative rounded-full bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 p-0.5"
            >
              <div className="rounded-3xl bg-black px-4 py-2">
                <span className="text-white text-xs font-semibold">View Trending Insights</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modal with LoginPage */}
      {showSignupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 w-full flex items-center justify-center  z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-2xl flex relative w-[90%] -translate-x-[10%] max-w-md"
          >
            {/* Close button */}
            {/*<button
              onClick={handleCloseModal}
              className="absolute top-4 -right-[97%] text-gray-400 hover:text-gray-600 text-2xl font-bold z-50"
            >
              ×
            </button>*/}

            {/* Render LoginPage */}
            <LoginPage />
          </div>
        </div>
      )}

      {/* Mobile layout */}
      <div className="w-full overflow-x-auto">
        <div className="sm:hidden whitespace-nowrap inline-flex flex-nowrap gap-4 px-2">
          {toppers.map((topper, index) => (
            <div key={index} className="inline-block w-[280px] bg-[#111111] rounded-xl overflow-hidden">
              <div className="relative">
                <img className="h-36 w-full object-cover rounded-t-xl" alt={topper.name} src={topper.image} />
                <button className="absolute bottom-3 right-3 bg-white/20 rounded-full p-1.5 backdrop-blur-sm">
                  <PlayCircle className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold mb-1">{topper.name}</h3>
                <p className="text-sm text-white mb-1">{topper.role}</p>
                <p className="text-xs text-white font-medium mb-2">{topper.company}</p>
                <p className="text-sm text-white">{topper.topic}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6 px-4 w-full">
        {toppers.map((topper, index) => (
          <div key={index} className="w-full bg-[#111111] rounded-xl overflow-hidden">
            <div className="relative">
              <img className="h-36 w-full object-cover rounded-t-xl" alt={topper.name} src={topper.image} />
              <button className="absolute bottom-3 right-3 bg-white/20 rounded-full p-1.5 backdrop-blur-sm">
                <PlayCircle className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-base font-semibold mb-1">{topper.name}</h3>
              <p className="text-sm text-white mb-1">{topper.role}</p>
              <p className="text-xs text-white font-medium mb-2">{topper.company}</p>
              <p className="text-sm text-white">{topper.topic}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasterCarousel;
