import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Unlock = () => {
  const [selectedNav, setSelectedNav] = useState('Accelerate your Reading');
  const [currentPage, setCurrentPage] = useState(0);
  const [descriptionIndex, setDescriptionIndex] = useState({}); // Track description index per card

  const navigationItems = [
    [
      'Accelerate your Reading',
      'Your brain decoded',
      'Unlock Your Potential',
      
    ],
    [
      'Memory Hacking Secrets',
      'Mind Training',
      'Focus Mastery',
      //'Learning Strategies',
      //'Brain Performance',
      //'Cognitive Enhancement',
    ],
  ];

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? 1 : 0));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 1 ? 0 : 1));
  };

  const handleNextDescription = (cardIndex) => {
    setDescriptionIndex((prev) => ({
      ...prev,
      [cardIndex]: Math.min((prev[cardIndex] || 0) + 1, 2), // Max index is 2 (3 slides)
    }));
  };

  const handlePrevDescription = (cardIndex) => {
    setDescriptionIndex((prev) => ({
      ...prev,
      [cardIndex]: Math.max((prev[cardIndex] || 0) - 1, 0), // Min index is 0
    }));
  };

  const cardContent = {
    'Accelerate your Reading': {
      blackCard: {
        hashtag: '#Want to read faster and remember more?',
        description: 'Imagine breezing through pages while absorbing every detail effortlessly. Learn science-backed techniques to read faster, retain more, and process information like never before.',
      },
      whiteCards: [
        {
          title: 'How can you triple your reading speed?',
          image: '/3x.png',
          tag: 'Techniques',
          descriptions: [
            'Unlock advanced techniques to boost your words per minute while keeping full comprehension. No more slow reading—it\'s time to level up! I went from struggling through 20 pages an hour to effortlessly reading 100+ pages with better retention using these exact methods.',
            'Speed reading relies on chunking text and minimizing subvocalization for efficiency. Practice widens your visual span, letting you process more at once. This approach tripled my reading pace in just a month.',
            'Mastering pace doesn’t sacrifice understanding—it enhances it with focus. Techniques like meta-guiding transformed my sluggish habits. Now I devour books and reports faster than ever before.',
          ],
        },
        {
          title: 'Why do you forget what you just read?',
          image: '/FORGETTING.png',
          tag: 'Skills',
          descriptions: [
            'Master strategies to break down complex information and absorb key insights. Never struggle with retention again. I used to re-read chapters multiple times and still forget the content. After learning these comprehension techniques, I can recall important details weeks later.',
            'Forgetting stems from weak encoding—active recall fixes that fast. Summarizing as you go locks in meaning over time. This method turned my spotty memory into a steel trap for facts.',
            'Retention improves with structured processing, not just repetition. Linking ideas to prior knowledge keeps them accessible. I now retain dense material effortlessly with this system.',
          ],
        },
        {
          title: 'Are your eyes slowing down your reading?',
          image: '/slowing.png',
          tag: 'Practice',
          descriptions: [
            'Reduce unnecessary pauses and improve focus. Optimize your eye movements for peak reading efficiency. I discovered my eyes were making 5 stops per line. After two weeks of eye training, I doubled my reading speed without losing comprehension.',
            'Eye saccades—those tiny jumps—slow you down when untrained. Smoothing them out boosts flow and cuts fatigue. My reading stamina soared once I mastered this trick.',
            'Efficient eye control is the secret to rapid reading with clarity. Practice eliminates regression and widens your focus range. This tweak halved my reading time on technical texts.',
          ],
        },
      ],
    },
    'Your brain decoded': {
      blackCard: {
        hashtag: '#What if you could unlock the full power of your brain?',
        description: 'Unleash the untapped potential within yourself by exploring your strengths and overcoming self-limiting beliefs. Embrace personal growth and unlock abilities you never knew existed, transforming challenges into opportunities.',
      },
      whiteCards: [
        {
          title: 'How do neural pathways shape your learning?',
          image: '/Neural_pathways.png',
          tag: 'Neuroscience',
          descriptions: [
            'Your brain is constantly rewiring itself—every thought, every practice, every breakthrough strengthens your neural connections. Unlock the science behind how you learn, retain, and master new skills faster than ever. I struggled with learning new concepts until I discovered how to consciously strengthen my neural pathways through deliberate practice. Now I can acquire new skills in half the time.',
            'New neural pathways form with every repetition, enhancing your ability to process information quickly. This plasticity is key to accelerating your learning curve over time. Consistent effort turns weak connections into strong, reliable networks for skill mastery.',
            'Understanding neural adaptation can transform how you approach challenges. By leveraging this, I turned my slow learning pace into a superpower, mastering complex topics in weeks instead of months.',
          ],
        },
        {
          title: 'Can your brain really change at any age?',
          image: '/brain_change.png',
          tag: 'Research',
          descriptions: [
            'Your brain is built to adapt! Every experience, challenge, and skill you learn reshapes its structure. Discover how neuroplasticity allows you to rewire your mind, boost intelligence, and unlock endless learning potential. At 42, I thought I was too old to learn programming, but within 6 months, I was building my own apps by leveraging my brain\'s natural plasticity.',
            'Age is no barrier—neuroplasticity works throughout life, enabling growth with the right stimuli. Research shows consistent practice can rebuild cognitive pathways even in older adults. I used this to pivot careers successfully late in life.',
            'The brain’s ability to change is driven by effort and environment, not just youth. Studies prove you can enhance memory and reasoning at any stage. This knowledge helped me overcome doubts and excel in new fields.',
          ],
        },
        {
          title: 'What powers your cognitive abilities?',
          image: '/powers.png',
          tag: 'Science',
          descriptions: [
            'Your brain is a powerhouse of learning, memory, and problem-solving. Dive into the core cognitive functions that shape your thinking, sharpen your focus, and fuel your intelligence. I used to feel mentally foggy until I learned how to optimize my brain\'s executive functions. Now I can think clearly even after 8-hour work sessions.',
            'Cognitive strength comes from coordinated neural activity across key brain regions. Enhancing these functions boosts clarity and decision-making under pressure. This shift turned my workday chaos into calm productivity.',
            'Science reveals how attention, memory, and reasoning interplay to drive performance. Targeting these areas improved my mental stamina dramatically. I now tackle complex tasks with ease, thanks to this understanding.',
          ],
        },
      ],
    },
    // Add similar updates for other sections (omitted for brevity, follow the same pattern)
    'Unlock Your Potential': {
      blackCard: {
        hashtag: "#You're capable of more than you think!",
        description: 'Discover and harness your hidden capabilities through proven psychological techniques and practical exercises designed to expand your comfort zone.'
        
      },
      whiteCards: [
        {
          title: 'How do you access your peak mental state?',
          image: '/peak.png',
          tag: 'Achievement',
          descriptions: [
            'Access your peak mental state consistently through proven psychological techniques and mindset training. I went from being inconsistent in my performance to reliably entering my flow state within minutes. This allowed me to complete a major project in just two weeks that would have normally taken two months.',
          'Unlock heightened focus and creativity by mastering mindfulness and visualization practices. Experience a surge in productivity and clarity, allowing you to tackle complex challenges with ease.',
          'Cultivate a resilient mindset and harness the power of positive self-talk to consistently achieve optimal mental performance. Discover the ability to perform under pressure and achieve your goals with unwavering confidence.',
          ],
        },
        {
          title: 'What blocks your growth mindset?',
          image: '/Growth_mindset.png',
          tag: 'Development',
          descriptions: [

"The crippling fear of failure, coupled with the dread of others' judgment, constructs a formidable barrier, paralyzing your progress and preventing you from embracing challenges as opportunities for invaluable learning and growth.", "Entrenched, fixed beliefs about your inherent abilities create a self-imposed ceiling, drastically limiting your perceived potential and stifling the intrinsic desire to explore new horizons and evolve beyond your comfort zone.", "Persistent negative self-talk, combined with an unwavering focus on perceived limitations, reinforces a stagnant and restrictive mindset, ultimately hindering your capacity to adapt, learn, and evolve in the face of new experiences and challenges."

          ],
        },
        {
          title: 'Why do your goals keep slipping away?',
          image: '/slip_away.png',
          tag: 'Success',
          descriptions: [
"Lack of clear, specific goals and a concrete action plan leaves you adrift, making it easy to lose focus and momentum, causing your aspirations to fade into the background.", "Procrastination and a failure to prioritize tasks lead to a constant state of feeling overwhelmed, preventing you from taking consistent steps towards your objectives, and ultimately, allowing them to slip away.", "Underestimating the necessary time and effort, combined with a lack of accountability, creates a gap between your intentions and actions, resulting in a recurring pattern of unfulfilled goals and a sense of persistent disappointment."          ],
        },
      ],
    },
    'Memory Hacking Secrets': {
      blackCard: {
        hashtag: '#Remember everything easily',
        description: 'Learn powerful memory techniques used by world memory champions to enhance your recall and information retention abilities.',
      },
      whiteCards: [
        {
          title: 'How can you store unlimited information?',
          image: '/unlimited_info.png',
          tag: 'Technique',
          descriptions: [
            "By strategically implementing spaced repetition and actively engaging in recall exercises, you can solidify memories, converting transient information into lasting knowledge, thereby significantly increasing your capacity for information storage.", "Harnessing the power of digital tools, such as organized note-taking applications and comprehensive knowledge management systems, allows for efficient categorization and retrieval, creating a personal, scalable database for unlimited information.", "Adopting a consistent approach to learning and actively linking new concepts to your existing understanding strengthens neural pathways, facilitating the absorption and retention of a substantial and ever-growing body of knowledge."
          ],
        },
        {
          title: 'Why cant you remember what you learned?',
          image: '/remember.png',
          tag: 'Strategy',
          descriptions:[ 
            "Passive learning, like simply reading or listening, fails to engage your brain actively, preventing information from transferring from short-term to long-term memory, leading to rapid forgetting.", "Lack of consistent review and reinforcement weakens neural connections, causing learned material to fade over time, especially without practical application or regular recall.", "Insufficient context and connection to existing knowledge makes new information feel isolated, hindering its integration into your memory and making it difficult to retrieve later."
          ],
        },
        {
          title: 'Can anyone develop a photographic memory?',
          image: '/mem2.png',
          tag: 'Practice',
descriptions:[
  "While true photographic memory is rare, anyone can significantly improve their memory through dedicated practice and the use of effective mnemonic techniques, enhancing their ability to recall visual details.", "Consistent mental exercises, such as visualization and association, can strengthen memory pathways, allowing individuals to develop a heightened capacity for remembering visual information over time.", "Adopting strategies like chunking and spaced repetition, combined with focused attention, can train the brain to encode and retrieve visual memories with greater accuracy and efficiency."
],        },
      ],
    },
    'Mind Training': {
      blackCard: {
        hashtag: '#Train your brain daily',
        description: "Ready to unlock your brain's true power? Strengthen your mental abilities with tailored exercises that sharpen your focus, boost cognitive function, and put you in control of your mind. ",
      },
      whiteCards: [
        {
          title: 'Can you think faster than everyone else?',
          image: '/think_fast.png',
          tag: 'Training',
          descriptions:[
"While innate cognitive speed varies, anyone can enhance their thinking speed through focused practice on mental agility exercises and the development of efficient problem-solving strategies.", "By training your brain to recognize patterns and make rapid associations, you can improve your processing speed and decision-making abilities, allowing for quicker mental responses.", "Cultivating mental clarity and reducing distractions allows for more efficient information processing, enabling you to think and react more rapidly in various situations."
              ],
          },
        {
          title: 'Why do distractions control your day?',
          image: '/Distraction.png',
          tag: 'Focus',
          descriptions: [
"Lack of clear priorities and a structured schedule leaves you vulnerable to interruptions, allowing trivial tasks and notifications to dictate your focus and consume your time.", "The constant availability of technology and social media creates a cycle of immediate gratification, making it difficult to resist the allure of distractions and maintain sustained concentration.", "Without established boundaries and effective time management techniques, you become reactive rather than proactive, allowing external stimuli to hijack your attention and derail your intended tasks."
          ],
        },
        {
          title: 'Are you solving problems the hard way?',
          image: '/problem_solving.png',
          tag: 'Skills',
          descriptions: [
            "Relying on brute force or repetitive trial and error, without analyzing root causes or seeking alternative approaches, often leads to inefficient solutions and unnecessary frustration.", "Overcomplicating problems with excessive detail or rigid thinking patterns can obscure simpler, more effective solutions, hindering your ability to find practical and timely resolutions.", "Failing to leverage available resources, collaborate with others, or adopt proven problem-solving frameworks can result in prolonged struggles and suboptimal outcomes."
          ],
        },
      ],
    },
    'Focus Mastery': {
      blackCard: {
        hashtag: '#Deep Focus',
        description: 'Master the art of maintaining unwavering concentration and eliminating distractions to achieve peak productivity.',
      },
      whiteCards: [
        {
          title: 'How do you enter the flow state at will?',
          image: '/DEEP_FOCUS.png',
          tag: 'Performance',
          descriptions: [
            "By consistently practicing focused attention and cultivating a deep understanding of your skill level in relation to the challenge, you can create the optimal conditions for entering a flow state.", "Developing clear, specific goals and minimizing distractions allows you to immerse yourself fully in the task at hand, facilitating the seamless transition into a state of heightened concentration and effortless performance.", "Utilizing techniques like pre-performance routines and mindfulness exercises can prime your mind and body for flow, enabling you to access this optimal state of consciousness more reliably."
          ],
        },
        {
          title: "What's stealing your attention?",
          image: '/Distractions.png',
          tag: 'Management',
          descriptions: [
            "Uncontrolled notifications and constant digital interruptions create a fragmented focus, diverting your attention from meaningful tasks and hindering deep concentration.", "The pull of social media and endless scrolling exploits our natural desire for novelty, leading to habitual distraction and a diminished ability to prioritize important activities.", "Unresolved mental clutter, such as lingering worries or unfinished tasks, creates a constant background noise, stealing your attention and preventing you from fully engaging in the present moment."
          ],
        },
        {
          title: 'Can you strengthen your attention span?',
          image: '/attention_span.png',
          tag: 'Practice',
          descriptions:[ 
            "Consistent practice of mindfulness and meditation techniques trains your brain to focus on the present moment, reducing susceptibility to distractions and improving sustained attention.", "Engaging in activities that require focused concentration, such as puzzles, reading, or learning new skills, gradually builds your brain's capacity to maintain attention over longer periods.", "By minimizing distractions, establishing clear priorities, and implementing time management strategies, you can create an environment conducive to focused work and enhance your ability to concentrate."
          ],
        },
      ],
    },
    'Learning Strategies': {
      blackCard: {
        hashtag: '#Smart Learning',
        description: 'Optimize your learning process with evidence-based strategies that maximize retention and understanding.',
      },
      whiteCards: [
        {
          title: 'Why is testing better than re-reading?',
          image: '/brainroom.jpeg',
          tag: 'Technique',
          descriptions: [
"Active recall through testing forces your brain to retrieve information, strengthening neural connections and leading to deeper, more lasting understanding compared to passive re-reading.", "Testing provides immediate feedback on knowledge gaps, allowing you to focus on areas needing improvement, while re-reading can create a false sense of familiarity without true comprehension.", "Regular testing promotes spaced repetition, a proven technique for long-term memory retention, whereas re-reading often leads to cramming and short-term memorization." 
              ], 
         },
        {
          title: 'How can you remember forever?',
          image: '/brainroom.jpeg',
          tag: 'Method',
          descriptions: [
"By consistently employing spaced repetition, actively recalling information, and connecting new concepts to existing knowledge, you can solidify memories and significantly enhance long-term retention.", "Utilizing mnemonic devices, visualization techniques, and storytelling to encode information makes it more memorable and easier to retrieve over extended periods.", "Creating meaningful associations, engaging in regular review, and applying learned information in real-world scenarios strengthens neural pathways, contributing to lasting memory formation."
              ], 
           },
        {
          title: 'Can visual maps improve your understanding?',
          image: '/brainroom.jpeg',
          tag: 'Organization',
          descriptions:[
"Visual maps, such as mind maps or concept maps, provide a clear and organized representation of complex information, facilitating a deeper understanding of relationships between concepts.", "By visually connecting ideas and creating spatial representations of knowledge, visual maps enhance memory retention and improve the ability to recall and apply information.", "Visual maps encourage active engagement with the material, allowing you to synthesize information, identify patterns, and gain a holistic perspective on the subject matter."
              ],  
          },
      ],
    },
    'Brain Performance': {
      blackCard: {
        hashtag: '#Optimal Performance',
        description: 'Optimize your cognitive performance through science-based approaches to brain health and function.',
      },
      whiteCards: [
        {
          title: 'Is your lifestyle damaging your brain?',
          image: '/brainroom.jpeg',
          tag: 'Wellness',
          descriptions:[
"Chronic stress, lack of sleep, and a sedentary lifestyle can impair cognitive function, negatively impacting memory, focus, and overall brain health.", "Poor dietary choices, including excessive consumption of processed foods and sugar, can contribute to inflammation and oxidative stress, potentially damaging brain cells and hindering cognitive performance.", "Substance abuse, excessive alcohol consumption, and chronic exposure to environmental toxins can accelerate cognitive decline and increase the risk of neurological disorders."
              ],  
          },
        {
          title: 'Why does your mental energy crash?',
          image: '/brainroom.jpeg',
          tag: 'Stamina',
          descriptions:[
"Prolonged periods of intense focus without adequate breaks can lead to mental fatigue, depleting cognitive resources and resulting in a sudden drop in energy levels.", "Unmanaged stress and emotional exhaustion can drain mental reserves, making it difficult to maintain concentration and leading to a feeling of mental burnout.", "Poor sleep, inadequate hydration, and nutritional deficiencies can impair brain function, causing fluctuations in mental energy and contributing to sudden crashes."
              ],
          },
        {
          title: 'How fast can your brain recover?',
          image: '/brainroom.jpeg',
          tag: 'Restoration',
          descriptions:[
"The brain's recovery speed varies based on the severity of the stressor or injury, with minor mental fatigue often resolving within hours through rest and relaxation.", "Consistent practice of stress-reduction techniques, such as mindfulness and meditation, can improve the brain's resilience and accelerate recovery from mental strain.", "Adequate sleep, a healthy diet, and regular exercise contribute to optimal brain health, enhancing its ability to recover from cognitive exertion and maintain mental clarity."
              ], 
          },
      ],
    },
    'Cognitive Enhancement': {
      blackCard: {
        hashtag: '#Brain Optimization',
        description: 'Enhance your cognitive capabilities through advanced techniques and evidence-based practices.',
      },
      whiteCards: [
        {
          title: 'Can you train specific brain functions?',
          image: '/brainroom.jpeg',
          tag: 'Development',
          descriptions:[
"Targeted brain training exercises, such as those focusing on working memory or attention control, can strengthen specific cognitive functions through repeated practice and neural plasticity.", "Neurofeedback techniques, which provide real-time feedback on brain activity, allow individuals to learn to regulate specific brainwave patterns, improving targeted cognitive skills.", "Consistent engagement in activities that challenge specific brain functions, like learning a musical instrument or solving complex puzzles, can lead to measurable improvements in those areas over time."
              ],
          },
        {
          title: 'What mental models are you missing?',
          image: '/brainroom.jpeg',
          tag: 'Frameworks',
          descriptions:[
"Failing to utilize frameworks like 'first principles thinking' or 'second-order consequences' can limit your ability to analyze complex problems and anticipate potential outcomes.", "Neglecting to incorporate mental models such as 'inversion' or 'Occam's razor' can hinder your problem-solving efficiency and lead to overly complicated or inaccurate conclusions.", "Overlooking models like 'the circle of competence' or 'the map is not the territory' can result in poor decision-making and a lack of self-awareness regarding your limitations."
              ],
          },
        {
          title: 'How adaptable is your thinking?',
          image: '/brainroom.jpeg',
          tag: 'Adaptability',
          descriptions: [
"A fixed mindset and rigid thought patterns limit your ability to adapt to new information and changing circumstances, hindering your capacity for flexible thinking.", "Actively seeking diverse perspectives, challenging assumptions, and embracing intellectual curiosity fosters cognitive flexibility and enhances your ability to adapt your thinking.", "Practicing problem-solving with varied approaches, engaging in creative thinking exercises, and exposing yourself to novel experiences strengthens your brain's adaptability."
              ],
        },
      ],
    },  
  };

  return (
    <div 
      className="relative w-full py-4 sm:py-6 md:py-12 overflow-hidden" 
      style={{
        backgroundImage: "url('/section2@3x.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgb(249, 250, 251)',
      }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 font-sf-pro-bold">
        {/* Header Section */}
        <div className="flex items-center gap-2 mb-2">
          <div className="relative top-[10px]">
            <img
              alt="starsvg133"
              src="/starsvg133-iai6.svg"
              className="w-3 h-3 md:w-4 md:h-4"
            />
          </div>
          <span className="relative uppercase top-[10px] right-[6px] font-sf-pro-bold text-darkgray-100 text-xs sm:text-xs md:text-sm">
            FROM STRUGGLER TO TOPPER
          </span>
        </div>

        {/* Title Section */}
        <div className="mb-4 sm:mb-6 relative">
          <h1 className="text-4xl sm:text-3xl md:text-4xl leading-tight sm:leading-[39px] font-sf-pro-bold text-black">
            Discover the{" "}
            <span className="relative inline-block">
              Hidden Powers
            </span>{" "}
            Within You
          </h1>
        </div>

        {/* Navigation Bar */}
        <div className="mt-4 sm:mt-6 md:mt-8 w-full rounded-xl bg-black p-2 sm:p-4">
          <div className="relative flex items-center">
            <div className="flex-1 flex sm:hidden justify-start space-x-3 text-white font-inter overflow-x-auto scrollbar-hide">
              {navigationItems[currentPage]?.map((item) => (
                <div
                  key={item}
                  onClick={() => setSelectedNav(item)}
                  className={`text-xs whitespace-nowrap cursor-pointer transition-colors duration-300 py-1 ${
                    item === "Your Brain Decoded" || selectedNav === item
                      ? 'bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent'
                      : 'text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:via-yellow-300 hover:to-orange-400 hover:bg-clip-text hover:text-transparent'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="hidden sm:flex relative w-full">
              <button
                onClick={handlePrevPage}
                className={`absolute left-0 rounded-full p-2 -top-2 text-white hover:bg-gray-800 ${
                  currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={currentPage === 0}
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>

              <div className="flex-1 flex justify-center space-x-4 md:space-x-8 text-white font-inter overflow-x-auto scrollbar-hide px-10 md:px-12">
                {navigationItems[currentPage]?.map((item) => (
                  <div
                    key={item}
                    onClick={() => setSelectedNav(item)}
                    className={`text-sm whitespace-nowrap cursor-pointer transition-colors duration-300 py-1 ${
                      selectedNav === item
                        ? 'bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent'
                        : 'text-white hover:bg-gradient-to-r hover:from-cyan-400 hover:via-yellow-300 hover:to-orange-400 hover:bg-clip-text hover:text-transparent'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              <button
                onClick={handleNextPage}
                className={`absolute right-2 rounded-full p-2 -top-2 text-white hover:bg-gray-800 ${
                  currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={currentPage === 1}
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Cards Container */}
        {cardContent[selectedNav] && (
          <div className="mt-4 sm:mt-6 md:mt-8 flex flex-row gap-4 sm:gap-5 md:gap-6 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-4 scrollbar-hide">
            {/* Black Card */}
            <div className="w-[280px] sm:w-80 rounded-xl border-2 border-black bg-black p-4 sm:p-5 md:p-6 flex-shrink-0 snap-start">
              <div className="h-full flex flex-col justify-between">
                <p className="text-white font-sf-pro-regular text-xs sm:text-md leading-relaxed">
                  <div className='pb-7 pt-5'>
                    <p className="mt-32 whitespace-pre sm:mt-40 md:mt-48 text-white font-corinthia text-17xl sm:text-17xl">
                      {cardContent[selectedNav].blackCard.hashtag.split(" ").map((word, index) => (
                        <React.Fragment key={index}>
                          {word}{" "}
                          {index === 4 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                  {cardContent[selectedNav].blackCard.description}
                </p>
              </div>
            </div>

            {/* White Cards */}
            {cardContent[selectedNav].whiteCards.map((card, index) => (
              <div key={index} className="w-[280px] sm:w-80 h-[350px] sm:h-[570px]  rounded-xl bg-white p-3 sm:p-4 shadow-lg flex-shrink-0 snap-start">
                <div className="relative h-36 sm:h-40 md:h-44 rounded-lg bg-gray-200">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className="mt-3 sm:mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-sf-pro-medium tracking-wide">{card.title}</h3>
                    <div className="flex items-center gap-2">
                      <ChevronLeft 
                        className={`h-5 w-5 sm:h-6 sm:w-6 cursor-pointer text-gray-500 hover:text-gray-700 ${
                          (descriptionIndex[index] || 0) === 0 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        onClick={() => handlePrevDescription(index)}
                      />
                      <ChevronRight 
                        className={`h-5 w-5 sm:h-6 sm:w-6 cursor-pointer text-gray-500 hover:text-gray-700 ${
                          (descriptionIndex[index] || 0) === 2 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        onClick={() => handleNextDescription(index)}
                      />
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-4">
                    <span className="rounded-full bg-gray-100 px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-sf-pro-regular">
                      {card.tag}
                    </span>
                  </div>
                  <hr className="my-3 sm:my-4" />
                  <div className="relative h-[100px] sm:h-[120px]">
  <p className="text-xs font-sf-pro-regular sm:text-sm text-gray-500 leading-relaxed text-left overflow-hidden">
    {card.descriptions[descriptionIndex[index] || 0]}
  </p>
  {/* Dot Indicators - Fixed Position */}
  <div className="absolute bottom-50 left-1/2 transform -translate-x-1/2 flex justify-center gap-1">
    {[0, 1, 2].map((dot) => (
      <div
        key={dot}
        className={`h-2 w-2 rounded-full ${
          (descriptionIndex[index] || 0) === dot ? 'bg-gray-500' : 'bg-gray-200'
        }`}
      />
    ))}
  </div>
</div>


                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Unlock;