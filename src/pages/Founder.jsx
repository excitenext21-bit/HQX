import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Mic2, 
  Globe, 
  BookOpen, 
  Phone, 
  ArrowRight, 
  Briefcase, 
  Award, 
  Sparkles,
  MapPin,
  CheckCircle2,
  Quote
} from 'lucide-react';
import { FOUNDER_PROFILE } from '../context/DataContext';
import CorporatePartnersMarquee from '../components/common/CorporatePartnersMarquee';

export default function Founder() {
  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* CINEMATIC EDITORIAL HERO SECTION (MATCHING ASH SOAN REFERENCE & FIT TO SCREEN) */}
      <section className="bg-[#121210] text-white border-b border-white/10 relative overflow-hidden min-h-[100svh] lg:h-screen lg:max-h-screen flex items-center pt-20 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-[100svh] lg:min-h-0 lg:h-screen">
          {/* Left: High-Res Sharp Keynote Speaking Portrait seamlessly merged into dark background */}
          <div className="lg:col-span-6 relative h-[50vh] sm:h-[54vh] lg:h-full overflow-hidden bg-[#121210] flex items-center justify-center">
            <img 
              src="/images/hero_showcase/founder_hero_keynote_speaking.jpg"
              alt="Manny Anchan - Keynote Speaker & Founder"
              onError={(e) => { e.target.src = '/manny-hero.jpg'; }}
              className="w-full h-full object-cover object-top"
            />
            {/* Seamless Multi-Directional Gradient Dissolves into #121210 Background */}
            {/* Right edge dissolve into text panel on desktop */}
            <div className="hidden lg:block absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#121210] via-[#121210]/60 to-transparent pointer-events-none"></div>
            {/* Bottom dissolve on mobile */}
            <div className="lg:hidden absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#121210] via-[#121210]/80 to-transparent pointer-events-none"></div>
            {/* Left and top subtle vignette for depth */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#121210]/20 to-[#121210]/70 pointer-events-none"></div>


          </div>

          {/* Right: High-Impact Bold Condensed Editorial Quote & Meta */}
          <div className="lg:col-span-6 flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-10 lg:py-0 relative z-10 bg-[#121210]">
            {/* Massive Editorial Quote Headline (Matching Ash Soan Reference Typography) */}
            <blockquote 
              className="founder-hero-quote text-xl sm:text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.35rem] font-medium leading-[1.25] tracking-tight uppercase text-white mb-8 border-l-4 border-hq-yellow pl-4 sm:pl-6"
            >
              “THIS IS HOW THE GOOD COMPANIES FIND THE GOOD COMPANY.”
            </blockquote>

            {/* Author Credential Signature Line */}
            <div className="mb-10">
              <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
                Manny Anchan
              </div>
              <div className="text-xs sm:text-sm font-mono text-white/60 tracking-wider uppercase">
                Founder &amp; Chief Happiness Officer, HQGPL • Author, <em>Happiness Samurai</em>
              </div>
            </div>

            {/* Primary Action Button (Home Page Hero Signature Style) */}
            <div>
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center justify-between gap-6 py-3.5 px-1 font-display font-medium text-xs tracking-widest text-white hover:text-hq-yellow transition-colors duration-300"
              >
                {/* Top border line */}
                <span className="absolute top-0 right-0 w-full group-hover:w-1/5 group-hover:w-[20%] h-[1.25px] bg-white group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none"></span>

                <span className="relative z-10">INQUIRE KEYNOTE</span>

                <svg 
                  className="w-[20px] h-[10px] inline-block transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" 
                  viewBox="0 0 20 10" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="0" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="1" />
                  <polyline points="15 1, 20 5, 15 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                {/* Bottom border line */}
                <span className="absolute bottom-0 right-0 w-full group-hover:w-1/5 group-hover:w-[20%] h-[1.25px] bg-white group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED NARRATIVE & PEDIGREE (SLIDE 26 & 27 PROFILE) */}
      <section id="pedigree" className="py-20 sm:py-28 px-6 md:px-12 border-b border-hq-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
            
            {/* Left: Quick Facts, Key Accomplishments, & Academic Pedigree */}
            <div className="w-full lg:w-5/12 flex flex-col gap-8 sticky top-28">
              {/* Secondary Headshot in relaxed executive pose */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-hq-gray border border-hq-black/10 shadow-md">
                <img 
                  src="/images/hero_showcase/manny_yellow_cab.jpg" 
                  alt="Manny Anchan - Global Life & Well-Being Presence" 
                  className="w-full h-full object-cover object-[center_35%]"
                />
              </div>

              {/* Verified Credentials Box */}
              <div className="bg-hq-gray/70 p-6 sm:p-8 rounded-2xl border border-hq-black/10 flex flex-col gap-6">
                <h3 className="font-display text-xl font-bold uppercase tracking-wider text-hq-black border-b border-hq-black/10 pb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-hq-yellow" />
                  <span>Verified Pedigree</span>
                </h3>

                <div className="flex flex-col gap-4 text-xs font-body">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-4 h-4 text-hq-black shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-hq-black">Executive Education</div>
                      <div className="text-hq-black/70">Harvard Business School &amp; Columbia Business School Alumni</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mic2 className="w-4 h-4 text-hq-black shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-hq-black">Global Keynotes</div>
                      <div className="text-hq-black/70">4x TEDx Speaker (Katra, ElPro International, Navrachana University, Man Sagar Lake)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-4 h-4 text-hq-black shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-hq-black">Global Impact Footprint</div>
                      <div className="text-hq-black/70">Conducted high-trust summits across 9 nations &amp; 16 Indian states</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 text-hq-black shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-hq-black">Literary Benchmark</div>
                      <div className="text-hq-black/70">Author of 6 published works including <em>Happiness Samurai</em> (Foreword by John Abraham)</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-hq-black/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-hq-black/60 uppercase">Secretariat Contact:</span>
                  <a href="tel:+919700100800" className="text-xs font-mono font-bold text-hq-yellow hover:underline flex items-center gap-1">
                    <Phone className="w-3 h-3" /> +91 97001 00800
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Comprehensive Narrative & Credentials */}
            <div className="w-full lg:w-7/12 flex flex-col gap-8">
              <div>
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
                  <span>25+ Years Global Corporate Stewardship (Slide 26)</span>
                </div>
                <p className="font-body text-sm sm:text-base text-hq-black/80 font-light leading-relaxed mb-4">
                  Before founding HQX, Manny spent a quarter-century at the pinnacle of global corporate finance and multinational executive management. His career encompasses senior leadership tenures at <strong>GE Capital</strong>, <strong>HDFC Bank</strong>, <strong>ABN AMRO</strong>, <strong>Barclays</strong>, <strong>Arab United Bank (AUB)</strong>, and <strong>First Abu Dhabi Bank (FAB)</strong>.
                </p>
                <p className="font-body text-sm sm:text-base text-hq-black/80 font-light leading-relaxed">
                  Having lived and led multi-billion dollar operations across Asia, Africa, Europe, and North America, Manny brings an acute, firsthand understanding of corporate stress, boardroom accountability, executive burnout, and how organizational well-being fundamentally impacts EBITDA and enterprise valuation.
                </p>
              </div>

              {/* Research & Intellectual Foundations */}
              <div className="border border-hq-black/15 p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-hq-black mb-3">
                  <BookOpen className="w-4 h-4 text-hq-yellow" />
                  <span>The Science of Human Flourishing</span>
                </div>
                <p className="font-body text-sm sm:text-base text-hq-black/80 font-light leading-relaxed mb-4">
                  Manny has spent over a decade conducting rigorous field research across diverse cultures to synthesize universal well-being paradigms into actionable corporate blueprints:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-body">
                  <div className="p-3 bg-hq-gray/50 border border-hq-black/10">
                    <strong className="block text-hq-black mb-1">Japan (Ikigai)</strong>
                    <span className="text-hq-black/70">Connecting individual professional drive to systemic enterprise purpose.</span>
                  </div>
                  <div className="p-3 bg-hq-gray/50 border border-hq-black/10">
                    <strong className="block text-hq-black mb-1">Nordics (Hygge &amp; Sisu)</strong>
                    <span className="text-hq-black/70">Building stoic psychological fortitude alongside communal corporate warmth.</span>
                  </div>
                  <div className="p-3 bg-hq-gray/50 border border-hq-black/10">
                    <strong className="block text-hq-black mb-1">Bhutan (GNH)</strong>
                    <span className="text-hq-black/70">Measuring organizational prosperity beyond raw outputs to holistic wellness.</span>
                  </div>
                  <div className="p-3 bg-hq-gray/50 border border-hq-black/10">
                    <strong className="block text-hq-black mb-1">Neuroscience (Eudaimonia)</strong>
                    <span className="text-hq-black/70">Dopamine-oxytocin equilibrium for sustained stamina and burnout immunity.</span>
                  </div>
                </div>
              </div>

              {/* Keynote Conclaves & Global Engagements */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-hq-black mb-3">
                  <Mic2 className="w-4 h-4 text-hq-yellow" />
                  <span>Keynote Conclaves &amp; Global Engagements</span>
                </div>
                <p className="font-body text-sm sm:text-base text-hq-black/80 font-light leading-relaxed mb-4">
                  Manny has energized boardrooms and global summits for premier corporate and institutional clients:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    'Barclays Wealth',
                    'Cipla Healthcare',
                    'Tata Motors',
                    'Indigo Airlines',
                    'Ageas Federal Life',
                    'Amana Bank (Tanzania)',
                    'Absa Bank (Mauritius)',
                    'Harvard Club of APAC',
                    'TEDx Katra (J&K)',
                    'TEDx Navrachana Univ.',
                    'TEDx ElPro Int. School',
                    'TEDx Man Sagar Lake'
                  ].map((client, idx) => (
                    <div key={idx} className="p-3 bg-hq-gray border border-hq-black/10 text-xs font-mono font-medium text-hq-black flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-hq-yellow shrink-0" />
                      <span className="truncate">{client}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community & Advisory Engagements */}
              <div>
                <div className="text-xs font-mono uppercase tracking-widest font-bold text-hq-black mb-3">
                  Community &amp; Academic Stewardship
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

      {/* FULL-WIDTH TRUSTED BY OVER 40+ INDUSTRY TITANS MARQUEE TOUCHING ABOVE FOOTER WITHOUT GAP */}
      <div className="w-full m-0 p-0">
        <CorporatePartnersMarquee showHeader={true} title="Trusted by Over 40+ Industry Titans" reversed={true} />
      </div>
    </div>
  );
}
