import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  Sparkle
} from 'lucide-react';
import { KEY_THEMES, WELLBEING_INVESTMENT_PILLARS, ENGAGEMENT_BENEFITS } from '../context/DataContext';

export default function WellBeingEthos() {
  const [selectedPillar, setSelectedPillar] = useState('mental');

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

  const currentPillar = pillars.find(p => p.id === selectedPillar) || pillars[0];
  const PillarIcon = currentPillar.icon;

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Hero Header Matching Exact Reference Design */}
      <header className="relative w-full min-h-[100svh] lg:h-screen lg:max-h-[1080px] bg-[#050505] text-white flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-8 overflow-hidden select-none border-b border-white/10">
        
        {/* Background Image & Lighting Atmosphere */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <img 
            src="/images/wellbeing-ethos-hero.jpg" 
            alt="Well-Being Architecture - Engineered For Excellence" 
            className="w-full h-full object-cover object-[78%_center] sm:object-[82%_center] lg:object-right filter contrast-110 brightness-95 opacity-85 sm:opacity-95 lg:opacity-100"
          />
          {/* Smooth left-edge void blend into pure obsidian black */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#050505] via-[#050505]/90 lg:via-[#050505]/70 to-transparent z-10 pointer-events-none" />
          {/* Subtle bottom gradient to blend into next section */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent z-10 pointer-events-none" />
          {/* Glowing Halo Breathing Aura */}
          <motion.div 
            animate={{ 
              opacity: [0.12, 0.28, 0.12], 
              scale: [1, 1.05, 1] 
            }} 
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }} 
            className="absolute top-[20%] right-[15%] w-[320px] h-[320px] rounded-full bg-white/20 blur-[100px] pointer-events-none z-10" 
          />
        </div>

        {/* Main Content Area: Left Editorial Column */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 w-full flex-1 flex flex-col justify-center relative z-20 py-8 lg:py-12">
          <div className="max-w-2xl">
            
            {/* Eyebrow Pill: ● ENGINEERED FOR EXCELLENCE */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-6 w-fit shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
              <span className="font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase text-white/90 font-medium">
                ENGINEERED FOR EXCELLENCE
              </span>
            </motion.div>

            {/* Monumental Headline: Built With Purpose. Driven by Vision. */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight text-white leading-[1.04] mb-5 max-w-xl"
            >
              Built With Purpose. <br />
              <span className="text-white">Driven by Vision.</span>
            </motion.h1>

            {/* 2-line Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-body text-sm sm:text-base md:text-lg text-white/70 font-light leading-relaxed mb-8 max-w-lg"
            >
              Structured systems designed for consistency, control, and long-term operation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-5 sm:gap-6"
            >
              {/* Primary Button: White Pill with ArrowUpRight */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white text-black font-display font-semibold text-sm hover:bg-hq-yellow hover:text-black transition-all shadow-[0_4px_20px_rgba(255,255,255,0.18)] hover:shadow-[0_4px_25px_rgba(255,204,0,0.4)] active:scale-[0.98]"
              >
                <span>Start Free Trial</span>
                <div className="w-5 h-5 rounded bg-black/10 flex items-center justify-center shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 text-black stroke-[2.5]" />
                </div>
              </Link>

              {/* Secondary Link: Explore Benefits → */}
              <a
                href="#pillars"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 text-white/80 hover:text-white font-display font-medium text-sm transition-colors py-2 cursor-pointer"
              >
                <span>Explore Benefits</span>
                <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            </motion.div>

          </div>
        </div>

        {/* Bottom Editorial Bar: TRUSTED BY INNOVATIVE TEAMS & SCROLL TO EXPLORE */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 w-full relative z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-4">
          
          {/* Left: Trusted By */}
          <div className="max-w-lg">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white/40 block mb-3 font-semibold">
              TRUSTED BY INNOVATIVE TEAMS
            </span>
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 opacity-65 hover:opacity-90 transition-opacity">
              <div className="flex items-center gap-2 text-white/90 font-display text-xs sm:text-sm tracking-wider font-semibold">
                <ShieldCheck className="w-4 h-4 text-white/70" />
                <span>TATA MOTORS</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 font-display text-xs sm:text-sm tracking-wider font-semibold">
                <Award className="w-4 h-4 text-white/70" />
                <span>BARCLAYS</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 font-display text-xs sm:text-sm tracking-wider font-semibold">
                <Sparkles className="w-4 h-4 text-white/70" />
                <span>HDFC LIFE</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 font-display text-xs sm:text-sm tracking-wider font-semibold">
                <Activity className="w-4 h-4 text-white/70" />
                <span>CIPLA</span>
              </div>
            </div>
          </div>

          {/* Right/Center: SCROLL TO EXPLORE */}
          <div className="hidden sm:flex justify-end">
            <a
              href="#pillars"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group flex flex-col items-center gap-1.5 text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em]">
                SCROLL TO EXPLORE
              </span>
              <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-hq-yellow" />
            </a>
          </div>

        </div>

      </header>

      {/* 4 Core Levers (Page 6 of Profile) */}
      <section className="py-14 px-6 md:px-12 bg-hq-black text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Engagement', desc: 'Promoting voluntary, enthusiastic participation' },
            { label: 'Productivity', desc: 'Sustained energy and sharper cognitive output' },
            { label: 'Collaboration', desc: 'Radical empathy and mutual accountability' },
            { label: 'Culture', desc: 'A thriving ecosystem where talent flourishes' }
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="font-display text-2xl md:text-3xl font-bold text-hq-yellow mb-2 uppercase tracking-wide">
                {item.label}
              </div>
              <p className="font-body text-xs text-white/70 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BALANCE Beyond WORKLIFE: 5 Pivotal Dimensions (Page 7 of Profile) */}
      <section id="pillars" className="py-20 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight font-semibold mb-4">
            The 5 Well-Being Pillars
          </h2>
          <p className="font-body text-hq-black/70 max-w-xl mx-auto font-light text-base">
            Employee well-being acknowledges the interrelation between various facets of an employee's life within and beyond a corporate setting.
          </p>
        </div>

        {/* Pillar Switcher Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = selectedPillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar.id)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-full border text-xs font-display uppercase tracking-wider font-semibold transition-all ${
                  isSelected 
                    ? 'bg-hq-black text-hq-yellow border-hq-black shadow-lg scale-105' 
                    : 'bg-white text-hq-black/70 border-hq-black/15 hover:border-hq-black hover:text-hq-black'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-hq-yellow' : 'text-hq-black/70'}`} />
                <span>{pillar.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Spotlight */}
        <div className="p-8 md:p-12 border border-hq-black/15 shadow-2xl bg-white rounded-3xl flex flex-col lg:flex-row gap-10 items-start">
          <div className="w-full lg:w-4/12">
            <div className="w-16 h-16 rounded-2xl bg-hq-black text-hq-yellow flex items-center justify-center mb-6 shadow-md">
              <PillarIcon className="w-8 h-8 stroke-[1.5]" />
            </div>
            <h3 className="font-display text-3xl font-semibold mb-2">
              {currentPillar.name}
            </h3>
            <div className="text-xs font-mono text-hq-black/60 uppercase mb-4 font-semibold">
              {currentPillar.tagline}
            </div>
            <div className="bg-hq-yellow text-hq-black font-display text-xs uppercase tracking-wider font-bold px-4 py-2 rounded-full inline-block shadow-sm">
              {currentPillar.impact}
            </div>
          </div>

          <div className="w-full lg:w-8/12 border-t lg:border-t-0 lg:border-l border-hq-black/10 pt-6 lg:pt-0 lg:pl-10">
            <p className="font-body text-base text-hq-black/80 font-light leading-relaxed mb-6">
              {currentPillar.overview}
            </p>
            
            <div className="text-xs font-mono uppercase tracking-widest text-hq-black/60 font-semibold mb-4">
              Actionable Enterprise Protocols:
            </div>

            <ul className="space-y-3 font-body text-sm text-hq-black/85">
              {currentPillar.practices.map((practice, pIdx) => (
                <li key={pIdx} className="flex items-start gap-3 bg-hq-gray p-4 rounded-xl border border-hq-black/5">
                  <Check className="w-4 h-4 text-hq-yellow shrink-0 mt-0.5 bg-hq-black rounded-full p-0.5" />
                  <span>{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* The 12 KEY THEMES (Profile Pages 8 & 9) */}
      <section className="py-20 px-6 md:px-12 bg-hq-gray border-t border-b border-hq-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl tracking-tight font-semibold mb-4">
              The 12 Key Themes of Well-Being
            </h2>
            <p className="font-body text-hq-black/70 max-w-xl mx-auto font-light text-base">
              The foundational modules deployed across our corporate workshops, keynotes, and digital micro-courses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {KEY_THEMES.map((theme, idx) => (
              <div 
                key={theme.id || idx}
                className="bg-white p-7 rounded-2xl border border-hq-black/10 hover:border-hq-black hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-xs font-bold text-hq-black/40 group-hover:text-hq-yellow transition-colors">
                      {(idx + 1).toString().padStart(2, '0')}.
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest bg-hq-black/5 px-2.5 py-1 rounded-full text-hq-black/60 group-hover:bg-hq-yellow group-hover:text-hq-black transition-colors font-medium">
                      Theme
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight mb-3 group-hover:text-hq-yellow transition-colors">
                    {theme.title}
                  </h3>
                  <p className="font-body text-xs text-hq-black/75 font-light leading-relaxed">
                    {theme.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-hq-black/5 flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold text-hq-black/60 group-hover:text-hq-black">
                  <span>Explore Module</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY Strategic Investment in Well-Being? (Profile Page 10) */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="w-full lg:w-7/12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Why Strategic Investment in Well-Being?
            </h2>
            <p className="font-body text-base text-hq-black/80 font-light leading-relaxed mb-6">
              Hands-on. Immersive. Experiential. Disciplined. Investment in employee well-being is not an expense—it is a measurable strategic driver of corporate durability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WELLBEING_INVESTMENT_PILLARS.map((item, idx) => (
                <div key={idx} className="bg-hq-gray p-5 rounded-2xl border border-hq-black/10">
                  <h4 className="font-display text-base font-bold text-hq-black mb-1">
                    {item.title}
                  </h4>
                  <p className="font-body text-xs text-hq-black/75 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-5/12">
            <div className="bg-hq-black text-white p-8 rounded-3xl border border-black shadow-2xl relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-hq-yellow/10 rounded-full blur-2xl"></div>
              
              <div className="w-14 h-14 rounded-2xl bg-hq-yellow text-hq-black flex items-center justify-center mb-6">
                <Award className="w-7 h-7 stroke-[2]" />
              </div>

              <div className="text-xs font-mono text-hq-yellow uppercase tracking-widest mb-1 font-semibold">
                Industry Recognition
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">
                Award-Winning Methodology
              </h3>
              <p className="font-body text-xs text-white/80 font-light leading-relaxed mb-6">
                Featured among top leadership development approaches and recognized across global platforms for experiential discipline and measurable corporate impact.
              </p>

              <div className="p-4 bg-white/10 rounded-xl border border-white/10 flex items-center gap-3">
                <Check className="w-5 h-5 text-hq-yellow shrink-0" />
                <span className="font-display text-xs uppercase tracking-wider font-semibold text-white">
                  G2 Best Software & Frameworks Benchmark
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits of Engagement (Profile Page 11) */}
        <div className="bg-hq-black text-white p-8 md:p-12 rounded-3xl border border-black shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-hq-yellow mb-2 font-bold">
              Benefits • Importance of Engagement (Page 11)
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">
              Why Engagement Transforms Everything
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {ENGAGEMENT_BENEFITS.map((benefit, bIdx) => (
              <div 
                key={bIdx}
                className="bg-white/5 border border-white/10 p-4 rounded-xl text-center hover:bg-hq-yellow hover:text-hq-black transition-all group"
              >
                <div className="w-2 h-2 rounded-full bg-hq-yellow group-hover:bg-hq-black mx-auto mb-2"></div>
                <span className="font-display text-xs uppercase tracking-wider font-semibold">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 text-center bg-hq-yellow text-hq-black border-t border-hq-black">
        <h2 className="font-display text-4xl md:text-5xl tracking-tight font-semibold mb-4">
          Empower Your Workforce with 365 Days of Well-Being
        </h2>
        <p className="font-body text-hq-black/80 max-w-xl mx-auto mb-8 font-light text-base">
          Connect directly with Manny Anchan to tailor a functional well-being framework for your enterprise.
        </p>
        <Link 
          to="/contact" 
          className="bg-hq-black text-hq-white font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-hq-black transition-all font-semibold shadow-xl"
        >
          Book Manny Anchan (+91 97001 00800)
        </Link>
      </section>
    </div>
  );
}
