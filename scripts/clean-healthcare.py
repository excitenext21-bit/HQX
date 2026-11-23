from PIL import Image
import numpy as np

im = Image.open('public/images/logos/healthcare.png').convert('RGBA')
arr = np.array(im)

# Look at the pixel colors
print('Shape:', arr.shape)
# Find the non-white, non-transparent pixels
r, g, b, a = arr[:,:,0], arr[:,:,1], arr[:,:,2], arr[:,:,3]
# Is there a white background circular disc?
is_white = (r > 240) & (g > 240) & (b > 240)
# Make white pixels transparent!
arr[is_white, 3] = 0

cleaned = Image.fromarray(arr)
cleaned.save('public/images/logos/healthcare_transparent.png')
print('Saved healthcare_transparent.png!')
