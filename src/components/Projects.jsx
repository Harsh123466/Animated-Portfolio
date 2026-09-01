import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { Github, ExternalLink, ArrowRight, Layers, Bot, Sparkles, DatabaseZap, Eye } from 'lucide-react';

const Projects = ({ onSelectProject }) => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'agentic', label: 'Agentic & RAG' },
    { id: 'nlp', label: 'NLP & Transformers' },
    { id: 'vision', label: 'Computer Vision' }
  ];

  const filteredProjects = projects.filter(p => {
    if (filter === 'all') return true;
    if (filter === 'agentic') return p.id === 'agentwatch' || p.id === 'pdf-rag-chatbot';
    if (filter === 'nlp') return p.id === 'text-summarizer';
    if (filter === 'vision') return p.id === 'roadsense-ai';
    return true;
  });

  return (
    <section id="projects" className="py-28 px-6 md:px-12 border-t border-border-light relative">
      
      {/* Ambient background glow */}
      <div className="absolute right-10 top-1/4 w-[600px] h-[600px] bg-neon-emerald/5 blur-[160px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6 text-slate-400 text-xs font-mono tracking-[0.15em] uppercase">
          <span className="w-6 h-[1px] bg-neon-emerald"></span>
          <span>Featured Projects & Case Studies</span>
        </div>

        {/* Headline & Filter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-slate-100 leading-[1.08]">
              What I've <span className="text-neon-emerald italic font-serif">engineered.</span>
            </h2>
            <p className="text-slate-400 mt-3 text-base max-w-xl font-light">
              Autonomous AI agent observability platforms, reranked RAG systems, and production transformer models.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  filter === cat.id
                    ? 'bg-neon-emerald text-slate-950 font-bold shadow-neon-emerald'
                    : 'bg-surface-100 border border-border-light text-slate-300 hover:border-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`glass-panel rounded-2xl p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden group border border-border-light ${project.borderColor} transition-all duration-300 hover:shadow-2xl`}
            >
              {/* Subtle gradient background wash on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none -z-10`}></div>

              <div>
                {/* Top Meta Bar */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-slate-400">
                    0{idx + 1} / 0{filteredProjects.length}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-surface-100/90 border border-border-light text-neon-emerald text-[11px] font-mono font-medium">
                    {project.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 group-hover:text-neon-emerald transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-neon-cyan font-mono mt-1 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {project.highlights.slice(0, 2).map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="text-neon-emerald mt-0.5">✦</span>
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Architecture Snippet */}
                <div className="p-3 rounded-lg bg-surface-200/90 border border-border-light/60 mb-6">
                  <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider mb-1 flex items-center gap-1.5">
                    <Layers className="w-3 h-3 text-neon-cyan" />
                    <span>Architecture Pipeline:</span>
                  </div>
                  <div className="text-xs font-mono text-neon-emerald/90 truncate">
                    {project.architecture}
                  </div>
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-border-light/40">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded bg-surface-100/80 border border-border-light text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => onSelectProject && onSelectProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-neon-emerald hover:text-neon-lime transition-colors group/btn"
                  >
                    <span>Deep Dive Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-surface-100 border border-border-light hover:border-neon-emerald text-slate-300 hover:text-neon-emerald transition-all"
                      title="GitHub Repository"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
