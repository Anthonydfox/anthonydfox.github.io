import React from 'react';
import { PROFILE } from '../constants/data';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="flex justify-center space-x-8 mb-12">
            <a href={PROFILE.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <span className="font-semibold">GitHub</span>
            </a>
            <a href={PROFILE.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                <span className="font-semibold">LinkedIn</span>
            </a>
        </div>
        <footer className="text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
