import React from 'react';
import { PROFILE } from '../constants/data';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 tracking-tight text-white">Get In Touch</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex justify-center items-center gap-8 mb-20">
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <Github size={24} />
              </div>
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <Linkedin size={24} />
              </div>
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>

          <footer className="text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          </footer>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
