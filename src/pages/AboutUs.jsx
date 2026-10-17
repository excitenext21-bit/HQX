import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Award, 
  Users, 
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
  Filter, 
  X,
  Briefcase,
  GraduationCap,
  Mic2,
  ChevronRight
} from 'lucide-react';
import { useData, FOUNDER_PROFILE, TRUSTED_BRANDS, STATES_COVERED, GLOBAL_FOOTPRINT_COUNTRIES } from '../context/DataContext';

export default function AboutUs() {
  const { faculty } = useData();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('founder');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMember, setSelectedMember] = useState(null);

  const categories = ['All', ...Array.from(new Set(faculty.map(f => f.category).filter(Boolean)))];

  const filteredFaculty = selectedCategory === 'All' 
    ? faculty.filter(f => f.active) 
    : faculty.filter(f => f.active && f.category === selectedCategory);

  // Sync section with URL hash
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && ['founder', 'team', 'why-hqx'].includes(hash)) {
      setActiveSection(hash);
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location.hash]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 90;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* HERO SECTION */}
      <section className="bg-[#0A0A0A] text-hq-white pt-28 pb-20 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-hq-yellow/5 via-transparent to-transparent pointer-events-none opacity-40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="font-mono text-xs uppercase tracking-widest text-hq-yellow mb-4 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-hq-yellow inline-block animate-pulse"></span>
            About Happiness Quotient Global (HQX)
          </div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter font-semibold mb-6 leading-tight">
            Architecting Purpose, Vitality & <br className="hidden sm:inline" />
            <span className="text-hq-yellow">Enterprise Performance</span>
          </h1>
          <p className="font-body text-base sm:text-lg md:text-xl text-hq-white/80 max-w-3xl font-light leading-relaxed mb-10">
            Founded by international corporate leader and bestselling author Manny Anchan, HQX bridges empirical neuroscience, ancient Japanese eudaimonia, and board-level stewardship to cultivate high-trust, resilient, and thriving enterprise cultures across 9 nations.
          </p>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/15">
            <div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-hq-yellow">25+</div>
              <div className="text-xs text-hq-white/70 font-mono tracking-wider uppercase mt-1">Years Corporate Stewardship</div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-hq-white">9</div>
              <div className="text-xs text-hq-white/70 font-mono tracking-wider uppercase mt-1">Countries Impacted</div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-hq-yellow">16</div>
              <div className="text-xs text-hq-white/70 font-mono tracking-wider uppercase mt-1">Indian States Covered</div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-hq-white">40+</div>
              <div className="text-xs text-hq-white/70 font-mono tracking-wider uppercase mt-1">Fortune & Institutional Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY SUB-NAVIGATION BAR */}
      <section className="sticky top-[68px] z-30 bg-hq-gray/95 backdrop-blur-md border-b border-hq-black/10 py-3.5 px-6 md:px-12 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar py-1">
            <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-widest text-hq-black/50 mr-2">
              EXPLORE:
            </span>
            <button
              onClick={() => scrollToSection('founder')}
              className={`px-5 py-2 text-xs font-display uppercase tracking-wider font-semibold rounded-full transition-all flex items-center gap-2 ${
                activeSection === 'founder'
                  ? 'bg-hq-black text-hq-yellow shadow-md'
                  : 'bg-white text-hq-black/80 hover:text-hq-black hover:border-hq-black/40 border border-hq-black/15'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>FOUNDER</span>
            </button>

            <button
              onClick={() => scrollToSection('team')}
              className={`px-5 py-2 text-xs font-display uppercase tracking-wider font-semibold rounded-full transition-all flex items-center gap-2 ${
                activeSection === 'team'
                  ? 'bg-hq-black text-hq-yellow shadow-md'
                  : 'bg-white text-hq-black/80 hover:text-hq-black hover:border-hq-black/40 border border-hq-black/15'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>TEAM</span>
            </button>

            <button
              onClick={() => scrollToSection('why-hqx')}
              className={`px-5 py-2 text-xs font-display uppercase tracking-wider font-semibold rounded-full transition-all flex items-center gap-2 ${
                activeSection === 'why-hqx'
                  ? 'bg-hq-black text-hq-yellow shadow-md'
                  : 'bg-white text-hq-black/80 hover:text-hq-black hover:border-hq-black/40 border border-hq-black/15'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>WHY HQX</span>
            </button>
          </div>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 text-xs font-display uppercase font-bold text-hq-black hover:text-hq-yellow transition-colors"
          >
            <span>BOOK CONSULTATION</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* SECTION 1: FOUNDER (MANNY ANCHAN) */}
      <section id="founder" className="py-24 px-6 md:px-12 border-b border-hq-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left: Founder Portrait Card */}
            <div className="w-full lg:w-5/12 sticky top-36">
              <div className="relative bg-hq-black text-white p-3 sm:p-4 border border-hq-black shadow-2xl">
                <div className="relative aspect-[3/4] overflow-hidden bg-hq-black">
                  <img
                    src="/manny-hero.jpg"
                    alt="Manny Anchan - Founder of HQX"
                    className="w-full h-full object-cover object-top filter hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hq-black via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating Badges */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-block bg-hq-yellow text-hq-black px-3 py-1 font-display text-[11px] uppercase tracking-widest font-extrabold mb-2 shadow-lg">
                      Harvard & Columbia Alum
                    </div>
                    <div className="font-display text-2xl font-bold tracking-tight text-hq-white">
                      Manny Anchan
                    </div>
                    <div className="text-xs text-hq-yellow font-mono tracking-wider mt-0.5">
                      Chief Happiness Officer & Global Keynote Speaker
                    </div>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-white/80">
                    <GraduationCap className="w-4 h-4 text-hq-yellow flex-shrink-0" />
                    <span>Harvard & Columbia</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Mic2 className="w-4 h-4 text-hq-yellow flex-shrink-0" />
                    <span>4x TEDx Speaker</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Globe className="w-4 h-4 text-hq-yellow flex-shrink-0" />
                    <span>9 Nations, 16 States</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <BookOpen className="w-4 h-4 text-hq-yellow flex-shrink-0" />
                    <span>6 Bestselling Books</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-white/60">Direct Executive Desk:</span>
                  <a href="tel:+919700100800" className="text-xs font-mono font-bold text-hq-yellow hover:underline flex items-center gap-1">
                    <Phone className="w-3 h-3" /> +91 97001 00800
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Comprehensive Narrative & Credentials */}
            <div className="w-full lg:w-7/12 flex flex-col gap-8">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-hq-black/60 font-semibold mb-2">
                  Founder & Visionary
                </div>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold mb-4 leading-tight">
                  Manny <span className="text-hq-yellow bg-hq-black px-2 py-0.5 inline-block">Anchan</span>
                </h2>
                <div className="font-prata text-xl sm:text-2xl text-hq-black/80 italic font-normal leading-relaxed mb-6" style={{ fontFamily: '"Prata", serif' }}>
                  "{FOUNDER_PROFILE.tagline}"
                </div>
                <p className="font-body text-base sm:text-lg text-hq-black/80 font-light leading-relaxed mb-6">
                  {FOUNDER_PROFILE.philosophy}
                </p>
              </div>

              {/* 25-Year Global Corporate Pedigree */}
              <div className="bg-hq-gray p-6 sm:p-8 border border-hq-black/10">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-hq-black mb-3">
                  <Briefcase className="w-4 h-4 text-hq-black" />
                  <span>25+ Years Global Corporate Stewardship</span>
                </div>
                <p className="font-body text-sm sm:text-base text-hq-black/80 font-light leading-relaxed mb-4">
                  Before establishing HQX, Manny spent a quarter-century at the pinnacle of global corporate finance and multinational management. His executive tenures include leadership roles at <strong>GE Capital</strong>, <strong>HDFC Bank</strong>, <strong>ABN AMRO</strong>, <strong>Barclays</strong>, <strong>Arab United Bank (AUB)</strong>, and <strong>First Abu Dhabi Bank (FAB)</strong>.
                </p>
                <p className="font-body text-sm sm:text-base text-hq-black/80 font-light leading-relaxed">
                  Having lived and worked across Asia, Africa, Europe, and North America, Manny brings an acute, firsthand understanding of corporate stress, boardroom politics, executive fatigue, and how systemic well-being transforms organizational bottom lines.
                </p>
              </div>

              {/* Research & Intellectual Foundations */}
              <div className="border border-hq-black/15 p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-hq-black mb-3">
                  <BookOpen className="w-4 h-4 text-hq-yellow" />
                  <span>The Science of Human Flourishing</span>
                </div>
                <p className="font-body text-sm sm:text-base text-hq-black/80 font-light leading-relaxed mb-4">
                  Manny has spent over a decade conducting rigorous field research across global cultures to synthesize universal well-being paradigms into actionable corporate blueprints:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-body">
                  <div className="p-3 bg-hq-gray border border-hq-black/10">
                    <span className="font-bold text-hq-black block mb-0.5">Ikigai (Japan):</span>
                    <span className="text-hq-black/70 font-light">Intersection of passion, mission, vocation, and profession.</span>
                  </div>
                  <div className="p-3 bg-hq-gray border border-hq-black/10">
                    <span className="font-bold text-hq-black block mb-0.5">Hygge & Lagom (Nordics):</span>
                    <span className="text-hq-black/70 font-light">Contentment through conscious balance and community warmth.</span>
                  </div>
                  <div className="p-3 bg-hq-gray border border-hq-black/10">
                    <span className="font-bold text-hq-black block mb-0.5">Sisu (Finland):</span>
                    <span className="text-hq-black/70 font-light">Extraordinary stoic determination and mental grit under pressure.</span>
                  </div>
                  <div className="p-3 bg-hq-gray border border-hq-black/10">
                    <span className="font-bold text-hq-black block mb-0.5">Gross National Happiness (Bhutan):</span>
                    <span className="text-hq-black/70 font-light">Holistic progress measuring psychological vitality over sheer output.</span>
                  </div>
                </div>
              </div>

              {/* TEDx Engagements */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-hq-black mb-3">
                  <Mic2 className="w-4 h-4 text-red-600" />
                  <span>4x Keynote TEDx Stages</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {FOUNDER_PROFILE.tedxTalks.map((talk, idx) => (
                    <div key={idx} className="p-3.5 bg-white border border-hq-black/15 hover:border-hq-black transition-all">
                      <div className="text-[10px] font-mono text-red-600 font-bold uppercase tracking-wider">TEDx</div>
                      <div className="font-display font-semibold text-sm text-hq-black mt-1">{talk.city}</div>
                      <div className="text-[11px] text-hq-black/60 font-light mt-0.5">{talk.event}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community & Advisory Engagements */}
              <div>
                <div className="text-xs font-mono uppercase tracking-widest font-bold text-hq-black mb-3">
                  Community & Academic Stewardship
                </div>
                <div className="flex flex-wrap gap-2">
                  {FOUNDER_PROFILE.communityEngagement.map((item, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 bg-hq-gray text-xs font-display uppercase tracking-wider font-medium text-hq-black border border-hq-black/10">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-hq-black text-hq-yellow font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-hq-yellow hover:text-hq-black transition-all font-semibold shadow-lg flex items-center gap-2"
                >
                  <span>Book Manny For Your Organization</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/books"
                  className="bg-white text-hq-black border border-hq-black font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-hq-gray transition-all font-semibold flex items-center gap-2"
                >
                  <span>Explore Bestselling Books</span>
                  <BookOpen className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TEAM (ADVISORY FACULTY & GLOBAL MENTORS) */}
      <section id="team" className="py-24 px-6 md:px-12 bg-hq-gray/40 border-b border-hq-black/10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="font-mono text-xs uppercase tracking-widest text-hq-black/60 font-semibold mb-2 flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-hq-yellow" />
              <span>Multidisciplinary Council</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold mb-4 leading-tight">
              Our Advisory <span className="text-hq-yellow bg-hq-black px-2 py-0.5 inline-block">Faculty & Team</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-hq-black/75 font-light leading-relaxed">
              HQX convenes world champions, industry titans, seasoned spiritual guides, and modern parenting authorities collaborating to cultivate human potential across corporations.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3 items-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-hq-black/50 mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" /> Domain:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 text-xs font-display uppercase tracking-wider font-semibold transition-all rounded-full ${
                  selectedCategory === cat
                    ? 'bg-hq-black text-hq-yellow shadow-md'
                    : 'bg-white text-hq-black border border-hq-black/15 hover:border-hq-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Faculty Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredFaculty.map((member) => (
              <div 
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group bg-white p-5 border border-hq-black/15 hover:border-hq-black transition-all cursor-pointer shadow-sm hover:shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-full aspect-[3/4] bg-hq-black/5 overflow-hidden mb-6 relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                    />
                    <div className="absolute bottom-0 left-0 bg-hq-yellow text-hq-black px-3 py-1 font-display text-[10px] tracking-widest uppercase font-bold">
                      {member.category}
                    </div>
                  </div>

                  <h3 className="font-display text-2xl tracking-tight font-medium font-[500] mb-1 group-hover:text-hq-yellow transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-[16px] font-mono text-hq-black/60 mb-3">
                    {member.title}
                  </div>
                  <p className="font-body text-xs text-hq-black/75 font-light leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-hq-black/10 flex justify-between items-center text-xs font-display uppercase font-semibold text-hq-black group-hover:translate-x-1 transition-transform">
                  <span>View Full Profile</span>
                  <ArrowRight className="w-4 h-4 text-hq-yellow" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-widest font-semibold text-hq-black hover:text-hq-yellow hover:underline transition-colors"
            >
              <span>Explore Dedicated Faculty Directory & Biographies</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY HQX (THE EUDAIMONIC ENTERPRISE ADVANTAGE) */}
      <section id="why-hqx" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="font-mono text-xs uppercase tracking-widest text-hq-black/60 font-semibold mb-3 flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-hq-yellow" />
              <span>The Strategic Imperative</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold mb-4 leading-tight">
              Why Global Enterprises <br />
              <span className="text-hq-yellow bg-hq-black px-3 py-1 inline-block mt-1">Choose HQX</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-hq-black/75 font-light leading-relaxed">
              Most corporate wellness programs fail because they offer fleeting hedonic perks. HQX delivers systematic eudaimonic transformation rooted in neuroscience, organizational psychology, and proven C-suite stewardship.
            </p>
          </div>

          {/* 4 Pillars of Distinction Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Pillar 1 */}
            <div className="p-8 sm:p-10 border border-hq-black/15 hover:border-hq-black bg-hq-gray/30 transition-all">
              <div className="w-12 h-12 bg-hq-black text-hq-yellow flex items-center justify-center font-display font-extrabold text-xl mb-6">
                01
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-3 tracking-tight">
                Eudaimonia Over Superficial Hedonism
              </h3>
              <p className="font-body text-sm sm:text-base text-hq-black/75 font-light leading-relaxed mb-6">
                Generic wellness programs offer transactional perks—pizza lunches, gym discounts, or meditation apps with single-digit retention. HQX cultivates Aristotle's classical <em>Eudaimonia</em> (human flourishing through purpose, virtue, and self-realization), eradicating employee cynicism at its structural root.
              </p>
              <div className="pt-4 border-t border-hq-black/10 flex items-center gap-2 text-xs font-mono text-hq-black/60">
                <CheckCircle2 className="w-4 h-4 text-hq-yellow flex-shrink-0" />
                <span>Deep purpose alignment vs. superficial perks</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 sm:p-10 border border-hq-black/15 hover:border-hq-black bg-hq-gray/30 transition-all">
              <div className="w-12 h-12 bg-hq-black text-hq-yellow flex items-center justify-center font-display font-extrabold text-xl mb-6">
                02
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-3 tracking-tight">
                Real C-Suite DNA & Boardroom Fluency
              </h3>
              <p className="font-body text-sm sm:text-base text-hq-black/75 font-light leading-relaxed mb-6">
                HQX was founded not by theoretical life coaches, but by an executive with 25 years of global management at GE Capital, Barclays, and HDFC Bank. Our sessions speak the rigorous language of EBITDA, talent retention, executive succession, and quarterly accountability.
              </p>
              <div className="pt-4 border-t border-hq-black/10 flex items-center gap-2 text-xs font-mono text-hq-black/60">
                <CheckCircle2 className="w-4 h-4 text-hq-yellow flex-shrink-0" />
                <span>25+ years Fortune executive credibility</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 sm:p-10 border border-hq-black/15 hover:border-hq-black bg-hq-gray/30 transition-all">
              <div className="w-12 h-12 bg-hq-black text-hq-yellow flex items-center justify-center font-display font-extrabold text-xl mb-6">
                03
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-3 tracking-tight">
                Measurable Enterprise ROI
              </h3>
              <p className="font-body text-sm sm:text-base text-hq-black/75 font-light leading-relaxed mb-6">
                We believe happiness without measurement is mere wishful thinking. Our 100-day structured habit architecture delivers clear, quantified organizational ROI across productivity uplift, reduced stress absenteeism, and elevated team retention.
              </p>
              <div className="pt-4 border-t border-hq-black/10 flex items-center gap-2 text-xs font-mono text-hq-black/60">
                <CheckCircle2 className="w-4 h-4 text-hq-yellow flex-shrink-0" />
                <span>+31% productivity & -28% burnout reduction</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-8 sm:p-10 border border-hq-black/15 hover:border-hq-black bg-hq-gray/30 transition-all">
              <div className="w-12 h-12 bg-hq-black text-hq-yellow flex items-center justify-center font-display font-extrabold text-xl mb-6">
                04
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-3 tracking-tight">
                Proprietary 5-Pillar Holistic Architecture
              </h3>
              <p className="font-body text-sm sm:text-base text-hq-black/75 font-light leading-relaxed mb-6">
                Human beings are complex ecosystems. A weakness in financial anxiety or emotional poise drags down physical vitality and leadership capacity. Our 5-Pillar framework treats the whole executive, creating compounding positive feedback loops.
              </p>
              <div className="pt-4 border-t border-hq-black/10 flex items-center gap-2 text-xs font-mono text-hq-black/60">
                <CheckCircle2 className="w-4 h-4 text-hq-yellow flex-shrink-0" />
                <span>Purpose, Emotion, Physical, Finance & Values</span>
              </div>
            </div>
          </div>

          {/* Comparison Table: Generic Wellness vs HQX */}
          <div className="mb-20 border border-hq-black/15 overflow-hidden">
            <div className="bg-hq-black text-white p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                  The Paradigm Shift: How HQX Differs
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-light mt-1">
                  Why traditional corporate wellness efforts fail to move organizational needles.
                </p>
              </div>
              <span className="px-3 py-1 bg-hq-yellow text-hq-black font-mono text-xs uppercase tracking-widest font-bold">
                Comparison
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-hq-black/10 bg-hq-gray">
                    <th className="p-4 sm:p-6 font-display uppercase tracking-wider text-hq-black/60 font-semibold w-1/3">Dimension</th>
                    <th className="p-4 sm:p-6 font-display uppercase tracking-wider text-hq-black/60 font-semibold w-1/3">Traditional Corporate Wellness</th>
                    <th className="p-4 sm:p-6 font-display uppercase tracking-wider text-hq-yellow bg-hq-black font-semibold w-1/3">The HQX Eudaimonic Model</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hq-black/10 font-body">
                  <tr>
                    <td className="p-4 sm:p-6 font-bold text-hq-black">Philosophical Core</td>
                    <td className="p-4 sm:p-6 text-hq-black/70">Hedonic: Temporary relaxation, treats, and stress masking</td>
                    <td className="p-4 sm:p-6 font-medium text-hq-black bg-hq-yellow/10">Eudaimonic: Deep purpose alignment, self-mastery, and meaning</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-bold text-hq-black">Duration & Cadence</td>
                    <td className="p-4 sm:p-6 text-hq-black/70">Single-day workshops with zero behavioral follow-through</td>
                    <td className="p-4 sm:p-6 font-medium text-hq-black bg-hq-yellow/10">100-day structured habit formation and neuroplastic rewiring</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-bold text-hq-black">Executive Engagement</td>
                    <td className="p-4 sm:p-6 text-hq-black/70">Delegated to HR; senior leaders rarely participate</td>
                    <td className="p-4 sm:p-6 font-medium text-hq-black bg-hq-yellow/10">Championed by C-Suite and cascaded across top performers</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-bold text-hq-black">Business Metric Impact</td>
                    <td className="p-4 sm:p-6 text-hq-black/70">Anecdotal satisfaction surveys with ambiguous ROI</td>
                    <td className="p-4 sm:p-6 font-medium text-hq-black bg-hq-yellow/10">Tangible metrics: retention, burnout drop, productivity surges</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-6 font-bold text-hq-black">Faculty Provenance</td>
                    <td className="p-4 sm:p-6 text-hq-black/70">Generic freelance trainers without corporate pedigree</td>
                    <td className="p-4 sm:p-6 font-medium text-hq-black bg-hq-yellow/10">Olympic medalists, Fortune C-level heads, and Oxford alumni</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Trusted Corporate Footprint Grid */}
          <div className="bg-hq-black text-hq-white p-8 sm:p-12 border border-hq-black">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 pb-8 border-b border-white/10">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-hq-yellow font-semibold mb-2">
                  Institutional Footprint
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                  Trusted by Over 40+ Industry Titans
                </h3>
              </div>
              <div className="text-xs font-mono text-white/60">
                Active presence across 16 Indian States & 9 Global Nations
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {TRUSTED_BRANDS.corporate.slice(0, 24).map((brand, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white/5 border border-white/10 text-white/90 text-xs sm:text-sm font-body font-light hover:border-hq-yellow hover:text-hq-yellow transition-colors"
                >
                  {brand}
                </span>
              ))}
              <span className="px-4 py-2 bg-hq-yellow text-hq-black text-xs sm:text-sm font-display uppercase tracking-wider font-bold">
                + Many More
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM MONUMENTAL CTA */}
      <section className="bg-hq-yellow text-hq-black py-20 px-6 md:px-12 border-t border-hq-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-3">
              Ready to Shape Tomorrow's Resilient Leaders?
            </h2>
            <p className="font-body text-base sm:text-lg text-hq-black/80 font-light max-w-2xl leading-relaxed">
              Connect directly with Manny Anchan and the HQX advisory faculty to design an intervention tailored to your executive team.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-hq-black text-hq-white font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all font-semibold shadow-2xl flex items-center gap-2"
            >
              <span>Initiate Executive Dialogue</span>
              <ArrowRight className="w-4 h-4 text-hq-yellow" />
            </Link>
            <Link
              to="/leadership-deep-dive"
              className="bg-transparent border border-hq-black text-hq-black font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-hq-black hover:text-white transition-all font-semibold"
            >
              <span>Explore Interventions</span>
            </Link>
          </div>
        </div>
      </section>

      {/* MEMBER BIO MODAL */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 bg-hq-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-hq-white text-hq-black max-w-2xl w-full p-8 md:p-10 border border-hq-black shadow-2xl relative">
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 p-2 text-hq-black hover:text-hq-yellow transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-32 aspect-[3/4] bg-hq-black/5 overflow-hidden flex-shrink-0">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div>
                <span className="text-[10px] font-display uppercase tracking-widest bg-hq-yellow text-hq-black px-2.5 py-1 font-bold inline-block mb-2">
                  {selectedMember.category}
                </span>
                <h3 className="font-display text-3xl font-semibold tracking-tight mb-1">
                  {selectedMember.name}
                </h3>
                <div className="text-xs font-mono text-hq-black/60 mb-4">
                  {selectedMember.title}
                </div>
                <p className="font-body text-sm text-hq-black/80 font-light leading-relaxed mb-6">
                  {selectedMember.bio}
                </p>

                <div className="flex gap-4">
                  <Link 
                    to="/contact" 
                    className="bg-hq-black text-hq-yellow text-xs font-display uppercase tracking-widest px-6 py-3 font-semibold hover:bg-hq-yellow hover:text-hq-black transition-colors"
                  >
                    Request Advisory Session
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
