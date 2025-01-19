import * as React from "react";

export default function Header() {
  return (
    <header className="flex flex-col items-center px-16 pt-32 pb-14 w-full text-5xl text-white bg-neutral-950 max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between items-start max-w-full w-[1266px]">
        <div className="flex flex-col items-start self-end mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-1.5 font-extrabold leading-tight">
            <div className="grow">PGP</div>
            <div> in</div>
          </div>
          <h1 className="self-stretch mt-6 font-extrabold leading-[55px] max-md:max-w-full">
            Technology and
            <br />
            Business Management
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-neutral-400">
            16-month full-time postgraduate programme (MBA equivalent)
          </p>
          <div className="flex gap-9 mt-11 text-sm text-center max-md:mt-10">
            <button className="flex flex-col justify-center p-px font-semibold leading-loose rounded-[35px]">
              <div className="flex overflow-hidden gap-2 px-5 py-4 bg-neutral-950 rounded-[54px]">
                <span className="grow my-auto">Apply Now</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3669543ab0e8e0e70d1cd6095e3576d4d2464f91ee4237ce6236027a02bd44b2?placeholderIfAbsent=true&apiKey=6445106b4f5f480c8371db6d947569f8"
                  alt=""
                  className="object-contain shrink-0 w-5 aspect-[0.83]"
                />
              </div>
            </button>
            <button className="flex gap-2.5 my-auto font-medium tracking-wide leading-tight">
              <span className="grow my-auto">Download Placement Report</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1753a5e64a613ae54121b071daec5d371e9a520667c745ec7228090f31599369?placeholderIfAbsent=true&apiKey=6445106b4f5f480c8371db6d947569f8"
                alt=""
                className="object-contain shrink-0 aspect-square w-[25px]"
              />
            </button>
          </div>
        </div>
        <div className="flex shrink-0 self-start max-w-full h-[350px] rotate-[-0.017453280412875295rad] w-[487px]" />
      </div>
    </header>
  );
}
