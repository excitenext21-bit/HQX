import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Star, ExternalLink, Quote, Check, ArrowRight, Award } from 'lucide-react';
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
            <span className="font-display text-[15px] sm:text-xs lg:text-sm font-bold tracking-[0.3em] uppercase text-hq-yellow drop-shadow-md">
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
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs sm:text-[15px] font-mono text-white/50 mb-5">
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
                    href="#books-roadmap"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('books-roadmap')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group relative inline-flex items-center justify-between gap-8 py-3.5 px-2 font-display font-medium text-xs tracking-[0.2em] text-white hover:text-hq-yellow transition-colors duration-300 uppercase"
                  >
                    <span className="absolute top-0 right-0 w-full group-hover:w-1/4 h-[1px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />
                    <span className="relative z-10 font-semibold tracking-widest">READ BOOK</span>
                    <svg
                      className="w-[22px] h-[11px] inline-block transition-transform duration-300 group-hover:translate-x-1.5 flex-shrink-0"
                      viewBox="0 0 20 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="0" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="1.2" />
                      <polyline points="15 1, 20 5, 15 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="absolute bottom-0 right-0 w-full group-hover:w-1/4 h-[1px] bg-white/60 group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none" />
                  </a>
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
            <div className="font-display text-[10px] sm:text-[15px] uppercase tracking-[0.18em] text-white/45 font-semibold mb-2.5 sm:mb-3">
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

      {/* Complete Chronological Roadmap: 2020 - 2025 (Profile Page 26 & 38) */}
      <section id="books-roadmap" className="py-20 sm:py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 sm:mb-14 pb-8 border-b border-black/10">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] leading-[1.08]">
              The Authorship <br />
              <span className="text-[#666666] font-light">Roadmap</span>
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-hq-black/65 max-w-md font-light leading-relaxed lg:pb-1">
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
                      className={`font-body text-xs sm:text-[15px] font-light leading-relaxed line-clamp-4 ${
                        isSelected ? 'text-[#0A0A0A]/80' : 'text-white/75'
                      }`}
                    >
                      {b.description}
                    </p>
                  </div>

                  {/* Bottom Row: Read Book Button + Bold Year / Index */}
                  <div className="flex items-center justify-between gap-3 pt-4">
                    <a
                      href={b.pdfUrl || b.purchaseUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`inline-flex items-center gap-2 font-display text-[15px] font-bold uppercase tracking-[0.16em] px-4 py-2 rounded-full transition-all ${
                        isSelected
                          ? 'bg-[#0A0A0A] text-white hover:bg-white hover:text-[#0A0A0A]'
                          : 'bg-hq-yellow text-[#0A0A0A] hover:bg-white'
                      }`}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Read Book</span>
                    </a>

                    <div className="flex items-baseline justify-end gap-1">
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
              </div>
            );
          })}
        </div>
      </section>

      {/* AUTHOR SPOTLIGHT: PHYSICAL COLLECTOR'S EDITIONS & EXECUTIVE GIFTING */}
      <section className="py-16 sm:py-20 bg-[#0A0A0A] text-white border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image of Manny Anchan with Happiness Decoded */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
                <img
                  src="/images/hero_showcase/manny_happiness_decoded_book.jpg"
                  alt="Manny Anchan holding Happiness Decoded"
                  className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
                  <div className="font-display font-bold text-xs uppercase tracking-wider text-hq-yellow">Official Author Edition</div>
                  <div className="font-body text-[15px] text-white/80">Manny Anchan with the yellow collector's edition of Happiness Decoded</div>
                </div>
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight">
                Gifting Eudaimonic Clarity <br />
                <span className="text-hq-yellow font-light">to Global Leaders & Cohorts</span>
              </h2>
              <p className="font-body text-sm sm:text-base text-white/75 font-light leading-relaxed">
                Manny Anchan’s publications are not merely reading material; they serve as tactical executive companions distributed across Fortune 500 boardrooms, banking conglomerates, and elite leadership offsites worldwide. Each edition translates decades of frontline institutional experience into actionable daily mastery.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-display font-bold text-sm text-white mb-1">Bulk Corporate Orders</div>
                  <p className="font-body text-xs text-white/60 leading-relaxed">Custom branded editions and book bundles for executive summits, retreats, and annual conferences.</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-display font-bold text-sm text-white mb-1">Signed Author Copies</div>
                  <p className="font-body text-xs text-white/60 leading-relaxed">Numbered hardbound collector sets paired with personalized executive inscriptions by Manny Anchan.</p>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-hq-yellow text-[#0A0A0A] font-display font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-white transition-all shadow-md"
                >
                  <span>Inquire for Executive Copies</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
