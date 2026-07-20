import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, CheckCircle2, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactProps {
  initialProjectType?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialProjectType = 'Luxury Home' }) => {
  const [selectedType, setSelectedType] = useState<string>(initialProjectType);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    budget: '£500k - £1M',
    message: ''
  });

  const projectTypes = [
    'Luxury Home',
    'Extension',
    'Renovation',
    'Commercial',
    'Development',
    'Interior Design',
    'Landscape',
    'Other'
  ];

  const budgetRanges = [
    '£250k - £500k',
    '£500k - £1 Million',
    '£1 Million - £2.5 Million',
    '£2.5 Million - £5 Million',
    '£5 Million+'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger Confetti effect
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#C7A55B', '#E5C887', '#FFFFFF']
      });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-charcoal-light text-gray-100 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Office & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-semibold flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-gold" />
                <span>Start The Conversation</span>
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight">
                Let’s Build <br />
                <span className="italic font-normal text-gold">Something Incredible</span>
              </h2>
              <p className="mt-4 text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                Whether you own a private plot, listed townhouse, or highland development site, our senior architects and project directors are ready to advise you.
              </p>
            </div>

            {/* Office Contact Cards */}
            <div className="space-y-4">
              <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white">Edinburgh Design Studio</h4>
                  <p className="text-xs text-gray-300 mt-1">14 Charlotte Square, Edinburgh, EH2 4DJ</p>
                  <span className="text-[10px] uppercase text-gold font-semibold tracking-wider mt-2 block">
                    By Appointment Only
                  </span>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white">Direct Line</h4>
                  <p className="text-xs text-gray-300 mt-1">+44 (0) 131 555 0199</p>
                  <p className="text-xs text-gray-300">+44 (0) 7700 900 821</p>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white">Inquiries Email</h4>
                  <p className="text-xs text-gray-300 mt-1">consultations@letsfixitscotland.co.uk</p>
                  <p className="text-xs text-gray-300">architects@letsfixitscotland.co.uk</p>
                </div>
              </div>
            </div>

            {/* Trust Assurance */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-gold shrink-0" />
              <span className="text-xs text-gray-300">
                100% Confidentiality Guaranteed. NDA available prior to preliminary site appraisals.
              </span>
            </div>
          </div>

          {/* Right Column: Luxury Consultation Form */}
          <div className="lg:col-span-7">
            <div className="glass-card-gold p-8 sm:p-12 rounded-3xl border border-gold/30 shadow-luxury relative">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 text-center space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center mx-auto text-gold shadow-gold-glow">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <h3 className="font-serif text-3xl font-bold text-white">
                      Consultation Request Received
                    </h3>

                    <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-gold font-semibold">{formData.fullName}</span>. A Senior Architectural Project Director will review your site parameters and contact you within 24 hours.
                    </p>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          location: '',
                          budget: '£500k - £1M',
                          message: ''
                        });
                      }}
                      className="px-8 py-3 rounded-full bg-gold text-charcoal font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-105 transition-all"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-white mb-2">
                        Book Your Free Consultation
                      </h3>
                      <p className="text-xs text-gray-400">
                        Fill out your project requirements below to receive a detailed preliminary analysis.
                      </p>
                    </div>

                    {/* Project Type Chips */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gold font-semibold mb-3">
                        Project Type
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map((type) => (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setSelectedType(type)}
                            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                              selectedType === type
                                ? 'bg-gold text-charcoal shadow-gold-glow border-gold'
                                : 'bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs text-gray-300 font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Lord James Campbell"
                          className="w-full px-4 py-3 rounded-xl bg-charcoal/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-300 font-medium mb-2">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="j.campbell@estate.co.uk"
                          className="w-full px-4 py-3 rounded-xl bg-charcoal/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Phone & Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs text-gray-300 font-medium mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+44 7700 900 123"
                          className="w-full px-4 py-3 rounded-xl bg-charcoal/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-300 font-medium mb-2">Project Location *</label>
                        <input
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. St Andrews / Edinburgh / Highland plot"
                          className="w-full px-4 py-3 rounded-xl bg-charcoal/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Estimated Budget Select */}
                    <div>
                      <label className="block text-xs text-gray-300 font-medium mb-2">Estimated Budget Range</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-charcoal/80 border border-white/10 text-white focus:outline-none focus:border-gold transition-colors text-sm"
                      >
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-charcoal text-white">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs text-gray-300 font-medium mb-2">Project Vision / Details</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your architectural vision, site parameters, or desired completion date..."
                        className="w-full px-4 py-3 rounded-xl bg-charcoal/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors text-sm resize-none"
                      />
                    </div>

                    {/* Submit CTA Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-full bg-gradient-to-r from-gold to-gold-dark text-charcoal font-bold text-sm tracking-wider uppercase shadow-gold-glow hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-charcoal border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Book My Consultation</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
