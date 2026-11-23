import re

with open('public/images/logos/indian_army.svg', 'r', encoding='utf-8') as fp:
    c = fp.read()

fills = set(re.findall(r'fill:([^;"]+)', c))
print('Fills in indian_army.svg:', fills)
