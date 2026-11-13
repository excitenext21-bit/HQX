import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Sparkles, 
  Wallet, 
  Shield, 
  Check, 
  Clock, 
  BookOpen, 
  Star, 
  CheckCircle2, 
  X, 
  FileText, 
  BarChart3, 
  BookMarked,
  ArrowRight,
  TrendingUp,
  Brain
} from 'lucide-react';

export default function MicroCourses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrolledSuccess, setEnrolledSuccess] = useState(false);
  const [enrollForm, setEnrollForm] = useState({ name: '', email: '' });

  // 5 Mini Masteries directly from Profile Page 16
  const microCourses = [
    {
      id: 'passion-quest',
      title: 'Passion Quest',
      subtitle: 'Identify & Awaken Authentic Intrinsic Drives',
      duration: '100 Days',
      price: '₹4,999',
      icon: Sparkles,
      description: 'Explore and identify personal passions, guiding individuals towards a more fulfilling life aligned with their authentic interests. Systematically eliminate self-sabotaging friction and build daily creative flow.',
      modules: 14,
      enrolledCount: 1840,
      badge: 'Bestseller'
    },
    {
      id: 'finding-ikigai',
      title: 'Finding Your Ikigai',
      subtitle: 'The Japanese Art of Life Direction',
      duration: '100 Days',
      price: '₹4,999',
      icon: Compass,
      description: 'Discover your purpose by integrating what you love, what you are good at, what the world needs, and what you can be paid for. Build a harmonized career and personal operating system.',
      modules: 16,
      enrolledCount: 2450,
      badge: 'Flagship'
    },
    {
      id: 'purpose-deep-dive',
      title: 'Purpose Deep Dive',
      subtitle: 'Core Values & Strategic Life Clarity',
      duration: '100 Days',
      price: '₹4,999',
      icon: Brain,
      description: 'Delve deeply into personal purpose, providing clarity, direction, and understanding of core values for decision-making. Shift from frantic reactive survival to grounded executive intention.',
      modules: 12,
      enrolledCount: 1390,
      badge: 'Executive'
    },
    {
      id: 'happiness-in-money',
      title: 'Happiness in Money',
      subtitle: 'Psychology of Wealth & Abundance Mindset',
      duration: '100 Days',
      price: '₹4,999',
      icon: Wallet,
      description: 'Learn the profound connection between money and well-being, fostering a healthier mindset towards finances for increased happiness, freedom from scarcity anxiety, and smart wealth stewardship.',
      modules: 15,
      enrolledCount: 2190,
      badge: 'Popular'
    },
    {
      id: 'habit-building-journaling',
      title: 'Habit Building (Power of Journaling)',
      subtitle: 'Transformative Daily Micro-Rituals',
      duration: '100 Days',
      price: '₹4,999',
      icon: BookMarked,
      description: 'Establish positive habits through the transformative practice of journaling, promoting self-awareness and mindfulness in daily routines. Small daily micro-shifts compounding into massive life change.',
      modules: 14,
      enrolledCount: 1620,
      badge: 'Habit Mastery'
    }
  ];

  const handleEnroll = (e) => {
    e.preventDefault();
    setEnrolledSuccess(true);
    setTimeout(() => {
      setEnrolledSuccess(false);
      setSelectedCourse(null);
      setEnrollForm({ name: '', email: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Hero Section: About Us / Workshops Editorial Split Layout + Interactive 100-Day Blueprint Deck */}
      {/* Hero Section: About-Page Editorial Style + 3D Golden Sand Hourglass on Pure Black */}
      <section className="bg-black text-white min-h-[100svh] lg:h-[100svh] lg:min-h-[600px] lg:max-h-[1080px] flex flex-col justify-between pt-24 sm:pt-28 pb-0 border-b border-white/10 relative overflow-hidden w-full">
        {/* Left Side Vertical Text: MICRO COURSES (Matching About Us Hero Style) */}
        <div className="absolute left-3 sm:left-6 lg:left-8 xl:left-12 inset-y-0 z-20 flex flex-col justify-center items-center pointer-events-none select-none">
          <div
            className="flex items-center gap-3 sm:gap-4"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span className="font-display text-[11px] sm:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-hq-yellow drop-shadow-md">
              MICRO COURSES
            </span>
            <span className="w-px h-8 sm:h-14 bg-white/25" />
          </div>
        </div>

        {/* Framing Container (About-Us Left Content + Right Hourglass) */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex-1 flex items-center py-4 sm:py-6 min-h-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
            {/* Left Column: About-Us Editorial Headline, Subtext & Signature Hairline CTA */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="max-w-md">
                <h1
                  style={{ fontFamily: '"Geist", Arial, sans-serif', fontWeight: 300 }}
                  className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-light tracking-tight text-white leading-[1.15] mb-5"
                >
                  100-Day <br />
                  <span
                    style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                    className="text-hq-yellow font-bold"
                  >
                    Micro Courses
                  </span>
                </h1>

                <p className="font-body text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8">
                  Digital 100-day courses that can be done at your own pace and from anywhere. 10 minutes of daily micro-learning that systematically re-engineers habits, emotional poise, purpose alignment, and financial well-being.
                </p>

                <div className="pt-1 flex flex-wrap items-center gap-6">
                  <a
                    href="#courses-catalog"
                    className="group relative inline-flex items-center justify-between gap-8 py-3.5 px-2 font-display font-medium text-xs tracking-[0.2em] text-white hover:text-hq-yellow transition-colors duration-300 uppercase"
                  >
                    <span className="absolute top-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />
                    <span className="relative z-10 font-semibold tracking-widest">BROWSE MINI MASTERIES</span>
                    <svg
                      className="w-[22px] h-[11px] inline-block transition-transform duration-300 group-hover:translate-x-1.5 flex-shrink-0"
                      viewBox="0 0 20 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="0" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="1.2" />
                      <polyline points="15 1, 20 5, 15 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="absolute bottom-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Complete Full-View Golden Sand Hourglass Image (+25% Larger) + Flowing Sand Animation */}
            <div className="lg:col-span-7 flex items-center justify-center">
              <div className="relative h-[475px] sm:h-[550px] lg:h-[calc(100svh-145px)] max-h-[675px] aspect-[736/1104] flex items-center justify-center select-none pointer-events-none scale-[1.25] origin-center">
                <img
                  src="/images/hourglass-hero.jpg"
                  alt="Golden Sand Hourglass"
                  className="w-full h-full object-contain pointer-events-none select-none"
                />

                {/* Animated Golden Sand Stream Flowing Through the Center Neck */}
                <svg
                  viewBox="0 0 200 300"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="flowingSandGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.95" />
                      <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#FDE68A" stopOpacity="0.85" />
                    </linearGradient>
                  </defs>

                  {/* Continuous Shimmering Sand Stream in Neck (y=130 to y=198) */}
                  <line
                    x1="100"
                    y1="131"
                    x2="100"
                    y2="198"
                    stroke="url(#flowingSandGrad)"
                    strokeWidth="1.6"
                    strokeDasharray="3 4"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="28"
                      to="0"
                      dur="0.65s"
                      repeatCount="indefinite"
                    />
                  </line>

                  <line
                    x1="100"
                    y1="133"
                    x2="100"
                    y2="198"
                    stroke="#FFFBEB"
                    strokeWidth="0.9"
                    strokeDasharray="1.5 5.5"
                    strokeOpacity="0.85"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="28"
                      to="0"
                      dur="0.45s"
                      repeatCount="indefinite"
                    />
                  </line>

                  {/* Falling Sand Micro-Grains Near Pyramid Apex */}
                  {[
                    { cx: 98.8, delay: '0s', dur: '0.7s' },
                    { cx: 101.2, delay: '0.22s', dur: '0.65s' },
                    { cx: 99.5, delay: '0.42s', dur: '0.75s' },
                    { cx: 100.6, delay: '0.58s', dur: '0.68s' }
                  ].map((g, i) => (
                    <circle key={i} cx={g.cx} cy="135" r="0.85" fill="#FDE68A">
                      <animate
                        attributeName="cy"
                        values="135;198"
                        dur={g.dur}
                        begin={g.delay}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;0.95;0.9;0"
                        dur={g.dur}
                        begin={g.delay}
                        repeatCount="indefinite"
                      />
                    </circle>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Docked Stats & Reputation Strip */}
        <div className="w-full bg-[#0A0A0A]/95 text-white/80 py-3.5 sm:py-4 px-6 border-t border-white/10 overflow-hidden relative z-20">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-xs font-mono uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">05</span>
              <span className="text-white/70">Mini Masteries</span>
            </div>
            <span className="text-white/20 hidden md:inline">&bull;</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">100 DAYS</span>
              <span className="text-white/70">Self-Paced Transformation</span>
            </div>
            <span className="text-white/20 hidden md:inline">&bull;</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">10 MINS/DAY</span>
              <span className="text-white/70">Habit Micro-Learning</span>
            </div>
            <span className="text-white/20 hidden md:inline">&bull;</span>
            <div className="flex items-center gap-2">
              <span className="text-hq-yellow font-bold">9,490+</span>
              <span className="text-white/70">Active Learners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Catalog (Profile Page 16) */}
      <section id="courses-catalog" className="py-20 sm:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header Row: Dual-Tone Title & Top Narrative (Matching Dedicated Chapters of HQX) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 sm:mb-14 pb-8 border-b border-black/10">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] leading-[1.08]">
              Self-Paced Transformational <br />
              <span className="text-[#666666] font-light">Blueprints</span>
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-hq-black/65 max-w-md font-light leading-relaxed lg:pb-1">
            Done at your own pace, on mobile or desktop, with downloadable habit worksheets and lifetime masterclass access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {microCourses.map((course) => {
            const Icon = course.icon;
            return (
              <div 
                key={course.id}
                className="bg-hq-gray p-8 rounded-2xl border border-hq-black/15 shadow-sm hover:border-hq-black hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-hq-black text-hq-yellow flex items-center justify-center group-hover:bg-hq-yellow group-hover:text-hq-black transition-colors">
                      <Icon className="w-7 h-7 stroke-[1.5]" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-display font-bold text-hq-black">{course.price}</div>
                      <span className="text-[10px] font-mono uppercase tracking-widest bg-hq-yellow text-hq-black px-2 py-0.5 rounded font-bold">
                        {course.badge}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold tracking-tight mb-1">
                    {course.title}
                  </h3>
                  <div className="text-xs font-mono text-hq-black/60 mb-4 font-medium">
                    {course.subtitle}
                  </div>

                  <div className="flex gap-4 text-xs font-mono text-hq-black/60 mb-6 pb-4 border-b border-hq-black/10">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-hq-black" /> {course.duration}</span>
                    <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5 text-hq-black" /> {course.modules} Modules</span>
                    <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-hq-yellow fill-hq-yellow" /> 4.9 Rating</span>
                  </div>

                  <p className="font-body text-xs text-hq-black/75 font-light leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <div className="space-y-2 mb-6 text-xs font-body text-hq-black/80">
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-hq-yellow bg-hq-black rounded-full p-0.5" /> 10-Minute Daily Guided Reflection</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-hq-yellow bg-hq-black rounded-full p-0.5" /> Downloadable Somatic Habit Trackers</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-hq-yellow bg-hq-black rounded-full p-0.5" /> Introspective Self-Assessment Matrix</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-hq-black/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-hq-black/60">
                    {course.enrolledCount} leaders enrolled
                  </span>
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="bg-hq-black text-white font-display text-xs uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-hq-yellow hover:text-hq-black transition-all font-semibold shadow-md"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Profile Page 17 & 18: Bi-Weekly Posts & Introspective Assessment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {/* Bi-Weekly Posts (Page 17) */}
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-hq-black/15 shadow-xl flex flex-col justify-between">
            <div>
              <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6 border border-hq-black/10 bg-hq-gray">
                <img 
                  src="/profile_assets/page_17_img_2_1206.jpeg" 
                  alt="Bi-Weekly Posts on Well-Being" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-xs font-mono uppercase tracking-widest text-hq-yellow bg-hq-black px-3 py-1 rounded-full inline-block mb-3 font-bold">
                Well-Being Done Right • Page 17
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                Bi-Weekly Posts on Well-Being
              </h3>
              <p className="font-body text-xs md:text-sm text-hq-black/80 font-light leading-relaxed mb-6">
                Two weekly posts on happiness and well-being provide individuals with practical tips and strategies to improve their mental, emotional, and physical health. Covering mindfulness techniques, positive psychology practices, self-care strategies, stress management, and building positive relationships.
              </p>
            </div>

            <div className="pt-4 border-t border-hq-black/10 flex items-center justify-between text-xs font-mono text-hq-black/70">
              <span>Delivered directly to subscriber inboxes</span>
              <span className="font-bold text-hq-black">Included with Course</span>
            </div>
          </div>

          {/* Introspective Assessment (Page 18) */}
          <div className="bg-hq-black text-white p-8 md:p-10 rounded-3xl border border-black shadow-2xl flex flex-col justify-between">
            <div>
              <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-white/5">
                <img 
                  src="/profile_assets/page_18_img_1_1231.jpeg" 
                  alt="Happiness Quotient Introspective Assessment" 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="text-xs font-mono uppercase tracking-widest text-hq-black bg-hq-yellow px-3 py-1 rounded-full inline-block mb-3 font-bold">
                Clinical Diagnostic • Page 18
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-white">
                Happiness Quotient & Introspective Assessment
              </h3>
              <p className="font-body text-xs md:text-sm text-white/80 font-light leading-relaxed mb-6">
                The happiness quotient (HQ) refers to one's ability to manage happiness effectively. Combining HQ and introspective assessment helps individuals evaluate their happiness skills, identify areas for improvement, and enhance their overall well-being.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/70">
              <span>Scientific Self-Reflection Matrix</span>
              <span className="font-bold text-hq-yellow">Free Baseline Diagnostic</span>
            </div>
          </div>
        </div>

        {/* Practice Tools & Handouts (Page 19) */}
        <div className="bg-hq-yellow text-hq-black p-8 md:p-12 rounded-3xl border border-hq-black shadow-xl flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest font-bold text-hq-black/70 block mb-2">Practice Tools • Page 19</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Handouts, Reflection Sheets & Exercise Blueprints
            </h3>
            <p className="font-body text-sm text-hq-black/85 font-light leading-relaxed">
              Every course comes with physical and digital downloadable practice tools. Interactive exercises designed to improve mental, emotional, and physical health through hands-on positive psychology and structured habit routines.
            </p>
          </div>
          <div className="w-full lg:w-4/12 rounded-2xl overflow-hidden border-2 border-hq-black shadow-xl bg-white">
            <img 
              src="/profile_assets/page_19_img_2_1251.jpeg" 
              alt="Handouts and Practice Tools" 
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Enrollment Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white text-hq-black max-w-lg w-full p-8 md:p-10 rounded-3xl border border-hq-black shadow-2xl relative">
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-hq-gray"
            >
              <X className="w-5 h-5 text-hq-black" />
            </button>

            {enrolledSuccess ? (
              <div className="text-center py-8">
                <CheckCircle2 className="w-14 h-14 text-green-500 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold mb-2">Welcome to Your 100-Day Journey!</h3>
                <p className="font-body text-xs text-hq-black/70 font-light">
                  Access instructions and Day 01 onboarding materials have been sent to your email.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-hq-yellow bg-hq-black px-2.5 py-1 rounded font-bold inline-block mb-3">
                  Digital Enrollment
                </span>
                <h3 className="font-display text-2xl font-bold mb-1">{selectedCourse.title}</h3>
                <div className="text-xs font-mono text-hq-black/60 mb-6">{selectedCourse.duration} • Single License {selectedCourse.price}</div>

                <form onSubmit={handleEnroll} className="space-y-4">
                  <div>
                    <label className="text-xs font-mono uppercase text-hq-black/70 block mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={enrollForm.name}
                      onChange={(e) => setEnrollForm({ ...enrollForm, name: e.target.value })}
                      placeholder="e.g. Ananya Sen"
                      className="w-full bg-hq-gray border border-hq-black/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-hq-black"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono uppercase text-hq-black/70 block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={enrollForm.email}
                      onChange={(e) => setEnrollForm({ ...enrollForm, email: e.target.value })}
                      placeholder="e.g. ananya@gmail.com"
                      className="w-full bg-hq-gray border border-hq-black/15 rounded-xl px-4 py-3 text-sm outline-none focus:border-hq-black"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-hq-black text-white font-display font-semibold uppercase tracking-widest py-3.5 rounded-xl text-xs hover:bg-hq-yellow hover:text-hq-black transition-all shadow-md mt-4"
                  >
                    Confirm Instant Access ({selectedCourse.price})
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
