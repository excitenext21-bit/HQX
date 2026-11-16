import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 't-michael',
    name: 'Michael Clarke',
    role: 'Former Captain, Australian Cricket Team',
    initials: 'MC',
    image: '/images/testimonials/michael-clarke.jpg',
    quote:
      'Champions are built long before they step onto the field. HQx provides a powerful framework for developing purpose, resilience, and the mindset needed to perform at your best—in sport, business, and life.'
  },
  {
    id: 't-suhail',
    name: 'Suhail Nathani',
    role: 'Managing Partner, ELP',
    initials: 'SN',
    image: '/images/testimonials/suhail-nathani.jpg',
    quote:
      "The HQx framework helped our leaders rethink success beyond KPIs. Manny's storytelling, vulnerability, and practical transformation process resonated with every level of our organization."
  },
  {
    id: 't-ankur',
    name: 'Ankur Aggrawal',
    role: 'Executive Chairman & MD, Crystal Group',
    initials: 'AA',
    image: '/images/testimonials/ankur-aggrawal.jpg',
    quote:
      "Manny's HQx session was one of the most authentic leadership conversations our teams have experienced. His ability to blend business performance, emotional intelligence, and practical habits created immediate impact across our leadership cohort."
  },
  {
    id: 't-vikram',
    name: 'Vikram Shroff',
    role: 'Vice Chairman, UPL',
    initials: 'VS',
    image: '/images/testimonials/vikram-shroff.jpg',
    quote:
      'Our leadership team was captivated from start to finish. Manny combines wisdom, business acumen, and human connection in a way that is both rare and powerful.'
  },
  {
    id: 't-sabeena',
    name: 'Sabeena Ladak',
    role: 'Head of Corporate HR & Talent Acquisition, Cipla',
    initials: 'SL',
    image: '/images/testimonials/sabeena-ladak.jpg',
    quote:
      'In a world full of motivational speakers, Manny stands apart. His insights are grounded in lived experience, backed by research, and delivered with humility. Our teams left inspired and equipped with actionable tools.'
  },
  {
    id: 't-girish',
    name: 'Girish Wagh',
    role: 'Executive Director of Tata Motors',
    initials: 'GW',
    image: '/images/testimonials/girish-wagh.jpg',
    quote:
      "The session generated more post-event conversations than any leadership workshop we've hosted. Manny's ability to make complex ideas simple and actionable is exceptional."
  },
  {
    id: 't-kushal',
    name: 'Kushal Desai',
    role: 'Chairman & Managing Director, Apar Industries',
    initials: 'KD',
    image: '/images/testimonials/kushal-desai.jpg',
    quote:
      "Manny's unique journey from finance and business leadership to wellbeing and human performance gives him a perspective few speakers possess. His session was insightful, refreshing, and deeply relevant."
  },
  {
    id: 't-archana',
    name: 'Archana Shiroor',
    role: 'CHRO, Yes Bank',
    initials: 'AS',
    image: '/images/testimonials/archana-shiroor.jpg',
    quote:
      'The HQx methodology provides a practical roadmap for sustainable high performance. Our managers appreciated the balance of science, self-awareness, and real-world application.'
  },
  {
    id: 't-dhirendra',
    name: 'Dhirendra Mahyavanshi',
    role: 'Founder, Fast-Growing Startup, Turtlemint',
    initials: 'DM',
    image: '/images/testimonials/dhirendra-mahyavanshi.jpg',
    quote:
      "Our people didn't just enjoy the session—they changed behaviors afterward. That is the true test of any learning experience, and HQx delivered."
  },
  {
    id: 't-rakesh',
    name: 'Rakesh Bhatia',
    role: 'Group CFO, Tata Capital',
    initials: 'RB',
    image: '/images/testimonials/rakesh-bhatia.jpg',
    quote:
      "The combination of concepts from Blue Zones, Ikigai, wellbeing science, and leadership development was delivered masterfully. Manny's authenticity creates trust, and trust creates transformation."
  },
  {
    id: 't-sasha',
    name: 'Sasha Mirchandani',
    role: 'Billionaire Investor, Kae Capital',
    initials: 'SM',
    image: '/images/testimonials/sasha-mirchandani.jpg',
    quote:
      "Manny's work addresses a critical challenge of modern leadership: how to succeed without losing yourself in the process. His message is timely, profound, and immensely valuable."
  }
];

function PortraitVisual({ item, large = false }) {
  if (item.image) {
    return (
      <img
        src={item.image}
        alt={item.name}
        className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out ${
          large ? 'group-hover:scale-105' : 'group-hover:scale-110'
        }`}
      />
    );
  }

  return (
    <div
      className="w-full h-full relative flex flex-col items-center justify-center overflow-hidden select-none"
      style={{
        background:
          'radial-gradient(circle at 50% 35%, #2C2E33 0%, #16171A 55%, #0B0C0E 100%)'
      }}
    >
      <div
        className={`font-display font-bold tracking-tight text-white/90 ${
          large ? 'text-6xl sm:text-7xl' : 'text-xl sm:text-2xl'
        }`}
      >
        {item.initials}
      </div>
      {large && (
        <div className="mt-4 px-4 text-center">
          <div className="w-8 h-[2px] bg-hq-yellow mx-auto mb-3" />
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/55">
            {item.role}
          </div>
        </div>
      )}
    </div>
  );
}

export default function TestimonialsCollage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = TESTIMONIALS.length;
  const activeItem = TESTIMONIALS[activeIndex];

  // Next 3 upcoming portraits shown in the bottom-left thumbnail strip (matching Pinterest ref)
  const upcomingThumbs = [1, 2, 3].map((offset) => {
    const idx = (activeIndex + offset) % total;
    return { idx, item: TESTIMONIALS[idx] };
  });

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  const formattedCurrent = String(activeIndex + 1).padStart(2, '0');
  const formattedTotal = String(total).padStart(2, '0');

  return (
    <section
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="section-reveal min-h-[100svh] lg:h-[100svh] lg:min-h-[580px] lg:max-h-[940px] flex flex-col justify-center py-14 sm:py-16 lg:py-10 bg-white text-[#111111] border-b border-black/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Pinterest Reference Asymmetric Editorial Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* LEFT ZONE: Top Counter + Vertical "Reviews" Label + Bottom-Left 3 Thumbnails */}
          <div className="lg:col-span-4 flex flex-col justify-between min-h-[220px] lg:h-[min(68vh,540px)] order-2 lg:order-1">
            {/* Top Row inside Left Zone: Counter ("01 / 11") & Vertical "Reviews" Label */}
            <div className="flex items-start justify-between pt-1">
              <div className="font-mono text-xs tracking-[0.15em] text-[#111111] font-semibold">
                <span>{formattedCurrent}</span>
                <span className="text-[#999999]"> / {formattedTotal}</span>
              </div>

              <div
                className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold uppercase tracking-[0.14em] text-[#111111] select-none hidden lg:block pr-4 pt-6"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                TESTIMONIALS
              </div>
            </div>

            {/* Bottom-Left Strip: 3 Smaller Portrait Thumbnails Aligned to Shared Bottom Baseline */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 lg:pt-0">
              {upcomingThumbs.map(({ idx, item }) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`View review from ${item.name}`}
                  className="group relative aspect-[3/4] w-full overflow-hidden bg-[#141518] cursor-pointer focus:outline-none"
                >
                  <div className="w-full h-full overflow-hidden">
                    <PortraitVisual item={item} large={false} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* CENTER ZONE: Tall Vertical Active Portrait Spanning Full Height */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex items-stretch">
            <div className="group relative w-full h-[340px] sm:h-[420px] lg:h-[min(68vh,540px)] overflow-hidden bg-[#141518]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full"
                >
                  <PortraitVisual item={activeItem} large={true} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT ZONE: Reviewer Name & Role + Multi-Line Quote + Bottom-Right Yellow Circle Button */}
          <div className="lg:col-span-4 order-3 flex flex-col justify-between lg:pl-4 min-h-[240px] lg:h-[min(68vh,540px)]">
            {/* Upper/Center Quote Content */}
            <div className="my-auto py-4 lg:py-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="font-display text-xs sm:text-sm font-semibold text-[#111111]">
                    {activeItem.name}
                  </div>
                  <div className="font-body text-[11px] sm:text-xs text-[#888888] mt-0.5 mb-7 sm:mb-9">
                    {activeItem.role}
                  </div>

                  <blockquote className="font-display text-xl sm:text-2xl lg:text-[26px] font-medium text-[#111111] leading-[1.34] tracking-tight">
                    &ldquo;{activeItem.quote}&rdquo;
                  </blockquote>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom-Right Yellow Circular Next Button Aligned to Shared Baseline */}
            <div className="flex items-center justify-between lg:justify-start pt-4">
              <span className="lg:hidden font-display text-xs uppercase tracking-widest text-[#888888]">
                Reviews
              </span>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next review"
                className="w-12 h-12 rounded-full bg-hq-yellow text-[#0A0A0A] flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.25]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
