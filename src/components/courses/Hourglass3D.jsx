import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Blown-glass profile matching the warm golden-rim studio reference:
 * wide rounded upper bulb, tight pinched waist, generous teardrop lower bulb, flat glass base.
 */
function sampleOuterRadius(y) {
  const yMin = -1.78;
  const yMax = 1.66;
  const t = THREE.MathUtils.clamp((y - yMin) / (yMax - yMin), 0, 1);

  if (t < 0.03) {
    const bt = t / 0.03;
    return THREE.MathUtils.lerp(0.0, 0.56, Math.sin(bt * Math.PI * 0.5));
  }
  if (t < 0.52) {
    const lt = (t - 0.03) / 0.49;
    if (lt < 0.34) {
      return THREE.MathUtils.lerp(0.56, 1.08, Math.sin((lt / 0.34) * Math.PI * 0.5));
    }
    const nt = (lt - 0.34) / 0.66;
    const s = nt * nt * (3 - 2 * nt);
    return THREE.MathUtils.lerp(1.08, 0.105, Math.pow(s, 0.72));
  }
  const ut = (t - 0.52) / 0.48;
  if (ut < 0.66) {
    const s = ut / 0.66;
    return THREE.MathUtils.lerp(0.105, 1.05, Math.pow(s, 0.72));
  }
  const rt = (ut - 0.66) / 0.34;
  return THREE.MathUtils.lerp(1.05, 0.64, 1 - Math.cos(rt * Math.PI * 0.5));
}

function sampleInnerRadius(y) {
  if (y <= -1.64 || y >= 1.60) return 0;
  const outer = sampleOuterRadius(y);
  const waistFactor = Math.exp(-Math.pow(y / 0.28, 2));
  const baseFactor = y < -1.46 ? Math.min(1, (-1.46 - y) / 0.22) : 0;
  const thickness = 0.035 + waistFactor * 0.028 + baseFactor * 0.04;
  return Math.max(0.038, outer - thickness);
}

function buildDoubleWalledGlassGeometry() {
  const pts = [];
  const yMin = -1.78;
  const yMax = 1.66;
  const outerSteps = 76;

  for (let i = 0; i <= outerSteps; i++) {
    const y = THREE.MathUtils.lerp(yMin, yMax, i / outerSteps);
    pts.push(new THREE.Vector2(i === 0 ? 0 : sampleOuterRadius(y), y));
  }

  const rimOuterR = sampleOuterRadius(yMax);
  const rimInnerR = sampleInnerRadius(1.59);
  for (let i = 1; i <= 8; i++) {
    const a = (i / 8) * Math.PI;
    const midR = (rimOuterR + rimInnerR) * 0.5;
    const halfThick = (rimOuterR - rimInnerR) * 0.5;
    pts.push(new THREE.Vector2(midR + Math.cos(a) * halfThick, 1.63 + Math.sin(a) * 0.032));
  }

  for (let i = 0; i <= outerSteps; i++) {
    const y = THREE.MathUtils.lerp(1.59, -1.64, i / outerSteps);
    pts.push(new THREE.Vector2(i === outerSteps ? 0 : sampleInnerRadius(y), y));
  }

  return new THREE.LatheGeometry(pts, 88);
}

/**
 * Studio environment with warm golden edge softboxes + crisp silver-white upper highlights
 * matching the golden-amber rim-lit hourglass on pure black.
 */
function createGoldenStudioEnvTexture(renderer) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  envScene.background = new THREE.Color(0x000000);

  const strips = [
    // Crisp white-silver upper-left softbox highlight
    { pos: [-5.2, 3.0, 3.6], scale: [0.55, 8.5, 0.2], color: 0xffffff, intensity: 6.2 },
    // Warm golden-amber left & right rim strips
    { pos: [-5.6, -1.0, 2.0], scale: [0.45, 9.0, 0.2], color: 0xffb838, intensity: 5.2 },
    { pos: [5.6, 0.6, 2.8], scale: [0.45, 9.5, 0.2], color: 0xffbe44, intensity: 5.5 },
    // Overhead warm key
    { pos: [0, 8.5, 2.0], scale: [5.5, 0.7, 0.2], color: 0xffe4a0, intensity: 3.0 },
    // Warm floor bounce under the base
    { pos: [0, -5.0, 3.6], scale: [3.8, 0.7, 0.2], color: 0xffa822, intensity: 3.4 }
  ];

  strips.forEach((s) => {
    const geo = new THREE.BoxGeometry(...s.scale);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(s.color).multiplyScalar(s.intensity)
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(...s.pos);
    mesh.lookAt(0, 0, 0);
    envScene.add(mesh);
  });

  const envRT = pmrem.fromScene(envScene, 0.025);
  pmrem.dispose();
  return envRT;
}

/**
 * Rich golden-amber mineral sand texture + crisp micro-grain bump map.
 */
function createGoldenSandTextures() {
  const size = 256;
  const colorCanvas = document.createElement('canvas');
  colorCanvas.width = size;
  colorCanvas.height = size;
  const cCtx = colorCanvas.getContext('2d');
  const cImg = cCtx.createImageData(size, size);

  const bumpCanvas = document.createElement('canvas');
  bumpCanvas.width = size;
  bumpCanvas.height = size;
  const bCtx = bumpCanvas.getContext('2d');
  const bImg = bCtx.createImageData(size, size);

  let seed = 71931;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  for (let i = 0; i < cImg.data.length; i += 4) {
    const g1 = rand();
    const g2 = rand();
    const grain = (g1 + g2) * 0.5;
    const shade = (grain - 0.5) * 52;
    cImg.data[i] = Math.min(255, Math.max(0, 245 + shade));
    cImg.data[i + 1] = Math.min(255, Math.max(0, 184 + shade * 0.8));
    cImg.data[i + 2] = Math.min(255, Math.max(0, 62 + shade * 0.45));
    cImg.data[i + 3] = 255;

    const bv = Math.min(255, Math.max(0, 128 + (g1 - 0.5) * 240));
    bImg.data[i] = bv;
    bImg.data[i + 1] = bv;
    bImg.data[i + 2] = bv;
    bImg.data[i + 3] = 255;
  }

  cCtx.putImageData(cImg, 0, 0);
  bCtx.putImageData(bImg, 0, 0);

  const map = new THREE.CanvasTexture(colorCanvas);
  map.wrapS = THREE.RepeatWrapping;
  map.wrapT = THREE.RepeatWrapping;
  map.repeat.set(6, 6);
  map.colorSpace = THREE.SRGBColorSpace;

  const bumpMap = new THREE.CanvasTexture(bumpCanvas);
  bumpMap.wrapS = THREE.RepeatWrapping;
  bumpMap.wrapT = THREE.RepeatWrapping;
  bumpMap.repeat.set(6, 6);

  return { map, bumpMap };
}

function createGoldenGlowParticleTexture() {
  const size = 32;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0.5, size / 2, size / 2, size / 2);
  grad.addColorStop(0, 'rgba(255, 240, 180, 1)');
  grad.addColorStop(0.5, 'rgba(245, 182, 54, 0.9)');
  grad.addColorStop(1, 'rgba(245, 160, 20, 0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function createConformingSandMesh(radialSegs, heightSegs, material) {
  const ringVerts = radialSegs + 1;
  const totalRings = heightSegs + 3;
  const positions = new Float32Array(totalRings * ringVerts * 3);
  const uvs = new Float32Array(totalRings * ringVerts * 2);
  const indices = [];

  for (let r = 0; r < totalRings; r++) {
    for (let s = 0; s <= radialSegs; s++) {
      const idx = r * ringVerts + s;
      uvs[idx * 2] = s / radialSegs;
      uvs[idx * 2 + 1] = r / (totalRings - 1);
    }
  }

  for (let r = 0; r < totalRings - 1; r++) {
    for (let s = 0; s < radialSegs; s++) {
      const a = r * ringVerts + s;
      const b = a + 1;
      const c = (r + 1) * ringVerts + s;
      const d = c + 1;
      indices.push(a, b, c);
      indices.push(b, d, c);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geo.setIndex(indices);

  return new THREE.Mesh(geo, material);
}

function updateDrainingSandMesh(mesh, radialSegs, heightSegs, fill) {
  const pos = mesh.geometry.attributes.position.array;
  const ringVerts = radialSegs + 1;
  const yBottom = 0.04;
  const yTopMax = 0.88;
  const yLevel = THREE.MathUtils.lerp(0.10, yTopMax, Math.pow(fill, 0.72));
  const funnelDepth = Math.min(0.18, (yLevel - yBottom) * 0.42) * (0.35 + 0.65 * (1 - fill));

  const setRing = (ringIdx, r, y) => {
    for (let s = 0; s <= radialSegs; s++) {
      const theta = (s / radialSegs) * Math.PI * 2;
      const idx = (ringIdx * ringVerts + s) * 3;
      pos[idx] = Math.cos(theta) * r;
      pos[idx + 1] = y;
      pos[idx + 2] = Math.sin(theta) * r;
    }
  };

  setRing(0, 0.02, yBottom);
  for (let i = 1; i <= heightSegs; i++) {
    const t = i / heightSegs;
    const y = THREE.MathUtils.lerp(yBottom, yLevel, t);
    const r = Math.max(0.02, sampleInnerRadius(y) - 0.005);
    setRing(i, r, y);
  }

  const edgeR = Math.max(0.02, sampleInnerRadius(yLevel) - 0.005);
  setRing(heightSegs + 1, edgeR * 0.45, yLevel - funnelDepth * 0.48);
  setRing(heightSegs + 2, 0.015, yLevel - funnelDepth);

  mesh.geometry.attributes.position.needsUpdate = true;
  mesh.geometry.computeVertexNormals();
}

function updateFillingSandMesh(mesh, radialSegs, heightSegs, fill) {
  const pos = mesh.geometry.attributes.position.array;
  const ringVerts = radialSegs + 1;
  const yFloor = -1.62;
  const yRim = THREE.MathUtils.lerp(-1.54, -1.04, Math.pow(fill, 0.75));
  const rimR = Math.max(0.12, sampleInnerRadius(yRim) - 0.005);
  const coneHeight = Math.min(0.64, rimR * 0.64) * Math.pow(fill, 0.35);
  const apexY = yRim + coneHeight;

  const setRing = (ringIdx, r, y) => {
    for (let s = 0; s <= radialSegs; s++) {
      const theta = (s / radialSegs) * Math.PI * 2;
      // Subtle organic ridge modulation on the cone slope matching the reference photo
      const ridge =
        ringIdx > heightSegs && r > 0.02
          ? Math.sin(theta * 5 + r * 3.5) * 0.016 * (r / rimR)
          : 0;
      const idx = (ringIdx * ringVerts + s) * 3;
      pos[idx] = Math.cos(theta) * r;
      pos[idx + 1] = y + ridge;
      pos[idx + 2] = Math.sin(theta) * r;
    }
  };

  setRing(0, 0.0, yFloor);
  for (let i = 1; i <= heightSegs; i++) {
    const t = i / heightSegs;
    const y = THREE.MathUtils.lerp(yFloor, yRim, t);
    const r = Math.max(0.04, sampleInnerRadius(y) - 0.005);
    setRing(i, r, y);
  }

  setRing(heightSegs + 1, rimR * 0.48, THREE.MathUtils.lerp(yRim, apexY, 0.52));
  setRing(heightSegs + 2, 0.0, apexY);

  mesh.geometry.attributes.position.needsUpdate = true;
  mesh.geometry.computeVertexNormals();
  return apexY;
}

export default function Hourglass3D() {
  const containerRef = useRef(null);
  const [webglReady, setWebglReady] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        powerPreference: 'high-performance'
      });
    } catch {
      setWebglReady(false);
      return;
    }

    const width = container.clientWidth || 460;
    const height = container.clientHeight || 520;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.065);

    const envRT = createGoldenStudioEnvTexture(renderer);
    scene.environment = envRT.texture;

    const camera = new THREE.PerspectiveCamera(31, width / height, 0.1, 30);
    camera.position.set(0, 0.18, 7.2);
    camera.lookAt(0, -0.08, 0);

    // Warm golden overhead & rim studio lighting matching the reference image
    const ambient = new THREE.AmbientLight(0xffd28a, 0.12);
    scene.add(ambient);

    // Overhead golden spotlight illuminating the ridged lower sand cone
    const coneKeySpot = new THREE.SpotLight(0xffcb66, 56, 18, Math.PI / 4.8, 0.68, 1.3);
    coneKeySpot.position.set(1.2, 2.8, 3.2);
    coneKeySpot.target.position.set(0, -1.15, 0);
    scene.add(coneKeySpot);
    scene.add(coneKeySpot.target);

    // Warm amber rim light for the glass edges & upper sand lip
    const rimAmber = new THREE.DirectionalLight(0xffb547, 1.45);
    rimAmber.position.set(-3.2, 2.2, -3.0);
    scene.add(rimAmber);

    // Warm golden floor reflection pool beneath the glass base
    const tableGeo = new THREE.PlaneGeometry(20, 20);
    const tableMat = new THREE.MeshPhysicalMaterial({
      color: 0x050402,
      roughness: 0.22,
      metalness: 0.18,
      clearcoat: 0.9,
      clearcoatRoughness: 0.18
    });
    const table = new THREE.Mesh(tableGeo, tableMat);
    table.rotation.x = -Math.PI / 2;
    table.position.y = -1.78;
    scene.add(table);

    const glowLight = new THREE.PointLight(0xffaa2b, 3.2, 4.2, 1.6);
    glowLight.position.set(0, -1.55, 0.8);
    scene.add(glowLight);

    const hourglassGroup = new THREE.Group();
    scene.add(hourglassGroup);

    // 1. Double-Walled Transparent Blown-Glass Vessel
    const glassGeo = buildDoubleWalledGlassGeometry();
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 1.0,
      opacity: 1,
      transparent: true,
      roughness: 0.015,
      metalness: 0.0,
      ior: 1.52,
      thickness: 0.36,
      envMapIntensity: 2.3,
      specularIntensity: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.015,
      attenuationColor: new THREE.Color(0xfff8eb),
      attenuationDistance: 8.5,
      side: THREE.FrontSide
    });
    const glassMesh = new THREE.Mesh(glassGeo, glassMat);
    glassMesh.renderOrder = 4;
    hourglassGroup.add(glassMesh);

    // 2. Golden-Amber Mineral Sand (Dark Upper Silhouette with Golden Rim + Luminous Golden Lower Mound)
    const { map: sandMap, bumpMap: sandBump } = createGoldenSandTextures();
    const upperSandMat = new THREE.MeshStandardMaterial({
      color: 0x5c4118,
      map: sandMap,
      bumpMap: sandBump,
      bumpScale: 0.018,
      roughness: 0.94,
      metalness: 0.05,
      side: THREE.DoubleSide
    });
    const lowerSandMat = new THREE.MeshStandardMaterial({
      color: 0xffc65c,
      map: sandMap,
      bumpMap: sandBump,
      bumpScale: 0.028,
      roughness: 0.88,
      metalness: 0.04,
      side: THREE.DoubleSide
    });

    const RADIAL_SEGS = 56;
    const HEIGHT_SEGS = 22;
    const topSand = createConformingSandMesh(RADIAL_SEGS, HEIGHT_SEGS, upperSandMat);
    const bottomSand = createConformingSandMesh(RADIAL_SEGS, HEIGHT_SEGS, lowerSandMat);
    hourglassGroup.add(topSand);
    hourglassGroup.add(bottomSand);

    // 3. Luminous Golden Pouring Stream + Floating Golden Dust Motes (Downward Flow Only)
    const streamGeo = new THREE.CylinderGeometry(0.0045, 0.0065, 1, 10, 1, true);
    const streamMat = new THREE.MeshBasicMaterial({
      color: 0xffcf6b,
      transparent: true,
      opacity: 0.88
    });
    const streamMesh = new THREE.Mesh(streamGeo, streamMat);
    hourglassGroup.add(streamMesh);

    const particleCount = 420;
    const pPositions = new Float32Array(particleCount * 3);
    const pProgress = new Float32Array(particleCount);
    const pJitterX = new Float32Array(particleCount);
    const pJitterZ = new Float32Array(particleCount);
    const pIsMote = new Uint8Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      pProgress[i] = Math.random();
      const mote = i % 5 === 0;
      pIsMote[i] = mote ? 1 : 0;
      pJitterX[i] = (Math.random() - 0.5) * (mote ? 0.52 : 0.012);
      pJitterZ[i] = (Math.random() - 0.5) * (mote ? 0.52 : 0.012);
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const sandTex = createGoldenGlowParticleTexture();
    const particleMat = new THREE.PointsMaterial({
      map: sandTex,
      color: 0xffd778,
      size: 0.022,
      transparent: true,
      opacity: 0.94,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const sandParticles = new THREE.Points(particleGeo, particleMat);
    hourglassGroup.add(sandParticles);

    // Subtle pointer parallax
    const targetTilt = { x: 0.04, y: 0 };
    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      targetTilt.y = nx * 0.2;
      targetTilt.x = 0.04 - ny * 0.07;
    };
    const onPointerLeave = () => {
      targetTilt.x = 0.04;
      targetTilt.y = 0;
    };
    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerleave', onPointerLeave);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = Math.max(1, entry.contentRect.width);
        const h = Math.max(1, entry.contentRect.height);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    });
    resizeObserver.observe(container);

    // Animate ONLY sand flowing down continuously (no 180-degree flip)
    const FLOW_MS = 22000;
    let animId = 0;
    let lastTime = performance.now();
    let cycleStart = performance.now() - FLOW_MS * 0.35;

    const animate = (now) => {
      animId = requestAnimationFrame(animate);
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;

      let elapsed = now - cycleStart;
      if (elapsed >= FLOW_MS) {
        cycleStart = now;
        elapsed = 0;
      }

      // Smooth continuous pour between 0.22 -> 0.88 so both upper sand and lower cone stay iconic
      const t = elapsed / FLOW_MS;
      const topFill = THREE.MathUtils.lerp(0.68, 0.14, t);
      const botFill = THREE.MathUtils.lerp(0.32, 0.86, t);

      updateDrainingSandMesh(topSand, RADIAL_SEGS, HEIGHT_SEGS, topFill);
      const apexY = updateFillingSandMesh(bottomSand, RADIAL_SEGS, HEIGHT_SEGS, botFill);

      const dropSpan = Math.max(0.18, Math.abs(apexY) - 0.02);
      streamMesh.scale.set(1, dropSpan, 1);
      streamMesh.position.set(0, -(0.02 + dropSpan * 0.5), 0);

      const posArr = particleGeo.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        pProgress[i] += dt * (pIsMote[i] ? 0.26 : 0.62);
        if (pProgress[i] > 1) pProgress[i] -= 1;

        if (pIsMote[i]) {
          // Subtle golden dust motes drifting softly inside the lower bulb above the cone
          posArr[i * 3] = pJitterX[i] * (0.4 + pProgress[i] * 0.8);
          posArr[i * 3 + 1] = -0.25 - pProgress[i] * (dropSpan * 0.85);
          posArr[i * 3 + 2] = pJitterZ[i] * (0.4 + pProgress[i] * 0.8);
        } else {
          const dropFrac = Math.pow(pProgress[i], 1.5);
          const spread = 1 + dropFrac * 1.1;
          posArr[i * 3] = pJitterX[i] * spread;
          posArr[i * 3 + 1] = -(0.02 + dropFrac * dropSpan);
          posArr[i * 3 + 2] = pJitterZ[i] * spread;
        }
      }
      particleGeo.attributes.position.needsUpdate = true;

      hourglassGroup.rotation.x += (targetTilt.x - hourglassGroup.rotation.x) * 0.06;
      hourglassGroup.rotation.y += (targetTilt.y - hourglassGroup.rotation.y) * 0.06;

      renderer.render(scene, camera);
    };
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerleave', onPointerLeave);
      envRT.dispose();
      sandMap.dispose();
      sandBump.dispose();
      sandTex.dispose();
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!webglReady) return null;

  return (
    <div className="relative w-full h-[410px] sm:h-[470px] lg:h-[530px] flex items-center justify-center select-none">
      <div
        ref={containerRef}
        aria-label="3D Golden Sand Blown-Glass Hourglass"
        className="w-full h-full max-w-[460px]"
      />
    </div>
  );
}
