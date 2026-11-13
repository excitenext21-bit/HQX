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
  Globe2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function EudaimonicTransformation() {
  const [activePillar, setActivePillar] = useState('leadership');
  const [activeDomain, setActiveDomain] = useState('physical');

  const pillars = {
    leadership: {
      num: '01',
      title: 'Leadership',
      subtitle: 'From Coercion to Inspiration',
      icon: Crown,
      summary: 'True leadership is anchored in moral clarity, personal sovereignty, and emotional equilibrium.',
      breakdown: [
        'Radical Authenticity: Eradicating executive imposter syndrome and cultivating unshakeable grounded presence.',
        'Psychological Safety Architectures: Structuring corporate rituals where candor is celebrated and risks are rewarded.',
        'Visionary Delegation: Empowering middle management with high contextual autonomy and zero micromanagement.'
      ],
      metric: '38% Lift in Team Ownership Metrics',
      teaser: 'Anchoring executive presence in moral clarity and unshakeable emotional equilibrium.',
      image: '/images/hero_showcase/founder_hero_keynote_hires.jpg'
    },
    adaptability: {
      num: '02',
      title: 'Adaptability',
      subtitle: 'Thriving Amid Disruption',
      icon: GitMerge,
      summary: 'The capacity to rapidly unlearn obsolete organizational patterns without triggering amygdala panic.',
      breakdown: [
        'Neuroplastic Decision Frames: Rewiring mental models to view disruption as an iterative laboratory.',
        'Cross-Functional Speed: Eliminating bureaucratic bottlenecks through rapid stand-ups and decoupled sprint teams.',
        'Anti-Fragility Training: Designing systems that actually gain strength from volatile market fluctuations.'
      ],
      metric: '45% Faster Strategic Pivots',
      teaser: 'Rewiring corporate patterns to rapidly unlearn obsolete models without cognitive friction.',
      image: '/images/hero_showcase/manny_big_bold_brave.jpg'
    },
    resilience: {
      num: '03',
      title: 'Resilience',
      subtitle: 'Grit Without Burnout',
      icon: Shield,
      summary: 'Developing sustainable endurance that enables executives to withstand peak stress while maintaining calm clarity.',
      breakdown: [
        'Somatic Regulation: Utilizing controlled breathwork and HRV pacing to instantly mute acute cortisol spikes.',
        'Cognitive Reframing: Turning setbacks from existential threats into tactical operational puzzles.',
        'Strategic Downtime: Implementing institutional rest and detachment protocols that supercharge creative throughput.'
      ],
      metric: '42% Reduction in Executive Burnout',
      teaser: 'Developing sustainable somatic regulation and cognitive reframing under peak pressure.',
      image: '/images/why-hqx-man-think.jpg'
    },
    discipline: {
      num: '04',
      title: 'Discipline',
      subtitle: 'Systematizing Daily Excellence',
      icon: Target,
      summary: 'Replacing erratic motivational bursts with seamless, automatic micro-habits that generate compound advantages.',
      breakdown: [
        'Habit Stacking Protocols: Anchoring high-leverage focus rituals onto established workday milestones.',
        'Friction Elimination: Removing micro-distractions and cognitive drains from high-stakes decision makers.',
        'Continuous Accountability: Transparent metric trackers and peer feedback pods that ensure execution.'
      ],
      metric: '3.2x Improvement in Sprint Completion',
      teaser: 'Replacing erratic motivation with automatic high-leverage focus rituals.',
      image: '/images/hero_showcase/manny_absa_bank.jpg'
    },
    flexibility: {
      num: '05',
      title: 'Flexibility',
      subtitle: 'Fluid Collaboration Across Generations',
      icon: Move,
      summary: 'Dissolving dogmatic rigidity while upholding rigorous high-performance quality benchmarks.',
      breakdown: [
        'Generational Bridge-Building: Harmonizing baby boomer executive stewardship with Gen-Z innovation and purpose.',
        'Dynamic Role Fluidity: Encouraging talent to rotate seamlessly into cross-domain emergency crisis pods.',
        'Empathic Negotiation: Reaching win-win commercial and relational agreements with internal and external stakeholders.'
      ],
      metric: '29% Increase in Inter-Departmental Synergy',
      teaser: 'Dissolving dogmatic silos to harmonize multigenerational executive talent.',
      image: '/images/hero_showcase/chapters_wellness_clean.jpg'
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

  const ActivePillarIcon = activePillar && pillars[activePillar] ? pillars[activePillar].icon : null;
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
      <section className="bg-[#0A0A0A] text-white min-h-[100svh] lg:h-screen lg:max-h-screen flex flex-col justify-between pt-20 sm:pt-22 lg:pt-16 pb-0 relative overflow-hidden w-full">

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

        {/* Ambient Warm Golden Yellow Organic Light Orbs (Floating & Breathing with heavy blur) */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.18, 0.32, 0.18],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#FFCC00] blur-[200px] pointer-events-none z-0"
        />
        <motion.div
          animate={{
            scale: [1.1, 0.92, 1.1],
            opacity: [0.10, 0.22, 0.10],
          }}
          transition={{
            duration: 9.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
          className="absolute bottom-[-15%] right-[20%] w-[550px] h-[550px] rounded-full bg-amber-500 blur-[180px] pointer-events-none z-0"
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

        {/* BACKGROUND ANIMATION LAYER: ULTRA-DIFFUSED GOLDEN YELLOW STADIUM WAVES */}
        {/* Soft, velvety Gaussian blur (stdDeviation 130-160px) ensures ZERO visible rounded edges or contours */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-10 flex items-center justify-end">
          <svg
            viewBox="0 0 1400 750"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full object-cover filter blur-[20px]"
          >
            <defs>
              {/* Stadium Wave Gradient 6 (Outermost Deep Bronze/Amber fading into pure black) */}
              <linearGradient id="yellowWave6" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stopColor="#261700" stopOpacity="0.40" />
                <stop offset="60%" stopColor="#140a00" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              {/* Stadium Wave Gradient 5 */}
              <linearGradient id="yellowWave5" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stopColor="#4d2c00" stopOpacity="0.50" />
                <stop offset="60%" stopColor="#261400" stopOpacity="0.20" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              {/* Stadium Wave Gradient 4 */}
              <linearGradient id="yellowWave4" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stopColor="#7a4700" stopOpacity="0.60" />
                <stop offset="60%" stopColor="#402300" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              {/* Stadium Wave Gradient 3 */}
              <linearGradient id="yellowWave3" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stopColor="#ab6b00" stopOpacity="0.70" />
                <stop offset="60%" stopColor="#633b00" stopOpacity="0.30" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              {/* Stadium Wave Gradient 2 */}
              <linearGradient id="yellowWave2" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stopColor="#d98c00" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#8a5400" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              {/* Stadium Wave Gradient 1 */}
              <linearGradient id="yellowWave1" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stopColor="#f5aa00" stopOpacity="0.80" />
                <stop offset="55%" stopColor="#b87a00" stopOpacity="0.45" />
                <stop offset="85%" stopColor="#7a4b00" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              {/* Stadium Wave Gradient 0 (Innermost Core, Diffused Golden Light Fading Smoothly to Edge) */}
              <linearGradient id="yellowWave0" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stopColor="#FFF2A0" stopOpacity="0.85" />
                <stop offset="35%" stopColor="#FFCC00" stopOpacity="0.65" />
                <stop offset="65%" stopColor="#E5A800" stopOpacity="0.30" />
                <stop offset="85%" stopColor="#996500" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              {/* Deep Diffusion Soft Edge Blur Filters for completely seamless, velvety gradients */}
              <filter id="softFeatherYellow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="130" />
              </filter>
              <filter id="ultraFeatherYellow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="160" />
              </filter>
            </defs>

            {/* Lineless Concentric Stadium Shapes with massive blur to eliminate any rounded edge contour */}
            {[
              { id: 6, x: 200, y: -200, width: 1400, height: 1450, rx: 725, ry: 725, grad: 'yellowWave6', minOp: 0.20, maxOp: 0.45, delay: 0, filter: 'softFeatherYellow' },
              { id: 5, x: 340, y: -100, width: 1300, height: 1250, rx: 625, ry: 625, grad: 'yellowWave5', minOp: 0.28, maxOp: 0.55, delay: 0.8, filter: 'softFeatherYellow' },
              { id: 4, x: 480, y: 0, width: 1200, height: 1050, rx: 525, ry: 525, grad: 'yellowWave4', minOp: 0.36, maxOp: 0.65, delay: 1.6, filter: 'softFeatherYellow' },
              { id: 3, x: 620, y: 100, width: 1100, height: 850, rx: 425, ry: 425, grad: 'yellowWave3', minOp: 0.44, maxOp: 0.72, delay: 2.4, filter: 'softFeatherYellow' },
              { id: 2, x: 760, y: 200, width: 1000, height: 680, rx: 340, ry: 340, grad: 'yellowWave2', minOp: 0.52, maxOp: 0.80, delay: 3.2, filter: 'softFeatherYellow' },
              { id: 1, x: 880, y: 280, width: 900, height: 520, rx: 260, ry: 260, grad: 'yellowWave1', minOp: 0.60, maxOp: 0.85, delay: 4.0, filter: 'ultraFeatherYellow' },
              { id: 0, x: 980, y: 350, width: 850, height: 400, rx: 200, ry: 200, grad: 'yellowWave0', minOp: 0.68, maxOp: 0.90, delay: 4.8, filter: 'ultraFeatherYellow' },
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
                filter={`url(#${layer.filter})`}
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
          <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none" />
          {/* Subtle bottom gradient to ensure zero harsh cutoff before the docked ticker strip */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Main Content Area - Vertically centered between header and docked strip */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex items-center py-4 lg:py-6 relative z-20">

          {/* Headline, Paragraph, and the SINGLE Explore Pillars Button */}
          <div className="max-w-2xl">

            {/* Headline with exact About Us text properties:
                font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight text-white leading-[1.15] mb-5 */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: '"Geist", Arial, sans-serif', fontWeight: 300 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-light tracking-tight text-white leading-[1.14] mb-4 sm:mb-5"
            >
              The new <br />
              <span
                style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-white font-extrabold"
              >
                Operating System
              </span> <br />
              for human flourishing
            </motion.h1>

            {/* 3-line paragraph related to Eudaimonic Transformation (matching About Us text properties) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-xs sm:text-sm md:text-base text-white/80 font-light leading-relaxed mb-6 sm:mb-8 max-w-xl"
            >
              An executive architecture engineered to cultivate Aristotelian eudaimonia—translating employee vitality, purpose, and behavioral neuroscience into quantified organizational output and sustainable enterprise flourishing.
            </motion.p>

            {/* Explore Pillars Button - EXACT Signature HQX Hero Button from Home Page */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pt-1"
            >
              <a
                href="#pillars-detail"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('pillars-detail')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative inline-flex items-center justify-between gap-6 py-3.5 px-1 font-display font-medium text-xs tracking-widest text-white hover:text-hq-yellow transition-colors duration-300"
              >
                {/* Top border line: 1.25px, white by default, on hover width decreases to 20% at right edge and turns theme yellow */}
                <span className="absolute top-0 right-0 w-full group-hover:w-1/5 group-hover:w-[20%] h-[1.25px] bg-white group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />

                <span className="relative z-10 uppercase tracking-[0.2em]">EXPLORE PILLARS</span>

                <svg
                  className="w-[20px] h-[10px] inline-block transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
                  viewBox="0 0 20 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="0" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="1" />
                  <polyline points="15 1, 20 5, 15 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* Bottom border line: 1.25px, white by default, on hover width decreases to 20% at right edge and turns theme yellow */}
                <span className="absolute bottom-0 right-0 w-full group-hover:w-1/5 group-hover:w-[20%] h-[1.25px] bg-white group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />
              </a>
            </motion.div>

          </div>

        </div>

        {/* DOCKED 4 ENTERPRISE LEVERS STRIP (INSIDE HERO SECTION, FIT TO SCREEN AT BOTTOM LIKE FOUNDER HERO) */}
        <div className="w-full bg-[#0A0A0A] text-white/80 py-3 sm:py-3.5 px-6 sm:px-10 border-t border-white/10 overflow-hidden relative z-20 mt-auto">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">

            {/* Engagement */}
            <div className="flex flex-col gap-0.5 max-w-[270px]">
              <span className="text-hq-yellow font-bold font-mono text-xs uppercase tracking-widest">
                Engagement
              </span>
              <span className="text-white/70 text-[11px] sm:text-xs font-light leading-snug">
                Fostering deep psychological connection with daily enterprise missions.
              </span>
            </div>

            <span className="text-white/20 hidden md:inline text-sm">•</span>

            {/* Productivity */}
            <div className="flex flex-col gap-0.5 max-w-[270px]">
              <span className="text-hq-yellow font-bold font-mono text-xs uppercase tracking-widest">
                Productivity
              </span>
              <span className="text-white/70 text-[11px] sm:text-xs font-light leading-snug">
                Optimizing attentional architecture and eliminating cognitive friction.
              </span>
            </div>

            <span className="text-white/20 hidden md:inline text-sm">•</span>

            {/* Collaboration */}
            <div className="flex flex-col gap-0.5 max-w-[270px]">
              <span className="text-hq-yellow font-bold font-mono text-xs uppercase tracking-widest">
                Collaboration
              </span>
              <span className="text-white/70 text-[11px] sm:text-xs font-light leading-snug">
                Eradicating departmental silos through radical trust and camaraderie.
              </span>
            </div>

            <span className="text-white/20 hidden md:inline text-sm">•</span>

            {/* Profitability */}
            <div className="flex flex-col gap-0.5 max-w-[270px]">
              <span className="text-hq-yellow font-bold font-mono text-xs uppercase tracking-widest">
                Profitability
              </span>
              <span className="text-white/70 text-[11px] sm:text-xs font-light leading-snug">
                Translating employee vitality and resilience directly into bottom-line gains.
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* The Architecture of Flourishing - Accordion Section (Matching Reference Style) */}
      <section id="pillars-detail" className="py-20 sm:py-24 px-6 md:px-12 bg-[#F8F9FA] text-hq-black border-b border-black/10">
        <div className="max-w-7xl mx-auto">

          {/* Header Section: Bold Title • Right Contextual Summary (No Eyebrow Text) */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12 mb-12 sm:mb-16">
            {/* Left Column: Main Headline */}
            <div className="max-w-xl">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] dark:text-white leading-[1.08]">
                The Architecture <br />
                <span className="text-[#666666] dark:text-white/60 font-light">of Flourishing</span>
              </h2>
            </div>

            {/* Right Column: Explanatory Context */}
            <div className="md:max-w-md lg:max-w-lg md:pt-2">
              <p className="font-body text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
                From foundational self-regulation to boardroom execution, our five pillars systematize behavioral neuroscience and moral leadership into quantified enterprise resilience.
              </p>
            </div>
          </div>

          {/* 5 Elements Accordion (Yellow Accent, Alternate White Tabs, No Numbers) */}
          <div className="space-y-3 sm:space-y-4">
            {Object.keys(pillars).map((key, index) => {
              const item = pillars[key];
              const isActive = activePillar === key;
              const isAlternate = index % 2 === 1;
              const Icon = item.icon;

              return (
                <div key={key} className="transition-all duration-300">
                  {isActive ? (
                    /* ACTIVE ACCORDION CARD - VIBRANT BRAND YELLOW CAPSULE (HIGH-CONTRAST LUXURY) */
                    <div className="w-full bg-hq-yellow text-hq-black rounded-2xl sm:rounded-3xl shadow-[0_12px_36px_rgba(255,204,0,0.28)] border border-black/10 overflow-hidden transition-all duration-300">
                      {/* Clickable Header Row */}
                      <button
                        type="button"
                        onClick={() => setActivePillar(isActive ? null : key)}
                        className="w-full text-left py-4 sm:py-5 px-6 sm:px-8 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                      >
                        {/* Left: Indicator Line and Title (No numbers) */}
                        <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                          <span className="w-[3.5px] h-6 sm:h-7 bg-hq-black rounded-full shrink-0" />
                          <span className="font-display font-bold text-xl sm:text-2xl text-hq-black tracking-tight truncate">
                            {item.title}
                          </span>
                        </div>

                        {/* Right: Inset Cinematic Image Thumbnail & Collapse Chevron */}
                        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                          <div className="w-24 sm:w-40 md:w-56 h-10 sm:h-12 rounded-xl sm:rounded-2xl overflow-hidden border border-black/15 shadow-inner bg-black/10">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover filter contrast-105"
                            />
                          </div>
                          <ChevronUp className="w-5 h-5 text-hq-black/80 shrink-0" />
                        </div>
                      </button>

                      {/* Smooth Expanded Accordion Body */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="px-6 sm:px-10 pb-7 pt-4 border-t border-black/10"
                      >
                        <p className="font-body text-sm sm:text-base text-hq-black/90 font-light leading-relaxed mb-6 max-w-3xl">
                          {item.summary}
                        </p>

                        {/* 3 Breakdown Highlights - Clean vertical 1px divider lines, zero boxes, zero icons, bold text before ':' */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-black/15 pt-2">
                          {item.breakdown.map((point, idx) => {
                            const colonIndex = point.indexOf(':');
                            const hasColon = colonIndex !== -1;
                            const title = hasColon ? point.substring(0, colonIndex + 1) : '';
                            const body = hasColon ? point.substring(colonIndex + 1) : point;

                            return (
                              <div
                                key={idx}
                                className={`${idx === 0 ? 'md:pr-6' : idx === item.breakdown.length - 1 ? 'md:pl-6' : 'md:px-6'} py-2 md:py-0`}
                              >
                                <p className="font-body text-xs sm:text-[13px] text-hq-black/90 leading-relaxed">
                                  {hasColon ? (
                                    <>
                                      <strong className="font-bold text-hq-black">{title}</strong>
                                      <span className="font-light text-hq-black/85">{body}</span>
                                    </>
                                  ) : (
                                    <span className="font-normal text-hq-black/90">{point}</span>
                                  )}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    /* INACTIVE ACCORDION ROW (WITH ALTERNATE WHITE BACKGROUND & YELLOW ACCENT LINE, NO NUMBERS) */
                    <button
                      type="button"
                      onClick={() => setActivePillar(key)}
                      className={`w-full text-left py-4 sm:py-5 px-6 sm:px-8 rounded-2xl sm:rounded-3xl transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 group focus:outline-none ${isAlternate
                        ? 'bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-black/5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)]'
                        : 'bg-transparent hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-transparent hover:border-black/5'
                        }`}
                    >
                      {/* Left: Yellow Indicator Line and Title (No numbers) */}
                      <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                        <span className="w-[3.5px] h-6 sm:h-7 bg-hq-yellow rounded-full shrink-0 shadow-sm group-hover:scale-y-110 transition-transform duration-200" />
                        <span className="font-display font-semibold text-lg sm:text-xl text-neutral-900 group-hover:text-black tracking-tight whitespace-nowrap">
                          {item.title}
                        </span>
                      </div>

                      {/* Center/Right: Subtitle / Teaser */}
                      <p className="font-body text-xs sm:text-sm text-neutral-400 font-light truncate max-w-xs md:max-w-md lg:max-w-lg hidden sm:block">
                        {item.teaser}
                      </p>

                      {/* Right: Expand Chevron */}
                      <ChevronDown className="w-5 h-5 text-neutral-400 group-hover:text-neutral-700 transition-transform duration-200 shrink-0 ml-2" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Manny Anchan Editorial Quote Banner (Same Yellow Quote Section Style as Keynotes Page) */}
      <section className="h-[340px] sm:h-[400px] lg:h-[430px] bg-hq-yellow text-[#0A0A0A] relative overflow-hidden border-b border-black/10">
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {/* Left: Manny Anchan B&W Portrait Clipped Inside Giant Closing-Quote Silhouette */}
          <div className="group/quote h-[220px] sm:h-full max-h-[360px] aspect-[360/420] shrink-0 flex items-center justify-center cursor-pointer">
            <svg
              viewBox="0 0 360 420"
              className="w-full h-full drop-shadow-[0_18px_36px_rgba(0,0,0,0.18)]"
              role="img"
              aria-label="Manny Anchan Portrait inside Quote Mark"
            >
              <defs>
                <clipPath id="eudaimonicMannyQuoteClip">
                  <path d="M 0 0 H 360 V 230 C 360 348, 235 410, 0 420 L 0 332 C 110 322, 164 282, 166 226 H 0 Z" />
                </clipPath>
              </defs>
              <g clipPath="url(#eudaimonicMannyQuoteClip)">
                <rect x="0" y="0" width="360" height="420" fill="#070709" />
                <image
                  href="/images/hero_showcase/manny_founder_podium.jpg"
                  x="-36"
                  y="0"
                  width="432"
                  height="420"
                  preserveAspectRatio="xMidYMin slice"
                  className="transition-transform duration-[2200ms] ease-out -translate-x-6 group-hover/quote:translate-x-6"
                  style={{ filter: 'grayscale(100%) contrast(1.25) brightness(0.96)' }}
                />
              </g>
            </svg>
          </div>

          {/* Right: Crisp Dual-Tone Editorial Quote & Attribution Directly on HQX Yellow */}
          <div className="max-w-2xl text-center sm:text-left">
            <p
              style={{ fontFamily: '"Prata", serif' }}
              className="font-prata font-normal text-xl sm:text-2xl md:text-3xl lg:text-[34px] leading-[1.22] tracking-tight mb-5"
            >
              <span className="text-[#0A0A0A]/45">Work so hard that you</span>{' '}
              <br className="hidden sm:block" />
              <span className="text-[#0A0A0A]/45">have room only for</span>{' '}
              <em className="italic font-semibold text-[#0A0A0A]">calm</em>{' '}
              <br className="hidden sm:block" />
              <span className="text-[#0A0A0A]/45">over chaos</span>{' '}
              <span className="text-[#0A0A0A]">&mdash;</span>{' '}
              <em className="italic font-semibold text-[#0A0A0A]">discipline</em>{' '}
              <br className="hidden sm:block" />
              <span className="text-[#0A0A0A]/45">over distraction,</span>{' '}
              <em className="italic font-semibold text-[#0A0A0A]">purpose</em>{' '}
              <br className="hidden sm:block" />
              <span className="text-[#0A0A0A]/45">over pressure.&rdquo;</span>
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#0A0A0A]">
                &mdash; Manny Anchan
              </span>
              <span className="text-[11px] font-mono text-[#0A0A0A]/65 tracking-wider">
                Happiness Samurai
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pages 4-8 Matrix: Problem Identification vs. Interventions Framework */}
      {/* Problem Identification & Strategic Interventions Section */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-[#F8F9FA] border-b border-black/10">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10 pb-6 border-b border-black/10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A0A0A] leading-[1.08]">
                Problem Identification <br />
                <span className="text-[#666666] font-light">& Strategic Interventions</span>
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-black/65 max-w-md font-light leading-relaxed">
              Synthesizing root stressors and deploying validated behavioral and psychological architectures across 4 core operational domains.
            </p>
          </div>

          {/* Elevated Floating UI Canvas Card (Matching Reference Mockup) */}
          <div className="bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-black/5">

            {/* Top Bar: 4 Domain Tabs Right-Aligned (Segmented Pill Style Matching Reference Mockup) */}
            <div className="flex justify-end mb-8 pb-6 border-b border-black/5 overflow-x-auto">
              <div className="inline-flex items-center bg-[#EFF1F4] p-1.5 rounded-full shadow-inner-xs max-w-full overflow-x-auto">
                {Object.keys(matrixDomains).map((domainKey) => {
                  const dom = matrixDomains[domainKey];
                  const isSelected = activeDomain === domainKey;
                  return (
                    <button
                      key={domainKey}
                      onClick={() => setActiveDomain(domainKey)}
                      className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm md:text-[15px] font-display font-semibold transition-all duration-150 cursor-pointer flex items-center focus:outline-none whitespace-nowrap shrink-0 ${isSelected
                        ? 'bg-white text-neutral-900 shadow-[0_2px_8px_rgba(0,0,0,0.06)]'
                        : 'text-neutral-500 hover:text-neutral-900 bg-transparent'
                        }`}
                    >
                      {/* Zero-jerk glowing dot indicator (preserved geometry across states) */}
                      <span
                        className={`w-2.5 h-2.5 rounded-full shrink-0 mr-2 transition-all duration-150 ${isSelected
                          ? 'bg-gradient-to-r from-amber-500 to-yellow-400 shadow-[0_0_8px_rgba(255,154,36,0.6)] opacity-100 scale-100'
                          : 'opacity-0 scale-75'
                          }`}
                      />
                      <span>{dom.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Split Two-Card Container Side-by-Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

              {/* Left Card: The Problem Identification / Diagnostic Audit */}
              <div className="bg-[#F6F7F9] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-black/[0.04]">
                <div>
                  <h4 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 mb-3 leading-snug">
                    {currentDomain.problems[0]}
                  </h4>

                  <p className="font-body text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mb-6">
                    Chronic cognitive friction and unstructured recovery patterns trigger sustained cortisol elevations, destabilizing middle management and depleting executive decision velocity.
                  </p>

                  {/* Attribute Tags (Matching Reference v2.8.5, Open source, database) */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full bg-white text-xs font-mono text-black/70 border border-black/5 shadow-2xs">
                      Executive Audit
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white text-xs font-mono text-black/70 border border-black/5 shadow-2xs">
                      Somatic Friction
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white text-xs font-mono text-black/70 border border-black/5 shadow-2xs">
                      EBITDA Drag
                    </span>
                  </div>

                  {/* List of Audited Friction Items */}
                  <div className="space-y-2">
                    {currentDomain.problems.slice(1, 4).map((prob, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/70 mt-1.5 shrink-0" />
                        <span className="font-normal leading-relaxed">{prob}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Card: Strategic Interventions (Dark Charcoal / Black) */}
              <div className="bg-[#18191B] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl border border-white/10">
                <div>
                  <h4 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">
                    Validated HQX Architecture
                  </h4>

                  <p className="font-body text-xs sm:text-sm text-white/80 font-light leading-relaxed mb-6">
                    {currentDomain.interventions[0]}
                  </p>

                  {/* Secondary Interventions */}
                  <div className="space-y-2.5 mb-6">
                    {currentDomain.interventions.slice(1, 4).map((sol, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-hq-yellow mt-0.5 shrink-0" />
                        <span className="font-light leading-relaxed">{sol}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-white/40 text-xs font-mono">
                    HQX Behavioral Protocol • Empirically Calibrated
                  </div>
                </div>

                {/* Right Card Footer: Solution Button in Normal Case */}
                <div className="flex justify-end pt-6 border-t border-white/10 mt-6">
                  <Link
                    to="/well-being-ethos"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-hq-yellow hover:text-black transition-all shadow-sm"
                  >
                    <span>Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
