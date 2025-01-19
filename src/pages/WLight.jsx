import { Section, Section5 } from "../components/Hello";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import MasterCarousel from "../components/MasterCarousel";
import ExpertListTwo from "../components/ExpertListTwo";
//import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section1 from "../components/Section1";
import Section4 from "../components/Section4";
//import Section6 from "../components/Section6";
import Section7 from "../components/Section7";
//import Section9 from "../components/Section9";
import Freq from "../components/Freq";
import Unlock from "../components/Unlock";
import HorizontalBorder from "../components/HorizontalBorder";
import ContactInfo from "../components/ContactInfo";
import InspirationSection from "../components/InspirationSection";
import Timeline from "../components/Timeline";
import StressTackler from "../components/StressTackler";
import Transform from "../components/Transform";
import Community from "../components/Community";
import Toolbox from "../components/Toolbox";
import LifestyleCourse from "../components/Lifestyle";
import Crackiit from "../components/crackiit";
import WeeklyScheduleSection from "../components/WeeklyScheduleSection";
import StratsSection from "../components/StratsSection";

//import FAQs from "../components/FAQs";

//import ToppersToolBox from "../components/ToppersToolBox.jsx/ToppersToolBox";
//import PgpTbmPage from "../components/pgpTbm/PgpTbmPage";


const WLight = () => {
  return (
    <div className="w-full relative bg-white overflow-y-auto flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Section />
      <Section5 />
      <Timeline />
      <FrameComponent1 />
      <Unlock />
      <Transform />
      <InspirationSection />
      <LifestyleCourse />
      <Section3 />
      <Section7 />
      <MasterCarousel />
      <ExpertListTwo />
      <StressTackler />
      <br/>
      <br/>
     
      <br/>
      <Section1 />
      {/*<section className="self-stretch bg-gray-600 flex flex-col items-start justify-start pt-[78.9px] px-[335px] pb-[82.2px] box-border gap-[4.4px] max-w-full text-left text-xs text-darkgray-100 font-inter mq925:pt-[51px] mq925:px-[83px] mq925:pb-[53px] mq925:box-border mq1400:pl-[167px] mq1400:pr-[167px] mq1400:box-border">
        <div className="self-stretch flex flex-row items-start justify-between gap-5 mq925:flex-wrap mq925:justify-center">
          <div className="w-[263.2px] flex flex-col items-start justify-start gap-1.5">
            <div className="flex flex-row items-start justify-start gap-2.5">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/starsvg.svg"
                />
              </div>
              <div className="relative tracking-[1px] leading-[16px] uppercase font-semibold">
                INDUSTRY EXPERTS
              </div>
            </div>
            <div className="self-stretch h-[65.6px] relative text-11xl text-white">
              <h1 className="m-0 absolute top-[0px] left-[0px] text-inherit leading-[39px] font-bold font-inherit flex items-center w-[144.3px] h-[41px] mq450:text-lg mq450:leading-[23px] mq925:text-5xl mq925:leading-[31px]">{`Meet The `}</h1>
              <div className="absolute h-full top-[0px] bottom-[0px] left-[143.1px] w-[120.1px] text-10xl-9">
                <img
                  className="absolute top-[24.6px] left-[0px] w-[119.9px] h-[41px]"
                  alt=""
                  src="/image-6.svg"
                />
                <b className="absolute top-[0px] left-[0px] leading-[39px] flex items-center w-[121.1px] h-[41px] min-w-[121.1px] z-[1] mq450:text-5xl mq450:leading-[31px]">
                  Toppers
                </b>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0 text-center text-sm text-white">
  <div className="self-stretch flex flex-row items-start justify-start p-px">
    {/* Gradient Border */}
    {/*<div className="rounded-full bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 p-0.5">
      <div className="flex-1 rounded-35xl bg-gray-600 overflow-hidden flex flex-row items-start justify-start pt-3 px-5 pb-2.5 gap-[7.8px] z-[1]">
        <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <div className="self-stretch relative leading-[24px] font-semibold">
            View +50K more
          </div>
        </div>
        <img className="h-6 w-5 relative" alt="" src="/svg-17.svg" />
      </div>
    </div>
  </div>
</div>

        </div>*/}

        {/*<PgpTbmPage />*/}
      {/*</section>
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        {/*<Section2 />*/}
        {/*<ToppersToolBox />*/}
        
      {/*</section>
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">*/}
        <Section4 />
        <FrameComponent2 />
        <Toolbox />
        <StratsSection />
        {/*<Section6 />*/}
       {/*</div> {/*<Section9 />*/}
      {/*</section>*/}
      <br/>
      <br/>
      {/*FAQs />*/}

      <WeeklyScheduleSection />
      <Freq />
      <Crackiit />
      <Community />
  
      <footer
  className="self-stretch h-[503px] mt-[100px] shrink-0 flex flex-col items-start justify-start relative gap-[69.5px] bg-[url('/public/footer@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq925:gap-[17px] mq1400:gap-[35px]"
>
  <HorizontalBorder />
  <ContactInfo />
  <img
    className="w-12 h-12 absolute !m-[0] right-[20px] bottom-[20px] z-[1]"
    loading="lazy"
    alt=""
    src="/container-22.svg"
  />
</footer>

<style jsx>
  {`
    @media (max-width: 768px) {
      footer {
        height: auto;
        gap: 20px;
        padding: 20px; /* Add padding for spacing */
        background-size: cover;
      }
      footer img {
        width: 48px; /* Adjust icon size for smaller screens */
        height: 48px;
        right: 20px; /* Adjust positioning */
        bottom: 10px;
      }
    }
  `}
</style>

    </div>
  );
};

export default WLight;
