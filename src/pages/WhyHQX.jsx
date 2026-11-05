import React, { useState, useRef, useEffect } from 'react';
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
} from 'lucide-react';
import { STATES_COVERED, GLOBAL_FOOTPRINT_COUNTRIES } from '../context/DataContext';
import CorporatePartnersMarquee from '../components/common/CorporatePartnersMarquee';
import GlobalFootprintMapSection from '../components/common/GlobalFootprintMapSection';

export default function WhyHQX() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [heroStep, setHeroStep] = useState(0); // 0: Think, 1: Feel, 2: Perform
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      const t = video.currentTime;
      // Step 0 (Think): 0s - 2.0s
      // Step 1 (Feel): 2.0s - 4.5s
      // Step 2 (Perform): 4.5s - 8.6s
      if (t < 2.4) {
        setHeroStep(0);
      } else if (t < 5.0) {
        setHeroStep(1);
      } else {
        setHeroStep(2);
      }
    };

    video.addEventListener('timeupdate', onTimeUpdate);
    return () => {
      video.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, []);

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
      {/* HERO SECTION WITH CINEMATIC LIGHT PORTAL BACKGROUND (FIT TO SCREEN) */}
      <section className="bg-[#07080A] text-hq-white relative overflow-hidden h-screen min-h-[640px] max-h-[1080px] w-full flex flex-col justify-between border-b border-white/10">
        {/* Cinematic Background Video: Man Walking Toward Portal & Looking Outside */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <video
            src="/videos/why_hqx_walking_portal.mp4"
            poster="/images/why-hqx-man-think.jpg"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-[72%_center] lg:object-[68%_center]"
          />
          {/* Multi-tier Contrast Scrim Overlays */}
          {/* Left-to-right gradient to guarantee crystal-clear contrast for headline & narrative */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07080A]/95 via-[#07080A]/85 sm:via-[#07080A]/70 lg:via-[#07080A]/40 to-transparent"></div>
          {/* Mobile dark wash for narrow screens */}
          <div className="absolute inset-0 bg-[#07080A]/45 lg:hidden"></div>
          {/* Top seam fade beneath fixed navbar */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#07080A] via-[#07080A]/60 to-transparent"></div>
          {/* Bottom seam fade into docked stats strip */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07080A] via-[#07080A]/80 to-transparent"></div>
        </div>

        {/* Left Side Vertical Text: WHY HQX */}
        <div className="absolute left-3 sm:left-6 lg:left-8 xl:left-12 inset-y-0 z-20 flex flex-col justify-center items-center pointer-events-none select-none">
          <div 
            className="flex items-center gap-3 sm:gap-4"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span className="font-display text-[11px] sm:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-hq-yellow drop-shadow-md">
              WHY HQX
            </span>
            <span className="w-px h-8 sm:h-14 bg-white/25"></span>
          </div>
        </div>

        {/* Main Content Area (Vertically Centered in Viewport) */}
        <div className="max-w-7xl mx-auto pl-12 pr-6 sm:pl-16 sm:pr-8 md:pl-20 md:pr-12 lg:pl-24 relative z-10 w-full flex-1 flex flex-col justify-center pt-28 sm:pt-32 pb-8">
          <div className="max-w-md">
            {/* Editorial Headline with synchronized video animation step highlighting */}
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight leading-[1.15] mb-5 drop-shadow-md select-none">
              <span 
                className={`transition-all duration-500 inline-block ${
                  heroStep >= 0 
                    ? heroStep === 0 
                      ? 'text-hq-yellow font-bold drop-shadow-[0_0_20px_rgba(255,206,0,0.85)] scale-[1.03]' 
                      : 'text-hq-yellow font-semibold' 
                    : 'text-white/60'
                }`}
              >
                Think
              </span>

              <span className={`mx-2 sm:mx-2.5 transition-colors duration-500 ${heroStep >= 1 ? 'text-hq-yellow/80' : 'text-white/30'}`}>
                .
              </span>

              <span 
                className={`transition-all duration-500 inline-block ${
                  heroStep >= 1 
                    ? heroStep === 1 
                      ? 'text-hq-yellow font-bold drop-shadow-[0_0_20px_rgba(255,206,0,0.85)] scale-[1.03]' 
                      : 'text-hq-yellow font-semibold' 
                    : 'text-white/60'
                }`}
              >
                Feel
              </span>

              <span className={`mx-2 sm:mx-2.5 transition-colors duration-500 ${heroStep >= 2 ? 'text-hq-yellow/80' : 'text-white/30'}`}>
                .
              </span>

              <span 
                className={`transition-all duration-500 inline-block ${
                  heroStep >= 2 
                    ? 'text-hq-yellow font-bold drop-shadow-[0_0_20px_rgba(255,206,0,0.85)] scale-[1.03]' 
                    : 'text-white/60'
                }`}
              >
                Perform
              </span>
            </h1>

            {/* Lead Narrative matching About Us font properties */}
            <p className="font-body text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8 drop-shadow-sm">
              HQX delivers systematic eudaimonic transformation rooted in neuroscience, organizational psychology, and proven C-suite stewardship.
            </p>

            {/* Signature HQX Hero Button (Matching Founder & Home Hero Style) */}
            <div className="pt-1">
              <Link
                to="/about-us"
                className="group relative inline-flex items-center justify-between gap-8 py-3.5 px-2 font-display font-medium text-xs tracking-[0.2em] text-white hover:text-hq-yellow transition-colors duration-300 uppercase"
              >
                {/* Top hairline border line */}
                <span className="absolute top-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />

                <span className="relative z-10 font-semibold tracking-widest">EXPLORE METHODOLOGY</span>

                <svg 
                  className="w-[22px] h-[11px] inline-block transition-transform duration-300 group-hover:translate-x-1.5 flex-shrink-0" 
                  viewBox="0 0 20 10" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="0" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="1.2" />
                  <polyline points="15 1, 20 5, 15 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* Bottom hairline border line */}
                <span className="absolute bottom-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />
              </Link>
            </div>
          </div>
        </div>

        {/* DOCKED STATS & REPUTATION TICKER STRIP (EXACT SAME AS FOUNDER HERO SECTION) */}
        <div className="w-full bg-[#0A0A0A]/95 backdrop-blur-md text-white/80 py-3.5 sm:py-4 px-6 md:px-12 border-t border-white/10 overflow-hidden relative z-20">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs font-mono uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">+31%</span>
              <span className="text-white/70">Productivity Lift</span>
            </div>
            <span className="text-white/20 hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">-28%</span>
              <span className="text-white/70">Executive Burnout</span>
            </div>
            <span className="text-white/20 hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">25+ Yrs</span>
              <span className="text-white/70">Fortune Executive DNA</span>
            </div>
            <span className="text-white/20 hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">100 Days</span>
              <span className="text-white/70">Behavioral Rewiring</span>
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

