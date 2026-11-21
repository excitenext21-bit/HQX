import os
import subprocess
from PIL import Image

EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
OUTPUT_DIR = os.path.abspath("public/mockups")
SCRIPTS_DIR = os.path.abspath("scripts")
os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(SCRIPTS_DIR, exist_ok=True)

# Shared Phone Frame CSS & SVG Logo
SHARED_HEAD = """
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding: 60px;
  }
  
  /* High-Res Titanium Phone Chassis */
  .phone-case {
    position: relative;
    width: 380px;
    height: 780px;
    border-radius: 54px;
    padding: 5px;
    background: linear-gradient(145deg, #8a8e9d 0%, #3e424c 30%, #1c1d22 70%, #0d0e12 100%);
    box-shadow: 
      0 40px 100px -15px rgba(0, 0, 0, 0.95),
      0 20px 40px -10px rgba(0, 0, 0, 0.8),
      inset 0 1px 2px rgba(255, 255, 255, 0.35),
      inset 0 -2px 4px rgba(0, 0, 0, 0.8);
  }

  /* Hardware Side Buttons */
  .btn-silent { position: absolute; left: -6px; top: 125px; width: 4px; height: 32px; border-radius: 3px 0 0 3px; background: #5a5d68; }
  .btn-vol-up { position: absolute; left: -6px; top: 175px; width: 4px; height: 58px; border-radius: 3px 0 0 3px; background: #5a5d68; }
  .btn-vol-dn { position: absolute; left: -6px; top: 245px; width: 4px; height: 58px; border-radius: 3px 0 0 3px; background: #5a5d68; }
  .btn-power  { position: absolute; right: -6px; top: 195px; width: 4px; height: 75px; border-radius: 0 3px 3px 0; background: #5a5d68; }

  /* Inner Bezel */
  .bezel {
    width: 100%;
    height: 100%;
    border-radius: 49px;
    background: #000000;
    padding: 10px;
    box-shadow: inset 0 0 16px rgba(0,0,0,0.98);
  }

  /* Screen Canvas */
  .screen {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #07080B;
    color: #FFFFFF;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  /* Glass Sheen Reflection */
  .glass-sheen {
    position: absolute;
    inset: 0;
    background: linear-gradient(130deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 30%, transparent 60%);
    pointer-events: none;
    z-index: 40;
  }

  /* Dynamic Island & Status Bar */
  .status-bar {
    width: 100%;
    padding: 14px 24px 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    font-weight: 600;
    color: #FFFFFF;
    z-index: 50;
  }
  .dynamic-island {
    width: 105px;
    height: 28px;
    background: #000000;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.12);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 8px;
  }
  .camera-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #111a2e;
    border: 1px solid rgba(255,255,255,0.2);
  }
  .home-bar {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 130px;
    height: 4px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.35);
    z-index: 50;
  }
</style>
"""

# HTML 1: Main Hero Screen ("Building Daily Joy Mindfully" with skyline)
HTML_MOCKUP_1 = f"""<!DOCTYPE html>
<html>
<head>
{SHARED_HEAD}
<style>
  .hero-screen {{
    background: linear-gradient(180deg, #0A0A0E 0%, #060709 50%, #030305 100%);
  }}
  .screen-content {{
    padding: 16px 24px 0 24px;
    z-index: 10;
  }}
  .top-nav {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }}
  .menu-btn {{
    display: flex;
    flex-direction: column;
    gap: 4.5px;
    width: 22px;
  }}
  .menu-line {{
    width: 100%;
    height: 2px;
    background: #FFFFFF;
    border-radius: 2px;
  }}
  .hero-title {{
    font-size: 34px;
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    margin-bottom: 12px;
  }}
  .text-yellow {{
    color: #FFCD00;
  }}
  .hero-desc {{
    font-size: 13.5px;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.72);
    margin-bottom: 20px;
  }}
  .pill-cta {{
    display: inline-flex;
    align-items: center;
    background: rgba(255, 205, 0, 0.15);
    border: 1px solid rgba(255, 205, 0, 0.45);
    border-radius: 999px;
    padding: 3px 14px 3px 3px;
    gap: 10px;
    box-shadow: 0 0 24px rgba(255, 205, 0, 0.25);
  }}
  .pill-badge {{
    background: #FFCD00;
    color: #0A0A0A;
    font-weight: 800;
    font-size: 13px;
    padding: 8px 18px;
    border-radius: 999px;
    letter-spacing: -0.01em;
  }}
  .skyline-container {{
    position: relative;
    width: 100%;
    height: 280px;
    margin-top: auto;
    overflow: hidden;
  }}
  .gold-glow {{
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 70%, rgba(255, 205, 0, 0.45) 0%, rgba(217, 119, 6, 0.22) 42%, transparent 75%);
    pointer-events: none;
  }}
</style>
</head>
<body>
  <div class="phone-case">
    <div class="btn-silent"></div>
    <div class="btn-vol-up"></div>
    <div class="btn-vol-dn"></div>
    <div class="btn-power"></div>
    <div class="bezel">
      <div class="screen hero-screen">
        <div class="glass-sheen"></div>
        <div class="status-bar">
          <span>9:41</span>
          <div class="dynamic-island"><div class="camera-dot"></div></div>
          <span>5G &#9679;</span>
        </div>

        <div class="screen-content">
          <div class="top-nav">
            <!-- Official HQX Brand Logo -->
            <svg width="95" height="32" viewBox="0 0 606 270" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="252" height="253" rx="52" fill="#FFCD00" />
              <path d="M 110 184 L 96 184 L 81 179 L 66 167 L 48 148 L 40 122 L 55 132 L 81 143 L 102 145 L 121 141 L 137 134 L 160 122 L 180 109 L 198 96 L 207 88 L 198 80 L 218 79 L 230 77 L 222 89 L 210 105 L 196 122 L 171 149 L 153 164 L 141 172 L 122 181 L 110 184 Z" fill="#0A0A0A" />
              <path d="M 391 244 L 345 244 L 345 138 L 322 139 L 322 244 L 277 244 L 278 11 L 322 12 L 323 94 L 345 94 L 345 12 L 391 12 Z" fill="#FFFFFF" />
              <path d="M 515 268 L 479 244 L 457 246 L 441 242 L 421 228 L 413 211 L 409 195 L 409 59 L 413 42 L 430 19 L 450 10 L 477 9 L 502 18 L 519 41 L 523 57 L 523 197 L 514 224 L 522 236 L 530 242 L 515 268 Z M 471 203 L 476 195 L 477 64 L 473 53 L 464 51 L 457 56 L 455 62 L 455 194 L 462 203 Z" fill="#FFFFFF" fill-rule="evenodd" />
              <path d="M 593 105 L 573 105 L 569 99 L 564 85 L 560 83 L 557 92 L 554 101 L 537 105 L 540 94 L 546 79 L 550 67 L 553 58 L 548 38 L 539 13 L 560 11 L 565 26 L 570 34 L 572 27 L 575 16 L 593 12 L 589 22 L 583 41 L 578 56 L 580 66 L 585 80 L 592 102 Z" fill="#FFFFFF" />
            </svg>
            <div class="menu-btn">
              <span class="menu-line"></span>
              <span class="menu-line"></span>
              <span class="menu-line"></span>
            </div>
          </div>

          <h1 class="hero-title">
            Building<br>
            Daily Joy<br>
            <span class="text-yellow">Mindfully.</span>
          </h1>

          <p class="hero-desc">
            We design science-backed daily micro-habits that help leaders and teams flourish faster and calmer.
          </p>

          <div class="pill-cta">
            <span class="pill-badge">Let's Flourish</span>
            <span style="color:#FFCD00; font-size:16px; font-weight:800;">&#8599;</span>
          </div>
        </div>

        <div class="skyline-container">
          <div class="gold-glow"></div>
          <svg viewBox="0 0 240 160" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="towerGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2E260D" />
                <stop offset="50%" stopColor="#151206" />
                <stop offset="100%" stopColor="#050507" />
              </linearGradient>
            </defs>
            <!-- Golden Spire & Sunburst Beam -->
            <line x1="120" y1="12" x2="120" y2="110" stroke="#FFF08A" stroke-width="1.8" stroke-opacity="0.85" />
            <circle cx="120" cy="42" r="4.5" fill="#FFF08A" />
            <circle cx="120" cy="42" r="14" fill="none" stroke="#FFCD00" stroke-width="0.8" stroke-opacity="0.5" />

            <!-- Skyline Buildings -->
            <rect x="22" y="70" width="18" height="60" fill="url(#towerGrad)" stroke="#FFCD00" stroke-opacity="0.3" stroke-width="0.8" />
            <rect x="44" y="55" width="20" height="75" fill="url(#towerGrad)" stroke="#FFCD00" stroke-opacity="0.35" stroke-width="0.8" />
            <rect x="68" y="65" width="16" height="65" fill="url(#towerGrad)" stroke="#FFCD00" stroke-opacity="0.3" stroke-width="0.8" />
            <rect x="88" y="42" width="24" height="88" fill="url(#towerGrad)" stroke="#FFCD00" stroke-opacity="0.4" stroke-width="0.8" />
            <rect x="128" y="48" width="22" height="82" fill="url(#towerGrad)" stroke="#FFCD00" stroke-opacity="0.4" stroke-width="0.8" />
            <rect x="154" y="62" width="18" height="68" fill="url(#towerGrad)" stroke="#FFCD00" stroke-opacity="0.3" stroke-width="0.8" />
            <rect x="176" y="52" width="20" height="78" fill="url(#towerGrad)" stroke="#FFCD00" stroke-opacity="0.35" stroke-width="0.8" />
            <rect x="200" y="72" width="18" height="58" fill="url(#towerGrad)" stroke="#FFCD00" stroke-opacity="0.3" stroke-width="0.8" />

            <!-- Window matrix dots -->
            <circle cx="96" cy="55" r="1.2" fill="#FFFBEB" opacity="0.8" />
            <circle cx="104" cy="55" r="1.2" fill="#FFFBEB" opacity="0.8" />
            <circle cx="96" cy="65" r="1.2" fill="#FFFBEB" opacity="0.8" />
            <circle cx="104" cy="65" r="1.2" fill="#FFFBEB" opacity="0.8" />
            <circle cx="135" cy="60" r="1.2" fill="#FFFBEB" opacity="0.8" />
            <circle cx="143" cy="60" r="1.2" fill="#FFFBEB" opacity="0.8" />
          </svg>
        </div>

        <div class="home-bar"></div>
      </div>
    </div>
  </div>
</body>
</html>
"""

# HTML 2: Meditation, Box Breathing & Vitality Pulse Simulator
HTML_MOCKUP_2 = f"""<!DOCTYPE html>
<html>
<head>
{SHARED_HEAD}
<style>
  .screen-content {{
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }}
  .app-header {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }}
  .protocol-tag {{
    font-size: 9.5px;
    font-weight: 800;
    font-family: monospace;
    letter-spacing: 0.12em;
    color: #FFCD00;
    text-transform: uppercase;
    background: rgba(255,205,0,0.12);
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid rgba(255,205,0,0.3);
  }}
  .breath-circle {{
    width: 170px;
    height: 170px;
    margin: 16px auto;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,205,0,0.18) 0%, rgba(255,205,0,0.04) 60%, transparent 75%);
    border: 2px solid rgba(255,205,0,0.6);
    box-shadow: 0 0 35px rgba(255,205,0,0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }}
  .timer-val {{
    font-size: 32px;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: #FFFFFF;
  }}
  .timer-phase {{
    font-size: 11px;
    font-weight: 700;
    color: #FFCD00;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-top: 2px;
  }}
  .streak-card {{
    background: #121318;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 16px;
    padding: 12px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }}
  .mood-row {{
    display: flex;
    justify-content: space-between;
    gap: 8px;
    margin-top: 6px;
  }}
  .mood-pill {{
    flex: 1;
    background: #14151B;
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    padding: 8px 4px;
    text-align: center;
    font-size: 10px;
    color: rgba(255,255,255,0.8);
  }}
  .mood-pill.active {{
    border-color: #FFCD00;
    background: rgba(255,205,0,0.12);
    color: #FFCD00;
    font-weight: 700;
  }}
</style>
</head>
<body>
  <div class="phone-case">
    <div class="btn-silent"></div>
    <div class="btn-vol-up"></div>
    <div class="btn-vol-dn"></div>
    <div class="btn-power"></div>
    <div class="bezel">
      <div class="screen">
        <div class="glass-sheen"></div>
        <div class="status-bar">
          <span>9:41</span>
          <div class="dynamic-island"><div class="camera-dot"></div></div>
          <span>100%</span>
        </div>

        <div class="screen-content">
          <div>
            <div class="app-header">
              <div>
                <div style="font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.6); text-transform: uppercase;">HQX Companion</div>
                <div style="font-size: 16px; font-weight: 800; color: #FFFFFF;">HappyU Session</div>
              </div>
              <span class="protocol-tag">BOX BREATHING</span>
            </div>

            <!-- Breathing Sphere -->
            <div class="breath-circle">
              <div class="timer-val">03:00</div>
              <div class="timer-phase">Inhale (4s)</div>
              <div style="font-size: 9px; color: rgba(255,255,255,0.5); margin-top: 4px;">4s Hold &bull; 4s Exhale</div>
            </div>

            <!-- Audio Focus Track -->
            <div style="background: #121318; border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 10px 14px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 18px; color: #FFCD00;">&#127911;</span>
                <div>
                  <div style="font-size: 12px; font-weight: 700; color: #FFFFFF;">Deep Stillness & Reset</div>
                  <div style="font-size: 10px; color: rgba(255,255,255,0.5);">Delta waves &bull; Executive calming</div>
                </div>
              </div>
              <div style="width: 28px; height: 28px; border-radius: 50%; background: #FFCD00; color: #0A0A0A; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 900;">&#9658;</div>
            </div>
          </div>

          <div>
            <!-- Streak Card -->
            <div class="streak-card">
              <div>
                <div style="font-size: 10px; color: rgba(255,255,255,0.6); text-transform: uppercase; font-weight: 700;">Ikigai Micro-Streak</div>
                <div style="font-size: 18px; font-weight: 800; color: #FFCD00;">28 Days Active</div>
              </div>
              <div style="font-size: 24px;">&#128293;</div>
            </div>

            <!-- Mood Check-in -->
            <div style="margin-bottom: 16px;">
              <div style="font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.7); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em;">
                Vitality Pulse Check-in
              </div>
              <div class="mood-row">
                <div class="mood-pill">&#128524;<br>Calm</div>
                <div class="mood-pill active">&#9889;<br>Focused</div>
                <div class="mood-pill">&#128522;<br>Joyful</div>
                <div class="mood-pill">&#129300;<br>Grounded</div>
              </div>
            </div>
          </div>
        </div>

        <div class="home-bar"></div>
      </div>
    </div>
  </div>
</body>
</html>
"""

# HTML 3: Brand Emblem Splash Screen
HTML_MOCKUP_3 = f"""<!DOCTYPE html>
<html>
<head>
{SHARED_HEAD}
<style>
  .splash-screen {{
    background: radial-gradient(circle at 50% 50%, #15161c 0%, #090a0d 60%, #040507 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 30px;
  }}
  .ambient-glow {{
    position: absolute;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: #FFCD00;
    opacity: 0.14;
    filter: blur(55px);
    pointer-events: none;
  }}
  .app-name {{
    font-size: 28px;
    font-weight: 900;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    margin-top: 24px;
    margin-bottom: 4px;
  }}
  .app-tagline {{
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #FFCD00;
    margin-bottom: 16px;
  }}
  .version-pill {{
    font-family: monospace;
    font-size: 10px;
    color: rgba(255,255,255,0.5);
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    padding: 6px 14px;
    border-radius: 999px;
  }}
</style>
</head>
<body>
  <div class="phone-case">
    <div class="btn-silent"></div>
    <div class="btn-vol-up"></div>
    <div class="btn-vol-dn"></div>
    <div class="btn-power"></div>
    <div class="bezel">
      <div class="screen splash-screen">
        <div class="glass-sheen"></div>
        <div class="status-bar" style="position: absolute; top: 0;">
          <span>9:41</span>
          <div class="dynamic-island"><div class="camera-dot"></div></div>
          <span>5G &#9679;</span>
        </div>

        <div class="ambient-glow"></div>

        <!-- Large HQX Official Vector Brand Logo -->
        <svg width="180" height="75" viewBox="0 0 606 270" fill="none" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 0 35px rgba(255,205,0,0.45));">
          <rect width="252" height="253" rx="52" fill="#FFCD00" />
          <path d="M 110 184 L 96 184 L 81 179 L 66 167 L 48 148 L 40 122 L 55 132 L 81 143 L 102 145 L 121 141 L 137 134 L 160 122 L 180 109 L 198 96 L 207 88 L 198 80 L 218 79 L 230 77 L 222 89 L 210 105 L 196 122 L 171 149 L 153 164 L 141 172 L 122 181 L 110 184 Z" fill="#0A0A0A" />
          <path d="M 391 244 L 345 244 L 345 138 L 322 139 L 322 244 L 277 244 L 278 11 L 322 12 L 323 94 L 345 94 L 345 12 L 391 12 Z" fill="#FFFFFF" />
          <path d="M 515 268 L 479 244 L 457 246 L 441 242 L 421 228 L 413 211 L 409 195 L 409 59 L 413 42 L 430 19 L 450 10 L 477 9 L 502 18 L 519 41 L 523 57 L 523 197 L 514 224 L 522 236 L 530 242 L 515 268 Z M 471 203 L 476 195 L 477 64 L 473 53 L 464 51 L 457 56 L 455 62 L 455 194 L 462 203 Z" fill="#FFFFFF" fill-rule="evenodd" />
          <path d="M 593 105 L 573 105 L 569 99 L 564 85 L 560 83 L 557 92 L 554 101 L 537 105 L 540 94 L 546 79 L 550 67 L 553 58 L 548 38 L 539 13 L 560 11 L 565 26 L 570 34 L 572 27 L 575 16 L 593 12 L 589 22 L 583 41 L 578 56 L 580 66 L 585 80 L 592 102 Z" fill="#FFFFFF" />
        </svg>

        <div class="app-name">HappyU Mobile</div>
        <div class="app-tagline">HAPPINESS SAMURAI COMPANION</div>

        <div class="version-pill">
          v2.4 &bull; ENTERPRISE BIOMETRIC ENCRYPTED
        </div>

        <div class="home-bar"></div>
      </div>
    </div>
  </div>
</body>
</html>
"""

# HTML 4: Complete Hero 3D Perspective Trio
HTML_MOCKUP_4 = f"""<!DOCTYPE html>
<html>
<head>
{SHARED_HEAD}
<style>
  body {{
    padding: 0;
    min-height: 100vh;
    background: radial-gradient(circle at 50% 50%, #15161c 0%, #090a0d 65%, #040507 100%);
    overflow: hidden;
  }}
  .scene-3d {{
    position: relative;
    width: 820px;
    height: 720px;
    perspective: 1500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }}
  .floor-shadow {{
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 650px;
    height: 70px;
    background: #000000;
    filter: blur(40px);
    opacity: 0.95;
  }}
  .floor-glow {{
    position: absolute;
    bottom: 60px;
    left: 45%;
    transform: translateX(-50%);
    width: 320px;
    height: 60px;
    background: #FFCD00;
    filter: blur(50px);
    opacity: 0.22;
  }}
  .phone-trio {{
    position: absolute;
    width: 250px;
    height: 510px;
    border-radius: 44px;
    padding: 4px;
    cursor: pointer;
  }}
  /* Phone 1: Center-Left Front */
  .p1 {{
    z-index: 30;
    background: linear-gradient(145deg, #7c808c, #282a32, #14151a);
    box-shadow: 26px 36px 70px rgba(0,0,0,0.98), 5px 3px 0 #343741, 0 0 45px rgba(255,205,0,0.12);
    transform: translate3d(-64px, 15px, 20px) rotateX(10deg) rotateY(12deg) rotateZ(-6deg) scale(1);
  }}
  /* Phone 2: Middle Elevated */
  .p2 {{
    z-index: 20;
    background: linear-gradient(145deg, #6c707c, #25272e, #131418);
    box-shadow: 24px 34px 65px rgba(0,0,0,0.96), 5px 4px 0 #31333d;
    transform: translate3d(38px, -15px, -30px) rotateX(14deg) rotateY(-16deg) rotateZ(21deg) scale(0.96);
  }}
  /* Phone 3: Reclining Back */
  .p3 {{
    z-index: 10;
    background: linear-gradient(145deg, #686b75, #22242a, #111216);
    box-shadow: 22px 32px 60px rgba(0,0,0,0.96), 5px 4px 0 #2c2e36;
    transform: translate3d(122px, 35px, -70px) rotateX(22deg) rotateY(-20deg) rotateZ(41deg) scale(0.92);
  }}
</style>
</head>
<body>
  <div class="scene-3d">
    <div class="floor-shadow"></div>
    <div class="floor-glow"></div>

    <!-- Phone 3 (Back) -->
    <div class="phone-trio p3">
      <div class="bezel" style="border-radius: 40px; padding: 7px;">
        <div class="screen" style="border-radius: 34px; background: #07080B; display: flex; align-items: center; justify-content: center;">
          <div class="dynamic-island" style="position: absolute; top: 12px;"><div class="camera-dot"></div></div>
          <svg width="120" height="50" viewBox="0 0 606 270" fill="none" style="filter: drop-shadow(0 0 25px rgba(255,205,0,0.4));">
            <rect width="252" height="253" rx="52" fill="#FFCD00" />
            <path d="M 110 184 L 96 184 L 81 179 L 66 167 L 48 148 L 40 122 L 55 132 L 81 143 L 102 145 L 121 141 L 137 134 L 160 122 L 180 109 L 198 96 L 207 88 L 198 80 L 218 79 L 230 77 L 222 89 L 210 105 L 196 122 L 171 149 L 153 164 L 141 172 L 122 181 L 110 184 Z" fill="#0A0A0A" />
            <path d="M 391 244 L 345 244 L 345 138 L 322 139 L 322 244 L 277 244 L 278 11 L 322 12 L 323 94 L 345 94 L 345 12 L 391 12 Z" fill="#FFFFFF" />
            <path d="M 515 268 L 479 244 L 457 246 L 441 242 L 421 228 L 413 211 L 409 195 L 409 59 L 413 42 L 430 19 L 450 10 L 477 9 L 502 18 L 519 41 L 523 57 L 523 197 L 514 224 L 522 236 L 530 242 L 515 268 Z M 471 203 L 476 195 L 477 64 L 473 53 L 464 51 L 457 56 L 455 62 L 455 194 L 462 203 Z" fill="#FFFFFF" fill-rule="evenodd" />
            <path d="M 593 105 L 573 105 L 569 99 L 564 85 L 560 83 L 557 92 L 554 101 L 537 105 L 540 94 L 546 79 L 550 67 L 553 58 L 548 38 L 539 13 L 560 11 L 565 26 L 570 34 L 572 27 L 575 16 L 593 12 L 589 22 L 583 41 L 578 56 L 580 66 L 585 80 L 592 102 Z" fill="#FFFFFF" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Phone 2 (Middle) -->
    <div class="phone-trio p2">
      <div class="bezel" style="border-radius: 40px; padding: 7px;">
        <div class="screen" style="border-radius: 34px; background: #07080B; padding: 14px 16px; display: flex; flex-direction: column; justify-content: space-between;">
          <div class="dynamic-island" style="margin: 0 auto 10px auto;"><div class="camera-dot"></div></div>
          <div style="font-size: 13px; font-weight: 800; color: #FFCD00;">BOX BREATHING</div>
          <div style="width: 100px; height: 100px; border-radius: 50%; border: 2px solid #FFCD00; margin: 10px auto; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 800;">
            03:00
          </div>
          <div style="background: rgba(255,255,255,0.06); border-radius: 10px; padding: 8px; font-size: 11px;">
            &#128293; 28 Days Active
          </div>
        </div>
      </div>
    </div>

    <!-- Phone 1 (Front) -->
    <div class="phone-trio p1">
      <div class="bezel" style="border-radius: 40px; padding: 7px;">
        <div class="screen" style="border-radius: 34px; background: #07080B; padding: 14px 16px; display: flex; flex-direction: column; justify-content: space-between;">
          <div class="dynamic-island" style="margin: 0 auto 10px auto;"><div class="camera-dot"></div></div>
          <div style="font-size: 20px; font-weight: 800; line-height: 1.1;">
            Building<br>Daily Joy<br><span style="color:#FFCD00;">Mindfully.</span>
          </div>
          <div style="background: #FFCD00; color: #0A0A0A; border-radius: 999px; padding: 6px 14px; font-weight: 800; font-size: 11px; align-self: flex-start;">
            Let's Flourish &#8599;
          </div>
          <div style="height: 120px; background: radial-gradient(circle at 50% 90%, rgba(255,205,0,0.3) 0%, transparent 70%);"></div>
        </div>
      </div>
    </div>

  </div>
</body>
</html>
"""

def generate_mockups():
    mockups = [
        ("HappyU-Mockup-1-Main-App", HTML_MOCKUP_1, 1400, 1800),
        ("HappyU-Mockup-2-Meditation-Habits", HTML_MOCKUP_2, 1400, 1800),
        ("HappyU-Mockup-3-Brand-Splash", HTML_MOCKUP_3, 1400, 1800),
        ("HappyU-Mockup-4-Hero-3D-Trio", HTML_MOCKUP_4, 1800, 1600)
    ]

    png_paths = []

    for name, html_content, w, h in mockups:
        html_file = os.path.join(SCRIPTS_DIR, f"{name}.html")
        with open(html_file, "w", encoding="utf-8") as f:
            f.write(html_content)

        raw_png = os.path.join(OUTPUT_DIR, f"{name}-raw.png")
        final_png = os.path.join(OUTPUT_DIR, f"{name}.png")

        cmd = [
            EDGE_PATH,
            "--headless=new",
            "--disable-gpu",
            "--force-device-scale-factor=3",
            f"--window-size={w},{h}",
            "--default-background-color=00000000",
            f"--screenshot={raw_png}",
            html_file
        ]
        print(f"Rendering {name} via Edge headless (3x Scale)...")
        subprocess.run(cmd, check=True)

        # Autocrop with Pillow to keep transparent bounding box
        img = Image.open(raw_png)
        bbox = img.getbbox()
        if bbox:
            # Add subtle 20px padding around bounding box
            pad = 25
            bbox_padded = (
                max(0, bbox[0] - pad),
                max(0, bbox[1] - pad),
                min(img.width, bbox[2] + pad),
                min(img.height, bbox[3] + pad)
            )
            cropped = img.crop(bbox_padded)
            cropped.save(final_png, "PNG", optimize=True)
            print(f"Saved {final_png}: {cropped.width}x{cropped.height}px")
            png_paths.append(final_png)
        else:
            img.save(final_png, "PNG")
            png_paths.append(final_png)

        if os.path.exists(raw_png):
            os.remove(raw_png)

    # Also build a ZIP archive of all 4 high-res PNG mockups
    import zipfile
    zip_dest = os.path.join(OUTPUT_DIR, "HappyU-Mobile-Mockups-PNG-HighRes.zip")
    with zipfile.ZipFile(zip_dest, "w", zipfile.ZIP_DEFLATED) as z:
        for p in png_paths:
            z.write(p, arcname=os.path.basename(p))

    print(f"ZIP package generated: {zip_dest} ({os.path.getsize(zip_dest)} bytes)")

if __name__ == "__main__":
    generate_mockups()
