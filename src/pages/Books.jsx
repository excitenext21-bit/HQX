import React, { useState } from 'react';
import { BookOpen, Star, ExternalLink, Quote, Sparkles, Check, ArrowRight } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Books() {
  const { books } = useData();
  const [selectedBook, setSelectedBook] = useState(books.find(b => b.year === '2020') || books[0]);

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Header */}
      <section className="bg-hq-black text-hq-white pt-28 pb-20 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-hq-yellow/20 border border-hq-yellow/40 rounded-full text-hq-yellow text-xs font-mono uppercase tracking-widest mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Authorship Roadmap (2020 — 2025)</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl tracking-tighter font-semibold mb-4">
              Books on <br />
              <span className="text-hq-yellow">Well-Being and Happiness</span>
            </h1>
            <p className="font-body text-base md:text-lg text-hq-white/80 max-w-xl font-light leading-relaxed">
              Six published books by Manny Anchan exploring ancient samurai mental fortitude, modern neuroplasticity, the psychology of wealth, and sustainable executive habits.
            </p>
          </div>

          <div className="bg-hq-yellow text-hq-black p-6 rounded-2xl max-w-sm shadow-xl">
            <Quote className="w-6 h-6 mb-2 opacity-60" />
            <p className="font-serif italic text-lg leading-snug">
              "Defining Book of The Moment. A Must Read!"
            </p>
            <div className="font-display text-xs font-bold uppercase tracking-wider mt-2">
              — John Abraham
            </div>
            <div className="text-[10px] font-mono text-hq-black/70">Foreword to Happiness Samurai</div>
          </div>
        </div>
      </section>

      {/* Featured Book Spotlight */}
      {selectedBook && (
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-hq-black/10">
          <div className="bg-hq-gray p-8 md:p-14 border border-hq-black/15 shadow-2xl flex flex-col lg:flex-row gap-12 items-center">
            {/* Book Mockup with Yellow Cover Accent */}
            <div className="w-60 sm:w-72 aspect-[2/3] bg-hq-yellow text-hq-black p-6 rounded-xl shadow-2xl shrink-0 border-4 border-hq-black relative transform -rotate-1 hover:rotate-0 transition-transform duration-300 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest bg-hq-black text-hq-yellow px-2 py-0.5 rounded font-bold inline-block mb-3">
                  Published {selectedBook.year}
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight">
                  {selectedBook.title}
                </h3>
                <p className="text-xs font-serif italic text-hq-black/75 mt-1 font-semibold">
                  {selectedBook.subtitle}
                </p>
              </div>

              <div>
                {selectedBook.endorser && (
                  <div className="text-[10px] font-mono bg-white/70 p-2 rounded mb-3 text-hq-black font-semibold">
                    ★ "{selectedBook.quote}" — {selectedBook.endorser}
                  </div>
                )}
                <div className="text-[11px] font-display font-bold uppercase tracking-wider">
                  Manny Anchan
                </div>
              </div>
            </div>

            {/* Book Synopsis & Purchase */}
            <div className="flex-1">
              <div className="flex items-center gap-2 text-hq-yellow mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-hq-yellow" />
                ))}
                <span className="text-xs font-mono text-hq-black/60 font-semibold ml-2">National Acclaim</span>
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

              <div className="p-4 bg-white border-l-4 border-hq-black mb-8">
                <p className="font-serif italic text-sm text-hq-black/80">
                  "{selectedBook.quote}"
                </p>
                {selectedBook.endorser && (
                  <div className="text-xs font-display font-bold uppercase tracking-wider mt-1 text-hq-black">
                    — {selectedBook.endorser}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <a 
                  href={selectedBook.purchaseUrl || "https://happinesssamurai.com"}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-hq-black text-hq-white font-display font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-hq-yellow hover:text-hq-black transition-all shadow-md flex items-center gap-2"
                >
                  <span>Order / View Online</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <span className="text-xs font-mono text-hq-black/50">Hardcover • Paperback • Audio Book (Book Beat)</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Complete Authorship Roadmap Grid (From Page 17 of Profile) */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-mono uppercase tracking-widest text-hq-black/50 mb-2 font-semibold">
            Chronological Canon • 2020 - 2025
          </div>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight font-semibold">
            The Complete Roadmap
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((b) => (
            <div 
              key={b.id}
              onClick={() => {
                setSelectedBook(b);
                window.scrollTo({ top: 350, behavior: 'smooth' });
              }}
              className={`p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                selectedBook?.id === b.id
                  ? 'bg-hq-yellow text-hq-black border-hq-black shadow-xl scale-[1.02]'
                  : 'bg-white text-hq-black border-hq-black/15 hover:border-hq-black hover:bg-hq-gray/50'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="font-display text-3xl font-bold">{b.year}</span>
                  {b.year === '2025' && (
                    <span className="text-[10px] font-mono uppercase bg-hq-black text-hq-yellow px-2 py-0.5 rounded font-bold">
                      Latest Release
                    </span>
                  )}
                  {b.year === '2020' && (
                    <span className="text-[10px] font-mono uppercase bg-hq-black text-hq-yellow px-2 py-0.5 rounded font-bold">
                      Foundational
                    </span>
                  )}
                </div>
                <h3 className="font-display text-2xl font-semibold mb-1">
                  {b.title}
                </h3>
                <div className="font-serif italic text-xs opacity-75 mb-4 font-semibold">
                  {b.subtitle}
                </div>
                <p className="font-body text-xs font-light opacity-80 leading-relaxed mb-6 line-clamp-3">
                  {b.description}
                </p>
              </div>

              <div className="pt-4 border-t border-current/10 flex justify-between items-center text-xs font-display uppercase font-semibold">
                <span>View Book Insights</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
