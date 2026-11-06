import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight,
  ChevronLeft,
  ChevronRight, 
  Sparkles, 
  Landmark, 
  Cpu, 
  Factory, 
  GraduationCap, 
  Layers, 
  Globe, 
  Building2,
  TrendingUp,
  ShieldCheck,
  Brain,
  Award,
  Calendar,
  RotateCcw
} from 'lucide-react';
import { STATES_COVERED, GLOBAL_FOOTPRINT_COUNTRIES } from '../context/DataContext';
import CorporatePartnersMarquee from '../components/common/CorporatePartnersMarquee';
import GlobalFootprintMapSection from '../components/common/GlobalFootprintMapSection';

export default function WhyHQX() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);
  const [heroStep, setHeroStep] = useState(0); // 0: Think, 1: Feel, 2: Perform
  const videoRef = useRef(null);

  useEffect(() => {
    const checkTime = () => {
      const video = videoRef.current;
      if (!video) return;
      const t = video.currentTime;
      if (t < 2.4) {
        setHeroStep(0);
      } else if (t < 5.0) {
        setHeroStep(1);
      } else {
        setHeroStep(2);
      }
    };

    const interval = setInterval(checkTime, 100);
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', checkTime);
    }

    return () => {
      clearInterval(interval);
      if (video) {
        video.removeEventListener('timeupdate', checkTime);
      }
    };
  }, []);

  const getStepStyle = (stepIndex) => {
    const isCurrent = heroStep === stepIndex;

    if (isCurrent) {
      return {
        color: '#FFCE00',
        textShadow: '0 0 14px rgba(255,206,0,0.95), 0 0 28px rgba(255,206,0,0.8), 0 0 50px rgba(255,206,0,0.55)',
        transform: 'scale(1.05)',
      };
    }
    return {
      color: 'rgba(255, 255, 255, 0.7)',
      textShadow: 'none',
      transform: 'scale(1)',
    };
  };

  const getDotStyle = () => ({
    color: 'rgba(255, 255, 255, 0.35)',
    textShadow: 'none',
  });

  const IMPACTED_INDUSTRIES = [
    {
      num: '01',
      id: 'finance',
      title: 'Banking, Capital Markets & Legal',
      category: 'Finance & Corporate Governance',
      image: '/images/hero_showcase/manny_absa_bank.jpg',
      whatWeDid: 'HQX architected comprehensive C-suite alignment conclaves, high-stakes cognitive resilience retreats, and psychological safety frameworks for senior investment bankers, wealth managers, and legal partners. We immersed cross-border dealmakers in physiological stress-inoculation protocols, emotion-regulation rituals, and high-velocity focus sessions tailored to the intense demands of M&A execution and market volatility.',
      howItWasImpactful: 'Our eudaimonic intervention dismantled chronic burnout patterns across trading desks and advisory practices, elevating cognitive poise under severe regulatory scrutiny. Partner institutions reported a 42% decrease in senior talent attrition, superior collaborative clarity across regional hubs, and unified executive stewardship that directly safeguarded multi-billion-dollar portfolio mandates.',
      metric: '15+ Global Investment Banks & Legal Bastions',
      brandLogos: [
        {
          name: 'Barclays',
          svg: (
            <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.5c-.8 0-1.5.7-1.5 1.5 0 .3.1.5.2.7L7 7.5l-4-1 2 4.5-3 2 4.5 1L7 19h10l.5-5 4.5-1-3-2 2-4.5-4 1-3.7-2.8c.1-.2.2-.4.2-.7 0-.8-.7-1.5-1.5-1.5zm0 4.5l2 2.5h-4l2-2.5zm-3 4h6l1.5 3h-9l1.5-3zm.5 4.5h5l.5 2h-6l.5-2z"/>
            </svg>
          )
        },
        {
          name: 'HDFC Life',
          svg: (
            <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2.5" y="2.5" width="19" height="19" rx="2" fill="none" stroke="currentColor" strokeWidth="2.2" />
              <path d="M7 7h10v3h-3.5v4H17v3H7v-3h3.5v-4H7V7z" />
            </svg>
          )
        },
        {
          name: 'Absa Bank',
          svg: (
            <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="2" />
              <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="800" fontFamily="sans-serif" fill="currentColor">a</text>
            </svg>
          )
        },
        {
          name: 'Ageas Federal',
          svg: (
            <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.5 6.5L21 11l-5.5 4.5L17 22l-5-3.5L7 22l1.5-6.5L3 11l6.5-2.5L12 2z" />
            </svg>
          )
        },
        {
          name: 'Shardul Amarchand',
          svg: (
            <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3L4 9v12h16V9l-8-6zm0 3.5l5 3.8v7.7H7v-7.7l5-3.8z" />
            </svg>
          )
        }
      ]
    },
    {
      num: '02',
      id: 'tech',
      title: 'DeepTech, AI & Life Sciences',
      category: 'Innovation, Frontier Tech & Healthcare',
      image: '/images/hero_showcase/manny_retreat_synergy.jpg',
      whatWeDid: 'HQX embedded our proprietary 5-Pillar Eudaimonic Architecture inside high-velocity engineering pods, AI research laboratories, and clinical biotechnology teams. We implemented cognitive decompression sessions, asynchronous focus cycles, and empathetic team communication protocols designed to neutralize the relentless stress of rapid sprint iterations and complex drug discovery timelines.',
      howItWasImpactful: 'By replacing chronic panic-driven hustle with grounded inner vitality, technical organizations recorded an audited +31% productivity surge and a marked eradication of developer exhaustion. High-consequence engineering teams maintained accelerated code deployments and clinical trial breakthroughs while experiencing near-zero turnover among mission-critical principal architects.',
      metric: 'High-Velocity Exponential Engineering & Life Science Pods',
      brandLogos: [
        {
          name: 'Cipla',
          svg: (
            <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M12 6v12M6 12h12M8 8l8 8M8 16l8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )
        },
        {
          name: 'NetApp',
          svg: (
            <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h4v16H4V4zm6 0h4v16h-4V4zm6 0h4v16h-4V4z" />
            </svg>
          )
        },
        {
          name: 'Mango Sciences',
          svg: (
            <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M7 16V8l5 5 5-5v8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )
        },
        {
          name: 'Turtlemint Pro',
          svg: (
            <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M8 8h8v3h-2.5v5h-3v-5H8V8z" />
            </svg>
          )
        }
      ]
    },
    {
      num: '03',
      id: 'industry',
      title: 'Manufacturing, Infrastructure & Energy',
      category: 'Industrial Scale, Heavy Engineering & EPC',
      image: '/images/hero_showcase/manny_founder_podium.jpg',
      whatWeDid: 'Operating across massive industrial assembly plants, energy transmission grids, and heavy automotive facilities spanning over 250,000 frontline professionals, HQX deployed systemic operational stamina protocols. We coached plant directors, shift supervisors, and field technicians in physical-emotional vitality, shift-transition ergonomics, and collaborative safety mindsets.',
      howItWasImpactful: 'The holistic initiative built an enduring bridge between shop-floor reality and executive boardrooms. Facilities logged substantial reductions in fatigue-related safety incidents, smoother cross-shift handoffs, and an elevated esprit de corps that bolstered plant uptime, supply-chain resilience, and frontline organizational pride.',
      metric: '250,000+ Plant & Field Professionals Catalyzed',
      brandLogos: [
        {
          name: 'TATA Motors',
          svg: (
            <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 32 32" fill="currentColor">
              <path d="M16 3C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm0 2.4c5.85 0 10.6 4.75 10.6 10.6S21.85 26.6 16 26.6 5.4 21.85 5.4 16 10.15 5.4 16 5.4zm-6.2 5.2c.4 1.8 1.9 6.2 3.8 9.8h4.8c1.9-3.6 3.4-8 3.8-9.8-1.8-.5-4.2-.8-6.2-.8s-4.4.3-6.2.8zm3.6 2.1c.8-.1 1.7-.2 2.6-.2s1.8.1 2.6.2c-.6 1.8-1.5 4.3-2.6 6.5-1.1-2.2-2-4.7-2.6-6.5z" />
            </svg>
          )
        },
        {
          name: 'APAR Industries',
          svg: (
            <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 22h20L12 2zm0 5l6 12H6l6-12z" />
            </svg>
          )
        },
        {
          name: 'Burns & McDonnell',
          svg: (
            <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2.5" y="2.5" width="19" height="19" rx="3" />
              <path d="M7 7h4a2 2 0 010 4H7v6h5a2.5 2.5 0 000-5H7M15 7l2 5 2-5v10" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )
        },
        {
          name: 'IndiGo Airlines',
          svg: (
            <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="5" cy="16" r="1.5" /><circle cx="9" cy="14" r="1.5" /><circle cx="13" cy="12" r="1.5" /><circle cx="17" cy="10" r="1.5" /><circle cx="21" cy="8" r="1.5" />
            </svg>
          )
        }
      ]
    },
    {
      num: '04',
      id: 'academia',
      title: 'Elite Academia & Global Institutions',
      category: 'Higher Education, Leadership Conclaves & Youth',
      image: '/images/hero_showcase/manny_tedx_katra_stage.jpg',
      whatWeDid: 'Through flagship keynote addresses, Ivy League forums, and MBA masterclasses at premier business schools and global school networks, HQX confronted the epidemic of transactional achievement anxiety. We engaged aspiring corporate leaders in eudaimonic ethics, purposeful self-discovery, and sustainable leadership philosophies.',
      howItWasImpactful: 'Graduating cohorts and faculty members gained enduring psychological foundations to navigate cutthroat corporate arenas without sacrificing personal well-being or integrity. Participating institutions noted significant improvements in student resilience indicators and launched dedicated mindfulness and purpose initiatives inspired by our engagements.',
      metric: '18+ Premier Academic Bastions & Global Forums',
      brandLogos: [
        {
          name: 'Harvard Club',
          svg: (
            <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L4 5v6c0 5.5 3.5 10.2 8 11 4.5-.8 8-5.5 8-11V5l-8-3zm-3 6h2v3h2V8h2v8h-2v-3h-2v3H9V8z" />
            </svg>
          )
        },
        {
          name: 'IIM',
          svg: (
            <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h16v3H4V4zm3 5h10v11H7V9zm2 2v7h6v-7H9z" />
            </svg>
          )
        },
        {
          name: 'Masters Union',
          svg: (
            <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l9 5v10l-9 5-9-5V7l9-5zm0 3.2L5.5 8.7v6.6l6.5 3.6 6.5-3.6V8.7L12 5.2z" />
            </svg>
          )
        }
      ]
    }
  ];


  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* HERO SECTION WITH CINEMATIC LIGHT PORTAL BACKGROUND (FIT TO SCREEN) */}
      <section className="bg-[#07080A] text-hq-white relative overflow-hidden h-screen min-h-[640px] max-h-[1080px] w-full flex flex-col justify-between border-b border-white/10">
        {/* Cinematic Background Video: Man Walking Toward Portal & Looking Outside */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <video
            ref={videoRef}
            src="/videos/why_hqx_walking_portal.mp4"
            poster="/images/why-hqx-man-think.jpg"
            autoPlay
            loop
            muted
            playsInline
            onTimeUpdate={(e) => {
              const t = e.currentTarget.currentTime;
              if (t < 2.4) {
                setHeroStep(0);
              } else if (t < 5.0) {
                setHeroStep(1);
              } else {
                setHeroStep(2);
              }
            }}
            className="w-full h-full object-cover object-[72%_center] lg:object-[68%_center]"
          />
          {/* Multi-tier Contrast Scrim Overlays */}
          {/* Left-to-right gradient to guarantee crystal-clear contrast for headline & narrative */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07080A]/95 via-[#07080A]/85 sm:via-[#07080A]/70 lg:via-[#07080A]/40 to-transparent"></div>
          {/* Mobile dark wash for narrow screens */}
          <div className="absolute inset-0 bg-[#07080A]/45 lg:hidden"></div>
          {/* Top seam fade beneath fixed navbar */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#07080A] via-[#07080A]/60 to-transparent"></div>
          {/* Bottom seam fade into docked stats strip */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07080A] via-[#07080A]/80 to-transparent"></div>
        </div>

        {/* Left Side Vertical Text: WHY HQX */}
        <div className="absolute left-3 sm:left-6 lg:left-8 xl:left-12 inset-y-0 z-20 flex flex-col justify-center items-center pointer-events-none select-none">
          <div 
            className="flex items-center gap-3 sm:gap-4"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span className="font-display text-[11px] sm:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-hq-yellow drop-shadow-md">
              WHY HQX
            </span>
            <span className="w-px h-8 sm:h-14 bg-white/25"></span>
          </div>
        </div>

        {/* Main Content Area (Vertically Centered in Viewport) */}
        <div className="max-w-7xl mx-auto pl-12 pr-6 sm:pl-16 sm:pr-8 md:pl-20 md:pr-12 lg:pl-24 relative z-10 w-full flex-1 flex flex-col justify-center pt-28 sm:pt-32 pb-8">
          <div className="max-w-md">
            {/* Editorial Headline with luminous yellow neon glow synchronized to man animation actions */}
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight leading-[1.15] mb-5 select-none">
              <span 
                style={getStepStyle(0)}
                className="transition-all duration-500 inline-block font-bold"
              >
                Think
              </span>

              <span 
                style={getDotStyle(1)}
                className="mx-2 sm:mx-2.5 transition-all duration-500 inline-block"
              >
                .
              </span>

              <span 
                style={getStepStyle(1)}
                className="transition-all duration-500 inline-block font-bold"
              >
                Feel
              </span>

              <span 
                style={getDotStyle(2)}
                className="mx-2 sm:mx-2.5 transition-all duration-500 inline-block"
              >
                .
              </span>

              <span 
                style={getStepStyle(2)}
                className="transition-all duration-500 inline-block font-bold"
              >
                Perform
              </span>
            </h1>

            {/* Lead Narrative matching About Us font properties */}
            <p className="font-body text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8 drop-shadow-sm">
              HQX delivers systematic eudaimonic transformation rooted in neuroscience, organizational psychology, and proven C-suite stewardship.
            </p>

            {/* Signature HQX Hero Button (Matching Founder & Home Hero Style) */}
            <div className="pt-1">
              <Link
                to="/about-us"
                className="group relative inline-flex items-center justify-between gap-8 py-3.5 px-2 font-display font-medium text-xs tracking-[0.2em] text-white hover:text-hq-yellow transition-colors duration-300 uppercase"
              >
                {/* Top hairline border line */}
                <span className="absolute top-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />

                <span className="relative z-10 font-semibold tracking-widest">EXPLORE METHODOLOGY</span>

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
              </Link>
            </div>
          </div>
        </div>

        {/* DOCKED STATS & REPUTATION TICKER STRIP (EXACT SAME AS FOUNDER HERO SECTION) */}
        <div className="w-full bg-[#0A0A0A]/95 backdrop-blur-md text-white/80 py-3.5 sm:py-4 px-6 md:px-12 border-t border-white/10 overflow-hidden relative z-20">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs font-mono uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">+31%</span>
              <span className="text-white/70">Productivity Lift</span>
            </div>
            <span className="text-white/20 hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">-28%</span>
              <span className="text-white/70">Executive Burnout</span>
            </div>
            <span className="text-white/20 hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">25+ Yrs</span>
              <span className="text-white/70">Fortune Executive DNA</span>
            </div>
            <span className="text-white/20 hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">100 Days</span>
              <span className="text-white/70">Behavioral Rewiring</span>
            </div>
          </div>
        </div>
      </section>



{/* WHY CHOOSE US / SUPPORTIVE GUIDANCE SHOWCASE (FIT TO SCREEN) */}
      <section className="min-h-[100svh] lg:h-screen lg:min-h-[640px] lg:max-h-[1080px] px-6 md:px-12 bg-[#FAF8F5] border-b border-black/10 flex flex-col justify-center py-10 lg:py-12">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center space-y-8 sm:space-y-10 lg:space-y-12">
          
          {/* Section Header: Dual-Tone Title & Top Narrative (Exact Same As The Experts Behind Your Care Design) */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-6 lg:pb-8 border-b border-black/10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] dark:text-white leading-[1.08]">
                Supportive Guidance <br />
                <span className="text-[#666666] dark:text-white/60 font-light">You Can Count On</span>
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-hq-black/65 max-w-md font-light leading-relaxed lg:pb-1">
              From everyday stress to life's biggest challenges, our caring professionals are here to guide you with personalized support and evidence-based approaches.
            </p>
          </div>

          {/* Bottom Tier: Left 3 Stat Rows + Right 2x2 Feature Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: 3 Metric Rows */}
            <div className="lg:col-span-6 flex flex-col divide-y divide-black/10 border-b border-black/10">
              <div className="py-4 sm:py-5 lg:py-6 flex items-center justify-between">
                <span className="font-display text-base sm:text-lg text-[#1E1915] font-medium">Happy Clients</span>
                <span className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1915]">120K+</span>
              </div>
              <div className="py-4 sm:py-5 lg:py-6 flex items-center justify-between">
                <span className="font-display text-base sm:text-lg text-[#1E1915] font-medium">Sessions Completed</span>
                <span className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1915]">200K+</span>
              </div>
              <div className="py-4 sm:py-5 lg:py-6 flex items-center justify-between">
                <span className="font-display text-base sm:text-lg text-[#1E1915] font-medium">Expert Therapists</span>
                <span className="font-display text-2xl sm:text-3xl font-semibold text-[#1E1915]">50+</span>
              </div>
            </div>

            {/* Right Column: 2x2 Feature Grid with Crosshair Dividers */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2">
              
              {/* Feature 1: Personalized Care */}
              <div className="p-5 sm:p-6 lg:p-7 sm:border-r sm:border-b border-black/10">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#EFECE6] text-[#6E645A] flex items-center justify-center mb-4 shadow-xs">
                  <Brain className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-medium text-[#1E1915] mb-1.5">
                  Personalized Care
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#6E6660] font-light leading-relaxed">
                  Customized wellness plans tailored to your personal goals.
                </p>
              </div>

              {/* Feature 2: Expert Therapist */}
              <div className="p-5 sm:p-6 lg:p-7 sm:border-b border-black/10 border-t sm:border-t-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#EFECE6] text-[#6E645A] flex items-center justify-center mb-4 shadow-xs">
                  <Award className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-medium text-[#1E1915] mb-1.5">
                  Expert Therapist
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#6E6660] font-light leading-relaxed">
                  Certified therapists focused on your mental wellness journey.
                </p>
              </div>

              {/* Feature 3: Flexible Across */}
              <div className="p-5 sm:p-6 lg:p-7 sm:border-r border-black/10 border-t sm:border-t-0">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#EFECE6] text-[#6E645A] flex items-center justify-center mb-4 shadow-xs">
                  <Calendar className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-medium text-[#1E1915] mb-1.5">
                  Flexible Across
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#6E6660] font-light leading-relaxed">
                  Insurance-friendly with flexible online and in-person appointments.
                </p>
              </div>

              {/* Feature 4: Proven Support */}
              <div className="p-5 sm:p-6 lg:p-7 border-t sm:border-t-0 border-black/10">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#EFECE6] text-[#6E645A] flex items-center justify-center mb-4 shadow-xs">
                  <RotateCcw className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-display text-base sm:text-lg font-medium text-[#1E1915] mb-1.5">
                  Proven Support
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#6E6660] font-light leading-relaxed">
                  Trusted care backed by 24/7 crisis support whenever needed.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      
            {/* 4 PILLARS OF DISTINCTION - ULTRA-MODERN UNBOXED EDITORIAL ARCHITECTURE (MINIMIZED BOTTOM WHITE SPACE) */}
      <section className="pt-16 sm:pt-20 pb-8 sm:pb-10 px-6 md:px-12 bg-white border-b border-hq-black/10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header: Dual-Tone Title & Top Narrative (Matches Supportive Guidance style) */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-black/10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] leading-[1.08]">
                The Four Pillars <br />
                <span className="text-[#666666] font-light">of Distinction</span>
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-hq-black/65 max-w-md font-normal leading-relaxed lg:pb-1">
              Moving beyond superficial wellness trends to engineer compounding executive resilience, ethical governance, and quantified EBITDA growth.
            </p>
          </div>

          {/* Open Architectural Horizontal Rows (No Box Style - Clean Zero Margin Below Pillar 4) */}
          <div className="divide-y divide-hq-black/15 mb-0">
            {[
              {
                num: '01',
                title: 'Eudaimonia Over Superficial Hedonism',
                subtitle: 'Deep Purpose Alignment vs Fleeting Transactional Perks',
                desc: "Generic corporate wellness programs offer transactional perks—pizza lunches, gym discounts, or meditation apps with single-digit retention. HQX cultivates Aristotle's classical Eudaimonia (human flourishing through purpose, virtue, and self-realization), eradicating employee cynicism at its structural root.",
                metric: 'Sustained Inner Vitality',
                tag: 'Aristotelian Ethics'
              },
              {
                num: '02',
                title: 'Real C-Suite DNA & Boardroom Fluency',
                subtitle: '25+ Years at GE Capital, Barclays, ABN AMRO & HDFC Bank',
                desc: 'HQX was founded not by theoretical life coaches, but by an executive with 25 years of global management. Our sessions speak the rigorous language of EBITDA, talent retention, executive succession, and quarterly accountability.',
                metric: 'Fortune Executive Credibility',
                tag: 'Global Leadership'
              },
              {
                num: '03',
                title: 'Measurable Enterprise ROI',
                subtitle: 'Quantified Behavioral Blueprints & Proven Financial Uplift',
                desc: 'We believe happiness without measurement is mere wishful thinking. Our 100-day structured habit architecture delivers clear, quantified organizational ROI across productivity uplift, reduced stress absenteeism, and elevated team retention.',
                metric: '+31% Productivity Surge',
                tag: 'Evidence-Based ROI'
              },
              {
                num: '04',
                title: 'Proprietary 5-Pillar Holistic Architecture',
                subtitle: 'Integrated Ecosystem: Mental, Emotional, Physical, Financial & Values',
                desc: 'Human beings are complex ecosystems. A weakness in financial anxiety or emotional poise drags down physical vitality and leadership capacity. Our 5-Pillar framework treats the whole executive, creating compounding positive feedback loops.',
                metric: '360° Compounding Impact',
                tag: 'Systemic Framework'
              }
            ].map((pillar, idx) => (
              <div 
                key={idx}
                className="group py-8 sm:py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12 hover:bg-hq-gray/30 -mx-4 sm:-mx-6 px-4 sm:px-6 transition-colors duration-300"
              >
                {/* Number & Pillar Title */}
                <div className="flex items-start sm:items-center gap-5 sm:gap-7 w-full lg:w-4/12">
                  <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-black/20 group-hover:text-[#FFCE00] font-normal transition-colors duration-300 shrink-0">
                    {pillar.num}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A7067] font-semibold block mb-1">
                      {pillar.tag}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl lg:text-[22px] font-semibold text-[#1E1915] group-hover:translate-x-1 transition-transform duration-300 leading-snug">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Narrative Description */}
                <div className="w-full lg:w-5/12 font-body text-xs sm:text-sm text-[#4A4540] font-normal leading-relaxed pr-2">
                  {pillar.desc}
                </div>

                {/* Metric Chip (Redesigned Executive Proof Capsule) */}
                <div className="w-full lg:w-3/12 flex lg:justify-end shrink-0">
                  <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-full bg-[#FAF8F5] border border-black/10 group-hover:border-black group-hover:bg-[#1E1A17] transition-all duration-300 shadow-xs">
                    <span className="w-5 h-5 rounded-full bg-[#FFCE00]/25 text-[#1E1A17] group-hover:bg-[#FFCE00] group-hover:text-black flex items-center justify-center shrink-0 transition-colors duration-300">
                      <CheckCircle2 className="w-3 h-3 stroke-[2.2]" />
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1E1915] group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                      {pillar.metric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOW HQX COMPARES (FULL BG BLACK - FIT TO SCREEN WITHOUT VERTICAL SCROLL) */}
      <section className="min-h-[100svh] lg:h-screen lg:min-h-[600px] lg:max-h-[1080px] px-6 md:px-12 bg-black text-white border-b border-white/10 relative overflow-hidden flex flex-col justify-center py-6 sm:py-8 lg:py-8">
        {/* Subtle Ambient Radial Highlight */}
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[700px] h-[700px] bg-[#FFCE00]/[0.02] rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center space-y-4 sm:space-y-5 lg:space-y-6 relative z-10">
          
          {/* Section Header: Dual-Tone Title & Top Narrative (Matches Supportive Guidance layout) */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 pb-4 sm:pb-5 lg:pb-6 border-b border-white/10">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-[1.08]">
                How HQX™ <br />
                <span className="text-white/60 font-light">Compares</span>
              </h2>
            </div>
            <p className="font-body text-xs sm:text-sm lg:text-[14.5px] text-white/70 max-w-md font-normal leading-relaxed lg:pb-1">
              Why traditional corporate wellness efforts fail to move organizational needles, and how our eudaimonic architecture delivers compounding bottom-line value.
            </p>
          </div>

          {/* Full-Width Comparison Table (No vertical scroll inside section) */}
          <div className="overflow-x-auto overflow-y-hidden">
            <div className="min-w-[640px] relative py-1">
              
              {/* Continuous Highlighted Capsule Track for HQX Column (Contained within bounds) */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[18%] bg-white/[0.08] border border-white/[0.08] rounded-[20px] pointer-events-none" />

              {/* Table Header */}
              <div className="grid grid-cols-12 items-center pb-4 sm:pb-5 border-b border-white/10 text-white relative z-10">
                <div className="col-span-5 text-xs font-mono uppercase tracking-wider font-bold text-white/70">
                  DIMENSION / CRITERIA
                </div>
                <div className="col-span-2 flex justify-center items-center">
                  <span className="inline-flex items-center justify-center px-3.5 py-1 rounded-full border border-[#FFCE00]/50 bg-[#FFCE00]/15 text-xs font-bold tracking-wider text-[#FFCE00] shadow-xs uppercase">
                    HQX™
                  </span>
                </div>
                <div className="col-span-2 text-center text-xs font-bold uppercase tracking-wider text-white leading-snug px-1">
                  LEADING<br />CORPORATE WELLNESS
                </div>
                <div className="col-span-3 text-center text-xs font-bold uppercase tracking-wider text-white leading-snug px-1">
                  ALL-IN-ONE<br />APPS & PERKS
                </div>
              </div>

              {/* Table Body Rows */}
              <div className="divide-y divide-white/[0.06] relative z-10">
                {[
                  { 
                    feature: 'Stress resilience & foundational vitality', 
                    hqx: true, 
                    traditional: true, 
                    apps: true 
                  },
                  { 
                    feature: 'Aristotelian Eudaimonia & deep purpose alignment', 
                    hqx: true, 
                    traditional: false, 
                    apps: false 
                  },
                  { 
                    feature: '100-day neuroplastic habit rewiring architecture', 
                    hqx: true, 
                    traditional: false, 
                    apps: false 
                  },
                  { 
                    feature: 'Direct C-Suite engagement & boardroom alignment', 
                    hqx: true, 
                    traditional: false, 
                    apps: false 
                  },
                  { 
                    feature: 'Proprietary 360° 5-pillar ecosystem (Mental to Financial)', 
                    hqx: true, 
                    traditional: true, 
                    apps: false 
                  },
                  { 
                    feature: 'World-class faculty (Olympians, C-Suite, Ivy League)', 
                    hqx: true, 
                    traditional: false, 
                    apps: false 
                  },
                  { 
                    feature: 'Quantified EBITDA & hard enterprise ROI attribution', 
                    hqx: true, 
                    traditional: false, 
                    apps: false 
                  },
                  { 
                    feature: 'Sustainable antifragile culture (Zero employee cynicism)', 
                    hqx: true, 
                    traditional: false, 
                    apps: false 
                  }
                ].map((row, idx) => (
                  <div 
                    key={idx}
                    className="grid grid-cols-12 items-center py-2 sm:py-2.5"
                  >
                    {/* Feature Name */}
                    <div className="col-span-5 pr-4 text-xs sm:text-sm font-body text-white/90 font-light leading-snug">
                      {row.feature}
                    </div>

                    {/* HQX Status (Solid Yellow Dot with Subtle Glow) */}
                    <div className="col-span-2 flex justify-center items-center">
                      {row.hqx ? (
                        <span className="w-3.5 h-3.5 rounded-full bg-[#FFCE00] shadow-[0_0_10px_rgba(255,206,0,0.8)]" />
                      ) : (
                        <span className="w-3.5 h-3.5 rounded-full border-[1.5px] border-[#FFCE00]/50" />
                      )}
                    </div>

                    {/* Traditional Wellness Status */}
                    <div className="col-span-2 flex justify-center items-center">
                      {row.traditional ? (
                        <span className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
                      ) : (
                        <span className="w-3.5 h-3.5 rounded-full border-[1.5px] border-white/40" />
                      )}
                    </div>

                    {/* All-in-One Apps Status */}
                    <div className="col-span-3 flex justify-center items-center">
                      {row.apps ? (
                        <span className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
                      ) : (
                        <span className="w-3.5 h-3.5 rounded-full border-[1.5px] border-white/40" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* INDUSTRIES & ACADEMIC INSTITUTIONS IMPACTED - ACCORDION / SEQUENTIAL DETAIL CARDS WITH LOW-OPACITY LOGOS */}
      <section 
        className="py-16 sm:py-24 px-6 md:px-12 bg-[#FAF8F5] border-b border-black/10 relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-7xl mx-auto relative z-10 space-y-10 sm:space-y-12">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-8 border-b border-black/10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1E1A17] inline-block" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#7A7067] font-semibold">
                  Sectors Impacted
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] leading-[1.08]">
                Industries & Academic <br />
                <span className="text-[#666666] font-light">Institutions Impacted</span>
              </h2>
            </div>
            
            {/* Sequential Carousel Navigation Controls */}
            <div className="flex items-center gap-3">
              <div className="font-mono text-xs text-[#7A7067] tracking-wider mr-2">
                <span className="font-bold text-[#1E1915] text-sm">{IMPACTED_INDUSTRIES[activeIndustry].num}</span>
                <span className="opacity-40"> / 04</span>
              </div>
              <button
                onClick={() => setActiveIndustry((prev) => (prev - 1 + 4) % 4)}
                className="w-10 h-10 rounded-full border border-black/15 hover:border-black hover:bg-black hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous industry"
              >
                <ChevronLeft className="w-4 h-4 stroke-[2]" />
              </button>
              <button
                onClick={() => setActiveIndustry((prev) => (prev + 1) % 4)}
                className="w-10 h-10 rounded-full border border-black/15 hover:border-black hover:bg-black hover:text-white flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next industry"
              >
                <ChevronRight className="w-4 h-4 stroke-[2]" />
              </button>
            </div>
          </div>

          {/* Stepper Selector Bar: 01, 02, 03, 04 Quick Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
            {IMPACTED_INDUSTRIES.map((ind, idx) => (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(idx)}
                className={`text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  activeIndustry === idx 
                    ? 'bg-[#1E1A17] text-white border-[#1E1A17] shadow-md' 
                    : 'bg-white hover:bg-black/[0.02] text-[#4A4540] border-black/10'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className={`font-mono text-xs font-bold ${activeIndustry === idx ? 'text-[#FFCE00]' : 'text-[#7A7067]'}`}>
                    {ind.num}
                  </span>
                  {activeIndustry === idx && (
                    <span className="w-2 h-2 rounded-full bg-[#FFCE00] animate-pulse" />
                  )}
                </div>
                <div className="font-display text-xs sm:text-[13px] font-semibold leading-tight line-clamp-1">
                  {ind.title.split(',')[0]}
                </div>
              </button>
            ))}
          </div>

          {/* THE DETAIL CARD (EXACT LAYOUT FROM REFERENCE IMAGE: PARAGRAPHS LEFT, ARCHED PHOTO RIGHT, LOW-OPACITY LOGOS BG) */}
          <div className="relative min-h-[460px] sm:min-h-[420px] bg-white rounded-3xl sm:rounded-[32px] border border-black/10 overflow-hidden shadow-[0_15px_45px_-10px_rgba(0,0,0,0.06)]">
            <AnimatePresence mode="wait">
              {(() => {
                const item = IMPACTED_INDUSTRIES[activeIndustry];
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="relative w-full h-full p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14"
                  >
                    {/* BACKGROUND WATERMARK LOGOS: Brand logos in grey color with low opacity in bg */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 flex items-center justify-around opacity-[0.07] px-6">
                      {item.brandLogos.map((brand, bIdx) => (
                        <div 
                          key={bIdx} 
                          className="text-[#1E1A17] transform -rotate-12 hover:rotate-0 transition-transform duration-700"
                        >
                          {brand.svg}
                        </div>
                      ))}
                    </div>

                    {/* LEFT CONTENT: Title, Number, and Detailed Descriptive Paragraphs (Not in points) */}
                    <div className="relative z-10 flex-1 max-w-2xl space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-base sm:text-lg font-bold text-[#1E1915]">
                          {item.num}
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-semibold text-[#141414] tracking-tight leading-tight">
                          {item.title}
                        </h3>
                      </div>

                      {/* Paragraph 1: What we did in this industry */}
                      <p className="font-body text-sm sm:text-[15px] text-[#3A3530] font-normal leading-relaxed text-justify">
                        {item.whatWeDid}
                      </p>

                      {/* Paragraph 2: How it was impactful */}
                      <p className="font-body text-sm sm:text-[15px] text-[#4A4540] font-light leading-relaxed text-justify">
                        {item.howItWasImpactful}
                      </p>

                      {/* Verified Impact Metric Capsule */}
                      <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#1E1915]">
                        <span className="w-2 h-2 rounded-full bg-[#FFCE00]" />
                        <span className="font-bold tracking-wider">{item.metric}</span>
                      </div>
                    </div>

                    {/* RIGHT IMAGE: Large Semicircular / Arched Window (Directly matching media_1793957892897_2331fc18.jpg) */}
                    <div className="relative z-10 w-full sm:w-[320px] lg:w-[380px] xl:w-[420px] aspect-square shrink-0 flex items-center justify-center">
                      <div className="w-full h-full rounded-full lg:rounded-l-full overflow-hidden shadow-2xl border-4 border-white bg-[#0E0F12] relative group">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* Collapsed Peeking Accordion Rows Below Active Card (Matching media_1793957892897_2331fc18.jpg) */}
          <div className="space-y-3 pt-2">
            {IMPACTED_INDUSTRIES.map((ind, idx) => {
              if (idx === activeIndustry) return null;
              return (
                <div
                  key={ind.id}
                  onClick={() => setActiveIndustry(idx)}
                  className="bg-white hover:bg-[#FAF8F5] p-5 sm:p-6 rounded-2xl border border-black/10 flex items-center justify-between cursor-pointer transition-all duration-300 group shadow-xs hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm sm:text-base font-bold text-[#7A7067] group-hover:text-black">
                      {ind.num}
                    </span>
                    <h4 className="font-display text-lg sm:text-xl font-semibold text-[#1E1915] group-hover:text-black transition-colors">
                      {ind.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#7A7067] group-hover:text-black">
                    <span className="hidden sm:inline">View Detailed Impact</span>
                    <span className="text-[#FFCE00] group-hover:translate-x-1 transition-transform">›</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* NATIONWIDE & GLOBAL FOOTPRINT - DOTTED MATRIX WORLD MAP (UPLOADED SPEC) */}
      <GlobalFootprintMapSection />

      {/* FULL-WIDTH TRUSTED BY OVER 40+ INDUSTRY TITANS MARQUEE TOUCHING ABOVE FOOTER WITHOUT GAP */}
      <div className="w-full m-0 p-0">
        <CorporatePartnersMarquee showHeader={true} title="Trusted by Over 40+ Industry Titans" reversed={true} />
      </div>
    </div>
  );
}

