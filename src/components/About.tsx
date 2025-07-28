import React, { useState } from 'react';
import { GraduationCap, Target, Award } from 'lucide-react';
import { Play } from 'lucide-react';
import ProfileImg from '../assets/Rajan_passport.png';

const About: React.FC = () => {
  // Remove the button and modal logic for 'Watch Intro' video
  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">
            About Me
          </h2>
          <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto leading-relaxed font-medium">
            Passionate about turning complex data into actionable insights and building intelligent systems
          </p>
          {/* Intro Button */}
          {/* The button and modal for watching intro video are removed */}
        </div>
        {/* Video Modal */}
        {/* The button and modal for watching intro video are removed */}

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Image Section */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-[#00d4ff] to-[#00b8e6] rounded-full flex items-center justify-center shadow-[0_12px_40px_rgba(0,212,255,0.3)]">
              <div className="w-72 h-72 bg-[#1a1a1a] rounded-full flex items-center justify-center overflow-hidden shadow-[0_8px_32px_rgba(0,212,255,0.1)]">
                <img
                  src={ProfileImg}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-[#1a1a1a] shadow-[0_8px_32px_rgba(0,212,255,0.1)]"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#ff0080] to-[#e60073] rounded-full flex items-center justify-center animate-pulse shadow-[0_12px_40px_rgba(255,0,128,0.3)]">
              <Award className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,212,255,0.1)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.2)] transition-all duration-300 border border-[#333333]">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-[#00d4ff] rounded-xl shadow-[0_8px_32px_rgba(0,212,255,0.2)]">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                  <p className="text-[#b0b0b0] font-medium">Current Academic Journey</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-white text-lg">
                    BCA – Artificial Intelligence & Data Science
                  </h4>
                  <p className="text-[#b0b0b0] font-medium">
                    Vivekananda Global University, Jaipur
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    <span className="px-4 py-2 bg-[#ff0080]/10 text-[#ff0080] rounded-full text-sm font-bold border border-[#ff0080]/20">
                      CGPA: 9.1
                    </span>
                    <span className="px-4 py-2 bg-[#00d4ff]/10 text-[#00d4ff] rounded-full text-sm font-bold border border-[#00d4ff]/20">
                      3rd Year
                    </span>
                    <span className="px-4 py-2 bg-[#00ff88]/10 text-[#00ff88] rounded-full text-sm font-bold border border-[#00ff88]/20">
                      Linux World Intern
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Summary */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,212,255,0.1)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.2)] transition-all duration-300 border border-[#333333]">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-[#ff0080] rounded-xl shadow-[0_8px_32px_rgba(255,0,128,0.2)]">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Career Summary</h3>
                  <p className="text-[#b0b0b0] font-medium">Vision & Goals</p>
                </div>
              </div>
              <p className="text-[#b0b0b0] leading-relaxed text-lg font-medium">
                Eager to apply technical and creative problem-solving skills to real-world challenges 
                through internships in AI/ML & DevOps. Focused on delivering impact and growing in a 
                tech-driven world. Passionate about leveraging cutting-edge technologies to create 
                intelligent solutions that make a difference.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#1a1a1a] rounded-2xl p-6 text-center shadow-[0_8px_32px_rgba(0,212,255,0.1)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.2)] transition-all duration-300 border border-[#333333]">
                <div className="text-4xl font-bold text-[#00d4ff] mb-3 drop-shadow-[0_0_10px_rgba(0,212,255,0.5)]">34+</div>
                <div className="text-[#b0b0b0] font-bold">Projects Completed</div>
              </div>
              <div className="bg-[#1a1a1a] rounded-2xl p-6 text-center shadow-[0_8px_32px_rgba(0,212,255,0.1)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.2)] transition-all duration-300 border border-[#333333]">
                <div className="text-4xl font-bold text-[#00ff88] mb-3 drop-shadow-[0_0_10px_rgba(0,255,136,0.5)]">4+</div>
                <div className="text-[#b0b0b0] font-bold">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;