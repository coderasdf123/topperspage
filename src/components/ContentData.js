// ContentData.js
{/*export const contentData = {
  all: {
    trending: [
      { id: 1, title: "Time Management on Exam Day", category: "Trending in JEE", likes: 324, posts: "21.5K", class: "12th", examType: "JEE" },
      { id: 2, title: "Quick Physics Formula Revision", category: "Trending in Physics", likes: 286, posts: "19.3K", class: "11th", examType: "JEE" },
      { id: 3, title: "Mental Preparation Techniques", category: "Trending in JEE", likes: 253, posts: "17.8K", class: "12th", examType: "NEET" }
    ],
    cards: [
      {
        id: 101,
        title: "10-Day Physics Revision Strategy",
        author: "Rohan S.",
        content: "I divide my revision into modules, focusing on one core concept each day. Starting with mechanics, followed by electromagnetics...",
        likes: 156,
        comments: 23,
        views: 422,
        class: "12th",
        examType: "JEE"
      },
      {
        id: 102,
        title: "Organic Chemistry Pattern Analysis",
        author: "Priya K.",
        content: "After analyzing past papers, I've noticed a strong focus on reaction mechanisms. Here's my approach to tackling these questions...",
        likes: 142,
        comments: 19,
        views: 387,
        class: "11th",
        examType: "NEET"
      }
    ]
  },
  strategies: {
    trending: [
      { id: 4, title: "Effective Mind Mapping", category: "Trending in Strategies", likes: 412, posts: "28.7K", class: "12th", examType: "JEE" },
      { id: 5, title: "Spaced Repetition Technique", category: "Trending in JEE", likes: 356, posts: "23.2K", class: "11th", examType: "JEE" },
      { id: 6, title: "Formula Memorization Tricks", category: "Trending in Physics", likes: 298, posts: "20.6K", class: "12th", examType: "NEET" }
    ],
    cards: [
      {
        id: 103,
        title: "Mathematics Revision Strategy",
        author: "Amit R.",
        content: "Using the pyramid approach: Start with basics, move to complex problems, and finally tackle previous year questions...",
        likes: 189,
        comments: 27,
        views: 512,
        class: "12th",
        examType: "JEE"
      },
      {
        id: 104,
        title: "Physics Formula Framework",
        author: "Sneha M.",
        content: "Created a comprehensive framework linking related formulas. Starting from basic equations to derived formulas...",
        likes: 165,
        comments: 31,
        views: 473,
        class: "11th",
        examType: "NEET"
      }
    ]
  },
  problemSolving: {
    trending: [
      { id: 7, title: "Common Integration Mistakes", category: "Trending in Math", likes: 387, posts: "25.9K", class: "12th", examType: "JEE" },
      { id: 8, title: "Vector Problem Solving", category: "Trending in Physics", likes: 342, posts: "22.1K", class: "11th", examType: "JEE" },
      { id: 9, title: "Chemical Equation Balancing", category: "Trending in Chemistry", likes: 289, posts: "19.7K", class: "12th", examType: "NEET" }
    ],
    cards: [
      {
        id: 105,
        title: "Problem Solving in Mechanics",
        author: "Ravi K.",
        content: "Breaking down complex problems into fundamental concepts. Using free body diagrams effectively...",
        likes: 178,
        comments: 34,
        views: 498,
        class: "12th",
        examType: "JEE"
      },
      {
        id: 106,
        title: "Solving Organic Chemistry Problems",
        author: "Neha P.",
        content: "Understanding reaction mechanisms through electron movement. Identifying key functional groups...",
        likes: 156,
        comments: 28,
        views: 421,
        class: "11th",
        examType: "NEET"
      }
    ]
  },
  examDayTips: {
    trending: [
      { id: 10, title: "Last Day Preparation", category: "Trending in JEE", likes: 456, posts: "31.2K", class: "12th", examType: "JEE" },
      { id: 11, title: "Exam Hall Strategy", category: "Trending in Tips", likes: 389, posts: "26.5K", class: "11th", examType: "JEE" },
      { id: 12, title: "Time Management Tips", category: "Trending in JEE", likes: 345, posts: "23.8K", class: "12th", examType: "NEET" }
    ],
    cards: [
      {
        id: 107,
        title: "Exam Day Routine",
        author: "Anita S.",
        content: "Proven routine to keep you focused and energized. Including diet tips and revision strategy...",
        likes: 234,
        comments: 45,
        views: 567,
        class: "12th",
        examType: "JEE"
      },
      {
        id: 108,
        title: "Quick Review Techniques",
        author: "Rahul M.",
        content: "Effective methods to review key concepts in the last hour. Focus on high-yield topics...",
        likes: 198,
        comments: 37,
        views: 528,
        class: "11th",
        examType: "NEET"
      }
    ]
  }
};*/}





export const contentData = {
  all: {
    trending: [
      { 
        id: 1, 
        title: "Time Management on Exam Day", 
        category: "Trending in JEE", 
        likes: 324, 
        posts: "21.5K", 
        class: "12th", 
        examType: "JEE",
        relatedCards: [
          {
            id: 201,
            title: "My Time Management Success Story",
            author: "Rahul M.",
            content: "Here's how I managed my time during JEE: I divided the paper into 3 one-hour blocks. First hour for all questions I'm confident about, second hour for moderate difficulty, and last hour for challenging questions and revision...",
            likes: 245,
            comments: 42,
            views: 890,
            class: "12th",
            examType: "JEE"
          },
          {
            id: 202,
            title: "Time Management Mistakes to Avoid",
            author: "Priya S.",
            content: "Common mistakes I noticed: spending too much time on a single question, not keeping track of time, starting with difficult questions. Here's how to avoid these pitfalls...",
            likes: 189,
            comments: 31,
            views: 567,
            class: "12th",
            examType: "JEE"
          }
        ]
      },
      { 
        id: 2, 
        title: "Quick Physics Formula Revision", 
        category: "Trending in Physics", 
        likes: 286, 
        posts: "19.3K", 
        class: "11th", 
        examType: "JEE",
        relatedCards: [
          {
            id: 203,
            title: "Physics Formula Mind Maps",
            author: "Aditya K.",
            content: "I created mind maps linking related formulas. For example, all kinematics formulas are connected, showing how v=u+at relates to s=ut+(1/2)at²...",
            likes: 312,
            comments: 45,
            views: 923,
            class: "11th",
            examType: "JEE"
          },
          {
            id: 204,
            title: "Physics Formula Memorization Tips",
            author: "Shweta R.",
            content: "Instead of rote learning, understand the derivation. Here's how I remember complex formulas by breaking them down into simpler components...",
            likes: 278,
            comments: 39,
            views: 845,
            class: "11th",
            examType: "JEE"
          }
        ]
      },
      { 
        id: 3, 
        title: "Mental Preparation Techniques", 
        category: "Trending in JEE", 
        likes: 253, 
        posts: "17.8K", 
        class: "12th", 
        examType: "NEET",
        relatedCards: [
          {
            id: 205,
            title: "Stress Management During Exams",
            author: "Kiran P.",
            content: "Meditation and breathing exercises helped me stay calm. Here's my pre-exam routine that helped reduce anxiety and improve focus...",
            likes: 234,
            comments: 52,
            views: 678,
            class: "12th",
            examType: "NEET"
          },
          {
            id: 206,
            title: "Building Mental Resilience",
            author: "Anjali M.",
            content: "How to maintain composure when facing difficult questions: take deep breaths, use positive self-talk, and remember your preparation...",
            likes: 198,
            comments: 34,
            views: 567,
            class: "12th",
            examType: "NEET"
          }
        ]
      }
    ],
    cards: [
      // Keep existing cards
      {
        id: 101,
        title: "10-Day Physics Revision Strategy",
        author: "Rohan S.",
        content: "I divide my revision into modules, focusing on one core concept each day. Starting with mechanics, followed by electromagnetics...",
        likes: 156,
        comments: 23,
        views: 422,
        class: "12th",
        examType: "JEE"
      },
      {
        id: 102,
        title: "Organic Chemistry Pattern Analysis",
        author: "Priya K.",
        content: "After analyzing past papers, I've noticed a strong focus on reaction mechanisms. Here's my approach to tackling these questions...",
        likes: 142,
        comments: 19,
        views: 387,
        class: "11th",
        examType: "NEET"
      }
    ]
  },
  strategies: {
    trending: [
      // Add similar structure for other sections
      { 
        id: 4, 
        title: "Effective Mind Mapping", 
        category: "Trending in Strategies", 
        likes: 412, 
        posts: "28.7K", 
        class: "12th", 
        examType: "JEE",
        relatedCards: [
          {
            id: 207,
            title: "Mind Mapping for Complex Topics",
            author: "Vishal R.",
            content: "Creating mind maps helped me connect different concepts. Here's my approach to visual learning and concept mapping...",
            likes: 267,
            comments: 48,
            views: 789,
            class: "12th",
            examType: "JEE"
          },
          {
            id: 208,
            title: "Mind Mapping for Complex Topics",
            author: "Vishal R.",
            content: "Creating mind maps helped me connect different concepts. Here's my approach to visual learning and concept mapping...",
            likes: 267,
            comments: 48,
            views: 789,
            class: "12th",
            examType: "JEE"
          },
        ]
      },
      { 
        id: 5, 
        title: "Quick Physics Formula Revision", 
        category: "Trending in Physics", 
        likes: 286, 
        posts: "19.3K", 
        class: "11th", 
        examType: "JEE",
        relatedCards: [
          {
            id: 203,
            title: "Physics Formula Mind Maps",
            author: "Aditya K.",
            content: "I created mind maps linking related formulas. For example, all kinematics formulas are connected, showing how v=u+at relates to s=ut+(1/2)at²...",
            likes: 312,
            comments: 45,
            views: 923,
            class: "11th",
            examType: "JEE"
          },
          {
            id: 204,
            title: "Physics Formula Memorization Tips",
            author: "Shweta R.",
            content: "Instead of rote learning, understand the derivation. Here's how I remember complex formulas by breaking them down into simpler components...",
            likes: 278,
            comments: 39,
            views: 845,
            class: "11th",
            examType: "JEE"
          }
        ]
      },
      { 
        id: 6, 
        title: "Mental Preparation Techniques", 
        category: "Trending in JEE", 
        likes: 253, 
        posts: "17.8K", 
        class: "12th", 
        examType: "NEET",
        relatedCards: [
          {
            id: 205,
            title: "Stress Management During Exams",
            author: "Kiran P.",
            content: "Meditation and breathing exercises helped me stay calm. Here's my pre-exam routine that helped reduce anxiety and improve focus...",
            likes: 234,
            comments: 52,
            views: 678,
            class: "12th",
            examType: "NEET"
          },
          {
            id: 206,
            title: "Building Mental Resilience",
            author: "Anjali M.",
            content: "How to maintain composure when facing difficult questions: take deep breaths, use positive self-talk, and remember your preparation...",
            likes: 198,
            comments: 34,
            views: 567,
            class: "12th",
            examType: "NEET"
          }
        ]
      },
     
     
    ],
    cards: [
      // Keep existing cards
      {
        id: 103,
        title: "Mathematics Revision Strategy",
        author: "Amit R.",
        content: "Using the pyramid approach: Start with basics, move to complex problems, and finally tackle previous year questions...",
        likes: 189,
        comments: 27,
        views: 512,
        class: "12th",
        examType: "JEE"
      },
      {
        id: 104,
        title: "Physics Formula Framework",
        author: "Sneha M.",
        content: "Created a comprehensive framework linking related formulas. Starting from basic equations to derived formulas...",
        likes: 165,
        comments: 31,
        views: 473,
        class: "11th",
        examType: "NEET"
      }
    ]
  },

  // Continue for other sections (problemSolving, examDayTips)
  problemSolving: {
    trending: [
      // Add similar structure for other sections
      { 
        id: 4, 
        title: "Effective Mind Mapping", 
        category: "Trending in Strategies", 
        likes: 412, 
        posts: "28.7K", 
        class: "12th", 
        examType: "JEE",
        relatedCards: [
          {
            id: 207,
            title: "Mind Mapping for Complex Topics",
            author: "Vishal R.",
            content: "Creating mind maps helped me connect different concepts. Here's my approach to visual learning and concept mapping...",
            likes: 267,
            comments: 48,
            views: 789,
            class: "12th",
            examType: "JEE"
          },
          {
            id: 208,
            title: "Mind Mapping for Complex Topics",
            author: "Vishal R.",
            content: "Creating mind maps helped me connect different concepts. Here's my approach to visual learning and concept mapping...",
            likes: 267,
            comments: 48,
            views: 789,
            class: "12th",
            examType: "JEE"
          },
        ]
      },
      { 
        id: 5, 
        title: "Quick Physics Formula Revision", 
        category: "Trending in Physics", 
        likes: 286, 
        posts: "19.3K", 
        class: "11th", 
        examType: "JEE",
        relatedCards: [
          {
            id: 203,
            title: "Physics Formula Mind Maps",
            author: "Aditya K.",
            content: "I created mind maps linking related formulas. For example, all kinematics formulas are connected, showing how v=u+at relates to s=ut+(1/2)at²...",
            likes: 312,
            comments: 45,
            views: 923,
            class: "11th",
            examType: "JEE"
          },
          {
            id: 204,
            title: "Physics Formula Memorization Tips",
            author: "Shweta R.",
            content: "Instead of rote learning, understand the derivation. Here's how I remember complex formulas by breaking them down into simpler components...",
            likes: 278,
            comments: 39,
            views: 845,
            class: "11th",
            examType: "JEE"
          }
        ]
      },
      { 
        id: 6, 
        title: "Mental Preparation Techniques", 
        category: "Trending in JEE", 
        likes: 253, 
        posts: "17.8K", 
        class: "12th", 
        examType: "NEET",
        relatedCards: [
          {
            id: 205,
            title: "Stress Management During Exams",
            author: "Kiran P.",
            content: "Meditation and breathing exercises helped me stay calm. Here's my pre-exam routine that helped reduce anxiety and improve focus...",
            likes: 234,
            comments: 52,
            views: 678,
            class: "12th",
            examType: "NEET"
          },
          {
            id: 206,
            title: "Building Mental Resilience",
            author: "Anjali M.",
            content: "How to maintain composure when facing difficult questions: take deep breaths, use positive self-talk, and remember your preparation...",
            likes: 198,
            comments: 34,
            views: 567,
            class: "12th",
            examType: "NEET"
          }
        ]
      }
     
    ],
    cards: [
      // Keep existing cards
      {
        id: 103,
        title: "Mathematics Revision Strategy",
        author: "Amit R.",
        content: "Using the pyramid approach: Start with basics, move to complex problems, and finally tackle previous year questions...",
        likes: 189,
        comments: 27,
        views: 512,
        class: "12th",
        examType: "JEE"
      },
      {
        id: 104,
        title: "Physics Formula Framework",
        author: "Sneha M.",
        content: "Created a comprehensive framework linking related formulas. Starting from basic equations to derived formulas...",
        likes: 165,
        comments: 31,
        views: 473,
        class: "11th",
        examType: "NEET"
      }
    ]
  },
  examDayTips: {
    trending: [
      // Add similar structure for other sections
      { 
        id: 4, 
        title: "Effective Mind Mapping", 
        category: "Trending in Strategies", 
        likes: 412, 
        posts: "28.7K", 
        class: "12th", 
        examType: "JEE",
        relatedCards: [
          {
            id: 207,
            title: "Mind Mapping for Complex Topics",
            author: "Vishal R.",
            content: "Creating mind maps helped me connect different concepts. Here's my approach to visual learning and concept mapping...",
            likes: 267,
            comments: 48,
            views: 789,
            class: "12th",
            examType: "JEE"
          },
          {
            id: 208,
            title: "Mind Mapping for Complex Topics",
            author: "Vishal R.",
            content: "Creating mind maps helped me connect different concepts. Here's my approach to visual learning and concept mapping...",
            likes: 267,
            comments: 48,
            views: 789,
            class: "12th",
            examType: "JEE"
          },
        ]
      },
      { 
        id: 5, 
        title: "Quick Physics Formula Revision", 
        category: "Trending in Physics", 
        likes: 286, 
        posts: "19.3K", 
        class: "11th", 
        examType: "JEE",
        relatedCards: [
          {
            id: 203,
            title: "Physics Formula Mind Maps",
            author: "Aditya K.",
            content: "I created mind maps linking related formulas. For example, all kinematics formulas are connected, showing how v=u+at relates to s=ut+(1/2)at²...",
            likes: 312,
            comments: 45,
            views: 923,
            class: "11th",
            examType: "JEE"
          },
          {
            id: 204,
            title: "Physics Formula Memorization Tips",
            author: "Shweta R.",
            content: "Instead of rote learning, understand the derivation. Here's how I remember complex formulas by breaking them down into simpler components...",
            likes: 278,
            comments: 39,
            views: 845,
            class: "11th",
            examType: "JEE"
          }
        ]
      },
      { 
        id: 6, 
        title: "Mental Preparation Techniques", 
        category: "Trending in JEE", 
        likes: 253, 
        posts: "17.8K", 
        class: "12th", 
        examType: "NEET",
        relatedCards: [
          {
            id: 205,
            title: "Stress Management During Exams",
            author: "Kiran P.",
            content: "Meditation and breathing exercises helped me stay calm. Here's my pre-exam routine that helped reduce anxiety and improve focus...",
            likes: 234,
            comments: 52,
            views: 678,
            class: "12th",
            examType: "NEET"
          },
          {
            id: 206,
            title: "Building Mental Resilience",
            author: "Anjali M.",
            content: "How to maintain composure when facing difficult questions: take deep breaths, use positive self-talk, and remember your preparation...",
            likes: 198,
            comments: 34,
            views: 567,
            class: "12th",
            examType: "NEET"
          }
        ]
      }
     
    ],
    cards: [
      // Keep existing cards
      {
        id: 103,
        title: "Mathematics Revision Strategy",
        author: "Amit R.",
        content: "Using the pyramid approach: Start with basics, move to complex problems, and finally tackle previous year questions...",
        likes: 189,
        comments: 27,
        views: 512,
        class: "12th",
        examType: "JEE"
      },
      {
        id: 104,
        title: "Physics Formula Framework",
        author: "Sneha M.",
        content: "Created a comprehensive framework linking related formulas. Starting from basic equations to derived formulas...",
        likes: 165,
        comments: 31,
        views: 473,
        class: "11th",
        examType: "NEET"
      }
    ]
  }
  
};