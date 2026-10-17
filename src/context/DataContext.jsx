import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const FOUNDER_PROFILE = {
  name: 'Manny Anchan',
  title: 'Motivational Speaker & Founder, Happiness Quotient Global (HQGPL)',
  tagline: 'This Is How The Good Companies Find The Good Company',
  philosophy: 'Advocates simple living, positive feeling, transformational thinking. Resides in Mumbai, devoted father, and pet enthusiast.',
  experience: '25 years in global management at GE Capital, HDFC Bank, ABN AMRO, Barclays, AUB, and FAB.',
  education: 'Harvard & Columbia Business School alum.',
  globalExposure: 'Worked and lived in Asia, Africa, Europe, & North America. Multicultural adaptability.',
  happinessExpertise: 'Leading figure in the study and promotion of happiness, exploring concepts from Ikigai, Hygge, Lagom, Sisu, to Gross National Happiness.',
  purposeResearch: 'Conducted extensive research on purpose-driven concepts and their implications in various cultural contexts.',
  communityEngagement: [
    'Global Happiness Advocate',
    'Mentor at startup school',
    'Educational committee member',
    'Adjunct professor',
    'Delivered impactful TEDx Talks'
  ],
  tedxTalks: [
    { city: 'Allahabad', event: 'TEDx - Katra' },
    { city: 'Pune', event: 'TEDx ElPro Intl School' },
    { city: 'Jaipur', event: 'TEDx Man Sagar Lake' },
    { city: 'Vadodara', event: 'TEDx Navrachana International' }
  ],
  contactNumber: '+91 97001 00800',
  website: 'https://happinesssamurai.com'
};

export const KEY_THEMES = [
  {
    id: 'ikigai',
    title: 'Ikigai',
    desc: 'Discover your purpose, and find joy in the intersection of what you love, what you are good at, what the world needs, and what you can be paid for.'
  },
  {
    id: 'finance',
    title: 'Finance',
    desc: 'Foster financial literacy, make informed decisions, and create a secure future through effective money management.'
  },
  {
    id: 'stress',
    title: 'Stress Management',
    desc: "Find peace and resilience amidst life's challenges, and stay equipped with effective coping strategies for healthier well-being."
  },
  {
    id: 'fitness',
    title: 'Fitness',
    desc: 'Engage in regular physical activity, challenge your limits, and enhance your strength, endurance, and overall fitness.'
  },
  {
    id: 'leadership',
    title: 'Leadership',
    desc: 'Unlock potential by focusing on essential skills, effective communication, and a collaborative growth culture.'
  },
  {
    id: 'values',
    title: 'Values',
    desc: 'Embracing values that prioritize holistic practices, nurturing both the mind and body, fosters a balance essential for overall well-being and recovery.'
  },
  {
    id: 'balance',
    title: 'Balance',
    desc: 'Work-life balance is vital for well-being, reducing stress and burnout while enhancing overall life satisfaction and productivity.'
  },
  {
    id: 'meditation',
    title: 'Meditation',
    desc: 'Cultivate inner peace, reduce stress, and enhance mindfulness through focused breathing and present-moment awareness.'
  },
  {
    id: 'psychology-wealth',
    title: 'Psychology of Wealth',
    desc: 'Unlock mindset shifts for lasting financial confidence, abundance, and smarter money choices.'
  },
  {
    id: 'habit-building',
    title: 'Habit Building',
    desc: 'Empowering you to cultivate positive routines and achieve lasting personal growth.'
  },
  {
    id: 'healing',
    title: 'Healing',
    desc: 'Embrace holistic practices, nurture mind and body, and create a harmonious balance for overall wellbeing and recovery.'
  },
  {
    id: 'nutrition',
    title: 'Nutrition',
    desc: 'Nourish your body with wholesome foods, fuel your vitality, and cultivate a healthy relationship with what you eat.'
  }
];

export const WELLBEING_INVESTMENT_PILLARS = [
  {
    title: 'Enhances Intrinsic Motivation',
    desc: 'Holistic development nurtures a positive self-image, aligning personal values with actions and fueling intrinsic motivation.'
  },
  {
    title: 'Increased Employee Productivity',
    desc: 'Research suggests that employees who participate in workplace wellness programs tend to be more productive.'
  },
  {
    title: 'Improved Employee Retention',
    desc: 'Wellness programs contribute to a positive work environment, fostering employee loyalty and reducing turnover.'
  },
  {
    title: 'Enhanced Employee Engagement',
    desc: 'Engaged employees are more committed to their work, leading to improved job satisfaction and performance.'
  }
];

export const ENGAGEMENT_BENEFITS = [
  'Keeps interest',
  'Promotes Participation',
  'Enhances Engagement',
  'Boosts Productivity',
  'Fosters Culture',
  'Boosts Speaker Confidence',
  'Increases Collaboration',
  'Strengthens Culture',
  'Enhances Memory Retention',
  'Improves Understanding'
];

export const STATES_COVERED = [
  'Maharashtra', 'Goa', 'Uttar Pradesh', 'Bihar', 'Haryana', 
  'Punjab', 'Rajasthan', 'Madhya Pradesh', 'Karnataka', 'Tamil Nadu', 
  'Jammu', 'Gujarat', 'Uttarakhand', 'West Bengal', 'Meghalaya', 'Assam'
];

export const GLOBAL_FOOTPRINT_COUNTRIES = [
  'Mauritius', 'Bhutan', 'Finland', 'UAE', 'Costa Rica', 'Sri Lanka', 'Tanzania', 'Oman', 'Japan'
];

export const PRINT_MEDIA = [
  {
    publication: 'Mid-Day',
    title: 'Mid-Day Article',
    desc: 'Manny Anchan, best selling author unveils his new book Happiness Samurai featuring Bollywood Superstar John Abraham\'s beautiful and heartfelt candid foreword.'
  },
  {
    publication: 'Influencive',
    title: 'Influencive Article',
    desc: 'Manny Anchan the author, entrepreneur and TEDx speaker from India who is inspiring impressionable minds with his recent TEDx talk, known as the Happiness Maverick of India.'
  },
  {
    publication: 'Fox Interviewer',
    title: 'Fox Interviewer Article',
    desc: 'Profiling Manny Anchan\'s global corporate leadership methodology and international well-being roadmaps.'
  },
  {
    publication: 'Net News Ledger',
    title: 'Net News Ledger Article',
    desc: 'Global perspective on purpose-driven leadership and eudaimonic transformation.'
  },
  {
    publication: 'US Times Now',
    title: 'US Times Now Article',
    desc: 'Best selling author and Happiness Maverick Manny Anchan speaking at TEDx about his journey.'
  },
  {
    publication: 'PressReader',
    title: 'PressReader Global Feature',
    desc: 'Feature on enterprise employee engagement, mental health, and functional well-being across Asia.'
  },
  {
    publication: 'News Track Live',
    title: 'News Track Live Article',
    desc: 'In-depth coverage of the 100-day Ikigai program and nationwide wellness footprint.'
  }
];

export const TRUSTED_BRANDS = {
  corporate: [
    'TATA Motors', 'Cipla', 'HDFC Life', 'HDFC ERGO', 'Barclays', 'TATA Capital', 'TATA AIG', 
    'Ageas Federal Insurance', 'IDFC First Bank', 'Axis Bank', 'SBI Life', 'YES Bank', 
    'Aditya Birla Capital', 'Mahindra', 'Tricolite', 'Hyundai Electronics', 'Reliance', 
    'Entrepreneurs\' Organization', 'SMFG India', 'UGRO Capital', 'Absa Bank', 'Shapoorji Pallonji', 
    'Turtlemint Pro', 'Saint-Gobain', 'Bandhan Mutual Fund', 'Mango Sciences', 'Motilal Oswal', 
    'Amana Bank', 'Primarc', 'Skipper Limited', 'Amal Embroidery', 'Alizz Islamic Bank', 'NBO (Oman)', 
    'BankDhofar', 'APAR Industries', 'NetApp', 'Burns & McDonnell', 'Indigo Airlines', 'Uniworld Logistics'
  ],
  institutions: [
    'Harvard Club (Sri Lanka X APAC)', 'IIM', 'Masters\' Union', 'IISM (Sports Management)', 
    'Indira Group', 'Podar International', 'TCS iON', 'MET Institute', 'ASM Group', 'StartupYou', 
    'Aditya Birla World Academy', 'Global Indian International School (Dubai)', 'IES MCRC', 
    'Amber Valley', 'Indus International School', 'Jamnabai Narsee', 'Oberoi International', 
    'Mondrian High', 'Safari Kid', 'Pathways World School'
  ]
};

const INITIAL_FACULTY = [
  {
    id: 'f-meera',
    name: 'Meera Chauhan',
    category: 'Mindfulness',
    title: 'Director at Tricolite Electrical Industries | Warwick & Yale Fellow',
    bio: "Meera Chauhan is a Director with Tricolite Electrical Industries. She has done her Master's Degree in Industrial Relations and Personnel Management from Warwick Business School and also a mid career Fellowship at Yale University.",
    image: '/team/meera-chauhan.png',
    active: true,
    featured: true
  },
  {
    id: 'f-anil',
    name: 'Anil Kumar',
    category: 'Personal Leadership',
    title: "Recipient of 'SHAURYA CHAKRA' | LBS & ISB Alumnus",
    bio: "Anil, recipient of 'SHAURYA CHAKRA' award is a former military officer, motivational speaker, leadership expert, and fundraiser for alternative investment funds. Alumnus of London Business School and ISB.",
    image: '/team/anil-kumar.png',
    active: true,
    featured: true
  },
  {
    id: 'f-carolin',
    name: 'Carolin Nytra',
    category: 'Spirituality',
    title: 'Retired German Olympic Hurdler & Holistic Well-Being Advocate',
    bio: "Carolin Nytra is a retired German Olympic hurdler, now a holistic well-being advocate. Now, a Cacao Priestess, she empowers others through mindset and spiritual guidance.",
    image: '/team/carolin-nytra.png',
    active: true,
    featured: true
  },
  {
    id: 'f-ajay',
    name: 'Ajay Srinivasan',
    category: 'Business Leadership',
    title: 'Seasoned Business Leader & Strategic Advisor',
    bio: "Ajay Srinivasan is a seasoned business leader with a diverse career, founding and expanding businesses in India and abroad, showcasing leadership across different organizational structures and industries.",
    image: '/team/ajay-srinivasan.png',
    active: true,
    featured: true
  },
  {
    id: 'f-rupinder',
    name: 'Rupinder Singh',
    category: 'Sports',
    title: 'Olympic Field Hockey Star & International Champion',
    bio: "Rupinder Pal Singh, born on Nov 11, 1990, in Faridkot, Punjab, is an Indian hockey star known for powerful drag-flicks, international victories, and inspiring young players.",
    image: '/team/rupinder-singh.png',
    active: true,
    featured: true
  },
  {
    id: 'f-parvej',
    name: 'Parvej Mantrri',
    category: 'Fit Panda',
    title: 'Versatile Entertainer & Celebrity Fitness Coach',
    bio: "Parvej, a versatile entertainer, excels as an actor, host, voice-over artist, and celebrity fitness coach, earning acclaim in various roles.",
    image: '/team/parvej-mantrri.png',
    active: true,
    featured: true
  },
  {
    id: 'f-bhakti',
    name: 'Bhakti Kapoor',
    category: 'HealthTech professional',
    title: 'Founder of HEALTHY HIGH & Nutritional Wellness Advisor',
    bio: "Bhakti is the founder of HEALTHY HIGH a virtual nutrition counselling platform. She is also on the advisory panel for Vitalyse wellness strips and Green Protein.",
    image: '/team/bhakti-kapoor.png',
    active: true,
    featured: true
  },
  {
    id: 'f-bijay',
    name: 'Bijay Anand',
    category: 'Kundalini Yoga',
    title: 'Esteemed Kundalini Yoga Instructor & Holistic Wellness Mentor',
    bio: "Esteemed Kundalini Yoga instructor Bijay Anand fosters holistic wellness, integrating ancient wisdom and contemporary insights for a balanced, transformative practice.",
    image: '/team/bijay-anand.png',
    active: true,
    featured: true
  },
  {
    id: 'f-rajiv',
    name: 'Rajiv Gupta',
    category: 'Japanese Life lessons',
    title: 'Manufacturing CEO & Author | HBS Alumnus & Ex-VP Honda Cars',
    bio: 'Mr. Gupta is currently the CEO of a leading manufacturing company. Author of "The Good Indian Employee\'s Guide to Surviving a Lala Company." Ex-VP and National Head of Sales & Marketing at Honda Cars. Alumnus of HBS.',
    image: '/team/rajiv-gupta.png',
    active: true,
    featured: true
  },
  {
    id: 'f-soha',
    name: 'Soha Ali Khan',
    category: 'Parenting',
    title: 'Acclaimed Author & Modern Family Mentor | Oxford & LSE Alumna',
    bio: 'Soha Ali Khan, Indian actress from a noble lineage, blends regal charm with cinematic brilliance, symbolizing cultural richness in Bollywood. She also the author to the book "The Perils of being Moderately Famous"',
    image: '/team/soha-ali-khan.png',
    active: true,
    featured: true
  },
  {
    id: 'f-sanjay',
    name: 'Sanjay Arora',
    category: 'Entrepreneurship Leader',
    title: 'Healthcare Pioneer & Founder of Suburban Diagnostics',
    bio: "Dr. Sanjay Arora, healthcare pioneer, founded Suburban Diagnostics, prioritizing precision and patient care. Awards recognize his leadership, innovation, and entrepreneurial excellence.",
    image: '/team/sanjay-arora.png',
    active: true,
    featured: true
  },
  {
    id: 'f-bharati',
    name: 'Bharati Jaisingh',
    category: 'Well Being Practitioner',
    title: 'Well Being Practitioner & Founder of IDHA',
    bio: "Bharati K. Jaisingh, Well Being Practitioner and founder of IDHA, utilizes dance and expressive arts to foster therapeutic experiences for individuals and communities.",
    image: '/team/bharati-jaisingh.png',
    active: true,
    featured: true
  },
  {
    id: 'f-manny',
    name: 'Manny Anchan',
    category: 'Personal Leadership',
    title: 'Founder & Chief Happiness Officer | Harvard & Columbia Alum',
    bio: '25 years in global management at GE Capital, HDFC Bank, ABN AMRO, Barclays, AUB, and FAB. Researched Ikigai, Hygge, Lagom, Sisu, and Gross National Happiness.',
    image: '/team/manny-anchan.png',
    active: true,
    featured: true
  }
];

const INITIAL_COURSES = [
  {
    id: 'c1',
    title: 'Finding Your Ikigai',
    duration: '100 Days',
    price: '₹4,999',
    enrollmentUrl: '#enroll',
    icon: 'compass',
    description: 'Discover your core purpose by harmonizing what you love, what you excel at, what the world needs, and what sustains you financially.',
    modules: 14,
    enrolledCount: 1840,
    active: true
  },
  {
    id: 'c2',
    title: 'Passion Quest',
    duration: '100 Days',
    price: '₹4,999',
    enrollmentUrl: '#enroll',
    icon: 'sparkles',
    description: 'Systematically explore intrinsic motivators, eliminate self-sabotaging friction, and architect a lifestyle aligned with your highest authentic interests.',
    modules: 12,
    enrolledCount: 1250,
    active: true
  },
  {
    id: 'c3',
    title: 'Happiness in Money (Psychology of Wealth)',
    duration: '100 Days',
    price: '₹4,999',
    enrollmentUrl: '#enroll',
    icon: 'wallet',
    description: 'Unlock mindset shifts for lasting financial confidence, abundance, and smarter money choices. Decode the neuro-economics of contentment.',
    modules: 16,
    enrolledCount: 2190,
    active: true
  },
  {
    id: 'c4',
    title: 'The Resilience & Stress Blueprint',
    duration: '100 Days',
    price: '₹5,999',
    enrollmentUrl: '#enroll',
    icon: 'shield',
    description: 'Find peace and resilience amidst life\'s challenges, equipped with effective coping strategies, somatic breathing, and neuroplastic habit formation.',
    modules: 15,
    enrolledCount: 960,
    active: true
  }
];

const INITIAL_BOOKS = [
  {
    id: 'b1',
    year: '2020',
    title: 'Happiness Samurai',
    subtitle: 'The Discipline of Purpose',
    description: 'The foundational philosophy linking ancient samurai mental fortitude with modern workplace joy.',
    cover: '/books/4.jpg',
    purchaseUrl: 'https://happinesssamurai.com/index.html',
    quote: 'Defining book of the moment. A must read!',
    endorser: 'John Abraham',
    featured: true
  },
  {
    id: 'b2',
    year: '2021',
    title: 'Happiness Memoir',
    subtitle: 'Lessons from 25 Years of Global Leadership',
    description: 'A candid reflection on executive burnout in corporate towers at GE Capital, Barclays & ABN AMRO, and the path to genuine eudaimonia.',
    cover: '/books/2.jpg',
    purchaseUrl: 'https://happinesssamurai.com/index.html',
    quote: 'Raw, honest, and profoundly transformative.'
  },
  {
    id: 'b3',
    year: '2022',
    title: 'Happiness Conversations',
    subtitle: 'Dialogue with Titans & Thinkers',
    description: 'Interviews with world champions, CEOs, and spiritual masters exploring concepts from Ikigai, Hygge, Lagom, to Gross National Happiness.',
    cover: '/books/5.jpg',
    purchaseUrl: 'https://happinesssamurai.com/index.html',
    quote: 'Every chapter holds a gem of practical wisdom.'
  },
  {
    id: 'b4',
    year: '2023',
    title: 'Happiness & Money',
    subtitle: 'Psychology of Wealth & Stewardship',
    description: 'Foster financial literacy, make informed decisions, and create a secure future through effective money management and mindset shifts.',
    cover: '/books/3.jpg',
    purchaseUrl: 'https://happinesssamurai.com/index.html',
    quote: 'Demystifies financial anxiety with elegance and clarity.'
  },
  {
    id: 'b5',
    year: '2024',
    title: 'Happiness Decoded',
    subtitle: 'The HQ Functional Enhancement Model',
    description: 'The definitive clinical and corporate framework unveiling the five levers of behavioral transformation.',
    cover: '/books/1.jpg',
    purchaseUrl: 'https://happinesssamurai.com/index.html',
    quote: 'The ultimate operating system for modern business vitality.'
  },
  {
    id: 'b6',
    year: '2025',
    title: 'Happiness Habits',
    subtitle: 'Daily Micro-Rituals for Peak Performance',
    description: 'Empowering leaders to cultivate positive routines and achieve lasting personal and organizational growth.',
    cover: '/books/6.jpg',
    purchaseUrl: 'https://happinesssamurai.com/index.html',
    quote: 'Daily micro-rituals that separate good companies from great companies.',
    endorser: 'John Abraham',
    featured: true
  }
];

// Exact Real Podcasts from Page 12 of Profile
const INITIAL_PODCASTS = [
  {
    "id": "yt-SF72EvyPp_s",
    "youtubeId": "SF72EvyPp_s",
    "title": "Building Purposeful Ventures & Strategic Narrative",
    "guest": "Rachna Baruah",
    "category": "Founder, Madchatter | HBS Alum",
    "date": "Season 2026",
    "duration": "46:57",
    "summary": "HQx podcast Season 2026 featuring Rachna Baruah, Founder of Madchatter and Harvard Business School alum, exploring high performance, mental resilience, and purpose-driven branding.",
    "thumbnail": "https://i.ytimg.com/vi/SF72EvyPp_s/hqdefault.jpg"
  },
  {
    "id": "yt-DP-Yr5vdr14",
    "youtubeId": "DP-Yr5vdr14",
    "title": "Mindful Gastronomy, Creative Energy & Wellness",
    "guest": "Master Chef Vicky Ratnani",
    "category": "Celebrity Master Chef & Author",
    "date": "Season 2026",
    "duration": "46:34",
    "summary": "Celebrated culinary author and Master Chef Vicky Ratnani explores nutrition, creative stamina, and conscious living in high-stress culinary environments.",
    "thumbnail": "https://i.ytimg.com/vi/DP-Yr5vdr14/hqdefault.jpg"
  },
  {
    "id": "yt-eLQ7tmv7rgQ",
    "youtubeId": "eLQ7tmv7rgQ",
    "title": "Scaling Organizations with Ethical Resilience",
    "guest": "Dr R Ramakrishnan",
    "category": "Former CEO & Joint MD, Polycab Group",
    "date": "Season 2026",
    "duration": "1:11:06",
    "summary": "Deep corporate leadership masterclass on scaling multi-billion dollar enterprises with values-based integrity, executive calm, and strategic endurance.",
    "thumbnail": "https://i.ytimg.com/vi/eLQ7tmv7rgQ/hqdefault.jpg"
  },
  {
    "id": "yt-llQ8JBBsfVs",
    "youtubeId": "llQ8JBBsfVs",
    "title": "Success With Soul: Leadership, Mental Health & Purpose",
    "guest": "Preeti Chandrashekar",
    "category": "Executive Leadership & Mental Health",
    "date": "Season 2026",
    "duration": "45:15",
    "summary": "Season 26 Episode 1 dialogue on unlocking high-impact corporate performance without sacrificing personal mental health, empathy, and soul.",
    "thumbnail": "https://i.ytimg.com/vi/llQ8JBBsfVs/hqdefault.jpg"
  },
  {
    "id": "yt-kwzqH88DWYg",
    "youtubeId": "kwzqH88DWYg",
    "title": "Holistic Well-Being, Inner Harmony & Performance",
    "guest": "Sanaa Vasi",
    "category": "Wellness & Lifestyle Authority",
    "date": "Season 2026",
    "duration": "38:56",
    "summary": "Sanaa Vasi shares practical daily micro-rituals for achieving sustained physiological balance and psychological clarity in fast-paced worlds.",
    "thumbnail": "https://i.ytimg.com/vi/kwzqH88DWYg/hqdefault.jpg"
  },
  {
    "id": "yt-4_1Ov8vxMWU",
    "youtubeId": "4_1Ov8vxMWU",
    "title": "Corporate Leadership, Strategic Vision & Empathy",
    "guest": "Rakesh Singh",
    "category": "Corporate Leadership & Strategy",
    "date": "Season 2026",
    "duration": "42:59",
    "summary": "Industry veteran Rakesh Singh dives into enterprise transformation, empathetic team alignment, and steering cross-functional excellence.",
    "thumbnail": "https://i.ytimg.com/vi/4_1Ov8vxMWU/hqdefault.jpg"
  },
  {
    "id": "yt-zjvE87o09JY",
    "youtubeId": "zjvE87o09JY",
    "title": "Nourishing Mind & Body: The Eat Heal Love Philosophy",
    "guest": "Avantika Shah",
    "category": "Founder, Eat Heal Love",
    "date": "Season 2026",
    "duration": "52:36",
    "summary": "Founder Avantika Shah shares integrative wellness paradigms, gut-brain connectivity, and healing burnout from within.",
    "thumbnail": "https://i.ytimg.com/vi/zjvE87o09JY/hqdefault.jpg"
  },
  {
    "id": "yt-rLC9VyVGCVA",
    "youtubeId": "rLC9VyVGCVA",
    "title": "Empathetic Execution & Executive Endurance",
    "guest": "Jitendra Karsan",
    "category": "Business Leader & Mentor",
    "date": "Season 2025",
    "duration": "47:45",
    "summary": "Jitendra Karsan unpacks decades of corporate insights on sustained executive vigor, emotional discipline, and team loyalty.",
    "thumbnail": "https://i.ytimg.com/vi/rLC9VyVGCVA/hqdefault.jpg"
  },
  {
    "id": "yt-JbpocGaW9F4",
    "youtubeId": "JbpocGaW9F4",
    "title": "Mindfulness, Transformation & Inner Mastery",
    "guest": "Ajay S",
    "category": "Transformation Coach",
    "date": "Season 2025",
    "duration": "39:38",
    "summary": "Ajay S breaks down how mental de-cluttering directly enhances decision-making velocity and creative breakthroughs under deadlines.",
    "thumbnail": "https://i.ytimg.com/vi/JbpocGaW9F4/hqdefault.jpg"
  },
  {
    "id": "yt-ivt09jBp_Zc",
    "youtubeId": "ivt09jBp_Zc",
    "title": "Preventive Healthcare & Corporate Health Architecture",
    "guest": "Mayank Bathwal",
    "category": "CEO, Aditya Birla Health Insurance",
    "date": "Season 2025",
    "duration": "53:50",
    "summary": "CEO Mayank Bathwal discusses institutional health ecosystems, preventive wellness insurance models, and corporate vitality metrics.",
    "thumbnail": "https://i.ytimg.com/vi/ivt09jBp_Zc/hqdefault.jpg"
  },
  {
    "id": "yt-5G8FUWsrWjc",
    "youtubeId": "5G8FUWsrWjc",
    "title": "Venture Capital, Founder Resilience & Long-Term Value",
    "guest": "Sasha Mirchandani",
    "category": "Founder & Managing Partner, Kae Capital",
    "date": "Season 2025",
    "duration": "48:32",
    "summary": "Venture capital icon Sasha Mirchandani discusses mental grit in startup founders, weathering market turbulence, and ethical investing.",
    "thumbnail": "https://i.ytimg.com/vi/5G8FUWsrWjc/hqdefault.jpg"
  },
  {
    "id": "yt-uSF7SPnpxqc",
    "youtubeId": "uSF7SPnpxqc",
    "title": "Vocal Power, Creative Resilience & Overcoming Adversity",
    "guest": "Manasi Scott",
    "category": "Renowned Singer, Performer & Actor",
    "date": "Season 2025",
    "duration": "44:20",
    "summary": "Manasi Scott shares an electrifying dialogue on personal courage, overcoming major life health hurdles, and living with unapologetic joy.",
    "thumbnail": "https://i.ytimg.com/vi/uSF7SPnpxqc/hqdefault.jpg"
  },
  {
    "id": "yt-MZBkbZH123M",
    "youtubeId": "MZBkbZH123M",
    "title": "Artisanal Craft, Coffee Culture & Culinary Mindfulness",
    "guest": "Daniel Trulson",
    "category": "Co-founder & Head Chef, Subko Coffee",
    "date": "Season 2025",
    "duration": "1:02:36",
    "summary": "Subko Coffee head chef Daniel Trulson shares how culinary discipline, ingredient reverence, and mindfulness drive world-class excellence.",
    "thumbnail": "https://i.ytimg.com/vi/MZBkbZH123M/hqdefault.jpg"
  },
  {
    "id": "yt-w9QzkeZs1-8",
    "youtubeId": "w9QzkeZs1-8",
    "title": "Gen Z Perspectives: Depth, Curiosity & Stoic Spirit",
    "guest": "Sohm Anchan",
    "category": "Gen Z Dialogue",
    "date": "Season 2025",
    "duration": "34:31",
    "summary": "Heartfelt cross-generational dialogue between Manny and Sohm on modern youth ambition, digital burnout, and finding stoic inner grounding.",
    "thumbnail": "https://i.ytimg.com/vi/w9QzkeZs1-8/hqdefault.jpg"
  },
  {
    "id": "yt-j960Obyyv74",
    "youtubeId": "j960Obyyv74",
    "title": "The Mentalist Edge: Perception, Influence & Mind Hacks",
    "guest": "Praveen Nair",
    "category": "Top Mentalist & Hypnotist",
    "date": "Season 2025",
    "duration": "36:17",
    "summary": "Master mentalist Praveen Nair deconstructs the architecture of human perception, subconscious cues, and cognitive resilience.",
    "thumbnail": "https://i.ytimg.com/vi/j960Obyyv74/hqdefault.jpg"
  },
  {
    "id": "yt-fdtxBTBgKk0",
    "youtubeId": "fdtxBTBgKk0",
    "title": "Sustained High Performance in Corporate Ecosystems",
    "guest": "Executive Panel",
    "category": "Executive Masterclass",
    "date": "Season 2025",
    "duration": "43:41",
    "summary": "In-depth exploration of corporate fatigue, cognitive rest periods, and designing workspaces that nurture productivity.",
    "thumbnail": "https://i.ytimg.com/vi/fdtxBTBgKk0/hqdefault.jpg"
  },
  {
    "id": "yt-sHEH9k2cOv4",
    "youtubeId": "sHEH9k2cOv4",
    "title": "Cross-Cultural Leadership & Executive Neuroplasticity",
    "guest": "Margie Blanton",
    "category": "Global Executive Educator",
    "date": "Season 2025",
    "duration": "22:40",
    "summary": "Margie Blanton reveals how top executives rewire cognitive habits through continuous curiosity, travel, and beginner’s mind philosophy.",
    "thumbnail": "https://i.ytimg.com/vi/sHEH9k2cOv4/hqdefault.jpg"
  },
  {
    "id": "yt-CK-r2GbXs6Y",
    "youtubeId": "CK-r2GbXs6Y",
    "title": "Legal Rigor, Complex Negotiations & Emotional Boundaries",
    "guest": "Radhika Dudhat",
    "category": "Senior Partner, Shardul Amarchand Mangaldas",
    "date": "Season 2025",
    "duration": "27:32",
    "summary": "Senior legal partner Radhika Dudhat unpacks managing multi-million-dollar high-stakes legal negotiations while safeguarding mental peace.",
    "thumbnail": "https://i.ytimg.com/vi/CK-r2GbXs6Y/hqdefault.jpg"
  },
  {
    "id": "yt-jgw_EOkmBSE",
    "youtubeId": "jgw_EOkmBSE",
    "title": "Philanthropy, Altruism & The Science of Giving",
    "guest": "Noopur Desai",
    "category": "Philanthropy & Social Impact",
    "date": "Season 2025",
    "duration": "25:56",
    "summary": "Exploring how service and meaningful community giveback stimulate neurological happiness centers and counter corporate cynicism.",
    "thumbnail": "https://i.ytimg.com/vi/jgw_EOkmBSE/hqdefault.jpg"
  },
  {
    "id": "yt-z-DpZS9KgwQ",
    "youtubeId": "z-DpZS9KgwQ",
    "title": "Workplace Well-Being as a Strategic Enterprise Pillar",
    "guest": "Corporate Leadership",
    "category": "Enterprise Strategy",
    "date": "Season 2025",
    "duration": "32:39",
    "summary": "Why human-centered organizational design outpaces purely transactional management models in long-term enterprise valuation.",
    "thumbnail": "https://i.ytimg.com/vi/z-DpZS9KgwQ/hqdefault.jpg"
  },
  {
    "id": "yt-iMJEgUtXl5w",
    "youtubeId": "iMJEgUtXl5w",
    "title": "The Eudaimonic Enterprise: Inception of HQx",
    "guest": "Manny Anchan",
    "category": "Host & Founder, HQx",
    "date": "Season 2025",
    "duration": "45:40",
    "summary": "Manny Anchan sets the foundational vision for HQx: blending global executive discipline with timeless eudaimonic happiness philosophies.",
    "thumbnail": "https://i.ytimg.com/vi/iMJEgUtXl5w/hqdefault.jpg"
  },
  {
    "id": "yt-EI6SNlfIn54",
    "youtubeId": "EI6SNlfIn54",
    "title": "Embracing Authenticity, Mental Grace & Overcoming Pressure",
    "guest": "Sameera Reddy",
    "category": "Actor & Happiness Advocate",
    "date": "Featured Special",
    "duration": "50:39",
    "summary": "Celebrated actor Sameera Reddy shares candid reflections on overcoming postpartum depression, corporate pressure, and finding genuine self-love.",
    "thumbnail": "https://i.ytimg.com/vi/EI6SNlfIn54/hqdefault.jpg"
  },
  {
    "id": "yt-17t_VxbPOVc",
    "youtubeId": "17t_VxbPOVc",
    "title": "Happy Conversations: Micro Moments of Joy",
    "guest": "Manny Anchan",
    "category": "Micro-Insight",
    "date": "Micro Series",
    "duration": "0:39",
    "summary": "Short reflection by Manny Anchan on noticing everyday spontaneous joy and building intentional connections.",
    "thumbnail": "https://i.ytimg.com/vi/17t_VxbPOVc/hqdefault.jpg"
  },
  {
    "id": "yt-4xvmWMBFii8",
    "youtubeId": "4xvmWMBFii8",
    "title": "Journey Is The Destination: Mindset Shifts",
    "guest": "Manny Anchan",
    "category": "Micro-Insight",
    "date": "Micro Series",
    "duration": "0:53",
    "summary": "A powerful 53-second insight on detachment from outcomes and rediscovering meaning in daily practice.",
    "thumbnail": "https://i.ytimg.com/vi/4xvmWMBFii8/hqdefault.jpg"
  },
  {
    "id": "yt-BHpaC1ObaVA",
    "youtubeId": "BHpaC1ObaVA",
    "title": "What Makes You Happy? Corporate Voices at Aditya Birla Capital",
    "guest": "Aditya Birla Capital Team",
    "category": "Corporate Spotlight",
    "date": "Enterprise Voice",
    "duration": "4:09",
    "summary": "Direct employee stories and perspectives on what fuels happiness, purpose, and camaraderie at Aditya Birla Capital.",
    "thumbnail": "https://i.ytimg.com/vi/BHpaC1ObaVA/hqdefault.jpg"
  },
  {
    "id": "yt-NTdduGwLilQ",
    "youtubeId": "NTdduGwLilQ",
    "title": "Culture & Joy at Work: Voices at Tata Capital",
    "guest": "Tata Capital Team",
    "category": "Corporate Spotlight",
    "date": "Enterprise Voice",
    "duration": "2:47",
    "summary": "Exploring employee well-being culture, trust, and mutual encouragement across teams at Tata Capital.",
    "thumbnail": "https://i.ytimg.com/vi/NTdduGwLilQ/hqdefault.jpg"
  },
  {
    "id": "yt-8OROLKExUbY",
    "youtubeId": "8OROLKExUbY",
    "title": "Finding Joy in Everyday Craft: Interviewing My Favorite Barista",
    "guest": "Special Guest",
    "category": "Everyday Happiness",
    "date": "Human Connection",
    "duration": "4:23",
    "summary": "Manny sits down with a skilled barista to discuss presence, craftsmanship, and how small genuine interactions brighten human days.",
    "thumbnail": "https://i.ytimg.com/vi/8OROLKExUbY/hqdefault.jpg"
  },
  {
    "id": "yt-oHdbLEax_a0",
    "youtubeId": "oHdbLEax_a0",
    "title": "What Is Your Life’s Design? Taking Charge & Shaping Destiny",
    "guest": "Manny Anchan",
    "category": "Masterclass",
    "date": "Life Design",
    "duration": "4:09",
    "summary": "Practical frameworks by Manny Anchan on moving from passive reaction to intentional life architecture and proactive design.",
    "thumbnail": "https://i.ytimg.com/vi/oHdbLEax_a0/hqdefault.jpg"
  },
  {
    "id": "yt-JurW3HRo3V4",
    "youtubeId": "JurW3HRo3V4",
    "title": "The Transformative Power of Daily Journaling",
    "guest": "Manny Anchan",
    "category": "Habit Mastery",
    "date": "Behavioral Practice",
    "duration": "1:37",
    "summary": "Manny Anchan explains the neuroscience of daily journaling: clarity, stress release, and cognitive crystallization.",
    "thumbnail": "https://i.ytimg.com/vi/JurW3HRo3V4/hqdefault.jpg"
  },
  {
    "id": "yt-uMDEotodPD4",
    "youtubeId": "uMDEotodPD4",
    "title": "Happiness Samurai Book Signing & Keynote Address",
    "guest": "Manny Anchan",
    "category": "Keynote Event",
    "date": "Book Launch",
    "duration": "40:20",
    "summary": "Full video recording of the high-energy Happiness Samurai book launch, keynote address, and audience Q&A with Manny Anchan.",
    "thumbnail": "https://i.ytimg.com/vi/uMDEotodPD4/hqdefault.jpg"
  }
];

// Exact Real Corporate Interactions from Pages 7, 8, 9, 10
const INITIAL_ENGAGEMENTS = [
  // Domestic (Pages 7, 8, 9)
  {
    id: 'eng-1',
    client: 'Ageas Federal Insurance',
    location: 'Mumbai, India',
    scope: 'Domestic',
    category: 'Corporate Wellness & Leadership',
    date: '2024-2026',
    attendees: 'Senior Leadership & Sales Teams',
    impact: 'Transformational wellness keynote cultivating resilience across national branches.'
  },
  {
    id: 'eng-2',
    client: 'Tricolite',
    location: 'Delhi, India',
    scope: 'Domestic',
    category: '100 Days Ikigai Program',
    date: '2024-2026',
    attendees: '300+ Engineering & Leadership Staff',
    impact: 'End-to-end 100-day Ikigai deployment driving sustained workplace purpose.'
  },
  {
    id: 'eng-3',
    client: 'HDFC ERGO',
    location: 'Mumbai, India',
    scope: 'Domestic',
    category: 'Staff Engagement & Wellness Confluence',
    date: '2025-2026',
    attendees: '500+ Across Regional Divisions',
    impact: 'Keynote and experiential workshops on psychological well-being and productivity.'
  },
  {
    id: 'eng-4',
    client: 'TATA Motors',
    location: 'Pune, India',
    scope: 'Domestic',
    category: 'Leadership Deep Dive & Executive Resilience',
    date: '2025-2026',
    attendees: 'Senior Engineering & Operations Leaders',
    impact: '94% reported enhanced resilience in team management and crisis turnaround.'
  },
  {
    id: 'eng-5',
    client: 'Cipla Pharmaceuticals',
    location: 'Goa, India',
    scope: 'Domestic',
    category: 'Engaging Well-Being Workshop',
    date: '2025',
    attendees: 'Global Pharma Leaders & Research Directors',
    impact: 'Somatic mindfulness and eudaimonic performance workshop in Goa retreat.'
  },
  {
    id: 'eng-6',
    client: 'HDFC Life',
    location: 'Mumbai, India',
    scope: 'Domestic',
    category: 'Culture Transformation & Motivation',
    date: '2024-2025',
    attendees: '800+ Across Regional Hubs',
    impact: 'Institutional adoption of daily micro-wellness checkpoints.'
  },
  {
    id: 'eng-7',
    client: 'Indigo Airlines',
    location: 'Delhi, India',
    scope: 'Domestic',
    category: 'Aviation Well-Being & Stress Management',
    date: '2024',
    attendees: 'Flight Operations & Crew Leadership',
    impact: 'Equipped teams with acute stress recovery and focus protocols.'
  },
  {
    id: 'eng-8',
    client: 'Shardul Amarchand Mangaldas',
    location: 'Mumbai, India',
    scope: 'Domestic',
    category: 'Executive Composure in Law',
    date: '2024',
    attendees: 'Partners & Senior Associates',
    impact: 'Stress mitigation and mental clarity masterclasses for top legal counsel.'
  },
  {
    id: 'eng-9',
    client: 'TATA AIG',
    location: 'Connor, India',
    scope: 'Domestic',
    category: 'Annual Leadership Summit',
    date: '2024',
    attendees: 'Executive Committee & VPs',
    impact: 'Grit, purpose alignment, and customer empathy frameworks.'
  },
  {
    id: 'eng-10',
    client: 'Turtlemint Insurance',
    location: 'Maharashtra, India',
    scope: 'Domestic',
    category: 'Staff Engagement & Motivation',
    date: '2024',
    attendees: 'InsurTech Growth Leaders',
    impact: 'Fostered high-trust collaborative growth culture.'
  },
  {
    id: 'eng-11',
    client: 'ELP (Economic Laws Practice)',
    location: 'Pune, India',
    scope: 'Domestic',
    category: 'Corporate Legal Wellness',
    date: '2024',
    attendees: 'Corporate Law Professionals',
    impact: 'Work-life balance and high-stakes decision clarity.'
  },
  {
    id: 'eng-12',
    client: 'Burns & McDonnell',
    location: 'Mumbai, India',
    scope: 'Domestic',
    category: 'Engineering Wellness Masterclass',
    date: '2025',
    attendees: 'Design & Construction Engineers',
    impact: 'Practical cognitive ergonomics for complex technical deliveries.'
  },
  {
    id: 'eng-13',
    client: 'Mango Sciences',
    location: 'Goa, India',
    scope: 'Domestic',
    category: 'Healthcare Tech Offsite',
    date: '2024',
    attendees: 'HealthTech Innovators',
    impact: 'Mindset shifts and resilience training for high-velocity startup pace.'
  },
  {
    id: 'eng-14',
    client: 'Uniworld Logistics',
    location: 'Delhi, India',
    scope: 'Domestic',
    category: 'Supply Chain Stress Mastery',
    date: '2024',
    attendees: 'Logistics Managers',
    impact: 'High-pressure communication and crisis composure.'
  },
  {
    id: 'eng-15',
    client: 'APAR Industries (Holistic Health & Workout)',
    location: 'Mumbai, India',
    scope: 'Domestic',
    category: 'Manufacturing Well-Being Conclave',
    date: '2024',
    attendees: 'Industrial Workforce & Plant Managers',
    impact: 'Physical fitness, posture ergonomics, and mental wellness.'
  },
  // International (Page 10)
  {
    id: 'eng-int-1',
    client: 'Absa Bank',
    location: 'Mauritius',
    scope: 'Global',
    category: 'International Corporate Well-Being Summit',
    date: '2025',
    attendees: '500+ International Corporate Bankers',
    impact: 'Rated best leadership keynote of the annual African convention.'
  },
  {
    id: 'eng-int-2',
    client: 'Amana Bank',
    location: 'Tanzania',
    scope: 'Global',
    category: 'East African Banking Convention',
    date: '2024',
    attendees: 'Executive Directors & Bank Leadership',
    impact: 'Cross-cultural purpose alignment and customer-centric motivation.'
  },
  {
    id: 'eng-int-3',
    client: 'Harvard Club : Sri Lanka x APAC',
    location: 'Colombo, Sri Lanka',
    scope: 'Global',
    category: 'Harvard Alumni Global Keynote',
    date: '2024',
    attendees: 'APAC Harvard Alumni & Regional CXOs',
    impact: 'Standing ovation on "This Is How The Good Companies Find The Good Company".'
  },
  {
    id: 'eng-int-4',
    client: 'Alizz Islamic Bank',
    location: 'Oman',
    scope: 'Global',
    category: 'Middle East Leadership Symposium',
    date: '2024',
    attendees: 'Oman Banking Leaders',
    impact: 'Values-based leadership and mental resilience.'
  },
  {
    id: 'eng-int-5',
    client: 'Global Indian School (Teachers & Students)',
    location: 'Dubai, UAE',
    scope: 'Global',
    category: 'Educational Well-Being & Youth Mentorship',
    date: '2024',
    attendees: 'Faculty Educators & Senior Students',
    impact: 'Empowering future leaders with emotional intelligence and Ikigai purpose.'
  }
];

const INITIAL_INQUIRIES = [
  {
    id: 'inq-1',
    name: 'Vikram Malhotra',
    company: 'Reliance Industries',
    email: 'vikram.m@example.com',
    phone: '+91 98200 12345',
    program: 'Leadership Deep Dive',
    headcount: '50-100 Executives',
    preferredDate: 'November 2026',
    message: 'Seeking a 2-day offsite intervention for our VP cohort on resilience and emotional intelligence.',
    status: 'Contacted',
    date: '2026-10-14'
  },
  {
    id: 'inq-2',
    name: 'Priya Nambiar',
    company: 'Deloitte Consulting',
    email: 'priya.n@example.com',
    phone: '+91 98450 67890',
    program: 'Engaging Workshops',
    headcount: '200+ Team Members',
    preferredDate: 'December 2026',
    message: 'Interested in a mindfulness & productivity workshop before our annual sprint cycle.',
    status: 'Pending',
    date: '2026-10-15'
  }
];

export function DataProvider({ children }) {
  const [faculty, setFaculty] = useState(() => {
    const saved = localStorage.getItem('hqx_faculty_v2');
    return saved ? JSON.parse(saved) : INITIAL_FACULTY;
  });

  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem('hqx_courses_v2');
    return saved ? JSON.parse(saved) : INITIAL_COURSES;
  });

  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem('hqx_books_v2');
    return saved ? JSON.parse(saved) : INITIAL_BOOKS;
  });

  const [podcasts, setPodcasts] = useState(() => {
    const saved = localStorage.getItem('hqx_podcasts_v3');
    return saved ? JSON.parse(saved) : INITIAL_PODCASTS;
  });

  const [engagements, setEngagements] = useState(() => {
    const saved = localStorage.getItem('hqx_engagements_v2');
    return saved ? JSON.parse(saved) : INITIAL_ENGAGEMENTS;
  });

  const [inquiries, setInquiries] = useState(() => {
    const saved = localStorage.getItem('hqx_inquiries_v2');
    return saved ? JSON.parse(saved) : INITIAL_INQUIRIES;
  });

  const [cmsRichText, setCmsRichText] = useState(() => {
    const saved = localStorage.getItem('hqx_richtext_v2');
    return saved ? JSON.parse(saved) : {
      bannerTagline: '"This Is How The Good Companies Find The Good Company"',
      heroHeadline: 'Manny Anchan',
      heroSubtext: '25 years in global management at GE Capital, HDFC Bank, ABN AMRO, Barclays, AUB, and FAB. Harvard & Columbia Business School alum. Researched Ikigai, Hygge, Lagom, Sisu, to Gross National Happiness.',
      quoteText: 'Those who feel better work better.',
      quoteSubtext: 'Employee well-being is a strategic, hands-on, immersive, and disciplined investment that enhances intrinsic motivation, increases productivity, and elevates retention.',
      fontSize: 'text-base',
      fontWeight: 'font-normal',
      fontColor: '#0A0A0A'
    };
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('hqx_faculty_v2', JSON.stringify(faculty));
  }, [faculty]);

  useEffect(() => {
    localStorage.setItem('hqx_courses_v2', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('hqx_books_v2', JSON.stringify(books));
  }, [books]);

  useEffect(() => {
    localStorage.setItem('hqx_podcasts_v3', JSON.stringify(podcasts));
  }, [podcasts]);

  useEffect(() => {
    localStorage.setItem('hqx_engagements_v2', JSON.stringify(engagements));
  }, [engagements]);

  useEffect(() => {
    localStorage.setItem('hqx_inquiries_v2', JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem('hqx_richtext_v2', JSON.stringify(cmsRichText));
  }, [cmsRichText]);

  // Operations
  const addInquiry = (newInquiry) => {
    const inq = {
      ...newInquiry,
      id: `inq-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      status: 'Pending'
    };
    setInquiries(prev => [inq, ...prev]);
    return inq;
  };

  const updateInquiryStatus = (id, status) => {
    setInquiries(prev => prev.map(item => item.id === id ? { ...item, status } : item));
  };

  const addFaculty = (item) => {
    const member = { ...item, id: `f-${Date.now()}` };
    setFaculty(prev => [...prev, member]);
  };

  const updateFaculty = (id, updated) => {
    setFaculty(prev => prev.map(item => item.id === id ? { ...item, ...updated } : item));
  };

  const deleteFaculty = (id) => {
    setFaculty(prev => prev.filter(item => item.id !== id));
  };

  const addCourse = (item) => {
    const course = { ...item, id: `c-${Date.now()}` };
    setCourses(prev => [...prev, course]);
  };

  const updateCourse = (id, updated) => {
    setCourses(prev => prev.map(item => item.id === id ? { ...item, ...updated } : item));
  };

  const deleteCourse = (id) => {
    setCourses(prev => prev.filter(item => item.id !== id));
  };

  const addBook = (item) => {
    const book = { ...item, id: `b-${Date.now()}` };
    setBooks(prev => [...prev, book]);
  };

  const updateBook = (id, updated) => {
    setBooks(prev => prev.map(item => item.id === id ? { ...item, ...updated } : item));
  };

  const deleteBook = (id) => {
    setBooks(prev => prev.filter(item => item.id !== id));
  };

  const addPodcast = (item) => {
    const pod = { ...item, id: `p-${Date.now()}` };
    setPodcasts(prev => [pod, ...prev]);
  };

  const updatePodcast = (id, updated) => {
    setPodcasts(prev => prev.map(item => item.id === id ? { ...item, ...updated } : item));
  };

  const deletePodcast = (id) => {
    setPodcasts(prev => prev.filter(item => item.id !== id));
  };

  const addEngagement = (item) => {
    const eng = { ...item, id: `e-${Date.now()}` };
    setEngagements(prev => [eng, ...prev]);
  };

  const updateEngagement = (id, updated) => {
    setEngagements(prev => prev.map(item => item.id === id ? { ...item, ...updated } : item));
  };

  const deleteEngagement = (id) => {
    setEngagements(prev => prev.filter(item => item.id !== id));
  };

  const updateCmsRichText = (newSettings) => {
    setCmsRichText(prev => ({ ...prev, ...newSettings }));
  };

  const resetToDefaults = () => {
    localStorage.removeItem('hqx_faculty_v2');
    localStorage.removeItem('hqx_courses_v2');
    localStorage.removeItem('hqx_books_v2');
    localStorage.removeItem('hqx_podcasts_v3');
    localStorage.removeItem('hqx_engagements_v2');
    localStorage.removeItem('hqx_inquiries_v2');
    localStorage.removeItem('hqx_richtext_v2');
    setFaculty(INITIAL_FACULTY);
    setCourses(INITIAL_COURSES);
    setBooks(INITIAL_BOOKS);
    setPodcasts(INITIAL_PODCASTS);
    setEngagements(INITIAL_ENGAGEMENTS);
    setInquiries(INITIAL_INQUIRIES);
  };

  return (
    <DataContext.Provider value={{
      faculty,
      courses,
      books,
      podcasts,
      engagements,
      inquiries,
      cmsRichText,
      founderProfile: FOUNDER_PROFILE,
      keyThemes: KEY_THEMES,
      wellbeingPillars: WELLBEING_INVESTMENT_PILLARS,
      engagementBenefits: ENGAGEMENT_BENEFITS,
      statesCovered: STATES_COVERED,
      globalCountries: GLOBAL_FOOTPRINT_COUNTRIES,
      printMedia: PRINT_MEDIA,
      trustedBrands: TRUSTED_BRANDS,
      addInquiry,
      updateInquiryStatus,
      addFaculty,
      updateFaculty,
      deleteFaculty,
      addCourse,
      updateCourse,
      deleteCourse,
      addBook,
      updateBook,
      deleteBook,
      addPodcast,
      updatePodcast,
      deletePodcast,
      addEngagement,
      updateEngagement,
      deleteEngagement,
      updateCmsRichText,
      resetToDefaults
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
