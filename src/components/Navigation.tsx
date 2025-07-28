import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { professionalTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0a0a0a]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,212,255,0.1)] border-b border-[#333333]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#home')}
              className="text-3xl font-extrabold px-6 py-2 rounded-2xl bg-[#18181b] border-2 border-[#00d4ff] text-[#00d4ff] shadow-[0_0_20px_#00d4ff55] hover:shadow-[0_0_40px_#00d4ff99] transition-all duration-300 drop-shadow-[0_0_10px_#00d4ff] hover:scale-105"
              style={{ letterSpacing: '0.05em' }}
            >
              RK
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-8 py-3 rounded-2xl bg-[#18181b] border-2 border-[#00d4ff] text-white font-bold text-lg shadow-[0_0_10px_#00d4ff33] transition-all duration-300 hover:text-[#00d4ff] hover:shadow-[0_0_20px_#00d4ff99] hover:scale-105 focus:text-[#00d4ff] focus:shadow-[0_0_20px_#00d4ff99]"
                  style={{ letterSpacing: '0.01em' }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl bg-[#1a1a1a] hover:bg-[#333333] transition-all duration-300 shadow-[0_8px_32px_rgba(0,212,255,0.1)] border border-[#333333]"
            >
              {isOpen ? <X size={20} className="text-[#00d4ff]" /> : <Menu size={20} className="text-[#00d4ff]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-[#333333] shadow-[0_8px_32px_rgba(0,212,255,0.1)]">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-base font-medium text-[#00d4ff] hover:text-[#00b8e6] hover:bg-[#1a1a1a] rounded-xl transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;