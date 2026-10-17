import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowUpRight, ShieldCheck, Phone } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';
import BrandLogo from '../common/BrandLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  const showDarkNav = scrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Smooth scroll handler to stay on Home page without redirecting
  const scrollToSection = (e, sectionId) => {
    if (e && e.preventDefault) e.preventDefault();
    setMobileMenuOpen(false);
    if (!sectionId || sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        id="navbar"
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 flex items-center ${
          showDarkNav 
            ? 'bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md text-hq-black dark:text-white shadow-md dark:shadow-2xl py-4 border-b border-hq-black/10 dark:border-white/10' 
            : 'bg-transparent text-white py-6 border-b border-transparent shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-between items-center">
          {/* Brand Logo (Scrolls to top of Home) */}
          <Link 
            to="/" 
            onClick={(e) => scrollToSection(e, 'top')} 
          className="flex items-center gap-3 group" 
          aria-label="HQX Home"
        >
          <BrandLogo className="h-7 sm:h-8 w-auto transition-transform duration-300 group-hover:scale-105" />
          <span className={`hidden sm:inline-block pl-3 border-l text-[11px] tracking-widest font-body uppercase font-medium ${
            showDarkNav ? 'border-hq-black/20 text-hq-black/60 dark:border-white/20 dark:text-white/60' : 'border-white/20 text-white/60'
          }`}>
            Happiness Samurai
          </span>
        </Link>

        {/* Desktop Navigation Links (+10% font size: text-[13.5px]) */}
        <div className="hidden lg:flex items-center gap-7 font-body text-[13.5px] tracking-widest uppercase font-medium">
          {/* Dropdown: About Us */}
          <div className="group relative">
            <button 
              onClick={(e) => scrollToSection(e, 'reasons-section')}
              className="flex items-center gap-1.5 hover:text-hq-yellow transition-colors duration-200 py-3 uppercase cursor-pointer"
            >
              ABOUT US <ChevronDown className="w-4 h-4 stroke-[1.5] group-hover:rotate-180 transition-transform duration-300" />
            </button>
            {/* Seamless hover bridge: no gap, guaranteed catch */}
            <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col pointer-events-none group-hover:pointer-events-auto z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']">
              <div className="bg-hq-white text-hq-black border border-hq-black/10 shadow-2xl flex flex-col uppercase rounded-[4px] overflow-hidden">
                <Link 
                  to="/#top" 
                  onClick={(e) => scrollToSection(e, 'top')}
                  className="px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold text-[13.5px] uppercase">FOUNDER</div>
                    <div className="text-[11px] text-hq-black/60 font-medium uppercase tracking-wider">MANNY ANCHAN</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </Link>
                <Link 
                  to="/#team-section" 
                  onClick={(e) => scrollToSection(e, 'team-section')}
                  className="px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold text-[13.5px] uppercase">TEAM</div>
                    <div className="text-[11px] text-hq-black/60 font-medium uppercase tracking-wider">ADVISORY FACULTY & MENTORS</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </Link>
                <Link 
                  to="/#reasons-section" 
                  onClick={(e) => scrollToSection(e, 'reasons-section')}
                  className="px-6 py-4 text-[13.5px] tracking-wider hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold text-[13.5px] uppercase">WHY HQX</div>
                    <div className="text-[11px] text-hq-black/60 font-medium uppercase tracking-wider">THE EUDAIMONIC ADVANTAGE</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </Link>
              </div>
            </div>
          </div>

          {/* Dropdown: Ethos */}
          <div className="group relative">
            <button 
              onClick={(e) => scrollToSection(e, 'worklife-section')}
              className="flex items-center gap-1.5 hover:text-hq-yellow transition-colors duration-200 py-3 uppercase cursor-pointer"
            >
              ETHOS <ChevronDown className="w-4 h-4 stroke-[1.5] group-hover:rotate-180 transition-transform duration-300" />
            </button>
            {/* Seamless hover bridge: no gap, guaranteed catch */}
            <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col pointer-events-none group-hover:pointer-events-auto z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']">
              <div className="bg-hq-white text-hq-black border border-hq-black/10 shadow-2xl flex flex-col uppercase rounded-[4px] overflow-hidden">
                <Link 
                  to="/#worklife-section" 
                  onClick={(e) => scrollToSection(e, 'worklife-section')}
                  className="px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between uppercase"
                >
                  <span className="uppercase">EUDAIMONIC TRANSFORMATION</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </Link>
                <Link 
                  to="/#reasons-section" 
                  onClick={(e) => scrollToSection(e, 'reasons-section')}
                  className="px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between uppercase"
                >
                  <span className="uppercase">WELL-BEING ETHOS (5 PILLARS)</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </Link>
                <Link 
                  to="/#top" 
                  onClick={(e) => scrollToSection(e, 'top')}
                  className="px-6 py-4 text-[13.5px] tracking-wider hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between uppercase"
                >
                  <span className="uppercase">MEET MANNY ANCHAN</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </Link>
              </div>
            </div>
          </div>

          {/* Dropdown: Programs */}
          <div className="group relative">
            <button 
              onClick={(e) => scrollToSection(e, 'key-themes-section')}
              className="flex items-center gap-1.5 hover:text-hq-yellow transition-colors duration-200 py-3 uppercase cursor-pointer"
            >
              PROGRAMS <ChevronDown className="w-4 h-4 stroke-[1.5] group-hover:rotate-180 transition-transform duration-300" />
            </button>
            {/* Seamless hover bridge: no gap, guaranteed catch */}
            <div className="absolute top-full left-0 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col pointer-events-none group-hover:pointer-events-auto z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']">
              <div className="bg-hq-white text-hq-black border border-hq-black/10 shadow-2xl flex flex-col uppercase rounded-[4px] overflow-hidden">
                <Link 
                  to="/#key-themes-section" 
                  onClick={(e) => scrollToSection(e, 'key-themes-section')}
                  className="px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold text-[13.5px] uppercase">LEADERSHIP DEEP DIVE</div>
                    <div className="text-[11px] text-hq-black/60 font-medium uppercase tracking-wider">EXECUTIVE RETREAT & PURPOSE ALIGNMENT</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </Link>
                <Link 
                  to="/#key-themes-section" 
                  onClick={(e) => scrollToSection(e, 'key-themes-section')}
                  className="px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold text-[13.5px] uppercase">ENGAGING WORKSHOPS</div>
                    <div className="text-[11px] text-hq-black/60 font-medium uppercase tracking-wider">MINDFULNESS, PRODUCTIVITY & GRIT</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </Link>
                <Link 
                  to="/#key-themes-section" 
                  onClick={(e) => scrollToSection(e, 'key-themes-section')}
                  className="px-6 py-4 text-[13.5px] tracking-wider hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold text-[13.5px] uppercase">KEYNOTES & FRIDAY TALKS</div>
                    <div className="text-[11px] text-hq-black/60 font-medium uppercase tracking-wider">DISRUPTIVE CORPORATE TOWNHALLS</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </Link>
              </div>
            </div>
          </div>

          {/* Dropdown: Digital */}
          <div className="group relative">
            <button 
              onClick={(e) => scrollToSection(e, 'benefits-section')}
              className="flex items-center gap-1.5 hover:text-hq-yellow transition-colors duration-200 py-3 uppercase cursor-pointer"
            >
              DIGITAL <ChevronDown className="w-4 h-4 stroke-[1.5] group-hover:rotate-180 transition-transform duration-300" />
            </button>
            {/* Seamless hover bridge: no gap, guaranteed catch */}
            <div className="absolute top-full left-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col pointer-events-none group-hover:pointer-events-auto z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']">
              <div className="bg-hq-white text-hq-black border border-hq-black/10 shadow-2xl flex flex-col uppercase rounded-[4px] overflow-hidden">
                <Link 
                  to="/#benefits-section" 
                  onClick={(e) => scrollToSection(e, 'benefits-section')}
                  className="px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold text-[13.5px] uppercase">MICRO COURSES</div>
                    <div className="text-[11px] text-hq-black/60 font-medium uppercase tracking-wider">100-DAY MASTERY BLUEPRINTS</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </Link>
                <Link 
                  to="/#benefits-section" 
                  onClick={(e) => scrollToSection(e, 'benefits-section')}
                  className="px-6 py-4 text-[13.5px] tracking-wider hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold text-[13.5px] uppercase">HAPPYU APP</div>
                    <div className="text-[11px] text-hq-black/60 font-medium uppercase tracking-wider">MEDITATION, GRATITUDE & MOOD TRACK</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </Link>
              </div>
            </div>
          </div>

          {/* Dropdown: Media & Books */}
          <div className="group relative">
            <button 
              onClick={(e) => scrollToSection(e, 'podcast')}
              className="flex items-center gap-1.5 hover:text-hq-yellow transition-colors duration-200 py-3 uppercase cursor-pointer"
            >
              MEDIA & BOOKS <ChevronDown className="w-4 h-4 stroke-[1.5] group-hover:rotate-180 transition-transform duration-300" />
            </button>
            {/* Seamless hover bridge: no gap, guaranteed catch */}
            <div className="absolute top-full right-0 pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col pointer-events-none group-hover:pointer-events-auto z-50 before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:content-['']">
              <div className="bg-hq-white text-hq-black border border-hq-black/10 shadow-2xl flex flex-col uppercase rounded-[4px] overflow-hidden">
                <Link 
                  to="/#podcast" 
                  onClick={(e) => scrollToSection(e, 'podcast')}
                  className="px-6 py-4 text-[13.5px] tracking-wider border-b border-hq-black/10 hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold text-[13.5px] uppercase">HQX PODCAST</div>
                    <div className="text-[11px] text-hq-black/60 font-medium uppercase tracking-wider">FORTNIGHTLY EXECUTIVE INSIGHTS</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </Link>
                <Link 
                  to="/#books" 
                  onClick={(e) => scrollToSection(e, 'books')}
                  className="px-6 py-4 text-[13.5px] tracking-wider hover:bg-hq-yellow hover:text-hq-black transition-colors flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold text-[13.5px] uppercase">LITERATURE & BOOKS</div>
                    <div className="text-[11px] text-hq-black/60 font-medium uppercase tracking-wider">2020 TO 2025 ROADMAP</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Action CTA buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <ThemeToggle />
          <Link 
            to="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="nav-book-btn font-display text-[13.5px] uppercase tracking-wider bg-hq-yellow text-[#0A0A0A] hover:!bg-[#0A0A0A] hover:!text-white dark:hover:!bg-white dark:hover:!text-[#0A0A0A] px-5 py-2.5 rounded-full transition-all duration-300 font-semibold shadow-lg shadow-hq-yellow/20 flex items-center gap-2.5 group cursor-pointer"
          >
            <span className="text-[#0A0A0A] group-hover:!text-white dark:group-hover:!text-[#0A0A0A] transition-colors">BOOK MANNY</span>
            <svg 
              className="w-[20px] h-[10px] inline-block transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0 text-[#0A0A0A] group-hover:!text-white dark:group-hover:!text-[#0A0A0A]" 
              viewBox="0 0 20 10" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="1.2" />
              <polyline points="15 1, 20 5, 15 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className={`lg:hidden p-2 transition-colors rounded-xl ${
              showDarkNav ? 'text-hq-black dark:text-white hover:text-hq-yellow' : 'text-white hover:text-hq-yellow'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        </div>
      </nav>

      {/* Mobile Drawer (Responsive Overlay) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-hq-black text-hq-white pt-24 px-6 pb-12 overflow-y-auto lg:hidden flex flex-col justify-between">
          <div className="flex flex-col gap-6 font-display text-xl uppercase tracking-wider">
            <Link 
              to="/" 
              onClick={(e) => scrollToSection(e, 'top')} 
              className="py-2 border-b border-white/10 hover:text-hq-yellow uppercase"
            >
              HOME
            </Link>
            
            <div className="py-2 border-b border-white/10">
              <div className="text-xs text-hq-yellow tracking-widest uppercase mb-2 font-mono">ABOUT US</div>
              <div className="flex flex-col gap-3 pl-3 text-sm uppercase font-body font-medium tracking-wider">
                <Link to="/#top" onClick={(e) => scrollToSection(e, 'top')} className="hover:text-hq-yellow uppercase">FOUNDER (MANNY ANCHAN)</Link>
                <Link to="/#team-section" onClick={(e) => scrollToSection(e, 'team-section')} className="hover:text-hq-yellow uppercase">TEAM (ADVISORY FACULTY)</Link>
                <Link to="/#reasons-section" onClick={(e) => scrollToSection(e, 'reasons-section')} className="hover:text-hq-yellow uppercase">WHY HQX</Link>
              </div>
            </div>

            <div className="py-2 border-b border-white/10">
              <div className="text-xs text-hq-yellow tracking-widest uppercase mb-2 font-mono">ETHOS</div>
              <div className="flex flex-col gap-3 pl-3 text-sm uppercase font-body font-medium tracking-wider">
                <Link to="/#worklife-section" onClick={(e) => scrollToSection(e, 'worklife-section')} className="hover:text-hq-yellow uppercase">EUDAIMONIC TRANSFORMATION</Link>
                <Link to="/#reasons-section" onClick={(e) => scrollToSection(e, 'reasons-section')} className="hover:text-hq-yellow uppercase">WELL-BEING ETHOS (5 PILLARS)</Link>
                <Link to="/#top" onClick={(e) => scrollToSection(e, 'top')} className="hover:text-hq-yellow uppercase">MEET MANNY ANCHAN</Link>
              </div>
            </div>

            <div className="py-2 border-b border-white/10">
              <div className="text-xs text-hq-yellow tracking-widest uppercase mb-2 font-mono">CORPORATE PROGRAMS</div>
              <div className="flex flex-col gap-3 pl-3 text-sm uppercase font-body font-medium tracking-wider">
                <Link to="/#key-themes-section" onClick={(e) => scrollToSection(e, 'key-themes-section')} className="hover:text-hq-yellow uppercase">LEADERSHIP DEEP DIVE</Link>
                <Link to="/#key-themes-section" onClick={(e) => scrollToSection(e, 'key-themes-section')} className="hover:text-hq-yellow uppercase">ENGAGING WORKSHOPS</Link>
                <Link to="/#key-themes-section" onClick={(e) => scrollToSection(e, 'key-themes-section')} className="hover:text-hq-yellow uppercase">KEYNOTES & FRIDAY TALKS</Link>
              </div>
            </div>

            <div className="py-2 border-b border-white/10">
              <div className="text-xs text-hq-yellow tracking-widest uppercase mb-2 font-mono">DIGITAL PRODUCTS</div>
              <div className="flex flex-col gap-3 pl-3 text-sm uppercase font-body font-medium tracking-wider">
                <Link to="/#benefits-section" onClick={(e) => scrollToSection(e, 'benefits-section')} className="hover:text-hq-yellow uppercase">MICRO COURSES (100-DAY)</Link>
                <Link to="/#benefits-section" onClick={(e) => scrollToSection(e, 'benefits-section')} className="hover:text-hq-yellow uppercase">HAPPYU APP</Link>
              </div>
            </div>

            <Link to="/#podcast" onClick={(e) => scrollToSection(e, 'podcast')} className="py-2 border-b border-white/10 hover:text-hq-yellow uppercase">HQX PODCAST</Link>
            <Link to="/#books" onClick={(e) => scrollToSection(e, 'books')} className="py-2 border-b border-white/10 hover:text-hq-yellow uppercase">BOOKS & ROADMAP</Link>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4">
            <div className="flex items-center justify-between py-1 px-1">
              <span className="font-mono text-xs uppercase tracking-widest text-white/70">
                THEME MODE
              </span>
              <ThemeToggle showLabel />
            </div>

            <Link 
              to="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="w-full text-center bg-hq-yellow text-[#0A0A0A] font-display font-semibold uppercase tracking-widest py-4 rounded-full text-sm hover:bg-white transition-colors"
            >
              Book Corporate Session
            </Link>
            <a 
              href="tel:+919700100800" 
              className="text-center font-mono text-xs tracking-widest text-white/70 hover:text-hq-yellow flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-hq-yellow" />
              Direct: +91 97001 00800
            </a>
          </div>
        </div>
      )}
    </>
  );
}
