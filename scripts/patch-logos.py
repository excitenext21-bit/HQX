import shutil
import re

# 1. Replace healthcare.png with healthcare_transparent.png
shutil.copyfile('public/images/logos/healthcare_transparent.png', 'public/images/logos/healthcare.png')
print('healthcare.png updated with transparent background!')

# 2. In indian_army.svg, make rect5256 fill-opacity 0
with open('public/images/logos/indian_army.svg', 'r', encoding='utf-8') as fp:
    svg_data = fp.read()

# Replace fill:#d90000;fill-opacity:1 in rect5256 with fill-opacity:0
cleaned_svg = re.sub(
    r'(id="rect5256"[^>]*style="[^"]*fill-opacity:)1',
    r'\g<1>0',
    svg_data
)
if cleaned_svg == svg_data:
    # Alternative pattern
    cleaned_svg = svg_data.replace('fill-opacity:1;fill-rule:evenodd;stroke:none" />', 'fill-opacity:0;fill-rule:evenodd;stroke:none" />')

with open('public/images/logos/indian_army.svg', 'w', encoding='utf-8') as fp:
    fp.write(cleaned_svg)

print('indian_army.svg updated with transparent background!')
