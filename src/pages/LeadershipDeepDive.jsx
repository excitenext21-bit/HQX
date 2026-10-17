import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Crown, CheckCircle2, Calendar, Users, MapPin, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function LeadershipDeepDive() {
  const { addInquiry } = useData();
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    headcount: '25-50 Executives',
    preferredDate: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addInquiry({
      ...form,
      program: 'Leadership Deep Dive'
    });
    setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Hero */}
      <section className="bg-hq-black text-hq-white pt-28 pb-20 px-6 md:px-12 relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-hq-yellow/20 border border-hq-yellow/40 rounded-full text-hq-yellow text-xs font-mono uppercase tracking-widest mb-4">
              <Crown className="w-3.5 h-3.5" />
              <span>Flagship Executive Intervention</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl tracking-tighter font-semibold mb-4">
              Leadership <br />
              <span className="text-hq-yellow">Deep Dive</span>
            </h1>
            <p className="font-body text-base md:text-lg text-hq-white/80 max-w-xl font-light leading-relaxed">
              A transformative 2-to-3 day offsite immersion engineered specifically for Board Members, CXOs, and Vice Presidents navigating hyper-scale pressure.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl max-w-sm backdrop-blur-md">
            <div className="text-xs font-mono uppercase text-hq-yellow mb-2">Program Snapshot</div>
            <div className="text-sm font-body space-y-2 text-white/90">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-hq-yellow" /> 2 - 3 Full Days (Residential / Offsite)</div>
              <div className="flex items-center gap-2"><Users className="w-4 h-4 text-hq-yellow" /> 15 to 60 Senior Leaders</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-hq-yellow" /> Domestic & Global Offsite Locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Grid */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-hq-black/50 mb-2 font-semibold">
            The 5 Core Modules
          </div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight font-semibold">
            Curriculum Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              module: 'Module 01',
              title: 'Strategic Vision & Horizon Scanning',
              desc: 'Shifting leaders from frantic day-to-day firefighting to expansive 3-year contextual foresight and purpose alignment.'
            },
            {
              module: 'Module 02',
              title: 'Biological & Mental Resilience',
              desc: 'Mastering vagal tone stimulation, neuro-recovery protocols, and stress neutralization under extreme board scrutiny.'
            },
            {
              module: 'Module 03',
              title: 'Attentional Architecture & Deep Focus',
              desc: 'Re-engineering executive calendar hygiene, eliminating cognitive debris, and institutionalizing uninterrupted flow states.'
            },
            {
              module: 'Module 04',
              title: 'High-Trust Team Cohesion',
              desc: 'Conducting structured vulnerability exercises that break territorial silos and construct psychological safety.'
            },
            {
              module: 'Module 05',
              title: 'Eudaimonic Culture Stewardship',
              desc: 'Equipping leaders with repeatable habits to cascade joy, enthusiasm, and uncompromising accountability down through their ranks.'
            },
            {
              module: 'Bonus Immersion',
              title: '1-on-1 Executive Diagnosis with Manny',
              desc: 'Confidential strategic advisory session directly with Manny Anchan to audit personal stressors and life alignment.'
            }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-hq-gray border border-hq-black/15 shadow-sm hover:border-hq-black transition-all">
              <span className="font-mono text-xs text-hq-yellow bg-hq-black px-2.5 py-1 rounded uppercase font-semibold">
                {item.module}
              </span>
              <h3 className="font-display text-xl font-semibold mt-4 mb-3">
                {item.title}
              </h3>
              <p className="font-body text-xs text-hq-black/70 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Dedicated Lead-Gen Form as required by PDF */}
        <div className="bg-hq-black text-hq-white p-8 md:p-14 rounded-3xl border border-hq-black/20 shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="font-mono text-xs uppercase tracking-widest text-hq-yellow">Dedicated Program Inquiries</span>
              <h3 className="font-display text-3xl md:text-5xl tracking-tight font-semibold mt-2">
                Book a Leadership Deep Dive
              </h3>
              <p className="font-body text-xs md:text-sm text-hq-white/70 font-light mt-2">
                Connect with Manny's executive secretariat to evaluate dates and cohort customization.
              </p>
            </div>

            {success ? (
              <div className="bg-hq-yellow text-hq-black p-8 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 mx-auto stroke-[1.5]" />
                <h4 className="font-display text-2xl font-semibold">Inquiry Dispatched</h4>
                <p className="text-xs font-body font-light">
                  Thank you! Manny Anchan's corporate office will respond within 24 hours. For immediate requests, call +91 97001 00800.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-body">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block uppercase font-mono tracking-wider text-[10px] text-hq-white/60 mb-1">Your Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Rajiv Mehta"
                      className="w-full bg-white/10 border border-white/20 p-3 text-white placeholder:text-white/40 focus:border-hq-yellow focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block uppercase font-mono tracking-wider text-[10px] text-hq-white/60 mb-1">Company / Organization *</label>
                    <input 
                      type="text" 
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="e.g. TATA Capital / Global Corp"
                      className="w-full bg-white/10 border border-white/20 p-3 text-white placeholder:text-white/40 focus:border-hq-yellow focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block uppercase font-mono tracking-wider text-[10px] text-hq-white/60 mb-1">Corporate Email *</label>
                    <input 
                      type="email" 
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="r.mehta@tatacapital.com"
                      className="w-full bg-white/10 border border-white/20 p-3 text-white placeholder:text-white/40 focus:border-hq-yellow focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block uppercase font-mono tracking-wider text-[10px] text-hq-white/60 mb-1">Direct Phone Number *</label>
                    <input 
                      type="tel" 
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98200 00000"
                      className="w-full bg-white/10 border border-white/20 p-3 text-white placeholder:text-white/40 focus:border-hq-yellow focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block uppercase font-mono tracking-wider text-[10px] text-hq-white/60 mb-1">Executive Headcount</label>
                    <select 
                      value={form.headcount}
                      onChange={(e) => setForm({ ...form, headcount: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 p-3 text-white focus:border-hq-yellow focus:outline-none"
                    >
                      <option value="10-25 Executives" className="bg-hq-black">10-25 Senior Executives</option>
                      <option value="25-50 Executives" className="bg-hq-black">25-50 Senior Executives</option>
                      <option value="50-100 Executives" className="bg-hq-black">50-100 Senior Executives</option>
                      <option value="100+ Enterprise" className="bg-hq-black">100+ Enterprise Cohort</option>
                    </select>
                  </div>
                  <div>
                    <label className="block uppercase font-mono tracking-wider text-[10px] text-hq-white/60 mb-1">Preferred Timeline / Quarter</label>
                    <input 
                      type="text" 
                      value={form.preferredDate}
                      onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                      placeholder="e.g. Q4 2026 / Next Month"
                      className="w-full bg-white/10 border border-white/20 p-3 text-white placeholder:text-white/40 focus:border-hq-yellow focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block uppercase font-mono tracking-wider text-[10px] text-hq-white/60 mb-1">Specific Objectives or Focus Areas</label>
                  <textarea 
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Briefly describe your team's current challenges or objectives..."
                    className="w-full bg-white/10 border border-white/20 p-3 text-white placeholder:text-white/40 focus:border-hq-yellow focus:outline-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-hq-yellow text-hq-black font-display font-semibold uppercase tracking-widest py-4 text-xs hover:bg-white transition-all shadow-xl rounded-full"
                >
                  Submit Leadership Deep Dive Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
