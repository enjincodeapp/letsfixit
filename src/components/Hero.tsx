import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Play } from 'lucide-react';
import gsap from 'gsap';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenVideo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onOpenVideo }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure video plays programmatically
    if (videoRef.current) {
      videoRef.current.play().catch((err) => console.log('Autoplay handled:', err));
    }

    // Parallax scroll scale effect on Hero background using GSAP ScrollTrigger
    const ctx = gsap.context(() => {
      gsap.to(videoRef.current, {
        scale: 1.15,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(contentRef.current, {
        y: 100,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '60% top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal"
    >
      {/* 4K Cinematic Background Video using public/hero.mp4 */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85"
          className="w-full h-full object-cover scale-105 transition-transform duration-1000"
        />

        {/* Multi-layered cinematic gradient overlays for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-transparent to-charcoal/80 z-10" />
        <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay z-10" />
      </div>

      {/* Main Content */}
      <div
        ref={contentRef}
        className="relative z-20 max-w-6xl mx-auto px-6 pt-28 pb-16 flex flex-col items-center text-center"
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.08] tracking-tight max-w-5xl"
        >
          Building Scotland's <br />
          <span className="block mt-1">
            Most <span className="font-serif italic text-gold font-normal underline decoration-gold/40 underline-offset-8">Beautiful</span> Homes
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-8 text-base sm:text-lg md:text-xl text-gray-300 font-sans max-w-2xl font-light leading-relaxed"
        >
          Premium residential construction, renovations and property development delivered with exceptional craftsmanship, structural innovation, and timeless design.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold text-white font-bold text-sm tracking-wider uppercase hover:bg-gold-light hover:shadow-gold-glow hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-sm tracking-wider uppercase backdrop-blur-md hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <span>View Our Work</span>
          </a>

          <button
            onClick={onOpenVideo}
            className="w-full sm:w-auto px-5 py-4 rounded-full bg-charcoal/80 hover:bg-charcoal border border-gold/40 text-gold font-medium text-xs tracking-wider uppercase backdrop-blur-md hover:border-gold transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Play className="w-3.5 h-3.5 fill-gold" />
            <span>Watch Film</span>
          </button>
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10 max-w-4xl w-full"
        >
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl md:text-3xl font-bold text-white">100%</span>
            <span className="text-xs text-gray-400 font-sans tracking-wide uppercase mt-1">Turnkey Execution</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl md:text-3xl font-bold text-gold">10-Yr</span>
            <span className="text-xs text-gray-400 font-sans tracking-wide uppercase mt-1">Structural Warranty</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl md:text-3xl font-bold text-white">Net-Zero</span>
            <span className="text-xs text-gray-400 font-sans tracking-wide uppercase mt-1">Passivhaus Standards</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl md:text-3xl font-bold text-gold">Fixed</span>
            <span className="text-xs text-gray-400 font-sans tracking-wide uppercase mt-1">Price Guarantee</span>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-8 h-12 rounded-full border border-white/20 flex items-center justify-center p-1 bg-white/5 backdrop-blur-sm"
        >
          <ChevronDown className="w-4 h-4 text-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
};
