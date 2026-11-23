import React from 'react';
import { motion } from 'framer-motion';
import BrandLogo from './BrandLogo';

export default function BrandLoader({ text = 'HAPPINESS SAMURAI', subtext = 'Eudaimonic Well-Being & Leadership' }) {
  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#07080A] text-white select-none overflow-hidden">
      {/* Background radial ambient aura */}
      <div 
        aria-hidden="true" 
        className="absolute w-[450px] h-[450px] bg-hq-yellow/[0.07] rounded-full blur-[120px] pointer-events-none animate-pulse" 
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Brand Logo Container */}
        <motion.div
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: [0.94, 1.02, 0.98], opacity: 1 }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="relative flex items-center justify-center p-3"
        >
          {/* Subtle Golden Glow Halo behind Logo */}
          <div className="absolute inset-0 bg-hq-yellow/25 rounded-3xl blur-xl pointer-events-none" />
          
          <BrandLogo className="relative z-10 h-14 sm:h-16 md:h-20 w-auto" />
        </motion.div>

        {/* Brand Typography */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 text-center"
        >
          <div className="font-display font-bold tracking-[0.35em] text-xs sm:text-sm text-white uppercase flex items-center justify-center gap-2.5">
            <span>HQ<span className="text-hq-yellow">X</span></span>
            <span className="w-1.5 h-1.5 rounded-full bg-hq-yellow" />
            <span className="text-white/85">{text}</span>
          </div>

          <p className="mt-2 font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-white/45 uppercase font-light">
            {subtext}
          </p>
        </motion.div>

        {/* Elegant Creative Progress Bar */}
        <div className="mt-8 relative w-44 sm:w-56 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.4, repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-hq-yellow to-transparent shadow-[0_0_12px_rgba(255,204,0,0.9)]"
          />
        </div>
      </div>
    </div>
  );
}
