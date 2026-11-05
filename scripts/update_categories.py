with open('src/context/DataContext.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    ("category: 'Mindfulness'", "category: 'Mindfulness & Well-Being'"),
    ("category: 'Personal Leadership'", "category: 'Executive Leadership'"),
    ("category: 'Spirituality'", "category: 'Mindfulness & Well-Being'"),
    ("category: 'Business Leadership'", "category: 'Executive Leadership'"),
    ("category: 'Sports'", "category: 'Physical Vitality & Sports'"),
    ("category: 'Fit Panda'", "category: 'Physical Vitality & Sports'"),
    ("category: 'HealthTech professional'", "category: 'Physical Vitality & Sports'"),
    ("category: 'Kundalini Yoga'", "category: 'Mindfulness & Well-Being'"),
    ("category: 'Japanese Life lessons'", "category: 'Wisdom & Life Mastery'"),
    ("category: 'Parenting'", "category: 'Wisdom & Life Mastery'"),
    ("category: 'Entrepreneurship Leader'", "category: 'Executive Leadership'"),
    ("category: 'Well Being Practitioner'", "category: 'Mindfulness & Well-Being'"),
    ('hqx_faculty_v2', 'hqx_faculty_v3')
]

for k, v in replacements:
    content = content.replace(k, v)

with open('src/context/DataContext.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Updated categories successfully!')
