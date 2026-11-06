import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [hoveredSector, setHoveredSector] = useState(null);
  const [heroStep, setHeroStep] = useState(0); // 0: Think, 1: Feel, 2: Perform
  const videoRef = useRef(null);

  useEffect(() => {
    const checkTime = () => {
      const video = videoRef.current;
      if (!video) return;
      const t = video.currentTime;
      if (t < 2.4) {
        setHeroStep(0);
      } else if (t < 5.0) {
        setHeroStep(1);
      } else {
        setHeroStep(2);
      }
    };

    const interval = setInterval(checkTime, 100);
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', checkTime);
    }

    return () => {
      clearInterval(interval);
      if (video) {
        video.removeEventListener('timeupdate', checkTime);
      }
    };
  }, []);

  const getStepStyle = (stepIndex) => {
    const isCurrent = heroStep === stepIndex;

    if (isCurrent) {
      return {
        color: '#FFCE00',
        textShadow: '0 0 14px rgba(255,206,0,0.95), 0 0 28px rgba(255,206,0,0.8), 0 0 50px rgba(255,206,0,0.55)',
        transform: 'scale(1.05)',
      };
    }
    return {
      color: 'rgba(255, 255, 255, 0.7)',
      textShadow: 'none',
      transform: 'scale(1)',
    };
  };

  const getDotStyle = () => ({
    color: 'rgba(255, 255, 255, 0.35)',
    textShadow: 'none',
  });

  const sectorClusters = [
    {
      id: 'finance',
      num: '01',
      title: 'Banking, Capital Markets & Legal',
      category: 'Finance & Governance',
      icon: Landmark,
      tagline: 'Psychology of wealth, risk composure & regulatory stewardship under market volatility.',
      sectors: [
        'Corporate Banking', 'Wealth Management', 'Mutual Funds', 
        'Life & General Insurance', 'Corporate Law', 'Private Equity', 
        'NBFCs & Microfinance', 'InsurTech'
      ],
      keyClients: ['Barclays', 'HDFC Life', 'HDFC ERGO', 'Absa Bank (Mauritius)', 'Amana Bank (Tanzania)', 'SMFG India', 'Shardul Amarchand'],
      metric: '15+ Banking & Institutional Bastions'
    },
    {
      id: 'tech',
      num: '02',
      title: 'DeepTech, AI & Life Sciences',
      category: 'Innovation & Healthcare',
      icon: Cpu,
      tagline: 'Cognitive poise, burnout mitigation & purpose alignment in high-velocity tech pods.',
      sectors: [
        'Artificial Intelligence', 'Biotechnology', 'Pharmaceuticals', 
        'Semiconductors & Electronics', 'Cloud Infrastructure', 'HealthTech Diagnostics'
      ],
      keyClients: ['Cipla', 'Mango Sciences (Boston/Goa)', 'NetApp', 'Suburban Diagnostics', 'Turtlemint Pro'],
      metric: 'High-Velocity Exponential Teams'
    },
    {
      id: 'industry',
      num: '03',
      title: 'Manufacturing, Infrastructure & Energy',
      category: 'Industrial Scale',
      icon: Factory,
      tagline: 'Operational stamina, plant-floor synergy & frontline executive leadership at scale.',
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
      num: '04',
      title: 'Elite Academia & Global Institutions',
      category: 'Higher Ed & Research',
      icon: GraduationCap,
      tagline: 'Cultivating tomorrow’s ethical, mindful, and antifragile global business leaders.',
      sectors: [
        'IIMs & Premier B-Schools', 'MBA & BBM Programs', 'Engineering Universities', 
        'Architecture Institutes', 'Sports Management Academies', 'Startup Incubators & Accelerators', 
        'K-12 International Schools'
      ],
      keyClients: ['Harvard Club (Sri Lanka x APAC)', 'IIMs', 'Masters’ Union', 'IISM Sports Management', 'Global Indian School (Dubai)', 'Podar International', 'Pathways World School'],
      metric: '18+ Premier Academic Bastions'
    }
  ];



  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* HERO SECTION WITH CINEMATIC LIGHT PORTAL BACKGROUND (FIT TO SCREEN) */}
      <section className="bg-[#07080A] text-hq-white relative overflow-hidden h-screen min-h-[640px] max-h-[1080px] w-full flex flex-col justify-between border-b border-white/10">
        {/* Cinematic Background Video: Man Walking Toward Portal & Looking Outside */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <video
            ref={videoRef}
            src="/videos/why_hqx_walking_portal.mp4"
            poster="/images/why-hqx-man-think.jpg"
            autoPlay
            loop
            muted
            playsInline
            onTimeUpdate={(e) => {
              const t = e.currentTarget.currentTime;
              if (t < 2.4) {
                setHeroStep(0);
              } else if (t < 5.0) {
                setHeroStep(1);
              } else {
                setHeroStep(2);
              }
            }}
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
            {/* Editorial Headline with luminous yellow neon glow synchronized to man animation actions */}
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight leading-[1.15] mb-5 select-none">
              <span 
                style={getStepStyle(0)}
                className="transition-all duration-500 inline-block font-bold"
              >
                Think
              </span>

              <span 
                style={getDotStyle(1)}
                className="mx-2 sm:mx-2.5 transition-all duration-500 inline-block"
              >
                .
              </span>

              <span 
                style={getStepStyle(1)}
                className="transition-all duration-500 inline-block font-bold"
              >
                Feel
              </span>

              <span 
                style={getDotStyle(2)}
                className="mx-2 sm:mx-2.5 transition-all duration-500 inline-block"
              >
                .
              </span>

              <span 
                style={getStepStyle(2)}
                className="transition-all duration-500 inline-block font-bold"
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



{/* WHY CHOOSE US / SUPPORTIVE GUIDANCE SHOWCASE (FIT TO SCREEN) */}
      <section className="min-h-[100svh] lg:h-screen lg:min-h-[640px] lg:max-h-[1080px] px-6 md:px-12 bg-[#FAF8F5] border-b border-black/10 flex flex-col justify-center py-10 lg:py-12">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center space-y-8 sm:space-y-10 lg:space-y-12">
          
          {/* Section Header: Dual-Tone Title & Top Narrative (Exact Same As The Experts Behind Your Care Design) */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-6 lg:pb-8 border-b border-black/10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] dark:text-white leading-[1.08]">
                Supportive Guidance <br />
                <span className="text-[#666666] dark:text-white/60 font-light">You Can Count On</span>
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-hq-black/65 max-w-md font-light leading-relaxed lg:pb-1">
              From everyday stress to life's biggest challenges, our caring professionals are here to guide you with personalized support and evidence-based approaches.
            </p>
          </div>

          {/* Bottom Tier: Left 3 Stat Rows + Right 2x2 Feature Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: 3 Metric Rows */}
            <div className="lg:col-span-6 flex flex-col divide-y divide-black/10 border-b border-black/10">
              <div className="py-4 sm:py-5 lg:py-6 flex items-center justify-between">
                <span className="font-display text-base sm:text-lg text-[#1E1915] font-medium">Happy Clients</span>
                <span className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1915]">120K+</span>
              </div>
              <div className="py-4 sm:py-5 lg:py-6 flex items-center justify-between">
                <span className="font-display text-base sm:text-lg text-[#1E1915] font-medium">Sessions Completed</span>
                <span className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1915]">200K+</span>
              </div>
              <div className="py-4 sm:py-5 lg:py-6 flex items-center justify-between">
                <span className="font-display text-base sm:text-lg text-[#1E1915] font-medium">Expert Therapists</span>
                <span className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1915]">50+</span>
              </div>
            </div>

            {/* Right Column: 2x2 Feature Grid with Crosshair Dividers */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2">
              
              {/* Feature 1: Personalized Care */}
              <div className="p-5 sm:p-6 lg:p-7 sm:border-r sm:border-b border-black/10">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#EFECE6] text-[#6E645A] flex items-center justify-center mb-4 shadow-xs">
                  <Brain className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-medium text-[#1E1915] mb-1.5">
                  Personalized Care
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#6E6660] font-light leading-relaxed">
                  Customized wellness plans tailored to your personal goals.
                </p>
              </div>

              {/* Feature 2: Expert Therapist */}
              <div className="p-5 sm:p-6 lg:p-7 sm:border-b border-black/10 border-t sm:border-t-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#EFECE6] text-[#6E645A] flex items-center justify-center mb-4 shadow-xs">
                  <Award className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-medium text-[#1E1915] mb-1.5">
                  Expert Therapist
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#6E6660] font-light leading-relaxed">
                  Certified therapists focused on your mental wellness journey.
                </p>
              </div>

              {/* Feature 3: Flexible Across */}
              <div className="p-5 sm:p-6 lg:p-7 sm:border-r border-black/10 border-t sm:border-t-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#EFECE6] text-[#6E645A] flex items-center justify-center mb-4 shadow-xs">
                  <Calendar className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-medium text-[#1E1915] mb-1.5">
                  Flexible Across
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#6E6660] font-light leading-relaxed">
                  Insurance-friendly with flexible online and in-person appointments.
                </p>
              </div>

              {/* Feature 4: Proven Support */}
              <div className="p-5 sm:p-6 lg:p-7 border-t sm:border-t-0 border-black/10">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#EFECE6] text-[#6E645A] flex items-center justify-center mb-4 shadow-xs">
                  <RotateCcw className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-medium text-[#1E1915] mb-1.5">
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

      
            {/* 4 PILLARS OF DISTINCTION - ULTRA-MODERN UNBOXED EDITORIAL ARCHITECTURE (MINIMIZED BOTTOM WHITE SPACE) */}
      <section className="pt-16 sm:pt-20 pb-8 sm:pb-10 px-6 md:px-12 bg-white border-b border-hq-black/10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header: Dual-Tone Title & Top Narrative (Matches Supportive Guidance style) */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-black/10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] leading-[1.08]">
                The Four Pillars <br />
                <span className="text-[#666666] font-light">of Distinction</span>
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-hq-black/65 max-w-md font-normal leading-relaxed lg:pb-1">
              Moving beyond superficial wellness trends to engineer compounding executive resilience, ethical governance, and quantified EBITDA growth.
            </p>
          </div>

          {/* Open Architectural Horizontal Rows (No Box Style - Clean Zero Margin Below Pillar 4) */}
          <div className="divide-y divide-hq-black/15 mb-0">
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
                <div className="flex items-start sm:items-center gap-5 sm:gap-7 w-full lg:w-4/12">
                  <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-black/20 group-hover:text-[#FFCE00] font-normal transition-colors duration-300 shrink-0">
                    {pillar.num}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A7067] font-semibold block mb-1">
                      {pillar.tag}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl lg:text-[22px] font-semibold text-[#1E1915] group-hover:translate-x-1 transition-transform duration-300 leading-snug">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Narrative Description */}
                <div className="w-full lg:w-5/12 font-body text-xs sm:text-sm text-[#4A4540] font-normal leading-relaxed pr-2">
                  {pillar.desc}
                </div>

                {/* Metric Chip (Redesigned Executive Proof Capsule) */}
                <div className="w-full lg:w-3/12 flex lg:justify-end shrink-0">
                  <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-full bg-[#FAF8F5] border border-black/10 group-hover:border-black group-hover:bg-[#1E1A17] transition-all duration-300 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-[#FFCE00]/25 text-[#1E1A17] group-hover:bg-[#FFCE00] group-hover:text-black flex items-center justify-center shrink-0 transition-colors duration-300">
                      <CheckCircle2 className="w-3 h-3 stroke-[2.2]" />
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E1915] group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                      {pillar.metric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOW HQX COMPARES (FULL BG BLACK - FIT TO SCREEN WITHOUT VERTICAL SCROLL) */}
      <section className="min-h-[100svh] lg:h-screen lg:min-h-[600px] lg:max-h-[1080px] px-6 md:px-12 bg-black text-white border-b border-white/10 relative overflow-hidden flex flex-col justify-center py-6 sm:py-8 lg:py-8">
        {/* Subtle Ambient Radial Highlight */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[700px] bg-[#FFCE00]/[0.02] rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center space-y-4 sm:space-y-5 lg:space-y-6 relative z-10">
          
          {/* Section Header: Dual-Tone Title & Top Narrative (Matches Supportive Guidance layout) */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 pb-4 sm:pb-5 lg:pb-6 border-b border-white/10">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-[1.08]">
                How HQX™ <br />
                <span className="text-white/60 font-light">Compares</span>
              </h2>
            </div>
            <p className="font-body text-xs sm:text-sm lg:text-[14.5px] text-white/70 max-w-md font-normal leading-relaxed lg:pb-1">
              Why traditional corporate wellness efforts fail to move organizational needles, and how our eudaimonic architecture delivers compounding bottom-line value.
            </p>
          </div>

          {/* Full-Width Comparison Table (No vertical scroll inside section) */}
          <div className="overflow-x-auto overflow-y-hidden">
            <div className="min-w-[640px] relative py-1">
              
              {/* Continuous Highlighted Capsule Track for HQX Column (Contained within bounds) */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[18%] bg-white/[0.08] border border-white/[0.08] rounded-[20px] pointer-events-none" />

              {/* Table Header */}
              <div className="grid grid-cols-12 items-center pb-4 sm:pb-5 border-b border-white/10 text-white relative z-10">
                <div className="col-span-5 text-xs font-mono uppercase tracking-wider font-bold text-white/70">
                  DIMENSION / CRITERIA
                </div>
                <div className="col-span-2 flex justify-center items-center">
                  <span className="inline-flex items-center justify-center px-3.5 py-1 rounded-full border border-[#FFCE00]/50 bg-[#FFCE00]/15 text-xs font-bold tracking-wider text-[#FFCE00] shadow-xs uppercase">
                    HQX™
                  </span>
                </div>
                <div className="col-span-2 text-center text-xs font-bold uppercase tracking-wider text-white leading-snug px-1">
                  LEADING<br />CORPORATE WELLNESS
                </div>
                <div className="col-span-3 text-center text-xs font-bold uppercase tracking-wider text-white leading-snug px-1">
                  ALL-IN-ONE<br />APPS & PERKS
                </div>
              </div>

              {/* Table Body Rows */}
              <div className="divide-y divide-white/[0.06] relative z-10">
                {[
                  { 
                    feature: 'Stress resilience & foundational vitality', 
                    hqx: true, 
                    traditional: true, 
                    apps: true 
                  },
                  { 
                    feature: 'Aristotelian Eudaimonia & deep purpose alignment', 
                    hqx: true, 
                    traditional: false, 
                    apps: false 
                  },
                  { 
                    feature: '100-day neuroplastic habit rewiring architecture', 
                    hqx: true, 
                    traditional: false, 
                    apps: false 
                  },
                  { 
                    feature: 'Direct C-Suite engagement & boardroom alignment', 
                    hqx: true, 
                    traditional: false, 
                    apps: false 
                  },
                  { 
                    feature: 'Proprietary 360° 5-pillar ecosystem (Mental to Financial)', 
                    hqx: true, 
                    traditional: true, 
                    apps: false 
                  },
                  { 
                    feature: 'World-class faculty (Olympians, C-Suite, Ivy League)', 
                    hqx: true, 
                    traditional: false, 
                    apps: false 
                  },
                  { 
                    feature: 'Quantified EBITDA & hard enterprise ROI attribution', 
                    hqx: true, 
                    traditional: false, 
                    apps: false 
                  },
                  { 
                    feature: 'Sustainable antifragile culture (Zero employee cynicism)', 
                    hqx: true, 
                    traditional: false, 
                    apps: false 
                  }
                ].map((row, idx) => (
                  <div 
                    key={idx}
                    className="grid grid-cols-12 items-center py-2 sm:py-2.5"
                  >
                    {/* Feature Name */}
                    <div className="col-span-5 pr-4 text-xs sm:text-sm font-body text-white/90 font-light leading-snug">
                      {row.feature}
                    </div>

                    {/* HQX Status (Solid Yellow Dot with Subtle Glow) */}
                    <div className="col-span-2 flex justify-center items-center">
                      {row.hqx ? (
                        <span className="w-3.5 h-3.5 rounded-full bg-[#FFCE00] shadow-[0_0_10px_rgba(255,206,0,0.8)]" />
                      ) : (
                        <span className="w-3.5 h-3.5 rounded-full border-[1.5px] border-[#FFCE00]/50" />
                      )}
                    </div>

                    {/* Traditional Wellness Status */}
                    <div className="col-span-2 flex justify-center items-center">
                      {row.traditional ? (
                        <span className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
                      ) : (
                        <span className="w-3.5 h-3.5 rounded-full border-[1.5px] border-white/40" />
                      )}
                    </div>

                    {/* All-in-One Apps Status */}
                    <div className="col-span-3 flex justify-center items-center">
                      {row.apps ? (
                        <span className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
                      ) : (
                        <span className="w-3.5 h-3.5 rounded-full border-[1.5px] border-white/40" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* INDUSTRIES & ACADEMIC INSTITUTIONS IMPACTED - ARCHITECTURAL LUXURY REDESIGN */}
      <section className="py-20 sm:py-28 px-6 md:px-12 bg-[#FAF8F5] border-b border-black/10 relative overflow-visible">
        {/* Subtle Ambient Radial Highlight */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFCE00]/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-8 border-b border-black/10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] leading-[1.08]">
                Industries & Academic <br />
                <span className="text-[#666666] font-light">Institutions Impacted</span>
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-[#2E2A27] max-w-md font-normal leading-relaxed lg:pb-1">
              From Fortune conglomerates and global investment banks to Ivy League leadership forums and high-velocity frontier labs.
            </p>
          </div>

          {/* 4 ELEGANT UNBOXED SECTORS (GIVEN STYLE: HIGH-CLASS ICONS WITH SYNCHRONIZED ANIMATION & HOVER TOOLTIPS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-12 sm:gap-y-16 py-4 sm:py-8">
            {sectorClusters.map((cluster, index) => {
              const IconComponent = cluster.icon;
              return (
                <div 
                  key={cluster.id}
                  onMouseEnter={() => setHoveredSector(cluster.id)}
                  onMouseLeave={() => setHoveredSector(null)}
                  onClick={() => setHoveredSector(hoveredSector === cluster.id ? null : cluster.id)}
                  className="relative group cursor-pointer flex items-center gap-5 sm:gap-7 select-none"
                >
                  {/* High Class Elegant Icon Container with Synchronized Animation on Exact Same Pace */}
                  <div className="relative shrink-0">
                    {/* Synchronized Ambient Halo */}
                    <motion.div 
                      animate={{
                        opacity: [0.25, 0.65, 0.25],
                        scale: [1, 1.15, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -inset-1 rounded-2xl bg-[#FFCE00]/30 blur-xs pointer-events-none"
                    />

                    {/* Synchronized Floating Icon Container */}
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                        scale: [1, 1.025, 1]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#1E1A17] text-[#FFCE00] group-hover:bg-[#FFCE00] group-hover:text-[#1E1A17] flex items-center justify-center shadow-lg group-hover:shadow-[0_12px_30px_rgba(255,206,0,0.35)] transition-colors duration-300 relative z-10"
                    >
                      <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 stroke-[1.6]" />
                    </motion.div>
                  </div>

                  {/* Clean Typography Title & Prompt (Matching Given Reference Style) */}
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-[#7A7067] font-semibold mb-1 flex items-center gap-2">
                      <span>Sector Cluster {cluster.num}</span>
                      <span className="w-1 h-1 rounded-full bg-black/20" />
                      <span>{cluster.category}</span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl lg:text-[26px] font-semibold text-[#1E1915] group-hover:text-black leading-snug tracking-tight transition-colors">
                      {cluster.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-1.5 text-xs font-mono text-[#7A7067] group-hover:text-[#1E1A17] transition-colors">
                      <span className="font-medium">Hover to view sector details & partners</span>
                      <span className="text-[#FFCE00] group-hover:translate-x-1 transition-transform">›</span>
                    </div>
                  </div>

                  {/* Clean Tooltip Popup with Smooth Animation */}
                  <AnimatePresence>
                    {hoveredSector === cluster.id && (
                      <motion.div
                        initial={{ opacity: 0, y: index < 2 ? 10 : -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: index < 2 ? 8 : -8, scale: 0.95 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className={`absolute z-50 w-[330px] sm:w-[420px] pointer-events-auto shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] ${
                          index < 2 ? 'top-full mt-4' : 'bottom-full mb-4'
                        } ${
                          index % 2 === 0 ? 'left-0 sm:left-4' : 'right-0 sm:right-4'
                        }`}
                      >
                        <div className="bg-[#121316]/95 backdrop-blur-xl border border-white/15 text-white p-6 sm:p-7 rounded-2xl relative shadow-2xl">
                          {/* Triangle Indicator Arrow */}
                          <div className={`absolute w-3.5 h-3.5 bg-[#121316] border-white/15 rotate-45 ${
                            index < 2 
                              ? '-top-2 border-t border-l ' + (index % 2 === 0 ? 'left-8' : 'right-8') 
                              : '-bottom-2 border-b border-r ' + (index % 2 === 0 ? 'left-8' : 'right-8')
                          }`} />

                          {/* Tooltip Header */}
                          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFCE00] font-bold">
                              {cluster.category}
                            </span>
                            <span className="text-xs font-mono font-bold text-white/50 tracking-wider">
                              SECTOR CLUSTER {cluster.num}
                            </span>
                          </div>

                          {/* Title & Tagline */}
                          <div className="mb-4">
                            <h4 className="font-display text-lg font-semibold text-white mb-1.5">
                              {cluster.title}
                            </h4>
                            <p className="font-body text-xs sm:text-[13px] text-white/80 font-light leading-relaxed">
                              "{cluster.tagline}"
                            </p>
                          </div>

                          {/* Representative Institutional Engagements */}
                          <div className="mb-4">
                            <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 font-semibold mb-2">
                              Representative Institutional Engagements
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {cluster.keyClients.map((client, idx) => (
                                <span
                                  key={idx}
                                  className="px-2.5 py-1 bg-white/10 hover:bg-white/15 border border-white/10 text-xs font-mono font-medium text-white rounded-md transition-colors"
                                >
                                  {client}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Covered Domain Sectors */}
                          <div className="mb-4">
                            <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 font-semibold mb-2">
                              Covered Domain Sectors
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {cluster.sectors.map((sec, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-0.5 bg-black/50 border border-white/5 text-[11px] font-body text-white/70 rounded"
                                >
                                  {sec}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Card Bottom: Verified Impact Metric */}
                          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                            <span className="inline-flex items-center gap-2 font-semibold text-white">
                              <span className="w-2 h-2 rounded-full bg-[#FFCE00]" />
                              <span>{cluster.metric}</span>
                            </span>
                            <span className="text-[10px] uppercase tracking-wider text-white/40 bg-white/5 px-2 py-0.5 rounded">
                              Verified Impact
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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

