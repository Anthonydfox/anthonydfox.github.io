import React from 'react';
import { LEADERSHIP } from '../constants/data';

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-purple-400">Leadership</h2>
        <div className="grid gap-8 md:grid-cols-1">
          {LEADERSHIP.map((item, index) => (
            <div key={index} className="bg-slate-800 p-8 rounded-xl shadow-lg border-t-4 border-purple-500">
              <h3 className="text-2xl font-bold mb-2">{item.organization}</h3>
              <h4 className="text-lg text-purple-300 mb-4">{item.role}</h4>
              <p className="text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
