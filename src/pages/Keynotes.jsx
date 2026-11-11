import React, { useState } from 'react';
import { Play, Sparkles, Mic2, Users, Calendar, ArrowRight, CheckCircle2, Radio, BookOpen, Award, ShieldCheck, Coins } from 'lucide-react';
import { useData } from '../context/DataContext';
import ConferenceStage3D from '../components/keynotes/ConferenceStage3D';

export default function Keynotes() {
  const { addInquiry } = useData();
  const [activeTopic, setActiveTopic] = useState(0);
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
      icon: Sparkles,
      desc: 'Manny Anchan\'s flagship corporate keynote unraveling how top Fortune 500 performers replace exhaustion with sustainable joy, purposeful clarity, and biological vitality.',
      audience: 'Global Townhalls, Annual Conventions, Leadership Summits'
    },
    {
      title: 'Friday Talks: Fast-Paced Employee Engagement',
      duration: '45 Minutes + Interactive Q&A',
      icon: Mic2,
      desc: 'A vibrant, high-energy session delivering immediate neuroscience hacks on purpose alignment, team cohesion, and entering high-restoration weekends.',
      audience: 'Enterprise All-Hands, Friday Company Gatherings'
    },
    {
      title: 'Psychology of Wealth: Beyond Financial Scarcity',
      duration: '60 Minutes',
      icon: Coins,
      desc: 'Decoding financial anxiety, cultivating abundance mindsets, and aligning material stewardship with enduring personal and enterprise legacy.',
      audience: 'Senior Executives, Family Offices, Corporate Bankers'
    },
    {
      title: 'Grit, Grace & Governance: Leading When Things Break',
      duration: '60 Minutes',
      icon: ShieldCheck,
      desc: 'Lessons from 25 years at GE Capital, Barclays & ABN AMRO on managing volatility, investor scrutiny, and cross-cultural team panic with unshakeable calm.',
      audience: 'Senior Executives, Board Retreats'
    }
  ];

  const engageEvents = [
    { city: 'Allahabad', title: 'TEDx - Katra', category: 'TEDx Keynote' },
    { city: 'Pune', title: 'TEDx ElPro Intl School', category: 'TEDx Keynote' },
    { city: 'Jaipur', title: 'TEDx Man Sagar Lake', category: 'TEDx Keynote' },
    { city: 'Vadodara', title: 'TEDx Navrachana International', category: 'TEDx Keynote' },
    { city: 'Mumbai', title: 'National Book Signing', category: 'Literature' },
    { city: 'Online / Radio', title: 'Radio Show with RJ Hrishik', category: 'Broadcast Media' },
    { city: 'Online', title: 'Book Beat - Audio Book', category: 'Digital Media' },
    { city: 'Mumbai', title: 'Book Take with John Abraham', category: 'Celebrity Feature' },
    { city: 'Mumbai', title: 'Friday Talk Show - Ikigai', category: 'Townhall Series' },
    { city: 'Mumbai', title: 'Friday Talk Show - Psychology of Wealth', category: 'Townhall Series' }
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
      {/* Hero Section: Full-Screen 3D Curved Conference Stage with 3D-Synced Content on Screen */}
      <section className="bg-[#0A0A0A] text-white h-[100svh] min-h-[640px] max-h-[1080px] border-b border-white/10 relative overflow-hidden w-full">
        {/* Left Side Vertical Text: KEYNOTES & TALKS (Matching About Us Hero Style) */}
        <div className="absolute left-3 sm:left-6 lg:left-8 xl:left-12 inset-y-0 z-20 flex flex-col justify-center items-center pointer-events-none select-none">
          <div
            className="flex items-center gap-3 sm:gap-4"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span className="font-display text-[11px] sm:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-hq-yellow drop-shadow-md">
              KEYNOTES &amp; TALKS
            </span>
            <span className="w-px h-8 sm:h-14 bg-white/25" />
          </div>
        </div>

        {/* Full-Screen Interactive 3D Conference Stage with Content Locked to the Yellow Screen */}
        <ConferenceStage3D>
          <div className="text-center px-4 select-none">
            <h1
              style={{ fontFamily: '"Geist", Arial, sans-serif', fontWeight: 300 }}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-light tracking-tight text-[#0A0A0A] leading-[1.15] mb-3.5"
            >
              Insightful Keynotes &amp;{' '}
              <span
                style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                className="text-[#0A0A0A] font-bold"
              >
                Friday Talks
              </span>
            </h1>

            <p className="font-body text-xs sm:text-sm md:text-base text-[#0A0A0A]/80 font-light leading-relaxed max-w-xl mx-auto mb-6">
              Productive teams &amp; human cohesion, resilience &amp; vitality driving clarity, and purpose-led corporate execution across 9 nations and 16 Indian states.
            </p>

            <div className="flex items-center justify-center pointer-events-auto">
              <a
                href="#book-keynote"
                className="group relative inline-flex items-center justify-between gap-7 py-3 px-2 font-display font-medium text-xs tracking-[0.2em] text-[#0A0A0A] hover:text-black transition-colors duration-300 uppercase"
              >
                {/* Top border line */}
                <span className="absolute top-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-[#0A0A0A]/55 group-hover:bg-[#0A0A0A] transition-all duration-300 ease-out pointer-events-none" />

                <span className="relative z-10 font-semibold tracking-widest">CHECK SPEAKING CALENDAR</span>

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
                <span className="absolute bottom-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-[#0A0A0A]/55 group-hover:bg-[#0A0A0A] transition-all duration-300 ease-out pointer-events-none" />
              </a>
            </div>
          </div>
        </ConferenceStage3D>
      </section>

      {/* Friday Talks Spotlight (Profile Page 15) */}
      <section className="py-16 px-6 md:px-12 bg-hq-yellow text-hq-black border-b border-hq-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-center justify-between">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-hq-black/70 font-bold mb-2">
              Corporate Townhall Series • Page 15
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Friday Talks: Catalyzing Workplace Vitality
            </h2>
            <p className="font-body text-base text-hq-black/85 font-light leading-relaxed mb-6">
              Friday talks are an essential tool for promoting employee engagement, open communication, and holistic well-being in the workplace.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-hq-black text-white p-4 rounded-xl border border-black shadow-md">
                <div className="text-hq-yellow font-bold text-lg mb-1">01</div>
                <div className="font-display text-sm font-semibold">Improve Operational Efficiency</div>
              </div>
              <div className="bg-hq-black text-white p-4 rounded-xl border border-black shadow-md">
                <div className="text-hq-yellow font-bold text-lg mb-1">02</div>
                <div className="font-display text-sm font-semibold">Improve Team Cohesion</div>
              </div>
              <div className="bg-hq-black text-white p-4 rounded-xl border border-black shadow-md">
                <div className="text-hq-yellow font-bold text-lg mb-1">03</div>
                <div className="font-display text-sm font-semibold">Improving Productivity</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-4/12">
            <div className="rounded-3xl overflow-hidden border-2 border-hq-black shadow-2xl bg-hq-black">
              <img 
                src="/profile_assets/page_15_img_1_1060.jpeg" 
                alt="Friday Talks in Progress" 
                className="w-full h-56 object-cover"
              />
              <div className="p-3 bg-hq-black text-white text-xs font-mono uppercase tracking-wider text-center">
                Interactive Townhall Dialogue
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker Bio with Authentic Photo from Profile Page 25 */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-hq-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] bg-hq-gray border border-hq-black/15 overflow-hidden relative shadow-2xl rounded-2xl">
            <img 
              src="/profile_assets/page_25_img_1_1682.jpeg" 
              alt="Manny Anchan - Motivational Speaker" 
              className="w-full h-full object-cover object-top transition-all duration-500"
            />
            <div className="absolute bottom-4 left-4 bg-hq-black text-white px-4 py-2 font-display text-xs uppercase tracking-widest rounded-lg">
              Live Keynote Delivery • Manny Anchan
            </div>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-hq-black/50 mb-2 font-semibold">
              Meet the Speaker (Profile Page 25 & 26)
            </div>
            <h2 className="font-display text-3xl md:text-5xl tracking-tight font-semibold mb-4">
              Manny Anchan
            </h2>
            <div className="font-serif italic text-lg text-hq-black/80 mb-6">
              "This Is How The Good Companies Find The Good Company"
            </div>
            <p className="font-body text-base text-hq-black/80 font-light leading-relaxed mb-6">
              With 25 years of corporate management at GE Capital, HDFC Bank, ABN AMRO, Barclays, AUB, and FAB, Manny bridges high-pressure executive reality with scientific happiness research. A Harvard and Columbia Business School alumnus, Manny has delivered keynotes across 9 nations and 16 Indian states.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono uppercase text-hq-black/70">
              <div className="flex items-center gap-2 bg-hq-gray p-3 rounded-lg"><Sparkles className="w-4 h-4 text-hq-black" /> 4x TEDx Speaker</div>
              <div className="flex items-center gap-2 bg-hq-gray p-3 rounded-lg"><Award className="w-4 h-4 text-hq-black" /> Harvard & Columbia Alum</div>
              <div className="flex items-center gap-2 bg-hq-gray p-3 rounded-lg"><BookOpen className="w-4 h-4 text-hq-black" /> 6 Published Books</div>
              <div className="flex items-center gap-2 bg-hq-gray p-3 rounded-lg"><Users className="w-4 h-4 text-hq-black" /> 100,000+ Leaders Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Keynote Catalog (Editorial 4-Column Tab Strip in HQX Theme Font & Colors) */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-hq-white text-hq-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold text-hq-black">
              Corporate Keynote Repertoire
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-9 mb-20">
            {topics.map((t, idx) => {
              const TopicIcon = t.icon;
              const isActive = activeTopic === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveTopic(idx)}
                  onClick={() => {
                    setActiveTopic(idx);
                    setForm({ ...form, topic: t.title });
                  }}
                  className="group cursor-pointer flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    {/* Top Progress Hairline: Solid HQX Yellow When Active, Dashed Muted When Inactive */}
                    <div
                      className={`w-full mb-7 transition-all duration-300 ${
                        isActive
                          ? 'border-t-2 border-hq-yellow'
                          : 'border-t border-dashed border-hq-black/20 group-hover:border-hq-yellow/70'
                      }`}
                    />

                    {/* Thin-Stroke Minimalist Icon */}
                    <TopicIcon
                      className={`w-8 h-8 mb-6 stroke-[1.25] transition-colors duration-300 ${
                        isActive
                          ? 'text-hq-yellow'
                          : 'text-hq-black/80 group-hover:text-hq-yellow'
                      }`}
                    />

                    {/* Theme Display Font Title */}
                    <h3 className="font-display text-xl sm:text-[22px] font-semibold tracking-tight text-hq-black leading-snug mb-3">
                      {t.title}
                    </h3>

                    {/* Concise Body Copy */}
                    <p className="font-body text-xs sm:text-[13px] text-hq-black/70 font-light leading-relaxed mb-5">
                      {t.desc}
                    </p>
                  </div>

                  {/* Subtle Metadata & Booking Trigger */}
                  <div className="pt-3 flex items-center justify-between gap-2 text-[11px] font-mono text-hq-black/60">
                    <span>{t.duration}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTopic(idx);
                        setForm({ ...form, topic: t.title });
                        document.getElementById('book-keynote')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`inline-flex items-center gap-1 font-display uppercase tracking-wider font-bold transition-colors ${
                        isActive ? 'text-hq-yellow' : 'text-hq-black/80 group-hover:text-hq-yellow'
                      }`}
                    >
                      <span>Book</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        {/* Real Profile Page 31: Engage and Inspire Talks & Signings */}
        <div className="bg-hq-black text-white p-8 md:p-12 rounded-3xl border border-black shadow-2xl">
          <div className="text-center mb-10">
            <span className="text-xs font-mono text-hq-yellow uppercase tracking-widest block font-bold mb-2">
              Engage and Inspire (Profile Page 31)
            </span>
            <h3 className="font-display text-3xl font-bold">
              Delivered Talks, Signings, and Media Broadcasts
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {engageEvents.map((ev, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
                <div className="text-[10px] font-mono text-hq-yellow uppercase tracking-wider mb-1 font-bold">
                  {ev.city}
                </div>
                <div className="font-display text-sm font-bold text-white mb-1">
                  {ev.title}
                </div>
                <div className="text-[11px] font-body text-white/60 font-light">
                  {ev.category}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="book-keynote" className="py-20 px-6 md:px-12 bg-hq-gray border-t border-hq-black/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-hq-black/60 block font-bold mb-2">Speaker Availability</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold">
              Book Manny Anchan for Your Next Event
            </h3>
          </div>

          {success ? (
            <div className="bg-hq-yellow text-hq-black p-8 rounded-2xl text-center">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-3" />
              <h4 className="font-display text-2xl font-bold mb-2">Keynote Request Registered</h4>
              <p className="font-body text-sm font-light">
                Manny's speaking bureau will review dates and reach out with the speaking rider and tech specifications.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl border border-hq-black/15 shadow-xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-hq-black/70 block mb-2">Contact Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full bg-hq-gray border border-hq-black/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-hq-black"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-hq-black/70 block mb-2">Company / Organization</label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="e.g. HDFC Life"
                    className="w-full bg-hq-gray border border-hq-black/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-hq-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-hq-black/70 block mb-2">Work Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="e.g. v.malhotra@hdfclife.com"
                    className="w-full bg-hq-gray border border-hq-black/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-hq-black"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-hq-black/70 block mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98000 00000"
                    className="w-full bg-hq-gray border border-hq-black/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-hq-black"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-hq-black/70 block mb-2">Select Keynote Topic</label>
                <select
                  value={form.topic}
                  onChange={(e) => setForm({ ...form, topic: e.target.value })}
                  className="w-full bg-hq-gray border border-hq-black/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-hq-black"
                >
                  {topics.map((t, idx) => (
                    <option key={idx} value={t.title}>{t.title} ({t.duration})</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-hq-black text-white font-display font-semibold uppercase tracking-widest py-4 rounded-xl text-sm hover:bg-hq-yellow hover:text-hq-black transition-all shadow-xl"
              >
                Submit Keynote Booking Inquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
