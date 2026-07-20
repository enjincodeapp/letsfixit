import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Tag, Calendar, ArrowRight } from 'lucide-react';
import { DEVELOPMENTS_DATA } from '../data/projects';

interface DevelopmentsProps {
  onOpenConsultation: () => void;
}

export const DevelopmentsSection: React.FC<DevelopmentsProps> = ({ onOpenConsultation }) => {
  return (
    <section id="developments" className="relative py-28 md:py-36 bg-charcoal-light text-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Investment & Land Development</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Flagship Scottish <span className="italic font-normal text-gold">Real Estate Developments</span>
          </h2>
          <p className="mt-4 text-gray-300 text-sm sm:text-base font-light">
            Bespoke estate master-planning, waterfront villas, and eco-communities crafted in prime Scottish locations for high-net-worth buyers and investors.
          </p>
        </div>

        {/* Grid of Developments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEVELOPMENTS_DATA.map((dev, idx) => (
            <motion.div
              key={dev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-gold/50 shadow-luxury transition-all duration-500 flex flex-col justify-between"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={dev.image}
                  alt={dev.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-light via-transparent to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold text-charcoal text-[10px] font-extrabold uppercase tracking-widest shadow-gold-glow">
                  {dev.status}
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col justify-between flex-1 space-y-6">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-gold font-semibold uppercase tracking-wider mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{dev.location}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    {dev.title}
                  </h3>

                  <p className="text-xs text-gray-300 font-sans">
                    {dev.type}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-gold" /> Pricing:
                    </span>
                    <span className="font-serif text-sm font-bold text-gold">{dev.startingPrice}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold" /> Handover:
                    </span>
                    <span className="text-gray-200 font-medium">{dev.completion}</span>
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 rounded-full bg-white/10 hover:bg-gold hover:text-charcoal border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Request Prospectus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
