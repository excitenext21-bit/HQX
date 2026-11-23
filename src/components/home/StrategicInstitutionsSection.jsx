import React from 'react';

export const IMPACTED_INSTITUTION_BADGES = [
  {
    name: 'Healthcare',
    subtitle: 'Clinical & Hospital Systems',
    logo: '/images/logos/healthcare.png',
    tag: 'Clinical Systems'
  },
  {
    name: 'Pharma',
    subtitle: 'Life Sciences & Biotech',
    logo: '/images/logos/pharma.svg',
    tag: 'Life Sciences'
  },
  {
    name: 'NSG',
    subtitle: 'National Security Guard',
    logo: '/images/logos/nsg.png',
    tag: 'Elite Counter-Terror'
  },
  {
    name: 'Indian Army',
    subtitle: 'Armed Forces Command',
    logo: '/images/logos/indian_army.svg',
    tag: 'Armed Forces Command'
  },
  {
    name: 'NACIN',
    subtitle: 'Customs & Narcotics Academy',
    logo: '/images/logos/nacin.png',
    tag: 'Civil Services'
  },
  {
    name: 'Government',
    subtitle: 'Public Policy & Ministries',
    logo: '/images/logos/government_of_india.svg',
    tag: 'Governance'
  },
  {
    name: 'RBI',
    subtitle: 'Reserve Bank of India',
    logo: '/images/logos/rbi.svg',
    tag: 'Central Banking'
  },
  {
    name: 'NHRD',
    subtitle: 'National HRD Network',
    logo: '/images/logos/nhrd.svg',
    tag: 'People Ecosystem'
  },
  {
    name: 'FICCI',
    subtitle: 'Apex Industry Chamber',
    logo: '/images/logos/ficci.png',
    tag: 'Industry Apex'
  },
  {
    name: 'BMC',
    subtitle: 'Brihanmumbai Municipal Corp',
    logo: '/images/logos/bmc.png',
    tag: 'Civic Governance'
  },
  {
    name: 'IMC',
    subtitle: "Indian Merchants' Chamber",
    logo: '/images/logos/imc.png',
    tag: 'Commerce & Trade'
  }
];

const SECTORS = [
  'Healthcare',
  'Pharma',
  'Defence',
  'Governance',
  'Central Banking',
  'Industry Apex'
];

// Distribute items across the 3 vertical columns for balanced visual variety
const COLUMN_1_ITEMS = [
  IMPACTED_INSTITUTION_BADGES[0], // Healthcare
  IMPACTED_INSTITUTION_BADGES[3], // Indian Army
  IMPACTED_INSTITUTION_BADGES[6], // RBI
  IMPACTED_INSTITUTION_BADGES[9]  // BMC
];

const COLUMN_2_ITEMS = [
  IMPACTED_INSTITUTION_BADGES[1], // Pharma
  IMPACTED_INSTITUTION_BADGES[4], // NACIN
  IMPACTED_INSTITUTION_BADGES[7], // NHRD
  IMPACTED_INSTITUTION_BADGES[10] // IMC
];

const COLUMN_3_ITEMS = [
  IMPACTED_INSTITUTION_BADGES[2], // NSG
  IMPACTED_INSTITUTION_BADGES[5], // Government
  IMPACTED_INSTITUTION_BADGES[8], // FICCI
  IMPACTED_INSTITUTION_BADGES[0]  // Healthcare
];

function InstitutionCard({ badge }) {
  return (
    <div className="bg-[#181920] hover:bg-[#20222B] border border-white/10 hover:border-[#FFCE00]/50 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3 shrink-0">
      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-white border border-white/10 flex items-center justify-center p-1.5 sm:p-2 shrink-0 shadow-xs group-hover:scale-105 transition-transform">
        <img 
          src={badge.logo} 
          alt={badge.name} 
          className="w-full h-full object-contain filter contrast-105" 
          loading="lazy"
        />
      </div>
      <div className="flex flex-col min-w-0 overflow-hidden">
        <span className="font-display font-bold text-xs sm:text-sm text-white tracking-tight leading-snug group-hover:text-[#FFCE00] transition-colors truncate">
          {badge.name}
        </span>
        <span className="font-body text-[10px] sm:text-[11px] md:text-xs text-white/60 font-medium leading-tight truncate mt-0.5">
          {badge.subtitle}
        </span>
      </div>
    </div>
  );
}

export default function StrategicInstitutionsSection({ className = '' }) {
  return (
    <section className={`py-12 sm:py-16 md:py-20 bg-[#07080B] border-b border-white/10 overflow-hidden relative ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="bg-[#111216] rounded-2xl sm:rounded-3xl border border-white/10 p-6 sm:p-8 lg:p-10 shadow-[0_12px_45px_-10px_rgba(0,0,0,0.6)] overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Headings, Sectors & Narrative */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
              
              {/* Badge indicator */}
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFCE00] inline-block animate-pulse shadow-xs" />
                <span className="font-mono text-[11px] sm:text-xs font-bold tracking-[0.22em] text-[#FFCE00] uppercase">
                  National Footprint & Trust
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                Strategic Institutions &amp; <span className="text-[#FFCE00]">Impacted Sectors</span>
              </h2>

              {/* Sub-headline line from image */}
              <p className="font-mono text-xs sm:text-[13px] text-white/70 tracking-wide font-medium leading-relaxed">
                Healthcare &bull; Pharma &bull; Defence &bull; Governance &bull; Central Banking &bull; Industry Apex
              </p>

              {/* Narrative description */}
              <p className="font-body text-xs sm:text-sm text-white/60 leading-relaxed">
                Empowering India&apos;s premier defence commands, statutory financial regulators, civil service academies, and leading clinical systems through human flourishing, executive resilience, and eudaimonic leadership.
              </p>

              {/* Sector Tag Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {SECTORS.map((sector, sIdx) => (
                  <span 
                    key={sIdx}
                    className="font-mono text-[10px] sm:text-[11px] tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#181920] border border-white/10 text-white/80 font-semibold"
                  >
                    {sector}
                  </span>
                ))}
              </div>

              {/* Key Quick Highlight */}
              <div className="pt-2 flex items-center gap-6 border-t border-white/10 text-xs font-mono text-white/60">
                <div>
                  <span className="text-white font-bold font-display text-lg">11+</span>
                  <span className="block text-[10px] uppercase tracking-wider text-white/50">Core Sectors</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="text-white font-bold font-display text-lg">Pan-India</span>
                  <span className="block text-[10px] uppercase tracking-wider text-white/50">Command Reach</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div>
                  <span className="text-[#FFCE00] font-bold font-display text-lg">100%</span>
                  <span className="block text-[10px] uppercase tracking-wider text-white/50">Institutional Trust</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: 3 Vertical Scrolling Columns */}
            <div className="lg:col-span-7 relative">
              
              {/* Outer vertical viewport with top and bottom fade masks */}
              <div className="relative h-[380px] sm:h-[430px] md:h-[480px] overflow-hidden rounded-xl sm:rounded-2xl bg-[#0D0E12] border border-white/5 p-3 sm:p-4 group/marquee">
                
                {/* Top Fade Gradient */}
                <div className="absolute inset-x-0 top-0 h-16 sm:h-20 bg-gradient-to-b from-[#0D0E12] via-[#0D0E12]/80 to-transparent z-20 pointer-events-none" />
                
                {/* Bottom Fade Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#0D0E12] via-[#0D0E12]/80 to-transparent z-20 pointer-events-none" />

                {/* 3 Columns Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3.5 h-full">
                  
                  {/* COLUMN 1: Scrolling UP */}
                  <div className="overflow-hidden flex flex-col">
                    <div className="animate-marquee-up flex flex-col gap-2.5 sm:gap-3.5 group-hover/marquee:[animation-play-state:paused]">
                      {/* Repeat twice for continuous infinite vertical loop */}
                      {[...COLUMN_1_ITEMS, ...COLUMN_1_ITEMS].map((badge, idx) => (
                        <InstitutionCard key={`col1-${idx}`} badge={badge} />
                      ))}
                    </div>
                  </div>

                  {/* COLUMN 2: Scrolling DOWN */}
                  <div className="overflow-hidden flex flex-col">
                    <div className="animate-marquee-down flex flex-col gap-2.5 sm:gap-3.5 group-hover/marquee:[animation-play-state:paused]">
                      {/* Repeat twice for continuous infinite vertical loop */}
                      {[...COLUMN_2_ITEMS, ...COLUMN_2_ITEMS].map((badge, idx) => (
                        <InstitutionCard key={`col2-${idx}`} badge={badge} />
                      ))}
                    </div>
                  </div>

                  {/* COLUMN 3: Scrolling UP */}
                  <div className="overflow-hidden flex flex-col">
                    <div className="animate-marquee-up-alt flex flex-col gap-2.5 sm:gap-3.5 group-hover/marquee:[animation-play-state:paused]">
                      {/* Repeat twice for continuous infinite vertical loop */}
                      {[...COLUMN_3_ITEMS, ...COLUMN_3_ITEMS].map((badge, idx) => (
                        <InstitutionCard key={`col3-${idx}`} badge={badge} />
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
