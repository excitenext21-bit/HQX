import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function FluexaPageTransition() {
  const location = useLocation();
  const [animating, setAnimating] = useState(true);

  // Trigger Fluexa curtain animation on initial load and route changes
  useEffect(() => {
    setAnimating(true);
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {animating && (
        <motion.div
          key={location.pathname}
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
                delay: 0.08 + i * 0.075,
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

          {/* Minimalist Center Logo Reveal (Fades out as shutters wipe open) */}
          <motion.div
            initial={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            animate={{ opacity: 0, scale: 0.96, filter: 'blur(6px)' }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 select-none"
          >
            <div className="flex items-center gap-3">
              <span className="font-display font-bold tracking-[0.35em] text-sm sm:text-base text-white uppercase">
                HQ<span className="text-hq-yellow">X</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-hq-yellow" />
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-white/70 uppercase">
                HAPPINESS SAMURAI
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

