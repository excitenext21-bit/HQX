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
  ArrowUpRight, 
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

const fadeInScaleVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: luxuryEase }
  }
};

export default function Founder() {
  return (
    <div className="min-h-screen bg-hq-white text-hq-black overflow-x-hidden selection:bg-hq-yellow selection:text-black">
      
      {/* =========================================================================
          1. CINEMATIC EDITORIAL HERO SECTION (AWWWARDS-INSPIRED EDITORIAL MASTHEAD)
          ========================================================================= */}
      <section className="bg-[#0C0D0F] text-white border-b border-white/10 relative overflow-hidden min-h-[100svh] lg:h-screen lg:max-h-[960px] flex items-center pt-24 lg:pt-0">
        
        {/* Subtle Ambient Radial Light */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-hq-yellow/[0.04] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full min-h-[100svh] lg:min-h-0 lg:h-screen">
          
          {/* Left Column: High-Res Sharp Keynote Speaking Portrait with cinematic dissolve */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: luxuryEase }}
            className="lg:col-span-6 relative h-[52vh] sm:h-[56vh] lg:h-full overflow-hidden bg-[#0C0D0F] flex items-center justify-center order-1 lg:order-1"
          >
            <img 
              src="/images/hero_showcase/founder_hero_keynote_speaking.jpg"
              alt="Manny Anchan - Keynote Speaker & Founder"
              onError={(e) => { e.target.src = '/manny-hero.jpg'; }}
              className="w-full h-full object-cover object-top filter contrast-[1.04] brightness-95"
            />

            {/* Seamless multi-directional gradient masks */}
            <div className="hidden lg:block absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#0C0D0F] via-[#0C0D0F]/70 to-transparent pointer-events-none" />
            <div className="lg:hidden absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0C0D0F] via-[#0C0D0F]/85 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#0C0D0F]/60 pointer-events-none" />

            {/* Awwwards Monospace Corner Tag */}
            <div className="absolute top-6 left-6 z-20 hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[11px] font-mono tracking-widest uppercase text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-hq-yellow animate-pulse" />
              <span>LIVE KEYNOTE ARCHIVE</span>
            </div>
          </motion.div>

          {/* Right Column: Oversized High-Fashion Editorial Manifesto */}
          <div className="lg:col-span-6 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-16 xl:px-20 py-12 lg:py-0 relative z-10 bg-[#0C0D0F] order-2 lg:order-2">
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-xl flex flex-col"
            >
              {/* Monospace Kicker */}
              <motion.div variants={fadeUpVariants} className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-hq-yellow font-medium">
                  01 // ARCHETYPE &amp; VISION
                </span>
                <span className="w-12 h-[1px] bg-hq-yellow/40" />
              </motion.div>

              {/* Massive Editorial Quote Headline */}
              <motion.blockquote 
                variants={fadeUpVariants}
                className="founder-hero-quote text-2xl sm:text-3xl md:text-4xl lg:text-[2.2rem] xl:text-[2.6rem] font-medium leading-[1.2] tracking-tight uppercase text-white mb-8 border-l-[3px] border-hq-yellow pl-5 sm:pl-7"
              >
                “THIS IS HOW THE GOOD COMPANIES FIND THE GOOD COMPANY.”
              </motion.blockquote>

              {/* Founder Credential Meta */}
              <motion.div variants={fadeUpVariants} className="mb-10 pl-5 sm:pl-7">
                <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
                  <span>Manny Anchan</span>
                  <span className="text-xs font-mono uppercase tracking-widest text-hq-yellow px-2.5 py-1 rounded-full bg-white/5 border border-white/10 hidden sm:inline-block">
                    Happiness Samurai
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-mono text-white/60 tracking-wider uppercase leading-relaxed">
                  Founder &amp; Chief Happiness Officer, HQGPL • Author, <em>Happiness Samurai</em>
                </div>
              </motion.div>

              {/* Primary Action Button (Awwwards Magnetic Style) */}
              <motion.div variants={fadeUpVariants} className="pl-5 sm:pl-7">
                <Link 
                  to="/contact" 
                  className="group relative inline-flex items-center justify-between gap-8 py-4 px-2 font-display font-medium text-xs tracking-[0.2em] text-white hover:text-hq-yellow transition-colors duration-300 uppercase"
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

        {/* Bottom Editorial Coordinates Strip */}
        <div className="absolute bottom-4 left-6 right-6 hidden lg:flex justify-between items-center text-[10px] font-mono tracking-[0.25em] text-white/40 border-t border-white/5 pt-3 pointer-events-none">
          <span>PORTFOLIO // MANNY ANCHAN</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-hq-yellow" />
            25+ YEARS GLOBAL EXECUTIVE TRAJECTORY
          </span>
          <span>SCROLL DOWN ↓</span>
        </div>
      </section>

      {/* =========================================================================
          2. STATS & REPUTATION TICKER STRIP (AWWWARDS MINIMALIST STRIP)
          ========================================================================= */}
      <div className="w-full bg-[#121316] text-white/80 py-4 px-6 border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="text-hq-yellow font-bold">25+</span>
            <span className="text-white/60">Years Boardroom Leadership</span>
          </div>
          <span className="text-white/20 hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <span className="text-hq-yellow font-bold">4x</span>
            <span className="text-white/60">TEDx Keynote Stages</span>
          </div>
          <span className="text-white/20 hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <span className="text-hq-yellow font-bold">09</span>
            <span className="text-white/60">Global Nations Impacted</span>
          </div>
          <span className="text-white/20 hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <span className="text-hq-yellow font-bold">16</span>
            <span className="text-white/60">Indian States Traversed</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. MAIN CONTENT SECTION: 100% WIDTH DUAL-TONE (TOP WHITE / LOWER YELLOW)
             WITH 50% LARGER FULL-BODY CUTOUT & AWWWARDS-CALIBER EDITORIAL CARDS
          ========================================================================= */}
      <section id="pedigree" className="relative w-full py-20 sm:py-28 lg:py-36 px-6 md:px-12 overflow-hidden border-none">
        
        {/* Split Dual-Tone Background: Top Half Pure White, Lower Half Brand Yellow (100% Width) */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="h-1/2 w-full bg-[#FFFFFF]" />
          <div className="h-1/2 w-full bg-hq-yellow" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* Section Section Header Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: luxuryEase }}
            className="flex items-center justify-between mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-[#0A0A0A] text-xs font-mono uppercase tracking-widest font-semibold">
              <span className="w-2 h-2 rounded-full bg-hq-yellow animate-pulse" />
              <span>02 // ENTERPRISE STEWARDSHIP &amp; NARRATIVE</span>
            </div>
            <div className="hidden sm:block text-[11px] font-mono uppercase tracking-widest text-black/50">
              Manny Anchan • Profile
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            
            {/* -----------------------------------------------------------------
                Left Column: Heading, Bio (Image 2) & 25-Year Truth Card (Image 1)
                ----------------------------------------------------------------- */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: luxuryEase }}
              className="lg:col-span-4 flex flex-col gap-6 justify-between self-stretch pb-2 relative z-10"
            >
              <div>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] tracking-tight font-bold text-[#0A0A0A] leading-[1.05] mb-4">
                  Manny <span className="text-hq-yellow bg-[#0A0A0A] px-2.5 py-0.5 inline-block rounded-md shadow-sm">Anchan</span>
                </h2>
                
                {/* Image 2 Content: Motivational Speaker Narrative */}
                <div className="space-y-3.5 mb-2">
                  <p className="font-body text-xs sm:text-[13.5px] text-[#1A1A1A] font-light leading-relaxed">
                    Manny Anchan is a dynamic motivational speaker known for his engaging storytelling and powerful insights. With a passion for inspiring others, he shares his journey of overcoming challenges and achieving success.
                  </p>
                  <p className="font-body text-xs sm:text-[13.5px] text-[#1A1A1A] font-light leading-relaxed">
                    Manny's talks focus on personal growth, resilience, and the importance of a positive mindset. His relatable approach and practical advice resonate with audiences, making him a sought-after speaker at conferences and workshops.
                  </p>
                </div>
              </div>

              {/* Image 1 Content: 25-Year Truth & Personal Mission Card (Awwwards Frosted Glass Card) */}
              <div className="bg-white/95 backdrop-blur-xl p-6 sm:p-7 rounded-[24px] border border-black/10 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.12)] flex flex-col gap-3.5 hover:shadow-[0_28px_55px_-15px_rgba(0,0,0,0.18)] transition-shadow duration-500 group">
                <div className="flex items-center justify-between pb-2 border-b border-black/10">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-[#0A0A0A]">
                    <Sparkles className="w-3.5 h-3.5 text-hq-yellow fill-hq-yellow" />
                    <span>25-Year Executive Epiphany</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#666666] uppercase">MISSION</span>
                </div>
                
                <p className="font-body text-xs sm:text-[13px] text-[#1A1A1A] font-light leading-relaxed">
                  I spent over twenty-five years building businesses, leading global teams, and navigating high-pressure boardrooms. Along the way, I discovered a truth that no business school teaches—success without wellbeing is simply another form of burnout.
                </p>
                <p className="font-body text-xs sm:text-[13px] text-[#1A1A1A] font-light leading-relaxed pt-2 border-t border-black/5">
                  Today, I help leaders and organizations pursue a different definition of excellence: one where high performance is fuelled by purpose, elite habits, emotional resilience and mental wealth. My mission is simple—to help people become happier humans and better performers.
                </p>
              </div>
            </motion.div>

            {/* -----------------------------------------------------------------
                Center Column: 50% Larger Full-Body Cutout (Head to Shoes, No Box, No Border)
                ----------------------------------------------------------------- */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: luxuryEase }}
              className="lg:col-span-4 flex flex-col items-center justify-end relative h-full min-h-[520px] sm:min-h-[660px] lg:min-h-[820px] xl:min-h-[920px] z-20"
            >
              <img 
                src="/images/hero_showcase/manny_founder_fullbody_cutout.png" 
                alt="Manny Anchan - Full-Length Standing Portrait" 
                className="w-full max-w-[580px] sm:max-w-[680px] lg:max-w-[800px] xl:max-w-[900px] h-auto object-contain object-bottom drop-shadow-[0_35px_60px_rgba(0,0,0,0.35)] select-none pointer-events-none transform scale-125 sm:scale-135 lg:scale-145 xl:scale-150 origin-bottom transition-transform duration-500" 
              />
            </motion.div>

            {/* -----------------------------------------------------------------
                Right Column: Signature Quote (Image 3), Pedigree Box & Primary CTAs
                ----------------------------------------------------------------- */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: luxuryEase }}
              className="lg:col-span-4 flex flex-col gap-6 justify-between self-stretch pb-2 relative z-10"
            >
              
              {/* Image 3 Quote Card: Calm over Chaos (Awwwards Obsidian Luxury Card) */}
              <div className="bg-[#0C0D0F] text-white p-6 sm:p-7 rounded-[24px] border border-white/10 shadow-[0_24px_55px_-15px_rgba(0,0,0,0.45)] relative overflow-hidden group hover:border-hq-yellow/40 transition-colors duration-500">
                {/* Decorative Faint Quote Watermark */}
                <QuoteIcon className="w-24 h-24 absolute -bottom-6 -right-6 text-white/[0.04] pointer-events-none" />

                <div className="font-prata text-lg sm:text-xl lg:text-[1.32rem] leading-snug font-normal text-[#E8E6E3] mb-4 relative z-10" style={{ fontFamily: '"Prata", serif' }}>
                  “Work so hard that you have room only for <span className="text-hq-yellow italic font-medium">calm over chaos</span> — <span className="text-hq-yellow italic font-medium">discipline over distraction</span>, <span className="text-hq-yellow italic font-medium">purpose over pressure</span>.”
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono relative z-10">
                  <span className="uppercase tracking-widest text-white/90 font-bold">~ MANNY ANCHAN</span>
                  <span className="text-hq-yellow font-medium">Happiness Samurai</span>
                </div>
              </div>

              {/* Verified Pedigree Card (Awwwards Structured Credential List) */}
              <div className="bg-white/95 backdrop-blur-xl p-6 sm:p-7 rounded-[24px] border border-black/10 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.12)] flex flex-col gap-3.5 hover:shadow-[0_28px_55px_-15px_rgba(0,0,0,0.18)] transition-shadow duration-500">
                <div className="flex items-center justify-between border-b border-black/10 pb-2.5">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-[#0A0A0A]">
                    <Award className="w-4 h-4 text-hq-yellow" />
                    <span>Executive Pedigree &amp; Stewardship</span>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-black/40" />
                </div>

                <div className="flex flex-col gap-3 text-xs font-body">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-black/5 text-[#0A0A0A] font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      01
                    </span>
                    <div>
                      <div className="font-semibold text-[#0A0A0A]">Executive Education</div>
                      <div className="text-[#333333] leading-relaxed">Harvard Business School &amp; Columbia Business School Alumni</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-black/5 text-[#0A0A0A] font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      02
                    </span>
                    <div>
                      <div className="font-semibold text-[#0A0A0A]">Global Keynotes</div>
                      <div className="text-[#333333] leading-relaxed">4x TEDx Speaker (Katra, ElPro, Navrachana, Man Sagar Lake)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-black/5 text-[#0A0A0A] font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      03
                    </span>
                    <div>
                      <div className="font-semibold text-[#0A0A0A]">Corporate Leadership</div>
                      <div className="text-[#333333] leading-relaxed">GE Capital, HDFC Bank, Barclays, ABN AMRO, AUB, FAB</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-black/5 text-[#0A0A0A] font-mono text-[10px] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      04
                    </span>
                    <div>
                      <div className="font-semibold text-[#0A0A0A]">Global Impact Footprint</div>
                      <div className="text-[#333333] leading-relaxed">Conducted high-trust summits across 9 nations &amp; 16 Indian states</div>
                    </div>
                  </div>
                </div>

                {/* Secretariat Direct Contact */}
                <div className="pt-2.5 border-t border-black/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#555555] uppercase tracking-wider">Secretariat:</span>
                  <a 
                    href="tel:+919700100800" 
                    className="text-xs font-mono font-bold text-[#0A0A0A] hover:text-hq-yellow hover:underline flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#0A0A0A]" /> +91 97001 00800
                  </a>
                </div>
              </div>

              {/* Action Buttons (Awwwards High-Contrast Buttons) */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto text-center bg-[#0A0A0A] text-hq-yellow font-display text-xs uppercase tracking-widest px-7 py-4 rounded-full hover:bg-white hover:text-black transition-all font-semibold shadow-lg shadow-black/20 flex items-center justify-center gap-2 group"
                >
                  <span>Book Manny</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/books"
                  className="w-full sm:w-auto text-center bg-white text-[#0A0A0A] border border-black/20 font-display text-xs uppercase tracking-widest px-7 py-4 rounded-full hover:bg-black/5 transition-all font-semibold flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Bestselling Books</span>
                  <BookOpen className="w-3.5 h-3.5" />
                </Link>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. FULL-WIDTH TRUSTED BY OVER 40+ INDUSTRY TITANS MARQUEE
          ========================================================================= */}
      <div className="w-full m-0 p-0 border-t border-white/10">
        <CorporatePartnersMarquee showHeader={true} title="Trusted by Over 40+ Industry Titans" reversed={true} />
      </div>

    </div>
  );
}
