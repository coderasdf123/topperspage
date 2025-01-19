import FrameComponent from "./FrameComponent";
import Link from "./Link";
import PropTypes from "prop-types";

const Section8 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-gray-600 flex flex-row items-start justify-start shrink-0 max-w-full z-[2] text-left text-10xl-3 text-white font-inter ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-col items-start justify-start py-20 px-[335px] box-border gap-[60px] max-w-full mq925:gap-[15px] mq925:pl-[83px] mq925:pr-[83px] mq925:pb-[34px] mq925:box-border mq1400:gap-[30px] mq1400:pt-[20.04px] mq1400:px-[167px] mq1400:pb-[52px] mq1400:box-border">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <FrameComponent
            jOINTHEUNION="OUR LOCATION"
            jOINTHEUNIONMinWidth="104.5px"
            ourProgrammes="Learn at One of India’s"
            ourProgrammesColor="#fff"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[14.4px] max-w-full mt-[-2px]">
            <div className="w-[330.4px] h-[65.6px] relative max-w-full">
              <img
                className="absolute top-[24.6px] left-[0px] w-[330.2px] h-[41px] z-[1]"
                loading="lazy"
                alt=""
                src="/image-11.svg"
              />
              <b className="absolute top-[0px] left-[0px] leading-[39px] flex items-center w-[331.4px] h-[41px] z-[2] mq450:text-4xl mq450:leading-[31px]">
                Biggest Business Hubs
              </b>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1.5 pr-0 box-border max-w-full text-3xl">
              <div className="flex-1 flex flex-row items-end justify-start gap-[40.5px] max-w-full mq925:gap-5 mq1875:flex-wrap">
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.8px] box-border max-w-full">
                  <div className="flex flex-col items-start justify-start gap-[16.7px]">
                    <h2 className="m-0 relative text-inherit leading-[30.8px] font-bold font-inherit shrink-0 z-[1] mq450:text-lg mq450:leading-[25px]">
                      <p className="m-0">Thrive Amidst Fortune 500</p>
                      <p className="m-0">Companies at DLF CyberPark</p>
                    </h2>
                    <div className="relative text-smi leading-[20.8px] text-gray-200 shrink-0 z-[1]">
                      <p className="m-0">
                        Located in a vibrant business district with top
                      </p>
                      <p className="m-0">
                        recruiters such as BCG, EY, Gartner just an
                      </p>
                      <p className="m-0">
                        elevator ride away, Masters’ Union boasts of a
                      </p>
                      <p className="m-0">unique locale.</p>
                    </div>
                  </div>
                </div>
                <img
                  className="w-[500px] relative max-h-full overflow-hidden shrink-0 object-cover max-w-full z-[1]"
                  loading="lazy"
                  alt=""
                  src="/mubuildingpng@2x.png"
                />
                <div className="w-[340px] flex flex-col items-start justify-start max-w-full z-[1] text-lg">
                  <Link exploreCareers="Explore Careers" />
                  <Link
                    linkPadding="19px 0px 20px"
                    linkBorderTop="1px solid #3b3b3b"
                    exploreCareers="Know the Leadership Team"
                  />
                  <div className="self-stretch border-darkslategray-200 border-t-[1px] border-solid flex flex-row items-start justify-between pt-[19px] px-0 pb-5 gap-5 text-mid-9 mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[7.4px] px-0 pb-0">
                      <div className="relative leading-[25.2px] font-medium">
                        In the News
                      </div>
                    </div>
                    <img
                      className="h-10 w-10 relative rounded-xl overflow-hidden shrink-0"
                      alt=""
                      src="/container-18.svg"
                    />
                  </div>
                  <Link
                    linkPadding="19px 0px 20px"
                    linkBorderTop="1px solid #3b3b3b"
                    exploreCareers="Glimpse of Student Life"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-6 max-w-full text-base mq1875:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start gap-5 min-w-[473px] max-w-full mq1400:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-5 max-w-full mq925:flex-wrap">
              <div className="h-[290px] rounded-2xl border-darkslategray-200 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-end pt-[238px] px-0 pb-6 relative gap-[169px] min-w-[330px] max-w-full z-[1] mq450:gap-[84px] mq925:flex-1 mq925:pt-[20.04px] mq925:pb-5 mq925:box-border">
                <img
                  className="w-full h-full absolute !m-[0] top-[calc(50%_-_144px)] left-[calc(50%_-_164px)] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/profile1webwebp@2x.png"
                />
                <div className="flex flex-row items-start justify-start py-0 px-5">
                  <div className="flex flex-row items-start justify-start gap-[6.8px] shrink-0 mq925:flex-1">
                    <div className="relative leading-[22.4px] font-medium z-[1]">
                      Explore Student Projects
                    </div>
                    <img
                      className="h-6 w-6 relative z-[1]"
                      alt=""
                      src="/svg-22.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch [background:linear-gradient(225.4deg,_#39b6d8,_#f7d344_50%,_#e38330)] flex flex-row items-start justify-start pt-[4.9px] px-5 pb-[94.1px] relative shrink-0">
                  <div className="h-[45px] flex-1 relative border-goldenrod border-b-[1px] border-solid box-border" />
                  <div className="h-[76.8px] w-72 relative hidden z-[1]" />
                  <input
                    className="!m-[0] h-6 w-6 absolute bottom-[-49.4px] left-[119.3px]"
                    type="checkbox"
                  />
                </div>
              </div>
              <div className="h-[290px] flex-1 rounded-2xl border-darkslategray-200 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-end pt-[238px] px-0 pb-6 relative gap-[169px] min-w-[245px] max-w-full z-[1] mq450:gap-[84px] mq925:pt-[20.04px] mq925:pb-5 mq925:box-border">
                <img
                  className="w-full h-full absolute !m-[0] top-[calc(50%_-_144px)] left-[calc(50%_-_187.5px)] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/profile2webwebp@2x.png"
                />
                <div className="flex flex-row items-start justify-start py-0 px-5">
                  <div className="flex flex-row items-start justify-start gap-[6.8px] shrink-0 mq925:flex-1">
                    <div className="relative leading-[22.4px] font-medium inline-block min-w-[105.9px] shrink-0 z-[1]">{`Clubs & more`}</div>
                    <img
                      className="h-6 w-6 relative shrink-0 z-[1]"
                      alt=""
                      src="/svg-23.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch h-36 [background:linear-gradient(229.22deg,_#39b6d8,_#f7d344_50%,_#e38330)] flex flex-col items-start justify-start pt-[4.9px] px-5 pb-[5.3px] box-border relative gap-3 shrink-0">
                  <div className="self-stretch h-[45px] relative border-goldenrod border-b-[1px] border-solid box-border" />
                  <div className="self-stretch flex-1 relative" />
                  <img
                    className="w-6 h-6 absolute !m-[0] right-[146.3px] bottom-[-49.4px]"
                    alt=""
                    src="/link--svg-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch h-[295.2px] rounded-2xl border-darkslategray-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-end pt-[244px] px-0 pb-6 relative gap-[171.6px] max-w-full z-[1] mq450:gap-[43px] mq925:gap-[86px] mq925:pt-[20.04px] mq925:pb-5 mq925:box-border">
              <img
                className="w-full h-full absolute !m-[0] top-[calc(50%_-_146.6px)] left-[calc(50%_-_362.5px)] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/homeresource2webp@2x.png"
              />
              <div className="flex flex-row items-start justify-start py-0 px-5">
                <div className="flex flex-row items-start justify-start gap-[6.8px] shrink-0">
                  <div className="relative leading-[22.4px] font-medium z-[1]">
                    Dive into Entrepreneurship
                  </div>
                  <img
                    className="h-6 w-6 relative z-[1]"
                    alt=""
                    src="/svg-24.svg"
                  />
                </div>
              </div>
              <div className="self-stretch h-[146.6px] [background:linear-gradient(245.58deg,_#39b6d8,_#f7d344_50%,_#e38330)] flex flex-row items-start justify-start pt-[31.7px] px-5 pb-8 box-border relative shrink-0 max-w-full">
                <div className="h-[45px] flex-1 relative border-goldenrod border-b-[1px] border-solid box-border max-w-full" />
                <div className="h-[25.6px] w-[685px] relative hidden max-w-full z-[1]" />
                <input
                  className="!m-[0] h-6 w-6 absolute bottom-[-22.5px] left-[248.9px]"
                  type="checkbox"
                />
              </div>
            </div>
          </div>
          <div className="rounded-xl border-darkslategray-200 border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start pt-[22px] px-6 pb-[53px] gap-5 min-w-[499px] max-w-full z-[1] text-xl mq925:pt-[20.04px] mq925:pb-[34px] mq925:box-border mq1400:min-w-full mq1875:flex-1">
            <div className="flex flex-row items-end justify-start gap-[9.9px] max-w-full">
              <h2 className="m-0 relative text-inherit leading-[26px] font-semibold font-inherit mq450:text-base mq450:leading-[21px]">
                Experience a Virtual Campus Tour
              </h2>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
                <img className="w-6 h-6 relative" alt="" src="/svg-25.svg" />
              </div>
            </div>
            <div className="self-stretch h-[480px] bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full text-center text-3xs text-whitesmoke-300 font-ibm-plex-sans">
              <div className="self-stretch flex-1 bg-gray-400 overflow-hidden flex flex-row items-start justify-start relative max-w-full">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/image-12@2x.png"
                />
                <div className="self-stretch flex-1 overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-2 box-border relative gap-[245px] max-w-full z-[1] mq450:gap-[122px]">
                  <div className="self-stretch flex-1 relative z-[2]" />
                  <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[1]" />
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[29px] pr-[23px] box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq925:flex-wrap">
                      <div className="flex flex-row items-start justify-start gap-[18.4px]">
                        <img
                          className="h-[22px] w-[22.6px] relative overflow-hidden shrink-0"
                          alt=""
                          src="/button--explore-3d-space.svg"
                        />
                        <img
                          className="h-[22px] w-[20.5px] relative overflow-hidden shrink-0"
                          alt=""
                          src="/button--view-floor-plan.svg"
                        />
                      </div>
                      <div className="w-[151px] flex flex-row items-end justify-start gap-[5.6px]">
                        <a className="[text-decoration:none] relative tracking-[0.6px] leading-[16px] font-bold text-[inherit] inline-block [text-shadow:0px_0px_2px_rgba(0,_0,_0,_0.75)] min-w-[26px]">
                          Help
                        </a>
                        <b className="relative tracking-[0.2px] leading-[16px] font-roboto text-white text-left">
                          |
                        </b>
                        <div className="flex-1 flex flex-row items-start justify-start gap-[5.6px] mq450:flex-wrap">
                          <div className="flex flex-col items-start justify-start gap-[9px]">
                            <div className="flex flex-row items-start justify-start py-0 pl-[3px] pr-1.5">
                              <img
                                className="h-[22px] w-[22.6px] relative overflow-hidden shrink-0"
                                alt=""
                                src="/button-dialog--share-this-space.svg"
                              />
                            </div>
                            <b className="w-[33.2px] relative tracking-[0.6px] leading-[16px] flex items-center justify-center [text-shadow:0px_0px_2px_rgba(0,_0,_0,_0.75)]">
                              Terms
                            </b>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start gap-[9px]">
                            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-1.5">
                              <div className="flex-1 flex flex-row items-start justify-start gap-[17.4px]">
                                <img
                                  className="h-[22px] w-[22.6px] relative overflow-hidden shrink-0"
                                  alt=""
                                  src="/button-dialog--view-in-vr.svg"
                                />
                                <img
                                  className="h-[22px] w-[22.6px] relative overflow-hidden shrink-0"
                                  alt=""
                                  src="/button--view-fullscreen.svg"
                                />
                              </div>
                            </div>
                            <img
                              className="self-stretch h-4 relative max-w-full overflow-hidden shrink-0"
                              alt=""
                              src="/link--image.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-full !m-[0] absolute top-[0px] right-[0px] bottom-[0px] left-[0px] overflow-hidden flex flex-row items-start justify-start max-w-full z-[3]">
                    <div className="self-stretch flex-1 relative max-w-full z-[7]" />
                  </div>
                  <div className="w-full h-[416px] absolute !m-[0] top-[0px] right-[0px] left-[0px] z-[4]" />
                  <div className="w-[409px] !m-[0] absolute top-[20px] left-[calc(50%_-_204.5px)] flex flex-row items-start justify-start gap-2 max-w-full text-xs font-roboto mq925:flex-wrap">
                    <img
                      className="h-12 w-12 relative rounded-29xl z-[5]"
                      loading="lazy"
                      alt=""
                      src="/button--search.svg"
                    />
                    <div className="flex-1 flex flex-row items-start justify-start min-w-[229px] max-w-full [row-gap:20px] mq925:flex-wrap">
                      <div className="h-[55px] flex-1 overflow-hidden flex flex-col items-start justify-start pt-[19px] px-0 pb-[11px] box-border gap-[2.9px] min-w-[214px] max-w-full z-[5]">
                        <div className="mt-[-21.9px] overflow-hidden flex flex-row items-start justify-start pt-0.5 px-0 pb-[3px] shrink-0">
                          <div className="flex-1 relative tracking-[0.2px] leading-[19px] [text-shadow:0px_1px_2px_rgba(0,_0,_0,_0.4)] shrink-0">
                            Presented by Starts360.com
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[3px] text-base text-white">
                          <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                            <img
                              className="w-[16.6px] h-4 relative overflow-hidden shrink-0"
                              alt=""
                              src="/icon.svg"
                            />
                          </div>
                          <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-[3px] px-0">
                            <div className="flex-1 relative tracking-[0.2px] leading-[25px] [text-shadow:0px_1px_2px_rgba(0,_0,_0,_0.4)] shrink-0">
                              NNIIT
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-2 w-6 relative z-[6]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Section8.propTypes = {
  className: PropTypes.string,
};

export default Section8;
