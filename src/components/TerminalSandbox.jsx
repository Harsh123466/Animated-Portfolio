import React, { useState, useRef, useEffect } from 'react';
import { executeCommand } from '../data/terminalCommands';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Trash2, RefreshCw } from 'lucide-react';

const TerminalSandbox = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      command: 'welcome',
      output: {
        type: 'html',
        content: `
<span class="text-neon-emerald font-bold">Harsh Adhana — AI & Systems Command Center v2.4.0</span>
Type <span class="text-neon-cyan font-bold">help</span> to view available system commands or click any chip below to inspect.
Try querying the agent with <span class="text-neon-emerald">ask [question]</span> (e.g. <span class="text-neon-cyan">ask rag</span> or <span class="text-neon-cyan">ask agentwatch</span>).
        `
      }
    }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  const quickChips = [
    'help',
    'skills',
    'projects',
    'project agentwatch',
    'stats',
    'achievements',
    'ask rag',
    'education',
    'contact'
  ];

  const handleRunCommand = (cmdText) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const res = executeCommand(trimmed);
    setHistory((prev) => [...prev, { command: trimmed, output: res }]);
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleRunCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[commandHistory.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  // Global trigger for clickable HTML elements inside terminal
  useEffect(() => {
    window.runTerminalHelp = () => handleRunCommand('help');
    return () => {
      delete window.runTerminalHelp;
    };
  }, []);

  return (
    <section id="sandbox" className="py-24 px-6 md:px-12 border-t border-border-light relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 text-slate-400 text-xs font-mono tracking-[0.2em] uppercase">
            <span className="w-6 h-[1px] bg-neon-emerald"></span>
            <span>[03] Interactive AI Command Center</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neon-emerald">
            <span className="w-2 h-2 rounded-full bg-neon-emerald animate-pulse"></span>
            <span>SHELL_READY</span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-slate-100">
            Developer sandbox & <span className="text-neon-emerald italic font-serif">agent CLI.</span>
          </h2>
          <p className="text-slate-400 mt-2 text-sm max-w-xl font-light">
            Query Harsh's technical portfolio, project architectures, and competitive stats in real-time.
          </p>
        </div>

        {/* Quick Chips Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-mono text-slate-500 mr-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-neon-cyan" /> Quick run:
          </span>
          {quickChips.map((chip) => (
            <button
              key={chip}
              onClick={() => handleRunCommand(chip)}
              className="px-2.5 py-1 rounded bg-surface-100/90 border border-border-light hover:border-neon-emerald hover:text-neon-emerald text-xs font-mono text-slate-300 transition-all active:scale-95"
            >
              {chip}
            </button>
          ))}
          <button
            onClick={() => setHistory([])}
            title="Clear terminal screen"
            className="px-2 py-1 rounded bg-surface-100/90 border border-border-light hover:border-red-400/40 text-slate-400 hover:text-red-400 text-xs font-mono transition-all ml-auto flex items-center gap-1"
          >
            <Trash2 className="w-3 h-3" />
            <span className="hidden sm:inline">Clear</span>
          </button>
        </div>

        {/* Terminal Window */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className="rounded-xl bg-[#06080d] border border-border-light shadow-2xl overflow-hidden font-mono cursor-text"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0a0d14] border-b border-border-light">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="text-xs text-slate-400 font-mono ml-2">harsh@adhana-ai: ~/portfolio</span>
            </div>
            <div className="text-[11px] text-slate-500">bash • utf-8</div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 md:p-6 min-h-[340px] max-h-[480px] overflow-y-auto space-y-4 text-xs md:text-sm">
            {history.map((entry, index) => (
              <div key={index} className="space-y-1.5 animate-fade-in">
                {entry.command !== 'welcome' && (
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-neon-emerald font-bold">harsh@adhana-ai:~$</span>
                    <span className="text-slate-100 font-semibold">{entry.command}</span>
                  </div>
                )}
                
                {entry.output && (
                  <div className="text-slate-300 leading-relaxed pl-1 sm:pl-3 whitespace-pre-line">
                    {entry.output.type === 'html' ? (
                      <div dangerouslySetInnerHTML={{ __html: entry.output.content }} />
                    ) : (
                      <span>{entry.output.content}</span>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Active Input Line */}
            <div className="flex items-center gap-2 text-slate-100 pt-2">
              <span className="text-neon-emerald font-bold shrink-0">harsh@adhana-ai:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help', 'skills', or 'ask rag'..."
                className="w-full bg-transparent border-none outline-none text-slate-100 font-mono text-xs md:text-sm placeholder:text-slate-600 focus:ring-0 p-0"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                onClick={() => handleRunCommand(input)}
                className="text-slate-500 hover:text-neon-emerald transition-colors p-1"
                aria-label="Submit command"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </div>

            <div ref={terminalEndRef} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default TerminalSandbox;
