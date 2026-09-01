import React from 'react';
import { Bot, ShieldCheck, Zap, Layers, Sparkles, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const principles = [
  {
    icon: Bot,
    title: "Autonomous Agent Reliability",
    description: "Designing self-healing agent trajectories with automated backtracking loops to prevent hallucinations and infinite cycles.",
    accent: "text-neon-emerald",
    border: "group-hover:border-neon-emerald/40"
  },
  {
    icon: ShieldCheck,
    title: "Precision Retrieval (RAG)",
    description: "Building two-stage retrieval systems with dense vector indexing and cross-encoder reranking for verifiable factual accuracy.",
    accent: "text-neon-cyan",
    border: "group-hover:border-neon-cyan/40"
  },
  {
    icon: Zap,
    title: "High-Performance Execution",
    description: "Treating latency and memory efficiency as first-class constraints using asynchronous FastAPI pipelines and optimized C++/Python logic.",
    accent: "text-amber-400",
    border: "group-hover:border-amber-400/40"
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 border-t border-border-light relative">
      
      {/* Background ambient lighting */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-neon-cyan/5 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6 text-slate-400 text-xs font-mono tracking-[0.15em] uppercase">
          <span className="w-6 h-[1px] bg-neon-cyan"></span>
          <span>Profile & Engineering Philosophy</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-slate-100 leading-[1.12]">
              Architecting intelligent systems with{' '}
              <span className="text-neon-emerald italic font-serif">engineering rigor.</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base font-light leading-relaxed">
              <p>
                Modern artificial intelligence is only as valuable as its reliability in production. I build systems that bridge theoretical machine learning models with resilient, production-grade software architectures.
              </p>

              <p>
                My focus centers on developing <span className="text-white font-medium">autonomous multi-agent frameworks</span> that can inspect their own reasoning loops, <span className="text-white font-medium">context-aware RAG pipelines</span> that eliminate hallucinations, and high-performance backend microservices.
              </p>

              <p>
                Every project I build is guided by clean abstractions, strict verification boundaries, and deep algorithmic problem-solving discipline.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-neon-emerald hover:text-neon-lime transition-colors group"
              >
                <span>Inspect GitHub Repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Principles */}
          <div className="lg:col-span-6 space-y-4">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`glass-panel p-6 rounded-xl border border-border-light ${item.border} transition-all duration-300 shadow-lg group`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-surface-100 border border-border-light text-neon-emerald shrink-0 group-hover:scale-105 transition-transform">
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
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
