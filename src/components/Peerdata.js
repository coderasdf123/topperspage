// ContentData.js - Separate content data file
export const PeerData = {
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

export default PeerData;