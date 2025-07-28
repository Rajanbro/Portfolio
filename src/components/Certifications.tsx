import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  year: string;
  category: 'blue' | 'purple';
  url?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    category: "blue",
    url: "https://aws.amazon.com/certification/"
  },
  {
    id: 2,
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2024",
    category: "purple",
    url: "https://www.tensorflow.org/certificate"
  },
  {
    id: 3,
    title: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    year: "2024",
    category: "blue",
    url: "https://learn.microsoft.com/en-us/certifications/azure-ai-fundamentals/"
  },
  {
    id: 4,
    title: "Docker Certified Associate",
    issuer: "Docker",
    year: "2024",
    category: "purple",
    url: "https://www.docker.com/certification/"
  },
  {
    id: 5,
    title: "Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    year: "2024",
    category: "blue",
    url: "https://www.cncf.io/certification/cka/"
  },
  {
    id: 6,
    title: "Data Science Professional Certificate",
    issuer: "IBM",
    year: "2024",
    category: "purple",
    url: "https://www.ibm.com/training/data-science"
  }
];

const getColorClasses = (category: 'blue' | 'purple') => {
  if (category === 'blue') {
    return {
      text: 'text-[#00d4ff]',
      border: 'border-[#00d4ff]',
      hover: 'hover:text-[#00b8e6]',
      bgLight: 'bg-[#00d4ff]/10',
      borderLight: 'border-[#00d4ff]/20'
    };
  } else {
    return {
      text: 'text-[#ff0080]',
      border: 'border-[#ff0080]',
      hover: 'hover:text-[#e60073]',
      bgLight: 'bg-[#ff0080]/10',
      borderLight: 'border-[#ff0080]/20'
    };
  }
};

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">
            Certifications & Training
          </h2>
          <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto leading-relaxed font-medium">
            Professional certifications and continuous learning achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => {
            const colors = getColorClasses(cert.category);
            return (
              <div
                key={cert.id}
                className="group bg-[#1a1a1a] rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,212,255,0.1)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.2)] transition-all duration-300 border border-[#333333] hover:border-[#00d4ff]/30"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-xl ${colors.bgLight} border ${colors.borderLight} shadow-[0_8px_32px_rgba(0,212,255,0.1)]`}>
                    <Award className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${colors.borderLight} ${colors.text}`}>
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className={`text-lg font-semibold ${colors.text} mb-4`}>
                  {cert.issuer}
                </p>

                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 ${colors.text} ${colors.hover} font-semibold transition-colors duration-300 group/link`}
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* Continuous Learning Journey */}
        <div className="mt-20">
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,212,255,0.1)] border border-[#333333]">
            <h3 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">
              Continuous Learning Journey
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#00d4ff] to-[#00b8e6] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,212,255,0.2)]">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">6+</h4>
                <p className="text-[#b0b0b0] font-medium">Certifications</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#ff0080] to-[#e60073] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(255,0,128,0.2)]">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">2024</h4>
                <p className="text-[#b0b0b0] font-medium">Active Year</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#00ff88] to-[#00cc6a] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,255,136,0.2)]">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Ongoing</h4>
                <p className="text-[#b0b0b0] font-medium">Learning Path</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#00d4ff] to-[#ff0080] rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,212,255,0.2)]">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">100%</h4>
                <p className="text-[#b0b0b0] font-medium">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;