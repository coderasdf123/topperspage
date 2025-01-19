import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LifestyleCourse = () => {
  const [selectedSection, setSelectedSection] = useState('Clear Goals');
  const [currentPage, setCurrentPage] = useState(0);

  const navigationItems = [
    [
      'Clear Goals',
      'Motivation',
      'Daily Habits',
      'Mindset Change',
      'Brain Training'
    ],
    [
      '21 Days Challenge',
      'Pomodoro',
      'Comfort Zone',
      'Habit Formation'
    ]
  ];

  const handleNextPage = () => {
    if (currentPage < navigationItems.length - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className="lifestyle-course">
      <div className="course-container">
        {/* Header */}
        <div className="course-header">
          <img src="/starsvg1612-p01r.svg" alt="starsvg1612" className="star-icon" />
          <span className="course-label">
            COURSE OVERVIEW
          </span>
        </div>
        
        {/* Title */}
        <div className="course-title">
          <span>
            LifeStyle Changes for Success
          </span>
        </div>

        {/* Navigation Bar */}
        <div className="nav-container">
          <div className="nav-content">
            {/* Prev Button */}
            <button
              onClick={handlePrevPage}
              className={`nav-button prev-button ${currentPage === 0 ? 'disabled' : ''}`}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="nav-icon" />
            </button>

            {/* Navigation Items */}
            <div className="nav-items">
              {navigationItems[currentPage].map((item) => (
                <div
                  key={item}
                  onClick={() => setSelectedSection(item)}
                  className={`nav-item ${selectedSection === item ? 'selected' : ''}`}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextPage}
              className={`nav-button next-button ${currentPage === 1 ? 'disabled' : ''}`}
              disabled={currentPage === 1}
            >
              <ChevronRight className="nav-icon" />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="content-section">
          <div className="content-container">
            <div className="cards-container">
              {[1, 2, 3, 4].map((columnIndex) => (
                <div key={columnIndex} className="content-card">
                  <div className="card-section">
                    <h3 className="card-title">
                      Goal Setting
                    </h3>
                    <ul className="card-list">
                      <li>Define your short-term and long-term objectives clearly.</li>
                      <li>Break down complex goals into manageable steps.</li>
                    </ul>
                  </div>
                  <div className="card-section">
                    <h3 className="card-title">
                      Success Metrics
                    </h3>
                    <ul className="card-list">
                      <li>Track your progress with measurable indicators.</li>
                      <li>Establish realistic timelines for achievement.</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifestyleCourse;