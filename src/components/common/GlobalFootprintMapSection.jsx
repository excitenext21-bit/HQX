import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, MapPin, Building2, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import worldDots from '../../data/world_dots.json';

const GLOBAL_HUBS = [
  {
    id: "india",
    name: "India",
    flag: "🇮🇳",
    city: "Mumbai HQ • 16 States",
    desc: "National headquarters, 16 Indian states covered, enterprise summits across Mumbai, Delhi NCR, Bangalore, Pune & Hyderabad.",
    clients: "HDFC Life, Barclays, SMFG India, Shardul Amarchand",
    x: 71.1,
    y: 40.9,
    accent: "#FFCD00",
    isPrimary: true
  },
  {
    id: "uae",
    name: "United Arab Emirates",
    flag: "🇦🇪",
    city: "Dubai Hub",
    desc: "GCC sovereign leadership conclaves & commercial banking executive summits.",
    clients: "Middle East Corporate Conclaves & Private Banking",
    x: 64.1,
    y: 38.0,
    accent: "#10B981"
  },
  {
    id: "mauritius",
    name: "Mauritius",
    flag: "🇲🇺",
    city: "Port Louis",
    desc: "Flagship African commercial banking retreat & leadership vitality offsite.",
    clients: "Absa Bank (Mauritius) Leadership Conclave",
    x: 65.0,
    y: 71.6,
    accent: "#38BDF8"
  },
  {
    id: "tanzania",
    name: "Tanzania",
    flag: "🇹🇿",
    city: "Dar es Salaam",
    desc: "Commercial banking executive strategy offsite and leadership alignment.",
    clients: "Amana Bank Commercial Banking Leadership",
    x: 59.1,
    y: 61.1,
    accent: "#F59E0B"
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    city: "London",
    desc: "International institutional banking & executive leadership pedagogy.",
    clients: "Barclays Global Leadership Network",
    x: 48.2,
    y: 16.9,
    accent: "#6366F1"
  },
  {
    id: "japan",
    name: "Japan",
    flag: "🇯🇵",
    city: "Tokyo",
    desc: "Ikigai, Kaizen & ancient Japanese eudaimonia empirical research partner.",
    clients: "Cross-Cultural Eudaimonia Initiatives",
    x: 88.5,
    y: 29.2,
    accent: "#EC4899"
  },
  {
    id: "bhutan",
    name: "Bhutan",
    flag: "🇧🇹",
    city: "Thimphu",
    desc: "Gross National Happiness (GNH) institutional benchmarking & public sector purpose.",
    clients: "GNH Research & Leadership Protocols",
    x: 74.4,
    y: 35.7,
    accent: "#F97316"
  },
  {
    id: "finland",
    name: "Finland",
    flag: "🇫🇮",
    city: "Helsinki",
    desc: "Nordic psychological safety, trust-based leadership & societal wellbeing frameworks.",
    clients: "Nordic Executive Wellbeing Benchmarks",
    x: 55.9,
    y: 9.8,
    accent: "#06B6D4"
  },
  {
    id: "costa-rica",
    name: "Costa Rica",
    flag: "🇨🇷",
    city: "San José",
    desc: "Blue Zone longevity science, bio-vitality & regenerative leadership protocols.",
    clients: "Nicoya Peninsula Blue Zone Longevity Studies",
    x: 24.5,
    y: 48.9,
    accent: "#84CC16"
  },
  {
    id: "usa",
    name: "United States",
    flag: "🇺🇸",
    city: "New York",
    desc: "Columbia Business School & Harvard Business School executive alumni pedagogy.",
    clients: "Columbia & Harvard Global Pedigree",
    x: 21.2,
    y: 27.8,
    accent: "#3B82F6"
  }
];

const STATES_COVERED = [
  'Maharashtra', 'Goa', 'Uttar Pradesh', 'Bihar', 'Haryana',
  'Punjab', 'Rajasthan', 'Madhya Pradesh', 'Karnataka', 'Tamil Nadu',
  'Jammu', 'Gujarat', 'Uttarakhand', 'West Bengal', 'Meghalaya', 'Assam'
];

export default function GlobalFootprintMapSection() {
  const [activeHub, setActiveHub] = useState(null);
  const [showStatesModal, setShowStatesModal] = useState(false);

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#F8F9FA] text-[#0A0A0A] relative overflow-hidden border-t border-b border-black/5">
      {/* Subtle Studio Ambient Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/[0.03] pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-hq-yellow/10 rounded-full blur-[130px] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ========================================================
            1. TOP HEADER & METRICS ROW (Exact Style of Reference)
           ======================================================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-12 sm:mb-16">
          
          {/* Left Column: Big Bold Statement */}
          <div className="max-w-xl">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-tight text-[#0A0A0A] leading-[1.1] mb-3">
              Engineered for Global Scale. <br />
              <span className="text-[#666666] font-light">Transform Without Borders.</span>
            </h2>
            <p className="font-body text-sm sm:text-base text-[#0A0A0A]/60 font-light leading-relaxed">
              Empowering enterprise resilience and leadership vitality across 16 Indian states and 9 sovereign global jurisdictions with localized cultural nuance.
            </p>
          </div>

          {/* Right Column: 3 Horizontal Big Bold Metrics (Matching Reference Layout) */}
          <div className="flex flex-wrap items-baseline gap-8 sm:gap-12 lg:gap-14 border-t lg:border-t-0 pt-6 lg:pt-0 border-black/10 w-full lg:w-auto">
            <div>
              <div className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#0A0A0A] leading-none">
                16+
              </div>
              <div className="font-body text-xs sm:text-[13px] text-[#0A0A0A]/60 font-medium mt-1.5">
                Indian States Covered
              </div>
            </div>

            <div>
              <div className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#0A0A0A] leading-none">
                9
              </div>
              <div className="font-body text-xs sm:text-[13px] text-[#0A0A0A]/60 font-medium mt-1.5">
                Sovereign Global Hubs
              </div>
            </div>

            <div>
              <div className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#0A0A0A] leading-none">
                100k+
              </div>
              <div className="font-body text-xs sm:text-[13px] text-[#0A0A0A]/60 font-medium mt-1.5">
                Leaders Energized
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================
            2. HIGH-PRECISION DOTTED MATRIX WORLD MAP (Exact Style)
           ======================================================== */}
        <div className="relative w-full aspect-[2/1] min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[580px] bg-white/70 backdrop-blur-sm rounded-[32px] sm:rounded-[40px] border border-black/10 shadow-sm overflow-hidden p-4 sm:p-8 flex items-center justify-center">
          
          {/* Subtle Map Grid lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          {/* SVG Dotted Matrix Layer (1,895 Mathematical Coordinates) */}
          <svg 
            viewBox="0 0 1000 500" 
            className="w-full h-full  pointer-events-none"
            preserveAspectRatio="xMidYMid meet"
          >
            {worldDots.map(([x, y], idx) => (
              <circle
                key={idx}
                cx={x}
                cy={y}
                r={1.85}
                fill="#9CA3AF"
                opacity={0.7}
              />
            ))}
          </svg>

          {/* Interactive Floating Pill Pins (Matching Screenshot Aesthetics) */}
          <div className="absolute inset-0 pointer-events-none">
            {GLOBAL_HUBS.map((hub) => {
              const isHovered = activeHub?.id === hub.id;
              return (
                <div
                  key={hub.id}
                  className="absolute pointer-events-auto transition-transform duration-300"
                  style={{
                    left: `${hub.x}%`,
                    top: `${hub.y}%`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: isHovered ? 40 : 20
                  }}
                  onMouseEnter={() => setActiveHub(hub)}
                  onMouseLeave={() => setActiveHub(null)}
                >
                  {/* Glowing Beacon Dot on Map */}
                  <div className="relative flex items-center justify-center">
                    <span 
                      className="absolute w-4 h-4 rounded-full animate-ping opacity-75"
                      style={{ backgroundColor: hub.accent }}
                    />
                    <span 
                      className="w-2.5 h-2.5 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: hub.accent }}
                    />
                  </div>

                  {/* Clean White Floating Pill Card (Exact Match to Screenshot) */}
                  <motion.div
                    className="mt-1.5 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-black/10 shadow-md hover:shadow-lg cursor-pointer transition-all whitespace-nowrap"
                    whileHover={{ scale: 1.08 }}
                  >
                    <span className="text-xs sm:text-sm leading-none">{hub.flag}</span>
                    <span className="text-[11px] sm:text-[12px] font-display font-semibold tracking-tight text-[#0A0A0A]">
                      {hub.name}
                    </span>
                  </motion.div>

                  {/* Interactive Details Tooltip on Hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 sm:w-72 p-3.5 bg-[#0A0A0A] text-white rounded-2xl shadow-2xl border border-white/10 z-50 pointer-events-none text-left"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-base">{hub.flag}</span>
                          <div>
                            <div className="font-display text-xs font-bold text-white leading-tight">
                              {hub.name}
                            </div>
                            <div className="text-[10px] font-mono text-hq-yellow">
                              {hub.city}
                            </div>
                          </div>
                        </div>
                        <p className="font-body text-[11px] text-white/70 font-light leading-relaxed mb-2">
                          {hub.desc}
                        </p>
                        <div className="text-[10px] font-mono text-white/50 pt-1.5 border-t border-white/10">
                          Clients: <span className="text-white/80">{hub.clients}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

        {/* ========================================================
            3. 16 INDIAN STATES EXPLORER BAR (Integrated Below Map)
           ======================================================== */}
        <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-black/10 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-black/10 mb-5">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-hq-yellow" />
              <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wider text-[#0A0A0A]">
                Pan-India Sovereign Reach (16 States)
              </h3>
            </div>
            <div className="text-xs font-mono text-[#0A0A0A]/50">
              National Footprint • Tier 1 & Tier 2 Enterprise Hubs
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {STATES_COVERED.map((state, idx) => (
              <span
                key={idx}
                className="px-3 sm:px-3.5 py-1.5 bg-[#F1F3F5] hover:bg-[#0A0A0A] hover:text-white text-xs font-mono uppercase tracking-wider font-medium text-[#0A0A0A] rounded-lg border border-black/5 transition-all duration-200 cursor-default"
              >
                {state}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

