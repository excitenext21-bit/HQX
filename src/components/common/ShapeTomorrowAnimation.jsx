import React from 'react';

const PODCAST_CHANNELS = [
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/artist/5xj8kbYV5WOiXe7lF9Dr1g',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#1DB954" />
        <path
          d="M16.9 16.4c-.2.3-.6.4-.9.2-2.5-1.5-5.6-1.9-9.3-1-.4.1-.7-.1-.8-.5s.1-.7.5-.8c4-.9 7.5-.5 10.3 1.2.3.2.4.6.2.9zm1.3-2.9c-.2.4-.7.5-1.1.3-2.8-1.7-7.1-2.2-10.4-1.2-.4.1-.9-.1-1-.5-.1-.4.1-.9.5-1 3.8-1.1 8.5-.6 11.7 1.3.4.2.5.7.3 1.1zm.1-3c-3.4-2-9-2.2-12.2-1.2-.5.2-1.1-.1-1.2-.6-.2-.5.1-1.1.6-1.2 3.7-1.1 9.9-.9 13.8 1.4.5.3.6.9.4 1.4-.3.4-.9.5-1.4.2z"
          fill="#0A0A0A"
        />
      </svg>
    )
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@happpinesssamurai1036',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="1.5" y="4.5" width="21" height="15" rx="4" fill="#FF0000" />
        <polygon points="10,8.5 16,12 10,15.5" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/MannyAnchan',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manojsanchan/',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#0A66C2" />
        <path
          d="M7.5 10.2v6.3H5.3v-6.3h2.2zm.1-2.1c0 .7-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2.5-1.2 1.2-1.2 1.2.5 1.2 1.2zm9.9 4.5v3.9h-2.2v-3.6c0-.9-.3-1.5-1.1-1.5-.6 0-1 .4-1.2.8-.1.2-.1.4-.1.6v3.7h-2.2s0-6 0-6.3h2.2v.9c.3-.5.9-1.1 2-1.1 1.5 0 2.6 1 2.6 3z"
          fill="#FFFFFF"
        />
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/happinesssamurai/',
    icon: (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="igGradFooter" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F58529" />
            <stop offset="50%" stopColor="#DD2A7B" />
            <stop offset="100%" stopColor="#8134AF" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="20" height="20" rx="5.5" fill="url(#igGradFooter)" />
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="#FFFFFF" />
      </svg>
    )
  }
];

/**
 * ShapeTomorrowAnimation
 * Pure black podcast subscription banner with low-opacity studio mic background
 * and direct channel links (Spotify, YouTube, LinkedIn, Instagram).
 */
export default function ShapeTomorrowAnimation() {
  return (
    <div className="relative w-full min-h-[38vh] sm:min-h-[42vh] bg-[#0B0B0D] text-white flex items-center justify-center py-14 sm:py-16 px-6 overflow-hidden">
      {/* Top Stepped Yellow Divider: first 30% at 3px height, rest at 1px */}
      <div className="absolute top-0 left-0 right-0 flex items-start pointer-events-none z-20" aria-hidden="true">
        <div className="w-[30%] h-[3px] bg-hq-yellow" />
        <div className="w-[70%] h-[1px] bg-hq-yellow" />
      </div>

      {/* Flipped Studio Microphone Anchored to Extreme Left — Seamlessly Blended Into #0B0B0D */}
      <div
        className="absolute left-0 inset-y-0 h-full pointer-events-none select-none overflow-hidden"
        style={{
          WebkitMaskImage:
            'linear-gradient(to right, rgba(0,0,0,1) 35%, rgba(0,0,0,0.6) 68%, rgba(0,0,0,0) 100%)',
          maskImage:
            'linear-gradient(to right, rgba(0,0,0,1) 35%, rgba(0,0,0,0.6) 68%, rgba(0,0,0,0) 100%)'
        }}
      >
        <img
          src="/images/podcast-mic-bg.jpg"
          alt=""
          width="720"
          height="900"
          aria-hidden="true"
          className="h-full w-auto object-contain object-left -scale-x-100 brightness-90 contrast-125"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight mb-4">
          Subscribe on your favourite Platform
        </h2>

        <p className="font-body text-xs sm:text-sm md:text-base text-white/60 font-light leading-relaxed max-w-xl mx-auto mb-8 sm:mb-10">
          Tune into fortnightly executive dialogues on eudaimonic leadership, resilience, and purposeful living hosted by Manny Anchan.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {PODCAST_CHANNELS.map((ch) => (
            <a
              key={ch.name}
              href={ch.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 text-white/90 hover:text-hq-yellow text-sm sm:text-base font-display font-semibold tracking-wide transition-colors duration-200 py-1"
            >
              <span className="transition-transform duration-200 group-hover:scale-110">{ch.icon}</span>
              <span className="group-hover:text-hq-yellow transition-colors">{ch.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
