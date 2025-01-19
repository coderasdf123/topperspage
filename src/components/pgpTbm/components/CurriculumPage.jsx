import * as React from "react";
import FacultyCard from "./components/FacultyCard";
import CourseRosterRow from "./components/CourseRosterRow";
import { facultyData, courseRoster } from "./CourseData";

export default function CurriculumPage() {
  return (
    <main className="flex flex-col items-start">
      <section
        className="flex flex-col items-center px-16 max-w-full bg-neutral-50 w-[1682px] max-md:px-5"
        aria-label="Curriculum Overview"
      >
        <div className="max-w-full w-[788px]">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start self-stretch my-auto w-full font-semibold max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-2.5 text-xs tracking-wider uppercase text-neutral-400">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9b2abb3b3d8aee99b8d9dc91ea430f0e85bf11ed359e0ae3d40d9c50ba02070?placeholderIfAbsent=true&apiKey=6445106b4f5f480c8371db6d947569f8"
                    alt=""
                    className="object-contain shrink-0 w-3.5 aspect-square"
                  />
                  <div className="my-auto basis-auto">
                    INNOVATIVE SPECIALISATIONS
                  </div>
                </div>
                <h1 className="mt-5 text-3xl font-bold text-black">
                  Explore a Future-Ready Curriculum
                </h1>
                <p className="self-stretch mt-9 text-sm text-neutral-500 max-md:max-w-full">
                  Gain essential knowledge and practical skills for the digital
                  age through our core and industry modules.
                </p>
                <button className="flex flex-col justify-center p-px mt-8 max-w-full text-base text-center rounded-[35px] text-neutral-950 w-[252px]">
                  <div className="flex overflow-hidden gap-2.5 px-6 py-4 bg-white rounded-[54px] max-md:px-5">
                    <span className="grow my-auto">Explore Course Roster</span>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/885d45079b76581b3c850807e7da62895cb7f47283df361a204cfd5d5d033f60?placeholderIfAbsent=true&apiKey=6445106b4f5f480c8371db6d947569f8"
                      alt=""
                      className="object-contain shrink-0 w-5 aspect-[0.83]"
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9263c25f6b7901f608a6e26ffdf0d7216fce649e3c778b8696210cc78d125d9d?placeholderIfAbsent=true&apiKey=6445106b4f5f480c8371db6d947569f8"
                alt="Illustration of curriculum concepts"
                className="object-contain grow w-full aspect-[0.51] max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="flex flex-wrap gap-5 justify-between mt-8"
        aria-label="Faculty Profiles"
      >
        {facultyData.map((faculty, index) => (
          <FacultyCard key={index} {...faculty} />
        ))}
      </section>

      <section className="mt-8" aria-label="Course Roster">
        <h2 className="text-3xl font-bold mb-6">Course Roster</h2>
        {courseRoster.map((course, index) => (
          <CourseRosterRow key={index} course={course} />
        ))}
      </section>
    </main>
  );
}
