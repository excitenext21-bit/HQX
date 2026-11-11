import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Generates a subtle procedural woven/brushed dark stage-deck texture
 * for realistic matte specular response on the stage platform.
 */
function createStageDeckTextures() {
  const size = 512;
  const colorCanvas = document.createElement('canvas');
  colorCanvas.width = size;
  colorCanvas.height = size;
  const cCtx = colorCanvas.getContext('2d');

  const roughCanvas = document.createElement('canvas');
  roughCanvas.width = size;
  roughCanvas.height = size;
  const rCtx = roughCanvas.getContext('2d');

  cCtx.fillStyle = '#1b1c20';
  cCtx.fillRect(0, 0, size, size);

  rCtx.fillStyle = '#c8c8c8';
  rCtx.fillRect(0, 0, size, size);

  // Fine natural woven stage-carpet / dark oak micro-grain
  for (let i = 0; i < 6000; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const w = 1 + Math.random() * 6;
    const h = 1 + Math.random() * 2;
    const v = 22 + Math.floor(Math.random() * 16);
    cCtx.fillStyle = `rgba(${v}, ${v + 1}, ${v + 3}, 0.35)`;
    cCtx.fillRect(x, y, w, h);

    const rv = 175 + Math.floor(Math.random() * 65);
    rCtx.fillStyle = `rgba(${rv}, ${rv}, ${rv}, 0.35)`;
    rCtx.fillRect(x, y, w, h);
  }

  const map = new THREE.CanvasTexture(colorCanvas);
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.repeat.set(5, 3);
  map.colorSpace = THREE.SRGBColorSpace;

  const roughnessMap = new THREE.CanvasTexture(roughCanvas);
  roughnessMap.wrapS = THREE.RepeatWrapping;
  roughnessMap.wrapT = THREE.RepeatWrapping;
  roughnessMap.repeat.set(5, 3);

  return { map, roughnessMap };
}

/**
 * Generates a fine oatmeal/cream boucle upholstery texture for the 4 lounge chairs.
 */
function createFabricTextures() {
  const size = 256;
  const colorCanvas = document.createElement('canvas');
  colorCanvas.width = size;
  colorCanvas.height = size;
  const cCtx = colorCanvas.getContext('2d');

  const bumpCanvas = document.createElement('canvas');
  bumpCanvas.width = size;
  bumpCanvas.height = size;
  const bCtx = bumpCanvas.getContext('2d');

  cCtx.fillStyle = '#dfd0bc';
  cCtx.fillRect(0, 0, size, size);

  bCtx.fillStyle = '#808080';
  bCtx.fillRect(0, 0, size, size);

  for (let y = 0; y < size; y += 2) {
    for (let x = 0; x < size; x += 2) {
      const n = (Math.random() - 0.5) * 16;
      const r = Math.min(255, Math.max(0, 223 + n));
      const g = Math.min(255, Math.max(0, 208 + n * 0.95));
      const b = Math.min(255, Math.max(0, 188 + n * 0.9));
      cCtx.fillStyle = `rgb(${r | 0},${g | 0},${b | 0})`;
      cCtx.fillRect(x, y, 2, 2);

      const bv = Math.min(255, Math.max(0, 128 + n * 2.2));
      bCtx.fillStyle = `rgb(${bv | 0},${bv | 0},${bv | 0})`;
      bCtx.fillRect(x, y, 2, 2);
    }
  }

  const map = new THREE.CanvasTexture(colorCanvas);
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.repeat.set(4, 4);
  map.colorSpace = THREE.SRGBColorSpace;

  const bumpMap = new THREE.CanvasTexture(bumpCanvas);
  bumpMap.wrapS = THREE.RepeatWrapping;
  bumpMap.wrapT = THREE.RepeatWrapping;
  bumpMap.repeat.set(4, 4);

  return { map, bumpMap };
}

/**
 * Generates an ultra-crisp 2048x1024 pure saturated HQX yellow LED backdrop texture
 * with clean sculptural golden medallions and zero text.
 */
function createCurvedScreenTexture(maxAnisotropy = 8) {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  // 1. Deep, vibrant HQX signature yellow base (no whitish desaturation)
  const baseGrad = ctx.createLinearGradient(0, 0, 0, height);
  baseGrad.addColorStop(0, '#FFCC00');
  baseGrad.addColorStop(0.35, '#FFD400');
  baseGrad.addColorStop(0.75, '#FFCC00');
  baseGrad.addColorStop(1, '#F2B800');
  ctx.fillStyle = baseGrad;
  ctx.fillRect(0, 0, width, height);

  // Subtle horizontal curvature shading (pure golden tones, never muddy or white)
  const sideVignette = ctx.createLinearGradient(0, 0, width, 0);
  sideVignette.addColorStop(0, 'rgba(185, 130, 0, 0.16)');
  sideVignette.addColorStop(0.12, 'rgba(255, 204, 0, 0)');
  sideVignette.addColorStop(0.5, 'rgba(255, 226, 20, 0.14)');
  sideVignette.addColorStop(0.88, 'rgba(255, 204, 0, 0)');
  sideVignette.addColorStop(1, 'rgba(185, 130, 0, 0.16)');
  ctx.fillStyle = sideVignette;
  ctx.fillRect(0, 0, width, height);

  // Warm golden-yellow overhead wash pools (keeps rich yellow saturation)
  const spotXs = [0.24, 0.5, 0.76];
  spotXs.forEach((sx) => {
    const rad = ctx.createRadialGradient(
      width * sx,
      height * 0.08,
      10,
      width * sx,
      height * 0.28,
      height * 0.72
    );
    rad.addColorStop(0, 'rgba(255, 234, 40, 0.22)');
    rad.addColorStop(0.55, 'rgba(255, 214, 0, 0.08)');
    rad.addColorStop(1, 'rgba(255, 204, 0, 0)');
    ctx.fillStyle = rad;
    ctx.fillRect(0, 0, width, height);
  });

  // Gentle warm shadow where stage deck meets the bottom edge
  const bottomShade = ctx.createLinearGradient(0, height * 0.86, 0, height);
  bottomShade.addColorStop(0, 'rgba(170, 118, 0, 0)');
  bottomShade.addColorStop(1, 'rgba(140, 92, 0, 0.15)');
  ctx.fillStyle = bottomShade;
  ctx.fillRect(0, height * 0.86, width, height * 0.14);

  // 2. Three clean sculpted translucent golden medallions (pure visual depth, no text)
  const circles = [
    { cx: width * 0.305, cy: height * 0.525, r: height * 0.345 },
    { cx: width * 0.498, cy: height * 0.535, r: height * 0.338 },
    { cx: width * 0.692, cy: height * 0.525, r: height * 0.345 }
  ];

  circles.forEach((c) => {
    ctx.save();
    ctx.beginPath();
    ctx.arc(c.cx, c.cy, c.r, 0, Math.PI * 2);

    const cGrad = ctx.createLinearGradient(
      c.cx - c.r * 0.7,
      c.cy - c.r * 0.4,
      c.cx + c.r * 0.75,
      c.cy + c.r * 0.5
    );
    cGrad.addColorStop(0, 'rgba(218, 158, 0, 0.16)');
    cGrad.addColorStop(0.5, 'rgba(255, 208, 0, 0.06)');
    cGrad.addColorStop(1, 'rgba(255, 232, 55, 0.18)');
    ctx.fillStyle = cGrad;
    ctx.fill();

    ctx.lineWidth = 2;
    const rimGrad = ctx.createLinearGradient(
      c.cx - c.r,
      c.cy - c.r * 0.5,
      c.cx + c.r,
      c.cy + c.r * 0.5
    );
    rimGrad.addColorStop(0, 'rgba(195, 138, 0, 0.22)');
    rimGrad.addColorStop(0.5, 'rgba(255, 208, 0, 0.05)');
    rimGrad.addColorStop(1, 'rgba(255, 236, 95, 0.36)');
    ctx.strokeStyle = rimGrad;
    ctx.stroke();
    ctx.restore();
  });

  // 3. Subtle fine-pitch LED screen texture
  ctx.fillStyle = 'rgba(0, 0, 0, 0.012)';
  for (let y = 0; y < height; y += 4) {
    ctx.fillRect(0, y, width, 1);
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = Math.min(16, maxAnisotropy);
  tex.needsUpdate = true;
  return tex;
}

/**
 * Soft radial contact-shadow / light-pool texture for grounding furniture and step lights.
 */
function createRadialGlowTexture(innerRgba, outerRgba) {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(
    size / 2,
    size / 2,
    4,
    size / 2,
    size / 2,
    size / 2
  );
  grad.addColorStop(0, innerRgba);
  grad.addColorStop(0.45, innerRgba.replace(/[\d.]+\)$/, '0.28)'));
  grad.addColorStop(1, outerRgba);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * Soft vertical gradient texture for ultra-subtle overhead stage light beams.
 */
function createLightBeamTexture() {
  const w = 128;
  const h = 256;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');

  // Vertical falloff
  const vGrad = ctx.createLinearGradient(0, 0, 0, h);
  vGrad.addColorStop(0, 'rgba(255, 240, 200, 0.65)');
  vGrad.addColorStop(0.25, 'rgba(255, 232, 180, 0.25)');
  vGrad.addColorStop(0.75, 'rgba(255, 224, 160, 0.06)');
  vGrad.addColorStop(1, 'rgba(255, 220, 150, 0.0)');
  ctx.fillStyle = vGrad;
  ctx.fillRect(0, 0, w, h);

  // Horizontal soft feather mask using destination-in
  ctx.globalCompositeOperation = 'destination-in';
  const hGrad = ctx.createLinearGradient(0, 0, w, 0);
  hGrad.addColorStop(0, 'rgba(0,0,0,0)');
  hGrad.addColorStop(0.5, 'rgba(0,0,0,1)');
  hGrad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = hGrad;
  ctx.fillRect(0, 0, w, h);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * Builds a smooth concave curved LED screen surface + solid architectural outer shell.
 * Vertices lie along a circular arc centered at (0, 0, arcCenterZ) with radius R.
 */
function buildCurvedScreenGeometry({
  radius = 12.0,
  arcAngle = 0.72,
  height = 3.25,
  segX = 96,
  segY = 24,
  thickness = 0.09,
  arcCenterZ = 10.4
}) {
  // Inner glowing LED face (concave, facing +Z toward audience)
  const frontGeo = new THREE.BufferGeometry();
  const positions = [];
  const uvs = [];
  const indices = [];

  for (let iy = 0; iy <= segY; iy++) {
    const v = iy / segY;
    const y = v * height;
    for (let ix = 0; ix <= segX; ix++) {
      const u = ix / segX;
      const theta = (u - 0.5) * arcAngle;
      const x = radius * Math.sin(theta);
      const z = arcCenterZ - radius * Math.cos(theta);
      positions.push(x, y, z);
      uvs.push(u, v);
    }
  }

  const stride = segX + 1;
  for (let iy = 0; iy < segY; iy++) {
    for (let ix = 0; ix < segX; ix++) {
      const a = iy * stride + ix;
      const b = a + 1;
      const c = a + stride;
      const d = c + 1;
      indices.push(a, b, d, a, d, c);
    }
  }

  frontGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  frontGeo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  frontGeo.setIndex(indices);
  frontGeo.computeVertexNormals();

  // Architectural outer cabinet casing (slightly larger radius + top/bottom/side edges)
  const outerR = radius + thickness;
  const cabinetHeight = height + 0.08;
  const cabinetArc = arcAngle + 0.025;
  const backGeo = new THREE.BufferGeometry();
  const bPos = [];
  const bIdx = [];

  // Build closed curved slab: front rim (at radius+0.004) and back shell (at outerR)
  // Using 2 layers: inner shell (index 0..segX) and outer shell (segX+1..2*segX+1)
  const layersY = 2;
  const ringCount = (segX + 1) * 2;

  for (let iy = 0; iy <= layersY; iy++) {
    const y = (iy / layersY) * cabinetHeight - 0.02;
    // Inner face offset slightly behind LED screen
    for (let ix = 0; ix <= segX; ix++) {
      const u = ix / segX;
      const theta = (u - 0.5) * cabinetArc;
      bPos.push(
        (radius + 0.005) * Math.sin(theta),
        y,
        arcCenterZ - (radius + 0.005) * Math.cos(theta)
      );
    }
    // Outer back face
    for (let ix = 0; ix <= segX; ix++) {
      const u = ix / segX;
      const theta = (u - 0.5) * cabinetArc;
      bPos.push(
        outerR * Math.sin(theta),
        y,
        arcCenterZ - outerR * Math.cos(theta)
      );
    }
  }

  for (let iy = 0; iy < layersY; iy++) {
    const base = iy * ringCount;
    const next = (iy + 1) * ringCount;
    for (let ix = 0; ix < segX; ix++) {
      // Back wall outward
      const ob1 = base + (segX + 1) + ix;
      const ob2 = ob1 + 1;
      const ot1 = next + (segX + 1) + ix;
      const ot2 = ot1 + 1;
      bIdx.push(ob1, ot1, ot2, ob1, ot2, ob2);
    }
  }

  // Top cap
  const topBase = layersY * ringCount;
  for (let ix = 0; ix < segX; ix++) {
    const f1 = topBase + ix;
    const f2 = f1 + 1;
    const b1 = topBase + (segX + 1) + ix;
    const b2 = b1 + 1;
    bIdx.push(f1, f2, b2, f1, b2, b1);
  }

  // Left and right side end caps
  for (let iy = 0; iy < layersY; iy++) {
    const base = iy * ringCount;
    const next = (iy + 1) * ringCount;
    // Left cap (ix = 0)
    bIdx.push(
      base,
      next,
      next + (segX + 1),
      base,
      next + (segX + 1),
      base + (segX + 1)
    );
    // Right cap (ix = segX)
    const rf = base + segX;
    const rb = base + (segX + 1) + segX;
    const nrf = next + segX;
    const nrb = next + (segX + 1) + segX;
    bIdx.push(rf, rb, nrb, rf, nrb, nrf);
  }

  backGeo.setAttribute('position', new THREE.Float32BufferAttribute(bPos, 3));
  backGeo.setIndex(bIdx);
  backGeo.computeVertexNormals();

  return { frontGeo, backGeo };
}

/**
 * Builds a realistic sculpted rounded lounge armchair shell (smooth parametric U-shell
 * with flared backrest, swooping armrests, rolled lip, plump seat cushion, and 4 splayed steel legs).
 */
function createLoungeChair(fabricMat, cushionMat, metalMat, shadowTex) {
  const chair = new THREE.Group();

  // 1. Sculpted wrap-around upholstered shell (closed inner + outer wall + smooth rolled rim)
  const uSegs = 40;
  const vSegs = 14;
  const uMax = Math.PI * 0.78;
  const baseRx = 0.365;
  const baseRz = 0.345;
  const wallThick = 0.058;

  const shellGeo = new THREE.BufferGeometry();
  const sPos = [];
  const sUv = [];
  const sIdx = [];

  // Loop profile `p` from 0..1:
  // 0 -> bottom outer, 0.42 -> top outer, 0.50 -> top rim crest, 0.58 -> top inner, 1.0 -> bottom inner
  const pSegs = vSegs * 2 + 2;

  for (let ip = 0; ip <= pSegs; ip++) {
    const tLoop = ip / pSegs; // 0..1 around cross-section
    const isOuter = tLoop <= 0.5;
    // Normalized height 0 (bottom) .. 1 (top rim)
    const hNorm = isOuter
      ? Math.min(1, tLoop / 0.46)
      : Math.min(1, (1 - tLoop) / 0.46);
    const rimBlend = Math.sin(Math.min(1, Math.max(0, (tLoop - 0.42) / 0.16)) * Math.PI);

    for (let iu = 0; iu <= uSegs; iu++) {
      const uFrac = iu / uSegs;
      const u = (uFrac - 0.5) * 2 * uMax; // -uMax .. +uMax (0 = center back)

      // Smoothly taller backrest behind, swooping down into curved arms on the sides
      const backWeight = Math.pow(Math.max(0, Math.cos((u / uMax) * (Math.PI * 0.52))), 1.25);
      const localTopH = 0.32 + 0.25 * backWeight;
      const yBase = 0.255;

      // Slight ergonomic flare outward as shell rises
      const flare = 1 + 0.14 * Math.pow(hNorm, 1.3) + 0.03 * rimBlend;
      const radialOffset = isOuter
        ? wallThick * (0.5 - 0.15 * rimBlend)
        : -wallThick * (0.5 - 0.15 * rimBlend);

      const rx = baseRx * flare + radialOffset;
      const rz = baseRz * flare + radialOffset;

      const x = rx * Math.sin(u);
      const z = -rz * Math.cos(u) + 0.02;
      const y = yBase + hNorm * localTopH + rimBlend * 0.016;

      sPos.push(x, y, z);
      sUv.push(uFrac * 2, tLoop * 2);
    }
  }

  const rowStride = uSegs + 1;
  for (let ip = 0; ip < pSegs; ip++) {
    for (let iu = 0; iu < uSegs; iu++) {
      const a = ip * rowStride + iu;
      const b = a + 1;
      const c = a + rowStride;
      const d = c + 1;
      sIdx.push(a, c, d, a, d, b);
    }
  }

  // Close left & right front armrest end-caps cleanly so no hollow cross-section is visible
  for (let ip = 0; ip < vSegs; ip++) {
    const o1 = ip * rowStride;
    const o2 = (ip + 1) * rowStride;
    const i1 = (pSegs - ip) * rowStride;
    const i2 = (pSegs - ip - 1) * rowStride;
    // Left armrest front face (iu = 0)
    sIdx.push(o1, i1, i2, o1, i2, o2);

    // Right armrest front face (iu = uSegs)
    const ro1 = o1 + uSegs;
    const ro2 = o2 + uSegs;
    const ri1 = i1 + uSegs;
    const ri2 = i2 + uSegs;
    sIdx.push(ro1, ro2, ri2, ro1, ri2, ri1);
  }

  shellGeo.setAttribute('position', new THREE.Float32BufferAttribute(sPos, 3));
  shellGeo.setAttribute('uv', new THREE.Float32BufferAttribute(sUv, 2));
  shellGeo.setIndex(sIdx);
  shellGeo.computeVertexNormals();

  const shellMesh = new THREE.Mesh(shellGeo, fabricMat);
  shellMesh.castShadow = true;
  shellMesh.receiveShadow = true;
  chair.add(shellMesh);

  // 2. Under-seat upholstered cradle bowl (closes bottom cleanly)
  const underBowlGeo = new THREE.CylinderGeometry(0.355, 0.275, 0.085, 32);
  const underBowl = new THREE.Mesh(underBowlGeo, fabricMat);
  underBowl.position.set(0, 0.28, 0.02);
  underBowl.castShadow = true;
  underBowl.receiveShadow = true;
  chair.add(underBowl);

  // 3. Plump sculpted seat cushion (soft rounded pillow dome)
  const cushionGeo = new THREE.SphereGeometry(0.315, 32, 20);
  cushionGeo.scale(1.02, 0.24, 0.98);
  const cushion = new THREE.Mesh(cushionGeo, cushionMat);
  cushion.position.set(0, 0.365, 0.055);
  cushion.castShadow = true;
  cushion.receiveShadow = true;
  chair.add(cushion);

  // Subtle inner lumbar pillow accent nestled against the curved back
  const lumbarGeo = new THREE.SphereGeometry(0.24, 24, 16);
  lumbarGeo.scale(1.08, 0.56, 0.34);
  const lumbar = new THREE.Mesh(lumbarGeo, cushionMat);
  lumbar.position.set(0, 0.49, -0.155);
  lumbar.rotation.x = 0.24;
  lumbar.castShadow = true;
  lumbar.receiveShadow = true;
  chair.add(lumbar);

  // 4. Matte black central spider hub + 4 splayed tapered steel legs
  const hubGeo = new THREE.CylinderGeometry(0.085, 0.065, 0.03, 18);
  const hub = new THREE.Mesh(hubGeo, metalMat);
  hub.position.set(0, 0.235, 0.02);
  chair.add(hub);

  const legDirs = [
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1]
  ];
  legDirs.forEach(([sx, sz]) => {
    const topPos = new THREE.Vector3(sx * 0.045, 0.235, 0.02 + sz * 0.045);
    const footPos = new THREE.Vector3(sx * 0.255, 0.002, 0.02 + sz * 0.245);
    const dir = new THREE.Vector3().subVectors(footPos, topPos);
    const len = dir.length();

    const legGeo = new THREE.CylinderGeometry(0.015, 0.0085, len, 12);
    const leg = new THREE.Mesh(legGeo, metalMat);
    leg.position.copy(topPos).addScaledVector(dir, 0.5);
    leg.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
    leg.castShadow = true;
    chair.add(leg);

    // Tiny floor contact shadow under each leg tip
    const tipShadow = new THREE.Mesh(
      new THREE.PlaneGeometry(0.11, 0.11),
      new THREE.MeshBasicMaterial({
        map: shadowTex,
        transparent: true,
        opacity: 0.55,
        depthWrite: false
      })
    );
    tipShadow.rotation.x = -Math.PI / 2;
    tipShadow.position.set(footPos.x, 0.002, footPos.z);
    chair.add(tipShadow);
  });

  // Soft wide ambient-occlusion shadow beneath the chair body
  const bodyShadow = new THREE.Mesh(
    new THREE.PlaneGeometry(0.86, 0.86),
    new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: 0.62,
      depthWrite: false
    })
  );
  bodyShadow.rotation.x = -Math.PI / 2;
  bodyShadow.position.set(0, 0.0025, 0.03);
  chair.add(bodyShadow);

  return chair;
}

/**
 * Builds the minimalist executive coffee table + restrained stage props.
 */
function createCoffeeTable(metalMat, shadowTex) {
  const table = new THREE.Group();

  // Matte stone / warm travertine top
  const topMat = new THREE.MeshStandardMaterial({
    color: 0xe9e3d7,
    roughness: 0.45,
    metalness: 0.05
  });
  const topGeo = new THREE.CylinderGeometry(0.41, 0.405, 0.024, 48);
  const top = new THREE.Mesh(topGeo, topMat);
  top.position.y = 0.445;
  top.castShadow = true;
  top.receiveShadow = true;
  table.add(top);

  // Dark anodized edge band under top
  const rimGeo = new THREE.CylinderGeometry(0.413, 0.40, 0.012, 48);
  const rim = new THREE.Mesh(rimGeo, metalMat);
  rim.position.y = 0.431;
  rim.castShadow = true;
  table.add(rim);

  // Pedestal stem
  const stemGeo = new THREE.CylinderGeometry(0.02, 0.022, 0.42, 20);
  const stem = new THREE.Mesh(stemGeo, metalMat);
  stem.position.y = 0.22;
  stem.castShadow = true;
  table.add(stem);

  // Weighted base plate
  const baseGeo = new THREE.CylinderGeometry(0.22, 0.23, 0.016, 40);
  const base = new THREE.Mesh(baseGeo, metalMat);
  base.position.y = 0.008;
  base.castShadow = true;
  base.receiveShadow = true;
  table.add(base);

  // Two subtle dark matte tumblers on coasters (realistic keynote stage detail)
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x202226,
    roughness: 0.18,
    metalness: 0.1,
    clearcoat: 0.7,
    clearcoatRoughness: 0.15
  });
  [
    [-0.12, -0.06],
    [0.13, 0.05]
  ].forEach(([gx, gz]) => {
    const coaster = new THREE.Mesh(
      new THREE.CylinderGeometry(0.044, 0.044, 0.004, 24),
      metalMat
    );
    coaster.position.set(gx, 0.459, gz);
    table.add(coaster);

    const glass = new THREE.Mesh(
      new THREE.CylinderGeometry(0.032, 0.026, 0.088, 20),
      glassMat
    );
    glass.position.set(gx, 0.504, gz);
    glass.castShadow = true;
    table.add(glass);
  });

  // Table base contact shadow
  const shadow = new THREE.Mesh(
    new THREE.PlaneGeometry(0.75, 0.75),
    new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: 0.65,
      depthWrite: false
    })
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.position.y = 0.0025;
  table.add(shadow);

  return table;
}

export default function ConferenceStage3D({ children }) {
  const containerRef = useRef(null);
  const contentOverlayRef = useRef(null);
  const [webglReady, setWebglReady] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        powerPreference: 'high-performance',
        alpha: false
      });
    } catch {
      setWebglReady(false);
      return;
    }

    const width = container.clientWidth || 1060;
    const height = container.clientHeight || 540;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.045);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 60);
    const baseCamPos = new THREE.Vector3(0, 2.04, 11.4);
    const baseLookAt = new THREE.Vector3(0, 2.20, -0.3);

    const updateResponsiveCameraFov = (w, h) => {
      const aspect = Math.max(0.4, w / Math.max(1, h));
      // Keep the wide curved stage expansive across wide desktops and framed on portrait screens
      const responsiveFov = aspect < 1.45
        ? THREE.MathUtils.clamp(42 + (1.45 - aspect) * 28, 42, 66)
        : 42;
      camera.fov = responsiveFov;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
    };
    updateResponsiveCameraFov(width, height);
    camera.position.copy(baseCamPos);
    camera.lookAt(baseLookAt);

    // --- Textures & Shared Materials ---
    const maxAniso = renderer.capabilities.getMaxAnisotropy();
    const { map: deckMap, roughnessMap: deckRough } = createStageDeckTextures();
    const { map: fabricMap, bumpMap: fabricBump } = createFabricTextures();
    const screenTex = createCurvedScreenTexture(maxAniso);
    const contactShadowTex = createRadialGlowTexture(
      'rgba(0, 0, 0, 0.85)',
      'rgba(0, 0, 0, 0)'
    );
    const warmPoolTex = createRadialGlowTexture(
      'rgba(255, 224, 150, 0.55)',
      'rgba(255, 210, 120, 0)'
    );
    const glareTex = createRadialGlowTexture(
      'rgba(255, 246, 214, 0.95)',
      'rgba(255, 225, 140, 0)'
    );
    const beamTex = createLightBeamTexture();

    const disposables = [
      deckMap,
      deckRough,
      fabricMap,
      fabricBump,
      screenTex,
      contactShadowTex,
      warmPoolTex,
      glareTex,
      beamTex
    ];

    const deckMat = new THREE.MeshStandardMaterial({
      map: deckMap,
      roughnessMap: deckRough,
      roughness: 0.82,
      metalness: 0.08
    });

    const stepRiserMat = new THREE.MeshStandardMaterial({
      color: 0x111216,
      roughness: 0.72,
      metalness: 0.18
    });

    const trimMetalMat = new THREE.MeshStandardMaterial({
      color: 0x26282e,
      roughness: 0.42,
      metalness: 0.65
    });

    const matteBlackMetalMat = new THREE.MeshStandardMaterial({
      color: 0x121316,
      roughness: 0.46,
      metalness: 0.62
    });

    const chairFabricMat = new THREE.MeshPhysicalMaterial({
      map: fabricMap,
      bumpMap: fabricBump,
      bumpScale: 0.004,
      color: 0xeadbc8,
      roughness: 0.88,
      metalness: 0.0,
      sheen: 0.42,
      sheenRoughness: 0.76,
      sheenColor: new THREE.Color(0xfff1d8)
    });

    const cushionMat = new THREE.MeshPhysicalMaterial({
      map: fabricMap,
      bumpMap: fabricBump,
      bumpScale: 0.003,
      color: 0xf1e3d1,
      roughness: 0.86,
      metalness: 0.0,
      sheen: 0.35,
      sheenRoughness: 0.78,
      sheenColor: new THREE.Color(0xfff4e0)
    });

    disposables.push(
      deckMat,
      stepRiserMat,
      trimMetalMat,
      matteBlackMetalMat,
      chairFabricMat,
      cushionMat
    );

    // --- 1. Auditorium Floor ---
    const floorGeo = new THREE.PlaneGeometry(42, 32);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x070709,
      roughness: 0.56,
      metalness: 0.14
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = true;
    scene.add(floor);
    disposables.push(floorGeo, floorMat);

    // --- 2. Wide Three-Tiered Architectural Stage Platform ---
    const stageGroup = new THREE.Group();
    const tiers = [
      { w: 15.2, d: 4.85, h: 0.13, y: 0.065, z: 0.25, isTop: false },
      { w: 14.5, d: 4.4, h: 0.14, y: 0.2, z: 0.05, isTop: false },
      { w: 13.8, d: 3.95, h: 0.15, y: 0.345, z: -0.15, isTop: true }
    ];

    tiers.forEach((t) => {
      const geo = new THREE.BoxGeometry(t.w, t.h, t.d);
      const mesh = new THREE.Mesh(geo, t.isTop ? deckMat : stepRiserMat);
      mesh.position.set(0, t.y, t.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      stageGroup.add(mesh);
      disposables.push(geo);

      // Subtle dark brushed metallic nosing trim on front edge of each step
      const nosingGeo = new THREE.BoxGeometry(t.w + 0.01, 0.016, 0.028);
      const nosing = new THREE.Mesh(nosingGeo, trimMetalMat);
      nosing.position.set(0, t.y + t.h / 2 - 0.008, t.z + t.d / 2);
      stageGroup.add(nosing);
      disposables.push(nosingGeo);
    });

    // Recessed warm architectural step lights with dark metal bezel along front riser
    const stepLightMat = new THREE.MeshBasicMaterial({ color: 0xffdfa0 });
    disposables.push(stepLightMat);
    const stepLightXs = [-5.4, -3.6, -1.8, 0, 1.8, 3.6, 5.4];
    stepLightXs.forEach((lx) => {
      const bezelGeo = new THREE.BoxGeometry(0.095, 0.036, 0.012);
      const bezel = new THREE.Mesh(bezelGeo, matteBlackMetalMat);
      bezel.position.set(lx, 0.072, 2.674);
      stageGroup.add(bezel);

      const fixtureGeo = new THREE.BoxGeometry(0.062, 0.02, 0.015);
      const fixture = new THREE.Mesh(fixtureGeo, stepLightMat);
      fixture.position.set(lx, 0.072, 2.676);
      stageGroup.add(fixture);
      disposables.push(bezelGeo, fixtureGeo);

      // Soft warm light pool cast onto auditorium floor directly below each step light
      const poolGeo = new THREE.PlaneGeometry(0.95, 0.78);
      const poolMat = new THREE.MeshBasicMaterial({
        map: warmPoolTex,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const pool = new THREE.Mesh(poolGeo, poolMat);
      pool.rotation.x = -Math.PI / 2;
      pool.position.set(lx, 0.003, 2.88);
      stageGroup.add(pool);
      disposables.push(poolGeo, poolMat);
    });

    scene.add(stageGroup);

    // Top surface Y of main stage deck
    const deckTopY = 0.42;

    // --- 3. Wide Curved Architectural LED Screen Backdrop ---
    const screenRadius = 15.2;
    const screenArc = 0.94;
    const screenHeight = 4.305;
    const screenCenterZ = 13.5;
    const { frontGeo, backGeo } = buildCurvedScreenGeometry({
      radius: screenRadius,
      arcAngle: screenArc,
      height: screenHeight,
      segX: 112,
      segY: 24,
      thickness: 0.12,
      arcCenterZ: screenCenterZ
    });

    // LED screen material: rich saturated HQX yellow without white spotlight washout
    const screenMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xffd200),
      map: screenTex,
      emissiveMap: screenTex,
      emissive: new THREE.Color(0xffcf00),
      emissiveIntensity: 0.76,
      roughness: 0.94,
      metalness: 0.0
    });

    const screenMesh = new THREE.Mesh(frontGeo, screenMat);
    screenMesh.position.y = deckTopY + 0.01;
    screenMesh.receiveShadow = true;
    scene.add(screenMesh);

    const cabinetMat = new THREE.MeshStandardMaterial({
      color: 0x0c0d10,
      roughness: 0.52,
      metalness: 0.45
    });
    const cabinetMesh = new THREE.Mesh(backGeo, cabinetMat);
    cabinetMesh.position.y = deckTopY + 0.01;
    cabinetMesh.castShadow = true;
    scene.add(cabinetMesh);

    // Side dark matte architectural wing pillars framing the curved screen
    [-1, 1].forEach((side) => {
      const wingAngle = side * (screenArc / 2 + 0.018);
      const wx = (screenRadius + 0.06) * Math.sin(wingAngle);
      const wz = screenCenterZ - (screenRadius + 0.06) * Math.cos(wingAngle);
      const wingGeo = new THREE.BoxGeometry(0.2, screenHeight + 0.1, 0.26);
      const wing = new THREE.Mesh(wingGeo, cabinetMat);
      wing.position.set(wx, deckTopY + screenHeight / 2 + 0.01, wz);
      wing.rotation.y = -wingAngle;
      wing.castShadow = true;
      scene.add(wing);
      disposables.push(wingGeo);
    });

    disposables.push(frontGeo, backGeo, screenMat, cabinetMat);

    // --- 4. Four Sculpted Lounge Armchairs + Minimalist Center Coffee Table ---
    const furnitureGroup = new THREE.Group();
    furnitureGroup.position.y = deckTopY;

    const chairPlacements = [
      { x: -3.22, z: 0.48, rotY: 0.34 },
      { x: -1.45, z: -0.08, rotY: 0.16 },
      { x: 1.45, z: -0.08, rotY: -0.16 },
      { x: 3.22, z: 0.48, rotY: -0.34 }
    ];

    chairPlacements.forEach((p) => {
      const chair = createLoungeChair(
        chairFabricMat,
        cushionMat,
        matteBlackMetalMat,
        contactShadowTex
      );
      chair.position.set(p.x, 0, p.z);
      chair.rotation.y = p.rotY;
      chair.scale.setScalar(1.12);
      furnitureGroup.add(chair);
    });

    const coffeeTable = createCoffeeTable(matteBlackMetalMat, contactShadowTex);
    coffeeTable.position.set(0, 0, 0.14);
    coffeeTable.scale.setScalar(1.06);
    furnitureGroup.add(coffeeTable);

    scene.add(furnitureGroup);

    // --- 5. Overhead Theatrical Rigging Truss & Spotlights ---
    const rigGroup = new THREE.Group();
    const trussBarGeo = new THREE.CylinderGeometry(0.035, 0.035, 16.0, 16);
    const trussBar = new THREE.Mesh(trussBarGeo, matteBlackMetalMat);
    trussBar.rotation.z = Math.PI / 2;
    trussBar.position.set(0, 5.45, 1.45);
    rigGroup.add(trussBar);
    disposables.push(trussBarGeo);

    const fixtureXs = [-5.4, -3.6, -1.8, 0, 1.8, 3.6, 5.4];
    fixtureXs.forEach((fx) => {
      const canGeo = new THREE.CylinderGeometry(0.065, 0.08, 0.2, 16);
      const can = new THREE.Mesh(canGeo, matteBlackMetalMat);
      can.position.set(fx, 5.34, 1.42);
      can.rotation.x = 0.42;
      can.rotation.z = -fx * 0.025;
      rigGroup.add(can);
      disposables.push(canGeo);

      // Subtle warm lens glint at the front of each overhead par can
      const glintMat = new THREE.SpriteMaterial({
        map: glareTex,
        color: 0xfff3d4,
        transparent: true,
        opacity: 0.72,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const glint = new THREE.Sprite(glintMat);
      glint.position.set(fx, 5.25, 1.36);
      glint.scale.set(0.42, 0.42, 1);
      rigGroup.add(glint);
      disposables.push(glintMat);

      // Whisper-soft atmospheric beam cone aimed toward stage
      const beamGeo = new THREE.PlaneGeometry(1.65, 4.7);
      const beamMat = new THREE.MeshBasicMaterial({
        map: beamTex,
        transparent: true,
        opacity: 0.045,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide
      });
      const beam = new THREE.Mesh(beamGeo, beamMat);
      beam.position.set(fx * 0.86, 2.95, 0.6);
      beam.rotation.x = 0.34;
      beam.rotation.z = -fx * 0.03;
      rigGroup.add(beam);
      disposables.push(beamGeo, beamMat);
    });
    scene.add(rigGroup);

    // --- 6. Natural Stage Lighting Setup ---
    // Low ambient fill from auditorium
    const hemiLight = new THREE.HemisphereLight(0xffe9bd, 0x0b0b0e, 0.42);
    scene.add(hemiLight);

    // Main warm overhead key spotlight casting soft grounded shadows from chairs & table
    const keySpot = new THREE.SpotLight(0xfff1d4, 58, 22, Math.PI / 4.2, 0.85, 1.45);
    keySpot.position.set(1.2, 5.2, 3.8);
    keySpot.target.position.set(0, 0.55, 0.0);
    keySpot.castShadow = true;
    keySpot.shadow.mapSize.set(2048, 2048);
    keySpot.shadow.camera.near = 1.5;
    keySpot.shadow.camera.far = 14;
    keySpot.shadow.bias = -0.0004;
    keySpot.shadow.normalBias = 0.025;
    scene.add(keySpot);
    scene.add(keySpot.target);

    // Secondary balanced fill spotlight from stage-left
    const fillSpot = new THREE.SpotLight(0xffe7ba, 38, 20, Math.PI / 3.8, 0.9, 1.5);
    fillSpot.position.set(-2.4, 4.8, 3.4);
    fillSpot.target.position.set(-0.4, 0.5, 0.1);
    scene.add(fillSpot);
    scene.add(fillSpot.target);

    // Physical golden-yellow bounce illumination emitted FROM the curved LED wall onto chairs & stage floor
    [-2.1, 0, 2.1].forEach((bx) => {
      const bounce = new THREE.PointLight(0xffcb1f, 3.2, 5.8, 1.8);
      bounce.position.set(bx, 1.55, -0.75);
      scene.add(bounce);
    });

    // Subtle rim light from behind-above so chair edges separate crisply
    const frontRim = new THREE.DirectionalLight(0xfff4dd, 0.55);
    frontRim.position.set(0, 3.0, 5.5);
    scene.add(frontRim);

    // --- 7. Subtle Natural Camera Parallax + Gentle Orbit Control ---
    const targetOffset = { yaw: 0, pitch: 0 };
    const currentOffset = { yaw: 0, pitch: 0 };
    let isDragging = false;
    let dragStart = { x: 0, y: 0, yaw: 0, pitch: 0 };
    let dragYawBias = 0;
    let dragPitchBias = 0;

    const el = renderer.domElement;
    el.style.cursor = 'grab';

    const onPointerDown = (e) => {
      isDragging = true;
      el.style.cursor = 'grabbing';
      dragStart = {
        x: e.clientX,
        y: e.clientY,
        yaw: dragYawBias,
        pitch: dragPitchBias
      };
    };

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      if (isDragging) {
        const dx = (e.clientX - dragStart.x) / rect.width;
        const dy = (e.clientY - dragStart.y) / rect.height;
        dragYawBias = THREE.MathUtils.clamp(dragStart.yaw - dx * 0.42, -0.24, 0.24);
        dragPitchBias = THREE.MathUtils.clamp(dragStart.pitch + dy * 0.16, -0.07, 0.09);
      } else {
        const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        targetOffset.yaw = nx * 0.055;
        targetOffset.pitch = -ny * 0.025;
      }
    };

    const onPointerUp = () => {
      if (isDragging) {
        isDragging = false;
        el.style.cursor = 'grab';
      }
    };

    const onPointerLeave = () => {
      isDragging = false;
      el.style.cursor = 'grab';
      targetOffset.yaw = 0;
      targetOffset.pitch = 0;
    };

    el.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    el.addEventListener('pointerleave', onPointerLeave);

    // ResizeObserver for crisp responsive sizing
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = Math.max(1, entry.contentRect.width);
        const h = Math.max(1, entry.contentRect.height);
        updateResponsiveCameraFov(w, h);
        renderer.setSize(w, h);
      }
    });
    resizeObserver.observe(container);

    // Animation loop + 3D-synced stage screen content transform
    let animId = 0;
    const clock = new THREE.Clock();
    const camOrbitDist = baseCamPos.distanceTo(baseLookAt);
    // World-space vertical center of the luminous yellow curved LED wall (above chairs)
    const screenAnchor = new THREE.Vector3(0, 2.58, -1.68);
    const baseAnchorDist = baseCamPos.distanceTo(screenAnchor);
    const projectedPos = new THREE.Vector3();
    const camToAnchor = new THREE.Vector3();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Subtle living auditorium breath when idle
      const idleYaw = Math.sin(t * 0.38) * 0.012;
      const idlePitch = Math.cos(t * 0.27) * 0.004;

      const desiredYaw = dragYawBias + targetOffset.yaw + idleYaw;
      const desiredPitch = dragPitchBias + targetOffset.pitch + idlePitch;

      currentOffset.yaw += (desiredYaw - currentOffset.yaw) * 0.065;
      currentOffset.pitch += (desiredPitch - currentOffset.pitch) * 0.065;

      const baseYaw = Math.atan2(
        baseCamPos.x - baseLookAt.x,
        baseCamPos.z - baseLookAt.z
      );
      const basePitch = Math.asin(
        (baseCamPos.y - baseLookAt.y) / camOrbitDist
      );

      const yaw = baseYaw + currentOffset.yaw;
      const pitch = THREE.MathUtils.clamp(basePitch + currentOffset.pitch, -0.05, 0.24);

      camera.position.set(
        baseLookAt.x + camOrbitDist * Math.cos(pitch) * Math.sin(yaw),
        baseLookAt.y + camOrbitDist * Math.sin(pitch),
        baseLookAt.z + camOrbitDist * Math.cos(pitch) * Math.cos(yaw)
      );
      camera.lookAt(baseLookAt);
      camera.updateMatrixWorld();

      // Project & orient hero content so it locks onto and moves WITH the 3D curved screen
      const overlayEl = contentOverlayRef.current;
      if (overlayEl) {
        const cw = container.clientWidth || width;
        const ch = container.clientHeight || height;
        projectedPos.copy(screenAnchor).project(camera);
        const tx = projectedPos.x * 0.5 * cw;
        const ty = -projectedPos.y * 0.5 * ch;

        camToAnchor.subVectors(camera.position, screenAnchor);
        const curDist = camToAnchor.length();
        const scale = THREE.MathUtils.clamp(baseAnchorDist / Math.max(1, curDist), 0.72, 1.32);
        const relYawDeg = Math.atan2(camToAnchor.x, camToAnchor.z) * (180 / Math.PI);
        const relPitchDeg =
          Math.atan2(camToAnchor.y, Math.hypot(camToAnchor.x, camToAnchor.z)) * (180 / Math.PI);

        overlayEl.style.transform =
          `translate3d(calc(-50% + ${tx.toFixed(2)}px), calc(-50% + ${ty.toFixed(2)}px), 0) ` +
          `perspective(1100px) rotateY(${(-relYawDeg).toFixed(2)}deg) rotateX(${(-relPitchDeg * 0.65).toFixed(2)}deg) ` +
          `scale(${scale.toFixed(4)})`;
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      el.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('pointerleave', onPointerLeave);

      disposables.forEach((item) => {
        if (item && typeof item.dispose === 'function') {
          item.dispose();
        }
      });

      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });

      renderer.dispose();
      if (el.parentNode === container) {
        container.removeChild(el);
      }
    };
  }, []);

  if (!webglReady) {
    return (
      <div className="relative w-full h-full bg-gradient-to-b from-[#0A0A0A] via-[#FFCC00] to-[#0A0A0A] flex items-center justify-center px-8">
        <div className="w-full max-w-2xl text-center">{children}</div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        ref={containerRef}
        aria-label="Interactive 3D HQX Keynotes & Friday Talks Curved Conference Stage"
        className="w-full h-full select-none touch-pan-y"
      />
      {/* Smooth Edge Vignette Integrating Auditorium Seamlessly into #0A0A0A */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, #0A0A0A 0%, transparent 3.5%, transparent 96.5%, #0A0A0A 100%), linear-gradient(180deg, #0A0A0A 0%, transparent 9%, transparent 93%, #0A0A0A 100%)'
        }}
      />
      {/* 3D-Tracked Screen Content Layer (Moves & Tilts with the 3D Stage Screen on Drag/Orbit) */}
      {children && (
        <div
          ref={contentOverlayRef}
          className="absolute left-1/2 top-1/2 z-10 w-[min(90vw,44rem)] pointer-events-none will-change-transform origin-center"
          style={{ transform: 'translate3d(-50%, -50%, 0)' }}
        >
          {children}
        </div>
      )}
      {/* Subtle Non-Intrusive 3D Cue */}
      <div className="hidden sm:flex items-center gap-1.5 absolute bottom-4 right-6 pointer-events-none text-[10px] font-mono uppercase tracking-widest text-white/40 z-20">
        <span className="w-1.5 h-1.5 rounded-full bg-hq-yellow/80" />
        <span>Interactive 3D Stage • Drag to Orbit</span>
      </div>
    </div>
  );
}

