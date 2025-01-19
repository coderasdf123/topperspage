import * as React from "react";

export default function Footer() {
  const footerLinks = {
    about: ["About us", "Careers"],
    academics: [
      "Postgraduate Programme",
      "Undergraduate Programme",
      "Executive Programme",
    ],
    innovation: ["Student Startups", "Faculty Research"],
    other: ["For Companies", "Jobs", "Become a Master", "Events", "Blog"],
  };

  return (
    <footer
      className="flex flex-col items-center w-full max-md:max-w-full"
      role="contentinfo"
    >
      <div className="flex flex-col items-center self-stretch px-16 pt-8 pb-1 w-full border-t border-neutral-800 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start max-w-full w-[1283px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec4d0aa41912f0d7a982dc70ca044a50ad8a7d8a8df1bde260ad168d172a6e39?placeholderIfAbsent=true&apiKey=6445106b4f5f480c8371db6d947569f8"
            alt="Masters' Union Logo"
            className="object-contain shrink-0 max-w-full aspect-[2.94] w-[200px]"
          />
          <nav className="flex-auto mt-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              {Object.entries(footerLinks).map(([section, links], index) => (
                <div
                  key={section}
                  className={`flex flex-col ${
                    index === 0
                      ? "w-[16%]"
                      : index === 1
                      ? "w-[37%]"
                      : index === 2
                      ? "w-[23%]"
                      : "w-[24%]"
                  } max-md:ml-0 max-md:w-full`}
                >
                  <div className="flex flex-col text-sm leading-relaxed text-neutral-400 max-md:mt-10">
                    <div className="self-start text-lg font-semibold leading-snug text-white">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </div>
                    {links.map((link, i) => (
                      <div key={i} className={`${i === 0 ? "mt-7" : "mt-5"}`}>
                        {link}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
