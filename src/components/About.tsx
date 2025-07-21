import React, { useState } from 'react';
import { GraduationCap, Target, Award } from 'lucide-react';
import { Play } from 'lucide-react';
import ProfileImg from '../assets/Rajan_passport.png';

const About: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about turning complex data into actionable insights and building intelligent systems
          </p>
          {/* Intro Button */}
          <button
            onClick={() => setShowVideo(true)}
            className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full shadow transition-all"
          >
            <Play className="w-5 h-5 mr-2" />
            Intro
          </button>
        </div>
        {/* Video Modal */}
        {showVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-lg relative">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl font-bold"
                aria-label="Close"
              >
                &times;
              </button>
              <video controls autoPlay className="w-full max-h-[70vh] rounded-lg">
                <source src="/Intro Video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-72 h-72 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={ProfileImg}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                  style={{ background: '#fff' }}
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
              <Award className="w-8 h-8 text-yellow-800" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
                  <p className="text-gray-600 dark:text-gray-400">Current Academic Journey</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    BCA – Artificial Intelligence & Data Science
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Vivekananda Global University, Jaipur
                  </p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-400 rounded-full text-sm font-medium">
                      CGPA: 9.1
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-400 rounded-full text-sm font-medium">
                      3rd Year
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-400 rounded-full text-sm font-medium">
                      Linux World Intern
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Summary */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Career Summary</h3>
                  <p className="text-gray-600 dark:text-gray-400">Vision & Goals</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Eager to apply technical and creative problem-solving skills to real-world challenges 
                through internships in AI/ML & DevOps. Focused on delivering impact and growing in a 
                tech-driven world. Passionate about leveraging cutting-edge technologies to create 
                intelligent solutions that make a difference.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">4+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;