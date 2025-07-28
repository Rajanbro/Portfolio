import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0a0a0a] font-['Inter',system-ui,sans-serif] transition-all duration-300">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;