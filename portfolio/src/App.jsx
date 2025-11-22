import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <main>
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
