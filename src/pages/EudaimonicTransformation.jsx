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
          HERO BANNER - CLEAN LINELESS AMBIENT GOLDEN YELLOW STADIUM ANIMATION ON PURE BLACK
          - Screen-fitting height: min-h-[100svh] lg:h-screen lg:min-h-[660px] lg:max-h-[1080px]
          - Background: Pure pitch black (#000000) base void
          - Lines: ZERO grid lines, ZERO stroke lines, ZERO border lines
          - Background Animation: Clean, lineless concentric golden yellow / amber stadium waves
            pulsing smoothly from light to dark with organic breathing orbs
          - Left Vertical Text: EUDAIMONIC TRANSFORMATION with Yellow Arrow (No divider line)
          - Heading: text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight (About Us text properties)
          - 3-line paragraph: text-sm sm:text-base text-white/80 font-light leading-relaxed
          - Button: SINGLE clean, glowing pill button under the copy
          ========================================================================= */}
      <section className="bg-black text-white min-h-[100svh] lg:h-screen lg:min-h-[660px] lg:max-h-[1080px] flex items-center relative overflow-hidden w-full pt-20 sm:pt-24 pb-12 sm:pb-16 select-none">
        
        {/* Subtle Stardust Twinkle (Soft 1.5px dots, clean and minimal) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {[
            { top: '12%', left: '10%', size: 1.5, delay: '0s' },
            { top: '22%', left: '26%', size: 2, delay: '1.2s' },
            { top: '10%', left: '48%', size: 1.5, delay: '0.6s' },
            { top: '18%', left: '72%', size: 2, delay: '2.1s' },
            { top: '32%', left: '88%', size: 1.5, delay: '1.5s' },
            { top: '48%', left: '94%', size: 2, delay: '0.8s' },
            { top: '70%', left: '80%', size: 1.5, delay: '2.4s' },
            { top: '86%', left: '88%', size: 2, delay: '1.0s' },
            { top: '76%', left: '56%', size: 1.5, delay: '1.8s' },
            { top: '90%', left: '34%', size: 1.5, delay: '0.4s' },
            { top: '62%', left: '16%', size: 2, delay: '2.7s' },
            { top: '80%', left: '6%', size: 1.5, delay: '1.1s' },
            { top: '40%', left: '32%', size: 1.5, delay: '1.9s' },
            { top: '26%', left: '52%', size: 2, delay: '2.3s' },
            { top: '8%', left: '80%', size: 1.5, delay: '0.5s' },
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

        {/* Ambient Warm Golden Yellow Organic Light Orbs (Floating & Breathing on pure black) */}
        <motion.div 
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.20, 0.38, 0.20],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[#FFCC00] blur-[170px] pointer-events-none z-0" 
        />
        <motion.div 
          animate={{
            scale: [1.1, 0.95, 1.1],
            opacity: [0.12, 0.26, 0.12],
          }}
          transition={{
            duration: 9.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
          className="absolute bottom-[-10%] right-[30%] w-[450px] h-[450px] rounded-full bg-amber-500 blur-[150px] pointer-events-none z-0" 
        />

        {/* Left Side Vertical Text: EUDAIMONIC TRANSFORMATION with Yellow Arrow (Clean, NO divider line) */}
        <div className="absolute left-3 sm:left-6 lg:left-8 xl:left-12 inset-y-0 z-30 flex flex-col justify-center items-center pointer-events-none select-none">
          <div 
            className="flex items-center gap-2.5 sm:gap-3"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span className="font-display text-[11px] sm:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-white/90 drop-shadow-md">
              EUDAIMONIC TRANSFORMATION
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-hq-yellow" />
          </div>
        </div>

        {/* BACKGROUND ANIMATION LAYER: LINELESS CONCENTRIC GOLDEN YELLOW STADIUM WAVES */}
        {/* Completely line-free (stroke: none, strokeWidth: 0), smooth feathered gradient fills in shades of yellow */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-10 flex items-center justify-end">
          <svg
            viewBox="0 0 1200 680"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full object-cover"
          >
            <defs>
              {/* Stadium Wave Gradient 6 (Outermost Deep Bronze/Amber fading into pure black) */}
              <linearGradient id="yellowWave6" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stopColor="#261700" stopOpacity="0.45" />
                <stop offset="65%" stopColor="#140a00" stopOpacity="0.20" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              {/* Stadium Wave Gradient 5 */}
              <linearGradient id="yellowWave5" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stopColor="#4d2c00" stopOpacity="0.55" />
                <stop offset="65%" stopColor="#261400" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              {/* Stadium Wave Gradient 4 */}
              <linearGradient id="yellowWave4" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stopColor="#7a4700" stopOpacity="0.65" />
                <stop offset="65%" stopColor="#402300" stopOpacity="0.30" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              {/* Stadium Wave Gradient 3 */}
              <linearGradient id="yellowWave3" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stopColor="#ab6b00" stopOpacity="0.75" />
                <stop offset="65%" stopColor="#633b00" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              {/* Stadium Wave Gradient 2 */}
              <linearGradient id="yellowWave2" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stopColor="#d98c00" stopOpacity="0.82" />
                <stop offset="65%" stopColor="#8a5400" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              {/* Stadium Wave Gradient 1 */}
              <linearGradient id="yellowWave1" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stopColor="#f5aa00" stopOpacity="0.90" />
                <stop offset="60%" stopColor="#b87a00" stopOpacity="0.55" />
                <stop offset="85%" stopColor="#7a4b00" stopOpacity="0.20" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              {/* Stadium Wave Gradient 0 (Innermost Core, Highly Diffused Golden Yellow) */}
              <linearGradient id="yellowWave0" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stopColor="#FFF4B8" stopOpacity="0.95" />
                <stop offset="45%" stopColor="#FFCC00" stopOpacity="0.75" />
                <stop offset="75%" stopColor="#E5A800" stopOpacity="0.35" />
                <stop offset="92%" stopColor="#996500" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              {/* High-Diffusion Soft Edge Blur Filter for completely seamless, velvety rounded edges */}
              <filter id="softFeatherYellow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="48" />
              </filter>
            </defs>

            {/* Lineless Concentric Stadium Capsules Radiating with Staggered Light-to-Dark Breathing Wave & Deep Blur */}
            {[
              { id: 6, x: 260, y: -160, width: 1200, height: 1360, rx: 680, ry: 680, grad: 'yellowWave6', minOp: 0.22, maxOp: 0.52, delay: 0 },
              { id: 5, x: 380, y: -60,  width: 1100, height: 1160, rx: 580, ry: 580, grad: 'yellowWave5', minOp: 0.32, maxOp: 0.65, delay: 0.8 },
              { id: 4, x: 500, y: 40,   width: 1000, height: 960,  rx: 480, ry: 480, grad: 'yellowWave4', minOp: 0.42, maxOp: 0.75, delay: 1.6 },
              { id: 3, x: 610, y: 140,  width: 900,  height: 760,  rx: 380, ry: 380, grad: 'yellowWave3', minOp: 0.52, maxOp: 0.84, delay: 2.4 },
              { id: 2, x: 710, y: 230,  width: 800,  height: 580,  rx: 290, ry: 290, grad: 'yellowWave2', minOp: 0.60, maxOp: 0.90, delay: 3.2 },
              { id: 1, x: 800, y: 320,  width: 700,  height: 400,  rx: 200, ry: 200, grad: 'yellowWave1', minOp: 0.68, maxOp: 0.95, delay: 4.0 },
              { id: 0, x: 880, y: 400,  width: 650,  height: 240,  rx: 120, ry: 120, grad: 'yellowWave0', minOp: 0.76, maxOp: 1.0, delay: 4.8 },
            ].map((layer) => (
              <motion.rect
                key={layer.id}
                x={layer.x}
                y={layer.y}
                width={layer.width}
                height={layer.height}
                rx={layer.rx}
                ry={layer.ry}
                fill={`url(#${layer.grad})`}
                filter="url(#softFeatherYellow)"
                animate={{
                  opacity: [layer.minOp, layer.maxOp, layer.minOp],
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: layer.delay,
                }}
              />
            ))}
          </svg>

          {/* Smooth left-edge void blend into pure black */}
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none" />
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto pl-12 pr-6 sm:pl-16 sm:pr-8 md:pl-20 md:pr-12 lg:pl-24 w-full relative z-20">
          
          {/* Headline, Paragraph, and the SINGLE Explore Pillars Button */}
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-white font-bold">
                Operating System
              </span> <br />
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

            {/* SINGLE Explore Pillars Button (Clean, modern pill button - ZERO lines, warm golden hover glow) */}
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
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black font-display font-semibold text-xs tracking-[0.18em] uppercase hover:bg-hq-yellow hover:text-hq-black transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.35),0_0_50px_rgba(255,204,0,0.3)] hover:shadow-[0_0_35px_rgba(255,204,0,0.65),0_0_70px_rgba(255,204,0,0.45)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>EXPLORE PILLARS</span>
                <ArrowRight className="w-3.5 h-3.5 text-black transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

          </div>

        </div>
      </section>

            {/* DOCKED ENTERPRISE LEVERS STRIP (MATCHING FOUNDER SECTION BELOW HERO) */}
      <div className="w-full bg-[#0A0A0A] text-white/80 py-4 sm:py-5 px-6 border-t border-b border-white/10 overflow-hidden relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-4">
          
          {/* Engagement */}
          <div className="flex flex-col gap-1 max-w-[260px]">
            <span className="text-hq-yellow font-bold font-mono text-xs uppercase tracking-widest">
              Engagement
            </span>
            <span className="text-white/70 text-xs font-light leading-snug">
              Fostering deep psychological connection with daily enterprise missions.
            </span>
          </div>

          <span className="text-white/20 hidden md:inline text-sm">•</span>

          {/* Productivity */}
          <div className="flex flex-col gap-1 max-w-[260px]">
            <span className="text-hq-yellow font-bold font-mono text-xs uppercase tracking-widest">
              Productivity
            </span>
            <span className="text-white/70 text-xs font-light leading-snug">
              Optimizing attentional architecture and eliminating cognitive friction.
            </span>
          </div>

          <span className="text-white/20 hidden md:inline text-sm">•</span>

          {/* Collaboration */}
          <div className="flex flex-col gap-1 max-w-[260px]">
            <span className="text-hq-yellow font-bold font-mono text-xs uppercase tracking-widest">
              Collaboration
            </span>
            <span className="text-white/70 text-xs font-light leading-snug">
              Eradicating departmental silos through radical trust and camaraderie.
            </span>
          </div>

          <span className="text-white/20 hidden md:inline text-sm">•</span>

          {/* Profitability */}
          <div className="flex flex-col gap-1 max-w-[260px]">
            <span className="text-hq-yellow font-bold font-mono text-xs uppercase tracking-widest">
              Profitability
            </span>
            <span className="text-white/70 text-xs font-light leading-snug">
              Translating employee vitality and resilience directly into bottom-line gains.
            </span>
          </div>

        </div>
      </div>

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
