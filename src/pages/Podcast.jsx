import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Radio, 
  Play, 
  Calendar, 
  Clock, 
  Share2, 
  ExternalLink, 
  Sparkles, 
  Newspaper, 
  Mic2,
  Users,
  Award
} from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Podcast() {
  const { podcasts, printMedia } = useData();
  const [activeEpisode, setActiveEpisode] = useState(podcasts[0] || null);

  // Exact Featured Guests from Profile Page 32
  const profileGuests = [
    {
      name: 'Sameera Reddy',
      role: 'Happiness Creator & Bollywood Icon',
      focus: 'Body Positivity, Mental Wellness & Authentic Motherhood',
      image: '/profile_assets/page_32_img_11_2380.jpeg'
    },
    {
      name: 'Raj Nayak',
      role: 'Happiness Evangelist & Media Titan',
      focus: 'Former Viacom18 COO, House of Cheer Founder & Workplace Culture',
      image: '/profile_assets/page_32_img_13_2389.jpeg'
    },
    {
      name: 'Parvej Mantrri',
      role: 'FitPandaa Founder & Celebrity Fitness Coach',
      focus: 'Physical Vitality, Actor, Host & Dynamic Movement',
      image: '/profile_assets/page_32_img_15_2398.jpeg'
    },
    {
      name: 'Noopur Desai',
      role: 'Philanthropy Leader',
      focus: 'Purposeful Giving, Social Impact & Community Flourishing',
      image: '/profile_assets/page_32_img_17_2407.jpeg'
    },
    {
      name: 'Radhika Dudhat',
      role: 'Partner, Shardul Amarchand Mangaldas',
      focus: 'Corporate Law, Executive Resilience & Institutional Governance',
      image: '/profile_assets/page_32_img_11_2380.jpeg'
    },
    {
      name: 'Margie Blanton',
      role: 'Global Executive Educator',
      focus: 'Multicultural Leadership, Adult Learning & High Potential Coaching',
      image: '/profile_assets/page_32_img_13_2389.jpeg'
    },
    {
      name: 'Priti Rathi Gupta',
      role: 'Founder, LXME',
      focus: 'Financial Well-Being, Women\'s Economic Sovereignty & Investment',
      image: '/profile_assets/page_32_img_15_2398.jpeg'
    },
    {
      name: 'Praveen Nair',
      role: 'Renowned Mentalist & Mind Coach',
      focus: 'Cognitive Framing, Subconscious Belief Systems & Mental Focus',
      image: '/profile_assets/page_32_img_17_2407.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Header with Authentic Podcast Cover */}
      <section className="bg-hq-black text-hq-white pt-36 pb-20 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="max-w-2xl">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold mb-5">
              HQX <span className="text-hq-yellow">Podcast</span>
            </h1>
            <p className="font-serif italic text-xl text-hq-yellow mb-4">
              "Stories, Mindset and Insights"
            </p>
            <p className="font-body text-base md:text-xl text-hq-white/80 font-light leading-relaxed mb-8">
              A regular fortnightly audio and video program hosted by Manny Anchan providing in-depth discussions into mental, emotional, and physical health. Featuring titans of industry, Olympic athletes, authors, and spiritual pioneers sharing concrete wisdom.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-hq-yellow text-hq-black font-display font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white transition-all shadow-xl"
              >
                Watch on YouTube
              </a>
              <a 
                href="https://spotify.com" 
                target="_blank" 
                rel="noreferrer"
                className="border border-white/30 text-white font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all"
              >
                Listen on Spotify
              </a>
            </div>
          </div>

          {/* Real Podcast Artwork from Profile Page 21 */}
          <div className="w-56 sm:w-64 rounded-3xl overflow-hidden border-4 border-hq-yellow shadow-2xl bg-black shrink-0 transform hover:scale-105 transition-transform duration-300">
            <img 
              src="/profile_assets/page_21_img_1_1306.jpeg" 
              alt="HQX Podcast with Manny Anchan" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Video Player */}
      {activeEpisode && (
        <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto border-b border-hq-black/10">
          <div className="bg-hq-black text-white p-6 md:p-8 rounded-3xl shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Responsive 16:9 YouTube Embed */}
              <div className="w-full lg:w-2/3 aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeEpisode.youtubeId}?autoplay=0&rel=0`}
                  title={activeEpisode.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Episode Info */}
              <div className="w-full lg:w-1/3">
                <div className="text-xs font-mono text-hq-yellow uppercase tracking-widest mb-2 font-semibold">
                  Featured Episode • {activeEpisode.category || 'Executive Dialogue'}
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold mb-3 leading-snug">
                  {activeEpisode.title}
                </h2>
                <div className="flex gap-4 text-xs font-mono text-white/60 mb-4 pb-4 border-b border-white/10">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-hq-yellow" /> {activeEpisode.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-hq-yellow" /> {activeEpisode.duration}</span>
                </div>
                <div className="text-xs text-white/80 font-body font-light leading-relaxed mb-6">
                  {activeEpisode.summary}
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-[10px] font-mono uppercase text-hq-yellow block font-bold mb-1">
                    Guest Speaker
                  </span>
                  <span className="font-display text-base font-semibold text-white">{activeEpisode.guest}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Profile Page 32: Featured Guests Gallery */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight font-semibold">
            Featured Guests & Conversations
          </h2>
          <p className="font-body text-hq-black/70 max-w-xl mx-auto text-sm mt-2 font-light">
            Renowned leaders, creators, entrepreneurs, and thinkers featured on the HQX Podcast series.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {profileGuests.map((g, i) => (
            <div 
              key={i}
              className="bg-hq-gray p-6 rounded-2xl border border-hq-black/15 shadow-sm hover:border-hq-black hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-hq-black/5 mb-4 border border-hq-black/10">
                  <img src={g.image} alt={g.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="text-[10px] font-mono uppercase text-hq-yellow bg-hq-black px-2.5 py-1 rounded-full font-bold inline-block mb-2">
                  {g.role}
                </div>
                <h3 className="font-display text-xl font-bold mb-1">
                  {g.name}
                </h3>
                <p className="font-body text-xs text-hq-black/75 font-light leading-relaxed">
                  {g.focus}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Profile Page 33: Print Media Articles, Interviews & Profiles */}
        <div className="mt-20 pt-16 border-t border-hq-black/10">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-hq-black/60 block font-bold mb-2">
              National & Global Press • Profile Page 33
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-bold">
              Print Media & Editorial Coverage
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {printMedia.map((article, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-hq-black/15 shadow-sm hover:border-hq-black transition-all">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-hq-black mb-3">
                  <Newspaper className="w-4 h-4 text-hq-yellow" />
                  <span>{article.publication}</span>
                </div>
                <h4 className="font-display text-lg font-bold mb-2">
                  {article.title}
                </h4>
                <p className="font-body text-xs text-hq-black/75 font-light leading-relaxed">
                  {article.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 text-center bg-hq-yellow text-hq-black border-t border-hq-black">
        <h2 className="font-display text-4xl md:text-5xl tracking-tight font-semibold mb-4">
          Never Miss An Executive Insight
        </h2>
        <p className="font-body text-hq-black/80 max-w-xl mx-auto mb-8 font-light text-base">
          Subscribe to the fortnightly podcast and receive curated reflection guides in your inbox.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            to="/contact" 
            className="bg-hq-black text-hq-white font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-hq-black transition-all font-semibold shadow-xl"
          >
            Inquire for Podcast Partnership
          </Link>
        </div>
      </section>
    </div>
  );
}
