from PIL import Image
import numpy as np

def check_image(name, path):
    im = Image.open(path).convert('RGBA')
    arr = np.array(im)
    # count opaque white pixels
    r, g, b, a = arr[:,:,0], arr[:,:,1], arr[:,:,2], arr[:,:,3]
    white = (r > 235) & (g > 235) & (b > 235) & (a > 100)
    print(f'{name}: shape={arr.shape}, opaque_white_pixels={white.sum()} ({white.sum() / (arr.shape[0]*arr.shape[1]):.1%})')

check_image('healthcare.png', 'public/images/logos/healthcare.png')
check_image('nacin.png', 'public/images/logos/nacin.png')
check_image('nsg.png', 'public/images/logos/nsg.png')
check_image('bmc.png', 'public/images/logos/bmc.png')
check_image('ficci.png', 'public/images/logos/ficci.png')
check_image('imc.png', 'public/images/logos/imc.png')
