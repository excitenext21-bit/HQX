import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from './BrandLogo';

export default function FluexaPageTransition() {
  const [animating, setAnimating] = useState(() => {
    // Only show loader once when first entering or loading the website
    try {
      return !sessionStorage.getItem('hqx_site_loaded');
    } catch (_) {
      return true;
    }
  });

  // Only animate on initial website entry, not on every page transition
  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => {
        setAnimating(false);
        try {
          sessionStorage.setItem('hqx_site_loaded', 'true');
        } catch (_) {}
      }, 1250);
      return () => clearTimeout(timer);
    }
  }, [animating]);

  return (
    <AnimatePresence mode="wait">
      {animating && (
        <motion.div
          key="hqx-website-initial-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, delay: 0.75 }}
          className="fixed inset-0 z-[99999] pointer-events-none flex flex-row overflow-hidden"
          style={{ width: '100vw', height: '100vh' }}
        >
          {/* 5 Fluexa-style Curtain Columns with Staggered Upward Scale Wipe */}
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.12 + i * 0.075,
                ease: [0.76, 0, 0.24, 1] // Matches Fluexa / GSAP power4.inOut
              }}
              style={{
                transformOrigin: 'top center',
                flex: '1 1 20%',
                height: '100%',
                backgroundColor: '#07080A',
                borderRight: i < 4 ? '1px solid rgba(255, 255, 255, 0.04)' : 'none'
              }}
              className="relative"
            >
              {/* Subtle luminous gold/yellow accent line on the bottom edge of lifting shutter */}
              <div className="absolute bottom-0 inset-x-0 h-[2px] bg-hq-yellow/90 shadow-[0_0_14px_rgba(255,204,0,0.85)]" />
            </motion.div>
          ))}

          {/* Elegant Creative Brand Logo Reveal (Fades out as shutters wipe open) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 select-none px-6"
          >
            {/* Ambient Yellow Backlight Aura */}
            <div className="absolute w-[360px] h-[360px] bg-hq-yellow/[0.12] rounded-full blur-[90px] pointer-events-none animate-pulse" />

            {/* Glowing Brand Vector Logo */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative p-2">
                <div className="absolute inset-0 bg-hq-yellow/30 rounded-3xl blur-lg pointer-events-none" />
                <BrandLogo className="relative z-10 h-12 sm:h-16 md:h-20 w-auto filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]" />
              </div>

              {/* Title & Slogan */}
              <div className="mt-4 sm:mt-5 text-center">
                <div className="font-display font-bold tracking-[0.38em] text-xs sm:text-sm text-white uppercase flex items-center justify-center gap-2">
                  <span>HQ<span className="text-hq-yellow">X</span></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-hq-yellow" />
                  <span className="text-white/90">HAPPINESS SAMURAI</span>
                </div>
                <p className="mt-1.5 font-mono text-[9px] sm:text-[10px] tracking-[0.28em] text-white/50 uppercase font-light">
                  EUDAIMONIC CULTURE &bull; PURPOSEFUL LEADERSHIP
                </p>
              </div>

              {/* Sleek Golden Progress Shimmer */}
              <div className="mt-5 relative w-40 sm:w-52 h-[1.5px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 0.95, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-hq-yellow to-transparent shadow-[0_0_10px_rgba(255,204,0,0.9)]"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

