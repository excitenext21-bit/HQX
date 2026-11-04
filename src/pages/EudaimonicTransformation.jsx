import React, { useState } from 'react';
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
      image: '/profile_assets/page_4_img_2_311.jpeg',
      problems: [
        'Career uncertainty amidst rapid AI disruption and restructuring',
        'Difficulty in understanding purpose beyond mere financial survival',
        'Indecision, decision fatigue, and lack of intrinsic motivation',
        'Lack of financial literacy and long-term wealth stewardship',
        'Stagnation in personal development and leadership readiness'
      ],
      interventions: [
        'Finance Management & Psychology of Wealth literacy',
        'Networking & professional mentorship advice across sectors',
        'Time Management & 10x Productivity Architecture',
        'Purposeful Decision Making & strategic clarity roadmaps'
      ]
    },
    family: {
      id: 'family',
      label: 'Relation with Family',
      icon: HomeIcon,
      image: '/profile_assets/page_4_img_3_317.jpeg',
      problems: [
        'Lack of independence in decision making',
        'Generational gap and lack of understanding with modern youth',
        'Deep communication gaps between demanding work and home life',
        'Difficulty in expressing authentic thoughts and vulnerable feelings',
        'Imposing personal unfulfilled corporate ambitions on children',
        'Constant pressure to excel at work spilling over into family friction'
      ],
      interventions: [
        'Work-Life Balance integration protocols and emotional boundaries',
        'Modern Conscious Parenting with expert guidance (Soha Ali Khan)',
        'Social harmony at home through empathetic listening rituals'
      ]
    },
    social: {
      id: 'social',
      label: 'Social & Cultural Dynamics',
      icon: Users,
      image: '/profile_assets/page_4_img_4_323.jpeg',
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
      {/* Hero Banner with Authentic Profile Imagery */}
      <section className="bg-hq-black text-hq-white pt-36 pb-20 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-20 lg:opacity-35 pointer-events-none overflow-hidden">
          <img 
            src="/profile_assets/page_1_img_1_71.jpeg" 
            alt="Manny Anchan - Eudaimonic Transformation" 
            className="w-full h-full object-cover object-top filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hq-black via-hq-black/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold mb-5">
              Eudaimonic <br />
              <span className="text-hq-yellow">Transformation</span>
            </h1>
            
            <blockquote className="font-serif italic text-xl md:text-2xl text-hq-yellow mb-6">
              "To Simply Put: Those Who Work Better, Deliver Better."
            </blockquote>

            <p className="font-body text-base md:text-xl text-hq-white/80 font-light leading-relaxed mb-8">
              The <strong>HQ Functional Enhancement Model</strong> is a framework designed to boost corporate efficiency by encouraging individuals to develop effective habits and make informed decisions that enhance their professional performance and productivity.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/leadership-deep-dive" 
                className="bg-hq-yellow text-hq-black font-display font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white transition-all shadow-xl"
              >
                Book Leadership Deep Dive
              </Link>
              <Link 
                to="/contact" 
                className="border border-white/30 text-white font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all"
              >
                Request Enterprise Audit
              </Link>
            </div>
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
                  <p className="font-body text-xs text-white/80 leading-relaxed font-light">
                    {lever.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BALANCE within WORKLIFE: 5 Pivotal Elements (Page 3 of Profile) */}
      <section className="py-20 px-6 md:px-12 bg-hq-gray border-b border-hq-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-4">
              Perpetual Employee Evolution
            </h2>
            <p className="font-body text-base text-hq-black/75 font-light leading-relaxed">
              Perpetual employee evolution is a comprehensive notion that acknowledges the interrelation between various facets of an employee's life within a corporate setting. Here are the 5 pivotal elements contributing to organizational mastery:
            </p>
          </div>

          {/* Pillar Selector Tabs */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            {Object.keys(pillars).map((key) => {
              const p = pillars[key];
              const Icon = p.icon;
              const isActive = activePillar === key;
              return (
                <button
                  key={key}
                  onClick={() => setActivePillar(key)}
                  className={`flex items-center gap-2 px-6 py-3.5 border transition-all text-xs font-display uppercase tracking-widest font-semibold rounded-full ${
                    isActive 
                      ? 'bg-hq-black text-hq-white border-hq-black shadow-lg scale-105' 
                      : 'bg-white text-hq-black border-hq-black/15 hover:border-hq-yellow hover:bg-hq-yellow/10'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-hq-yellow' : 'text-hq-black'}`} />
                  <span>{key}</span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Detail Card */}
          <div className="bg-white p-8 md:p-12 border border-hq-black/15 shadow-2xl relative rounded-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-hq-black/10 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-hq-yellow flex items-center justify-center text-hq-black shrink-0">
                  <ActivePillarIcon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold">
                    {pillars[activePillar].title}
                  </h3>
                  <div className="text-xs font-mono text-hq-black/60 uppercase">
                    {pillars[activePillar].subtitle}
                  </div>
                </div>
              </div>
              <div className="bg-hq-black text-hq-yellow font-display font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full">
                {pillars[activePillar].metric}
              </div>
            </div>

            <p className="font-body text-lg text-hq-black/85 font-light mb-8 max-w-3xl leading-relaxed">
              {pillars[activePillar].summary}
            </p>

            <div className="space-y-3 mb-8">
              <div className="text-xs font-mono uppercase tracking-widest text-hq-black/50 font-semibold">
                Core Organizational Deliverables:
              </div>
              {pillars[activePillar].breakdown.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-hq-gray p-4 rounded-xl border border-hq-black/5">
                  <CheckCircle2 className="w-5 h-5 text-hq-yellow shrink-0 mt-0.5 bg-hq-black rounded-full p-0.5" />
                  <span className="font-body text-sm text-hq-black/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-hq-black/10 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-xs font-mono text-hq-black/60">
                Applicable for C-Suite, Managing Directors, and High-Potential Leaders
              </span>
              <Link 
                to="/contact" 
                className="bg-hq-yellow text-hq-black font-display font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-hq-black hover:text-white transition-all flex items-center gap-2"
              >
                <span>Deploy {pillars[activePillar].title.split('.')[1]} Framework</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Identification vs. Interventions Matrix (Page 4 of Profile Deck) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-hq-yellow/30 border border-hq-yellow text-hq-black text-xs font-mono uppercase tracking-widest rounded-full mb-3 font-bold">
            Profile Matrix • Page 4
          </div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight font-semibold mb-4">
            Problem Identification & Interventions
          </h2>
          <p className="font-body text-hq-black/70 max-w-2xl mx-auto font-light text-base">
            Detailed clinical diagnosis of root workplace dysfunctions mapped against proven eudaimonic transformation protocols.
          </p>
        </div>

        {/* Domain Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(matrixDomains).map((dKey) => {
            const d = matrixDomains[dKey];
            const DIcon = d.icon;
            const isSelected = activeDomain === dKey;
            return (
              <button
                key={dKey}
                onClick={() => setActiveDomain(dKey)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border text-xs font-display uppercase tracking-wider font-semibold transition-all ${
                  isSelected 
                    ? 'bg-hq-black text-hq-yellow border-hq-black shadow-xl' 
                    : 'bg-white text-hq-black/70 border-hq-black/15 hover:border-hq-black hover:text-hq-black'
                }`}
              >
                <DIcon className={`w-4 h-4 ${isSelected ? 'text-hq-yellow' : 'text-hq-black/60'}`} />
                <span>{d.label}</span>
              </button>
            );
          })}
        </div>

        {/* Domain Matrix Card */}
        <div className="bg-hq-gray border border-hq-black/15 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Visual Thumbnail & Domain Info */}
            <div className="w-full lg:w-4/12">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-hq-black/10 shadow-lg bg-hq-black/5">
                <img 
                  src={currentDomain.image} 
                  alt={currentDomain.label}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-hq-yellow text-hq-black flex items-center justify-center">
                  <DomainIcon className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="font-display text-2xl font-bold">
                  {currentDomain.label}
                </h3>
              </div>
              <p className="font-body text-xs text-hq-black/70 font-light leading-relaxed">
                By diagnosing deep root causes instead of superficial symptoms, the HQX framework creates structural change that lasts.
              </p>
            </div>

            {/* Problems vs Interventions Columns */}
            <div className="w-full lg:w-8/12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem Identification */}
              <div className="bg-white p-6 rounded-2xl border border-red-200/60 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-red-600 mb-4 pb-2 border-b border-red-100">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Identified Friction & Problems</span>
                </div>
                <ul className="space-y-3 font-body text-xs text-hq-black/80">
                  {currentDomain.problems.map((prob, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0"></span>
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Proven HQX Interventions */}
              <div className="bg-hq-black text-white p-6 rounded-2xl border border-black shadow-lg">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-hq-yellow mb-4 pb-2 border-b border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-hq-yellow" />
                  <span>HQX Interventions & Protocols</span>
                </div>
                <ul className="space-y-3 font-body text-xs text-white/90">
                  {currentDomain.interventions.map((inte, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-hq-yellow shrink-0 mt-0.5" />
                      <span>{inte}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 text-center bg-hq-yellow text-hq-black border-t border-hq-black">
        <h2 className="font-display text-4xl md:text-5xl tracking-tight font-semibold mb-4">
          Ready to Elevate Your Organization's Functional Quotient?
        </h2>
        <p className="font-body text-hq-black/80 max-w-xl mx-auto mb-8 font-light text-base">
          Speak with Manny Anchan directly to tailor an enterprise transformation roadmap for your executives.
        </p>
        <Link 
          to="/contact" 
          className="bg-hq-black text-hq-white font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-hq-black transition-all font-semibold shadow-xl"
        >
          Book Consultation Now (+91 97001 00800)
        </Link>
      </section>
    </div>
  );
}
