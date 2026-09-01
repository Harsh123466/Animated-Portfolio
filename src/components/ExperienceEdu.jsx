import React, { useState } from 'react';
import { education, faqs } from '../data/portfolioData';
import { GraduationCap, BookOpen, Calendar, MapPin, Plus, Minus, CheckCircle, Sparkles } from 'lucide-react';

const ExperienceEdu = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="education" className="section-shell py-28 px-6 md:px-12 border-t border-border-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="section-kicker mb-6">Education & Academic Rigor</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Education Card */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-slate-100 mb-8 leading-[1.1]">
              Academic foundation at <br />
              <span className="text-neon-emerald italic font-serif">I.T.S Engineering College.</span>
            </h2>

            <div className="glass-panel spotlight-card gradient-border-emerald p-7 sm:p-9 rounded-3xl border border-border-light hover:border-neon-emerald/40 transition-all duration-300 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 blueprint-grid opacity-35 pointer-events-none"></div>

              <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-mono text-neon-emerald uppercase tracking-widest block mb-1">
                    UNDERGRADUATE PROGRAM
                  </span>
                  <h3 className="text-2xl font-bold text-slate-100">
                    {education.degree} in {education.major}
                  </h3>
                  <p className="text-base text-neon-cyan font-medium mt-1">
                    {education.institution}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-xl bg-surface-100 border border-border-light flex items-center justify-center text-neon-emerald shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>

              {/* Meta details */}
              <div className="relative z-10 flex flex-wrap gap-4 text-xs font-mono text-slate-300 pb-6 border-b border-border-light">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-neon-emerald" />
                  <span>{education.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-neon-cyan" />
                  <span>{education.period}</span>
                </div>
              </div>

              {/* CGPA Banner */}
              <div className="relative z-10 my-6 p-4 rounded-xl bg-surface-200/90 border border-neon-emerald/30 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase block">Cumulative Grade Point Average</span>
                  <span className="text-xl font-bold text-slate-100">Academic Standing</span>
                </div>
                <div className="text-2xl font-mono font-bold text-neon-emerald">
                  {education.cgpa}
                </div>
              </div>

              {/* Coursework */}
              <div className="relative z-10">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-neon-cyan" />
                  <span>Core Computer Science Coursework</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                    className="px-2.5 py-1 rounded bg-surface-100 border border-border-light text-xs font-mono text-slate-300 hover:border-neon-cyan/40 hover:text-neon-cyan transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4 text-slate-400 text-xs font-mono tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-neon-cyan" />
              <span>Answers Up Front</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight mb-8">
              Frequently asked <span className="text-neon-cyan italic font-serif">questions.</span>
            </h3>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => toggleFaq(index)}
                    className="spotlight-card w-full text-left glass-panel rounded-2xl border border-border-light hover:border-slate-400/40 transition-all duration-200 overflow-hidden cursor-pointer"
                  >
                    <div className="p-5 flex items-center justify-between gap-4">
                      <span className="text-sm sm:text-base font-semibold text-slate-200">
                        {faq.question}
                      </span>
                      <div className="p-1 rounded-md bg-surface-100 text-slate-400 shrink-0">
                        {isOpen ? <Minus className="w-4 h-4 text-neon-emerald" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </div>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-border-light/50 pt-4 animate-fade-in">
                        {faq.answer}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ExperienceEdu;
