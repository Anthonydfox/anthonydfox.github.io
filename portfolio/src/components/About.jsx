import React from 'react';
import { PROFILE, EDUCATION } from '../constants/data';
import { motion } from 'framer-motion';
import { Github, Linkedin, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight text-white">
            {PROFILE.name}
          </h1>
          <h2 className="text-xl sm:text-3xl text-gray-400 mb-8 font-light tracking-tight">
            {PROFILE.title}
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-6 mb-16 text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>{PROFILE.location}</span>
            </div>
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors duration-300"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors duration-300"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 rounded-3xl text-left max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-8 text-white tracking-tight">Education</h3>
          {EDUCATION.map((edu, index) => (
            <div key={index} className="space-y-2">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <h4 className="text-xl font-medium text-white">{edu.school}</h4>
                <span className="text-sm text-gray-500 font-mono">{edu.graduationDate}</span>
              </div>
              <p className="text-lg text-gray-300">{edu.degree}</p>
              <p className="text-gray-400">{edu.specialization}</p>
              <p className="text-sm text-gray-500 mt-2">GPA: {edu.gpa}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
