import React from 'react';
import { PROFILE, EDUCATION } from '../constants/data';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-slate-900 text-white pt-16">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          {PROFILE.name}
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-300 mb-8 font-light">
          {PROFILE.title}
        </h2>
        <div className="text-gray-400 mb-10 flex justify-center space-x-6">
          <span>{PROFILE.location}</span>
          <a href={PROFILE.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
          <a href={PROFILE.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
        </div>

        <div className="bg-slate-800 p-8 rounded-2xl shadow-xl mt-10">
          <h3 className="text-2xl font-semibold mb-6 border-b border-slate-700 pb-2">Education</h3>
          {EDUCATION.map((edu, index) => (
            <div key={index} className="text-left">
              <h4 className="text-xl font-bold text-blue-400">{edu.school}</h4>
              <p className="text-lg font-medium">{edu.degree}</p>
              <p className="text-gray-400 italic mt-1">{edu.specialization}</p>
              <div className="flex justify-between mt-4 text-sm text-gray-500">
                <span>GPA: {edu.gpa}</span>
                <span>{edu.graduationDate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
