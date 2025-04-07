export const navItems = ['AIR Strategies', 'Select your Class', 'Conceptual Clarity & Problem Solving'];
export const classOptions = ['Class 11th', 'Class 12th', 'Custom Strategy'];

export const navCardItemsData = {
  'AIR Strategies': [
    'Daily Schedule', 'Study Hours', 'Reference Books', 'Notes', 'Clear Backlogs', 'Test Series',
    'Revision Strategy', 'Time Management', 'Subject Focus', 'Mental Health'
  ],
  'Class 11th': [
    'Physics Basics', 'Chemistry Foundation', 'Math Fundamentals', 'NCERT Focus', 'Test Practice',
    'Doubt Sessions', 'Weekly Reviews', 'Foundation Building', 'Basic to Advanced', 'Time Distribution'
  ],
  // Other data omitted for brevity...
};

export const contentData = {
  'Daily Schedule': [
    'Start your day early at 5 AM to maximize productivity and maintain a consistent routine...',
    'Dedicate specific time blocks for each subject...'
  ],
  'Study Hours': [
    'Study for at least 6-8 hours daily...',
    'Follow the Pomodoro technique...'
  ],
  // Other content data omitted for brevity...
};

export const airToppers = {
  'AIR Strategies': [
    { name: "Tanmay Gangwar", rank: "AIR 1", year: 2023 },
    { name: "Varun Chopra", rank: "AIR 4", year: 2022 }
  ],
  // Other air toppers data omitted for brevity...
};

export const handleClassSelect = (option, setSelectedNav, setSelectedClass, setShowDropdown) => {
  setSelectedNav(option);
  setSelectedClass(option);
  setShowDropdown(false);
};
