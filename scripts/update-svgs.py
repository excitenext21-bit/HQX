with open('public/images/logos/rbi.svg', 'r', encoding='utf-8') as f:
    rbi = f.read()

rbi = rbi.replace('fill="#525252"', 'fill="#FFFFFF"')
rbi = rbi.replace('fill="#747474"', 'fill="#FFFFFF"')
rbi = rbi.replace('fill="#9e9e9e"', 'fill="#FFFFFF"')

with open('public/images/logos/rbi.svg', 'w', encoding='utf-8') as f:
    f.write(rbi)
print('rbi.svg updated to white')

with open('public/images/logos/government_of_india.svg', 'r', encoding='utf-8') as f:
    goi = f.read()

if 'fill="#FFFFFF"' not in goi:
    goi = goi.replace('<svg ', '<svg fill="#FFFFFF" ')

with open('public/images/logos/government_of_india.svg', 'w', encoding='utf-8') as f:
    f.write(goi)
print('government_of_india.svg updated to white')

with open('public/images/logos/pharma.svg', 'r', encoding='utf-8') as f:
    pharma = f.read()

pharma = pharma.replace('#233f8c', '#FFFFFF')

with open('public/images/logos/pharma.svg', 'w', encoding='utf-8') as f:
    f.write(pharma)
print('pharma.svg updated to white')

with open('public/images/logos/nhrd.svg', 'r', encoding='utf-8') as f:
    nhrd = f.read()

nhrd = nhrd.replace('fill="#003366"', 'fill="#FFFFFF"')
nhrd = nhrd.replace('fill="#008080"', 'fill="#4FD1C5"')

with open('public/images/logos/nhrd.svg', 'w', encoding='utf-8') as f:
    f.write(nhrd)
print('nhrd.svg updated to white')
