import React from 'react';
import { PROFILE } from '../constants/data';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative bg-black overflow-hidden">
      {/* Background subtle spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black pointer-events-none" />

      <div className="z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-zinc-200 to-zinc-500">
            {PROFILE.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="text-xl sm:text-2xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto"
        >
          {PROFILE.title}
        </motion.p>
      </div>

      {/* Bouncing Chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 cursor-pointer hover:text-white transition-colors"
      >
        <a href="#about">
            <ChevronDown size={32} strokeWidth={1.5} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
