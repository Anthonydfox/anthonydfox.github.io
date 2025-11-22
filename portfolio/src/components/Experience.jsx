import React from 'react';
import { EXPERIENCE } from '../constants/data';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-400">Experience</h2>
        <div className="space-y-8">
          {EXPERIENCE.map((exp, index) => (
            <div key={index} className="bg-slate-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <span className="text-sm text-blue-300 font-medium px-3 py-1 bg-slate-800 rounded-full mt-2 md:mt-0">{exp.role}</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
