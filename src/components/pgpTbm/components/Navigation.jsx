import * as React from "react";

export default function Navigation() {
  const navItems = [
    { label: "Highlights", isActive: false },
    { label: "Curriculum", isActive: true },
    { label: "Admissions & Fees", isActive: false },
    { label: "Career Prospects", isActive: false },
    { label: "Cohort Profile", isActive: false },
  ];

  return (
    <nav
      className="flex z-10 flex-col justify-center items-center px-16 py-3.5 w-full font-medium bg-neutral-950 max-md:px-5 max-md:max-w-full"
      role="navigation"
    >
      <div className="flex gap-10 items-center ml-3 max-w-full w-[812px]">
        {navItems.map((item, index) => (
          <React.Fragment key={index}>
            {index === 0 ? (
              <div className="grow self-stretch my-auto text-xs text-neutral-400">
                {item.label}
              </div>
            ) : index === 1 ? (
              <div className="flex gap-2 self-stretch text-sm whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/84720860149ca9a31ce1ff7c0cdb1b8ccbe86c4a220c469a33e07b5fc57d938c?placeholderIfAbsent=true&apiKey=6445106b4f5f480c8371db6d947569f8"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[18px]"
                />
                <div className="my-auto">{item.label}</div>
              </div>
            ) : (
              <div className="basis-auto text-sm text-neutral-400">
                {item.label}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}
