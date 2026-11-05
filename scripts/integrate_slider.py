with open('src/pages/Team.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

import_stmt = "import TeamHeroSlider from '../components/team/TeamHeroSlider';\n"
if 'TeamHeroSlider' not in text:
    text = text.replace("import CorporatePartnersMarquee", import_stmt + "import CorporatePartnersMarquee")

start_tag = "{/* Header */}"
end_tag = "{/* THE EXPERTS BEHIND YOUR CARE (MATCHING USER REFERENCE DESIGN) */}"
idx1 = text.find(start_tag)
idx2 = text.find(end_tag)

if idx1 != -1 and idx2 != -1:
    new_header = """{/* Interactive Multi-Column Auto-Advancing Hero Slider */}
      <TeamHeroSlider faculty={faculty} onSelectMember={setSelectedMember} />\n\n      """
    text = text[:idx1] + new_header + text[idx2:]
    with open('src/pages/Team.jsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print('Successfully integrated TeamHeroSlider into Team.jsx!')
else:
    print('Tags not found:', idx1, idx2)
