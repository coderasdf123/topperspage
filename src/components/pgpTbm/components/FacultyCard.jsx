import * as React from "react";

export default function FacultyCard({
  name,
  title,
  organization,
  image,
  course,
}) {
  return (
    <div className="flex flex-col grow items-start text-xs font-semibold leading-relaxed text-neutral-900 max-md:mt-5">
      <img
        loading="lazy"
        src={image}
        alt={`Portrait of ${name}`}
        className="object-contain self-stretch w-full rounded-lg aspect-[1.96]"
      />
      <div className="mt-3.5 font-medium leading-snug text-neutral-700">
        {name}
      </div>
      <div className="mt-4">{title}</div>
      <div className="mt-3">{organization}</div>
      <div className="flex shrink-0 self-stretch mt-2.5 border-t border-neutral-200 h-[7px]" />
      <div className="mt-1 text-neutral-800">{course}</div>
    </div>
  );
}
