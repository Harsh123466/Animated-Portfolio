import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Github, ExternalLink, CheckCircle2, Layers, ShieldCheck } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in">
      {/* Full Screen Dim Backdrop */}
      <div
        className="fixed inset-0 bg-black/95 backdrop-blur-xl transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div data-lenis-prevent className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1017] border border-white/10 rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.95)] overflow-y-auto z-10 font-sans">
        
        {/* Header Bar */}
        <div className="sticky top-0 bg-[#0c1017]/98 border-b border-border-light px-6 py-4 flex items-center justify-between backdrop-blur-md z-20">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded bg-neon-emerald/10 text-neon-emerald border border-neon-emerald/20 text-xs font-mono font-semibold uppercase">
              {project.badge || project.category}
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              ARCHITECTURAL DEEP DIVE
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-surface-200 border border-border-light text-slate-300 hover:text-white hover:border-red-400/40 transition-all"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Main Title & Subtitle */}
          <div>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-100">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-neon-cyan mt-1 font-medium">
              {project.subtitle}
            </p>
            <p className="text-slate-300 mt-4 text-sm sm:text-base leading-relaxed font-light">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* System Architecture Blueprint */}
          <div className="p-5 rounded-xl bg-surface-200/80 border border-border-light space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-300">
              <Layers className="w-4 h-4 text-neon-emerald" />
              <span>System Pipeline & Architecture</span>
            </div>
            <div className="p-4 rounded-lg bg-[#070a10] border border-border-light font-mono text-xs text-neon-emerald leading-relaxed overflow-x-auto">
              <code>{project.architecture}</code>
            </div>
          </div>

          {/* Key Engineering Highlights */}
          <div>
            <h4 className="text-sm font-mono text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-neon-cyan" />
              <span>Key Features & Technical Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-lg bg-surface-100/50 border border-border-light flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-neon-emerald shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-surface-100 border border-border-light text-xs font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 border-t border-border-light flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neon-emerald text-slate-950 font-bold text-xs font-mono hover:bg-neon-lime transition-all shadow-neon-emerald"
              >
                <Github className="w-4 h-4" />
                <span>View Source Repository</span>
              </a>

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-200 border border-border-light hover:border-neon-cyan text-xs font-mono text-slate-200 hover:text-neon-cyan transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Interactive Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              Close Window [Esc]
            </button>
          </div>

        </div>

      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectModal;
