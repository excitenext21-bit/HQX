import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mic2, ShieldCheck, Coins, Zap, Users, Target, MessageSquare, Heart, Sun, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import ConferenceStage3D from '../components/keynotes/ConferenceStage3D';

export default function Keynotes() {
  const [selectedEventIdx, setSelectedEventIdx] = useState(0);
  const [activeEventFilter, setActiveEventFilter] = useState('All');
  const topics = [
    {
      title: 'The Happiness Maverick: The Science of High Performance',
      duration: '60 - 90 Minutes',
      icon: Sparkles,
      desc: 'Manny Anchan\'s flagship corporate keynote unraveling how top Fortune 500 performers replace exhaustion with sustainable joy, purposeful clarity, and biological vitality.',
      audience: 'Global Townhalls, Annual Conventions, Leadership Summits'
    },
    {
      title: 'Friday Talks: Fast-Paced Employee Engagement',
      duration: '45 Minutes + Interactive Q&A',
      icon: Mic2,
      desc: 'A vibrant, high-energy session delivering immediate neuroscience hacks on purpose alignment, team cohesion, and entering high-restoration weekends.',
      audience: 'Enterprise All-Hands, Friday Company Gatherings'
    },
    {
      title: 'Psychology of Wealth: Beyond Financial Scarcity',
      duration: '60 Minutes',
      icon: Coins,
      desc: 'Decoding financial anxiety, cultivating abundance mindsets, and aligning material stewardship with enduring personal and enterprise legacy.',
      audience: 'Senior Executives, Family Offices, Corporate Bankers'
    },
    {
      title: 'Grit, Grace & Governance: Leading When Things Break',
      duration: '60 Minutes',
      icon: ShieldCheck,
      desc: 'Lessons from 25 years at GE Capital, Barclays & ABN AMRO on managing volatility, investor scrutiny, and cross-cultural team panic with unshakeable calm.',
      audience: 'Senior Executives, Board Retreats'
    }
  ];

  const engageEvents = [
    {
      city: 'Colombo, Sri Lanka',
      title: 'HNB Bank Senior Leadership Workshop',
      category: 'Executive Workshop',
      group: 'Townhall',
      detail: 'Full-day senior leadership workshop at HNB Bank & gifting Happiness Samurai – The 100 Days Journey to CEOs in Colombo.',
      image: '/images/linkedin/hnb-workshop.jpg'
    },
    {
      city: 'Colombo, Sri Lanka',
      title: 'Book & Medal Presentation — HNB PLC',
      category: 'Book Presentation',
      group: 'Literature',
      detail: 'Presenting Happiness Samurai – The 100 Days Journey book & medal to Damith Pallewatte, MD & CEO of Hatton National Bank PLC.',
      image: '/images/linkedin/hnb-ceo-book.jpg'
    },
    {
      city: 'Mumbai',
      title: 'RK Interiors — HOD Leadership Session',
      category: 'Transformation Program',
      group: 'Townhall',
      detail: '9-month transformation program session on Time Management, Priority Mastery, and Energy Leadership for Heads of Departments.',
      image: '/images/linkedin/rk-interiors.jpg'
    },
    {
      city: 'Gurugram',
      title: 'Policybazaar for Business (PBFB)',
      category: 'Corporate Workshop',
      group: 'Townhall',
      detail: 'Consultative Selling & AI workshop delivered in collaboration with HQx to accelerate enterprise clarity and execution.',
      image: '/images/linkedin/pbfb-workshop.jpg'
    },
    {
      city: 'Jaipur / Mumbai',
      title: 'AU Bank Retail Asset Team Awards',
      category: 'Keynote & Awards',
      group: 'TEDx',
      detail: 'Executive awards night keynote and reflections on Longevity, FEMPS, and the HQx 9H high-performance model.',
      image: '/images/linkedin/au-bank-awards.jpg'
    },
    {
      city: 'HQx Podcast • 2026',
      title: 'Podcast with Rachna Baruah',
      category: 'Broadcast Media',
      group: 'Media',
      detail: 'Autumn Season 2026 episode with Rachna Baruah (Founder, Madchatter | HBS Alum) on entrepreneurship, discipline, and women in leadership.',
      image: '/images/linkedin/podcast-rachna.jpg'
    },
    {
      city: 'HQx Podcast • Video',
      title: 'Podcast with Arjun Khanna',
      category: 'YouTube Broadcast',
      group: 'Media',
      detail: 'Exploring AI, productivity, habits, and the future of work with Arjun Khanna (Founder, Integrity AX) — "What if AI gave us our lives back?"',
      image: '/images/linkedin/podcast-arjun.jpg'
    },
    {
      city: 'Mumbai',
      title: 'HQx 2027 Strategy with Sasha Mirchandani',
      category: 'Executive Mentorship',
      group: 'TEDx',
      detail: 'Quarterly mentorship session with Sasha Mirchandani (Founder, Kae Capital) on Mental Wealth, high performance, and scaling HQx.',
      image: '/images/linkedin/kae-mentorship.jpg'
    },
    {
      city: 'HQx Community',
      title: 'Character Earns Respect',
      category: 'Leadership Talk',
      group: 'Literature',
      detail: '"Attraction gets attention, character earns respect" — keynote principles on self-respect, daily discipline, and durable habits.',
      image: '/images/linkedin/character-talk.jpg'
    },
    {
      city: 'HQx 2027 OS',
      title: 'Stepping Out of the Yellow Taxi',
      category: 'Keynote Framework',
      group: 'TEDx',
      detail: 'The HQx 2027 high-performance operating system: Eat the Frog, Power of 5, Choose Hard, Flow State, and Rule of 72.',
      image: '/images/linkedin/yellow-taxi.jpg'
    }
  ];

  const filteredEngageEvents =
    activeEventFilter === 'All'
      ? engageEvents
      : engageEvents.filter((ev) => ev.group === activeEventFilter);
  const safeSelectedIdx = selectedEventIdx % engageEvents.length;
  const activeEvent = engageEvents[safeSelectedIdx];

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Hero Section: Full-Screen 3D Curved Conference Stage with 3D-Synced Content on Screen */}
      <section className="bg-[#0A0A0A] text-white h-[100svh] min-h-[640px] max-h-[1080px] border-b border-white/10 relative overflow-hidden w-full">
        {/* Left Side Vertical Text: KEYNOTES & TALKS (Matching About Us Hero Style) */}
        <div className="absolute left-3 sm:left-6 lg:left-8 xl:left-12 inset-y-0 z-20 flex flex-col justify-center items-center pointer-events-none select-none">
          <div
            className="flex items-center gap-3 sm:gap-4"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span className="font-display text-[11px] sm:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-hq-yellow drop-shadow-md">
              KEYNOTES &amp; TALKS
            </span>
            <span className="w-px h-8 sm:h-14 bg-white/25" />
          </div>
        </div>

        {/* Full-Screen Interactive 3D Conference Stage with Content Locked to the Yellow Screen */}
        <ConferenceStage3D>
          <div className="text-center px-4">
            <h1
              style={{ fontFamily: '"Geist", Arial, sans-serif', fontWeight: 300 }}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-light tracking-tight text-[#0A0A0A] leading-[1.15] mb-3.5"
            >
              Insightful Keynotes &amp;{' '}
              <span
                style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                className="text-[#0A0A0A] font-bold"
              >
                Friday Talks
              </span>
            </h1>

            <p className="font-body text-xs sm:text-sm md:text-base text-[#0A0A0A]/80 font-light leading-relaxed max-w-xl mx-auto mb-6">
              Productive teams &amp; human cohesion, resilience &amp; vitality driving clarity, and purpose-led corporate execution across 9 nations and 16 Indian states.
            </p>

            <div className="flex items-center justify-center pointer-events-auto">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-between gap-7 py-3 px-2 font-display font-medium text-xs tracking-[0.2em] text-[#0A0A0A] hover:text-black transition-colors duration-300 uppercase"
              >
                {/* Top border line */}
                <span className="absolute top-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-[#0A0A0A]/55 group-hover:bg-[#0A0A0A] transition-all duration-300 ease-out pointer-events-none" />

                <span className="relative z-10 font-semibold tracking-widest">CHECK SPEAKING CALENDAR</span>

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
                <span className="absolute bottom-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-[#0A0A0A]/55 group-hover:bg-[#0A0A0A] transition-all duration-300 ease-out pointer-events-none" />
              </Link>
            </div>
          </div>
        </ConferenceStage3D>

        {/* DOCKED STATS & REPUTATION STRIP (MATCHING ABOUT US & WORKSHOPS HERO) */}
        <div className="absolute bottom-0 inset-x-0 w-full bg-[#0A0A0A]/95 text-white/80 py-3 sm:py-3.5 px-6 border-t border-white/10 overflow-hidden z-20">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs font-mono uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">04</span>
              <span className="text-white/75">Signature Keynote Frameworks</span>
            </div>
            <span className="text-white/20 hidden md:inline">&bull;</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">9 NATIONS</span>
              <span className="text-white/75">&amp; 16 Indian States</span>
            </div>
            <span className="text-white/20 hidden md:inline">&bull;</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">100,000+</span>
              <span className="text-white/75">Leaders &amp; Executives Inspired</span>
            </div>
            <span className="text-white/20 hidden md:inline">&bull;</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">4x TEDx</span>
              <span className="text-white/75">Speaker &amp; Friday Talks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Friday Talks Spotlight (Profile Page 15 — Fit to Screen + Dynamic Living Photo) */}
      <section className="lg:h-[100svh] lg:min-h-[580px] lg:max-h-[860px] lg:flex lg:flex-col lg:justify-center py-8 sm:py-10 px-6 md:px-12 bg-hq-white text-hq-black border-b border-hq-black/10">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header Row: Dual-Tone Title & Top Narrative */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 mb-6 sm:mb-8 pb-4 border-b border-black/10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#0A0A0A] leading-[1.08]">
                Friday Talks <br />
                <span className="text-[#666666] font-light">Catalyzing Workplace Vitality</span>
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-hq-black/65 max-w-md font-light leading-relaxed lg:pb-1">
              Friday talks are an essential tool for promoting employee engagement, open communication, and holistic well-being in the workplace.
            </p>
          </div>

          {/* 2-Column Content Layout: Dynamic Ken-Burns Image Card + Right 2x3 Icon Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Dynamic Animated Townhall Card */}
            <div className="lg:col-span-5">
              <div className="group/stage rounded-[28px] overflow-hidden shadow-2xl border border-hq-black/10 bg-hq-black aspect-[4/3.6] lg:max-h-[440px] w-full relative">
                <img
                  src="/profile_assets/page_15_img_1_1060.jpeg"
                  alt="Friday Talks in Progress"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover animate-pulse-subtle transition-transform duration-[1800ms] ease-out scale-[1.03] group-hover/stage:scale-110"
                />
                {/* Subtle Dynamic Stage Spotlight Sweep Overlay */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-75 group-hover/stage:opacity-100"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 30%, rgba(255,204,0,0.16) 0%, transparent 55%), linear-gradient(180deg, rgba(10,10,12,0.12) 0%, transparent 45%, rgba(10,10,12,0.72) 100%)'
                  }}
                />
              </div>
            </div>

            {/* Right 2-Column Icon Pillars Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                {
                  icon: Zap,
                  title: 'Improve Operational Efficiency',
                  desc: 'Streamline cross-functional execution by replacing chronic cognitive fatigue with structured energy management and clarity.'
                },
                {
                  icon: Users,
                  title: 'Improve Team Cohesion',
                  desc: 'Break departmental silos through shared townhall dialogue, candid storytelling, and collective purpose alignment.'
                },
                {
                  icon: Target,
                  title: 'Improving Productivity',
                  desc: 'Deliver actionable neuroscience micro-habits that elevate daily focus, flow states, and sustainable output.'
                },
                {
                  icon: MessageSquare,
                  title: 'Open Executive Communication',
                  desc: 'Create a transparent end-of-week forum where leadership vision connects directly with frontline realities.'
                },
                {
                  icon: Heart,
                  title: 'Holistic Emotional Resilience',
                  desc: 'Equip teams with practical frameworks to navigate market volatility and workplace pressure with calm composure.'
                },
                {
                  icon: Sun,
                  title: 'High-Restoration Weekends',
                  desc: 'Help employees close the workweek intentionally so they return on Monday recharged, focused, and inspired.'
                }
              ].map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div key={idx} className="group flex items-start gap-3.5 cursor-default">
                    <ItemIcon className="w-6 h-6 stroke-[1.25] text-hq-black/85 shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-125 group-hover:text-hq-yellow" />
                    <div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-hq-black tracking-tight mb-1.5 transition-colors duration-300 group-hover:text-hq-yellow">
                        {item.title}
                      </h3>
                      <p className="font-body text-xs sm:text-[13.5px] text-hq-black/65 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Speaker — Full-Width 50% Height HQX Yellow Banner with Manny Clipped Inside Quote Mark */}
      <section className="w-full min-h-[360px] sm:min-h-[400px] lg:h-[50svh] lg:min-h-[380px] lg:max-h-[480px] bg-hq-yellow text-[#0A0A0A] border-b border-hq-black/15 overflow-hidden relative">
        <div className="max-w-7xl mx-auto h-full px-6 md:px-12 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {/* Left: Manny Anchan B&W Portrait Clipped Inside Giant Closing-Quote Silhouette */}
          <div className="group/quote h-[260px] sm:h-full max-h-[380px] aspect-[360/420] shrink-0 flex items-center justify-center cursor-pointer">
            <svg
              viewBox="0 0 360 420"
              className="w-full h-full drop-shadow-[0_18px_36px_rgba(0,0,0,0.18)]"
              role="img"
              aria-label="Manny Anchan Portrait inside Quote Mark"
            >
              <defs>
                <clipPath id="mannyQuoteClip">
                  <path d="M 0 0 H 360 V 230 C 360 348, 235 410, 0 420 L 0 332 C 110 322, 164 282, 166 226 H 0 Z" />
                </clipPath>
              </defs>
              <g clipPath="url(#mannyQuoteClip)">
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
              className="font-prata font-normal text-2xl sm:text-3xl lg:text-[38px] leading-[1.18] tracking-tight mb-5"
            >
              <span className="text-[#0A0A0A]/45">Choose hard now for</span>{' '}
              <br className="hidden sm:block" />
              <span className="text-[#0A0A0A]">an easy life later</span>{' '}
              <span className="text-[#0A0A0A]/45">&mdash; or</span>{' '}
              <br className="hidden sm:block" />
              <span className="text-[#0A0A0A]/45">choose easy now for</span>{' '}
              <br className="hidden sm:block" />
              <span className="text-[#0A0A0A]">a hard life later</span>
            </p>
            <div className="font-display text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-[#0A0A0A]">
              &mdash; Manny Anchan
            </div>
          </div>
        </div>
      </section>

      {/* Signature Keynote Catalog (Fit-to-Screen Swiss Poster Cards in HQX Theme Colors) */}
      <section className="lg:h-[100svh] lg:min-h-[580px] lg:max-h-[860px] lg:flex lg:flex-col lg:justify-center py-8 sm:py-10 px-6 md:px-12 bg-hq-white text-hq-black border-b border-hq-black/10">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header Row: Dual-Tone Title & Top Narrative */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 mb-6 sm:mb-8 pb-4 border-b border-black/10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#0A0A0A] leading-[1.08]">
                Corporate Keynote <br />
                <span className="text-[#666666] font-light">Repertoire</span>
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-hq-black/65 max-w-md font-light leading-relaxed lg:pb-1">
              High-impact corporate keynotes and interactive townhall sessions tailored for global conventions, board retreats, and enterprise leadership summits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 overflow-visible">
            {topics.map((t, idx) => {
              const TopicIcon = t.icon;
              const conciseSummary = t.desc.split('. ')[0].replace(/\.+$/, '') + '.';
              const cardPhotos = [
                '/images/keynotes/conf-1.jpg',
                '/images/keynotes/conf-2.jpg',
                '/images/keynotes/conf-3.jpg',
                '/images/keynotes/conf-4.jpg'
              ];

              return (
                <div
                  key={idx}
                  className={`relative min-h-[340px] lg:min-h-[370px] p-5 sm:p-6 flex flex-col justify-between text-[#0A0A0A] bg-white border border-black/10 sm:border-r sm:border-l-0 sm:first:border-l group overflow-hidden transform-gpu will-change-transform transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-20 hover:-translate-y-2.5 hover:scale-[1.02] hover:shadow-[0_24px_55px_rgba(0,0,0,0.14)] ${
                    idx === 0 ? 'rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl' : ''
                  } ${
                    idx === topics.length - 1 ? 'rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl' : ''
                  }`}
                >
                  <img
                    src={cardPhotos[idx % cardPhotos.length]}
                    alt={t.title}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-110 opacity-[0.28] group-hover:opacity-[0.38] group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Clean Pure White Readability Veil */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.62) 55%, rgba(255,255,255,0.30) 100%), linear-gradient(180deg, rgba(255,255,255,0.45) 0%, transparent 40%, rgba(255,255,255,0.78) 100%)'
                    }}
                  />

                  {/* Top Bar */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-display text-sm font-bold tracking-tight text-[#0A0A0A]">
                      hqx<span className="text-hq-yellow">.</span>
                    </span>
                    <TopicIcon className="w-5 h-5 stroke-[1.5] text-[#0A0A0A]" />
                  </div>

                  {/* Middle Content: Title, Paragraph, and Duration Pill Box Below Paragraph (Aligned Same Top Line) */}
                  <div className="relative z-10 flex-1 flex flex-col pt-5 pb-4">
                    <h3 className="font-display text-xl font-semibold tracking-tight leading-[1.18] mb-3 text-[#0A0A0A]">
                      {t.title}
                    </h3>

                    <p className="font-body text-xs text-[#0A0A0A]/75 leading-relaxed font-light mb-4">
                      {conciseSummary}
                    </p>

                    <div className="mt-auto">
                      <span className="inline-block text-[11px] font-mono font-semibold px-3.5 py-1.5 rounded-full bg-hq-yellow text-[#0A0A0A]">
                        {t.duration}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Audience Footer */}
                  <div className="relative z-10 pt-3 border-t border-black/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#0A0A0A]/65 block">
                      {t.audience}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engage and Inspire: Split Enlarged Spotlight + Auto-Scrolling Thumbnail Discovery Panel (Fit to Screen) */}
      <section className="lg:h-[100svh] lg:min-h-[600px] lg:max-h-[860px] lg:flex lg:flex-col lg:justify-center py-8 sm:py-10 px-6 md:px-12 bg-[#F4F1EC] text-hq-black">
        <div className="max-w-7xl mx-auto w-full">
          <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_28px_70px_rgba(0,0,0,0.12)] border border-black/10 grid grid-cols-1 lg:grid-cols-12 lg:h-[calc(100svh-5rem)] lg:max-h-[700px]">
            {/* Left 6/12: Enlarged Active Card with Full Event Details */}
            <div className="lg:col-span-6 relative min-h-[400px] sm:min-h-[440px] lg:h-full bg-[#0B0C10] text-white overflow-hidden flex flex-col justify-between p-6 sm:p-8">
              <img
                key={activeEvent.image}
                src={activeEvent.image}
                alt={activeEvent.title}
                className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(10,10,12,0.88) 0%, rgba(10,10,12,0.58) 55%, rgba(10,10,12,0.25) 100%), linear-gradient(180deg, rgba(10,10,12,0.45) 0%, rgba(10,10,12,0.2) 45%, rgba(10,10,12,0.9) 100%)'
                }}
              />

              {/* Top Label */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-display text-xs uppercase tracking-[0.22em] text-hq-yellow font-bold">
                  Engage &amp; Inspire
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white border border-white/20">
                  {activeEvent.category}
                </span>
              </div>

              {/* Enlarged Event Details Anchored Just Above Bottom Horizontal Line */}
              <div className="relative z-10 mt-auto pt-12 pb-6 max-w-md">
                <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.12] mb-2.5">
                  {activeEvent.title}
                </h3>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-hq-yellow mb-3.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeEvent.city}</span>
                </div>
                <p className="font-body text-sm text-white/85 font-light leading-relaxed mb-6">
                  {activeEvent.detail}
                </p>
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-between gap-7 py-3 px-2 font-display font-medium text-xs tracking-[0.2em] text-white hover:text-hq-yellow transition-colors duration-300 uppercase"
                >
                  {/* Top border line */}
                  <span className="absolute top-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />

                  <span className="relative z-10 font-semibold tracking-widest">INQUIRE ABOUT SIMILAR SESSION</span>

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

              {/* Bottom Index Bar & Prev/Next Controls */}
              <div className="relative z-10 flex items-center justify-between gap-4 pt-4 border-t border-white/15">
                <div className="flex items-center gap-3 font-mono text-xs text-white/80">
                  <span className="font-bold text-white">
                    {String(safeSelectedIdx + 1).padStart(2, '0')}
                  </span>
                  <div className="w-20 sm:w-28 h-[2px] bg-white/25 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-hq-yellow transition-all duration-300"
                      style={{
                        width: `${((safeSelectedIdx + 1) / engageEvents.length) * 100}%`
                      }}
                    />
                  </div>
                  <span className="text-white/50">
                    {String(engageEvents.length).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous event"
                    onClick={() =>
                      setSelectedEventIdx(
                        (prev) => (prev - 1 + engageEvents.length) % engageEvents.length
                      )
                    }
                    className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-hq-yellow hover:text-hq-black hover:border-hq-yellow transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next event"
                    onClick={() =>
                      setSelectedEventIdx((prev) => (prev + 1) % engageEvents.length)
                    }
                    className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-hq-yellow hover:text-hq-black hover:border-hq-yellow transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right 6/12: White Discovery Panel with Auto-Scrolling Small Thumbnails */}
            <div className="lg:col-span-6 bg-white text-[#0A0A0A] p-7 sm:p-10 flex flex-col justify-between">
              <div>
                {/* Header & Category Tabs */}
                <div className="mb-6">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A] mb-3">
                    Delivered Talks, Signings &amp; Media Broadcasts
                  </h3>
                  <div className="flex flex-wrap items-center gap-5 text-xs font-display font-semibold">
                    {['All', 'TEDx', 'Literature', 'Media', 'Townhall'].map((tab) => {
                      const isTabActive = activeEventFilter === tab;
                      return (
                        <button
                          key={tab}
                          type="button"
                          onClick={() => setActiveEventFilter(tab)}
                          className={`relative pb-2 transition-colors ${
                            isTabActive
                              ? 'text-[#0A0A0A]'
                              : 'text-[#0A0A0A]/45 hover:text-[#0A0A0A]'
                          }`}
                        >
                          {tab}
                          {isTabActive && (
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-1.5 h-1.5 rounded-full bg-hq-yellow" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Auto-Scrolling Small Thumbnail Strip (Click Any Thumbnail to Enlarge Left) */}
                <div className="relative overflow-hidden py-2 group/marquee">
                  <div className="flex gap-3.5 w-max animate-marquee group-hover/marquee:[animation-play-state:paused]">
                    {[...filteredEngageEvents, ...filteredEngageEvents].map((ev, idx) => {
                      const originalIndex = engageEvents.findIndex((item) => item.title === ev.title);
                      const isSelected = originalIndex === safeSelectedIdx;
                      return (
                        <button
                          key={`${ev.title}-${idx}`}
                          type="button"
                          onClick={() => setSelectedEventIdx(originalIndex)}
                          className={`relative w-36 sm:w-40 aspect-[3/4] rounded-2xl overflow-hidden shrink-0 text-left transition-all duration-300 group/thumb cursor-pointer ${
                            isSelected
                              ? 'ring-2 ring-hq-yellow ring-offset-2 ring-offset-white scale-[1.02] shadow-xl'
                              : 'opacity-90 hover:opacity-100 hover:-translate-y-1 shadow-md'
                          }`}
                        >
                          <img
                            src={ev.image}
                            alt={ev.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover object-top group-hover/thumb:scale-105 transition-transform duration-500"
                          />
                          <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              background:
                                'linear-gradient(180deg, transparent 42%, rgba(10,10,12,0.88) 100%)'
                            }}
                          />
                          <div className="absolute bottom-3 left-3 right-3 text-white">
                            <div className="font-display text-xs font-bold leading-snug line-clamp-2 mb-1">
                              {ev.title}
                            </div>
                            <div className="flex items-center gap-1 text-[10px] font-mono text-hq-yellow">
                              <MapPin className="w-2.5 h-2.5 shrink-0" />
                              <span className="truncate">{ev.city}</span>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Manual Step Arrows + Hint */}
                <div className="flex items-center justify-between mt-4 mb-6">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Previous thumbnail"
                      onClick={() =>
                        setSelectedEventIdx(
                          (prev) => (prev - 1 + engageEvents.length) % engageEvents.length
                        )
                      }
                      className="w-7 h-7 rounded-full border border-black/15 flex items-center justify-center text-[#0A0A0A]/70 hover:bg-hq-yellow hover:border-hq-yellow hover:text-black transition-colors"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next thumbnail"
                      onClick={() =>
                        setSelectedEventIdx((prev) => (prev + 1) % engageEvents.length)
                      }
                      className="w-7 h-7 rounded-full border border-black/15 flex items-center justify-center text-[#0A0A0A]/70 hover:bg-hq-yellow hover:border-hq-yellow hover:text-black transition-colors"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="text-[11px] font-mono text-[#0A0A0A]/45">
                    Click any thumbnail to enlarge
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
