import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Users, X, Award, ExternalLink, ArrowRight, Briefcase, Sparkles } from 'lucide-react';
import { useData } from '../context/DataContext';
import TeamHeroSlider from '../components/team/TeamHeroSlider';
import CorporatePartnersMarquee from '../components/common/CorporatePartnersMarquee';

export default function Team() {
  const { faculty } = useData();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMember, setSelectedMember] = useState(null);

  const categories = ['All', ...Array.from(new Set(faculty.map(f => f.category).filter(Boolean)))];

  const filteredFaculty = selectedCategory === 'All' 
    ? faculty.filter(f => f.active) 
    : faculty.filter(f => f.active && f.category === selectedCategory);

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Interactive Multi-Column Auto-Advancing Hero Slider */}
      <TeamHeroSlider faculty={faculty} onSelectMember={setSelectedMember} />

      {/* THE EXPERTS BEHIND YOUR CARE (MATCHING USER REFERENCE DESIGN) */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-[#FAF8F5] border-b border-black/10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header: Dual-Tone Title & Top Narrative (Matching About Us Dedicated Chapters Style) */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 sm:mb-14 pb-8 border-b border-black/10">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0A0A0A] dark:text-white leading-[1.08]">
                The Experts <br />
                <span className="text-[#666666] dark:text-white/60 font-light">Behind Your Care</span>
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-hq-black/65 max-w-md font-light leading-relaxed lg:pb-1">
              Our team combines clinical expertise with genuine compassion to deliver personalized care tailored to your unique needs.
            </p>
          </div>

          {/* 4-5 Compiled Domain Filters - Sticky on Scroll with Yellow Active Underline */}
          <div className="sticky top-20 z-30 -mx-6 md:-mx-12 px-6 md:px-12 bg-[#FAF8F5] py-4 border-b border-black/10 mb-12 sm:mb-16 transition-all duration-300 shadow-xs">
            <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs sm:text-sm font-display uppercase tracking-widest transition-all pb-2.5 relative font-semibold ${
                    selectedCategory === cat
                      ? 'text-[#1E1915] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-hq-yellow after:rounded-full'
                      : 'text-[#8E8680] hover:text-[#1E1915]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Luxury Unboxed Editorial Faculty Showcase - Borderless & No Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 sm:gap-x-10 gap-y-12 sm:gap-y-16">
            {filteredFaculty.map((member) => (
              <div 
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group cursor-pointer flex flex-col transition-all duration-300"
              >
                {/* Floating Portrait - Seamless, Borderless & Unboxed */}
                <div className="w-full aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                  {/* Subtle hover overlay for tactile polish */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none rounded-2xl sm:rounded-3xl"></div>
                </div>

                {/* Domain Pill Tag */}
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-900/80 font-semibold mt-4 mb-1">
                  {member.category}
                </span>

                {/* Name */}
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#1E1915] tracking-tight group-hover:text-amber-800 transition-colors">
                  {member.name}
                </h3>

                {/* Specialty / Credential */}
                <p className="font-body text-xs sm:text-sm text-[#736B65] font-light leading-relaxed mt-1 line-clamp-2">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Bio Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FAF8F5] text-hq-black max-w-2xl w-full p-8 md:p-10 rounded-3xl border border-black/10 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 text-hq-black/50 hover:text-hq-black p-2 rounded-full hover:bg-black/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-32 sm:w-36 aspect-[4/5] rounded-2xl overflow-hidden shrink-0">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  className="w-full h-full object-cover object-top" 
                />
              </div>

              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-mono uppercase tracking-widest bg-hq-black text-hq-yellow px-2.5 py-1 font-semibold rounded-full inline-block mb-3">
                  {selectedMember.category}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#1E1915] mb-1">
                  {selectedMember.name}
                </h3>
                <div className="text-xs sm:text-sm font-body text-[#8E8680] font-light mb-4 leading-snug">
                  {selectedMember.title}
                </div>
                <p className="font-body text-xs sm:text-sm text-[#5B5550] font-light leading-relaxed mb-6">
                  {selectedMember.bio}
                </p>

                <div className="pt-4 border-t border-black/10 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    onClick={() => setSelectedMember(null)}
                    className="bg-[#1E1A17] hover:bg-black text-[#FAF8F5] font-body text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all font-medium flex items-center gap-2 shadow-sm"
                  >
                    <span>Request Advisory Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/engaging-workshops"
                    onClick={() => setSelectedMember(null)}
                    className="border border-black/15 text-[#1E1A17] hover:bg-black/5 font-body text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all font-medium"
                  >
                    View Workshops
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* FULL-WIDTH TRUSTED BY OVER 40+ INDUSTRY TITANS MARQUEE TOUCHING ABOVE FOOTER WITHOUT GAP */}
      <div className="w-full m-0 p-0">
        <CorporatePartnersMarquee showHeader={true} title="Trusted by Over 40+ Industry Titans" reversed={true} />
      </div>
    </div>
  );
}
