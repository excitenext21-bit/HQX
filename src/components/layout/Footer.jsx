import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Phone, Mail, MapPin, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useData } from '../../context/DataContext';
import BrandLogo from '../common/BrandLogo';

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
    <footer id="contact" className="section-reveal bg-hq-yellow text-hq-black pt-20 md:pt-24 pb-6 sm:pb-8 relative overflow-hidden">
      {/* Background Brand Logo Watermark (Pushed UP and fully visible without bottom clipping) */}
      <div className="absolute right-0 bottom-16 sm:bottom-20 md:bottom-24 select-none pointer-events-none pr-4 sm:pr-8 md:pr-12 overflow-visible opacity-10 md:opacity-[0.12] transition-all">
        <BrandLogo 
          className="w-[300px] sm:w-[460px] md:w-[620px] lg:w-[760px] h-auto" 
          textColor="#000000" 
          yellowFill="rgba(0,0,0,0.12)"
          swooshFill="#000000"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center relative z-10">
        <div className="mb-8">
          <BrandLogo className="h-12 md:h-14 w-auto" textColor="#0A0A0A" />
        </div>

        <blockquote className="font-serif italic text-xl md:text-2xl mb-4 tracking-wide text-hq-black/80">
          "The Future of Work is Eudaimonic"
        </blockquote>

        <h2 className="font-display text-6xl sm:text-7xl md:text-[8rem] tracking-tighter leading-[0.88] mb-8 font-semibold">
          Shape <br />Tomorrow
        </h2>

        <p className="font-body text-xl md:text-[22px] font-light mb-10 max-w-xl text-hq-black/85 leading-relaxed">
          Ready to integrate the Functional Enhancement Model into your organization? 
          Connect with Manny Anchan directly.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-wrap gap-4 sm:gap-5 justify-center items-center my-8 mb-16">
          <Link 
            to="#contact" 
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center bg-hq-black text-hq-white font-display font-semibold text-[13px] uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-hq-black transition-all shadow-xl hover:-translate-y-0.5"
          >
            Book Corporate Session Now
          </Link>
          <a 
            href="tel:+919700100800" 
            className="inline-flex items-center justify-center bg-white text-hq-black border border-hq-black font-display font-semibold text-[13px] uppercase tracking-widest px-8 py-4 rounded-full hover:bg-hq-black hover:text-white transition-all shadow-md hover:-translate-y-0.5"
          >
            CALL: +91 97001 00800
          </a>
        </div>

        {/* Direct Contact Bar (+10% Text Size) */}
        <div className="w-full bg-hq-black text-hq-white p-8 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-16 shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-hq-yellow/10 flex items-center justify-center text-hq-yellow shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase font-display tracking-widest text-hq-white/50">Direct Priority Hotline</div>
              <a href="tel:+919700100800" className="font-display text-[20px] text-hq-yellow hover:underline tracking-tight font-semibold">
                +91 97001 00800
              </a>
              <div className="text-[13.5px] text-hq-white/60 font-light mt-0.5">Corporate Bookings & Retainers</div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-hq-yellow/10 flex items-center justify-center text-hq-yellow shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase font-display tracking-widest text-hq-white/50">Official Inquiries</div>
              <a href="mailto:connect@happinesssamurai.com" className="font-display text-[20px] text-hq-white hover:text-hq-yellow hover:underline tracking-tight">
                connect@happinesssamurai.com
              </a>
              <div className="text-[13.5px] text-hq-white/60 font-light mt-0.5">Keynotes & Workshop Inquiries</div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-hq-yellow/10 flex items-center justify-center text-hq-yellow shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[11px] uppercase font-display tracking-widest text-hq-white/50">Registered Headquarters</div>
              <div className="font-body text-[13.5px] text-hq-white/90 leading-tight">
                Happiness Quotient Global Pvt Ltd<br />
                203/B Koteshwar Palace, Andheri East, Mumbai
              </div>
              <div className="text-[11px] font-mono text-hq-white/50 mt-1">GSTIN: 27AAFCH1083G1ZP</div>
            </div>
          </div>
        </div>

        {/* Site Map Columns (+10% Text Size - Sleek compact vertical rhythm) */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-left py-8 sm:py-9 border-t border-b border-hq-black/20 text-[13.5px] tracking-wider uppercase font-display">
          <div>
            <div className="font-bold text-[15.5px] mb-4 text-hq-black">About & Ethos</div>
            <ul className="space-y-2.5 font-body text-[13.5px] normal-case text-hq-black/80">
              <li><Link to="#reasons-section" onClick={() => document.getElementById('reasons-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline font-semibold">About Us</Link></li>
              <li><Link to="/#top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:underline">Founder (Manny Anchan)</Link></li>
              <li><Link to="#team-section" onClick={() => document.getElementById('team-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">Our Team & Faculty</Link></li>
              <li><Link to="#reasons-section" onClick={() => document.getElementById('reasons-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">Why HQX</Link></li>
              <li><Link to="#worklife-section" onClick={() => document.getElementById('worklife-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">Eudaimonic Transformation</Link></li>
              <li><Link to="#reasons-section" onClick={() => document.getElementById('reasons-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">5 Well-Being Pillars</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-[15.5px] mb-4 text-hq-black">Corporate Interventions</div>
            <ul className="space-y-2.5 font-body text-[13.5px] normal-case text-hq-black/80">
              <li><Link to="#key-themes-section" onClick={() => document.getElementById('key-themes-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">Leadership Deep Dive</Link></li>
              <li><Link to="#key-themes-section" onClick={() => document.getElementById('key-themes-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">Engaging Workshops</Link></li>
              <li><Link to="#key-themes-section" onClick={() => document.getElementById('key-themes-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">Keynotes & Friday Talks</Link></li>
              <li><Link to="#contact" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">Custom Executive Coaching</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-[15.5px] mb-4 text-hq-black">Digital Offerings</div>
            <ul className="space-y-2.5 font-body text-[13.5px] normal-case text-hq-black/80">
              <li><Link to="#benefits-section" onClick={() => document.getElementById('benefits-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">HappyU App (iOS / Android)</Link></li>
              <li><Link to="#benefits-section" onClick={() => document.getElementById('benefits-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">100-Day Micro Courses</Link></li>
              <li><Link to="#benefits-section" onClick={() => document.getElementById('benefits-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">Finding Your Ikigai</Link></li>
              <li><Link to="#benefits-section" onClick={() => document.getElementById('benefits-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">Happiness in Money</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-[15.5px] mb-4 text-hq-black">Media & Publications</div>
            <ul className="space-y-2.5 font-body text-[13.5px] normal-case text-hq-black/80">
              <li><Link to="#podcast" onClick={() => document.getElementById('podcast')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">HQX Fortnightly Podcast</Link></li>
              <li><Link to="#books" onClick={() => document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">Books (2020-2025)</Link></li>
              <li><Link to="#team-section" onClick={() => document.getElementById('team-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">Global Faculty Directory</Link></li>
              <li><Link to="#contact" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">Book Manny Anchan</Link></li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright Bar (Sleek, tight, neat and tidy) */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5 font-display text-[13.5px] tracking-widest uppercase pt-5 pb-1 text-hq-black/85">
          <div>&copy; {new Date().getFullYear()} HAPPINESS QUOTIENT GLOBAL PRIVATE LIMITED. ALL RIGHTS RESERVED.</div>
          
          <div className="flex gap-8">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">LinkedIn</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">YouTube</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">Instagram</a>
            <a href="https://spotify.com" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">Spotify</a>
          </div>

          {/* Back to top in vertical text with long tail 1.5px arrow pointing upside */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex flex-col items-center gap-2 text-hq-black hover:opacity-60 transition-all cursor-pointer py-1 select-none"
            aria-label="Back to top"
          >
            {/* Long tail 1.5px arrow pointing upside */}
            <svg 
              width="14" 
              height="46" 
              viewBox="0 0 14 46" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:-translate-y-2 transition-transform duration-300"
            >
              <line x1="7" y1="46" x2="7" y2="3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <polyline points="2 8.5, 7 3, 12 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            
            {/* Vertical text: Back to top */}
            <span 
              className="font-display text-[11px] font-bold uppercase tracking-[0.25em] [writing-mode:vertical-rl] rotate-180"
            >
              Back to top
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
