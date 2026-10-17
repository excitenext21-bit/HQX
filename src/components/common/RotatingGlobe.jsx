import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Building2 } from 'lucide-react';

const GLOBE_LOCATIONS = [
  {
    id: 'mumbai',
    place: 'Mumbai',
    country: 'India',
    lat: 19.0760,
    lng: 72.8777,
    companies: ['HDFC Bank', 'HDFC Life', 'HDFC ERGO', 'Ageas Federal', 'Shardul Amarchand', 'Burns & McDonnell', 'APAR Industries'],
    scope: 'Domestic Headquarter & Multi-Division Summits'
  },
  {
    id: 'delhi',
    place: 'Delhi NCR',
    country: 'India',
    lat: 28.6139,
    lng: 77.2090,
    companies: ['Indigo Airlines', 'Tricolite', 'Uniworld Logistics', 'Pathways World School'],
    scope: 'Aviation Well-Being & 100-Day Ikigai Deployments'
  },
  {
    id: 'pune',
    place: 'Pune',
    country: 'India',
    lat: 18.5204,
    lng: 73.8567,
    companies: ['TATA Motors', 'ELP (Economic Laws Practice)', 'SMFG India'],
    scope: 'Automotive Leadership & Corporate Law Wellness'
  },
  {
    id: 'goa',
    place: 'Goa',
    country: 'India',
    lat: 15.2993,
    lng: 74.1240,
    companies: ['Cipla Pharmaceuticals', 'Mango Sciences'],
    scope: 'Global Pharma & HealthTech Executive Retreats'
  },
  {
    id: 'bengaluru',
    place: 'Bengaluru',
    country: 'India',
    lat: 12.9716,
    lng: 77.5946,
    companies: ['NetApp', 'Tech Leaders Consortium', 'TCS iON'],
    scope: 'Technology Executive Resilience & Innovation'
  },
  {
    id: 'dubai',
    place: 'Dubai',
    country: 'UAE',
    lat: 25.2048,
    lng: 55.2708,
    companies: ['Global Indian International School', 'MENA Corporate Leaders'],
    scope: 'Educational Well-Being & Youth Mentorship'
  },
  {
    id: 'muscat',
    place: 'Muscat',
    country: 'Oman',
    lat: 23.5880,
    lng: 58.3829,
    companies: ['Alizz Islamic Bank', 'BankDhofar', 'NBO (National Bank of Oman)'],
    scope: 'Middle East Banking Leadership Symposium'
  },
  {
    id: 'mauritius',
    place: 'Port Louis',
    country: 'Mauritius',
    lat: -20.1609,
    lng: 57.5012,
    companies: ['Absa Bank (Africa)'],
    scope: 'African Corporate Banking Convention (500+ CXOs)'
  },
  {
    id: 'tanzania',
    place: 'Dar es Salaam',
    country: 'Tanzania',
    lat: -6.7924,
    lng: 39.2083,
    companies: ['Amana Bank'],
    scope: 'East African Banking Convention & Purpose Alignment'
  },
  {
    id: 'srilanka',
    place: 'Colombo',
    country: 'Sri Lanka',
    lat: 6.9271,
    lng: 79.8612,
    companies: ['Harvard Club : Sri Lanka x APAC'],
    scope: 'Harvard Alumni Global Keynote'
  },
  {
    id: 'japan',
    place: 'Tokyo',
    country: 'Japan',
    lat: 35.6762,
    lng: 139.6503,
    companies: ['Ikigai Research Foundation & Tokyo Partners'],
    scope: 'Gross Life Satisfaction & Purpose Fieldwork'
  },
  {
    id: 'finland',
    place: 'Helsinki',
    country: 'Finland',
    lat: 60.1699,
    lng: 24.9384,
    companies: ['Nordic Well-Being Council', 'Sisu Research Institute'],
    scope: 'Sisu & Mental Stamina Research Interventions'
  },
  {
    id: 'bhutan',
    place: 'Thimphu',
    country: 'Bhutan',
    lat: 27.4728,
    lng: 89.6393,
    companies: ['Gross National Happiness Institute'],
    scope: 'National Well-Being Metrics & Compassionate Governance'
  },
  {
    id: 'costarica',
    place: 'San José',
    country: 'Costa Rica',
    lat: 9.9281,
    lng: -84.0907,
    companies: ['Blue Zone Human Flourishing Alliance'],
    scope: 'Pura Vida & Biological Longevity Frameworks'
  }
];

// Helper to convert Lat/Lng to 3D Cartesian coordinates on sphere
function latLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

// Generate clean, meaningful corporate beacon icon texture (Gold navigational compass beacon)
function createLocationIconTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');

  // Outer ambient golden radiance
  const glow = ctx.createRadialGradient(64, 64, 18, 64, 64, 62);
  glow.addColorStop(0, 'rgba(255, 199, 44, 0.7)');
  glow.addColorStop(0.5, 'rgba(255, 199, 44, 0.25)');
  glow.addColorStop(1, 'rgba(255, 199, 44, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, 128, 128);

  // Outer solid gold ring
  ctx.strokeStyle = '#FFC72C';
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.arc(64, 64, 38, 0, Math.PI * 2);
  ctx.stroke();

  // Dark obsidian circular badge
  ctx.fillStyle = '#08090C';
  ctx.beginPath();
  ctx.arc(64, 64, 34, 0, Math.PI * 2);
  ctx.fill();

  // Inner subtle border
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Clean, meaningful emblem: 4-pointed radiant compass star (Direction, Purpose, Leadership)
  ctx.fillStyle = '#FFC72C';
  ctx.beginPath();
  ctx.moveTo(64, 42); // Top tip
  ctx.quadraticCurveTo(64, 58, 76, 64);
  ctx.quadraticCurveTo(64, 70, 64, 86); // Bottom tip
  ctx.quadraticCurveTo(64, 70, 52, 64);
  ctx.quadraticCurveTo(64, 58, 64, 42);
  ctx.fill();

  // Luminous white center core
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(64, 64, 4, 0, Math.PI * 2);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

export default function RotatingGlobe({ className = '', heightClass = '' }) {
  const containerRef = useRef(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [activeLocationId, setActiveLocationId] = useState('mumbai');

  // Three.js internal references
  const threeRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    globeGroup: null,
    pulseRings: [],
    markerHitSpheres: [],
    isHovered: false,
    isDragging: false,
    reqId: null
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    threeRef.current.scene = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.2;
    threeRef.current.camera = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent canvas blending with dark card
    container.appendChild(renderer.domElement);
    threeRef.current.renderer = renderer;

    // 4. Subtle Night Atmospheric Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const moonLight = new THREE.DirectionalLight(0xddeeff, 1.4);
    moonLight.position.set(-5, 3, -3);
    scene.add(moonLight);

    const warmLight = new THREE.DirectionalLight(0xffd15c, 1.0);
    warmLight.position.set(5, 2, 4);
    scene.add(warmLight);

    // 5. Globe Group (Rotatable)
    const globeGroup = new THREE.Group();
    globeGroup.rotation.x = 0.22; // Natural 12.6 degree Earth tilt
    globeGroup.rotation.y = -1.2; // Start facing India / Middle East
    scene.add(globeGroup);
    threeRef.current.globeGroup = globeGroup;

    const radius = 1.85;

    // 6. Photorealistic Realistic Earth in Night Mode
    const textureLoader = new THREE.TextureLoader();
    const nightMap = textureLoader.load('/earth-night.png');
    nightMap.colorSpace = THREE.SRGBColorSpace;

    const globeGeometry = new THREE.SphereGeometry(radius, 64, 64);
    const globeMaterial = new THREE.MeshStandardMaterial({
      map: nightMap,
      emissiveMap: nightMap,
      emissive: new THREE.Color(0xffe6a3), // Warm golden radiance on realistic night city lights
      emissiveIntensity: 1.35,
      roughness: 0.8,
      metalness: 0.1,
      color: 0x07080a
    });
    const globeSphere = new THREE.Mesh(globeGeometry, globeMaterial);
    globeGroup.add(globeSphere);

    // 7. Outer Atmospheric Rayleigh Night Glow
    const atmosGeometry = new THREE.SphereGeometry(radius * 1.022, 64, 64);
    const atmosMaterial = new THREE.MeshBasicMaterial({
      color: 0x3d70b2,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide
    });
    const atmosMesh = new THREE.Mesh(atmosGeometry, atmosMaterial);
    scene.add(atmosMesh);

    // Secondary warm golden edge rim
    const goldRimGeom = new THREE.SphereGeometry(radius * 1.035, 48, 48);
    const goldRimMat = new THREE.MeshBasicMaterial({
      color: 0xffcc00,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide
    });
    const goldRimMesh = new THREE.Mesh(goldRimGeom, goldRimMat);
    scene.add(goldRimMesh);

    // 8. Add Locations with Clean Meaningful Icons (Only visible when facing camera)
    const iconTexture = createLocationIconTexture();
    const locationPins = [];

    GLOBE_LOCATIONS.forEach((loc, index) => {
      const surfacePos = latLngToVector3(loc.lat, loc.lng, radius);
      const normal = surfacePos.clone().normalize();

      const pinGroup = new THREE.Group();
      pinGroup.position.copy(surfacePos);
      pinGroup.visible = false; // Hidden by default until in front

      // (A) Surface pulsating radar ripple ring
      const ringGeom = new THREE.RingGeometry(0.018, 0.045, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffcc00,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0,
        depthTest: true
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.lookAt(normal);
      pinGroup.add(ringMesh);

      // (B) Slender vertical golden beacon beam
      const beamHeight = 0.22;
      const beamGeom = new THREE.CylinderGeometry(0.003, 0.003, beamHeight, 8);
      const beamMat = new THREE.MeshBasicMaterial({
        color: 0xffd15c,
        transparent: true,
        opacity: 0,
        depthTest: true
      });
      const beamMesh = new THREE.Mesh(beamGeom, beamMat);
      beamMesh.position.copy(normal.clone().multiplyScalar(beamHeight / 2));
      beamMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
      pinGroup.add(beamMesh);

      // (C) Clean, meaningful beacon icon sprite (always faces camera, depth tested)
      const spriteMat = new THREE.SpriteMaterial({
        map: iconTexture,
        transparent: true,
        opacity: 0,
        depthTest: true
      });
      const iconSprite = new THREE.Sprite(spriteMat);
      iconSprite.scale.set(0.18, 0.18, 1);
      iconSprite.position.copy(normal.clone().multiplyScalar(beamHeight + 0.04));
      pinGroup.add(iconSprite);

      // (D) Hit sphere for hover raycasting
      const hitGeom = new THREE.SphereGeometry(0.20, 12, 12);
      const hitMat = new THREE.MeshBasicMaterial({ visible: false });
      const hitMesh = new THREE.Mesh(hitGeom, hitMat);
      hitMesh.position.copy(normal.clone().multiplyScalar(beamHeight));
      hitMesh.userData = { location: loc, pinGroup, iconSprite, ringMesh, index };
      hitMesh.visible = false;
      pinGroup.add(hitMesh);

      globeGroup.add(pinGroup);

      locationPins.push({
        loc,
        pinGroup,
        iconSprite,
        ringMesh,
        beamMesh,
        hitMesh,
        phase: index * 0.6
      });
    });

    threeRef.current.locationPins = locationPins;

    // 9. Raycasting for Mouse Hover & STOP ROTATING ON HOVER
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);

    const onPointerMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      // Only test raycast against pins that are currently active and visible on the front side
      const activeHitSpheres = locationPins
        .filter((p) => p.pinGroup.visible && p.hitMesh.visible)
        .map((p) => p.hitMesh);

      const intersects = raycaster.intersectObjects(activeHitSpheres);

      if (intersects.length > 0) {
        // Stop rotating when hovered!
        threeRef.current.isHovered = true;

        const hitObj = intersects[0].object;
        const hit = hitObj.userData.location;

        // Highlight hovered icon sprite
        locationPins.forEach((p) => {
          if (p.hitMesh === hitObj) {
            p.iconSprite.scale.set(0.26, 0.26, 1);
          } else {
            p.iconSprite.scale.set(0.18, 0.18, 1);
          }
        });

        // Project position to screen for floating tooltip
        const worldPos = new THREE.Vector3();
        hitObj.getWorldPosition(worldPos);
        worldPos.project(camera);

        const rawX = ((worldPos.x + 1) / 2) * rect.width + rect.left;
        const rawY = ((-worldPos.y + 1) / 2) * rect.height + rect.top;

        const screenX = Math.max(160, Math.min(window.innerWidth - 160, rawX));
        const screenY = Math.max(150, rawY);

        setHoveredLocation({
          ...hit,
          screenX,
          screenY
        });
      } else {
        // Resume rotation when hover ends
        threeRef.current.isHovered = false;
        locationPins.forEach((p) => {
          p.iconSprite.scale.set(0.18, 0.18, 1);
        });
        setHoveredLocation(null);
      }
    };

    const onPointerLeave = () => {
      threeRef.current.isHovered = false;
      locationPins.forEach((p) => {
        p.iconSprite.scale.set(0.18, 0.18, 1);
      });
      setHoveredLocation(null);
    };

    // 10. Drag to Rotate Interaction
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    const onPointerDown = (e) => {
      isDragging = true;
      threeRef.current.isDragging = true;
      prevX = e.clientX;
      prevY = e.clientY;
    };

    const onPointerDrag = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevX;
      const deltaY = e.clientY - prevY;

      globeGroup.rotation.y += deltaX * 0.005;
      globeGroup.rotation.x += deltaY * 0.005;

      // Clamp X rotation to prevent flipping
      globeGroup.rotation.x = Math.max(-0.6, Math.min(0.6, globeGroup.rotation.x));

      prevX = e.clientX;
      prevY = e.clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
      threeRef.current.isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('pointermove', onPointerMove);
    domEl.addEventListener('pointerleave', onPointerLeave);
    domEl.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerDrag);
    window.addEventListener('pointerup', onPointerUp);

    // 11. Handle Resize
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // 12. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      threeRef.current.reqId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // STRICT RULE: STOP ROTATING WHEN USER HOVERS ON ANY LOCATION!
      if (!isDragging && !threeRef.current.isHovered) {
        globeGroup.rotation.y += delta * 0.10; // Smooth steady rotation
      }

      // Positions for horizon occlusion calculation
      const cameraPos = camera.position;
      const globeCenter = new THREE.Vector3();
      globeGroup.getWorldPosition(globeCenter);

      // OCCLUSION CHECK: Only show spots when the destination country reaches the front
      locationPins.forEach((pin) => {
        const worldPos = new THREE.Vector3();
        pin.hitMesh.getWorldPosition(worldPos);

        const camToPin = worldPos.clone().sub(cameraPos).normalize();
        const normal = worldPos.clone().sub(globeCenter).normalize();

        // Dot product: normal pointing towards camera has negative dot
        const dot = normal.dot(camToPin);

        if (dot < -0.15) {
          // Reached destination view: smoothly fade in
          const fade = Math.min(1, Math.max(0, (-dot - 0.15) / 0.20));
          pin.pinGroup.visible = true;
          pin.iconSprite.material.opacity = fade;
          pin.ringMesh.material.opacity = fade * 0.85;
          pin.beamMesh.material.opacity = fade * 0.85;
          pin.hitMesh.visible = (fade > 0.45);

          // Pulsing radar ripples on Earth surface
          const pulse = 1 + Math.sin(time * 2.8 + pin.phase) * 0.35;
          pin.ringMesh.scale.set(pulse, pulse, 1);
        } else {
          // Back of Earth (before reaching country or after leaving): completely invisible!
          pin.pinGroup.visible = false;
          pin.iconSprite.material.opacity = 0;
          pin.ringMesh.material.opacity = 0;
          pin.beamMesh.material.opacity = 0;
          pin.hitMesh.visible = false;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(threeRef.current.reqId);
      domEl.removeEventListener('pointermove', onPointerMove);
      domEl.removeEventListener('pointerleave', onPointerLeave);
      domEl.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerDrag);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', onResize);
      if (domEl && domEl.parentNode) {
        domEl.parentNode.removeChild(domEl);
      }
      renderer.dispose();
    };
  }, []);

  // Quick navigation to specific location
  const focusOnLocation = (loc) => {
    setActiveLocationId(loc.id);
    const globeGroup = threeRef.current.globeGroup;
    if (!globeGroup) return;

    // Calculate target Y rotation for longitude
    const targetY = -((loc.lng + 180) * (Math.PI / 180)) + Math.PI / 2;
    globeGroup.rotation.y = targetY;
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* 3D WebGL Canvas Container - Transparent Background to Match Parent Section */}
      <div 
        ref={containerRef} 
        className={`w-full ${heightClass || 'h-[520px] sm:h-[600px] md:h-[700px]'} cursor-grab active:cursor-grabbing relative overflow-hidden flex items-center justify-center bg-transparent rounded-none border-none`}
      >

        {/* Floating Interactive Tooltip On Hover (Clean Company Names Display) */}
        {hoveredLocation && (
          <div 
            className="fixed z-50 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-4 w-72 sm:w-80 bg-[#0A0A0A]/95 text-white border border-hq-yellow p-4 sm:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.9)] backdrop-blur-md rounded-xl transition-all duration-200 animate-fadeIn"
            style={{
              left: `${hoveredLocation.screenX}px`,
              top: `${hoveredLocation.screenY - 14}px`
            }}
          >
            {/* Header with Hub Tag */}
            <div className="flex items-center justify-between pb-3 border-b border-white/15 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-hq-yellow animate-ping"></span>
                <span className="font-display font-bold uppercase tracking-wider text-xs sm:text-sm text-white">
                  {hoveredLocation.place}, {hoveredLocation.country}
                </span>
              </div>
              <span className="bg-hq-yellow text-hq-black font-display font-bold text-[10px] tracking-widest px-2.5 py-0.5 rounded-full uppercase flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3 text-hq-black" />
                <span>GLOBAL HUB</span>
              </span>
            </div>

            {/* Companies / Corporate Clients */}
            <div className="mb-3">
              <div className="text-[10px] font-mono uppercase tracking-widest text-hq-yellow mb-1 font-semibold flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                <span>Interacting Corporate Clients:</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {hoveredLocation.companies.map((comp, idx) => (
                  <span 
                    key={idx}
                    className="text-xs font-body font-medium bg-white/10 text-white/95 px-2.5 py-1 rounded-md border border-white/10"
                  >
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Scope / Impact Detail */}
            <div className="pt-2.5 border-t border-white/10 text-[11px] font-body text-white/70 italic">
              "{hoveredLocation.scope}"
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
