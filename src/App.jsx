import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="font-semibold tracking-tight text-white">
            <span className="text-cyan-400">//</span> Creator<span className="text-white/60">.tech</span>
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:translate-y-[-1px] sm:inline-block"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
