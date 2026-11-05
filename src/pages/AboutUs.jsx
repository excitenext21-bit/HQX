import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  User,
  Target, 
  Compass, 
  Heart, 
  ShieldCheck, 
  TrendingUp, 
  Globe, 
  Building2, 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight, 
  BookOpen, 
  Phone, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Mic2, 
  MapPin, 
  Quote, 
  Layers,
  X,
  ExternalLink
} from 'lucide-react';
import CorporatePartnersMarquee from '../components/common/CorporatePartnersMarquee';
import GlobalFootprintCounterBanner from '../components/common/GlobalFootprintCounterBanner';


const FACULTY_COLLAGE_IMAGES = [
  '/team/parvej-mantrri.png',
  '/team/soha-ali-khan.png',
  '/team/rajiv-gupta.png',
  '/team/sanjay-arora.png',
  '/team/bharati-jaisingh.png',
  '/team/bijay-anand.png',
  '/team/bhakti-kapoor.png',
  '/team/ajay-srinivasan.png',
  '/team/carolin-nytra.png',
  '/team/meera-chauhan.png',
  '/team/rupinder-singh.png',
  '/team/anil-kumar.png'
];

const CHAPTER_SHOWCASE = {
  founder: {
    title: 'Meet The Founder',
    subtitle: 'Manny Anchan • Founder & Global Keynote Speaker',
    badge: 'Executive Pedigree',
    image: '/images/hero_showcase/manny_founder_podium.jpg',
    alt: 'Manny Anchan Keynote Pedigree'
  },
  faculty: {
    title: 'Multidisciplinary Faculty',
    subtitle: '12 World Champions, CEOs & Mentors',
    badge: 'Advisory Faculty',
    image: '/images/hero_showcase/chapters_faculty_card.jpg',
    alt: 'HQX Multidisciplinary Advisory Faculty'
  },
  why: {
    title: 'Why Choose HQX',
    subtitle: 'The 4 Pillars of Distinction',
    badge: 'Eudaimonic Architecture',
    image: '/images/hero_showcase/chapters_wellness_perfect.jpg',
    alt: 'Eudaimonic Flourishing and Well-being'
  }
};

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedConclave, setSelectedConclave] = useState(null);
  const [hoveredChapter, setHoveredChapter] = useState('founder');
  const corporateEngagements = [
    {
      id: 'ageas',
      client: 'Ageas Federal Life Insurance',
      location: 'Mumbai, India',
      country: 'India',
      desc: 'High-impact executive alignment & holistic employee wellbeing session.',
      fullDesc: 'A flagship C-suite executive alignment conclave focused on the science of psychological safety, resilience under market volatility, and cultivating high-trust leadership cultures across regional hubs.',
      focus: 'Executive Alignment & Vitality',
      image: '/images/hero_showcase/manny_ageas_keynote_stage.jpg',
      imagePosition: 'object-[center_20%]',
      tag: 'Keynote Conclave',
      category: 'national',
      attendees: '250+ Senior Leaders',
      takeaways: ['Cognitive resilience during market restructuring', 'Energy management vs. time management', 'Empathetic corporate leadership protocols']
    },
    {
      id: 'cipla',
      client: 'Cipla Healthcare',
      location: 'Goa, India',
      country: 'India',
      desc: 'Annual leadership summit on resilience, vitality, and collaborative synergy.',
      fullDesc: 'Comprehensive residential retreat designed for top pharmaceutical leadership to foster cross-functional synergy, stress eradication, and sustained stamina across pan-India operations.',
      focus: 'Resilience & Collaborative Synergy',
      image: '/images/hero_showcase/manny_founder_podium.jpg',
      tag: 'Annual Summit',
      category: 'national',
      attendees: '350+ Senior Executives',
      takeaways: ['Biological rhythms & peak afternoon focus', 'Cross-functional trust architectures', 'Sustained organizational stamina']
    },
    {
      id: 'amal',
      client: 'Amal Embroidery',
      location: 'Lonavala, India',
      country: 'India',
      desc: 'Transformational workforce engagement and stress-mastery offsite.',
      fullDesc: 'An intensive manufacturing & operational leadership immersion addressing factory-floor burnout, psychological flourishing, and collective joy in high-precision textile production.',
      focus: 'Workforce Stress-Mastery',
      image: '/images/hero_showcase/manny_roundtable_engagement.jpg',
      tag: 'Leadership Retreat',
      category: 'national',
      attendees: '180+ Team Members',
      takeaways: ['Daily micro-stress decompress rituals', 'Workplace ergonomics & mindful pacing', 'Shared accountability and camaraderie']
    },
    {
      id: 'apar',
      client: 'APAR Industries',
      location: 'Mumbai, India',
      country: 'India',
      desc: 'APAR Workout & Holistic Health series cultivating vitality and stamina.',
      fullDesc: 'Corporate wellness program driving physical vitality, posture wellness, and mindfulness routines integrated into corporate office and engineering team workflows.',
      focus: 'Holistic Health & Stamina',
      image: '/images/hero_showcase/manny_vitality_mic.jpg',
      imagePosition: 'object-[center_15%]',
      tag: 'Enterprise Series',
      category: 'national',
      attendees: '500+ Corporate Professionals',
      takeaways: ['Micro-movement desk habits', 'Cardiovascular vitality protocols', 'Mental clarity sprint intervals']
    },
    {
      id: 'mango',
      client: 'Mango Sciences',
      location: 'Goa, India',
      country: 'India',
      desc: 'Data science & biotech team purpose alignment and Ikigai discovery.',
      fullDesc: 'Specialized deep-work retreat for bio-informaticians, data scientists, and healthcare AI researchers linking rigorous analytical labor to societal health impact and Ikigai.',
      focus: 'Ikigai & Purpose Discovery',
      image: '/images/hero_showcase/yt__b83chqCJG0_maxresdefault.jpg',
      tag: 'Biotech Offsite',
      category: 'national',
      attendees: '120+ Researchers & Engineers',
      takeaways: ['Preventing analytical cognitive fatigue', 'Ikigai alignment in clinical data', 'Collaborative problem-solving flow']
    },
    {
      id: 'amana',
      client: 'Amana Bank',
      location: 'Dar es Salaam, Tanzania',
      country: 'Tanzania',
      desc: 'Cross-continental executive banking leadership immersion and eudaimonic training.',
      fullDesc: 'International executive offsite uniting African commercial banking leadership to introduce the Eudaimonic Performance model, ethical wealth stewardship, and team emotional intelligence.',
      focus: 'Eudaimonic Banking Leadership',
      image: '/images/hero_showcase/manny_amana_keynote.jpg',
      imagePosition: 'object-[center_18%]',
      tag: 'Global Immersion',
      category: 'international',
      attendees: '200+ C-Suite & Directors',
      takeaways: ['Ethical leadership & customer trust', 'Cross-border cultural cohesion', 'Executive poise under economic volatility']
    },
    {
      id: 'absa',
      client: 'Absa Bank',
      location: 'Port Louis, Mauritius',
      country: 'Mauritius',
      desc: 'Wealth and private banking stewardship program on the Psychology of Wealth.',
      fullDesc: 'Exclusive offshore wealth summit with premier private bankers and family office advisors exploring the intersection of mental abundance, relationship capital, and purposeful asset stewardship.',
      focus: 'The Psychology of Wealth',
      image: '/images/hero_showcase/manny_absa_bank.jpg',
      imagePosition: 'object-[center_20%]',
      tag: 'Global Immersion',
      category: 'international',
      attendees: '150+ Private Bankers',
      takeaways: ['Client relationship emotional IQ', 'Wealth psychology & family governance', 'Advisor burnout prevention']
    },
    {
      id: 'tedx-katra',
      client: 'TEDx Katra',
      location: 'Allahabad, India',
      country: 'India',
      desc: 'Keynote delivery on human flourishing, Ikigai, and emotional mastery.',
      fullDesc: 'A captivating 18-minute global TEDx keynote by Manny Anchan dissecting the four pillars of modern happiness, debunking toxic hustle myths, and inspiring over 800 live audience members.',
      focus: 'Human Flourishing & Mastery',
      image: '/images/hero_showcase/manny_tedx_katra_stage.jpg',
      imagePosition: 'object-[center_30%]',
      tag: 'TEDx Keynote',
      category: 'national',
      attendees: '800+ Live Delegates',
      takeaways: ['Redefining corporate eudaimonia', 'Daily 3-breath grounding method', 'Translating purpose into daily action']
    },
    {
      id: 'tedx-elpro',
      client: 'TEDx ElPro International',
      location: 'Pune, India',
      country: 'India',
      desc: 'Inspiring future leaders, educators, and innovators on purposeful living.',
      fullDesc: 'Inspiring address to over 1,000 educators, global scholars, and youth leaders exploring how institutional mindfulness and purpose cultivation transform academic achievement and societal harmony.',
      focus: 'Purpose-Driven Innovation',
      image: '/images/hero_showcase/manny_tedx_elpro.jpg',
      tag: 'TEDx Keynote',
      category: 'national',
      attendees: '1,000+ Educators & Innovators',
      takeaways: ['Empowering resilient next-gen leaders', 'Educational mindfulness architectures', 'Emotional fortitude in the digital age']
    }
  ];

  const filteredEngagements = activeTab === 'all' 
    ? corporateEngagements 
    : corporateEngagements.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* ARCHITECTURAL EDITORIAL HERO SECTION - BLACK SCREEN-FITTING LUXURY */}
      <section className="bg-[#0A0A0A] text-white min-h-[100svh] lg:h-screen lg:min-h-[660px] lg:max-h-[920px] flex items-center pt-28 pb-14 lg:py-0 border-b border-white/10 relative overflow-hidden w-full">
        {/* Subtle Ambient Glows */}
        <div className="absolute inset-0 bg-radial-gradient from-hq-yellow/10 via-transparent to-transparent pointer-events-none opacity-40"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-hq-yellow/5 rounded-full blur-[140px] pointer-events-none -mr-40"></div>

        {/* Left Side Vertical Text: ABOUT HQX (Matching Why HQX Hero Style) */}
        <div 
          className="absolute left-3 sm:left-6 lg:left-8 xl:left-12 top-1/2 -translate-y-1/2 z-20 flex items-center gap-3 sm:gap-4 select-none pointer-events-none"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          <span className="font-display text-[11px] sm:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-hq-yellow drop-shadow-md">
            ABOUT HQX
          </span>
          <span className="w-px h-8 sm:h-14 bg-white/25"></span>
        </div>

        {/* Framing Container: Exact Alignment with Navbar Logo (left) & Book Manny Button (right) */}
        <div className="max-w-7xl mx-auto pl-12 pr-6 sm:pl-16 sm:pr-8 md:pl-20 md:pr-12 lg:pl-24 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: High-Contrast Editorial Headline & Subtext (Removed Giant Bold Wordmark) */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
              <div className="max-w-md">
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold tracking-tight text-white leading-[1.15] mb-5">
                  Architecting Purpose, <br />
                  <span className="text-hq-yellow">Vitality & Performance</span>
                </h1>

                <p className="font-body text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8">
                  We specialize in architecting purpose, vitality and enterprise performance. Synthesizing empirical neuroscience, ancient Japanese eudaimonia, and boardroom stewardship across 9 nations and 16 Indian states.
                </p>

                <div className="pt-2">
                  <Link 
                    to="/why-hqx"
                    className="group relative inline-flex items-center justify-between gap-8 py-3.5 px-2 font-display font-medium text-xs tracking-[0.2em] text-white hover:text-hq-yellow transition-colors duration-300 uppercase"
                  >
                    {/* Top border line */}
                    <span className="absolute top-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />

                    <span className="relative z-10 font-semibold tracking-widest">WHY CHOOSE HQX</span>

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
            </div>

            {/* Right Column: 4 Capsule/Pill Photography Showcase (-25% Scaled Exact Proportions) */}
            <div className="lg:col-span-7 xl:col-span-7 flex justify-center lg:justify-end items-center pt-4 lg:pt-0">
              <div className="flex items-center gap-2.5 sm:gap-3 md:gap-3.5 max-w-full overflow-visible">
                
                {/* Pill 1: Left Mid Capsule (Looping Brand Video - pushed up by 5%) */}
                <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-[210px] sm:h-[270px] md:h-[320px] lg:h-[370px] rounded-full overflow-hidden shadow-2xl border border-white/10 relative group transform translate-y-2 lg:translate-y-2.5 transition-transform duration-500 hover:-translate-y-1 shrink-0 bg-[#141414]">
                  <video 
                    src="/videos/happiness_samurai_mental_health.mp4" 
                    poster="/images/hero_showcase/manny_keynote_podium.png"
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover filter contrast-110 brightness-95 group-hover:scale-110 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 pointer-events-none"></div>
                </div>

                {/* Pill 2 Column: Centerpiece Tallest Capsule + Arrow Button Placed Below (pushed down by 10%) */}
                <div className="flex flex-col items-center gap-3 transform translate-y-2 lg:translate-y-3.5 shrink-0">
                  <div className="w-20 sm:w-24 md:w-28 lg:w-34 xl:w-36 h-[255px] sm:h-[330px] md:h-[380px] lg:h-[430px] rounded-full overflow-hidden shadow-2xl border-2 border-white/20 hover:border-hq-yellow/80 relative group transition-all duration-500 bg-[#141414]">
                    <img 
                      src="/images/hero_showcase/manny_stage_standing.png" 
                      alt="Manny Anchan - Executive Keynote Stage" 
                      onError={(e) => { e.target.src = '/manny-hero.jpg'; }}
                      className="w-full h-full object-cover object-top filter contrast-110 brightness-100 group-hover:scale-110 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 pointer-events-none"></div>
                  </div>

                  {/* Circular Arrow Button Placed Below 2nd Rounded Image */}
                  <Link 
                    to="/founder"
                    className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#181818] text-white border border-white/20 hover:border-hq-yellow flex items-center justify-center shadow-xl hover:bg-hq-yellow hover:text-black hover:scale-110 transition-all duration-300 group/btn"
                    title="Explore Founder Pedigree"
                    aria-label="Explore Founder Pedigree"
                  >
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>

                {/* Pill 3: Right Mid Capsule (Looping Feature Video - lowest bottom drop) */}
                <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-[230px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-full overflow-hidden shadow-2xl border border-white/10 relative group transform translate-y-6 lg:translate-y-10 transition-transform duration-500 hover:-translate-y-1 shrink-0 bg-[#141414]">
                  <video 
                    src="/videos/happiness_samurai_john_abraham.mp4" 
                    poster="/profile_assets/page_30_img_4_2177.jpeg"
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover filter contrast-110 brightness-95 group-hover:scale-110 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 pointer-events-none"></div>
                </div>

                {/* Pill 4: Far Right Capsule (Clear Face Portrait - Manny Anchan Yellow Cab) */}
                <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-[240px] sm:h-[315px] md:h-[370px] lg:h-[415px] rounded-full overflow-hidden shadow-2xl border border-white/10 relative group transform -translate-y-1 lg:-translate-y-2 transition-transform duration-500 hover:-translate-y-4 shrink-0 bg-[#141414]">
                  <img 
                    src="/images/hero_showcase/manny_yellow_cab_face_focus.jpg" 
                    alt="Manny Anchan - Global Lifestyle & Presence" 
                    onError={(e) => { e.target.src = '/images/hero_showcase/manny_yellow_cab.jpg'; }}
                    className="w-full h-full object-cover object-[center_10%] filter contrast-105 brightness-100 group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-25 pointer-events-none"></div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* DEDICATED CHAPTERS OF HQX (SPLIT EDITORIAL SHOWCASE) */}
      <section className="pt-14 sm:pt-16 pb-8 sm:pb-10 px-6 md:px-12 bg-[#FAF8F5] dark:bg-[#0E0F12] border-b border-hq-black/10">
        <div className="max-w-7xl mx-auto">
          {/* Header Row: Dual-Tone Title & Top Narrative */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 sm:mb-14 pb-8 border-b border-black/10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] dark:text-white leading-[1.08]">
                Dedicated Chapters <br />
                <span className="text-[#666666] dark:text-white/60 font-light">of HQX</span>
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-hq-black/65 max-w-md font-light leading-relaxed lg:pb-1">
              Explore our founder's 25-year pedigree, meet our multidisciplinary advisory faculty, or inspect why leading enterprises choose the eudaimonic model.
            </p>
          </div>

          {/* 2-Column Split: Interactive Stacked Rows (Left) & Serene Photographic Showcase (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: 3 Clean Interactive Rows with Dynamic Hover Triggers */}
            <div className="lg:col-span-7 flex flex-col divide-y divide-black/10 border-b border-black/10">
              
              {/* Row 1: Meet The Founder */}
              <Link 
                to="/founder"
                onMouseEnter={() => setHoveredChapter('founder')}
                onFocus={() => setHoveredChapter('founder')}
                className={`group py-7 sm:py-8 px-4 -mx-4 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 ${
                  hoveredChapter === 'founder' ? 'bg-black/[0.03]' : 'hover:bg-black/[0.015]'
                }`}
              >
                <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0 shadow-sm ${
                    hoveredChapter === 'founder' 
                      ? 'bg-hq-black text-hq-yellow scale-105 shadow-md' 
                      : 'bg-[#EFECE6] text-hq-black/80 group-hover:bg-hq-black group-hover:text-hq-yellow'
                  }`}>
                    <User className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-display text-xl sm:text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                        hoveredChapter === 'founder' ? 'text-hq-black font-bold' : 'text-hq-black group-hover:text-hq-yellow'
                      }`}>
                        Meet The Founder
                      </h3>
                      {hoveredChapter === 'founder' && (
                        <span className="w-2 h-2 rounded-full bg-hq-yellow hidden sm:inline-block animate-pulse" />
                      )}
                    </div>
                    <p className="font-body text-xs sm:text-sm text-hq-black/65 font-light leading-relaxed mt-1 max-w-md">
                      25 years in global management at GE Capital, Barclays & HDFC Bank. Harvard & Columbia alum and 4x TEDx speaker.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-body font-medium text-hq-black/80 group-hover:text-hq-black shrink-0 ml-2">
                  <span>More Details</span>
                  <span className={`inline-block transition-transform duration-300 ${
                    hoveredChapter === 'founder' ? 'translate-x-1.5' : 'group-hover:translate-x-1.5'
                  }`}>→</span>
                </div>
              </Link>

              {/* Row 2: Multidisciplinary Faculty */}
              <Link 
                to="/team"
                onMouseEnter={() => setHoveredChapter('faculty')}
                onFocus={() => setHoveredChapter('faculty')}
                className={`group py-7 sm:py-8 px-4 -mx-4 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 ${
                  hoveredChapter === 'faculty' ? 'bg-black/[0.03]' : 'hover:bg-black/[0.015]'
                }`}
              >
                <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0 shadow-sm ${
                    hoveredChapter === 'faculty' 
                      ? 'bg-hq-black text-hq-yellow scale-105 shadow-md' 
                      : 'bg-[#EFECE6] text-hq-black/80 group-hover:bg-hq-black group-hover:text-hq-yellow'
                  }`}>
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-display text-xl sm:text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                        hoveredChapter === 'faculty' ? 'text-hq-black font-bold' : 'text-hq-black group-hover:text-hq-yellow'
                      }`}>
                        Multidisciplinary Faculty
                      </h3>
                      {hoveredChapter === 'faculty' && (
                        <span className="w-2 h-2 rounded-full bg-hq-yellow hidden sm:inline-block animate-pulse" />
                      )}
                    </div>
                    <p className="font-body text-xs sm:text-sm text-hq-black/65 font-light leading-relaxed mt-1 max-w-md">
                      12 distinguished world champions, industry CEOs, Olympic athletes, Warwick & Yale fellows across 5 core domains.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-body font-medium text-hq-black/80 group-hover:text-hq-black shrink-0 ml-2">
                  <span>More Details</span>
                  <span className={`inline-block transition-transform duration-300 ${
                    hoveredChapter === 'faculty' ? 'translate-x-1.5' : 'group-hover:translate-x-1.5'
                  }`}>→</span>
                </div>
              </Link>

              {/* Row 3: Why Choose HQX */}
              <Link 
                to="/why-hqx"
                onMouseEnter={() => setHoveredChapter('why')}
                onFocus={() => setHoveredChapter('why')}
                className={`group py-7 sm:py-8 px-4 -mx-4 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 ${
                  hoveredChapter === 'why' ? 'bg-black/[0.03]' : 'hover:bg-black/[0.015]'
                }`}
              >
                <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shrink-0 shadow-sm ${
                    hoveredChapter === 'why' 
                      ? 'bg-hq-black text-hq-yellow scale-105 shadow-md' 
                      : 'bg-[#EFECE6] text-hq-black/80 group-hover:bg-hq-black group-hover:text-hq-yellow'
                  }`}>
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-display text-xl sm:text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                        hoveredChapter === 'why' ? 'text-hq-black font-bold' : 'text-hq-black group-hover:text-hq-yellow'
                      }`}>
                        Why Choose HQX
                      </h3>
                      {hoveredChapter === 'why' && (
                        <span className="w-2 h-2 rounded-full bg-hq-yellow hidden sm:inline-block animate-pulse" />
                      )}
                    </div>
                    <p className="font-body text-xs sm:text-sm text-hq-black/65 font-light leading-relaxed mt-1 max-w-md">
                      The Four Pillars of Distinction, our 16-state footprint, and 28 impacted industries and academic tiers.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-body font-medium text-hq-black/80 group-hover:text-hq-black shrink-0 ml-2">
                  <span>More Details</span>
                  <span className={`inline-block transition-transform duration-300 ${
                    hoveredChapter === 'why' ? 'translate-x-1.5' : 'group-hover:translate-x-1.5'
                  }`}>→</span>
                </div>
              </Link>

            </div>

            {/* Right Column: Dynamic Photographic Showcase with Smooth Cross-Fade on Hover */}
            <div className="lg:col-span-5 h-full flex items-center justify-center">
              <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[490px] rounded-[32px] overflow-hidden shadow-2xl border border-black/10 bg-[#EFECE6] group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={hoveredChapter}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    {hoveredChapter === 'faculty' ? (
                      <div className="w-full h-full grid grid-cols-4 grid-rows-3 gap-0 overflow-hidden bg-black">
                        {FACULTY_COLLAGE_IMAGES.map((src, i) => (
                          <div key={i} className="relative w-full h-full overflow-hidden">
                            <img
                              src={src}
                              alt="Faculty Member"
                              className="w-full h-full object-cover filter contrast-105"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <img 
                        src={CHAPTER_SHOWCASE[hoveredChapter].image} 
                        alt={CHAPTER_SHOWCASE[hoveredChapter].alt} 
                        className="w-full h-full object-cover filter contrast-105 brightness-100" 
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: CORPORATE FIELD ENGAGEMENTS & CONCLAVES (PAGES 27-31) */}
      <section id="corporate-engagements" className="pt-8 sm:pt-10 pb-16 sm:pb-20 px-6 md:px-12 bg-black border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Row: Dual-Tone Title & Narrative */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.08]">
                Wellness Across <br />
                <span className="text-white/40 font-light">The Nation &amp; Globe</span>
              </h2>
            </div>

            <p className="font-body text-sm sm:text-base text-white/60 font-light max-w-sm lg:text-right leading-relaxed self-end">
              Captured moments from our corporate field retreats, conclaves and global summits.
            </p>
          </div>

          {/* Minimalist Text Sorting Tabs with Active Underline - No Boxes */}
          <div className="flex items-center gap-8 sm:gap-10 border-b border-white/10 pb-3 mb-8 sm:mb-10">
            {[
              { id: 'all', label: 'All Conclaves' },
              { id: 'national', label: 'Pan-India' },
              { id: 'international', label: 'International' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-3 text-sm sm:text-base font-display transition-colors duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'text-white font-medium'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="conclaveTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-hq-yellow"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Bento Photo Gallery matching reference aesthetic */}
          <div className="grid grid-cols-12 gap-2.5 sm:gap-3.5">
            {filteredEngagements.map((item, index) => {
              let colSpanClass = 'col-span-12 md:col-span-6 lg:col-span-4 h-[320px] sm:h-[380px]';
              if (filteredEngagements.length === 1) {
                colSpanClass = 'col-span-12 h-[420px] sm:h-[500px]';
              } else if (filteredEngagements.length === 2) {
                colSpanClass = 'col-span-12 md:col-span-6 h-[380px] sm:h-[460px]';
              } else {
                const pos = index % 5;
                if (pos === 0) colSpanClass = 'col-span-12 lg:col-span-8 h-[360px] sm:h-[440px]';
                else if (pos === 1) colSpanClass = 'col-span-12 lg:col-span-4 h-[360px] sm:h-[440px]';
                else colSpanClass = 'col-span-12 md:col-span-6 lg:col-span-4 h-[320px] sm:h-[380px]';
              }

              return (
                <div 
                  key={item.id} 
                  onClick={() => setSelectedConclave(item)}
                  className={`${colSpanClass} group relative rounded-lg sm:rounded-xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]`}
                >
                  <img 
                    src={item.image} 
                    alt={item.client}
                    className={`w-full h-full object-cover ${item.imagePosition || "object-center"} group-hover:scale-105 transition-transform duration-700 ease-out`} 
                  />
                  
                  {/* Inspect arrow at top-right (rounded badge removed) */}
                  <div className="absolute top-4 right-4 pointer-events-none z-10">
                    <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-hq-yellow group-hover:text-black transition-all duration-300 shadow-md">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Ambient bottom gradient and story info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent flex flex-col justify-end p-5 sm:p-7">
                    <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-white group-hover:text-hq-yellow transition-colors duration-300 leading-snug">
                      {item.client}
                    </h3>

                    <p className="font-body text-xs sm:text-sm text-white/70 font-light line-clamp-1 mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.desc}
                    </p>

                    <div className="flex items-center gap-2 text-[11px] font-mono text-hq-yellow mt-2.5">
                      <MapPin className="w-3 h-3 text-hq-yellow shrink-0" />
                      <span>{item.location}</span>
                      <span className="text-white/40">•</span>
                      <span className="text-white/70">{item.attendees.split(' ')[0]} attendees</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Global Footprint & Counter Section */}
          <div className="mt-14 sm:mt-18">
            <GlobalFootprintCounterBanner />
          </div>

          

        </div>
      </section>

      {/* INTERACTIVE CASE BRIEFING MODAL DIALOG */}
      {selectedConclave && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md overflow-y-auto p-4 sm:p-6 flex items-start sm:items-center justify-center animate-in fade-in duration-200"
          onClick={() => setSelectedConclave(null)}
        >
          <div 
            className="bg-[#14151B] border border-white/20 rounded-[24px] sm:rounded-[32px] text-white max-w-2xl w-full overflow-hidden shadow-2xl relative my-auto max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative h-44 sm:h-52 overflow-hidden bg-black shrink-0">
              <img 
                src={selectedConclave.image} 
                alt={selectedConclave.client}
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14151B] via-transparent to-black/60"></div>

              {/* Close Button */}
              <button 
                onClick={() => setSelectedConclave(null)}
                className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white hover:bg-hq-yellow hover:text-black transition-all flex items-center justify-center cursor-pointer shadow-lg z-20"
                aria-label="Close Conclave Briefing"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header Badges */}
              <div className="absolute bottom-3.5 left-5 right-5 flex items-center justify-between">
                {selectedConclave.tag ? (
                  <span className="px-3 py-1 rounded-full bg-hq-yellow text-hq-black font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase shadow-md">
                    {selectedConclave.tag}
                  </span>
                ) : (
                  <span></span>
                )}
                <span className="flex items-center gap-1.5 text-xs font-mono text-white/90 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-hq-yellow" />
                  {selectedConclave.location}
                </span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-7 overflow-y-auto flex-1">
              <div className="text-xs font-mono uppercase tracking-[0.2em] font-semibold text-hq-yellow mb-2">
                {selectedConclave.focus}
              </div>
              
              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white mb-3">
                {selectedConclave.client}
              </h3>

              <p className="font-body text-xs sm:text-sm text-white/80 font-light leading-relaxed mb-5">
                {selectedConclave.fullDesc}
              </p>

              {/* Key Methodological Takeaways */}
              <div className="mb-5 bg-white/5 border border-white/10 p-4 sm:p-5 rounded-2xl">
                <h4 className="text-xs font-mono uppercase tracking-widest text-hq-yellow font-semibold mb-2.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-hq-yellow" />
                  <span>Key Conclave Outcomes & Methodologies</span>
                </h4>
                <ul className="space-y-2">
                  {selectedConclave.takeaways.map((takeaway, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2 text-xs sm:text-sm text-white/75 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-hq-yellow mt-1.5 shrink-0"></span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Attendees & Scale Stats */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-white/40">Engagement Scale</div>
                  <div className="text-sm sm:text-base font-semibold text-white mt-0.5">{selectedConclave.attendees}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-white/40">Lead Facilitator</div>
                  <div className="text-sm sm:text-base font-semibold text-hq-yellow mt-0.5">Manny Anchan</div>
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 sm:p-5 border-t border-white/10 bg-[#0F1015] shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-[11px] sm:text-xs text-white/60 text-center sm:text-left">
                Looking to host a bespoke executive offsite or keynote?
              </div>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedConclave(null)}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-colors w-1/2 sm:w-auto cursor-pointer"
                >
                  Close
                </button>
                <Link
                  to="/founder"
                  className="px-5 py-2 rounded-xl text-xs font-semibold text-hq-black bg-hq-yellow hover:bg-white transition-colors flex items-center justify-center gap-1.5 shadow-lg w-1/2 sm:w-auto"
                >
                  <span>Book Manny Anchan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* CELEBRITY ENDORSEMENT BANNER - COMPACT 50% HEIGHT EDITORIAL SHOWCASE (WHITE BG, NO BORDER, VISIBLE DROPSHADOW) */}
      <section className="bg-white text-hq-black py-4 sm:py-6 px-4 sm:px-6 md:px-12 border-b border-black/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Showcase Container (Flex layout: snug text, prominent photo, zero wasted white space) */}
          <div className="rounded-[18px] sm:rounded-[24px] overflow-hidden shadow-[0_22px_55px_-12px_rgba(0,0,0,0.22),0_8px_20px_-4px_rgba(0,0,0,0.08)] relative bg-[#0E0F12] flex flex-col lg:flex-row items-stretch min-h-fit">
            
            {/* 1. Left White Panel (Clean Editorial Card - reduced white space & gap) */}
            <div className="lg:w-[320px] xl:w-[350px] shrink-0 bg-[#FFFFFF] text-[#141414] p-6 sm:p-7 lg:p-8 flex flex-col justify-center relative z-20">
              {/* Headline text matching user specification */}
              <div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-[2rem] font-bold tracking-tight text-[#0A0A0A] leading-[1.08] mb-2">
                  Defining Book <br />
                  <span className="text-[#666666] font-light">of The Moment.</span>
                </h2>
                <div className="font-body text-xs sm:text-sm text-[#444444] font-normal tracking-wide">
                  A Must Read! • foreword & commendation / by <span className="font-bold text-[#0A0A0A]">JOHN ABRAHAM</span>
                </div>
              </div>

              {/* Decorative White Notch overlapping into center column on desktop */}
              <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-16 bg-[#FFFFFF] rounded-r-lg pointer-events-none"></div>
            </div>

            {/* 2. Center Column: DSLR Color Portrait of John Abraham & Manny Anchan holding book */}
            <div className="flex-1 relative min-h-[240px] sm:min-h-[280px] lg:h-[290px] xl:h-[310px] bg-[#0E0F12] overflow-hidden flex items-end justify-center">
              <img 
                src="/images/celebrity/john_abraham_manny_book_color.jpg" 
                alt="John Abraham & Manny Anchan with Happiness Samurai Bestseller" 
                className="w-full h-full object-contain object-bottom filter contrast-105 brightness-100 hover:scale-105 transition-all duration-700"
              />
            </div>

            {/* 3. Right Column: Dark Charcoal Minimalist Sidebar with Commendation & Book Thumbnails */}
            <div className="lg:w-[350px] xl:w-[380px] shrink-0 bg-[#111215] p-5 sm:p-6 lg:p-7 flex flex-col justify-center relative z-10 gap-3">
              
              {/* Commendation Quote */}
              <div>
                <div className="font-mono text-xs tracking-[0.25em] uppercase text-white/60 font-semibold mb-1">
                  COMMENDATION
                </div>
                <p className="font-body text-sm sm:text-[15px] text-white/90 font-light leading-relaxed">
                  "A thoughtful guide to navigating life with purpose, gratitude, and resilience. A must-read for anyone seeking true fulfillment."
                </p>
              </div>

              {/* 3 Stacked Mini Book Cards */}
              <div className="space-y-2 pt-1">
                {/* Item 1: Happiness Samurai */}
                <Link 
                  to="/books"
                  className="flex items-center gap-3 p-1.5 rounded-lg bg-white/[0.08] hover:border-hq-yellow transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-white/5 border border-white/10">
                    <img src="/books/4.jpg" alt="Happiness Samurai" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-xs sm:text-[13px] font-bold text-white tracking-wider group-hover:text-hq-yellow transition-colors truncate">
                      HAPPINESS SAMURAI
                    </div>
                    <div className="font-mono text-[11px] text-white/60 truncate">
                      Foreword by John Abraham
                    </div>
                  </div>
                </Link>

                {/* Item 2: The Ikigai Code */}
                <Link 
                  to="/books"
                  className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-white/[0.05] transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-white/5 border border-white/10 opacity-70 group-hover:opacity-100">
                    <img src="/books/1.jpg" alt="The Ikigai Code" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-xs sm:text-[13px] font-semibold text-white/80 tracking-wider group-hover:text-white transition-colors truncate">
                      THE IKIGAI CODE
                    </div>
                    <div className="font-mono text-[11px] text-white/50 truncate">
                      National Bestseller
                    </div>
                  </div>
                </Link>

                {/* Item 3: Leadership Edition */}
                <Link 
                  to="/books"
                  className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-white/[0.05] transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-white/5 border border-white/10 opacity-70 group-hover:opacity-100">
                    <img src="/books/2.jpg" alt="Eudaimonia Leadership" className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-xs sm:text-[13px] font-semibold text-white/80 tracking-wider group-hover:text-white transition-colors truncate">
                      GROSS HAPPINESS
                    </div>
                    <div className="font-mono text-[11px] text-white/50 truncate">
                      Executive Framework
                    </div>
                  </div>
                </Link>
              </div>

              {/* Bottom: Explore Link */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                <Link 
                  to="/books" 
                  className="font-mono text-xs uppercase tracking-widest text-white/80 hover:text-hq-yellow font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>ALL PUBLICATIONS</span>
                  <span>›</span>
                </Link>
              </div>

              {/* Far Right Vertical Rotated Label */}
              <div className="hidden xl:block absolute right-2.5 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[8px] font-mono tracking-[0.25em] uppercase text-white/20 whitespace-nowrap pointer-events-none">
                FOREWORD & COMMENDATION
              </div>
            </div>

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
