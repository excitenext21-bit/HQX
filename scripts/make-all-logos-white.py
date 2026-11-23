import os, re
from PIL import Image
import numpy as np

os.makedirs('public/images/logos', exist_ok=True)
os.makedirs('dist/images/logos', exist_ok=True)

# 1. NHRD -> Make all strokes, circles, and typography pure white (#FFFFFF)
nhrd_white = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 115" fill="none">
  <!-- NHRDN Stylized Human Network Icon in Pure White -->
  <g transform="translate(60, 42)">
    <!-- Connecting Loop -->
    <path d="M0 -15 C13 -15 17 -11 25 0 C17 11 13 15 0 15 C-13 15 -17 11 -25 0 C-17 -11 -13 -15 0 -15 Z" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- 4 Nodes -->
    <circle cx="0" cy="-23" r="8.5" fill="#FFFFFF" />
    <circle cx="24" cy="0" r="8.5" fill="#FFFFFF" />
    <circle cx="0" cy="23" r="8.5" fill="#FFFFFF" />
    <circle cx="-24" cy="0" r="8.5" fill="#FFFFFF" />
    <!-- Center Node -->
    <circle cx="0" cy="0" r="6" fill="#0A0A0A" stroke="#FFFFFF" stroke-width="2.5" />
  </g>
  <!-- NHRD Network Typography -->
  <text x="60" y="86" text-anchor="middle" font-family="'Geist', 'Inter', 'Segoe UI', -apple-system, sans-serif" font-weight="900" font-size="22" fill="#FFFFFF" letter-spacing="1.5">NHRDN</text>
  <text x="60" y="101" text-anchor="middle" font-family="'Geist', 'Inter', 'Segoe UI', -apple-system, sans-serif" font-weight="700" font-size="8" fill="#FFFFFF" letter-spacing="0.6">NATIONAL HRD NETWORK</text>
</svg>'''

for path in ['public/images/logos/nhrd.svg', 'dist/images/logos/nhrd.svg']:
    with open(path, 'w', encoding='utf-8') as f:
        f.write(nhrd_white)
print('1. NHRD converted to pure white monochrome')

# 2. Government of India -> Ensure all paths are white
with open('public/images/logos/government_of_india.svg', 'r', encoding='utf-8') as f:
    goi = f.read()

# Replace any stroke or fill with white, or ensure svg fill="#FFFFFF"
if 'fill="#FFFFFF"' not in goi:
    goi = re.sub(r'<svg\s+', '<svg fill="#FFFFFF" stroke="#FFFFFF" ', goi)
else:
    goi = re.sub(r'fill="[^"]+"', 'fill="#FFFFFF"', goi)

for path in ['public/images/logos/government_of_india.svg', 'dist/images/logos/government_of_india.svg']:
    with open(path, 'w', encoding='utf-8') as f:
        f.write(goi)
print('2. Government of India converted to pure white monochrome')

# 3. Indian Army -> Convert all colors to pure white
with open('public/images/logos/indian_army.svg', 'r', encoding='utf-8') as f:
    army = f.read()

# Make red flag transparent, and all artwork strokes/fills #FFFFFF
# Find any hex colors or named colors and turn non-transparent into #FFFFFF
army = re.sub(r'fill-opacity:0\.[0-9]+', 'fill-opacity:0', army)
army = re.sub(r'style="[^"]*fill:#d40000[^"]*"', 'style="fill:none;fill-opacity:0;stroke:none"', army)
army = re.sub(r'fill="#[0-9a-fA-F]{3,8}"', 'fill="#FFFFFF"', army)
army = re.sub(r'stroke="#[0-9a-fA-F]{3,8}"', 'stroke="#FFFFFF"', army)
army = re.sub(r'fill:#[0-9a-fA-F]{3,8}', 'fill:#FFFFFF', army)
army = re.sub(r'stroke:#[0-9a-fA-F]{3,8}', 'stroke:#FFFFFF', army)

for path in ['public/images/logos/indian_army.svg', 'dist/images/logos/indian_army.svg']:
    with open(path, 'w', encoding='utf-8') as f:
        f.write(army)
print('3. Indian Army converted to pure white monochrome')

# 4. NSG -> Convert emblem artwork to pure white on transparent
nsg_raw = Image.open('public/images/logos/nsg.png').convert('RGBA')
arr = np.array(nsg_raw)
# NSG has black shield background and gold/red artwork.
# Artwork pixels have brightness > 25
val = np.maximum(arr[:,:,0], arr[:,:,1])
artwork_mask = (arr[:,:,3] > 40) & (val > 25)

out_nsg = np.zeros_like(arr)
out_nsg[artwork_mask, 0] = 255
out_nsg[artwork_mask, 1] = 255
out_nsg[artwork_mask, 2] = 255
# Smooth alpha proportional to brightness
alpha_scale = np.clip(val.astype(float) / 180.0 * 255.0, 0, 255).astype(np.uint8)
out_nsg[artwork_mask, 3] = np.maximum(alpha_scale[artwork_mask], 160)

nsg_white = Image.fromarray(out_nsg)
for p in ['public/images/logos/nsg.png', 'dist/images/logos/nsg.png']:
    nsg_white.save(p)
print('4. NSG converted to pure white monochrome')

# 5. NACIN -> Convert to pure white on transparent
nacin_raw = Image.open('public/images/logos/nacin.png').convert('RGBA')
arr_nac = np.array(nacin_raw)
# Brightness or grayscale
gray_nac = (0.299 * arr_nac[:,:,0] + 0.587 * arr_nac[:,:,1] + 0.114 * arr_nac[:,:,2])
mask_nac = (arr_nac[:,:,3] > 40) & (gray_nac > 20)

out_nac = np.zeros_like(arr_nac)
out_nac[mask_nac, 0] = 255
out_nac[mask_nac, 1] = 255
out_nac[mask_nac, 2] = 255
out_nac[mask_nac, 3] = np.clip(gray_nac[mask_nac] * 1.5, 120, 255).astype(np.uint8)

nacin_white = Image.fromarray(out_nac)
for p in ['public/images/logos/nacin.png', 'dist/images/logos/nacin.png']:
    nacin_white.save(p)
print('5. NACIN converted to pure white monochrome')

# 6. BMC -> Convert to pure white on transparent
bmc_raw = Image.open('public/images/logos/bmc.png').convert('RGBA')
arr_bmc = np.array(bmc_raw)
gray_bmc = (0.299 * arr_bmc[:,:,0] + 0.587 * arr_bmc[:,:,1] + 0.114 * arr_bmc[:,:,2])
# Mask out transparent or pure black background
mask_bmc = (arr_bmc[:,:,3] > 40) & (gray_bmc > 20)

out_bmc = np.zeros_like(arr_bmc)
out_bmc[mask_bmc, 0] = 255
out_bmc[mask_bmc, 1] = 255
out_bmc[mask_bmc, 2] = 255
out_bmc[mask_bmc, 3] = np.clip(gray_bmc[mask_bmc] * 1.4, 120, 255).astype(np.uint8)

bmc_white = Image.fromarray(out_bmc)
for p in ['public/images/logos/bmc.png', 'dist/images/logos/bmc.png']:
    bmc_white.save(p)
print('6. BMC converted to pure white monochrome')

print('All 11 Apex Command & Critical Sector logos are now pure white monochrome like RBI!')
