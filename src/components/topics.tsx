import React from 'react';
import {
  Target,
  Flame,
  Calendar,
  Brain,
  Timer,
  Clock,
  LayoutGrid,
  Mountain,
  CheckSquare,
  BarChart
} from 'lucide-react';
import { Topic } from './types';

export const topics: Topic[] = [
  {
    id: 'clear-goals',
    title: 'Clear Goals',
    description: 'Set SMART goals to guide your IIT-JEE preparation journey.',
    icon: Target,
    colors: ['#FF6B6B', '#FF8E53'],
    keyPoints: [
      'Define specific, measurable objectives',
      'Create weekly and monthly targets',
      'Track your progress regularly',
      'Adjust goals based on performance'
    ],
    interactiveElement: (
      <div className="mt-6 p-4 bg-white/5 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Goal Tracker</h3>
        <div className="space-y-2">
          <div className="flex items-center p-2 bg-white/5 rounded">
            <CheckSquare className="w-5 h-5 mr-2 text-green-400" />
            <span>Complete 2 chapters of Physics</span>
          </div>
          <div className="flex items-center p-2 bg-white/5 rounded">
            <CheckSquare className="w-5 h-5 mr-2 text-green-400" />
            <span>Solve 50 JEE problems</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'motivation',
    title: 'Motivation',
    description: 'Stay inspired and focused on your preparation journey.',
    icon: Flame,
    colors: ['#4CAF50', '#8BC34A'],
    keyPoints: [
      'Create a vision board',
      'Follow success stories',
      'Practice daily affirmations',
      'Celebrate small wins'
    ],
    interactiveElement: (
      <div className="mt-6 p-4 bg-white/5 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Daily Inspiration</h3>
        <blockquote className="italic text-gray-300 border-l-4 border-green-400 pl-4">
          "Success is not final, failure is not fatal: it is the courage to continue that counts."
        </blockquote>
      </div>
    )
  },
  {
    id: 'daily-habits',
    title: 'Daily Habits',
    description: 'Build strong study habits that lead to consistent progress.',
    icon: Calendar,
    colors: ['#3498DB', '#2980B9'],
    keyPoints: [
      'Morning study routine',
      'Regular revision schedule',
      'Problem-solving practice',
      'Self-assessment habits'
    ],
    interactiveElement: (
      <div className="mt-6 p-4 bg-white/5 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Habit Tracker</h3>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="aspect-square rounded bg-white/10 flex items-center justify-center">
              <BarChart className={`w-4 h-4 ${i <= 4 ? 'text-blue-400' : 'text-gray-600'}`} />
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'mindset-change',
    title: 'Mindset Change',
    description: 'Develop a growth mindset for continuous improvement.',
    icon: Brain,
    colors: ['#9B59B6', '#8E44AD'],
    keyPoints: [
      'Embrace challenges',
      'Learn from failures',
      'Focus on progress',
      'Stay persistent'
    ],
    interactiveElement: (
      <div className="mt-6 p-4 bg-white/5 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Mindset Shift</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span>"I can't solve this"</span>
            <span className="text-purple-400">→</span>
            <span>"I can't solve this yet"</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '21-days-challenge',
    title: '21 Days Challenge',
    description: 'Transform your study habits with a 21-day commitment.',
    icon: Timer,
    colors: ['#E74C3C', '#C0392B'],
    keyPoints: [
      'Daily study goals',
      'Progress tracking',
      'Accountability system',
      'Reward milestones'
    ],
    interactiveElement: (
      <div className="mt-6 p-4 bg-white/5 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Challenge Progress</h3>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full" style={{ width: '33%' }} />
        </div>
        <p className="text-sm mt-2 text-center">Day 7 of 21</p>
      </div>
    )
  },
  {
    id: 'pomodoro',
    title: 'Pomodoro',
    description: 'Maximize focus with timed study sessions.',
    icon: Clock,
    colors: ['#F1C40F', '#F39C12'],
    keyPoints: [
      '25-minute focus sessions',
      '5-minute breaks',
      'Track completed pomodoros',
      'Increase productivity'
    ],
    interactiveElement: (
      <div className="mt-6 p-4 bg-white/5 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Timer</h3>
        <div className="text-center">
          <div className="text-3xl font-bold text-yellow-400">25:00</div>
          <button className="mt-2 px-4 py-2 bg-yellow-500/20 rounded-full text-yellow-400 hover:bg-yellow-500/30 transition-colors">
            Start Session
          </button>
        </div>
      </div>
    )
  },
  {
    id: 'time-management',
    title: 'Time Management',
    description: 'Optimize your study schedule for maximum efficiency.',
    icon: LayoutGrid,
    colors: ['#1ABC9C', '#16A085'],
    keyPoints: [
      'Create study timetable',
      'Prioritize subjects',
      'Eliminate distractions',
      'Regular breaks'
    ],
    interactiveElement: (
      <div className="mt-6 p-4 bg-white/5 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Daily Schedule</h3>
        <div className="space-y-2">
          {['Physics', 'Chemistry', 'Mathematics'].map((subject) => (
            <div key={subject} className="flex justify-between items-center p-2 bg-white/5 rounded">
              <span>{subject}</span>
              <span className="text-teal-400">2 hours</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'comfort-zone',
    title: 'Comfort Zone',
    description: 'Push your boundaries to achieve extraordinary results.',
    icon: Mountain,
    colors: ['#34495E', '#2C3E50'],
    keyPoints: [
      'Take on challenges',
      'Attempt difficult problems',
      'Expand knowledge',
      'Face fears'
    ],
    interactiveElement: (
      <div className="mt-6 p-4 bg-white/5 rounded-lg">
        <h3 className="text-lg font-semibold mb-3">Challenge Yourself</h3>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-gray-700">
                Comfort Zone Progress
              </span>
            </div>
          </div>
          <div className="flex h-2 mb-4 overflow-hidden rounded-full bg-gray-700">
            <div className="flex flex-col justify-center overflow-hidden bg-gradient-to-r from-gray-400 to-gray-600" role="progressbar" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
    )
  }
];