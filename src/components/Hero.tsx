import React from 'react';
import { Download, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Greeting */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hey, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Rajan
              </span>{' '}
              <span className="inline-block animate-bounce">👋</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A future-ready{' '}
              <span className="text-blue-400 font-semibold">AI & DS enthusiast</span>{' '}
              crafting data-driven solutions with ML, GenAI, and DevOps.
            </p>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in-up delay-200">
            <p className="text-lg md:text-xl text-gray-400 font-medium">
              "Turning data into action, models into intelligence."
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-400">
            <button
              onClick={() => scrollToSection('#projects')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 animate-fade-in-up delay-600">
            <a
              href="https://github.com/Rajanbro"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full border border-white/20 hover:border-white/40 text-white hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/rajan-kumawat-90aa39286"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full border border-white/20 hover:border-white/40 text-white hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:rajankumawat123@gmail.com"
              className="p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full border border-white/20 hover:border-white/40 text-white hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Status Badge */}
          <div className="animate-fade-in-up delay-800">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-md rounded-full border border-green-500/30 text-green-300">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">
                🚀 Actively seeking internships in AI/ML & DevOps – Let's build the future together!
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;