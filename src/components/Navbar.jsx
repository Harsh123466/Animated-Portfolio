import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Navbar = ({ isModalOpen = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Education', href: '#education' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'skills', 'sandbox', 'achievements', 'education', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none transition-all duration-300 ease-in-out ${
      isModalOpen ? 'opacity-0 -translate-y-14 pointer-events-none' : 'opacity-100 translate-y-0'
    }`}>
      <div className={`max-w-5xl mx-auto rounded-full px-4 sm:px-6 py-2.5 transition-all duration-300 pointer-events-auto flex items-center justify-between relative overflow-hidden ${
        scrolled
          ? 'bg-[#0c1017]/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'bg-[#0c1017]/60 backdrop-blur-md border border-white/5 shadow-lg'
      }`}>
        <div className="scroll-progress absolute left-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-neon-emerald via-neon-cyan to-amber-400"></div>
        
        {/* Brand Logo with Live Status Dot */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-emerald opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-emerald"></span>
          </span>
          <span className="font-bold tracking-tight text-slate-100 text-sm group-hover:text-neon-emerald transition-colors font-sans">
            Harsh<span className="text-neon-emerald">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`magnetic px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-neon-emerald bg-neon-emerald/10 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Clean & Minimal */}
        <div className="flex items-center gap-2.5">
          {/* GitHub Icon */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-colors hidden sm:flex items-center justify-center"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="magnetic text-xs px-3.5 py-1.5 rounded-full bg-neon-emerald text-slate-950 font-bold hover:bg-neon-lime transition-all duration-200 flex items-center gap-1 shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3 h-3" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Card */}
      {isOpen && (
        <div className="md:hidden max-w-sm mx-auto mt-2 pointer-events-auto bg-[#0c1017]/95 border border-white/10 backdrop-blur-2xl rounded-2xl p-5 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-neon-emerald hover:bg-white/5 transition-all flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-slate-500 text-xs">→</span>
              </a>
            ))}

            <div className="pt-3 mt-1 border-t border-white/10 flex items-center justify-between px-2 text-xs">
              <span className="text-slate-400">Harsh Adhana</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-neon-emerald"
                >
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-neon-cyan"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
