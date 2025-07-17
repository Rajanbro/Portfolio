import React from 'react';
import { ExternalLink, Github, Bot, Shield, DollarSign, Home, BarChart3 } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Career Guidance Chatbot',
      description: 'NLP-driven career advisor specifically designed for AI/DS learners, providing personalized recommendations and guidance.',
      technologies: ['Python', 'NLP', 'Flask', 'Machine Learning', 'Natural Language Processing'],
      icon: Bot,
      featured: true,
      category: 'AI/ML'
    },
    {
      id: 2,
      title: 'Spam Email Detector',
      description: 'Streamlit-based email classifier using Naive Bayes algorithm with Kaggle dataset for high-accuracy spam detection.',
      technologies: ['Python', 'Streamlit', 'Naive Bayes', 'Kaggle', 'scikit-learn'],
      icon: Shield,
      featured: true,
      category: 'Machine Learning'
    },
    {
      id: 3,
      title: 'Loan Approval System',
      description: 'Random Forest-powered loan approval prediction system with an elegant web interface for financial institutions.',
      technologies: ['Python', 'Random Forest', 'Flask', 'Data Analytics', 'Web Development'],
      icon: DollarSign,
      featured: true,
      category: 'Fintech'
    },
    {
      id: 4,
      title: 'House Price Prediction',
      description: 'ML regression model with beautiful Streamlit interface for accurate real estate price predictions.',
      technologies: ['Python', 'Regression', 'Streamlit', 'Data Science', 'Real Estate'],
      icon: Home,
      featured: false,
      category: 'Data Science'
    },
    {
      id: 5,
      title: 'Power BI Sales Dashboard',
      description: 'Interactive chocolate sales dashboard showcasing regional trends and business insights through compelling visualizations.',
      technologies: ['Power BI', 'Data Visualization', 'Business Intelligence', 'Analytics'],
      icon: BarChart3,
      featured: false,
      category: 'Business Intelligence'
    }
  ];

  const getIconColor = (category: string) => {
    const colors = {
      'AI/ML': 'text-blue-600 dark:text-blue-400',
      'Machine Learning': 'text-green-600 dark:text-green-400',
      'Fintech': 'text-purple-600 dark:text-purple-400',
      'Data Science': 'text-orange-600 dark:text-orange-400',
      'Business Intelligence': 'text-indigo-600 dark:text-indigo-400'
    };
    return colors[category as keyof typeof colors] || 'text-gray-600 dark:text-gray-400';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI/ML': 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
      'Machine Learning': 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300',
      'Fintech': 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300',
      'Data Science': 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300',
      'Business Intelligence': 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300';
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions that demonstrate technical expertise and real-world impact
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 ${getIconColor(project.category)}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">View Project</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors">
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Other Projects */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="group bg-white dark:bg-slate-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 ${getIconColor(project.category)}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                          {project.category}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.slice(0, 2).map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                            +{project.technologies.length - 2} more
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                          <ExternalLink className="w-3 h-3" />
                          <span className="text-xs font-medium">View</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors">
                          <Github className="w-3 h-3" />
                          <span className="text-xs font-medium">Code</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;