import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

function parseRgbLuminance(colorStr) {
  const match = colorStr?.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (!match) return null;
  const alpha = match[4] !== undefined ? parseFloat(match[4]) : 1;
  if (alpha < 0.15) return null;
  const r = parseInt(match[1], 10) / 255;
  const g = parseInt(match[2], 10) / 255;
  const b = parseInt(match[3], 10) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export default function BackToTop() {
  const { isDark } = useTheme();
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(isDark);

  useEffect(() => {
    const detectContrast = () => {
      const sampleX = Math.max(20, window.innerWidth - 40);
      const sampleY = Math.max(20, window.innerHeight - 80);
      const stack = document.elementsFromPoint(sampleX, sampleY);

      for (const el of stack) {
        if (el.closest('[data-back-to-top="true"]')) continue;
        let node = el;
        while (node && node !== document.documentElement) {
          const lum = parseRgbLuminance(window.getComputedStyle(node).backgroundColor);
          if (lum !== null) {
            return lum < 0.45;
          }
          node = node.parentElement;
        }
      }
      return isDark;
    };

    const handleScroll = () => {
      const reasonsEl = document.getElementById('reasons-section');
      const footerEl = document.getElementById('contact');

      const isPastHero = reasonsEl
        ? reasonsEl.getBoundingClientRect().top <= window.innerHeight * 0.7
        : window.scrollY > window.innerHeight * 0.45;

      const isBeforeFooter = footerEl
        ? footerEl.getBoundingClientRect().top > window.innerHeight * 0.92
        : true;

      setVisible(isPastHero && isBeforeFooter);
      setIsDarkBg(detectContrast());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isDark, pathname]);

  return (
    <div
      data-back-to-top="true"
      className={`fixed right-4 sm:right-6 lg:right-8 bottom-8 z-40 hidden md:flex flex-col items-center gap-2 transition-all duration-300 pointer-events-auto ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`group flex flex-col items-center gap-2 transition-all duration-300 hover:-translate-y-1 p-2 cursor-pointer bg-transparent border-none shadow-none ${
          isDarkBg ? 'text-white hover:text-hq-yellow' : 'text-[#0A0A0A] hover:text-hq-yellow'
        }`}
        aria-label="Back to top"
        title="Back to top"
      >
        {/* Long tail 1.5px arrow pointing upside */}
        <svg
          width="14"
          height="46"
          viewBox="0 0 14 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:-translate-y-1.5 flex-shrink-0"
        >
          <line
            x1="7"
            y1="4"
            x2="7"
            y2="44"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <polyline
            points="2,11 7,3 12,11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Vertical text: Back to top */}
        <span
          className="font-display uppercase text-[10px] tracking-[0.25em] font-bold group-hover:text-hq-yellow transition-colors duration-300"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Back to top
        </span>
      </button>
    </div>
  );
}

