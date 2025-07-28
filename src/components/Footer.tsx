import React from 'react';
import { Heart, Code, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0a0a0a] text-[#6c757d] border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold text-[#00d4ff] mb-4 drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]">
              RK
            </div>
            <p className="text-[#b0b0b0] mb-6 leading-relaxed max-w-md">
              AI enthusiast and aspiring ML engineer passionate about building intelligent solutions 
              that make a difference in the world of technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Rajanbro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1a1a1a] hover:bg-[#00d4ff] rounded-full border border-[#333333] hover:border-[#00d4ff] text-[#00d4ff] hover:text-white transition-all duration-300 shadow-[0_8px_32px_rgba(0,212,255,0.1)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.3)] hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/rajan-kumawat-90aa39286"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1a1a1a] hover:bg-[#00d4ff] rounded-full border border-[#333333] hover:border-[#00d4ff] text-[#00d4ff] hover:text-white transition-all duration-300 shadow-[0_8px_32px_rgba(0,212,255,0.1)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.3)] hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:rajankumawat123@gmail.com"
                className="p-3 bg-[#1a1a1a] hover:bg-[#00d4ff] rounded-full border border-[#333333] hover:border-[#00d4ff] text-[#00d4ff] hover:text-white transition-all duration-300 shadow-[0_8px_32px_rgba(0,212,255,0.1)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.3)] hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 drop-shadow-[0_0_10px_rgba(0,212,255,0.3)]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('#home')}
                  className="text-[#6c757d] hover:text-[#00d4ff] transition-colors duration-300 font-medium"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-[#6c757d] hover:text-[#00d4ff] transition-colors duration-300 font-medium"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#skills')}
                  className="text-[#6c757d] hover:text-[#00d4ff] transition-colors duration-300 font-medium"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#projects')}
                  className="text-[#6c757d] hover:text-[#00d4ff] transition-colors duration-300 font-medium"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-[#6c757d] hover:text-[#00d4ff] transition-colors duration-300 font-medium"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 drop-shadow-[0_0_10px_rgba(0,212,255,0.3)]">
              Contact Info
            </h3>
            <div className="space-y-3">
              <p className="text-[#6c757d] font-medium">
                <span className="text-[#00d4ff]">Email:</span><br />
                rajankumawat123@gmail.com
              </p>
              <p className="text-[#6c757d] font-medium">
                <span className="text-[#00d4ff]">Location:</span><br />
                Jaipur, Rajasthan, India
              </p>
              <p className="text-[#6c757d] font-medium">
                <span className="text-[#00d4ff]">Status:</span><br />
                Available for opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333333] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#6c757d] text-sm mb-4 md:mb-0">
              © 2024 Rajan Kumawat. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-[#6c757d] text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-[#ff0080] animate-pulse drop-shadow-[0_0_10px_rgba(255,0,128,0.5)]" />
              <span>and</span>
              <Code className="w-4 h-4 text-[#00d4ff] drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
              <span>by Rajan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;