import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Calendar, 
  Clock, 
  Newspaper,
  Wifi
} from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Podcast() {
  const { podcasts, printMedia } = useData();
  const [activeEpisode, setActiveEpisode] = useState(podcasts[0] || null);
  const [centerSlide, setCenterSlide] = useState(2);

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
          <p className="font-serif italic text-base sm:text-lg md:text-xl text-white/75 leading-relaxed">
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

      {/* Featured Video Player */}
      {activeEpisode && (
        <section id="featured-player" className="py-20 sm:py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-hq-black/10">
          <div className="bg-hq-black text-white p-6 md:p-8 rounded-3xl shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Responsive 16:9 YouTube Embed */}
              <div className="w-full lg:w-2/3 aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeEpisode.youtubeId}?autoplay=0&rel=0`}
                  title={activeEpisode.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Episode Info */}
              <div className="w-full lg:w-1/3">
                <div className="text-xs font-mono text-hq-yellow uppercase tracking-widest mb-2 font-semibold">
                  Featured Episode • {activeEpisode.category || 'Executive Dialogue'}
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3 leading-snug">
                  {activeEpisode.title}
                </h2>
                <div className="flex gap-4 text-xs font-mono text-white/60 mb-4 pb-4 border-b border-white/10">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-hq-yellow" /> {activeEpisode.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-hq-yellow" /> {activeEpisode.duration}</span>
                </div>
                <div className="text-xs text-white/80 font-body font-light leading-relaxed mb-6">
                  {activeEpisode.summary}
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-[10px] font-mono uppercase text-hq-yellow block font-bold mb-1">
                    Guest Speaker
                  </span>
                  <span className="font-display text-base font-semibold text-white">{activeEpisode.guest}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Profile Page 32: Featured Guests Gallery */}
      <section className="py-20 sm:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 sm:mb-14 pb-8 border-b border-black/10">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] leading-[1.08]">
              Featured Guests <br />
              <span className="text-[#666666] font-light">&amp; Conversations</span>
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-hq-black/65 max-w-md font-light leading-relaxed lg:pb-1">
            Renowned leaders, creators, entrepreneurs, and thinkers featured on the HQX Podcast series.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {profileGuests.map((g, i) => (
            <div 
              key={i}
              className="bg-hq-gray p-6 rounded-2xl border border-hq-black/15 shadow-sm hover:border-hq-black hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-hq-black/5 mb-4 border border-hq-black/10">
                  <img src={g.image} alt={g.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="text-[10px] font-mono uppercase text-hq-yellow bg-hq-black px-2.5 py-1 rounded-full font-bold inline-block mb-2">
                  {g.role}
                </div>
                <h3 className="font-display text-xl font-bold mb-1">
                  {g.name}
                </h3>
                <p className="font-body text-xs text-hq-black/75 font-light leading-relaxed">
                  {g.focus}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Profile Page 33: Print Media Articles, Interviews & Profiles */}
        <div className="mt-20 pt-16 border-t border-hq-black/10">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-hq-black/60 block font-bold mb-2">
              National & Global Press • Profile Page 33
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-bold">
              Print Media & Editorial Coverage
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {printMedia.map((article, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-hq-black/15 shadow-sm hover:border-hq-black transition-all">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-hq-black mb-3">
                  <Newspaper className="w-4 h-4 text-hq-yellow" />
                  <span>{article.publication}</span>
                </div>
                <h4 className="font-display text-lg font-bold mb-2">
                  {article.title}
                </h4>
                <p className="font-body text-xs text-hq-black/75 font-light leading-relaxed">
                  {article.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 px-6 md:px-12 text-center bg-hq-yellow text-hq-black border-t border-hq-black">
        <h2 className="font-display text-4xl md:text-5xl tracking-tight font-semibold mb-4">
          Never Miss An Executive Insight
        </h2>
        <p className="font-body text-hq-black/80 max-w-xl mx-auto mb-8 font-light text-base">
          Subscribe to the fortnightly podcast and receive curated reflection guides in your inbox.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            to="/contact" 
            className="bg-hq-black text-hq-white font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-hq-black transition-all font-semibold shadow-xl"
          >
            Inquire for Podcast Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
