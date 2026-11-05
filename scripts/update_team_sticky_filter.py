with open('src/pages/Team.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

target = """          {/* 4-5 Compiled Domain Filters - Unboxed & Minimalist Typography */}
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
          </div>"""

replacement = """          {/* 4-5 Compiled Domain Filters - Sticky on Scroll with Yellow Active Underline */}
          <div className="sticky top-20 z-30 -mx-6 md:-mx-12 px-6 md:px-12 bg-[#FAF8F5]/95 backdrop-blur-md py-4 border-b border-black/10 mb-12 sm:mb-16 transition-all duration-300 shadow-xs">
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
          </div>"""

target_norm = target.replace('\r\n', '\n')
text_norm = text.replace('\r\n', '\n')
replacement_norm = replacement.replace('\r\n', '\n')

if target_norm in text_norm:
    new_text = text_norm.replace(target_norm, replacement_norm)
    with open('src/pages/Team.jsx', 'w', encoding='utf-8') as f:
        f.write(new_text)
    print('Updated sticky filter with yellow underline successfully!')
else:
    print('Target not found in Team.jsx')
