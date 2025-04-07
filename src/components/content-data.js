import {
  // Import the Lucide icons you need here.  Example:
  Settings, BookOpen, Target,Scale, Activity,
  Search, CheckCircle, Lightbulb, User, Users,
  TrendingUp, Brain, Handshake, Rocket, Clock,
  Eye, GraduationCap, MapPin, Smile, MessageSquare,
  Repeat, ShieldCheck, Mountain, Sprout,
  Trophy, ClipboardList, ChartBar, Star, Check,
} from 'lucide-react';

// content-data.js
export const navItems = ['AIR Strategies', 'Select your Class', 'Custom Strategy', 'Conceptual Clarity & Problem Solving'];
export const classOptions = ['Class 11th', 'Class 12th'];


export const navCardItemsData = {
  'AIR Strategies': [
    'Daily Schedule',
    'Reference Books',
    'Notes',
    'Clear Backlogs',
    'Test Series',
    'Group Studies',
    'Rote Learning',
    'Phone Addiction',
    'Performance Tracking',
    'Mental Health'
  ],
  'Class 11th': [
    '"Why" Notebook',
    'Prime Hours Strategy',
    'Active Recall Memory Hack',
    'JEE-Backwards Strategy',
    'Elimination over Perfection',
    'Solve 1 Killer Problem Daily',
    'Post-Mortem Analysis of Every Test',
    'NCERT Focus',
    'Unfair Advantage',
    'Test Practice'
  ],
  'Class 12th': [
    'The 60-40 Rule',
    'Mock Test Adaptation',
    'Weekly Reviews',
    'Final Sprint',
    'Error Logbook',
    'Conceptual Cross-Linking',
    'Time-Decay Learning',
    'The Forgetting Curve',
    'Master Dimensional Analysis',
    'Extreme Case Thinking'
  ],
  'Custom Strategy': [
    'Personalized Plan',
    'Weak Areas',
    'Strong Points',
    'Study Pattern',
    'Test Analysis',
    'Improvement Areas',
    'Goal Setting',
    'Progress Tracking',
    'Adaptation',
    'Success Metrics'
  ],
  'Conceptual Clarity': [
    'Visual Learning',
    'Strong Conceptual Foundation',
    'Strengthen Mathematical Tools',
    'Solve Conceptual Questions',
    'Apply Concepts to Numericals',
    'Regular Revision & Error Analysis',
    'Timed Practice & Mock Tests',
    'Topic Connection',
    'Real-life Examples',

  ]
};

// Image data for each section
export const sectionImages = {
  'AIR Strategies': {
    image1: '/computer.jpeg',
    image2: '/mental.jpeg',
    alt1: 'AIR Strategy Image 1',
    alt2: 'AIR Strategy Image 2'
  },
  'Class 11th': {
    image1: '/class11.jpg',
    image2: '/chemistry.jpeg',
    alt1: 'Class 11 Image 1',
    alt2: 'Class 11 Image 2'
  },
  'Class 12th': {
    image1: '/stress.jpeg',
    image2: '/MATHS MOCK TEST.png',
    alt1: 'Class 12 Image 1',
    alt2: 'Class 12 Image 2'
  },
  'Custom Strategy': {
    image1: '/crop.jpeg',
    image2: '/fruit.jpeg',
    alt1: 'Custom Strategy Image 1',
    alt2: 'Custom Strategy Image 2'
  },
  'Conceptual Clarity & Problem Solving': {
    image1: '/solve.jpeg',
    image2: '/conceptual2.jpeg',
    alt1: 'Conceptual Clarity Image 1',
    alt2: 'Conceptual Clarity Image 2'
  }
};

export const contentData = {
  //1 AIR 
  
//class 11th

'"Why" Notebook': [
    "JEE is a concept-based exam, where a strong grasp of fundamentals helps in solving even the most challenging problems effortlessly. Instead of relying on rote learning, understanding 'why' a concept works builds long-term retention and adaptability.",
    "Rather than memorizing formulas, derive them from first principles to reinforce conceptual clarity. Regularly practicing derivations ensures you understand the logic behind formulas, reducing the chances of forgetting them during the exam.",
    "Maintain a 'Why Notebook' and question every formula you encounter—ask why it works, whether you can derive it from basics, and where its limitations lie. This habit develops critical thinking and deepens your conceptual understanding, making problem-solving intuitive.",
    "Solve a single question using at least three different methods to uncover deeper insights into problem-solving techniques. This approach not only improves flexibility but also enhances your ability to approach unfamiliar problems from multiple angles.",
    "Practicing diverse methods for the same problem strengthens adaptability, allowing you to handle unexpected or tricky questions in JEE with confidence. The ability to switch strategies on the spot can be the difference between solving a problem efficiently or getting stuck."
],

    "Prime Hours Strategy": [
    "Not all study hours are equally effective; maximizing high-focus hours helps in mastering tough concepts efficiently. Identifying when your brain is most active ensures better comprehension and retention of difficult topics.",
    "Identify your peak concentration slots (usually early morning and night) and use them for learning new topics instead of revision. During these hours, your brain is fresh and more capable of understanding complex concepts deeply.",
    "Reserve low-energy hours (like afternoons) for revision, solving easier problems, or reviewing previously learned concepts. This prevents cognitive overload and ensures that even your less productive hours are utilized effectively.",
    "Structure your study day strategically—for example, morning for new topics, afternoon for revision, and night for advanced problem-solving. Dividing study sessions based on energy levels ensures maximum productivity throughout the day.",
    "Aligning study sessions with your natural energy cycles improves retention, ensuring difficult concepts are mastered efficiently while preventing burnout. This approach optimizes learning efficiency while maintaining mental well-being."
],
"Active Recall Memory Hack": [
    "JEE requires long-term memory retention, but most students forget formulas after a month. Active recall helps reinforce concepts by retrieving information instead of passively reviewing notes.",
    "Instead of reading notes, teach the topic to an imaginary student without referring to books. If you struggle to explain a concept, identify gaps in understanding and revisit the topic before trying again.",
    "Use flashcards and the self-questioning technique to reinforce learning. Asking yourself conceptual questions, like ‘What happens when temperature increases in a gas at constant volume?’ ensures deeper comprehension.",
    "Apply Spaced Repetition by reviewing concepts at increasing intervals—1 day, 1 week, and 1 month. This prevents forgetting and strengthens long-term memory retention.",
    "Follow a structured recall schedule, such as learning a topic on Day 1, recalling it on Day 3, solving a tough problem on Day 10, and reviewing with flashcards on Day 30. This ensures mastery and retention over time."
],
"JEE-Backwards Strategy": [
    "Traditional textbook-first learning can be inefficient for JEE. Instead, starting with problems first forces active engagement and highlights knowledge gaps early.",
    "Begin by picking a previous year JEE question from a topic before studying its theory. This approach helps develop problem-solving intuition and analytical thinking.",
    "Attempt solving the problem using logic and basic concepts. If you struggle, identify the exact concept you need and study only that specific part instead of the whole chapter.",
    "Reinforce learning by solving similar questions from coaching material. This ensures that the concept is fully understood and can be applied in different variations.",
    "For example, attempt a JEE Advanced problem on Friction before studying the chapter, then learn limiting friction if needed, and finally practice 10 more similar problems to solidify understanding."
],
"Elimination over Perfection": [
    "JEE MCQs don’t always require full solutions—smart elimination techniques can save time and improve accuracy. Instead of solving every question step-by-step, eliminate wrong options first to increase efficiency.",
    "Use Dimensional Analysis to check the units of each option, eliminating those that don’t match the expected dimensions. This technique is especially useful in physics and helps avoid careless calculation errors.",
    "Apply Extreme Value Testing by substituting 0 or ∞ into formulas to see which options behave correctly under boundary conditions. Many complex-looking problems can be simplified using this approach to quickly identify the correct choice.",
    "Leverage the Graphical Approach—if stuck, sketching a rough graph can often reveal trends and eliminate incorrect choices. This works well for calculus-based and function-related problems where visualizing the solution provides instant clarity.",
    "For example, when solving a physics problem, quickly eliminating dimensionally incorrect options or testing extreme cases can lead to the correct answer without lengthy calculations. Using elimination strategies improves speed, reduces guesswork, and increases overall accuracy in MCQ-based exams."
],

"Solve 1 Killer Problem Daily": [
    "Solving one extremely tough problem daily enhances problem-solving skills and trains the brain for out-of-the-box thinking. It helps develop resilience and sharpens logical reasoning required for JEE Advanced.",
    "Choose a challenging question from Irodov, Pathfinder, or Olympiad-level sources to push your conceptual limits. Exposure to high-level problems builds familiarity with advanced techniques and unexpected question patterns.",
    "Dedicate 30-45 minutes to struggling with the problem before looking at the solution to develop perseverance. This struggle strengthens your ability to break complex problems into manageable steps.",
    "Analyze the solution carefully, noting down new tricks and methods to build a 'Killer Problems Notebook' for future reference. Revisiting these notes before exams reinforces learning and boosts confidence in tackling difficult questions.",
    "This habit strengthens logical thinking, improves adaptability to complex questions, and boosts confidence for the toughest JEE problems. Over time, it transforms challenging problems into an opportunity rather than a hurdle."
],
"Post-Mortem Analysis of Every Test": [
    "Real improvement happens after the test, not just during it—analyzing mistakes helps refine your strategy and avoid repeating errors. A structured review process ensures continuous learning and progress.",
    "Categorize your mistakes to address them effectively—silly mistakes require better concentration, conceptual mistakes need revision, and time-management mistakes demand strategy adjustments. Identifying the exact reason behind errors prevents future repetition.",
    "Fix silly mistakes by improving focus during tests—read questions carefully and double-check calculations. Small errors can significantly impact your rank, so practicing mindfulness during exams is crucial.",
    "For conceptual mistakes, revisit weak topics and relearn fundamental concepts—don’t just memorize the correct answers. Understanding why you got something wrong builds long-term retention and mastery over subjects.",
    "Maintain an Error Logbook to track and review mistakes before exams—this helps reinforce learning and avoid repeating past errors. Regularly analyzing past tests ensures steady improvement and boosts confidence for the actual exam."
],
    "NCERT Focus": [
    "NCERT textbooks are the backbone of JEE preparation, offering precise, concept-based explanations that align with the exam’s requirements. Mastering NCERT ensures a strong foundation, particularly for Chemistry and Physics, where conceptual clarity is key to solving advanced problems.",
    "Inorganic Chemistry in NCERT is particularly crucial—every line can be a potential question, making thorough revision essential. Creating concise notes and regularly practicing direct application-based questions will help in retaining key facts effectively.",
    "For Physics, NCERT’s solved examples and exercise problems help in understanding the real-world applications of formulas. Going through them before jumping to advanced books ensures that your conceptual base is solid and well-structured.",
    "In subjects like Biology and Organic Chemistry, the exact wording from NCERT matters because JEE often frames direct questions from its content. Memorizing definitions, reaction mechanisms, and key terminologies accurately can give an edge in both direct and conceptual questions.",
    "Instead of passively reading, actively engage with NCERT by underlining key points, making margin notes, and summarizing concepts in your own words. This interactive approach not only improves retention but also makes last-minute revision much faster and more efficient."
],
"Unfair Advantage": [
    "The JEE syllabus is vast, but not all topics carry equal weight—80% of the questions typically come from just 20% of the topics. Identifying and mastering these high-yield topics can significantly boost your score with efficient effort.",
    "In Physics, Mechanics, Electrostatics, Current Electricity, and Modern Physics are frequently tested, making them essential for securing high marks. Prioritizing problem-solving in these areas ensures confidence in tackling the most common types of questions.",
    "Mathematics heavily relies on Calculus, Vectors & 3D Geometry, Coordinate Geometry, and Probability, which form the core of advanced problem-solving. Strengthening these topics enhances your ability to solve complex questions quickly and accurately.",
    "In Chemistry, General Organic Chemistry (GOC), Named Reactions, Mole Concept, Thermodynamics, Periodic Trends, and Coordination Compounds repeatedly appear in JEE. A focused approach on these key areas ensures a solid grasp of fundamental principles and frequent question patterns.",
    "Instead of distributing study time equally across all topics, allocate at least 70% of your preparation time to these high-yield subjects. Mastering them first builds confidence and maximizes your score, leaving time to cover less frequent topics strategically."
],

 'Test Practice': [
    "Focus on conceptual clarity rather than rote memorization, especially in Physics and Organic Chemistry, where understanding mechanisms and principles is crucial. Mastering concepts ensures that you can apply them flexibly to different problem scenarios rather than just recalling facts.",
    "Adequate sleep (6-8 hours) is essential for memory consolidation, focus, and overall cognitive function. A well-rested brain processes information more efficiently, helping you recall concepts faster and perform better in tests.",
    "Stay motivated by setting realistic, achievable goals and tracking your progress regularly. Breaking down large study targets into smaller milestones keeps you on track and boosts confidence with each accomplishment.",
    "Avoid negative self-talk and unnecessary comparisons with peers, as they can lead to self-doubt and stress. Instead, focus on your personal growth, recognize your improvements, and celebrate small victories in your learning journey.",
    "Engage in hobbies or social activities occasionally to refresh your mind and prevent burnout. Taking short breaks for relaxation or socializing can improve focus and productivity when you return to studying."
],
//class 12th

    'The 60-40 Rule': [
    "Many students focus entirely on completing the Class 12 syllabus first, neglecting Class 11 topics, which is a risky approach. Since nearly 50-60% of JEE questions are from Class 11, consistent revision of these concepts is essential to avoid last-minute gaps.",
    "The 60-40 Rule ensures a balanced study plan where 60% of your daily study time is dedicated to new Class 12 topics, while 40% is reserved for revising Class 11 concepts. This structured approach prevents forgetting foundational topics and helps maintain subject continuity over time.",
    "Using an alternating-day strategy can make revision more effective—one day can be dedicated to new Class 12 topics along with Class 11 revision, while the next day focuses on problem-solving and mock tests. This variation in study methods keeps learning engaging and prevents monotony, leading to better retention.",
    "For example, you can study Electromagnetic Induction from Class 12 while revising Rotational Motion from Class 11 on the same day. The next day, solving related practice problems from both classes strengthens conceptual interconnections and improves your ability to tackle mixed-topic questions.",
    "This method not only optimizes retention but also builds confidence by ensuring that older topics remain fresh in memory. By the time exams approach, you will have mastered both years' syllabi without the stress of last-minute cramming, giving you a significant edge over other aspirants."
],
'Mock Test Adaptation': [
    "JEE is not just about mastering concepts; it also tests your ability to manage time, handle pressure, and adapt to real exam conditions. Many students lose marks due to silly mistakes or poor time management, making a structured mock test strategy essential for success.",
    "Phase 1 (Accuracy Focus - First 30 Days) prioritizes getting 90%+ accuracy by solving JEE Mains level full tests without time pressure. This phase helps build conceptual clarity and minimizes careless errors before speed becomes a factor.",
    "Phase 2 (Speed Focus - Next 30 Days) shifts attention to solving 90+ questions within 3 hours under strict time conditions. This phase trains you to manage time efficiently, improving your ability to complete the paper without compromising accuracy.",
    "Phase 3 (Exam Simulation - Final 30 Days) involves taking full-length tests at the exact time as the actual JEE exam. This step helps condition your brain to peak performance under stress and builds the stamina needed for the six-hour JEE exam.",
    "This strategy works because it systematically eliminates mistakes, improves endurance, and conditions your mind for real exam pressure. By the time JEE arrives, you will have optimized both accuracy and speed, reducing anxiety and maximizing performance."
],
"Weekly Reviews": [
  "Avoid negative self-talk and unnecessary comparisons with peers; focus on personal growth and improvement, as self-confidence plays a crucial role in maintaining motivation and preventing unnecessary stress.",

  "Get sufficient sleep (6-8 hours) to improve focus, retention, and overall well-being, as a well-rested mind processes information more efficiently and reduces cognitive fatigue during study sessions.",

  "Stay motivated by setting realistic goals and tracking progress consistently, as breaking down larger objectives into achievable milestones provides a sense of accomplishment and sustained momentum.",

  "Engage in occasional hobbies or social interactions to refresh the mind and prevent study fatigue, as short mental breaks help reset focus, boost creativity, and improve long-term productivity.",

  "Review mistakes from previous tests to identify weak areas and prevent repeated errors, as analyzing past performance helps refine problem-solving strategies and increases accuracy under exam pressure."
],

"Final Sprint": [
  "Revise only key concepts, formulas, and mistake-prone areas in the last few days before the exam, as focusing on essentials strengthens recall and prevents unnecessary cognitive overload.",

  "Solve a mix of easy, moderate, and difficult problems to maintain confidence and readiness, as exposure to varying difficulty levels ensures a balanced approach and minimizes last-minute panic.",

  "Avoid learning new topics at the last moment; focus on strengthening what’s already studied, as last-minute cramming of unfamiliar material can cause confusion and reduce confidence.",

  "Get sufficient rest and maintain a proper sleep schedule to optimize brain function, as an alert mind enhances problem-solving speed, comprehension, and memory retention during the exam.",

  "Stay positive and believe in your preparation rather than stressing over the outcome, as a calm and confident mindset helps maximize performance and reduces unnecessary anxiety."
],


  'Error Logbook': [
    "Most students struggle with improvement because they unknowingly repeat the same mistakes in every test. Keeping track of errors systematically helps pinpoint weaknesses and ensures they are corrected before the final exam.",
    "Toppers use an 'Error Logbook' to record every mistake, allowing them to analyze and fix recurring issues. This method transforms mistakes into learning opportunities, turning weak areas into strengths over time.",
    "After every test, categorize your mistakes into three types: Conceptual Mistakes (requiring theory revision), Silly Calculation Errors (needing slower, more focused practice), and Time Management Issues (demanding a refined question-solving strategy). Organizing mistakes this way helps tackle them with precision rather than vague re-learning.",
    "Before each test, revisiting past mistakes from the Error Logbook reinforces learning and prevents history from repeating itself. This habit significantly improves accuracy, ensuring steady performance gains over time.",
    "An Error Logbook is not just about tracking mistakes—it’s a tool for continuous self-improvement. By actively fixing errors, you build confidence, enhance exam strategy, and eliminate unnecessary mark losses in the actual JEE exam."
  ],
'Conceptual Cross-Linking': [
    "JEE Advanced frequently tests students on interdisciplinary concepts, where topics from different subjects are combined into a single problem. Mastering these connections helps in tackling complex, unconventional questions with ease.",

    "Many students struggle because they study topics in isolation, missing how concepts from Physics, Chemistry, and Math interrelate. Developing cross-linking skills improves problem-solving efficiency and deepens overall understanding.",

    "Create a Cross-Linking Map that visually connects related topics, such as Work-Energy Theorem (Physics) with Definite Integration (Math) or Electrostatics (Physics) with Ionic Equilibrium (Chemistry). Identifying these relationships enhances comprehension and application.",

    "Practice solving mixed-subject problems that require knowledge from multiple topics, such as a mechanics problem requiring calculus or a thermodynamics question integrating chemical and physical principles. This conditions your brain to think beyond isolated formulas.",

    "Conceptual cross-linking is a hallmark of JEE toppers—by actively linking subjects, you gain a strategic edge in solving advanced-level problems, improving both speed and accuracy in the actual exam."
],
'Time-Decay Learning': [
    "Certain topics, like Electromagnetic Waves, Modern Physics, and Organic Chemistry Reactions, are harder to retain over time. Without reinforcement, students often forget key concepts, leading to repeated revision cycles and wasted time.",

    "The brain naturally forgets information unless it's reviewed at strategic intervals, making last-minute cramming ineffective. Spaced reinforcement ensures knowledge stays fresh and readily accessible during exams.",

    "Use the Time-Decay Revision Technique by revisiting concepts in increasing intervals—on Day 1, learn and solve problems, on Day 3, attempt different questions, on Day 7, take a test, and on Day 15, solve a tough problem for retention.",

    "For example, if you study Coordination Compounds today, solve tricky previous-year questions after three days, take a full test on the topic after a week, and reinforce memory by solving the toughest problems on Day 15.",

    "This method strengthens long-term memory, reducing revision time and preventing last-minute panic, giving students an edge in retaining crucial concepts for the JEE exam."
],
'The Forgetting Curve': [
    "The Forgetting Curve, proposed by Hermann Ebbinghaus, shows that without reinforcement, we forget 80% of what we learn within a few days. Using spaced repetition helps strengthen memory, ensuring long-term retention of important concepts.",

    "First Revision (Within 24 Hours) – Reviewing a topic within a day prevents rapid forgetting by reinforcing fresh learning. A quick 10-minute recap or solving 3-4 key problems helps transfer knowledge from short-term to long-term memory.",

    "Second Revision (After 1 Week) – Revisiting the topic after a week strengthens recall by reinforcing key concepts, formulas, and mistakes. Solving medium to hard-level problems ensures the topic remains familiar and applicable in different contexts.",

    "Third Revision (After 1 Month) – Actively recalling information without looking at notes deepens memory encoding. Writing formulas, key concepts, and problem-solving steps from memory while taking topic-specific quizzes enhances long-term retention.",

    "Fourth Revision (Before Mock Tests) – Reviewing error logs and weak areas from previous tests sharpens problem-solving strategies. Attempting mixed-topic problem sets simulates JEE-style unpredictability, improving confidence across subjects.",

    
],
'Master Dimensional Analysis': [
   
    "Understand the Basic Dimensions of Physical Quantities – Every physical quantity is expressed in terms of fundamental dimensions: Length (L), Mass (M), and Time (T). Mastering these dimensions allows quick identification of errors and aids in equation simplification.",

    "Verify if a Formula is Correct Using Dimensional Consistency – A formula is valid only if both sides have the same dimensions. Checking dimensional consistency helps confirm the correctness of derived equations and prevents conceptual errors.",

    "Use Dimensional Analysis to Derive Unknown Formulas – If a formula is forgotten, it can often be reconstructed using dimensional relationships. This technique is especially useful in exams to recall or approximate essential equations.",

    "Check the Validity of an Answer Using Order of Magnitude – Dimensional analysis helps assess whether a calculated answer is realistic. If an answer deviates significantly from expected values, it indicates an error in the approach or calculations.",

    "Use Dimensionless Quantities to Identify Errors in Expressions – Certain quantities, such as trigonometric functions and Reynolds number, must remain dimensionless. If an expression introduces unexpected units, it signals an error in formulation or application.",

],
'Extreme Case Thinking': [  
"Extreme case thinking helps check whether a formula or concept works correctly by testing it in extreme conditions. This simple technique makes problem-solving easier and helps avoid mistakes in exams.",  

"Test by Setting Variables to Zero – Set one or more variables to zero and check if the result makes sense. For example, in \( KE = \frac{1}{2} m v^2 \), if \( v = 0 \), then \( KE \) should also be 0—if not, something is wrong.",  

"Test by Taking Variables to Very Large Values – Increase a key variable to a very high value and see if the answer still makes sense. In Ohm’s Law \( V = IR \), if \( R \to \infty \), then current should be almost zero, matching real-world logic.",  

"Check How Different Terms Behave in Extreme Cases – In formulas with multiple terms, one should dominate in extreme situations. For example, in \( a = g \sin\theta \), if \( \theta = 0^\circ \), \( a \) should be 0, and if \( \theta = 90^\circ \), \( a \) should be \( g \), ensuring the formula is correct.",  

"Use Real-World Logic to Spot Errors – Even if an answer is mathematically correct, check if it makes sense in real life. If a car’s acceleration comes out as 250 m/s², it is unrealistic, meaning there’s likely a mistake.",  
],


//
"Personalized Plan": [  
  "Design a study plan tailored to your strengths, weaknesses, and available time, as a structured approach ensures balanced preparation without unnecessary stress.",  

  "Ensure flexibility in the plan to accommodate unexpected challenges or additional focus areas, as rigid schedules can lead to burnout and inefficiency.",  

  "Prioritize subjects and topics based on difficulty level and personal comfort, as focusing on high-weightage and weak areas maximizes overall improvement.",  

  "Balance revision, problem-solving, and concept learning to maintain steady progress, as overemphasis on one aspect may lead to gaps in understanding.",  

  "Regularly update and refine the plan based on performance and evolving needs, as continuous adjustments help align strategies with real-time progress."  
],  

"Weak Areas": [  
  "Identify weak areas by analyzing past tests and performance trends, as recognizing patterns in mistakes allows for targeted improvement.",  

  "Dedicate extra time and effort to difficult topics while ensuring consistent practice, as gradual reinforcement builds confidence and mastery.",  

  "Seek help from mentors, peers, or online resources to clarify doubts effectively, as different perspectives can simplify complex concepts.",  

  "Use targeted problem-solving techniques to strengthen weak areas gradually, as structured practice helps eliminate recurring errors.",  

  "Track improvements in weak areas over time to stay motivated and focused, as visible progress boosts confidence and reinforces effort."  
],  

"Strong Points": [  
  "Leverage strong subjects to maximize scores in exams with minimal effort, as efficient time allocation can significantly boost overall performance.",  

  "Maintain consistent practice in strong areas to ensure retention of key concepts, as neglecting them may lead to unexpected gaps.",  

  "Use strong subjects to build confidence and reduce exam stress, as excelling in familiar topics creates a positive mindset.",  

  "Help peers by explaining strong topics, reinforcing your understanding further, as teaching others strengthens conceptual clarity.",  

  "Challenge yourself with advanced problems in strong areas to push your limits, as tackling higher-level questions enhances problem-solving skills."  
],  

"Study Pattern": [  
  "Identify the study routine that works best—whether early morning, late night, or segmented sessions, as an optimized schedule improves focus and retention.",  

  "Incorporate short breaks using techniques like Pomodoro for better concentration and retention, as structured pauses prevent mental fatigue.",  

  "Use a mix of reading, writing, and verbal techniques to improve learning efficiency, as engaging multiple senses enhances memory retention.",  

  "Alternate between different subjects to avoid monotony and enhance engagement, as variety maintains interest and prevents cognitive exhaustion.",  

  "Analyze past study patterns to refine and optimize learning strategies, as self-awareness helps eliminate ineffective habits."  
],  

"Test Analysis": [  
  "Review each test thoroughly to identify mistakes and patterns in errors, as understanding weaknesses prevents repeating the same errors.",  

  "Categorize mistakes as conceptual errors, calculation mistakes, or time management issues, as recognizing the root cause allows for specific corrections.",  

  "Develop a corrective strategy for each mistake type to avoid repetition, as targeted improvements lead to consistent progress.",  

  "Compare performance across multiple tests to track consistency and growth, as gradual enhancement indicates effective learning strategies.",  

  "Use insights from analysis to adjust study plans and focus areas, as real-time data-driven changes improve overall preparation."  
],  

"Improvement Areas": [  
  "Keep a dedicated list of topics or concepts that need extra attention, as written records help prioritize and track progress effectively.",  

  "Regularly revisit improvement areas to ensure steady progress and retention, as repeated exposure strengthens long-term memory.",  

  "Use multiple learning methods—videos, notes, quizzes—to reinforce difficult topics, as diverse approaches cater to different learning styles.",  

  "Monitor small wins in improvement areas to stay encouraged and motivated, as recognizing progress maintains enthusiasm and momentum.",  

  "Adjust study techniques if current methods are not yielding desired results, as adaptability ensures continued efficiency in learning."  
],  

"Goal Setting": [  
  "Set clear, specific, and achievable study goals to maintain motivation and direction, as well-defined targets provide clarity and purpose.",  

  "Break down long-term goals into smaller, manageable milestones for better tracking, as incremental achievements create a sense of progress.",  

  "Use SMART (Specific, Measurable, Achievable, Relevant, Time-bound) criteria for goal setting, as structured objectives enhance focus and discipline.",  

  "Regularly review and adjust goals based on progress and learning pace, as flexibility allows for realistic and effective adjustments.",  

  "Celebrate small achievements to stay motivated throughout the journey, as recognizing effort fosters a positive study mindset."  
],  

"Progress Tracking": [  
  "Maintain a study journal or digital tracker to monitor daily and weekly progress, as written documentation helps identify patterns and gaps.",  

  "Use charts or graphs to visualize improvement and identify trends over time, as graphical representation simplifies self-analysis.",  

  "Compare past performance with current levels to measure effectiveness of strategies, as direct comparisons highlight areas of growth.",  

  "Take regular self-assessments to gauge understanding and retention, as frequent testing reinforces learning and boosts confidence.",  

  "Stay accountable by sharing progress updates with mentors or peers, as external feedback provides motivation and constructive insights."  
],  

"Adaptation": [  
  "Stay open to modifying study methods based on performance and feedback, as flexibility ensures optimal learning efficiency.",  

  "Experiment with different learning techniques to find the most effective approach, as diverse strategies cater to individual strengths.",  

  "Adapt to changes in syllabus, exam patterns, or personal circumstances quickly, as staying updated prevents last-minute surprises.",  

  "Develop a resilient mindset to handle unexpected challenges in preparation, as overcoming obstacles strengthens determination.",  

  "Embrace a growth mindset—view challenges as opportunities to learn and improve, as adaptability fosters continuous self-improvement."  
],  

"Success Metrics": [  
  "Define personal success based on effort, improvement, and understanding, not just scores, as true achievement lies in consistent learning.",  

  "Measure success through consistency, confidence, and clarity in concepts, as these factors indicate genuine academic progress.",  

  "Track overall accuracy and speed in problem-solving as key indicators, as balanced performance ensures exam readiness.",  

  "Evaluate performance based on mock tests, previous papers, and actual exams, as realistic practice provides the best assessment.",  

  "Recognize and reward progress, regardless of setbacks, to maintain motivation, as perseverance and positivity drive long-term success."  
],  

      
        ///
"Strong Conceptual Foundation": [  
"Before solving problems, it's important to build a clear understanding of concepts. Many students memorize formulas without knowing their meaning, which leads to mistakes in exams. Here’s how to strengthen your foundation effectively:",  

"Start with NCERT – NCERT textbooks explain concepts in a simple and structured way. Read every chapter carefully, highlight key points, and summarize important formulas and laws. This helps in understanding the basics, especially in Physics and Chemistry.",  

"Understand Why Formulas Work – Instead of memorizing formulas, learn how they are derived. Work through each step and understand the logic behind it. For example, instead of just remembering \( T = 2\pi \sqrt{l/g} \) for a pendulum, derive it using Newton’s Laws to understand its meaning.",  

"Visualize Concepts – Use diagrams, graphs, and real-world examples to understand concepts better. Imagine how forces act on objects in Physics, how molecules react in Chemistry, or how graphs behave in Math. This makes learning easier and improves retention.",  

"Know the Assumptions Behind Formulas – Every formula is based on certain conditions. For example, Ohm’s Law assumes constant temperature, projectile motion ignores air resistance, and gas laws assume ideal gas behavior. Understanding these helps apply formulas correctly in different situations.",  
],

"Strengthen Mathematical Tools": [  

"Math is the backbone of Physics and Chemistry in IIT-JEE. Many students struggle with problems not because they don’t understand concepts but due to weak math skills. Strengthening these five key areas will help solve problems faster and more accurately:",  

"Master Vectors – Vectors are used in almost every Physics topic, like motion, forces, and electromagnetism. Learn how to add and multiply vectors using dot and cross products. For example, the dot product helps find work done, while the cross product is used for torque and magnetic force.",  

"Differentiate Quickly – Differentiation helps find velocity from displacement and acceleration from velocity. It is also useful in optimization problems in math. Mastering differentiation makes motion and rate-related problems easier to solve.",  

"Use Integration Effectively – Integration helps find displacement from velocity and work done from force. It is also used to calculate areas under curves in math. Understanding integration makes many Physics and Calculus problems simpler.",  

"Practice Quick Approximations & Unit Checks – Many JEE problems can be solved faster using smart approximations. Use rounded values like \( g \approx 10 \), check units to catch mistakes, and estimate answers to avoid errors. This saves time and improves accuracy.",  

  
],
"Solve Conceptual Questions": [  

"Before jumping into numerical problems, focus on understanding concepts first. Solving conceptual questions builds strong intuition and helps apply formulas correctly.",  

"Try HC Verma’s Conceptual Questions – After studying a topic, attempt the conceptual questions in HC Verma. These questions test your understanding and prepare you for tricky JEE problems.",  

"Use NCERT Exemplar – This book has high-quality conceptual problems that deepen your understanding, especially in Physics and Chemistry. It helps clear doubts and strengthens fundamentals.",  

"Watch Visual Explanations – Interactive simulations and animations help you visualize abstract concepts, making it easier to understand forces, motions, and reactions in real-life scenarios.",  

"Final Takeaway – Strengthen your concepts first before solving numericals. This will help you apply formulas correctly and tackle JEE problems with confidence."  
],

"Apply Concepts to Numericals": [  

"Once you understand the concepts, apply them to numerical problems. Solving problems step by step improves accuracy and builds confidence for JEE.",

"Start with Easy Problems – Begin with basic questions to reinforce concepts and formula application. This helps in understanding the step-by-step approach to solving numericals." ,

"Move to Moderate-Level Problems – Gradually increase difficulty by solving moderate-level questions. Identify common patterns and tricks used in JEE problems to improve problem-solving speed." , 

"Challenge Yourself with Advanced Problems – Attempt selected tough problems to strengthen conceptual understanding. These questions test your ability to apply multiple concepts together."  ,

"Practice PYQs (Previous Year Questions) – Solve JEE Mains & Advanced previous year questions to get familiar with the exam pattern and difficulty level. This helps in mastering problem-solving techniques."  ,

],
"Regular Revision & Error Analysis": [  

"Consistent revision and learning from mistakes are key to improving problem-solving skills and avoiding repeated errors in JEE." ,

"Make a Mistake Log – Write down conceptual mistakes and tricky problems in a dedicated notebook. Regularly revising these helps prevent repeating the same errors." ,

"Revisit Tough Problems – Solve difficult problems again after a week to check if you still remember the approach. This strengthens long-term retention." , 

"Discuss Doubts – Ask teachers or peers to clarify doubts instead of leaving them unresolved. Group discussions often provide new perspectives and better understanding.",  

"Final Takeaway – Reviewing mistakes and revising tough problems consistently will boost accuracy and confidence in the exam."  
],
"Timed Practice & Mock Tests": [  

"Practicing under exam-like conditions helps build confidence, improve accuracy, and manage time effectively in JEE." ,

"Solve Topic-Wise & Full-Length Tests – Start with topic-wise tests to strengthen concepts, then move to full-length mock tests to simulate the real exam." ,

"Focus on Accuracy First – Solve questions carefully to minimize mistakes. Once accuracy improves, work on increasing speed." , 

"Analyze Weak Areas – After each test, review incorrect answers, identify weak topics, and revise them to ensure improvement." ,

"Final Takeaway – Regular timed practice and test analysis will help you perform efficiently under pressure on exam day." , 
],
"Think in Reverse – Work Backwards to Solve Problems": [  

"Instead of solving a problem from start to finish, try working backward from the answer choices or final condition. This approach is especially useful in multiple-choice questions and complex derivations." , 

"Start from Given Options – In MCQs, plug in answer choices to see which one satisfies the given conditions, saving time on lengthy calculations.",  

"Use Final Conditions – If a problem involves motion, equilibrium, or final energy states, analyze the final condition first and trace back the steps leading to it." ,

"Reverse Engineering Formulas – Instead of directly applying a formula, think about how it was derived. This helps in modifying it for tricky problems where standard formulas don’t directly apply." ,

"Apply to Proof-Based Questions – In derivations and conceptual problems, assume the final result and check if logical steps lead back to known principles.",  

"Final Takeaway – Thinking in reverse is a powerful strategy for solving tricky questions faster and avoiding unnecessary calculations."  
],"Visual Learning": [  
  "Use diagrams, charts, and infographics to simplify complex concepts, as visual representations break down abstract ideas into digestible formats, making them easier to recall and apply in problem-solving.",  

  "Watch video lessons or animations to gain a clearer understanding of abstract topics, as motion-based explanations help visualize dynamic processes like electron movement or projectile trajectories, which are harder to grasp through text alone.",  

  "Create flashcards with visual elements to reinforce memory and quick recall, as associating images or color-coded hints with key formulas strengthens retention, especially during high-pressure situations like exams.",  

  "Use color coding in notes to highlight key points and improve organization, as categorizing information with different colors enhances structured learning and makes it easier to differentiate principles, exceptions, and applications.",  

  "Practice drawing concept maps or flowcharts to connect ideas and improve comprehension, as mapping relationships between concepts fosters deeper understanding and helps see the bigger picture rather than memorizing isolated facts."  
],  

"Topic Connection": [  
  "Recognize how different topics within a subject are interconnected for better understanding, as recognizing these connections allows flexible thinking and makes it easier to apply concepts across different types of problems.",  

  "Use mind maps to visualize links between concepts and related ideas, as a structured visual approach helps identify patterns and relationships, making complex subjects feel more intuitive and manageable.",  

  "Identify prerequisite knowledge needed for advanced topics and ensure clarity, as building a solid foundation prevents knowledge gaps and allows smoother transitions into more advanced problem-solving.",  

  "Practice multi-concept problems that require the application of multiple topics, as solving such problems strengthens analytical thinking and trains the brain to integrate different concepts for efficient problem-solving.",  

  "Revisit previously learned concepts when studying new related topics to reinforce memory, as linking old and new knowledge creates a stronger mental framework, making long-term retention and application more natural."  
],  

"Real-life Examples": [  
  "Relate abstract concepts to daily life situations for better understanding, as connecting theories to everyday experiences like understanding momentum through sports makes learning more intuitive and relatable.",  

  "Use case studies and practical applications to see theories in action, as real-world examples like engineering failures or medical advancements provide a concrete understanding of how theoretical principles shape reality.",  

  "Observe how mathematical and scientific principles are applied in technology and nature, as recognizing their presence in fields like aerodynamics, artificial intelligence, or climate science helps develop a more application-oriented mindset.",  

  "Refer to historical or industry examples to contextualize theoretical concepts, as understanding how discoveries like electromagnetism or quantum mechanics transformed industries provides deeper motivation to learn.",  

  "Engage in discussions about real-world applications to deepen learning, as sharing perspectives and insights with peers enhances conceptual clarity and encourages creative problem-solving approaches."  
]  

  
  };

  export const airRangeContent = {
    'AIR 1-10': {
      toppers: {
        
          "Daily Schedule": [
            { "name": "Ved Lahoti", "rank": "AIR 1", "year": 2024, "image": "/cropped-peer1.png"},
            { "name": "Nishant Abhangi", "rank": "AIR 2", "year": 2024 },
            { "name": "Arjun Patel", "rank": "AIR 3", "year": 2024 },
            { "name": "Mayank Motwani", "rank": "AIR 4", "year": 2024 },
            { "name": "Varun Reddy", "rank": "AIR 5", "year": 2024 },
            { "name": "Rahul Sharma", "rank": "AIR 7", "year": 2024 }
          ],
          "Reference Books": [
            { "name": "Aryan Kumar", "rank": "AIR 6", "year": 2023 },
            { "name": "Tanay Jha", "rank": "AIR 7", "year": 2023 },
            { "name": "Rishi Shah", "rank": "AIR 8", "year": 2023 },
            { "name": "Krish Patel", "rank": "AIR 9", "year": 2023 },
            { "name": "Aditya Singh", "rank": "AIR 10", "year": 2023 },
            { "name": "Rohan Verma", "rank": "AIR 7", "year": 2023 },
          ],
          "Notes": [
            { "name": "Siddharth Mehta", "rank": "AIR 3", "year": 2022 },
            { "name": "Neel Joshi", "rank": "AIR 5", "year": 2022 },
            { "name": "Rohan Desai", "rank": "AIR 6", "year": 2022 },
            { "name": "Vivek Anand", "rank": "AIR 8", "year": 2022 },
            { "name": "Harshit Verma", "rank": "AIR 9", "year": 2022 }
          ],
          "Clear Backlogs": [
            { "name": "Rahul Nair", "rank": "AIR 2", "year": 2021 },
            { "name": "Kunal Bhardwaj", "rank": "AIR 4", "year": 2021 },
            { "name": "Ishaan Roy", "rank": "AIR 6", "year": 2021 },
            { "name": "Sameer Malik", "rank": "AIR 7", "year": 2021 },
            { "name": "Yash Garg", "rank": "AIR 10", "year": 2021 }
          ],
          "Test Series": [
            { "name": "Dhruv Agarwal", "rank": "AIR 1", "year": 2020 },
            { "name": "Anirudh Saxena", "rank": "AIR 3", "year": 2020 },
            { "name": "Tarun Menon", "rank": "AIR 5", "year": 2020 },
            { "name": "Rajat Tiwari", "rank": "AIR 7", "year": 2020 },
            { "name": "Piyush Sharma", "rank": "AIR 9", "year": 2020 },
            { "name": "Ramesh Gupta","rank":"AIR 5", "year": "2023" },
          ],
          "Group Studies": [
            { "name": "Raghav Sinha", "rank": "AIR 2", "year": 2019 },
            { "name": "Kabir Kapoor", "rank": "AIR 4", "year": 2019 },
            { "name": "Mohit Trivedi", "rank": "AIR 6", "year": 2019 },
            { "name": "Jay Mehta", "rank": "AIR 8", "year": 2019 },
            { "name": "Ujjwal Sharma", "rank": "AIR 10", "year": 2019 },
            {"name": "Aryan Verma","rank":"AIR 7", "year":2023}
          ],
          "Rote Learning": [
            { "name": "Devansh Mishra", "rank": "AIR 1", "year": 2018 },
            { "name": "Pranav Chatterjee", "rank": "AIR 3", "year": 2018 },
            { "name": "Aakash Bansal", "rank": "AIR 5", "year": 2018 },
            { "name": "Sourav Pandey", "rank": "AIR 7", "year": 2018 },
            { "name": "Harsh Vardhan", "rank": "AIR 9", "year": 2018 },
            {"name": "Sneha Iyer","rank":"AIR 4", "year": 2022}
          ],
          "Phone Addiction": [
            { "name": "Shivam Taneja", "rank": "AIR 2", "year": 2017 },
            { "name": "Vikram Sethi", "rank": "AIR 4", "year": 2017 },
            { "name": "Aniket Gupta", "rank": "AIR 6", "year": 2017 },
            { "name": "Rajat Kapoor", "rank": "AIR 8", "year": 2017 },
            { "name": "Nikhil Batra", "rank": "AIR 10", "year": 2017 },
            {"name": "Rahul Mehta","rank": "AIR 6", "year":2023}
          ],
          "Performance Tracking": [
            { "name": "Tushar Malhotra", "rank": "AIR 1", "year": 2016 },
            { "name": "Rohit Jain", "rank": "AIR 3", "year": 2016 },
            { "name": "Amit Bhaskar", "rank": "AIR 5", "year": 2016 },
            { "name": "Sandeep Joshi", "rank": "AIR 7", "year": 2016 },
            { "name": "Nitin Kumar", "rank": "AIR 9", "year": 2016 },
            {"name": "Vikram Rao" ,"rank":"AIR 8","year":2023}
          ],
          "Mental Health": [
            { "name": "Karan Chopra", "rank": "AIR 2", "year": 2015 },
            { "name": "Suraj Patel", "rank": "AIR 4", "year": 2015 },
            { "name": "Anubhav Sinha", "rank": "AIR 6", "year": 2015 },
            { "name": "Arvind Sharma", "rank": "AIR 8", "year": 2015 },
            { "name": "Rajat Verma", "rank": "AIR 10", "year": 2015 },
            {"name": "Meera Joshi","rank":"AIR 2", "year":2022}

          ]

      },
      content: {
      'Daily Schedule': [
    'I dedicated approximately 6 hours daily to JEE preparation in class 11th and increased my study time to about 14 hours daily in class 12th.',
    'I dedicated specific time blocks for each subject, with Physics in the morning, Chemistry post-lunch, and Mathematics in the evening. I included buffer time for unexpected interruptions or difficult topics.',
    'I included regular breaks of 15-20 minutes between study sessions to maintain focus and prevent mental fatigue. I used these breaks for quick walks or light stretching exercises.',
    'I practiced solving problems for at least 2 hours daily to build problem-solving speed and accuracy. I started with easier problems and gradually increased the difficulty level.',
    'I ended my day with a 30-minute revision session to reinforce the concepts I learned during the day. I maintained a small diary to note down key points and doubts.',
'I divided my day into focused study blocks of 3-hour sessions, ensuring deep work without distractions. I dedicated mornings to tough problem-solving when my mind was fresh, afternoons for theory revision, and evenings for mock tests and error analysis'
  ],

  'Reference Books': [
    'For Physics, refer to HC Verma, DC Pandey, and previous years question papers for conceptual clarity.',
    'Use H.C. Verma for Physics theory, B.M. Sharma for advanced problems, Pradeep for Class 11 Chemistry theory, Narendra Awasthi for Physical, M.S. Chauhan for Organic, and K. Kumar for Inorganic, focusing on one book per subject.',
    'Use D.C. Pandey for practice, K. Kumar for Inorganic Chemistry, Himanshu Pandey & M.S. Chauhan for Organic, and Vinay Kumar for Calculus, focusing on mastering one book per subject',
    'Use Vinay Kumar for advanced Mathematics, M.S. Chauhan for Organic Chemistry, and D.C. Pandey for Physics, focusing on mastering one book per subject rather than jumping between multiple resources.',
    'Use NCERT as the foundation for Biology, supplemented with Trueman’s Biology for deeper understanding. For Chemistry, stick to MS Chauhan for Organic Chemistry and N Awasthi for Physical Chemistry to build strong problem-solving skills.',
    'For Physics, I relied on Concepts of Physics by H.C. Verma for conceptual clarity and DC Pandey’s Objective Physics for problem practice. In Biology, I revised NCERT multiple times and used MTG Fingertips for quick recall and question practice.'
  ],
 'Notes': [
    'I emphasized structured and organized note-taking. I used color coding and highlighting to differentiate key concepts, formulas, and definitions. I focused on conceptual clarity by summarizing key points in my own words. I consistently revised and refined my notes to ensure a deep understanding.',
    'I maintained clear and concise notes. I focused only on key points, avoiding unnecessary details for efficient revision. I regularly updated my notes with examples and solved problems, ensuring they were complete, error-free, and well-structured. I also created separate revision notes summarizing crucial concepts before exams.',
    'I created self-generated notes. I summarized core concepts in my own words instead of relying on readymade materials. I consistently reviewed my notes after each class and prioritized them over textbooks during exam revision to reinforce understanding and quickly brush up on key topics.',
    'I used simplified, bullet-point notes. I captured only essential information for quick and efficient revision. I emphasized using short, clear sentences and incorporated visuals like diagrams and charts for better understanding. I actively annotated notes during lectures to reinforce learning.',
    'I followed a structured format for each subject. I organized notes into sections like Theory, Formulas, Important Derivations, and Example Problems. I adopted a minimalist approach, regularly updating my notes with teacher feedback. I used flowcharts for complex topics to visually represent key relationships.'
  ],
 'Clear Backlogs': [
"Backlogs? They're not roadblocks, they're launchpads! Think of them as hidden power-ups waiting to be unlocked. Rahul Nair, a top student, knows this: a shift in mindset is all it takes to turn those 'lost' topics into your secret weapons for success.",
"Don't just revise backlogs, conquer them! IIT Guwahati alumnus Kunal Bhardwaj's strategy? Sync your backlog blitz with your current studies. Stay ahead of the game and patch those gaps simultaneously. It's the ultimate efficiency hack.",
"Prioritize like a pro, dominate like a champion! Experts agree: triage your backlogs by urgency. Focus your firepower on the high-impact topics first. Maximum results, minimum stress – that's the winning formula.",
"2-3 hours a day: that's your backlog superpower window! Sameer Malik, another IIT Guwahati success story, swears by it. Consistent, focused effort is the key. Small wins every day add up to a massive advantage come exam day.",
"Crush your backlogs, not your spirit! Top educators know burnout is the enemy. Break those mountains of material into manageable molehills. Smart work, strategic breaks, and unwavering momentum – that's how you conquer backlogs and stay sane."
],
'Test Series': [
    'I swore by daily practice and test analysis. I identified weak areas, fixed mistakes, and sharpened concepts.',
    'I mastered speed and accuracy by practicing under timed conditions. Simulating real exam pressure improved my time management and reduced errors.',
    'I made mock tests a regular part of my routine because they revealed my weak areas and helped me improve. Every mistake I made in practice was a lesson, ensuring I wouldn’t repeat it in the actual exam.',
    'I also emphasized quality over quantity in study hours. Focused 3-4 hour sessions were better than half-hearted 12-hour marathons.',
    'I followed a structured timetable with dedicated slots for each subject. A balanced routine ensured complete syllabus coverage and regular revision.',
    'I treated every test series like the actual JEE exam, pushing myself to stay calm under pressure and adapt my approach in real time.'
],

'Group Studies': [
    'I emphasized group studies to balance all three subjects. Discussing weak topics with peers strengthened understanding and filled knowledge gaps.',
    'I relied on regular mock tests and PYQs. One month before the exam, I focused entirely on them to fine-tune my accuracy and confidence.',
    'I highlighted strategic planning. Smart work, analyzing weak areas, and following a structured plan ensured steady progress.',
    'Collaborative learning helped me gain diverse perspectives. Group discussions clarified doubts, boosted retention, and kept motivation high.',
    'Consistency was key—studying with peers created accountability. Regular practice and strategic discussions improved problem-solving speed and efficiency.',
    'I used group studies not just for solving doubts but to challenge my understanding—explaining concepts to friends often exposed gaps in my own knowledge.'
],
'Rote Learning':
["I emphasized understanding the 'why' behind concepts instead of memorizing. Deep comprehension made problem-solving feel natural and intuitive.",
"I focused on derivations rather than shortcuts. Knowing how formulas are built gave me confidence and strengthened my conceptual clarity.I prioritized applying concepts over memorizing methods. When my concepts were strong, solving problems became effortless and logical.",
"I believed in mastering derivations and principles instead of just memorizing formulas. A strong foundation allowed me to derive what I needed instead of blindly recalling information.",
"Understanding over memorization is key. Once I truly grasped the logic behind a concept, formulas and solutions followed naturally without extra effort.",
"I believed in mastering derivations and principles instead of just memorizing formulas. A strong foundation allowed me to derive what I needed instead of blindly recalling information.",
"I avoided rote learning and focused on understanding concepts deeply—if I couldn’t explain a topic in simple terms, I knew I hadn’t mastered it yet."
],




'Phone Addiction':
["I kept my phone in another room while studying. Out of sight meant out of mind, which made it much easier to focus.",
"I limited social media to 30 minutes in the evening. Using 'Do Not Disturb' mode during study sessions ensured I wasn't constantly distracted.",
"I used apps like 'Forest' to stay focused. Having a visual reminder of my study goal kept me accountable and reduced unnecessary phone usage.",
"I tracked my screen time with apps and challenged myself daily to reduce phone usage. Seeing real data on my phone habits helped me consciously cut down on distractions.",
"I adopted a 'Phone-Free Hour' before bed. This helped me sleep better and wake up refreshed, improving my focus the next day.",
"I kept my phone in another room while studying—breaking the habit of constant scrolling helped me regain focus and make every study session count."],

'Performance Tracking':
["I kept a daily log of study hours, topics covered, and struggles. Weekly reviews helped me analyze my progress and adjust my study plan accordingly.",
"I took daily short tests and weekly full-length mocks. Tracking my scores and analyzing errors allowed me to improve consistently and refine my approach.",
"I tracked time, solving speed, and mistake frequency during mocks. This focus on efficiency helped me balance speed with accuracy under exam conditions.",
"I did thorough post-test analysis. Understanding the root cause of my mistakes ensured I didn't repeat them in future tests.",
"I rated my confidence on topics weekly. This helped me prioritize weak areas and ensure I was fully prepared before moving forward.",
"I maintained a simple log of my test scores and mistake patterns—spotting trends early helped me tweak my strategies before it was too late."],

'Mental Health':
["I followed a strict study schedule but never overburdened myself. Regular breaks, hobbies, and family time kept my mind fresh and prevented burnout.",
"I managed time wisely and avoided exhaustion by staying physically active with jogging and cycling. Exercise gave me an energy boost and improved my concentration.",
"I used simple relaxation techniques like short walks and music. These small habits helped me clear my mind and stay stress-free.",
"I prioritized mental health by practicing mindfulness. Staying connected with friends and family provided emotional support and kept me motivated.",
"I balanced studies with physical activity, favorite shows, and social interactions. This prevented isolation and made my preparation journey more sustainable.",
"I treated breaks as non-negotiable—stepping away from books to walk, meditate, or talk to family kept me sane and sharpened my focus when I returned."],


      }
    },
    'AIR 10-50': {
      toppers: {
        
          "Daily Schedule": [
            { "name": "Rahul Mehta", "rank": "AIR 12", "year": 2024 },
            { "name": "Vikram Desai", "rank": "AIR 18", "year": 2023 },
            { "name": "Ishaan Verma", "rank": "AIR 25", "year": 2022 },
            { "name": "Siddharth Nair", "rank": "AIR 32", "year": 2021 },
            { "name": "Kunal Bhatia", "rank": "AIR 40", "year": 2020 }
          ],
          "Reference Books": [
            { "name": "Pranav Sharma", "rank": "AIR 15", "year": 2019 },
            { "name": "Rajat Khanna", "rank": "AIR 22", "year": 2018 },
            { "name": "Nikhil Gupta", "rank": "AIR 30", "year": 2017 },
            { "name": "Varun Malhotra", "rank": "AIR 38", "year": 2016 },
            { "name": "Amit Tiwari", "rank": "AIR 45", "year": 2024 }
          ],
          "Notes": [
            { "name": "Harsh Agarwal", "rank": "AIR 11", "year": 2023 },
            { "name": "Aditya Rao", "rank": "AIR 19", "year": 2022 },
            { "name": "Saurabh Jain", "rank": "AIR 26", "year": 2021 },
            { "name": "Yash Choudhary", "rank": "AIR 34", "year": 2020 },
            { "name": "Deepak Sharma", "rank": "AIR 48", "year": 2019 }
          ],
          "Clear Backlogs": [
            { "name": "Akhil Reddy", "rank": "AIR 14", "year": 2018 },
            { "name": "Tanmay Das", "rank": "AIR 21", "year": 2017 },
            { "name": "Rajesh Iyer", "rank": "AIR 29", "year": 2016 },
            { "name": "Kartik Mahajan", "rank": "AIR 37", "year": 2024 },
            { "name": "Neeraj Sinha", "rank": "AIR 42", "year": 2023 }
          ],
          "Test Series": [
            { "name": "Manoj Pillai", "rank": "AIR 13", "year": 2022 },
            { "name": "Gaurav Saxena", "rank": "AIR 20", "year": 2021 },
            { "name": "Vivek Joshi", "rank": "AIR 27", "year": 2020 },
            { "name": "Ashwin Kulkarni", "rank": "AIR 33", "year": 2019 },
            { "name": "Shubham Arora", "rank": "AIR 49", "year": 2018 }
          ],
          "Group Studies": [
            { "name": "Rohit Anand", "rank": "AIR 16", "year": 2017 },
            { "name": "Aayush Kapoor", "rank": "AIR 24", "year": 2016 },
            { "name": "Bharat Mishra", "rank": "AIR 31", "year": 2024 },
            { "name": "Piyush Sen", "rank": "AIR 39", "year": 2023 },
            { "name": "Tarun Bhardwaj", "rank": "AIR 46", "year": 2022 }
          ],
          "Rote Learning": [
            { "name": "Ankit Yadav", "rank": "AIR 17", "year": 2021 },
            { "name": "Shashank Roy", "rank": "AIR 23", "year": 2020 },
            { "name": "Mahesh Chatterjee", "rank": "AIR 28", "year": 2019 },
            { "name": "Sumit Pandey", "rank": "AIR 36", "year": 2018 },
            { "name": "Ravi Shankar", "rank": "AIR 44", "year": 2017 }
          ],
          "Phone Addiction": [
            { "name": "Yuvraj Taneja", "rank": "AIR 10", "year": 2016 },
            { "name": "Siddhant Goswami", "rank": "AIR 17", "year": 2024 },
            { "name": "Anirudh Bansal", "rank": "AIR 35", "year": 2023 },
            { "name": "Mohit Sagar", "rank": "AIR 41", "year": 2022 },
            { "name": "Devendra Pathak", "rank": "AIR 47", "year": 2021 }
          ],
          "Performance Tracking": [
            { "name": "Lokesh Menon", "rank": "AIR 14", "year": 2020 },
            { "name": "Sandeep Rathi", "rank": "AIR 21", "year": 2019 },
            { "name": "Omkar Shetty", "rank": "AIR 29", "year": 2018 },
            { "name": "Chirag Dutta", "rank": "AIR 37", "year": 2017 },
            { "name": "Arnav Chaturvedi", "rank": "AIR 43", "year": 2016 }
          ],
          "Mental Health": [
            { "name": "Rajiv Nanda", "rank": "AIR 12", "year": 2024 },
            { "name": "Dev Patel", "rank": "AIR 19", "year": 2023 },
            { "name": "Harshit Agarwal", "rank": "AIR 26", "year": 2022 },
            { "name": "Utsav Grover", "rank": "AIR 34", "year": 2021 },
            { "name": "Manish Goel", "rank": "AIR 50", "year": 2020 }
          ]
        
        
      },
      content: {
        
          "Daily Schedule": [
            "Consistent study hours are crucial. Aim for 10-12 hours daily, but prioritize quality over quantity.  Focus on deep understanding rather than just covering material.",
            "Time blocking is essential. Allocate specific slots for each subject, revision, and practice. Be flexible and adjust your schedule based on your progress and understanding.",
            "Regular breaks are non-negotiable. Short, frequent breaks (5-10 minutes every hour) are more effective than long, infrequent ones. Use breaks for relaxation, stretching, or a quick walk.",
            "Problem-solving is key. Dedicate a significant portion of your day to practicing problems from various sources. Start with easier problems and gradually increase the difficulty level.",
            "Revision is crucial for retention. Schedule regular revision sessions to reinforce concepts and identify weak areas. Use different revision techniques, such as flashcards, mind maps, and practice questions."
          ],
          "Reference Books": [
            "Choose a limited set of high-quality reference books and stick to them. Avoid jumping between multiple resources, as this can lead to confusion and superficial understanding.",
            "NCERT books are essential for building a strong foundation. Supplement them with other reference books for advanced concepts and problem-solving.",
           "Toppers actively engage with reference books by setting micro-challenges—before reading a solution, they first attempt the problem in multiple ways, then compare their approach with the book’s, analyzing where they can optimize their thinking.",
            "Previous years' question papers (PYQs) are invaluable. Solve them to understand the exam pattern, difficulty level, and important topics.",
            "Refer to standard textbooks for theory and specialized problem books for practice. Choose books that suit your learning style and understanding."
          ],
         "Notes": [
    "Effective note-taking is crucial. Apply the 80/20 rule—focus on the 20% of concepts that appear in 80% of problems to keep notes concise and high-yield.",
    "Use visual aids like diagrams, flowcharts, and mind maps. Implement color-coded layers to distinguish definitions, formulas, and problem-solving steps for better recall.",
    "Develop your own note-taking style. Use a question-driven approach by framing key points as questions and answering them to enhance active engagement.",
    "Regularly review and update your notes. Before each study session, spend two minutes adding insights from recent practice questions to reinforce weak areas.",
    "Use your notes for quick revision before exams. Convert them into audio summaries and listen during short breaks to maximize retention and recall."
],

          "Clear Backlogs": [
            "Address backlogs promptly. Don't let them accumulate, as this can create unnecessary stress and pressure.",
            "Prioritize backlogs based on their importance and relevance to current topics. Focus on clearing the most important backlogs first.",
            "Allocate specific time slots for clearing backlogs. Consistency is key. Even a small amount of time dedicated to backlogs each day can make a big difference.",
            "Don't try to clear backlogs all at once. Break them down into smaller, manageable chunks. This will make the task less daunting and more achievable.",
            "Use different resources to clear backlogs, such as textbooks, online lectures, and study groups. Find what works best for you."
          ],
        "Test Series": [
    "Regular mock tests are essential for evaluating your preparation. Treat each test as a learning experiment rather than just a performance check.",
    "Analyze your performance in mock tests thoroughly. Categorize mistakes into conceptual errors, calculation mistakes, and time-pressure mistakes to create targeted improvement strategies.",
    "Use mock tests to improve your time management skills. Practice adaptive pacing—spend more time on high-weightage topics while ensuring you don’t lose easy marks on simpler questions.",
    "Don't get discouraged by low scores in mock tests. Focus on mistake trends rather than individual scores, and track improvement over multiple tests to measure real progress.",
    "Choose a test series that covers the entire syllabus. Opt for one that includes varying difficulty levels to prepare for all possible exam scenarios."
],
"Group Studies": [
    "Group studies can be powerful when structured effectively. Focus on active discussions, concept quizzes, and problem-solving rather than passive reading together.",
    "Choose your study partners wisely. Surround yourself with goal-oriented peers who challenge and motivate you instead of just offering comfort.",
    "Use group studies to tackle tough problems collaboratively. Explaining concepts to others reinforces your own understanding and highlights any gaps in knowledge.",
    "Don't rely solely on group studies. Maintain a balance by dedicating time to self-study for deep conceptual clarity and personal problem-solving speed.",
    "Keep group study sessions goal-driven. Set a clear agenda beforehand, allocate time for discussions, and ensure every member contributes meaningfully."
],
"Rote Learning": [
    "Convert rote learning into active recall. Instead of repeating information mindlessly, test yourself regularly by recalling key concepts from memory.",
    "Use mnemonics and story-based techniques to memorize formulas and definitions. Associating information with meaningful patterns makes retention easier.",
    "Instead of rote memorization, practice concept mapping. Connect new information to what you already know to strengthen retention and application.",
    "Apply learned concepts to real-world scenarios. The more you relate abstract ideas to practical situations, the less you'll need to memorize blindly.",
    "Replace passive repetition with problem-solving. The more you practice applying concepts, the more naturally they will stay in your memory."
],

"Phone Addiction": [
    "Create a 'no-phone' study zone. Keep your phone in another room or use apps that block distractions during study hours.",
    "Use the Pomodoro technique with planned phone breaks. Reward focused study sessions with short, timed phone usage to maintain discipline.",
    "Turn your phone into a productivity tool. Replace distracting apps with educational resources, flashcard apps, and question-solving platforms.",
    "Enable grayscale mode and disable social media notifications. A less visually appealing phone screen reduces the urge to check it frequently.",
    "Set accountability rules with a study buddy. Inform someone about your phone-free study commitment to stay disciplined and avoid unnecessary usage."
],

"Performance Tracking": [
    "Maintain a ‘progress journal’ instead of just tracking scores. Document mistakes, insights, and strategies that worked for better long-term improvement.",
    "Use performance tracking to spot patterns in mistakes. Categorize errors (conceptual, calculation, time management) and tailor your practice accordingly.",
    "Set weekly performance goals, not just long-term ones. Breaking progress into smaller, measurable milestones keeps you motivated and focused.",
    "Compare your current performance with your past self, not with others. Self-improvement should be your primary benchmark for growth.",
    "After each test, simulate an 'exam review session.' Re-attempt incorrect questions without looking at solutions to reinforce learning and identify gaps."
],

"Mental Health": [
    "Treat mental health as part of your study plan. Schedule breaks, relaxation time, and self-care just as you schedule study sessions.",
    "Recognize burnout signs early. If you feel exhausted or demotivated, adjust your study strategy instead of pushing yourself into mental fatigue.",
    "Incorporate movement into your daily routine. Simple activities like stretching or a 10-minute walk can significantly refresh your mind.",
    "Use breathing exercises or guided meditation before high-stress situations like mock tests. This helps maintain composure and improves focus.",
    "Develop a ‘positivity habit.’ Start your day by noting one thing you’re grateful for to keep a healthy and balanced mindset during preparation."
]

        }
      
    },
    'AIR 50-1000': {
      toppers: {
        
          "Daily Schedule": [
            { "name": "Rahul Mehta", "rank": "AIR 58", "year": 2024 },
            { "name": "Vikram Desai", "rank": "AIR 132", "year": 2023 },
            { "name": "Ishaan Verma", "rank": "AIR 245", "year": 2022 },
            { "name": "Siddharth Nair", "rank": "AIR 512", "year": 2021 },
            { "name": "Kunal Bhatia", "rank": "AIR 986", "year": 2020 }
          ],
          "Reference Books": [
            { "name": "Pranav Sharma", "rank": "AIR 67", "year": 2019 },
            { "name": "Rajat Khanna", "rank": "AIR 178", "year": 2018 },
            { "name": "Nikhil Gupta", "rank": "AIR 364", "year": 2017 },
            { "name": "Varun Malhotra", "rank": "AIR 589", "year": 2016 },
            { "name": "Amit Tiwari", "rank": "AIR 812", "year": 2024 }
          ],
          "Notes": [
            { "name": "Harsh Agarwal", "rank": "AIR 92", "year": 2023 },
            { "name": "Aditya Rao", "rank": "AIR 156", "year": 2022 },
            { "name": "Saurabh Jain", "rank": "AIR 378", "year": 2021 },
            { "name": "Yash Choudhary", "rank": "AIR 645", "year": 2020 },
            { "name": "Deepak Sharma", "rank": "AIR 923", "year": 2019 }
          ],
          "Clear Backlogs": [
            { "name": "Akhil Reddy", "rank": "AIR 88", "year": 2018 },
            { "name": "Tanmay Das", "rank": "AIR 199", "year": 2017 },
            { "name": "Rajesh Iyer", "rank": "AIR 465", "year": 2016 },
            { "name": "Kartik Mahajan", "rank": "AIR 712", "year": 2024 },
            { "name": "Neeraj Sinha", "rank": "AIR 978", "year": 2023 }
          ],
          "Test Series": [
            { "name": "Manoj Pillai", "rank": "AIR 73", "year": 2022 },
            { "name": "Gaurav Saxena", "rank": "AIR 184", "year": 2021 },
            { "name": "Vivek Joshi", "rank": "AIR 392", "year": 2020 },
            { "name": "Ashwin Kulkarni", "rank": "AIR 669", "year": 2019 },
            { "name": "Shubham Arora", "rank": "AIR 931", "year": 2018 }
          ],
          "Group Studies": [
            { "name": "Rohit Anand", "rank": "AIR 85", "year": 2017 },
            { "name": "Aayush Kapoor", "rank": "AIR 223", "year": 2016 },
            { "name": "Bharat Mishra", "rank": "AIR 421", "year": 2024 },
            { "name": "Piyush Sen", "rank": "AIR 687", "year": 2023 },
            { "name": "Tarun Bhardwaj", "rank": "AIR 942", "year": 2022 }
          ],
          "Rote Learning": [
            { "name": "Ankit Yadav", "rank": "AIR 95", "year": 2021 },
            { "name": "Shashank Roy", "rank": "AIR 201", "year": 2020 },
            { "name": "Mahesh Chatterjee", "rank": "AIR 479", "year": 2019 },
            { "name": "Sumit Pandey", "rank": "AIR 721", "year": 2018 },
            { "name": "Ravi Shankar", "rank": "AIR 998", "year": 2017 }
          ],
          "Phone Addiction": [
            { "name": "Yuvraj Taneja", "rank": "AIR 50", "year": 2016 },
            { "name": "Siddhant Goswami", "rank": "AIR 187", "year": 2024 },
            { "name": "Anirudh Bansal", "rank": "AIR 468", "year": 2023 },
            { "name": "Mohit Sagar", "rank": "AIR 732", "year": 2022 },
            { "name": "Devendra Pathak", "rank": "AIR 990", "year": 2021 }
          ],
          "Performance Tracking": [
            { "name": "Lokesh Menon", "rank": "AIR 79", "year": 2020 },
            { "name": "Sandeep Rathi", "rank": "AIR 210", "year": 2019 },
            { "name": "Omkar Shetty", "rank": "AIR 495", "year": 2018 },
            { "name": "Chirag Dutta", "rank": "AIR 710", "year": 2017 },
            { "name": "Arnav Chaturvedi", "rank": "AIR 975", "year": 2016 }
          ],
          "Mental Health": [
            { "name": "Rajiv Nanda", "rank": "AIR 66", "year": 2024 },
            { "name": "Dev Patel", "rank": "AIR 199", "year": 2023 },
            { "name": "Harshit Agarwal", "rank": "AIR 415", "year": 2022 },
            { "name": "Utsav Grover", "rank": "AIR 682", "year": 2021 },
            { "name": "Manish Goel", "rank": "AIR 999", "year": 2020 }
          ]
        
        
      },
      content: {
        "Daily Schedule": [
    "Design your schedule around your peak productivity hours. Identify when you focus best and reserve that time for your most challenging subjects.",
    "Use a mix of active learning methods throughout the day. Alternate between problem-solving, concept revision, and self-testing to keep engagement high.",
    "Balance study and relaxation. Plan a wind-down routine before bed, such as light reading or meditation, to ensure quality sleep and better retention.",
    "Implement a ‘buffer time’ system. Instead of rigid schedules, leave 15-20 minute slots for catching up on topics that take longer than expected.",
    "Make your schedule adaptable. Adjust study sessions weekly based on mock test performance, ensuring focus on weak areas while maintaining overall progress."
],

"Reference Books": [
    "Approach reference books with a goal-oriented mindset. Instead of reading passively, extract key takeaways and apply them through problem-solving.",
    "Use different books for different purposes. Some books are better for theory, while others excel at problem sets—mix them wisely for maximum efficiency.",
    "Don’t follow reference books sequentially. Prioritize high-yield topics first and selectively study sections that enhance understanding, rather than covering everything.",
    "After reading a topic, close the book and try explaining it in your own words. Teaching yourself ensures deeper retention and highlights gaps in understanding.",
    "Create a 'must-do' question list from reference books. Select problems that test core concepts and revisit them before major tests instead of redoing entire books."
],

"Notes": [
    "Summarize complex topics in one page using key formulas, diagrams, and essential takeaways. If it doesn’t fit, you’re adding unnecessary details.",
    "Use a 'question-driven' approach to notes. Instead of just writing down information, frame key ideas as questions and challenge yourself to answer them later.",
    "Highlight mistakes and misconceptions in your notes. Keeping track of common errors prevents repeating them in future practice.",
    "Organize notes by difficulty levels. Keep separate sections for fundamentals, tricky concepts, and advanced problem-solving techniques.",
    "Digitize handwritten notes using a tablet or scanning app. This allows quick searchability and easier revision on the go."
],

"Clear Backlogs": [
    "Use the 'reverse pyramid' approach—start with the most fundamental concept in your backlog and gradually work toward more advanced topics.",
    "Combine backlog clearance with daily study. For every two hours of new content, dedicate at least one hour to revisiting previous gaps.",
    "Use fast-track learning techniques, like watching 2x speed video lectures or using summary notes, to cover backlog topics efficiently.",
    "Focus on solving past years’ questions from backlog topics. Understanding how these concepts are tested in exams helps with faster and more targeted revision.",
    "Categorize backlogs into ‘urgent’ and ‘non-urgent.’ Tackle critical topics first while leaving less frequent concepts for lighter revision."
],

"Test Series": [
    "Simulate real exam conditions by practicing full-length mock tests at the same time as your actual exam slot.",
    "Develop a 'post-test analysis' habit. After each test, spend time re-solving incorrect questions without referring to solutions.",
    "Use a mistake journal. Categorize errors by type—conceptual, calculation, or time management—and review them regularly to prevent repetition.",
    "Experiment with different test-taking strategies. Try solving easier questions first in one test and a mixed approach in another to find what suits you best.",
    "Maintain a balance between topic-wise and full-length tests. While sectional tests refine weak areas, full-length tests build exam stamina and accuracy."
],

"Group Studies": [
    "Adopt a 'teach-and-learn' approach. Take turns explaining topics to each other, ensuring everyone benefits from different perspectives.",
    "Limit group studies to high-impact discussions. Set a specific agenda beforehand and avoid casual distractions to maximize productivity.",
    "Use group studies for active problem-solving. Attempt challenging questions together and analyze different solution approaches.",
    "Keep study groups small and efficient. Ideally, 3-4 focused members work best for serious academic discussions.",
    "Rotate roles within the group. Assign one person as a moderator, another as a note-taker, and one to summarize key learnings after each session."
],

"Rote Learning": [
    "Transform rote learning into pattern recognition. Group similar formulas, concepts, or problem types to understand underlying connections.",
    "Use analogies to simplify difficult concepts. Relating new information to familiar ideas improves retention without relying on memorization.",
    "Create mnemonics for long formulas or sequences. A simple phrase or acronym can help recall information more efficiently.",
    "Use the 'Feynman Technique'—explain concepts in your own words as if teaching a beginner to reinforce understanding.",
    "Mix memorization with active application. Immediately attempt a few questions after learning a new concept to embed it in memory."
],

"Phone Addiction": [
    "Use the '30-second rule.' If you find yourself reaching for your phone, pause for 30 seconds and consciously decide whether it’s necessary.",
    "Turn your study area into a distraction-free zone. Keep your phone in another room or use the ‘Do Not Disturb’ mode during study sessions.",
    "Replace phone scrolling with quick revision. Use flashcard apps or audio summaries instead of engaging in social media during breaks.",
    "Create a reward system. Earn screen time only after completing a set number of productive study hours.",
    "Uninstall or disable notifications from distracting apps. Removing temptations reduces the impulse to check your phone unnecessarily."
],

"Performance Tracking": [
    "Maintain a daily tracker with a simple rating system (1-5) for productivity, focus, and understanding of concepts studied.",
    "Use color-coded charts for tracking strong, medium, and weak topics. This helps visually map your progress and adjust focus accordingly.",
    "Convert mistakes into learning milestones. Instead of just noting errors, write down the correct approach and a similar question to retry later.",
    "Revisit performance data weekly and set micro-goals. Small, achievable targets lead to consistent long-term improvement.",
    "Instead of fixating on marks, track progress through accuracy rates in different question types to pinpoint specific problem areas."
],

"Mental Health": [
    "Integrate stress management into your routine. Spend at least 10 minutes daily on relaxation techniques like deep breathing or mindfulness.",
    "Schedule social interactions. Connecting with family or friends even for a short time can prevent burnout and maintain motivation.",
    "Treat sleep as part of your preparation strategy. Aim for 6.5-8 hours of quality sleep to enhance memory retention and cognitive performance.",
    "Maintain a healthy social connection. Engaging with supportive friends and family can provide emotional stability, reduce stress, and keep you motivated during your preparation journey.",
    "Recognize early signs of stress, such as lack of concentration or frustration, and take immediate steps like short breaks or a change in study environment to reset."
]

        
      }
    },
    'AIR 1000-5000': {
      toppers: {
        
          "Daily Schedule": [
            { "name": "Rohan Malhotra", "rank": "AIR 1056", "year": 2024 },
            { "name": "Siddharth Kapoor", "rank": "AIR 1789", "year": 2023 },
            { "name": "Amitabh Sinha", "rank": "AIR 2432", "year": 2022 },
            { "name": "Vikas Menon", "rank": "AIR 3876", "year": 2021 },
            { "name": "Keshav Tripathi", "rank": "AIR 4981", "year": 2020 }
          ],
          "Reference Books": [
            { "name": "Nishant Agarwal", "rank": "AIR 1143", "year": 2019 },
            { "name": "Rajat Sharma", "rank": "AIR 1902", "year": 2018 },
            { "name": "Anuj Verma", "rank": "AIR 2598", "year": 2017 },
            { "name": "Sumit Joshi", "rank": "AIR 3765", "year": 2016 },
            { "name": "Akhil Mehta", "rank": "AIR 4856", "year": 2024 }
          ],
          "Notes": [
            { "name": "Rahul Choudhary", "rank": "AIR 1207", "year": 2023 },
            { "name": "Manish Rao", "rank": "AIR 1873", "year": 2022 },
            { "name": "Saurabh Tiwari", "rank": "AIR 2684", "year": 2021 },
            { "name": "Yash Mittal", "rank": "AIR 3952", "year": 2020 },
            { "name": "Deepak Singh", "rank": "AIR 4895", "year": 2019 }
          ],
          "Clear Backlogs": [
            { "name": "Tarun Malhotra", "rank": "AIR 1321", "year": 2018 },
            { "name": "Tanmay Khurana", "rank": "AIR 1954", "year": 2017 },
            { "name": "Ravi Sharma", "rank": "AIR 2783", "year": 2016 },
            { "name": "Kunal Roy", "rank": "AIR 3987", "year": 2024 },
            { "name": "Neeraj Bhandari", "rank": "AIR 4923", "year": 2023 }
          ],
          "Test Series": [
            { "name": "Mohit Pillai", "rank": "AIR 1102", "year": 2022 },
            { "name": "Gaurav Saxena", "rank": "AIR 1859", "year": 2021 },
            { "name": "Vivek Narayan", "rank": "AIR 2897", "year": 2020 },
            { "name": "Ashwin Patel", "rank": "AIR 4123", "year": 2019 },
            { "name": "Shubham Verma", "rank": "AIR 4987", "year": 2018 }
          ],
          "Group Studies": [
            { "name": "Rohit Anand", "rank": "AIR 1253", "year": 2017 },
            { "name": "Aayush Kapoor", "rank": "AIR 2107", "year": 2016 },
            { "name": "Bharat Mishra", "rank": "AIR 3215", "year": 2024 },
            { "name": "Piyush Sen", "rank": "AIR 4387", "year": 2023 },
            { "name": "Tarun Bhardwaj", "rank": "AIR 4978", "year": 2022 }
          ],
          "Rote Learning": [
            { "name": "Ankit Yadav", "rank": "AIR 1409", "year": 2021 },
            { "name": "Shashank Roy", "rank": "AIR 2183", "year": 2020 },
            { "name": "Mahesh Chatterjee", "rank": "AIR 3567", "year": 2019 },
            { "name": "Sumit Pandey", "rank": "AIR 4235", "year": 2018 },
            { "name": "Ravi Shankar", "rank": "AIR 4989", "year": 2017 }
          ],
          "Phone Addiction": [
            { "name": "Yuvraj Taneja", "rank": "AIR 1012", "year": 2016 },
            { "name": "Siddhant Goswami", "rank": "AIR 2089", "year": 2024 },
            { "name": "Anirudh Bansal", "rank": "AIR 3645", "year": 2023 },
            { "name": "Mohit Sagar", "rank": "AIR 4328", "year": 2022 },
            { "name": "Devendra Pathak", "rank": "AIR 4992", "year": 2021 }
          ],
          "Performance Tracking": [
            { "name": "Lokesh Menon", "rank": "AIR 1135", "year": 2020 },
            { "name": "Sandeep Rathi", "rank": "AIR 2098", "year": 2019 },
            { "name": "Omkar Shetty", "rank": "AIR 3695", "year": 2018 },
            { "name": "Chirag Dutta", "rank": "AIR 4178", "year": 2017 },
            { "name": "Arnav Chaturvedi", "rank": "AIR 4997", "year": 2016 }
          ],
          "Mental Health": [
            { "name": "Rajiv Nanda", "rank": "AIR 1279", "year": 2024 },
            { "name": "Dev Patel", "rank": "AIR 2213", "year": 2023 },
            { "name": "Harshit Agarwal", "rank": "AIR 3435", "year": 2022 },
            { "name": "Utsav Grover", "rank": "AIR 4192", "year": 2021 },
            { "name": "Manish Goel", "rank": "AIR 4988", "year": 2020 }
          ]
        
        
      },
      content: {
        
         "Daily Schedule": [
    "Design your schedule around your peak productivity hours. Identify when you focus best and reserve that time for your most challenging subjects.",
    "Use a mix of active learning methods throughout the day. Alternate between problem-solving, concept revision, and self-testing to keep engagement high.",
    "Balance study and relaxation. Plan a wind-down routine before bed, such as light reading or meditation, to ensure quality sleep and better retention.",
    "Implement a ‘buffer time’ system. Instead of rigid schedules, leave 15-20 minute slots for catching up on topics that take longer than expected.",
    "Make your schedule adaptable. Adjust study sessions weekly based on mock test performance, ensuring focus on weak areas while maintaining overall progress."
],

"Reference Books": [
    "Approach reference books with a goal-oriented mindset. Instead of reading passively, extract key takeaways and apply them through problem-solving.",
    "Use different books for different purposes. Some books are better for theory, while others excel at problem sets—mix them wisely for maximum efficiency.",
    "Don’t follow reference books sequentially. Prioritize high-yield topics first and selectively study sections that enhance understanding, rather than covering everything.",
    "After reading a topic, close the book and try explaining it in your own words. Teaching yourself ensures deeper retention and highlights gaps in understanding.",
    "Create a 'must-do' question list from reference books. Select problems that test core concepts and revisit them before major tests instead of redoing entire books."
],

"Notes": [
    "Summarize complex topics in one page using key formulas, diagrams, and essential takeaways. If it doesn’t fit, you’re adding unnecessary details.",
    "Use a 'question-driven' approach to notes. Instead of just writing down information, frame key ideas as questions and challenge yourself to answer them later.",
    "Highlight mistakes and misconceptions in your notes. Keeping track of common errors prevents repeating them in future practice.",
    "Organize notes by difficulty levels. Keep separate sections for fundamentals, tricky concepts, and advanced problem-solving techniques.",
    "Digitize handwritten notes using a tablet or scanning app. This allows quick searchability and easier revision on the go."
],

"Clear Backlogs": [
    "Use the 'reverse pyramid' approach—start with the most fundamental concept in your backlog and gradually work toward more advanced topics.",
    "Combine backlog clearance with daily study. For every two hours of new content, dedicate at least one hour to revisiting previous gaps.",
    "Use fast-track learning techniques, like watching 2x speed video lectures or using summary notes, to cover backlog topics efficiently.",
    "Focus on solving past years’ questions from backlog topics. Understanding how these concepts are tested in exams helps with faster and more targeted revision.",
    "Categorize backlogs into ‘urgent’ and ‘non-urgent.’ Tackle critical topics first while leaving less frequent concepts for lighter revision."
],

"Test Series": [
    "Simulate real exam conditions by practicing full-length mock tests at the same time as your actual exam slot.",
    "Develop a 'post-test analysis' habit. After each test, spend time re-solving incorrect questions without referring to solutions.",
    "Use a mistake journal. Categorize errors by type—conceptual, calculation, or time management—and review them regularly to prevent repetition.",
    "Experiment with different test-taking strategies. Try solving easier questions first in one test and a mixed approach in another to find what suits you best.",
    "Maintain a balance between topic-wise and full-length tests. While sectional tests refine weak areas, full-length tests build exam stamina and accuracy."
],

"Group Studies": [
    "Adopt a 'teach-and-learn' approach. Take turns explaining topics to each other, ensuring everyone benefits from different perspectives.",
    "Limit group studies to high-impact discussions. Set a specific agenda beforehand and avoid casual distractions to maximize productivity.",
    "Use group studies for active problem-solving. Attempt challenging questions together and analyze different solution approaches.",
    "Keep study groups small and efficient. Ideally, 3-4 focused members work best for serious academic discussions.",
    "Rotate roles within the group. Assign one person as a moderator, another as a note-taker, and one to summarize key learnings after each session."
],

"Rote Learning": [
    "Transform rote learning into pattern recognition. Group similar formulas, concepts, or problem types to understand underlying connections.",
    "Use analogies to simplify difficult concepts. Relating new information to familiar ideas improves retention without relying on memorization.",
    "Create mnemonics for long formulas or sequences. A simple phrase or acronym can help recall information more efficiently.",
    "Use the 'Feynman Technique'—explain concepts in your own words as if teaching a beginner to reinforce understanding.",
    "Mix memorization with active application. Immediately attempt a few questions after learning a new concept to embed it in memory."
],

"Phone Addiction": [
    "Use the '30-second rule.' If you find yourself reaching for your phone, pause for 30 seconds and consciously decide whether it’s necessary.",
    "Turn your study area into a distraction-free zone. Keep your phone in another room or use the ‘Do Not Disturb’ mode during study sessions.",
    "Replace phone scrolling with quick revision. Use flashcard apps or audio summaries instead of engaging in social media during breaks.",
    "Create a reward system. Earn screen time only after completing a set number of productive study hours.",
    "Uninstall or disable notifications from distracting apps. Removing temptations reduces the impulse to check your phone unnecessarily."
],

"Performance Tracking": [
    "Maintain a daily tracker with a simple rating system (1-5) for productivity, focus, and understanding of concepts studied.",
    "Use color-coded charts for tracking strong, medium, and weak topics. This helps visually map your progress and adjust focus accordingly.",
    "Convert mistakes into learning milestones. Instead of just noting errors, write down the correct approach and a similar question to retry later.",
    "Revisit performance data weekly and set micro-goals. Small, achievable targets lead to consistent long-term improvement.",
    "Instead of fixating on marks, track progress through accuracy rates in different question types to pinpoint specific problem areas."
],

"Mental Health": [
    "Integrate stress management into your routine. Spend at least 10 minutes daily on relaxation techniques like deep breathing or mindfulness.",
    "Schedule social interactions. Connecting with family or friends even for a short time can prevent burnout and maintain motivation.",
    "Treat sleep as part of your preparation strategy. Aim for 6.5-8 hours of quality sleep to enhance memory retention and cognitive performance.",
    "Adopting a growth mindset means believing that your abilities and intelligence can improve with effort, practice, and persistence. Instead of fearing mistakes or setbacks, view them as learning opportunities that help you refine your approach and become stronger in your preparation.",
    "Recognize early signs of stress, such as lack of concentration or frustration, and take immediate steps like short breaks or a change in study environment to reset."
]

      }
    },
    'AIR 5000-10,000': {
      toppers: {
          "Daily Schedule": [
            { "name": "Aman Tiwari", "rank": "AIR 5023", "year": 2024 },
            { "name": "Siddharth Nair", "rank": "AIR 6198", "year": 2023 },
            { "name": "Harsh Mehta", "rank": "AIR 7254", "year": 2022 },
            { "name": "Rakesh Rao", "rank": "AIR 8436", "year": 2021 },
            { "name": "Keshav Sharma", "rank": "AIR 9785", "year": 2020 }
          ],
          "Reference Books": [
            { "name": "Vivek Bansal", "rank": "AIR 5483", "year": 2019 },
            { "name": "Aditya Khanna", "rank": "AIR 6892", "year": 2018 },
            { "name": "Tanmay Jain", "rank": "AIR 7521", "year": 2017 },
            { "name": "Nitin Pillai", "rank": "AIR 8657", "year": 2016 },
            { "name": "Shivam Joshi", "rank": "AIR 9983", "year": 2024 }
          ],
          "Notes": [
            { "name": "Deepak Thakur", "rank": "AIR 5102", "year": 2023 },
            { "name": "Rohit Choudhary", "rank": "AIR 6451", "year": 2022 },
            { "name": "Aakash Verma", "rank": "AIR 7823", "year": 2021 },
            { "name": "Puneet Sinha", "rank": "AIR 8924", "year": 2020 },
            { "name": "Kunal Iyer", "rank": "AIR 9852", "year": 2019 }
          ],
          "Clear Backlogs": [
            { "name": "Manoj Tripathi", "rank": "AIR 5337", "year": 2018 },
            { "name": "Rishi Gupta", "rank": "AIR 6732", "year": 2017 },
            { "name": "Tanmay Bhardwaj", "rank": "AIR 8219", "year": 2016 },
            { "name": "Vikram Yadav", "rank": "AIR 9456", "year": 2024 },
            { "name": "Harshit Narayan", "rank": "AIR 9994", "year": 2023 }
          ],
          "Test Series": [
            { "name": "Gagan Malhotra", "rank": "AIR 5231", "year": 2022 },
            { "name": "Kartik Menon", "rank": "AIR 6954", "year": 2021 },
            { "name": "Prateek Das", "rank": "AIR 8123", "year": 2020 },
            { "name": "Sumit Rao", "rank": "AIR 9367", "year": 2019 },
            { "name": "Tarun Mishra", "rank": "AIR 9945", "year": 2018 }
          ],
          "Group Studies": [
            { "name": "Yash Patel", "rank": "AIR 5310", "year": 2017 },
            { "name": "Sachin Sood", "rank": "AIR 7213", "year": 2016 },
            { "name": "Mohit Agarwal", "rank": "AIR 8652", "year": 2024 },
            { "name": "Rahul Saxena", "rank": "AIR 9123", "year": 2023 },
            { "name": "Arjun Nanda", "rank": "AIR 9876", "year": 2022 }
          ],
          "Rote Learning": [
            { "name": "Shashank Goyal", "rank": "AIR 5784", "year": 2021 },
            { "name": "Sourabh Kaushik", "rank": "AIR 7382", "year": 2020 },
            { "name": "Ajay Bhandari", "rank": "AIR 8567", "year": 2019 },
            { "name": "Hemant Pandey", "rank": "AIR 9245", "year": 2018 },
            { "name": "Jatin Goel", "rank": "AIR 9989", "year": 2017 }
          ],
          "Phone Addiction": [
            { "name": "Ankur Taneja", "rank": "AIR 5017", "year": 2016 },
            { "name": "Pranay Goswami", "rank": "AIR 7056", "year": 2024 },
            { "name": "Himanshu Rathi", "rank": "AIR 8127", "year": 2023 },
            { "name": "Pawan Sagar", "rank": "AIR 9312", "year": 2022 },
            { "name": "Ashish Pathak", "rank": "AIR 9973", "year": 2021 }
          ],
          "Performance Tracking": [
            { "name": "Ravi Nambiar", "rank": "AIR 5182", "year": 2020 },
            { "name": "Sandeep Batra", "rank": "AIR 7649", "year": 2019 },
            { "name": "Rishabh Shetty", "rank": "AIR 8793", "year": 2018 },
            { "name": "Nikhil Dutta", "rank": "AIR 9231", "year": 2017 },
            { "name": "Uday Chaturvedi", "rank": "AIR 9997", "year": 2016 }
          ],
          "Mental Health": [
            { "name": "Harsh Nanda", "rank": "AIR 5612", "year": 2024 },
            { "name": "Dhruv Patel", "rank": "AIR 8456", "year": 2023 },
            { "name": "Karan Agarwal", "rank": "AIR 9023", "year": 2022 },
            { "name": "Laksh Grover", "rank": "AIR 9654", "year": 2021 },
            { "name": "Amit Goel", "rank": "AIR 9992", "year": 2020 }
          ]
      },
      content: {
      
          "Daily Schedule": [
            "Balance structured study with flexibility. Aim for 7-8 focused hours, but prioritize deep understanding over simply putting in time.  Don't be afraid to adjust your schedule based on your progress and energy levels.",
            "Prioritize active learning.  Instead of passively reading, engage with the material through problem-solving, teaching concepts to others, or creating your own examples.  This reinforces understanding and improves retention.",
            "Regular breaks are crucial.  Short, frequent breaks (5-10 minutes every hour) are more effective than long, infrequent ones. Use breaks to step away from your study area, stretch, or engage in a relaxing activity.",
            "Problem-solving is key.  Practice diverse problems, focusing on understanding the underlying concepts and applying them creatively.  Don't just memorize solutions; understand the logic behind them.",
            "Spaced repetition is your friend.  Review material at increasing intervals to strengthen long-term memory.  Use flashcards, quizzes, or other techniques to reinforce learning."
          ],
          "Reference Books": [
            "Select a few high-quality reference books and focus on mastering them.  Don't get bogged down by trying to cover everything from multiple sources.",
            "NCERT forms the bedrock.  Use reference books to deepen your understanding and explore more advanced concepts.",
            "Prioritize conceptual clarity over sheer volume of material.  Deep understanding will enable you to tackle a wider range of problems.",
            "Previous years' question papers (PYQs) are essential.  Analyze them to understand the exam pattern, identify important topics, and pinpoint your weaknesses.",
            "Choose reference books that explain concepts clearly and provide ample practice problems.  Look for books that cater to your learning style."
          ],
          "Notes": [
            "Create concise, personalized notes that summarize key concepts, formulas, and problem-solving strategies.  Your notes should be a valuable tool for quick revision.",
            "Use visual aids like diagrams, flowcharts, and mind maps to enhance understanding and make your notes more memorable.",
            "Develop a note-taking system that works for you.  Experiment with different techniques and find what helps you learn and retain information most effectively.",
            "Regularly review and refine your notes.  Add new insights, examples, and connections as you learn.",
            "Your notes should be a personalized learning resource, reflecting your understanding of the material."
          ],
          "Clear Backlogs": [
            "Address backlogs strategically.  Prioritize topics that are essential for your current studies and those that carry significant weight in the exam.",
            "Break down large backlogs into smaller, manageable tasks.  This will make the process less overwhelming and help you stay motivated.",
            "Allocate dedicated time slots for clearing backlogs, but don't neglect your current studies.  Maintain a balance between catching up and keeping pace.",
            "Utilize various resources to clear backlogs, such as textbooks, online lectures, study groups, or tutoring.  Find what works best for you.",
            "Focus on understanding the core concepts rather than just memorizing information.  This will help you build a stronger foundation and prevent future backlogs."
          ],
          "Test Series": [
            "Regular mock tests are crucial for evaluating your preparation and identifying areas for improvement.  Aim for at least one mock test every two weeks, gradually increasing frequency as the exam approaches.",
            "Analyze your performance in mock tests thoroughly.  Identify your strengths and weaknesses, and develop a plan to address your shortcomings.",
            "Use mock tests to refine your time management skills and develop exam temperament. Simulate exam conditions as closely as possible to reduce anxiety on the actual day.",
            "Don't be discouraged by low scores in mock tests.  View them as valuable learning opportunities and use them to adjust your study strategy.",
            "Choose a test series that covers the entire syllabus and reflects the actual exam pattern and difficulty level."
          ],
          "Group Studies": [
            "Group studies can be beneficial for discussing concepts, clarifying doubts, and gaining different perspectives.  However, don't rely solely on group studies.",
            "Choose your study partners wisely.  Look for students who are serious about their studies and have a positive and collaborative attitude.",
            "Use group study sessions to discuss challenging topics, share problem-solving strategies, and brainstorm ideas.  Make sure everyone actively participates.",
            "Don't let group studies become a substitute for individual study.  You still need to dedicate significant time to independent learning and practice.",
            "Keep group study sessions focused and productive.  Set clear goals and stay on topic to maximize your time together."
          ],
          "Rote Learning": [
            "Minimize rote learning.  Focus on understanding the underlying concepts and principles.  True understanding will make problem-solving much easier and more effective.",
            "Rote learning can be helpful for memorizing formulas and definitions, but it's not a substitute for conceptual understanding.  Try to derive formulas and understand their applications.",
            "Focus on applying concepts rather than just memorizing them.  Practice solving problems to see how the concepts are used in real-world scenarios.",
            "If you find yourself relying on rote learning, take a step back and try to understand the concepts more deeply.  This will save you time and effort in the long run.",
            "When you understand the 'why' behind the concepts, memorization becomes much easier and more meaningful."
          ],
          "Phone Addiction": [
            "Manage your phone usage effectively.  Be mindful of how much time you spend on social media and other distractions, especially during study hours.",
            "Use apps and tools to track your phone usage and set limits.  Consider turning off notifications or using Do Not Disturb mode during study sessions.",
            "Establish phone-free times during the day, such as during study blocks or before bed.  This will help you stay focused and improve your sleep quality.",
            "Replace mindless phone scrolling with more productive activities, such as reading, exercising, or spending time with loved ones.",
            "Make a conscious effort to disconnect from technology and engage in real-world experiences.  This will help you reduce stress and improve your overall well-being."
          ],
          "Performance Tracking": [
            "Track your progress regularly.  Monitor your study hours, topics covered, and scores in mock tests.  This will give you a clear picture of your strengths and weaknesses.",
            "Analyze your performance data to identify areas where you need to focus your efforts.  Use this information to adjust your study plan and allocate your time effectively.",
            "Don't just focus on the numbers.  Pay attention to the qualitative aspects of your learning, such as your understanding of concepts and your problem-solving skills.",
            "Use performance tracking as a tool for self-improvement, not as a source of self-criticism.  Focus on making consistent progress and celebrating your achievements.",
            "Remember that your journey is unique.  Don't compare yourself to others; focus on your own progress and strive to reach your full potential."
          ],
          "Mental Health": [
            "Prioritize your mental and physical well-being.  A healthy mind and body are essential for effective learning and performance.",
            "Get enough sleep, eat nutritious food, and exercise regularly.  These habits will help you stay focused, energized, and resilient.",
            "Take regular breaks from studying to relax and recharge.  Engage in activities you enjoy, such as spending time with friends and family, pursuing hobbies, or simply unwinding.",
            "Practice stress-management techniques such as mindfulness, meditation, or yoga.  These can help you stay calm and focused during challenging times.",
            "Seek support when you need it.  Don't be afraid to talk to a friend, family member, counselor, or therapist if you're struggling with stress, anxiety, or other mental health concerns.",
          ]

        }
      }
    
  };
  
  export const regularContentData = {
    'Class 11th': {
      toppers: {
  
        '"Why" Notebook': [
          { "name": "Kartik Sharma", "rank": "AIR 18", "year": 2024 },
          { "name": "Nisha Verma", "rank": "AIR 46", "year": 2023 },
          { "name": "Pranav Kapoor", "rank": "AIR 132", "year": 2022 },
          { "name": "Megha Nair", "rank": "AIR 289", "year": 2021 },
          { "name": "Rajiv Iyer", "rank": "AIR 425", "year": 2020 }
        ],
        "Prime Hours Strategy": [
          { "name": "Arjun Bhatt", "rank": "AIR 27", "year": 2024 },
          { "name": "Sanya Reddy", "rank": "AIR 59", "year": 2023 },
          { "name": "Ravi Shankar", "rank": "AIR 145", "year": 2022 },
          { "name": "Neha Chauhan", "rank": "AIR 376", "year": 2021 },
          { "name": "Vikrant Malhotra", "rank": "AIR 512", "year": 2020 }
        ],
        "Active Recall Memory Hack": [
          { "name": "Ishaan Taneja", "rank": "AIR 35", "year": 2024 },
          { "name": "Divya Goswami", "rank": "AIR 92", "year": 2023 },
          { "name": "Rohit Kulkarni", "rank": "AIR 251", "year": 2022 },
          { "name": "Simran Kaur", "rank": "AIR 399", "year": 2021 },
          { "name": "Manoj Nanda", "rank": "AIR 645", "year": 2020 }
        ],
        "JEE-Backwards Strategy": [
          { "name": "Aditya Menon", "rank": "AIR 41", "year": 2024 },
          { "name": "Meera Sharma", "rank": "AIR 107", "year": 2023 },
          { "name": "Saurabh Choudhary", "rank": "AIR 289", "year": 2022 },
          { "name": "Priyanka Das", "rank": "AIR 523", "year": 2021 },
          { "name": "Arnav Patel", "rank": "AIR 789", "year": 2020 }
        ],
        "Elimination over Perfection": [
          { "name": "Harshvardhan Gupta", "rank": "AIR 12", "year": 2024 },
          { "name": "Tanvi Rao", "rank": "AIR 85", "year": 2023 },
          { "name": "Siddharth Pillai", "rank": "AIR 312", "year": 2022 },
          { "name": "Ankita Joshi", "rank": "AIR 472", "year": 2021 },
          { "name": "Nitin Bansal", "rank": "AIR 921", "year": 2020 }
        ],
        "Solve 1 Killer Problem Daily": [
          { "name": "Raghav Yadav", "rank": "AIR 26", "year": 2024 },
          { "name": "Swati Agrawal", "rank": "AIR 65", "year": 2023 },
          { "name": "Karan Saxena", "rank": "AIR 278", "year": 2022 },
          { "name": "Namrata Bhushan", "rank": "AIR 544", "year": 2021 },
          { "name": "Yash Thakur", "rank": "AIR 999", "year": 2020 }
        ],
        "Post-Mortem Analysis of Every Test": [
          { "name": "Parth Deshmukh", "rank": "AIR 37", "year": 2024 },
          { "name": "Aditi Nair", "rank": "AIR 89", "year": 2023 },
          { "name": "Himanshu Shekhawat", "rank": "AIR 321", "year": 2022 },
          { "name": "Richa Venkatesh", "rank": "AIR 569", "year": 2021 },
          { "name": "Suraj Tiwari", "rank": "AIR 1112", "year": 2020 }
        ],
        "NCERT Focus": [
          { "name": "Nirav Shah", "rank": "AIR 21", "year": 2024 },
          { "name": "Rashi Chatterjee", "rank": "AIR 75", "year": 2023 },
          { "name": "Vaibhav Pandey", "rank": "AIR 359", "year": 2022 },
          { "name": "Sushmita Rane", "rank": "AIR 651", "year": 2021 },
          { "name": "Devendra Mohan", "rank": "AIR 1193", "year": 2020 }
        ],
        "Unfair Advantage": [
          { "name": "Anirudh Sinha", "rank": "AIR 14", "year": 2024 },
          { "name": "Pooja Chawla", "rank": "AIR 99", "year": 2023 },
          { "name": "Shashank Iyer", "rank": "AIR 415", "year": 2022 },
          { "name": "Bhavana Ghosh", "rank": "AIR 783", "year": 2021 },
          { "name": "Ujjwal Trivedi", "rank": "AIR 1289", "year": 2020 }
        ],
        "Test Practice": [
          { "name": "Rahul Bhansali", "rank": "AIR 30", "year": 2024 },
          { "name": "Sneha Jindal", "rank": "AIR 88", "year": 2023 },
          { "name": "Vedant Mukherjee", "rank": "AIR 342", "year": 2022 },
          { "name": "Sanya Dixit", "rank": "AIR 672", "year": 2021 },
          { "name": "Arvind Kumar", "rank": "AIR 1498", "year": 2020 }
        ]
      },
      
        
      
      content: {
        '"Why" Notebook': contentData['"Why" Notebook'],
        'Prime Hours Strategy': contentData['Prime Hours Strategy'],
        'Active Recall Memory Hack': contentData['Active Recall Memory Hack'],
        'JEE-Backwards Strategy': contentData['JEE-Backwards Strategy'],
        'Elimination over Perfection': contentData['Elimination over Perfection'],
        'Solve 1 Killer Problem Daily': contentData['Solve 1 Killer Problem Daily'],
        'Post-Mortem Analysis of Every Test': contentData['Post-Mortem Analysis of Every Test'],
        'NCERT Focus': contentData['NCERT Focus'],
        'Unfair Advantage': contentData['Unfair Advantage'],
        'Test Practice': contentData['Test Practice']
      }
    },
    'Class 12th': {
      toppers: {
        "The 60-40 Rule": [
          { "name": "Ishaan Reddy", "rank": "AIR 8", "year": 2024 },
          { "name": "Riya Sharma", "rank": "AIR 13", "year": 2023 },
          { "name": "Arnav Gupta", "rank": "AIR 19", "year": 2022 },
          { "name": "Zara Patel", "rank": "AIR 25", "year": 2021 },
          { "name": "Kabir Singh", "rank": "AIR 31", "year": 2020 }
        ],
        "Mock Test Adaptation": [
          { "name": "Rohit Mehta", "rank": "AIR 58", "year": 2024 },
          { "name": "Sanya Kapoor", "rank": "AIR 73", "year": 2023 },
          { "name": "Vikram Bansal", "rank": "AIR 205", "year": 2022 },
          { "name": "Niharika Iyer", "rank": "AIR 315", "year": 2021 },
          { "name": "Akash Rathi", "rank": "AIR 412", "year": 2020 }
        ],
        "Weekly Reviews": [
          { "name": "Aditya Chauhan", "rank": "AIR 41", "year": 2024 },
          { "name": "Megha Tiwari", "rank": "AIR 89", "year": 2023 },
          { "name": "Saurabh Desai", "rank": "AIR 172", "year": 2022 },
          { "name": "Priya Verma", "rank": "AIR 327", "year": 2021 },
          { "name": "Varun Malhotra", "rank": "AIR 481", "year": 2020 }
        ],
        "Final Sprint": [
          { "name": "Rajiv Nanda", "rank": "AIR 16", "year": 2024 },
          { "name": "Tanisha Rao", "rank": "AIR 78", "year": 2023 },
          { "name": "Yash Bhatt", "rank": "AIR 254", "year": 2022 },
          { "name": "Sushmita Das", "rank": "AIR 421", "year": 2021 },
          { "name": "Neeraj Saxena", "rank": "AIR 529", "year": 2020 }
        ],
        "Error Logbook": [
          { "name": "Raghav Sharma", "rank": "AIR 22", "year": 2024 },
          { "name": "Sneha Chatterjee", "rank": "AIR 95", "year": 2023 },
          { "name": "Kunal Pandey", "rank": "AIR 278", "year": 2022 },
          { "name": "Nidhi Nair", "rank": "AIR 498", "year": 2021 },
          { "name": "Amit Trivedi", "rank": "AIR 639", "year": 2020 }
        ],
        "Conceptual Cross-Linking": [
          { "name": "Ishita Menon", "rank": "AIR 30", "year": 2024 },
          { "name": "Anirudh Sinha", "rank": "AIR 112", "year": 2023 },
          { "name": "Vaibhav Taneja", "rank": "AIR 315", "year": 2022 },
          { "name": "Simran Kaur", "rank": "AIR 601", "year": 2021 },
          { "name": "Nitin Kumar", "rank": "AIR 775", "year": 2020 }
        ],
        "Time-Decay Learning": [
          { "name": "Himanshu Iyer", "rank": "AIR 26", "year": 2024 },
          { "name": "Rachna Agrawal", "rank": "AIR 103", "year": 2023 },
          { "name": "Kartik Chopra", "rank": "AIR 399", "year": 2022 },
          { "name": "Priyanka Yadav", "rank": "AIR 729", "year": 2021 },
          { "name": "Devansh Bhardwaj", "rank": "AIR 882", "year": 2020 }
        ],
        "The Forgetting Curve": [
          { "name": "Arjun Nair", "rank": "AIR 34", "year": 2024 },
          { "name": "Meera Joshi", "rank": "AIR 118", "year": 2023 },
          { "name": "Rohan Saxena", "rank": "AIR 415", "year": 2022 },
          { "name": "Ankita Verma", "rank": "AIR 789", "year": 2021 },
          { "name": "Neel Mehta", "rank": "AIR 991", "year": 2020 }
        ],
        "Master Dimensional Analysis": [
          { "name": "Parth Mahajan", "rank": "AIR 20", "year": 2024 },
          { "name": "Swati Dixit", "rank": "AIR 85", "year": 2023 },
          { "name": "Kunal Shekhawat", "rank": "AIR 312", "year": 2022 },
          { "name": "Richa Ghosh", "rank": "AIR 563", "year": 2021 },
          { "name": "Amit Sharma", "rank": "AIR 799", "year": 2020 }
        ],
        "Extreme Case Thinking": [
          { "name": "Rahul Chopra", "rank": "AIR 39", "year": 2024 },
          { "name": "Sanya Bansal", "rank": "AIR 129", "year": 2023 },
          { "name": "Vedant Rao", "rank": "AIR 487", "year": 2022 },
          { "name": "Tanvi Jindal", "rank": "AIR 879", "year": 2021 },
          { "name": "Nirav Malhotra", "rank": "AIR 999", "year": 2020 }
        ],
      },
      content: {
      'The 60-40 Rule': contentData['The 60-40 Rule'],
      'Mock Test Adaptation': contentData['Mock Test Adaptation'],
      'Weekly Reviews': contentData['Weekly Reviews'],
      'Final Sprint': contentData['Final Sprint'],
      'Error Logbook':contentData['Error Logbook'],
      'Conceptual Cross-Linking': contentData['Conceptual Cross-Linking'],
      'Time-Decay Learning': contentData['Time-Decay Learning'],
      'The Forgetting Curve': contentData['The Forgetting Curve'],
      'Master Dimensional Analysis': contentData['Master Dimensional Analysis'],
      'Extreme Case Thinking': contentData['Extreme Case Thinking']
    }
    },
    'Custom Strategy': {
  "textHeaders": {  
  "Personalized Plan": [  
    "Tailored Study Framework",  
    "Flexible Learning Blueprint",  
    "Strategic Prioritization Guide",  
    "Balanced Study Approach",  
    "Dynamic Plan Optimization"  
  ],  

  "Weak Areas": [  
    "Performance Gap Analysis",  
    "Targeted Reinforcement Strategy",  
    "Effective Doubt Resolution",  
    "Precision Practice Techniques",  
    "Progress Tracking Mechanism"  
  ],  

  "Strong Points": [  
    "Score Optimization Strategy",  
    "Retention Maintenance Plan",  
    "Confidence Boosting Approach",  
    "Peer Learning Reinforcement",  
    "Advanced Challenge Engagement"  
  ],  

  "Study Pattern": [  
    "Optimized Study Routine",  
    "Focus and Retention Enhancement",  
    "Multi-Sensory Learning Approach",  
    "Subject Alternation Strategy",  
    "Self-Analysis for Study Improvement"  
  ],  

  "Test Analysis": [  
    "Comprehensive Error Review",  
    "Mistake Categorization System",  
    "Strategic Error Correction",  
    "Performance Consistency Tracker",  
    "Data-Driven Study Adjustment"  
  ],  

  "Improvement Areas": [  
    "Focused Learning Priority List",  
    "Reinforcement and Retention Strategy",  
    "Diverse Learning Methods",  
    "Motivational Progress Monitoring",  
    "Adaptive Study Techniques"  
  ],  

  "Goal Setting": [  
    "Clear and Achievable Target Setting",  
    "Milestone-Based Progress Mapping",  
    "SMART Study Goal Framework",  
    "Flexible Goal Adjustment",  
    "Motivational Achievement Recognition"  
  ],  

  "Progress Tracking": [  
    "Study Journal and Tracker System",  
    "Visual Performance Analysis",  
    "Comparative Progress Assessment",  
    "Self-Assessment and Retention Check",  
    "Accountability and Feedback Mechanism"  
  ],  

  "Adaptation": [  
    "Flexible Study Methodology",  
    "Innovative Learning Experimentation",  
    "Syllabus and Pattern Adaptation",  
    "Resilience and Challenge Management",  
    "Growth Mindset Development"  
  ],  

  "Success Metrics": [  
    "Effort-Based Success Definition",  
    "Consistency and Concept Mastery",  
    "Problem-Solving Efficiency Metrics",  
    "Mock Test and Exam Readiness",  
    "Motivational Progress Recognition"  
  ]  




      
      
        // Add headers for other nav items
      },
      content: {
        'Personalized Plan': contentData['Personalized Plan'],
        'Weak Areas': contentData['Weak Areas'],
        'Strong Points': contentData['Strong Points'],
        'Study Pattern': contentData['Study Pattern'],
        'Test Analysis': contentData['Test Analysis'],
        'Improvement Areas':contentData['Improvement Areas'],
        'Goal Setting': contentData['Goal Setting'],
        'Progress Tracking': contentData['Progress Tracking'],
        'Adaptation': contentData['Adaptation'],
        'Success Metrics': contentData['Success Metrics']
        
        // Add content for other nav items
      }
    },
    'Conceptual Clarity & Problem Solving': {
      textHeaders:{
        "Strong Conceptual Foundation": [
          "Build a Clear Understanding Before Problem-Solving",
          "Master NCERT for a Strong Base",
          "Understand the Logic Behind Formulas",
          "Enhance Learning Through Visualization",
          "Recognize the Assumptions Behind Formulas"
        ],
        "Strengthen Mathematical Tools": [
          "Develop Strong Math Skills for JEE",
          "Master Vectors for Physics Applications",
          "Speed Up Calculations with Differentiation",
          "Use Integration to Solve Complex Problems",
          "Improve Accuracy with Approximations & Unit Checks"
        ],
        "Solve Conceptual Questions": [
          "Focus on Conceptual Clarity Before Numericals",
          "Enhance Understanding with HC Verma’s Questions",
          "Strengthen Fundamentals with NCERT Exemplar",
          "Use Visual Explanations to Simplify Concepts",
          "Build Intuition Before Jumping into Problem-Solving"
        ],
        "Apply Concepts to Numericals": [
          "Apply Theory to Numerical Problem-Solving",
          "Start with Basic Problems for Concept Reinforcement",
          "Progress to Moderate-Level Questions for Mastery",
          "Challenge Yourself with Advanced Problems",
          "Practice PYQs to Get Exam-Ready"
        ],
        "Regular Revision & Error Analysis": [
          "Revise Consistently to Strengthen Memory",
          "Create a Mistake Log for Common Errors",
          "Reattempt Tough Problems to Improve Retention",
          "Clarify Doubts Through Discussions",
          "Analyze and Learn from Mistakes for Better Accuracy"
        ],
        "Timed Practice & Mock Tests": [
          "Simulate Exam Conditions with Mock Tests",
          "Start with Topic-Wise Tests for Step-by-Step Mastery",
          "Prioritize Accuracy Before Speed",
          "Identify Weak Areas Through Test Analysis",
          "Improve Exam Performance with Regular Practice"
        ],
        "Think in Reverse – Work Backwards to Solve Problems": [
          "Use Reverse Engineering for MCQs",
          "Analyze Final Conditions First in Problem-Solving",
          "Break Down Complex Formulas to Understand Their Application",
          "Work Backwards in Proof-Based Questions",
          "Apply Reverse Thinking to Save Time in JEE"
        ],
        "Visual Learning": [
          "Use Diagrams, Charts, and Infographics for Clarity",
          "Watch Animated Explanations for Better Understanding",
          "Create Flashcards with Visual Cues",
          "Organize Notes with Color Coding",
          "Connect Ideas Using Concept Maps and Flowcharts"
        ],
        "Topic Connection": [
          "Understand How Different Topics Interrelate",
          "Use Mind Maps to See Conceptual Links",
          "Identify Prerequisite Knowledge for Advanced Topics",
          "Solve Multi-Concept Problems for Better Integration",
          "Revisit Related Topics to Strengthen Retention"
        ],
        "Real-life Examples": [
          "Relate Concepts to Everyday Situations",
          "Learn Through Case Studies and Practical Applications",
          "Observe Science and Math in Technology and Nature",
          "Explore Historical and Industrial Uses of Theories",
          "Engage in Real-World Discussions for Deeper Insights"
        ]
      },
      content: {
      
        'Visual Learning': contentData['Visual Learning'],
        'Strong Conceptual Foundation': contentData['Strong Conceptual Foundation'],
        'Strengthen Mathematical Tools': contentData['Strengthen Mathematical Tools'],
        'Solve Conceptual Questions': contentData['Solve Conceptual Questions'],
        'Apply Concepts to Numericals': contentData['Apply Concepts to Numericals'],
       'Regular Revision & Error Analysis':contentData['Regular Revision & Error Analysis'],
        'Timed Practice & Mock Tests': contentData['Timed Practice & Mock Tests'],
        'Topic Connection': contentData['Topic Connection'],
        'Real-life Examples': contentData['Real-life Examples']
        
        // Add content for other nav items
      }
     
    }

  };