import * as React from "react";

export default function CourseRosterRow({ course }) {
  return (
    <div className="flex flex-wrap gap-5 justify-between mt-6 ml-8 max-w-full text-sm w-[1100px]">
      <div className="font-medium leading-5 text-zinc-950">{course.name}</div>
      <div className="flex flex-col self-start text-xs">
        {course.professors ? (
          course.professors.map((prof, index) => (
            <React.Fragment key={index}>
              <div className="leading-tight text-zinc-600">{prof.name}</div>
              <div className="mt-1.5 font-medium text-neutral-950">
                {prof.title}
              </div>
              {index < course.professors.length - 1 && <div className="mt-4" />}
            </React.Fragment>
          ))
        ) : (
          <>
            <div className="leading-tight text-zinc-600">
              {course.professor.name}
            </div>
            <div className="mt-1.5 font-medium text-neutral-950">
              {course.professor.title}
            </div>
          </>
        )}
      </div>
      <div className="font-medium leading-5 text-zinc-950 w-[246px]">
        {course.concentration}
      </div>
      <div className="self-start px-2 py-2.5 mt-1 font-medium rounded-lg bg-neutral-950">
        {course.credits}
      </div>
    </div>
  );
}
