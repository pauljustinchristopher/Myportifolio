import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: '🏗️', level: 90 },
        { name: 'CSS', icon: '🎨', level: 85 },
        { name: 'Tailwind CSS', icon: '💨', level: 90 },
        { name: 'Bootstrap', icon: '🅱️', level: 80 },
        { name: 'JavaScript', icon: '⚡', level: 85 },
        { name: 'React', icon: '⚛️', level: 90 }
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: '🟢', level: 80 },
        { name: 'Express', icon: '🚂', level: 85 },
        { name: 'MongoDB', icon: '🍃', level: 75 }
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: '📚', level: 85 },
        { name: 'Deployment', icon: '🚀', level: 80 },
        { name: 'Agile', icon: '🔄', level: 75 }
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut" }
    })
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="mb-6">
                <div className={`h-1 w-16 bg-gradient-to-r ${category.color} rounded-full mb-4`}></div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="group"
                  >
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        variants={progressVariants}
                        custom={skill.level}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                      >
                        {/* Shine effect */}
                        <motion.div
                          animate={{ x: [-100, 200] }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            repeatDelay: 3,
                            ease: "easeInOut" 
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative bottom accent */}
              <div className="mt-6 pt-4 border-t border-gray-200/20 dark:border-gray-700/20">
                <div className="flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-full opacity-20`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-gradient">Always Learning</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends, 
              frameworks, and best practices in web development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['TypeScript', 'Next.js', 'GraphQL', 'Docker', 'AWS', 'Vue.js'].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-blue-500/20"
                >
                  Currently exploring: {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;