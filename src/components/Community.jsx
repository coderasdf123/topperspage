import React from 'react'; 
import { motion } from 'framer-motion';  

const Community = () => {   
  return (     
    <section className="relative w-full min-h-[80%] py-0 bg-gradient-to-b from-gray-100 to-white font-sf-pro-bold">       
      <div className="container mx-auto px-2 max-w-5xl flex flex-col items-center space-y-16">         
        {/* Header Section */}         
        <motion.div           
          initial={{ opacity: 0, y: 20 }}           
          whileInView={{ opacity: 1, y: 0 }}           
          transition={{ duration: 0.6 }}           
          className="text-center"         
        >           
          <h2 className="text-3xl font-bold text-gray-900 mb-4 relative top-[28px]">             
            Join Our Community           
          </h2>           
          <div className="w-16 h-1 bg-gray-700 rounded-full mx-auto relative top-[20px]" />         
        </motion.div>          

        {/* Description */} 
        <motion.div   
          initial={{ opacity: 0 }}   
          whileInView={{ opacity: 1 }}   
          transition={{ delay: 0.2 }}   
          className="text-center max-w-3xl sm:max-w-3xl max-w-full px-4" 
        >   
          <p className="text-sm font-sf-pro-regular sm:text-lg text-gray-600 leading-relaxed sm:leading-relaxed leading-normal">     
            Become a part of our vibrant and supportive community where we share knowledge, exchange ideas, and grow together. Whether you're looking for guidance,     
            <span className="font-bold"> or simply a place to connect with like-minded individuals,      
            our community offers a welcoming environment for all. Join us for learning,     
            networking opportunities, and real-time learning </span>   
          </p> 
        </motion.div>          

        {/* Stats Section - Aligned in a single row */} 
        <div className="w-[350px] sm:w-full flex flex-row sm:flex-row justify-between items-center gap-4 sm:gap-8 px-4">   
          <motion.div     
            whileHover={{ scale: 1.05 }}     
            className="w-2/5 sm:flex-1 bg-white p-2 sm:p-8 rounded-xl shadow-lg text-center"   
          >     
            <div className="text-4xl mb-2 hidden sm:block">👥</div>
            <div className="text-2xl mb-1 sm:hidden">👥</div>
            <h3 className="text-2xl sm:text-4xl font-bold text-gray-600 mb-2">+1.5M</h3>     
            <p className="text-gray-600 font-sf-pro-regular">Registered Users</p>   
          </motion.div>    

          <motion.div     
            whileHover={{ scale: 1.05 }}     
            className="w-2/5 sm:flex-1 bg-white p-2 sm:p-8 rounded-xl shadow-lg text-center"   
          >     
            <div className="text-4xl mb-2 hidden sm:block">⭐</div>
            <div className="text-2xl mb-1 sm:hidden">⭐</div>
            <h3 className="text-2xl sm:text-4xl font-bold text-gray-600 mb-2">608K</h3>     
            <p className="text-gray-600 font-sf-pro-regular">GitHub Stars</p>   
          </motion.div>    

          <motion.div     
            whileHover={{ scale: 1.05 }}     
            className="w-2/5 sm:flex-1 bg-white p-2 sm:p-8 rounded-xl shadow-lg text-center"   
          >     
            <div className="text-4xl mb-2 hidden sm:block">🚀</div>
            <div className="text-2xl mb-1 sm:hidden">🚀</div>
            <h3 className="text-2xl sm:text-4xl font-bold text-gray-600 mb-2">30K</h3>     
            <p className="text-gray-600 font-sf-pro-regular">Active Members</p>   
          </motion.div> 
        </div>   

        <motion.div       
          whileHover={{ scale: 1.02 }}       
          className="text-center relative group"     
        >       
          {/* Gradient border glow effect */}       
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400        
            rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>              
          {/* Gradient border container */}       
          <div className="rounded-full bg-gradient-to-r from-cyan-400 via-yellow-300 to-orange-400 p-0.5 relative z-10">         
            <div className="flex-1 rounded-full bg-white overflow-hidden flex flex-row items-center justify-center py-3 px-6">           
              <button className="text-gray-900 font-sf-pro-bold font-bold text-lg">             
                Join the Community 🤝           
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