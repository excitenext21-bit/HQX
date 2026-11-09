import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Heart, 
  Sparkles, 
  Activity, 
  Play, 
  Pause, 
  RotateCcw, 
  Check, 
  Smile, 
  Meh, 
  Frown, 
  Sun, 
  ShieldCheck, 
  Download, 
  ArrowRight,
  BookMarked,
  Users,
  Compass
} from 'lucide-react';

export default function HappyUApp() {
  // Interactive App Simulator States
  const [activeTab, setActiveTab] = useState('meditate'); // 'meditate' | 'journal' | 'mood'
  
  // Meditation Timer State
  const [secondsLeft, setSecondsLeft] = useState(180);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((sec) => sec - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsRunning(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  // Gratitude Journal state
  const [journalText, setJournalText] = useState('');
  const [savedJournal, setSavedJournal] = useState([
    'Grateful for deep, undisturbed sleep and morning sunlight.',
    'Productive alignment call with the product strategy pod.'
  ]);

  const handleSaveJournal = (e) => {
    e.preventDefault();
    if (!journalText) return;
    setSavedJournal([journalText, ...savedJournal]);
    setJournalText('');
  };

  // Mood Tracker State
  const [selectedMood, setSelectedMood] = useState('peaceful');
  const [moodHistory, setMoodHistory] = useState([
    { day: 'Mon', score: 82 },
    { day: 'Tue', score: 86 },
    { day: 'Wed', score: 79 },
    { day: 'Thu', score: 91 },
    { day: 'Today', score: 94 }
  ]);

  const formatTimer = (sec) => {
    const mins = Math.floor(sec / 60);
    const remainder = sec % 60;
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  const appBenefits = [
    {
      title: 'Well-being Enhancement',
      desc: 'HappyU app systematically boosts overall everyday happiness and emotional resilience.'
    },
    {
      title: 'Comprehensive Features',
      desc: 'Guided meditation exercises, gratitude journaling, positive affirmations, and mood tracking.'
    },
    {
      title: 'Mental Health Support',
      desc: 'Instant access to scientific mental health resources, somatic resets, and expert guidance.'
    },
    {
      title: 'Community Connection',
      desc: 'Connects users with an inspiring, supportive, like-minded community of wellness practitioners.'
    },
    {
      title: 'Life Changing Benefits',
      desc: 'Increased joy and contentment, dramatically reduced stress and anxiety, and improved mental health.'
    }
  ];

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Hero Header with Authentic App Mockups */}
      <section className="bg-hq-black text-hq-white pt-36 pb-20 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="max-w-2xl">
            <h1 
              style={{ fontFamily: '"Geist", Arial, sans-serif', fontWeight: 300 }}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-light mb-5"
            >
              HappyU <span style={{ fontFamily: '"Geist", Arial, sans-serif' }} className="text-hq-yellow font-bold">App</span>
            </h1>
            <p className="font-body text-base md:text-xl text-hq-white/80 font-light leading-relaxed mb-8">
              HappyU is an app that aims to improve the user's overall well-being and sense of happiness. Packed with meditation exercises, gratitude journaling, positive affirmations, and mood tracking to develop lasting daily micro-habits.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#simulator" 
                className="bg-hq-yellow text-hq-black font-display font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white transition-all shadow-xl"
              >
                Try Interactive Simulator
              </a>
              <button 
                onClick={() => alert('Download links will be dispatched to your corporate email.')}
                className="border border-white/30 text-white font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Get iOS & Android App</span>
              </button>
            </div>
          </div>

          {/* Authentic Real App Screenshots from Profile Page 20 */}
          <div className="flex gap-4 items-center justify-center">
            <div className="w-40 sm:w-48 aspect-[9/18] rounded-3xl overflow-hidden border-4 border-hq-yellow shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform bg-black">
              <img 
                src="/profile_assets/page_20_img_1_1277.jpeg" 
                alt="HappyU Mobile App Screenshot" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-40 sm:w-48 aspect-[9/18] rounded-3xl overflow-hidden border-4 border-white/40 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform bg-black">
              <img 
                src="/profile_assets/page_20_img_3_1284.jpeg" 
                alt="HappyU Meditation & Mood Screens" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5 Core App Benefits (Page 20 of Profile) */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-hq-black/50 mb-2 font-semibold">
            Proven Clinical Impact
          </div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight font-semibold">
            Key Benefits of HappyU
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {appBenefits.map((b, i) => (
            <div key={i} className="bg-hq-gray p-8 rounded-2xl border border-hq-black/10 hover:border-hq-black transition-all">
              <div className="w-10 h-10 rounded-xl bg-hq-black text-hq-yellow flex items-center justify-center font-mono font-bold text-sm mb-4">
                {(i + 1).toString().padStart(2, '0')}
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">
                {b.title}
              </h3>
              <p className="font-body text-xs text-hq-black/75 font-light leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}

          {/* Community Card */}
          <div className="bg-hq-black text-white p-8 rounded-2xl border border-black shadow-xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-hq-yellow uppercase tracking-widest mb-2 font-semibold">
                Daily Community
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">
                New Experiences
              </h3>
              <p className="font-body text-xs text-white/80 font-light leading-relaxed">
                Join thousands of enterprise executives meditating together, tracking moods, and building habits with the HQX network.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-hq-yellow font-bold">
              <span>Over 50,000+ Active Users</span>
              <Users className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive In-Browser App Simulator */}
      <section id="simulator" className="py-20 px-6 md:px-12 bg-hq-gray border-t border-b border-hq-black/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-hq-black/60 block font-bold mb-2">
              Interactive In-Browser Experience
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Test Drive the HappyU Experience
            </h2>
            <p className="font-body text-hq-black/70 max-w-md mx-auto text-sm mt-2 font-light">
              Switch between features below to experience daily meditation, journaling, and mood tracking live.
            </p>
          </div>

          {/* Simulator Shell */}
          <div className="max-w-md mx-auto bg-hq-black text-white p-6 sm:p-8 rounded-[40px] shadow-2xl border-4 border-hq-black relative overflow-hidden">
            {/* Simulator Tabs */}
            <div className="flex justify-between items-center bg-white/10 p-1 rounded-full mb-8">
              <button
                onClick={() => setActiveTab('meditate')}
                className={`flex-1 py-2 rounded-full text-xs font-display uppercase tracking-wider font-semibold transition-all ${
                  activeTab === 'meditate' ? 'bg-hq-yellow text-hq-black shadow-md' : 'text-white/70 hover:text-white'
                }`}
              >
                Meditate
              </button>
              <button
                onClick={() => setActiveTab('journal')}
                className={`flex-1 py-2 rounded-full text-xs font-display uppercase tracking-wider font-semibold transition-all ${
                  activeTab === 'journal' ? 'bg-hq-yellow text-hq-black shadow-md' : 'text-white/70 hover:text-white'
                }`}
              >
                Journal
              </button>
              <button
                onClick={() => setActiveTab('mood')}
                className={`flex-1 py-2 rounded-full text-xs font-display uppercase tracking-wider font-semibold transition-all ${
                  activeTab === 'mood' ? 'bg-hq-yellow text-hq-black shadow-md' : 'text-white/70 hover:text-white'
                }`}
              >
                Mood Track
              </button>
            </div>

            {/* TAB 1: MEDITATE */}
            {activeTab === 'meditate' && (
              <div className="text-center py-6">
                <div className="w-32 h-32 rounded-full border-4 border-hq-yellow/40 flex items-center justify-center mx-auto mb-6 relative">
                  <div className={`w-28 h-28 rounded-full bg-hq-yellow/20 flex items-center justify-center transition-all duration-1000 ${
                    isRunning ? 'scale-110 animate-pulse' : 'scale-100'
                  }`}>
                    <span className="font-display text-3xl font-bold text-white">{formatTimer(secondsLeft)}</span>
                  </div>
                </div>
                <div className="text-xs font-mono text-white/60 uppercase tracking-widest mb-6">
                  {isRunning ? 'Breathe Deeply • Inhale 4s, Exhale 4s' : 'Press Play for 3-Min Grounding'}
                </div>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setIsRunning(!isRunning)}
                    className="w-14 h-14 rounded-full bg-hq-yellow text-hq-black flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                  >
                    {isRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
                  </button>
                  <button
                    onClick={() => {
                      setIsRunning(false);
                      setSecondsLeft(180);
                    }}
                    className="w-14 h-14 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: GRATITUDE JOURNAL */}
            {activeTab === 'journal' && (
              <div className="py-2">
                <form onSubmit={handleSaveJournal} className="mb-6">
                  <label className="text-xs font-mono text-hq-yellow uppercase tracking-wider block mb-2 font-bold">
                    What are 2 things you're grateful for today?
                  </label>
                  <textarea
                    rows={3}
                    value={journalText}
                    onChange={(e) => setJournalText(e.target.value)}
                    placeholder="e.g. Clean air, supportive colleague on project..."
                    className="w-full bg-white/10 border border-white/20 rounded-2xl p-4 text-xs text-white outline-none focus:border-hq-yellow mb-3 resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-hq-yellow text-hq-black font-display font-semibold text-xs uppercase tracking-widest py-3 rounded-full hover:bg-white transition-all shadow-md"
                  >
                    Save Gratitude Entry
                  </button>
                </form>

                <div className="space-y-2">
                  <div className="text-[10px] font-mono uppercase text-white/50 tracking-wider">Recent Reflections:</div>
                  {savedJournal.map((entry, idx) => (
                    <div key={idx} className="bg-white/5 p-3 rounded-xl border border-white/10 text-xs text-white/90 flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-hq-yellow shrink-0 mt-0.5" />
                      <span>{entry}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: MOOD TRACKER */}
            {activeTab === 'mood' && (
              <div className="py-2 text-center">
                <span className="text-xs font-mono text-white/60 uppercase tracking-widest block mb-4">
                  Check In: How is your internal weather?
                </span>
                
                <div className="flex justify-around mb-8">
                  {[
                    { id: 'peaceful', label: 'Peaceful', icon: Smile, score: 95 },
                    { id: 'neutral', label: 'Balanced', icon: Meh, score: 75 },
                    { id: 'fatigued', label: 'Fatigued', icon: Frown, score: 55 }
                  ].map((m) => {
                    const MIcon = m.icon;
                    const isMActive = selectedMood === m.id;
                    return (
                      <button
                        key={m.id}
                        onClick={() => setSelectedMood(m.id)}
                        className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all ${
                          isMActive ? 'bg-hq-yellow text-hq-black scale-110 shadow-lg' : 'text-white/60 hover:text-white'
                        }`}
                      >
                        <MIcon className="w-8 h-8" />
                        <span className="text-[10px] font-mono uppercase tracking-wider font-bold">{m.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-left">
                  <div className="text-[10px] font-mono uppercase text-white/60 mb-2">5-Day HQ Harmony Average:</div>
                  <div className="flex justify-between items-end h-20 pt-2 border-b border-white/10">
                    {moodHistory.map((h, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div 
                          className="w-6 bg-hq-yellow rounded-t" 
                          style={{ height: `${h.score * 0.6}px` }}
                        ></div>
                        <span className="text-[10px] font-mono text-white/70">{h.day}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center pt-3 text-xs font-mono text-hq-yellow font-bold">
                    Current Wellness Pulse: 87.4%
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 text-center bg-hq-yellow text-hq-black border-t border-hq-black">
        <h2 className="font-display text-4xl md:text-5xl tracking-tight font-semibold mb-4">
          Deploy HappyU Across Your Organization
        </h2>
        <p className="font-body text-hq-black/80 max-w-xl mx-auto mb-8 font-light text-base">
          Enterprise bulk licensing and custom dashboard reporting available for HR and wellness leaders.
        </p>
        <Link 
          to="/contact" 
          className="bg-hq-black text-hq-white font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-hq-black transition-all font-semibold shadow-xl"
        >
          Request Corporate Enterprise License
        </Link>
      </section>
    </div>
  );
}
