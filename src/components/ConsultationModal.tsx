import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedType, setSelectedType] = useState('Luxury Home');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    budget: '£1 Million - £2.5 Million',
    message: ''
  });

  const projectTypes = ['Luxury Home', 'Extension', 'Renovation', 'Commercial', 'Development', 'Interior Design'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.5 },
        colors: ['#C7A55B', '#E5C887', '#FFFFFF']
      });
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card-gold rounded-3xl max-w-2xl w-full border border-gold/40 shadow-luxury overflow-hidden relative my-8 p-6 sm:p-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-charcoal/80 text-white flex items-center justify-center border border-white/20 hover:bg-gold hover:text-charcoal transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center mx-auto text-gold shadow-gold-glow">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h3 className="font-serif text-3xl font-bold text-white">
                  Consultation Confirmed
                </h3>

                <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-gold font-semibold">{formData.fullName}</span>. Our Architectural Director will be in touch shortly to confirm your private meeting.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-8 py-3.5 rounded-full bg-gold text-charcoal font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-105 transition-all"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold font-bold flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-gold" />
                    <span>Private Consultation</span>
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-white">
                    Book a Free Architectural Consultation
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Direct meeting with senior partners at our Edinburgh studio or on-site.
                  </p>
                </div>

                {/* Project Types */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gold font-semibold mb-2">
                    Select Project Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                          selectedType === type
                            ? 'bg-gold text-charcoal shadow-gold-glow'
                            : 'bg-white/5 border border-white/10 text-gray-300 hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alistair Macleod"
                      className="w-full px-4 py-2.5 rounded-xl bg-charcoal/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="a.macleod@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-charcoal/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-300 mb-1">Telephone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 7700 900 888"
                      className="w-full px-4 py-2.5 rounded-xl bg-charcoal/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-300 mb-1">Property / Site Location</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Edinburgh / Fife"
                      className="w-full px-4 py-2.5 rounded-xl bg-charcoal/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-300 mb-1">Message / Key Objectives</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Brief description of your planned build, timeline, or site specifications..."
                    className="w-full px-4 py-2.5 rounded-xl bg-charcoal/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-gold text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-full bg-gold text-charcoal font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-charcoal border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Confirm Consultation Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                  <span>Strict NDA & Privacy Guaranteed</span>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
