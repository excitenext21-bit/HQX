import os
from PIL import Image

badges = [
    ('Healthcare', 'public/images/logos/healthcare.png'),
    ('Pharma', 'public/images/logos/pharma.svg'),
    ('NSG', 'public/images/logos/nsg.png'),
    ('Indian Army', 'public/images/logos/indian_army.svg'),
    ('NACIN', 'public/images/logos/nacin.png'),
    ('Government', 'public/images/logos/government_of_india.svg'),
    ('RBI', 'public/images/logos/rbi.svg'),
    ('NHRD', 'public/images/logos/nhrd.svg'),
    ('FICCI', 'public/images/logos/ficci.png'),
    ('BMC', 'public/images/logos/bmc.png'),
    ('IMC', 'public/images/logos/imc.png'),
]

for name, path in badges:
    if not os.path.exists(path):
        print('MISSING:', name, path)
        continue
    if path.endswith('.png'):
        im = Image.open(path)
        # Check if has white background
        pixels = list(im.getdata())
        white_count = sum(1 for p in pixels if len(p) >= 3 and p[0] > 240 and p[1] > 240 and p[2] > 240 and (len(p) == 3 or p[3] > 200))
        total = len(pixels)
        print(f'{name} ({path}): size={im.size}, white_ratio={white_count/total:.2f}, mode={im.mode}')
    else:
        print(f'{name} ({path}): SVG file exists, size={os.path.getsize(path)} bytes')
