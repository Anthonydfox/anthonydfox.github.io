import React from 'react';
import { EXPERIENCE } from '../constants/data';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-32">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center tracking-tight text-white"
        >
          Experience
        </motion.h2>

        <div className="space-y-6">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                <h3 className="text-2xl font-semibold text-white tracking-tight">{exp.company}</h3>
                <span className="text-sm font-medium px-4 py-1.5 bg-white/10 rounded-full text-gray-300">
                  {exp.role}
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
