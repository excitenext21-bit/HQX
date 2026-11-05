import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDE_DURATION = 4000; // 4s seamless auto-advance interval

export default function TeamHeroSlider({ faculty = [], onSelectMember }) {
  // Exclude Manny Anchan from hero slider per user request
  const activeFaculty = faculty.filter(
    (f) => f.active !== false && f.id !== 'f-manny' && !f.name.toLowerCase().includes('manny')
  );
  
  const membersPerSlide = 4;
  const totalSlides = Math.max(1, Math.ceil(activeFaculty.length / membersPerSlide));
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [activeHoverId, setActiveHoverId] = useState(null);
  const timerRef = useRef(null);

  // Auto-advance interval - pauses when user hovers over any image
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalSlides]);

  // Get current batch of 4 members
  const currentMembers = activeFaculty.slice(
    currentSlide * membersPerSlide,
    currentSlide * membersPerSlide + membersPerSlide
  );

  return (
    <section 
      className="w-full bg-[#000000] text-white pt-20 sm:pt-24 relative overflow-hidden select-none border-none rounded-none m-0 p-0 h-screen min-h-[640px] max-h-[1080px] flex flex-col justify-between"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* FULL VIEWPORT AUTO SLIDER WITH SLANTED DIVISIONS & CLEAN 2PX SOLID BLACK BORDER */}
      <div className="w-full h-full relative overflow-hidden rounded-none border-none bg-black flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row h-full w-[100%] md:w-[calc(100%+100px)] md:-ml-[50px] rounded-none border-none"
          >
            {currentMembers.map((member, index) => {
              const isHovered = activeHoverId === member.id;
              const isFirst = index === 0;
              const isLast = index === currentMembers.length - 1;

              return (
                <div
                  key={member.id}
                  onClick={() => onSelectMember && onSelectMember(member)}
                  onMouseEnter={() => {
                    setIsPaused(true);
                    setActiveHoverId(member.id);
                  }}
                  onMouseLeave={() => {
                    setIsPaused(false);
                    setActiveHoverId(null);
                  }}
                  className={`relative cursor-pointer overflow-hidden transition-all duration-700 ease-out flex flex-col justify-end p-6 sm:p-8 group rounded-none border-none md:[transform:skewX(-5deg)] ${
                    isFirst ? 'md:pl-16 lg:pl-20 md:pr-8' : isLast ? 'md:pl-8 md:pr-16 lg:pr-20' : 'md:px-8'
                  } ${isHovered ? 'md:flex-[1.32]' : 'md:flex-1'}`}
                  style={{ transformOrigin: '50% 50%' }}
                >
                  {/* Portrait Background - Zoomed out comfortably, counter-skewed to stay upright */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-black rounded-none md:[transform:skewX(5deg)_scale(1.1)] overflow-hidden"
                    style={{ transformOrigin: '50% 50%' }}
                  >
                    <div className="w-full h-full relative flex items-start justify-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-[76%] sm:h-[78%] md:h-[82%] object-cover object-top transition-all duration-500 ease-out filter grayscale contrast-[1.25] brightness-[0.74] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-[1.03] rounded-none"
                      />
                      {/* Deep Low-Key Cinematic Gradient Overlays to seamlessly blend into black */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-95 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"></div>
                      <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Clean 2px Solid Black Divider (No dots, no blur/shadow artifacts) */}
                  <div className="hidden md:block absolute top-0 bottom-0 right-0 w-[2px] bg-black z-30 pointer-events-none" />
                  <div className="md:hidden absolute bottom-0 left-0 right-0 h-[2px] bg-black z-30 pointer-events-none" />

                  {/* Member Name and Clean Details Overlay - Fully visible on left, counter-skewed to remain upright */}
                  <div 
                    className="relative z-20 md:[transform:skewX(5deg)] transform transition-transform duration-300 group-hover:-translate-y-2 max-w-sm"
                    style={{ transformOrigin: 'bottom left' }}
                  >
                    {/* Name: Reduced 50% in size and font-weight 300 (font-light) */}
                    <h3 className="font-display text-sm sm:text-base lg:text-[16px] font-[300] tracking-widest uppercase text-white mb-2 leading-snug">
                      {member.name}
                    </h3>

                    {/* Accent Yellow Underline Bar */}
                    <div className="h-[2px] w-8 bg-hq-yellow rounded-full mb-2.5 transition-all duration-500 ease-out group-hover:w-16"></div>

                    {/* Clean Role / Title: font-weight 300 */}
                    <p className="font-body text-[11px] sm:text-xs text-white/70 font-[300] line-clamp-2 leading-relaxed">
                      {member.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}