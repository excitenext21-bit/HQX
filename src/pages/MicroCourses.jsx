import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../components/common/BrandLogo';
import { 
  Compass, 
  Sparkles, 
  Wallet, 
  Shield, 
  Check, 
  Clock, 
  BookOpen, 
  Star, 
  CheckCircle2, 
  X, 
  FileText, 
  BarChart3, 
  BookMarked,
  ArrowRight,
  TrendingUp,
  Brain,
  Target,
  Zap,
  Users
} from 'lucide-react';

export default function MicroCourses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrolledSuccess, setEnrolledSuccess] = useState(false);
  const [enrollForm, setEnrollForm] = useState({ name: '', email: '' });
  const [activeMasteryIdx, setActiveMasteryIdx] = useState(0);
  const [activeSectionTab, setActiveSectionTab] = useState('mini-masteries');

  const curriculumTabs = [
    { id: 'mini-masteries', label: 'Mini Masteries', icon: Target },
    { id: 'biweekly-posts', label: 'Bi-Weekly Posts on Well-Being', icon: Zap },
    { id: 'hq-assessment', label: 'HQ & Introspective Assessment', icon: Users },
    { id: 'handouts-exercises', label: 'Handouts & Exercises', icon: Compass }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const triggerY = window.innerHeight * 0.35;
      let current = curriculumTabs[0].id;
      for (const tab of curriculumTabs) {
        const el = document.getElementById(tab.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerY) {
            current = tab.id;
          }
        }
      }
      setActiveSectionTab(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCurriculumSection = (id) => {
    setActiveSectionTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // 5 Mini Masteries directly from Profile Page 16
  const microCourses = [
    {
      id: 'passion-quest',
      title: 'Passion Quest',
      subtitle: 'Identify & Awaken Authentic Intrinsic Drives',
      duration: '100 Days',
      price: '₹4,999',
      icon: Sparkles,
      description: 'Explore and identify personal passions, guiding individuals towards a more fulfilling life aligned with their authentic interests. Systematically eliminate self-sabotaging friction and build daily creative flow.',
      modules: 14,
      enrolledCount: 1840,
      badge: 'Bestseller'
    },
    {
      id: 'finding-ikigai',
      title: 'Finding Your Ikigai',
      subtitle: 'The Japanese Art of Life Direction',
      duration: '100 Days',
      price: '₹4,999',
      icon: Compass,
      description: 'Discover your purpose by integrating what you love, what you are good at, what the world needs, and what you can be paid for. Build a harmonized career and personal operating system.',
      modules: 16,
      enrolledCount: 2450,
      badge: 'Flagship'
    },
    {
      id: 'purpose-deep-dive',
      title: 'Purpose Deep Dive',
      subtitle: 'Core Values & Strategic Life Clarity',
      duration: '100 Days',
      price: '₹4,999',
      icon: Brain,
      description: 'Delve deeply into personal purpose, providing clarity, direction, and understanding of core values for decision-making. Shift from frantic reactive survival to grounded executive intention.',
      modules: 12,
      enrolledCount: 1390,
      badge: 'Executive'
    },
    {
      id: 'happiness-in-money',
      title: 'Happiness in Money',
      subtitle: 'Psychology of Wealth & Abundance Mindset',
      duration: '100 Days',
      price: '₹4,999',
      icon: Wallet,
      description: 'Learn the profound connection between money and well-being, fostering a healthier mindset towards finances for increased happiness, freedom from scarcity anxiety, and smart wealth stewardship.',
      modules: 15,
      enrolledCount: 2190,
      badge: 'Popular'
    },
    {
      id: 'habit-building-journaling',
      title: 'Habit Building (Power of Journaling)',
      subtitle: 'Transformative Daily Micro-Rituals',
      duration: '100 Days',
      price: '₹4,999',
      icon: BookMarked,
      description: 'Establish positive habits through the transformative practice of journaling, promoting self-awareness and mindfulness in daily routines. Small daily micro-shifts compounding into massive life change.',
      modules: 14,
      enrolledCount: 1620,
      badge: 'Habit Mastery'
    }
  ];

  const handleEnroll = (e) => {
    e.preventDefault();
    setEnrolledSuccess(true);
    setTimeout(() => {
      setEnrolledSuccess(false);
      setSelectedCourse(null);
      setEnrollForm({ name: '', email: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Hero Section: About Us / Workshops Editorial Split Layout + Interactive 100-Day Blueprint Deck */}
      {/* Hero Section: About-Page Editorial Style + 3D Golden Sand Hourglass on Pure Black */}
      <section className="bg-black text-white min-h-[100svh] lg:h-[100svh] lg:min-h-[600px] lg:max-h-[1080px] flex flex-col justify-between pt-24 sm:pt-28 pb-0 border-b border-white/10 relative overflow-hidden w-full">
        {/* Left Side Vertical Text: MICRO COURSES (Matching About Us Hero Style) */}
        <div className="hidden lg:flex absolute left-3 sm:left-6 lg:left-8 xl:left-12 inset-y-0 z-20 flex-col justify-center items-center pointer-events-none select-none">
          <div
            className="flex items-center gap-3 sm:gap-4"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span className="font-display text-[15px] sm:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-hq-yellow drop-shadow-md">
              MICRO COURSES
            </span>
            <span className="w-px h-8 sm:h-14 bg-white/25" />
          </div>
        </div>

        {/* Framing Container (About-Us Left Content + Right Hourglass) */}
        <div className="max-w-7xl mx-auto pl-11 pr-6 sm:pl-14 sm:pr-8 md:px-12 w-full relative z-10 flex-1 flex items-center py-4 sm:py-6 min-h-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
            {/* Left Column: About-Us Editorial Headline, Subtext & Signature Hairline CTA */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="max-w-md">
                <h1
                  className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-light tracking-tight text-white leading-[1.15] mb-5"
                >
                  100-Day <br />
                  <span
                    className="text-hq-yellow font-bold"
                  >
                    Micro Courses
                  </span>
                </h1>

                <p className="font-body text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8">
                  Digital 100-day courses that can be done at your own pace and from anywhere. 10 minutes of daily micro-learning that systematically re-engineers habits, emotional poise, purpose alignment, and financial well-being.
                </p>

                <div className="pt-1 flex flex-wrap items-center gap-6">
                  <a
                    href="#courses-catalog"
                    className="group relative inline-flex items-center justify-between gap-8 py-3.5 px-2 font-display font-medium text-xs tracking-[0.2em] text-white hover:text-hq-yellow transition-colors duration-300 uppercase"
                  >
                    <span className="absolute top-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />
                    <span className="relative z-10 font-semibold tracking-widest">BROWSE MINI MASTERIES</span>
                    <svg
                      className="w-[22px] h-[11px] inline-block transition-transform duration-300 group-hover:translate-x-1.5 flex-shrink-0"
                      viewBox="0 0 20 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="0" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="1.2" />
                      <polyline points="15 1, 20 5, 15 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="absolute bottom-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Complete Full-View Golden Sand Hourglass Image (+25% Larger) + Flowing Sand Animation */}
            <div className="lg:col-span-7 flex items-center justify-center">
              <div className="relative h-[475px] sm:h-[550px] lg:h-[calc(100svh-145px)] max-h-[675px] aspect-[736/1104] flex items-center justify-center select-none pointer-events-none scale-[1.25] origin-center">
                <img
                  src="/images/hourglass-hero.jpg"
                  alt="Golden Sand Hourglass"
                  className="w-full h-full object-contain pointer-events-none select-none"
                />

                {/* Animated Golden Sand Stream Flowing Through the Center Neck */}
                <svg
                  viewBox="0 0 200 300"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="flowingSandGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.95" />
                      <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#FDE68A" stopOpacity="0.85" />
                    </linearGradient>
                  </defs>

                  {/* Continuous Shimmering Sand Stream in Neck (y=130 to y=198) */}
                  <line
                    x1="100"
                    y1="131"
                    x2="100"
                    y2="198"
                    stroke="url(#flowingSandGrad)"
                    strokeWidth="1.6"
                    strokeDasharray="3 4"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="28"
                      to="0"
                      dur="0.65s"
                      repeatCount="indefinite"
                    />
                  </line>

                  <line
                    x1="100"
                    y1="133"
                    x2="100"
                    y2="198"
                    stroke="#FFFBEB"
                    strokeWidth="0.9"
                    strokeDasharray="1.5 5.5"
                    strokeOpacity="0.85"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="28"
                      to="0"
                      dur="0.45s"
                      repeatCount="indefinite"
                    />
                  </line>

                  {/* Falling Sand Micro-Grains Near Pyramid Apex */}
                  {[
                    { cx: 98.8, delay: '0s', dur: '0.7s' },
                    { cx: 101.2, delay: '0.22s', dur: '0.65s' },
                    { cx: 99.5, delay: '0.42s', dur: '0.75s' },
                    { cx: 100.6, delay: '0.58s', dur: '0.68s' }
                  ].map((g, i) => (
                    <circle key={i} cx={g.cx} cy="135" r="0.85" fill="#FDE68A">
                      <animate
                        attributeName="cy"
                        values="135;198"
                        dur={g.dur}
                        begin={g.delay}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;0.95;0.9;0"
                        dur={g.dur}
                        begin={g.delay}
                        repeatCount="indefinite"
                      />
                    </circle>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Docked Stats & Reputation Strip */}
        <div className="w-full bg-[#0A0A0A]/95 text-white/80 py-3.5 sm:py-4 px-6 border-t border-white/10 overflow-hidden relative z-20">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs font-mono uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">05</span>
              <span className="text-white/70">Mini Masteries</span>
            </div>
            <span className="text-white/20 hidden md:inline">&bull;</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">100 DAYS</span>
              <span className="text-white/70">Self-Paced Transformation</span>
            </div>
            <span className="text-white/20 hidden md:inline">&bull;</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">10 MINS/DAY</span>
              <span className="text-white/70">Habit Micro-Learning</span>
            </div>
            <span className="text-white/20 hidden md:inline">&bull;</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">9,490+</span>
              <span className="text-white/70">Active Learners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Catalog & Koto-Style 4-Section Architecture */}
      <section id="courses-catalog" className="py-20 sm:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Koto-Style Sticky Left Navigation + Smooth-Scrolling Right 4-Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Sticky Left Navigation (Clean Transparent Background) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <div>
              {/* Top HQX Logo & Title Block */}
              <div className="pb-7 border-b border-black/[0.08]">
                <BrandLogo className="h-8 sm:h-9 w-auto" textColor="#0A0A0A" />

                <div className="mt-10 sm:mt-12">
                  <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#0A0A0A] leading-tight">
                    Course Architecture
                  </h2>
                  <p className="font-display text-sm sm:text-base font-medium tracking-tight text-[#737373] leading-snug mt-1">
                    Hands-on. Experiential. Disciplined.
                  </p>
                </div>
              </div>

              {/* Navigation Tabs */}
              <nav aria-label="Curriculum sections" className="pt-4 flex flex-row lg:flex-col gap-2 lg:gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {curriculumTabs.map((tab) => {
                  const isActive = activeSectionTab === tab.id;
                  const TabIcon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => scrollToCurriculumSection(tab.id)}
                      className={`relative group w-auto lg:w-full text-left flex items-center gap-3 lg:gap-4 px-3.5 py-2.5 lg:pl-5 lg:pr-2 lg:py-3.5 rounded-full lg:rounded-none border lg:border-0 transition-colors cursor-pointer shrink-0 lg:shrink bg-transparent ${
                        isActive
                          ? 'text-[#0A0A0A] font-bold border-[#C87D32]'
                          : 'text-[#262626]/65 hover:text-[#0A0A0A] font-semibold border-black/10'
                      }`}
                    >
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="hidden lg:block absolute left-0 top-2 bottom-2 w-[3.5px] bg-[#C87D32] rounded-r-full"
                        />
                      )}
                      <TabIcon
                        className={`w-5 h-5 lg:w-6 lg:h-6 stroke-[1.2] shrink-0 transition-colors ${
                          isActive ? 'text-[#0A0A0A]' : 'text-[#404040]/65 group-hover:text-[#0A0A0A]'
                        }`}
                      />
                      <span className="font-display text-xs sm:text-sm lg:text-base leading-snug whitespace-nowrap lg:whitespace-normal">
                        {tab.label}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Right Smooth-Scrolling Content Column (Koto Faculty Editorial Layout) */}
          <div className="lg:col-span-8 space-y-20 sm:space-y-24">
            {/* Section 1: Mini Masteries */}
            <div id="mini-masteries" className="scroll-mt-28">
              <div className="font-mono text-[15px] uppercase tracking-[0.16em] text-[#737373]">
                01 / Mini Masteries
              </div>
              <h3 className="font-display text-2xl sm:text-[28px] lg:text-[32px] font-light tracking-tight text-[#0A0A0A] leading-[1.18] mt-2">
                Hands-on. Disruptive. <span className="text-[#737373]">Experiential. Disciplined.</span>
              </h3>
              <p className="font-body text-[15px] sm:text-base text-[#5C5C5C] font-light leading-[1.5] mt-3 max-w-2xl">
                Five structured 100-day self-paced masteries designed to align personal passion, purpose, financial mindset, and daily reflective habits.
              </p>

              {/* Editorial 5-Mastery Accordion Index */}
              <div className="mt-8 mb-8 divide-y divide-black/10 border-t border-b border-black/10">
                {[
                  {
                    title: 'Passion Quest',
                    desc: 'Explore and identify personal passions, guiding individuals towards a more fulfilling life aligned with their interests.'
                  },
                  {
                    title: 'Finding Your Ikigai',
                    desc: "Discover your purpose by integrating what you love, what you're good at, what the world needs, and what you can be paid for."
                  },
                  {
                    title: 'Purpose Deep Dive',
                    desc: 'Delve deeply into personal purpose, providing clarity, direction, and understanding of core values for decision-making.'
                  },
                  {
                    title: 'Happiness in Money',
                    desc: 'Learn the connection between money and well-being, fostering a healthier mindset towards finances for increased happiness.'
                  },
                  {
                    title: 'Habit Building Power of Journaling',
                    desc: 'Establish positive habits through the transformative practice of journaling, promoting self-awareness and mindfulness in daily routines.'
                  }
                ].map((m, idx) => {
                  const isExpanded = activeMasteryIdx === idx;
                  return (
                    <div key={m.title} className="py-3.5 sm:py-4">
                      <button
                        type="button"
                        onClick={() => setActiveMasteryIdx(idx)}
                        className="w-full text-left flex items-center justify-between gap-4 cursor-pointer group"
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-[15px] text-[#8C8C8C] tabular-nums">
                            0{idx + 1}
                          </span>
                          <span
                            className={`font-display text-base sm:text-lg tracking-tight transition-colors ${
                              isExpanded ? 'text-[#0A0A0A] font-medium' : 'text-[#0A0A0A]/70 group-hover:text-[#0A0A0A] font-light'
                            }`}
                          >
                            {m.title}
                          </span>
                        </div>
                        <span className="font-mono text-[15px] uppercase tracking-wider text-[#8C8C8C] group-hover:text-[#0A0A0A] transition-colors">
                          {isExpanded ? '−' : '+'}
                        </span>
                      </button>
                      {isExpanded && (
                        <div className="pl-8 sm:pl-9 mt-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <p className="font-body text-sm text-[#5C5C5C] font-light leading-relaxed max-w-xl">
                            {m.desc}
                          </p>
                          <button
                            type="button"
                            onClick={() => setSelectedCourse(microCourses[idx] || microCourses[0])}
                            className="inline-flex items-center gap-2 font-mono text-[15px] uppercase tracking-[0.14em] text-[#0A0A0A] hover:text-[#666666] transition-colors shrink-0 cursor-pointer"
                          >
                            <span>Enroll</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Uncaptioned 16:9 Editorial Media */}
              <div className="w-full aspect-[16/9] bg-[#EAEAE6] rounded-[2px] overflow-hidden">
                <img
                  src="/images/courses/mini-masteries-bg.jpg"
                  alt="Micro Courses Mini Masteries"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Section 2: Bi-Weekly Posts on Well-Being */}
            <div id="biweekly-posts" className="scroll-mt-28">
              <div className="font-mono text-[15px] uppercase tracking-[0.16em] text-[#737373]">
                02 / Bi-Weekly Posts on Well-Being
              </div>
              <h3 className="font-display text-2xl sm:text-[28px] lg:text-[32px] font-light tracking-tight text-[#0A0A0A] leading-[1.18] mt-2">
                Hands-on. Immersive. <span className="text-[#737373]">Experiential. Disciplined.</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mt-5 mb-8">
                <div className="md:col-span-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8C8C8C] mb-1.5">
                    About
                  </div>
                  <p className="font-body text-[15px] text-[#5C5C5C] font-light leading-[1.5]">
                    Two weekly posts on happiness and well-being provide individuals with practical tips and strategies to improve their mental, emotional, and physical health. These posts cover various topics, such as mindfulness techniques, positive psychology practices, self-care strategies, stress management, and building positive relationships.
                  </p>
                </div>
                <div className="md:col-span-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8C8C8C] mb-1.5">
                    Key Benefits
                  </div>
                  <p className="font-body text-[15px] text-[#5C5C5C] font-light leading-[1.5]">
                    By following these weekly posts, individuals can develop good habits, make informed decisions about their overall wellbeing, and improve their long-term happiness and fulfilment.
                  </p>
                </div>
              </div>

              {/* Single Clear, Uncrowded Editorial Media from LinkedIn */}
              <div className="w-full max-w-[460px] aspect-[4/5] bg-[#EAEAE6] rounded-[2px] overflow-hidden">
                <img
                  src="/images/linkedin/character-talk.jpg"
                  alt="HQx Bi-Weekly Well-Being Post: Ethos, Discipline & Purpose"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Section 3: Happiness Quotient & Introspective Assessment */}
            <div id="hq-assessment" className="scroll-mt-28">
              <div className="font-mono text-[15px] uppercase tracking-[0.16em] text-[#737373]">
                03 / Happiness Quotient &amp; Introspective Assessment
              </div>
              <h3 className="font-display text-2xl sm:text-[28px] lg:text-[32px] font-light tracking-tight text-[#0A0A0A] leading-[1.18] mt-2">
                Baseline Diagnostic <span className="text-[#737373]">&amp; Self-Reflection</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mt-5 mb-7">
                <div className="md:col-span-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8C8C8C] mb-1.5">
                    About
                  </div>
                  <p className="font-body text-[15px] text-[#5C5C5C] font-light leading-[1.5]">
                    The happiness quotient (HQ) refers to one&apos;s ability to manage happiness effectively. Introspective assessment is a self-reflection process. Combining HQ and introspective assessment helps individuals evaluate their happiness skills, identify areas for improvement, and enhance their overall well-being.
                  </p>
                  <p className="font-body text-sm text-[#737373] font-light leading-[1.5] mt-3">
                    This combined approach offers a structured way to evaluate and manage happiness, fostering better overall wellness.
                  </p>
                </div>

                <div className="md:col-span-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8C8C8C] mb-1.5">
                    Key Benefits
                  </div>
                  <ol className="space-y-2 font-body text-[15px] text-[#5C5C5C] font-light list-decimal list-inside leading-[1.45]">
                    <li>Assess and enhance their happiness skills effectively.</li>
                    <li>Increase personal happiness while reducing stress.</li>
                    <li>Improve long-term emotional and mental well-being.</li>
                  </ol>
                </div>
              </div>

              {/* Inline Koto-Style Deep Dive Interactive Row */}
              <div
                onClick={() => setSelectedCourse(microCourses[0])}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedCourse(microCourses[0]);
                  }
                }}
                className="group mb-7 p-3 sm:p-4 bg-[#F3F2EE] hover:bg-[#ECEAE4] rounded-[2px] flex items-center justify-between gap-4 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#EAEAE6] rounded-[2px] overflow-hidden shrink-0">
                    <img
                      src="/profile_assets/page_18_img_1_1231.jpeg"
                      alt="HQX Session Workbook"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2.5 mb-1">
                      <span className="font-mono text-[9px] uppercase tracking-[-0.02em] text-[#5C5C5C] bg-white/80 px-1.5 py-0.5 rounded-[2px]">
                        DEEP DIVE
                      </span>
                    </div>
                    <div className="font-display text-sm sm:text-base font-medium text-[#0A0A0A] truncate">
                      HQX Session Workbook &amp; Baseline Diagnostic
                    </div>
                    <p className="font-body text-xs sm:text-sm text-[#737373] font-light truncate">
                      Structured self-reflection exercises to measure and strengthen your Happiness Quotient.
                    </p>
                  </div>
                </div>
                <span className="w-9 h-9 rounded-[2px] bg-white/75 backdrop-blur-md flex items-center justify-center text-[#0A0A0A] group-hover:bg-[#0A0A0A] group-hover:text-white transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              {/* Uncaptioned 16:9 Editorial Media */}
              <div className="w-full aspect-[16/9] bg-[#EAEAE6] rounded-[2px] overflow-hidden">
                <img
                  src="/profile_assets/page_18_img_1_1231.jpeg"
                  alt="HQX Session Workbook & Introspective Assessment"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Section 4: Handouts & Exercises */}
            <div id="handouts-exercises" className="scroll-mt-28">
              <div className="font-mono text-[15px] uppercase tracking-[0.16em] text-[#737373]">
                04 / Handouts &amp; Exercises
              </div>
              <h3 className="font-display text-2xl sm:text-[28px] lg:text-[32px] font-light tracking-tight text-[#0A0A0A] leading-[1.18] mt-2">
                Hands-on. Immersive. <span className="text-[#737373]">Experiential. Disciplined.</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 mt-5 mb-8">
                <div className="md:col-span-7">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8C8C8C] mb-1.5">
                    About
                  </div>
                  <p className="font-body text-[15px] text-[#5C5C5C] font-light leading-[1.5]">
                    Interactive sessions designed to improve mental, emotional, and physical health. Focus areas include mindfulness, positive psychology, self-care, self-compassion, positive relationships, finding purpose, and stress management. Offer a range of tools and strategies for enhancing overall well-being.
                  </p>
                </div>

                <div className="md:col-span-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8C8C8C] mb-1.5">
                    Key Benefits
                  </div>
                  <ul className="space-y-1.5 font-body text-[15px] text-[#5C5C5C] font-light leading-[1.45]">
                    <li>&bull; Interactive sessions designed to improve mental, emotional, and physical health.</li>
                    <li>&bull; Focus areas include mindfulness, positive psychology, self-care, self-compassion, positive relationships, finding purpose, and stress management.</li>
                    <li>&bull; Offer a range of tools and strategies for enhancing overall well-being.</li>
                  </ul>
                </div>
              </div>

              {/* Single Clear, Uncrowded Editorial Media from LinkedIn */}
              <div className="w-full max-w-[460px] aspect-[4/5] bg-[#EAEAE6] rounded-[2px] overflow-hidden">
                <img
                  src="/images/linkedin/hnb-ceo-book.jpg"
                  alt="Happiness Samurai 100 Days Journey Workbook and HQx Medal"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-hq-black max-w-lg w-full p-8 md:p-10 rounded-3xl border border-hq-black shadow-2xl relative">
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-hq-gray"
            >
              <X className="w-5 h-5 text-hq-black" />
            </button>

            {enrolledSuccess ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold mb-2">Welcome to Your 100-Day Journey!</h3>
                <p className="font-body text-xs text-hq-black/70 font-light">
                  Access instructions and Day 01 onboarding materials have been sent to your email.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-hq-yellow bg-hq-black px-2.5 py-1 rounded font-bold inline-block mb-3">
                  Digital Enrollment
                </span>
                <h3 className="font-display text-2xl font-bold mb-1">{selectedCourse.title}</h3>
                <div className="text-xs font-mono text-hq-black/60 mb-6">{selectedCourse.duration} • Single License {selectedCourse.price}</div>

                <form onSubmit={handleEnroll} className="space-y-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-hq-black/70 block mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={enrollForm.name}
                      onChange={(e) => setEnrollForm({ ...enrollForm, name: e.target.value })}
                      placeholder="e.g. Ananya Sen"
                      className="w-full bg-hq-gray border border-hq-black/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-hq-black"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase text-hq-black/70 block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={enrollForm.email}
                      onChange={(e) => setEnrollForm({ ...enrollForm, email: e.target.value })}
                      placeholder="e.g. ananya@gmail.com"
                      className="w-full bg-hq-gray border border-hq-black/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-hq-black"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-hq-black text-white font-display font-semibold uppercase tracking-widest py-3.5 rounded-xl text-xs hover:bg-hq-yellow hover:text-hq-black transition-all shadow-md mt-4"
                  >
                    Confirm Instant Access ({selectedCourse.price})
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
