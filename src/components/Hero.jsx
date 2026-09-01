import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const dynamicLines = [
  "Building Autonomous AI Agents & LangGraph Workflows.",
  "Engineering High-Precision RAG Retrieval Pipelines.",
  "Developing Deep Learning & Vision Models in PyTorch.",
  "Solving Complex Algorithmic Challenges (900+ DSA Solved).",
  "Architecting Scalable FastAPI & Modern Backend Systems."
];

const Hero = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(55);

  useEffect(() => {
    const currentLine = dynamicLines[lineIndex];

    let timer;
    if (!isDeleting) {
      if (displayedText.length < currentLine.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentLine.slice(0, displayedText.length + 1));
          setTypingSpeed(40 + Math.random() * 20);
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(25);
        }, 2400);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentLine.slice(0, displayedText.length - 1));
        }, typingSpeed);
      } else {
        setIsDeleting(false);
        setLineIndex((prev) => (prev + 1) % dynamicLines.length);
        setTypingSpeed(75);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, lineIndex, typingSpeed]);

  const handleNextLine = () => {
    setIsDeleting(false);
    setDisplayedText('');
    setLineIndex((prev) => (prev + 1) % dynamicLines.length);
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-12 pt-28 pb-12 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute right-0 top-1/4 -translate-y-1/2 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-neon-emerald/5 blur-[160px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute left-1/4 bottom-10 w-[450px] h-[450px] bg-neon-cyan/5 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto w-full z-10">
        
        {/* Top Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-100/90 border border-border-light text-xs font-mono text-slate-300 backdrop-blur-md mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-emerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-emerald"></span>
          </span>
          <span className="text-slate-200 font-medium">Harsh Adhana</span>
          <span className="text-slate-500">•</span>
          <span className="text-neon-emerald font-semibold">AI/ML & Systems Engineer</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-bold tracking-tighter leading-[1.08] text-slate-100">
          Engineering{' '}
          <span className="text-neon-emerald italic font-serif pr-2 glow-text-emerald">
            intelligent systems
          </span>
          <br />
          that scale and adapt.
        </h1>

        {/* Interactive Dynamic Typing Line */}
        <div 
          onClick={handleNextLine}
          title="Click to cycle next specialization"
          className="mt-6 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface-200/80 border border-neon-emerald/30 text-xs sm:text-sm md:text-base font-mono text-slate-200 backdrop-blur-md cursor-pointer hover:border-neon-emerald transition-all shadow-lg group"
        >
          <span className="text-neon-emerald font-bold">⚡ Focus:</span>
          <span className="text-slate-100 font-medium">{displayedText}</span>
          <span className="w-2 h-4 bg-neon-emerald animate-pulse inline-block"></span>
          <span className="text-[10px] text-slate-500 group-hover:text-neon-cyan transition-colors hidden sm:inline ml-2">
            (click to cycle ↻)
          </span>
        </div>

        {/* Crisp, Non-Repetitive Sub-Description */}
        <p className="text-slate-300 mt-6 text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed">
          Developing autonomous multi-agent architectures, high-precision retrieval systems, and robust deep learning models designed for real-world production.
        </p>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-3 bg-neon-emerald text-slate-950 px-7 py-3.5 rounded-xl text-sm font-bold shadow-neon-emerald hover:bg-neon-lime transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Explore Projects</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-surface-200/80 border border-border-light hover:border-neon-cyan px-7 py-3.5 rounded-xl text-sm font-medium text-slate-200 hover:text-neon-cyan transition-all duration-300 backdrop-blur-sm"
          >
            <Mail className="w-4 h-4 text-neon-cyan" />
            <span>Get in Touch</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
