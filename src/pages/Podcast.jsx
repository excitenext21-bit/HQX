import React, { useState } from 'react';
import { Mic, Play, Radio, Calendar, Clock, Share2, ExternalLink, Sparkles, Newspaper } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Podcast() {
  const { podcasts, printMedia } = useData();
  const [activeEpisode, setActiveEpisode] = useState(podcasts[0] || null);

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Header */}
      <section className="bg-hq-black text-hq-white pt-28 pb-20 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-hq-yellow/20 border border-hq-yellow/40 rounded-full text-hq-yellow text-xs font-mono uppercase tracking-widest mb-4">
              <Radio className="w-3.5 h-3.5" />
              <span>HQX Podcast • Stories, Mindset and Insights</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl tracking-tighter font-semibold mb-4">
              HQX <span className="text-hq-yellow">Podcast</span>
            </h1>
            <p className="font-body text-base md:text-lg text-hq-white/80 max-w-xl font-light leading-relaxed">
              Hosted by Manny Anchan. Candid conversations on mental poise, happiness, entrepreneurship, body positivity, philanthropy, and corporate excellence.
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://spotify.com" 
              target="_blank" 
              rel="noreferrer"
              className="bg-hq-yellow text-hq-black font-display font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-white transition-all shadow-md"
            >
              Listen on Spotify
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer"
              className="border border-white/30 text-white font-display text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all"
            >
              Watch on YouTube
            </a>
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
                <div className="text-xs font-mono text-hq-yellow uppercase tracking-widest mb-2">
                  Featured Episode • {activeEpisode.category || activeEpisode.publication}
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
                    {activeEpisode.category || 'Guest'}
                  </span>
                  <span className="font-display text-base font-semibold text-white">{activeEpisode.guest}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Episode Archive: All Real 10 Profile Guests */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-hq-black/10">
        <div className="text-center mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-hq-black/50 mb-2 font-semibold">
            Stories, Mindset and Insights
          </div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight font-semibold">
            Episode Catalog
          </h2>
          <p className="font-body text-xs text-hq-black/60 font-light mt-2">
            Click any episode to load the interactive audio and video masterclass player above.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {podcasts.map((ep) => (
            <div 
              key={ep.id}
              onClick={() => {
                setActiveEpisode(ep);
                window.scrollTo({ top: 380, behavior: 'smooth' });
              }}
              className={`p-6 md:p-8 border transition-all cursor-pointer flex flex-col justify-between ${
                activeEpisode?.id === ep.id
                  ? 'bg-hq-yellow text-hq-black border-hq-black shadow-lg scale-[1.01]'
                  : 'bg-hq-gray text-hq-black border-hq-black/15 hover:border-hq-black'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded font-bold ${
                    activeEpisode?.id === ep.id ? 'bg-hq-black text-hq-yellow' : 'bg-hq-black text-white'
                  }`}>
                    {ep.category || 'HQX Podcast'}
                  </span>
                  <span className="text-xs font-mono opacity-60">{ep.duration}</span>
                </div>

                <h3 className="font-display text-xl font-semibold mb-2">
                  {ep.title}
                </h3>
                <div className="font-display text-sm font-bold uppercase mb-3 opacity-90">
                  Guest: {ep.guest}
                </div>
                <p className="font-body text-xs font-light opacity-80 leading-relaxed mb-6">
                  {ep.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-current/10 flex justify-between items-center text-xs font-display uppercase font-semibold">
                <span>Play Episode</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activeEpisode?.id === ep.id ? 'bg-hq-black text-hq-yellow' : 'bg-white text-black'
                }`}>
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Print Media (Page 13 of Profile) */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-hq-black/50 mb-2 font-semibold">
            Press & Media Coverage
          </div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight font-semibold">
            Print Media Features
          </h2>
          <p className="font-body text-xs text-hq-black/60 font-light mt-2">
            Articles, Interviews, and Profiles Across National and International Media.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {printMedia.map((media, idx) => (
            <div key={idx} className="p-6 bg-hq-gray border border-hq-black/15 shadow-sm hover:border-hq-black transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-hq-black font-display font-bold uppercase text-xs mb-2">
                  <Newspaper className="w-4 h-4 text-hq-yellow" />
                  <span>{media.publication}</span>
                </div>
                <h4 className="font-display text-base font-semibold mb-2">
                  {media.title}
                </h4>
                <p className="font-body text-xs text-hq-black/75 font-light leading-relaxed mb-4">
                  {media.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-hq-black/10 text-[10px] font-mono text-hq-black/60 uppercase">
                Verified Press Feature
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
