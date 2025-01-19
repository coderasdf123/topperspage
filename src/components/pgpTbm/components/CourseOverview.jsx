import * as React from "react";
import { TermSelector } from "./TermSelector";
import { CourseSection } from "./CourseSection";
import { OutClassProject } from "./OutClassProject";

const terms = [
  "Term 1",
  "Term 2",
  "Term 3",
  "Term 4",
  "Term 5",
  "Term 6",
  "Term 7",
  "Term 8",
];

const courseSections = {
  communication: {
    title: "Communication",
    items: ["Art of Communication"],
  },
  finance: {
    title: "Finance",
    items: ["Statistics for Business", "Managerial Accounting"],
  },
  marketing: {
    title: "Marketing",
    items: ["Building Marketing Strategies"],
  },
  management: {
    title: "Management",
    items: ["Managerial Economics", "Foundations of Managerial Behaviour"],
  },
  technology: {
    title: "Technology",
    items: ["Blockchains and Digital Assets"],
  },
};

const outClassProjects = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c340f47c9faa26f129f3f738a0f874397200f76094f018539860c15a532b2e0f?placeholderIfAbsent=true&apiKey=6445106b4f5f480c8371db6d947569f8",
    title: "Dropshipping Challenge",
    description:
      "From running marketing campaigns to managing supply chains, students build their own websites and compete for revenue.",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f1f5a63188b5420c70893a65224020e8960dc2cff56c942853cb20de3af9caac?placeholderIfAbsent=true&apiKey=6445106b4f5f480c8371db6d947569f8",
    title: "Sell All You Got: One Day Fair",
    description:
      "Students take their online products offline and compete for customers in a two-day fair with a 1000+ footfall across prime locations in NCR.",
  },
];

export default function CourseOverview() {
  return (
    <main className="flex overflow-hidden flex-col justify-center items-center px-20 py-20 bg-neutral-950 max-md:px-5">
      <div className="flex flex-col max-w-full w-[1250px]">
        <header className="flex flex-wrap gap-2.5 self-start">
          <div className="flex flex-col grow shrink-0 basis-0 w-fit">
            <div className="flex gap-2.5 self-start text-xs font-semibold tracking-wider uppercase text-neutral-400">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c3f3378c91f22260a5afff83beb7f1c0a0710c6c0decd4f72b837173f06f4f6?placeholderIfAbsent=true&apiKey=6445106b4f5f480c8371db6d947569f8"
                className="object-contain shrink-0 w-3.5 aspect-square"
                alt=""
              />
              <div className="my-auto basis-auto">COURSE OVERVIEW</div>
            </div>
            <h1 className="mt-5 text-3xl font-bold leading-10 text-white">
              Master Concepts <br />
              the Classroom
            </h1>
          </div>
          <div className="flex-auto my-auto text-3xl font-bold leading-tight text-white">
            Inside and Outside
          </div>
        </header>

        <TermSelector terms={terms} />

        <section className="flex flex-wrap gap-4 mt-9 max-md:max-w-full">
          <div className="flex flex-col self-start mt-1 max-md:hidden">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfec06b8b6f9aed795b98e4f6a9cca8160b1d504bf17e9c89b927f298afd1f01?placeholderIfAbsent=true&apiKey=6445106b4f5f480c8371db6d947569f8"
              className="object-contain aspect-square shadow-[0px_0px_5px_rgba(0,0,0,0.11)] w-[18px]"
              alt=""
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c7804f52b145c3aa7b76a578cfcde731296aea9399090259bf4148ac8a9cd71?placeholderIfAbsent=true&apiKey=6445106b4f5f480c8371db6d947569f8"
              className="object-contain mt-96 aspect-square shadow-[0px_0px_5px_rgba(0,0,0,0.11)] w-[18px] max-md:mt-10"
              alt=""
            />
            <div className="flex shrink-0 w-0.5 bg-neutral-700 h-[364px] max-md:mx-2" />
          </div>

          <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
            <CourseSection sections={courseSections} />

            <div className="flex flex-col mt-12 ml-4 text-lg font-semibold tracking-wide leading-snug text-white w-[90px] max-md:mt-10 max-md:ml-2.5">
              <h2 className="max-md:mr-1">Out Class</h2>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/35ec5cd9076169bb617642e83f037e2b8ef97e7b2fcd3548d4c4a97418f8a35e?placeholderIfAbsent=true&apiKey=6445106b4f5f480c8371db6d947569f8"
                className="object-contain w-full aspect-[3.46]"
                alt=""
              />
            </div>

            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                {outClassProjects.map((project, index) => (
                  <OutClassProject key={index} {...project} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
