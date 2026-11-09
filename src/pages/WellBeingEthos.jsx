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
      {/* HERO SECTION MATCHING WHY-HQX HERO STYLE WITH UNIFIED PURE BLACK BACKGROUND */}
      <section className="bg-black text-hq-white relative overflow-hidden h-screen min-h-[640px] max-h-[1080px] w-full flex flex-col justify-between border-b border-white/10 select-none">
        
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

        {/* Left Side Vertical Text: WELL-BEING ETHOS (Exact WhyHQX Style) */}
        <div className="absolute left-3 sm:left-6 lg:left-8 xl:left-12 inset-y-0 z-20 flex flex-col justify-center items-center pointer-events-none select-none">
          <div 
            className="flex items-center gap-3 sm:gap-4"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span className="font-display text-[11px] sm:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-hq-yellow drop-shadow-md">
              WELL-BEING ETHOS
            </span>
            <span className="w-px h-8 sm:h-14 bg-white/25" />
          </div>
        </div>

        {/* Main Content Area (Vertically Centered in Viewport Matching WhyHQX) */}
        <div className="max-w-7xl mx-auto pl-12 pr-6 sm:pl-16 sm:pr-8 md:pl-20 md:pr-12 lg:pl-24 relative z-10 w-full flex-1 flex flex-col justify-center pt-28 sm:pt-32 pb-8">
          <div className="max-w-xl">
            
            {/* Editorial Headline with WhyHQX text properties */}
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight leading-[1.15] mb-5 select-none text-white">
              Those Who Feel Better <br />
              <span className="text-hq-yellow font-bold">Work Better</span>
            </h1>

            {/* Lead Narrative with WhyHQX text properties */}
            <p className="font-body text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8 max-w-xl drop-shadow-sm">
              The <strong className="text-hq-yellow font-medium">HQ Well-being Model</strong> is an executive framework that promotes holistic vitality by encouraging individuals to develop good habits and make informed decisions that benefit their mental, physical, and emotional health. By prioritizing well-being, leaders reduce stress, elevate cognitive clarity, and drive sustainable enterprise flourishing.
            </p>

            {/* Signature HQX Hero Button (Exact WhyHQX & Home Style) */}
            <div className="pt-1">
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
            </div>

          </div>
        </div>

        {/* DOCKED STATS TICKER STRIP (PURE UNIFIED BLACK BACKGROUND) */}
        <div className="w-full bg-black/95 backdrop-blur-md text-white/80 py-3.5 sm:py-4 px-6 md:px-12 border-t border-white/10 overflow-hidden relative z-20">
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
