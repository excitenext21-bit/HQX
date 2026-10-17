import React, { useState } from 'react';
import { Play, Sparkles, Mic2, Users, Calendar, ArrowRight, CheckCircle2, Radio, BookOpen, Award } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Keynotes() {
  const { addInquiry, founderProfile } = useData();
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    date: '',
    topic: 'The Happiness Maverick: The Science of High Performance'
  });

  const topics = [
    {
      title: 'The Happiness Maverick: The Science of High Performance',
      duration: '60 - 90 Minutes',
      desc: 'Manny Anchan\'s premier keynote unraveling how top Fortune 500 performers replace exhaustion with sustainable joy and biological vitality.',
      audience: 'Global Townhalls, Annual Conventions, Leadership Summits'
    },
    {
      title: 'Friday Talks: The 5-Minute Brain Shift & Ikigai',
      duration: '45 Minutes + Q&A',
      desc: 'A vibrant, high-energy session delivering immediate neuroscience hacks on purpose alignment and entering high-restoration weekends.',
      audience: 'All-Hands, Friday Company Gatherings'
    },
    {
      title: 'Psychology of Wealth: Beyond Financial Scarcity',
      duration: '60 Minutes',
      desc: 'Decoding financial anxiety, cultivating abundance mindsets, and aligning material stewardship with enduring personal legacy.',
      audience: 'Senior Executives, Family Offices, Corporate Bankers'
    },
    {
      title: 'Grit, Grace & Governance: Leading When Things Break',
      duration: '60 Minutes',
      desc: 'Lessons from 25 years at GE Capital, Barclays & ABN AMRO on managing volatility, investor scrutiny, and cross-cultural team panic.',
      audience: 'Senior Executives, Board Retreats'
    }
  ];

  const engageEvents = [
    { city: 'Allahabad', title: 'TEDx - Katra', category: 'TEDx Talk' },
    { city: 'Pune', title: 'TEDx ElPro Intl School', category: 'TEDx Talk' },
    { city: 'Jaipur', title: 'TEDx Man Sagar Lake', category: 'TEDx Talk' },
    { city: 'Vadodara', title: 'TEDx Navrachana International', category: 'TEDx Talk' },
    { city: 'Mumbai', title: 'National Book Signing', category: 'Literature' },
    { city: 'Online / Radio', title: 'Radio Show with RJ Hrishik', category: 'Broadcast Media' },
    { city: 'Online', title: 'Book Beat - Audio Book', category: 'Digital Media' },
    { city: 'Mumbai', title: 'Book Take with John Abraham', category: 'Celebrity Endorsement' },
    { city: 'Mumbai', title: 'Friday Talk Show - Ikigai', category: 'Townhall Series' },
    { city: 'Mumbai', title: 'FTS - Psychology of Wealth', category: 'Townhall Series' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    addInquiry({
      ...form,
      program: `Keynote: ${form.topic}`
    });
    setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Hero */}
      <section className="bg-hq-black text-hq-white pt-28 pb-20 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-hq-yellow/20 border border-hq-yellow/40 rounded-full text-hq-yellow text-xs font-mono uppercase tracking-widest mb-4">
              <Mic2 className="w-3.5 h-3.5" />
              <span>Motivational Speaker • TEDx Keynotes</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl tracking-tighter font-semibold mb-4">
              Insightful Keynotes & <br />
              <span className="text-hq-yellow">Friday Talks</span>
            </h1>
            <p className="font-body text-base md:text-lg text-hq-white/80 max-w-xl font-light leading-relaxed">
              Electrifying corporate talks and disruptive townhalls that shift organizational perspective from survival anxiety to flourishing eudaimonic momentum.
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href="#book-keynote" 
              className="bg-hq-yellow text-hq-black font-display font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white transition-all shadow-xl"
            >
              Check Manny's Speaking Calendar
            </a>
          </div>
        </div>
      </section>

      {/* Speaker Bio */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-hq-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-hq-gray border border-hq-black/15 overflow-hidden relative shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1475721025505-1113afabc45c?auto=format&fit=crop&w=1200&q=80" 
              alt="Manny Anchan speaking" 
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-hq-black text-white px-4 py-2 font-display text-xs uppercase tracking-widest">
              Live Keynote Delivery
            </div>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-hq-black/50 mb-2 font-semibold">
              Meet the Speaker
            </div>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight font-semibold mb-2">
              Manny Anchan
            </h2>
            <p className="font-serif italic text-lg text-hq-black/70 mb-4">
              "This Is How The Good Companies Find The Good Company"
            </p>
            <div className="space-y-3 font-body text-xs md:text-sm text-hq-black/80 font-light leading-relaxed mb-6">
              <p>
                Alumnus of <strong>Harvard & Columbia Business School</strong> with <strong>25 years in senior global management at GE Capital, HDFC Bank, ABN AMRO, Barclays, AUB, and FAB</strong>.
              </p>
              <p>
                Having worked and lived across <strong>Asia, Africa, Europe, & North America</strong>, Manny's keynotes blend cross-cultural purpose frameworks (Ikigai, Hygge, Lagom, Sisu, Gross National Happiness) with hard-nosed corporate turnaround execution.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-hq-black/10 pt-4 text-center">
              <div>
                <div className="font-display text-2xl font-bold">50,000+</div>
                <div className="text-[10px] font-mono text-hq-black/50 uppercase">Leaders Motivated</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold">4 TEDx</div>
                <div className="text-[10px] font-mono text-hq-black/50 uppercase">Featured Talks</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold">9 Global</div>
                <div className="text-[10px] font-mono text-hq-black/50 uppercase">Countries Reached</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engage and Inspire: Talks, Signings & Learning (From Page 11 of Profile) */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-hq-black/10">
        <div className="text-center mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-hq-black/50 mb-2 font-semibold">
            Track Record • Page 11
          </div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight font-semibold mb-3">
            Engage & Inspire: Talks, Signings, and Learning
          </h2>
          <p className="font-serif italic text-lg text-hq-black/70">
            Inspiring impressionable minds and high-performing corporate teams nationwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {engageEvents.map((evt, idx) => (
            <div key={idx} className="p-5 bg-hq-gray border border-hq-black/15 shadow-sm hover:border-hq-black transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase bg-hq-black text-hq-yellow px-2 py-0.5 rounded font-bold inline-block mb-3">
                  {evt.city}
                </span>
                <h4 className="font-display text-base font-bold leading-tight mb-2">
                  {evt.title}
                </h4>
              </div>
              <div className="pt-3 border-t border-hq-black/10 text-[10px] font-mono text-hq-black/60 uppercase">
                {evt.category}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Keynote Topics */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-center mb-16">
          Signature Keynote Topics
        </h2>

        <div className="space-y-6 mb-20">
          {topics.map((t, idx) => (
            <div key={idx} className="p-8 bg-hq-gray border border-hq-black/15 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="max-w-2xl">
                <span className="text-xs font-mono bg-hq-black text-hq-yellow px-2.5 py-0.5 rounded uppercase font-semibold">
                  {t.duration}
                </span>
                <h3 className="font-display text-2xl font-semibold mt-3 mb-2">
                  {t.title}
                </h3>
                <p className="font-body text-xs text-hq-black/75 font-light leading-relaxed mb-3">
                  {t.desc}
                </p>
                <div className="text-[11px] font-mono text-hq-black/50 uppercase">
                  Ideal for: {t.audience}
                </div>
              </div>
              <button
                onClick={() => {
                  setForm({ ...form, topic: t.title });
                  document.getElementById('book-keynote')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-hq-yellow text-hq-black font-display font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-hq-black hover:text-white transition-all shrink-0 shadow-md"
              >
                Inquire For This Topic
              </button>
            </div>
          ))}
        </div>

        {/* Lead Form */}
        <div id="book-keynote" className="bg-hq-black text-hq-white p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-hq-yellow uppercase tracking-widest">Speaking Inquiries</span>
            <h3 className="font-display text-3xl font-semibold mt-1">Book Manny For Your Event</h3>
          </div>

          {success ? (
            <div className="bg-hq-yellow text-hq-black p-8 rounded-2xl text-center">
              <CheckCircle2 className="w-10 h-10 mx-auto mb-2" />
              <h4 className="font-display text-xl font-semibold">Booking Request Received</h4>
              <p className="text-xs font-body mt-1">Manny's speaking coordinator will check date availability within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-body">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-white/60 mb-1">Organizer Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Tanvi Joshi" 
                    className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-hq-yellow" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase text-white/60 mb-1">Company / Organization *</label>
                  <input 
                    type="text" 
                    required 
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="e.g. Barclays / TATA Motors" 
                    className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-hq-yellow" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-white/60 mb-1">Corporate Email *</label>
                  <input 
                    type="email" 
                    required 
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tanvi@barclays.com" 
                    className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-hq-yellow" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase text-white/60 mb-1">Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 97001 00800" 
                    className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-hq-yellow font-mono" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase text-white/60 mb-1">Target Keynote Topic</label>
                <select 
                  value={form.topic}
                  onChange={(e) => setForm({ ...form, topic: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-hq-yellow"
                >
                  {topics.map((t, i) => (
                    <option key={i} value={t.title} className="bg-hq-black">{t.title}</option>
                  ))}
                  <option value="Custom Keynote" className="bg-hq-black">Custom Tailored Theme</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-hq-yellow text-hq-black font-display font-semibold uppercase tracking-widest py-4 text-xs hover:bg-white transition-all rounded-full shadow-lg"
              >
                Inquire For Speaking Engagement
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
