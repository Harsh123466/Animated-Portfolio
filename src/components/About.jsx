import React from 'react';
import { ArrowUpRight, Bot, CheckCircle2, DatabaseZap, ShieldCheck, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const principles = [
  {
    icon: Bot,
    title: 'Autonomous Agent Reliability',
    description: 'Building AI-agent observability and recovery systems that track agent execution, detect tool failures, loops, retry exhaustion, and unreliable completion claims.',
    accent: 'text-neon-emerald',
    border: 'group-hover:border-neon-emerald/40',
  },
  {
    icon: DatabaseZap,
    title: 'Precision Retrieval (RAG)',
    description: 'Developing two-stage retrieval pipelines using dense embeddings, vector search, and cross-encoder reranking to improve the relevance and factual grounding of generated responses.',
    accent: 'text-neon-cyan',
    border: 'group-hover:border-neon-cyan/40',
  },
  {
    icon: Zap,
    title: 'Efficient AI Engineering',
    description: 'Combining FastAPI, Python, C++, PyTorch, and asynchronous backend patterns to build practical AI systems with attention to execution efficiency, memory usage, and system reliability.',
    accent: 'text-amber-400',
    border: 'group-hover:border-amber-400/40',
  },
];

const philosophy = [
  'Clean abstractions',
  'Measurable behavior',
  'Verification boundaries',
  'Algorithmic discipline',
];

const About = () => {
  return (
    <section id="about" className="section-shell py-28 px-6 md:px-12 border-t border-border-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="section-kicker mb-6">Profile & Engineering Philosophy</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-slate-100 leading-[1.06]">
                Building reliable AI systems with{' '}
                <span className="text-neon-emerald italic font-serif">engineering discipline.</span>
              </h2>
            </div>

            <div className="glass-panel spotlight-card rounded-3xl border border-border-light p-6 sm:p-8">
              <div className="space-y-5 text-slate-300 text-base font-light leading-relaxed">
                <p>
                  I build <span className="text-white font-medium">AI/ML systems that connect intelligent models with reliable software architectures</span>. My work focuses on <span className="text-white font-medium">Agentic AI, Retrieval-Augmented Generation (RAG), computer vision, and backend engineering</span>, with an emphasis on reliability, verification, and efficient execution.
                </p>

                <p>
                  My current focus is on building <span className="text-white font-medium">AI agent systems that can monitor execution, detect failures, and recover from problematic trajectories</span>, alongside <span className="text-white font-medium">context-aware RAG pipelines</span> designed to improve factual accuracy through semantic retrieval and reranking.
                </p>

                <p>
                  I also enjoy solving complex algorithmic problems and applying <span className="text-white font-medium">Python, C++, FastAPI, LangChain/LangGraph, PyTorch, vector databases, and modern backend technologies</span> to build practical AI systems.
                </p>

                <p>
                  Every project I build is guided by <span className="text-white font-medium">clean abstractions, measurable behavior, verification boundaries, and algorithmic problem-solving discipline.</span>
                </p>
              </div>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {philosophy.map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-mono text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-neon-emerald shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic mt-7 inline-flex items-center gap-2 text-xs font-mono text-neon-emerald hover:text-neon-lime transition-colors group"
              >
                <span>Inspect GitHub Repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`glass-panel spotlight-card tilt-card p-5 sm:p-6 rounded-2xl border border-border-light ${item.border} transition-all duration-300 shadow-lg group`}
                  style={{ '--reveal-delay': `${index * 90}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-xl bg-surface-100 border border-border-light shrink-0 group-hover:scale-105 transition-transform ${item.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-100 group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 font-light mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="rounded-2xl border border-neon-cyan/20 bg-neon-cyan/5 p-5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neon-cyan">
                <ShieldCheck className="w-4 h-4" />
                Operating Principle
              </div>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Reliable AI is a systems problem: observability, retrieval quality, model behavior, and backend execution all have to cooperate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
