import React from 'react';
import { SKILLS } from '../constants/data';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="py-32">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center tracking-tight text-white"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center text-white tracking-tight">Languages</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {SKILLS.languages.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools/AI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center text-white tracking-tight">Tools & AI</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {SKILLS.tools.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
