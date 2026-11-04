import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Landmark, 
  Cpu, 
  Factory, 
  GraduationCap, 
  Layers, 
  Globe, 
  Building2,
  TrendingUp,
  ShieldCheck,
  Brain,
  Award,
  Calendar,
  RotateCcw
} from 'lucide-react';
import { STATES_COVERED, GLOBAL_FOOTPRINT_COUNTRIES } from '../context/DataContext';
import CorporatePartnersMarquee from '../components/common/CorporatePartnersMarquee';
import GlobalFootprintMapSection from '../components/common/GlobalFootprintMapSection';

export default function WhyHQX() {
  const [activeFilter, setActiveFilter] = useState('all');

  const sectorClusters = [
    {
      id: 'finance',
      title: 'Banking, Capital Markets & Legal',
      category: 'Finance & Governance',
      icon: Landmark,
      tagline: 'Psychology of wealth, risk composure & regulatory stewardship',
      sectors: [
        'Corporate Banking', 'Wealth Management', 'Mutual Funds', 
        'Life & General Insurance', 'Corporate Law', 'Private Equity', 
        'NBFCs & Microfinance', 'InsurTech'
      ],
      keyClients: ['Barclays', 'HDFC Life', 'HDFC ERGO', 'Absa Bank (Mauritius)', 'Amana Bank (Tanzania)', 'SMFG India', 'Shardul Amarchand'],
      metric: '15+ Banking & Institutional Clients'
    },
    {
      id: 'tech',
      title: 'DeepTech, AI & Life Sciences',
      category: 'Innovation & Healthcare',
      icon: Cpu,
      tagline: 'Cognitive poise, burnout mitigation & purpose alignment in fast-growth pods',
      sectors: [
        'Artificial Intelligence', 'Biotechnology', 'Pharmaceuticals', 
        'Semiconductors & Electronics', 'Cloud Infrastructure', 'HealthTech Diagnostics'
      ],
      keyClients: ['Cipla', 'Mango Sciences (Boston/Goa)', 'NetApp', 'Suburban Diagnostics', 'Turtlemint Pro'],
      metric: 'High-Velocity Exponential Teams'
    },
    {
      id: 'industry',
      title: 'Manufacturing, Infrastructure & Energy',
      category: 'Industrial Scale',
      icon: Factory,
      tagline: 'Operational stamina, plant-floor synergy & frontline executive leadership',
      sectors: [
        'Heavy Manufacturing', 'Automotive Engineering', 'Energy & Power', 
        'Construction & EPC', 'Cables & Conductors', 'Transportation & Airlines', 
        'Global Supply Chain & Logistics'
      ],
      keyClients: ['TATA Motors', 'APAR Industries', 'Tricolite Electrical', 'Burns & McDonnell', 'IndiGo Airlines', 'Uniworld Logistics', 'Amal Embroidery'],
      metric: '250,000+ Plant & Field Professionals'
    },
    {
      id: 'academia',
      title: 'Elite Academia & Global Institutions',
      category: 'Higher Ed & Research',
      icon: GraduationCap,
      tagline: 'Cultivating tomorrow’s ethical, mindful and resilient global leaders',
      sectors: [
        'IIMs & Premier B-Schools', 'MBA & BBM Programs', 'Engineering Universities', 
        'Architecture Institutes', 'Sports Management Academies', 'Startup Incubators & Accelerators', 
        'K-12 International Schools'
      ],
      keyClients: ['Harvard Club (Sri Lanka x APAC)', 'IIMs', 'Masters’ Union', 'IISM Sports Management', 'Global Indian School (Dubai)', 'Podar International', 'Pathways World School'],
      metric: '18+ Premier Academic Bastions'
    }
  ];

  const filteredClusters = activeFilter === 'all' 
    ? sectorClusters 
    : sectorClusters.filter(c => c.id === activeFilter);

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* HERO SECTION */}
      <section className="bg-[#0A0A0A] text-hq-white pt-36 pb-20 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-hq-yellow/5 via-transparent to-transparent pointer-events-none opacity-40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold mb-5 leading-tight">
            Why Global Enterprises <br />
            <span className="text-hq-yellow">Choose HQX</span>
          </h1>
          <p className="font-body text-base sm:text-lg md:text-xl text-hq-white/80 max-w-3xl font-light leading-relaxed mb-10">
            Most corporate wellness programs fail because they offer fleeting hedonic perks. HQX delivers systematic eudaimonic transformation rooted in neuroscience, organizational psychology, and proven C-suite stewardship.
          </p>

          {/* Quick Metrics Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/15">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-hq-yellow">+31%</div>
              <div className="text-xs text-hq-white/70 font-mono tracking-wider uppercase mt-1">Productivity Lift</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-hq-white">-28%</div>
              <div className="text-xs text-hq-white/70 font-mono tracking-wider uppercase mt-1">Executive Burnout</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-hq-yellow">25+ Yrs</div>
              <div className="text-xs text-hq-white/70 font-mono tracking-wider uppercase mt-1">Fortune Executive DNA</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-hq-white">100 Days</div>
              <div className="text-xs text-hq-white/70 font-mono tracking-wider uppercase mt-1">Behavioral Rewiring</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / SUPPORTIVE GUIDANCE SHOWCASE (EXACT EDITORIAL DESIGN AS REQUESTED) */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-[#FAF8F5] border-b border-black/10">
        <div className="max-w-7xl mx-auto space-y-16 lg:space-y-20">
          
          {/* Top Tier: Left Narrative + Right Consultation Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#7A7067] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7A7067]"></span>
                <span>Why Choose Us</span>
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-hq-black leading-[1.12]">
                Supportive Guidance <br />
                <span className="text-hq-black/40 font-light">You Can Count On</span>
              </h2>

              <p className="font-body text-sm sm:text-base text-hq-black/70 font-light leading-relaxed max-w-lg">
                From everyday stress to life's biggest challenges, our caring professionals are here to guide you with personalized support and evidence-based approaches.
              </p>

              <div className="pt-2">
                <Link 
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#1E1A17] hover:bg-black text-[#FAF8F5] px-7 py-3.5 rounded-full font-body text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                  <span>Book Session</span>
                  <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">›</span>
                </Link>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-6">
              <div className="w-full aspect-[4/3] rounded-[28px] sm:rounded-[34px] overflow-hidden bg-[#EFECE6] shadow-sm border border-black/5">
                <img 
                  src="/images/hero_showcase/why_hqx_consultation.jpg" 
                  alt="Executive Guidance & Consultation" 
                  className="w-full h-full object-cover filter contrast-[1.02] brightness-[0.99]"
                />
              </div>
            </div>
          </div>

          {/* Bottom Tier: Left 3 Stat Rows + Right 2x2 Feature Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: 3 Metric Rows */}
            <div className="lg:col-span-6 flex flex-col divide-y divide-black/10 border-b border-black/10">
              <div className="py-5 sm:py-6 flex items-center justify-between">
                <span className="font-display text-base sm:text-lg text-[#1E1915] font-medium">Happy Clients</span>
                <span className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1915]">120K+</span>
              </div>
              <div className="py-5 sm:py-6 flex items-center justify-between">
                <span className="font-display text-base sm:text-lg text-[#1E1915] font-medium">Sessions Completed</span>
                <span className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1915]">200K+</span>
              </div>
              <div className="py-5 sm:py-6 flex items-center justify-between">
                <span className="font-display text-base sm:text-lg text-[#1E1915] font-medium">Expert Therapists</span>
                <span className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1915]">50+</span>
              </div>
            </div>

            {/* Right Column: 2x2 Feature Grid with Crosshair Dividers */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2">
              
              {/* Feature 1: Personalized Care */}
              <div className="p-6 sm:p-7 sm:border-r sm:border-b border-black/10">
                <div className="w-11 h-11 rounded-2xl bg-[#EFECE6] text-[#6E645A] flex items-center justify-center mb-5 shadow-xs">
                  <Brain className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-display text-lg font-medium text-[#1E1915] mb-2">
                  Personalized Care
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#6E6660] font-light leading-relaxed">
                  Customized wellness plans tailored to your personal goals.
                </p>
              </div>

              {/* Feature 2: Expert Therapist */}
              <div className="p-6 sm:p-7 sm:border-b border-black/10 border-t sm:border-t-0">
                <div className="w-11 h-11 rounded-2xl bg-[#EFECE6] text-[#6E645A] flex items-center justify-center mb-5 shadow-xs">
                  <Award className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-display text-lg font-medium text-[#1E1915] mb-2">
                  Expert Therapist
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#6E6660] font-light leading-relaxed">
                  Certified therapists focused on your mental wellness journey.
                </p>
              </div>

              {/* Feature 3: Flexible Across */}
              <div className="p-6 sm:p-7 sm:border-r border-black/10 border-t sm:border-t-0">
                <div className="w-11 h-11 rounded-2xl bg-[#EFECE6] text-[#6E645A] flex items-center justify-center mb-5 shadow-xs">
                  <Calendar className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-display text-lg font-medium text-[#1E1915] mb-2">
                  Flexible Across
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#6E6660] font-light leading-relaxed">
                  Insurance-friendly with flexible online and in-person appointments.
                </p>
              </div>

              {/* Feature 4: Proven Support */}
              <div className="p-6 sm:p-7 border-t sm:border-t-0 border-black/10">
                <div className="w-11 h-11 rounded-2xl bg-[#EFECE6] text-[#6E645A] flex items-center justify-center mb-5 shadow-xs">
                  <RotateCcw className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-display text-lg font-medium text-[#1E1915] mb-2">
                  Proven Support
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#6E6660] font-light leading-relaxed">
                  Trusted care backed by 24/7 crisis support whenever needed.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4 PILLARS OF DISTINCTION - ULTRA-MODERN UNBOXED EDITORIAL ARCHITECTURE */}
      <section className="py-24 px-6 md:px-12 bg-white border-b border-hq-black/10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 pb-8 border-b border-hq-black/15">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-hq-black">
                The Four Pillars of Distinction
              </h2>
            </div>
            <p className="font-body text-xs sm:text-sm text-hq-black/70 max-w-md font-light leading-relaxed">
              Moving beyond superficial wellness trends to engineer compounding executive resilience, ethical governance, and quantified EBITDA growth.
            </p>
          </div>

          {/* Open Architectural Horizontal Rows (No Box Style) */}
          <div className="divide-y divide-hq-black/15 mb-16">
            {[
              {
                num: '01',
                title: 'Eudaimonia Over Superficial Hedonism',
                subtitle: 'Deep Purpose Alignment vs Fleeting Transactional Perks',
                desc: "Generic corporate wellness programs offer transactional perks—pizza lunches, gym discounts, or meditation apps with single-digit retention. HQX cultivates Aristotle's classical Eudaimonia (human flourishing through purpose, virtue, and self-realization), eradicating employee cynicism at its structural root.",
                metric: 'Sustained Inner Vitality',
                tag: 'Aristotelian Ethics'
              },
              {
                num: '02',
                title: 'Real C-Suite DNA & Boardroom Fluency',
                subtitle: '25+ Years at GE Capital, Barclays, ABN AMRO & HDFC Bank',
                desc: 'HQX was founded not by theoretical life coaches, but by an executive with 25 years of global management. Our sessions speak the rigorous language of EBITDA, talent retention, executive succession, and quarterly accountability.',
                metric: 'Fortune Executive Credibility',
                tag: 'Global Leadership'
              },
              {
                num: '03',
                title: 'Measurable Enterprise ROI',
                subtitle: 'Quantified Behavioral Blueprints & Proven Financial Uplift',
                desc: 'We believe happiness without measurement is mere wishful thinking. Our 100-day structured habit architecture delivers clear, quantified organizational ROI across productivity uplift, reduced stress absenteeism, and elevated team retention.',
                metric: '+31% Productivity Surge',
                tag: 'Evidence-Based ROI'
              },
              {
                num: '04',
                title: 'Proprietary 5-Pillar Holistic Architecture',
                subtitle: 'Integrated Ecosystem: Mental, Emotional, Physical, Financial & Values',
                desc: 'Human beings are complex ecosystems. A weakness in financial anxiety or emotional poise drags down physical vitality and leadership capacity. Our 5-Pillar framework treats the whole executive, creating compounding positive feedback loops.',
                metric: '360° Compounding Impact',
                tag: 'Systemic Framework'
              }
            ].map((pillar, idx) => (
              <div 
                key={idx}
                className="group py-8 sm:py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12 hover:bg-hq-gray/30 -mx-4 sm:-mx-6 px-4 sm:px-6 transition-colors duration-300"
              >
                {/* Number & Pillar Title */}
                <div className="flex items-start sm:items-center gap-6 sm:gap-8 w-full lg:w-5/12">
                  <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-hq-black/25 group-hover:text-hq-yellow font-normal transition-colors shrink-0">
                    {pillar.num}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-hq-black/50 block mb-1">
                      {pillar.tag}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl lg:text-[26px] font-semibold text-hq-black group-hover:translate-x-1.5 transition-transform duration-300 leading-snug">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Narrative Description */}
                <div className="w-full lg:w-5/12 font-body text-sm sm:text-base text-hq-black/75 font-light leading-relaxed">
                  {pillar.desc}
                </div>

                {/* Metric Chip */}
                <div className="w-full lg:w-2/12 flex lg:justify-end">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-hq-gray border border-hq-black/10 group-hover:border-hq-black group-hover:bg-hq-yellow group-hover:text-hq-black text-xs font-mono font-semibold transition-all duration-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-hq-yellow group-hover:text-hq-black" />
                    <span>{pillar.metric}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* PARADIGM SHIFT COMPARISON - ULTRA-MODERN DUAL LEDGER */}
          <div className="pt-12 pb-16 border-t border-hq-black/15">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
              <div>
                <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-hq-black">
                  The Paradigm Shift: How HQX Differs
                </h3>
              </div>
              <p className="font-body text-xs sm:text-sm text-hq-black/60 max-w-sm font-light">
                Why traditional corporate wellness efforts fail to move organizational needles, and how the eudaimonic model delivers compounding bottom-line value.
              </p>
            </div>

            {/* Side-by-side Dual Column Ledger */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              {/* Left Column: Traditional Model (Muted, Understated) */}
              <div className="space-y-6">
                <div className="pb-4 border-b-2 border-hq-black/20 flex items-center justify-between">
                  <span className="font-display uppercase tracking-wider text-sm font-bold text-hq-black/60">
                    Traditional Corporate Wellness
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 font-bold">
                    Hedonic & Fragile
                  </span>
                </div>

                <div className="divide-y divide-hq-black/10 text-xs sm:text-sm font-body">
                  <div className="py-4">
                    <div className="font-mono text-[11px] text-hq-black/50 uppercase mb-1">01. Philosophical Core</div>
                    <div className="text-hq-black/70 line-through decoration-red-400">Temporary stress masking, pizza lunches & superficial perks</div>
                  </div>
                  <div className="py-4">
                    <div className="font-mono text-[11px] text-hq-black/50 uppercase mb-1">02. Cadence & Duration</div>
                    <div className="text-hq-black/70">Single-day ad-hoc workshops with zero behavioural follow-through</div>
                  </div>
                  <div className="py-4">
                    <div className="font-mono text-[11px] text-hq-black/50 uppercase mb-1">03. Executive Buy-in</div>
                    <div className="text-hq-black/70">Delegated entirely to HR; senior leadership rarely participates</div>
                  </div>
                  <div className="py-4">
                    <div className="font-mono text-[11px] text-hq-black/50 uppercase mb-1">04. Metric Accountability</div>
                    <div className="text-hq-black/70">Anecdotal smile sheets & satisfaction surveys with ambiguous ROI</div>
                  </div>
                  <div className="py-4">
                    <div className="font-mono text-[11px] text-hq-black/50 uppercase mb-1">05. Faculty Provenance</div>
                    <div className="text-hq-black/70">Generic freelance trainers without corporate or boardroom background</div>
                  </div>
                </div>
              </div>

              {/* Right Column: HQX Eudaimonic Architecture (Bold, Illuminated with Yellow) */}
              <div className="space-y-6 bg-hq-gray/30 p-6 sm:p-8 -mx-4 sm:mx-0 border-l-4 border-hq-yellow">
                <div className="pb-4 border-b-2 border-hq-black flex items-center justify-between">
                  <span className="font-display uppercase tracking-wider text-sm font-bold text-hq-black">
                    The HQX Eudaimonic Model
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-hq-black bg-hq-yellow px-2 py-0.5 font-bold">
                    Eudaimonic & Antifragile
                  </span>
                </div>

                <div className="divide-y divide-hq-black/10 text-xs sm:text-sm font-body">
                  <div className="py-4">
                    <div className="font-mono text-[11px] text-hq-black font-semibold uppercase mb-1">01. Philosophical Core</div>
                    <div className="text-hq-black font-medium">Deep purpose alignment, self-mastery, Ikigai & lasting eudaimonic flourishing</div>
                  </div>
                  <div className="py-4">
                    <div className="font-mono text-[11px] text-hq-black font-semibold uppercase mb-1">02. Cadence & Duration</div>
                    <div className="text-hq-black font-medium">100-day structured habit architecture & cognitive neuroplastic rewiring</div>
                  </div>
                  <div className="py-4">
                    <div className="font-mono text-[11px] text-hq-black font-semibold uppercase mb-1">03. Executive Buy-in</div>
                    <div className="text-hq-black font-medium">Championed directly by the C-Suite and cascaded across top performers</div>
                  </div>
                  <div className="py-4">
                    <div className="font-mono text-[11px] text-hq-black font-semibold uppercase mb-1">04. Metric Accountability</div>
                    <div className="text-hq-black font-medium">Hard metrics: measurable retention surges, drop in absenteeism & EBITDA gains</div>
                  </div>
                  <div className="py-4">
                    <div className="font-mono text-[11px] text-hq-black font-semibold uppercase mb-1">05. Faculty Provenance</div>
                    <div className="text-hq-black font-medium">Olympic medalists, Fortune C-level veterans, Oxford/Harvard alumni & Shaurya Chakra awardees</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-SECTOR VERSATILITY & INSTITUTIONS IMPACTED - ULTRA-MODERN AESTHETIC ECOSYSTEM */}
      <section className="py-24 px-6 md:px-12 bg-white border-b border-hq-black/10">
        <div className="max-w-7xl mx-auto">
          {/* Header with Domain Filter */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-hq-black">
                Industries & Academic Institutions Impacted
              </h2>
            </div>
            <p className="font-body text-xs sm:text-sm text-hq-black/70 max-w-md font-light leading-relaxed">
              From Ivy League universities and premier management institutes to Fortune conglomerates, heavy infrastructure, and biotech frontier labs.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-hq-black/10">
            {[
              { id: 'all', label: 'All Ecosystems' },
              { id: 'finance', label: 'Finance & Banking' },
              { id: 'tech', label: 'DeepTech & Life Sciences' },
              { id: 'industry', label: 'Heavy Industry & Logistics' },
              { id: 'academia', label: 'Elite Academic Institutions' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 text-xs font-display uppercase tracking-wider font-semibold rounded-full transition-all ${
                  activeFilter === tab.id
                    ? 'bg-hq-black text-hq-yellow shadow-md'
                    : 'bg-hq-gray text-hq-black/75 hover:bg-white hover:border-hq-black border border-hq-black/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 4 Architectural Domain Streams (Unboxed Editorial Rows) */}
          <div className="divide-y divide-hq-black/15 mb-14">
            {filteredClusters.map((cluster) => {
              const IconComponent = cluster.icon;
              return (
                <div 
                  key={cluster.id}
                  className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start group hover:bg-hq-gray/30 -mx-4 sm:-mx-6 px-4 sm:px-6 transition-colors duration-300"
                >
                  {/* Column 1: Cluster Identity */}
                  <div className="lg:col-span-4 space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-hq-black text-hq-yellow flex items-center justify-center shrink-0 shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-hq-black/50 font-semibold">
                          {cluster.category}
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-hq-black group-hover:text-hq-yellow transition-colors">
                          {cluster.title}
                        </h3>
                      </div>
                    </div>
                    <p className="font-body text-xs text-hq-black/75 font-light leading-relaxed pt-2">
                      {cluster.tagline}
                    </p>
                    <div className="pt-1">
                      <span className="text-[11px] font-mono text-hq-black font-bold uppercase tracking-wider">
                        ✓ {cluster.metric}
                      </span>
                    </div>
                  </div>

                  {/* Column 2: Sectors Tags */}
                  <div className="lg:col-span-4 space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-hq-black/50 font-semibold mb-2">
                      Covered Sectors:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cluster.sectors.map((sec, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-white border border-hq-black/15 text-xs font-body font-medium text-hq-black group-hover:border-hq-black transition-colors"
                        >
                          {sec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Representative Engagements */}
                  <div className="lg:col-span-4 space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-hq-black/50 font-semibold mb-2">
                      Representative Engagements:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cluster.keyClients.map((client, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-hq-gray border border-hq-black/10 text-xs font-mono font-medium text-hq-black/80"
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Complete 28-Sector Master Pill Cloud */}
          <div className="pt-8 border-t border-hq-black/15">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-hq-black/60 font-semibold">
                Comprehensive 28-Domain Industry & Academic Index (Slide 34):
              </span>
              <span className="text-xs font-mono text-hq-black/50">
                28 Verified Domains
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                'Banking', 'Mutual Funds', 'Corporate Finance', 'Life & General Insurance', 'Corporate Law', 
                'Artificial Intelligence', 'Biotechnology', 'Pharmaceuticals', 'Electronics & Hardware', 'HealthTech', 
                'Automotive Engineering', 'Heavy Manufacturing', 'Energy & Power', 'Construction & EPC', 'Cables & Conductors', 
                'Transportation & Airlines', 'Global Logistics', 'Oil & Petrochemicals', 'Defense & Strategic Forces', 'Government & Public Policy', 
                'IIMs', 'MBA Programs', 'Engineering Universities', 'Architecture', 'Sports Management', 
                'Startup Incubators', 'BBM Graduation', 'K-12 International Schools'
              ].map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-white border border-hq-black/15 hover:border-hq-black hover:bg-hq-yellow hover:text-hq-black transition-all text-xs font-body font-medium text-hq-black cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NATIONWIDE & GLOBAL FOOTPRINT - DOTTED MATRIX WORLD MAP (UPLOADED SPEC) */}
      <GlobalFootprintMapSection />

      {/* FULL-WIDTH TRUSTED BY OVER 40+ INDUSTRY TITANS MARQUEE TOUCHING ABOVE FOOTER WITHOUT GAP */}
      <div className="w-full m-0 p-0">
        <CorporatePartnersMarquee showHeader={true} title="Trusted by Over 40+ Industry Titans" reversed={true} />
      </div>
    </div>
  );
}

