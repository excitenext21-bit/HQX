import React, { useState } from 'react';
import { Sparkles, Clock, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function EngagingWorkshops() {
  const { faculty, addInquiry } = useData();
  const [selectedWorkshop, setSelectedWorkshop] = useState('Productivity & Deep Work Architecture');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    headcount: '50-100 Participants',
    message: ''
  });

  const workshops = [
    {
      id: 'w1',
      title: 'Productivity & Deep Work Architecture',
      duration: 'Full Day (6 Hours)',
      target: 'Managers & Knowledge Workers',
      summary: 'Practical neuro-ergonomic systems to eliminate email friction, establish uninterrupted flow state sprint blocks, and 2x cognitive throughput.',
      expertName: 'Ajay Srinivasan',
      expertRole: 'Enterprise Leadership & Scale Strategist',
      expertImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'w2',
      title: 'Mindfulness & Somatic Reset Under Pressure',
      duration: 'Half Day (3.5 Hours)',
      target: 'High-Stress Teams & Trading Floors',
      summary: 'Proven Olympic athletic techniques for autonomic down-regulation, heart rate variability mastery, and rapid stress recovery during crises.',
      expertName: 'Carolin Nytra',
      expertRole: 'Olympic Athlete & Holistic Guide',
      expertImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'w3',
      title: 'Grit, Composure & Championship Mindset',
      duration: 'Half Day or Full Day',
      target: 'Sales, Growth & Competitive Units',
      summary: 'Lessons from international hockey podiums on bouncing back from immediate setbacks, maintaining clutch focus, and mutual trust.',
      expertName: 'Rupinder Singh',
      expertRole: 'Olympic Medalist & Performance Coach',
      expertImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'w4',
      title: 'Conscious Parenting & Corporate Integration',
      duration: 'Half Day (3 Hours)',
      target: 'Working Parents & Diversity Employee Groups',
      summary: 'Navigating executive commitments while showing up emotionally grounded for modern children and family architectures without guilt.',
      expertName: 'Soha Ali Khan',
      expertRole: 'Author & Modern Family Thought Leader',
      expertImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    addInquiry({
      ...form,
      program: `Workshop: ${selectedWorkshop}`
    });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Header */}
      <section className="bg-hq-yellow text-hq-black pt-28 pb-20 px-6 md:px-12 border-b border-hq-black">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-xs uppercase tracking-widest font-semibold mb-3">
            Hands-on Masterclasses
          </div>
          <h1 className="font-display text-5xl md:text-7xl tracking-tighter font-semibold mb-6">
            Engaging <br />
            <span className="bg-hq-black text-hq-yellow px-3 py-1 inline-block mt-1">Workshops</span>
          </h1>
          <p className="font-body text-lg md:text-xl font-light text-hq-black/80 max-w-2xl leading-relaxed">
            Dynamic, interactive, and clinically verified workshops tailored to boost employee morale, self-compassion, and peak productivity across enterprise teams.
          </p>
        </div>
      </section>

      {/* Workshop Catalog with Assigned CMS Faculty */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-hq-black/50 mb-2 font-semibold">
            Assigned Specialist Mentors
          </div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight font-semibold">
            Interactive Workshop Directory
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {workshops.map((w) => (
            <div key={w.id} className="bg-hq-gray p-8 border border-hq-black/15 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono bg-hq-black text-hq-yellow px-2.5 py-1 rounded uppercase font-semibold">
                    {w.duration}
                  </span>
                  <span className="text-xs font-mono text-hq-black/60">{w.target}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">
                  {w.title}
                </h3>
                <p className="font-body text-xs text-hq-black/75 font-light leading-relaxed mb-6">
                  {w.summary}
                </p>
              </div>

              {/* Assigned Faculty Card */}
              <div className="pt-6 border-t border-hq-black/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={w.expertImage} alt={w.expertName} className="w-12 h-12 rounded-full object-cover border border-hq-black/20" />
                  <div>
                    <div className="font-display text-xs uppercase font-bold">{w.expertName}</div>
                    <div className="text-[10px] font-mono text-hq-black/60">{w.expertRole}</div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedWorkshop(w.title);
                    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-display font-semibold uppercase tracking-wider bg-hq-yellow text-hq-black px-4 py-2 rounded-full hover:bg-hq-black hover:text-white transition-all"
                >
                  Book Workshop
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lead-gen Form */}
        <div id="booking-form" className="bg-hq-black text-hq-white p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-hq-yellow uppercase tracking-widest">Reserve a Date</span>
            <h3 className="font-display text-3xl font-semibold mt-1">Request Workshop Delivery</h3>
            <div className="text-xs text-hq-yellow font-mono mt-1">Selected: {selectedWorkshop}</div>
          </div>

          {submitted ? (
            <div className="bg-hq-yellow text-hq-black p-8 rounded-2xl text-center">
              <CheckCircle2 className="w-10 h-10 mx-auto mb-2" />
              <h4 className="font-display text-xl font-semibold">Workshop Request Registered</h4>
              <p className="text-xs font-body mt-1">Our coordinator will confirm faculty schedule within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-4 text-xs font-body">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-white/60 mb-1">Contact Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Shalini Roy" 
                    className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-hq-yellow" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase text-white/60 mb-1">Company / HR Division *</label>
                  <input 
                    type="text" 
                    required 
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="e.g. Cipla / L&D Department" 
                    className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-hq-yellow" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase text-white/60 mb-1">Work Email *</label>
                  <input 
                    type="email" 
                    required 
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="shalini@cipla.com" 
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
                    placeholder="+91 98000 00000" 
                    className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-hq-yellow" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase text-white/60 mb-1">Expected Audience Size</label>
                <select 
                  value={form.headcount}
                  onChange={(e) => setForm({ ...form, headcount: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-hq-yellow"
                >
                  <option value="20-50 Participants" className="bg-hq-black">20-50 Participants</option>
                  <option value="50-100 Participants" className="bg-hq-black">50-100 Participants</option>
                  <option value="100-300 Participants" className="bg-hq-black">100-300 Participants</option>
                  <option value="300+ Enterprise" className="bg-hq-black">300+ Enterprise Cohort</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase text-white/60 mb-1">Special Requirements or Hybrid Needs</label>
                <textarea 
                  rows={2}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="In-person, virtual, or multi-location hybrid..."
                  className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-hq-yellow"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-hq-yellow text-hq-black font-display font-semibold uppercase tracking-widest py-4 text-xs hover:bg-white transition-all rounded-full shadow-lg"
              >
                Confirm Workshop Booking Request
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
