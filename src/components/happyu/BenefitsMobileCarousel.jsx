import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Six bespoke monochrome 3D-sculpted SVG artworks directly themed to each HappyU benefit:
 * 0: Well-Being Enhancement -> 3D Sculpted Heart & Vitality Core
 * 1: Reduced Stress & Burnout -> 3D Sculpted Calm Lotus & Breath Rings
 * 2: Sustained Focus & Clarity -> 3D Sculpted Precision Optical Aperture Lens
 * 3: Proactive Mental Health Support -> 3D Sculpted Protective Mind Shield
 * 4: Positive Habit Architecture -> 3D Sculpted Ascending Habit Streak Pillars
 * 5: Inspiring Community Connection -> 3D Sculpted Connected Nodes Constellation
 */
function SculptedArtwork({ index, active }) {
  return (
    <div
      style={{
        filter: active
          ? 'grayscale(0) brightness(1) contrast(1)'
          : 'grayscale(1) brightness(0.88) contrast(1.12)'
      }}
      className={`w-full h-full flex items-center justify-center transition-[transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        active ? 'scale-105' : 'scale-95 group-hover:scale-100'
      }`}
    >
      {/* 0: Well-Being Enhancement — 3D Sculpted Gold/Yellow Heart & Vitality Core */}
      {index === 0 && (
        <svg viewBox="0 0 200 200" className="w-40 h-40 drop-shadow-[0_14px_30px_rgba(245,208,0,0.22)]">
          <defs>
            <radialGradient id="heart3D" cx="35%" cy="30%" r="72%">
              <stop offset="0%" stopColor="#FFF6B3" />
              <stop offset="35%" stopColor="#F5D000" />
              <stop offset="76%" stopColor="#5C4900" />
              <stop offset="100%" stopColor="#141002" />
            </radialGradient>
            <radialGradient id="heartGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F5D000" stopOpacity="0.34" />
              <stop offset="100%" stopColor="#F5D000" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="72" fill="url(#heartGlow)" />
          <path
            d="M100 156 C96 153 42 118 42 78 C42 56 59 42 78 42 C89 42 96 48 100 56 C104 48 111 42 122 42 C141 42 158 56 158 78 C158 118 104 153 100 156 Z"
            fill="url(#heart3D)"
            stroke="rgba(245,208,0,0.5)"
            strokeWidth="1.5"
          />
          <ellipse cx="72" cy="70" rx="13" ry="8" transform="rotate(-32 72 70)" fill="#FFFBE0" opacity="0.65" />
          <circle cx="100" cy="96" r="18" fill="none" stroke="#FFF6B3" strokeOpacity="0.55" strokeWidth="1.5" />
          <circle cx="100" cy="96" r="6" fill="#FFFBE0" opacity="0.95" />
        </svg>
      )}

      {/* 1: Reduced Stress & Burnout — 3D Sculpted Calm Lotus & Breath Rings */}
      {index === 1 && (
        <svg viewBox="0 0 200 200" className="w-44 h-44 drop-shadow-[0_0_26px_rgba(245,208,0,0.24)]">
          <defs>
            <linearGradient id="petalLit" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFF6B3" />
              <stop offset="48%" stopColor="#F5D000" />
              <stop offset="100%" stopColor="#3B2F00" />
            </linearGradient>
            <linearGradient id="petalSide" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E6C200" />
              <stop offset="100%" stopColor="#241D00" />
            </linearGradient>
            <radialGradient id="calmHalo" cx="50%" cy="55%" r="50%">
              <stop offset="0%" stopColor="#F5D000" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#F5D000" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="108" r="74" fill="url(#calmHalo)" />
          <ellipse cx="100" cy="142" rx="64" ry="15" fill="none" stroke="#F5D000" strokeOpacity="0.26" strokeWidth="1.4" />
          <ellipse cx="100" cy="142" rx="46" ry="10" fill="none" stroke="#F5D000" strokeOpacity="0.48" strokeWidth="1.5" />
          <path d="M100 136 C74 134 44 114 40 82 C62 84 86 102 100 136 Z" fill="url(#petalSide)" stroke="rgba(245,208,0,0.35)" strokeWidth="1.2" />
          <path d="M100 136 C126 134 156 114 160 82 C138 84 114 102 100 136 Z" fill="url(#petalSide)" stroke="rgba(245,208,0,0.35)" strokeWidth="1.2" />
          <path d="M100 136 C78 122 64 92 70 60 C86 72 96 98 100 136 Z" fill="url(#petalLit)" stroke="rgba(255,246,179,0.5)" strokeWidth="1.2" />
          <path d="M100 136 C122 122 136 92 130 60 C114 72 104 98 100 136 Z" fill="url(#petalSide)" stroke="rgba(245,208,0,0.4)" strokeWidth="1.2" />
          <path d="M100 138 C82 112 84 72 100 44 C116 72 118 112 100 138 Z" fill="url(#petalLit)" stroke="#FFF6B3" strokeOpacity="0.7" strokeWidth="1.4" />
        </svg>
      )}

      {/* 2: Sustained Focus & Clarity — 3D Sculpted Precision Optical Aperture Lens */}
      {index === 2 && (
        <svg viewBox="0 0 200 200" className="w-40 h-40 drop-shadow-[0_12px_26px_rgba(245,208,0,0.2)]">
          <defs>
            <linearGradient id="lensBezel" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFF6B3" />
              <stop offset="45%" stopColor="#F5D000" />
              <stop offset="100%" stopColor="#3B2F00" />
            </linearGradient>
            <radialGradient id="lensCore" cx="38%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFFBE0" />
              <stop offset="35%" stopColor="#F5D000" />
              <stop offset="78%" stopColor="#4A3B00" />
              <stop offset="100%" stopColor="#120E00" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="64" fill="#0d0e11" stroke="url(#lensBezel)" strokeWidth="6" />
          <circle cx="100" cy="100" r="38" fill="#181508" stroke="#C9A800" strokeWidth="2" />
          <circle cx="100" cy="100" r="24" fill="url(#lensCore)" />
          <circle cx="92" cy="92" r="6" fill="#FFFBE0" opacity="0.9" />
          <path d="M100 24 V44 M100 156 V176 M24 100 H44 M156 100 H176" stroke="#F5D000" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}

      {/* 3: Proactive Mental Health Support — 3D Sculpted Protective Mind Shield */}
      {index === 3 && (
        <svg viewBox="0 0 200 200" className="w-40 h-40 drop-shadow-[0_14px_28px_rgba(245,208,0,0.2)]">
          <defs>
            <linearGradient id="shieldLeft" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFF6B3" />
              <stop offset="48%" stopColor="#F5D000" />
              <stop offset="100%" stopColor="#3D3000" />
            </linearGradient>
            <linearGradient id="shieldRight" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A68C00" />
              <stop offset="100%" stopColor="#1C1600" />
            </linearGradient>
          </defs>
          <path d="M100 34 L46 54 V100 C46 136 72 158 100 168 Z" fill="url(#shieldLeft)" stroke="rgba(255,246,179,0.5)" strokeWidth="1.2" />
          <path d="M100 34 L154 54 V100 C154 136 128 158 100 168 Z" fill="url(#shieldRight)" stroke="rgba(245,208,0,0.3)" strokeWidth="1.2" />
          <circle cx="100" cy="98" r="22" fill="#120F02" stroke="#FFF6B3" strokeOpacity="0.7" strokeWidth="1.8" />
          <path d="M100 87 V109 M89 98 H111" stroke="#F5D000" strokeWidth="3.2" strokeLinecap="round" />
        </svg>
      )}

      {/* 4: Positive Habit Architecture — 3D Sculpted Ascending Habit Streak Pillars */}
      {index === 4 && (
        <svg viewBox="0 0 200 200" className="w-40 h-40 drop-shadow-[0_14px_28px_rgba(245,208,0,0.2)]">
          <defs>
            <linearGradient id="barFace" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C9A800" />
              <stop offset="100%" stopColor="#261F00" />
            </linearGradient>
            <linearGradient id="barPeak" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFF6B3" />
              <stop offset="48%" stopColor="#F5D000" />
              <stop offset="100%" stopColor="#3B2F00" />
            </linearGradient>
          </defs>
          <polygon points="44,122 64,112 84,122 64,132" fill="#E6C200" />
          <polygon points="44,122 64,132 64,160 44,150" fill="#6E5900" />
          <polygon points="64,132 84,122 84,150 64,160" fill="url(#barFace)" />
          <polygon points="80,92 100,82 120,92 100,102" fill="#F5D000" />
          <polygon points="80,92 100,102 100,160 80,150" fill="#8C7100" />
          <polygon points="100,102 120,92 120,150 100,160" fill="url(#barFace)" />
          <polygon points="116,56 136,46 156,56 136,66" fill="#FFFBE0" />
          <polygon points="116,56 136,66 136,160 116,150" fill="url(#barPeak)" />
          <polygon points="136,66 156,56 156,150 136,160" fill="#473800" />
          <circle cx="136" cy="34" r="4.5" fill="#F5D000" />
        </svg>
      )}

      {/* 5: Inspiring Community Connection — 3D Sculpted Connected Nodes Constellation */}
      {index === 5 && (
        <svg viewBox="0 0 200 200" className="w-40 h-40 drop-shadow-[0_12px_26px_rgba(245,208,0,0.22)]">
          <defs>
            <radialGradient id="nodeLit" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFBE0" />
              <stop offset="45%" stopColor="#F5D000" />
              <stop offset="100%" stopColor="#3B2F00" />
            </radialGradient>
            <radialGradient id="nodeDim" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#F5D000" />
              <stop offset="55%" stopColor="#7A6200" />
              <stop offset="100%" stopColor="#1A1500" />
            </radialGradient>
          </defs>
          <line x1="100" y1="98" x2="58" y2="66" stroke="#F5D000" strokeOpacity="0.55" strokeWidth="2" />
          <line x1="100" y1="98" x2="146" y2="68" stroke="#F5D000" strokeOpacity="0.55" strokeWidth="2" />
          <line x1="100" y1="98" x2="64" y2="142" stroke="#F5D000" strokeOpacity="0.48" strokeWidth="2" />
          <line x1="100" y1="98" x2="140" y2="140" stroke="#F5D000" strokeOpacity="0.48" strokeWidth="2" />
          <line x1="58" y1="66" x2="146" y2="68" stroke="#F5D000" strokeOpacity="0.25" strokeWidth="1.2" />
          <line x1="64" y1="142" x2="140" y2="140" stroke="#F5D000" strokeOpacity="0.25" strokeWidth="1.2" />
          <circle cx="58" cy="66" r="16" fill="url(#nodeDim)" />
          <circle cx="146" cy="68" r="14" fill="url(#nodeLit)" />
          <circle cx="64" cy="142" r="13" fill="url(#nodeLit)" />
          <circle cx="140" cy="140" r="17" fill="url(#nodeDim)" />
          <circle cx="100" cy="98" r="24" fill="url(#nodeLit)" />
        </svg>
      )}
    </div>
  );
}

/**
 * Minimal monochrome circular dock icon matching each benefit's 3D icon.
 */
function MiniGlyph({ index }) {
  const common = 'w-4 h-4 stroke-current';
  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path
            d="M12 19s-6.5-4.3-6.5-9A3.8 3.8 0 0 1 12 7.4 3.8 3.8 0 0 1 18.5 10c0 4.7-6.5 9-6.5 9Z"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M12 5c2.2 3.2 2.2 7.8 0 11-2.2-3.2-2.2-7.8 0-11Z" strokeWidth="1.5" />
          <path d="M12 16c-3.5-.6-6-2.8-6.5-6 3 .3 5.2 2.4 6.5 6Z" strokeWidth="1.4" />
          <path d="M12 16c3.5-.6 6-2.8 6.5-6-3 .3-5.2 2.4-6.5 6Z" strokeWidth="1.4" />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <circle cx="12" cy="12" r="7" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2.5" strokeWidth="1.5" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M12 4 5.5 6.8V12c0 4.2 2.8 7 6.5 8 3.7-1 6.5-3.8 6.5-8V6.8L12 4Z" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M12 9.5v5M9.5 12h5" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 4:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <rect x="4.5" y="13" width="3.5" height="6" rx="0.8" strokeWidth="1.4" />
          <rect x="10.25" y="9.5" width="3.5" height="9.5" rx="0.8" strokeWidth="1.4" />
          <rect x="16" y="5.5" width="3.5" height="13.5" rx="0.8" strokeWidth="1.4" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <circle cx="12" cy="12" r="2.5" strokeWidth="1.5" />
          <circle cx="6.5" cy="7.5" r="1.8" strokeWidth="1.4" />
          <circle cx="17.5" cy="7.5" r="1.8" strokeWidth="1.4" />
          <circle cx="7" cy="17" r="1.8" strokeWidth="1.4" />
          <circle cx="17" cy="17" r="1.8" strokeWidth="1.4" />
          <path d="m8 8.8 2.4 1.8M16 8.8l-2.4 1.8M8.3 15.6l2.1-2M15.7 15.6l-2.1-2" strokeWidth="1.3" />
        </svg>
      );
  }
}

/**
 * Unified morphing card: stays mounted continuously and smoothly transitions between
 * a compact dark square card and a draggable 3D titanium smartphone without any DOM swap or jerk.
 */
function MorphingBenefitSlot({
  benefit,
  realIdx,
  isActive,
  benefits,
  onActivate,
  onDockSelect
}) {
  const [tilt, setTilt] = useState({ rx: 3, ry: -7, gx: 30, gy: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ active: false, startX: 0, startY: 0, baseRx: 3, baseRy: -7 });

  const handlePointerDown = (e) => {
    if (!isActive || e.target.closest('button')) return;
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = {
      active: true,
      startX: e.clientX,
      startY: e.clientY,
      baseRx: tilt.rx,
      baseRy: tilt.ry
    };
    setIsDragging(true);
  };

  const handlePointerMove = (e) => {
    if (!isActive) return;
    if (dragRef.current.active) {
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      const ry = Math.max(-36, Math.min(36, dragRef.current.baseRy + dx * 0.28));
      const rx = Math.max(-24, Math.min(24, dragRef.current.baseRx - dy * 0.22));
      setTilt({
        rx,
        ry,
        gx: Math.max(10, Math.min(90, 50 + (ry / 36) * 40)),
        gy: Math.max(10, Math.min(90, 35 - (rx / 24) * 35))
      });
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setTilt({
      rx: -ny * 8,
      ry: nx * 10,
      gx: 50 + nx * 35,
      gy: 35 + ny * 30
    });
  };

  const handlePointerUp = (e) => {
    if (dragRef.current.active) {
      dragRef.current.active = false;
      setIsDragging(false);
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    }
  };

  const handleMouseLeave = () => {
    if (dragRef.current.active) return;
    setTilt({ rx: 3, ry: -7, gx: 30, gy: 20 });
  };

  return (
    <div
      onMouseEnter={onActivate}
      onClick={onActivate}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1200px' }}
      className={`group relative shrink-0 w-[280px] sm:w-[300px] h-[545px] sm:h-[565px] py-4 flex flex-col items-center justify-center select-none ${
        isActive
          ? `touch-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`
          : 'cursor-pointer'
      }`}
    >
      {/* Morphing Chassis / Card (Fixed Slot Width = Zero Neighbor Shift or Jerk) */}
      <div
        style={{
          transform: isActive
            ? `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`
            : 'rotateX(0deg) rotateY(0deg)',
          transformStyle: 'preserve-3d',
          willChange: 'transform, width, height, border-radius'
        }}
        className={`relative mx-auto ${
          isDragging
            ? 'transition-none'
            : 'transition-[width,height,border-radius,padding,box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]'
        } ${
          isActive
            ? 'w-[270px] sm:w-[290px] h-[480px] sm:h-[500px] rounded-[46px] p-[3px] bg-gradient-to-br from-[#6b6e78] via-[#23252b] to-[#44464f] shadow-[18px_28px_60px_rgba(0,0,0,0.95),-4px_2px_0_#2b2d34,-7px_4px_0_#141519,0_0_50px_rgba(255,255,255,0.08)]'
            : 'w-[205px] sm:w-[224px] h-[205px] sm:h-[224px] rounded-[28px] p-0 bg-[#17171b] shadow-xl'
        }`}
      >
        {/* Machined Titanium Side Hardware (fade in smoothly when active) */}
        <div
          className={`pointer-events-none transition-opacity duration-300 ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="absolute -left-[5px] top-[98px] w-[3px] h-6 rounded-l-sm bg-gradient-to-b from-[#6c6f78] to-[#282a30]" />
          <span className="absolute -left-[5px] top-[140px] w-[3px] h-11 rounded-l-sm bg-gradient-to-b from-[#6c6f78] to-[#282a30]" />
          <span className="absolute -left-[5px] top-[194px] w-[3px] h-11 rounded-l-sm bg-gradient-to-b from-[#6c6f78] to-[#282a30]" />
          <span className="absolute -right-[5px] top-[156px] w-[3px] h-14 rounded-r-sm bg-gradient-to-b from-[#6c6f78] to-[#282a30]" />
        </div>

        {/* Inner Bezel */}
        <div
          className={`w-full h-full transition-[border-radius,padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isActive
              ? 'rounded-[45px] bg-[#070709] p-[7px] shadow-[inset_0_0_12px_rgba(0,0,0,0.95)]'
              : 'rounded-[28px] bg-transparent p-0'
          }`}
        >
          {/* OLED Screen / Square Card Interior */}
          <div
            style={{ transformStyle: 'preserve-3d' }}
            className={`relative w-full h-full overflow-hidden transition-[border-radius,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isActive
                ? 'rounded-[39px] bg-gradient-to-b from-[#111216] via-[#09090c] to-[#050507] border border-white/[0.08]'
                : 'rounded-[28px] bg-gradient-to-b from-[#17171b] to-[#111114] border border-white/[0.08] group-hover:border-white/25'
            }`}
          >
            {/* Studio Glass Specular Reflection */}
            <div
              style={{
                background: `radial-gradient(circle at ${tilt.gx}% ${tilt.gy}%, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.03) 34%, transparent 65%)`
              }}
              className={`absolute inset-0 pointer-events-none z-30 transition-opacity duration-300 ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Top Phone Status Bar & Dynamic Island Only */}
            <div
              className={`absolute top-3 inset-x-4 z-20 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isActive
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-3 pointer-events-none'
              }`}
            >
              <div className="flex items-center justify-between px-2 text-[10px] font-mono text-white/85">
                <span className="font-semibold tracking-tight">9:41</span>
                <div className="w-[84px] h-[22px] rounded-full bg-black border border-white/[0.09] flex items-center justify-end px-2 shadow-inner">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0c1424] border border-white/15 flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-[#4a78c2]/80" />
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="flex items-end gap-[1.5px] h-2.5">
                    <span className="w-[2px] h-1 bg-white/80 rounded-full" />
                    <span className="w-[2px] h-1.5 bg-white/80 rounded-full" />
                    <span className="w-[2px] h-2 bg-white/80 rounded-full" />
                    <span className="w-[2px] h-2.5 bg-white/80 rounded-full" />
                  </span>
                  <span className="w-4 h-2 rounded-[3px] border border-white/60 p-[1px] flex items-center">
                    <span className="w-full h-full bg-white/85 rounded-[1px]" />
                  </span>
                </div>
              </div>
            </div>

            {/* Persistent Centered 3D Yellow Artwork (Cleanly Positioned Above Readable Copy) */}
            <div
              style={{
                transform: isActive
                  ? 'translateY(-74px) translateZ(26px)'
                  : 'translateY(0px) translateZ(0px)'
              }}
              className="absolute inset-0 z-10 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <div
                className={`absolute w-36 h-36 rounded-full bg-hq-yellow/15 blur-2xl pointer-events-none transition-opacity duration-500 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <SculptedArtwork index={realIdx} active={isActive} />
            </div>

            {/* Benefit Title, Clear Readable Description & Bottom Dock */}
            <div
              className={`absolute bottom-3.5 inset-x-4 z-20 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isActive
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
            >
              <div className="text-center px-2 mb-3.5">
                <h3 className="font-display text-[22px] sm:text-[24px] font-bold text-white leading-[1.15] tracking-tight mb-2">
                  {benefit.title}
                </h3>
                <p className="font-body text-[13px] sm:text-sm text-white/90 font-normal leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              <div className="pt-2.5 border-t border-white/10 flex items-center justify-between px-1 mb-2.5">
                {benefits.slice(0, 5).map((item, dockIdx) => {
                  const dockActive = dockIdx === realIdx;
                  return (
                    <button
                      key={item.num}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDockSelect(dockIdx);
                      }}
                      aria-label={item.title}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        dockActive
                          ? 'bg-hq-yellow/20 text-hq-yellow border border-hq-yellow/70 scale-110 shadow-[0_0_12px_rgba(245,208,0,0.28)]'
                          : 'bg-white/[0.04] text-white/45 border border-white/10 hover:text-hq-yellow'
                      }`}
                    >
                      <MiniGlyph index={dockIdx} />
                    </button>
                  );
                })}
              </div>
              <div className="w-24 h-1 rounded-full bg-white/30 mx-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Collapsed Card Footer Label (Larger Readable Title, No Benefit Number) */}
      <div
        className={`w-[224px] sm:w-[244px] flex items-center gap-3 px-0.5 transition-all duration-300 ease-out ${
          isActive
            ? 'opacity-0 -translate-y-2 h-0 overflow-hidden mt-0 pointer-events-none'
            : 'opacity-100 translate-y-0 min-h-[52px] mt-4'
        }`}
      >
        <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/15 text-white/60 group-hover:border-hq-yellow/50 group-hover:text-hq-yellow flex items-center justify-center shrink-0 transition-colors">
          <MiniGlyph index={realIdx} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="font-display text-sm sm:text-base font-semibold text-white/95 group-hover:text-white leading-snug transition-colors">
            {benefit.title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BenefitsMobileCarousel({ benefits }) {
  const [activeSlot, setActiveSlot] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isTrackDragging, setIsTrackDragging] = useState(false);
  const trackRef = useRef(null);
  const trackDragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const hoverTimerRef = useRef(null);

  // Smooth continuous auto-scroll across all benefits; pauses immediately on hover/interaction
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let rafId = 0;
    let lastTime = performance.now();

    const tick = (now) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      if (!isPaused) {
        el.scrollLeft += dt * 34;
        const halfWidth = el.scrollWidth / 2;
        if (halfWidth > 0 && el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    };
  }, []);

  const activateSlotSmoothly = (slotIdx) => {
    if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => {
      setActiveSlot(slotIdx);
    }, 45);
  };

  const scrollByAmount = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 310, behavior: 'smooth' });
  };

  const repeatedBenefits = [...benefits, ...benefits];

  return (
    <section className="py-12 sm:py-16 min-h-[100svh] flex flex-col justify-center bg-[#0A0A0A] text-white border-b border-white/10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 mb-6 pb-5 border-b border-white/10">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-[42px] font-semibold tracking-tight text-white leading-[1.08]">
              Benefits of Using <br />
              <span className="text-white/45 font-light">the HappyU App</span>
            </h2>
          </div>

          <div className="flex items-end gap-6">
            <p className="font-body text-sm sm:text-base text-white/60 max-w-md font-light leading-relaxed lg:pb-1">
              Hover or tap any module below to morph it into a draggable 3D HappyU mobile view and explore each daily benefit.
            </p>
            <div className="hidden sm:flex items-center gap-2 shrink-0 pb-1">
              <button
                type="button"
                onClick={() => scrollByAmount(-1)}
                aria-label="Scroll benefits left"
                className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white hover:text-[#070709] flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByAmount(1)}
                aria-label="Scroll benefits right"
                className="w-10 h-10 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white hover:text-[#070709] flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Showcase (Fixed Height Container -> Zero Vertical Jerk) */}
      <div
        ref={trackRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          trackDragRef.current.active = false;
          setIsTrackDragging(false);
        }}
        onMouseDown={(e) => {
          const el = trackRef.current;
          if (!el) return;
          trackDragRef.current = {
            active: true,
            startX: e.pageX - el.offsetLeft,
            scrollLeft: el.scrollLeft
          };
          setIsTrackDragging(true);
        }}
        onMouseMove={(e) => {
          if (!trackDragRef.current.active) return;
          const el = trackRef.current;
          if (!el) return;
          e.preventDefault();
          const x = e.pageX - el.offsetLeft;
          const walk = (x - trackDragRef.current.startX) * 1.4;
          el.scrollLeft = trackDragRef.current.scrollLeft - walk;
        }}
        onMouseUp={() => {
          trackDragRef.current.active = false;
          setIsTrackDragging(false);
        }}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className={`w-full flex items-center overflow-x-auto overflow-y-hidden no-scrollbar py-4 sm:py-6 px-6 md:px-12 ${
          isTrackDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
        }`}
      >
        <div className="flex items-center gap-5 sm:gap-7 w-max min-h-[555px] sm:min-h-[575px]">
          {repeatedBenefits.map((b, loopIdx) => {
            const realIdx = loopIdx % benefits.length;
            const isActive = activeSlot === loopIdx;

            return (
              <MorphingBenefitSlot
                key={`${b.num}-${loopIdx}`}
                benefit={b}
                realIdx={realIdx}
                isActive={isActive}
                benefits={benefits}
                onActivate={() => activateSlotSmoothly(loopIdx)}
                onDockSelect={(dockIdx) => {
                  const baseOffset = loopIdx >= benefits.length ? benefits.length : 0;
                  setActiveSlot(baseOffset + dockIdx);
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
