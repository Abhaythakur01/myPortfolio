import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces that provide excellent user experiences.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and cross-platform compatibility.',
    },
  ];

  return (
    <section id="about" className="py-20" style={{ backgroundColor: '#7A9B8E' }}>
      <div className="container mx-auto px-6">
        {/* Sophisticated Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#F4F1E8] tracking-tight">
            About Me
          </h2>
          <div className="w-28 h-1 mx-auto rounded-full" style={{ backgroundColor: '#E67E22' }}></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Circle */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full flex items-center justify-center border-4" style={{ borderColor: '#F4F1E8' }}>
                <div className="w-64 h-64 rounded-full flex items-center justify-center text-8xl font-bold" style={{ backgroundColor: '#E67E22', color: '#F4F1E8' }}>
                  JD
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text + Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#F4F1E8' }}>
              Passionate Full Stack Developer
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: '#F4F1E8' }}>
              With over 5 years of experience in web development, I specialize in creating 
              modern, responsive applications using React, Node.js, and cloud technologies. 
              I'm passionate about writing clean, efficient code and staying up-to-date 
              with the latest industry trends.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#F4F1E8' }}>
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
            </p>
            {/* Orange CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 shadow-lg"
              style={{ backgroundColor: '#E67E22' }}
            >
              Download Resume
            </motion.button>
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 rounded-xl text-center group shadow-md"
              style={{ backgroundColor: '#F4F1E8', color: '#2D2D2D' }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="inline-flex p-4 rounded-full mb-6"
                style={{ backgroundColor: '#E67E22' }}
              >
                <feature.icon className="text-white" size={32} />
              </motion.div>
              <h4 className="text-xl font-semibold mb-4">{feature.title}</h4>
              <p className="leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
