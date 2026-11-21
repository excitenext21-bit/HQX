import os
import subprocess
import pymupdf

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>HappyU App | Official HQX Guide & Editable Enterprise Plan</title>
<style>
  @page {
    size: A4 portrait;
    margin: 0;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #111111;
    background: #FFFFFF;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .page {
    width: 210mm;
    min-height: 297mm;
    max-height: 297mm;
    padding: 16mm 18mm 16mm 18mm;
    position: relative;
    page-break-after: always;
    page-break-inside: avoid;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .page-dark {
    background: #0A0A0A;
    color: #FFFFFF;
  }
  .page-light {
    background: #FAF8F5;
    color: #0A0A0A;
  }
  .page-white {
    background: #FFFFFF;
    color: #0A0A0A;
  }

  /* Header Bar */
  .doc-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(255,255,255,0.15);
  }
  .doc-header-light {
    border-bottom: 1px solid rgba(0,0,0,0.12);
  }
  .logo-box {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .badge-tag {
    font-family: monospace;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-weight: 700;
    color: #FFCD00;
    background: rgba(255, 205, 0, 0.12);
    border: 1px solid rgba(255, 205, 0, 0.3);
    padding: 4px 10px;
    border-radius: 999px;
  }

  /* Typography */
  h1 {
    font-size: 32px;
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
  }
  h2 {
    font-size: 24px;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin-bottom: 8px;
  }
  h3 {
    font-size: 15px;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 4px;
  }
  p {
    font-size: 12px;
    line-height: 1.55;
    color: rgba(255,255,255,0.75);
  }
  .page-light p, .page-white p {
    color: #555555;
  }
  .text-yellow {
    color: #FFCD00;
  }

  /* Stat Pills */
  .stats-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 16px 0;
  }
  .stat-card {
    background: #14151B;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 12px 14px;
  }
  .stat-card-light {
    background: #FFFFFF;
    border: 1px solid rgba(0,0,0,0.08);
  }
  .stat-num {
    font-size: 20px;
    font-weight: 800;
    color: #FFCD00;
    margin-bottom: 2px;
  }
  .stat-label {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(255,255,255,0.6);
  }
  .stat-card-light .stat-label {
    color: #777777;
  }

  /* Feature Grid */
  .grid-2x3 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 14px;
  }
  .feature-box {
    background: #FFFFFF;
    border: 1px solid rgba(0,0,0,0.08);
    border-radius: 12px;
    padding: 14px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  }
  .feature-box-dark {
    background: #13141A;
    border: 1px solid rgba(255,255,255,0.1);
  }
  .feature-badge {
    display: inline-block;
    font-family: monospace;
    font-size: 9px;
    font-weight: 700;
    text-transform: uppercase;
    color: #0A0A0A;
    background: #FFCD00;
    padding: 2px 7px;
    border-radius: 4px;
    margin-bottom: 8px;
  }
  .advantage-box {
    background: #FAF8F5;
    border-left: 3px solid #FFCD00;
    padding: 7px 10px;
    border-radius: 0 6px 6px 0;
    margin-top: 8px;
    font-size: 11px;
    color: #333333;
    line-height: 1.4;
  }
  .feature-box-dark .advantage-box {
    background: rgba(255,205,0,0.08);
    color: rgba(255,255,255,0.9);
  }

  /* Benefits Grid */
  .benefit-card {
    background: #14151B;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 14px;
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }
  .benefit-num {
    font-family: monospace;
    font-size: 18px;
    font-weight: 900;
    color: #FFCD00;
    background: rgba(255,205,0,0.12);
    border: 1px solid rgba(255,205,0,0.25);
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    flex-shrink: 0;
  }

  /* Form / Interactive Page */
  .form-section {
    background: #FAF8F5;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 12px;
  }
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 10px;
  }
  .form-label {
    display: block;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #444444;
    margin-bottom: 4px;
  }
  .form-field-placeholder {
    width: 100%;
    height: 32px;
    background: #FFFFFF;
    border: 1.5px solid #D5D5D5;
    border-radius: 6px;
    padding: 6px 10px;
    font-size: 11px;
    color: #111111;
  }
  .form-textarea-placeholder {
    width: 100%;
    height: 64px;
    background: #FFFFFF;
    border: 1.5px solid #D5D5D5;
    border-radius: 6px;
    padding: 8px 10px;
    font-size: 11px;
    color: #111111;
  }

  /* Footer */
  .doc-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    border-top: 1px solid rgba(255,255,255,0.12);
    font-size: 10px;
    color: rgba(255,255,255,0.5);
  }
  .doc-footer-light {
    border-top: 1px solid rgba(0,0,0,0.1);
    color: #777777;
  }
  .footer-right {
    font-family: monospace;
    font-weight: 600;
  }
</style>
</head>
<body>

<!-- PAGE 1: HERO & EXECUTIVE APP OVERVIEW -->
<div class="page page-dark">
  <div>
    <div class="doc-header">
      <div class="logo-box">
        <svg width="110" height="38" viewBox="0 0 606 270" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="252" height="253" rx="52" fill="#FFCD00" />
          <path d="M 110 184 L 96 184 L 81 179 L 66 167 L 48 148 L 40 122 L 55 132 L 81 143 L 102 145 L 121 141 L 137 134 L 160 122 L 180 109 L 198 96 L 207 88 L 198 80 L 218 79 L 230 77 L 222 89 L 210 105 L 196 122 L 171 149 L 153 164 L 141 172 L 122 181 L 110 184 Z" fill="#0A0A0A" />
          <path d="M 391 244 L 345 244 L 345 138 L 322 139 L 322 244 L 277 244 L 278 11 L 322 12 L 323 94 L 345 94 L 345 12 L 391 12 Z" fill="#FFFFFF" />
          <path d="M 515 268 L 479 244 L 457 246 L 441 242 L 421 228 L 413 211 L 409 195 L 409 59 L 413 42 L 430 19 L 450 10 L 477 9 L 502 18 L 519 41 L 523 57 L 523 197 L 514 224 L 522 236 L 530 242 L 515 268 Z M 471 203 L 476 195 L 477 64 L 473 53 L 464 51 L 457 56 L 455 62 L 455 194 L 462 203 Z" fill="#FFFFFF" fill-rule="evenodd" />
          <path d="M 593 105 L 573 105 L 569 99 L 564 85 L 560 83 L 557 92 L 554 101 L 537 105 L 540 94 L 546 79 L 550 67 L 553 58 L 548 38 L 539 13 L 560 11 L 565 26 L 570 34 L 572 27 L 575 16 L 593 12 L 589 22 L 583 41 L 578 56 L 580 66 L 585 80 L 592 102 Z" fill="#FFFFFF" />
        </svg>
        <span style="font-size:12px; font-weight:700; color:rgba(255,255,255,0.7); letter-spacing:0.05em;">HAPPINESS SAMURAI</span>
      </div>
      <span class="badge-tag">OFFICIAL EXECUTIVE SPECIFICATION</span>
    </div>

    <div style="margin-top: 24px;">
      <div style="font-family: monospace; font-size: 11px; font-weight: 700; color: #FFCD00; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 8px;">
        DIGITAL WELL-BEING & RESILIENCE COMPANION
      </div>
      <h1>Your Pocket Sanctuary for <br><span class="text-yellow">Daily Flourishing</span></h1>
      <p style="font-size: 14px; max-width: 580px; line-height: 1.6; margin-bottom: 16px;">
        HappyU is the official HQX mobile companion engineered to systematically elevate everyday well-being, cognitive stamina, and emotional resilience. Built upon 25+ years of executive leadership research and neuroscience-backed micro-habit protocols.
      </p>
    </div>

    <!-- Stats Matrix -->
    <div class="stats-row">
      <div class="stat-card">
        <div class="stat-num">50,000+</div>
        <div class="stat-label">Active Practitioners</div>
        <p style="font-size: 10px; margin-top: 4px; color: rgba(255,255,255,0.5);">Across 16 states & 9 global hubs</p>
      </div>
      <div class="stat-card">
        <div class="stat-num">5 Mins/Day</div>
        <div class="stat-label">Micro-Habit Protocol</div>
        <p style="font-size: 10px; margin-top: 4px; color: rgba(255,255,255,0.5);">Zero calendar friction for executives</p>
      </div>
      <div class="stat-card">
        <div class="stat-num">iOS & Android</div>
        <div class="stat-label">Native Mobile & Tablet</div>
        <p style="font-size: 10px; margin-top: 4px; color: rgba(255,255,255,0.5);">Enterprise MDM & SSO compatible</p>
      </div>
    </div>

    <!-- Core Interactive Pillars -->
    <div style="margin-top: 20px;">
      <h3 style="color: #FFFFFF; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px;">
        Tri-Pillar Daily Operating Rhythm
      </h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px;">
        <div style="background: #14151B; border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 12px;">
          <div style="color: #FFCD00; font-size: 18px; margin-bottom: 6px;">&#10024;</div>
          <h3 style="font-size: 13px; color: #FFFFFF;">Meditate & Reset</h3>
          <p style="font-size: 11px; margin-top: 4px;">3-min box breathing & desk recharge audio to down-regulate nervous system stress instantly.</p>
        </div>
        <div style="background: #14151B; border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 12px;">
          <div style="color: #FFCD00; font-size: 18px; margin-bottom: 6px;">&#9997;</div>
          <h3 style="font-size: 13px; color: #FFFFFF;">Gratitude Journal</h3>
          <p style="font-size: 11px; margin-top: 4px;">Encrypted micro-prompts rewiring neural attention toward wins, progress, and psychological safety.</p>
        </div>
        <div style="background: #14151B; border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 12px;">
          <div style="color: #FFCD00; font-size: 18px; margin-bottom: 6px;">&#128200;</div>
          <h3 style="font-size: 13px; color: #FFFFFF;">Vitality Pulse</h3>
          <p style="font-size: 11px; margin-top: 4px;">One-tap mood check-ins tracking fatigue and optimism trends before burnout occurs.</p>
        </div>
      </div>
    </div>

    <!-- Download Callout Banner -->
    <div style="margin-top: 20px; background: rgba(255, 205, 0, 0.08); border: 1px solid rgba(255, 205, 0, 0.25); border-radius: 12px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <div style="font-weight: 700; font-size: 13px; color: #FFFFFF;">Available on Apple App Store & Google Play</div>
        <div style="font-size: 11px; color: rgba(255,255,255,0.6); margin-top: 2px;">Search "HappyU by HQX" or contact enterprise@hqx.com for corporate deployment.</div>
      </div>
      <div style="font-family: monospace; font-size: 11px; font-weight: 700; color: #FFCD00; background: #0A0A0A; padding: 6px 12px; border-radius: 6px; border: 1px solid rgba(255,205,0,0.3);">
        v2.4 ENTERPRISE READY
      </div>
    </div>
  </div>

  <div class="doc-footer">
    <span>HQX Happiness Samurai &bull; Executive Well-Being Platform</span>
    <span class="footer-right">PAGE 01 / 04</span>
  </div>
</div>

<!-- PAGE 2: FEATURES INCLUDED & KEY ADVANTAGES -->
<div class="page page-light">
  <div>
    <div class="doc-header doc-header-light">
      <div class="logo-box">
        <span style="font-weight: 800; font-size: 16px; color: #0A0A0A; letter-spacing: -0.01em;">HQX HappyU App</span>
        <span style="font-size: 11px; color: #666666;">| Modular Architecture</span>
      </div>
      <span style="font-family: monospace; font-size: 10px; font-weight: 700; color: #333333; background: #E5E5E5; padding: 3px 8px; border-radius: 4px;">
        6 CORE CAPABILITIES
      </span>
    </div>

    <div style="margin-top: 18px;">
      <h2 style="color: #0A0A0A;">Features Included <span style="font-weight: 300; color: #666666;">& Key Advantages</span></h2>
      <p style="font-size: 12px; max-width: 580px; margin-bottom: 8px;">
        Every module inside HappyU pairs an effortless daily mobile tool with a concrete cognitive, psychological, or workplace advantage.
      </p>
    </div>

    <div class="grid-2x3">
      <!-- Feature 1 -->
      <div class="feature-box">
        <span class="feature-badge">01 &bull; MINDFULNESS</span>
        <h3 style="color: #0A0A0A;">Guided Meditation & Breathwork Library</h3>
        <p style="font-size: 11px; color: #555555; margin-top: 3px;">
          <strong>Included:</strong> 3-min desk resets, deep focus soundscapes, box-breathing timers, and sleep recovery sessions.
        </p>
        <div class="advantage-box">
          <strong>Key Advantage:</strong> Enables employees to reset autonomic nervous system stress in under 180 seconds between high-stakes meetings.
        </div>
      </div>

      <!-- Feature 2 -->
      <div class="feature-box">
        <span class="feature-badge">02 &bull; NEURO-JOURNALING</span>
        <h3 style="color: #0A0A0A;">Structured Gratitude & Reflection Journal</h3>
        <p style="font-size: 11px; color: #555555; margin-top: 3px;">
          <strong>Included:</strong> Daily prompted micro-journaling, voice-to-text notes, private encrypted log, and weekly reflection digests.
        </p>
        <div class="advantage-box">
          <strong>Key Advantage:</strong> Trains the brain to scan for progress and psychological safety, measurably increasing workplace optimism.
        </div>
      </div>

      <!-- Feature 3 -->
      <div class="feature-box">
        <span class="feature-badge">03 &bull; BIO-AWARENESS</span>
        <h3 style="color: #0A0A0A;">Real-Time Mood & Energy Pulse Tracker</h3>
        <p style="font-size: 11px; color: #555555; margin-top: 3px;">
          <strong>Included:</strong> One-tap emotional weather check-ins, 7-day & 30-day vitality trends, and recovery recommendations.
        </p>
        <div class="advantage-box">
          <strong>Key Advantage:</strong> Helps individuals spot burnout patterns early and adjust workload rhythm before exhaustion sets in.
        </div>
      </div>

      <!-- Feature 4 -->
      <div class="feature-box">
        <span class="feature-badge">04 &bull; MINDSET PRIMING</span>
        <h3 style="color: #0A0A0A;">Curated Daily Affirmations & Stoic Prompts</h3>
        <p style="font-size: 11px; color: #555555; margin-top: 3px;">
          <strong>Included:</strong> Morning executive mindset primers, purposeful leadership quotes, and customizable notification schedules.
        </p>
        <div class="advantage-box">
          <strong>Key Advantage:</strong> Anchors daily execution in clarity and purpose rather than reactive inbox-driven urgency.
        </div>
      </div>

      <!-- Feature 5 -->
      <div class="feature-box">
        <span class="feature-badge">05 &bull; BEHAVIORAL ARCHITECTURE</span>
        <h3 style="color: #0A0A0A;">100-Day Ikigai & Micro-Habit Pathways</h3>
        <p style="font-size: 11px; color: #555555; margin-top: 3px;">
          <strong>Included:</strong> Step-by-step habit streaks across the 5 HQX Well-Being Pillars (Physical, Mental, Career, Social, Financial).
        </p>
        <div class="advantage-box">
          <strong>Key Advantage:</strong> Turns workshop insights into measurable 100-day behavioral transformation with 82% habit retention.
        </div>
      </div>

      <!-- Feature 6 -->
      <div class="feature-box">
        <span class="feature-badge">06 &bull; ENTERPRISE GOVERNANCE</span>
        <h3 style="color: #0A0A0A;">Enterprise Wellness Pulse & Insights</h3>
        <p style="font-size: 11px; color: #555555; margin-top: 3px;">
          <strong>Included:</strong> Anonymized organizational vitality index, department engagement heatmaps, zero individual data exposure.
        </p>
        <div class="advantage-box">
          <strong>Key Advantage:</strong> Gives HR and CXO leaders actionable well-being ROI metrics while strictly protecting employee confidentiality.
        </div>
      </div>
    </div>
  </div>

  <div class="doc-footer doc-footer-light">
    <span>HQX Happiness Samurai &bull; Product Catalog</span>
    <span class="footer-right">PAGE 02 / 04</span>
  </div>
</div>

<!-- PAGE 3: 6 STRATEGIC BENEFITS OF HAPPYU -->
<div class="page page-dark">
  <div>
    <div class="doc-header">
      <div class="logo-box">
        <span style="font-weight: 800; font-size: 16px; color: #FFFFFF; letter-spacing: -0.01em;">HQX HappyU App</span>
        <span style="font-size: 11px; color: rgba(255,255,255,0.6);">| Measurable Outcomes</span>
      </div>
      <span class="badge-tag">ORGANIZATIONAL ROI</span>
    </div>

    <div style="margin-top: 18px;">
      <h2 style="color: #FFFFFF;">Benefits of Using <span class="text-yellow">HappyU</span></h2>
      <p style="font-size: 12px; max-width: 580px; margin-bottom: 8px;">
        Documented neuro-behavioral impacts observed across thousands of corporate executives and front-line leaders.
      </p>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 14px;">
      <!-- Benefit 1 -->
      <div class="benefit-card">
        <div class="benefit-num">01</div>
        <div>
          <h3 style="color: #FFFFFF;">Well-Being Enhancement</h3>
          <p style="font-size: 11px; margin-top: 4px;">
            Systematically boosts everyday happiness, emotional regulation, and cognitive stamina through 5-minute daily rituals that integrate seamlessly into executive schedules.
          </p>
        </div>
      </div>

      <!-- Benefit 2 -->
      <div class="benefit-card">
        <div class="benefit-num">02</div>
        <div>
          <h3 style="color: #FFFFFF;">Reduced Stress & Burnout</h3>
          <p style="font-size: 11px; margin-top: 4px;">
            Down-regulates cortisol and workplace anxiety using science-backed breathwork, somatic resets, and guided stillness tested across high-stakes corporate environments.
          </p>
        </div>
      </div>

      <!-- Benefit 3 -->
      <div class="benefit-card">
        <div class="benefit-num">03</div>
        <div>
          <h3 style="color: #FFFFFF;">Sustained Focus & Clarity</h3>
          <p style="font-size: 11px; margin-top: 4px;">
            Replaces decision fatigue and mental clutter with intentional morning priming and structured end-of-day decompression protocols.
          </p>
        </div>
      </div>

      <!-- Benefit 4 -->
      <div class="benefit-card">
        <div class="benefit-num">04</div>
        <div>
          <h3 style="color: #FFFFFF;">Proactive Mental Health Support</h3>
          <p style="font-size: 11px; margin-top: 4px;">
            Provides immediate, stigma-free access to self-guided mental wellness tools, emotional check-ins, and expert audio protocols before issues escalate.
          </p>
        </div>
      </div>

      <!-- Benefit 5 -->
      <div class="benefit-card">
        <div class="benefit-num">05</div>
        <div>
          <h3 style="color: #FFFFFF;">Positive Habit Architecture</h3>
          <p style="font-size: 11px; margin-top: 4px;">
            Builds durable neural pathways for gratitude, optimism, and resilience via behavioral streaks and gentle, non-intrusive micro-nudges.
          </p>
        </div>
      </div>

      <!-- Benefit 6 -->
      <div class="benefit-card">
        <div class="benefit-num">06</div>
        <div>
          <h3 style="color: #FFFFFF;">Inspiring Community Connection</h3>
          <p style="font-size: 11px; margin-top: 4px;">
            Connects professionals and teams with a supportive global network practicing eudaimonic well-being together, cultivating psychological safety and camaraderie.
          </p>
        </div>
      </div>
    </div>

    <!-- Impact Quote Box -->
    <div style="margin-top: 18px; background: #13141A; border: 1px solid rgba(255,205,0,0.3); border-radius: 12px; padding: 14px 18px; display: flex; gap: 14px; align-items: center;">
      <div style="font-size: 28px; color: #FFCD00; line-height: 1;">&#8220;</div>
      <div>
        <p style="font-size: 11.5px; font-style: italic; color: rgba(255,255,255,0.9); line-height: 1.5;">
          The micro-habits delivered by HappyU bridge the gap between keynote inspirations and durable organizational culture change. 5 minutes a day protects your highest performing talent from burnout.
        </p>
        <div style="font-size: 10.5px; font-weight: 700; color: #FFCD00; margin-top: 4px;">
          Manny Anchan &bull; Founder, HQX & Author of Happiness Decoded
        </div>
      </div>
    </div>
  </div>

  <div class="doc-footer">
    <span>HQX Happiness Samurai &bull; Research & Impact</span>
    <span class="footer-right">PAGE 03 / 04</span>
  </div>
</div>

<!-- PAGE 4: EDITABLE ENTERPRISE ROLLOUT PLAN & ORDER FORM -->
<div class="page page-white">
  <div>
    <div class="doc-header doc-header-light">
      <div class="logo-box">
        <span style="font-weight: 800; font-size: 16px; color: #0A0A0A; letter-spacing: -0.01em;">HQX HappyU Enterprise</span>
        <span style="font-size: 11px; color: #666666;">| Custom Implementation Blueprint</span>
      </div>
      <span style="font-family: monospace; font-size: 10px; font-weight: 700; color: #0A0A0A; background: #FFCD00; padding: 3px 8px; border-radius: 4px;">
        INTERACTIVE EDITABLE SPEC
      </span>
    </div>

    <div style="margin-top: 16px; margin-bottom: 12px;">
      <h2 style="color: #0A0A0A; font-size: 22px;">Enterprise Rollout <span style="font-weight: 300; color: #666666;">& Deployment Order</span></h2>
      <p style="font-size: 11.5px; color: #555555;">
        You can fill out or edit this form directly in Adobe Acrobat, Apple Preview, or any PDF editor, or save and return to <strong>enterprise@hqx.com</strong>.
      </p>
    </div>

    <!-- Form Section 1: Organization & Contact Info -->
    <div class="form-section">
      <div style="font-size: 11px; font-weight: 800; color: #0A0A0A; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">
        1. Organization & Leadership Details
      </div>
      <div class="form-row">
        <div>
          <label class="form-label">Enterprise / Company Name</label>
          <div class="form-field-placeholder" id="field_company"></div>
        </div>
        <div>
          <label class="form-label">Industry / Sector</label>
          <div class="form-field-placeholder" id="field_sector"></div>
        </div>
      </div>
      <div class="form-row" style="margin-bottom: 0;">
        <div>
          <label class="form-label">Executive Sponsor / HR Head</label>
          <div class="form-field-placeholder" id="field_sponsor"></div>
        </div>
        <div>
          <label class="form-label">Official Work Email & Phone</label>
          <div class="form-field-placeholder" id="field_email"></div>
        </div>
      </div>
    </div>

    <!-- Form Section 2: Deployment Scope -->
    <div class="form-section">
      <div style="font-size: 11px; font-weight: 800; color: #0A0A0A; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">
        2. Deployment Parameters & Timeline
      </div>
      <div class="form-row">
        <div>
          <label class="form-label">Estimated User Licenses Required</label>
          <div class="form-field-placeholder" id="field_licenses"></div>
        </div>
        <div>
          <label class="form-label">Target Kickoff / Launch Date</label>
          <div class="form-field-placeholder" id="field_date"></div>
        </div>
      </div>
      <div class="form-row" style="margin-bottom: 0;">
        <div>
          <label class="form-label">Deployment Mode</label>
          <div class="form-field-placeholder" id="field_mode"></div>
        </div>
        <div>
          <label class="form-label">Enterprise Reporting Dashboard</label>
          <div class="form-field-placeholder" id="field_reporting"></div>
        </div>
      </div>
    </div>

    <!-- Form Section 3: Strategic Goals & Custom Requirements -->
    <div class="form-section" style="margin-bottom: 8px;">
      <div style="font-size: 11px; font-weight: 800; color: #0A0A0A; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">
        3. Strategic Focus Areas & Custom Objectives (Editable)
      </div>
      <label class="form-label">Key Workplace Challenges & Desired Outcomes</label>
      <div class="form-textarea-placeholder" id="field_notes"></div>
    </div>

    <!-- Authorization Sign-off Box -->
    <div style="background: #FFFFFF; border: 1px dashed rgba(0,0,0,0.25); border-radius: 8px; padding: 10px 14px; display: grid; grid-template-columns: 2fr 1fr; gap: 14px;">
      <div>
        <label class="form-label">Authorized Signature / Digital Sign-off</label>
        <div style="height: 28px; border-bottom: 1px solid #999999; margin-top: 4px;"></div>
      </div>
      <div>
        <label class="form-label">Date</label>
        <div style="height: 28px; border-bottom: 1px solid #999999; margin-top: 4px;"></div>
      </div>
    </div>
  </div>

  <div class="doc-footer doc-footer-light">
    <span>HQX Happiness Quotient Global &bull; www.hqx.com &bull; connect@hqx.com</span>
    <span class="footer-right">PAGE 04 / 04</span>
  </div>
</div>

</body>
</html>
"""

def generate_pdf():
    os.makedirs("scripts", exist_ok=True)
    os.makedirs("public", exist_ok=True)
    html_path = os.path.abspath("scripts/happyu_brochure_source.html")
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(HTML_TEMPLATE)

    raw_pdf_path = os.path.abspath("public/HappyU-App-HQX-Raw.pdf")
    final_pdf_path = os.path.abspath("public/HappyU-App-HQX-Editable-Brochure.pdf")

    edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
    cmd = [
        edge_path,
        "--headless=new",
        "--disable-gpu",
        "--no-pdf-header-footer",
        f"--print-to-pdf={raw_pdf_path}",
        html_path
    ]
    print("Running Edge headless PDF generation...")
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print("Edge failed:", res.stderr)
        return False

    print("Edge generated raw PDF at:", raw_pdf_path)

    # Now open with PyMuPDF and add genuine interactive AcroForm form fields to Page 4!
    doc = pymupdf.open(raw_pdf_path)
    print("PDF loaded, total pages:", len(doc))

    # Page 4 is index 3
    if len(doc) >= 4:
        page = doc[3]
        
        # We find locations or place interactive text widgets in the designated areas
        # Page dimensions in points: 210mm x 297mm -> 595.28 x 841.89 points
        w = page.rect.width
        h = page.rect.height

        fields = [
            # (name, rect, default_value, is_multiline)
            ("CompanyName", pymupdf.Rect(53, 185, 290, 212), "Organization / Company Name", False),
            ("IndustrySector", pymupdf.Rect(305, 185, 542, 212), "Financial Services / Technology / Healthcare", False),
            ("ExecutiveSponsor", pymupdf.Rect(53, 230, 290, 257), "Full Name & Leadership Role", False),
            ("ContactEmailPhone", pymupdf.Rect(305, 230, 542, 257), "executive@company.com | +91 / International", False),
            ("UserLicenses", pymupdf.Rect(53, 319, 290, 346), "500 Seats / Whole Division", False),
            ("TargetLaunchDate", pymupdf.Rect(305, 319, 542, 346), "Q1 2027", False),
            ("DeploymentMode", pymupdf.Rect(53, 364, 290, 391), "Corporate Bulk App Licensing + Executive Workshop", False),
            ("ReportingOption", pymupdf.Rect(305, 364, 542, 391), "Monthly Anonymized Vitality Index (Included)", False),
            ("StrategicNotes", pymupdf.Rect(53, 452, 542, 520), "Enter specific leadership goals, key team burnout challenges, or customized workshop integration notes...", True),
            ("Signature", pymupdf.Rect(53, 560, 370, 588), "Type Name for Digital Sign-off", False),
            ("SignDate", pymupdf.Rect(390, 560, 542, 588), "DD / MM / YYYY", False)
        ]

        for item in fields:
            name, r, val, is_multiline = item
            widget = pymupdf.Widget()
            widget.rect = r
            widget.field_type = pymupdf.PDF_WIDGET_TYPE_TEXT
            widget.field_name = name
            widget.field_value = val
            widget.text_fontsize = 8.5
            widget.text_font = "Helvetica"
            widget.border_color = (0.75, 0.75, 0.75)
            widget.fill_color = (0.97, 0.97, 0.98)
            if is_multiline:
                widget.field_flags |= pymupdf.PDF_TX_FIELD_IS_MULTILINE
            page.add_widget(widget)

        print("Added interactive AcroForm widgets to Page 4.")

    doc.save(final_pdf_path)
    doc.close()
    print("Final editable PDF saved at:", final_pdf_path)
    print("File size:", os.path.getsize(final_pdf_path), "bytes")
    return True

if __name__ == "__main__":
    generate_pdf()
