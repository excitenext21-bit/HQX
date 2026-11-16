import React, { useEffect, useRef } from 'react';

/**
 * ParticleConnectionCanvas
 * True 3D point-cloud canvas sampled from /images/contact-pointcloud-humans.jpg
 * with a smooth cinematic 180-degree camera orbit that swaps the left & right figures
 * across 3D depth with perspective scaling, subtle camera tilt, and flowing aura particles.
 */
export default function ParticleConnectionCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = null;
    let width = 0;
    let height = 0;
    let particles = [];
    let imgAspect = 16 / 9;

    let seed = 777;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    // Ambient starry dust motes
    const motes = Array.from({ length: 200 }, () => ({
      u: rand(),
      v: rand(),
      vx: 0.004 + rand() * 0.008,
      vy: -(0.001 + rand() * 0.004),
      r: 0.6 + rand() * 1.0,
      phase: rand() * Math.PI * 2
    }));

    // 3D particles swirling around the two humans & their connection bridge
    const humanAuraMotes = Array.from({ length: 340 }, (_, idx) => {
      const zone = idx % 3;
      // Local 3D coordinates centered on the figure pair (lx around -0.15..+0.17)
      const baseLx = zone === 0 ? -0.15 : zone === 1 ? 0.02 : 0.16;
      const baseLy = zone === 0 ? -0.02 : zone === 1 ? -0.19 : 0.0;
      const baseLz = (rand() - 0.5) * 0.14;
      const spreadX = zone === 0 ? 0.16 : zone === 1 ? 0.09 : 0.12;
      const spreadY = zone === 0 ? 0.26 : zone === 1 ? 0.12 : 0.34;
      return {
        lx: baseLx + (rand() - 0.5) * spreadX,
        ly: baseLy + (rand() - 0.5) * spreadY,
        lz: baseLz,
        orbitRx: 0.012 + rand() * 0.032,
        orbitRy: 0.014 + rand() * 0.038,
        orbitRz: 0.015 + rand() * 0.035,
        speed: (0.3 + rand() * 0.55) * (rand() < 0.5 ? 1 : -1),
        driftY: -(0.008 + rand() * 0.016),
        r: 0.65 + rand() * 1.15,
        phase: rand() * Math.PI * 2,
        maxAlpha: 0.45 + rand() * 0.5
      };
    });

    const img = new Image();
    img.src = '/images/contact-pointcloud-humans.jpg';
    img.onload = () => {
      const sampleW = 360;
      const sampleH = Math.round((img.height / img.width) * sampleW) || 202;
      imgAspect = img.width / img.height;

      const off = document.createElement('canvas');
      off.width = sampleW;
      off.height = sampleH;
      const octx = off.getContext('2d');
      octx.drawImage(img, 0, 0, sampleW, sampleH);
      const data = octx.getImageData(0, 0, sampleW, sampleH).data;

      // Pivot around the handshake/center between the two figures
      const pivotU = 0.67;
      const pivotV = 0.50;

      const sampled = [];
      for (let y = 0; y < sampleH; y++) {
        for (let x = 0; x < sampleW; x++) {
          const i = (y * sampleW + x) * 4;
          const lum = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255;
          if (lum < 0.12) continue;
          if (lum < 0.25 && rand() < 0.48) continue;

          const u = x / sampleW;
          const v = y / sampleH;
          const lx = (u - pivotU) * imgAspect; // aspect-corrected 3D X
          const ly = v - pivotV;

          // Sculpted 3D depth: dunes curve in depth; figures have volumetric cylindrical depth
          const isDune = v > 0.64 || u < 0.38;
          const lz = isDune
            ? Math.sin(u * 7.5 + v * 5.0) * 0.12 + (rand() - 0.5) * 0.06
            : (lum - 0.45) * 0.12 + (rand() - 0.5) * 0.05;

          const isTrailOrDune = u < 0.36 || v > 0.72;
          sampled.push({
            lx,
            ly,
            lz,
            lum,
            r: 0.7 + lum * 0.85,
            phase: rand() * Math.PI * 2,
            speed: 0.45 + rand() * 0.55,
            ampX: isTrailOrDune ? 0.003 + rand() * 0.004 : 0.001 + rand() * 0.0016,
            ampY: isTrailOrDune ? 0.003 + rand() * 0.004 : 0.001 + rand() * 0.0016
          });
        }
      }
      particles = sampled;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const startTime = performance.now();

    const render = (now) => {
      const t = (now - startTime) * 0.001;
      ctx.clearRect(0, 0, width, height);

      const isDesktop = width >= 1024;
      const sceneScale = Math.min(width, height) * (isDesktop ? 0.96 : 0.72);
      const centerX = isDesktop ? width * 0.62 : width * 0.50;
      const centerY = isDesktop ? height * 0.51 : height * 0.68;

      // Cinematic 180-degree camera orbit: smooth cosine ease between 0 deg and 180 deg
      // Dwell gently at 0° (left->right) and 180° (right->left) with smooth mid-arc speed
      const rawPhase = (1 - Math.cos(t * 0.32)) * 0.5; // 0 -> 1 -> 0 smoothly (~19.6s full roundtrip)
      const theta = rawPhase * Math.PI; // 0 to 180 degrees
      const cosT = Math.cos(theta);
      const sinT = Math.sin(theta);

      // Subtle cinematic camera pitch & slight dolly pull-back at 90 deg mid-orbit
      const pitch = sinT * 0.08;
      const cosP = Math.cos(pitch);
      const sinP = Math.sin(pitch);
      const fov = 1.65;
      const camDist = 1.55 + sinT * 0.18;

      // 1. Render 3D rotated point-cloud dots (figures + sweeping dunes)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Organic slow drift
        const dx = Math.sin(t * p.speed + p.phase) * p.ampX;
        const dy = Math.cos(t * p.speed * 0.85 + p.phase) * p.ampY;
        const x0 = p.lx + dx;
        const y0 = p.ly + dy;
        const z0 = p.lz;

        // Rotate around Y axis by 0..180 deg (swaps left <-> right cleanly in 3D)
        const x1 = x0 * cosT - z0 * sinT;
        const z1 = x0 * sinT + z0 * cosT;

        // Subtle X-axis pitch during camera sweep
        const y2 = y0 * cosP - z1 * sinP;
        const z2 = y0 * sinP + z1 * cosP;

        const persp = fov / Math.max(0.35, camDist + z2);
        const sx = centerX + x1 * sceneScale * persp;
        const sy = centerY + y2 * sceneScale * persp;

        if (sx < -4 || sx > width + 4 || sy < -4 || sy > height + 4) continue;

        const depthFade = Math.max(0.32, Math.min(1.15, 0.92 - z2 * 0.75));
        const twinkle = 0.78 + 0.22 * Math.sin(t * 1.15 + p.phase);
        const alpha = Math.min(1, p.lum * twinkle * depthFade * 1.08);
        const dotSize = Math.max(0.55, p.r * persp * 0.95);

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fillRect(sx, sy, dotSize, dotSize);
      }

      // 2. Ambient background dust motes
      for (let i = 0; i < motes.length; i++) {
        const m = motes[i];
        const life = (t * 0.08 + m.phase) % 1;
        const mx = ((m.u + life * m.vx * 8) % 1) * width;
        const my = (((m.v + life * m.vy * 8) % 1) + 1) % 1 * height;
        const fade = Math.sin(life * Math.PI) * 0.55;
        ctx.fillStyle = `rgba(255, 255, 255, ${fade})`;
        ctx.beginPath();
        ctx.arc(mx, my, m.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. 3D swirling particles moving around both humans (orbiting with the 180° camera)
      for (let i = 0; i < humanAuraMotes.length; i++) {
        const h = humanAuraMotes[i];
        const life = (t * 0.14 + h.phase) % 1;
        const angle = t * h.speed + h.phase * 6.28;

        const x0 = h.lx + Math.cos(angle) * h.orbitRx;
        const y0 = h.ly + Math.sin(angle) * h.orbitRy + life * h.driftY;
        const z0 = h.lz + Math.sin(angle * 0.7) * h.orbitRz;

        const x1 = x0 * cosT - z0 * sinT;
        const z1 = x0 * sinT + z0 * cosT;
        const y2 = y0 * cosP - z1 * sinP;
        const z2 = y0 * sinP + z1 * cosP;

        const persp = fov / Math.max(0.35, camDist + z2);
        const hx = centerX + x1 * sceneScale * persp;
        const hy = centerY + y2 * sceneScale * persp;

        if (hx < -4 || hx > width + 4 || hy < -4 || hy > height + 4) continue;

        const fade = Math.sin(life * Math.PI) * h.maxAlpha;
        ctx.fillStyle = `rgba(255, 255, 255, ${fade})`;
        ctx.beginPath();
        ctx.arc(hx, hy, h.r * persp, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
