import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BrandLogo from './BrandLogo';

/**
 * ShapeTomorrowAnimation
 * Full-screen viewport section featuring:
 * 1. Correct official vector brand logo (clean smile swoosh + HQ^x without squircle box, 
 *    matching the official brand reference).
 * 2. Authentic "stella" modern sans-serif typography with discretionary ligatures 
 *    in lowercase geometric aesthetic.
 * 3. Exact "bouncing and moving lines" motion graphics choreography from Akash Goel's post
 *    (@motionbyakash: CDsm52tHj5F) in brand yellow (#FFCC00) and rich black (#0A0A0A).
 * 4. Perfectly framed to fit the viewport screen (100dvh).
 */
export default function ShapeTomorrowAnimation() {
  const [key, setKey] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Elastic spring easing matching Akash Goel's motion curve
  const elasticEase = [0.34, 1.56, 0.64, 1];

  const handleReplay = () => {
    setKey(prev => prev + 1);
  };

  return (
    <div 
      className="relative w-full min-h-[92vh] sm:min-h-[95vh] lg:min-h-[100dvh] flex flex-col items-center justify-center text-center  py-10 sm:py-14 px-4 sm:px-6 cursor-pointer overflow-hidden group"
      onClick={handleReplay}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="Click or hover to replay the kinetic motion animation"
    >
      {/* ========================================================
          1. DYNAMIC MOVING & INTERSECTING LINES (motionbyakash style)
          Rapid lines shooting vertically and horizontally, crossing 
          and snapping with elastic bounce across the viewport
         ======================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg 
          key={`lines-${key}`}
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top-to-Bottom Vertical Slicing Line (Left side) */}
          <motion.line
            x1="18%"
            y1="-20%"
            x2="18%"
            y2="120%"
            stroke="#0A0A0A"
            strokeWidth="1.5"
            strokeDasharray="140% 140%"
            initial={{ strokeDashoffset: "140%" }}
            animate={{ 
              strokeDashoffset: ["140%", "0%", "-140%"],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: 2.0,
              ease: "easeInOut",
              times: [0, 0.45, 1],
              repeat: Infinity,
              repeatDelay: 2.2
            }}
          />

          {/* Bottom-to-Top Vertical Slicing Line (Right side) */}
          <motion.line
            x1="82%"
            y1="120%"
            x2="82%"
            y2="-20%"
            stroke="#0A0A0A"
            strokeWidth="1.5"
            strokeDasharray="140% 140%"
            initial={{ strokeDashoffset: "140%" }}
            animate={{ 
              strokeDashoffset: ["140%", "0%", "-140%"],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: 2.0,
              delay: 0.25,
              ease: "easeInOut",
              times: [0, 0.45, 1],
              repeat: Infinity,
              repeatDelay: 2.2
            }}
          />

          {/* Horizontal Slicing Line (Above 'shape') */}
          <motion.line
            x1="-20%"
            y1="36%"
            x2="120%"
            y2="36%"
            stroke="#0A0A0A"
            strokeWidth="2"
            strokeDasharray="140% 140%"
            initial={{ strokeDashoffset: "-140%" }}
            animate={{ 
              strokeDashoffset: ["-140%", "0%", "140%"],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 1.8,
              delay: 0.1,
              ease: "easeInOut",
              times: [0, 0.4, 1],
              repeat: Infinity,
              repeatDelay: 2.5
            }}
          />

          {/* Horizontal Slicing Line (Between 'shape' and 'tomorrow') */}
          <motion.line
            x1="120%"
            y1="58%"
            x2="-20%"
            y2="58%"
            stroke="#0A0A0A"
            strokeWidth="2.5"
            strokeDasharray="140% 140%"
            initial={{ strokeDashoffset: "-140%" }}
            animate={{ 
              strokeDashoffset: ["-140%", "0%", "140%"],
              opacity: [0, 0.75, 0]
            }}
            transition={{
              duration: 1.7,
              delay: 0.35,
              ease: "easeInOut",
              times: [0, 0.45, 1],
              repeat: Infinity,
              repeatDelay: 2.5
            }}
          />

          {/* Crosshair Dots at Intersections (bounces in like Akash's accents) */}
          <motion.circle
            cx="18%"
            cy="36%"
            r="3.5"
            fill="#0A0A0A"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.8, 1, 0],
              opacity: [0, 0.9, 0.7, 0]
            }}
            transition={{
              duration: 1.6,
              delay: 0.2,
              repeat: Infinity,
              repeatDelay: 2.5
            }}
          />

          <motion.circle
            cx="82%"
            cy="58%"
            r="4"
            fill="#0A0A0A"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 2, 1, 0],
              opacity: [0, 1, 0.8, 0]
            }}
            transition={{
              duration: 1.6,
              delay: 0.45,
              repeat: Infinity,
              repeatDelay: 2.5
            }}
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center relative z-10 w-full my-auto">
        {/* ========================================================
            2. THE CORRECT OFFICIAL BRAND LOGO (Clean Smile + HQ^x)
            NO squircle box, pure official vector paths with bounce reveal
           ======================================================== */}
        <motion.div 
          key={`brand-logo-${key}`}
          className="flex items-center justify-center mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -25, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.75,
            ease: elasticEase
          }}
          whileHover={{ scale: 1.05 }}
        >
          <BrandLogo 
            hideSquircle={true}
            className="h-9 sm:h-11 md:h-12 w-auto overflow-visible" 
            textColor="#0A0A0A"
            swooshFill="#0A0A0A"
          />
        </motion.div>

        {/* ========================================================
            3. THE MOTTO: "The Future of Work is Eudaimonic"
           ======================================================== */}
        <motion.div
          key={`quote-${key}`}
          className="mb-4 sm:mb-6 overflow-hidden px-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          <motion.p 
            className="font-serif italic text-lg sm:text-2xl md:text-[26px] tracking-wide text-hq-black/85"
            animate={isHovered ? { letterSpacing: "0.06em" } : { letterSpacing: "0.02em" }}
            transition={{ duration: 0.4 }}
          >
            &ldquo;The Future of Work is Eudaimonic&rdquo;
          </motion.p>
        </motion.div>

        {/* ========================================================
            4. GIANT DISPLAY: "shape tomorrow"
            Styled with the attached "stella" modern sans-serif typography, 
            discretionary ligatures, circular geometry, and kinetic lines
           ======================================================== */}
        <div 
          key={`heading-${key}`}
          className="relative flex flex-col items-center justify-center my-2 sm:my-3 font-stella text-hq-black"
        >
          {/* Word 1: "shape" in attached typo lowercase aesthetic */}
          <div className="relative overflow-visible">
            <motion.h2 
              className="text-6xl sm:text-8xl md:text-[8.5rem] lg:text-[10rem] font-bold tracking-tight text-hq-black leading-[0.88] m-0 lowercase font-stella"
              initial={{ 
                y: 70, 
                scale: 0.88, 
                opacity: 0,
                skewY: 2
              }}
              animate={{ 
                y: [70, -8, 2, 0], 
                scale: [0.88, 1.05, 0.98, 1], 
                opacity: 1,
                skewY: [2, -1, 0]
              }}
              transition={{
                delay: 0.25,
                duration: 0.85,
                ease: elasticEase
              }}
              whileHover={{ scale: 1.02 }}
            >
              shape
            </motion.h2>

            {/* Rapid Slicing Line Accent right through shape */}
            <motion.div 
              className="absolute -bottom-1 left-0 right-0 h-[3px] bg-hq-black origin-left rounded-full pointer-events-none"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: [0, 1.1, 1],
                opacity: [0, 0.8, 0.15]
              }}
              transition={{
                delay: 0.55,
                duration: 0.6,
                ease: elasticEase
              }}
            />
          </div>

          {/* Word 2: "tomorrow" in attached typo lowercase aesthetic with spring bounce */}
          <div className="relative overflow-visible mt-2 sm:mt-3">
            <motion.h2 
              className="text-6xl sm:text-8xl md:text-[8.5rem] lg:text-[10rem] font-bold tracking-tight text-hq-black leading-[0.88] m-0 lowercase font-stella"
              initial={{ 
                y: 80, 
                scale: 0.86, 
                opacity: 0,
                skewY: -2
              }}
              animate={{ 
                y: [80, -10, 3, 0], 
                scale: [0.86, 1.06, 0.97, 1], 
                opacity: 1,
                skewY: [-2, 1, 0]
              }}
              transition={{
                delay: 0.4,
                duration: 0.9,
                ease: elasticEase
              }}
              whileHover={{ scale: 1.02 }}
            >
              tomorrow
            </motion.h2>

            {/* Intersecting Corner Construction Marks */}
            <motion.div 
              className="absolute -right-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none hidden sm:flex"
              initial={{ opacity: 0, x: -15 }}
              animate={{ 
                opacity: [0, 1, 0.7],
                x: [-15, 4, 0]
              }}
              transition={{
                delay: 0.7,
                duration: 0.5,
                ease: elasticEase
              }}
            >
              <span className="w-5 h-[2px] bg-hq-black/60 rounded-full" />
              <span className="w-2.5 h-2.5 rounded-full bg-hq-black/80" />
            </motion.div>
          </div>
        </div>

        {/* ========================================================
            5. SUBTITLE: "Ready to integrate..."
           ======================================================== */}
        <motion.p 
          key={`sub-${key}`}
          className="font-body text-base sm:text-xl md:text-[22px] font-normal mt-6 sm:mt-8 max-w-2xl text-hq-black/85 leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.55,
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          Ready to integrate the Functional Enhancement Model into your organization? 
          Connect with Manny Anchan directly.
        </motion.p>

        {/* Micro-badge indicator */}
        <motion.div
          className="mt-6 flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.9 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-hq-black animate-ping" />
          <span className="text-[11px] font-display uppercase tracking-widest text-hq-black font-semibold">
            Kinetic Motion Active • Click to Replay
          </span>
        </motion.div>
      </div>
    </div>
  );
}
