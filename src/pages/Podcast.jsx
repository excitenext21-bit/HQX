import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Calendar, 
  Clock, 
  Newspaper,
  Wifi,
  Check,
  CheckCircle2,
  X,
  Heart,
  MoreHorizontal
} from 'lucide-react';
import BrandLogo from '../components/common/BrandLogo';
import { useData } from '../context/DataContext';

export default function Podcast() {
  const { podcasts, printMedia } = useData();
  const [activeEpisode, setActiveEpisode] = useState(podcasts[0] || null);
  const [expandedEpisodeId, setExpandedEpisodeId] = useState(null);
  const [centerSlide, setCenterSlide] = useState(2);
  const [showAllPodcasts, setShowAllPodcasts] = useState(false);
  const visibleNextUp = showAllPodcasts ? podcasts : podcasts.slice(0, 6);
  const visibleFeaturedConversations = showAllPodcasts ? podcasts : podcasts.slice(0, 10);

  // Smooth Right-to-Left Auto-Scrolling & Draggable Thumbnail Strip
  const thumbTrackRef = useRef(null);
  const isThumbDraggingRef = useRef(false);
  const isThumbHoveredRef = useRef(false);
  const thumbStartXRef = useRef(0);
  const thumbScrollLeftRef = useRef(0);
  const thumbDraggedRef = useRef(false);

  useEffect(() => {
    let animationId;
    const step = () => {
      const el = thumbTrackRef.current;
      if (el && !isThumbDraggingRef.current && !isThumbHoveredRef.current) {
        el.scrollLeft += 0.65;
        const halfWidth = el.scrollWidth / 2;
        if (halfWidth > 0 && el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
      }
      animationId = requestAnimationFrame(step);
    };
    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [podcasts.length]);

  const handleThumbMouseDown = (e) => {
    const el = thumbTrackRef.current;
    if (!el) return;
    isThumbDraggingRef.current = true;
    thumbDraggedRef.current = false;
    thumbStartXRef.current = e.pageX - el.offsetLeft;
    thumbScrollLeftRef.current = el.scrollLeft;
  };

  const handleThumbMouseMove = (e) => {
    if (!isThumbDraggingRef.current) return;
    const el = thumbTrackRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = x - thumbStartXRef.current;
    if (Math.abs(walk) > 6) thumbDraggedRef.current = true;
    el.scrollLeft = thumbScrollLeftRef.current - walk;
    const halfWidth = el.scrollWidth / 2;
    if (halfWidth > 0) {
      if (el.scrollLeft <= 0) el.scrollLeft += halfWidth;
      else if (el.scrollLeft >= halfWidth) el.scrollLeft -= halfWidth;
    }
  };

  const stopThumbDrag = () => {
    isThumbDraggingRef.current = false;
    setTimeout(() => {
      thumbDraggedRef.current = false;
    }, 60);
  };

  const heroSlides = [
    {
      id: 'slide-0',
      type: 'video',
      src: '/videos/happiness_samurai_john_abraham.mp4',
      poster: '/profile_assets/page_32_img_11_2380.jpeg',
      alt: 'HQX Podcast Guest Dialogue',
      episodeIdx: 3,
      objPos: 'object-center'
    },
    {
      id: 'slide-1',
      type: 'image',
      src: '/images/hero_showcase/manny_podcast_mayank.jpg',
      alt: 'HQX Podcast Studio Conversation',
      episodeIdx: 1,
      objPos: 'object-[25%_25%]'
    },
    {
      id: 'slide-2',
      type: 'video',
      src: '/videos/happiness_samurai_ikigai.mp4',
      poster: '/profile_assets/page_21_img_1_1306.jpeg',
      alt: 'HQX Podcast — Stories, Mindset and Insights',
      episodeIdx: 0,
      objPos: 'object-center'
    },
    {
      id: 'slide-3',
      type: 'video',
      src: '/videos/happiness_samurai_mental_health.mp4',
      poster: '/profile_assets/page_32_img_15_2398.jpeg',
      alt: 'HQX Podcast Executive Dialogue',
      episodeIdx: 2,
      objPos: 'object-center'
    },
    {
      id: 'slide-4',
      type: 'image',
      src: '/images/hero_showcase/manny_podcast_rakesh.jpg',
      alt: 'HQX Podcast Studio Recording',
      episodeIdx: 5,
      objPos: 'object-[20%_25%]'
    }
  ];

  // Exact Featured Guests from Profile Page 32
  const profileGuests = [
    {
      name: 'Sameera Reddy',
      role: 'Happiness Creator & Bollywood Icon',
      focus: 'Body Positivity, Mental Wellness & Authentic Motherhood',
      image: '/profile_assets/page_32_img_11_2380.jpeg'
    },
    {
      name: 'Raj Nayak',
      role: 'Happiness Evangelist & Media Titan',
      focus: 'Former Viacom18 COO, House of Cheer Founder & Workplace Culture',
      image: '/profile_assets/page_32_img_13_2389.jpeg'
    },
    {
      name: 'Parvej Mantrri',
      role: 'FitPandaa Founder & Celebrity Fitness Coach',
      focus: 'Physical Vitality, Actor, Host & Dynamic Movement',
      image: '/profile_assets/page_32_img_15_2398.jpeg'
    },
    {
      name: 'Noopur Desai',
      role: 'Philanthropy Leader',
      focus: 'Purposeful Giving, Social Impact & Community Flourishing',
      image: '/profile_assets/page_32_img_17_2407.jpeg'
    },
    {
      name: 'Radhika Dudhat',
      role: 'Partner, Shardul Amarchand Mangaldas',
      focus: 'Corporate Law, Executive Resilience & Institutional Governance',
      image: '/profile_assets/page_32_img_11_2380.jpeg'
    },
    {
      name: 'Margie Blanton',
      role: 'Global Executive Educator',
      focus: 'Multicultural Leadership, Adult Learning & High Potential Coaching',
      image: '/profile_assets/page_32_img_13_2389.jpeg'
    },
    {
      name: 'Priti Rathi Gupta',
      role: 'Founder, LXME',
      focus: 'Financial Well-Being, Women\'s Economic Sovereignty & Investment',
      image: '/profile_assets/page_32_img_15_2398.jpeg'
    },
    {
      name: 'Praveen Nair',
      role: 'Renowned Mentalist & Mind Coach',
      focus: 'Cognitive Framing, Subconscious Belief Systems & Mental Focus',
      image: '/profile_assets/page_32_img_17_2407.jpeg'
    }
  ];

  const handleSelectSlide = (idx, offset) => {
    if (offset === 0) {
      const epIdx = heroSlides[idx].episodeIdx;
      if (podcasts[epIdx]) {
        setActiveEpisode(podcasts[epIdx]);
      }
      const el = document.getElementById('featured-player');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }
    setCenterSlide(idx);
    const epIdx = heroSlides[idx].episodeIdx;
    if (podcasts[epIdx]) {
      setActiveEpisode(podcasts[epIdx]);
    }
  };

  const stepSlide = (delta) => {
    setCenterSlide((prev) => {
      const next = (prev + delta + heroSlides.length) % heroSlides.length;
      const epIdx = heroSlides[next].episodeIdx;
      if (podcasts[epIdx]) {
        setActiveEpisode(podcasts[epIdx]);
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Hero Banner: Centered Editorial Text (No Buttons) + Interactive Scrollable 5-Card Stepped Fan */}
      <section className="bg-[#0A0A0A] text-white min-h-[100svh] lg:h-[100svh] lg:min-h-[580px] lg:max-h-[1080px] pt-24 sm:pt-28 pb-0 px-4 sm:px-6 md:px-12 border-b border-white/10 relative overflow-hidden flex flex-col justify-between">
        {/* Subtle Warm Stage Backlight Behind Center Phone */}
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[560px] h-[280px] bg-hq-yellow/[0.08] rounded-full blur-[140px] pointer-events-none" />

        {/* Centered Editorial Headline & Subtitle Only (Without Any Buttons) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto pt-2 sm:pt-4 pb-6 sm:pb-8 relative z-20 shrink-0"
        >
          <h1
            style={{ fontFamily: '"Geist", Arial, sans-serif', fontWeight: 300 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] tracking-tight font-light leading-[1.12] mb-3 text-white"
          >
            HQX <span style={{ fontFamily: '"Geist", Arial, sans-serif' }} className="text-hq-yellow font-bold">Podcast</span>
          </h1>
          <p
            style={{ fontFamily: '"Prata", serif' }}
            className="font-prata text-base sm:text-lg md:text-xl text-white/80 leading-relaxed tracking-wide"
          >
            “Stories, Mindset and Insights” — Fortnightly dialogues hosted by Manny Anchan.
          </p>
        </motion.div>

        {/* Interactive 5-Card Stepped Perspective Podcast Fan Anchored to Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          onPanEnd={(_, info) => {
            if (info.offset.x < -45) stepSlide(1);
            else if (info.offset.x > 45) stepSlide(-1);
          }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex items-end justify-center mt-auto h-[290px] sm:h-[340px] lg:h-[calc(100vh-270px)] lg:min-h-[285px] lg:max-h-[420px] select-none touch-pan-y"
        >
          {heroSlides.map((slide, idx) => {
            const raw = (idx - centerSlide + heroSlides.length) % heroSlides.length;
            const offset = raw > 2 ? raw - heroSlides.length : raw; // -2, -1, 0, +1, +2
            const absOffset = Math.abs(offset);
            const isCenter = offset === 0;

            const targetX =
              offset === 0
                ? '0%'
                : offset === -1
                ? '-72%'
                : offset === 1
                ? '72%'
                : offset === -2
                ? '-134%'
                : '134%';

            const targetScale = isCenter ? 1 : absOffset === 1 ? 0.82 : 0.65;
            const targetZ = isCenter ? 30 : absOffset === 1 ? 20 : 10;
            const targetBrightness = isCenter ? 1 : absOffset === 1 ? 0.72 : 0.48;

            return (
              <motion.div
                key={slide.id}
                onClick={() => handleSelectSlide(idx, offset)}
                role="button"
                tabIndex={0}
                aria-label={isCenter ? `Watch ${slide.alt}` : `Bring ${slide.alt} to center`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSelectSlide(idx, offset);
                  }
                }}
                initial={false}
                animate={{
                  x: `calc(-50% + ${targetX})`,
                  scale: targetScale,
                  zIndex: targetZ,
                  filter: `brightness(${targetBrightness})`
                }}
                transition={{
                  type: 'spring',
                  stiffness: 240,
                  damping: 26,
                  mass: 0.9
                }}
                style={{ transformOrigin: 'bottom center' }}
                className={`absolute bottom-0 left-1/2 w-[195px] sm:w-[245px] lg:w-[285px] h-full overflow-hidden cursor-pointer bg-black group ${
                  isCenter
                    ? 'rounded-t-[32px] sm:rounded-t-[40px] border-[6px] sm:border-[8px] border-[#1A1C21] border-b-0 shadow-[0_-14px_65px_rgba(0,0,0,0.95)]'
                    : absOffset === 1
                    ? 'rounded-t-2xl sm:rounded-t-3xl border border-white/15 border-b-0 shadow-2xl hover:border-hq-yellow/50'
                    : 'hidden sm:block rounded-t-2xl border border-white/10 border-b-0 hover:border-white/30'
                }`}
              >
                {slide.type === 'video' ? (
                  <video
                    src={slide.src}
                    poster={slide.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`w-full h-full object-cover ${slide.objPos} transition-transform duration-700 ${
                      isCenter ? 'group-hover:scale-105' : ''
                    }`}
                  />
                ) : (
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className={`w-full h-full object-cover ${slide.objPos} transition-transform duration-700 ${
                      isCenter ? 'group-hover:scale-105' : ''
                    }`}
                  />
                )}

                <div
                  className={`absolute inset-0 pointer-events-none ${
                    isCenter
                      ? 'bg-gradient-to-t from-black/50 via-transparent to-black/35'
                      : 'bg-gradient-to-t from-black/60 via-transparent to-black/20'
                  }`}
                />

                {/* Top Phone Dynamic Island & Play Triangle ONLY when Centered */}
                {isCenter && (
                  <>
                    <div className="absolute top-3 inset-x-4 z-20 flex items-center justify-between pointer-events-none">
                      <span className="text-[9px] font-mono text-white/80 font-semibold">9:41</span>
                      <div className="w-14 sm:w-16 h-3.5 rounded-full bg-black border border-white/10" />
                      <Wifi className="w-3 h-3 text-white/80 stroke-[1.5]" />
                    </div>

                    <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center group-hover:scale-110 group-hover:bg-hq-yellow group-hover:border-hq-yellow transition-all duration-300 shadow-lg">
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white group-hover:fill-black group-hover:text-black ml-0.5 transition-colors" />
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Subtle Bottom Edge Shadow Blend */}
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/80 to-transparent z-40 pointer-events-none" />
      </section>

      {/* Reference Glassmorphic Podcast Hub (Dual-Tone Header + Draggable Right-to-Left Coverflow + Next Up + Featured Conversations) */}
      <section className="bg-[#090B0F] text-white py-20 sm:py-24 relative overflow-hidden border-b border-white/10">
        {/* Subtle Architectural Vertical Light Pillars */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06),_transparent_65%)] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-8">
          {/* Header Row: Dual-Tone Title & Top Narrative */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pb-8 border-b border-white/10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.08]">
                HQX Podcast <br />
                <span className="text-white/55 font-light">&amp; Executive Dialogues</span>
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-white/65 max-w-md font-light leading-relaxed lg:pb-1">
              Stories, mindset, and executive insights on emotional resilience, conscious leadership, and eudaimonic culture.
            </p>
          </div>

          {/* Top Row: Draggable Right-to-Left Auto-Scrolling Thumbnail Coverflow */}
          <div
            ref={thumbTrackRef}
            onMouseEnter={() => { isThumbHoveredRef.current = true; }}
            onMouseLeave={() => { isThumbHoveredRef.current = false; stopThumbDrag(); }}
            onMouseDown={handleThumbMouseDown}
            onMouseMove={handleThumbMouseMove}
            onMouseUp={stopThumbDrag}
            className="flex gap-4 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none py-2 -mx-1 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...podcasts, ...podcasts].map((ep, idx) => {
              const isSelected = (expandedEpisodeId || activeEpisode?.id) === ep.id;
              return (
                <button
                  key={`${ep.id}-${idx}`}
                  type="button"
                  onClick={() => {
                    if (thumbDraggedRef.current) return;
                    setActiveEpisode(ep);
                    setExpandedEpisodeId(ep.id);
                  }}
                  className={`group relative w-[200px] sm:w-[220px] lg:w-[235px] aspect-[4/4.3] shrink-0 rounded-2xl overflow-hidden text-left bg-[#14171D] transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? 'border-hq-yellow/60 shadow-[0_18px_45px_rgba(0,0,0,0.85)]'
                      : 'border-white/10 opacity-90 hover:opacity-100 hover:border-white/25'
                  }`}
                >
                  <img
                    src={ep.thumbnail}
                    alt={ep.title}
                    draggable={false}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-11 h-11 rounded-full bg-black/55 backdrop-blur-md border border-white/25 flex items-center justify-center text-white">
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-3.5 pointer-events-none">
                    <div className="font-display text-xs sm:text-sm font-medium text-white line-clamp-1">
                      {ep.guest}
                    </div>
                    <div className="font-body text-[11px] text-white/60 line-clamp-1">
                      {ep.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Inline Slide-Open Bigger Video Player (No Page Scroll Jump) */}
          <AnimatePresence initial={false}>
            {expandedEpisodeId && (() => {
              const currentEp = podcasts.find((p) => p.id === expandedEpisodeId) || activeEpisode;
              if (!currentEp) return null;
              return (
                <motion.div
                  key={currentEp.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="relative w-full rounded-3xl bg-white/[0.04] backdrop-blur-2xl border border-white/15 p-5 sm:p-7 shadow-[0_24px_70px_rgba(0,0,0,0.75)]">
                    <button
                      type="button"
                      aria-label="Close expanded player"
                      onClick={() => setExpandedEpisodeId(null)}
                      className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-hq-yellow text-white hover:text-[#0A0A0A] border border-white/15 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                      <div className="lg:col-span-8 aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl">
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${currentEp.youtubeId}?autoplay=1&rel=0`}
                          title={currentEp.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>

                      <div className="lg:col-span-4">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-hq-yellow font-semibold mb-2">
                          <span>Now Playing</span>
                          <span className="text-white/30">&bull;</span>
                          <span>{currentEp.duration}</span>
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-semibold text-white leading-snug mb-2">
                          {currentEp.title}
                        </h3>
                        <div className="text-sm text-white/80 font-medium mb-4 pb-4 border-b border-white/10">
                          {currentEp.guest} &bull; {currentEp.category}
                        </div>
                        <p className="font-body text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-4">
                          {currentEp.summary}
                        </p>
                        <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                          <Calendar className="w-3.5 h-3.5 text-hq-yellow" />
                          <span>{currentEp.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>

          {/* Bottom Split: Left "Next up" & Right "Popular Series" Frosted Glass Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Left Card: Next up */}
            <div className="lg:col-span-6 bg-white/[0.045] backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-6 sm:p-7">
              <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-5">
                Next up
              </h3>

              <div className="space-y-2.5">
                {visibleNextUp.map((ep) => {
                  const isPlaying = (expandedEpisodeId || activeEpisode?.id) === ep.id;
                  return (
                    <div
                      key={ep.id}
                      onClick={() => {
                        setActiveEpisode(ep);
                        setExpandedEpisodeId(ep.id);
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveEpisode(ep);
                          setExpandedEpisodeId(ep.id);
                        }
                      }}
                      className={`group flex items-center justify-between gap-3 p-2.5 -mx-2.5 rounded-2xl transition-colors cursor-pointer ${
                        isPlaying ? 'bg-white/[0.08]' : 'hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10">
                          <img
                            src={ep.thumbnail}
                            alt={ep.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <div className={`font-display text-sm font-medium truncate ${isPlaying ? 'text-hq-yellow' : 'text-white'}`}>
                            {ep.title}
                          </div>
                          <div className="font-body text-xs text-white/50 truncate mt-0.5">
                            {ep.guest}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center shrink-0">
                        <span className="font-mono text-xs text-white/45 tabular-nums">
                          {ep.duration}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Card: Popular Playlists / Podcast Series */}
            <div className="lg:col-span-6 bg-white/[0.045] backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-6 sm:p-7">
              <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-5">
                Featured Conversations
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {visibleFeaturedConversations.map((ep) => {
                  const isPlaying = (expandedEpisodeId || activeEpisode?.id) === ep.id;
                  return (
                    <button
                      key={`series-${ep.id}`}
                      type="button"
                      onClick={() => {
                        setActiveEpisode(ep);
                        setExpandedEpisodeId(ep.id);
                      }}
                      className={`group flex items-center gap-3.5 p-2.5 rounded-2xl text-left transition-colors cursor-pointer ${
                        isPlaying ? 'bg-white/[0.08]' : 'hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className="w-13 h-13 w-14 h-14 rounded-xl overflow-hidden bg-black/40 shrink-0 border border-white/10">
                        <img
                          src={ep.thumbnail}
                          alt={ep.guest}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className={`font-display text-sm font-medium truncate ${isPlaying ? 'text-hq-yellow' : 'text-white/90 group-hover:text-white'}`}>
                          {ep.guest}
                        </div>
                        <div className="font-body text-xs text-white/45 truncate mt-0.5">
                          {ep.category}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Common More / Show Less Button for Both Lists */}
          {podcasts.length > 6 && (
            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={() => setShowAllPodcasts((prev) => !prev)}
                className="px-7 py-3 rounded-full bg-white/[0.06] hover:bg-hq-yellow text-white hover:text-[#0A0A0A] border border-white/15 hover:border-hq-yellow font-display text-xs uppercase tracking-[0.18em] font-semibold transition-all cursor-pointer"
              >
                {showAllPodcasts ? 'Show Less' : `More (${podcasts.length - 6}+ Episodes)`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Print Media Articles, Interviews & Profiles */}
      <section className="py-20 sm:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 sm:mb-14 pb-8 border-b border-black/10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] leading-[1.08]">
                Print Media &amp; <br />
                <span className="text-[#666666] font-light">Editorial Coverage</span>
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-hq-black/65 max-w-md font-light leading-relaxed lg:pb-1">
              Featured interviews, leadership columns, and national &amp; global press coverage spotlighting HQX.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {printMedia.map((article, idx) => {
              const pressImages = [
                '/images/celebrity/john_abraham_manny_book_color.jpg',
                '/images/hero_showcase/manny_tedx_navrachana.jpg',
                '/images/hero_showcase/manny_ageas_keynote_stage.jpg',
                '/images/hero_showcase/manny_amana_keynote.jpg',
                '/images/hero_showcase/founder_hero_keynote_speaking.jpg',
                '/images/hero_showcase/manny_roundtable_engagement.jpg',
                '/images/linkedin/au-bank-awards.jpg'
              ];
              const pressImg = pressImages[idx % pressImages.length];

              return (
                <article
                  key={idx}
                  className="newsprint-card group text-[#0A0A0A] p-6 sm:p-7 rounded-[4px] shadow-[0_8px_28px_rgba(0,0,0,0.05)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Newspaper Masthead Double Rule */}
                    <div className="border-t border-b border-black/80 py-1.5 mb-5 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.14em] font-bold text-[#0A0A0A]">
                      <span>{article.publication}</span>
                      <span>{String(idx + 1).padStart(2, '0')} &bull; PRESS</span>
                    </div>

                    {/* Editorial Title with Marker Highlight + Lead Copy */}
                    <h4 className="font-display text-xl sm:text-[22px] font-bold tracking-tight text-[#0A0A0A] leading-[1.22] mb-3">
                      <span
                        className="px-1.5 py-0.5 -mx-1 rounded-[2px] box-decoration-clone"
                        style={{
                          background:
                            'linear-gradient(104deg, rgba(255,204,0,0) 0.9%, rgba(255,204,0,0.72) 2.4%, rgba(255,204,0,0.65) 95%, rgba(255,204,0,0) 98%)'
                        }}
                      >
                        {article.title}
                      </span>
                    </h4>

                    <p className="font-body text-sm text-[#1F1F1F]/85 font-normal leading-relaxed">
                      {article.desc}
                    </p>
                  </div>

                  <div>
                    {/* Duotone Yellow Print Strip with Offset Amber Shadow */}
                    <div className="mt-6 relative aspect-[16/9] w-full overflow-hidden bg-[#FFCC00] shadow-[6px_6px_0px_#F59E0B]">
                      <img
                        src={pressImg}
                        alt={article.title}
                        className="w-full h-full object-cover object-top grayscale contrast-125 brightness-105 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-[#FFCC00]/55 mix-blend-multiply pointer-events-none" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
