import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen text-gray-400 selection:bg-white/20 selection:text-white">
      <Navbar />
      <main className="relative z-10">
        <About />
        <Experience />
        <Leadership />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
