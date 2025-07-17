import React from 'react';
import { Code, Database, Cloud, Brain, BarChart3, GitBranch } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'JavaScript', 'C (DSA)', 'HTML', 'CSS'],
      color: 'blue'
    },
    {
      title: 'Frameworks & Libraries',
      icon: GitBranch,
      skills: ['Flask', 'Streamlit', 'NumPy', 'Pandas', 'scikit-learn', 'matplotlib'],
      color: 'green'
    },
    {
      title: 'DevOps & Deployment',
      icon: Cloud,
      skills: ['Docker', 'Jenkins', 'Kubernetes', 'CI/CD'],
      color: 'purple'
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: ['GenAI', 'NLP', 'Classification', 'Regression', 'Model Deployment'],
      color: 'pink'
    },
    {
      title: 'Data Tools',
      icon: BarChart3,
      skills: ['Power BI', 'Excel', 'Data Visualization', 'Business Intelligence'],
      color: 'orange'
    },
    {
      title: 'APIs & Integration',
      icon: Database,
      skills: ['REST APIs', 'Flask APIs', 'Database Integration', 'Automation'],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
      green: 'from-green-500 to-green-600 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800',
      purple: 'from-purple-500 to-purple-600 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
      pink: 'from-pink-500 to-pink-600 bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800',
      orange: 'from-orange-500 to-orange-600 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800',
      indigo: 'from-indigo-500 to-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building intelligent systems and data-driven solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div
                key={index}
                className={`group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-${category.color}-300 dark:hover:border-${category.color}-600 hover:scale-105`}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:scale-105 ${colorClasses.split(' ').slice(2).join(' ')}`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">AI/ML</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Machine Learning, GenAI, and intelligent system development
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">DevOps</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Container orchestration, CI/CD, and deployment automation
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">Data Science</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Data analysis, visualization, and business intelligence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;