import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Maximize2,
  Utensils,
  Bath,
  Layers,
  Building2,
  Briefcase,
  Compass,
  Palette,
  CheckSquare,
  ArrowUpRight,
  Sparkles,
  Check,
  X
} from 'lucide-react';
import { SERVICES_DATA } from '../data/projects';

interface ServicesProps {
  onOpenConsultation: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenConsultation }) => {
  const [selectedService, setSelectedService] = useState<typeof SERVICES_DATA[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Build' | 'Renovation' | 'Design'>('All');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-6 h-6 text-gold" />;
      case 'Maximize2': return <Maximize2 className="w-6 h-6 text-gold" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-gold" />;
      case 'Bath': return <Bath className="w-6 h-6 text-gold" />;
      case 'Layers': return <Layers className="w-6 h-6 text-gold" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-gold" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-gold" />;
      case 'Compass': return <Compass className="w-6 h-6 text-gold" />;
      case 'Palette': return <Palette className="w-6 h-6 text-gold" />;
      default: return <CheckSquare className="w-6 h-6 text-gold" />;
    }
  };

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Build') return ['Luxury Home Construction', 'Property Development', 'Commercial Construction', 'House Extensions'].includes(service.title);
    if (activeFilter === 'Renovation') return ['Kitchen Renovations', 'Bathroom Renovations', 'Loft Conversions'].includes(service.title);
    if (activeFilter === 'Design') return ['Architecture & Planning', 'Interior Design', 'Project Management'].includes(service.title);
    return true;
  });

  return (
    <section id="services" className="relative py-28 md:py-36 bg-charcoal-light text-gray-100 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>Bespoke Solutions</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
              Our Architectural & <br />
              <span className="italic font-normal text-gold">Construction Capabilities</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-charcoal/80 p-1.5 rounded-full border border-white/10 self-start md:self-auto">
            {(['All', 'Build', 'Renovation', 'Design'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gold text-charcoal shadow-gold-glow'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer rounded-3xl overflow-hidden glass-card border border-white/10 hover:border-gold/50 shadow-luxury transition-all duration-500 flex flex-col justify-between"
            >
              {/* Card Image Header */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-light via-charcoal-light/40 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-charcoal/80 border border-white/10 text-[10px] font-semibold tracking-widest uppercase text-gold backdrop-blur-md">
                  {service.category}
                </div>

                {/* Icon Circle */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-2xl bg-charcoal/90 border border-gold/40 flex items-center justify-center backdrop-blur-md group-hover:scale-110 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                  {React.cloneElement(getIcon(service.iconName), {
                    className: 'w-6 h-6 text-gold group-hover:text-charcoal transition-colors'
                  })}
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gold font-semibold uppercase tracking-wider group-hover:underline">
                    Explore Details
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-gold flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-charcoal transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card-gold rounded-3xl max-w-2xl w-full border border-gold/40 shadow-luxury overflow-hidden relative my-8"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-charcoal/80 text-white flex items-center justify-center border border-white/20 hover:bg-gold hover:text-charcoal transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs uppercase tracking-widest text-gold font-bold">
                    {selectedService.category} Service
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-gray-200 font-sans text-base leading-relaxed">
                  {selectedService.description}
                </p>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-3">Key Features & Deliverables</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-200">
                        <Check className="w-4 h-4 text-gold shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-gray-400">
                    Custom architectural scope tailored to your site specifications.
                  </span>
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      onOpenConsultation();
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-gold text-charcoal font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-105 transition-all shrink-0"
                  >
                    Request Proposal
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
