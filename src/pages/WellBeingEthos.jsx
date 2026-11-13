import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Heart, 
  Users, 
  Activity, 
  Coins, 
  ArrowRight, 
  ArrowUpRight,
  ChevronDown,
  Check, 
  Award, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  ShieldCheck,
  Compass,
  Smile,
  Utensils,
  Dumbbell,
  BookOpen,
  DollarSign,
  Scale,
  Sparkle,
  Target
} from 'lucide-react';
import { KEY_THEMES, WELLBEING_INVESTMENT_PILLARS } from '../context/DataContext';

export default function WellBeingEthos() {
  const [selectedPillar, setSelectedPillar] = useState('mental');
  const [activeInvestment, setActiveInvestment] = useState(0);

  // The 5 Pillars from Profile Page 7 (BALANCE Beyond WORKLIFE)
  const pillars = [
    {
      id: 'mental',
      name: 'Mental Well-Being',
      icon: Brain,
      tagline: 'Cognitive Poise, Clarity & Attentional Architecture',
      overview: 'Fostering deep mental tranquility and attentional hygiene. In an attention-scarce economy, mental well-being ensures executives maintain clear decision-making capacity and cognitive stamina without overwhelm.',
      practices: [
        '90-Minute Ultradian Deep Work rhythms without distraction',
        'Cognitive detox and contextual communication hygiene',
        'Mindful closure rituals to eliminate intrusive workday anxiety before sleep'
      ],
      impact: '+34% increase in strategic clarity'
    },
    {
      id: 'emotional',
      name: 'Emotional Well-Being',
      icon: Heart,
      tagline: 'Affective Self-Regulation & Grounded Poise',
      overview: 'Leaders project their emotional weather onto the entire enterprise. Mastering affective self-regulation neutralizes panic cascades during high-stakes volatility and constructs psychological safety.',
      practices: [
        'Real-time somatic emotional labelling and nervous system calming',
        'Radical psychological safety protocols in team post-mortems',
        'Constructive feedback architecture that preserves core self-worth'
      ],
      impact: '-42% drop in leadership burnout'
    },
    {
      id: 'social',
      name: 'Social Well-Being',
      icon: Users,
      tagline: 'Belonging, Camaraderie & Trust Networks',
      overview: 'Solitary achievements are fragile. High-performing cultures cultivate genuine camaraderie where team members support each other’s blindspots without corporate politics.',
      practices: [
        'Non-transactional connection circles that break departmental silos',
        'Cross-generational bridge-building and empathetic listening',
        'Shared celebratory milestones transcending individual KPIs'
      ],
      impact: '+28% faster cross-functional synergy'
    },
    {
      id: 'physical',
      name: 'Physical Well-Being',
      icon: Activity,
      tagline: 'Circadian Pacing, Mobility & Neuro-Nutrition',
      overview: 'The brain is a biological organ. Executive decisions made under chronic sleep debt and metabolic crashes are quantitatively impaired. Physical vitality forms the bedrock of all organizational output.',
      practices: [
        'Circadian light exposure and restorative sleep hygiene protocols',
        'Desk-side micro-mobility resets every 45 minutes to restore blood flow',
        'Neuro-nutrition guidelines to eliminate afternoon cognitive drops'
      ],
      impact: '-31% reduction in unplanned absenteeism'
    },
    {
      id: 'financial',
      name: 'Financial Well-Being',
      icon: Coins,
      tagline: 'Financial Literacy, Stewardship & Freedom',
      overview: 'Financial anxiety is a silent productivity assassin across all corporate income tiers. True financial well-being is the freedom from scarcity terror and alignment with long-term legacy.',
      practices: [
        'Comprehensive corporate financial literacy and equity workshops',
        'Demystifying wealth psychology and strategic money management',
        'Aligning financial goals with intrinsic purpose and family legacy'
      ],
      impact: '+45% higher retention of high-potential talent'
    }
  ];

  const themeImages = {
    ikigai: '/profile_assets/page_8_img_3_618.jpeg',
    finance: '/profile_assets/page_8_img_2_610.jpeg',
    stress: '/profile_assets/page_8_img_6_642.jpeg',
    fitness: '/profile_assets/page_8_img_5_634.jpeg',
    leadership: '/profile_assets/page_8_img_4_626.jpeg',
    values: '/profile_assets/page_9_img_5_708.jpeg',
    balance: '/images/hero_showcase/happy_wellbeing.jpg',
    meditation: '/profile_assets/page_9_img_2_684.jpeg',
    'psychology-wealth': '/profile_assets/page_9_img_4_700.jpeg',
    'habit-building': '/profile_assets/page_9_img_6_717.jpeg',
    healing: '/profile_assets/page_9_img_3_692.jpeg',
    nutrition: '/profile_assets/page_8_img_1_602.jpeg',
  };

  const currentPillar = pillars.find(p => p.id === selectedPillar) || pillars[0];
  const PillarIcon = currentPillar.icon;

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* HERO SECTION MATCHING WHY-HQX HERO STYLE WITH UNIFIED PURE BLACK BACKGROUND */}
      <section className="bg-[#0A0A0A] text-hq-white relative overflow-hidden h-screen min-h-[640px] max-h-[1080px] w-full flex flex-col justify-between border-b border-white/10">
        
        {/* Background Visual: Halo Man on 100% Pure Black with Subpixel-Locked Halo Glow & Face Reflection */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          
          {/* Base Man Image (Anchored naturally to the right, fully visible, pure black void) */}
          <img 
            src="/images/wellbeing-halo-man.jpg" 
            alt="Well-Being Ethos - Those Who Feel Better Work Better" 
            className="absolute right-0 top-0 h-full w-auto max-w-none object-contain object-right filter contrast-110 brightness-100"
          />

          {/* Specular Pass: 30% Reduced RGB Spectrum Glow on Ring & Facial Reflection */}
          <motion.img
            src="/images/wellbeing-halo-rgb-layer.png"
            alt=""
            aria-hidden="true"
            animate={{
              opacity: [0.35, 0.70, 0.35],
              filter: [
                'hue-rotate(0deg) saturate(160%)',
                'hue-rotate(180deg) saturate(180%)',
                'hue-rotate(360deg) saturate(160%)'
              ]
            }}
            transition={{
              opacity: {
                duration: 3.4,
                repeat: Infinity,
                ease: 'easeInOut'
              },
              filter: {
                duration: 8.5,
                repeat: Infinity,
                ease: 'linear'
              }
            }}
            className="absolute right-0 top-0 h-full w-auto max-w-none object-contain object-right pointer-events-none mix-blend-screen"
          />

          {/* Unified 100% Pure Black Multi-Tier Scrims (Zero blue tint, pure seamless obsidian black) */}
          {/* Left-to-right gradient to guarantee crystal-clear contrast for headline & narrative */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 sm:via-black/75 lg:via-black/35 to-transparent pointer-events-none" />
          {/* Mobile dark wash for narrow screens */}
          <div className="absolute inset-0 bg-black/45 lg:hidden pointer-events-none" />
          {/* Top seam fade beneath fixed navbar */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/60 to-transparent pointer-events-none" />
          {/* Bottom seam fade into docked stats strip */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
        </div>

        {/* Left Side Vertical Text: WELL-BEING ETHOS (On-Load Kinetic Entrance Animation) */}
        <motion.div 
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-3 sm:left-6 lg:left-8 xl:left-12 inset-y-0 z-20 flex flex-col justify-center items-center pointer-events-none select-none"
        >
          <div 
            className="flex items-center gap-3 sm:gap-4"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span className="font-display text-[11px] sm:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-hq-yellow drop-shadow-md">
              WELL-BEING ETHOS
            </span>
            <motion.span 
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-px h-8 sm:h-14 bg-white/25 origin-top" 
            />
          </div>
        </motion.div>

        {/* Main Content Area (Vertically Centered in Viewport Matching WhyHQX) */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex-1 flex flex-col justify-center pt-28 sm:pt-32 pb-8">
          <div className="max-w-xl">
            
            {/* Editorial Headline with Geist, Arial, sans-serif Typography and Font Weight 300 */}
            <motion.h1 
              initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: '"Geist", Arial, sans-serif', fontWeight: 300 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-light tracking-tight leading-[1.14] mb-5 text-white"
            >
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontWeight: 300 }}
                className="inline-block font-light"
              >
                Those Who Feel Better
              </motion.span> <br />
              <motion.span 
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                className="text-hq-yellow font-extrabold inline-block drop-shadow-[0_0_25px_rgba(255,204,0,0.35)] tracking-tight"
              >
                Work Better
              </motion.span>
            </motion.h1>

            {/* Lead Narrative with On-Load Slide-Up Animation */}
            <motion.p 
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8 max-w-xl drop-shadow-sm"
            >
              The <strong className="text-hq-yellow font-medium">HQ Well-being Model</strong> is an executive framework that promotes holistic vitality by encouraging individuals to develop good habits and make informed decisions that benefit their mental, physical, and emotional health. By prioritizing well-being, leaders reduce stress, elevate cognitive clarity, and drive sustainable enterprise flourishing.
            </motion.p>

            {/* Signature HQX Hero Button with On-Load Reveal Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="pt-1"
            >
              <a
                href="#pillars"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative inline-flex items-center justify-between gap-8 py-3.5 px-2 font-display font-medium text-xs tracking-[0.2em] text-white hover:text-hq-yellow transition-colors duration-300 uppercase cursor-pointer"
              >
                {/* Top hairline border line */}
                <span className="absolute top-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />

                <span className="relative z-10 font-semibold tracking-widest">EXPLORE 5 PILLARS</span>

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
              </a>
            </motion.div>

          </div>
        </div>

        {/* DOCKED STATS TICKER STRIP (PURE UNIFIED BLACK BACKGROUND WITH ON-LOAD ENTRANCE) */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-black/95 backdrop-blur-md text-white/80 py-3.5 sm:py-4 px-6 md:px-12 border-t border-white/10 overflow-hidden relative z-20"
        >
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs font-mono uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">+34%</span>
              <span className="text-white/70">Strategic Clarity</span>
            </div>
            <span className="text-white/20 hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">-42%</span>
              <span className="text-white/70">Burnout Reduction</span>
            </div>
            <span className="text-white/20 hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">+28%</span>
              <span className="text-white/70">Cross-Functional Synergy</span>
            </div>
            <span className="text-white/20 hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">365 Days</span>
              <span className="text-white/70">Continuous Stewardship</span>
            </div>
          </div>
        </motion.div>

      </section>


      {/* BALANCE Beyond WORKLIFE: The 5 Well-Being Pillars (Fixonic-Inspired Split Philosophy Section) */}
      <section id="pillars" className="py-20 sm:py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
        
        {/* Section Header: Left Bold Title • Right Explanatory Context (Matching The Architecture of Flourishing Style) */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12 mb-12 sm:mb-16">
          {/* Left Column: Main Headline */}
          <div className="max-w-xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] dark:text-white leading-[1.08]">
              The 5 Well-Being <br />
              <span className="text-[#666666] dark:text-white/60 font-light">Pillars</span>
            </h2>
          </div>

          {/* Right Column: Explanatory Context */}
          <div className="md:max-w-md lg:max-w-lg md:pt-2">
            <p className="font-body text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
              Employee well-being acknowledges the deep interrelation between various facets of an individual’s life within and beyond a corporate setting.
            </p>
          </div>
        </div>

        {/* Fixonic-Inspired 2-Column Split Architectural Frame */}
        <div className="border border-hq-black/15 shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 bg-white">
          
          {/* Left Column: Dark Accordion Side with 5 Pillars (5 of 12 cols) */}
          <div className="lg:col-span-5 bg-black text-white p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
            <div>
              <div className="space-y-0 divide-y divide-white/10">
                {pillars.map((pillar) => {
                  const isSelected = selectedPillar === pillar.id;
                  return (
                    <div 
                      key={pillar.id}
                      onClick={() => setSelectedPillar(pillar.id)}
                      className="group cursor-pointer py-5 sm:py-6 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3.5 flex-1">
                          {/* Accent line: bright brand yellow when active */}
                          <div className="pt-1 shrink-0">
                            <span 
                              className={`block w-1 rounded-full transition-all duration-300 ${
                                isSelected ? 'h-6 bg-hq-yellow' : 'h-0 bg-transparent'
                              }`} 
                            />
                          </div>

                          <div className="flex-1 pr-2">
                            <h3 
                              style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                              className={`text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider transition-colors duration-200 ${
                                isSelected ? 'text-white' : 'text-white/70 group-hover:text-white'
                              }`}
                            >
                              {pillar.name}
                            </h3>

                            {/* Small Description below active pillar */}
                            {isSelected && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className="font-body text-xs sm:text-sm text-white/70 font-light leading-relaxed mt-2.5 max-w-sm"
                              >
                                {pillar.tagline}
                              </motion.p>
                            )}
                          </div>
                        </div>

                        {/* Accordion Toggle Symbol: Horizontal Minus when active, Plus when collapsed */}
                        <div className="shrink-0 pt-0.5 text-white/80 select-none">
                          {isSelected ? (
                            <span className="inline-block w-4 text-center font-bold text-hq-yellow text-xl leading-none">—</span>
                          ) : (
                            <span className="inline-block w-4 text-center font-bold text-white/40 text-xl leading-none group-hover:text-white transition-colors">+</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Subtle bottom tag on dark column */}
            <div className="pt-8 border-t border-white/10 mt-8 hidden sm:flex items-center justify-between text-[11px] font-mono text-white/40 uppercase tracking-widest">
              <span>5 Executive Pillars</span>
              <span className="text-hq-yellow font-bold">100% Quantified Impact</span>
            </div>
          </div>

          {/* Right Column: Crisp White Detailed Description Side (7 of 12 cols) */}
          <div className="lg:col-span-7 bg-white text-hq-black p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-between relative min-h-[460px] lg:min-h-[560px]">
            
            {/* Top-Left Flush Brand Badge (Matching Fixonic's top banner) */}
            <div className="absolute top-0 left-0 bg-hq-yellow text-hq-black font-display text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] px-5 sm:px-6 py-2.5 shadow-sm">
              HQ WELL-BEING ETHOS
            </div>

            {/* Main Center Editorial Content */}
            <div className="flex-1 flex flex-col justify-center pt-12 sm:pt-14 pb-14 sm:pb-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPillar.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  {/* Large Impactful Editorial Description (Geist Typography) */}
                  <h3 
                    style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                    className="font-normal text-xl sm:text-2xl md:text-3xl lg:text-[28px] text-hq-black leading-[1.38] tracking-tight"
                  >
                    {currentPillar.overview}
                  </h3>

                  {/* Impact Metric Strip */}
                  <div className="pt-4 border-t border-hq-black/10 flex flex-wrap items-center gap-3 sm:gap-4">
                    <div className="inline-flex items-center gap-2 bg-hq-gray border border-hq-black/10 px-3.5 py-1.5 rounded-full text-xs font-display font-semibold uppercase tracking-wider text-hq-black shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-hq-yellow" />
                      <span>Executive Benchmark: <strong className="text-hq-black font-bold">{currentPillar.impact}</strong></span>
                    </div>
                    <div className="text-xs font-mono uppercase tracking-wider text-hq-black/50 font-semibold">
                      Continuous Stewardship
                    </div>
                  </div>

                  {/* Actionable Enterprise Protocols */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-hq-black/60 font-bold mb-2">
                      Actionable Enterprise Protocols:
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {currentPillar.practices.map((practice, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-hq-black/85 font-body">
                          <Check className="w-4 h-4 text-hq-yellow shrink-0 mt-0.5 bg-hq-black rounded-full p-0.5" />
                          <span className="leading-relaxed">{practice}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom-Right Flush Action Button (Fixonic Signature Split Block with Black '+' Box) */}
            <div className="absolute bottom-0 right-0">
              <Link
                to="/contact"
                className="inline-flex items-stretch group overflow-hidden shadow-lg transition-transform duration-200 active:scale-95"
              >
                <div className="bg-hq-yellow group-hover:bg-[#FFD633] text-hq-black font-display font-bold text-xs uppercase tracking-[0.2em] px-6 sm:px-8 py-3.5 sm:py-4 flex items-center transition-colors">
                  MORE ABOUT US
                </div>
                <div className="bg-hq-black text-white group-hover:text-hq-yellow w-12 sm:w-14 flex items-center justify-center transition-colors">
                  <span className="text-lg sm:text-xl font-bold transition-transform duration-300 group-hover:rotate-90">+</span>
                </div>
              </Link>
            </div>

          </div>
        </div>

      </section>

      {/* Engagement Outcomes Feature Strip */}
      <section className="relative bg-[#060607] text-white overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 sm:py-14 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-white/10">
            
            {/* Pillar 1 */}
            <div className="text-left md:pr-8 flex items-start gap-4 group">
              <Target className="w-8 h-8 text-white/80 group-hover:text-hq-yellow shrink-0 stroke-[1.2] mt-0.5 transition-colors" />
              <div>
                <h4 className="font-display text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white mb-1.5 group-hover:text-hq-yellow transition-colors">
                  FOCUS ON ENGAGEMENT
                </h4>
                <p className="font-body text-xs text-white/55 font-light leading-relaxed">
                  Keeps interest alive, promotes voluntary participation, and sparks lasting executive commitment.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="text-left md:px-8 flex items-start gap-4 group">
              <Zap className="w-8 h-8 text-white/80 group-hover:text-hq-yellow shrink-0 stroke-[1.2] mt-0.5 transition-colors" />
              <div>
                <h4 className="font-display text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white mb-1.5 group-hover:text-hq-yellow transition-colors">
                  STRATEGIES THAT DRIVE IMPACT
                </h4>
                <p className="font-body text-xs text-white/55 font-light leading-relaxed">
                  Boosts productivity, sharpens memory retention, improves understanding, and builds speaker confidence.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="text-left md:pl-8 flex items-start gap-4 group">
              <Users className="w-8 h-8 text-white/80 group-hover:text-hq-yellow shrink-0 stroke-[1.2] mt-0.5 transition-colors" />
              <div>
                <h4 className="font-display text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white mb-1.5 group-hover:text-hq-yellow transition-colors">
                  SYNERGY &amp; STRONG CULTURE
                </h4>
                <p className="font-body text-xs text-white/55 font-light leading-relaxed">
                  Fosters camaraderie, increases collaboration across silos, and strengthens high-trust culture.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The 12 KEY THEMES (Profile Pages 8 & 9) */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-hq-gray border-t border-b border-hq-black/10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header: Left Bold Dual-Tone Title • Right Explanatory Context */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12 mb-12 sm:mb-16">
            {/* Left Column: Main Headline */}
            <div className="max-w-xl">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] dark:text-white leading-[1.08]">
                The 12 Key Themes <br />
                <span className="text-[#666666] dark:text-white/60 font-light">of Well-Being</span>
              </h2>
            </div>

            {/* Right Column: Explanatory Context */}
            <div className="md:max-w-md lg:max-w-lg md:pt-2">
              <p className="font-body text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                The foundational modules deployed across our corporate workshops, keynotes, and digital micro-courses.
              </p>
            </div>
          </div>

          {/* Halsa-Inspired 4-Column Alternating Checkerboard Grid (Photo Tiles + White / Yellow / Black Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {KEY_THEMES.map((theme, idx) => {
              const rowIndex = Math.floor(idx / 2);
              const isPhotoFirst = rowIndex % 2 === 0;
              const imgSrc = themeImages[theme.id] || '/images/hero_showcase/happy_wellbeing.jpg';

              const variantKey = ['white', 'yellow', 'black'][idx % 3];
              const cardTheme = {
                white: {
                  container: 'bg-white border-black/[0.06] hover:border-black/15 shadow-[0_2px_16px_rgba(0,0,0,0.03)]',
                  quote: 'text-[#0A0A0A] group-hover:text-hq-yellow',
                  title: 'text-[#0A0A0A]',
                  desc: 'text-neutral-500',
                },
                yellow: {
                  container: 'bg-hq-yellow border-black/10 hover:border-black/30 shadow-[0_4px_20px_rgba(255,204,0,0.18)]',
                  quote: 'text-[#0A0A0A]',
                  title: 'text-[#0A0A0A]',
                  desc: 'text-[#0A0A0A]/80',
                },
                black: {
                  container: 'bg-[#0B0B0B] border-white/10 hover:border-hq-yellow/50 shadow-xl',
                  quote: 'text-hq-yellow',
                  title: 'text-white',
                  desc: 'text-white/70',
                },
              }[variantKey];

              const photoTile = (
                <div
                  key={`${theme.id}-photo`}
                  className="group relative rounded-2xl sm:rounded-[20px] overflow-hidden bg-black/5 min-h-[260px] sm:min-h-[290px] lg:min-h-[310px] h-full shadow-sm border border-black/[0.05]"
                >
                  <img
                    src={imgSrc}
                    alt={theme.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
                </div>
              );

              const cardTile = (
                <div
                  key={`${theme.id}-card`}
                  className={`${cardTheme.container} p-6 sm:p-7 rounded-2xl sm:rounded-[20px] border hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[260px] sm:min-h-[290px] lg:min-h-[310px] h-full group`}
                >
                  {/* Top: Clean Quote Mark + Theme Heading (Halsa Editorial Styling) */}
                  <div>
                    <span className={`inline-block font-serif text-2xl sm:text-[26px] leading-none mb-2 select-none transition-colors ${cardTheme.quote}`}>
                      &rdquo;
                    </span>
                    <h3
                      style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                      className={`text-xl sm:text-[22px] font-semibold tracking-tight leading-[1.2] mb-4 ${cardTheme.title}`}
                    >
                      {theme.title}
                    </h3>
                  </div>

                  {/* Bottom: Concise Narrative Description */}
                  <div className="pt-8 mt-auto">
                    <p className={`font-body text-xs sm:text-[13px] font-normal leading-relaxed ${cardTheme.desc}`}>
                      {theme.desc}
                    </p>
                  </div>
                </div>
              );

              return isPhotoFirst ? (
                <React.Fragment key={theme.id || idx}>
                  {photoTile}
                  {cardTile}
                </React.Fragment>
              ) : (
                <React.Fragment key={theme.id || idx}>
                  {cardTile}
                  {photoTile}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY Strategic Investment in Well-Being? (Profile Page 10 - Solid Pure Black Canvas) */}
      <section className="relative bg-[#000000] text-white overflow-hidden border-t border-b border-white/10">

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 lg:py-24 relative z-10">
          
          {/* Section Header: Left Bold Dual-Tone Title • Right Explanatory Context (Matching The 12 Key Themes Header Style) */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12 mb-12 sm:mb-16">
            {/* Left Column: Main Headline */}
            <div className="max-w-xl">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.08]">
                Why Strategic Investment <br />
                <span className="text-white/55 font-light">in Well-Being?</span>
              </h2>
            </div>

            {/* Right Column: Explanatory Context */}
            <div className="md:max-w-md lg:max-w-lg md:pt-2">
              <p className="font-body text-sm sm:text-base text-white/75 font-light leading-relaxed">
                Hands-on. Immersive. Experiential. Disciplined. Investment in employee well-being is not an expense—it is a measurable strategic driver of corporate durability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Interactive 4 Full-Width Investment Pillars */}
            <div className="lg:col-span-6">
              {/* Interactive Full-Width Architectural Bottom-Border Rows */}
              <div className="flex flex-col w-full">
                {WELLBEING_INVESTMENT_PILLARS.map((item, idx) => {
                  const isActive = activeInvestment === idx;
                  return (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setActiveInvestment(idx)}
                      onMouseEnter={() => setActiveInvestment(idx)}
                      className={`w-full text-left py-5 px-2 sm:px-3 border-b transition-all duration-300 cursor-pointer focus:outline-none ${
                        isActive
                          ? 'bg-white/[0.04] border-hq-yellow'
                          : 'bg-transparent border-white/15 hover:bg-white/[0.02] hover:border-white/35'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span
                          className={`w-2 h-2 shrink-0 transition-colors ${
                            isActive ? 'bg-hq-yellow' : 'bg-white/30'
                          }`}
                          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
                        />
                        <h4 className="font-display text-sm sm:text-[15px] font-semibold text-white tracking-tight">
                          {item.title}
                        </h4>
                      </div>
                      <p className="font-body text-xs text-white/65 font-light leading-relaxed pl-4">
                        {item.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Chamfered Frosted Glass HUD Card (Exact Axi Reference Layout) */}
            <div className="lg:col-span-6">
              {(() => {
                const activeItem = WELLBEING_INVESTMENT_PILLARS[activeInvestment] || WELLBEING_INVESTMENT_PILLARS[0];
                const telemetryMap = [
                  {
                    bigStat: '365 Days',
                    kpi1Label: 'Intrinsic Alignment',
                    kpi1Sub: 'Personal values translated into daily corporate execution metrics.',
                    kpi1Val: '+38%',
                    kpi2Label: 'Value Adoption Rate',
                    kpi2Sub: 'Sustained cultural buy-in benchmark across executive cohorts.',
                    kpi2Val: '92%',
                  },
                  {
                    bigStat: '3.2× ROI',
                    kpi1Label: 'Productivity Lift',
                    kpi1Sub: 'Deep-work cognitive output increase across participating teams.',
                    kpi1Val: '109%',
                    kpi2Label: 'Sprint Completion',
                    kpi2Sub: 'Measured delivery consistency across global leadership sprints.',
                    kpi2Val: '97%',
                  },
                  {
                    bigStat: '16 States',
                    kpi1Label: 'Talent Retention Lift',
                    kpi1Sub: 'Increase in retention across high-potential leadership tiers.',
                    kpi1Val: '+45%',
                    kpi2Label: 'Burnout Reduction',
                    kpi2Sub: 'Measurable drop in chronic executive stress biomarkers.',
                    kpi2Val: '-42%',
                  },
                  {
                    bigStat: '9 Nations',
                    kpi1Label: 'Engagement Lift',
                    kpi1Sub: 'Voluntary, enthusiastic participation across enterprise offsites.',
                    kpi1Val: '+64%',
                    kpi2Label: 'Team Synergy',
                    kpi2Sub: 'Faster cross-functional alignment and psychological safety.',
                    kpi2Val: '+28%',
                  },
                ];
                const metric = telemetryMap[activeInvestment] || telemetryMap[0];

                return (
                  <div
                    style={{ clipPath: 'polygon(0 0, calc(100% - 48px) 0, 100% 48px, 100% 100%, 0 100%)' }}
                    className="relative rounded-2xl bg-white/[0.06] backdrop-blur-2xl border border-white/15 shadow-[0_32px_90px_rgba(0,0,0,0.75)] p-6 sm:p-8 lg:p-9"
                  >
                    {/* Top Header Row inside Chamfered HUD */}
                    <div className="pb-5 border-b border-white/15">
                      <h3
                        style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                        className="text-2xl sm:text-3xl font-light tracking-tight text-white leading-none"
                      >
                        Strategic Impact
                      </h3>
                    </div>

                    {/* Middle Telemetry Summary Row */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 py-6">
                      <div className="max-w-sm">
                        <div className="mb-2">
                          <div className="text-xs sm:text-sm font-display font-medium text-white leading-snug">
                            Award-Winning Methodology <br />
                            <span className="text-hq-yellow text-[11px] font-mono uppercase tracking-wider">
                              G2 Benchmark Verified
                            </span>
                          </div>
                        </div>

                        <p className="font-body text-[11px] sm:text-xs text-white/65 font-light leading-relaxed">
                          {activeItem.desc}
                        </p>
                      </div>

                      <AnimatePresence mode="wait">
                        <motion.div
                          key={metric.bigStat}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.25 }}
                          style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                          className="text-4xl sm:text-5xl font-light tracking-tight text-white shrink-0"
                        >
                          {metric.bigStat}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Bottom Split Metric Cards: Left Solid Brand Yellow Box, Right Matte Dark Charcoal Box */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeInvestment}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
                      >
                        {/* Left Primary KPI Box (Solid HQX Brand Yellow - High Impact like Axi Red Box) */}
                        <div className="bg-hq-yellow text-[#0A0A0A] rounded-xl p-5 flex flex-col justify-between min-h-[168px] shadow-lg">
                          <div>
                            <div
                              style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                              className="text-sm sm:text-[15px] font-semibold tracking-tight leading-snug mb-1.5"
                            >
                              {metric.kpi1Label}
                            </div>
                            <p className="text-[11px] font-body text-[#0A0A0A]/80 leading-relaxed">
                              {metric.kpi1Sub}
                            </p>
                          </div>
                          <div
                            style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                            className="text-4xl sm:text-[44px] font-normal tracking-tight leading-none mt-4"
                          >
                            {metric.kpi1Val}
                          </div>
                        </div>

                        {/* Right Secondary KPI Box (Matte Slate Charcoal - Matching Axi Grey Box) */}
                        <div className="bg-white/[0.14] text-white rounded-xl p-5 border border-white/10 flex flex-col justify-between min-h-[168px]">
                          <div>
                            <div
                              style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                              className="text-sm sm:text-[15px] font-semibold tracking-tight leading-snug mb-1.5"
                            >
                              {metric.kpi2Label}
                            </div>
                            <p className="text-[11px] font-body text-white/70 leading-relaxed">
                              {metric.kpi2Sub}
                            </p>
                          </div>
                          <div
                            style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                            className="text-4xl sm:text-[44px] font-normal tracking-tight leading-none mt-4"
                          >
                            {metric.kpi2Val}
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                );
              })()}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
