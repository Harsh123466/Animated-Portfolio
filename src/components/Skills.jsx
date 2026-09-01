import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import {
  Activity, Atom, Binary, Bot, Boxes, Brain, Code, Cpu, Database,
  DatabaseZap, Flame, GitBranch, GitFork, Layout, Sigma, Sparkles,
  Table, Terminal, Zap
} from 'lucide-react';

const iconMap = {
  Activity,
  Atom,
  Binary,
  Bot,
  Boxes,
  Brain,
  Code,
  Cpu,
  Database,
  DatabaseZap,
  Flame,
  GitBranch,
  GitFork,
  Layout,
  Sigma,
  Sparkles,
  Table,
  Terminal,
  Zap,
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);
  const active = skillCategories.find((category) => category.id === activeCategory) || skillCategories[0];

  return (
    <section id="skills" className="section-shell py-28 px-6 md:px-12 border-t border-border-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="section-kicker mb-6">Technical Matrix & Capabilities</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter text-slate-100 leading-[1.06]">
              Skills as an <span className="text-neon-cyan italic font-serif">engineering ecosystem.</span>
            </h2>
            <p className="text-slate-400 mt-4 text-base font-light leading-relaxed">
              From multi-agent orchestration to deep learning training loops and competitive algorithm design.
            </p>

            <div className="mt-8 space-y-3">
              {skillCategories.map((category) => {
                const activeState = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`spotlight-card w-full rounded-2xl border p-4 text-left transition-all ${
                      activeState
                        ? 'glass-panel border-neon-cyan/45 shadow-neon-cyan'
                        : 'bg-surface-200/35 border-border-light hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm font-bold text-slate-100">{category.title}</div>
                        <div className="mt-1 text-xs text-slate-500">{category.skills.length} technologies</div>
                      </div>
                      <span className={`h-2 w-2 rounded-full ${activeState ? 'bg-neon-cyan' : 'bg-slate-600'}`}></span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-8 lg:pt-12">
            <div className="glass-panel gradient-border-emerald rounded-3xl p-6 sm:p-8 overflow-hidden relative">
              <div className="absolute inset-0 blueprint-grid opacity-55 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-6 border-b border-border-light">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan">Active Capability Cluster</span>
                    <h3 className="mt-2 text-2xl sm:text-4xl font-bold text-slate-100">{active.title}</h3>
                    <p className="mt-2 text-sm text-slate-400 max-w-2xl">{active.description}</p>
                  </div>
                  <div className="rounded-2xl border border-neon-emerald/25 bg-neon-emerald/10 px-4 py-3 text-center">
                    <div className="text-3xl font-bold text-neon-emerald">{active.skills.filter((skill) => skill.highlight).length}</div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Core strengths</div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {active.skills.map((skill, index) => {
                    const Icon = iconMap[skill.icon] || Cpu;
                    return (
                      <div
                        key={skill.name}
                        className={`skill-card tilt-card spotlight-card rounded-2xl border p-4 min-h-[150px] flex flex-col justify-between transition-all ${
                          skill.highlight
                            ? 'bg-surface-100/85 border-neon-emerald/20 hover:border-neon-emerald/50'
                            : 'bg-surface-200/55 border-border-light hover:border-slate-400/50'
                        }`}
                        style={{ '--reveal-delay': `${index * 70}ms` }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="rounded-xl border border-border-light bg-surface-300 p-2.5 text-neon-emerald">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-[10px] font-mono text-slate-500">NODE 0{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-100">{skill.name}</h4>
                          <div className="mt-2 flex items-center justify-between gap-3">
                            <span className="text-xs font-mono text-slate-400">{skill.level}</span>
                            {skill.highlight && <span className="rounded-full bg-neon-emerald/10 px-2 py-0.5 text-[10px] font-mono text-neon-emerald">primary</span>}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
