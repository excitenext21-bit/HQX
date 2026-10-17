import React, { useState } from 'react';
import { Compass, Sparkles, Wallet, Shield, Check, Clock, BookOpen, Star, CheckCircle2, X } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function MicroCourses() {
  const { courses } = useData();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrolledSuccess, setEnrolledSuccess] = useState(false);
  const [enrollForm, setEnrollForm] = useState({ name: '', email: '' });

  const iconMap = {
    compass: Compass,
    sparkles: Sparkles,
    wallet: Wallet,
    shield: Shield
  };

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
      {/* Hero */}
      <section className="bg-hq-black text-hq-white pt-28 pb-20 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-xs uppercase tracking-widest text-hq-yellow mb-3 font-semibold">
            Digital Transformation Trajectories
          </div>
          <h1 className="font-display text-5xl md:text-7xl tracking-tighter font-semibold mb-6">
            100-Day <br />
            <span className="text-hq-yellow">Micro Courses</span>
          </h1>
          <p className="font-body text-base md:text-xl text-hq-white/80 max-w-2xl font-light leading-relaxed">
            Architected to build compound neuroplastic transformation. 10 minutes of daily micro-learning that systematically re-engineers habits, emotional poise, and financial freedom.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {courses.map((course) => {
            const Icon = iconMap[course.icon] || Sparkles;
            return (
              <div 
                key={course.id}
                className="bg-hq-gray p-8 md:p-10 border border-hq-black/15 shadow-lg flex flex-col justify-between hover:border-hq-black transition-all group"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-hq-black text-hq-yellow flex items-center justify-center group-hover:bg-hq-yellow group-hover:text-hq-black transition-colors">
                      <Icon className="w-7 h-7 stroke-[1.5]" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-display font-bold text-hq-black">{course.price}</div>
                      <div className="text-[10px] font-mono text-hq-black/60 uppercase">Single License</div>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">
                    {course.title}
                  </h3>

                  <div className="flex gap-4 text-xs font-mono text-hq-black/60 mb-6 pb-4 border-b border-hq-black/10">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
                    <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> {course.modules} Modules</span>
                    <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-hq-yellow fill-hq-yellow" /> 4.9 (1.8k reviews)</span>
                  </div>

                  <p className="font-body text-xs md:text-sm text-hq-black/80 font-light leading-relaxed mb-8">
                    {course.description}
                  </p>

                  <div className="space-y-2 mb-8 text-xs font-body text-hq-black/80">
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-hq-yellow bg-hq-black rounded-full p-0.5" /> 10-Minute Daily Video Reflection</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-hq-yellow bg-hq-black rounded-full p-0.5" /> Downloadable Somatic Habit Trackers</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-hq-yellow bg-hq-black rounded-full p-0.5" /> Lifetime Access to Alumni Masterclasses</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-hq-black/10 flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <span className="text-[11px] font-mono text-hq-black/60">
                    {course.enrolledCount} active leaders enrolled
                  </span>
                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="w-full sm:w-auto bg-hq-black text-hq-white font-display text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-hq-yellow hover:text-hq-black transition-all font-semibold shadow-md"
                  >
                    Enroll in 100 Days
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Bulk Licensing Callout */}
        <div className="mt-20 p-8 md:p-12 bg-hq-yellow text-hq-black rounded-3xl border border-hq-black flex flex-col lg:flex-row justify-between items-center gap-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest font-bold">Enterprise Access</span>
            <h3 className="font-display text-3xl md:text-4xl font-semibold mt-1">
              Equip Your Entire Organization
            </h3>
            <p className="font-body text-xs md:text-sm font-light mt-2 max-w-xl">
              We offer volume licensing for teams of 50 to 5,000+ employees, with custom SSO integration, cohort progress dashboards, and live quarterly Q&A with Manny Anchan.
            </p>
          </div>
          <a 
            href="#contact" 
            className="bg-hq-black text-hq-white font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all font-semibold shrink-0"
          >
            Inquire for Enterprise Bulk Licensing
          </a>
        </div>
      </section>

      {/* Enrollment Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 bg-hq-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-hq-white text-hq-black max-w-md w-full p-8 border border-hq-black shadow-2xl relative">
            <button 
              onClick={() => setSelectedCourse(null)} 
              className="absolute top-4 right-4 text-hq-black/50 hover:text-hq-black"
            >
              <X className="w-6 h-6" />
            </button>

            {enrolledSuccess ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-14 h-14 text-hq-black mx-auto" />
                <h4 className="font-display text-2xl font-semibold">Welcome to Day 1!</h4>
                <p className="text-xs font-body font-light">
                  Your registration for <strong>{selectedCourse.title}</strong> is confirmed. Check your email for login access to the HappyU learning portal.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-hq-black/50">Instant Digital Access</span>
                <h3 className="font-display text-2xl font-semibold mt-1 mb-2">
                  {selectedCourse.title}
                </h3>
                <div className="text-xs font-mono bg-hq-yellow text-hq-black px-2 py-0.5 inline-block font-semibold mb-6">
                  {selectedCourse.duration} • {selectedCourse.price}
                </div>

                <form onSubmit={handleEnroll} className="space-y-4 text-xs font-body">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-hq-black/60 mb-1">Your Full Name</label>
                    <input 
                      type="text" 
                      required 
                      value={enrollForm.name}
                      onChange={(e) => setEnrollForm({ ...enrollForm, name: e.target.value })}
                      placeholder="e.g. Vikramaditya Sharma"
                      className="w-full border border-hq-black/20 p-3 text-hq-black focus:outline-none focus:border-hq-black" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-hq-black/60 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={enrollForm.email}
                      onChange={(e) => setEnrollForm({ ...enrollForm, email: e.target.value })}
                      placeholder="vikram@example.com"
                      className="w-full border border-hq-black/20 p-3 text-hq-black focus:outline-none focus:border-hq-black" 
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full bg-hq-yellow text-hq-black font-display font-semibold uppercase tracking-widest py-3.5 text-xs hover:bg-hq-black hover:text-white transition-all shadow-md"
                    >
                      Complete Enrollment ({selectedCourse.price})
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
