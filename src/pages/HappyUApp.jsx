import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BenefitsMobileCarousel from '../components/happyu/BenefitsMobileCarousel';
import BrandLogo from '../components/common/BrandLogo';
import {
  Heart,
  Sparkles,
  Activity,
  Play,
  Pause,
  RotateCcw,
  Check,
  Smile,
  Meh,
  Frown,
  ShieldCheck,
  Download,
  BookMarked,
  Users,
  Compass,
  Brain,
  BellRing,
  BarChart3,
  Headphones,
  CheckCircle2,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

export default function HappyUApp() {
  // Interactive App Simulator States
  const [activeTab, setActiveTab] = useState('meditate'); // 'meditate' | 'journal' | 'mood'
  const [storeNotice, setStoreNotice] = useState('');
  const [activeFeatureIdx, setActiveFeatureIdx] = useState(0);
  const [isFeaturesPaused, setIsFeaturesPaused] = useState(false);
  const [isDraggingFeatures, setIsDraggingFeatures] = useState(false);
  const featuresTrackRef = useRef(null);
  const featuresSetRef = useRef(null);
  const featureOffsetRef = useRef(null);
  const featureTargetDeltaRef = useRef(0);
  const featureDragRef = useRef({ active: false, startX: 0, startOffset: 0, moved: false });

  // Smooth continuous right-to-left auto-scroll for Features Included & Key Advantages
  useEffect(() => {
    let rafId;
    let lastTime = null;
    const speedPxPerSec = 48;

    const tick = (timestamp) => {
      if (lastTime === null) lastTime = timestamp;
      const dt = Math.min((timestamp - lastTime) / 1000, 0.05);
      lastTime = timestamp;

      const setEl = featuresSetRef.current;
      const trackEl = featuresTrackRef.current;

      if (setEl && trackEl) {
        const period = setEl.offsetWidth;
        if (period > 0) {
          if (featureOffsetRef.current === null) {
            featureOffsetRef.current = 0;
          }

          if (!isFeaturesPaused && !featureDragRef.current.active) {
            featureOffsetRef.current -= speedPxPerSec * dt;
          }

          if (Math.abs(featureTargetDeltaRef.current) > 0.5) {
            const stepDelta = featureTargetDeltaRef.current * Math.min(1, dt * 10);
            featureOffsetRef.current += stepDelta;
            featureTargetDeltaRef.current -= stepDelta;
          } else {
            featureTargetDeltaRef.current = 0;
          }

          while (featureOffsetRef.current >= 0) {
            featureOffsetRef.current -= period;
          }
          while (featureOffsetRef.current < -period) {
            featureOffsetRef.current += period;
          }

          trackEl.style.transform = `translate3d(${featureOffsetRef.current}px, 0, 0)`;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isFeaturesPaused]);

  const shiftFeaturesCarousel = (direction) => {
    const setEl = featuresSetRef.current;
    const cardStep = setEl ? setEl.offsetWidth / appFeaturesWithAdvantages.length : 400;
    featureTargetDeltaRef.current += direction * cardStep;
    setActiveFeatureIdx((prev) =>
      (prev + (direction > 0 ? -1 : 1) + appFeaturesWithAdvantages.length) % appFeaturesWithAdvantages.length
    );
  };

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!featureDragRef.current.active) return;
      const dx = e.clientX - featureDragRef.current.startX;
      if (Math.abs(dx) > 4 && !featureDragRef.current.moved) {
        featureDragRef.current.moved = true;
        setIsDraggingFeatures(true);
        window.getSelection?.()?.removeAllRanges?.();
      }
      if (featureDragRef.current.moved) {
        featureTargetDeltaRef.current = 0;
        featureOffsetRef.current = featureDragRef.current.startOffset + dx;
      }
    };

    const handlePointerUp = () => {
      if (!featureDragRef.current.active) return;
      featureDragRef.current.active = false;
      setIsDraggingFeatures(false);
      setTimeout(() => {
        featureDragRef.current.moved = false;
      }, 40);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, []);

  const handleFeaturesPointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    featureDragRef.current = {
      active: true,
      startX: e.clientX,
      startOffset: featureOffsetRef.current ?? 0,
      moved: false
    };
  };

  // Hero 3-Phone Sequential One-by-One Entrance Cascade State
  const [heroPhoneStep, setHeroPhoneStep] = useState(0); // 0 -> 1 -> 2 -> 3 (all 3 fanned)
  const [hoveredHeroPhone, setHoveredHeroPhone] = useState(null);

  useEffect(() => {
    let t1, t2, t3, loopInterval;

    const runSequence = () => {
      setHeroPhoneStep(0);
      t1 = setTimeout(() => setHeroPhoneStep(1), 180);
      t2 = setTimeout(() => setHeroPhoneStep(2), 780);
      t3 = setTimeout(() => setHeroPhoneStep(3), 1380);
    };

    runSequence();
    loopInterval = setInterval(() => {
      runSequence();
    }, 7800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(loopInterval);
    };
  }, []);

  // Meditation Timer State
  const [secondsLeft, setSecondsLeft] = useState(180);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((sec) => sec - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsRunning(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  // Gratitude Journal state
  const [journalText, setJournalText] = useState('');
  const [savedJournal, setSavedJournal] = useState([
    'Grateful for deep, undisturbed sleep and morning sunlight.',
    'Productive alignment call with the product strategy pod.'
  ]);

  const handleSaveJournal = (e) => {
    e.preventDefault();
    if (!journalText) return;
    setSavedJournal([journalText, ...savedJournal]);
    setJournalText('');
  };

  // Mood Tracker State
  const [selectedMood, setSelectedMood] = useState('peaceful');
  const [moodHistory] = useState([
    { day: 'Mon', score: 82 },
    { day: 'Tue', score: 86 },
    { day: 'Wed', score: 79 },
    { day: 'Thu', score: 91 },
    { day: 'Today', score: 94 }
  ]);

  const formatTimer = (sec) => {
    const mins = Math.floor(sec / 60);
    const remainder = sec % 60;
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  const appBenefits = [
    {
      num: '01',
      title: 'Well-Being Enhancement',
      desc: 'Systematically boosts everyday happiness, emotional regulation, and cognitive stamina through 5-minute daily rituals.'
    },
    {
      num: '02',
      title: 'Reduced Stress & Burnout',
      desc: 'Down-regulates cortisol and workplace anxiety using science-backed breathwork, somatic resets, and guided stillness.'
    },
    {
      num: '03',
      title: 'Sustained Focus & Clarity',
      desc: 'Replaces decision fatigue and mental clutter with intentional morning priming and structured end-of-day decompression.'
    },
    {
      num: '04',
      title: 'Proactive Mental Health Support',
      desc: 'Provides immediate, stigma-free access to self-guided mental wellness tools, emotional check-ins, and expert audio protocols.'
    },
    {
      num: '05',
      title: 'Positive Habit Architecture',
      desc: 'Builds durable neural pathways for gratitude, optimism, and resilience via behavioral streaks and gentle micro-nudges.'
    },
    {
      num: '06',
      title: 'Inspiring Community Connection',
      desc: 'Connects professionals and teams with a supportive global network practicing eudaimonic well-being together.'
    }
  ];

  const appFeaturesWithAdvantages = [
    {
      icon: Headphones,
      feature: 'Guided Meditation & Breathwork Library',
      included: '3-min desk resets, deep focus soundscapes, box-breathing timers, and sleep recovery sessions.',
      advantage: 'Enables employees to reset autonomic nervous system stress in under 180 seconds between high-stakes meetings.'
    },
    {
      icon: BookMarked,
      feature: 'Structured Gratitude & Reflection Journal',
      included: 'Daily prompted micro-journaling, voice-to-text notes, private encrypted log, and weekly reflection digests.',
      advantage: 'Trains the brain to scan for progress and psychological safety, measurably increasing workplace optimism.'
    },
    {
      icon: Activity,
      feature: 'Real-Time Mood & Energy Pulse Tracker',
      included: 'One-tap emotional weather check-ins, 7-day & 30-day vitality trends, and personalized recovery recommendations.',
      advantage: 'Helps individuals spot burnout patterns early and adjust workload rhythm before exhaustion sets in.'
    },
    {
      icon: Sparkles,
      feature: 'Curated Daily Affirmations & Stoic Prompts',
      included: 'Morning executive mindset primers, purposeful leadership quotes, and customizable notification schedules.',
      advantage: 'Anchors daily execution in clarity and purpose rather than reactive inbox-driven urgency.'
    },
    {
      icon: Compass,
      feature: '100-Day Ikigai & Micro-Habit Pathways',
      included: 'Step-by-step habit streaks across the 5 HQX Well-Being Pillars (Physical, Mental, Career, Social, Financial).',
      advantage: 'Turns workshop insights into measurable 100-day behavioral transformation with high daily retention.'
    },
    {
      icon: BarChart3,
      feature: 'Enterprise Wellness Pulse & Privacy-First Insights',
      included: 'Anonymized organizational vitality index, department engagement heatmaps, and zero individual data exposure.',
      advantage: 'Gives HR and CXO leaders actionable well-being ROI metrics while strictly protecting employee confidentiality.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Section: About-Page Editorial Style + Apple App Store & Google Play Store Download Hub (Fit to Screen) */}
      <section className="bg-[#0A0A0A] text-white min-h-[100svh] lg:h-[100svh] lg:min-h-[620px] lg:max-h-[1080px] pt-20 sm:pt-24 pb-0 border-b border-white/10 relative overflow-hidden flex flex-col justify-between">
        {/* Subtle Ambient Glows */}
        <div className="absolute inset-0 bg-radial-gradient from-hq-yellow/10 via-transparent to-transparent pointer-events-none opacity-40" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-hq-yellow/5 rounded-full blur-[140px] pointer-events-none -mr-40" />

        {/* Left Side Vertical Text: HAPPYU APP */}
        <div className="absolute left-3 sm:left-6 lg:left-8 xl:left-12 inset-y-0 z-20 flex flex-col justify-center items-center pointer-events-none select-none">
          <div
            className="flex items-center gap-3 sm:gap-4"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span className="font-display text-[11px] sm:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-hq-yellow drop-shadow-md">
              HAPPYU APP
            </span>
            <span className="w-px h-8 sm:h-14 bg-white/25" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex-1 flex items-center py-2 sm:py-4 min-h-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center w-full">
            {/* Left Column: 2-Line Headline, Narrative & App Store / Google Play Download Buttons */}
            <div className="lg:col-span-6">
              <h1
                style={{ fontFamily: '"Geist", Arial, sans-serif', fontWeight: 300 }}
                className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[44px] tracking-tight font-light text-white leading-[1.14] mb-4"
              >
                <span className="block whitespace-nowrap">Your Pocket Sanctuary for</span>
                <span
                  style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                  className="block whitespace-nowrap text-hq-yellow font-bold"
                >
                  Daily Flourishing
                </span>
              </h1>

              <p className="font-body text-xs sm:text-sm md:text-base text-white/80 font-light leading-relaxed max-w-xl mb-6">
                HappyU is the official HQX mobile companion designed to elevate everyday well-being and emotional resilience. Packed with guided meditations, gratitude journaling, positive affirmations, and real-time mood tracking for lasting micro-habits.
              </p>

              {/* Official Store Download Buttons (Google Play Store & Apple App Store) */}
              <div id="download-app" className="mb-2">
                <div className="text-[11px] font-mono uppercase tracking-widest text-white/55 mb-3">
                  Download HappyU on Your Device
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  {/* Apple App Store Button */}
                  <a
                    href="#download-app"
                    onClick={(e) => {
                      e.preventDefault();
                      setStoreNotice('Apple App Store (iOS): Enterprise & individual access link ready — contact your HQX program coordinator or request instant access below.');
                    }}
                    className="group flex items-center gap-3.5 bg-white text-[#0A0A0A] hover:bg-hq-yellow transition-all duration-300 px-5 py-3.5 rounded-2xl shadow-xl border border-white"
                  >
                    <svg className="w-7 h-7 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.33c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.72 1.4-.58.68-1.1 1.79-.96 2.84 1.04.08 2.08-.52 2.72-1.3z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] font-mono uppercase tracking-wider leading-none opacity-75">
                        Download on the
                      </div>
                      <div className="font-display text-base sm:text-lg font-bold leading-tight tracking-tight">
                        App Store
                      </div>
                    </div>
                  </a>

                  {/* Google Play Store Button */}
                  <a
                    href="#download-app"
                    onClick={(e) => {
                      e.preventDefault();
                      setStoreNotice('Google Play Store (Android): Enterprise & individual access link ready — contact your HQX program coordinator or request instant access below.');
                    }}
                    className="group flex items-center gap-3.5 bg-[#16171B] text-white hover:bg-hq-yellow hover:text-[#0A0A0A] transition-all duration-300 px-5 py-3.5 rounded-2xl shadow-xl border border-white/20 hover:border-hq-yellow"
                  >
                    <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a1.98 1.98 0 0 1-.49-.923V2.737c0-.35.18-.675.489-.923zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] font-mono uppercase tracking-wider leading-none opacity-75">
                        Get it on
                      </div>
                      <div className="font-display text-base sm:text-lg font-bold leading-tight tracking-tight">
                        Google Play
                      </div>
                    </div>
                  </a>
                </div>

                {storeNotice && (
                  <div className="mt-4 p-4 rounded-xl bg-hq-yellow/15 border border-hq-yellow/40 text-xs sm:text-sm text-white/90 flex items-center justify-between gap-4 max-w-xl">
                    <span>{storeNotice}</span>
                    <Link
                      to="/contact"
                      className="shrink-0 bg-hq-yellow text-hq-black font-display font-bold text-[11px] uppercase tracking-wider px-3.5 py-2 rounded-lg hover:bg-white transition-colors"
                    >
                      Get Access Link
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: 3D Fanned Mobile Presentation (Coming One-by-One in HQX Brand Yellow & Black, Fit-to-Screen) */}
            <div className="lg:col-span-6 flex items-center justify-center relative select-none">
              <div
                style={{ perspective: '1500px' }}
                className="relative w-full max-w-[500px] h-[380px] sm:h-[420px] lg:h-[calc(100svh-185px)] max-h-[465px] flex items-center justify-center scale-[0.86] sm:scale-[0.92] xl:scale-[0.96] origin-center"
              >
                {/* Floor Shadow & Subtle Golden Base Reflection */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[82%] h-14 bg-black/95 rounded-full blur-xl pointer-events-none" />
                <div className="absolute bottom-5 left-1/3 -translate-x-1/2 w-56 h-10 bg-hq-yellow/15 rounded-full blur-2xl pointer-events-none" />

                {/* =========================================================
                    PHONE 3 (BACK-RIGHT RECLINING PHONE — COMES IN 3RD)
                    ========================================================= */}
                <div
                  onMouseEnter={() => setHoveredHeroPhone(3)}
                  onMouseLeave={() => setHoveredHeroPhone(null)}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform:
                      heroPhoneStep >= 3
                        ? hoveredHeroPhone === 3
                          ? 'translate3d(128px, 62px, 10px) rotateX(18deg) rotateY(-18deg) rotateZ(36deg) scale(1.03)'
                          : 'translate3d(122px, 74px, -70px) rotateX(22deg) rotateY(-20deg) rotateZ(41deg) scale(0.92)'
                        : 'translate3d(-30px, 95px, -140px) rotateX(16deg) rotateY(-12deg) rotateZ(6deg) scale(0.76)',
                    opacity: heroPhoneStep >= 3 ? 1 : 0,
                    transition: 'transform 850ms cubic-bezier(0.16, 1, 0.3, 1), opacity 600ms ease-out'
                  }}
                  className="absolute z-10 w-[205px] sm:w-[225px] h-[415px] sm:h-[450px] rounded-[42px] p-[3px] bg-gradient-to-br from-[#686b75] via-[#22242a] to-[#111216] shadow-[22px_32px_60px_rgba(0,0,0,0.96),5px_4px_0_#2c2e36,9px_7px_0_#14151a] cursor-pointer"
                >
                  {/* Side Metallic Buttons */}
                  <span className="absolute -right-[4px] top-[120px] w-[3px] h-12 rounded-r-sm bg-gradient-to-b from-[#7a7e8a] to-[#2b2d35]" />
                  <div className="w-full h-full rounded-[39px] bg-[#050507] p-[6px] shadow-[inset_0_0_10px_rgba(0,0,0,0.95)]">
                    <div className="relative w-full h-full rounded-[34px] bg-gradient-to-b from-[#0d0e12] via-[#070709] to-[#040406] border border-white/[0.08] overflow-hidden flex flex-col items-center justify-center">
                      {/* Glass sheen */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.02) 32%, transparent 60%)'
                        }}
                      />
                      {/* Dynamic Island */}
                      <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-black border border-white/10" />

                      {/* Official HQX Brand Logo Emblem */}
                      <div className="relative flex flex-col items-center justify-center">
                        <div className="w-28 h-28 rounded-full bg-hq-yellow/10 blur-2xl absolute pointer-events-none" />
                        <BrandLogo
                          className="h-12 sm:h-14 w-auto drop-shadow-[0_0_24px_rgba(255,205,0,0.35)]"
                          textColor="#FFFFFF"
                        />
                      </div>

                      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-white/20" />
                    </div>
                  </div>
                </div>

                {/* =========================================================
                    PHONE 2 (MIDDLE FANNED PHONE — COMES IN 2ND)
                    ========================================================= */}
                <div
                  onMouseEnter={() => setHoveredHeroPhone(2)}
                  onMouseLeave={() => setHoveredHeroPhone(null)}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform:
                      heroPhoneStep >= 2
                        ? hoveredHeroPhone === 2
                          ? 'translate3d(44px, 14px, 25px) rotateX(12deg) rotateY(-15deg) rotateZ(18deg) scale(1.03)'
                          : 'translate3d(38px, 28px, -30px) rotateX(14deg) rotateY(-16deg) rotateZ(21deg) scale(0.96)'
                        : 'translate3d(-55px, 65px, -90px) rotateX(10deg) rotateY(-10deg) rotateZ(-2deg) scale(0.82)',
                    opacity: heroPhoneStep >= 2 ? 1 : 0,
                    transition: 'transform 800ms cubic-bezier(0.16, 1, 0.3, 1), opacity 550ms ease-out'
                  }}
                  className="absolute z-20 w-[210px] sm:w-[230px] h-[425px] sm:h-[460px] rounded-[43px] p-[3px] bg-gradient-to-br from-[#70747f] via-[#25272e] to-[#121318] shadow-[20px_30px_60px_rgba(0,0,0,0.96),5px_3px_0_#2f323b,8px_6px_0_#15161b] cursor-pointer"
                >
                  {/* Side Metallic Button */}
                  <span className="absolute -right-[4px] top-[124px] w-[3px] h-12 rounded-r-sm bg-gradient-to-b from-[#7a7e8a] to-[#2b2d35]" />
                  <div className="w-full h-full rounded-[40px] bg-[#050507] p-[6px] shadow-[inset_0_0_10px_rgba(0,0,0,0.95)]">
                    <div className="relative w-full h-full rounded-[35px] bg-gradient-to-b from-[#101116] via-[#08080b] to-[#040406] border border-white/[0.09] overflow-hidden flex flex-col justify-between p-5">
                      {/* Glass Specular Sheen */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 35%, transparent 62%)'
                        }}
                      />

                      {/* Dynamic Island */}
                      <div className="w-full flex justify-center pt-0.5">
                        <div className="w-16 h-4 rounded-full bg-black border border-white/10" />
                      </div>

                      {/* Editorial Mission Typography */}
                      <div className="my-auto pl-2 pr-1">
                        <div className="font-display text-[19px] sm:text-[21px] font-medium leading-[1.24] tracking-tight text-white/85">
                          Our mission is <br />
                          to empower <br />
                          minds with <br />
                          daily rituals <br />
                          <span className="text-hq-yellow font-semibold">
                            that drive real <br />
                            impact.
                          </span>
                        </div>
                      </div>

                      {/* Bottom Brand Sign-Off */}
                      <div className="pl-2 pb-2">
                        <BrandLogo
                          className="h-5 w-auto mb-1.5"
                          textColor="#FFFFFF"
                        />
                        <div className="font-display text-[11px] font-bold text-white/85 tracking-tight">
                          happyu.hqx
                        </div>
                        <div className="font-mono text-[9px] text-white/45 leading-tight">
                          Well-Being Companion
                        </div>
                      </div>

                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-white/20" />
                    </div>
                  </div>
                </div>

                {/* =========================================================
                    PHONE 1 (PRIMARY FOREGROUND PHONE — COMES IN 1ST)
                    ========================================================= */}
                <div
                  onMouseEnter={() => setHoveredHeroPhone(1)}
                  onMouseLeave={() => setHoveredHeroPhone(null)}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform:
                      heroPhoneStep >= 1
                        ? hoveredHeroPhone === 1
                          ? 'translate3d(-66px, -16px, 45px) rotateX(6deg) rotateY(12deg) rotateZ(-3deg) scale(1.03)'
                          : 'translate3d(-64px, -10px, 20px) rotateX(8deg) rotateY(14deg) rotateZ(-5deg) scale(1)'
                        : 'translate3d(-64px, 75px, -40px) rotateX(18deg) rotateY(14deg) rotateZ(-8deg) scale(0.88)',
                    opacity: heroPhoneStep >= 1 ? 1 : 0,
                    transition: 'transform 750ms cubic-bezier(0.16, 1, 0.3, 1), opacity 500ms ease-out'
                  }}
                  className="absolute z-30 w-[220px] sm:w-[242px] h-[445px] sm:h-[482px] rounded-[44px] p-[3px] bg-gradient-to-br from-[#7c808c] via-[#282a32] to-[#14151a] shadow-[26px_36px_70px_rgba(0,0,0,0.98),5px_3px_0_#343741,8px_6px_0_#17181e,0_0_45px_rgba(250,204,21,0.08)] cursor-pointer"
                >
                  {/* Side Metallic Hardware Buttons */}
                  <span className="absolute -left-[4px] top-[92px] w-[3px] h-6 rounded-l-sm bg-gradient-to-b from-[#7a7e8a] to-[#2b2d35]" />
                  <span className="absolute -left-[4px] top-[130px] w-[3px] h-10 rounded-l-sm bg-gradient-to-b from-[#7a7e8a] to-[#2b2d35]" />
                  <span className="absolute -right-[4px] top-[138px] w-[3px] h-13 rounded-r-sm bg-gradient-to-b from-[#7a7e8a] to-[#2b2d35]" />

                  <div className="w-full h-full rounded-[41px] bg-[#050507] p-[6px] shadow-[inset_0_0_12px_rgba(0,0,0,0.95)]">
                    <div className="relative w-full h-full rounded-[36px] bg-[#070709] border border-white/[0.1] overflow-hidden flex flex-col justify-between">
                      {/* Glass Specular Reflection */}
                      <div
                        className="absolute inset-0 pointer-events-none z-30"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 32%, transparent 58%)'
                        }}
                      />

                      {/* Top Section: Dynamic Island + Brand Header */}
                      <div className="relative z-20 px-5 pt-3.5">
                        {/* Dynamic Island */}
                        <div className="w-18 h-4.5 mx-auto rounded-full bg-black border border-white/10 mb-4 flex items-center justify-end px-2">
                          <span className="w-2 h-2 rounded-full bg-[#10192e] border border-white/15" />
                        </div>

                        {/* Top Nav Row: Official HQX Brand Logo Left + Menu Right */}
                        <div className="flex items-center justify-between mb-6">
                          <BrandLogo
                            className="h-5 w-auto"
                            textColor="#FFFFFF"
                          />
                          <div className="flex flex-col gap-[3.5px] w-4">
                            <span className="w-full h-[1.5px] bg-white/85 rounded-full" />
                            <span className="w-full h-[1.5px] bg-white/85 rounded-full" />
                            <span className="w-full h-[1.5px] bg-white/85 rounded-full" />
                          </div>
                        </div>

                        {/* Main Screen Headline (Exact Match to Reference Layout in Brand Yellow) */}
                        <div className="font-display text-[25px] sm:text-[27px] font-bold leading-[1.08] tracking-tight text-white mb-3">
                          Building <br />
                          Daily Joy <br />
                          <span className="text-hq-yellow">Mindfully.</span>
                        </div>

                        <p className="font-body text-[10.5px] text-white/65 font-light leading-relaxed mb-4 pr-1">
                          We design science-backed daily micro-habits that help leaders and teams flourish faster and calmer.
                        </p>

                        {/* Brand Pill CTA Button + Arrow Circle */}
                        <div className="inline-flex items-center bg-hq-yellow/20 border border-hq-yellow/40 rounded-full p-0.5 pr-2.5 gap-2 shadow-[0_0_20px_rgba(250,204,21,0.2)]">
                          <span className="bg-hq-yellow text-[#0A0A0A] font-display font-bold text-[10.5px] px-3.5 py-1.5 rounded-full tracking-tight shadow-sm">
                            Let&apos;s Flourish
                          </span>
                          <span className="text-hq-yellow text-xs font-bold leading-none">↗</span>
                        </div>
                      </div>

                      {/* Bottom Horizon Skyline & Golden Converging Light Beams */}
                      <div className="relative h-40 w-full overflow-hidden mt-auto">
                        {/* Ambient Golden Horizon Glow */}
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{
                            background:
                              'radial-gradient(circle at 50% 68%, rgba(250,204,21,0.42) 0%, rgba(217,119,6,0.18) 38%, transparent 72%)'
                          }}
                        />

                        {/* Architectural Skyline Silhouette + Converging Golden Light Rays */}
                        <svg
                          viewBox="0 0 240 150"
                          className="w-full h-full object-cover"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            <linearGradient id="skylineTower" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#26200B" />
                              <stop offset="50%" stopColor="#120F05" />
                              <stop offset="100%" stopColor="#050507" />
                            </linearGradient>
                            <linearGradient id="goldRay" x1="50%" y1="0%" x2="50%" y2="100%">
                              <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.95" />
                              <stop offset="55%" stopColor="#FACC15" stopOpacity="0.55" />
                              <stop offset="100%" stopColor="#CA8A04" stopOpacity="0.05" />
                            </linearGradient>
                          </defs>

                          {/* Vertical Golden Spire Beam */}
                          <line x1="120" y1="18" x2="120" y2="98" stroke="#FEF08A" strokeWidth="1.2" strokeOpacity="0.7" />
                          <circle cx="120" cy="48" r="3" fill="#FEF08A" />

                          {/* Dark Skyline Towers */}
                          <rect x="18" y="64" width="14" height="36" fill="url(#skylineTower)" stroke="#FACC15" strokeOpacity="0.18" strokeWidth="0.6" />
                          <rect x="36" y="52" width="16" height="48" fill="url(#skylineTower)" stroke="#FACC15" strokeOpacity="0.22" strokeWidth="0.6" />
                          <rect x="56" y="60" width="13" height="40" fill="url(#skylineTower)" stroke="#FACC15" strokeOpacity="0.18" strokeWidth="0.6" />
                          <rect x="74" y="42" width="18" height="58" fill="url(#skylineTower)" stroke="#FACC15" strokeOpacity="0.28" strokeWidth="0.7" />
                          <rect x="96" y="54" width="14" height="46" fill="url(#skylineTower)" stroke="#FACC15" strokeOpacity="0.25" strokeWidth="0.6" />
                          <polygon points="120,28 112,50 112,100 128,100 128,50" fill="url(#skylineTower)" stroke="#FACC15" strokeOpacity="0.4" strokeWidth="0.8" />
                          <rect x="132" y="56" width="14" height="44" fill="url(#skylineTower)" stroke="#FACC15" strokeOpacity="0.24" strokeWidth="0.6" />
                          <rect x="150" y="40" width="19" height="60" fill="url(#skylineTower)" stroke="#FACC15" strokeOpacity="0.28" strokeWidth="0.7" />
                          <rect x="174" y="58" width="15" height="42" fill="url(#skylineTower)" stroke="#FACC15" strokeOpacity="0.2" strokeWidth="0.6" />
                          <rect x="193" y="48" width="16" height="52" fill="url(#skylineTower)" stroke="#FACC15" strokeOpacity="0.22" strokeWidth="0.6" />
                          <rect x="213" y="66" width="13" height="34" fill="url(#skylineTower)" stroke="#FACC15" strokeOpacity="0.16" strokeWidth="0.6" />

                          {/* Horizon Floor Plane */}
                          <rect x="0" y="98" width="240" height="52" fill="#050507" />

                          {/* Converging Perspective Golden Light Streaks from Focal Point (120, 98) */}
                          <line x1="120" y1="98" x2="-10" y2="148" stroke="url(#goldRay)" strokeWidth="1.4" />
                          <line x1="120" y1="98" x2="28" y2="150" stroke="url(#goldRay)" strokeWidth="1.8" />
                          <line x1="120" y1="98" x2="68" y2="150" stroke="url(#goldRay)" strokeWidth="2.2" />
                          <line x1="120" y1="98" x2="104" y2="150" stroke="url(#goldRay)" strokeWidth="2.4" />
                          <line x1="120" y1="98" x2="136" y2="150" stroke="url(#goldRay)" strokeWidth="2.4" />
                          <line x1="120" y1="98" x2="172" y2="150" stroke="url(#goldRay)" strokeWidth="2.2" />
                          <line x1="120" y1="98" x2="212" y2="150" stroke="url(#goldRay)" strokeWidth="1.8" />
                          <line x1="120" y1="98" x2="250" y2="148" stroke="url(#goldRay)" strokeWidth="1.4" />

                          {/* Intense Golden Focal Core */}
                          <circle cx="120" cy="98" r="16" fill="#FACC15" fillOpacity="0.35" />
                          <circle cx="120" cy="98" r="4.5" fill="#FEF9C3" />
                        </svg>

                        {/* Home Indicator Bar */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-22 h-1 rounded-full bg-white/30" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Docked Stats & Reputation Strip */}
        <div className="w-full bg-[#0A0A0A]/95 text-white/80 py-3.5 sm:py-4 px-6 border-t border-white/10 overflow-hidden relative z-20">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs font-mono uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">iOS &amp; Android</span>
              <span className="text-white/70">Native Mobile &amp; Tablet</span>
            </div>
            <span className="text-white/20 hidden md:inline">&bull;</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">50,000+</span>
              <span className="text-white/70">Active Practitioners</span>
            </div>
            <span className="text-white/20 hidden md:inline">&bull;</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">5 Mins/Day</span>
              <span className="text-white/70">Micro-Habit Protocol</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Features Included in the App & Their Advantages (Reference 3-Card Carousel on Light Shade) */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-[#F2F3F5] text-[#0A0A0A] border-b border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 pb-8 border-b border-black/10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] leading-[1.08]">
                Features Included <br />
                <span className="text-[#666666] font-light">&amp; Key Advantages</span>
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-[#0A0A0A]/65 max-w-md font-light leading-relaxed lg:pb-1">
              Every module inside HappyU pairs an effortless daily tool with a concrete cognitive or workplace advantage.
            </p>
          </div>

          <div
            className={`overflow-hidden -mx-4 px-4 py-14 -my-10 touch-pan-y ${
              isDraggingFeatures ? 'cursor-grabbing select-none' : 'cursor-grab'
            }`}
            onMouseEnter={() => setIsFeaturesPaused(true)}
            onMouseLeave={() => setIsFeaturesPaused(false)}
            onPointerDown={handleFeaturesPointerDown}
          >
            <div ref={featuresTrackRef} className="flex items-stretch will-change-transform">
              {[0, 1].map((copyIdx) => (
                <div
                  key={copyIdx}
                  ref={copyIdx === 0 ? featuresSetRef : undefined}
                  aria-hidden={copyIdx === 1 ? 'true' : undefined}
                  className="flex gap-6 pr-6 shrink-0"
                >
                  {appFeaturesWithAdvantages.map((item, globalIdx) => {
                    const FeatureIcon = item.icon;
                    const isActive = activeFeatureIdx === globalIdx;

                    return (
                      <div
                        key={`${copyIdx}-${globalIdx}`}
                        onMouseEnter={() => {
                          if (!featureDragRef.current.active) setActiveFeatureIdx(globalIdx);
                        }}
                        onClick={() => {
                          if (!featureDragRef.current.moved) setActiveFeatureIdx(globalIdx);
                        }}
                        className={`relative rounded-[28px] transition-all duration-300 flex flex-col justify-between min-h-[430px] w-[300px] sm:w-[345px] lg:w-[378px] shrink-0 overflow-hidden ${
                          isDraggingFeatures ? 'cursor-grabbing' : 'cursor-grab'
                        } ${
                          isActive
                            ? 'bg-white shadow-[0_14px_34px_rgba(0,0,0,0.08)]'
                            : 'bg-white/95 hover:bg-white shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-black/[0.04]'
                        }`}
                      >
                        {isActive ? (
                          <div className="p-5 sm:p-6 flex flex-col justify-between h-full">
                            {/* Top Visual Header with Stepped Corner Cutout & Isometric HQX Artwork */}
                            <div className="relative mb-6">
                              {/* Top-Left Cutout Icon Badge */}
                              <div className="absolute -top-1 -left-1 z-20 w-12 h-12 rounded-br-[20px] bg-white flex items-start justify-start p-1.5">
                                <div className="w-9 h-9 rounded-xl border border-black/15 bg-white text-[#0A0A0A] flex items-center justify-center shadow-xs">
                                  <FeatureIcon className="w-4 h-4" />
                                </div>
                              </div>

                              {/* Top-Right Stepped White Notch */}
                              <div className="absolute -top-1 -right-1 z-20 w-24 h-10 rounded-bl-[20px] bg-white flex items-center justify-end pr-2.5">
                                <span className="text-[10px] font-mono uppercase tracking-widest text-[#0A0A0A]/50 font-semibold">
                                  0{globalIdx + 1} / 06
                                </span>
                              </div>

                              {/* Rounded Visual Artwork Card */}
                              <div className="relative h-48 rounded-[22px] overflow-hidden bg-[#0A0A0A] flex items-center justify-center p-6">
                                {/* Isometric Geometric Cubes Backdrop in HQX Brand Colors */}
                                <svg
                                  viewBox="0 0 320 200"
                                  className="absolute inset-0 w-full h-full object-cover opacity-85"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <defs>
                                    <radialGradient id={`featGlow-${copyIdx}-${globalIdx}`} cx="50%" cy="45%" r="60%">
                                      <stop offset="0%" stopColor="#FFCD00" stopOpacity="0.42" />
                                      <stop offset="55%" stopColor="#CA8A04" stopOpacity="0.16" />
                                      <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0" />
                                    </radialGradient>
                                  </defs>
                                  <rect width="320" height="200" fill="#0A0A0A" />
                                  <rect width="320" height="200" fill={`url(#featGlow-${copyIdx}-${globalIdx})`} />
                                  {/* Isometric 3D Cubes */}
                                  <g opacity="0.9">
                                    <polygon points="75,90 115,68 155,90 115,112" fill="#FFCD00" fillOpacity="0.32" stroke="#FFCD00" strokeOpacity="0.45" strokeWidth="1" />
                                    <polygon points="75,90 115,112 115,160 75,138" fill="#1F2026" stroke="#FFCD00" strokeOpacity="0.25" strokeWidth="1" />
                                    <polygon points="155,90 115,112 115,160 155,138" fill="#141519" stroke="#FFCD00" strokeOpacity="0.2" strokeWidth="1" />

                                    <polygon points="175,65 220,40 265,65 220,90" fill="#FFCD00" fillOpacity="0.42" stroke="#FFCD00" strokeOpacity="0.55" strokeWidth="1" />
                                    <polygon points="175,65 220,90 220,145 175,120" fill="#23242B" stroke="#FFCD00" strokeOpacity="0.25" strokeWidth="1" />
                                    <polygon points="265,65 220,90 220,145 265,120" fill="#141519" stroke="#FFCD00" strokeOpacity="0.2" strokeWidth="1" />

                                    <polygon points="120,138 165,114 210,138 165,162" fill="#FFCD00" fillOpacity="0.24" stroke="#FFCD00" strokeOpacity="0.35" strokeWidth="1" />
                                    <polygon points="120,138 165,162 165,205 120,180" fill="#1A1B20" stroke="#FFCD00" strokeOpacity="0.18" strokeWidth="1" />
                                    <polygon points="210,138 165,162 165,205 210,180" fill="#111216" stroke="#FFCD00" strokeOpacity="0.15" strokeWidth="1" />
                                  </g>
                                </svg>

                                {/* Feature Title Overlaid on Visual Card */}
                                <h3 className="relative z-10 font-display text-lg sm:text-xl font-semibold text-white leading-snug tracking-tight text-center px-2 drop-shadow-md">
                                  {item.feature}
                                </h3>
                              </div>
                            </div>

                            {/* Lower Content: Dash + Concise Details */}
                            <div className="px-2 pb-2 flex-1 flex flex-col justify-end">
                              <span className="w-5 h-[1.5px] bg-[#0A0A0A]/45 block mb-4" />
                              <p className="font-body text-xs sm:text-[13px] text-[#0A0A0A]/75 font-light leading-relaxed mb-3">
                                {item.included}
                              </p>
                              <p className="font-body text-xs sm:text-[13px] text-[#0A0A0A] font-medium leading-relaxed">
                                {item.advantage}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="p-7 sm:p-8 flex flex-col justify-between h-full">
                            {/* Top Title */}
                            <div>
                              <h3 className="font-display text-xl sm:text-2xl font-medium text-[#0A0A0A] leading-[1.2] tracking-tight pr-4">
                                {item.feature}
                              </h3>
                            </div>

                            {/* Middle Dash + Description + Bottom-Left Circular Icon */}
                            <div className="pt-8">
                              <span className="w-5 h-[1.5px] bg-[#0A0A0A]/40 block mb-4" />
                              <p className="font-body text-xs sm:text-[13px] text-[#0A0A0A]/70 font-light leading-relaxed mb-7">
                                {item.included} {item.advantage}
                              </p>
                              <div className="w-10 h-10 rounded-full bg-[#F2F3F5] text-[#0A0A0A] flex items-center justify-center">
                                <FeatureIcon className="w-4 h-4" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Controls Bar: Prev/Next Arrows (Left) + Segmented Progress Lines (Right) */}
          <div className="flex items-center justify-between mt-6 pt-2">
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous feature"
                onClick={() => shiftFeaturesCarousel(1)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#0A0A0A]/45 hover:text-[#0A0A0A] hover:bg-black/5 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label="Next feature"
                onClick={() => shiftFeaturesCarousel(-1)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#0A0A0A] hover:bg-black/5 transition-colors cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Segmented Line Indicator */}
            <div className="flex items-center gap-2">
              {[0, 1].map((pageIdx) => {
                const featurePage = Math.floor(activeFeatureIdx / 3);
                return (
                  <button
                    key={pageIdx}
                    type="button"
                    aria-label={`View features set ${pageIdx + 1}`}
                    onClick={() => setActiveFeatureIdx(pageIdx * 3)}
                    className={`h-[2.5px] rounded-full transition-all duration-300 cursor-pointer ${
                      featurePage === pageIdx
                        ? 'w-12 bg-[#0A0A0A]'
                        : 'w-6 bg-[#0A0A0A]/20 hover:bg-[#0A0A0A]/45'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Key Benefits of Using HappyU (Dark Monochrome Scrolling Cards + Morph-to-Mobile Screen) */}
      <BenefitsMobileCarousel benefits={appBenefits} />

      {/* Bottom Download & Enterprise Licensing CTA (Reference Rounded Yellow Banner + Bottom-Docked iPhone Mockup) */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto bg-hq-yellow text-[#0A0A0A] rounded-[28px] sm:rounded-[36px] px-7 sm:px-12 lg:px-16 pt-12 sm:pt-16 pb-0 overflow-hidden shadow-2xl border border-black/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Bold Headline, Description & Black Store Buttons */}
            <div className="lg:col-span-7 pb-10 sm:pb-14 lg:pb-16 text-left">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-[42px] font-semibold tracking-tight text-[#0A0A0A] leading-[1.22] mb-4 max-w-xl">
                Download HappyU or <br />
                <span className="text-[#0A0A0A]/55 font-light">Deploy Across Your Enterprise</span>
              </h2>
              <p className="font-body text-[#0A0A0A]/80 max-w-lg mb-8 font-normal text-sm sm:text-base leading-relaxed">
                Available for individual practitioners on iOS and Android, with bulk enterprise licensing and anonymized wellness dashboards for HR and CXO teams.
              </p>

              {/* Store Download Buttons (Matching Reference Black Cards with Yellow Icons) */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <a
                  href="#download-app"
                  onClick={(e) => {
                    e.preventDefault();
                    setStoreNotice('Apple App Store (iOS): Enterprise & individual access link ready — contact your HQX program coordinator or request instant access below.');
                    document.getElementById('download-app')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group flex items-center gap-3 bg-[#0A0A0A] text-white hover:bg-[#1a1b20] transition-all duration-300 px-5 py-3 rounded-xl shadow-lg"
                >
                  <svg className="w-6 h-6 text-hq-yellow fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.33c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.72 1.4-.58.68-1.1 1.79-.96 2.84 1.04.08 2.08-.52 2.72-1.3z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] font-body text-white/65 leading-none mb-1">
                      Download on the
                    </div>
                    <div className="font-display text-sm sm:text-base font-bold leading-none tracking-tight">
                      App Store
                    </div>
                  </div>
                </a>

                <a
                  href="#download-app"
                  onClick={(e) => {
                    e.preventDefault();
                    setStoreNotice('Google Play Store (Android): Enterprise & individual access link ready — contact your HQX program coordinator or request instant access below.');
                    document.getElementById('download-app')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group flex items-center gap-3 bg-[#0A0A0A] text-white hover:bg-[#1a1b20] transition-all duration-300 px-5 py-3 rounded-xl shadow-lg"
                >
                  <svg className="w-5 h-5 text-hq-yellow fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.98 1.98 0 0 1-.49-.923V2.737c0-.35.18-.675.489-.923zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] font-body text-white/65 leading-none mb-1">
                      Get it on
                    </div>
                    <div className="font-display text-sm sm:text-base font-bold leading-none tracking-tight">
                      Google Play
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Bottom-Docked Sleek Dark iPhone Mockup with Brand Logo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end self-end">
              <div className="relative w-[240px] sm:w-[265px] h-[300px] sm:h-[330px] rounded-t-[42px] p-[4px] pb-0 bg-gradient-to-b from-[#3f424a] via-[#1c1d22] to-[#0a0a0c] shadow-[0_-10px_40px_rgba(0,0,0,0.22)]">
                <div className="w-full h-full rounded-t-[38px] bg-[#070709] p-[7px] pb-0">
                  <div className="relative w-full h-full rounded-t-[32px] bg-gradient-to-b from-[#111216] via-[#09090c] to-[#050507] border border-b-0 border-white/[0.08] overflow-hidden flex flex-col items-center">
                    {/* Top Status Bar & Dynamic Island */}
                    <div className="w-full px-5 pt-3.5 flex items-center justify-between text-[10px] font-mono text-white/80">
                      <span className="font-semibold">9:41</span>
                      <div className="w-[68px] h-[18px] rounded-full bg-black border border-white/[0.08]" />
                      <div className="flex items-center gap-1">
                        <span className="flex items-end gap-[1.5px] h-2">
                          <span className="w-[2px] h-1 bg-white/80 rounded-full" />
                          <span className="w-[2px] h-1.5 bg-white/80 rounded-full" />
                          <span className="w-[2px] h-2 bg-white/80 rounded-full" />
                        </span>
                      </div>
                    </div>

                    {/* Centered App Icon & Brand Wordmark */}
                    <div className="relative flex-1 flex flex-col items-center justify-center pb-6">
                      <div className="absolute w-32 h-32 rounded-full bg-hq-yellow/15 blur-2xl pointer-events-none" />
                      <div className="relative mb-3.5 shadow-[0_10px_28px_rgba(255,205,0,0.28)] rounded-2xl">
                        <BrandLogo iconOnly={true} className="w-14 h-14" />
                      </div>
                      <div className="font-display text-lg font-extrabold tracking-wider text-white uppercase leading-none mb-1.5">
                        HAPPYU
                      </div>
                      <div className="font-body text-[10px] text-white/55 tracking-wide mb-4">
                        Elevate everyday well-being.
                      </div>
                      {/* Minimal Progress Indicator Bar */}
                      <div className="w-14 h-[2px] bg-white/15 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-hq-yellow rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
