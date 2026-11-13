import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Users,
  MapPin,
  Sparkles,
  Compass,
  ShieldCheck,
  ChevronDown,
  Globe,
  Building2,
  Zap
} from 'lucide-react';
import CorporatePartnersMarquee from '../components/common/CorporatePartnersMarquee';

export default function LeadershipDeepDive() {
  const [activeClient, setActiveClient] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'What is the ideal format and duration for a Leadership Deep Dive?',
      a: 'The immersion runs across 2 to 3 full days in a residential or executive offsite setting, intentionally structured to remove senior decision-makers from operational noise into deep strategic reflection and experiential mastery.'
    },
    {
      q: 'Who is this program designed for and what is the cohort size?',
      a: 'Leadership Deep Dive is tailored for cohorts of 15 to 60 senior CXOs, board members, and business unit leaders—maintaining an intimate environment for psychological safety and executive candor.'
    },
    {
      q: 'Who facilitates the Leadership Deep Dive sessions?',
      a: 'Every immersion is personally conducted by HQX founder Manny Anchan alongside select multidisciplinary advisory faculty mentors, blending 25+ years of boardroom leadership with applied neuroscience and Japanese eudaimonia.'
    },
    {
      q: 'Can modules be customized around our organization’s current challenges?',
      a: 'Yes. Each cohort begins with pre-immersion leadership alignment discovery so modules on strategic foresight, resilience under market volatility, deep focus, and team synergy address your specific enterprise priorities.'
    },
    {
      q: 'Where can Leadership Deep Dive offsites be hosted?',
      a: 'We deliver immersions across domestic retreat hubs (including Goa, Lonavala, Mumbai, and Pune) as well as international executive destinations such as Tanzania and Mauritius.'
    },
    {
      q: 'How do we schedule a Leadership Deep Dive for our executive team?',
      a: 'Reach out via our Contact page to share your target dates, cohort size, and strategic objectives. Our executive coordinator responds within 4 business hours with custom immersion proposals.'
    }
  ];

  const keyBenefits = [
    {
      title: 'Strategic Thinking',
      desc: 'Prioritize and strategize effectively through structured foresight and clarity.'
    },
    {
      title: 'Resilience Development',
      desc: 'Develop psychological and biological resilience to bounce back swiftly from market challenges.'
    },
    {
      title: 'Deep Focus & Concentration',
      desc: 'Enhance concentration, eliminate executive distraction, and command uninterrupted deep focus.'
    },
    {
      title: 'Powering Purpose',
      desc: 'Align executive decisions and organizational mandates directly with enduring authentic purpose.'
    },
    {
      title: 'Balanced Growth Mindset',
      desc: 'Foster a balanced growth mindset for holistic development and sustainable high performance.'
    },
    {
      title: 'Disruptive & Hands-on',
      desc: 'Directly conducted by Manny Anchan with advisory faculty mentors to align personal mastery with enterprise goals.'
    }
  ];

  /** Renders a domain-specific HQX yellow & black isometric SVG illustration tailored to each benefit heading. */
  const renderBenefitIllustration = (index) => {
    switch (index) {
      case 0:
        // Strategic Thinking — Isometric Chessboard + 3D Chess Piece + Tactical Move Arc
        return (
          <svg viewBox="0 0 140 120" className="w-28 h-24 sm:w-32 sm:h-28 mx-auto" fill="none" aria-hidden="true">
            <ellipse cx="70" cy="102" rx="46" ry="11" fill="#EAEAEA" />
            {/* Isometric Chessboard Slab */}
            <path d="M24 72 L70 50 L116 72 L70 94 Z" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M24 72 L70 94 V101 L24 79 Z" fill="#FFCC00" stroke="#0A0A0A" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M116 72 L70 94 V101 L116 79 Z" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="1.5" strokeLinejoin="round" />
            {/* Checkerboard Squares */}
            <path d="M47 61 L70 72 L47 83 L24 72 Z" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="1.1" strokeLinejoin="round" />
            <path d="M70 50 L93 61 L70 72 L47 61 Z" fill="#FFCC00" stroke="#0A0A0A" strokeWidth="1.1" strokeLinejoin="round" />
            <path d="M93 61 L116 72 L93 83 L70 72 Z" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="1.1" strokeLinejoin="round" />
            {/* Strategic Move Dotted Trajectory Arc + Arrowhead */}
            <path d="M47 72 Q68 38 94 64" stroke="#0A0A0A" strokeWidth="1.5" strokeDasharray="3 3" strokeLinecap="round" fill="none" />
            <path d="M89 65 L96 66 L94 59" stroke="#0A0A0A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            {/* 3D Sculpted Chess Piece on Left-Center Square */}
            <ellipse cx="47" cy="72" rx="10" ry="4.5" fill="#FFCC00" stroke="#0A0A0A" strokeWidth="1.4" />
            <path d="M38 69 C39 64 42 54 41 44 L53 44 C52 54 55 64 56 69 C56 72 52 74 47 74 C42 74 38 72 38 69 Z" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M47 44 L53 44 C52 54 55 64 56 69 C56 72 52 74 47 74 Z" fill="#0A0A0A" />
            {/* Collar & Crown Finial */}
            <ellipse cx="47" cy="43" rx="9" ry="3.8" fill="#FFCC00" stroke="#0A0A0A" strokeWidth="1.4" />
            <circle cx="47" cy="33" r="7" fill="#FFCC00" stroke="#0A0A0A" strokeWidth="1.5" />
            <path d="M47 20 V26 M44 23 H50" stroke="#0A0A0A" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
        );
      case 1:
        // Resilience Development — 3D Shield + Protective Deflection & Bounce-Back Arcs
        return (
          <svg viewBox="0 0 140 120" className="w-28 h-24 sm:w-32 sm:h-28 mx-auto" fill="none" aria-hidden="true">
            <ellipse cx="70" cy="103" rx="42" ry="10" fill="#EAEAEA" />
            {/* Protective Outer Rebound Wave Arcs */}
            <path d="M26 42 C20 56 23 72 32 82" stroke="#0A0A0A" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="3 3" />
            <path d="M114 42 C120 56 117 72 108 82" stroke="#0A0A0A" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="3 3" />
            {/* Bounce-back upward arrow on right */}
            <path d="M107 40 L118 28 M111 28 H118 V35" stroke="#0A0A0A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            {/* 3D Shield Extrusion */}
            <path d="M74 20 L106 31 V59 C106 78 90 92 74 99 L68 97 V22 Z" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="1.5" strokeLinejoin="round" />
            {/* Front Shield Face */}
            <path d="M68 20 L36 31 V59 C36 78 51 92 68 99 C85 92 100 78 100 59 V31 Z" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M68 20 V99 C85 92 100 78 100 59 V31 Z" fill="#FFCC00" stroke="#0A0A0A" strokeWidth="1.3" strokeLinejoin="round" />
            {/* Inner Armor Shield Core */}
            <path d="M68 33 L47 41 V58 C47 71 57 81 68 86 C79 81 89 71 89 58 V41 Z" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="1.35" strokeLinejoin="round" />
            <path d="M58 63 L68 51 L78 63" stroke="#FFCC00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M68 52 V73" stroke="#FFCC00" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 2:
        // Deep Focus & Concentration — Isometric 3-Ring Bullseye Target + Precision Arrow Locked Center
        return (
          <svg viewBox="0 0 140 120" className="w-28 h-24 sm:w-32 sm:h-28 mx-auto" fill="none" aria-hidden="true">
            <ellipse cx="64" cy="102" rx="40" ry="10" fill="#EAEAEA" />
            {/* Target Depth Cylinder Back */}
            <ellipse cx="67" cy="60" rx="34" ry="38" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="1.5" />
            {/* Front Target Rings */}
            <ellipse cx="61" cy="60" rx="34" ry="38" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.5" />
            <ellipse cx="61" cy="60" rx="25" ry="28" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="1.35" />
            <ellipse cx="61" cy="60" rx="16" ry="18" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.35" />
            <ellipse cx="61" cy="60" rx="8" ry="9" fill="#FFCC00" stroke="#0A0A0A" strokeWidth="1.4" />
            <circle cx="61" cy="60" r="2.6" fill="#0A0A0A" />
            {/* Precision Arrow Struck Cleanly Into Bullseye */}
            <line x1="61" y1="60" x2="112" y2="25" stroke="#0A0A0A" strokeWidth="2.3" strokeLinecap="round" />
            {/* Arrow Fletching Feathers */}
            <path d="M100 33 L103 21 L113 18 L108 28 Z" fill="#FFCC00" stroke="#0A0A0A" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M100 33 L112 37 L119 28 L108 28 Z" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
        );
      case 3:
        // Powering Purpose — Isometric True-North Compass + Guiding Star Beacon
        return (
          <svg viewBox="0 0 140 120" className="w-28 h-24 sm:w-32 sm:h-28 mx-auto" fill="none" aria-hidden="true">
            <ellipse cx="70" cy="102" rx="44" ry="11" fill="#EAEAEA" />
            {/* Isometric Compass Body */}
            <path d="M26 62 v10 c0 16 19.7 28 44 28 s44-12 44-28 V62" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="1.5" strokeLinejoin="round" />
            <ellipse cx="70" cy="62" rx="44" ry="26" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.5" />
            <ellipse cx="70" cy="62" rx="34" ry="20" fill="#FFF8D6" stroke="#0A0A0A" strokeWidth="1.25" />
            {/* Cardinal Tick Marks */}
            <path d="M70 43 v4 M70 77 v4 M38 62 h6 M96 62 h6" stroke="#0A0A0A" strokeWidth="1.4" strokeLinecap="round" />
            {/* Bold Directional Compass Needle */}
            <path d="M70 45 L77 62 L70 59 L63 62 Z" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="1.2" strokeLinejoin="round" />
            <path d="M70 79 L77 62 L70 59 L63 62 Z" fill="#FFCC00" stroke="#0A0A0A" strokeWidth="1.35" strokeLinejoin="round" />
            <circle cx="70" cy="61" r="3" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.4" />
            {/* Guiding North-Star Beacon Above Compass */}
            <path d="M70 13 L73.5 22 L83 25.5 L73.5 29 L70 38 L66.5 29 L57 25.5 L66.5 22 Z" fill="#FFCC00" stroke="#0A0A0A" strokeWidth="1.4" strokeLinejoin="round" />
          </svg>
        );
      case 4:
        // Balanced Growth Mindset — Poised Equilibrium Scale + Thriving Leaf Sprout
        return (
          <svg viewBox="0 0 140 120" className="w-28 h-24 sm:w-32 sm:h-28 mx-auto" fill="none" aria-hidden="true">
            <ellipse cx="70" cy="102" rx="44" ry="10" fill="#EAEAEA" />
            {/* Stepped Isometric Base Pedestal */}
            <path d="M46 92 L70 83 L94 92 L70 101 Z" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M46 92 V97 L70 105 V101 Z" fill="#FFCC00" stroke="#0A0A0A" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M70 101 V105 L94 97 V92 Z" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="1.4" strokeLinejoin="round" />
            {/* Center Stem + Sprouting Growth Leaves */}
            <line x1="70" y1="90" x2="70" y2="31" stroke="#0A0A0A" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M70 34 C69 21 56 17 50 22 C54 31 63 35 70 34 Z" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M70 34 C71 20 84 15 91 20 C87 30 78 35 70 34 Z" fill="#FFCC00" stroke="#0A0A0A" strokeWidth="1.4" strokeLinejoin="round" />
            {/* Poised Horizontal Balance Beam */}
            <line x1="30" y1="48" x2="110" y2="48" stroke="#0A0A0A" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="70" cy="48" r="3.5" fill="#FFCC00" stroke="#0A0A0A" strokeWidth="1.4" />
            {/* Left Pan */}
            <path d="M30 48 L20 71 M30 48 L40 71" stroke="#0A0A0A" strokeWidth="1.25" />
            <path d="M16 71 C16 78 44 78 44 71 Z" fill="#FFCC00" stroke="#0A0A0A" strokeWidth="1.4" strokeLinejoin="round" />
            <ellipse cx="30" cy="71" rx="14" ry="4" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.4" />
            {/* Right Pan */}
            <path d="M110 48 L100 71 M110 48 L120 71" stroke="#0A0A0A" strokeWidth="1.25" />
            <path d="M96 71 C96 78 124 78 124 71 Z" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="1.4" strokeLinejoin="round" />
            <ellipse cx="110" cy="71" rx="14" ry="4" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="1.4" />
          </svg>
        );
      default:
        // Disruptive & Hands-on — Interlocking Precision Gears + Dynamic Disruptive Lightning Spark
        return (
          <svg viewBox="0 0 140 120" className="w-28 h-24 sm:w-32 sm:h-28 mx-auto" fill="none" aria-hidden="true">
            <ellipse cx="70" cy="102" rx="44" ry="11" fill="#EAEAEA" />
            {/* Primary Left-Center Gear */}
            <g transform="translate(55 68)">
              <path
                d="M-5 -25 H5 L7 -19 A20 20 0 0 1 13 -16 L19 -19 L25 -13 L21 -7 A20 20 0 0 1 23 -1 L29 2 V10 L23 13 A20 20 0 0 1 18 19 L21 25 L14 29 L9 24 A20 20 0 0 1 2 25 L-1 31 H-9 L-11 25 A20 20 0 0 1 -17 21 L-23 24 L-28 17 L-24 12 A20 20 0 0 1 -25 5 L-31 2 V-6 L-25 -9 A20 20 0 0 1 -20 -16 L-23 -22 L-16 -27 L-11 -22 A20 20 0 0 1 -5 -25 Z"
                fill="#FFFFFF"
                stroke="#0A0A0A"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle cx="0" cy="2" r="10" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="1.4" />
              <circle cx="0" cy="2" r="4" fill="#FFCC00" />
            </g>
            {/* Secondary Interlocking Right Gear */}
            <g transform="translate(96 52) scale(0.72)">
              <path
                d="M-5 -25 H5 L7 -19 A20 20 0 0 1 13 -16 L19 -19 L25 -13 L21 -7 A20 20 0 0 1 23 -1 L29 2 V10 L23 13 A20 20 0 0 1 18 19 L21 25 L14 29 L9 24 A20 20 0 0 1 2 25 L-1 31 H-9 L-11 25 A20 20 0 0 1 -17 21 L-23 24 L-28 17 L-24 12 A20 20 0 0 1 -25 5 L-31 2 V-6 L-25 -9 A20 20 0 0 1 -20 -16 L-23 -22 L-16 -27 L-11 -22 A20 20 0 0 1 -5 -25 Z"
                fill="#0A0A0A"
                stroke="#0A0A0A"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <circle cx="0" cy="2" r="9" fill="#FFCC00" stroke="#0A0A0A" strokeWidth="1.6" />
            </g>
            {/* Disruptive Breakout Lightning Bolt */}
            <path
              d="M66 15 L52 38 H64 L59 54 L80 31 H67 Z"
              fill="#FFCC00"
              stroke="#0A0A0A"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        );
    }
  };

  const clientEngagements = [
    {
      client: 'Ageas Federal Insurance',
      location: 'Mumbai',
      desc: 'Executive purpose, cognitive resilience, and boardroom alignment offsite tailored for senior insurance leadership.',
      icon: ShieldCheck,
      image: '/images/hero_showcase/manny_ageas_keynote_stage.jpg',
      imagePos: 'object-[center_20%]'
    },
    {
      client: 'Cipla',
      location: 'Goa',
      desc: 'Senior leadership alignment and biological vitality immersion driving cross-functional synergy.',
      icon: Sparkles,
      image: '/images/hero_showcase/manny_founder_podium.jpg',
      imagePos: 'object-center'
    },
    {
      client: 'Amal Embroidery',
      location: 'Lonavala',
      desc: 'Strategic thinking and stress-mastery culture retreat fostering cohesive operational leadership.',
      icon: Compass,
      image: '/images/hero_showcase/manny_roundtable_engagement.jpg',
      imagePos: 'object-center'
    },
    {
      client: 'Amana Bank',
      location: 'Tanzania',
      desc: 'International banking executive transformation integrating eudaimonic performance and ethical stewardship.',
      icon: Globe,
      image: '/images/hero_showcase/manny_amana_keynote.jpg',
      imagePos: 'object-[center_18%]'
    },
    {
      client: 'Absa Bank',
      location: 'Mauritius',
      desc: 'Multi-regional private banking stewardship workshop exploring wealth psychology and advisor poise.',
      icon: Building2,
      image: '/images/hero_showcase/manny_absa_bank.jpg',
      imagePos: 'object-[center_20%]'
    },
    {
      client: 'TATA Motors',
      location: 'Pune',
      desc: 'Engineering & executive leadership immersion cultivating deep focus, stamina, and high-trust execution.',
      icon: Zap,
      image: '/images/hero_showcase/manny_vitality_mic.jpg',
      imagePos: 'object-[center_15%]'
    }
  ];

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Hero Header: About Us Editorial Split Layout — Pure #000000 Match & Fit to Screen */}
      <section className="bg-black text-white min-h-[100svh] lg:h-[100svh] lg:min-h-[640px] lg:max-h-[1080px] flex flex-col justify-between pt-24 sm:pt-28 pb-0 border-b border-white/10 relative overflow-hidden w-full">
        {/* Inline SVG Filter for Organic Underwater Rippling */}
        <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
          <defs>
            <filter id="iceberg-water-ripple" x="-12%" y="-8%" width="124%" height="116%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.008 0.036"
                numOctaves="2"
                seed="4"
                result="rippleNoise"
              >
                <animate
                  attributeName="baseFrequency"
                  values="0.007 0.032; 0.012 0.048; 0.007 0.032"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="rippleNoise"
                scale="8"
                xChannelSelector="R"
                yChannelSelector="G"
              >
                <animate
                  attributeName="scale"
                  values="5.5; 10.5; 5.5"
                  dur="7s"
                  repeatCount="indefinite"
                />
              </feDisplacementMap>
            </filter>
          </defs>
        </svg>

        {/* Left Side Vertical Text */}
        <div className="absolute left-3 sm:left-6 lg:left-8 xl:left-12 inset-y-0 z-20 flex flex-col justify-center items-center pointer-events-none select-none">
          <div
            className="flex items-center gap-3 sm:gap-4"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span className="font-display text-[11px] sm:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-hq-yellow drop-shadow-md">
              LEADERSHIP DEEP DIVE
            </span>
            <span className="w-px h-8 sm:h-14 bg-white/25" />
          </div>
        </div>

        {/* Framing Container: Exact Alignment with About Us Hero */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex-1 flex items-center py-4 sm:py-6 min-h-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center w-full">
            {/* Left Column: Editorial Headline, Copy & Signature Button */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center"
            >
              <div className="max-w-md">
                <h1
                  style={{ fontFamily: '"Geist", Arial, sans-serif', fontWeight: 300 }}
                  className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-light tracking-tight text-white leading-[1.15] mb-5"
                >
                  Leadership <br />
                  <span
                    style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                    className="text-hq-yellow font-bold"
                  >
                    Deep Dive
                  </span>
                </h1>

                <p className="font-body text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8">
                  Unlock your potential, navigate complexity, bounce back, prioritize, align with purpose, learn and adapt, embrace fulfilment, build high-performing teams, and pursue passions.
                </p>

                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-between gap-8 py-3.5 px-2 font-display font-medium text-xs tracking-[0.2em] text-white hover:text-hq-yellow transition-colors duration-300 uppercase"
                  >
                    {/* Top border line */}
                    <span className="absolute top-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />

                    <span className="relative z-10 font-semibold tracking-widest">RESERVE IMMERSION</span>

                    <svg
                      className="w-[22px] h-[11px] inline-block transition-transform duration-300 group-hover:translate-x-1.5 flex-shrink-0"
                      viewBox="0 0 20 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="0" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="1.2" />
                      <polyline points="15 1, 20 5, 15 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    {/* Bottom border line */}
                    <span className="absolute bottom-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Vertically Centered Animated Mountain, Depth & Water Rippling + Non-Overlapping Pills */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center items-center select-none"
            >
              {/* Buoyant Mountain Container (Vertically Centered) */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative flex items-center justify-center my-auto"
              >
                {/* Clipped Image, Ripple & Vignette Wrapper */}
                <div className="relative flex items-center justify-center overflow-hidden">
                  {/* Ambient Golden Summit Aura */}
                  <motion.div
                    animate={{ opacity: [0.25, 0.55, 0.25], scale: [0.95, 1.06, 0.95] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[56%] h-[26%] rounded-full bg-hq-yellow/15 blur-[48px] pointer-events-none"
                  />

                  {/* Abyssal Depth Pulse Beneath Waterline */}
                  <motion.div
                    animate={{ opacity: [0.15, 0.42, 0.15], scaleY: [0.96, 1.04, 0.96] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-[42%] left-1/2 -translate-x-1/2 w-[48%] h-[48%] rounded-full bg-amber-200/[0.08] blur-[55px] pointer-events-none"
                  />

                  {/* Layer 1: Crisp Mountain Peak Above Water (0% - 36%) */}
                  <img
                    src="/images/leadership-iceberg.jpg"
                    alt="Leadership Deep Dive — Beneath the Surface"
                    style={{
                      WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 32%, transparent 37%)',
                      maskImage: 'linear-gradient(to bottom, black 0%, black 32%, transparent 37%)'
                    }}
                    className="relative z-10 max-h-[320px] sm:max-h-[410px] lg:max-h-[calc(100vh-215px)] xl:max-h-[560px] w-auto max-w-full object-contain contrast-[1.08] brightness-[0.98] pointer-events-none"
                  />

                  {/* Layer 2: Submerged Mountain Depth with Live Water-Ripple Refraction (32% - 100%) */}
                  <motion.img
                    src="/images/leadership-iceberg.jpg"
                    alt=""
                    aria-hidden="true"
                    animate={{
                      opacity: [0.9, 1, 0.9],
                      scaleY: [1, 1.012, 1]
                    }}
                    transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      filter: 'url(#iceberg-water-ripple)',
                      WebkitMaskImage: 'linear-gradient(to bottom, transparent 31%, black 36%, black 100%)',
                      maskImage: 'linear-gradient(to bottom, transparent 31%, black 36%, black 100%)',
                      transformOrigin: '50% 35%'
                    }}
                    className="absolute inset-0 z-10 w-full h-full object-contain contrast-[1.08] brightness-[0.97] pointer-events-none"
                  />

                  {/* Layer 3: Shimmering Underwater Caustic Light Waves Across Depth */}
                  <motion.div
                    aria-hidden="true"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 60%', '0% 100%'],
                      opacity: [0.16, 0.34, 0.16]
                    }}
                    transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                      WebkitMaskImage: 'linear-gradient(to bottom, transparent 34%, black 40%, black 88%, transparent 100%)',
                      maskImage: 'linear-gradient(to bottom, transparent 34%, black 40%, black 88%, transparent 100%)',
                      backgroundImage:
                        'radial-gradient(ellipse 60% 18% at 50% 45%, rgba(255,214,102,0.22), transparent 70%), radial-gradient(ellipse 45% 22% at 48% 68%, rgba(255,255,255,0.12), transparent 70%)',
                      backgroundSize: '140% 140%'
                    }}
                    className="absolute inset-0 z-10 mix-blend-screen pointer-events-none"
                  />

                  {/* Layer 4: Inner Waterline Shimmer Streaks (at ~34% Water Surface) */}
                  <div className="absolute top-[33%] inset-x-0 h-[6%] z-20 pointer-events-none flex flex-col items-center justify-center">
                    <motion.div
                      animate={{ scaleX: [0.85, 1.12, 0.85], opacity: [0.25, 0.7, 0.25] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-[92%] h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-amber-200/80 to-transparent blur-[0.5px]"
                    />
                    <motion.div
                      animate={{ scaleX: [1.08, 0.82, 1.08], opacity: [0.48, 0.16, 0.48] }}
                      transition={{ duration: 5.6, delay: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                      className="mt-1.5 w-full h-[1px] rounded-full bg-gradient-to-r from-transparent via-white/55 to-transparent blur-[0.5px]"
                    />
                  </div>

                  {/* Seamless Edge Vignette into Pure #000000 Black (keeping bottom tip bright & visible) */}
                  <div className="absolute inset-x-0 bottom-0 h-5 z-20 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 top-0 h-10 z-20 bg-gradient-to-b from-black via-black/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 left-0 w-12 z-20 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none" />
                  <div className="absolute inset-y-0 right-0 w-12 z-20 bg-gradient-to-l from-black via-black/40 to-transparent pointer-events-none" />
                </div>

                {/* Wide-Diameter Expanding Concentric Water Ripples Radiating Around Waterline */}
                <div
                  aria-hidden="true"
                  className="absolute top-[30.5%] -inset-x-12 sm:-inset-x-24 lg:-inset-x-36 h-[10%] z-20 pointer-events-none flex items-center justify-center"
                >
                  {[0, 1.6, 3.2].map((delaySec, rIdx) => (
                    <motion.div
                      key={rIdx}
                      animate={{
                        scaleX: [0.55, 1.25],
                        scaleY: [0.55, 1.2],
                        opacity: [0, 0.55, 0]
                      }}
                      transition={{
                        duration: 4.8,
                        delay: delaySec,
                        repeat: Infinity,
                        ease: 'easeOut'
                      }}
                      className="absolute inset-0 rounded-[100%] border border-amber-200/35 shadow-[0_0_18px_rgba(255,206,0,0.18)]"
                    />
                  ))}
                  <motion.div
                    animate={{ scaleX: [0.78, 1.15, 0.78], opacity: [0.18, 0.5, 0.18] }}
                    transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-full h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-amber-200/60 to-transparent blur-[1px]"
                  />
                </div>

              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* DOCKED STATS & REPUTATION STRIP (MATCHING PURE BLACK HERO BG) */}
        <div className="w-full bg-black/95 text-white/80 py-3.5 sm:py-4 px-6 border-t border-white/10 overflow-hidden relative z-20">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs font-mono uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">25+</span>
              <span className="text-white/70">Years Boardroom Leadership</span>
            </div>
            <span className="text-white/20 hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">40+</span>
              <span className="text-white/70">Corporate Conclaves</span>
            </div>
            <span className="text-white/20 hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">09</span>
              <span className="text-white/70">Global Nations Impacted</span>
            </div>
            <span className="text-white/20 hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">98%</span>
              <span className="text-white/70">Verified Executive CSAT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits of Leadership Deep Dive (Clean 6-Card Isometric Grid) + Docked Snapshot Bar */}
      <section className="flex flex-col justify-between bg-white dark:bg-[#0E0F12] w-full">
        <div className="py-20 sm:py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 lg:gap-6 mb-10 sm:mb-12">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] dark:text-white leading-[1.08]">
                Key Benefits of <br />
                <span className="text-[#666666] dark:text-white/60 font-light">Leadership Deep Dive</span>
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-black/65 dark:text-white/70 max-w-md font-light leading-relaxed lg:pb-1">
              Equipping corporate decision-makers with the psychological and strategic tools to excel under intense scrutiny.
            </p>
          </div>

          {/* 6-Point Isometric Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 dark:bg-white/10 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10">
            {keyBenefits.map((benefit, idx) => (
              <div
                key={benefit.title}
                className="group bg-[#F7F7F8] dark:bg-[#141519] hover:bg-white dark:hover:bg-white/[0.06] p-7 sm:p-8 transition-colors duration-300 flex flex-col justify-between"
              >
                <div className="pt-2 pb-6 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                  {renderBenefitIllustration(idx)}
                </div>

                <div className="text-left">
                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#0A0A0A] dark:text-white tracking-tight mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-xs sm:text-[13px] text-black/65 dark:text-white/70 font-normal leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Snapshot Bar (Docked Below Key Benefits, Without Section Border — WellBeingEthos 3-Col Feature Strip Style) */}
        <div className="bg-hq-yellow text-hq-black w-full">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 sm:py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-hq-black/15">
              {/* Item 1 */}
              <div className="text-left md:pr-8 flex items-start gap-4 group">
                <Calendar className="w-8 h-8 text-hq-black/85 shrink-0 stroke-[1.2] mt-0.5 transition-transform duration-300 group-hover:scale-105" />
                <div>
                  <h4 className="font-display text-xs sm:text-[13px] font-bold uppercase tracking-wider text-hq-black mb-1.5">
                    Format &amp; Duration
                  </h4>
                  <p className="font-body text-xs sm:text-[13px] text-hq-black/75 font-light leading-relaxed">
                    2 - 3 Full Days (Residential / Offsite)
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="text-left md:px-8 flex items-start gap-4 group">
                <Users className="w-8 h-8 text-hq-black/85 shrink-0 stroke-[1.2] mt-0.5 transition-transform duration-300 group-hover:scale-105" />
                <div>
                  <h4 className="font-display text-xs sm:text-[13px] font-bold uppercase tracking-wider text-hq-black mb-1.5">
                    Target Cohort
                  </h4>
                  <p className="font-body text-xs sm:text-[13px] text-hq-black/75 font-light leading-relaxed">
                    15 to 60 Senior CXOs &amp; Board Members
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="text-left md:pl-8 flex items-start gap-4 group">
                <MapPin className="w-8 h-8 text-hq-black/85 shrink-0 stroke-[1.2] mt-0.5 transition-transform duration-300 group-hover:scale-105" />
                <div>
                  <h4 className="font-display text-xs sm:text-[13px] font-bold uppercase tracking-wider text-hq-black mb-1.5">
                    Locations Delivered
                  </h4>
                  <p className="font-body text-xs sm:text-[13px] text-hq-black/75 font-light leading-relaxed">
                    Domestic (Goa, Lonavala) &amp; Global (Tanzania, Mauritius)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Leadership Immersion Client Roster (Interactive Expanding Accordion Tabs — Fit to Screen) */}
      <section className="min-h-[100svh] lg:h-[100svh] lg:min-h-[640px] lg:max-h-[1080px] flex flex-col justify-center pt-20 sm:pt-24 pb-10 sm:pb-12 px-6 md:px-12 bg-black text-white relative overflow-hidden border-t border-white/10">
        {/* Subtle Metallic Wave Ambient Glow Along Floor */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[900px] h-[220px] bg-gradient-to-r from-white/[0.04] via-hq-yellow/[0.06] to-white/[0.04] rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          {/* Header Row: Dual-Tone Title & Top Narrative (Matching Dedicated Chapters of HQX) */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5 lg:gap-6 mb-8 lg:mb-10 pb-5 lg:pb-6 border-b border-white/10">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.08]">
                Recent Leadership <br />
                <span className="text-white/50 font-light">Immersion Client Roster</span>
              </h3>
            </div>
            <p className="font-body text-sm sm:text-base text-white/65 max-w-md font-light leading-relaxed lg:pb-1">
              Click any engagement tab to inspect executive offsites, leadership conclaves, and transformation retreats across the globe.
            </p>
          </div>

          {/* Desktop Horizontal Expanding Accordion */}
          <div className="hidden lg:flex items-stretch gap-3 h-[calc(100vh-295px)] min-h-[320px] max-h-[450px]">
            {clientEngagements.map((item, idx) => {
              const TabIcon = item.icon;
              const isActive = activeClient === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveClient(idx)}
                  aria-expanded={isActive}
                  className={`group relative rounded-2xl overflow-hidden text-left transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border ${isActive
                      ? 'flex-[4.8] bg-[#101216] border-white/25 shadow-[0_24px_60px_rgba(0,0,0,0.9)]'
                      : 'flex-[0.85] hover:flex-[1.05] bg-gradient-to-b from-[#1D1F24] via-[#15171B] to-[#101216] border-white/10 hover:border-hq-yellow/45 cursor-pointer'
                    }`}
                >
                  {isActive ? (
                    /* Expanded Tab View */
                    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-7">
                      {/* Ambient Photo Backdrop */}
                      <img
                        src={item.image}
                        alt={item.client}
                        className={`absolute inset-0 w-full h-full object-cover ${item.imagePos} opacity-45 contrast-110 pointer-events-none transition-transform duration-700`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/75 pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent pointer-events-none" />

                      {/* Top Row: Vertical Location Label + Index */}
                      <div className="relative z-10 flex items-start justify-between">
                        <div
                          className="font-mono text-[11px] uppercase tracking-[0.22em] text-hq-yellow/90"
                          style={{ writingMode: 'vertical-rl' }}
                        >
                          {item.location}
                        </div>
                        <span className="font-mono text-xs text-white/45 tracking-widest">
                          {(idx + 1).toString().padStart(2, '0')} / 06
                        </span>
                      </div>

                      {/* Bottom Details */}
                      <div className="relative z-10 max-w-md">
                        <h4 className="font-display text-2xl xl:text-3xl font-semibold tracking-tight text-white mb-2">
                          {item.client}
                        </h4>
                        <p className="font-body text-xs sm:text-sm text-white/75 font-light leading-relaxed mb-5">
                          {item.desc}
                        </p>
                        <div className="inline-flex items-center gap-2 text-xs font-display font-medium text-white/85">
                          <TabIcon className="w-4 h-4 text-hq-yellow stroke-[1.2] shrink-0" />
                          <span>{item.location} Executive Immersion</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Collapsed Vertical Strip View */
                    <div className="relative w-full h-full flex flex-col items-center justify-between py-6 px-1 overflow-hidden">
                      {/* Subtle Top Highlight Sheen */}
                      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" />

                      <span
                        className="relative z-10 font-display text-2xl xl:text-[28px] font-black uppercase tracking-wider whitespace-nowrap transition-all duration-300 text-[#090A0D] [text-shadow:_-1px_-1px_1px_rgba(0,0,0,0.95),_1px_1px_0px_rgba(255,255,255,0.16)] group-hover:text-[#0C0B07] group-hover:[text-shadow:_-1px_-1px_1px_rgba(0,0,0,0.95),_1px_1px_0px_rgba(255,204,0,0.5)]"
                        style={{ writingMode: 'vertical-rl' }}
                      >
                        {item.client}
                      </span>

                      <TabIcon className="relative z-10 w-4 h-4 text-white/50 group-hover:text-hq-yellow stroke-[1.2] transition-colors shrink-0" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile & Tablet Vertical Expanding Accordion */}
          <div className="lg:hidden flex flex-col gap-3">
            {clientEngagements.map((item, idx) => {
              const TabIcon = item.icon;
              const isActive = activeClient === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl overflow-hidden border transition-colors ${isActive
                      ? 'bg-[#101216] border-white/25'
                      : 'bg-gradient-to-r from-white/[0.07] via-[#0B0D12] to-white/[0.03] border-white/10'
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveClient(idx)}
                    aria-expanded={isActive}
                    className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <TabIcon
                        className={`w-5 h-5 shrink-0 stroke-[1.2] ${isActive ? 'text-hq-yellow' : 'text-white/55'
                          }`}
                      />
                      <span className={`font-display text-base font-medium truncate ${isActive ? 'text-hq-yellow' : 'text-white'
                        }`}>
                        {item.client}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-white/55 shrink-0">
                      {item.location}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="relative h-48 mx-4 mb-4 rounded-xl overflow-hidden border border-white/10">
                          <img
                            src={item.image}
                            alt={item.client}
                            className={`w-full h-full object-cover ${item.imagePos} opacity-55`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent flex flex-col justify-end p-4">
                            <p className="font-body text-xs text-white/85 font-light leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs Section (Light Background) */}
      <section id="faqs" className="py-20 sm:py-24 px-6 md:px-12 bg-[#FAF8F5] text-[#0A0A0A] border-t border-black/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#0A0A0A]">
              Frequently Asked <span className="text-[#666666] font-light">Questions</span>
            </h2>
          </div>

          <div className="divide-y divide-black/10 border-t border-b border-black/10">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-5 sm:py-6">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left group"
                  >
                    <span className={`font-display text-base sm:text-lg transition-colors ${isOpen ? 'text-[#0A0A0A] font-semibold' : 'text-[#0A0A0A]/85 font-medium group-hover:text-[#0A0A0A]'
                      }`}>
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 stroke-[1.2] transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#0A0A0A]' : 'text-[#0A0A0A]/50 group-hover:text-[#0A0A0A]'
                        }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <p className="font-body text-sm text-[#0A0A0A]/75 font-light leading-relaxed pt-3 pr-8">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FULL-WIDTH TRUSTED BY OVER 40+ INDUSTRY TITANS MARQUEE TOUCHING ABOVE FOOTER WITHOUT GAP */}
      <div className="w-full m-0 p-0">
        <CorporatePartnersMarquee showHeader={true} title="Trusted by Over 40+ Industry Titans" reversed={true} />
      </div>
    </div>
  );
}
