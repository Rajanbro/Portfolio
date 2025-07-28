import React from 'react';
import {
  Code,
  Database,
  Cloud,
  Brain,
  Cpu,
  Shield,
  Zap,
  GitBranch,
  Monitor,
  Smartphone,
  Globe,
  BarChart3,
  Mail
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: 'blue' | 'purple';
}

const skillCategories = {
  'Programming Languages/Tools': [
    { name: 'Python', icon: <Code className="w-6 h-6" />, category: 'blue' as const },
    { name: 'C', icon: <Code className="w-6 h-6" />, category: 'blue' as const },
    { name: 'Docker', icon: <Cloud className="w-6 h-6" />, category: 'purple' as const },
    { name: 'Power BI', icon: <BarChart3 className="w-6 h-6" />, category: 'purple' as const },
    { name: 'GitHub/Git', icon: <GitBranch className="w-6 h-6" />, category: 'purple' as const }
  ],
  'Machine Learning': [
    { name: 'TensorFlow', icon: <Brain className="w-6 h-6" />, category: 'purple' as const },
    { name: 'PyTorch', icon: <Brain className="w-6 h-6" />, category: 'purple' as const },
    { name: 'Scikit-learn', icon: <Brain className="w-6 h-6" />, category: 'purple' as const },
    { name: 'OpenCV', icon: <Brain className="w-6 h-6" />, category: 'purple' as const },
    { name: 'NLP', icon: <Brain className="w-6 h-6" />, category: 'purple' as const },
    { name: 'Computer Vision', icon: <Brain className="w-6 h-6" />, category: 'purple' as const }
  ],
  'Data Science': [
    { name: 'Pandas', icon: <BarChart3 className="w-6 h-6" />, category: 'purple' as const },
    { name: 'NumPy', icon: <BarChart3 className="w-6 h-6" />, category: 'purple' as const },
    { name: 'Matplotlib', icon: <BarChart3 className="w-6 h-6" />, category: 'purple' as const },
    { name: 'Seaborn', icon: <BarChart3 className="w-6 h-6" />, category: 'purple' as const },
    { name: 'Jupyter', icon: <BarChart3 className="w-6 h-6" />, category: 'purple' as const },
    { name: 'Data Analysis', icon: <BarChart3 className="w-6 h-6" />, category: 'purple' as const }
  ]
};

const getColorClasses = (category: 'blue' | 'purple') => {
  if (category === 'blue') {
    return {
      bg: 'from-[#00d4ff] to-[#00b8e6]',
      text: 'text-[#00d4ff]',
      border: 'border-[#00d4ff]',
      hover: 'hover:from-[#00b8e6] hover:to-[#0099cc]',
      bgLight: 'bg-[#00d4ff]/10',
      borderLight: 'border-[#00d4ff]/20'
    };
  } else {
    return {
      bg: 'from-[#ff0080] to-[#e60073]',
      text: 'text-[#ff0080]',
      border: 'border-[#ff0080]',
      hover: 'hover:from-[#e60073] hover:to-[#cc0066]',
      bgLight: 'bg-[#ff0080]/10',
      borderLight: 'border-[#ff0080]/20'
    };
  }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">
            Skills & Expertise
          </h2>
          <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto leading-relaxed font-medium">
            A comprehensive toolkit for building intelligent, scalable, and innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-[#1a1a1a] rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,212,255,0.1)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.2)] transition-all duration-300 border border-[#333333] group">
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:drop-shadow-[0_0_10px_rgba(0,212,255,0.3)] transition-all duration-300">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => {
                  const colors = getColorClasses(skill.category);
            return (
                    <div
                      key={skill.name}
                      className="flex items-center space-x-3 p-3 rounded-xl bg-[#1a1a1a] border border-[#333333] hover:border-[#00d4ff]/30 transition-all duration-300 group/skill"
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${colors.bg} shadow-[0_8px_32px_rgba(0,212,255,0.1)] group-hover/skill:shadow-[0_12px_40px_rgba(0,212,255,0.2)] transition-all duration-300`}>
                        {React.cloneElement(skill.icon as React.ReactElement, { className: 'w-5 h-5 text-white' })}
                      </div>
                      <span className={`text-sm font-semibold ${colors.text} group-hover/skill:drop-shadow-[0_0_10px_rgba(0,212,255,0.5)] transition-all duration-300`}>
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Highlights */}
        {/* Skill Highlights section removed as per user request */}
      </div>
    </section>
  );
};

export default Skills;