import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, ShieldCheck, Sparkles } from 'lucide-react';
import { useData } from '../../context/DataContext';

export default function InquiryModal({ isOpen, onClose, initialProgram = 'Executive Workshop Track' }) {
  const { addInquiry } = useData();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    designation: '',
    email: '',
    phone: '',
    program: initialProgram,
    message: ''
  });

  useEffect(() => {
    if (initialProgram) {
      setFormData((prev) => ({ ...prev, program: initialProgram }));
    }
  }, [initialProgram]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    addInquiry({
      ...formData,
      date: new Date().toISOString().split('T')[0]
    });
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      designation: '',
      email: '',
      phone: '',
      program: initialProgram || 'Executive Workshop Track',
      message: ''
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md transition-opacity duration-300"
      onClick={resetAndClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg bg-[#0E1015] text-white border border-white/15 rounded-3xl p-5 sm:p-7 shadow-2xl max-h-[94vh] overflow-y-auto my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={resetAndClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-hq-yellow hover:text-[#0A0A0A] text-white/80 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-6 sm:py-8 text-center space-y-3 sm:space-y-4">
            <div className="w-14 h-14 rounded-full bg-hq-yellow/20 text-hq-yellow flex items-center justify-center mx-auto border border-hq-yellow/40">
              <CheckCircle2 className="w-8 h-8 stroke-[2]" />
            </div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-hq-yellow font-semibold block">
              Inquiry Transmitted
            </span>
            <h3 className="font-display text-2xl font-bold tracking-tight text-white">
              Thank You, {formData.name}
            </h3>
            <p className="font-body text-xs sm:text-sm text-white/75 font-light leading-relaxed max-w-sm mx-auto">
              Your inquiry regarding <strong className="text-white">{formData.program}</strong> has been routed directly to Manny Anchan's executive advisory desk. We will reach back within 24 hours.
            </p>
            <div className="pt-3">
              <button
                type="button"
                onClick={resetAndClose}
                className="bg-hq-yellow text-[#0A0A0A] hover:bg-white font-display text-xs uppercase tracking-widest px-7 py-3 rounded-full font-bold transition-all shadow-lg cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header without 'Executive Consultation Desk' pill */}
            <div className="mb-4 sm:mb-5 pr-8">
              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
                Initiate Engagement
              </h3>
              <p className="font-body text-xs text-white/65 mt-1 font-light">
                Tailored corporate workshops, advisory sessions, and leadership immersions.
              </p>
            </div>

            {/* Form with only bottom-border fields and placeholder helper labels */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Name */}
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-0 border-b border-white/25 focus:border-hq-yellow px-0 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors"
                />
              </div>

              {/* Company & Designation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Organization / Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-white/25 focus:border-hq-yellow px-0 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Designation / Title"
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-white/25 focus:border-hq-yellow px-0 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Official Business Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-white/25 focus:border-hq-yellow px-0 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Contact Phone (with Country Code) *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-white/25 focus:border-hq-yellow px-0 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Program Interest */}
              <div>
                <input
                  type="text"
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  placeholder="Program Track / Focus Area (e.g. 12 Key Themes)"
                  className="w-full bg-transparent border-0 border-b border-white/25 focus:border-hq-yellow px-0 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows={2}
                  placeholder="Brief description of objectives, cohort size, or preferred timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-0 border-b border-white/25 focus:border-hq-yellow px-0 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/50">
                  <ShieldCheck className="w-3.5 h-3.5 text-hq-yellow shrink-0" />
                  <span>Strict NDA Confidentiality</span>
                </div>

                <button
                  type="submit"
                  className="bg-hq-yellow text-[#0A0A0A] hover:bg-white font-display text-xs uppercase tracking-widest font-bold px-6 py-2.5 rounded-full transition-all inline-flex items-center gap-2 shadow-lg cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
