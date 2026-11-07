import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Crown, 
  GitMerge, 
  Shield, 
  Target, 
  Move, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  Users, 
  DollarSign, 
  HeartHandshake,
  Compass,
  Smile,
  Activity,
  Briefcase,
  Home as HomeIcon,
  Globe2
} from 'lucide-react';

export default function EudaimonicTransformation() {
  const [activePillar, setActivePillar] = useState('leadership');
  const [activeDomain, setActiveDomain] = useState('physical');

  const pillars = {
    leadership: {
      title: '01. Leadership',
      subtitle: 'From Coercion to Inspiration',
      icon: Crown,
      summary: 'True leadership is anchored in moral clarity, personal sovereignty, and emotional equilibrium.',
      breakdown: [
        'Radical Authenticity: Eradicating executive imposter syndrome and cultivating unshakeable grounded presence.',
        'Psychological Safety Architectures: Structuring corporate rituals where candor is celebrated and risks are rewarded.',
        'Visionary Delegation: Empowering middle management with high contextual autonomy and zero micromanagement.'
      ],
      metric: '38% Lift in Team Ownership Metrics'
    },
    adaptability: {
      title: '02. Adaptability',
      subtitle: 'Thriving Amid Disruption',
      icon: GitMerge,
      summary: 'The capacity to rapidly unlearn obsolete organizational patterns without triggering amygdala panic.',
      breakdown: [
        'Neuroplastic Decision Frames: Rewiring mental models to view disruption as an iterative laboratory.',
        'Cross-Functional Speed: Eliminating bureaucratic bottlenecks through rapid stand-ups and decoupled sprint teams.',
        'Anti-Fragility Training: Designing systems that actually gain strength from volatile market fluctuations.'
      ],
      metric: '45% Faster Strategic Pivots'
    },
    resilience: {
      title: '03. Resilience',
      subtitle: 'Grit Without Burnout',
      icon: Shield,
      summary: 'Developing sustainable endurance that enables executives to withstand peak stress while maintaining calm clarity.',
      breakdown: [
        'Somatic Regulation: Utilizing controlled breathwork and HRV pacing to instantly mute acute cortisol spikes.',
        'Cognitive Reframing: Turning setbacks from existential threats into tactical operational puzzles.',
        'Strategic Downtime: Implementing institutional rest and detachment protocols that supercharge creative throughput.'
      ],
      metric: '42% Reduction in Executive Burnout'
    },
    discipline: {
      title: '04. Discipline',
      subtitle: 'Systematizing Daily Excellence',
      icon: Target,
      summary: 'Replacing erratic motivational bursts with seamless, automatic micro-habits that generate compound advantages.',
      breakdown: [
        'Habit Stacking Protocols: Anchoring high-leverage focus rituals onto established workday milestones.',
        'Friction Elimination: Removing micro-distractions and cognitive drains from high-stakes decision makers.',
        'Continuous Accountability: Transparent metric trackers and peer feedback pods that ensure execution.'
      ],
      metric: '3.2x Improvement in Sprint Completion'
    },
    flexibility: {
      title: '05. Flexibility',
      subtitle: 'Fluid Collaboration Across Generations',
      icon: Move,
      summary: 'Dissolving dogmatic rigidity while upholding rigorous high-performance quality benchmarks.',
      breakdown: [
        'Generational Bridge-Building: Harmonizing baby boomer executive stewardship with Gen-Z innovation and purpose.',
        'Dynamic Role Fluidity: Encouraging talent to rotate seamlessly into cross-domain emergency crisis pods.',
        'Empathic Negotiation: Reaching win-win commercial and relational agreements with internal and external stakeholders.'
      ],
      metric: '29% Increase in Inter-Departmental Synergy'
    }
  };

  // Profile Page 4: Problem Identification vs. Interventions Matrix
  const matrixDomains = {
    physical: {
      id: 'physical',
      label: 'Physical & Mental Wellness',
      icon: Activity,
      image: '/profile_assets/page_4_img_1_305.jpeg',
      problems: [
        'Lack of Mobility and desk-bound physical stagnation',
        'Lack of recreational spaces and recovery zones in modern offices',
        'Challenges in habit formation & maintaining health routines',
        'Emotional unawareness & mood swings under deadline pressure',
        'Behaviour management and behavioural imbalances',
        'Inadequate sleep & circadian rhythm disruption',
        'Acute work stress, chronic cortisol spikes, and executive burnout'
      ],
      interventions: [
        'Eating Right: Neuro-nutrition guidelines for sustained cognitive energy',
        'Stress Management: Somatic down-regulation and vagal nerve activation',
        'Regulating Emotions: Mindful emotional awareness and affective labeling',
        'Anger Management: Conflict defusing protocols in high-stakes boards',
        'Fitness & Daily Movement: Desk-side mobility resets every 45 minutes'
      ]
    },
    career: {
      id: 'career',
      label: 'Career & Executive Direction',
      icon: Briefcase,
      image: '/profile_assets/page_7_img_3_521.jpeg',
      problems: [
        'Lack of clarity regarding executive trajectory and next milestones',
        'Fear of failure, catastrophic thinking, and risk aversion in leadership',
        'Inability to make sound, grounded decisions under intense market pressure',
        'Weak work ethic, procrastination, and dopamine-distraction cycles',
        'Unrealistic professional expectations vs actual capability benchmarks',
        'Misalignment with management vision and organizational mission'
      ],
      interventions: [
        'Decision Making Frameworks: Inverting problems and second-order thinking',
        'Self Direction & Focus: Deep work rituals and cognitive firewall architecture',
        'Goal Formulation: 90-day actionable OKRs tied to quarterly KPIs',
        'Problem Solving: Cross-functional post-mortems and root-cause mapping',
        'Work Ethics & Accountability: High-trust peer review mechanisms'
      ]
    },
    social: {
      id: 'social',
      label: 'Relationships & Social Cohesion',
      icon: HeartHandshake,
      image: '/profile_assets/page_6_img_1_419.jpeg',
      problems: [
        'Lack of meaningful connections and superficial workplace networks',
        'Preference for extreme isolation (Post-Covid psychological retreat)',
        'Lack of shared social responsibility within organizations',
        'Peer comparison, toxic workplace envy, and status games',
        'Societal expectations, unconscious biases, and cultural friction'
      ],
      interventions: [
        'Reflective practices that re-center communal trust',
        'Advanced communication & active listening frameworks',
        'Values-driven collaborative leadership',
        'Building emotional intelligence (EQ) across cross-functional units'
      ]
    },
    self: {
      id: 'self',
      label: 'Sense of Self & Purpose',
      icon: Compass,
      image: '/profile_assets/page_8_img_3_618.jpeg',
      problems: [
        'Fear of ignorance & imposter syndrome in fast-moving industries',
        'Lack of self-awareness, identity crisis, and blurred life vision',
        'Trapped in societal validation loops over authentic fulfillment'
      ],
      interventions: [
        'Self SWOT Analysis: Objective auditing of strengths and blindspots',
        'Purpose Setting via IKIGAI: Merging passion, mission, vocation, and profession',
        'Mindful Leadership Foundations for grounded executive presence',
        'Compound Habit Building & Journaling for continuous self-evolution',
        'Aligning Individual Soul Goals vs. Superficial Societal Validation'
      ]
    }
  };

  const ActivePillarIcon = pillars[activePillar].icon;
  const currentDomain = matrixDomains[activeDomain];
  const DomainIcon = currentDomain.icon;

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* =========================================================================
          HERO BANNER - KINETIC GLASSMORPHIC BENTO & EUDAIMONIA ORBITAL CORE (CONCEPT 1)
          ========================================================================= */}
      <section className="bg-[#0A0B0E] text-white pt-28 sm:pt-32 pb-16 sm:pb-20 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
        
        {/* Ambient Studio Lighting Mesh */}
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-hq-yellow/[0.05] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-sky-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
        
        {/* Geometric Micro-Grid Backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT COLUMN: Editorial Authority & Eudaimonic Philosophy */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Eyebrow Kicker */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-hq-yellow animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-hq-yellow font-bold">
                  The HQ Functional Enhancement Model
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight font-semibold text-white leading-[1.08]">
                Eudaimonic <br />
                <span className="text-hq-yellow font-light">Transformation™</span>
              </h1>

              {/* Authoritative Quote Capsule */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-hq-yellow/[0.05] rounded-full blur-2xl pointer-events-none" />
                <p className="font-serif italic text-base sm:text-lg text-white/95 leading-snug">
                  “To Simply Put: Those Who Work Better, Deliver Better.”
                </p>
                <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/10 text-xs font-mono text-white/60">
                  <span className="text-hq-yellow font-semibold uppercase tracking-wider">— Manny Anchan</span>
                  <span className="text-white/40">Founder, Happiness Samurai</span>
                </div>
              </div>

              {/* Narrative Description */}
              <p className="font-body text-sm sm:text-[15px] text-white/75 font-normal leading-relaxed text-justify">
                Moving beyond superficial wellness perks. The <strong>HQ Functional Enhancement Model</strong> is an executive framework engineered to cultivate Aristotle's classical <span className="text-hq-yellow font-medium">Eudaimonia</span>—sustainable human flourishing through purpose, virtue, and cognitive sovereignty—translating employee resilience directly into quantified organizational output.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <Link 
                  to="/leadership-deep-dive" 
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-hq-yellow hover:bg-white text-black font-display font-semibold text-xs uppercase tracking-widest transition-all shadow-lg hover:shadow-xl group"
                >
                  <span>Book Leadership Deep Dive</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/15 text-white border border-white/20 font-display text-xs uppercase tracking-widest transition-all"
                >
                  <span>Request Enterprise Audit</span>
                </Link>
              </div>

              {/* 3 Live Mini-Stats Pills */}
              <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-2.5 text-[11px] font-mono text-white/60">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/5">
                  <CheckCircle2 className="w-3 h-3 text-hq-yellow" />
                  <span>+31% Productivity Surge</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/5">
                  <CheckCircle2 className="w-3 h-3 text-hq-yellow" />
                  <span>Zero Executive Cynicism</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/5">
                  <CheckCircle2 className="w-3 h-3 text-hq-yellow" />
                  <span>100-Day Neuroplastic Stacking</span>
                </span>
              </div>

            </motion.div>

            {/* RIGHT COLUMN: Interactive Kinetic Glassmorphic Bento & Eudaimonia Orbital Core */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative"
            >
              {/* The Glass Bento Card */}
              <div className="bg-[#101217]/90 backdrop-blur-2xl rounded-3xl sm:rounded-[36px] border border-white/15 p-6 sm:p-8 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.8)] relative overflow-hidden">
                
                {/* Ambient Inner Gradient Ring */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-hq-yellow/[0.08] rounded-full blur-3xl pointer-events-none" />
                
                {/* Bento Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-hq-yellow animate-pulse" />
                    <span className="font-display font-semibold text-xs uppercase tracking-widest text-white/90">
                      5 Pillars of Eudaimonic Flourishing
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-hq-yellow uppercase tracking-wider hidden sm:block">
                    Interactive Model • Click to Inspect
                  </div>
                </div>

                {/* 5-Pillar Interactive Orbit Navigation Pills */}
                <div className="grid grid-cols-5 gap-1.5 sm:gap-2 mb-6 relative z-10">
                  {Object.keys(pillars).map((key) => {
                    const p = pillars[key];
                    const Icon = p.icon;
                    const isActive = activePillar === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setActivePillar(key)}
                        className={`p-2 sm:p-2.5 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center gap-1.5 cursor-pointer group ${
                          isActive 
                            ? 'bg-hq-yellow text-black border-hq-yellow shadow-lg scale-105' 
                            : 'bg-white/[0.03] hover:bg-white/[0.08] text-white/70 border-white/10 hover:border-white/30'
                        }`}
                        aria-label={p.title}
                      >
                        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110 ${isActive ? 'stroke-[2.2]' : 'stroke-[1.8]'}`} />
                        <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-tight uppercase truncate max-w-full">
                          {key}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Central Orbital Kinetic Canvas (Rotating Enso Geometry) */}
                <div className="relative py-4 flex items-center justify-center">
                  
                  {/* SVG Orbital Geometric Rings */}
                  <svg viewBox="0 0 400 400" className="w-52 h-52 sm:w-60 sm:h-60 pointer-events-none">
                    {/* Outer Dashed Orbit Ring */}
                    <circle
                      cx="200"
                      cy="200"
                      r="180"
                      fill="none"
                      stroke="rgba(255, 205, 0, 0.15)"
                      strokeWidth="1.5"
                      strokeDasharray="6 8"
                      className="animate-[spin_40s_linear_infinite]"
                    />
                    {/* Middle Dashed Orbit Ring (Reversed) */}
                    <circle
                      cx="200"
                      cy="200"
                      r="135"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.12)"
                      strokeWidth="1.2"
                      strokeDasharray="4 6"
                      className="animate-[spin_25s_linear_infinite_reverse]"
                    />
                    {/* Inner Solid Subtle Ring */}
                    <circle
                      cx="200"
                      cy="200"
                      r="85"
                      fill="rgba(255, 205, 0, 0.03)"
                      stroke="rgba(255, 205, 0, 0.25)"
                      strokeWidth="1"
                    />
                  </svg>

                  {/* Glowing Core Badge in Center */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <motion.div
                      key={activePillar}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-gradient-to-br from-hq-yellow/20 to-black/80 border border-hq-yellow/40 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_30px_rgba(255,205,0,0.25)]"
                    >
                      <ActivePillarIcon className="w-6 h-6 sm:w-7 sm:h-7 text-hq-yellow stroke-[1.8] mb-1" />
                      <span className="font-mono text-[9px] font-bold text-white uppercase tracking-wider">
                        {activePillar}
                      </span>
                    </motion.div>
                  </div>

                  {/* Floating Bento Badge 1: Aristotelian Eudaimonia */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1 left-2 sm:left-4 px-3 py-1.5 rounded-full bg-[#181A20]/90 border border-white/10 backdrop-blur-md shadow-md text-[10px] font-mono text-white/80 flex items-center gap-1.5 pointer-events-none"
                  >
                    <Sparkles className="w-3 h-3 text-hq-yellow" />
                    <span>Aristotelian Purpose</span>
                  </motion.div>

                  {/* Floating Bento Badge 2: Habit Stacking */}
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-1 right-2 sm:right-4 px-3 py-1.5 rounded-full bg-[#181A20]/90 border border-white/10 backdrop-blur-md shadow-md text-[10px] font-mono text-white/80 flex items-center gap-1.5 pointer-events-none"
                  >
                    <Zap className="w-3 h-3 text-hq-yellow" />
                    <span>100-Day Rewiring</span>
                  </motion.div>

                </div>

                {/* Morphing Dynamic Content Card for Active Pillar */}
                <div className="mt-4 pt-4 border-t border-white/10 relative z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePillar}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-mono text-xs font-bold text-hq-yellow">
                            {pillars[activePillar].title}
                          </span>
                          <h3 className="font-display font-semibold text-base sm:text-lg text-white">
                            {pillars[activePillar].subtitle}
                          </h3>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-hq-yellow/15 border border-hq-yellow/30 text-hq-yellow font-mono text-[11px] font-bold">
                          {pillars[activePillar].metric}
                        </div>
                      </div>

                      <p className="font-body text-xs sm:text-[13px] text-white/70 font-light leading-relaxed">
                        {pillars[activePillar].summary}
                      </p>

                      {/* Pillar Points Preview */}
                      <div className="space-y-1.5 pt-1">
                        {pillars[activePillar].breakdown.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs font-body text-white/85">
                            <span className="text-hq-yellow mt-0.5 font-bold">›</span>
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4 Core Levers of Enterprise Transformation (Page 2 of Profile) */}
      <section className="py-16 px-6 md:px-12 bg-hq-yellow text-hq-black border-b border-hq-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Helping Your Employees Succeed And Thrive!
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Engagement', icon: Zap, desc: 'Fostering deep psychological connection with daily enterprise missions.' },
              { title: 'Productivity', icon: TrendingUp, desc: 'Optimizing attentional architecture and eliminating cognitive friction.' },
              { title: 'Collaboration', icon: Users, desc: 'Eradicating departmental silos through radical trust and camaraderie.' },
              { title: 'Profitability', icon: DollarSign, desc: 'Translating employee vitality and resilience directly into bottom-line gains.' }
            ].map((lever, i) => {
              const Icon = lever.icon;
              return (
                <div key={i} className="bg-hq-black text-white p-6 rounded-2xl shadow-xl border border-black/20">
                  <div className="w-12 h-12 rounded-xl bg-hq-yellow text-hq-black flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wider mb-2 text-hq-yellow">
                    {lever.title}
                  </h3>
                  <p className="font-body text-sm text-hq-white/80 leading-relaxed font-light">
                    {lever.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The 5 Pillars of Enterprise Sovereignty - Full Interactive Tabs */}
      <section className="py-20 px-6 md:px-12 bg-hq-white text-hq-black border-b border-hq-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-hq-yellow font-bold bg-hq-black px-4 py-1.5 rounded-full inline-block mb-4">
              5 Pillars of Sovereignty
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
              The Architecture of Flourishing
            </h2>
            <p className="font-body text-base text-hq-black/70">
              Moving beyond superficial wellness trends to engineer compounding executive resilience, ethical governance, and quantified EBITDA growth.
            </p>
          </div>

          {/* Interactive Pillar Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.keys(pillars).map((key) => {
              const p = pillars[key];
              const Icon = p.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActivePillar(key)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl border font-display text-sm uppercase tracking-wider transition-all duration-300 ${
                    activePillar === key
                      ? 'bg-hq-black text-hq-yellow border-hq-black shadow-lg scale-105 font-bold'
                      : 'bg-white text-hq-black/70 border-hq-black/15 hover:border-hq-black/40 hover:bg-hq-black/5'
                  }`}
                >
                  <Icon className="w-4 h-4 stroke-[2]" />
                  <span>{key}</span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Detail Box */}
          <div className="bg-hq-black text-white p-8 md:p-14 rounded-3xl border border-black/20 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl relative z-10">
              <div className="flex items-center gap-3 text-xs font-mono text-hq-yellow uppercase tracking-widest mb-2">
                <ActivePillarIcon className="w-4 h-4" />
                <span>{pillars[activePillar].title}</span>
              </div>
              <h3 className="font-display text-2xl md:text-4xl font-bold mb-4 text-white">
                {pillars[activePillar].subtitle}
              </h3>
              <p className="font-body text-lg text-hq-white/80 leading-relaxed font-light mb-8">
                {pillars[activePillar].summary}
              </p>

              <div className="space-y-4 mb-8">
                {pillars[activePillar].breakdown.map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-hq-yellow shrink-0 mt-0.5" />
                    <p className="font-body text-sm md:text-base text-hq-white/90 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center gap-3 bg-white/10 px-5 py-2.5 rounded-full border border-white/20 text-xs font-mono text-hq-yellow">
                <TrendingUp className="w-4 h-4" />
                <span>Impact Metric: {pillars[activePillar].metric}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pages 4-8 Matrix: Problem Identification vs. Interventions Framework */}
      <section className="py-20 px-6 md:px-12 bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 pb-6 border-b border-black/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-black/60 font-bold block mb-2">
                Empirical Intervention Framework
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] leading-[1.08]">
                Problem Identification <br />
                <span className="text-[#666666] font-light">& Strategic Interventions</span>
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-black/65 max-w-md font-light leading-relaxed">
              Synthesizing root stressors and deploying validated behavioral and psychological architectures across 4 core operational domains.
            </p>
          </div>

          {/* Domain Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {Object.keys(matrixDomains).map((domainKey) => {
              const dom = matrixDomains[domainKey];
              const Icon = dom.icon;
              const isSelected = activeDomain === domainKey;
              return (
                <button
                  key={domainKey}
                  onClick={() => setActiveDomain(domainKey)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                    isSelected 
                      ? 'bg-[#1E1A17] text-white border-black shadow-md' 
                      : 'bg-[#FAF8F5] text-black/70 border-black/10 hover:bg-black/5 hover:text-black'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-hq-yellow text-black' : 'bg-white border border-black/10 text-black'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-display text-xs sm:text-sm font-semibold leading-snug">
                    {dom.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Split Matrix Presentation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Problems Identified */}
            <div className="lg:col-span-6 bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-black/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-red-600 font-bold mb-4">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Underlying Corporate Friction (Audit)</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#0A0A0A] mb-6">
                  {currentDomain.label}
                </h3>

                <div className="space-y-3">
                  {currentDomain.problems.map((prob, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-black/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                      <p className="font-body text-xs sm:text-[13px] text-[#2A2A2A] font-normal leading-relaxed">
                        {prob}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Strategic Interventions */}
            <div className="lg:col-span-6 bg-[#0E0F12] text-white p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-hq-yellow font-bold mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>Validated HQX Interventions</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-6">
                  Transformative Solutions
                </h3>

                <div className="space-y-3">
                  {currentDomain.interventions.map((sol, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                      <CheckCircle2 className="w-4 h-4 text-hq-yellow mt-0.5 shrink-0" />
                      <p className="font-body text-xs sm:text-[13px] text-white/90 font-light leading-relaxed">
                        {sol}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-white/50">
                  Target Domain: {currentDomain.label}
                </span>
                <Link
                  to="/leadership-deep-dive"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-hq-yellow hover:underline uppercase tracking-wider font-semibold"
                >
                  <span>Explore Masterclass</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 px-6 md:px-12 bg-hq-black text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-hq-yellow font-bold bg-white/10 px-4 py-1.5 rounded-full inline-block mb-4">
            Begin the Evolution
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to Engineer an Antifragile Executive Culture?
          </h2>
          <p className="font-body text-base md:text-lg text-hq-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Move beyond transactional wellness. Deploy the HQ Functional Enhancement Model across your leadership pods and corporate tiers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-hq-yellow text-hq-black font-display font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white transition-all shadow-xl"
            >
              Initiate Enterprise Engagement
            </Link>
            <Link 
              to="/keynotes" 
              className="border border-white/30 text-white font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all"
            >
              Explore Keynote Addresses
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
