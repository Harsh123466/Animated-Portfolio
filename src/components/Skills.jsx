import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Bot, Boxes, GitFork, DatabaseZap, Sparkles, Cpu, 
  Flame, Brain, Activity, Binary, Table, Sigma, 
  Terminal, Code, Database, Zap, Atom, Layout, GitBranch 
} from 'lucide-react';

const iconMap = {
  Bot,
  Boxes,
  GitFork,
  DatabaseZap,
  Sparkles,
  Cpu,
  Flame,
  Brain,
  Activity,
  Binary,
  Table,
  Sigma,
  Terminal,
  Code,
  Database,
  Zap,
  Atom,
  Layout,
  GitBranch,
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = activeCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-28 px-6 md:px-12 border-t border-border-light relative">
      
      {/* Background glow */}
      <div className="absolute left-1/3 bottom-10 w-[500px] h-[500px] bg-neon-cyan/5 blur-[160px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6 text-slate-400 text-xs font-mono tracking-[0.15em] uppercase">
          <span className="w-6 h-[1px] bg-neon-cyan"></span>
          <span>Technical Matrix & Capabilities</span>
        </div>

        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-slate-100 leading-[1.08]">
              Skills & <span className="text-neon-cyan italic font-serif">specializations.</span>
            </h2>
            <p className="text-slate-400 mt-3 text-base max-w-xl font-light">
              From multi-agent orchestration to deep learning training loops and competitive algorithm design.
            </p>
          </div>

          {/* Quick Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeCategory === 'all'
                  ? 'bg-neon-cyan text-slate-950 font-bold shadow-neon-cyan'
                  : 'bg-surface-100 border border-border-light text-slate-300 hover:border-slate-400 hover:text-white'
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeCategory === cat.id
                    ? 'bg-neon-cyan text-slate-950 font-bold shadow-neon-cyan'
                    : 'bg-surface-100 border border-border-light text-slate-300 hover:border-slate-400 hover:text-white'
                }`}
              >
                {cat.title.split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-panel p-7 sm:p-8 rounded-2xl border border-border-light hover:border-neon-cyan/40 transition-all duration-300 shadow-xl group"
            >
              {/* Category Header */}
              <div className="border-b border-border-light pb-5 mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-neon-cyan transition-colors">
                    {category.title}
                  </h3>
                  <span className="text-xs font-mono text-neon-emerald bg-neon-emerald/10 px-2 py-0.5 rounded border border-neon-emerald/20">
                    {category.skills.length} Technologies
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 font-light">
                  {category.description}
                </p>
              </div>

              {/* Skills Badge Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] || Cpu;
                  return (
                    <div
                      key={skill.name}
                      className={`p-3 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                        skill.highlight
                          ? 'bg-surface-100/90 border-border-light hover:border-neon-emerald/50 hover:bg-neon-emerald/5'
                          : 'bg-surface-200/50 border-border-light/60 hover:border-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="p-1.5 rounded-md bg-surface-300 border border-border-light text-neon-emerald">
                          <Icon className="w-4 h-4" />
                        </div>
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-neon-emerald animate-pulse"></span>
                        )}
                      </div>

                      <div>
                        <div className="text-xs font-bold text-slate-200 leading-tight">
                          {skill.name}
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 mt-1">
                          {skill.level}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
