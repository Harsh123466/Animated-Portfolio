import React, { useMemo, useState } from 'react';
import { projects } from '../data/portfolioData';
import { ArrowRight, Bot, DatabaseZap, ExternalLink, Github, Layers, ShieldCheck, Sparkles } from 'lucide-react';

const projectVisuals = {
  agentwatch: { icon: Bot, tone: 'emerald', metric: 'Trace / Detect / Recover' },
  'pdf-rag-chatbot': { icon: DatabaseZap, tone: 'cyan', metric: 'Retrieve / Rerank / Ground' },
  'text-summarizer': { icon: Sparkles, tone: 'purple', metric: 'Input / Infer / Summarize' },
  'roadsense-ai': { icon: ShieldCheck, tone: 'amber', metric: 'Image / CNN / Severity' },
};

const toneClasses = {
  emerald: 'from-neon-emerald/25 via-teal-400/10 text-neon-emerald border-neon-emerald/35',
  cyan: 'from-neon-cyan/25 via-blue-400/10 text-neon-cyan border-neon-cyan/35',
  purple: 'from-neon-purple/25 via-indigo-400/10 text-neon-purple border-neon-purple/35',
  amber: 'from-amber-400/25 via-orange-400/10 text-amber-400 border-amber-400/35',
};

const splitArchitecture = (architecture) => architecture.split('→').map((part) => part.trim());

const Projects = ({ onSelectProject }) => {
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id);
  const activeProject = projects.find((project) => project.id === activeProjectId) || projects[0];

  return (
    <section id="projects" className="section-shell py-28 px-6 md:px-12 border-t border-border-light relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-emerald/60 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="section-kicker mb-6">Featured Projects & Case Studies</div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-slate-100 leading-[1.05]">
            Engineering case studies, <span className="text-neon-emerald italic font-serif">not cards.</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base max-w-2xl font-light leading-relaxed">
            Autonomous AI agent observability platforms, reranked RAG systems, and production transformer models presented through their system architecture.
          </p>
        </div>

        {activeProject && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-4 rounded-[28px] border border-white/8 bg-slate-950/25 p-3 shadow-[0_24px_60px_rgba(2,6,23,0.45)] backdrop-blur-sm">
              <div className="space-y-3">
                {projects.map((project, index) => {
                  const visual = projectVisuals[project.id] || projectVisuals.agentwatch;
                  const Icon = visual.icon;
                  const active = activeProject.id === project.id;

                  return (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => setActiveProjectId(project.id)}
                      className={`spotlight-card w-full text-left rounded-2xl border p-4 sm:p-5 transition-all duration-300 ${
                        active
                          ? 'glass-panel border-neon-emerald/45 shadow-neon-emerald bg-gradient-to-br from-emerald-500/10 via-slate-900/70 to-slate-950/80'
                          : 'bg-slate-900/55 border-border-light hover:border-white/18 hover:bg-slate-900/75'
                      }`}
                    >
                    <div className="flex items-start gap-4">
                      <div className={`rounded-xl border p-2.5 ${toneClasses[visual.tone]}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 mb-1">
                          <span>CASE 0{index + 1}</span>
                          <span>/</span>
                          <span>{project.category}</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-100">{project.title}</h3>
                        <p className="text-xs text-slate-400 mt-1 line-clamp-2">{project.subtitle}</p>
                      </div>
                    </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <article className={`project-card spotlight-card lg:col-span-8 rounded-[30px] border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-900/75 to-slate-950/80 ${activeProject.borderColor} overflow-hidden shadow-[0_28px_80px_rgba(2,6,23,0.55)] backdrop-blur-sm`}>
              <div className={`project-visual relative min-h-[230px] bg-gradient-to-br ${activeProject.gradient} p-6 sm:p-8 overflow-hidden`}>
                <div className="absolute inset-0 blueprint-grid opacity-80"></div>
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                  <div>
                    <span className="inline-flex rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-slate-300">
                      {activeProject.badge}
                    </span>
                    <h3 className="mt-5 text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
                      {activeProject.title}
                    </h3>
                    <p className="mt-2 text-base text-neon-cyan font-mono">{activeProject.subtitle}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 min-w-[180px]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">System Mode</span>
                    <div className="mt-2 text-sm font-bold text-slate-100">{projectVisuals[activeProject.id]?.metric}</div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-7">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2">Problem / System Purpose</div>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                      {activeProject.whyProject || activeProject.longDescription || activeProject.description}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border-light bg-surface-100/55 p-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-neon-emerald">
                      <Layers className="w-4 h-4" />
                      Stack Density
                    </div>
                    <div className="mt-3 text-4xl font-bold text-slate-100">{activeProject.techStack.length}</div>
                    <div className="text-xs text-slate-500 font-mono">technologies</div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                    <Layers className="w-4 h-4 text-neon-cyan" />
                    Architecture Flow
                  </div>
                  <div className="architecture-flow pb-2">
                    {splitArchitecture(activeProject.architecture).map((step, index) => (
                      <span
                        key={`${activeProject.id}-${step}-${index}`}
                        className="architecture-step rounded-xl border border-neon-emerald/20 bg-neon-emerald/10 px-3 py-2 text-[11px] font-mono text-slate-200"
                      >
                        {step}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeProject.highlights.slice(0, 4).map((highlight, index) => (
                    <div key={index} className="rounded-xl border border-border-light bg-surface-100/45 p-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <span className="font-mono text-neon-emerald mr-2">0{index + 1}</span>
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {activeProject.techStack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-mono text-slate-300 hover:border-neon-cyan/40 hover:text-neon-cyan transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-border-light">
                  <button
                    type="button"
                    onClick={() => onSelectProject && onSelectProject(activeProject)}
                    className="magnetic premium-button inline-flex items-center gap-2 rounded-xl bg-neon-emerald px-5 py-3 text-xs font-mono font-bold text-slate-950 shadow-neon-emerald hover:bg-neon-lime transition-all"
                  >
                    <span className="relative z-10">Open Deep Dive</span>
                    <ArrowRight className="relative z-10 w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-3">
                    <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="magnetic rounded-xl border border-border-light bg-surface-100 p-3 text-slate-300 hover:border-neon-emerald hover:text-neon-emerald transition-all" aria-label="View on GitHub">
                      <Github className="w-4 h-4" />
                    </a>
                    {activeProject.liveDemo && (
                      <a href={activeProject.liveDemo} target="_blank" rel="noopener noreferrer" className="magnetic rounded-xl border border-border-light bg-surface-100 p-3 text-slate-300 hover:border-neon-cyan hover:text-neon-cyan transition-all" aria-label="Open live demo">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
