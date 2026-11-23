import React from 'react';

export const IMPACTED_INSTITUTION_BADGES = [
  {
    name: 'Healthcare',
    subtitle: 'Clinical & Hospital Systems',
    logo: '/images/logos/healthcare.png'
  },
  {
    name: 'Pharma',
    subtitle: 'Life Sciences & Biotech',
    logo: '/images/logos/pharma.svg'
  },
  {
    name: 'NSG',
    subtitle: 'National Security Guard',
    logo: '/images/logos/nsg.png'
  },
  {
    name: 'Indian Army',
    subtitle: 'Armed Forces Command',
    logo: '/images/logos/indian_army.svg'
  },
  {
    name: 'NACIN',
    subtitle: 'Customs & Narcotics Academy',
    logo: '/images/logos/nacin.png'
  },
  {
    name: 'Government',
    subtitle: 'Public Policy & Ministries',
    logo: '/images/logos/government_of_india.svg'
  },
  {
    name: 'RBI',
    subtitle: 'Reserve Bank of India',
    logo: '/images/logos/rbi.svg'
  },
  {
    name: 'NHRD',
    subtitle: 'National HRD Network',
    logo: '/images/logos/nhrd.svg'
  },
  {
    name: 'FICCI',
    subtitle: 'Apex Industry Chamber',
    logo: '/images/logos/ficci.png'
  },
  {
    name: 'BMC',
    subtitle: 'Brihanmumbai Municipal Corp',
    logo: '/images/logos/bmc.png'
  },
  {
    name: 'IMC',
    subtitle: "Indian Merchants' Chamber",
    logo: '/images/logos/imc.png'
  }
];

// Balanced 2 columns of 6 institutions each
const COLUMN_1_ITEMS = [
  IMPACTED_INSTITUTION_BADGES[0], // Healthcare
  IMPACTED_INSTITUTION_BADGES[2], // NSG
  IMPACTED_INSTITUTION_BADGES[4], // NACIN
  IMPACTED_INSTITUTION_BADGES[6], // RBI
  IMPACTED_INSTITUTION_BADGES[8], // FICCI
  IMPACTED_INSTITUTION_BADGES[10] // IMC
];

const COLUMN_2_ITEMS = [
  IMPACTED_INSTITUTION_BADGES[1], // Pharma
  IMPACTED_INSTITUTION_BADGES[3], // Indian Army
  IMPACTED_INSTITUTION_BADGES[5], // Government
  IMPACTED_INSTITUTION_BADGES[7], // NHRD
  IMPACTED_INSTITUTION_BADGES[9], // BMC
  IMPACTED_INSTITUTION_BADGES[0]  // Healthcare
];

function InstitutionItem({ badge }) {
  return (
    <div className="flex items-center gap-3.5 py-2 px-2.5 rounded-xl hover:bg-white/[0.05] transition-colors duration-200 group shrink-0">
      {/* Clean logo tile with NO border */}
      <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl bg-white flex items-center justify-center p-2 shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200">
        <img 
          src={badge.logo} 
          alt={badge.name} 
          className="w-full h-full object-contain filter contrast-105" 
          loading="lazy"
        />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="font-display font-bold text-sm sm:text-[15px] text-white tracking-tight leading-snug group-hover:text-[#FFCE00] transition-colors truncate">
          {badge.name}
        </span>
        <span className="font-body text-xs text-white/60 font-medium leading-snug truncate mt-0.5">
          {badge.subtitle}
        </span>
      </div>
    </div>
  );
}

export default function StrategicInstitutionsSection({ className = '' }) {
  return (
    <section className={`py-8 sm:py-10 lg:py-12 bg-[#07080B] border-b border-white/10 overflow-hidden relative ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Half screen fit container */}
        <div className="bg-[#111216] rounded-2xl sm:rounded-3xl border border-white/10 p-6 sm:p-8 lg:p-10 shadow-[0_12px_45px_-10px_rgba(0,0,0,0.6)] overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* LEFT HALF: Heading, Sectors & Narrative (No duplicate pills/tags) */}
            <div className="flex flex-col justify-center space-y-4">
              
              {/* Gold status dot & category */}
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFCE00] inline-block animate-pulse shadow-xs" />
                <span className="font-mono text-xs font-bold tracking-[0.22em] text-[#FFCE00] uppercase">
                  Strategic Institutions &amp; Impacted Sectors
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.18]">
                Empowering India&apos;s <span className="text-[#FFCE00]">Apex Commands &amp; Critical Sectors</span>
              </h2>

              {/* Sectors list line */}
              <p className="font-mono text-xs sm:text-sm text-white/75 tracking-wide font-medium leading-relaxed">
                Healthcare &bull; Pharma &bull; Defence &bull; Governance &bull; Central Banking &bull; Industry Apex
              </p>

              {/* Concise impact narrative */}
              <p className="font-body text-xs sm:text-sm text-white/60 leading-relaxed pt-1">
                From frontline armed forces commands and civil service academies to central banking authorities and leading healthcare networks, HQX delivers transformative eudaimonic leadership and executive resilience across India.
              </p>

            </div>

            {/* RIGHT HALF: 2 Vertical Scrolling Columns (Up & Down) */}
            <div className="relative">
              
              {/* Outer vertical viewport (~half screen height: 350px-380px) with top/bottom fade masks */}
              <div className="relative h-[320px] sm:h-[360px] lg:h-[380px] overflow-hidden group/marquee">
                
                {/* Top Fade Gradient */}
                <div className="absolute inset-x-0 top-0 h-14 sm:h-16 bg-gradient-to-b from-[#111216] via-[#111216]/80 to-transparent z-20 pointer-events-none" />
                
                {/* Bottom Fade Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-14 sm:h-16 bg-gradient-to-t from-[#111216] via-[#111216]/80 to-transparent z-20 pointer-events-none" />

                {/* TWO COLUMNS ONLY */}
                <div className="grid grid-cols-2 gap-3 sm:gap-6 h-full">
                  
                  {/* COLUMN 1: Scrolling UP */}
                  <div className="overflow-hidden flex flex-col">
                    <div className="animate-marquee-up flex flex-col gap-2.5 group-hover/marquee:[animation-play-state:paused]">
                      {/* Repeat twice for continuous infinite vertical loop */}
                      {[...COLUMN_1_ITEMS, ...COLUMN_1_ITEMS].map((badge, idx) => (
                        <InstitutionItem key={`col1-${idx}`} badge={badge} />
                      ))}
                    </div>
                  </div>

                  {/* COLUMN 2: Scrolling DOWN */}
                  <div className="overflow-hidden flex flex-col">
                    <div className="animate-marquee-down flex flex-col gap-2.5 group-hover/marquee:[animation-play-state:paused]">
                      {/* Repeat twice for continuous infinite vertical loop */}
                      {[...COLUMN_2_ITEMS, ...COLUMN_2_ITEMS].map((badge, idx) => (
                        <InstitutionItem key={`col2-${idx}`} badge={badge} />
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
