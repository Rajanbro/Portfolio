import React from 'react';
import { Award, Shield, Brain, Car, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Network Security & DB Vulnerabilities',
      issuer: 'IBM',
      icon: Shield,
      year: '2025',
      color: 'blue',
      description: 'Comprehensive security training covering network vulnerabilities and database security best practices'
    },
    {
      title: 'Artificial Intelligence Essentials',
      issuer: 'EXIN BCS',
      icon: Brain,
      year: '2025',
      color: 'purple',
      description: 'Foundation certification in AI concepts, machine learning, and practical applications'
    },
    {
      title: 'ChatGPT & AI Tools Mastery',
      issuer: 'be10X Workshop',
      icon: Brain,
      year: '2025',
      color: 'green',
      description: 'Advanced training in leveraging AI tools for productivity and development workflows'
    },
    {
      title: 'AI-Powered Autonomous Vehicles',
      issuer: 'Technovation-24',
      icon: Car,
      year: '2025',
      color: 'orange',
      description: 'Specialized certification in autonomous vehicle technology and AI integration'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'from-blue-500 to-blue-600',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-800',
        hover: 'hover:border-blue-300 dark:hover:border-blue-600'
      },
      purple: {
        bg: 'from-purple-500 to-purple-600',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-200 dark:border-purple-800',
        hover: 'hover:border-purple-300 dark:hover:border-purple-600'
      },
      green: {
        bg: 'from-green-500 to-green-600',
        text: 'text-green-600 dark:text-green-400',
        border: 'border-green-200 dark:border-green-800',
        hover: 'hover:border-green-300 dark:hover:border-green-600'
      },
      orange: {
        bg: 'from-orange-500 to-orange-600',
        text: 'text-orange-600 dark:text-orange-400',
        border: 'border-orange-200 dark:border-orange-800',
        hover: 'hover:border-orange-300 dark:hover:border-orange-600'
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Training
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Continuous learning through industry-recognized certifications and specialized training programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            const colorClasses = getColorClasses(cert.color);
            
            return (
              <div
                key={index}
                className={`group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border ${colorClasses.border} ${colorClasses.hover} hover:scale-105`}
              >
                <div className={`h-2 bg-gradient-to-r ${colorClasses.bg}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700`}>
                      <Icon className={`w-6 h-6 ${colorClasses.text}`} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 ${colorClasses.text}`}>
                      {cert.year}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <p className={`font-medium mb-3 ${colorClasses.text}`}>
                    {cert.issuer}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {cert.description}
                  </p>
                  
                  <button className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">View Certificate</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4+</div>
              <div className="text-gray-600 dark:text-gray-400">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2025</div>
              <div className="text-gray-600 dark:text-gray-400">Latest Year</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">AI/ML</div>
              <div className="text-gray-600 dark:text-gray-400">Specialization</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">Security</div>
              <div className="text-gray-600 dark:text-gray-400">Focus Area</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;