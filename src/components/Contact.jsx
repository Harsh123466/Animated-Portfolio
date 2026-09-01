import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Copy, Check, Send, Github, Linkedin, Code2, MessageSquare, Sparkles, ArrowUpRight } from 'lucide-react';

const Contact = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'AI/ML Engineering Role',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    if (onShowToast) {
      onShowToast(`Copied ${personalInfo.email} to clipboard!`, 'success');
    }
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      if (onShowToast) onShowToast('Please fill in all required fields.', 'error');
      return;
    }

    // Construct mailto link with prefilled subject and message body
    const subject = encodeURIComponent(`[Portfolio Contact] ${formData.role} - from ${formData.name}`);
    const body = encodeURIComponent(`Hi Harsh,\n\nName: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.role}\n\nMessage:\n${formData.message}\n\nSent from your portfolio website.`);
    
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');

    setSubmitted(true);
    if (onShowToast) {
      onShowToast('Opening email client with your message!', 'success');
    }
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-12 border-t border-border-light relative">
      
      {/* Ambient background glow */}
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-neon-emerald/5 blur-[180px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6 text-slate-400 text-xs font-mono tracking-[0.15em] uppercase">
          <span className="w-6 h-[1px] bg-neon-emerald"></span>
          <span>Contact & Opportunities</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-slate-100 leading-[1.05]">
                Let's <span className="text-neon-emerald italic font-serif">connect.</span>
              </h2>
              <p className="text-slate-300 mt-6 text-base md:text-lg font-light leading-relaxed">
                Direct line to Harsh Adhana. Open for AI/ML engineering positions, agentic systems development, and high-impact software opportunities.
              </p>
            </div>

            {/* Quick Email Copy Box */}
            <div className="p-5 rounded-2xl bg-surface-200/90 border border-border-light hover:border-neon-emerald/40 transition-all">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                Primary Email
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm sm:text-base font-mono font-semibold text-slate-100 hover:text-neon-emerald transition-colors truncate"
                >
                  {personalInfo.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-surface-100 border border-border-light hover:border-neon-emerald text-slate-300 hover:text-neon-emerald transition-all shrink-0 flex items-center gap-1.5 text-xs font-mono"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-neon-emerald" /> : <Copy className="w-4 h-4" />}
                  <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Direct Social Links */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Professional Channels
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-surface-100/70 border border-border-light hover:border-neon-emerald flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-slate-300 group-hover:text-neon-emerald transition-colors" />
                    <div>
                      <div className="text-xs font-bold text-slate-200 group-hover:text-white">GitHub</div>
                      <div className="text-[10px] font-mono text-slate-400">@Harsh123466</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-neon-emerald group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-surface-100/70 border border-border-light hover:border-neon-cyan flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-slate-300 group-hover:text-neon-cyan transition-colors" />
                    <div>
                      <div className="text-xs font-bold text-slate-200 group-hover:text-white">LinkedIn</div>
                      <div className="text-[10px] font-mono text-slate-400">harsh-adhana</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-neon-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-surface-100/70 border border-border-light hover:border-amber-400 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <Code2 className="w-4 h-4 text-amber-400 transition-colors" />
                    <div>
                      <div className="text-xs font-bold text-slate-200 group-hover:text-white">LeetCode</div>
                      <div className="text-[10px] font-mono text-slate-400">@harshadhana2210</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* SLA Badge */}
            <div className="flex items-center gap-3 p-3.5 rounded-lg bg-surface-100/40 border border-border-light text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-neon-emerald animate-pulse"></span>
              <span>Guaranteed response within 24 hours</span>
            </div>

          </div>

          {/* Right Column: Briefing Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-7 sm:p-10 rounded-2xl border border-border-light shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-6 border-b border-border-light mb-8">
                <div>
                  <span className="text-xs font-mono text-neon-emerald uppercase tracking-widest block">
                    PROJECT BRIEFING / INQUIRY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mt-1">
                    Send a message
                  </h3>
                </div>
                <div className="p-2.5 rounded-xl bg-surface-100 border border-border-light text-neon-emerald">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-neon-emerald/10 border border-neon-emerald/30 text-neon-emerald flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-100">Ready to Send!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Your message draft has been prepared. If your email client did not launch automatically, write directly to{' '}
                    <a href={`mailto:${personalInfo.email}`} className="text-neon-emerald underline font-mono">
                      {personalInfo.email}
                    </a>
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono text-slate-400 hover:text-slate-200 underline pt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block">
                        Your Name <span className="text-neon-emerald">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full bg-surface-100 border border-border-light rounded-lg p-3.5 text-slate-100 placeholder:text-slate-600 focus:border-neon-emerald focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block">
                        Your Email <span className="text-neon-emerald">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full bg-surface-100 border border-border-light rounded-lg p-3.5 text-slate-100 placeholder:text-slate-600 focus:border-neon-emerald focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Purpose / Role Selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block">
                      Topic / Opportunity Type
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-surface-100 border border-border-light rounded-lg p-3.5 text-slate-100 focus:border-neon-emerald focus:outline-none transition-colors"
                    >
                      <option value="AI/ML Engineering Role">Full-Time AI / ML Engineering Role</option>
                      <option value="Generative AI / Agentic Project">Generative AI / Agentic Architecture Project</option>
                      <option value="Software Engineer Position">Software Engineer (SDE) Position</option>
                      <option value="Research & Open Source Collaboration">Research & Open Source Collaboration</option>
                      <option value="Other Inquiry">Other Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-slate-300 uppercase tracking-wider block">
                      Project Brief / Message <span className="text-neon-emerald">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the opportunity, team context, or project scope..."
                      className="w-full bg-surface-100 border border-border-light rounded-lg p-3.5 text-slate-100 placeholder:text-slate-600 focus:border-neon-emerald focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-neon-emerald text-slate-950 font-bold font-mono text-xs uppercase tracking-wider hover:bg-neon-lime transition-all duration-200 shadow-neon-emerald flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Briefing →</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
