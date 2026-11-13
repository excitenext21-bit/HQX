import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Star, ExternalLink, Quote, Sparkles, Check, ArrowRight, Award } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Books() {
  const { books } = useData();
  const [selectedBook, setSelectedBook] = useState(books.find(b => b.year === '2020') || books[0]);

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Hero Section: Editorial Book Showcase (Matching Reference Layout with Manny Anchan's Books) */}
      <section className="bg-[#0A0A0A] text-white min-h-[100svh] lg:h-[100svh] lg:min-h-[620px] lg:max-h-[1080px] pt-20 sm:pt-24 pb-5 sm:pb-6 border-b border-white/10 relative overflow-hidden flex flex-col justify-between">
        {/* Left Side Vertical Text: BOOKS */}
        <div className="absolute left-3 sm:left-4 xl:left-8 inset-y-0 z-20 hidden sm:flex flex-col justify-center items-center pointer-events-none select-none">
          <div
            className="flex items-center gap-3 sm:gap-4"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            <span className="font-display text-[11px] sm:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-hq-yellow drop-shadow-md">
              PUBLISHED BOOKS
            </span>
            <span className="w-px h-8 sm:h-14 bg-white/25" />
          </div>
        </div>

        {/* Main Showcase Stage */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-between min-h-0">
          {/* Upper Split: Selected Book Info (Left) + Floating 3D Hardcover Book (Right) */}
          {selectedBook && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-2 sm:py-4">
              {/* Left Column: Title, Edition Year, Synopsis & Signature Hairline CTA */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <h1
                  style={{ fontFamily: '"Geist", Arial, sans-serif', fontWeight: 300 }}
                  className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-light tracking-tight text-white leading-[1.15] mb-3"
                >
                  {selectedBook.title.includes('–') ? (
                    <>
                      {selectedBook.title.split('–')[0].trim()} <br />
                      <span
                        style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                        className="text-hq-yellow font-bold"
                      >
                        {selectedBook.title.split('–').slice(1).join('–').trim()}
                      </span>
                    </>
                  ) : (
                    <span
                      style={{ fontFamily: '"Geist", Arial, sans-serif' }}
                      className="text-hq-yellow font-bold"
                    >
                      {selectedBook.title}
                    </span>
                  )}
                </h1>

                {/* Edition Year Row */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs sm:text-[13px] font-mono text-white/50 mb-5">
                  <span className="inline-flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-hq-yellow" />
                    <span>
                      Published {selectedBook.year} &bull; {selectedBook.subtitle}
                    </span>
                  </span>
                </div>

                {/* Synopsis Paragraph */}
                <p className="font-body text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-xl mb-7">
                  <strong className="text-white font-semibold">{selectedBook.title}</strong>{' '}
                  ({selectedBook.year}) is {selectedBook.description.charAt(0).toLowerCase() + selectedBook.description.slice(1)}{' '}
                  Celebrated by corporate leaders and readers alike: <em>&ldquo;{selectedBook.quote}&rdquo;</em>
                </p>

                {/* Primary & Secondary Signature Hairline CTAs (Matching Other Pages) */}
                <div className="pt-1 flex flex-wrap items-center gap-6 sm:gap-8">
                  <a
                    href={selectedBook.purchaseUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative inline-flex items-center justify-between gap-8 py-3.5 px-2 font-display font-medium text-xs tracking-[0.2em] text-white hover:text-hq-yellow transition-colors duration-300 uppercase"
                  >
                    <span className="absolute top-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />
                    <span className="relative z-10 font-semibold tracking-widest">ORDER / READ NOW</span>
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

                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-between gap-6 py-3.5 px-2 font-display font-medium text-xs tracking-[0.2em] text-white/75 hover:text-hq-yellow transition-colors duration-300 uppercase"
                  >
                    <span className="absolute top-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/30 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />
                    <span className="relative z-10 font-semibold tracking-widest">CORPORATE COPIES</span>
                    <svg
                      className="w-[20px] h-[10px] inline-block transition-transform duration-300 group-hover:translate-x-1.5 flex-shrink-0"
                      viewBox="0 0 20 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="0" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="1.2" />
                      <polyline points="15 1, 20 5, 15 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="absolute bottom-0 right-0 w-full group-hover:w-1/4 h-[1.25px] bg-white/30 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Large Floating 3D Hardcover Book Cover */}
              <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
                <div className="relative group">
                  {/* Deep Left/Bottom Cast Shadow Matching Reference */}
                  <div className="relative w-44 sm:w-52 lg:w-56 xl:w-[235px] aspect-[2/3] rounded-[3px] overflow-hidden bg-[#141519] shadow-[-26px_30px_50px_rgba(0,0,0,0.92),0_12px_28px_rgba(0,0,0,0.75)] transition-transform duration-500 group-hover:-translate-y-1.5">
                    <img
                      src={selectedBook.cover}
                      alt={selectedBook.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Hardcover Book Spine Crease & Specular Highlight */}
                    <div
                      className="absolute inset-y-0 left-0 w-4 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(255,255,255,0.28) 28%, rgba(0,0,0,0.35) 58%, transparent 100%)'
                      }}
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/15 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Shelf: MORE BOOKS BY MANNY ANCHAN */}
          <div className="pt-3.5 sm:pt-4 border-t border-white/[0.08] shrink-0">
            <div className="font-display text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white/45 font-semibold mb-2.5 sm:mb-3">
              MORE BOOKS BY MANNY ANCHAN
            </div>

            <div className="flex flex-wrap sm:flex-nowrap items-end gap-3 sm:gap-5">
              {books.map((b) => {
                const isActive = selectedBook?.id === b.id;
                return (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setSelectedBook(b)}
                    className={`group text-left focus:outline-none transition-all duration-300 cursor-pointer w-14 sm:w-[68px] lg:w-[74px] shrink-0 ${isActive
                        ? '-translate-y-1.5 scale-[1.04]'
                        : 'opacity-80 hover:opacity-100 hover:-translate-y-1'
                      }`}
                  >
                    <div
                      className={`relative w-full aspect-[2/3] rounded-[3px] overflow-hidden bg-[#141519] shadow-[-10px_14px_22px_rgba(0,0,0,0.88)] transition-all ${isActive ? 'ring-2 ring-[#DEC092]' : 'ring-1 ring-white/10'
                        }`}
                    >
                      <img
                        src={b.cover}
                        alt={b.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Book Spine Highlight */}
                      <div
                        className="absolute inset-y-0 left-0 w-2 pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0.22) 32%, rgba(0,0,0,0.3) 65%, transparent 100%)'
                        }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Book Spotlight */}
      {selectedBook && (
        <section className="py-20 sm:py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-hq-black/10">
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
      <section id="books-roadmap" className="py-20 sm:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight font-semibold mb-4">
            The Authorship Roadmap
          </h2>
          <p className="font-body text-hq-black/70 max-w-xl mx-auto text-sm font-light">
            Click on any title to inspect its core philosophy, chapter breakdown, and executive reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-12">
          {books.map((b, idx) => {
            const isSelected = selectedBook?.id === b.id;
            return (
              <div
                key={b.id}
                onClick={() => setSelectedBook(b)}
                className="group relative flex items-center cursor-pointer"
              >
                {/* Left Protruding Book Cover Poster */}
                <div className="relative z-10 w-[132px] sm:w-[164px] aspect-[2/3] shrink-0 overflow-hidden bg-[#141519] shadow-[0_18px_38px_rgba(0,0,0,0.34)] transition-transform duration-300 group-hover:-translate-y-1">
                  <img src={b.cover} alt={b.title} className="w-full h-full object-cover" />
                  <div
                    className="absolute inset-y-0 left-0 w-2.5 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(255,255,255,0.2) 32%, rgba(0,0,0,0.25) 65%, transparent 100%)'
                    }}
                  />
                </div>

                {/* Right Offset Colored Panel (Shorter Height, Overlapping Behind Cover) */}
                <div
                  className={`flex-1 min-h-[176px] sm:min-h-[208px] -ml-3 sm:-ml-4 pl-7 sm:pl-9 pr-6 sm:pr-7 py-5 sm:py-6 flex flex-col justify-between transition-all duration-300 shadow-[0_18px_36px_rgba(0,0,0,0.14)] ${
                    isSelected
                      ? 'bg-hq-yellow text-[#0A0A0A]'
                      : 'bg-[#0A0A0A] text-white group-hover:bg-[#141519]'
                  }`}
                >
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-semibold tracking-tight leading-snug mb-2.5">
                      {b.title}
                    </h3>
                    <p
                      className={`font-body text-xs sm:text-[13px] font-light leading-relaxed line-clamp-4 ${
                        isSelected ? 'text-[#0A0A0A]/80' : 'text-white/75'
                      }`}
                    >
                      {b.description}
                    </p>
                  </div>

                  {/* Bottom-Right Bold Year / Index (Matching Reference Rating Corner) */}
                  <div className="flex items-baseline justify-end gap-1 pt-4">
                    <span
                      className={`font-display text-2xl sm:text-3xl font-bold tracking-tight ${
                        isSelected ? 'text-[#0A0A0A]' : 'text-hq-yellow'
                      }`}
                    >
                      {b.year}
                    </span>
                    <span
                      className={`font-display text-xs sm:text-sm font-medium ${
                        isSelected ? 'text-[#0A0A0A]/45' : 'text-white/35'
                      }`}
                    >
                      /0{idx + 1}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 px-6 md:px-12 text-center bg-hq-yellow text-hq-black border-t border-hq-black">
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
