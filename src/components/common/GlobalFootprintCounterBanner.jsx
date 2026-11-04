import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TEAM_MEMBERS = [
  {
    id: 'manny',
    name: 'Manny Anchan',
    role: 'Founder & Chief Happiness Officer',
    badge: 'Harvard & Columbia Alum',
    image: '/team/manny-anchan.png',
  },
  {
    id: 'soha',
    name: 'Soha Ali Khan',
    role: 'Acclaimed Author & Modern Family Mentor',
    badge: 'Oxford & LSE Alumna',
    image: '/team/soha-ali-khan.png',
  },
  {
    id: 'rajiv',
    name: 'Rajiv Gupta',
    role: 'Ex-VP Honda Cars & Author',
    badge: 'HBS Alumnus',
    image: '/team/rajiv-gupta.png',
  },
  {
    id: 'sanjay',
    name: 'Dr. Sanjay Arora',
    role: 'Healthcare Pioneer & Suburban Diagnostics',
    badge: 'Medical Innovator',
    image: '/team/sanjay-arora.png',
  },
  {
    id: 'bharati',
    name: 'Bharati Jaisingh',
    role: 'Well Being Practitioner & Founder IDHA',
    badge: 'Expressive Arts Pioneer',
    image: '/team/bharati-jaisingh.png',
  },
  {
    id: 'bijay',
    name: 'Bijay Anand',
    role: 'Esteemed Kundalini Yoga Instructor',
    badge: 'Ancient Wisdom Master',
    image: '/team/bijay-anand.png',
  },
  {
    id: 'bhakti',
    name: 'Bhakti Kapoor',
    role: 'Founder Healthy High & Nutritional Advisor',
    badge: 'Clinical Nutritionist',
    image: '/team/bhakti-kapoor.png',
  },
  {
    id: 'ajay',
    name: 'Ajay Srinivasan',
    role: 'Seasoned Business Leader & Strategic Advisor',
    badge: 'Enterprise Growth Leader',
    image: '/team/ajay-srinivasan.png',
  },
  {
    id: 'anil',
    name: 'Anil Kumar',
    role: "Recipient of 'Shaurya Chakra'",
    badge: 'LBS & ISB Alumnus',
    image: '/team/anil-kumar.png',
  },
  {
    id: 'carolin',
    name: 'Carolin Nytra',
    role: 'Retired German Olympic Hurdler',
    badge: 'Mindset & Energy Guide',
    image: '/team/carolin-nytra.png',
  },
  {
    id: 'meera',
    name: 'Meera Chauhan',
    role: 'Director at Tricolite Electrical',
    badge: 'Warwick & Yale Fellow',
    image: '/team/meera-chauhan.png',
  },
  {
    id: 'rupinder',
    name: 'Rupinder Singh',
    role: 'Olympic Field Hockey Star',
    badge: 'International Champion',
    image: '/team/rupinder-singh.png',
  }
];

export default function GlobalFootprintCounterBanner() {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeMember, setActiveMember] = useState(null);
  const [radiusX, setRadiusX] = useState(280);
  const [radiusY, setRadiusY] = useState(190);
  const [cardSize, setCardSize] = useState(96);
  const containerRef = useRef(null);

  // Responsive arch radius & card sizing
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setRadiusX(150);
        setRadiusY(115);
        setCardSize(64);
      } else if (w < 1024) {
        setRadiusX(210);
        setRadiusY(150);
        setCardSize(80);
      } else if (w < 1280) {
        setRadiusX(250);
        setRadiusY(175);
        setCardSize(90);
      } else {
        setRadiusX(290);
        setRadiusY(200);
        setCardSize(100);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth continuous rotation along the semicircle when not hovered
  useEffect(() => {
    let animationFrameId;
    let lastTime = performance.now();

    const animate = (currentTime) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (!isHovered) {
        setRotation((prev) => (prev + delta * 8.5) % 360);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  const step = 360 / TEAM_MEMBERS.length;

  const handlePrev = (e) => {
    e.stopPropagation();
    setRotation((prev) => prev - step);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setRotation((prev) => prev + step);
  };

  // Center display member (active hovered member or the one closest to the top apex at 270 deg)
  const currentFocalMember = activeMember || (() => {
    const normalizedAngles = TEAM_MEMBERS.map((m, idx) => {
      const angle = (rotation + (idx * step)) % 360;
      const diff = Math.abs(((angle - 270 + 540) % 360) - 180);
      return { member: m, diff };
    });
    normalizedAngles.sort((a, b) => a.diff - b.diff);
    return normalizedAngles[0]?.member || TEAM_MEMBERS[0];
  })();

  return (
    <div className="relative w-full rounded-[28px] sm:rounded-[36px] bg-[#0A0A0C] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:border-white/20">
      
      {/* Main Container: 30% Content Text on Left, 70% Semicircle Animation on Right */}
      <div className="flex flex-col lg:flex-row items-center w-full min-h-[560px] p-6 sm:p-10 lg:p-12 xl:p-14 gap-8 lg:gap-8">
        
        {/* Left Column: Exactly ~30% width */}
        <div className="w-full lg:w-[36%] xl:w-[34%] shrink-0 flex flex-col justify-center z-20">
          
          {/* Two-Line Clean Heading matching Dedicated Chapters style */}
          <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white leading-[1.14] mb-4">
            Experience Pan-India &amp; <br />
            <span className="text-white/40 font-light">
              Global Eudaimonic Impact
            </span>
          </h3>

          <p className="font-body text-xs sm:text-sm text-white/65 font-light mb-6 max-w-lg leading-relaxed">
            Over 100,000+ leaders energized across 40+ corporate titans, 16 Indian states, and 9 nations through our interdisciplinary luminary faculty.
          </p>

          {/* 4 Counter Metrics Strip in 2x2 Grid */}
          <div className="grid grid-cols-2 gap-4 py-4 mb-6 border-t border-b border-white/10 max-w-sm">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">9</div>
              <div className="text-[11px] font-mono text-hq-yellow uppercase tracking-wider font-semibold mt-0.5">Nations</div>
              <div className="text-[10px] text-white/45 truncate mt-0.5">Global Footprint</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">16</div>
              <div className="text-[11px] font-mono text-hq-yellow uppercase tracking-wider font-semibold mt-0.5">States</div>
              <div className="text-[10px] text-white/45 truncate mt-0.5">Pan-India Reach</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">40+</div>
              <div className="text-[11px] font-mono text-hq-yellow uppercase tracking-wider font-semibold mt-0.5">Titans</div>
              <div className="text-[10px] text-white/45 truncate mt-0.5">Enterprise Conclaves</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">100k+</div>
              <div className="text-[11px] font-mono text-hq-yellow uppercase tracking-wider font-semibold mt-0.5">Leaders</div>
              <div className="text-[10px] text-white/45 truncate mt-0.5">Energized Worldwide</div>
            </div>
          </div>

          {/* Luxury Signature Button matching Home Hero Section */}
          <div className="pt-1">
            <Link 
              to="/team" 
              className="group relative inline-flex items-center justify-between gap-6 py-3.5 px-1 font-display font-medium text-xs tracking-widest text-white hover:text-hq-yellow transition-colors duration-300 uppercase"
            >
              <span className="absolute top-0 right-0 w-full group-hover:w-1/5 h-[1.25px] bg-white group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none"></span>
              <span className="relative z-10">Explore Faculty</span>
              <svg 
                className="w-[20px] h-[10px] inline-block transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" 
                viewBox="0 0 20 10" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="0" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="1" />
                <polyline points="15 1, 20 5, 15 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="absolute bottom-0 right-0 w-full group-hover:w-1/5 h-[1.25px] bg-white group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none"></span>
            </Link>
          </div>
        </div>

        {/* Right Column: Exactly ~70% width - Clean Semicircle Arch Animation (No background images/lines) */}
        <div 
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setActiveMember(null);
          }}
          className="w-full lg:w-[68%] xl:w-[70%] h-[480px] sm:h-[540px] lg:h-[580px] relative flex items-center justify-center overflow-hidden z-10 select-none"
        >

          {/* Central Showcase: Faculty Name & Role Placed in Center Under Semicircle Arch */}
          <div 
            className="absolute z-20 flex flex-col items-center justify-center text-center p-4 max-w-[280px] sm:max-w-[340px] pointer-events-none"
            style={{ transform: 'translateY(-15px)' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFocalMember.id}
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.22 }}
                className="flex flex-col items-center"
              >
                {/* Faculty Name in Center */}
                <div className="text-white font-display text-2xl sm:text-3xl lg:text-[2rem] font-bold tracking-tight leading-snug">
                  {currentFocalMember.name}
                </div>
                
                {/* Faculty Role */}
                <div className="text-xs sm:text-sm text-hq-yellow font-normal mt-1.5 max-w-[260px] sm:max-w-[300px] leading-relaxed">
                  {currentFocalMember.role}
                </div>

                {/* Third text: Faculty Badge without bg or border */}
                <div className="mt-2.5 text-xs sm:text-[13px] font-mono text-white/60 tracking-wider">
                  <span>{currentFocalMember.badge}</span>
                </div>

                {/* View Profile link increased by 20% */}
                <div className="mt-3.5 pointer-events-auto">
                  <Link 
                    to="/team" 
                    className="text-sm sm:text-base text-white/70 hover:text-hq-yellow font-medium transition-colors duration-200 underline underline-offset-4"
                  >
                    View Profile &rarr;
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Semicircle Rotating Photo Boxes (No background in box) */}
          <div className="relative w-full h-full flex items-center justify-center pointer-events-none" style={{ transform: 'translateY(-15px)' }}>
            {TEAM_MEMBERS.map((member, index) => {
              const angleDeg = (rotation + (index * step)) % 360;
              const angleRad = (angleDeg * Math.PI) / 180;
              
              // Cartesian coordinates along the ellipse arch
              const x = Math.cos(angleRad) * radiusX;
              const y = Math.sin(angleRad) * radiusY;

              // Tangent orientation: rotate box along curve
              const cardRotation = angleDeg + 90;

              // Angular distance from top apex (270 deg)
              const delta = Math.abs(((angleDeg - 270 + 540) % 360) - 180);

              // Semicircle visibility: show cards in upper arch within delta <= 100 degrees
              const isVisible = delta <= 100;
              const opacity = isVisible 
                ? Math.max(0.1, Math.cos((delta / 100) * (Math.PI / 2)))
                : 0;

              const isCurrent = currentFocalMember.id === member.id;

              if (!isVisible) return null;

              return (
                <div
                  key={member.id}
                  onClick={() => setActiveMember(member)}
                  onMouseEnter={() => setActiveMember(member)}
                  className="absolute pointer-events-auto cursor-pointer transition-transform duration-150 ease-out"
                  style={{
                    transform: `translate3d(${x}px, ${y}px, 0px)`,
                    width: `${cardSize}px`,
                    height: `${cardSize}px`,
                    marginLeft: `-${cardSize / 2}px`,
                    marginTop: `-${cardSize / 2}px`,
                    opacity: opacity,
                    zIndex: isCurrent ? 40 : 25,
                  }}
                >
                  {/* Clean Circular Frame WITHOUT background - Strict 100% round circles */}
                  <div 
                    className={`w-full h-full rounded-full aspect-square overflow-hidden relative shadow-xl transition-all duration-300 border-2 ${
                      isCurrent 
                        ? 'border-hq-yellow ring-2 ring-hq-yellow/60 scale-110 shadow-[0_0_25px_rgba(255,205,0,0.45)]' 
                        : 'border-white/25 hover:border-white/70 hover:scale-105'
                    }`}
                    style={{ borderRadius: '9999px', clipPath: 'circle(50% at 50% 50%)' }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top relative z-10 drop-shadow-md"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />

                    {/* Active highlight glow dot at top */}
                    {isCurrent && (
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-hq-yellow z-20 shadow-[0_0_8px_#FFCD00]" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 1px Long-Tail Left & Right Navigation Arrows in the SAME HORIZONTAL LINE */}
          <div className="absolute bottom-8 sm:bottom-10 lg:bottom-12 xl:bottom-14 left-1/2 -translate-x-1/2 z-30 flex flex-row items-center justify-center gap-6 sm:gap-8 w-auto px-4 py-1 pointer-events-auto">
            {/* Left 1px Arrow with Long Tail */}
            <button
              onClick={handlePrev}
              aria-label="Previous Faculty Member"
              className="group flex items-center gap-2 text-white/50 hover:text-hq-yellow transition-all duration-300 cursor-pointer p-2"
            >
              <svg 
                viewBox="0 0 52 16" 
                className="w-10 sm:w-12 h-3.5 stroke-current transition-transform duration-300 group-hover:-translate-x-1.5"
                fill="none"
              >
                <line x1="50" y1="8" x2="2" y2="8" strokeWidth="1" />
                <polyline points="9,2 2,8 9,14" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Subtle center indicator */}
            <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase select-none">
              Orbit
            </span>

            {/* Right 1px Arrow with Long Tail */}
            <button
              onClick={handleNext}
              aria-label="Next Faculty Member"
              className="group flex items-center gap-2 text-white/50 hover:text-hq-yellow transition-all duration-300 cursor-pointer p-2"
            >
              <svg 
                viewBox="0 0 52 16" 
                className="w-10 sm:w-12 h-3.5 stroke-current transition-transform duration-300 group-hover:translate-x-1.5"
                fill="none"
              >
                <line x1="2" y1="8" x2="50" y2="8" strokeWidth="1" />
                <polyline points="43,2 50,8 43,14" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
