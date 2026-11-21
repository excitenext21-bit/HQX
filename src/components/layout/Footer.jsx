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
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-[10px] sm:text-[15px] tracking-[0.2em] uppercase pt-6 text-hq-black/80">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <span>&copy; {new Date().getFullYear()} &bull; Happiness Quotient Global</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
            <a href="https://x.com/MannyAnchan" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">X (Twitter)</a>
            <a href="https://www.linkedin.com/in/manojsanchan/" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">LinkedIn</a>
            <a href="https://www.youtube.com/@happpinesssamurai1036" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">YouTube</a>
            <a href="https://www.instagram.com/happinesssamurai/" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">Instagram</a>
            <a href="https://open.spotify.com/artist/5xj8kbYV5WOiXe7lF9Dr1g" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">Spotify</a>
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
