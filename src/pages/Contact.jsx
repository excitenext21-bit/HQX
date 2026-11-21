import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useData } from '../context/DataContext';
import ParticleConnectionCanvas from '../components/common/ParticleConnectionCanvas';

export default function Contact() {
  const { addInquiry } = useData();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    designation: '',
    email: '',
    phone: '',
    program: '',
    headcount: '',
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
      {/* Dark Hero Section: Animated 3D Point-Cloud Connection & Flowing Particle Dunes */}
      <section className="bg-[#0A0A0A] text-white min-h-[100svh] lg:h-[100svh] lg:min-h-[560px] lg:max-h-[1080px] flex flex-col justify-between pt-20 sm:pt-24 pb-0 border-b border-white/10 relative overflow-hidden w-full">
        {/* Animated Full-Bleed Point-Cloud Particle Canvas (Monochrome White Dots) */}
        <ParticleConnectionCanvas />

        {/* Subtle Legibility Vignette */}
        <div className="absolute inset-0 lg:inset-y-0 lg:right-auto lg:w-1/2 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/45 to-transparent lg:bg-gradient-to-r lg:from-[#0A0A0A]/85 lg:via-[#0A0A0A]/45 lg:to-transparent pointer-events-none" />

        {/* Left Side Vertical Text (Desktop Only) */}
        <div className="hidden lg:flex absolute left-3 sm:left-6 lg:left-8 xl:left-12 inset-y-0 z-20 flex-col justify-center items-center pointer-events-none select-none">
          <div
            className="flex items-center gap-3 sm:gap-4"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span className="font-display text-[15px] sm:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-hq-yellow drop-shadow-md">
              CONTACT HQX
            </span>
            <span className="w-px h-8 sm:h-14 bg-white/25" />
          </div>
        </div>

        {/* Main Framing Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex-1 flex items-center py-3 sm:py-4 min-h-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full">
            {/* Left Column: Existing Content in About Us Editorial Style */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col justify-center"
            >
              <div className="max-w-md">
                <h1
                  style={{ fontFamily: '"Geist", Arial, sans-serif', fontWeight: 300 }}
                  className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-light tracking-tight text-white leading-[1.15] mb-5"
                >
                  Book <br />
                  <span
                    style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                    className="text-hq-yellow font-bold"
                  >
                    Manny Anchan
                  </span>
                </h1>

                <p className="font-body text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8">
                  Reserve leadership immersions, executive offsites, disruptive townhalls, or digital enterprise licenses.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-6">
                  <a
                    href="#contact-form"
                    className="group relative inline-flex items-center justify-between gap-8 py-3.5 px-2 font-display font-medium text-xs tracking-[0.2em] text-white hover:text-hq-yellow transition-colors duration-300 uppercase"
                  >
                    {/* Top border line */}
                    <span className="absolute top-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />

                    <span className="relative z-10 font-semibold tracking-widest">INITIATE INQUIRY</span>

                    <svg
                      className="w-[22px] h-[11px] inline-block transition-transform duration-300 group-hover:translate-x-1.5 flex-shrink-0"
                      viewBox="0 0 20 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="0" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="1.2" />
                      <polyline points="15 1, 20 5, 15 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    {/* Bottom border line */}
                    <span className="absolute bottom-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Open Breathing Space for the 3D Point-Cloud Figures */}
            <div className="lg:col-span-7 min-h-[290px] sm:min-h-[340px] lg:min-h-0 pointer-events-none select-none" />
          </div>
        </div>

        {/* DOCKED PRIORITY DESK STRIP (MATCHING ABOUT US HERO SECTION) */}
        <div className="w-full bg-[#0A0A0A]/95 text-white/80 py-3.5 sm:py-4 px-6 border-t border-white/10 overflow-hidden relative z-20 hero-docked-strip">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-[13px] font-mono uppercase tracking-widest">
            <a href="tel:+919700100800" className="flex items-center gap-2 hover:text-hq-yellow transition-colors">
              <span className="text-hq-yellow font-bold">PRIORITY DESK</span>
              <span className="text-white/80">+91 97001 00800</span>
            </a>
            <span className="text-white/20 hidden md:inline">•</span>
            <a href="mailto:connect@happinesssamurai.com" className="flex items-center gap-2 hover:text-hq-yellow transition-colors">
              <span className="text-hq-yellow font-bold">EMAIL</span>
              <span className="text-white/80">connect@happinesssamurai.com</span>
            </a>
            <span className="text-white/20 hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">24 HRS</span>
              <span className="text-white/70">Executive Desk Turnaround</span>
            </div>
            <span className="text-white/20 hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">MUMBAI HQ</span>
              <span className="text-white/70">NDA Confidentiality Assured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Form & Corporate Details */}
      <section id="contact-form" className="py-20 sm:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
                Let's Transform Your Corporate Culture
              </h2>
              <p className="font-body text-xs md:text-sm text-hq-black/75 font-light leading-relaxed">
                Whether you are orchestrating an annual C-Suite retreat or a high-velocity workshop for 500 managers, our advisory team curates a tailored diagnostic and rollout plan.
              </p>
            </div>

            <div className="divide-y divide-hq-black/10">
              <div className="py-5 first:pt-2 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-hq-black text-hq-yellow flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <a href="tel:+919700100800" className="font-display text-lg font-bold hover:text-hq-yellow transition-colors">
                    +91 97001 00800
                  </a>
                  <div className="text-xs text-hq-black/60 font-light mt-0.5">Manny Anchan Executive Office</div>
                </div>
              </div>

              <div className="py-5 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-hq-black text-hq-yellow flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <a href="mailto:connect@happinesssamurai.com" className="font-display text-base font-bold hover:text-hq-yellow transition-colors">
                    connect@happinesssamurai.com
                  </a>
                  <div className="text-xs text-hq-black/60 font-light mt-0.5">Response within 24 business hours</div>
                </div>
              </div>

              <div className="py-5 last:pb-2 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-hq-black text-hq-yellow flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-body text-xs text-hq-black font-semibold">
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
                <form onSubmit={handleSubmit} className="space-y-6 text-xs font-body">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <input 
                        type="text" 
                        required 
                        aria-label="Your Full Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your Full Name *"
                        className="w-full bg-transparent border-0 border-b border-white/25 px-0 py-3 text-white placeholder:text-white/35 focus:outline-none focus:border-hq-yellow transition-colors" 
                      />
                    </div>
                    <div>
                      <input 
                        type="text" 
                        aria-label="Designation / Title"
                        value={form.designation}
                        onChange={(e) => setForm({ ...form, designation: e.target.value })}
                        placeholder="Designation / Title"
                        className="w-full bg-transparent border-0 border-b border-white/25 px-0 py-3 text-white placeholder:text-white/35 focus:outline-none focus:border-hq-yellow transition-colors" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <input 
                        type="text" 
                        required 
                        aria-label="Company / Organization"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Company / Organization *"
                        className="w-full bg-transparent border-0 border-b border-white/25 px-0 py-3 text-white placeholder:text-white/35 focus:outline-none focus:border-hq-yellow transition-colors" 
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        required 
                        aria-label="Work Email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Work Email *"
                        className="w-full bg-transparent border-0 border-b border-white/25 px-0 py-3 text-white placeholder:text-white/35 focus:outline-none focus:border-hq-yellow transition-colors" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <input 
                        type="tel" 
                        required 
                        aria-label="Direct Contact Phone"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="Direct Contact Phone *"
                        className="w-full bg-transparent border-0 border-b border-white/25 px-0 py-3 text-white placeholder:text-white/35 focus:outline-none focus:border-hq-yellow transition-colors" 
                      />
                    </div>
                    <div>
                      <select 
                        aria-label="Preferred Program"
                        value={form.program}
                        onChange={(e) => setForm({ ...form, program: e.target.value })}
                        className={`w-full bg-transparent border-0 border-b border-white/25 px-0 py-3 focus:outline-none focus:border-hq-yellow transition-colors ${form.program ? 'text-white' : 'text-white/35'}`}
                      >
                        <option value="" className="bg-hq-black text-white/50">Preferred Program</option>
                        <option value="Leadership Deep Dive" className="bg-hq-black text-white">Leadership Deep Dive (Offsite)</option>
                        <option value="Engaging Workshops" className="bg-hq-black text-white">Engaging Workshops (Hands-on)</option>
                        <option value="Keynotes & Friday Talks" className="bg-hq-black text-white">Keynotes &amp; Friday Talks</option>
                        <option value="100-Day Micro Courses (Bulk License)" className="bg-hq-black text-white">100-Day Micro Courses (Enterprise)</option>
                        <option value="HappyU Corporate Deployment" className="bg-hq-black text-white">HappyU Corporate App Deployment</option>
                        <option value="Executive 1-on-1 Retainer" className="bg-hq-black text-white">Executive 1-on-1 Retainer with Manny</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <select 
                        aria-label="Expected Cohort Size"
                        value={form.headcount}
                        onChange={(e) => setForm({ ...form, headcount: e.target.value })}
                        className={`w-full bg-transparent border-0 border-b border-white/25 px-0 py-3 focus:outline-none focus:border-hq-yellow transition-colors ${form.headcount ? 'text-white' : 'text-white/35'}`}
                      >
                        <option value="" className="bg-hq-black text-white/50">Expected Cohort Size</option>
                        <option value="15-30 Executives" className="bg-hq-black text-white">15 - 30 Executives</option>
                        <option value="30-75 Senior Leaders" className="bg-hq-black text-white">30 - 75 Senior Leaders</option>
                        <option value="75-200 Participants" className="bg-hq-black text-white">75 - 200 Participants</option>
                        <option value="200-1000+ Enterprise" className="bg-hq-black text-white">200 - 1000+ Enterprise Cohort</option>
                      </select>
                    </div>
                    <div>
                      <input 
                        type="text" 
                        aria-label="Target Date / Quarter"
                        value={form.preferredDate}
                        onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                        placeholder="Target Date / Quarter"
                        className="w-full bg-transparent border-0 border-b border-white/25 px-0 py-3 text-white placeholder:text-white/35 focus:outline-none focus:border-hq-yellow transition-colors" 
                      />
                    </div>
                  </div>

                  <div>
                    <textarea 
                      rows={3}
                      aria-label="Specific Context or Questions"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Specific Context or Questions"
                      className="w-full bg-transparent border-0 border-b border-white/25 px-0 py-3 text-white placeholder:text-white/35 focus:outline-none focus:border-hq-yellow transition-colors resize-none"
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
