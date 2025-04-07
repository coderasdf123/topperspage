import React from 'react';
import { motion } from 'framer-motion';
import { Topic } from './types';

interface TopicWheelProps {
  topics: Topic[];
  selectedTopic: Topic;
  onSelect: (topic: Topic) => void;
}

export default function TopicWheel({ topics, selectedTopic, onSelect }: TopicWheelProps) {
  return (
    <div className="grid grid-cols-3 gap-6 w-full max-w-xl mx-auto mt-8">
      {topics.map((topic, index) => {
        const isSelected = topic.id === selectedTopic.id;

        // Generate a dark background color that complements black
        const randomColor = `rgba(${Math.floor(Math.random() * 100) + 55}, ${Math.floor(Math.random() * 100) + 55}, ${Math.floor(Math.random() * 100) + 55}, 0.8)`;

        return (
          <motion.div
            key={topic.id}
            className={`relative w-full h-32 rounded-lg cursor-pointer flex items-center justify-center transform transition-all duration-300
              ${isSelected ? 'scale-105 z-10 border-2 border-white' : 'hover:scale-105'}`}
            style={{
              background: randomColor,  // Darker complementary colors
            }}
            whileHover={{ scale: 1.05 }}
            onClick={() => onSelect(topic)}
          >
            <div className="text-center p-2">
              <topic.icon className="w-8 h-8 mx-auto mb-2 text-white" />
              <p className="text-xs font-medium text-white">{topic.title}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
