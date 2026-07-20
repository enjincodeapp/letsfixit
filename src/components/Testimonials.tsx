import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star, Quote, ChevronLeft, ChevronRight, MapPin, Building } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/projects';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="relative py-28 md:py-36 bg-charcoal text-gray-100 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Verified Endorsements</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            What Our <span className="italic font-normal text-gold">Distinguished Clients</span> Say
          </h2>
          <p className="mt-4 text-gray-300 text-sm sm:text-base font-light">
            Reflections from estate owners, heritage restoration patrons, and property developers across Scotland.
          </p>
        </div>

        {/* Luxury Testimonial Card */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden glass-card border border-white/10 shadow-luxury">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]"
              >
                {/* Client Photo & Project Preview */}
                <div className="lg:col-span-5 relative h-72 lg:h-auto overflow-hidden">
                  <img
                    src={current.image}
                    alt={current.project}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-charcoal" />

                  {/* Client Avatar Overlay */}
                  <div className="absolute bottom-6 left-6 flex items-center gap-4 bg-charcoal/85 p-3 rounded-2xl border border-white/15 backdrop-blur-md">
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-12 h-12 rounded-full object-cover border border-gold"
                    />
                    <div>
                      <h4 className="font-serif text-sm font-bold text-white">{current.name}</h4>
                      <p className="text-[10px] text-gold uppercase tracking-wider">{current.role}</p>
                    </div>
                  </div>
                </div>

                {/* Quote Content */}
                <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between bg-charcoal/90">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      {/* Star Rating */}
                      <div className="flex items-center gap-1">
                        {[...Array(current.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                        ))}
                      </div>
                      <Quote className="w-10 h-10 text-gold/20" />
                    </div>

                    <p className="font-serif text-xl sm:text-2xl text-gray-100 italic font-normal leading-relaxed mb-8">
                      "{current.quote}"
                    </p>
                  </div>

                  {/* Project Details Footer */}
                  <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 text-xs text-gold font-semibold">
                        <Building className="w-3.5 h-3.5" />
                        <span>{current.project}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{current.location}</span>
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrev}
                        className="w-11 h-11 rounded-full bg-white/5 hover:bg-gold hover:text-charcoal border border-white/10 text-white flex items-center justify-center transition-all"
                        aria-label="Previous Testimonial"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-11 h-11 rounded-full bg-white/5 hover:bg-gold hover:text-charcoal border border-white/10 text-white flex items-center justify-center transition-all"
                        aria-label="Next Testimonial"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
