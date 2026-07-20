import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle, FileText, Compass, Hammer, Key, PhoneCall } from 'lucide-react';
import { TIMELINE_STEPS } from '../data/projects';

export const Timeline: React.FC = () => {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0: return <PhoneCall className="w-6 h-6 text-gold" />;
      case 1: return <Compass className="w-6 h-6 text-gold" />;
      case 2: return <FileText className="w-6 h-6 text-gold" />;
      case 3: return <Hammer className="w-6 h-6 text-gold" />;
      default: return <Key className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <section id="timeline" className="relative py-28 md:py-36 bg-charcoal-light text-gray-100 overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>The Construction Journey</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Our Architectural <span className="italic font-normal text-gold">5-Step Process</span>
          </h2>
          <p className="mt-4 text-gray-300 text-sm sm:text-base font-light">
            From initial sketch to white-glove handover, experience a structured, seamless development journey with absolute cost certainty and zero friction.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Connecting Line for Desktop/Tablet */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/40 via-gold to-gold/40 -translate-x-1/2 shadow-gold-glow" />

          {/* Timeline Steps */}
          <div className="space-y-12 md:space-y-24">
            {TIMELINE_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, delay: idx * 0.12 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Card Side */}
                  <div className="w-full md:w-1/2">
                    <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-gold/50 shadow-luxury transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-serif text-3xl font-bold text-gold">
                          {step.step}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                          {step.subtitle}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold transition-colors mb-3">
                        {step.title}
                      </h3>

                      <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                        {step.description}
                      </p>

                      <div className="space-y-2.5 pt-4 border-t border-white/10">
                        {step.details.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2.5 text-xs text-gray-300">
                            <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Icon Node */}
                  <div className="relative z-10 shrink-0">
                    <div className="w-16 h-16 rounded-full bg-charcoal border-2 border-gold flex items-center justify-center shadow-gold-glow group hover:scale-110 transition-transform">
                      {getStepIcon(idx)}
                    </div>
                  </div>

                  {/* Empty Spacer Side for desktop grid balance */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
