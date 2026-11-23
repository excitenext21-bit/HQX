import glob
import re

for f in glob.glob('public/images/logos/*.svg'):
    with open(f, 'r', encoding='utf-8', errors='ignore') as fp:
        c = fp.read()
        print('FILE:', f)
        rects = re.findall(r'<rect[^>]+>', c)
        if rects:
            for r in rects[:3]:
                print('   rect:', r)
        # check width and height
        svg_tag = re.search(r'<svg[^>]+>', c)
        if svg_tag:
            print('   svg:', svg_tag.group(0)[:150])
