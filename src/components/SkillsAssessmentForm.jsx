import React, { useState, useEffect, useRef } from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Line, Area } from 'recharts';
import { ChevronRight, ChevronLeft, BookOpen, Award, Target, Sparkles, CheckCircle } from 'lucide-react';

const SkillsAssessmentForm = () => {
  // Add useRef for the top of the questionnaire
  const topRef = useRef(null);
  const formRef = useRef(null);

  const parameters = [
    'Conceptual Clarity',
    'Conceptual Clarity',
    'Conceptual Clarity',
    'Problem Solving',
    'Problem Solving',
    'Problem Solving',
    'Analytical Thinking',
    'Formula Application',
    'Speed & Accuracy',
    'Pattern Recognition',
    'Numerical Proficiency',
    'Exam Strategy',
    'Application to New Situations',
    'Logical Reasoning',
    'Time Management'
  ];

  // Group parameters for analysis (keeping unique parameter names)
  const uniqueParameters = [
    'Problem Solving',
    'Conceptual Clarity',
    'Analytical Thinking',
    'Formula Application',
    'Speed & Accuracy',
    'Pattern Recognition',
    'Numerical Proficiency',
    'Exam Strategy',
    'Application to New Situations',
    'Logical Reasoning',
    'Time Management'
  ];

  const proficiencyLevels = [
    { id: 1, label: 'Explorer', value: 1 },
    { id: 2, label: 'Beginner', value: 2 },
    { id: 3, label: 'Intermediate', value: 3 },
    { id: 4, label: 'Average Topper', value: 4 },
    { id: 5, label: 'Topper', value: 5 }
  ];
  
  const questions = [
     "How do you feel when encountering a completely new topic in Physics, Chemistry, Mathematics or Biology?",
     "When you encounter an unfamiliar explanation of a known topic (like a new derivation or a different analogy), how do you react?",
     'How do you approach the "why" behind scientific or mathematical concepts?',  
     "When faced with a difficult question that you don't immediately know how to solve, what is your first instinct?",
     "How do you handle problems that require applying multiple concepts from different topics?",
     "When you make a mistake in problem-solving, how do you approach learning from it?",
     "How do you approach understanding the structure of a problem before attempting to solve it?",
     "When a problem doesn't directly mention a formula, how do you determine which one to use?",
     "How do you handle time pressure in mock tests and exams?",
     "When facing a new type of problem, how do you determine the best solving strategy?",
     "How do you handle lengthy calculations in time-constrained situations?",
     "How do you decide which questions to attempt first in an exam?",
     "How well can you apply concepts to novel or unfamiliar problem situations?",
     "How effectively can you use logical reasoning to solve puzzles and non-standard problems?",
     "How well do you distribute your study time across different subjects and topics?"
  ];

  const options = [
    ["I don't get it at all!", "I look at it, but it's not clear.", "I sort of understand, but not fully.", "I study it carefully and start making sense of it.", "I get excited and dive in with confidence!"],

    ["I'm confused and don't get it!", "I'm not sure, so I stick to what I know.", "It makes some sense, but I'm unsure.", "I compare it to what I know and piece it together.", "I enjoy it and quickly see how it fits!"],
    
    ["I don't care about why!", "Why is interesting, but I skip it.", "I think about it, but it's hard.", "I question it and work to understand the reason.", "I'm hooked on the why and explore it fully!"],
    
    ["I give up quickly!", "I try something I've seen before.", "I break it down, but get stuck.", "I take a deep breath, try a few steps, and keep going even if it's slow.", "I stay calm, think it through, and tackle it with confidence!"],
    
    ["It's too much—I skip it!", "I try parts, but it doesn't work.", "I see some pieces, but it falls apart.", "I link what I know and grind through it, though it takes effort.", "I see the connections fast and solve it smoothly!"],
    
    ["I move on and forget it!", "I check the answer and let it go.", "I look at it, but don't understand.", "I revisit it and figure out where I went wrong.", "I analyze it deeply and improve right away!"],
    
    ["I start with formulas and mess up!", "I read it, but it's confusing.", "I break it apart, but miss things.", "I outline the key parts and build a plan.", "I instantly see the structure and know my approach!"],
    
    ["No formula? I don't know!", "I guess and hope it works.", "I choose one, but I'm not sure.", "I think it through and select what seems best.", "I spot the perfect formula with ease!"],
    
    ["I go slow and still get it wrong!", "I do the easy ones, then stress out.", "I'm decent, but rush and make errors.", "I pace myself and finish with good results.", "I stay cool and nail it under pressure!"],
    
    ["I try random things and get stuck!", "I look for something familiar.", "I break it down and connect some dots.", "I study it and pick a solid method.", "I recognize the pattern and jump to the solution!"],
    
    ["I take forever and redo a lot!", "I try to be quick, but run out of time.", "I speed up, but make mistakes.", "I simplify it and get through quickly.", "I calculate fast and flawlessly every time!"],
    
    ["I just go in order and hope!", "I start with what I know, then stop.", "I do easy ones, but take too long.", "I scan it and prioritize what I'm strong at.", "I strategize instantly and hit the best ones first!"],
    
    ["New problems? I can't do it!", "I try, but it doesn't go far.", "I can do it with some effort.", "I adapt my knowledge and work it out.", "I thrive on new challenges and solve them easily!"],
    
    ["Logic? I don't get it!", "I can do simple ones, but not hard ones.", "I solve basic puzzles okay.", "I tackle tough ones with steady reasoning.", "I crack any puzzle fast with sharp logic!"],
    
    ["I don't plan—it's a mess!", "I try to plan, but don't stick to it.", "I spread it out decently.", "I make a schedule and follow it well.", "I optimize my time like a pro across everything!"]
  ];

  const improvementResources = {
    "Problem Solving": [
      "Break down complex problems into smaller, manageable steps to understand the core requirements.",
      "Practice solving multi-concept problems by combining ideas from different topics systematically.",
      "Review mistakes thoroughly after each problem to identify patterns in your errors and correct them."
    ],
    "Conceptual Clarity": [
      "Focus on understanding the 'why' behind concepts by exploring derivations and real-world applications.",
      "Revisit foundational topics regularly to strengthen your grasp of core principles.",
      "Engage with new explanations or analogies by comparing them to what you already know."
    ],
    "Analytical Thinking": [
      "Practice structured problem analysis by outlining the problem’s components before solving.",
      "Work on puzzles and non-standard problems to enhance your ability to think critically.",
      "Develop a habit of questioning assumptions in problems to uncover hidden patterns."
    ],
    "Formula Application": [
      "Create a mental checklist of formulas and practice identifying which one applies to a problem.",
      "Solve problems that require indirect formula use to improve your ability to adapt formulas.",
      "Memorize key formulas by applying them in varied contexts to build confidence."
    ],
    "Speed & Accuracy": [
      "Take timed practice tests to improve your speed while maintaining accuracy.",
      "Simplify calculations by using approximations or shortcuts where appropriate.",
      "Focus on reducing careless mistakes by double-checking your work during practice."
    ],
    "Pattern Recognition": [
      "Study past exam problems to identify recurring question types and solution patterns.",
      "Practice problems with a focus on spotting shortcuts or common techniques.",
      "Group similar problems together during study sessions to reinforce pattern recognition."
    ],
    "Numerical Proficiency": [
      "Practice mental math techniques to speed up calculations without a calculator.",
      "Work on problems with lengthy calculations to build stamina and accuracy.",
      "Use approximation methods to quickly estimate answers and verify your calculations."
    ],
    "Exam Strategy": [
      "Develop a question selection strategy by prioritizing problems you’re confident in first.",
      "Simulate exam conditions during practice to improve time allocation across sections.",
      "Review past mock tests to identify and adjust ineffective strategies."
    ],
    "Application to New Situations": [
      "Tackle unfamiliar problems by relating them to concepts you already understand.",
      "Practice with novel problem sets to build confidence in adapting to new scenarios.",
      "Focus on understanding the underlying principles so you can apply them flexibly."
    ],
    "Logical Reasoning": [
      "Solve logic puzzles regularly to sharpen your reasoning skills.",
      "Break down complex reasoning problems into smaller logical steps.",
      "Practice identifying logical patterns in non-standard JEE questions."
    ],
    "Time Management": [
      "Create a daily study schedule and stick to it to balance all subjects.",
      "Use techniques like the Pomodoro method to maintain focus during study sessions.",
      "Prioritize high-impact topics based on your weaknesses to optimize study time."
    ]
  };

  const [responses, setResponses] = useState(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [questionsPerPage, setQuestionsPerPage] = useState(2);
  const [pageTransition, setPageTransition] = useState("");

  const handleOptionSelect = (questionIndex, optionValue) => {
    const newResponses = [...responses];
    newResponses[questionIndex] = optionValue;
    setResponses(newResponses);
  };
  
  // Aggregate scores for parameters that have multiple questions
  const getAggregatedScores = () => {
    const aggregatedScores = {};
    
    // Initialize all parameters with 0
    uniqueParameters.forEach(param => {
      aggregatedScores[param] = { total: 0, count: 0 };
    });
    
    // Sum up scores for each parameter
    parameters.forEach((param, index) => {
      if (responses[index] !== null) {
        aggregatedScores[param].total += responses[index];
        aggregatedScores[param].count += 1;
      }
    });
    
    // Calculate averages
    const finalScores = {};
    uniqueParameters.forEach(param => {
      finalScores[param] = aggregatedScores[param].count > 0 
        ? aggregatedScores[param].total / aggregatedScores[param].count 
        : 0;
    });
    
    return finalScores;
  };

  const calculateProficiencyLevel = () => {
    if (responses.includes(null)) return "Incomplete Assessment";
    
    const aggregatedScores = getAggregatedScores();
    const values = Object.values(aggregatedScores);
    const sum = values.reduce((acc, val) => acc + val, 0);
    const average = sum / values.length;
    
    if (average <= 1.5) return "Explorer";
    if (average <= 2.5) return "Beginner";
    if (average <= 3.5) return "Intermediate";
    if (average <= 4.5) return "Average Topper";
    return "Topper";
  };

  const getNextLevelProficiency = (currentLevel) => {
    switch(currentLevel) {
      case "Explorer": return "Beginner";
      case "Beginner": return "Intermediate";
      case "Intermediate": return "Average Topper";
      case "Average Topper": return "Topper";
      case "Topper": return "Topper";
      default: return "Beginner";
    }
  };

  const generateIdealNextLevelData = (currentLevel) => {
    const aggregatedScores = getAggregatedScores();
    const nextLevel = getNextLevelProficiency(currentLevel);
    let targetValue;
    
    switch(nextLevel) {
      case "Explorer": targetValue = 1; break;
      case "Beginner": targetValue = 2; break;
      case "Intermediate": targetValue = 3; break;
      case "Average Topper": targetValue = 4; break;
      case "Topper": targetValue = 5; break;
      default: targetValue = 3;
    }
    
    const idealScores = {};
    Object.keys(aggregatedScores).forEach(param => {
      idealScores[param] = Math.min(aggregatedScores[param] + 1.5, targetValue);
    });
    
    return idealScores;
  };

  const prepareRadarChartData = () => {
    const aggregatedScores = getAggregatedScores();
    return uniqueParameters.map(param => ({
      parameter: param,
      value: aggregatedScores[param] || 0
    }));
  };

  const prepareLineChartData = () => {
    const aggregatedScores = getAggregatedScores();
    return uniqueParameters.map(param => ({
      name: param,
      Ideal: 5,
      User: aggregatedScores[param] || 0,
      gap: 5 - (aggregatedScores[param] || 0),
      fill: 0
    }));
  };

  const identifyImprovementAreas = () => {
    const currentLevel = calculateProficiencyLevel();
    const idealNextLevelScores = generateIdealNextLevelData(currentLevel);
    const aggregatedScores = getAggregatedScores();
    const improvements = [];
    
    Object.keys(aggregatedScores).forEach(param => {
      const currentScore = aggregatedScores[param];
      const idealScore = idealNextLevelScores[param];
      const gap = idealScore - currentScore;
      
      if (gap >= 1) {
        improvements.push({
          parameter: param,
          gap: gap,
          priority: gap >= 1.5 ? "High" : "Medium"
        });
      }
    });
    
    return improvements.sort((a, b) => {
      if (a.priority === "High" && b.priority !== "High") return -1;
      if (a.priority !== "High" && b.priority === "High") return 1;
      return b.gap - a.gap;
    });
  };

  const analyzeStrengthsAndWeaknesses = () => {
    if (responses.includes(null)) return { strengths: [], weaknesses: [], insights: "Complete the assessment to see insights." };
    
    const aggregatedScores = getAggregatedScores();
    const strengths = [];
    const weaknesses = [];
    
    Object.entries(aggregatedScores).forEach(([param, score]) => {
      if (score >= 4) strengths.push({ parameter: param, score: score });
      else if (score <= 2) weaknesses.push({ parameter: param, score: score });
    });
    
    strengths.sort((a, b) => b.score - a.score);
    weaknesses.sort((a, b) => a.score - b.score);
    
    let insights = "";
    const proficiencyLevel = calculateProficiencyLevel();
    const nextLevel = getNextLevelProficiency(proficiencyLevel);
    
    switch (proficiencyLevel) {
      case "Explorer": insights = `You're just beginning your JEE journey. Focus on building fundamental concepts and practice basic problem types daily. With consistent effort, you can reach the ${nextLevel} level in 2-3 months.`; break;
      case "Beginner": insights = `You have basic understanding of JEE concepts. Concentrate on strengthening your conceptual understanding and practicing standard JEE problems regularly to reach the ${nextLevel} level.`; break;
      case "Intermediate": insights = `You have solid skills across most areas. Increase your practice with advanced problems and work on improving your speed to reach ${nextLevel} level.`; break;
      case "Average Topper": insights = `You're performing very well! Focus on the toughest problems and fine-tune your test-taking strategy to reach ${nextLevel} level.`; break;
      case "Topper": insights = "You're already performing at an excellent level. Keep challenging yourself with the most difficult problems and maintain your consistent practice routine."; break;
      default: insights = "Complete the assessment to see personalized insights.";
    }
    
    return { 
      strengths: strengths.map(s => s.parameter), 
      weaknesses: weaknesses.map(w => w.parameter), 
      insights
    };
  };

  // Fixed CustomTooltip component to properly display improvement strategies
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const paramName = payload[0].payload.name;
      const strategies = improvementResources[paramName] || [];
  
      return (
        <div className="bg-white p-4 border rounded shadow-lg max-w-xs" style={{ position: 'relative', left: '20px' }}>
          <p className="font-bold text-lg">{paramName}</p>
          <p>Your Score: {payload[0].payload.User.toFixed(1)}</p>
          <p>Ideal Topper: 5</p>
          <p>Gap: {payload[0].payload.gap.toFixed(1)}</p>
          <p className="mt-2 font-semibold text-blue-600">Improvement Strategies:</p>
          <ul className="list-disc pl-5 space-y-2">
            {strategies.map((tip, idx) => (
              <li key={idx} className="text-sm">
                {tip}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!responses.includes(null)) {
      setPageTransition("page-turn-forward");
      setTimeout(() => {
        setShowResults(true);
        setPageTransition("");
      }, 600);
    } else {
      alert("Please answer all questions before submitting. Navigate through all pages to complete the assessment.");
    }
  };

  const handleReset = () => {
    setPageTransition("page-turn-backward");
    setTimeout(() => {
      setResponses(Array(questions.length).fill(null));
      setShowResults(false);
      setCurrentPage(0);
      setPageTransition("");
    }, 600);
  };

  const handleNextPage = () => {
    setPageTransition("page-turn-forward");
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
      setPageTransition("");
      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 600);
  };

  const handlePrevPage = () => {
    setPageTransition("page-turn-backward");
    setTimeout(() => {
      setCurrentPage(currentPage - 1);
      setPageTransition("");
      if (topRef.current) {
        topRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 600);
  };

  // Function to update questions per page based on screen width
  useEffect(() => {
    const updateQuestionsPerPage = () => {
      if (window.innerWidth < 640) { // Tailwind's 'sm' breakpoint (640px)
        setQuestionsPerPage(2);
      } else {
        setQuestionsPerPage(5);
      }
    };

    updateQuestionsPerPage(); // Set initial value
    window.addEventListener("resize", updateQuestionsPerPage); // Listen for screen resize

    return () => window.removeEventListener("resize", updateQuestionsPerPage); // Cleanup event listener
  }, []);

  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const startIndex = currentPage * questionsPerPage;
  const endIndex = Math.min(startIndex + questionsPerPage, questions.length);
  const currentQuestions = questions.slice(startIndex, endIndex);
  const currentParameters = parameters.slice(startIndex, endIndex);
  const currentOptions = options.slice(startIndex, endIndex);

  // For results page
  const { strengths, weaknesses, insights } = analyzeStrengthsAndWeaknesses();
  const improvementAreas = identifyImprovementAreas();
  const currentLevel = calculateProficiencyLevel();
  const nextLevel = getNextLevelProficiency(currentLevel);

  // Check if all questions have been answered
  const allQuestionsAnswered = !responses.includes(null);

  return (
    <div className="w-full">
      {/* EVALUATE YOUR PROGRESS heading - Added outside and above the main card */}
      <div className="flex flex-row items-center sm:gap-2 mb-4 sm:pl-[20%] pt-8 sm:pt-20">
        <img
          className="w-4 h-4"
          alt="Star"
          src="/starsvg.svg"
        />
        <div className="text-[#a3a3a3] text-xs font-semibold font-sf-pro">
          EVALUATE YOUR PROGRESS
        </div>
      </div>

      <div ref={topRef} className="max-w-4xl mx-auto sm:ml-[20%] relative overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Flowing River */}
          <svg className="absolute w-full h-full" preserveAspectRatio="none">
            <path 
              d="M0,100 Q200,50 400,100 T800,100 T1200,100 T1600,100 V500 H0 Z" 
              fill="rgba(59, 130, 246, 0.1)"
              className="animate-flow"
            />
            <path 
              d="M0,130 Q200,80 400,130 T800,130 T1200,130 T1600,130 V500 H0 Z" 
              fill="rgba(99, 102, 241, 0.07)"
              className="animate-flow-delayed"
            />
          </svg>
          
          {/* Floating Icons */}
          <div className="absolute top-10 right-10 text-blue-400 opacity-20 animate-float">
            <Sparkles size={40} />
          </div>
          <div className="absolute bottom-20 left-10 text-indigo-400 opacity-20 animate-float-delayed">
            <Target size={30} />
          </div>
          <div className="absolute top-1/3 left-1/4 text-blue-300 opacity-20 animate-float-slow">
            <Award size={24} />
          </div>
        </div>

        {/* Main Content */}
        <div className={`relative ${pageTransition} p-6`}>
          {/* Removed duplicate EVALUATE YOUR PROGRESS heading that was here */}
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 pt-[50px]">
            <h1 className="text-2xl font-bold text-center mb-2 text-indigo-800">Skills Assessment</h1>
            <p className="text-center text-gray-600 mb-4">Identify your strengths and areas for improvement</p>
          </div>
              
            
        {!showResults ? (
          <div ref={formRef} className="bg-white rounded-lg shadow-md p-6 relative z-10">
            <div className="mb-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="mr-2 text-indigo-600" size={20} />
                <p className="text-gray-600 font-medium">Page {currentPage + 1} of {totalPages}</p>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}></div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {currentQuestions.map((question, index) => {
                const questionIndex = startIndex + index;
                const param = currentParameters[index] || "Unknown Parameter";
                const opts = currentOptions[index] || [];

                return (
                  <div key={questionIndex} className="p-5 bg-white border border-indigo-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start">
                      <div className="bg-indigo-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0 mr-3 -translate-x-[8px] sm:translate-x-[0%] relative sm:top-[20px]">
                        {questionIndex + 1}
                      </div>
                      <div className="w-full">
                        <h3 className="font-semibold text-sm sm:text-lg mb-1 text-black relative text-left -top-[20px] sm:top-[0px]">{question}</h3>
                        <p className="text-sm text-indigo-600 mb-3 font-medium relative right-4 sm:right-0">Focus: {param}</p>
                        <div className="space-y-2 mt-4 relative right-[30px] sm:right-[0px]">
                          {opts.map((option, oIndex) => (
                            <div 
                              key={oIndex} 
                              className={`flex items-start p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                                responses[questionIndex] === oIndex + 1 
                                  ? 'border-indigo-500 bg-indigo-50' 
                                  : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50'
                              }`}
                              onClick={() => handleOptionSelect(questionIndex, oIndex + 1)}
                            >
                              <div className="flex items-center mr-3 mt-1">
                                <input
                                  type="radio"
                                  name={`question-${questionIndex}`}
                                  checked={responses[questionIndex] === oIndex + 1}
                                  onChange={() => handleOptionSelect(questionIndex, oIndex + 1)}
                                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 mr-2" // Small radio button
                                />
                                {responses[questionIndex] === oIndex + 1 && (
                                  <div className="w-5 h-5 rounded-full border border-indigo-600 bg-indigo-600 flex items-center justify-center flex-shrink-0 -ml-6">
                                    <CheckCircle size={20} className="text-white" />
                                  </div>
                                )}
                              </div>
                              <label className="text-gray-700 cursor-pointer w-full">{option}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              <div className="flex justify-center space-x-2 sm:space-x-4 mt-8">
                {currentPage > 0 && (
                  <button 
                    type="button" 
                    onClick={handlePrevPage} 
                    className="px-6 py-1 sm:py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-100 transition duration-200 flex items-center font-medium"
                  >
                  <ChevronLeft size={18} className="mr-1" />
                    Previous
                  </button>
                )}
                
                {currentPage < totalPages - 1 ? (
                  <button 
                    type="button" 
                    onClick={handleNextPage} 
                    className="px-6 py-1 sm:py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center font-medium shadow-md hover:shadow-lg"
                  >
                    Next
                    <ChevronRight size={18} className="mr-1" />
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className={`px-6 py-1 sm:py-2 ${allQuestionsAnswered ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'} text-white rounded-lg transition duration-200`}
                    disabled={!allQuestionsAnswered}
                  >
                    {allQuestionsAnswered ? 'Submit Assessment' : 'Answer All Questions before Submitting'}
                  </button>
                )}
       
                <button 
                  type="button" 
                  onClick={handleReset} 
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-200"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-center mb-4">Your Proficiency Level: {currentLevel}</h2>
              <p className="text-center text-gray-700">{insights}</p>
            </div>
            
            <div className="h-96">
              <h3 className="text-lg font-semibold mb-2 text-center">Your Skills vs. Ideal Topper</h3>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={prepareLineChartData()} margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    interval={0}
                    angle={-90}
                    textAnchor="end"
                    height={100}
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis 
                    domain={[0, 5]} 
                    ticks={[0, 1, 2, 3, 4, 5]}
                    label={{ value: "Score", angle: -90, position: "insideLeft" }} 
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  
                  {/* Area between the ideal line and user line - showing the gap */}
                  <Area 
                    type="monotone" 
                    dataKey="gap" 
                    fill="#FF7F7F" 
                    fillOpacity={0.5} 
                    stroke="none"
                    name="Performance Gap"
                  />
                  
                  {/* User's area chart - under the user line */}
                  <Area 
                    type="monotone" 
                    dataKey="User" 
                    stroke="none" 
                    fill="#8884d8" 
                    fillOpacity={0.4}
                    name="Your Proficiency"
                  />
                  
                  {/* Main data lines */}
                  <Line type="linear" dataKey="Ideal" stroke="#82ca9d" strokeWidth={2} name="Ideal Topper" dot={false} />
                  <Line type="monotone" dataKey="User" stroke="#8884d8" strokeWidth={2} name="Your Score" dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="h-80">
              <h3 className="text-lg font-semibold mb-2 text-center">Skills Radar</h3>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90} data={prepareRadarChartData()}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="parameter" />
                  <PolarRadiusAxis domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} />
                  <Radar name="Your Skills" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Your Strengths</h3>
                {strengths.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-2">
                    {strengths.map((strength, index) => (
                      <li key={index} className="text-green-700">{strength}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">Complete more questions to identify strengths.</p>
                )}
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Areas to Improve</h3>
                {weaknesses.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-2">
                    {weaknesses.map((weakness, index) => (
                      <li key={index} className="text-red-700">{weakness}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No significant weaknesses identified.</p>
                )}
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
  <h3 className="text-lg font-semibold mb-4">Priority Improvement Plan (For {nextLevel} Level)</h3>
  {improvementAreas.length > 0 ? (
    <div className="space-y-4">
      {improvementAreas.map((area, index) => (
        <div key={index} className="border-l-4 border-blue-500 pl-4">
          <h4 className="font-medium flex items-center">
            {area.parameter}
            <span className={`ml-2 px-2 py-1 text-xs rounded ${area.priority === "High" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`}>
              {area.priority} Priority
            </span>
          </h4>
          <p className="text-sm text-gray-600">Gap: {area.gap.toFixed(1)} points to reach next level</p>
          <div className="mt-2">
            <p className="text-sm font-medium text-blue-600">Improvement Strategies:</p>
            <ul className="list-disc pl-5 space-y-1">
              {improvementResources[area.parameter]?.slice(0, 2).map((strategy, idx) => (
                <li key={idx} className="text-sm">
                  {strategy}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-gray-500">You're doing great! Keep practicing to maintain your skills.</p>
  )}
</div>
            
            <div className="flex justify-center space-x-4 mt-8">
              <button 
                onClick={handleReset} 
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Take Assessment Again
              </button>
              
            </div>
          </div>
        )}
      </div>
  </div>
  </div>
    );
  };
  
  export default SkillsAssessmentForm;