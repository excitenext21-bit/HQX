import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  X,
  ArrowUpRight,
  Linkedin,
  Youtube,
  Instagram,
  Radio,
  MessageSquare
} from 'lucide-react';

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    handle: 'HQX Global',
    href: 'https://www.linkedin.com/in/manojsanchan/',
    icon: Linkedin
  },
  {
    name: 'YouTube',
    handle: 'Keynotes & Podcast',
    href: 'https://www.youtube.com/@happpinesssamurai1036',
    icon: Youtube
  },
  {
    name: 'Instagram',
    handle: '@happinesssamurai',
    href: 'https://www.instagram.com/happinesssamurai/',
    icon: Instagram
  },
  {
    name: 'Spotify',
    handle: 'HQX Podcast',
    href: 'https://open.spotify.com/artist/5xj8kbYV5WOiXe7lF9Dr1g',
    icon: Radio
  }
];

export default function ConnectDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Backdrop when drawer is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/45 backdrop-blur-[2px] transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Sticky Right-Edge "Connect" Handle Tab */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Open Connect Drawer"
        aria-expanded={isOpen}
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2.5 py-4 px-2.5 rounded-l-2xl bg-[#0A0A0A]/95 backdrop-blur-md text-white border border-r-0 border-white/15 hover:border-hq-yellow/60 shadow-[-8px_8px_28px_rgba(0,0,0,0.35)] transition-all duration-300 cursor-pointer group ${
          isOpen ? 'translate-x-full opacity-0 pointer-events-none' : 'translate-x-0 opacity-100'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-hq-yellow shadow-[0_0_8px_#FFCD00]" />
        <span
          className="font-display text-[11px] font-bold uppercase tracking-[0.26em] text-white group-hover:text-hq-yellow transition-colors"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Connect
        </span>
        <MessageSquare className="w-3.5 h-3.5 text-hq-yellow/80 group-hover:text-hq-yellow transition-colors" />
      </button>

      {/* Sleek Slide-Out Right Drawer */}
      <aside
        aria-label="Connect with HQX"
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 w-[335px] sm:w-[380px] max-w-[92vw] max-h-[90vh] overflow-y-auto rounded-l-3xl bg-[#0A0A0A] text-white border border-r-0 border-white/15 shadow-[-20px_20px_60px_rgba(0,0,0,0.55)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div className="p-6 sm:p-7">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-5 mb-5 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-hq-yellow" />
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-hq-yellow font-semibold">
                  Direct Desk
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-white leading-tight">
                Connect <span className="text-white/55 font-light">with HQX</span>
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close Connect Drawer"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-hq-yellow hover:text-[#0A0A0A] text-white/80 flex items-center justify-center transition-colors cursor-pointer shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Contact Details (Icon + Value Only) */}
          <div className="space-y-2.5 mb-6">
            <a
              href="tel:+919700100800"
              className="group flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-hq-yellow/40 transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-hq-yellow text-[#0A0A0A] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1 font-display text-sm font-semibold text-white group-hover:text-hq-yellow transition-colors">
                +91 97001 00800
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/35 group-hover:text-hq-yellow transition-colors shrink-0" />
            </a>

            <a
              href="https://wa.me/919800000000"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3.5 p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#25D366]/50 transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.66a11.84 11.84 0 0 0 5.73 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.45-8.42Zm-8.46 18.3h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.76.99 1-3.66-.24-.38a9.86 9.86 0 0 1-1.51-5.24c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.82 9.82 0 0 1 2.9 7c0 5.45-4.44 9.87-9.89 9.87Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.21 5.08 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#25D366]/80 leading-none mb-0.5">
                  WhatsApp
                </div>
                <div className="font-display text-sm font-semibold text-white group-hover:text-[#25D366] transition-colors">
                  +91 98000 00000
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/35 group-hover:text-[#25D366] transition-colors shrink-0" />
            </a>

            <a
              href="mailto:connect@happinesssamurai.com"
              className="group flex items-center gap-3 p-3 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-hq-yellow/40 transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-white/10 text-hq-yellow flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1 font-body text-[11px] sm:text-xs font-medium text-white group-hover:text-hq-yellow transition-colors whitespace-nowrap">
                connect@happinesssamurai.com
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/35 group-hover:text-hq-yellow transition-colors shrink-0" />
            </a>
          </div>

          {/* Social Media Icon Links Only */}
          <div className="mb-6">
            <div className="grid grid-cols-4 gap-2.5">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.name}
                    title={item.name}
                    className="group h-11 rounded-xl bg-white/[0.04] hover:bg-hq-yellow text-hq-yellow hover:text-[#0A0A0A] border border-white/10 hover:border-hq-yellow flex items-center justify-center transition-all"
                  >
                    <Icon className="w-4 h-4 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full bg-hq-yellow hover:bg-white text-[#0A0A0A] font-display font-bold text-xs uppercase tracking-[0.18em] py-3.5 px-5 rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-lg"
          >
            <span>Book Manny Anchan</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </aside>
    </>
  );
}

