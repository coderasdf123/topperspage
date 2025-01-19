import * as React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import CourseCard from "./components/CourseCard";
import CourseOverview from "./components/courseOverview";
//import CurriculumPage from "./components/CurriculumPage";


export default function PgpTbmPage() {
  const courseData = [
    {
      title: "Fundamentals of Quantitative Techniques",
      professor: "Mr Tushar Jaruhar",
      position: "Former Pricing Actuary, Zurich Insurance",
      concentration: "Communications, Business Analytics & Statistics",
      hours: "20 hours",
    },
  ];

  return (
    <main className="flex flex-col" role="main">
      <Header />
      <Navigation />
      <section className="flex flex-col justify-center items-center px-20 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[1250px]">
          {courseData.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </section>
      <CourseOverview />
      {/*<CurriculumPage />*/}
    </main>
  );
}
