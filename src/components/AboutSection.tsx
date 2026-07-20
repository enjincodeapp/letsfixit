import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Compass, Sparkles, Hammer, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-charcoal text-gray-100 overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>Architectural Philosophy</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              Where Engineering Meets <br />
              <span className="italic font-normal text-gold">High Architectural Art</span>
            </h2>
          </div>
          <p className="text-gray-400 font-sans max-w-md text-sm md:text-base leading-relaxed">
            Founded with the singular purpose of elevating Scottish residential architecture. We combine structural mastery with Apple-level industrial refinement.
          </p>
        </div>

        {/* Grid Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Large Image Card with Hover Parallax Zoom */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative group rounded-3xl overflow-hidden border border-white/10 shadow-luxury"
          >
            <div className="relative h-[480px] md:h-[580px] w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                alt="Let's Fix It Scotland Luxury Architectural Site"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
              
              {/* Floating Overlay Badge */}
              <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl border border-white/15 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-xl font-bold text-white">The Scottish Standard</h4>
                    <p className="text-xs text-gray-300 mt-1">
                      From Category-A Listed Edinburgh townhouses to dramatic Highland glass estates.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold flex items-center justify-center text-gold shrink-0 ml-4">
                    <Compass className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text and Feature Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-gold/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-5">
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                Uncompromising Craftsmanship
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                We believe true luxury is found in the details—precision stone masonry, frameless glass engineering, mass timber joinery, and subterranean wellness spaces.
              </p>
              <ul className="space-y-2 text-xs text-gray-300 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" /> Fully Passivhaus & Net-Zero Capable
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" /> Dedicated Senior Project Directors
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" /> Transparent Fixed-Price Guarantees
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-gold/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-5">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                Full Lifecycle Management
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                From initial site feasibility and council planning permissions to structural engineering and interior styling, we handle every dimension seamlessly.
              </p>
              
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold/10 hover:bg-gold text-gold hover:text-charcoal border border-gold/40 text-xs font-bold uppercase tracking-wider transition-all duration-300"
              >
                <span>Discuss Your Build</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
