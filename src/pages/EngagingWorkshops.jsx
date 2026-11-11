import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Clock, Users, CheckCircle2, ArrowRight, Heart, Lightbulb, Target, Zap } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function EngagingWorkshops() {
  const { addInquiry } = useData();
  const [isLightOn, setIsLightOn] = useState(true);
  const [hoveredWorkshop, setHoveredWorkshop] = useState(0);
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
      expertImage: '/team/parvej-mantrri.png'
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
      {/* Hero Section: About Us Editorial Split Layout + Interactive Light Bulb Toggle */}
      <section
        className={`text-white min-h-[100svh] lg:h-[100svh] lg:min-h-[560px] lg:max-h-[1080px] flex flex-col justify-between pt-20 sm:pt-24 pb-0 border-b border-white/10 relative overflow-hidden w-full transition-colors duration-700 ${
          isLightOn ? 'bg-[#121315]' : 'bg-[#070809]'
        }`}
      >
        {/* Dynamic Ambient Light Illumination From Right-Side Bulb */}
        <motion.div
          animate={{ opacity: isLightOn ? 1 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-[12%] right-[12%] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,206,0,0.22)_0%,rgba(255,138,43,0.10)_35%,rgba(0,0,0,0)_72%)] blur-[30px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_46%,rgba(255,214,102,0.09)_0%,transparent_58%)]" />
        </motion.div>

        {/* Left Side Vertical Text (Matching About Us Hero Style) */}
        <div className="absolute left-3 sm:left-6 lg:left-8 xl:left-12 inset-y-0 z-20 flex flex-col justify-center items-center pointer-events-none select-none">
          <div
            className="flex items-center gap-3 sm:gap-4"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span className="font-display text-[11px] sm:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-hq-yellow drop-shadow-md">
              ENGAGING WORKSHOPS
            </span>
            <span className="w-px h-8 sm:h-14 bg-white/25" />
          </div>
        </div>

        {/* Framing Container: Exact Alignment with About Us Hero */}
        <div className="max-w-7xl mx-auto pl-12 pr-6 sm:pl-16 sm:pr-8 md:pl-20 md:pr-12 lg:pl-24 w-full relative z-10 flex-1 flex items-center py-3 sm:py-4 min-h-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full">
            {/* Left Column: About Us Style Editorial Content (Existing Content Only) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="max-w-md">
                <h1
                  style={{ fontFamily: '"Geist", Arial, sans-serif', fontWeight: 300 }}
                  className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-light tracking-tight text-white leading-[1.15] mb-5"
                >
                  Engaging <br />
                  <span
                    style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                    className="text-hq-yellow font-bold"
                  >
                    Workshops
                  </span>
                </h1>

                <p className="font-body text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8">
                  Interactive Corporate Workshops designed to enhance professional skills and organizational effectiveness. Focusing on strategic thinking, resilience development, performance optimization, leadership skills, effective communication, and stress management.
                </p>

                <div className="pt-2">
                  <a
                    href="#booking-section"
                    className="group relative inline-flex items-center justify-between gap-8 py-3.5 px-2 font-display font-medium text-xs tracking-[0.2em] text-white hover:text-hq-yellow transition-colors duration-300 uppercase"
                  >
                    {/* Top border line */}
                    <span className="absolute top-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />

                    <span className="relative z-10 font-semibold tracking-widest">RESERVE WORKSHOP</span>

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
            </div>

            {/* Right Column: Interactive Hanging Edison Light Bulb + On/Off Toggle */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
              {/* Subtle Vertical Editorial Watermark Behind Bulb (Matching Reference Concept) */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 font-display text-5xl lg:text-6xl font-bold tracking-tight text-white/[0.04] pointer-events-none select-none"
                style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
              >
                Workshops.
              </div>

              {/* Clickable Vintage Edison Glass Bulb */}
              <div
                onClick={() => setIsLightOn((prev) => !prev)}
                role="button"
                tabIndex={0}
                aria-label={isLightOn ? 'Turn bulb light off' : 'Turn bulb light on'}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsLightOn((prev) => !prev);
                  }
                }}
                className="relative cursor-pointer select-none group flex flex-col items-center"
              >
                {/* Volumetric Halo Behind Glass Bulb When ON */}
                <motion.div
                  animate={{
                    opacity: isLightOn ? [0.78, 0.95, 0.78] : 0,
                    scale: isLightOn ? [0.97, 1.03, 0.97] : 0.85
                  }}
                  transition={{
                    opacity: { duration: 3.6, repeat: isLightOn ? Infinity : 0, ease: 'easeInOut' },
                    scale: { duration: 3.6, repeat: isLightOn ? Infinity : 0, ease: 'easeInOut' }
                  }}
                  className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-[radial-gradient(circle,rgba(255,220,120,0.45)_0%,rgba(255,140,40,0.20)_45%,transparent_75%)] blur-2xl pointer-events-none"
                />

                {/* Photorealistic Transparent-BG Hanging Edison Bulb + Complete Holder & Thick Yellow Wire */}
                <div className="relative z-10 h-[270px] sm:h-[320px] lg:h-[calc(100vh-250px)] lg:min-h-[260px] lg:max-h-[400px] aspect-[3/4] w-auto flex items-center justify-center">
                  {/* Thick Yellow Pendant Wire Coming From Top + Complete Stepped Matte Holder Cap */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-full left-[33.09%] w-[33.82%] -mb-[3px] flex flex-col items-center pointer-events-none z-20"
                  >
                    {/* Desktop: Thick Yellow Wire Extending All the Way to Top of Hero */}
                    <div
                      className={`hidden lg:block w-[9px] h-[45vh] transition-all duration-500 shadow-[0_0_16px_rgba(255,206,0,0.22)] ${
                        isLightOn
                          ? 'bg-gradient-to-r from-[#B89000] via-[#FFCE00] to-[#6E5400]'
                          : 'bg-gradient-to-r from-[#594600] via-[#9C7B00] to-[#3B2E00]'
                      }`}
                    />
                    {/* Mobile/Tablet: Short Pendant Yellow Wire Above Bulb Holder */}
                    <div
                      className={`lg:hidden w-[8px] h-12 rounded-t-full transition-all duration-500 ${
                        isLightOn
                          ? 'bg-gradient-to-r from-[#B89000] via-[#FFCE00] to-[#6E5400]'
                          : 'bg-gradient-to-r from-[#594600] via-[#9C7B00] to-[#3B2E00]'
                      }`}
                    />

                    {/* Sculpted Matte Holder Cap Matching Socket Cylindrical Shading */}
                    <svg
                      viewBox="0 0 120 42"
                      className="w-full h-auto block"
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="holderCapShading" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#121212" />
                          <stop offset="12%" stopColor="#2D2E29" />
                          <stop offset="30%" stopColor="#1B1A15" />
                          <stop offset="50%" stopColor="#10110C" />
                          <stop offset="75%" stopColor="#1A1B16" />
                          <stop offset="89%" stopColor="#2B2C27" />
                          <stop offset="100%" stopColor="#545454" />
                        </linearGradient>
                        <linearGradient id="strainCollarShading" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#1A1A1A" />
                          <stop offset="28%" stopColor="#3B3C38" />
                          <stop offset="60%" stopColor="#181915" />
                          <stop offset="100%" stopColor="#4A4A4A" />
                        </linearGradient>
                      </defs>

                      {/* Strain-Relief Cable Grip Collar */}
                      <path
                        d="M 48 0 L 72 0 L 74 11 L 46 11 Z"
                        fill="url(#strainCollarShading)"
                      />
                      {/* Stepped Top Ring */}
                      <rect x="34" y="10" width="52" height="7" rx="3" fill="url(#strainCollarShading)" />
                      {/* Domed / Tapered Socket Top Shoulder Matching Exact Socket Width */}
                      <path
                        d="M 14 17 C 14 15, 22 14, 34 14 L 86 14 C 98 14, 106 15, 106 17 L 120 34 L 120 42 L 0 42 L 0 34 Z"
                        fill="url(#holderCapShading)"
                      />
                      {/* Subtle Bevel Line */}
                      <line x1="2" y1="34" x2="118" y2="34" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
                    </svg>
                  </div>

                  {/* OFF-state transparent cutout */}
                  <img
                    src="/images/workshops-bulb-off.png"
                    alt="Vintage Edison Light Bulb Switched Off"
                    className="w-full h-full object-contain drop-shadow-[0_24px_45px_rgba(0,0,0,0.7)] pointer-events-none"
                  />

                  {/* ON-state glowing tungsten filament transparent cutout */}
                  <motion.img
                    src="/images/workshops-bulb-on.png"
                    alt="Vintage Edison Light Bulb Illuminated"
                    animate={{ opacity: isLightOn ? 1 : 0 }}
                    transition={{ duration: 0.45, ease: 'easeInOut' }}
                    className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                  />
                </div>
              </div>

              {/* Interactive Light ON/OFF Toggle Control */}
              <div className="mt-2 relative z-20 flex items-center gap-3">
                <button
                  type="button"
                  role="switch"
                  aria-checked={isLightOn}
                  onClick={() => setIsLightOn((prev) => !prev)}
                  className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border backdrop-blur-md transition-all duration-300 cursor-pointer ${
                    isLightOn
                      ? 'bg-white/[0.08] border-hq-yellow/50 text-white shadow-[0_0_24px_rgba(255,206,0,0.18)]'
                      : 'bg-white/[0.04] border-white/15 text-white/70 hover:border-white/30'
                  }`}
                >
                  <Lightbulb
                    className={`w-4 h-4 stroke-[1.5] transition-colors ${
                      isLightOn ? 'text-hq-yellow' : 'text-white/45'
                    }`}
                  />
                  <span className="font-mono text-[11px] uppercase tracking-widest font-semibold">
                    Light {isLightOn ? 'On' : 'Off'}
                  </span>
                  <span
                    className={`w-10 h-5 rounded-full p-0.5 flex items-center transition-colors duration-300 ${
                      isLightOn ? 'bg-hq-yellow justify-end' : 'bg-white/20 justify-start'
                    }`}
                  >
                    <span className="w-4 h-4 rounded-full bg-black shadow-sm transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* DOCKED STATS & REPUTATION STRIP (MATCHING ABOUT US HERO SECTION) */}
        <div className="w-full bg-[#0A0A0A]/95 text-white/80 py-3.5 sm:py-4 px-6 border-t border-white/10 overflow-hidden relative z-20">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs font-mono uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">06</span>
              <span className="text-white/70">Interactive Corporate Masterclasses</span>
            </div>
            <span className="text-white/20 hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">HALF &amp; FULL</span>
              <span className="text-white/70">Day Live Formats</span>
            </div>
            <span className="text-white/20 hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">12+</span>
              <span className="text-white/70">Champions &amp; CXO Mentors</span>
            </div>
            <span className="text-white/20 hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">LIVE</span>
              <span className="text-white/70">Actionable Toolkits</span>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Catalog (Dedicated Chapters Editorial Split Style) */}
      <section className="py-16 sm:py-20 px-6 md:px-12 bg-[#FAF8F5] dark:bg-[#0E0F12] border-b border-black/10">
        <div className="max-w-7xl mx-auto">
          {/* Header Row: Dual-Tone Title & Top Narrative */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10 sm:mb-12 pb-6 border-b border-black/10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] dark:text-white leading-[1.08]">
                Interactive Corporate <br />
                <span className="text-[#666666] dark:text-white/60 font-light">Workshop Catalog</span>
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-hq-black/65 max-w-md font-light leading-relaxed lg:pb-1">
              Led directly by world champions, C-suite veterans, and licensed well-being practitioners from the HQX advisory faculty.
            </p>
          </div>

          {/* 2-Column Split: Interactive Stacked Rows (Left) & Cross-Fading Faculty Showcase (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: 6 Interactive Workshop Rows */}
            <div className="lg:col-span-7 flex flex-col divide-y divide-black/10 border-b border-black/10">
              {workshops.map((w, idx) => {
                const isActive = hoveredWorkshop === idx;
                return (
                  <button
                    key={w.id}
                    type="button"
                    onMouseEnter={() => setHoveredWorkshop(idx)}
                    onFocus={() => setHoveredWorkshop(idx)}
                    onClick={() => {
                      setHoveredWorkshop(idx);
                      setSelectedWorkshop(w.title);
                      document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`group py-4 sm:py-5 px-4 -mx-4 rounded-2xl flex items-center justify-between gap-4 text-left transition-all duration-300 cursor-pointer ${
                      isActive ? 'bg-black/[0.03]' : 'hover:bg-black/[0.015]'
                    }`}
                  >
                    <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                      <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 transition-all duration-300 ${
                        isActive ? 'scale-105 shadow-md' : ''
                      }`}>
                        <img src={w.expertImage} alt={w.expertName} className="w-full h-full object-cover object-top" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className={`font-display text-base sm:text-lg lg:text-xl font-semibold tracking-tight transition-colors duration-300 ${
                            isActive ? 'text-hq-black font-bold' : 'text-hq-black group-hover:text-hq-black'
                          }`}>
                            {w.title}
                          </h3>
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-hq-yellow hidden sm:inline-block animate-pulse shrink-0" />
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center text-sm font-body font-medium text-hq-black/80 group-hover:text-hq-black shrink-0 ml-2">
                      <span className={`inline-block transition-transform duration-300 ${
                        isActive ? 'translate-x-1.5' : 'group-hover:translate-x-1.5'
                      }`}>→</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Photographic Faculty Showcase Card */}
            <div className="lg:col-span-5 h-full flex items-center justify-center">
              <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[490px] rounded-[32px] overflow-hidden shadow-2xl bg-[#14151B] group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={hoveredWorkshop}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={workshops[hoveredWorkshop].expertImage}
                      alt={workshops[hoveredWorkshop].expertName}
                      className="w-full h-full object-cover object-top filter contrast-105 brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />
                    <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                      <div className="font-display text-xl sm:text-2xl font-bold leading-snug mb-1">
                        {workshops[hoveredWorkshop].expertName}
                      </div>
                      <div className="text-[11px] font-mono text-hq-yellow/90 mb-2">
                        {workshops[hoveredWorkshop].expertRole}
                      </div>
                      <p className="font-body text-xs sm:text-sm text-white/80 font-light line-clamp-2 mb-4">
                        {workshops[hoveredWorkshop].summary}
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedWorkshop(workshops[hoveredWorkshop].title);
                            document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="inline-flex items-center gap-2 bg-hq-yellow text-hq-black font-display text-[11px] uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-white transition-colors font-semibold"
                        >
                          <span>Select Workshop</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-hq-black/85 border border-white/15 text-[10px] font-mono uppercase tracking-widest text-hq-yellow">
                          <Clock className="w-3 h-3 stroke-[1.5]" />
                          {workshops[hoveredWorkshop].duration}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Benefits Feature Strip (Below Workshop Catalog, Black Background) */}
      <section className="relative bg-black text-white overflow-hidden border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 sm:py-14 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-white/10">
            {/* Pillar 1 */}
            <div className="text-left md:pr-8 flex items-start gap-4 group">
              <Target className="w-8 h-8 text-white/80 group-hover:text-hq-yellow shrink-0 stroke-[1.2] mt-0.5 transition-colors" />
              <div>
                <h3 className="font-display text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white mb-1.5 group-hover:text-hq-yellow transition-colors">
                  PRODUCTIVITY FOCUSED
                </h3>
                <p className="font-body text-xs text-white/55 font-light leading-relaxed">
                  Interactive sessions designed specifically to improve day-to-day productivity and eliminate operational drag.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="text-left md:px-8 flex items-start gap-4 group">
              <Heart className="w-8 h-8 text-white/80 group-hover:text-hq-yellow shrink-0 stroke-[1.2] mt-0.5 transition-colors" />
              <div>
                <h3 className="font-display text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white mb-1.5 group-hover:text-hq-yellow transition-colors">
                  HOLISTIC WELL-BEING TOOLKIT
                </h3>
                <p className="font-body text-xs text-white/55 font-light leading-relaxed">
                  Focus areas include mindfulness, positive psychology, self-care, self-compassion, finding purpose, and stress management.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="text-left md:pl-8 flex items-start gap-4 group">
              <Zap className="w-8 h-8 text-white/80 group-hover:text-hq-yellow shrink-0 stroke-[1.2] mt-0.5 transition-colors" />
              <div>
                <h3 className="font-display text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white mb-1.5 group-hover:text-hq-yellow transition-colors">
                  ACTIONABLE STRATEGIES
                </h3>
                <p className="font-body text-xs text-white/55 font-light leading-relaxed">
                  Every participant leaves with a concrete personal toolkit and repeatable strategies for sustained overall well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 px-6 md:px-12 bg-hq-white">

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
