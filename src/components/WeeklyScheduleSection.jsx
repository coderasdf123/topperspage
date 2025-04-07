import React, { useState } from 'react';
import { Calendar, Clock, BookOpen, Brain, FlaskRound as Flask, Calculator, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const subjects = [
  { name: 'Physics', color: 'bg-blue-100 text-blue-800', icon: <Calculator className="w-4 h-4" /> },
  { name: 'Chemistry', color: 'bg-green-100 text-green-800', icon: <Flask className="w-4 h-4" /> },
  { name: 'Mathematics', color: 'bg-purple-100 text-purple-800', icon: <Brain className="w-4 h-4" /> },
  { name: 'Biology', color: 'bg-red-100 text-red-800', icon: <BookOpen className="w-4 h-4" /> },
];

const timeSlots = [
  '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
  '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
  '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'
];

const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

const WeeklyScheduleSection = () => {
  const [currentWeek, setCurrentWeek] = useState(1);

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-4 md:mb-6">
          <img
            src="/starsvg1758-d1lj.svg"
            alt="Star"
            className="w-3 h-3 md:w-3.5 md:h-3.5"
          />
          <span className="text-black text-[12px] md:text-xs font-sf-pro-bold">
            INSIDE THE CLASSROOM
          </span>
        </div>

        {/* Title Section */}
        <div className="space-y-2">
          <h2 className="text-black text-2xl md:text-3xl font-sf-pro-bold leading-tight">
            A Glimpse Into Your Weekly Schedule
          </h2>
          <div className="relative">
            <img
              src="/lightmuvectorsvgfill1766-zj2l.svg"
              alt="Vector"
              className="w-[240px] md:w-[324px] h-[24px] md:h-[31px]"
            />
          </div>
        </div>

        {/* Schedule Section */}
        <div className="min-h-screen bg-gray-50 py-8 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header with Navigation */}
            <div className="flex items-center justify-between -mb-2">
              {/*<div>
               <h1 className="text-3xl font-bold text-gray-900">IIT/NEET Study Schedule</h1>
                <p className="text-gray-600 mt-1">Optimize your preparation with our structured timetable</p>
              </div>*/}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCurrentWeek(prev => Math.max(1, prev - 1))}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <span className="font-semibold">Week {currentWeek}</span>
                <button
                  onClick={() => setCurrentWeek(prev => prev + 1)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Timetable */}
            <div className="bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
              <div className="flex mb-6 space-x-4">
                {subjects.map((subject, index) => (
                  <div key={index} className={`flex items-center px-4 py-2 rounded-lg ${subject.color}`}>
                    {subject.icon}
                    <span className="ml-2 font-medium">{subject.name}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-8 gap-4">
                {/* Time Column */}
                <div className="sticky left-0 bg-white">
                  <div className="h-12"></div>
                  {timeSlots.map((time, index) => (
                    <div key={index} className="h-24 flex items-center justify-end pr-4 text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" />
                      {time}
                    </div>
                  ))}
                </div>

                {/* Days Columns */}
                {days.map((day, dayIndex) => (
                  <div key={dayIndex} className="min-w-[200px]">
                    <div className="h-12 flex items-center justify-center font-semibold text-gray-700 bg-gray-50 rounded-lg mb-4">
                      <Calendar className="w-4 h-4 -ml-6" />
                      {day}
                    </div>
                    {timeSlots.map((_, slotIndex) => {
                      const subject = subjects[(dayIndex + slotIndex) % subjects.length];
                      return (
                        <div
                          key={slotIndex}
                          className={`h-24 p-2 border border-gray-100 rounded-lg ${
                            Math.random() > 0.5 ? subject.color : 'bg-gray-50'
                          } transition-all hover:shadow-md cursor-pointer`}
                        >
                          {Math.random() > 0.5 && (
                            <div className="h-full flex flex-col justify-between">
                              <div className="flex items-center">
                                {subject.icon}
                                <span className="ml-2 text-sm font-medium">{subject.name}</span>
                              </div>
                              <div className="text-xs text-gray-600">
                                {Math.random() > 0.5 ? 'Practice Problems' : 'Theory Class'}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            {/*<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Daily Progress */}
              {/*<div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Daily Progress</h3>
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="mt-4 space-y-3">
                  {subjects.map((subject, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="h-2.5 rounded-full bg-blue-600"
                          style={{ width: `${Math.floor(Math.random() * 100)}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm text-gray-600">{subject.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Tips */}
              {/*<div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-lg mb-4">Quick Tips</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Take regular breaks between study sessions</li>
                  <li>• Revise previous topics during free slots</li>
                  <li>• Practice mock tests on weekends</li>
                  <li>• Balance theory and numerical practice</li>
                </ul>
              </div>

              {/* Weekly Goals */}
              {/*<div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-lg mb-4">Weekly Goals</h3>
                <div className="space-y-3">
                  {subjects.map((subject, index) => (
                    <div key={index} className={`p-3 rounded-lg ${subject.color} flex items-center`}>
                      {subject.icon}
                      <span className="ml-2 text-sm">Complete {subject.name} Module {index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Study Streak */}
              {/*<div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-semibold text-lg mb-4">Study Streak</h3>
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 28 }).map((_, index) => (
                    <div
                      key={index}
                      className={`w-full pt-[100%] rounded-lg ${
                        Math.random() > 0.3 ? 'bg-green-500' : 'bg-gray-200'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyScheduleSection;