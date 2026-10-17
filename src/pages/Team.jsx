import React, { useState } from 'react';
import { Filter, Users, X, Award, ExternalLink, ArrowRight } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Team() {
  const { faculty } = useData();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMember, setSelectedMember] = useState(null);

  const categories = ['All', 'Personal Leadership', 'Spirituality', 'Parenting', 'Sports'];

  const filteredFaculty = selectedCategory === 'All' 
    ? faculty.filter(f => f.active) 
    : faculty.filter(f => f.active && f.category === selectedCategory);

  return (
    <div className="min-h-screen bg-hq-white text-hq-black">
      {/* Header */}
      <section className="bg-hq-black text-hq-white pt-28 pb-20 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-xs uppercase tracking-widest text-hq-yellow mb-3 font-semibold">
            Advisory Faculty & Mentors
          </div>
          <h1 className="font-display text-5xl md:text-7xl tracking-tighter font-semibold mb-6">
            Our <span className="text-hq-yellow">Faculty</span>
          </h1>
          <p className="font-body text-base md:text-xl text-hq-white/80 max-w-2xl font-light leading-relaxed">
            World champions, industry titans, seasoned spiritual guides, and modern parenting authorities collaborating to cultivate human potential across corporations.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-12 px-6 md:px-12 bg-hq-gray border-b border-hq-black/10 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2 sm:gap-3 items-center">
          <span className="text-xs font-mono uppercase tracking-widest text-hq-black/50 mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" /> Filter by:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs font-display uppercase tracking-wider font-semibold transition-all rounded-full ${
                selectedCategory === cat
                  ? 'bg-hq-black text-hq-yellow shadow-md'
                  : 'bg-white text-hq-black border border-hq-black/15 hover:border-hq-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredFaculty.map((member) => (
            <div 
              key={member.id}
              onClick={() => setSelectedMember(member)}
              className="group bg-white p-5 border border-hq-black/15 hover:border-hq-black transition-all cursor-pointer shadow-sm hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="w-full aspect-[3/4] bg-hq-black/5 overflow-hidden mb-6 relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                  />
                  <div className="absolute bottom-0 left-0 bg-hq-yellow text-hq-black px-3 py-1 font-display text-[10px] tracking-widest uppercase font-bold">
                    {member.category}
                  </div>
                </div>

                <h3 className="font-display text-2xl tracking-tight font-medium font-[500] mb-1 group-hover:text-hq-yellow transition-colors">
                  {member.name}
                </h3>
                <div className="text-[16px] font-mono text-hq-black/60 mb-3">
                  {member.title}
                </div>
                <p className="font-body text-xs text-hq-black/75 font-light leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-hq-black/10 flex justify-between items-center text-xs font-display uppercase font-semibold text-hq-black group-hover:translate-x-1 transition-transform">
                <span>View Full Biography</span>
                <ArrowRight className="w-4 h-4 text-hq-yellow" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Member Bio Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 bg-hq-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-hq-white text-hq-black max-w-2xl w-full p-8 md:p-10 border border-hq-black shadow-2xl relative">
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 text-hq-black/50 hover:text-hq-black"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img 
                src={selectedMember.image} 
                alt={selectedMember.name} 
                className="w-32 h-44 object-cover border border-hq-black/20 shrink-0 shadow-lg"
              />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest bg-hq-yellow text-hq-black px-2.5 py-0.5 font-bold">
                  {selectedMember.category}
                </span>
                <h3 className="font-display text-3xl font-semibold mt-2 mb-1">
                  {selectedMember.name}
                </h3>
                <div className="text-xs font-mono text-hq-black/60 mb-4">
                  {selectedMember.title}
                </div>
                <p className="font-body text-xs md:text-sm text-hq-black/80 font-light leading-relaxed mb-6">
                  {selectedMember.bio}
                </p>

                <div className="pt-4 border-t border-hq-black/10 flex gap-4">
                  <a
                    href="#contact"
                    onClick={() => setSelectedMember(null)}
                    className="bg-hq-black text-hq-white font-display text-xs uppercase tracking-widest px-6 py-2.5 rounded-full hover:bg-hq-yellow hover:text-hq-black transition-all font-semibold"
                  >
                    Request Session With {selectedMember.name.split(' ')[0]}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
