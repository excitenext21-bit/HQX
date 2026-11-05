import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDE_DURATION = 4500; // 4.5s auto-advance interval

export default function TeamHeroSlider({ faculty, onSelectMember }) {
  // 4 vertical columns per slide
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

  // Get current batch of 4 members
  const currentMembers = faculty.slice(
    currentSlide * membersPerSlide,
    currentSlide * membersPerSlide + membersPerSlide
  );

  return (
    <section 
      className="w-full bg-[#000000] text-white pt-20 sm:pt-24 relative overflow-hidden select-none border-none rounded-none m-0 p-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* FULL-WIDTH EDGE-TO-EDGE MULTI-COLUMN SLIDER (NO BORDERS, NO RADIUS) */}
      <div className="w-full relative overflow-hidden rounded-none border-none bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row h-[550px] sm:h-[640px] md:h-[720px] lg:h-[800px] w-full rounded-none border-none"
          >
            {currentMembers.map((member) => {
              const isHovered = activeHoverId === member.id;

              return (
                <div
                  key={member.id}
                  onClick={() => onSelectMember && onSelectMember(member)}
                  onMouseEnter={() => setActiveHoverId(member.id)}
                  onMouseLeave={() => setActiveHoverId(null)}
                  className={`relative cursor-pointer overflow-hidden transition-all duration-700 ease-out flex flex-col justify-end p-6 sm:p-8 md:p-10 group rounded-none border-none ${
                    isHovered ? 'md:flex-[1.4]' : 'md:flex-1'
                  }`}
                >
                  {/* Black & Monochrome Portrait Background */}
                  <div className="absolute inset-0 w-full h-full bg-black rounded-none">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-all duration-700 ease-out filter grayscale contrast-[1.3] brightness-[0.72] group-hover:brightness-[0.88] group-hover:contrast-[1.2] group-hover:scale-105 rounded-none"
                    />
                    {/* Deep Low-Key Cinematic Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-95 group-hover:opacity-85 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>

                  {/* Member Name and Clean Details Overlay (No Yellow Eyebrow) */}
                  <div className="relative z-10 transform transition-transform duration-300 group-hover:-translate-y-2">
                    {/* Name in Bold Uppercase */}
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white mb-2 leading-none">
                      {member.name}
                    </h3>

                    {/* Accent Yellow Underline Bar */}
                    <div className="h-[3px] w-10 bg-hq-yellow rounded-full mb-3 transition-all duration-500 ease-out group-hover:w-20"></div>

                    {/* Clean Role / Title */}
                    <p className="font-body text-xs sm:text-sm text-white/75 font-light line-clamp-2 leading-relaxed">
                      {member.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Minimal Floating Nav Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 hover:bg-hq-yellow hover:text-black border border-white/20 hover:border-hq-yellow text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm opacity-60 hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/50 hover:bg-hq-yellow hover:text-black border border-white/20 hover:border-hq-yellow text-white flex items-center justify-center transition-all duration-300 backdrop-blur-sm opacity-60 hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Slide Progress Indicators Bar */}
        <div className="absolute bottom-4 left-6 sm:left-10 z-20 flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="relative h-1 rounded-full overflow-hidden transition-all duration-300 cursor-pointer"
              style={{ width: currentSlide === idx ? '40px' : '12px' }}
            >
              <div className="absolute inset-0 bg-white/30"></div>
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
      </div>
    </section>
  );
}
