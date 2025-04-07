import React, { useState, useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import { Search, Filter, TrendingUp, Plus, X, Eye,AlertTriangle, Calendar, BookOpen, FileText, Activity, PenTool, BarChart2 } from 'lucide-react';
import { contentData } from './contentdata';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [examType, setExamType] = useState('');

  const classes = Array.from({ length: 7 }, (_, i) => `Class ${i + 6}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, phone, selectedClass, examType });
  };

  return (
    <div className="p-8 w-full max-w-md bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-black">Explore Further!</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Class</option>
            {classes.map((cls) => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            value={examType}
            onChange={(e) => setExamType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Exam Type</option>
            <option value="JEE">JEE</option>
            <option value="NEET">NEET</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const CommentModal = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author: name, content, likes: 0, views: 0, comments: 0, timestamp: new Date().toISOString() });
    setTitle('');
    setName('');
    setContent('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-500 rounded-lg p-6 w-full max-w-lg mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Add Your Insight</h2>
          <button onClick={onClose} className="text-white hover:text-gray-300">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-white"
              placeholder="Enter your title"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-white"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 text-white min-h-[100px]"
              placeholder="Share your knowledge and experience..."
              required
            />
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600">Cancel</button>
            <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-md hover:bg-gray-400">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const hasCardBeenViewed = (cardId) => {
  const viewedCards = JSON.parse(localStorage.getItem('viewedCards') || '{}');
  if (viewedCards[cardId]) {
    const lastViewed = new Date(viewedCards[cardId]);
    const now = new Date();
    return (now - lastViewed) / (1000 * 60 * 60) < 24;
  }
  return false;
};

const ContentCard = ({ card, onLike, onView }) => {
  useEffect(() => {
    if (!card || hasCardBeenViewed(card.id)) return;
    const viewedCards = JSON.parse(localStorage.getItem('viewedCards') || '{}');
    viewedCards[card.id] = new Date().toISOString();
    localStorage.setItem('viewedCards', JSON.stringify(viewedCards));
    onView(card.id);
  }, [card?.id, onView]);

  if (!card) return null;

  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-semibold text-white flex items-center gap-1">
          <span>{card.title}</span>
          {card.verified && (
            <img src="/verified-icon.svg" alt="Verified" className="w-4 h-4" />
          )}
        </h2>
        <div className="flex gap-2">
          {card.class && <span className="px-2 py-1 bg-gray-200 rounded-full text-xs text-white">{card.class}</span>}
          {card.examType && <span className="px-2 py-1 bg-gray-200 rounded-full text-xs text-white">{card.examType}</span>}
        </div>
      </div>
      <p className="text-sm text-gray-200 mb-4">by {card.author}</p>
      <p className="text-white mb-4">{card.content}</p>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 hover:text-blue-400 bg-transparent">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="gray"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          <span className="text-white">{card.likes}</span>
        </button>
        <div className="flex items-center gap-1 text-white">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="gray"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
          <span className="text-white">{card.comments}</span>
        </div>
        <div className="flex items-center gap-1 text-white">
          <Eye size={16} />
          <span>{card.views?.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

const DynamicInsightsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({ years: 0, students: 0, stories: 0 });
  const modalRef = useRef(null);

  const goToPrevious = () => setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % 3);

  const handleCloseModal = () => setShowLoginModal(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowLoginModal(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (currentSlide === 1) {
      const animateNumber = (target, key) => {
        let start = 0;
        const step = target / 50;
        const interval = setInterval(() => {
          start += step;
          if (start >= target) {
            setAnimatedNumbers(prev => ({ ...prev, [key]: target }));
            clearInterval(interval);
          } else {
            setAnimatedNumbers(prev => ({ ...prev, [key]: Math.floor(start) }));
          }
        }, 40);
      };
      animateNumber(40, 'years');
      animateNumber(45000, 'students');
      animateNumber(7000, 'stories');
    }
  }, [currentSlide]);

  const slides = [
    {
      content: (
        <div className="relative flex flex-col items-center justify-center text-center p-4 sm:p-8 space-y-4 sm:space-y-8 h-full bg-gray-300 rounded-xl">
          <div className="w-6 h-6 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-2 bg-gradient-to-br from-purple-500 to-blue-500">
            <BarChart2 className="text-white" size={20} sm:size={28} />
          </div>
          <h2 className="text-xl sm:text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent tracking-tight z-10 leading-tight">
            Personalized Topper Insights
          </h2>
  
          <div className="space-y-3 sm:space-y-4">
            <p className="text-lg sm:text-xl text-gray-200 font-light tracking-wide">
              95% Success Rate
            </p>
            <p className="text-sm sm:text-lg text-gray-200 max-w-[300px] sm:max-w-md">
              Strategies from India's top performers, tailored to your goals
            </p>
          </div>
          <button
            onClick={() => setShowLoginModal(true)}
            className="px-4 py-1 sm:px-8 sm:py-4 text-sm sm:text-xl font-semibold text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-full
            hover:opacity-90 transition-all duration-300 shadow-md sm:shadow-xl hover:shadow-lg sm:hover:shadow-2xl
            transform hover:-translate-y-1 z-10"
          >
            Unlock Now
          </button>
        </div>
      )
    },
    {
      content: (
        <div className="relative flex flex-col items-center justify-center text-center p-4 sm:p-8 h-full bg-gray-300 rounded-xl">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-2 bg-gradient-to-br from-blue-800 to-purple-400">
            <Activity className="text-white" size={24} sm:size={28} />
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-800 via-blue-200 to-blue-700 bg-clip-text text-transparent tracking-tight z-10 leading-tight">
            Proven Results
          </h2>
  
          <div className="grid grid-cols-3 gap-4 sm:gap-6 w-full max-w-[300px] sm:max-w-2xl z-10">
            <div className="space-y-1 sm:space-y-2">
              <p className="text-xl sm:text-3xl font-bold text-purple-400">{animatedNumbers.years}+</p>
              <p className="text-sm sm:text-base text-gray-200">Years</p>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <p className="text-xl sm:text-3xl font-bold text-purple-400">{animatedNumbers.students.toLocaleString()}+</p>
              <p className="text-sm sm:text-base text-gray-200">Students</p>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <p className="text-xl sm:text-3xl font-bold text-purple-400">{animatedNumbers.stories.toLocaleString()}+</p>
              <p className="text-sm sm:text-base text-gray-200">Success Stories</p>
            </div>
          </div>
          <button
            onClick={() => setShowLoginModal(true)}
            className=" sm:mt-8 px-6 sm:px-8 py-2 sm:py-4 text-base sm:text-xl font-semibold text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-full
            hover:opacity-90 transition-all duration-300 shadow-md sm:shadow-xl hover:shadow-lg sm:hover:shadow-2xl
            transform hover:-translate-y-1 z-10"
          >
            Learn More
          </button>
        </div>
      )
    },
    {
      content: (
        <div className="relative flex flex-col items-center justify-center text-center p-4 sm:p-8 space-y-6 sm:space-y-8 h-full bg-gray-300 rounded-xl">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-2 bg-gradient-to-br from-red-500 to-orange-500">
            <AlertTriangle className="text-white" size={24} sm:size={28} />
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-red-800 via-orange-300 to-red-700 bg-clip-text text-transparent tracking-tight z-10">
            Avoid the #1 Pitfall
          </h2>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-lg sm:text-xl text-gray-100 font-light tracking-wide">
              95% Success Rate
            </p>
            <p className="text-sm sm:text-lg text-gray-200 max-w-[300px] sm:max-w-md">
            90% of students fail due to passive learning and lack of practice.
            </p>
          </div>
  
          <button
            onClick={() => setShowLoginModal(true)}
            className="px-6 sm:px-8 py-2 sm:py-4 text-base sm:text-xl font-semibold text-white bg-gradient-to-br from-red-500 to-orange-500 rounded-full
            hover:opacity-90 transition-all duration-300 shadow-md sm:shadow-xl hover:shadow-lg sm:hover:shadow-2xl
            transform hover:-translate-y-1 z-10"
          >
            Fix It Now
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="relative w-[67%] sm:w-full h-[300px] sm:h-[500px] bg-black overflow-hidden">
  <div
    className="absolute inset-0 transition-transform duration-500 ease-in-out"
    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
  >
    {slides.map((slide, index) => (
      <div
        key={index}
        className="w-full h-full absolute top-0 left-0 flex items-center justify-center"
        style={{ transform: `translateX(${index * 100}%)` }}
      >
        {slide.content}
      </div>
    ))}
  </div>
  
  <button
    onClick={goToPrevious}
    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 transition-all z-20"
  >
    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>
  
  <button
    onClick={goToNext}
    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 transition-all z-20"
  >
    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
  
  <div className="absolute bottom-1 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`w-1 h-1 sm:w-3 sm:h-3 rounded-full transition-all ${
          currentSlide === index ? 'bg-white scale-125' : 'bg-gray-500'
        }`}
      />
    ))}
  </div>


      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-lg shadow-2xl flex"
            style={{ width: window.innerWidth < 640 ? "80%" : "auto" }}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 text-2xl font-bold z-50"
            >
              ×
            </button>
            <LoginPage />
          </div>
        </div>
      )}
    </div>
  );
};

const TrendingItem = ({ item, onClick }) => {
  return (
    <div onClick={() => onClick(item)} className="py-3 border-b border-gray-700 hover:bg-gray-700 px-4 cursor-pointer">
      <div className="text-xs text-gray-200">{item.category}</div>
      <div className="font-medium text-white mt-1">#{item.title.replace(/\s+/g, '')}</div>
      <div className="text-xs text-gray-200 mt-1">{item.posts} posts</div>
    </div>
  );
};

const saveInsightsToLocalStorage = (insights) => localStorage.setItem('sharedInsights', JSON.stringify(insights));
const getInsightsFromLocalStorage = () => JSON.parse(localStorage.getItem('sharedInsights') || '[]');

const Section4 = ({ className = "" }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userComments, setUserComments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState({ class: [], background: [], subject: [] });
  const [selectedTrendingItem, setSelectedTrendingItem] = useState(null);

  const [displayContent, setDisplayContent] = useState({
    trending: [...contentData.all.trending],
    cards: [...contentData.all.cards]
  });

  useEffect(() => {
    const savedInsights = getInsightsFromLocalStorage();
    if (savedInsights.length > 0) setUserComments(savedInsights);
    const pollInterval = setInterval(() => {
      const currentInsights = getInsightsFromLocalStorage();
      if (JSON.stringify(currentInsights) !== JSON.stringify(userComments)) setUserComments(currentInsights);
    }, 3000);
    return () => clearInterval(pollInterval);
  }, []);

  const filterOptions = {
    class: ["11th", "12th"],
    background: ["JEE", "NEET"],
    subject: ["Physics", "Chemistry", "Mathematics", "Biology"]
  };

  const getMetadata = (card) => {
    let subject = ["physics", "chem", "math", "bio"].find(s => card.title?.toLowerCase().includes(s) || card.content?.toLowerCase().includes(s)) || null;
    subject = subject ? { physics: "Physics", chem: "Chemistry", math: "Mathematics", bio: "Biology" }[subject] : null;
    let background = ["jee", "neet"].find(b => card.title?.toLowerCase().includes(b) || card.content?.toLowerCase().includes(b)) || null;
    background = background ? background.toUpperCase() : null;
    let className = ["11th", "12th"].find(c => card.title?.toLowerCase().includes(c) || card.content?.toLowerCase().includes(c)) || null;
    return { subject, background, class: className };
  };

  const applyFiltersAndSearch = () => {
    let trendingItems = [...contentData[activeTab].trending];
    let cardItems = [...contentData[activeTab].cards];

    if (searchTerm.trim()) {
      trendingItems = trendingItems.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.category.toLowerCase().includes(searchTerm.toLowerCase()));
      cardItems = cardItems.filter(card => card.title.toLowerCase().includes(searchTerm.toLowerCase()) || card.author.toLowerCase().includes(searchTerm.toLowerCase()) || card.content.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (Object.values(activeFilters).some(arr => arr.length > 0)) {
      trendingItems = trendingItems.filter(item => {
        const category = item.category.toLowerCase();
        return (!activeFilters.subject.length || activeFilters.subject.some(subject => category.includes(subject.toLowerCase()))) &&
               (!activeFilters.background.length || activeFilters.background.some(bg => category.includes(bg.toLowerCase())));
      });
      cardItems = cardItems.filter(card => {
        const metadata = getMetadata(card);
        return (!activeFilters.subject.length || (metadata.subject && activeFilters.subject.includes(metadata.subject))) &&
               (!activeFilters.background.length || (metadata.background && activeFilters.background.includes(metadata.background))) &&
               (!activeFilters.class.length || (metadata.class && activeFilters.class.includes(metadata.class)));
      });
    }

    let filteredUserComments = [...userComments];
    if (searchTerm.trim()) filteredUserComments = filteredUserComments.filter(comment => comment.title.toLowerCase().includes(searchTerm.toLowerCase()) || comment.author.toLowerCase().includes(searchTerm.toLowerCase()) || comment.content.toLowerCase().includes(searchTerm.toLowerCase()));
    if (Object.values(activeFilters).some(arr => arr.length > 0)) {
      filteredUserComments = filteredUserComments.filter(comment => {
        const metadata = getMetadata(comment);
        return (!activeFilters.subject.length || (metadata.subject && activeFilters.subject.includes(metadata.subject))) &&
               (!activeFilters.background.length || (metadata.background && activeFilters.background.includes(metadata.background))) &&
               (!activeFilters.class.length || (metadata.class && activeFilters.class.includes(metadata.class)));
      });
    }

    setDisplayContent({ trending: trendingItems, cards: cardItems, userComments: filteredUserComments });
  };

  const toggleFilter = (filterType, value) => setActiveFilters(prev => ({
    ...prev,
    [filterType]: prev[filterType].includes(value) ? prev[filterType].filter(item => item !== value) : [...prev[filterType], value]
  }));

  const clearAllFilters = () => {
    setActiveFilters({ class: [], background: [], subject: [] });
    setSearchTerm('');
  };

  const getActiveFilterCount = () => Object.values(activeFilters).flat().length;

  useEffect(() => {
    applyFiltersAndSearch();
  }, [activeTab, searchTerm, activeFilters, userComments]);

  const handleAddComment = (newComment) => {
    const uniqueId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const metadata = getMetadata(newComment);
    const commentWithId = { ...newComment, id: uniqueId, views: 0, class: metadata.class || "General", examType: metadata.background || "General" };
    const updatedComments = [commentWithId, ...userComments];
    setUserComments(updatedComments);
    saveInsightsToLocalStorage(updatedComments);
  };

  const handleLike = (id) => {
    Object.keys(contentData).forEach(tab => {
      contentData[tab].cards = contentData[tab].cards.map(card =>
        card.id === id ? { ...card, likes: card.likes + 1 } : card
      );
    });

    const updatedComments = userComments.map(comment =>
      comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
    );

    setUserComments(updatedComments);
    saveInsightsToLocalStorage(updatedComments);
    applyFiltersAndSearch();
  };

  const handleView = (id) => {
    Object.keys(contentData).forEach(tab => {
      contentData[tab].cards = contentData[tab].cards.map(card =>
        card.id === id ? { ...card, views: (card.views || 0) + 1 } : card
      );
    });

    const updatedComments = userComments.map(comment =>
      comment.id === id ? { ...comment, views: (comment.views || 0) + 1 } : comment
    );

    setUserComments(updatedComments);
    saveInsightsToLocalStorage(updatedComments);
    applyFiltersAndSearch();
  };

  const handleTrendingClick = (item) => {
    setSelectedTrendingItem(item);
    if (item.relatedCards) {
      setDisplayContent(prev => ({
        ...prev,
        cards: item.relatedCards
      }));
    }
  };

  return (
    <div
      className={`
        self-stretch flex flex-col items-start justify-start relative shrink-0 z-[2]
        text-left text-xs text-white font-sf-pro
        bg-black
        pt-12 px-2 sm:px-4 pb-8 gap-4
        md:pt-16 md:px-8 md:pb-12 md:mx-auto
        lg:pt-18 lg:px-12 lg:pb-16
        xl:pt-20 xl:px-16 xl:pb-20 xl:gap-[29px] w-full mx-auto
        ${className}
      `}
    >
      <div className="max-w-4xl flex flex-col items-start justify-start sm:ml-[16%] gap-2 text-white">
        <div className="flex flex-row items-center justify-start gap-2 header-container">
          <img
            className="w-3.5 h-3.5 top-[2px] relative top-[8px] overflow-hidden shrink-0"
            alt=""
            src="/starsvg.svg"
          />
          <div className="relative tracking-[1px] right-[4px] top-[8px] uppercase font-sf-pro-bold">
            PEER INSIGHTS
          </div>
        </div>

        <div className="w-full flex flex-row items-end justify-between gap-5 text-[22px] sm:text-10xl-9 text-white mq925:flex-wrap">
          <b className="relative leading-[39px] font-sf-pro-bold whitespace-nowrap">
            Current Aspirants Exam Season 2025
          </b>
        </div>

        <div className="flex gap-[4px] mb-6 w-[60%] sm:w-full">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-200" size={20} />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[95%] sm:w-full bg-gray-800 rounded-lg py-4 pl-10 pr-4 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          {/*<button
            className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 text-white"
            onClick={() => setShowFilters(!showFilters)}
          >
            {/*<Filter size={20} color="white"/>
            <span> </span>
            {getActiveFilterCount() > 0 && (
              <span className="bg-gray-500 text-xs rounded-full px-2 py-1">
                {getActiveFilterCount()}
              </span>
            )}
          </button>*/}
        </div>

        {showFilters && (
          <div className="bg-gray-700 rounded-lg p-4 mb-6 w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button onClick={clearAllFilters} className="text-sm text-blue-400 hover:text-blue-300">Clear all</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(filterOptions).map(([type, options]) => (
                <div key={type}>
                  <h3 className="text-gray-100 mb-2 text-sm font-medium">{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
                  <div className="flex flex-wrap gap-2">
                    {options.map(option => (
                      <button
                        key={`${type}-${option}`}
                        onClick={() => toggleFilter(type, option)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          activeFilters[type].includes(option)
                            ? 'bg-gray-500 text-white'
                            : 'bg-gray-600 text-gray-200 hover:bg-gray-500'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-4 mb-8 w-[65%] sm:w-full overflow-x-auto">
          {[
            { key: 'all', label: 'All', svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg> },
            { key: 'strategies', label: 'Strategies', svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5v-2L12 20l-10-5v2z"/></svg> },
            { key: 'problemSolving', label: 'Problem Solving', svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg> },
            { key: 'examDayTips', label: 'Exam Day Tips', svg: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg> }
          ].map(tab => (
            <button
              key={tab.key}
              className={`${activeTab === tab.key ? 'bg-gray-500' : 'bg-gray-700'} px-4 py-2 rounded-lg flex items-center gap-2 text-white whitespace-nowrap hover:bg-gray-600`}
              onClick={() => { setActiveTab(tab.key); setSelectedTrendingItem(null); }}
            >
              {tab.svg}
              {tab.label}
            </button>
          ))}
        </div>

        {displayContent.trending.length > 0 || displayContent.cards.length > 0 || (displayContent.userComments && displayContent.userComments.length > 0) ? (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-[68%] sm:w-full lg:w-80 flex-shrink-0">
              <div className="bg-gray-300 rounded-lg overflow-hidden sticky top-4">
                <div className="p-4 border-b border-gray-800 flex items-center gap-2">
                  <TrendingUp size={20} color="white" />
                  <h2 className="text-xl font-semibold text-white">Trending Insights</h2>
                </div>
                <div>
                  {displayContent.trending.map((item, index) => (
                    <TrendingItem key={index} item={item} onClick={handleTrendingClick} />
                  ))}
                </div>
              </div>
              {/* Slides for sm and larger screens */}
              <div className="hidden sm:block mt-8">
                <DynamicInsightsCarousel />
              </div>
            </div>

            <div className="flex-1">
              {displayContent.cards.length > 0 && (
                <div className="space-y-4 mb-8 w-[68%] sm:w-full">
                  {displayContent.cards.map((card) => (
                    <ContentCard
                      key={card.id}
                      card={card}
                      onLike={handleLike}
                      onView={handleView}
                    />
                  ))}
                </div>
              )}

              {/*<div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-white">Community Insights</h2>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 bg-gray-500 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    <Plus size={20} color="white" />
                    <span className='text-white'>Add Your Insight</span>
                  </button>
                </div>
                {displayContent.userComments && displayContent.userComments.length > 0 ? (
                  displayContent.userComments.map((comment) => (
                    <ContentCard
                      key={comment.id}
                      card={comment}
                      onLike={handleLike}
                      onView={handleView}
                    />
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-200 pr-[32%]">
                    No community insights yet. Be the first to share your knowledge!
                  </div>
                )}
              </div>*/}

              {/* Slides for screens smaller than sm */}
              <div className="mt-8 w-full sm:hidden">
                <DynamicInsightsCarousel />
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-700 rounded-lg w-full">
            <p className="text-xl mb-2">No matching content found</p>
            <p className="text-gray-400 mb-4">Try adjusting your filters or search term</p>
            <button onClick={clearAllFilters} className="px-4 py-2 bg-gray-500 hover:bg-gray-400 rounded-lg">Clear filters</button>
          </div>
        )}

        <CommentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddComment}
        />
      </div>
    </div>
  );
};

CommentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

ContentCard.propTypes = {
  card: PropTypes.object.isRequired,
  onLike: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
};

TrendingItem.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

DynamicInsightsCarousel.propTypes = {
  className: PropTypes.string,
};

Section4.propTypes = {
  className: PropTypes.string,
};

export default Section4;