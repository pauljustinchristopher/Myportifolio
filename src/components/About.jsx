import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">About Me</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                Hello! I'm Paul Justin Christopher, a passionate full-stack developer 
                with a keen eye for creating intuitive and engaging user experiences. 
                My journey in web development started with curiosity and has evolved 
                into a love for building digital solutions that make a real impact.
              </p>
              
              <p className="text-lg leading-relaxed">
                I specialize in modern web technologies and enjoy the entire process 
                of bringing ideas to life - from initial concept and design to 
                deployment and maintenance. When I'm not coding, you'll find me 
                exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
              
              <p className="text-lg leading-relaxed">
                I believe in writing clean, maintainable code and creating 
                applications that not only look great but also provide exceptional 
                user experiences across all devices and platforms.
              </p>
            </div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 glass rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative z-10"
              >
                <img
                  src="/src/assets/paul.jpg"
                  alt="Paul Justin Christopher working"
                  className="rounded-2xl shadow-2xl w-full"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face`;
                  }}
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-500/10 dark:bg-blue-400/5 rounded-2xl blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-purple-500/10 dark:bg-purple-400/5 rounded-2xl blur-2xl"></div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-8 -left-8 glass p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for work</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute bottom-8 -right-8 glass p-4 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">🚀 Always learning</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;