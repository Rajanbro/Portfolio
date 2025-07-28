import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ExternalLink, Github, Search, Filter, Bot, Shield, DollarSign, Home, BarChart3, Brain, X } from 'lucide-react';

// Add CSS for blinking border animation
const borderGlowAnimation = `
  @keyframes borderGlow {
    0%, 100% {
      border-color: rgba(255, 0, 128, 0.6);
      box-shadow: 0 0 20px rgba(255, 0, 128, 0.3), 0 0 40px rgba(255, 0, 128, 0.1);
    }
    50% {
      border-color: rgba(255, 0, 128, 1);
      box-shadow: 0 0 30px rgba(255, 0, 128, 0.6), 0 0 60px rgba(255, 0, 128, 0.3);
    }
  }
`;

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: 'AI/ML' | 'Web Dev' | 'DevOps' | 'Data Science' | 'Data Science/ML' | 'Machine Learning' | 'ML' | 'Fintech' | 'Business Intelligence' | 'Communication' | 'Data Visualization' | 'Social Media' | 'Automation' | 'Science' | 'Game App';
  githubUrl: string;
  liveUrl?: string;
  icon: React.ComponentType<any>;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI Career Guidance Chatbot',
    description: 'NLP-driven career advisor specifically designed for AI/DS learners, providing personalized recommendations and guidance.',
    technologies: ['Python', 'NLP', 'Flask', 'Machine Learning', 'Natural Language Processing'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Rajanbro/AI-Career_Guidance_Chatbot',
    icon: Bot,
    featured: true
  },
  {
    id: 2,
    title: 'Spam Email Detector',
    description: 'Streamlit-based email classifier using Naive Bayes algorithm with Kaggle dataset for high-accuracy spam detection.',
    technologies: ['Python', 'Streamlit', 'Naive Bayes', 'Kaggle', 'scikit-learn'],
    category: 'Machine Learning',
    githubUrl: 'https://github.com/Rajanbro/SpamEmailDetector',
    icon: Shield,
    featured: true
  },
  {
    id: 3,
    title: 'Loan Approval System',
    description: 'Random Forest-powered loan approval prediction system with an elegant web interface for financial institutions.',
    technologies: ['Python', 'Random Forest', 'Flask', 'Machine Learning', 'Financial Analysis'],
    category: 'ML',
    githubUrl: 'https://github.com/Rajanbro/Loan_Approval_System',
    icon: DollarSign,
    featured: true
  },
  {
    id: 4,
    title: 'House Price Prediction',
    description: 'ML regression model with beautiful Streamlit interface for accurate real estate price predictions.',
    technologies: ['Python', 'Regression', 'Streamlit', 'Data Science', 'Real Estate'],
    category: 'Data Science',
    githubUrl: 'https://github.com/Rajanbro/House_Price_Prediction',
    icon: Home,
    featured: false
  },
  {
    id: 5,
    title: 'Power BI Sales Dashboard',
    description: 'Interactive chocolate sales dashboard showcasing regional trends and business insights through compelling visualizations.',
    technologies: ['Power BI', 'Data Visualization', 'Business Intelligence', 'Analytics'],
    category: 'Business Intelligence',
    githubUrl: 'https://github.com/Rajanbro/PowerBI_Sales_Dashboard',
    icon: BarChart3,
    featured: false
  },
  {
    id: 6,
    title: 'Fashion_MNIST_Tensorflow',
    description: 'Deep learning model built with TensorFlow to classify Fashion MNIST images. Demonstrates neural network design, training, and evaluation for computer vision tasks.',
    technologies: ['Python', 'TensorFlow', 'Deep Learning', 'Fashion MNIST'],
    category: 'Machine Learning',
    githubUrl: 'https://github.com/Rajanbro/Fashion_MNIST_Tensorflow',
    icon: Shield,
    featured: true
  },
  {
    id: 7,
    title: 'Math_GeniusAI',
    description: 'An AI-powered Python application designed to solve complex mathematical problems and provide step-by-step solutions. Utilizes advanced algorithms and intelligent reasoning.',
    technologies: ['Python', 'AI', 'Algorithms', 'Automation'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Rajanbro/Math_GeniusAI',
    icon: Bot,
    featured: true
  },
  {
    id: 8,
    title: 'WhatsappMssgJS_Html',
    description: 'A web-based tool for sending WhatsApp messages using JavaScript and HTML. Simplifies communication workflows.',
    technologies: ['HTML', 'JavaScript', 'Web'],
    category: 'Communication',
    githubUrl: 'https://github.com/Rajanbro/WhatsappMssgJS_Html',
    icon: ExternalLink,
    featured: false
  },
  {
    id: 9,
    title: 'Visualizing Err in Dataset',
    description: 'Python project for visualizing errors in house price prediction datasets. Useful for data analysis and model improvement.',
    technologies: ['Python', 'Data Visualization', 'Analytics'],
    category: 'Data Visualization',
    githubUrl: 'https://github.com/Rajanbro/Visualizing_Err_HousePriceData',
    icon: BarChart3,
    featured: false
  },
  {
    id: 10,
    title: 'Video-Email',
    description: 'HTML-based solution for embedding and sending video content via email. Enhances communication with multimedia.',
    technologies: ['HTML', 'Email', 'Video'],
    category: 'Communication',
    githubUrl: 'https://github.com/Rajanbro/Video-Email',
    icon: ExternalLink,
    featured: false
  },
  {
    id: 11,
    title: 'Photo_with_Email',
    description: 'HTML application for sending photos via email with enhanced user interface and functionality.',
    technologies: ['HTML', 'Email', 'Photo'],
    category: 'Communication',
    githubUrl: 'https://github.com/Rajanbro/Photo_with_Email',
    icon: ExternalLink,
    featured: false
  },
  {
    id: 12,
    title: 'Salary_Predictor',
    description: 'Machine learning model to predict salary based on various factors using regression algorithms.',
    technologies: ['Python', 'Machine Learning', 'Regression', 'Data Science'],
    category: 'Data Science/ML',
    githubUrl: 'https://github.com/Rajanbro/Salary_Predictor',
    icon: DollarSign,
    featured: false
  },
  {
    id: 13,
    title: 'JS_Photo_capture',
    description: 'JavaScript-based photo capture application with real-time camera integration and image processing.',
    technologies: ['JavaScript', 'Camera API', 'Image Processing'],
    category: 'Web Dev',
    githubUrl: 'https://github.com/Rajanbro/JS_Photo_capture',
    icon: ExternalLink,
    featured: false
  },
  {
    id: 14,
    title: 'Apache-server',
    description: 'Apache server configuration and deployment project for web hosting and server management.',
    technologies: ['Apache', 'Server Management', 'Web Hosting'],
    category: 'DevOps',
    githubUrl: 'https://github.com/Rajanbro/Apache-server',
    icon: Shield,
    featured: false
  },
  {
    id: 15,
    title: 'Apps-Menu',
    description: 'Interactive applications menu with modern UI design and smooth navigation experience.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    category: 'Web Dev',
    githubUrl: 'https://github.com/Rajanbro/Apps-Menu',
    icon: ExternalLink,
    featured: false
  },
  {
    id: 16,
    title: 'Whatsapp-Mssg',
    description: 'WhatsApp messaging automation tool with enhanced features for bulk messaging and scheduling.',
    technologies: ['JavaScript', 'WhatsApp API', 'Automation'],
    category: 'Communication',
    githubUrl: 'https://github.com/Rajanbro/Whatsapp-Mssg',
    icon: ExternalLink,
    featured: false
  },
  {
    id: 17,
    title: 'Twitter-post',
    description: 'Twitter post automation tool for scheduling and managing social media content.',
    technologies: ['JavaScript', 'Twitter API', 'Social Media'],
    category: 'Social Media',
    githubUrl: 'https://github.com/Rajanbro/Twitter-post',
    icon: ExternalLink,
    featured: false
  },
  {
    id: 18,
    title: 'Linkedin_Post',
    description: 'LinkedIn post automation and management tool for professional networking.',
    technologies: ['JavaScript', 'LinkedIn API', 'Social Media'],
    category: 'Social Media',
    githubUrl: 'https://github.com/Rajanbro/Linkedin_Post',
    icon: ExternalLink,
    featured: false
  },
  {
    id: 19,
    title: 'PhoneCall-Twilio',
    description: 'Twilio-based phone call automation system for business communication.',
    technologies: ['Python', 'Twilio', 'Phone API', 'Automation'],
    category: 'Communication',
    githubUrl: 'https://github.com/Rajanbro/PhoneCall-Twilio',
    icon: ExternalLink,
    featured: false
  },
  {
    id: 20,
    title: 'Messaging-SMS-Twilio',
    description: 'SMS messaging automation using Twilio API for business communication.',
    technologies: ['Python', 'Twilio', 'SMS API', 'Automation'],
    category: 'Communication',
    githubUrl: 'https://github.com/Rajanbro/Messaging-SMS-Twilio',
    icon: ExternalLink,
    featured: false
  },
  {
    id: 21,
    title: 'Email_Sender',
    description: 'Automated email sending system with template management and scheduling capabilities.',
    technologies: ['Python', 'Email API', 'Automation', 'Templates'],
    category: 'Communication',
    githubUrl: 'https://github.com/Rajanbro/Email_Sender',
    icon: ExternalLink,
    featured: false
  },
  {
    id: 22,
    title: 'ML-Sent_analysis',
    description: 'Machine learning-based sentiment analysis tool for text classification and analysis.',
    technologies: ['Python', 'Machine Learning', 'NLP', 'Sentiment Analysis'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Rajanbro/ML-Sent_analysis',
    icon: Brain,
    featured: false
  },
  {
    id: 23,
    title: 'Last-mail-access',
    description: 'Email access and management tool for retrieving and processing email data.',
    technologies: ['Python', 'Email API', 'Data Processing'],
    category: 'Communication',
    githubUrl: 'https://github.com/Rajanbro/Last-mail-access',
    icon: ExternalLink,
    featured: false
  },
  {
    id: 24,
    title: 'GenAI-bot-WebScrap',
    description: 'Generative AI bot with web scraping capabilities for intelligent data collection and processing.',
    technologies: ['Python', 'GenAI', 'Web Scraping', 'AI'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Rajanbro/GenAI-bot-WebScrap',
    icon: Bot,
    featured: false
  },
  {
    id: 25,
    title: 'FullStack',
    description: 'Full-stack web application with modern architecture and comprehensive functionality.',
    technologies: ['Full Stack', 'Web Development', 'Modern Architecture'],
    category: 'Web Dev',
    githubUrl: 'https://github.com/Rajanbro/FullStack',
    icon: ExternalLink,
    featured: false
  },
  {
    id: 26,
    title: 'AI-Doc-Summarizer-Flask',
    description: 'AI-powered document summarizer built with Flask for intelligent text processing.',
    technologies: ['Python', 'Flask', 'AI', 'Document Processing'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Rajanbro/AI-Doc-Summarizer-Flask',
    icon: Brain,
    featured: false
  },
  {
    id: 27,
    title: 'EmailSend-JS',
    description: 'JavaScript-based email sending application with modern interface and functionality.',
    technologies: ['JavaScript', 'Email API', 'Web Development'],
    category: 'Web Dev',
    githubUrl: 'https://github.com/Rajanbro/EmailSend-JS',
    icon: ExternalLink,
    featured: false
  },
  {
    id: 28,
    title: 'DeepLearningBOT',
    description: 'Deep learning chatbot with advanced neural network architecture for intelligent conversations.',
    technologies: ['Python', 'Deep Learning', 'Neural Networks', 'AI'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Rajanbro/DeepLearningBOT',
    icon: Bot,
    featured: false
  },
  {
    id: 29,
    title: 'Streamlit-Automation-Panel',
    description: 'Automation panel built with Streamlit for managing and controlling various automated processes.',
    technologies: ['Python', 'Streamlit', 'Automation', 'Dashboard'],
    category: 'Automation',
    githubUrl: 'https://github.com/Rajanbro/Streamlit-Automation-Panel',
    icon: BarChart3,
    featured: false
  },
  {
    id: 30,
    title: 'Automation-Panel-Gradio',
    description: 'Automation panel using Gradio for creating interactive machine learning interfaces.',
    technologies: ['Python', 'Gradio', 'Automation', 'ML Interface'],
    category: 'Automation',
    githubUrl: 'https://github.com/Rajanbro/Automation-Panel-Gradio',
    icon: BarChart3,
    featured: false
  },
  {
    id: 31,
    title: 'Agentic-AI',
    description: 'Agentic AI system with autonomous decision-making capabilities and intelligent behavior.',
    technologies: ['Python', 'AI', 'Autonomous Systems', 'Machine Learning'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/Rajanbro/Agentic-AI',
    icon: Bot,
    featured: false
  },
  {
    id: 32,
    title: 'Dockerized-Spam',
    description: 'Dockerized spam detection system with containerized deployment and scalable architecture.',
    technologies: ['Python', 'Docker', 'Machine Learning', 'DevOps'],
    category: 'DevOps',
    githubUrl: 'https://github.com/Rajanbro/Dockerized-Spam',
    icon: Shield,
    featured: false
  },
  {
    id: 33,
    title: 'Moon_Gravity',
    description: 'Physics simulation project for calculating and visualizing moon gravity effects.',
    technologies: ['Python', 'Physics', 'Simulation', 'Gravity'],
    category: 'Game App',
    githubUrl: 'https://github.com/Rajanbro/Moon_Gravity',
    icon: BarChart3,
    featured: false
  }
];

const categories: string[] = [
  'AI/ML', 'Machine Learning', 'Web Dev', 'DevOps', 'Data Science', 'Data Visualization', 'Fintech', 'Business Intelligence', 'Communication', 'Social Media', 'Automation', 'Science'
];

const getIconColor = (category: string) => {
  switch (category) {
    case 'AI/ML':
    case 'Machine Learning':
      return 'text-[#00d4ff]';
    case 'Web Dev':
      return 'text-[#ff0080]';
    case 'DevOps':
      return 'text-[#00ff88]';
    case 'Data Science':
    case 'Data Visualization':
      return 'text-[#00d4ff]';
    case 'Fintech':
      return 'text-[#ff0080]';
    case 'Business Intelligence':
      return 'text-[#00ff88]';
    case 'Communication':
      return 'text-[#00d4ff]';
    case 'Social Media':
      return 'text-[#ff0080]';
    case 'Automation':
      return 'text-[#00ff88]';
    case 'Science':
      return 'text-[#00d4ff]';
    default:
      return 'text-[#00d4ff]';
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'AI/ML':
    case 'Machine Learning':
      return 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/20';
    case 'Web Dev':
      return 'bg-[#ff0080]/10 text-[#ff0080] border-[#ff0080]/20';
    case 'DevOps':
      return 'bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/20';
    case 'Data Science':
    case 'Data Visualization':
      return 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/20';
    case 'Fintech':
      return 'bg-[#ff0080]/10 text-[#ff0080] border-[#ff0080]/20';
    case 'Business Intelligence':
      return 'bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/20';
    case 'Communication':
      return 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/20';
    case 'Social Media':
      return 'bg-[#ff0080]/10 text-[#ff0080] border-[#ff0080]/20';
    case 'Automation':
      return 'bg-[#00ff88]/10 text-[#00ff88] border-[#00ff88]/20';
    case 'Science':
      return 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/20';
    default:
      return 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/20';
  }
};

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setShowFilter(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const clearFilters = () => setSelectedCategories([]);

  const filteredProjects = useMemo(() => {
    if (selectedCategories.length === 0) return projects;
    return projects.filter(project => selectedCategories.includes(project.category));
  }, [selectedCategories]);

  const projectsToShow = showAllProjects ? filteredProjects : filteredProjects.slice(0, 9);

  const toggleShowAll = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a]">
      <style>{borderGlowAnimation}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">
            My Projects
          </h2>
          <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto leading-relaxed font-medium">
            A collection of innovative projects showcasing my expertise in AI/ML, data science, and full-stack development
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 items-center justify-center relative w-full flex-wrap">
          <div className="flex w-full md:w-auto items-center gap-2 flex-wrap">
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 rounded-xl bg-[#1a1a1a] border-2 border-[#00d4ff] text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent shadow-lg text-base transition-all duration-300 pr-14"
              />
              <button
                type="button"
                onClick={() => {/* trigger search if needed */}}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
                tabIndex={0}
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
            <div className="relative z-50" ref={filterRef}>
              <button
                type="button"
                onClick={() => setShowFilter((v) => !v)}
                className={`px-6 py-3 ml-2 bg-gradient-to-r from-[#ff0080] to-[#e60073] text-white font-semibold rounded-xl border-2 border-[#ff0080] shadow-lg hover:shadow-xl transition-all duration-300 text-base flex items-center gap-2 relative !opacity-100 hover:opacity-90 ${selectedCategories.length > 0 ? 'ring-2 ring-[#ff0080]' : ''}`}
                tabIndex={0}
              >
                <Filter className="w-5 h-5 text-white" />
                <span className="text-white">Filter</span>
                {selectedCategories.length > 0 && (
                  <span className="ml-2 bg-[#1a1a1a] text-[#ff0080] rounded-full px-2 py-0.5 text-xs font-bold border border-[#ff0080]">{selectedCategories.length}</span>
                )}
              </button>
              {showFilter && (
                <div className="absolute right-0 mt-2 w-64 bg-[#1a1a1a] border-2 border-[#333333] rounded-xl shadow-2xl z-[9999] p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">Filter by Category</span>
                    <button onClick={clearFilters} className="text-xs text-[#ff0080] hover:underline">Clear</button>
                  </div>
                  <div className="max-h-60 overflow-y-auto space-y-2">
                    {categories.map((cat: string) => (
                      <label key={cat} className="flex items-center gap-2 cursor-pointer text-[#b0b0b0] hover:text-white">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat)}
                          onChange={() => handleCategoryChange(cat)}
                          className="accent-[#00d4ff] w-4 h-4 rounded"
                        />
                        <span>{cat}</span>
                      </label>
                    ))}
                  </div>
                  <button onClick={() => setShowFilter(false)} className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00d4ff] to-[#00b8e6] text-white rounded-xl font-semibold transition-all duration-300 border border-[#00d4ff]">
                    <X className="w-4 h-4" /> Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToShow.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="bg-[#1a1a1a] rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,212,255,0.1)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.2)] transition-all duration-300 border border-[#333333] hover:border-[#00d4ff]/30 group"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center mb-4 shadow-[0_8px_32px_rgba(0,212,255,0.1)]">
                    <div className={`w-8 h-8 ${getIconColor(project.category)}`}>
                      <Icon className="w-full h-full" />
                    </div>
                  </div>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00d4ff] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#b0b0b0] mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#1a1a1a] text-[#b0b0b0] text-sm rounded-lg border border-[#333333] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-[#1a1a1a] text-[#b0b0b0] text-sm rounded-lg border border-[#333333] font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#00d4ff] hover:text-[#00b8e6] font-semibold transition-colors duration-300 group/link"
                  >
                    <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                    <span>View Code</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-[#b0b0b0] hover:text-[#212529] font-semibold transition-colors duration-300 group/link"
                    >
                      <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Toggle Show All/Less Button */}
        {filteredProjects.length > 9 && (
          <div className="text-center mt-12">
            <button 
              onClick={toggleShowAll}
              className="px-12 py-5 bg-gradient-to-r from-[#ff0080] to-[#e60073] text-white font-semibold rounded-xl shadow-[0_8px_32px_rgba(255,0,128,0.3)] hover:shadow-[0_12px_40px_rgba(255,0,128,0.5)] transform hover:scale-105 transition-all duration-300 border-2 border-[#ff0080] hover:border-[#ff0080]/60 text-2xl"
              style={{
                boxShadow: '0 0 20px rgba(255, 0, 128, 0.3), 0 0 40px rgba(255, 0, 128, 0.1)',
                animation: 'glow 2s ease-in-out infinite alternate, borderGlow 1.5s ease-in-out infinite'
              }}
            >
              {showAllProjects ? 'Show Less' : `Show All Projects (${filteredProjects.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;