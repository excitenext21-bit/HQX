import React from 'react';
import { Shield, Target, Compass, HeartHandshake, Award } from 'lucide-react';

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Editorial Story & Commemoration */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Headlines */}
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1] flex items-center flex-wrap">
                The Inner Strength of a Warrior <IndiaFlag />
              </h2>
              <p className="font-display text-xl sm:text-2xl text-hq-yellow font-semibold tracking-wide mt-2">
                HQx Global &times; National Security Guard
              </p>
            </div>

            {/* Narrative Paragraphs with forced bright contrast & elevated dark cards */}
            <div className="space-y-4 font-body text-sm sm:text-base leading-relaxed" style={{ color: '#F3F4F6' }}>
              <div 
                className="p-5 sm:p-6 rounded-2xl bg-[#13151B] border border-white/10 shadow-lg"
                style={{ color: '#F3F4F6' }}
              >
                <p style={{ color: '#F3F4F6', margin: 0, lineHeight: 1.7 }}>
                  It was an honour to lead a four-hour mental wellness (in person) workshop for the{' '}
                  <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>
                    Elite Black Cat commandos
                  </strong>{' '}
                  of the NSG at Manesar head base (plus via online for personnel stationed across the country) alongside{' '}
                  <strong style={{ color: '#FFCC00', fontWeight: 700 }}>
                    Maj Anil Kumar, Shaurya Chakra (Retd.)
                  </strong>.
                </p>
              </div>

              <div 
                className="p-5 sm:p-6 rounded-2xl bg-[#13151B] border border-white/10 shadow-lg"
                style={{ color: '#F3F4F6' }}
              >
                <p style={{ color: '#F3F4F6', margin: 0, lineHeight: 1.7 }}>
                  We explored how to stay composed under pressure, recover after demanding situations, and build daily habits that support mental well-being. Through{' '}
                  <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>
                    Ikigai
                  </strong>, we reflected on the sense of purpose that sustains us in service and in life.
                </p>
              </div>

              <div 
                className="p-5 sm:p-6 rounded-2xl bg-[#13151B] border-l-4 border-l-hq-yellow border-t border-r border-b border-white/10 shadow-lg"
                style={{ color: '#F3F4F6' }}
              >
                <blockquote 
                  className="italic" 
                  style={{ color: 'rgba(255, 255, 255, 0.94)', margin: 0, lineHeight: 1.7 }}
                >
                  &ldquo;As we approach the 18th anniversary of 26/11, we remember the lives lost and honour the courage of those who answered the call. Contributing to the well-being of those who serve the nation was a privilege for all of us at HQx.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Key Focus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#111216] border border-white/5 flex items-start gap-3">
                <Target className="w-5 h-5 text-hq-yellow shrink-0 mt-0.5" />
                <div>
                  <span className="block font-display font-bold text-xs uppercase text-white">Composure</span>
                  <span className="text-[11px] font-body text-white/60">Poise under extreme operational stress</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111216] border border-white/5 flex items-start gap-3">
                <Shield className="w-5 h-5 text-hq-yellow shrink-0 mt-0.5" />
                <div>
                  <span className="block font-display font-bold text-xs uppercase text-white">Recovery</span>
                  <span className="text-[11px] font-body text-white/60">Restorative habits post-mission</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#111216] border border-white/5 flex items-start gap-3">
                <Compass className="w-5 h-5 text-hq-yellow shrink-0 mt-0.5" />
                <div>
                  <span className="block font-display font-bold text-xs uppercase text-white">Ikigai</span>
                  <span className="text-[11px] font-body text-white/60">Moral clarity & sustained purpose</span>
                </div>
              </div>
            </div>

            {/* Salutation */}
            <div className="pt-2 flex items-center justify-between border-t border-white/10">
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-hq-yellow tracking-wider flex items-center">
                Jai Hind. <IndiaFlag />
              </span>
              <span className="font-mono text-xs text-white/50 tracking-wider">
                HQx Special Operations Wellness Division
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: Commemorative Tactical Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-[#111216] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-[0_12px_45px_-10px_rgba(0,0,0,0.7)] relative overflow-hidden">
              
              {/* Subtle Gold Edge Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-hq-yellow/10 rounded-full blur-2xl pointer-events-none" />

              {/* NSG Commando Official Crest */}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-black/60 border border-hq-yellow/30 p-3 flex items-center justify-center shadow-lg mb-5 group hover:border-hq-yellow transition-colors">
                  <img 
                    src="/images/logos/nsg.png" 
                    alt="National Security Guard (NSG) Black Cats Insignia" 
                    className="w-full h-full object-contain filter contrast-110 drop-shadow-[0_4px_12px_rgba(255,204,0,0.3)]"
                    loading="lazy"
                  />
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-hq-yellow/15 border border-hq-yellow/30 font-mono text-[11px] text-hq-yellow font-bold uppercase tracking-wider mb-2">
                  <Award className="w-3.5 h-3.5 text-hq-yellow" />
                  Elite Black Cat Commandos
                </span>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                  National Security Guard
                </h3>
                <p className="font-mono text-xs text-white/50 tracking-wider mt-1">
                  Sarvatra Sarvottam Suraksha
                </p>
              </div>

              {/* Workshop Parameters List */}
              <div className="mt-6 pt-5 border-t border-white/10 space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-white/50">Location:</span>
                  <span className="text-white font-semibold">Manesar Base &bull; Pan-India</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-white/50">Curriculum:</span>
                  <span className="text-hq-yellow font-semibold">4-Hour Masterclass</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-white/50">Faculty Lead:</span>
                  <span className="text-white font-semibold">Manny Anchan (Founder, HQx)</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-white/50">Special Guest:</span>
                  <span className="text-white font-semibold">Maj Anil Kumar, SC (Retd.)</span>
                </div>
              </div>

              {/* Commemorative Footer */}
              <div className="mt-6 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                <HeartHandshake className="w-5 h-5 text-hq-yellow shrink-0" />
                <span className="font-body text-[11px] text-white/70 leading-snug">
                  Honouring the brave souls of 26/11 and dedicating our efforts to frontline national defense.
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
