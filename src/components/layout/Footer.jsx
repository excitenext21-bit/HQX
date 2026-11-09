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
      {/* Background Brand Logo Watermark (Pushed UP and fully visible without bottom clipping) */}
      <div className="absolute right-0 bottom-16 sm:bottom-20 md:bottom-24  pointer-events-none pr-4 sm:pr-8 md:pr-12 overflow-visible opacity-10 md:opacity-[0.12] transition-all">
        <BrandLogo 
          className="w-[300px] sm:w-[460px] md:w-[620px] lg:w-[760px] h-auto" 
          textColor="#000000" 
          yellowFill="rgba(0,0,0,0.12)"
          swooshFill="#000000"
        />
      </div>

      {/* Full-Screen Fit Viewport Hero: Shape Tomorrow */}
      <section className="w-full min-h-[100dvh] flex flex-col justify-center items-center relative z-10 px-4 sm:px-6 md:px-12 py-10 sm:py-12">
        <ShapeTomorrowAnimation />
        
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center relative z-10 pb-8 sm:pb-12 pt-8">

        {/* Site Map Columns (+10% Text Size - Sleek compact vertical rhythm) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left py-8 sm:py-9 border-t border-b border-hq-black/20 text-[13.5px] tracking-wider uppercase font-display">
          <div>
            <div className="font-bold text-[15.5px] mb-4 text-hq-black">About HQX</div>
            <ul className="space-y-2.5 font-body text-[13.5px] normal-case text-hq-black/80">
              <li><Link to="/about-us" className="hover:underline font-semibold">About Us</Link></li>
              <li><Link to="/founder" className="hover:underline">Founder (Manny Anchan)</Link></li>
              <li><Link to="/team" className="hover:underline">Our Team & Faculty</Link></li>
              <li><Link to="/why-hqx" className="hover:underline">Why HQX</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-[15.5px] mb-4 text-hq-black">Executive Ethos</div>
            <ul className="space-y-2.5 font-body text-[13.5px] normal-case text-hq-black/80">
              <li><Link to="/eudaimonic-transformation" className="hover:underline">Eudaimonic Transformation</Link></li>
              <li><Link to="/well-being-ethos" className="hover:underline">5 Well-Being Pillars</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-[15.5px] mb-4 text-hq-black">Global Secretariat</div>
            <ul className="space-y-2.5 font-body text-[13.5px] normal-case text-hq-black/80">
              <li>Serving 9 Nations & 16 Indian States</li>
              <li><a href="tel:+919700100800" className="hover:underline font-semibold">+91 97001 00800</a></li>
              <li>Executive Ingestion & Advisory</li>
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
            className="group inline-flex flex-col items-center gap-2 text-hq-black hover:opacity-60 transition-all cursor-pointer py-1 "
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
