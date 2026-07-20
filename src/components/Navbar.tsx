import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, PhoneCall, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section for indicator
      const sections = ['home', 'about', 'services', 'projects', 'developments', 'timeline', 'testimonials', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Developments', href: '#developments', id: 'developments' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none"
      >
        <nav
          className={`pointer-events-auto transition-all duration-500 rounded-full flex items-center justify-between px-6 py-3 md:px-8 md:py-3.5 max-w-7xl w-full border ${
            scrolled
              ? 'glass-nav shadow-luxury border-white/10 bg-charcoal/90 backdrop-blur-xl'
              : 'bg-charcoal/60 backdrop-blur-md border-white/15 shadow-2xl'
          }`}
        >
          {/* Bigger Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="flex items-center group shrink-0"
          >
            <div className="h-12 md:h-16 flex items-center justify-center transition-all duration-300">
              <img
                src="/letsfixit_white.png"
                alt="Let's Fix It Scotland Logo"
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-xl"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gold rounded-full -z-10 shadow-gold-glow"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold hover:bg-gold-light text-white font-semibold text-xs tracking-wider uppercase hover:shadow-gold-glow hover:scale-[1.03] active:scale-95 transition-all duration-300"
            >
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center text-white transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-charcoal/95 backdrop-blur-2xl flex flex-col justify-between px-6 pt-28 pb-10"
          >
            <div className="flex flex-col gap-4 max-w-md mx-auto w-full">
              <div className="flex items-center justify-center mb-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <img src="/letsfixit_white.png" alt="Let's Fix It Logo" className="h-14 w-auto object-contain" />
              </div>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="flex items-center justify-between text-2xl font-serif text-white hover:text-gold transition-colors py-2 border-b border-white/10"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-gold" />
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4 max-w-md mx-auto w-full">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-4 rounded-full bg-gold text-white font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-gold-glow"
              >
                <span>Book a Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-xs text-gray-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-gold" /> +44 (0) 131 555 0199
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold" /> Edinburgh & Highlands
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
