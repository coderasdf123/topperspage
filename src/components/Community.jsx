import React from 'react';
import { motion } from 'framer-motion';

const Community = () => {
  return (
    <section className="relative w-full min-h-screen py-20 bg-gradient-to-b from-gray-100 to-white font-inter">
      <div className="container mx-auto px-2 max-w-5xl flex flex-col items-center space-y-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h2>
          <div className="w-16 h-1 bg-gray-700 rounded-full mx-auto" />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center max-w-3xl"
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            Become a part of our vibrant and supportive community where we share knowledge, exchange ideas, and grow together. Whether you're looking for guidance,
            <span className="font-bold"> or simply a place to connect with like-minded individuals, 
            our community offers a welcoming environment for all. Join us for learning,
            networking opportunities, and real-time learning </span>
          </p>
        </motion.div>

        {/* Stats Section - Aligned in a single row */}
        <div className="w-full flex flex-row justify-between items-center gap-8 px-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-1 bg-white p-8 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-4xl font-bold text-gray-600 mb-2">+1.5M</h3>
            <p className="text-gray-600">Registered Users</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-1 bg-white p-8 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-4xl font-bold text-gray-600 mb-2">608K</h3>
            <p className="text-gray-600">GitHub Stars</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-1 bg-white p-8 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-4xl font-bold text-gray-600 mb-2">30K</h3>
            <p className="text-gray-600">Active Members</p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="text-center"
        >
          <div className="rounded-full bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 p-0.5">
            <div className="flex-1 rounded-full bg-white overflow-hidden flex flex-row items-center justify-center py-3 px-6">
              <button className="text-gray-900 font-bold text-lg">
                Join the Community
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gray-300 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gray-400 rounded-full opacity-10 blur-3xl" />
      </div>
    </section>
  );
};

export default Community;