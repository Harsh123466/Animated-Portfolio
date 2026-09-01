import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-lg bg-surface-100/95 border border-neon-emerald/40 text-slate-100 shadow-2xl backdrop-blur-xl animate-fade-in transition-all">
      {type === 'success' && <CheckCircle2 className="w-5 h-5 text-neon-emerald shrink-0 animate-pulse" />}
      {type === 'error' && <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />}
      {type === 'info' && <Info className="w-5 h-5 text-neon-cyan shrink-0" />}
      
      <p className="text-sm font-medium pr-2">{message}</p>
      
      <button 
        onClick={onClose}
        className="text-slate-400 hover:text-slate-200 transition-colors ml-auto p-1"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;
