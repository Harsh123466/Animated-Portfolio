import React from 'react';
import { Activity, Bot, DatabaseZap, GitBranch, ShieldCheck, Terminal, Zap } from 'lucide-react';

const defaultNodes = [
  { label: 'Task', icon: Terminal, tone: 'emerald' },
  { label: 'Agent', icon: Bot, tone: 'cyan' },
  { label: 'Tools', icon: GitBranch, tone: 'purple' },
  { label: 'Trace', icon: Activity, tone: 'emerald' },
  { label: 'Verify', icon: ShieldCheck, tone: 'amber' },
  { label: 'Recover', icon: Zap, tone: 'cyan' },
];

const toneClass = {
  emerald: 'text-neon-emerald border-neon-emerald/35 bg-neon-emerald/10',
  cyan: 'text-neon-cyan border-neon-cyan/35 bg-neon-cyan/10',
  purple: 'text-neon-purple border-neon-purple/35 bg-neon-purple/10',
  amber: 'text-amber-400 border-amber-400/35 bg-amber-400/10',
};

const SystemVisual = ({ title = 'Agent Reliability Layer', nodes = defaultNodes, compact = false }) => {
  return (
    <div className={`system-visual glass-panel gradient-border-emerald relative overflow-hidden ${compact ? 'p-4' : 'p-5 sm:p-6'} rounded-2xl`}>
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="data-scanline"></div>
        <div className="absolute inset-0 blueprint-grid"></div>
      </div>

      <div className="relative z-10 flex items-center justify-between gap-3 mb-5">
        <div>
          <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-slate-500">Live System Map</span>
          <h3 className="text-base sm:text-lg font-bold text-slate-100 mt-1">{title}</h3>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-neon-emerald/30 bg-neon-emerald/10 px-2.5 py-1 text-[10px] font-mono text-neon-emerald">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-emerald animate-pulse"></span>
          ACTIVE
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {nodes.map((node, index) => {
          const Icon = node.icon || DatabaseZap;
          return (
            <div
              key={`${node.label}-${index}`}
              className={`system-node ${toneClass[node.tone] || toneClass.emerald} rounded-xl border p-3 min-h-[92px] flex flex-col justify-between`}
              style={{ '--node-delay': `${index * 110}ms` }}
            >
              <div className="flex items-center justify-between">
                <Icon className="w-4 h-4" />
                <span className="text-[10px] font-mono text-slate-500">0{index + 1}</span>
              </div>
              <div>
                <div className="text-xs font-bold text-slate-100">{node.label}</div>
                <div className="mt-1 h-1 rounded-full bg-white/10 overflow-hidden">
                  <span className="system-node-bar block h-full rounded-full bg-current"></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative z-10 mt-4 rounded-xl border border-white/10 bg-black/25 p-3 font-mono text-[10px] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="text-neon-emerald">$</span>
          <span>monitor.run(trace=true, verify=true, recover=true)</span>
        </div>
      </div>
    </div>
  );
};

export default SystemVisual;
