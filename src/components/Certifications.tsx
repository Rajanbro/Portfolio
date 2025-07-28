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
    title: "EXIN Certificate AI",
    issuer: "EXIN",
    year: "2024",
    category: "blue",
    url: "https://drive.google.com/file/d/13FHqVZS0QQFNNDGNd-Yz5z3svuOnvDqe/view?usp=drive_link"
  },
  {
    id: 2,
    title: "LLMs and RAG Certificate Hidevs",
    issuer: "Hidevs",
    year: "2024",
    category: "blue",
    url: "https://drive.google.com/file/d/19i3LUeZNb2IKt9wqmLFTvZrcDCBm7oJc/view?usp=drive_link"
  },
  {
    id: 3,
    title: "Digital Productivity Certificate",
    issuer: "Unknown",
    year: "2024",
    category: "blue",
    url: "https://drive.google.com/file/d/1ETqGKP7_nqBNXBhdbyXRAHNARGXhdgSg/view?usp=drive_link"
  },
  {
    id: 4,
    title: "NLPE MedVision Certificate",
    issuer: "MedVision",
    year: "2024",
    category: "blue",
    url: "https://drive.google.com/file/d/13C7wEadcGjLiKamq4LR3OHeqa-06L2dG/view?usp=drive_link"
  },
  {
    id: 5,
    title: "NLPE Certificate Smart Education",
    issuer: "Smart Education",
    year: "2024",
    category: "blue",
    url: "https://drive.google.com/file/d/137ibWgXT9fagpkZMeHquTFP3EMAIE_vp/view?usp=drive_link"
  },
  {
    id: 6,
    title: "Research Spark Certificate",
    issuer: "Research Spark",
    year: "2024",
    category: "blue",
    url: "https://drive.google.com/file/d/13NJLRROGFrnHw7mwtuW2E_wJbm7G-OHa/view?usp=drive_link"
  },
  {
    id: 7,
    title: "Edureka Workshop Certificate",
    issuer: "Edureka",
    year: "2024",
    category: "blue",
    url: "https://drive.google.com/file/d/13DTokyP83Fc1z03-c2lOv_jfK7Puq2Z4/view?usp=drive_link"
  },
  {
    id: 8,
    title: "ChatGPT & AI Tools Workshop by be10x",
    issuer: "be10x",
    year: "2024",
    category: "blue",
    url: "https://drive.google.com/file/d/13IqnHhuHgEH4kAj7hfmFKrcIyZpjKQPD/view?usp=drive_link"
  },
  {
    id: 9,
    title: "IBM Network Security & Database Vulnerabilities",
    issuer: "IBM",
    year: "2024",
    category: "blue",
    url: "https://drive.google.com/file/d/13NX8s0adZIn0inI3eMvuNo6vqhmYCjqb/view?usp=drive_link"
  },
  {
    id: 10,
    title: "Hack-O-Shop Ethical Hacking",
    issuer: "Hack-O-Shop",
    year: "2024",
    category: "blue",
    url: "https://drive.google.com/file/d/1KVq3vrQxpghU0Hd9OXNzDEY-Nffr-liN/view?usp=drive_link"
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
      </div>
    </section>
  );
};

export default Certifications;