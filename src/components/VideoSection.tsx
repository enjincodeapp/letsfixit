import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Volume2, ShieldCheck, Film } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const [isPlayingModalOpen, setIsPlayingModalOpen] = useState(false);

  return (
    <section className="relative py-28 md:py-36 bg-charcoal overflow-hidden">
      {/* Background Parallax Image & Dark Overlay */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden glass-card border border-white/10 shadow-luxury h-[480px] sm:h-[580px] group flex items-center justify-center">
          {/* Background Poster Image */}
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1920&q=85"
            alt="Let's Fix It Scotland Architectural Construction"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/40" />

          {/* Content Overlay */}
          <div className="relative z-10 text-center max-w-3xl px-6 flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-2 mb-4">
              <Film className="w-4 h-4 text-gold" />
              <span>Cinematic Documentary Film</span>
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Watch How We Build
            </h2>

            <p className="text-gray-300 text-sm sm:text-base max-w-xl font-light mb-8">
              Step inside our active sites across the Scottish Highlands, St Andrews coastal cliffs, and Edinburgh listed townhouses.
            </p>

            {/* Large Glowing Play Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlayingModalOpen(true)}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold/90 hover:bg-gold text-charcoal flex items-center justify-center shadow-gold-glow cursor-pointer transition-all duration-300"
              aria-label="Play Construction Documentary Film"
            >
              <div className="absolute -inset-2 rounded-full border border-gold/40 animate-ping opacity-50" />
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-charcoal translate-x-0.5" />
            </motion.button>

            <span className="text-xs text-gold uppercase tracking-widest font-semibold mt-4">
              Click to Play 4K Film (03:45)
            </span>
          </div>

          {/* Bottom Info Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-300 pt-4 border-t border-white/10 hidden sm:flex">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold" /> 4K Ultra-HD Drone Footage
            </span>
            <span className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-gold" /> Mastered Spatial Audio
            </span>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {isPlayingModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsPlayingModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-3xl overflow-hidden glass-card-gold border border-gold/40 shadow-luxury"
            >
              <button
                onClick={() => setIsPlayingModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-charcoal/80 text-white flex items-center justify-center border border-white/20 hover:bg-gold hover:text-charcoal transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Let's Fix It Scotland Construction Film"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
