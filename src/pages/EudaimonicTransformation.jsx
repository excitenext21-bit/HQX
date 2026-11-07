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
          HERO BANNER - BLACK & YELLOW STADIUM TUNNEL (MATCHING REFERENCE IMAGE)
          - Left Vertical Text: EUDAIMONIC TRANSFORMATION with Arrow
          - Heading text properties matching About Us hero:
            font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight text-white leading-[1.15] mb-5
          - 3-line paragraph matching About Us font-body style
          - Explore Pillars button with Home Hero top/bottom animated lines
          - Concentric Stadium wave with slow light-to-dark breathing glow animation
          ========================================================================= */}
      <section className="bg-[#060709] text-white pt-28 sm:pt-36 pb-20 sm:pb-28 px-6 md:px-12 border-b border-white/10 relative overflow-hidden min-h-[84vh] flex items-center w-full">
        
        {/* Subtle Star Dust Particle Field */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[
            { top: '10%', left: '8%', size: 2, delay: '0s' },
            { top: '18%', left: '22%', size: 2.5, delay: '1.2s' },
            { top: '8%', left: '46%', size: 1.5, delay: '0.6s' },
            { top: '16%', left: '68%', size: 2.5, delay: '2.1s' },
            { top: '28%', left: '86%', size: 2, delay: '1.5s' },
            { top: '44%', left: '94%', size: 3, delay: '0.8s' },
            { top: '68%', left: '82%', size: 1.5, delay: '2.4s' },
            { top: '84%', left: '90%', size: 2.5, delay: '1.0s' },
            { top: '78%', left: '58%', size: 2, delay: '1.8s' },
            { top: '90%', left: '36%', size: 1.5, delay: '0.4s' },
            { top: '64%', left: '14%', size: 2.5, delay: '2.7s' },
            { top: '82%', left: '5%', size: 2, delay: '1.1s' },
            { top: '38%', left: '30%', size: 1.5, delay: '1.9s' },
            { top: '24%', left: '50%', size: 2, delay: '2.3s' },
            { top: '6%', left: '78%', size: 2, delay: '0.5s' },
            { top: '94%', left: '72%', size: 2.5, delay: '1.6s' },
            { top: '52%', left: '44%', size: 1.5, delay: '2.9s' },
            { top: '34%', left: '64%', size: 2, delay: '0.7s' },
          ].map((star, idx) => (
            <div
              key={idx}
              className="absolute rounded-full bg-white animate-stardust"
              style={{
                top: star.top,
                left: star.left,
                width: star.size + 'px',
                height: star.size + 'px',
                animationDelay: star.delay,
              }}
            />
          ))}
        </div>

        {/* Geometric Micro-Grid Backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        {/* Left Side Vertical Text: EUDAIMONIC TRANSFORMATION with Arrow (Matching About Us Hero Style) */}
        <div className="absolute left-3 sm:left-6 lg:left-8 xl:left-12 inset-y-0 z-20 flex flex-col justify-center items-center pointer-events-none select-none">
          <div 
            className="flex items-center gap-3 sm:gap-4"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span className="font-display text-[11px] sm:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-hq-yellow drop-shadow-md">
              EUDAIMONIC TRANSFORMATION
            </span>
            <span className="w-px h-8 sm:h-14 bg-white/25"></span>
            <ArrowRight className="w-3.5 h-3.5 text-hq-yellow" />
          </div>
        </div>

        {/* Yellow Buffering Radiant Light Aura (Sweeps continuously from Left Corner to Top) */}
        <div 
          className="absolute -bottom-24 -left-24 w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] rounded-full bg-gradient-to-tr from-hq-yellow/35 via-[#FFE566]/20 to-transparent blur-[110px] pointer-events-none animate-stadium-glow" 
        />
        <div 
          className="absolute -top-20 right-10 w-[400px] h-[400px] rounded-full bg-hq-yellow/[0.05] blur-[130px] pointer-events-none" 
        />

        {/* Concentric Stadium Wave SVG System (Matching reference image with slow light-to-dark glow animation) */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-3/4 pointer-events-none select-none overflow-hidden flex items-center justify-end">
          <svg 
            viewBox="0 0 1100 700" 
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full min-h-[550px] sm:min-h-[650px] opacity-95"
          >
            <defs>
              {/* Linear Gradient for Stroke Buffering from Left Corner (0%, 100%) to Top (75%, 0%) */}
              <linearGradient id="bufferStrokeGrad" x1="0%" y1="100%" x2="75%" y2="0%">
                <stop offset="0%" stopColor="#FFCC00" stopOpacity="0.95" />
                <stop offset="35%" stopColor="#FFE566" stopOpacity="0.85" />
                <stop offset="65%" stopColor="#FFCC00" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FFCC00" stopOpacity="0.05" />
              </linearGradient>

              {/* Radial Fill Gradients for Stadium Bands */}
              <radialGradient id="stadiumFillGrad" cx="72%" cy="74%" r="85%">
                <stop offset="0%" stopColor="#FFCC00" stopOpacity="0.18" />
                <stop offset="40%" stopColor="#FFCC00" stopOpacity="0.08" />
                <stop offset="80%" stopColor="#090A0E" stopOpacity="0.95" />
              </radialGradient>
            </defs>

            {/* Concentric Stadium Capsules (Stepped from light innermost to dark outermost with slow glow) */}
            {[
              { id: 7, w: 1600, h: 760, rx: 380, fill: 'rgba(255,204,0,0.02)', stroke: 'rgba(255,204,0,0.15)', dash: '180 600', delay: '0s', glowDelay: '0s' },
              { id: 6, w: 1360, h: 630, rx: 315, fill: 'rgba(255,204,0,0.035)', stroke: 'rgba(255,204,0,0.20)', dash: '200 550', delay: '0.4s', glowDelay: '1.2s' },
              { id: 5, w: 1140, h: 510, rx: 255, fill: 'rgba(255,204,0,0.05)', stroke: 'rgba(255,204,0,0.26)', dash: '220 500', delay: '0.8s', glowDelay: '2.4s' },
              { id: 4, w: 920, h: 400, rx: 200, fill: 'rgba(255,204,0,0.07)', stroke: 'rgba(255,204,0,0.32)', dash: '240 450', delay: '1.2s', glowDelay: '3.6s' },
              { id: 3, w: 720, h: 300, rx: 150, fill: 'rgba(255,204,0,0.09)', stroke: 'rgba(255,204,0,0.40)', dash: '260 400', delay: '1.6s', glowDelay: '4.8s' },
              { id: 2, w: 520, h: 210, rx: 105, fill: 'rgba(255,204,0,0.12)', stroke: 'rgba(255,204,0,0.50)', dash: '280 350', delay: '2.0s', glowDelay: '6.0s' },
              { id: 1, w: 350, h: 130, rx: 65, fill: 'url(#stadiumFillGrad)', stroke: 'rgba(255,204,0,0.75)', dash: '300 300', delay: '2.4s', glowDelay: '7.2s' },
            ].map((tier) => {
              const cx = 780;
              const cy = 520;
              const x = cx - tier.w / 2;
              const y = cy - tier.h / 2;
              return (
                <g 
                  key={tier.id}
                  className="animate-stadium-slow-glow"
                  style={{ animationDelay: tier.glowDelay }}
                >
                  {/* Stepped Stadium Band glowing from light to dark */}
                  <rect
                    x={x}
                    y={y}
                    width={tier.w}
                    height={tier.h}
                    rx={tier.rx}
                    fill={tier.fill}
                    stroke={tier.stroke}
                    strokeWidth="1.3"
                  />
                  {/* Dynamic Buffering Light Beam Tracing from Left Corner to Top */}
                  <rect
                    x={x}
                    y={y}
                    width={tier.w}
                    height={tier.h}
                    rx={tier.rx}
                    fill="none"
                    stroke="url(#bufferStrokeGrad)"
                    strokeWidth="2.2"
                    strokeDasharray={tier.dash}
                    className="animate-stadium-stroke"
                    style={{ animationDelay: tier.delay }}
                  />
                </g>
              );
            })}
          </svg>
        </div>

        {/* Framing Container: Exact Alignment with Left Vertical Margin */}
        <div className="max-w-7xl mx-auto pl-12 pr-6 sm:pl-16 sm:pr-8 md:pl-20 md:pr-12 lg:pl-24 w-full relative z-10">
          <div className="max-w-2xl">
            
            {/* Headline with exact About Us text properties:
                font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight text-white leading-[1.15] mb-5 */}
            <motion.h1 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight text-white leading-[1.15] mb-5"
            >
              The new <br />
              <span className="text-hq-yellow">Operating System</span> <br />
              for human flourishing
            </motion.h1>

            {/* 3-line paragraph related to Eudaimonic Transformation (matching About Us text properties) */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8 max-w-xl"
            >
              An executive architecture engineered to cultivate Aristotelian eudaimonia—translating employee vitality, purpose, and behavioral neuroscience into quantified organizational output and sustainable enterprise flourishing.
            </motion.p>

            {/* Explore Pillars Button (Exact Home Page Hero Style with Animated Top & Bottom Borders) */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2"
            >
              <a 
                href="#pillars-detail" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('pillars-detail')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative inline-flex items-center justify-between gap-8 py-3.5 px-2 font-display font-medium text-xs tracking-[0.2em] text-white hover:text-hq-yellow transition-colors duration-300 uppercase cursor-pointer"
              >
                {/* Top border line: 1.25px, white by default, on hover width decreases to 20% at right edge and turns theme yellow */}
                <span className="absolute top-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />

                <span className="relative z-10 font-semibold tracking-widest">EXPLORE PILLARS</span>

                <svg 
                  className="w-[22px] h-[11px] inline-block transition-transform duration-300 group-hover:translate-x-1.5 flex-shrink-0" 
                  viewBox="0 0 20 10" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="0" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="1.2" />
                  <polyline points="15 1, 20 5, 15 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* Bottom border line: 1.25px, white by default, on hover width decreases to 20% at right edge and turns theme yellow */}
                <span className="absolute bottom-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />
              </a>
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
      <section id="pillars-detail" className="py-20 px-6 md:px-12 bg-hq-white text-hq-black border-b border-hq-black/10">
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
