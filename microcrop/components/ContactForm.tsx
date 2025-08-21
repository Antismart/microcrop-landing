"use client";

import React, { useState } from 'react';
import { Users, CheckCircle, ArrowRight } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  role: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [contactFormData, setContactFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    subject: '',
    message: ''
  });
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState<boolean>(false);
  const [isContactSubmitting, setIsContactSubmitting] = useState<boolean>(false);

  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsContactSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsContactFormSubmitted(true);
      setIsContactSubmitting(false);
      // Here you would typically send the data to your backend
      console.log('Contact form submitted:', contactFormData);
    }, 2000);
  };

  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full py-20 bg-gradient-to-br from-slate-900/50 via-emerald-900/20 to-green-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Let's Start a{' '}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Whether you're a farmer, partner, investor, or just curious about our mission - we'd love to hear from you.
          </p>
        </div>

        <div className="bg-gray-900/95 rounded-3xl border border-white/20 p-8 shadow-2xl shadow-black/20">
          {!isContactFormSubmitted ? (
            <form onSubmit={handleContactFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-emerald-200 font-medium tracking-wide text-sm">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={contactFormData.name}
                    onChange={handleContactInputChange}
                    required
                    className="w-full p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:border-emerald-400/50 focus:outline-none transition-all duration-300 hover:border-white/30"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-emerald-200 font-medium tracking-wide text-sm">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={contactFormData.email}
                    onChange={handleContactInputChange}
                    required
                    className="w-full p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:border-emerald-400/50 focus:outline-none transition-all duration-300 hover:border-white/30"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-emerald-200 font-medium tracking-wide text-sm">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={contactFormData.phone}
                    onChange={handleContactInputChange}
                    className="w-full p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:border-emerald-400/50 focus:outline-none transition-all duration-300 hover:border-white/30"
                    placeholder="+254 700 000 000"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-emerald-200 font-medium tracking-wide text-sm">Organization Type</label>
                  <select
                    name="organization"
                    value={contactFormData.organization}
                    onChange={handleContactInputChange}
                    className="w-full p-4 bg-gray-800 border border-gray-600 rounded-xl text-white focus:border-emerald-400 focus:outline-none"
                  >
                    <option value="">Select organization type</option>
                    <option value="farm">Small Farm</option>
                    <option value="cooperative">Farmers Cooperative</option>
                    <option value="agribusiness">Agribusiness Company</option>
                    <option value="fintech">Fintech/Financial Services</option>
                    <option value="insurance">Insurance Company</option>
                    <option value="bank">Bank/MFI</option>
                    <option value="tech">Technology Company</option>
                    <option value="ngo">NGO/Development Org</option>
                    <option value="government">Government Agency</option>
                    <option value="university">University/Research</option>
                    <option value="fund">Investment Fund</option>
                    <option value="consultant">Consultant/Advisory</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-emerald-200 font-medium tracking-wide text-sm">Your Role *</label>
                  <select
                    name="role"
                    value={contactFormData.role}
                    onChange={handleContactInputChange}
                    required
                    className="w-full p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white focus:border-emerald-400/50 focus:outline-none transition-all duration-300 hover:border-white/30 cursor-pointer appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+')] bg-no-repeat bg-right-4 bg-center"
                  >
                    <option value="" className="bg-gray-800 text-white">Select your role</option>
                    <option value="farmer" className="bg-gray-800 text-white">👨‍🌾 Farmer</option>
                    <option value="cooperative-leader" className="bg-gray-800 text-white">🤝 Cooperative Leader</option>
                    <option value="agribusiness-exec" className="bg-gray-800 text-white">🏢 Agribusiness Executive</option>
                    <option value="fintech-partner" className="bg-gray-800 text-white">💳 Fintech Partner</option>
                    <option value="investor" className="bg-gray-800 text-white">💰 Investor</option>
                    <option value="ngo-program" className="bg-gray-800 text-white">🌍 NGO Program Manager</option>
                    <option value="government" className="bg-gray-800 text-white">🏛️ Government Official</option>
                    <option value="researcher" className="bg-gray-800 text-white">🔬 Researcher/Academic</option>
                    <option value="journalist" className="bg-gray-800 text-white">📰 Journalist/Media</option>
                    <option value="consultant" className="bg-gray-800 text-white">💼 Consultant</option>
                    <option value="developer" className="bg-gray-800 text-white">👨‍💻 Developer/Tech</option>
                    <option value="other" className="bg-gray-800 text-white">❓ Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-emerald-200 font-medium tracking-wide text-sm">Subject *</label>
                  <select
                    name="subject"
                    value={contactFormData.subject}
                    onChange={handleContactInputChange}
                    required
                    className="w-full p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white focus:border-emerald-400/50 focus:outline-none transition-all duration-300 hover:border-white/30 cursor-pointer appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+')] bg-no-repeat bg-right-4 bg-center"
                  >
                    <option value="" className="bg-gray-800 text-white">What would you like to discuss?</option>
                    <option value="partnership" className="bg-gray-800 text-white">🤝 Partnership Opportunities</option>
                    <option value="investment" className="bg-gray-800 text-white">💰 Investment & Funding</option>
                    <option value="integration" className="bg-gray-800 text-white">🔧 Technical Integration</option>
                    <option value="distribution" className="bg-gray-800 text-white">📦 Distribution Partnership</option>
                    <option value="pilot" className="bg-gray-800 text-white">🚀 Pilot Program</option>
                    <option value="research" className="bg-gray-800 text-white">📊 Research Collaboration</option>
                    <option value="media" className="bg-gray-800 text-white">📺 Media & Press Inquiry</option>
                    <option value="onboarding" className="bg-gray-800 text-white">👥 Farmer Onboarding</option>
                    <option value="support" className="bg-gray-800 text-white">💬 General Support</option>
                    <option value="feedback" className="bg-gray-800 text-white">💡 Feedback & Suggestions</option>
                    <option value="demo" className="bg-gray-800 text-white">🎮 Request Demo</option>
                    <option value="other" className="bg-gray-800 text-white">❓ Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-emerald-200 font-medium tracking-wide text-sm">Message *</label>
                <textarea
                  name="message"
                  value={contactFormData.message}
                  onChange={handleContactInputChange}
                  required
                  rows={5}
                  className="w-full p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-white/50 focus:border-emerald-400/50 focus:outline-none transition-all duration-300 hover:border-white/30 resize-none"
                  placeholder="Tell us more about your inquiry, goals, or how we can work together..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isContactSubmitting}
                  className="w-full group bg-gradient-to-r from-emerald-400/90 to-green-500/90 backdrop-blur-xl text-black px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-400/40 transition-all duration-500 flex items-center justify-center space-x-3 border border-white/20 tracking-wide hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isContactSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Users size={24} className="group-hover:rotate-12 transition-transform duration-500" />
                      <span>Start Conversation</span>
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center pt-2">
                <p className="text-sm text-white/60">
                  We typically respond within 24 hours. For urgent matters, include your phone number.
                </p>
              </div>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-black" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Message Received!</h3>
              <p className="text-xl text-emerald-200 mb-6">
                Thank you for reaching out. Our team will review your message and get back to you soon.
              </p>
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 max-w-md mx-auto">
                <h4 className="text-lg font-bold text-white mb-3">What Happens Next?</h4>
                <ul className="text-left text-white/80 space-y-2 text-sm">
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={16} className="text-emerald-400" />
                    <span>Message forwarded to relevant team</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={16} className="text-emerald-400" />
                    <span>Initial review within 24 hours</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={16} className="text-emerald-400" />
                    <span>Follow-up call/email scheduled</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle size={16} className="text-emerald-400" />
                    <span>Next steps discussion</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 space-y-4">
                <p className="text-white/70 text-sm">Need immediate assistance?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:hello@microcrop.finance" className="text-emerald-300 hover:text-emerald-200 transition-colors font-medium">
                    hello@microcrop.finance
                  </a>
                  <a href="https://wa.me/254700000000" className="text-emerald-300 hover:text-emerald-200 transition-colors font-medium">
                    WhatsApp: +254 700 000 000
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}