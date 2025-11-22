import React from 'react';
import { LEADERSHIP } from '../constants/data';
import { motion } from 'framer-motion';

const Leadership = () => {
  return (
    <section id="leadership" className="py-32">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center tracking-tight text-white"
        >
          Leadership
        </motion.h2>

        <div className="grid gap-6">
          {LEADERSHIP.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-white mb-1 tracking-tight">{item.organization}</h3>
                <h4 className="text-lg text-gray-400 font-medium">{item.role}</h4>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
