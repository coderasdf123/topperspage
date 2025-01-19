import * as React from "react";

export default function CourseCard({
  title,
  professor,
  position,
  concentration,
  hours,
}) {
  return (
    <div className="flex flex-wrap gap-5 justify-between mt-6 ml-8 max-w-full text-sm w-[1099px]">
      <div className="font-medium leading-5 text-zinc-950">{title}</div>
      <div className="flex flex-col self-start text-xs">
        <div className="self-start leading-tight text-zinc-600">
          {professor}
        </div>
        <div className="mt-2 font-medium text-neutral-950">{position}</div>
      </div>
      <div className="my-auto font-medium leading-5 text-zinc-950 w-[246px]">
        {concentration}
      </div>
      <div className="px-2.5 py-2.5 my-auto font-medium rounded-lg bg-neutral-950">
        {hours}
      </div>
    </div>
  );
}
