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
    <section id="achievements" className="section-shell py-28 px-6 md:px-12 border-t border-border-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="section-kicker mb-6">Honors & Competitive Milestones</div>

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {achievements.map((item, index) => {
            const Icon = iconMap[item.icon] || Trophy;
            return (
              <div
                key={item.id}
                className="achievement-card spotlight-card tilt-card glass-panel p-7 sm:p-8 rounded-3xl border border-border-light hover:border-amber-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute inset-0 blueprint-grid opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none"></div>
                <div className="absolute top-0 right-0 p-4 z-10">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20 font-bold uppercase">
                    {item.highlight}
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-surface-100 border border-border-light flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">
                      MILESTONE 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 group-hover:text-amber-400 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-neon-cyan mt-1 mb-4">
                    {item.organization} • {item.period}
                  </p>

                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-border-light flex items-center justify-between gap-4">
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
