import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">
            Get In Touch
          </h2>
          <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto leading-relaxed font-medium">
            Ready to collaborate on exciting projects? Let's connect and build something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,212,255,0.1)] border border-[#333333]">
              <h3 className="text-3xl font-bold text-white mb-8 drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-[#00d4ff]/10 rounded-xl border border-[#00d4ff]/20 shadow-[0_8px_32px_rgba(0,212,255,0.1)]">
                    <Mail className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <div>
                    <p className="text-[#b0b0b0] font-medium">Email</p>
                    <a 
                      href="mailto:rajankumawat123@gmail.com" 
                      className="text-[#00d4ff] hover:text-[#00b8e6] font-semibold transition-colors duration-300"
                    >
                      rajankumawat123@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-[#ff0080]/10 rounded-xl border border-[#ff0080]/20 shadow-[0_8px_32px_rgba(255,0,128,0.1)]">
                    <Phone className="w-6 h-6 text-[#ff0080]" />
                  </div>
                  <div>
                    <p className="text-[#b0b0b0] font-medium">Phone</p>
                    <p className="text-white font-semibold">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-[#00ff88]/10 rounded-xl border border-[#00ff88]/20 shadow-[0_8px_32px_rgba(0,255,136,0.1)]">
                    <MapPin className="w-6 h-6 text-[#00ff88]" />
                  </div>
                  <div>
                    <p className="text-[#b0b0b0] font-medium">Location</p>
                    <p className="text-white font-semibold">Jaipur, Rajasthan, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-[#333333]">
                <h4 className="text-xl font-bold text-white mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Rajanbro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-[#1a1a1a] hover:bg-[#00d4ff] rounded-full border border-[#333333] hover:border-[#00d4ff] text-[#00d4ff] hover:text-white transition-all duration-300 shadow-[0_8px_32px_rgba(0,212,255,0.1)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.3)] hover:scale-110"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/rajan-kumawat-90aa39286"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-[#1a1a1a] hover:bg-[#00d4ff] rounded-full border border-[#333333] hover:border-[#00d4ff] text-[#00d4ff] hover:text-white transition-all duration-300 shadow-[0_8px_32px_rgba(0,212,255,0.1)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.3)] hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-8 pt-8 border-t border-[#333333]">
                <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-[#00d4ff] to-[#ff0080] rounded-full shadow-[0_8px_32px_rgba(0,212,255,0.2)]">
                  <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse drop-shadow-[0_0_10px_rgba(0,255,136,0.5)]"></div>
                  <span className="text-white font-semibold">Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1a1a1a] rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,212,255,0.1)] border border-[#333333]">
            <h3 className="text-3xl font-bold text-white mb-8 drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">
              Send Message
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-[#00ff88] mx-auto mb-4 drop-shadow-[0_0_20px_rgba(0,255,136,0.5)]" />
                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-[#b0b0b0]">Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-[#0a0a0a] border border-[#333333] rounded-xl text-white placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent shadow-[0_8px_32px_rgba(0,212,255,0.1)] transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-[#0a0a0a] border border-[#333333] rounded-xl text-white placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent shadow-[0_8px_32px_rgba(0,212,255,0.1)] transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-[#0a0a0a] border border-[#333333] rounded-xl text-white placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent shadow-[0_8px_32px_rgba(0,212,255,0.1)] transition-all duration-300"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-[#0a0a0a] border border-[#333333] rounded-xl text-white placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-[#00d4ff] focus:border-transparent shadow-[0_8px_32px_rgba(0,212,255,0.1)] transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#00b8e6] text-white font-semibold rounded-lg shadow-[0_8px_32px_rgba(0,212,255,0.3)] hover:shadow-[0_12px_40px_rgba(0,212,255,0.5)] transform hover:scale-105 transition-all duration-300 border border-[#00d4ff]/30 flex items-center justify-center space-x-3 text-lg"
                >
                  <Send className="w-6 h-6" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;