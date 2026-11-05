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

      {/* DETAILED NARRATIVE & PEDIGREE: 100% WIDTH DUAL-TONE (TOP HALF WHITE, LOWER HALF BRAND YELLOW) WITH 30% LARGER FULL-BODY CUTOUT (SHOES INCLUDED, NO BOX / NO BORDER) */}
      <section id="pedigree" className="relative w-full py-16 sm:py-24 px-6 md:px-12 overflow-hidden border-none">
        {/* Split Dual-Tone Background: Top Half White, Lower Half Brand Yellow (100% Width) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="h-1/2 w-full bg-[#FFFFFF]"></div>
          <div className="h-1/2 w-full bg-hq-yellow"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            
            {/* Left Column: Heading, Bio (Image 2) & Personal Mission Narrative (Image 1) */}
            <div className="lg:col-span-4 flex flex-col gap-6 justify-between self-stretch pb-2">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 text-[#0A0A0A] text-xs font-mono uppercase tracking-widest font-semibold mb-3">
                  <span className="w-2 h-2 rounded-full bg-hq-yellow"></span>
                  Enterprise Stewardship
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bold text-[#0A0A0A] leading-tight mb-3">
                  Manny <span className="text-hq-yellow bg-[#0A0A0A] px-2 py-0.5 inline-block">Anchan</span>
                </h2>
                
                {/* Image 2 Content: Motivational Speaker Narrative */}
                <p className="font-body text-xs sm:text-sm text-[#1A1A1A] font-light leading-relaxed mb-3">
                  Manny Anchan is a dynamic motivational speaker known for his engaging storytelling and powerful insights. With a passion for inspiring others, he shares his journey of overcoming challenges and achieving success.
                </p>
                <p className="font-body text-xs sm:text-sm text-[#1A1A1A] font-light leading-relaxed">
                  Manny's talks focus on personal growth, resilience, and the importance of a positive mindset. His relatable approach and practical advice resonate with audiences, making him a sought-after speaker at conferences and workshops.
                </p>
              </div>

              {/* Image 1 Content: 25-Year Truth & Personal Mission Card */}
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-black/10 shadow-lg flex flex-col gap-3">
                <p className="font-body text-xs sm:text-sm text-[#1A1A1A] font-light leading-relaxed">
                  I spent over twenty-five years building businesses, leading global teams, and navigating high-pressure boardrooms. Along the way, I discovered a truth that no business school teaches—success without wellbeing is simply another form of burnout.
                </p>
                <p className="font-body text-xs sm:text-sm text-[#1A1A1A] font-light leading-relaxed">
                  Today, I help leaders and organizations pursue a different definition of excellence: one where high performance is fuelled by purpose, elite habits, emotional resilience and mental wealth. My mission is simple—to help people become happier humans and better performers.
                </p>
              </div>
            </div>

            {/* Center Column: 30% Larger Full-Body Cutout (Head to Shoes, No Box, No Border) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-end relative h-full min-h-[460px] sm:min-h-[580px] lg:min-h-[720px] xl:min-h-[780px] z-20">
              <img 
                src="/images/hero_showcase/manny_founder_fullbody_cutout.png" 
                alt="Manny Anchan - Full-Length Standing Portrait" 
                className="w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[560px] xl:max-w-[620px] h-auto object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.3)] select-none pointer-events-none" 
              />
            </div>

            {/* Right Column: Signature Quote (Image 3), Pedigree Box & Primary CTAs */}
            <div className="lg:col-span-4 flex flex-col gap-6 justify-between self-stretch pb-2">
              {/* Image 3 Quote Card: Calm over Chaos */}
              <div className="bg-[#121316] text-white p-6 sm:p-7 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="font-prata text-lg sm:text-xl lg:text-[1.32rem] leading-snug font-normal text-[#E8E6E3] mb-4" style={{ fontFamily: '"Prata", serif' }}>
                  “Work so hard that you have room only for <span className="text-hq-yellow italic font-medium">calm over chaos</span> — <span className="text-hq-yellow italic font-medium">discipline over distraction</span>, <span className="text-hq-yellow italic font-medium">purpose over pressure</span>.”
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono">
                  <span className="uppercase tracking-widest text-white/90 font-bold">~ MANNY ANCHAN</span>
                  <span className="text-hq-yellow font-medium">Happiness Samurai</span>
                </div>
              </div>

              {/* Verified Credentials Box */}
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-black/10 shadow-lg flex flex-col gap-3.5">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-[#0A0A0A] border-b border-black/10 pb-2.5">
                  <Award className="w-4 h-4 text-hq-yellow" />
                  <span>Executive Pedigree & Stewardship</span>
                </div>

                <div className="flex flex-col gap-2.5 text-xs font-body">
                  <div className="flex items-start gap-2.5">
                    <GraduationCap className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#0A0A0A]">Executive Education</div>
                      <div className="text-[#333333]">Harvard Business School &amp; Columbia Business School Alumni</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Mic2 className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#0A0A0A]">Global Keynotes</div>
                      <div className="text-[#333333]">4x TEDx Speaker (Katra, ElPro, Navrachana, Man Sagar Lake)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Briefcase className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#0A0A0A]">Corporate Leadership</div>
                      <div className="text-[#333333]">GE Capital, HDFC Bank, Barclays, ABN AMRO, AUB, FAB</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Globe className="w-4 h-4 text-[#0A0A0A] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#0A0A0A]">Global Impact Footprint</div>
                      <div className="text-[#333333]">Conducted high-trust summits across 9 nations &amp; 16 Indian states</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-black/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#555555] uppercase">Secretariat:</span>
                  <a href="tel:+919700100800" className="text-xs font-mono font-bold text-[#0A0A0A] hover:underline flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#0A0A0A]" /> +91 97001 00800
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto text-center bg-[#0A0A0A] text-hq-yellow font-display text-xs uppercase tracking-widest px-7 py-4 rounded-full hover:bg-white hover:text-black transition-all font-semibold shadow-md flex items-center justify-center gap-2"
                >
                  <span>Book Manny</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/books"
                  className="w-full sm:w-auto text-center bg-white text-[#0A0A0A] border border-black/20 font-display text-xs uppercase tracking-widest px-7 py-4 rounded-full hover:bg-black/5 transition-all font-semibold flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Bestselling Books</span>
                  <BookOpen className="w-3.5 h-3.5" />
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
