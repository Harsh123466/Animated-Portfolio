import React from 'react';
import { stats } from '../data/portfolioData';
import { Code2, Cpu, GraduationCap, Trophy, Zap } from 'lucide-react';

const iconMap = {
  Code2,
  GraduationCap,
  Trophy,
  Cpu,
};

const StatsBar = () => {
  return (
    <section className="px-6 md:px-12 border-y border-border-light bg-black/20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-0 lg:divide-x divide-border-light">
          {stats.map((item, index) => {
            const Icon = iconMap[item.icon] || Zap;
            return (
              <div key={item.label} className="stat-card spotlight-card group relative min-h-[170px] p-5 sm:p-7">
                <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-start justify-between gap-4">
                  <span className={`text-3xl sm:text-5xl font-bold tracking-tight ${item.accent}`}>
                    {item.value}
                  </span>
                  <div className="p-2 rounded-xl bg-surface-100 border border-border-light text-slate-400 group-hover:text-neon-emerald group-hover:border-neon-emerald/30 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="mt-5 text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-mono leading-relaxed">
                  {item.subtext}
                </p>

                <div className="mt-5 h-1 rounded-full bg-white/5 overflow-hidden">
                  <span className={`block h-full rounded-full bg-current ${item.accent}`} style={{ width: `${68 + index * 8}%` }}></span>
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
