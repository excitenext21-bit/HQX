import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, MapPin, Building2, Users, ArrowUpRight, CheckCircle2, ArrowLeft, ZoomIn, ZoomOut, Sparkles } from 'lucide-react';
import worldDots from '../../data/world_dots.json';
import indiaDots from '../../data/india_dots.json';
import indiaStatesData from '../../data/india_states_data.json';

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

export default function GlobalFootprintMapSection() {
  const [viewMode, setViewMode] = useState('global'); // 'global' | 'india'
  const [activeHub, setActiveHub] = useState(null);
  const [activeState, setActiveState] = useState(null);

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-[#FAF8F5] text-[#0A0A0A] relative overflow-visible border-t border-b border-black/5">
      {/* Subtle Studio Ambient Highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-hq-yellow/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 overflow-visible">
        
        {/* ========================================================
            1. TOP HEADER & METRICS ROW (Exact Standardized Style)
           ======================================================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-10 sm:mb-12">
          
          {/* Left Column: Heading and Narrative */}
          <div className="max-w-xl">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-tight text-[#0A0A0A] leading-[1.1] mb-3">
              Engineered for Global Scale. <br />
              <span className="text-[#666666] font-light">Transform Without Borders.</span>
            </h2>
            <p className="font-body text-xs sm:text-sm text-[#0A0A0A]/60 font-light leading-relaxed">
              Empowering enterprise resilience and leadership vitality across 16 Indian states and 9 sovereign global jurisdictions with localized cultural nuance.
            </p>
          </div>

          {/* Right Column: 3 Horizontal Big Bold Metrics */}
          <div className="flex flex-wrap items-baseline gap-8 sm:gap-10 lg:gap-12 border-t lg:border-t-0 pt-6 lg:pt-0 border-black/10 w-full lg:w-auto">
            <div 
              onClick={() => setViewMode('india')}
              className="cursor-pointer group"
              title="Click to view all 16 Indian states"
            >
              <div className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-[#0A0A0A] group-hover:text-black transition-colors leading-none flex items-center gap-1.5">
                <span>16+</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-hq-yellow/20 text-[#0A0A0A] font-mono font-semibold tracking-normal uppercase text-[10px]">
                  Explore
                </span>
              </div>
              <div className="font-body text-xs text-[#0A0A0A]/60 font-medium mt-1.5 group-hover:text-black transition-colors">
                Indian States Covered
              </div>
            </div>

            <div>
              <div className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-[#0A0A0A] leading-none">
                9
              </div>
              <div className="font-body text-xs text-[#0A0A0A]/60 font-medium mt-1.5">
                Sovereign Global Hubs
              </div>
            </div>

            <div>
              <div className="font-display text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-[#0A0A0A] leading-none">
                100k+
              </div>
              <div className="font-body text-xs text-[#0A0A0A]/60 font-medium mt-1.5">
                Leaders Energized
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================
            2. VIEW TOGGLE BAR: GLOBAL vs INDIA (WITH ZERO CARD BOUNDARIES)
           ======================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-3 border-b border-black/10">
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setViewMode('global'); setActiveState(null); }}
              className={`px-4 py-2 rounded-full text-xs font-display font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                viewMode === 'global'
                  ? 'bg-[#1E1A17] text-white shadow-sm'
                  : 'bg-white hover:bg-black/5 text-black/70 border border-black/10'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Global Footprint (9 Sovereign Hubs)</span>
            </button>

            <button
              onClick={() => setViewMode('india')}
              className={`px-4 py-2 rounded-full text-xs font-display font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                viewMode === 'india'
                  ? 'bg-[#1E1A17] text-white shadow-sm'
                  : 'bg-white hover:bg-black/5 text-black/70 border border-black/10'
              }`}
            >
              <span>🇮🇳</span>
              <span>India Sovereign Reach (16 States)</span>
              {viewMode !== 'india' && (
                <span className="w-2 h-2 rounded-full bg-hq-yellow animate-ping" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#0A0A0A]/60">
            {viewMode === 'global' ? (
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-hq-yellow" />
                <span>Hover country pins for details • Click India to zoom</span>
              </span>
            ) : (
              <button
                onClick={() => { setViewMode('global'); setActiveState(null); }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/15 hover:border-black text-black font-semibold transition-all cursor-pointer shadow-xs"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Zoom Back to World Map</span>
              </button>
            )}
          </div>
        </div>

        {/* ========================================================
            3. OPEN CANVAS DOTTED MATRIX (NO CARD, NO BORDER, OVERFLOW VISIBLE)
           ======================================================== */}
        <div className="relative w-full overflow-visible py-4 sm:py-6 flex items-center justify-center min-h-[460px] md:min-h-[540px]">
          
          <AnimatePresence mode="wait">
            {viewMode === 'global' ? (
              /* ====================================================
                 GLOBAL WORLD DOTTED MAP (OPEN CANVAS)
                 ==================================================== */
              <motion.div
                key="global-map"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative w-full aspect-[2/1] min-h-[360px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[560px] flex items-center justify-center overflow-visible"
              >
                {/* SVG Dotted Matrix Layer (World Dots) */}
                <svg 
                  viewBox="0 0 1000 500" 
                  className="w-full h-full pointer-events-none overflow-visible"
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

                {/* Interactive Floating Pill Pins for Global Hubs */}
                <div className="absolute inset-0 pointer-events-none overflow-visible">
                  {GLOBAL_HUBS.map((hub) => {
                    const isHovered = activeHub?.id === hub.id;
                    const isIndia = hub.id === 'india';
                    // Check if country is in top 35% of map to position tooltip DOWNWARDS
                    const isTopZone = hub.y < 35;

                    return (
                      <div
                        key={hub.id}
                        className="absolute pointer-events-auto transition-transform duration-300"
                        style={{
                          left: `${hub.x}%`,
                          top: `${hub.y}%`,
                          transform: 'translate(-50%, -50%)',
                          zIndex: isHovered ? 90 : (isIndia ? 30 : 20)
                        }}
                        onMouseEnter={() => setActiveHub(hub)}
                        onMouseLeave={() => setActiveHub(null)}
                      >
                        {/* Glowing Beacon Dot on Map */}
                        <div className="relative flex items-center justify-center cursor-pointer">
                          <span 
                            className={`absolute rounded-full opacity-75 ${isIndia ? 'w-5 h-5 animate-ping' : 'w-4 h-4 animate-ping'}`}
                            style={{ backgroundColor: hub.accent }}
                          />
                          <span 
                            className={`rounded-full border-2 border-white shadow-sm ${isIndia ? 'w-3.5 h-3.5 ring-2 ring-hq-yellow' : 'w-2.5 h-2.5'}`}
                            style={{ backgroundColor: hub.accent }}
                          />
                        </div>

                        {/* Clean White Floating Pill Card (Clickable on India to zoom) */}
                        <motion.div
                          onClick={() => {
                            if (isIndia) {
                              setViewMode('india');
                            }
                          }}
                          className={`mt-1.5 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border shadow-md hover:shadow-lg transition-all whitespace-nowrap cursor-pointer ${
                            isIndia 
                              ? 'border-hq-yellow ring-2 ring-hq-yellow/30 font-bold hover:bg-[#1E1A17] hover:text-white' 
                              : 'border-black/10 hover:border-black/30'
                          }`}
                          whileHover={{ scale: 1.08 }}
                        >
                          <span className="text-xs sm:text-sm leading-none">{hub.flag}</span>
                          <span className="text-[11px] sm:text-[12px] font-display font-semibold tracking-tight text-[#0A0A0A] hover:text-inherit">
                            {hub.name}
                          </span>
                          {isIndia && (
                            <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-hq-yellow text-[#0A0A0A] font-bold uppercase tracking-wider ml-0.5">
                              Zoom 16 States ›
                            </span>
                          )}
                        </motion.div>

                        {/* Interactive Details Tooltip on Hover (Opens downwards for top countries so it NEVER cuts off) */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: isTopZone ? -6 : 6, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: isTopZone ? -4 : 4, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className={`absolute left-1/2 -translate-x-1/2 w-64 sm:w-72 p-3.5 bg-[#0A0A0A] text-white rounded-2xl shadow-2xl border border-white/15 z-[100] text-left pointer-events-none ${
                                isTopZone ? 'top-full mt-3' : 'bottom-full mb-3'
                              }`}
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
                              {isIndia && (
                                <div className="mt-2 pt-1.5 border-t border-white/10 text-[10px] font-mono text-hq-yellow flex items-center justify-between font-semibold">
                                  <span>Click pin to zoom into 16 Indian states</span>
                                  <span>›</span>
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ) : (
              /* ====================================================
                 ZOOMED INDIA SOVEREIGN REACH VIEW (16 STATES ORGANIZED)
                 ==================================================== */
              <motion.div
                key="india-map"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative w-full max-w-[680px] aspect-[600/680] min-h-[480px] sm:min-h-[560px] md:min-h-[640px] flex items-center justify-center overflow-visible mx-auto"
              >
                {/* SVG High-Precision Dotted Matrix Layer (1,033 India Coordinates) */}
                <svg 
                  viewBox="0 0 600 680" 
                  className="w-full h-full pointer-events-none overflow-visible"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {indiaDots.map(([x, y], idx) => (
                    <circle
                      key={idx}
                      cx={x}
                      cy={y}
                      r={2.2}
                      fill="#9CA3AF"
                      opacity={0.75}
                    />
                  ))}
                </svg>

                {/* Floating Action Badge to return */}
                <div className="absolute top-2 left-2 z-30">
                  <button
                    onClick={() => { setViewMode('global'); setActiveState(null); }}
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-black/15 shadow-md hover:bg-black hover:text-white transition-all text-xs font-mono font-medium cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to World Map</span>
                  </button>
                </div>

                <div className="absolute top-2 right-2 z-30 hidden sm:block">
                  <div className="px-3.5 py-1.5 rounded-full bg-[#1E1A17] text-white shadow-md text-[11px] font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-hq-yellow animate-pulse" />
                    <span>16 States Active</span>
                  </div>
                </div>

                {/* 16 Interactive State Pins (Precisely Placed on Real Coordinates) */}
                <div className="absolute inset-0 pointer-events-none overflow-visible">
                  {indiaStatesData.map((state) => {
                    const isSelected = activeState?.id === state.id;
                    const isTopZone = state.yPct < 35;
                    const isFarRight = state.xPct > 70;

                    return (
                      <div
                        key={state.id}
                        className="absolute pointer-events-auto transition-transform duration-300"
                        style={{
                          left: `${state.xPct}%`,
                          top: `${state.yPct}%`,
                          transform: 'translate(-50%, -50%)',
                          zIndex: isSelected ? 90 : (state.isHQ ? 40 : 25)
                        }}
                        onClick={() => setActiveState(isSelected ? null : state)}
                        onMouseEnter={() => setActiveState(state)}
                        onMouseLeave={() => {}}
                      >
                        {/* Glowing State Beacon */}
                        <div className="relative flex items-center justify-center cursor-pointer">
                          <span 
                            className={`absolute rounded-full opacity-75 ${state.isHQ ? 'w-5 h-5 bg-hq-yellow animate-ping' : 'w-3.5 h-3.5 bg-black/40 animate-ping'}`}
                          />
                          <span 
                            className={`rounded-full border-2 border-white shadow-sm ${state.isHQ ? 'w-3.5 h-3.5 bg-hq-yellow ring-2 ring-black' : (isSelected ? 'w-3 h-3 bg-hq-yellow ring-2 ring-black' : 'w-2.5 h-2.5 bg-[#1E1A17]')}`}
                          />
                        </div>

                        {/* State Name Pill */}
                        <motion.div
                          className={`mt-1 flex items-center gap-1 backdrop-blur-md px-2 py-0.5 rounded-full border shadow-sm transition-all whitespace-nowrap cursor-pointer ${
                            state.isHQ
                              ? 'bg-[#1E1A17] text-white border-hq-yellow ring-2 ring-hq-yellow/40 text-[10.5px] font-bold'
                              : (isSelected 
                                  ? 'bg-[#1E1A17] text-white border-black text-[10px] font-semibold' 
                                  : 'bg-white/90 text-[#0A0A0A] border-black/10 hover:border-black/40 text-[9.5px] font-medium')
                          }`}
                          whileHover={{ scale: 1.1 }}
                        >
                          <span>{state.shortName}</span>
                          {state.isHQ && (
                            <span className="text-[8px] font-mono px-1 py-0.2 rounded bg-hq-yellow text-black font-extrabold uppercase">
                              HQ
                            </span>
                          )}
                        </motion.div>

                        {/* Interactive Detail Tooltip (Positioned dynamically so it never cuts off) */}
                        <AnimatePresence>
                          {isSelected && (
                            <motion.div
                              initial={{ opacity: 0, y: isTopZone ? -6 : 6, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: isTopZone ? -4 : 4, scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                              className={`absolute p-3.5 bg-[#0A0A0A] text-white rounded-2xl shadow-2xl border border-white/15 z-[100] text-left pointer-events-none w-64 sm:w-72 ${
                                isFarRight 
                                  ? 'right-0 translate-x-4' 
                                  : 'left-1/2 -translate-x-1/2'
                              } ${
                                isTopZone ? 'top-full mt-2' : 'bottom-full mb-2'
                              }`}
                            >
                              <div className="flex items-center justify-between gap-2 mb-1.5 pb-1 border-b border-white/10">
                                <div>
                                  <div className="font-display text-xs font-bold text-white flex items-center gap-1.5">
                                    <span>{state.name}</span>
                                    {state.isHQ && (
                                      <span className="text-[8px] font-mono px-1.5 py-0.2 bg-hq-yellow text-black rounded font-bold uppercase">
                                        National HQ
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-[10px] font-mono text-hq-yellow">
                                    {state.city}
                                  </div>
                                </div>
                                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                                  {state.category.split('&')[0]}
                                </span>
                              </div>

                              <div className="mb-2">
                                <div className="text-[9px] font-mono uppercase tracking-wider text-white/40 mb-0.5">
                                  What Was Organized:
                                </div>
                                <p className="font-body text-[11px] text-white/80 font-normal leading-relaxed">
                                  {state.programs}
                                </p>
                              </div>

                              <div className="text-[10px] font-mono text-white/50 pt-1.5 border-t border-white/10">
                                Key Clients / Bastions: <br />
                                <span className="text-white/90">{state.clients}</span>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
