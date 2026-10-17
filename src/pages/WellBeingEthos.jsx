import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Heart, Users, Activity, Coins, ArrowRight, Check, Award, ShieldAlert, Sparkles } from 'lucide-react';

export default function WellBeingEthos() {
  const [activeScore, setActiveScore] = useState(78);

  const pillars = [
    {
      id: 'mental',
      name: 'Mental Pillar',
      icon: Brain,
      tagline: 'Cognitive Ergonomics & Attentional Architecture',
      overview: 'Focus is the new oil. In an attention-scarce economy, executives lose up to 4.2 hours daily to fractured attention and asynchronous communication noise.',
      practices: [
        '90-Minute Ultradian Deep Work rhythms',
        'Information detox and contextual communication hygiene',
        'Zero-inbox psychological closure habits before sleep'
      ],
      impact: '+34% increase in strategic output'
    },
    {
      id: 'emotional',
      name: 'Emotional Pillar',
      icon: Heart,
      tagline: 'Self-Regulation & Compassionate Stoicism',
      overview: 'Leaders project their emotional weather onto the entire department. Mastering affective regulation prevents toxic panic cascades during quarters of market volatility.',
      practices: [
        'Real-time somatic emotional labelling without judgment',
        'Radical psychological safety protocols in sprint post-mortems',
        'Constructive feedback architecture that preserves self-worth'
      ],
      impact: '-42% drop in leadership burnout'
    },
    {
      id: 'social',
      name: 'Social Pillar',
      icon: Users,
      tagline: 'Belonging, Camaraderie & De-Siloing',
      overview: 'Solitary achievements are fragile. High-performing companies cultivate fraternal trust where team members watch each other’s blindspots without political games.',
      practices: [
        'Weekly non-transactional connection circles',
        'Cross-departmental vulnerability dialogues',
        'Shared celebratory milestones transcending individual KPIs'
      ],
      impact: '+28% faster cross-functional delivery'
    },
    {
      id: 'physical',
      name: 'Physical Pillar',
      icon: Activity,
      tagline: 'Circadian Pacing, Movement & Nutrition',
      overview: 'The brain is a biological organ. Executive decisions made under chronic sleep debt and metabolic crash are quantitatively compromised by up to 60%.',
      practices: [
        'Circadian light exposure & sleep hygiene protocols for international travelers',
        'Desk-side micro-mobility and posture resets every 45 minutes',
        'Neuro-nutrition guidelines to prevent post-lunch cognitive drops'
      ],
      impact: '-31% reduction in unplanned corporate absenteeism'
    },
    {
      id: 'financial',
      name: 'Financial Pillar',
      icon: Coins,
      tagline: 'Stewardship, Value Harmony & Legacy',
      overview: 'Financial anxiety is a silent productivity assassin across all corporate income tiers. True wealth is the freedom from scarcity terror and alignment with legacy.',
      practices: [
        'Holistic corporate financial literacy and equity workshops',
        'Demystifying executive compensation and long-term security',
        'Aligning financial goals with intrinsic life priorities'
      ],
      impact: '+45% higher retention of high-potential talent'
    }
  ];

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Hero Header */}
      <section className="bg-hq-yellow text-hq-black pt-28 pb-20 px-6 md:px-12 border-b border-hq-black">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-xs uppercase tracking-widest font-semibold text-hq-black/60 mb-4">
            The Fundamental Philosophy
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter font-semibold mb-6">
            Those Who Feel Better <br />
            <span className="bg-hq-black text-hq-yellow px-3 py-1 inline-block mt-1">Work Better</span>
          </h1>
          <p className="font-body text-lg md:text-xl font-light text-hq-black/80 max-w-2xl leading-relaxed mb-8">
            Employee well-being is not a soft philanthropic bonus; it is the ultimate corporate lever of sustainable profitability, cognitive innovation, and brand resilience.
          </p>
          <div className="flex gap-4">
            <Link 
              to="/contact" 
              className="bg-hq-black text-hq-white font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all font-semibold shadow-xl"
            >
              Order An Enterprise Well-Being Audit
            </Link>
          </div>
        </div>
      </section>

      {/* 5 Pillars Deep Dive */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-hq-black/50 mb-2 font-semibold">
            Holistic Ecosystem
          </div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight font-semibold mb-4">
            The 5 Integrated Dimensions
          </h2>
          <p className="font-body text-hq-black/70 max-w-xl mx-auto font-light">
            Each pillar directly reinforces the others. Compromise one, and the entire structure experiences operational drag.
          </p>
        </div>

        <div className="space-y-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.id}
                className={`p-8 md:p-12 border border-hq-black/15 shadow-lg flex flex-col lg:flex-row gap-10 items-start ${
                  index % 2 === 1 ? 'bg-hq-gray' : 'bg-white'
                }`}
              >
                <div className="w-full lg:w-1/3">
                  <div className="w-16 h-16 rounded-2xl bg-hq-black text-hq-yellow flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h3 className="font-display text-3xl font-semibold mb-2">
                    {pillar.name}
                  </h3>
                  <div className="text-xs font-mono text-hq-black/60 uppercase mb-4 font-semibold">
                    {pillar.tagline}
                  </div>
                  <div className="bg-hq-yellow text-hq-black font-display text-xs uppercase tracking-wider font-bold px-3 py-1.5 rounded-full inline-block">
                    {pillar.impact}
                  </div>
                </div>

                <div className="w-full lg:w-2/3 border-t lg:border-t-0 lg:border-l border-hq-black/10 pt-6 lg:pt-0 lg:pl-10">
                  <p className="font-body text-base text-hq-black/80 font-light leading-relaxed mb-6">
                    {pillar.overview}
                  </p>
                  
                  <div className="text-xs font-mono uppercase tracking-widest text-hq-black/60 font-semibold mb-4">
                    Actionable Enterprise Protocols:
                  </div>

                  <ul className="space-y-3 font-body text-sm text-hq-black/85">
                    {pillar.practices.map((practice, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-hq-yellow shrink-0 mt-0.5 bg-hq-black rounded-full p-0.5" />
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Diagnostic Calculator / Interactive Assessment Teaser */}
      <section className="py-20 px-6 md:px-12 bg-hq-black text-hq-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-mono uppercase tracking-widest text-hq-yellow mb-3">
            Interactive Diagnostic Preview
          </div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight font-semibold mb-6">
            Calculate Your Organization's Happiness Quotient
          </h2>
          <p className="font-body text-hq-white/70 font-light max-w-xl mx-auto mb-10 text-base">
            Slide the dial to see the projected corporate savings and retention gains from deploying the 5-pillar ethos.
          </p>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl max-w-xl mx-auto mb-10 text-left">
            <div className="flex justify-between items-center mb-4 font-mono text-xs text-hq-white/70">
              <span>Estimated Team Baseline Well-Being:</span>
              <span className="text-hq-yellow font-bold text-lg">{activeScore}%</span>
            </div>
            <input 
              type="range" 
              min="40" 
              max="95" 
              value={activeScore}
              onChange={(e) => setActiveScore(Number(e.target.value))}
              className="w-full accent-hq-yellow h-2 bg-white/20 rounded-lg cursor-pointer mb-6"
            />
            
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-center font-display">
              <div className="p-3 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-hq-yellow">₹{((activeScore * 14000) / 10).toLocaleString()}</div>
                <div className="text-[10px] uppercase tracking-wider text-hq-white/60">Annual Savings per Employee</div>
              </div>
              <div className="p-3 bg-white/5 rounded-xl">
                <div className="text-2xl font-bold text-hq-white">+{Math.round((activeScore * 0.42))}%</div>
                <div className="text-[10px] uppercase tracking-wider text-hq-white/60">Estimated Retention Lift</div>
              </div>
            </div>
          </div>

          <Link 
            to="/contact" 
            className="bg-hq-yellow text-hq-black font-display font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white transition-all shadow-xl inline-flex items-center gap-2"
          >
            <span>Request Full Corporate Diagnostic Report</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
