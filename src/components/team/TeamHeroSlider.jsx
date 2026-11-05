import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles } from 'lucide-react';

const SLIDE_DURATION = 4500; // 4.5s auto-advance interval

export default function TeamHeroSlider({ faculty, onSelectMember }) {
  // Group faculty into slides of 4 members each
  const membersPerSlide = 4;
  const totalSlides = Math.ceil(faculty.length / membersPerSlide);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeHoverId, setActiveHoverId] = useState(null);
  const timerRef = useRef(null);

  // Auto-advance interval
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalSlides, currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Get current batch of 4 members (with circular wrap if needed)
  const currentMembers = faculty.slice(
    currentSlide * membersPerSlide,
    currentSlide * membersPerSlide + membersPerSlide
  );

  return (
    <section 
      className="bg-[#0A0A0A] text-white pt-32 pb-16 px-4 sm:px-6 md:px-12 border-b border-white/10 relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-gradient from-hq-yellow/10 via-transparent to-transparent pointer-events-none opacity-40"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 mb-10 md:mb-14">
        {/* Top Header Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 text-[11px] font-mono uppercase tracking-widest text-hq-yellow font-medium">
          <Sparkles className="w-3.5 h-3.5 text-hq-yellow" />
          <span>Multidisciplinary Advisory Faculty</span>
        </div>

        {/* Hero Title and Subtext */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold leading-[1.08] mb-4">
              World-Class Pedigree. <br />
              <span className="text-hq-yellow">Cultivating Human Potential.</span>
            </h1>
            <p className="font-body text-base md:text-lg text-[#E5E5E5] font-light leading-relaxed max-w-2xl" style={{ color: '#E5E5E5' }}>
              World champions, industry CEOs, seasoned spiritual guides, Olympic athletes, and modern parenting authorities collaborating to cultivate resilience and vitality across global corporations.
            </p>
          </div>

          {/* Slider Navigation Controls */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Slide Index Display */}
            <div className="text-xs font-mono text-white/60 tracking-wider">
              <span className="text-hq-yellow font-bold text-sm">0{currentSlide + 1}</span> / 0{totalSlides}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous faculty slide"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-hq-yellow hover:text-black hover:border-hq-yellow flex items-center justify-center transition-all duration-300 text-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next faculty slide"
                className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-hq-yellow hover:text-black hover:border-hq-yellow flex items-center justify-center transition-all duration-300 text-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Metric Badges Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-8 border-t border-white/10">
          <div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-hq-yellow">13</div>
            <div className="text-[11px] font-mono text-white/60 tracking-wider uppercase mt-0.5">Distinguished Faculty</div>
          </div>
          <div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-white">4</div>
            <div className="text-[11px] font-mono text-white/60 tracking-wider uppercase mt-0.5">Holistic Domains</div>
          </div>
          <div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-hq-yellow">100%</div>
            <div className="text-[11px] font-mono text-white/60 tracking-wider uppercase mt-0.5">Corporate Tailored</div>
          </div>
          <div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-white">40+</div>
            <div className="text-[11px] font-mono text-white/60 tracking-wider uppercase mt-0.5">Global Client Summits</div>
          </div>
        </div>
      </div>

      {/* THE MULTI-COLUMN ACCORDION SLIDER */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0E0E10]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row h-[500px] sm:h-[560px] lg:h-[620px] w-full"
            >
              {currentMembers.map((member, idx) => {
                const isHovered = activeHoverId === member.id;

                return (
                  <div
                    key={member.id}
                    onClick={() => onSelectMember && onSelectMember(member)}
                    onMouseEnter={() => setActiveHoverId(member.id)}
                    onMouseLeave={() => setActiveHoverId(null)}
                    className={`relative cursor-pointer overflow-hidden transition-all duration-700 ease-out border-b md:border-b-0 md:border-r border-white/10 last:border-none flex flex-col justify-end p-6 sm:p-8 group ${
                      isHovered ? 'md:flex-[1.4]' : 'md:flex-1'
                    }`}
                  >
                    {/* Background Portrait Photo */}
                    <div className="absolute inset-0 w-full h-full">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108 group-hover:contrast-105"
                      />
                      {/* Dramatic Dark Studio Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent transition-opacity duration-300 opacity-90 group-hover:opacity-80"></div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>

                    {/* Member Details Overlay (Bottom) */}
                    <div className="relative z-10 transform transition-transform duration-300 group-hover:-translate-y-1">
                      {/* Domain Tag */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-hq-yellow font-semibold">
                          {member.category}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-hq-yellow group-hover:text-black flex items-center justify-center transition-all duration-300 opacity-80 group-hover:opacity-100">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Name */}
                      <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white mb-2 leading-tight">
                        {member.name}
                      </h3>

                      {/* Accent Yellow Underline Bar */}
                      <div className="h-[3px] w-8 bg-hq-yellow rounded-full mb-3 transition-all duration-500 ease-out group-hover:w-16"></div>

                      {/* Short Title / Credential */}
                      <p className="font-body text-xs sm:text-sm text-white/75 font-light line-clamp-2 leading-snug">
                        {member.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Animated Interval Progress Bar & Slide Pagination Dots */}
        <div className="flex items-center justify-between mt-6 px-2">
          {/* Progress Indicators */}
          <div className="flex items-center gap-3">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
                style={{ width: currentSlide === idx ? '48px' : '16px' }}
              >
                <div className="absolute inset-0 bg-white/20"></div>
                {currentSlide === idx && (
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-hq-yellow"
                    initial={{ width: '0%' }}
                    animate={{ width: isPaused ? '0%' : '100%' }}
                    transition={{
                      duration: isPaused ? 0 : SLIDE_DURATION / 1000,
                      ease: 'linear'
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="text-[11px] font-mono text-white/40 tracking-wider">
            {isPaused ? 'PAUSED' : 'AUTO-ADVANCING'}
          </div>
        </div>
      </div>
    </section>
  );
}
