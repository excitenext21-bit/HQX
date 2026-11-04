import React, { useState } from 'react';
import { Sparkles, Clock, Users, CheckCircle2, ArrowRight, ShieldCheck, Heart, Brain, Dumbbell, Award } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function EngagingWorkshops() {
  const { addInquiry } = useData();
  const [selectedWorkshop, setSelectedWorkshop] = useState('Strategic Thinking & Performance Optimization');
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
      title: 'Strategic Thinking & Performance Optimization',
      duration: 'Full Day (6 Hours)',
      target: 'Managers, Directors & Business Heads',
      summary: 'Enhance professional capabilities, eliminate execution bottlenecks, and align operational priorities with strategic long-term vision.',
      expertName: 'Ajay Srinivasan',
      expertRole: 'Seasoned Business Leader & Scale Strategist',
      expertImage: '/team/ajay-srinivasan.png'
    },
    {
      id: 'w2',
      title: 'Mindfulness, Self-Compassion & Stress Resilience',
      duration: 'Half Day (3.5 Hours)',
      target: 'High-Stress Corporate Teams & Fast-Growth Pods',
      summary: 'Autonomic nervous system regulation, vagal tone activation, mindfulness techniques, and clinical burnout prevention.',
      expertName: 'Carolin Nytra',
      expertRole: 'Olympic Hurdler & Holistic Well-Being Advocate',
      expertImage: '/team/carolin-nytra.png'
    },
    {
      id: 'w3',
      title: 'Grit, Composure & Championship Team Dynamics',
      duration: 'Half Day or Full Day',
      target: 'Sales Teams, Operations & Project Leads',
      summary: 'Lessons from international sports podiums on bouncing back from immediate setbacks, maintaining composure, and clutch execution.',
      expertName: 'Rupinder Singh',
      expertRole: 'Olympic Field Hockey Star & Gold Medalist',
      expertImage: '/team/rupinder-singh.png'
    },
    {
      id: 'w4',
      title: 'Conscious Parenting & Work-Life Harmony',
      duration: 'Half Day (3 Hours)',
      target: 'Working Parents & Diversity Employee Resource Groups',
      summary: 'Navigating executive pressure while showing up emotionally grounded for modern children without guilt or generational friction.',
      expertName: 'Soha Ali Khan',
      expertRole: 'Author & Modern Parenting Mentor',
      expertImage: '/team/soha-ali-khan.png'
    },
    {
      id: 'w5',
      title: 'Industrial Mindful Leadership & Personnel Care',
      duration: 'Full Day (6 Hours)',
      target: 'HR Leaders, Plant Managers & Division Heads',
      summary: 'Evidence-based frameworks from Warwick & Yale on cultivating psychological safety, labor harmony, and positive work culture.',
      expertName: 'Meera Chauhan',
      expertRole: 'Director at Tricolite | Warwick & Yale Fellow',
      expertImage: '/team/meera-chauhan.png'
    },
    {
      id: 'w6',
      title: 'Corporate Movement, Posture & Energy Architecture',
      duration: 'Half Day (3 Hours)',
      target: 'All Corporate Employees & Desk-Bound Workers',
      summary: 'Fit Panda holistic movement routines, desk-side mobility drills, somatic resets, and metabolic energy sustainment.',
      expertName: 'Parvej Mantrri',
      expertRole: 'Fit Panda Founder & Celebrity Fitness Coach',
      expertImage: '/profile_assets/page_24_img_1_1600.jpeg'
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
      {/* Header with Authentic Profile Imagery */}
      <section className="bg-[#0A0A0A] text-hq-white pt-36 pb-20 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div className="max-w-2xl">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold mb-5">
              Engaging <br />
              <span className="text-hq-yellow">Workshops</span>
            </h1>
            <p className="font-body text-base md:text-xl font-light text-hq-white/80 leading-relaxed">
              Interactive Corporate Workshops designed to enhance professional skills and organizational effectiveness. Focusing on strategic thinking, resilience development, performance optimization, leadership skills, effective communication, and stress management.
            </p>
          </div>

          <div className="w-full lg:w-4/12">
            <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-hq-black">
              <img 
                src="/profile_assets/page_13_img_1_1023.jpeg" 
                alt="Corporate Workshop in Action" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-hq-black text-white text-xs font-mono uppercase tracking-wider flex justify-between items-center border-t border-white/10">
                <span>Interactive Seminars</span>
                <span className="text-hq-yellow font-bold">Live Execution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Benefits from Profile Page 13 */}
      <section className="py-14 px-6 md:px-12 bg-hq-black text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-hq-yellow text-hq-black flex items-center justify-center font-bold mb-3">01</div>
            <h3 className="font-display text-xl font-bold mb-2 text-hq-yellow">Productivity Focused</h3>
            <p className="font-body text-xs text-white/80 font-light leading-relaxed">
              Interactive sessions designed specifically to improve day-to-day productivity and eliminate operational drag.
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-hq-yellow text-hq-black flex items-center justify-center font-bold mb-3">02</div>
            <h3 className="font-display text-xl font-bold mb-2 text-hq-yellow">Holistic Well-Being Toolkit</h3>
            <p className="font-body text-xs text-white/80 font-light leading-relaxed">
              Focus areas include mindfulness, positive psychology, self-care, self-compassion, finding purpose, and stress management.
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-hq-yellow text-hq-black flex items-center justify-center font-bold mb-3">03</div>
            <h3 className="font-display text-xl font-bold mb-2 text-hq-yellow">Actionable Strategies</h3>
            <p className="font-body text-xs text-white/80 font-light leading-relaxed">
              Every participant leaves with a concrete personal toolkit and repeatable strategies for sustained overall well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Catalog with Real Profile Faculty */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight font-semibold">
            Interactive Corporate Workshop Catalog
          </h2>
          <p className="font-body text-hq-black/70 text-sm max-w-xl mx-auto mt-2 font-light">
            Led directly by world champions, C-suite veterans, and licensed well-being practitioners from the HQX advisory faculty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {workshops.map((w) => (
            <div 
              key={w.id} 
              className="bg-hq-gray p-8 rounded-2xl border border-hq-black/15 shadow-sm hover:border-hq-black hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Faculty Mentor Headshot */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-hq-black/10">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-white border border-hq-black/20 shrink-0">
                    <img src={w.expertImage} alt={w.expertName} className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-hq-black">{w.expertName}</h4>
                    <p className="text-[11px] font-mono text-hq-black/60">{w.expertRole}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-hq-black/60 mb-3">
                  <Clock className="w-3.5 h-3.5 text-hq-black" />
                  <span>{w.duration}</span>
                </div>

                <h3 className="font-display text-2xl font-bold tracking-tight mb-3 group-hover:text-hq-yellow transition-colors">
                  {w.title}
                </h3>

                <p className="font-body text-xs text-hq-black/75 font-light leading-relaxed mb-6">
                  {w.summary}
                </p>

                <div className="text-[11px] font-mono text-hq-black/60 bg-white px-3 py-1.5 rounded-lg border border-hq-black/10 inline-block mb-6">
                  Target: {w.target}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedWorkshop(w.title);
                  document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-hq-black text-white font-display text-xs uppercase tracking-widest py-3 rounded-full hover:bg-hq-yellow hover:text-hq-black transition-colors font-semibold flex items-center justify-center gap-2"
              >
                <span>Select Workshop</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div id="booking-section" className="bg-hq-black text-white p-8 md:p-14 rounded-3xl border border-black shadow-2xl max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-hq-yellow block font-bold mb-2">Book Corporate Masterclass</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold">
              Reserve Workshop for Your Enterprise
            </h3>
          </div>

          {submitted ? (
            <div className="bg-hq-yellow text-hq-black p-8 rounded-2xl text-center">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-3" />
              <h4 className="font-display text-2xl font-bold mb-2">Workshop Inquiry Received</h4>
              <p className="font-body text-sm font-light">
                Our lead facilitator will coordinate directly with your HR/L&D desk within 4 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="space-y-6">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 mb-6">
                <span className="text-xs font-mono uppercase text-white/60 block mb-1">Selected Workshop:</span>
                <span className="font-display text-lg text-hq-yellow font-bold">{selectedWorkshop}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-mono uppercase text-white/70 block mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Sangeeta Rao"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-hq-yellow"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase text-white/70 block mb-2">Company / Organization</label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="e.g. TATA AIG"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-hq-yellow"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-mono uppercase text-white/70 block mb-2">Corporate Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="e.g. s.rao@tataaig.com"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-hq-yellow"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase text-white/70 block mb-2">Contact Number</label>
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

              <button
                type="submit"
                className="w-full bg-hq-yellow text-hq-black font-display font-semibold uppercase tracking-widest py-4 rounded-xl text-sm hover:bg-white transition-all shadow-xl"
              >
                Submit Workshop Booking Request
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
