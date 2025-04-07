import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Topic } from './types';

interface TopicDetailProps {
  topic: Topic;
}

export default function TopicDetail({ topic }: TopicDetailProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={topic.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
      >
        <div className="flex items-center mb-6">
          <topic.icon className="w-10 h-10 mr-4" style={{ color: topic.colors[0] }} />
          <h2 className="text-3xl font-bold">{topic.title}</h2>
        </div>
        
        <p className="text-white mb-6">{topic.description}</p>
        
        <div className="space-y-4">
          {topic.keyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start"
            >
              <div
                className="w-2 h-2 rounded-full  mr-3 animate-pulse"
                style={{ backgroundColor: topic.colors[0] }}
              />
              <p className="text-white mt-2">{point}</p>
            </motion.div>
          ))}
        </div>

        {topic.interactiveElement}
      </motion.div>
    </AnimatePresence>
  );
}