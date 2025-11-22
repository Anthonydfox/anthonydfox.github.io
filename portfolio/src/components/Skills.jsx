import React from 'react';
import { SKILLS } from '../constants/data';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Skills</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Languages */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center border-b border-gray-600 pb-2">Languages</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {SKILLS.languages.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-slate-700 rounded-lg text-sm font-medium hover:bg-slate-600 transition-colors shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools/AI */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center border-b border-gray-600 pb-2">Tools & AI</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {SKILLS.tools.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-slate-700 rounded-lg text-sm font-medium hover:bg-slate-600 transition-colors shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
