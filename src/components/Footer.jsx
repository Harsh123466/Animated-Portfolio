import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Code2, Mail, Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border-light bg-[#05070b] text-slate-400 text-xs font-mono py-16 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-border-light/60">
          
          <div>
            <div className="flex items-center gap-2 text-slate-100 font-bold text-lg mb-1">
              <span className="text-neon-emerald">H.</span> Harsh Adhana
            </div>
            <p className="text-slate-400 text-xs font-sans max-w-sm">
              AI/ML Engineer & Systems Developer. Focused on Agentic AI, RAG Pipelines & Algorithmic Problem Solving.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-surface-100 border border-border-light hover:border-neon-emerald text-slate-300 hover:text-neon-emerald transition-all"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-surface-100 border border-border-light hover:border-neon-cyan text-slate-300 hover:text-neon-cyan transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-surface-100 border border-border-light hover:border-amber-400 text-slate-300 hover:text-amber-400 transition-all"
              aria-label="LeetCode Profile"
              title="LeetCode Profile (900+ Solved)"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-surface-100 border border-border-light hover:border-neon-emerald text-slate-300 hover:text-neon-emerald transition-all"
              aria-label="Send Email"
              title="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-100 border border-border-light hover:border-slate-300 text-slate-200 transition-all ml-2"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neon-emerald animate-pulse"></span>
            <span>SYSTEM ONLINE — DESIGNED & ENGINEERED BY HARSH ADHANA</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Built with React 18, Vite & Tailwind CSS</span>
          </div>

          <div>
            © {new Date().getFullYear()} Harsh Adhana. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
