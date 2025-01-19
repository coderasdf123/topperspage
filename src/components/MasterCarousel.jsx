const MasterCarousel = () => {
  return (
    <div
      className="flex flex-col items-start justify-start gap-[4.4px] max-w-5xl mt-[8px] py-[50px] -ml-[140px] text-left text-xs text-white font-inter bg-black"
      style={{ paddingLeft: '25%', paddingRight: '7.5cm' }}
    >
     {/*} <div className="!m-[0] absolute left-[446.8px] flex flex-row items-start justify-start text-11xl">
        <img
          className="h-[30.8px] w-[206.6px] absolute !m-[0] bottom-[-10.3px] left-[0px] z-[3]"
          alt=""
          src="/image-6.svg"
        />
        <h1 className="m-0 relative text-inherit leading-[39px] font-bold font-inherit z-[1] mq450:text-lg mq450:leading-[23px] mq925:text-5xl mq925:leading-[31px]">
          Advice
        </h1>
      </div>*/}
      <div className="self-stretch flex flex-col items-start justify-start gap-2 text-white">
        <div className="flex flex-row items-start justify-start gap-2.5">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
              alt=""
              src="/starsvg.svg"
            />
          </div>
          <div className="relative tracking-[1px] uppercase font-semibold">
            Success Stories
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-between gap-5 text-10xl-9 text-white mq925:flex-wrap">
          <b className="relative leading-[39px] mq450:text-5xl mq450:leading-[31px]">
            <p className="m-0">Get your Best</p>
            <p className="m-0">{`Career Advice`}</p>
          </b>
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px text-center text-sm text-white">
            <div className="self-stretch flex flex-row items-start justify-start p-px">
              <div className="h-[50px] w-[187.8px] relative rounded-16xl [background:linear-gradient(93.24deg,_#39b6d8,_#f7d344_50%,_#e38330)] hidden" />
                <div className="flex-1 rounded-35xl bg-black overflow-hidden flex flex-row items-start justify-start pt-3 px-5 pb-2.5 gap-[7.8px] z-[1]">
                  <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="rounded-full bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 p-0.5"> 
                  <div className="flex-1 rounded-35xl bg-black overflow-hidden flex flex-row items-start justify-start pt-3 px-5 pb-2.5 gap-[7.8px] z-[1] mq925:flex-wrap">
                  <div className="self-stretch relative leading-[24px] font-semibold inline-block min-w-[119px]">
                    View Trending Insights
                  </div>
                  </div>
                  </div>
                </div>
                {/*<img className="h-6 w-5 relative" alt="" src="/svg-20.svg" />*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-5">
        <img
          className="h-28 flex-1 relative rounded-lg max-w-[300px] overflow-hidden object-cover min-w-[112px]"
          alt=""
          src="/container@2x.png"
        />
        <img
          className="h-28 flex-1 relative rounded-lg max-w-[300px] overflow-hidden object-cover min-w-[112px]"
          alt=""
          src="/container-1@2x.png"
        />
        <img
          className="h-28 flex-1 relative rounded-lg max-w-[300px] overflow-hidden object-cover min-w-[112px]"
          alt=""
          src="/container-2@2x.png"
        />
        <img
          className="h-28 flex-1 relative rounded-lg max-w-[300px] overflow-hidden object-cover min-w-[112px]"
          alt=""
          src="/container-3@2x.png"
        />
      </div>

      <div className="w-full flex flex-col items-start justify-start gap-px max-w-full">
        <div className="w-full flex flex-row items-start justify-center gap-[76.4px] max-w-full mq450:gap-[19px] mq925:gap-[38px] mq1400:flex-wrap">
          <div className="flex-1 relative leading-[16.8px] font-medium inline-block min-w-[115px]">
            Manoj Kohli
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border min-w-[115px]">
            <div className="relative leading-[16.8px] font-medium inline-block min-w-[61.6px]">
              Dr Tathagata Dasgupta
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border min-w-[115px]">
            <div className="relative leading-[16.8px] font-medium inline-block min-w-[98.4px]">
              Dr Edward W Rogers
            </div>
          </div>
          <div className="flex-1 relative leading-[16.8px] font-medium inline-block min-w-[98.3px]">
            Mr Elkana Ezekiel
          </div>
        </div>
        
        <div className="w-full flex flex-row items-start justify-center gap-[75.7px] text-black mq450:gap-[19px] mq925:gap-[38px] mq1400:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border min-w-[115px]">
            <div className="relative leading-[19.2px]">
              <p className="m-0 font-medium">Former Country Head ,</p>
              <p className="m-0">
                <b>Softbank India</b>
              </p>
            </div>
          </div>
          <div className="flex-1 relative leading-[19.2px] inline-block min-w-[115px]">
            <p className="m-0 font-medium">{`Chief Data & Analytics Officer,`}</p>
            <p className="m-0">
              <b>{`Saatchi & Saatchi`}</b>
            </p>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border min-w-[115px]">
            <div className="relative leading-[19.2px]">
              <p className="m-0 font-medium">Former Chief Knowledge Officer,</p>
              <p className="m-0">
                <b>NASA</b>
              </p>
            </div>
          </div>
          <div className="flex-1 relative leading-[19.2px]">
            <p className="m-0 font-medium">Former CEO,</p>
            <p className="m-0">
              <b>Samsung Electronics</b>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-start justify-start gap-px max-w-full text-dimgray-100">
        {/*<div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-5">
          <div className="h-[7px] flex-1 relative border-darkslategray-300 border-t-[1px] border-solid box-border overflow-hidden min-w-[213px] max-w-[300px]" />
          <div className="h-[7px] flex-1 relative border-darkslategray-300 border-t-[1px] border-solid box-border overflow-hidden min-w-[213px] max-w-[300px]" />
          <div className="h-[7px] flex-1 relative border-darkslategray-300 border-t-[1px] border-solid box-border overflow-hidden min-w-[213px] max-w-[300px]" />
          <div className="h-[7px] flex-1 relative border-darkslategray-300 border-t-[1px] border-solid box-border overflow-hidden min-w-[213px] max-w-[300px]" />
        </div>*/}
        
        <div className="w-full flex flex-row items-start justify-between max-w-full gap-5 mq1400:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[32.9px] max-w-full mq450:gap-4 mq925:flex-wrap">
            <div className="relative leading-[16px]">
              
            </div>
            <div className="relative leading-[16px] inline-block min-w-[124.1px]">
             
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[29.9px] max-w-full mq925:flex-wrap">
            <div className="relative leading-[16px]">
             
            </div>
            <div className="relative leading-[16px]">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterCarousel;