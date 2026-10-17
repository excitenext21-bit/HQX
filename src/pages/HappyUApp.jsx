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
  ArrowRight 
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

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Hero Section */}
      <section className="bg-hq-black text-hq-white pt-28 pb-20 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-hq-yellow/20 border border-hq-yellow/40 rounded-full text-hq-yellow text-xs font-mono uppercase tracking-widest mb-6">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Mental Wellness Ecosystem</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter font-semibold mb-6">
              HappyU <span className="text-hq-yellow">App</span>
            </h1>
            <p className="font-body text-base md:text-xl text-hq-white/80 font-light leading-relaxed mb-8">
              Improve overall well-being, emotional regulation, and cognitive clarity every single day. The mobile companion to the HQ Functional Enhancement Model.
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
                <span>Get iOS & Android Beta</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md w-full lg:w-auto">
            <div className="text-xs font-mono uppercase text-hq-yellow mb-4">Enterprise Adoption</div>
            <div className="space-y-4 font-display">
              <div>
                <div className="text-3xl font-bold text-white">4.9 ★★★★★</div>
                <div className="text-[10px] text-white/60 uppercase tracking-wider font-mono">App Store & Play Store</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-hq-yellow">88%</div>
                <div className="text-[10px] text-white/60 uppercase tracking-wider font-mono">30-Day Active Habit Retention</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">3 Mins</div>
                <div className="text-[10px] text-white/60 uppercase tracking-wider font-mono">Daily Executive Protocol</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive App Simulator Section */}
      <section id="simulator" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-hq-black/50 mb-2 font-semibold">
            Live Interactive Simulator
          </div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight font-semibold mb-4">
            Experience HappyU Inside Your Browser
          </h2>
          <p className="font-body text-hq-black/70 max-w-xl mx-auto font-light text-sm">
            Switch between Meditation Exercises, Gratitude Journaling, and Mood Tracking below to test the core features in real-time.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Feature Selector Controls */}
          <div className="w-full lg:w-1/3 space-y-4">
            <button
              onClick={() => setActiveTab('meditate')}
              className={`w-full p-6 text-left border transition-all ${
                activeTab === 'meditate'
                  ? 'bg-hq-black text-hq-white border-hq-black shadow-xl scale-[1.02]'
                  : 'bg-hq-gray text-hq-black border-hq-black/10 hover:border-hq-yellow'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <Sun className={`w-5 h-5 ${activeTab === 'meditate' ? 'text-hq-yellow' : 'text-hq-black'}`} />
                <h3 className="font-display text-lg font-semibold">Meditation Exercises</h3>
              </div>
              <p className="text-xs font-body font-light opacity-80 leading-relaxed">
                3-minute guided somatic breathwork designed to down-regulate nervous system hyperactivity between executive meetings.
              </p>
            </button>

            <button
              onClick={() => setActiveTab('journal')}
              className={`w-full p-6 text-left border transition-all ${
                activeTab === 'journal'
                  ? 'bg-hq-black text-hq-white border-hq-black shadow-xl scale-[1.02]'
                  : 'bg-hq-gray text-hq-black border-hq-black/10 hover:border-hq-yellow'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <Heart className={`w-5 h-5 ${activeTab === 'journal' ? 'text-hq-yellow' : 'text-hq-black'}`} />
                <h3 className="font-display text-lg font-semibold">Gratitude Journaling</h3>
              </div>
              <p className="text-xs font-body font-light opacity-80 leading-relaxed">
                Neuroplasticity-backed daily prompt reflections that rewire the brain from scarcity vigilance to abundant contentment.
              </p>
            </button>

            <button
              onClick={() => setActiveTab('mood')}
              className={`w-full p-6 text-left border transition-all ${
                activeTab === 'mood'
                  ? 'bg-hq-black text-hq-white border-hq-black shadow-xl scale-[1.02]'
                  : 'bg-hq-gray text-hq-black border-hq-black/10 hover:border-hq-yellow'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <Activity className={`w-5 h-5 ${activeTab === 'mood' ? 'text-hq-yellow' : 'text-hq-black'}`} />
                <h3 className="font-display text-lg font-semibold">Mood Tracking</h3>
              </div>
              <p className="text-xs font-body font-light opacity-80 leading-relaxed">
                Real-time affective trajectory analytics mapping emotional climate across weeks and business quarters.
              </p>
            </button>
          </div>

          {/* Interactive Phone Simulator Screen */}
          <div className="w-full max-w-sm border-[10px] border-hq-black rounded-[3.5rem] bg-hq-black shadow-2xl p-4 overflow-hidden relative">
            {/* Phone Notch */}
            <div className="w-24 h-5 bg-hq-black rounded-full mx-auto mb-2 relative z-20"></div>

            {/* Simulated Phone Display Screen */}
            <div className="bg-hq-white rounded-[2.5rem] p-6 text-hq-black h-[540px] flex flex-col justify-between overflow-y-auto no-scrollbar">
              {/* App Header */}
              <div className="flex justify-between items-center pb-3 border-b border-hq-black/10">
                <div className="font-display font-bold uppercase tracking-tight text-sm">
                  HappyU<span className="text-hq-yellow">.</span>
                </div>
                <div className="text-[10px] font-mono bg-hq-black text-hq-yellow px-2 py-0.5 rounded-full font-semibold">
                  PRO
                </div>
              </div>

              {/* Dynamic Screen Content based on Active Tab */}
              <div className="my-auto py-4">
                {activeTab === 'meditate' && (
                  <div className="text-center space-y-6">
                    <div className="text-[10px] font-mono uppercase text-hq-black/50">Somatic Reset • 3 Mins</div>
                    <div className="w-36 h-36 rounded-full border-4 border-hq-yellow flex flex-col items-center justify-center mx-auto bg-hq-yellow/10 animate-pulse-subtle">
                      <span className="font-display text-4xl font-bold text-hq-black">{formatTimer(secondsLeft)}</span>
                      <span className="text-[9px] font-mono text-hq-black/60 uppercase">Inhale • Exhale</span>
                    </div>
                    <div className="flex justify-center gap-3">
                      <button 
                        onClick={() => setIsRunning(!isRunning)}
                        className="bg-hq-black text-hq-white font-display text-xs uppercase tracking-wider px-5 py-2.5 rounded-full flex items-center gap-1.5 hover:bg-hq-yellow hover:text-hq-black transition-colors"
                      >
                        {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                        <span>{isRunning ? 'Pause' : 'Start'}</span>
                      </button>
                      <button 
                        onClick={() => { setIsRunning(false); setSecondsLeft(180); }}
                        className="border border-hq-black/20 p-2.5 rounded-full hover:bg-hq-gray"
                        title="Reset"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === 'journal' && (
                  <div className="space-y-4">
                    <div className="text-xs font-semibold font-display uppercase text-hq-black">
                      Daily Prompt:
                    </div>
                    <div className="p-3 bg-hq-yellow/15 border border-hq-yellow rounded-xl text-xs font-body italic text-hq-black/80">
                      "What unexpected kindness or breakthrough did you witness today?"
                    </div>
                    <form onSubmit={handleSaveJournal} className="space-y-2">
                      <textarea
                        rows={2}
                        value={journalText}
                        onChange={(e) => setJournalText(e.target.value)}
                        placeholder="Type your reflection here..."
                        className="w-full p-2.5 text-xs border border-hq-black/20 rounded-xl focus:outline-none focus:border-hq-black"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full bg-hq-black text-hq-yellow font-display text-[10px] uppercase font-bold py-2 rounded-lg"
                      >
                        Log to Gratitude Vault
                      </button>
                    </form>

                    <div className="space-y-1.5 max-h-32 overflow-y-auto pt-2 border-t border-hq-black/10">
                      <div className="text-[10px] font-mono text-hq-black/50 uppercase">Recent Entries:</div>
                      {savedJournal.map((entry, idx) => (
                        <div key={idx} className="p-2 bg-hq-gray rounded text-[11px] font-body text-hq-black/75">
                          • {entry}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'mood' && (
                  <div className="space-y-5">
                    <div className="text-center">
                      <div className="text-[10px] font-mono text-hq-black/50 uppercase mb-1">Current State</div>
                      <div className="text-xl font-display uppercase font-bold">How are you feeling?</div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'calm', label: 'Calm', emoji: '🧘' },
                        { id: 'energetic', label: 'Energized', emoji: '⚡' },
                        { id: 'overwhelmed', label: 'Overwhelmed', emoji: '🌊' }
                      ].map((m) => (
                        <button
                          key={m.id}
                          onClick={() => setSelectedMood(m.id)}
                          className={`p-2.5 rounded-xl border text-center transition-all ${
                            selectedMood === m.id
                              ? 'bg-hq-yellow border-hq-black font-bold shadow-sm'
                              : 'bg-hq-gray border-hq-black/10'
                          }`}
                        >
                          <div className="text-xl mb-1">{m.emoji}</div>
                          <div className="text-[10px] font-display uppercase">{m.label}</div>
                        </button>
                      ))}
                    </div>

                    {/* Mood Trajectory Chart Mockup */}
                    <div className="p-3 bg-hq-gray rounded-2xl border border-hq-black/10">
                      <div className="text-[10px] font-mono text-hq-black/50 uppercase mb-2">Weekly Mood Velocity:</div>
                      <div className="flex items-end justify-between h-16 pt-2 px-2">
                        {moodHistory.map((item, idx) => (
                          <div key={idx} className="flex flex-col items-center gap-1">
                            <div 
                              className="w-4 bg-hq-black rounded-t transition-all hover:bg-hq-yellow" 
                              style={{ height: `${(item.score / 100) * 48}px` }}
                            ></div>
                            <span className="text-[9px] font-mono text-hq-black/60">{item.day}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* App Bottom Navigation */}
              <div className="pt-3 border-t border-hq-black/10 flex justify-around text-center text-[10px] font-mono uppercase">
                <button 
                  onClick={() => setActiveTab('meditate')} 
                  className={activeTab === 'meditate' ? 'text-hq-black font-bold' : 'text-hq-black/40'}
                >
                  Meditate
                </button>
                <button 
                  onClick={() => setActiveTab('journal')} 
                  className={activeTab === 'journal' ? 'text-hq-black font-bold' : 'text-hq-black/40'}
                >
                  Journal
                </button>
                <button 
                  onClick={() => setActiveTab('mood')} 
                  className={activeTab === 'mood' ? 'text-hq-black font-bold' : 'text-hq-black/40'}
                >
                  Mood
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillars Detailed */}
      <section className="py-20 px-6 md:px-12 bg-hq-gray border-t border-hq-black/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border border-hq-black/15 shadow-sm">
            <ShieldCheck className="w-10 h-10 text-hq-yellow mb-4 stroke-[1.5]" />
            <h3 className="font-display text-xl font-semibold mb-2">Enterprise Privacy</h3>
            <p className="font-body text-xs text-hq-black/70 font-light leading-relaxed">
              End-to-end encrypted reflection vault. No corporate HR or management ever sees personal journal entries or intimate mood notes.
            </p>
          </div>
          <div className="bg-white p-8 border border-hq-black/15 shadow-sm">
            <Activity className="w-10 h-10 text-hq-yellow mb-4 stroke-[1.5]" />
            <h3 className="font-display text-xl font-semibold mb-2">Aggregated Climate</h3>
            <p className="font-body text-xs text-hq-black/70 font-light leading-relaxed">
              Anonymous, macro-level team sentiment trends allow executive leadership to foresee burnout cycles 4 weeks before turnover spikes.
            </p>
          </div>
          <div className="bg-white p-8 border border-hq-black/15 shadow-sm">
            <Sparkles className="w-10 h-10 text-hq-yellow mb-4 stroke-[1.5]" />
            <h3 className="font-display text-xl font-semibold mb-2">Micro Habits Architecture</h3>
            <p className="font-body text-xs text-hq-black/70 font-light leading-relaxed">
              Engineered with behavioural economist principles so busy knowledge workers achieve habit formation in just 180 seconds daily.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
