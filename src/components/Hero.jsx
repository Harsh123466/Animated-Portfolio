import React, { useEffect, useState } from 'react';
import { ArrowRight, Bot, Braces, DatabaseZap, Github, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import SystemVisual from './SystemVisual';

const dynamicLines = [
  'Building Autonomous AI Agents & LangGraph Workflows.',
  'Engineering High-Precision RAG Retrieval Pipelines.',
  'Developing Deep Learning & Vision Models in PyTorch.',
  'Solving Complex Algorithmic Challenges (900+ DSA Solved).',
  'Architecting Scalable FastAPI & Modern Backend Systems.',
];

const Hero = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(55);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayedText(dynamicLines[0]);
      return undefined;
    }

    const currentLine = dynamicLines[lineIndex];
    let timer;

    if (!isDeleting && displayedText.length < currentLine.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentLine.slice(0, displayedText.length + 1));
        setTypingSpeed(38 + Math.random() * 16);
      }, typingSpeed);
    } else if (!isDeleting) {
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(22);
      }, 2200);
    } else if (displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentLine.slice(0, displayedText.length - 1));
      }, typingSpeed);
    } else {
      setIsDeleting(false);
      setLineIndex((prev) => (prev + 1) % dynamicLines.length);
      setTypingSpeed(70);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, lineIndex, typingSpeed]);

  const handleNextLine = () => {
    setIsDeleting(false);
    setDisplayedText('');
    setLineIndex((prev) => (prev + 1) % dynamicLines.length);
  };

  return (
    <section id="hero" className="section-shell relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-28 pb-16 overflow-hidden">
      <div data-parallax="0.08" className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-neon-emerald/10 to-transparent pointer-events-none -z-10"></div>
      <div data-parallax="0.12" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="hero-animate hero-delay-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-100/80 border border-neon-emerald/25 text-xs font-mono text-slate-300 backdrop-blur-md mb-7">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-emerald"></span>
            </span>
            <span className="text-slate-200 font-medium">{personalInfo.name}</span>
            <span className="text-slate-500">/</span>
            <span className="text-neon-emerald font-semibold">AI/ML Engineer</span>
          </div>

          <h1 className="hero-animate hero-delay-2 text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.02] text-slate-100">
            Engineering AI systems that can{' '}
            <span className="text-neon-emerald italic font-serif pr-2 glow-text-emerald">
              reason, retrieve, and recover.
            </span>
          </h1>

          <button
            type="button"
            onClick={handleNextLine}
            title="Click to cycle next specialization"
            className="hero-animate hero-delay-3 mt-7 max-w-full inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface-200/80 border border-neon-emerald/30 text-left text-xs sm:text-sm md:text-base font-mono text-slate-200 backdrop-blur-md hover:border-neon-emerald transition-all shadow-lg group"
          >
            <Sparkles className="w-4 h-4 text-neon-emerald shrink-0" />
            <span className="text-neon-emerald font-bold">Focus:</span>
            <span className="text-slate-100 font-medium truncate">{displayedText}</span>
            <span className="w-2 h-4 bg-neon-emerald animate-pulse inline-block shrink-0"></span>
          </button>

          <p className="hero-animate hero-delay-4 text-slate-300 mt-6 text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Developing autonomous multi-agent architectures, high-precision retrieval systems, and robust deep learning models designed for real-world production.
          </p>

          <div className="hero-animate hero-delay-5 mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="magnetic premium-button group relative inline-flex items-center gap-3 bg-neon-emerald text-slate-950 px-7 py-3.5 rounded-xl text-sm font-bold shadow-neon-emerald hover:bg-neon-lime transition-all duration-300"
            >
              <span className="relative z-10">Explore Case Studies</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="magnetic inline-flex items-center gap-2 bg-surface-200/80 border border-border-light hover:border-neon-cyan px-7 py-3.5 rounded-xl text-sm font-medium text-slate-200 hover:text-neon-cyan transition-all duration-300 backdrop-blur-sm"
            >
              <Mail className="w-4 h-4 text-neon-cyan" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative hero-animate hero-delay-4">
          <SystemVisual />
          <div data-parallax="0.16" className="floating-panel hidden sm:block absolute -left-8 top-10 rounded-2xl border border-neon-cyan/25 bg-[#05070b]/85 backdrop-blur-xl p-4 shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-neon-cyan">
              <DatabaseZap className="w-4 h-4" />
              RAG Context Score
            </div>
            <div className="mt-2 text-3xl font-bold text-slate-100">0.92</div>
          </div>
          <div data-parallax="0.2" className="floating-panel hidden sm:block absolute -right-5 bottom-8 rounded-2xl border border-amber-400/25 bg-[#05070b]/85 backdrop-blur-xl p-4 shadow-2xl" style={{ animationDelay: '1.2s' }}>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              Verified Run
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-slate-300">
              <Bot className="w-4 h-4 text-neon-emerald" />
              failure recovery ready
            </div>
          </div>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic mt-4 inline-flex w-full items-center justify-between rounded-xl border border-white/10 bg-surface-100/65 px-4 py-3 text-xs font-mono text-slate-300 hover:border-neon-emerald/40 hover:text-white transition-all"
          >
            <span className="inline-flex items-center gap-2"><Github className="w-4 h-4" /> Inspect engineering work</span>
            <Braces className="w-4 h-4 text-neon-emerald" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
