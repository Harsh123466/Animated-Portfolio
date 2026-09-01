import React from 'react';
import { achievements } from '../data/portfolioData';
import { Trophy, Code2, Medal, Award, Flame, CheckCircle2, ArrowUpRight } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Trophy: Trophy,
  Medal: Medal,
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-28 px-6 md:px-12 border-t border-border-light relative">
      
      {/* Background ambient lighting */}
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-[140px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6 text-slate-400 text-xs font-mono tracking-[0.15em] uppercase">
          <span className="w-6 h-[1px] bg-amber-400"></span>
          <span>Honors & Competitive Milestones</span>
        </div>

        {/* Section Header */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-slate-100 leading-[1.08]">
            Competitive <span className="text-amber-400 italic font-serif">achievements.</span>
          </h2>
          <p className="text-slate-400 mt-3 text-base max-w-xl font-light">
            Demonstrated algorithmic rigor, competitive programming ranking, and sprint leadership.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => {
            const Icon = iconMap[item.icon] || Trophy;
            return (
              <div
                key={item.id}
                className="glass-panel p-7 sm:p-8 rounded-2xl border border-border-light hover:border-amber-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle corner badge */}
                <div className="absolute top-0 right-0 p-4">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20 font-bold uppercase">
                    {item.highlight}
                  </span>
                </div>

                <div>
                  {/* Icon & Index */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-surface-100 border border-border-light flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      MILESTONE 0{index + 1}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 group-hover:text-amber-400 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-neon-cyan mt-1 mb-4">
                    {item.organization} • {item.period}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tag Pill & Footer Link */}
                <div className="pt-4 border-t border-border-light flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neon-emerald" />
                    <span>{item.tag}</span>
                  </span>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 group/link"
                      title="View LeetCode Profile"
                    >
                      <span>Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
