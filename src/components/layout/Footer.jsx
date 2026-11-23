import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useData } from '../../context/DataContext';
import BrandLogo from '../common/BrandLogo';
import ShapeTomorrowAnimation from '../common/ShapeTomorrowAnimation';

export default function Footer() {
  const { addInquiry } = useData();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickInquiry = (e) => {
    e.preventDefault();
    if (!email) return;

    addInquiry({
      name: 'Quick Subscriber',
      company: 'Corporate Prospect',
      email: email,
      phone: '+91 97001 00800 (Direct Line)',
      program: 'General Transformation Inquiry',
      headcount: 'Enterprise',
      preferredDate: 'Immediate',
      message: 'Lead captured from Footer Quick Inquire prompt.'
    });

    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <footer id="contact" className="bg-hq-yellow text-hq-black relative overflow-hidden">
      {/* Background Brand Logo Watermark (Stuck to Bottom-Right Corner, 15% Smaller) */}
      <div className="absolute right-0 bottom-0 pointer-events-none pr-3 sm:pr-6 pb-2 overflow-visible opacity-10 md:opacity-[0.12] transition-all">
        <BrandLogo 
          className="w-[255px] sm:w-[390px] md:w-[527px] lg:w-[646px] h-auto" 
          textColor="#000000" 
          yellowFill="rgba(0,0,0,0.12)"
          swooshFill="#000000"
        />
      </div>

      {/* Podcast Platform Subscription Banner */}
      <section className="w-full relative z-10 p-0 m-0">
        <ShapeTomorrowAnimation />
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pb-8 sm:pb-10 pt-10 sm:pt-12">
        {/* Main Asymmetric Placement Row: Left Quote/Ethos + Right Stacked Heading & 2-Col Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start pb-10 sm:pb-12 border-b border-hq-black/20 text-left">
          {/* Left: Bold Statement + Attribution */}
          <div className="lg:col-span-5">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight leading-[1.08] text-hq-black mb-3">
              Feel Better. Work Better. <br />
              Live Better.
            </h3>
            <p className="inline-flex items-center gap-2.5 font-body text-xs sm:text-sm text-hq-black/80 font-medium">
              <span className="inline-block w-4 h-[2px] bg-hq-black/80" aria-hidden="true" />
              <span>Manny Anchan</span>
            </p>
          </div>

          {/* Right: Stacked Label + 2-Column Compact Links with Arrow */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row sm:items-start lg:justify-end gap-8 sm:gap-12">
            <Link
              to="/contact"
              className="group font-display text-lg sm:text-xl font-extrabold uppercase leading-[1.05] tracking-tight text-hq-black shrink-0 inline-flex items-end gap-2 hover:opacity-70 transition-opacity cursor-pointer"
              aria-label="Connect With HQX — Go to Contact page"
            >
              <span>
                Connect <br />
                With <br />
                HQX
              </span>
              <span className="text-sm font-bold transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">&#8599;</span>
            </Link>

            <div className="grid grid-cols-2 gap-x-10 sm:gap-x-14 gap-y-2.5 font-body text-xs sm:text-[15px] text-hq-black/85">
              <Link to="/about-us" className="inline-flex items-center gap-1.5 hover:opacity-60 transition-opacity font-medium">
                <span>About Us</span>
                <span className="text-[10px]">&#8599;</span>
              </Link>
              <Link to="/happyu-app" className="inline-flex items-center gap-1.5 hover:opacity-60 transition-opacity font-medium">
                <span>HappyU App</span>
                <span className="text-[10px]">&#8599;</span>
              </Link>
              <Link to="/leadership-deep-dive" className="inline-flex items-center gap-1.5 hover:opacity-60 transition-opacity font-medium">
                <span>Leadership Deep Dive</span>
                <span className="text-[10px]">&#8599;</span>
              </Link>
              <Link to="/micro-courses" className="inline-flex items-center gap-1.5 hover:opacity-60 transition-opacity font-medium">
                <span>Micro Courses</span>
                <span className="text-[10px]">&#8599;</span>
              </Link>
              <Link to="/engaging-workshops" className="inline-flex items-center gap-1.5 hover:opacity-60 transition-opacity font-medium">
                <span>Engaging Workshops</span>
                <span className="text-[10px]">&#8599;</span>
              </Link>
              <Link to="/podcast" className="inline-flex items-center gap-1.5 hover:opacity-60 transition-opacity font-medium">
                <span>HQX Podcast</span>
                <span className="text-[10px]">&#8599;</span>
              </Link>
              <Link to="/books" className="inline-flex items-center gap-1.5 hover:opacity-60 transition-opacity font-medium">
                <span>Books (2020&ndash;2025)</span>
                <span className="text-[10px]">&#8599;</span>
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-1.5 hover:opacity-60 transition-opacity font-semibold">
                <span>Book Manny Anchan</span>
                <span className="text-[10px]">&#8599;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Utility & Legal Bar */}
        <div className="w-full flex flex-col md:grid md:grid-cols-3 items-start md:items-center gap-4 font-mono text-[11px] sm:text-[13.5px] tracking-normal uppercase pt-6 text-hq-black/80">
          {/* Left: Website Concept */}
          <div className="justify-self-start">
            <span>
              Website Concept &ndash;{' '}
              <a
                href="https://excitetemplate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline decoration-hq-black/50 underline-offset-4 hover:opacity-60 transition-opacity"
              >
                Excite Template
              </a>
            </span>
          </div>

          {/* Center: Copyright */}
          <div className="md:text-center md:justify-self-center">
            <span>&copy; {new Date().getFullYear()} &bull; Happiness Quotient Global</span>
          </div>

          {/* Right: Social Icons + Top */}
          <div className="flex items-center gap-x-5 sm:gap-x-6 gap-y-2 md:justify-self-end">
            <a
              href="https://x.com/MannyAnchan"
              target="_blank"
              rel="noreferrer"
              className="text-hq-black hover:opacity-60 transition-opacity"
              aria-label="X (Twitter)"
            >
              <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/manojsanchan/"
              target="_blank"
              rel="noreferrer"
              className="text-hq-black hover:opacity-60 transition-opacity"
              aria-label="LinkedIn"
            >
              <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.84 6.72a1.61 1.61 0 1 0 0 3.22 1.61 1.61 0 0 0 0-3.22z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@happpinesssamurai1036"
              target="_blank"
              rel="noreferrer"
              className="text-hq-black hover:opacity-60 transition-opacity"
              aria-label="YouTube"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/happinesssamurai/"
              target="_blank"
              rel="noreferrer"
              className="text-hq-black hover:opacity-60 transition-opacity"
              aria-label="Instagram"
            >
              <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a
              href="https://open.spotify.com/artist/5xj8kbYV5WOiXe7lF9Dr1g"
              target="_blank"
              rel="noreferrer"
              className="text-hq-black hover:opacity-60 transition-opacity"
              aria-label="Spotify"
            >
              <svg className="w-[17px] h-[17px] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </a>
            <span className="hidden sm:inline-block opacity-30 text-xs">&bull;</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:opacity-60 transition-opacity font-bold cursor-pointer"
              aria-label="Back to top"
            >
              Top &uarr;
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
