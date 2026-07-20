import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Award, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { STATS_DATA } from '../data/projects';

function AnimatedCounter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight">
      <span className="text-gold">{prefix}</span>
      {count}
      <span className="text-gold">{suffix}</span>
    </span>
  );
}

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative py-28 md:py-36 bg-charcoal text-gray-100 overflow-hidden border-t border-b border-white/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Proven Track Record</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Why Scotland’s Most Discerning <br />
            <span className="italic font-normal text-gold">Clients Choose Us</span>
          </h2>
          <p className="mt-4 text-gray-300 text-sm sm:text-base font-light">
            We operate with absolute transparency, rigorous engineering controls, and white-glove client dedication from site acquisition through to final key handover.
          </p>
        </div>

        {/* Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS_DATA.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-gold/40 shadow-luxury text-center flex flex-col items-center justify-center group hover:bg-charcoal/80 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-charcoal transition-all duration-300">
                {idx === 0 && <Award className="w-7 h-7" />}
                {idx === 1 && <ShieldCheck className="w-7 h-7" />}
                {idx === 2 && <Users className="w-7 h-7" />}
                {idx === 3 && <TrendingUp className="w-7 h-7" />}
              </div>

              <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />

              <h3 className="font-serif text-xl font-bold text-white mt-3 mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-gray-400 font-sans">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
