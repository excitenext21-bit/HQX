import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Crown, 
  CheckCircle2, 
  Calendar, 
  Users, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Phone, 
  Target, 
  Compass, 
  Brain, 
  Sparkles,
  Zap
} from 'lucide-react';
import { useData } from '../context/DataContext';
import CorporatePartnersMarquee from '../components/common/CorporatePartnersMarquee';

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

  const keyBenefits = [
    {
      title: 'Strategic Thinking',
      desc: 'Prioritize and strategize effectively through structured foresight and clarity.'
    },
    {
      title: 'Resilience Development',
      desc: 'Develop psychological and biological resilience to bounce back swiftly from market challenges.'
    },
    {
      title: 'Deep Focus & Concentration',
      desc: 'Enhance concentration, eliminate executive distraction, and command uninterrupted deep focus.'
    },
    {
      title: 'Powering Purpose',
      desc: 'Align executive decisions and organizational mandates directly with enduring authentic purpose.'
    },
    {
      title: 'Balanced Growth Mindset',
      desc: 'Foster a balanced growth mindset for holistic development and sustainable high performance.'
    }
  ];

  const clientEngagements = [
    { client: 'Ageas Federal Insurance', location: 'Mumbai', desc: 'Executive purpose and resilience offsite' },
    { client: 'Cipla', location: 'Goa', desc: 'Senior leadership alignment and vitality immersion' },
    { client: 'Amal Embroidery', location: 'Lonavala', desc: 'Strategic thinking and culture retreat' },
    { client: 'Amana Bank', location: 'Tanzania', desc: 'International banking executive transformation' },
    { client: 'Absa Bank', location: 'Mauritius', desc: 'Multi-regional corporate stewardship workshop' },
    { client: 'TATA Motors', location: 'Pune', desc: 'Engineering & leadership high-performance focus' }
  ];

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Hero Header with Authentic Profile Imagery */}
      <section className="bg-hq-black text-hq-white pt-36 pb-20 px-6 md:px-12 relative overflow-hidden border-b border-white/10">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-25 lg:opacity-40 pointer-events-none overflow-hidden">
          <img 
            src="/profile_assets/page_12_img_1_999.jpeg" 
            alt="Leadership Deep Dive Session" 
            className="w-full h-full object-cover object-center filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hq-black via-hq-black/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 
              style={{ fontFamily: '"Geist", Arial, sans-serif', fontWeight: 300 }}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-light mb-5"
            >
              Leadership <br />
              <span 
                style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                className="text-hq-yellow font-bold"
              >
                Deep Dive
              </span>
            </h1>

            <p className="font-body text-base md:text-xl text-hq-white/80 font-light leading-relaxed mb-8">
              Strategic Vision, Resilience Development, Enhanced Focus, Purpose Alignment, Balanced Growth Strategy, High-Performance Team Building, and Passion Drive. Unlock your potential, navigate complexity, bounce back, prioritize, align with purpose, learn and adapt, embrace fulfilment, build high-performing teams, and pursue passions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#book-immersion" 
                className="bg-hq-yellow text-hq-black font-display font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white transition-all shadow-xl"
              >
                Reserve Executive Immersion
              </a>
              <a 
                href="tel:+919700100800" 
                className="border border-white/30 text-white font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-hq-yellow" />
                <span>Priority Hotline: +91 97001 00800</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Snapshot Bar */}
      <section className="bg-hq-yellow text-hq-black py-8 px-6 md:px-12 border-b border-hq-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 font-display">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 stroke-[2]" />
            <div>
              <div className="text-xs uppercase tracking-widest font-bold">Format & Duration</div>
              <div className="text-base font-semibold">2 - 3 Full Days (Residential / Offsite)</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 stroke-[2]" />
            <div>
              <div className="text-xs uppercase tracking-widest font-bold">Target Cohort</div>
              <div className="text-base font-semibold">15 to 60 Senior CXOs & Board Members</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 stroke-[2]" />
            <div>
              <div className="text-xs uppercase tracking-widest font-bold">Locations Delivered</div>
              <div className="text-base font-semibold">Domestic (Goa, Lonavala) & Global (Tanzania, Mauritius)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits from Page 12 of Profile */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight font-semibold mb-4">
            Key Benefits of Leadership Deep Dive
          </h2>
          <p className="font-body text-hq-black/70 max-w-xl mx-auto font-light text-base">
            Equipping corporate decision-makers with the psychological and strategic tools to excel under intense scrutiny.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {keyBenefits.map((b, i) => (
            <div key={i} className="bg-hq-gray p-8 rounded-2xl border border-hq-black/10 hover:border-hq-black hover:shadow-xl transition-all">
              <div className="w-10 h-10 rounded-xl bg-hq-black text-hq-yellow flex items-center justify-center font-mono font-bold text-sm mb-4">
                {(i + 1).toString().padStart(2, '0')}
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">
                {b.title}
              </h3>
              <p className="font-body text-sm text-hq-black/75 font-light leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}

          {/* Session Photo Card */}
          <div className="bg-hq-black text-white p-8 rounded-2xl border border-black shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-hq-yellow uppercase tracking-widest mb-2 font-semibold">
                Experiential Delivery
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">
                Disruptive & Hands-on
              </h3>
              <p className="font-body text-xs text-white/80 font-light leading-relaxed">
                Directly conducted by Manny Anchan with advisory faculty mentors to align personal mastery with multi-year enterprise goals.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-display uppercase tracking-wider text-hq-yellow font-bold">
              <span>Verified 98% CSAT</span>
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Corporate Interactions & Client Track Record (Pages 27-31) */}
        <div className="mt-20 pt-16 border-t border-hq-black/10">
          <div className="text-center mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-hq-black/50 mb-2 font-semibold">
              Corporate Interactions Across The Nation & Globe
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold">
              Recent Leadership Immersion Client Roster
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientEngagements.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-hq-black/10 text-center shadow-sm">
                <div className="text-[10px] font-mono text-hq-yellow bg-hq-black px-2 py-0.5 rounded-full uppercase tracking-wider inline-block mb-2 font-bold">
                  {item.location}
                </div>
                <div className="font-display text-sm font-bold text-hq-black mb-1">
                  {item.client}
                </div>
                <div className="text-[11px] font-body text-hq-black/60 font-light">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="book-immersion" className="py-20 px-6 md:px-12 bg-hq-black text-hq-white border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Reserve Leadership Deep Dive Immersion
            </h2>
          </div>

          {success ? (
            <div className="bg-hq-yellow text-hq-black p-8 rounded-2xl text-center">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-display text-2xl font-bold mb-2">Inquiry Successfully Registered!</h3>
              <p className="font-body text-sm font-light">
                Our executive coordinator will connect with your office within 4 business hours with custom immersion proposals.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-white/70 block mb-2">Executive Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Rajiv Mehra"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-hq-yellow"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-white/70 block mb-2">Organization / Enterprise</label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="e.g. Cipla Global"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-hq-yellow"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-white/70 block mb-2">Work Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="e.g. r.mehra@cipla.com"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-hq-yellow"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-white/70 block mb-2">Contact Number</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98000 00000"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-hq-yellow"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-white/70 block mb-2">Target Executive Headcount</label>
                <select
                  value={form.headcount}
                  onChange={(e) => setForm({ ...form, headcount: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-hq-yellow"
                >
                  <option value="10-25 CXOs" className="bg-hq-black">10 - 25 CXOs & Board Members</option>
                  <option value="25-50 Executives" className="bg-hq-black">25 - 50 Senior Executives</option>
                  <option value="50-100 Senior Leaders" className="bg-hq-black">50 - 100 Senior Leaders</option>
                  <option value="Enterprise-Wide" className="bg-hq-black">Enterprise-Wide Multi-City</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-hq-yellow text-hq-black font-display font-semibold uppercase tracking-widest py-4 rounded-xl text-sm hover:bg-white transition-all shadow-xl"
              >
                Submit Immersion Request
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FULL-WIDTH TRUSTED BY OVER 40+ INDUSTRY TITANS MARQUEE TOUCHING ABOVE FOOTER WITHOUT GAP */}
      <div className="w-full m-0 p-0">
        <CorporatePartnersMarquee showHeader={true} title="Trusted by Over 40+ Industry Titans" reversed={true} />
      </div>
    </div>
  );
}
