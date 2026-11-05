import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  Quote as QuoteIcon,
  ShieldCheck,
  Compass
} from 'lucide-react';
import CorporatePartnersMarquee from '../components/common/CorporatePartnersMarquee';

// Luxury cubic-bezier easing for Awwwards-caliber motion
const luxuryEase = [0.16, 1, 0.3, 1];

// Staggered motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: luxuryEase }
  }
};

export default function Founder() {
  return (
    <div className="min-h-screen bg-hq-white text-hq-black overflow-x-hidden selection:bg-hq-yellow selection:text-black">
      
      {/* =========================================================================
          1. CINEMATIC EDITORIAL HERO SECTION (100% UNIFIED SEAMLESS BLACK BG)
             FIT TO SCREEN WITH DOCKED STATS STRIP
          ========================================================================= */}
      <section className="bg-black text-white border-b border-white/10 relative overflow-hidden min-h-[100svh] lg:h-screen lg:max-h-screen flex flex-col justify-between pt-20 lg:pt-16">
        
        {/* Subtle Ambient Radial Light */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-hq-yellow/[0.04] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 w-full flex-1 items-center max-w-7xl mx-auto px-0 lg:px-6">
          
          {/* Left Column: Keynote Speaking Portrait seamlessly merged with 100% pitch black background */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: luxuryEase }}
            className="lg:col-span-6 relative h-[45vh] sm:h-[48vh] lg:h-full max-h-[74vh] overflow-hidden bg-black flex items-center justify-center order-1 lg:order-1"
          >
            <img 
              src="/images/hero_showcase/founder_hero_keynote_speaking.jpg"
              alt="Manny Anchan - Keynote Speaker & Founder"
              onError={(e) => { e.target.src = '/manny-hero.jpg'; }}
              className="w-full h-full object-cover object-top filter contrast-[1.04] brightness-95"
            />

            {/* Seamless multi-directional gradient masks perfectly matching #000000 black */}
            <div className="hidden lg:block absolute inset-y-0 right-0 w-44 bg-gradient-to-l from-black via-black/75 to-transparent pointer-events-none" />
            <div className="lg:hidden absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black via-black/85 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />
          </motion.div>

          {/* Right Column: Oversized High-Fashion Editorial Quote & Inquire Button */}
          <div className="lg:col-span-6 flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-12 xl:px-16 py-8 lg:py-0 relative z-10 bg-black order-2 lg:order-2">
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-xl flex flex-col"
            >
              {/* Massive Editorial Quote Headline */}
              <motion.blockquote 
                variants={fadeUpVariants}
                className="founder-hero-quote text-2xl sm:text-3xl md:text-4xl lg:text-[2.2rem] xl:text-[2.6rem] font-medium leading-[1.2] tracking-tight uppercase text-white mb-8 sm:mb-10 border-l-[3px] border-hq-yellow pl-5 sm:pl-7"
              >
                “THIS IS HOW THE GOOD COMPANIES FIND THE GOOD COMPANY.”
              </motion.blockquote>

              {/* Primary Action Button (Awwwards Magnetic Style) */}
              <motion.div variants={fadeUpVariants} className="pl-5 sm:pl-7">
                <Link 
                  to="/contact" 
                  className="group relative inline-flex items-center justify-between gap-8 py-3.5 px-2 font-display font-medium text-xs tracking-[0.2em] text-white hover:text-hq-yellow transition-colors duration-300 uppercase"
                >
                  {/* Top hairline border line */}
                  <span className="absolute top-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />

                  <span className="relative z-10 font-semibold">INQUIRE KEYNOTE</span>

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
              </motion.div>

            </motion.div>

          </div>
        </div>

        {/* DOCKED STATS & REPUTATION TICKER STRIP (FIT TO SCREEN AT SCREEN BOTTOM) */}
        <div className="w-full bg-[#0A0A0A] text-white/80 py-3.5 sm:py-4 px-6 border-t border-white/10 overflow-hidden relative z-20">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs font-mono uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">25+</span>
              <span className="text-white/70">Years Boardroom Leadership</span>
            </div>
            <span className="text-white/20 hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">4x</span>
              <span className="text-white/70">TEDx Keynote Stages</span>
            </div>
            <span className="text-white/20 hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">09</span>
              <span className="text-white/70">Global Nations Impacted</span>
            </div>
            <span className="text-white/20 hidden md:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">16</span>
              <span className="text-white/70">Indian States Traversed</span>
            </div>
          </div>
        </div>
      </section>

{/* =========================================================================
          2. ABOUT THE FOUNDER SECTION (MATCHING REFERENCE DESIGN)
             CONTENT ON LEFT • ROUNDED STUDIO PORTRAIT ON RIGHT
             BACKGROUND: #FAF8F5 (MATCHING ABOUT PAGE)
          ========================================================================= */}
      <section id="pedigree" className="relative w-full py-16 sm:py-24 lg:py-28 px-6 md:px-12 bg-[#FAF8F5] border-b border-black/10 overflow-hidden">
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Content Manny Anchan */}
            <motion.div 
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: luxuryEase }}
              className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-6"
            >
              {/* Reference Kicker: "About me" */}
              <div className="text-sm font-serif italic text-hq-yellow/90 tracking-wide mb-3">
                About the Founder
              </div>

              {/* Exact Heading Properties from About Us Page */}
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-[3.6rem] font-semibold tracking-tight text-[#0A0A0A] leading-[1.08] mb-6">
                Manny Anchan
              </h2>

              {/* Motivational Speaker Bio (Font Weight: 400) */}
              <div className="space-y-4 mb-8">
                <p className="font-body text-sm sm:text-base text-[#1A1A1A] font-normal leading-relaxed">
                  Manny Anchan is a dynamic motivational speaker known for his engaging storytelling and powerful insights. With a passion for inspiring others, he shares his journey of overcoming challenges and achieving success.
                </p>
                <p className="font-body text-sm sm:text-base text-[#1A1A1A] font-normal leading-relaxed">
                  Manny's talks focus on personal growth, resilience, and the importance of a positive mindset. His relatable approach and practical advice resonate with audiences, making him a sought-after speaker at conferences and workshops.
                </p>
              </div>

              {/* 25-Year Executive Epiphany / MISSION Card */}
              <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-[24px] border border-black/10 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.06)] mb-8 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-black/10">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-[#0A0A0A]">
                    <Sparkles className="w-4 h-4 text-hq-yellow fill-hq-yellow" />
                    <span>25-Year Executive Epiphany</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#0A0A0A] bg-hq-yellow/30 px-2.5 py-0.5 rounded-full">
                    MISSION
                  </span>
                </div>

                <p className="font-body text-xs sm:text-sm text-[#1A1A1A] font-light leading-relaxed">
                  I spent over twenty-five years building businesses, leading global teams, and navigating high-pressure boardrooms. Along the way, I discovered a truth that no business school teaches—success without wellbeing is simply another form of burnout.
                </p>
                <p className="font-body text-xs sm:text-sm text-[#1A1A1A] font-light leading-relaxed pt-2 border-t border-black/5">
                  Today, I help leaders and organizations pursue a different definition of excellence: one where high performance is fuelled by purpose, elite habits, emotional resilience and mental wealth. My mission is simple—to help people become happier humans and better performers.
                </p>
              </div>

              {/* Reference Pill Button: Book Manny with Round Circle Arrow */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-[#EAE6DF] hover:bg-[#0A0A0A] hover:text-white text-[#0A0A0A] pl-6 pr-2 py-2 rounded-full text-xs font-display font-semibold transition-all duration-300 shadow-sm group"
                >
                  <span className="tracking-wide">Book Manny</span>
                  <span className="w-8 h-8 rounded-full bg-hq-yellow text-[#0A0A0A] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link
                  to="/books"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-display font-medium text-[#0A0A0A] hover:text-black border border-black/15 hover:border-black/30 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Bestselling Books</span>
                </Link>
              </div>

            </motion.div>

            {/* Right Column: Studio Portrait */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: luxuryEase }}
              className="lg:col-span-5 flex items-center justify-center"
            >
              <div className="relative w-full max-w-[480px] sm:max-w-[520px] lg:max-w-none h-[480px] sm:h-[580px] lg:h-[660px] xl:h-[700px] rounded-[32px] sm:rounded-[44px] overflow-hidden shadow-2xl bg-[#1C1D21] border border-black/10 group">
                <img 
                  src="/images/hero_showcase/manny_portrait_studio.jpg" 
                  alt="Manny Anchan - Executive Studio Portrait" 
                  className="w-full h-full object-cover object-center filter contrast-[1.03] group-hover:scale-102 transition-transform duration-700 ease-out" 
                />
                
                {/* Subtle Luxury Inset Border */}
                <div className="absolute inset-0 rounded-[32px] sm:rounded-[44px] border border-white/10 pointer-events-none" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

{/* =========================================================================
          3. MANNY'S JOURNEY SECTION
             DARK EDITORIAL CANVAS • SIGNATURE QUOTE & NARRATIVE
          ========================================================================= */}
      <section id="journey" className="relative w-full py-20 sm:py-24 lg:py-28 px-6 md:px-12 bg-[#0E0F12] text-white border-b border-white/10 overflow-hidden">
        
        {/* Ambient Warm Golden Glow */}
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-hq-yellow/[0.03] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Eyebrow / Kicker */}
          

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Massive Signature Quote from the Spread (Vertically Centered to Right Content) */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: luxuryEase }}
              className="lg:col-span-5 flex flex-col justify-center my-auto"
            >
              <div className="relative pl-2">
                <QuoteIcon className="w-20 h-20 text-white/[0.05] absolute -top-6 -left-4 pointer-events-none" />
                
                <blockquote 
                  className="font-serif text-2xl sm:text-3xl lg:text-[2.2rem] xl:text-[2.5rem] leading-[1.25] text-[#E8E6E3] mb-6 relative z-10" 
                  style={{ fontFamily: '"Prata", serif' }}
                >
                  “Be impatient with your <span className="text-hq-yellow italic font-normal">actions</span> and patient with your <span className="text-hq-yellow italic font-normal">outcomes</span>.”
                </blockquote>
                
                <div className="flex items-center gap-4 pt-2">
                  <img 
                    src="/images/hero_showcase/manny_signature.png" 
                    alt="Manny Anchan Signature" 
                    className="h-10 sm:h-12 w-auto object-contain filter brightness-125"
                  />
                  <span className="text-white/20 font-light">|</span>
                  <span className="text-hq-yellow font-mono text-xs uppercase tracking-wider font-medium">Happiness Samurai</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Heading "Journey" & Narrative Content */}
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: luxuryEase }}
              className="lg:col-span-7 flex flex-col justify-center lg:border-l lg:border-white/10 lg:pl-12"
            >
              {/* Heading: Journey (Using Exact Heading Properties from About Page) */}
              <div className="mb-6">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.08] mb-6">
                  Manny's Journey
                </h2>

                {/* Narrative Content from the Spread */}
                <div className="space-y-5">
                  <p className="font-body text-base sm:text-lg text-white/85 font-normal leading-relaxed">
                    My journey has never been linear. From playing professional and international premier league cricket to spending over two decades in global banking, I experienced success, setbacks, leadership, loss, reinvention and purpose. Every chapter taught me that happiness isn't the destination—it is the operating system for sustained excellence.
                  </p>
                  <p className="font-body text-base sm:text-lg text-white/85 font-normal leading-relaxed">
                    Walking away from corporate leadership wasn't about leaving success behind; it was about redefining it. Today, through HQX and the Happiness Samurai movement, I combine behavioural science, Japanese philosophy, neuroscience and practical business wisdom to help leaders build healthier cultures, stronger teams, and meaningful lives.
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-hq-yellow text-[#0A0A0A] font-display font-semibold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-md group"
                >
                  <span>Connect with Manny</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/books"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-display font-medium text-white/80 hover:text-white border border-white/20 hover:border-white/40 transition-colors uppercase tracking-widest"
                >
                  <BookOpen className="w-3.5 h-3.5 text-hq-yellow" />
                  <span>The Book</span>
                </Link>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

{/* =========================================================================
          4. SIGNATURE QUOTE & VERIFIED EXECUTIVE PEDIGREE
          ========================================================================= */}
      <section className="py-16 sm:py-20 px-6 md:px-12 bg-white border-b border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Signature Quote Card: Calm over Chaos */}
            <div className="lg:col-span-6 bg-[#0C0D0F] text-white p-7 sm:p-9 rounded-[28px] border border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden group">
              <QuoteIcon className="w-24 h-24 absolute -bottom-6 -right-6 text-white/[0.04] pointer-events-none" />
              
              <div className="font-prata text-xl sm:text-2xl lg:text-[1.45rem] leading-relaxed font-normal text-[#E8E6E3] mb-6 relative z-10" style={{ fontFamily: '"Prata", serif' }}>
                “Work so hard that you have room only for <span className="text-hq-yellow italic font-medium">calm over chaos</span> — <span className="text-hq-yellow italic font-medium">discipline over distraction</span>, <span className="text-hq-yellow italic font-medium">purpose over pressure</span>.”
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono relative z-10">
                <span className="uppercase tracking-widest text-white/90 font-bold">~ MANNY ANCHAN</span>
                <span className="text-hq-yellow font-medium">Happiness Samurai</span>
              </div>
            </div>

            {/* Verified Pedigree & Credentials */}
            <div className="lg:col-span-6 bg-[#FAF8F5] p-7 sm:p-9 rounded-[28px] border border-black/10 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-black/10 pb-3 mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-[#0A0A0A]">
                    <Award className="w-4 h-4 text-hq-yellow" />
                    <span>Executive Pedigree &amp; Stewardship</span>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-black/40" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-body">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-black/5 text-[#0A0A0A] font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      01
                    </span>
                    <div>
                      <div className="font-semibold text-[#0A0A0A]">Executive Education</div>
                      <div className="text-[#333333]">Harvard &amp; Columbia Business School Alumni</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-black/5 text-[#0A0A0A] font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      02
                    </span>
                    <div>
                      <div className="font-semibold text-[#0A0A0A]">Global Keynotes</div>
                      <div className="text-[#333333]">4x TEDx Speaker (Katra, ElPro, Navrachana, Man Sagar)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-black/5 text-[#0A0A0A] font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      03
                    </span>
                    <div>
                      <div className="font-semibold text-[#0A0A0A]">Corporate Leadership</div>
                      <div className="text-[#333333]">GE Capital, HDFC Bank, Barclays, ABN AMRO, AUB, FAB</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-black/5 text-[#0A0A0A] font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      04
                    </span>
                    <div>
                      <div className="font-semibold text-[#0A0A0A]">Global Footprint</div>
                      <div className="text-[#333333]">High-trust summits across 9 nations &amp; 16 Indian states</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-black/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#555555] uppercase tracking-wider">Secretariat:</span>
                <a 
                  href="tel:+919700100800" 
                  className="text-xs font-mono font-bold text-[#0A0A0A] hover:text-hq-yellow hover:underline flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0A0A0A]" /> +91 97001 00800
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. FULL-WIDTH TRUSTED BY OVER 40+ INDUSTRY TITANS MARQUEE
          ========================================================================= */}
      <div className="w-full m-0 p-0 border-t border-white/10">
        <CorporatePartnersMarquee showHeader={true} title="Trusted by Over 40+ Industry Titans" reversed={true} />
      </div>

    </div>
  );
}
