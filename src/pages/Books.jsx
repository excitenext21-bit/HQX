import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Star, ExternalLink, Quote, Sparkles, Check, ArrowRight, Award } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Books() {
  const { books } = useData();
  const [selectedBook, setSelectedBook] = useState(books.find(b => b.year === '2020') || books[0]);

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Header with Celebrity Endorsement Spotlight */}
      <section className="bg-hq-black text-hq-white pt-36 pb-20 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="max-w-2xl">
            <h1 
              style={{ fontFamily: '"Geist", Arial, sans-serif', fontWeight: 300 }}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-light mb-5"
            >
              Books on <br />
              <span 
                style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                className="text-hq-yellow font-bold"
              >
                Well-Being & Happiness
              </span>
            </h1>
            <p className="font-body text-base md:text-xl text-hq-white/80 font-light leading-relaxed mb-8">
              Books written by the founder offer insights and strategies for improving mental, emotional, and physical health. They provide practical tips and exercises for cultivating positive emotions, building relationships, the art of introspection, finding purpose, discovering passion, and managing finances.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#books-roadmap" 
                className="bg-hq-yellow text-hq-black font-display font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white transition-all shadow-xl"
              >
                Explore 6-Book Roadmap
              </a>
              <Link 
                to="/contact" 
                className="border border-white/30 text-white font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all"
              >
                Request Signed Corporate Copies
              </Link>
            </div>
          </div>

          {/* Real Celebrity Endorsement Card from Profile Page 37 (John Abraham) */}
          <div className="w-full lg:w-5/12 bg-hq-yellow text-hq-black p-6 sm:p-8 rounded-3xl shadow-2xl border-2 border-black flex flex-col justify-between">
            <div className="flex gap-4 items-center mb-6">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-hq-black shadow-md shrink-0 bg-black">
                <img 
                  src="/profile_assets/page_37_img_1_3096.jpeg" 
                  alt="John Abraham with Manny Anchan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest bg-hq-black text-hq-yellow px-2 py-0.5 rounded font-bold">
                  Profile Page 37
                </span>
                <div className="font-display text-xl font-bold mt-1">John Abraham</div>
                <div className="text-xs font-mono text-hq-black/70">Bollywood Superstar & Fitness Icon</div>
              </div>
            </div>

            <Quote className="w-8 h-8 mb-2 opacity-40" />
            <blockquote className="font-serif italic text-2xl font-semibold leading-snug mb-3">
              "Defining Book of The Moment. A Must Read!"
            </blockquote>
            <p className="font-body text-xs text-hq-black/80 font-medium">
              Featured in the foreword of <em>Happiness Samurai</em> and celebrated across national media.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Book Spotlight */}
      {selectedBook && (
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-hq-black/10">
          <div className="bg-hq-gray p-8 md:p-14 rounded-3xl border border-hq-black/15 shadow-2xl flex flex-col lg:flex-row gap-12 items-center">
            {/* Book Cover Asset */}
            <div className="w-64 sm:w-72 aspect-[2/3] rounded-2xl overflow-hidden shadow-2xl shrink-0 border-4 border-hq-black relative transform -rotate-1 hover:rotate-0 transition-transform duration-300 bg-white">
              <img 
                src={selectedBook.cover} 
                alt={selectedBook.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Book Synopsis & Details */}
            <div className="flex-1">
              <div className="flex items-center gap-2 text-hq-yellow mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-hq-yellow" />
                ))}
                <span className="text-xs font-mono text-hq-black/60 font-semibold ml-2">National Bestseller</span>
              </div>

              <div className="text-xs font-mono uppercase tracking-widest text-hq-yellow bg-hq-black px-3 py-1 rounded-full inline-block font-bold mb-2">
                Published {selectedBook.year}
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold mb-2">
                {selectedBook.title}
              </h2>
              <div className="font-serif italic text-lg text-hq-black/70 mb-6">
                {selectedBook.subtitle}
              </div>

              <p className="font-body text-sm md:text-base text-hq-black/80 font-light leading-relaxed mb-6">
                {selectedBook.description}
              </p>

              <div className="p-4 bg-white border-l-4 border-hq-black mb-8 rounded-r-xl shadow-sm">
                <p className="font-serif italic text-sm text-hq-black/80">
                  "{selectedBook.quote}"
                </p>
                {selectedBook.endorser && (
                  <div className="text-xs font-display font-bold uppercase tracking-wider mt-1 text-hq-black">
                    — {selectedBook.endorser}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedBook.purchaseUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-hq-yellow text-hq-black font-display font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-hq-black hover:text-white transition-all shadow-xl flex items-center gap-2"
                >
                  <span>Order on Amazon / Official Store</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Complete Chronological Roadmap: 2020 - 2025 (Profile Page 26 & 38) */}
      <section id="books-roadmap" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight font-semibold mb-4">
            The Authorship Roadmap
          </h2>
          <p className="font-body text-hq-black/70 max-w-xl mx-auto text-sm font-light">
            Click on any title to inspect its core philosophy, chapter breakdown, and executive reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((b) => {
            const isSelected = selectedBook?.id === b.id;
            return (
              <div 
                key={b.id}
                onClick={() => setSelectedBook(b)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-hq-black text-white border-hq-black shadow-2xl scale-[1.02]' 
                    : 'bg-white text-hq-black border-hq-black/15 hover:border-hq-black hover:shadow-xl'
                }`}
              >
                <div>
                  <div className="w-full aspect-[2/3] rounded-xl overflow-hidden mb-4 shadow-md bg-hq-gray">
                    <img src={b.cover} alt={b.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-xs font-bold text-hq-yellow">{b.year}</span>
                    {b.featured && (
                      <span className="text-[10px] font-mono uppercase tracking-wider bg-hq-yellow text-hq-black px-2 py-0.5 rounded font-bold">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-bold mb-1">
                    {b.title}
                  </h3>
                  <p className="text-xs font-serif italic text-white/70 mb-3 line-clamp-1">
                    {b.subtitle}
                  </p>
                  <p className={`font-body text-xs line-clamp-3 font-light leading-relaxed ${isSelected ? 'text-white/80' : 'text-hq-black/70'}`}>
                    {b.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-display uppercase tracking-wider font-semibold">
                  <span className={isSelected ? 'text-hq-yellow' : 'text-hq-black'}>Inspect Book</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 text-center bg-hq-yellow text-hq-black border-t border-hq-black">
        <h2 className="font-display text-4xl md:text-5xl tracking-tight font-semibold mb-4">
          Corporate Gifting & Bulk Keynote Copies
        </h2>
        <p className="font-body text-hq-black/80 max-w-xl mx-auto mb-8 font-light text-base">
          Inspire your management teams with customized copies signed by Manny Anchan for corporate retreats and townhalls.
        </p>
        <Link 
          to="/contact" 
          className="bg-hq-black text-hq-white font-display text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white hover:text-hq-black transition-all font-semibold shadow-xl"
        >
          Inquire for Bulk Orders (+91 97001 00800)
        </Link>
      </section>
    </div>
  );
}
