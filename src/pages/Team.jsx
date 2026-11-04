import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Users, X, Award, ExternalLink, ArrowRight, Briefcase, Sparkles } from 'lucide-react';
import { useData } from '../context/DataContext';
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
      {/* Header */}
      <section className="bg-[#0A0A0A] text-hq-white pt-36 pb-20 px-6 md:px-12 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-hq-yellow/5 via-transparent to-transparent pointer-events-none opacity-40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold mb-5">
            Our <span className="text-hq-yellow">Faculty</span>
          </h1>
          <p className="font-body text-base md:text-xl text-hq-white/80 max-w-3xl font-light leading-relaxed">
            World champions, industry CEOs, seasoned spiritual guides, Olympic athletes, and modern parenting authorities collaborating to cultivate human potential, resilience, and vitality across corporations.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 mt-10 border-t border-white/15">
            <div>
              <div className="font-display text-3xl font-bold text-hq-yellow">12+</div>
              <div className="text-xs font-mono text-white/60 tracking-wider uppercase mt-1">Distinguished Faculty</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-white">5</div>
              <div className="text-xs font-mono text-white/60 tracking-wider uppercase mt-1">Holistic Domains</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-hq-yellow">100%</div>
              <div className="text-xs font-mono text-white/60 tracking-wider uppercase mt-1">Corporate Tailored</div>
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-white">40+</div>
              <div className="text-xs font-mono text-white/60 tracking-wider uppercase mt-1">Global Client Engagements</div>
            </div>
          </div>
        </div>
      </section>

      {/* THE EXPERTS BEHIND YOUR CARE (MATCHING USER REFERENCE DESIGN) */}
      <section className="py-20 sm:py-24 px-6 md:px-12 bg-[#FAF8F5] border-b border-black/10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header: The Experts Behind Your Care */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-medium tracking-tight text-[#1E1915] leading-[1.08] mb-4">
              The Experts <br />
              <span className="text-[#8E8680] font-light">Behind Your Care</span>
            </h2>
            <p className="font-body text-sm sm:text-base text-[#6E6660] font-light leading-relaxed max-w-xl mx-auto">
              Our team combines clinical expertise with genuine compassion to deliver personalized care tailored to your unique needs.
            </p>
          </div>

          {/* Domain Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12 sm:mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 text-xs font-display uppercase tracking-wider font-semibold transition-all rounded-full ${
                  selectedCategory === cat
                    ? 'bg-[#1E1A17] text-[#FAF8F5] shadow-sm'
                    : 'bg-white text-hq-black/75 hover:bg-[#FAF8F5] hover:text-hq-black border border-black/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 4-Column Luxury Unboxed Faculty Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-14">
            {filteredFaculty.map((member) => (
              <div 
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group cursor-pointer flex flex-col "
              >
                {/* Photo container with smooth rounded corners, aspect-[4/5] matching reference */}
                <div className="w-full aspect-[4/5] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#EAE6DF] relative shadow-xs border border-black/5">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.01] transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>

                {/* Name */}
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#1E1915] mt-4 mb-1 tracking-tight group-hover:text-amber-800 transition-colors">
                  {member.name}
                </h3>

                {/* Specialty / Role */}
                <div className="font-body text-xs sm:text-sm text-[#8E8680] font-light leading-snug line-clamp-2">
                  {member.title}
                </div>
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
              <div className="w-32 sm:w-36 aspect-[4/5] bg-[#EAE6DF] rounded-2xl overflow-hidden shrink-0 shadow-sm border border-black/5">
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
