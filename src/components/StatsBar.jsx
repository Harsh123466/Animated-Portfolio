import React from 'react';
import { stats } from '../data/portfolioData';
import { Code2, GraduationCap, Trophy, Cpu, Zap } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  GraduationCap: GraduationCap,
  Trophy: Trophy,
  Cpu: Cpu,
};

const StatsBar = () => {
  return (
    <section className="py-12 px-6 md:px-12 border-y border-border-light bg-surface-200/40 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((item, index) => {
            const Icon = iconMap[item.icon] || Zap;
            return (
              <div
                key={index}
                className="glass-panel p-6 rounded-xl relative overflow-hidden group hover:border-neon-emerald/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight ${item.accent}`}>
                    {item.value}
                  </span>
                  <div className="p-2 rounded-lg bg-surface-100 border border-border-light text-slate-400 group-hover:text-neon-emerald group-hover:border-neon-emerald/30 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  {item.subtext}
                </p>

                {/* Subtle corner indicator */}
                <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity">
                  <div className="absolute transform rotate-45 bg-neon-emerald w-12 h-1 top-2 -right-2"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
