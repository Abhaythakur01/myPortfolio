import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const Skills: React.FC = () => {
  const containerRef = useRef(null);
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: true });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const frontendSkills = [
    { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
    { name: 'Next.js', level: 88, color: 'from-gray-600 to-gray-400' },
    { name: 'Tailwind CSS', level: 92, color: 'from-cyan-500 to-teal-500' },
    { name: 'Framer Motion', level: 85, color: 'from-pink-500 to-rose-500' },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 88, color: 'from-green-500 to-emerald-500' },
    { name: 'Python', level: 82, color: 'from-yellow-500 to-orange-500' },
    { name: 'PostgreSQL', level: 85, color: 'from-blue-500 to-indigo-500' },
    { name: 'MongoDB', level: 80, color: 'from-green-600 to-green-400' },
    { name: 'AWS', level: 78, color: 'from-orange-500 to-amber-500' },
  ];

  const tools = [
    { name: 'Git', icon: '🔧', color: 'from-red-500 to-pink-500' },
    { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-blue-600' },
    { name: 'VS Code', icon: '💻', color: 'from-blue-600 to-purple-600' },
    { name: 'Figma', icon: '🎨', color: 'from-purple-500 to-pink-500' },
    { name: 'Postman', icon: '📡', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 overflow-hidden">
      <div ref={containerRef} className="container mx-auto px-6">
        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </motion.div>

        {/* Horizontal scrolling skills */}
        <motion.div
          style={{ x, opacity }}
          className="flex space-x-8 mb-16 min-w-max"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 min-w-80">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">Frontend</h3>
            <div className="space-y-4">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 min-w-80">
            <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">Backend</h3>
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: index * 0.1 + 0.7, duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 min-w-80">
            <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">Tools & DevOps</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`bg-gradient-to-br ${tool.color} p-4 rounded-lg text-center text-white font-medium`}
                >
                  <div className="text-2xl mb-2">{tool.icon}</div>
                  <div className="text-sm">{tool.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="grid md:grid-cols-4 gap-6"
        >
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '5+', label: 'Years Experience' },
            { number: '20+', label: 'Technologies' },
            { number: '99%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center"
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 1, duration: 0.6, type: "spring" }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;