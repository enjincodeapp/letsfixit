import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, X, Compass } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <footer className="relative bg-charcoal text-gray-400 border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Company Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center group">
              <div className="h-16 md:h-20 flex items-center justify-center transition-all duration-300">
                <img
                  src="/letsfixit_white.png"
                  alt="Let's Fix It Scotland Logo"
                  className="h-full w-auto object-contain filter drop-shadow-lg"
                />
              </div>
            </a>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              Pioneering ultra-modern Scottish residential architecture, heritage restorations, and bespoke property developments built to enduring perfection.
            </p>

            {/* CTA Button */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 rounded-full bg-gold hover:bg-gold-light text-white font-semibold text-xs uppercase tracking-wider shadow-gold-glow transition-all"
              >
                Book Private Consultation
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold font-bold">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              {['Home', 'About', 'Services', 'Projects', 'Developments', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-gold transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold font-bold">Services</h4>
            <ul className="space-y-2.5 text-xs">
              {[
                'Luxury Home Construction',
                'Architectural Glass Extensions',
                'Heritage Townhouse Restoration',
                'Highland Eco Manor Development',
                'Subterranean Wellness Suites',
                'Passivhaus & Net-Zero Builds',
                'Interior Design & Curation'
              ].map((svc) => (
                <li key={svc}>
                  <a href="#services" className="hover:text-gold transition-colors truncate block">
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices & Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold font-bold">Scottish Studios</h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Edinburgh Studio:</span>
                  <p className="text-gray-400">14 Charlotte Square, EH2 4DJ</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Highland & Fife Office:</span>
                  <p className="text-gray-400">St Andrews & Aberdeenshire Hubs</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span className="text-white font-medium">+44 (0) 7963 774 535</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span className="text-white font-medium">consultations@letsfixitscotland.co.uk</span>
              </div>

              {/* Map Trigger */}
              <button
                onClick={() => setMapOpen(true)}
                className="mt-3 px-4 py-2 rounded-full bg-white/5 hover:bg-gold hover:text-white border border-white/10 text-gray-200 font-semibold text-[10px] uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>View Interactive Location Map</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Let's Fix It Scotland Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">BIM Warranties</a>
          </div>
        </div>
      </div>

      {/* Google Maps Modal */}
      <AnimatePresence>
        {mapOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setMapOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card-gold rounded-3xl max-w-4xl w-full border border-gold/40 shadow-luxury overflow-hidden relative"
            >
              <button
                onClick={() => setMapOpen(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-charcoal/80 text-white flex items-center justify-center border border-white/20 hover:bg-gold hover:text-white transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 bg-charcoal border-b border-white/10">
                <h3 className="font-serif text-2xl font-bold text-white">Let's Fix It Scotland — Studio Network</h3>
                <p className="text-xs text-gold mt-1">Edinburgh • St Andrews • Loch Lomond • Aberdeenshire</p>
              </div>

              <div className="relative aspect-video w-full">
                <iframe
                  title="Let's Fix It Scotland Edinburgh Studio Location"
                  className="w-full h-full border-0 filter grayscale invert contrast-125"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.123456789!2d-3.207!3d55.952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c79123456789%3A0x123456789abcdef!2sCharlotte%20Square%2C%20Edinburgh%20EH2%204DJ%2C%20UK!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};
