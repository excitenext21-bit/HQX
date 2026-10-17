import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Crown, GitMerge, Shield, Target, Move, ArrowRight, CheckCircle2, ChevronRight, BarChart3, Sparkles } from 'lucide-react';

export default function EudaimonicTransformation() {
  const [activeTab, setActiveTab] = useState('leadership');

  const pillars = {
    leadership: {
      title: '01. Personal & Enterprise Leadership',
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
      title: '02. Cognitive Adaptability & Agility',
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
      title: '03. Biological & Mental Resilience',
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
      title: '04. The Architecture of Discipline',
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
      title: '05. Strategic & Relational Flexibility',
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

  const ActiveIcon = pillars[activeTab].icon;

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Hero Banner */}
      <section className="bg-hq-black text-hq-white pt-28 pb-20 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-hq-yellow/20 border border-hq-yellow/40 rounded-full text-hq-yellow text-xs font-mono uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Science of Flourishing</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter font-semibold mb-6">
            Eudaimonic <br />
            <span className="text-hq-yellow">Transformation</span>
          </h1>
          <p className="font-body text-base md:text-xl text-hq-white/80 max-w-2xl font-light leading-relaxed mb-8">
            Moving beyond temporary hedonic perks like beanbags and pizzas. Eudaimonia represents deep, purpose-driven flourishing where high performance is the natural byproduct of wholeness.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/leadership-deep-dive" 
              className="bg-hq-yellow text-hq-black font-display font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white transition-all shadow-xl"
            >
              Book Corporate Immersion
            </Link>
            <Link 
              to="/contact" 
              className="border border-white/30 text-white font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all"
            >
              Request Leadership Diagnostic
            </Link>
          </div>
        </div>
      </section>

      {/* Model Definition & Theory */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-hq-black/50 mb-3 font-semibold">
              Aristotelian Roots • Modern Neuroscience
            </div>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight font-semibold mb-6">
              Hedonia vs. Eudaimonia in Corporate Cultures
            </h2>
            <div className="space-y-4 font-body text-hq-black/75 font-light text-base leading-relaxed">
              <p>
                Most corporate wellness efforts fail because they operate on a <strong>hedonic</strong> paradigm: offering transient distractions, casual Fridays, and superficial perks to numb chronic workplace exhaustion.
              </p>
              <p>
                <strong>Eudaimonia</strong>, first coined by Aristotle and validated by modern neuroscience, is the condition of human flourishing achieved through purposeful action, continuous virtue refinement, and cognitive mastery.
              </p>
              <p>
                The <strong>HQ Functional Enhancement Model</strong> systematizes this shift into five reproducible corporate pillars designed over 25 years of advising Fortune 500 boards and C-suites.
              </p>
            </div>
          </div>

          {/* Comparative Table */}
          <div className="bg-hq-gray p-8 border border-hq-black/15 shadow-xl">
            <h3 className="font-display text-lg tracking-wider mb-6 font-semibold pb-4 border-b border-hq-black/10">
              The Paradigm Shift
            </h3>
            <div className="space-y-4 text-xs font-body">
              <div className="grid grid-cols-2 gap-4 pb-3 border-b border-hq-black/10">
                <span className="font-mono uppercase text-hq-black/50">Traditional Hedonic Corporate</span>
                <span className="font-mono uppercase text-hq-black font-bold">HQX Eudaimonic Model</span>
              </div>
              <div className="grid grid-cols-2 gap-4 pb-3 border-b border-hq-black/10">
                <span className="text-hq-black/70">Perks to endure grueling stress</span>
                <span className="font-semibold text-hq-black">Protocols that neutralize stress etiology</span>
              </div>
              <div className="grid grid-cols-2 gap-4 pb-3 border-b border-hq-black/10">
                <span className="text-hq-black/70">Extrinsic rewards and fear-based quotas</span>
                <span className="font-semibold text-hq-black">Intrinsic alignment with enterprise legacy</span>
              </div>
              <div className="grid grid-cols-2 gap-4 pb-3 border-b border-hq-black/10">
                <span className="text-hq-black/70">Reactive burnout crisis interventions</span>
                <span className="font-semibold text-hq-black">Proactive cognitive & somatic stamina habits</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <span className="text-hq-black/70">Siloed departments competing internally</span>
                <span className="font-semibold text-hq-black">High-trust psychological safety ecosystems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 5 Pillars Explorer */}
      <section className="py-20 px-6 md:px-12 bg-hq-gray border-t border-b border-hq-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl tracking-tight font-semibold mb-4">
              The 5 Pillars of the Functional Enhancement Model
            </h2>
            <p className="font-body text-hq-black/70 max-w-xl mx-auto font-light">
              Click through each pillar to explore the underlying operational protocols and proven enterprise metrics.
            </p>
          </div>

          {/* Pillar Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.keys(pillars).map((key) => {
              const p = pillars[key];
              const Icon = p.icon;
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-2 px-6 py-3.5 border transition-all text-xs font-display uppercase tracking-widest font-semibold ${
                    isActive 
                      ? 'bg-hq-black text-hq-white border-hq-black shadow-lg shadow-black/20 scale-105' 
                      : 'bg-white text-hq-black border-hq-black/20 hover:border-hq-yellow hover:bg-hq-yellow/10'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-hq-yellow' : 'text-hq-black'}`} />
                  <span>{key}</span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Card */}
          <div className="bg-white p-8 md:p-12 border border-hq-black/15 shadow-2xl relative">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-6 border-b border-hq-black/10 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-hq-yellow flex items-center justify-center text-hq-black shrink-0">
                  <ActiveIcon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold">
                    {pillars[activeTab].title}
                  </h3>
                  <div className="text-xs font-mono text-hq-black/60 uppercase">
                    {pillars[activeTab].subtitle}
                  </div>
                </div>
              </div>
              <div className="bg-hq-black text-hq-yellow font-display font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full">
                {pillars[activeTab].metric}
              </div>
            </div>

            <p className="font-body text-lg text-hq-black/85 font-light mb-8 max-w-3xl leading-relaxed">
              {pillars[activeTab].summary}
            </p>

            <div className="space-y-4 mb-8">
              <div className="text-xs font-mono uppercase tracking-widest text-hq-black/50 font-semibold">
                Core Organizational Deliverables:
              </div>
              {pillars[activeTab].breakdown.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-hq-gray p-4 rounded-xl border border-hq-black/5">
                  <CheckCircle2 className="w-5 h-5 text-hq-yellow shrink-0 mt-0.5" />
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
                <span>Deploy {pillars[activeTab].title.split('.')[1]} Framework</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 text-center bg-hq-white">
        <h2 className="font-display text-4xl md:text-5xl tracking-tight font-semibold mb-4">
          Ready to Elevate Your Organization's Functional Quotient?
        </h2>
        <p className="font-body text-hq-black/70 max-w-xl mx-auto mb-8 font-light">
          Speak with Manny Anchan and the HQX advisory faculty to tailor an intervention plan for your executive teams.
        </p>
        <Link 
          to="/contact" 
          className="bg-hq-black text-hq-white font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-hq-yellow hover:text-hq-black transition-all font-semibold"
        >
          Book Consultation Now
        </Link>
      </section>
    </div>
  );
}
