import React, { useEffect } from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden font-['Inter',system-ui,sans-serif] pt-20" style={{background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)'}}>
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,212,255,0.3)_1px,transparent_0)] bg-[length:50px_50px] animate-pulse"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12 flex flex-col items-center">
          {/* Greeting */}
          <div className="animate-fade-in-up">
            {/* Main Heading */}
            <h1
              className="text-4xl md:text-6xl font-extrabold text-center mb-6 text-white drop-shadow-[0_0_20px_#00d4ff]"
              style={{
                letterSpacing: '0.04em',
                textShadow: '0 0 16px #00d4ff, 0 0 4px #00ff88, 0 0 8px #ffffff',
                filter: 'drop-shadow(0 0 8px #00d4ff)'
              }}
            >
              RAJAN  KUMAWAT
            </h1>
            {/* Removed the non-glowing subtitle to avoid duplication and overlap */}
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-[#b0b0b0] font-medium mt-4 mb-2">
              A future-ready{' '}
              <span className="text-[#00d4ff] font-bold drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]">AI & ML enthusiast</span>{' '}
              crafting data-driven solutions with ML, GenAI, and DevOps.
            </p>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in-up delay-200">
            <span
              className="block text-4xl md:text-6xl font-extrabold text-center mx-auto mb-10 text-white tracking-wide animate-pulse"
              style={{ 
                letterSpacing: '0.04em', 
                textShadow: '0 0 32px #00d4ff, 0 0 16px #00ff88, 0 0 8px #00d4ff, 0 0 4px #ffffff',
                filter: 'drop-shadow(0 0 20px #00d4ff) drop-shadow(0 0 40px #00d4ff)'
              }}
            >
              Aspiring MLOps Engineer
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-400">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group px-10 py-4 bg-gradient-to-r from-[#00d4ff] to-[#00b8e6] text-white font-semibold rounded-lg shadow-[0_8px_32px_rgba(0,212,255,0.3)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.5)] transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 text-lg border border-[#00d4ff]/30 hover:border-[#00d4ff]/60"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-10 py-4 bg-transparent border border-[#00d4ff] text-[#00d4ff] font-semibold rounded-lg shadow-[0_8px_32px_rgba(0,212,255,0.1)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.3)] transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 text-lg hover:bg-[#00d4ff] hover:text-white hover:drop-shadow-[0_0_20px_rgba(0,212,255,0.5)]"
            >
              <Download className="w-6 h-6 group-hover:animate-bounce" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-8 animate-fade-in-up delay-600">
            <a
              href="https://github.com/Rajanbro"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#1a1a1a] hover:bg-[#00d4ff] rounded-full border border-[#333333] hover:border-[#00d4ff] text-[#00d4ff] hover:text-white transition-all duration-300 shadow-[0_8px_32px_rgba(0,212,255,0.1)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.3)] hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(0,212,255,0.5)]"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/rajan-kumawat-90aa39286"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#1a1a1a] hover:bg-[#00d4ff] rounded-full border border-[#333333] hover:border-[#00d4ff] text-[#00d4ff] hover:text-white transition-all duration-300 shadow-[0_8px_32px_rgba(0,212,255,0.1)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.3)] hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(0,212,255,0.5)]"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:rajankumawat123@gmail.com"
              className="p-4 bg-[#1a1a1a] hover:bg-[#00d4ff] rounded-full border border-[#333333] hover:border-[#00d4ff] text-[#00d4ff] hover:text-white transition-all duration-300 shadow-[0_8px_32px_rgba(0,212,255,0.1)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.3)] hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(0,212,255,0.5)]"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Status Badge */}
          <div className="animate-fade-in-up delay-800">
            <div className="inline-flex items-center space-x-3 px-8 py-4 bg-[#1a1a1a] rounded-full border border-[#333333] text-[#b0b0b0] shadow-[0_8px_32px_rgba(0,212,255,0.1)] mb-12">
              <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse drop-shadow-[0_0_10px_rgba(0,255,136,0.5)]"></div>
              <span className="text-base font-medium">
                Currently doing Internship in Multi-Technology Track via LinuxWorld (Learn & Build)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Removed the scroll indicator */}
    </section>
  );
};

export default Hero;