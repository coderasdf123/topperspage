import React, { useState, useEffect } from 'react';
import { CircleIcon } from 'lucide-react';
import TopicWheel from './TopicWheel';
import TopicDetail from './TopicDetail';
import { topics } from './topics';

export default function LifestyleHub() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [isHovering, setIsHovering] = useState(false);
  const [isSlidingActive, setIsSlidingActive] = useState(true); // Control sliding
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (isHovering && isSlidingActive) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % topics.length);
      }, 2500); // Change every 2.5 seconds
    } else {
      clearInterval(interval); // Clear the interval when not hovering or sliding is stopped
    }

    return () => clearInterval(interval); // Cleanup on unmount or hover change
  }, [isHovering, isSlidingActive]);

  useEffect(() => {
    if (isSlidingActive) {
      setSelectedTopic(topics[currentIndex]); // Update selected topic
    }
  }, [currentIndex, isSlidingActive]);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic); // Update selected topic
    setIsSlidingActive(false); // Stop sliding when a topic is clicked
  };

  return (
    <div
      className="min-h-screen bg-black text-white p-8"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-white bg-clip-text transition-colors duration-300 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-pink-400">
            Lifestyle Changes for Success
          </h1>
          <p className="text-xl text-gray-300">Transform your preparation journey with proven techniques</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <TopicWheel topics={topics} selectedTopic={selectedTopic} onSelect={handleTopicSelect} />
          <TopicDetail topic={selectedTopic} />
        </div>

        <div className="mt-16 text-center">
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-white border-2 border-gradient-to-r from-orange-500 to-pink-500 rounded-full overflow-hidden transition-all duration-300 ease-out hover:bg-black/80 hover:text-white hover:border-transparent">
            <CircleIcon className="w-5 h-5 mr-2 animate-spin-slow" />
            <span>Start Your Transformation Journey</span>
            <div className="absolute inset-0 bg-white/20 group-hover:bg-black/40 transition-all duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
