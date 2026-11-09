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
      {/* Hero Header with Authentic Profile Imagery */}
      <section className="bg-hq-black text-hq-white pt-36 pb-20 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 opacity-25 lg:opacity-35 pointer-events-none overflow-hidden">
          <img 
            src="/profile_assets/page_16_img_1_1089.jpeg" 
            alt="Micro Courses Session" 
            className="w-full h-full object-cover object-center filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hq-black via-hq-black/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 
              style={{ fontFamily: '"Geist", Arial, sans-serif', fontWeight: 300 }}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-light mb-5"
            >
              100-Day <br />
              <span 
                style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                className="text-hq-yellow font-bold"
              >
                Micro Courses
              </span>
            </h1>

            <p className="font-body text-base md:text-xl text-hq-white/80 font-light leading-relaxed mb-8">
              Digital 100-day courses that can be done at your own pace and from anywhere. 10 minutes of daily micro-learning that systematically re-engineers habits, emotional poise, purpose alignment, and financial well-being.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#courses-catalog" 
                className="bg-hq-yellow text-hq-black font-display font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white transition-all shadow-xl"
              >
                Browse Mini Masteries
              </a>
              <Link 
                to="/happyu-app" 
                className="border border-white/30 text-white font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all"
              >
                Explore HappyU Mobile App
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Catalog (Profile Page 16) */}
      <section id="courses-catalog" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight font-semibold">
            Self-Paced Transformational Blueprints
          </h2>
          <p className="font-body text-hq-black/70 max-w-xl mx-auto text-sm mt-2 font-light">
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
