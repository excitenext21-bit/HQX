import React from 'react';

export default function TeamHeroSlider({ faculty = [], onSelectMember }) {
  // All active faculty including Manny Anchan
  const activeFaculty = faculty.filter((f) => f.active !== false);

  // Duplicate for a seamless infinite loop
  const marqueeFaculty = [...activeFaculty, ...activeFaculty];

  return (
    <section 
      className="w-full bg-[#000000] text-white pt-20 sm:pt-24 relative overflow-hidden select-none border-none rounded-none m-0 p-0 h-screen min-h-[640px] max-h-[1080px] flex flex-col justify-between hero-marquee-container"
    >
      <style>{`
        @keyframes heroMarqueeTrack {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-hero-marquee {
          display: flex;
          width: max-content;
          height: 100%;
          animation: heroMarqueeTrack 38s linear infinite;
          will-change: transform;
        }
        .hero-marquee-container:hover .animate-hero-marquee {
          animation-play-state: paused;
        }
      `}</style>

      {/* FULL VIEWPORT CONTINUOUS INFINITE MARQUEE SLIDER */}
      <div className="w-full h-full relative overflow-hidden rounded-none border-none bg-black flex-1">
        <div className="animate-hero-marquee md:-ml-[30px] md:w-[calc(100%+60px)]">
          {marqueeFaculty.map((member, index) => {
            return (
              <div
                key={`${member.id}-${index}`}
                onClick={() => onSelectMember && onSelectMember(member)}
                className="relative cursor-pointer overflow-hidden transition-all duration-500 ease-out flex flex-col justify-end p-6 sm:p-8 md:p-10 group rounded-none border-none md:[transform:skewX(-5deg)] w-[75vw] sm:w-[48vw] md:w-[25vw] min-w-[280px] max-w-[420px] h-full flex-shrink-0"
                style={{ transformOrigin: '50% 50%' }}
              >
                {/* Portrait Background - Zoomed out comfortably, counter-skewed to stay upright */}
                <div 
                  className="absolute inset-0 w-full h-full bg-black rounded-none md:[transform:skewX(5deg)_scale(1.1)] overflow-hidden"
                  style={{ transformOrigin: '50% 50%' }}
                >
                  <div className="w-full h-full relative flex items-start justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.8) 68%, rgba(0,0,0,0) 90%)',
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.8) 68%, rgba(0,0,0,0) 90%)'
                      }}
                      className="w-full h-[88%] sm:h-[90%] md:h-[92%] object-cover object-top transition-all duration-500 ease-out filter grayscale contrast-[1.25] brightness-[0.74] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-[1.03] rounded-none"
                    />
                    {/* Bottom Deep Black Fadeout Gradient to dissolve photo edges seamlessly into bg */}
                    <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black via-black/85 via-black/40 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </div>

                {/* Clean 5px Skewed Divider: Solid Black by default, lights up brand yellow on hover */}
                <div className="hidden md:block absolute top-0 bottom-0 right-0 w-[5px] bg-black group-hover:bg-hq-yellow transition-colors duration-300 z-30 pointer-events-none" />
                <div className="md:hidden absolute bottom-0 left-0 right-0 h-[5px] bg-black group-hover:bg-hq-yellow transition-colors duration-300 z-30 pointer-events-none" />

                {/* Member Name and Clean Details Overlay - Fully visible on left, counter-skewed to remain upright */}
                <div 
                  className="relative z-20 md:[transform:skewX(5deg)] transform transition-transform duration-300 group-hover:-translate-y-2 max-w-sm"
                  style={{ transformOrigin: 'bottom left' }}
                >
                  {/* Name: Reduced 50% in size and font-weight 300 (font-light) */}
                  <h3 className="font-display text-sm sm:text-base lg:text-[16px] font-[300] tracking-widest uppercase text-white mb-2 leading-snug">
                    {member.name}
                  </h3>

                  {/* Accent Yellow Underline Bar */}
                  <div className="h-[2px] w-8 bg-hq-yellow rounded-full mb-2.5 transition-all duration-500 ease-out group-hover:w-16"></div>

                  {/* Clean Role / Title: font-weight 300 */}
                  <p className="font-body text-[11px] sm:text-xs text-white/70 font-[300] line-clamp-2 leading-relaxed">
                    {member.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}