import re

with open('public/images/logos/pharma.svg', 'r', encoding='utf-8') as f:
    content = f.read()

new_viewbox = 'viewBox="-65.3219 -23.4376 256.2654 88.728"'
content = re.sub(r'viewBox="[^"]+"', new_viewbox, content)

with open('public/images/logos/pharma.svg', 'w', encoding='utf-8') as f:
    f.write(content)

with open('dist/images/logos/pharma.svg', 'w', encoding='utf-8') as f:
    f.write(content)

print('Cipla logo scaled down to 50% successfully.')
