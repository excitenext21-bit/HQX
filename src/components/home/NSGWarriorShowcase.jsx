import React from 'react';

function IndiaFlag({ className = "w-6 h-4 sm:w-7 sm:h-4.5" }) {
  return (
    <span className={`inline-flex items-center align-middle mx-1.5 shadow-sm rounded-xs overflow-hidden shrink-0 border border-white/20 ${className}`}>
      <svg viewBox="0 0 900 600" className="w-full h-full block">
        {/* Saffron band */}
        <rect width="900" height="200" fill="#FF9933" />
        {/* White band */}
        <rect y="200" width="900" height="200" fill="#FFFFFF" />
        {/* Green band */}
        <rect y="400" width="900" height="200" fill="#138808" />
        {/* Ashoka Chakra */}
        <circle cx="450" cy="300" r="80" fill="none" stroke="#000080" strokeWidth="12" />
        <circle cx="450" cy="300" r="16" fill="#000080" />
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          const x2 = 450 + 80 * Math.cos(angle);
          const y2 = 300 + 80 * Math.sin(angle);
          return (
            <line
              key={i}
              x1="450"
              y1="300"
              x2={x2}
              y2={y2}
              stroke="#000080"
              strokeWidth="5"
            />
          );
        })}
      </svg>
    </span>
  );
}

export default function NSGWarriorShowcase() {
  return (
    <section 
      id="nsg-warrior" 
      className="section-reveal py-16 sm:py-20 md:py-24 bg-[#07080B] text-white border-b border-white/10 relative overflow-hidden"
    >
      {/* Ambient Tactical Atmosphere Lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-hq-yellow/[0.04] rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 left-1/4 w-[500px] h-[500px] bg-hq-yellow/[0.03] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT: Headline & Sharp, Unrounded Authentic Stage Photograph */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            
            {/* Headline placed directly above image */}
            <div>
              <h2 className="font-display text-base sm:text-lg md:text-xl lg:text-[23px] font-bold tracking-tight text-white leading-[1.25]">
                The Inner Strength of a Warrior <IndiaFlag className="w-5 h-3.5" /> <br className="hidden sm:inline" />
                <span className="text-hq-yellow">HQx Global &times; National Security Guard</span>
              </h2>
            </div>

            {/* Sharp stage photograph with no rounded corners */}
            <div className="relative overflow-hidden border border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] group">
              <img 
                src="/images/nsg-warrior-stage.jpg" 
                alt="Manny Anchan leading Mental Wellness - The Inner Strength of a Warrior for NSG Black Cat Commandos" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-5 text-left pointer-events-none">
                <span className="font-mono text-[11px] sm:text-xs text-white/80 bg-black/70 backdrop-blur-md px-3 py-1 border border-white/10">
                  National Security Guard Head Base &bull; Manesar
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Minimalist Narrative Content */}
          <div className="lg:col-span-6 flex flex-col space-y-5 lg:pt-1">
            <div className="space-y-4 font-body text-sm sm:text-base leading-relaxed" style={{ color: '#F3F4F6' }}>
              <p style={{ color: '#F3F4F6', margin: 0, lineHeight: 1.8 }}>
                It was an honour to lead a four-hour mental wellness (in person) workshop for the{' '}
                <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>
                  Elite Black Cat commandos
                </strong>{' '}
                of the NSG at Manesar head base (plus via online for personnel stationed across the country) alongside{' '}
                <strong style={{ color: '#FFCC00', fontWeight: 700 }}>
                  Maj Anil Kumar, Shaurya Chakra (Retd.)
                </strong>.
              </p>

              <p style={{ color: '#F3F4F6', margin: 0, lineHeight: 1.8 }}>
                We explored how to stay composed under pressure, recover after demanding situations, and build daily habits that support mental well-being. Through{' '}
                <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>
                  Ikigai
                </strong>, we reflected on the sense of purpose that sustains us in service and in life.
              </p>

              <p style={{ color: '#F3F4F6', margin: 0, lineHeight: 1.8 }}>
                As we approach the 18th anniversary of 26/11, we remember the lives lost and honour the courage of those who answered the call. Contributing to the well-being of those who serve the nation was a privilege for all of us at HQx.
              </p>
            </div>

            {/* Salutation */}
            <div className="pt-4 border-t border-white/10 flex items-center">
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-hq-yellow tracking-wider flex items-center">
                Jai Hind. <IndiaFlag />
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
