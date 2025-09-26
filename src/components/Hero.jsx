import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-10 dark:opacity-5"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-48 h-48 mx-auto rounded-full overflow-hidden glass p-2"
              >
                <img
                  src="/src/assets/paul.jpg"
                  alt="Paul Justin Christopher"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=Paul+Justin+Christopher&size=400&background=6366f1&color=ffffff&bold=true`;
                  }}
                />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border-2 border-dashed border-blue-500/30 dark:border-blue-400/30"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-gradient">Paul Justin</span>
              <br />
              <span className="text-gray-800 dark:text-white">Christopher</span>
            </h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Full Stack Developer & UI/UX Enthusiast
            </motion.p>
          </motion.div>

          {/* Animated subtitle */}
          <motion.div
            variants={itemVariants}
            className="mb-10"
          >
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Crafting beautiful, functional, and user-centered digital experiences 
              that make a difference. Let's build something amazing together.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 glass border border-blue-500/30 text-blue-600 dark:text-blue-400 rounded-full font-medium hover:bg-blue-500/10 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;