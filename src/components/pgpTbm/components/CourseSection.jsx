import * as React from "react";

export function CourseSection({ sections }) {
  return (
    <section className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
      <div className="flex flex-col ml-4 text-lg font-semibold tracking-wide leading-snug text-white w-[73px] max-md:ml-2.5">
        <h2 className="max-md:mr-1">In Class</h2>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/70fe27c3d3862f9cb38deaa7527a220b2693e770c1215f8b34506f172ec15dfc?placeholderIfAbsent=true&apiKey=6445106b4f5f480c8371db6d947569f8"
          className="object-contain w-full aspect-[2.92]"
          alt=""
        />
      </div>
      <div className="py-5 pr-20 pl-5 mt-1 rounded-lg bg-neutral-900 max-md:pr-5 max-md:max-w-full">
        {Object.entries(sections).map(([key, section]) => (
          <div key={key} className="mb-4">
            <div className="px-2 py-2.5 text-sm font-medium whitespace-nowrap rounded-lg bg-neutral-950 text-white">
              {section.title}
            </div>
            {section.items.map((item, index) => (
              <div
                key={index}
                className="flex gap-1.5 mt-5 text-xs text-neutral-50"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/591e79380afa2dc163a1443304bd6b6145a31021db9d06dfc61312917dccf196?placeholderIfAbsent=true&apiKey=6445106b4f5f480c8371db6d947569f8"
                  className="object-contain shrink-0 self-start mt-1 w-1 aspect-[0.8]"
                  alt=""
                />
                <div className="basis-auto">{item}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
