with open('src/pages/Team.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

target = """          {/* Domain Filter Tabs */}
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
            ))}"""

replacement = """          {/* 4-5 Compiled Domain Filters - Unboxed & Minimalist Typography */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-10 mb-14 sm:mb-20 border-b border-black/10 pb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs sm:text-sm font-display uppercase tracking-widest transition-all pb-3 relative font-semibold ${
                  selectedCategory === cat
                    ? 'text-[#1E1915] font-bold after:absolute after:bottom-[-17px] after:left-0 after:right-0 after:h-[2px] after:bg-[#1E1915]'
                    : 'text-[#8E8680] hover:text-[#1E1915]'
                }`}
              >
                {cat}
              </button>
            ))}
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
            ))}"""

target_norm = target.replace('\r\n', '\n')
text_norm = text.replace('\r\n', '\n')
replacement_norm = replacement.replace('\r\n', '\n')

if target_norm in text_norm:
    new_text = text_norm.replace(target_norm, replacement_norm)
    with open('src/pages/Team.jsx', 'w', encoding='utf-8') as f:
        f.write(new_text)
    print('Replaced successfully in Team.jsx!')
else:
    print('Target not found in text!')
