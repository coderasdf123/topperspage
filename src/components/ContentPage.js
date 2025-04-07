import React, { useState, useEffect } from 'react';
import { Search, Filter, Eye } from 'lucide-react';

// Import your existing ContentData or use it directly
// This is the data structure you provided
const contentData = {
  all: {
    trending: [
      { id: 1, title: "Time Management on Exam Day", category: "Trending in JEE", likes: 324, posts: "21.5K" },
      { id: 2, title: "Quick Physics Formula Revision", category: "Trending in Physics", likes: 286, posts: "19.3K" },
      { id: 3, title: "Mental Preparation Techniques", category: "Trending in JEE", likes: 253, posts: "17.8K" }
    ],
    cards: [
      {
        id: 101,
        title: "10-Day Physics Revision Strategy",
        author: "Rohan S.",
        content: "I divide my revision into modules, focusing on one core concept each day. Starting with mechanics, followed by electromagnetics...",
        likes: 156,
        comments: 23,
        views: 422
      },
      {
        id: 102,
        title: "Organic Chemistry Pattern Analysis",
        author: "Priya K.",
        content: "After analyzing past papers, I've noticed a strong focus on reaction mechanisms. Here's my approach to tackling these questions...",
        likes: 142,
        comments: 19,
        views: 387
      }
    ]
  },
  strategies: {
    trending: [
      { id: 4, title: "Effective Mind Mapping", category: "Trending in Strategies", likes: 412, posts: "28.7K" },
      { id: 5, title: "Spaced Repetition Technique", category: "Trending in JEE", likes: 356, posts: "23.2K" },
      { id: 6, title: "Formula Memorization Tricks", category: "Trending in Physics", likes: 298, posts: "20.6K" }
    ],
    cards: [
      {
        id: 103,
        title: "Mathematics Revision Strategy",
        author: "Amit R.",
        content: "Using the pyramid approach: Start with basics, move to complex problems, and finally tackle previous year questions...",
        likes: 189,
        comments: 27,
        views: 512
      },
      {
        id: 104,
        title: "Physics Formula Framework",
        author: "Sneha M.",
        content: "Created a comprehensive framework linking related formulas. Starting from basic equations to derived formulas...",
        likes: 165,
        comments: 31,
        views: 473
      }
    ]
  },
  problemSolving: {
    trending: [
      { id: 7, title: "Common Integration Mistakes", category: "Trending in Math", likes: 387, posts: "25.9K" },
      { id: 8, title: "Vector Problem Solving", category: "Trending in Physics", likes: 342, posts: "22.1K" },
      { id: 9, title: "Chemical Equation Balancing", category: "Trending in Chemistry", likes: 289, posts: "19.7K" }
    ],
    cards: [
      {
        id: 105,
        title: "Problem Solving in Mechanics",
        author: "Ravi K.",
        content: "Breaking down complex problems into fundamental concepts. Using free body diagrams effectively...",
        likes: 178,
        comments: 34,
        views: 498
      },
      {
        id: 106,
        title: "Solving Organic Chemistry Problems",
        author: "Neha P.",
        content: "Understanding reaction mechanisms through electron movement. Identifying key functional groups...",
        likes: 156,
        comments: 28,
        views: 421
      }
    ]
  },
  examDayTips: {
    trending: [
      { id: 10, title: "Last Day Preparation", category: "Trending in JEE", likes: 456, posts: "31.2K" },
      { id: 11, title: "Exam Hall Strategy", category: "Trending in Tips", likes: 389, posts: "26.5K" },
      { id: 12, title: "Time Management Tips", category: "Trending in JEE", likes: 345, posts: "23.8K" }
    ],
    cards: [
      {
        id: 107,
        title: "Exam Day Routine",
        author: "Anita S.",
        content: "Proven routine to keep you focused and energized. Including diet tips and revision strategy...",
        likes: 234,
        comments: 45,
        views: 567
      },
      {
        id: 108,
        title: "Quick Review Techniques",
        author: "Rahul M.",
        content: "Effective methods to review key concepts in the last hour. Focus on high-yield topics...",
        likes: 198,
        comments: 37,
        views: 528
      }
    ]
  }
};

// ContentCard Component - Using your existing component
const ContentCard = ({ card, onLike, onView }) => {
  useEffect(() => {
    // Increment view count when card is rendered
    onView(card.id);
  }, []);
  
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-2 text-white">{card.title}</h2>
      <p className="text-sm text-gray-200 mb-4">by {card.author}</p>
      <p className="text-white mb-4">{card.content}</p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => onLike(card.id)}
          className="flex items-center gap-1 hover:text-blue-400"
        >
          <span>👍</span>
          <span>{card.likes}</span>
        </button>
        <div className="flex items-center gap-1 text-white">
          <span>💬</span>
          <span>{card.comments}</span>
        </div>
        <div className="flex items-center gap-1 text-white">
          <Eye size={16} />
          <span>{card.views}</span>
        </div>
      </div>
    </div>
  );
};

const ContentPage = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('all');
  
  // State for search and filters
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    class: [],
    background: [],
    subject: []
  });
  
  // State for content to display
  const [displayContent, setDisplayContent] = useState({
    trending: [...contentData.all.trending],
    cards: [...contentData.all.cards]
  });
  
  // Filter options
  const filterOptions = {
    class: ["11th", "12th"],
    background: ["JEE", "NEET"],
    subject: ["Physics", "Chemistry", "Mathematics", "Biology"]
  };
  
  // Add metadata to cards for filtering
  const getMetadata = (card) => {
    // Subject extraction
    let subject = null;
    if (card.title.toLowerCase().includes('physics') || card.content.toLowerCase().includes('physics')) {
      subject = "Physics";
    } else if (card.title.toLowerCase().includes('chem') || card.content.toLowerCase().includes('chem')) {
      subject = "Chemistry";
    } else if (card.title.toLowerCase().includes('math') || card.content.toLowerCase().includes('math')) {
      subject = "Mathematics";
    } else if (card.title.toLowerCase().includes('bio') || card.content.toLowerCase().includes('bio')) {
      subject = "Biology";
    }
    
    // Background extraction
    let background = null;
    if (card.title.toLowerCase().includes('jee') || card.content.toLowerCase().includes('jee')) {
      background = "JEE";
    } else if (card.title.toLowerCase().includes('neet') || card.content.toLowerCase().includes('neet')) {
      background = "NEET";
    }
    
    // Class extraction - simplified
    let className = null;
    if (card.title.toLowerCase().includes('11th') || card.content.toLowerCase().includes('11th')) {
      className = "11th";
    } else if (card.title.toLowerCase().includes('12th') || card.content.toLowerCase().includes('12th')) {
      className = "12th";
    }
    
    return {
      subject,
      background,
      class: className
    };
  };
  
  // Effect for tab changes
  useEffect(() => {
    applyFiltersAndSearch();
  }, [activeTab, searchTerm, activeFilters]);
  
  // Function to apply filters and search
  const applyFiltersAndSearch = () => {
    // Start with content from the active tab
    let trendingItems = [...contentData[activeTab].trending];
    let cardItems = [...contentData[activeTab].cards];
    
    // Apply search term if exists
    if (searchTerm.trim() !== '') {
      // Filter trending items
      trendingItems = trendingItems.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      // Filter card items
      cardItems = cardItems.filter(card => 
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply metadata filters if any are active
    if (Object.values(activeFilters).some(arr => arr.length > 0)) {
      // For trending items
      trendingItems = trendingItems.filter(item => {
        // Extract possible metadata from title and category
        const category = item.category.toLowerCase();
        
        // Check subject filter
        if (activeFilters.subject.length > 0) {
          const hasSubjectMatch = activeFilters.subject.some(subject => 
            category.includes(subject.toLowerCase())
          );
          if (!hasSubjectMatch) return false;
        }
        
        // Check background filter
        if (activeFilters.background.length > 0) {
          const hasBackgroundMatch = activeFilters.background.some(bg => 
            category.includes(bg.toLowerCase())
          );
          if (!hasBackgroundMatch) return false;
        }
        
        return true;
      });
      
      // For content cards
      cardItems = cardItems.filter(card => {
        const metadata = getMetadata(card);
        
        // Check subject filter
        if (activeFilters.subject.length > 0 && metadata.subject) {
          if (!activeFilters.subject.includes(metadata.subject)) {
            return false;
          }
        }
        
        // Check background filter
        if (activeFilters.background.length > 0 && metadata.background) {
          if (!activeFilters.background.includes(metadata.background)) {
            return false;
          }
        }
        
        // Check class filter
        if (activeFilters.class.length > 0 && metadata.class) {
          if (!activeFilters.class.includes(metadata.class)) {
            return false;
          }
        }
        
        return true;
      });
    }
    
    // Update the state with filtered content
    setDisplayContent({
      trending: trendingItems,
      cards: cardItems
    });
  };
  
  // Toggle a filter option
  const toggleFilter = (filterType, value) => {
    setActiveFilters(prev => {
      const newFilters = {...prev};
      if (newFilters[filterType].includes(value)) {
        // Remove the filter
        newFilters[filterType] = newFilters[filterType].filter(item => item !== value);
      } else {
        // Add the filter
        newFilters[filterType] = [...newFilters[filterType], value];
      }
      return newFilters;
    });
  };
  
  // Clear all filters and search
  const clearAllFilters = () => {
    setActiveFilters({
      class: [],
      background: [],
      subject: []
    });
    setSearchTerm('');
  };
  
  // Count total active filters
  const getActiveFilterCount = () => {
    return Object.values(activeFilters).flat().length;
  };
  
  // Handle ContentCard interactions
  const handleLike = (cardId) => {
    console.log(`Liked card ${cardId}`);
    // Implement like functionality here
  };
  
  const handleView = (cardId) => {
    console.log(`Viewed card ${cardId}`);
    // Implement view tracking here
  };
  
  return (
    <div className="bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">JEE/NEET Insights</h1>
      
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-700 mb-6">
        {Object.keys(contentData).map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 -mb-px ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
          </button>
        ))}
      </div>
      
      {/* Search and Filter Row */}
      <div className="flex gap-4 mb-6 w-full">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search insights..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800 rounded-lg py-4 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 text-white"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={20} />
          <span>Filter</span>
          {getActiveFilterCount() > 0 && (
            <span className="bg-blue-500 text-xs rounded-full px-2 py-1">
              {getActiveFilterCount()}
            </span>
          )}
        </button>
      </div>
      
      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button 
              onClick={clearAllFilters}
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              Clear all
            </button>
          </div>
          
          {/* Filter Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Class Filter */}
            <div>
              <h3 className="text-gray-400 mb-2 text-sm font-medium">Class</h3>
              <div className="flex flex-wrap gap-2">
                {filterOptions.class.map(option => (
                  <button
                    key={`class-${option}`}
                    onClick={() => toggleFilter('class', option)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeFilters.class.includes(option)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Background Filter */}
            <div>
              <h3 className="text-gray-400 mb-2 text-sm font-medium">Background</h3>
              <div className="flex flex-wrap gap-2">
                {filterOptions.background.map(option => (
                  <button
                    key={`background-${option}`}
                    onClick={() => toggleFilter('background', option)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeFilters.background.includes(option)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Subject Filter */}
            <div>
              <h3 className="text-gray-400 mb-2 text-sm font-medium">Subject</h3>
              <div className="flex flex-wrap gap-2">
                {filterOptions.subject.map(option => (
                  <button
                    key={`subject-${option}`}
                    onClick={() => toggleFilter('subject', option)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      activeFilters.subject.includes(option)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Content Display */}
      {displayContent.trending.length > 0 || displayContent.cards.length > 0 ? (
        <>
          {/* Trending Section */}
          {displayContent.trending.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Trending Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {displayContent.trending.map(item => (
                  <div key={item.id} className="bg-gray-800 p-4 rounded-lg hover:bg-gray-750 transition-colors">
                    <h3 className="font-medium mb-1 text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{item.category}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <span>👍</span>
                        <span>{item.likes}</span>
                      </div>
                      <div className="text-gray-400">
                        {item.posts} posts
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Content Cards */}
          {displayContent.cards.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Latest Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayContent.cards.map(card => (
                  <ContentCard 
                    key={card.id} 
                    card={card} 
                    onLike={handleLike} 
                    onView={handleView} 
                  />
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        // No results state
        <div className="text-center py-12 bg-gray-800 rounded-lg">
          <p className="text-xl mb-2">No matching content found</p>
          <p className="text-gray-400 mb-4">Try adjusting your filters or search term</p>
          <button 
            onClick={clearAllFilters}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ContentPage;