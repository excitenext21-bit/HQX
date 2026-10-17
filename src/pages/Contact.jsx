import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2, Calendar, Users, Building, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Contact() {
  const { addInquiry } = useData();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    designation: '',
    email: '',
    phone: '',
    program: 'Leadership Deep Dive',
    headcount: '25-50 Executives',
    preferredDate: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addInquiry({
      ...form,
      date: new Date().toISOString().split('T')[0]
    });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Header */}
      <section className="bg-hq-black text-hq-white pt-28 pb-20 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-hq-yellow/20 border border-hq-yellow/40 rounded-full text-hq-yellow text-xs font-mono uppercase tracking-widest mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>Direct Corporate Engagements</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl tracking-tighter font-semibold mb-4">
              Book <span className="text-hq-yellow">Manny Anchan</span>
            </h1>
            <p className="font-body text-base md:text-lg text-hq-white/80 max-w-xl font-light leading-relaxed">
              Reserve leadership immersions, executive offsites, disruptive townhalls, or digital enterprise licenses.
            </p>
          </div>

          <div className="bg-hq-yellow text-hq-black p-6 rounded-2xl max-w-sm shadow-xl w-full lg:w-auto">
            <div className="text-[10px] font-mono uppercase tracking-widest text-hq-black/70 mb-1">Direct Priority Desk</div>
            <a href="tel:+919700100800" className="text-2xl font-display font-bold hover:underline block mb-2">
              +91 97001 00800
            </a>
            <div className="text-xs font-body font-light text-hq-black/80">
              Immediate WhatsApp / Executive Secretariat Ingestion
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Form & Corporate Details */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-hq-black/50 mb-2 font-semibold">
                Client Relations
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
                Let's Transform Your Corporate Culture
              </h2>
              <p className="font-body text-xs md:text-sm text-hq-black/75 font-light leading-relaxed">
                Whether you are orchestrating an annual C-Suite retreat or a high-velocity workshop for 500 managers, our advisory team curates a tailored diagnostic and rollout plan.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-hq-gray border border-hq-black/10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-hq-black text-hq-yellow flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-hq-black/50">Priority Hotline</div>
                  <a href="tel:+919700100800" className="font-display text-lg font-bold hover:text-hq-yellow transition-colors">
                    +91 97001 00800
                  </a>
                  <div className="text-xs text-hq-black/60 font-light mt-0.5">Manny Anchan Executive Office</div>
                </div>
              </div>

              <div className="p-6 bg-hq-gray border border-hq-black/10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-hq-black text-hq-yellow flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-hq-black/50">Official Inquiries</div>
                  <a href="mailto:connect@happinesssamurai.com" className="font-display text-base font-bold hover:text-hq-yellow transition-colors">
                    connect@happinesssamurai.com
                  </a>
                  <div className="text-xs text-hq-black/60 font-light mt-0.5">Response within 24 business hours</div>
                </div>
              </div>

              <div className="p-6 bg-hq-gray border border-hq-black/10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-hq-black text-hq-yellow flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-hq-black/50">Registered Corporate HQ</div>
                  <div className="font-body text-xs text-hq-black font-semibold mt-1">
                    HAPPINESS QUOTIENT GLOBAL PRIVATE LIMITED
                  </div>
                  <div className="font-body text-xs text-hq-black/70 font-light mt-0.5">
                    203/B, Koteshwar Palace, Jeeva Mahale Marg, Andheri East, Mumbai, Maharashtra
                  </div>
                  <div className="text-[10px] font-mono text-hq-black/50 mt-1">
                    GSTIN: 27AAFCH1083G1ZP
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-hq-yellow/20 border border-hq-yellow rounded-2xl flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-hq-black shrink-0" />
              <div className="text-xs font-body text-hq-black/80">
                <strong>Confidentiality Assured:</strong> All corporate diagnostics and team wellness metrics are protected under strict non-disclosure protocols.
              </div>
            </div>
          </div>

          {/* Right Lead Ingestion Form */}
          <div className="lg:col-span-7">
            <div className="bg-hq-black text-hq-white p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
              <div className="mb-8">
                <span className="text-xs font-mono uppercase tracking-widest text-hq-yellow">Executive Booking Form</span>
                <h3 className="font-display text-3xl font-semibold mt-1">Initiate Intervention</h3>
              </div>

              {submitted ? (
                <div className="bg-hq-yellow text-hq-black p-10 rounded-2xl text-center space-y-4">
                  <CheckCircle2 className="w-14 h-14 mx-auto stroke-[1.5]" />
                  <h4 className="font-display text-2xl font-bold">Booking Request Transmitted</h4>
                  <p className="font-body text-xs md:text-sm font-light max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{form.name}</strong>. Your inquiry has been routed to Manny Anchan's executive desk. We will reach out via <strong>{form.phone}</strong> and <strong>{form.email}</strong> within 24 hours.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setForm({ name: '', company: '', designation: '', email: '', phone: '', program: 'Leadership Deep Dive', headcount: '25-50 Executives', preferredDate: '', message: '' }); }}
                    className="bg-hq-black text-hq-white font-display text-xs uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-body">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-white/60 mb-1">Your Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Alok Singhania"
                        className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-hq-yellow" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-white/60 mb-1">Designation / Title</label>
                      <input 
                        type="text" 
                        value={form.designation}
                        onChange={(e) => setForm({ ...form, designation: e.target.value })}
                        placeholder="e.g. Chief Human Resources Officer"
                        className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-hq-yellow" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-white/60 mb-1">Company / Organization *</label>
                      <input 
                        type="text" 
                        required 
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="e.g. HDFC Life"
                        className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-hq-yellow" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-white/60 mb-1">Work Email *</label>
                      <input 
                        type="email" 
                        required 
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="alok.s@hdfclife.com"
                        className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-hq-yellow" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-white/60 mb-1">Direct Contact Phone * (Linked to +91 97001 00800)</label>
                      <input 
                        type="tel" 
                        required 
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 97001 00800"
                        className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-hq-yellow font-mono" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-white/60 mb-1">Preferred Program</label>
                      <select 
                        value={form.program}
                        onChange={(e) => setForm({ ...form, program: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-hq-yellow"
                      >
                        <option value="Leadership Deep Dive" className="bg-hq-black">Leadership Deep Dive (Offsite)</option>
                        <option value="Engaging Workshops" className="bg-hq-black">Engaging Workshops (Hands-on)</option>
                        <option value="Keynotes & Friday Talks" className="bg-hq-black">Keynotes & Friday Talks</option>
                        <option value="100-Day Micro Courses (Bulk License)" className="bg-hq-black">100-Day Micro Courses (Enterprise)</option>
                        <option value="HappyU Corporate Deployment" className="bg-hq-black">HappyU Corporate App Deployment</option>
                        <option value="Executive 1-on-1 Retainer" className="bg-hq-black">Executive 1-on-1 Retainer with Manny</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-white/60 mb-1">Expected Cohort Size</label>
                      <select 
                        value={form.headcount}
                        onChange={(e) => setForm({ ...form, headcount: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-hq-yellow"
                      >
                        <option value="15-30 Executives" className="bg-hq-black">15 - 30 Executives</option>
                        <option value="30-75 Senior Leaders" className="bg-hq-black">30 - 75 Senior Leaders</option>
                        <option value="75-200 Participants" className="bg-hq-black">75 - 200 Participants</option>
                        <option value="200-1000+ Enterprise" className="bg-hq-black">200 - 1000+ Enterprise Cohort</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono uppercase text-white/60 mb-1">Target Date / Quarter</label>
                      <input 
                        type="text" 
                        value={form.preferredDate}
                        onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                        placeholder="e.g. November 2026 / Q4 Offsite"
                        className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-hq-yellow" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-white/60 mb-1">Specific Context or Questions</label>
                    <textarea 
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Share details about current organizational focus, venue preferences, or executive needs..."
                      className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-hq-yellow"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-hq-yellow text-hq-black font-display font-semibold uppercase tracking-widest py-4 text-xs hover:bg-white transition-all rounded-full shadow-xl"
                  >
                    Transmit Corporate Booking Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
