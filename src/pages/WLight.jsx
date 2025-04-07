import { useState, useEffect } from 'react';
import Section from "../components/HeroSection";
import Section5 from "../components/Section5";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import MasterCarousel from "../components/MasterCarousel";
import ExpertListTwo from "../components/ExpertListTwo";
import Section3 from "../components/Section3";
import Section1 from "../components/Section1";
import Section4 from "../components/Section4";
import Section7 from "../components/Section7";
import Freq from "../components/Freq";
import Unlock from "../components/Unlock";
import HorizontalBorder from "../components/HorizontalBorder";
import ContactInfo from "../components/ContactInfo";
import InspirationSection from "../components/InspirationSection";
import Timeline from "../components/Timeline";
import StressTackler from "../components/StressTackler";
import Transform from "../components/Transform";
import Community from "../components/Community";
//import LifestyleCourse from "../components/Lifestyle";
import Crackiit from "../components/Crackiit";
//import WeeklyScheduleSection from "../components/WeeklyScheduleSection";
//import StratsSection from "../components/StratsSection";
import NewOne from '../components/NewOne';
import Carousel from '../components/Carousel';

import StickyNavigator from '../components/StickyNavigator';
import SkillsAssessmentForm from '../components/SkillsAssessmentForm';
import StickyNavbar from '../components/StickyNavbar';
import { Phone } from 'lucide-react';
import VideoPlayer from '../components/VideoPlayer';
import OtpModal from '../components/OtpModal';
import FloatingContactButtons from '../components/FloatingContactButtons';
import ShortVideosCarousel from '../components/ShortVideosCarousel';


const WLight = () => {
  const [selectedSections, setSelectedSections] = useState([]);

  // Updated section map with IDs matching the navigator
  const sectionMap = {
    '1': <div id="section-1" key="section-1" className="w-full"><ShortVideosCarousel /></div>,
    '2': <div id="section-2" key="section-2" className="w-full"><InspirationSection /></div>,
    '3': <div id="section-3" key="section-3" className="w-full"><Section4/></div>,
    '4': <div id="section-4" key="section-4" className="w-full"><NewOne  /></div>,
    '5': <div id="section-5" key="section-5" className="w-full"><Transform /></div>,
    '6': <div id="section-6" key="section-6" className="w-full"><StressTackler /></div>,
    '7': <div id="section-7" key="section-7" className="w-full"><Carousel /></div>,
    //'8': <div id="section-8" key="section-8" className="w-full"><Section3 /></div>,
    '8': <div id="section-8" key="section-8" className="w-full"><Section7 /></div>,
    '9': (
      <div id="section-9" key="section-9" className="w-full">
        <MasterCarousel />
        <ExpertListTwo />
      </div>
    ),
  
    '10': <div id="section-10" key="section-10" className="w-full"><FrameComponent2 /></div>,
    '11': <div id="section-11" key="section-11" className="w-full"><Section1 /></div>,
    '12': <div id="section-12" key="section-12" className="w-full"><Unlock /></div>,
    '13': <div id="section-13" key="section-13" className="w-full"><Timeline /></div>,
    //'15': <div id="section-15" key="section-15" className="w-full"><FrameComponent1 /></div>,
    '14': <div id="section-14" key="section-14" className="w-full"><SkillsAssessmentForm /></div>,  // Add this line

  };

  const alwaysVisibleSections = [
    <Crackiit key="crackiit" />,
    <Freq key="freq" />,
    <Community key="community" />
  ];

  const handleSelectionChange = (selectedOptions) => {
    setSelectedSections(selectedOptions);
  };

  const renderSections = () => {
    const sectionsToRender = selectedSections.length === 0
      ? Object.keys(sectionMap)
      : selectedSections;

    const orderedSections = sectionsToRender.map(id => sectionMap[id]);

    return [
      <Section5 key="section5" />,
      ...orderedSections,
      ...alwaysVisibleSections
    ];
  };

  return (
    <div className="relative overflow-y-auto flex flex-col items-start justify-start leading-[normal] tracking-[normal] max-w-[100%] overflow-x-hidden">
      {/* Hero section */}
      <StickyNavbar />
      <FloatingContactButtons />
      <VideoPlayer />
      <OtpModal />
      <Section onSelectionChange={handleSelectionChange} />
      
      {/* Add the sticky navigator */}
      {/*<Phone />*/}
      {/*<StickyNavigator />*/}

      {/* Main content without padding */}
      <div className="w-full">
        {renderSections()}
      </div>

      <footer className="self-stretch h-[1000px] sm:h-[503px] mt-[100px] shrink-0 flex flex-col items-start justify-start relative gap-[69.5px] bg-[url('/public/footer@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq925:gap-[17px] mq1400:gap-[35px]">
        <HorizontalBorder />
        <ContactInfo />
        <img
          className="w-12 h-12 absolute right-[20px] bottom-[20px] z-[1]"
          loading="lazy"
          alt=""
          src="/container-22.svg"
        />
      </footer>

      <style jsx>{`
        @media (max-width: 768px) {
          footer {
            height: auto;
            gap: 0px;
            padding: 20px;
            background-size: cover;
          }
          footer img {
            width: 48px;
            height: 48px;
            right: 20px;
            bottom: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default WLight;