import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://happinesssamurai.com';

const ROUTE_META = {
  '/': {
    title: 'HQX | Happiness Samurai — Manny Anchan | Corporate Well-Being & Leadership',
    description:
      'Transform corporate cultures through Manny Anchan’s HQ Functional Enhancement Model and Eudaimonic Transformation. 25+ years of executive stewardship across 9 nations.'
  },
  '/about-us': {
    title: 'About HQX | Happiness Quotient Global — Eudaimonic Corporate Culture',
    description:
      'Discover Happiness Quotient Global (HQX): bridging applied neuroscience, Japanese eudaimonia, and C-suite execution to elevate organizational vitality.'
  },
  '/founder': {
    title: 'Manny Anchan | Founder & Happiness Samurai — HQX',
    description:
      'Meet Manny Anchan, Harvard & Columbia Business School alum with 25+ years of corporate leadership at GE Capital, HDFC, Barclays, and ABN AMRO.'
  },
  '/why-hqx': {
    title: 'Why HQX | Measurable ROI of Eudaimonic Transformation',
    description:
      'See how HQX reduces senior attrition, prevents burnout, and elevates enterprise productivity across 250,000+ catalyzed professionals.'
  },
  '/eudaimonic-transformation': {
    title: 'Eudaimonic Transformation | HQ Functional Enhancement Model — HQX',
    description:
      'Explore the systematic 5-pillar Eudaimonic Transformation architecture built for resilient leadership and high-performing enterprise cultures.'
  },
  '/well-being-ethos': {
    title: '5 Well-Being Pillars | Holistic Corporate Ethos — HQX',
    description:
      'Physical, Emotional, Intellectual, Social, and Purposeful well-being pillars powering sustainable leadership and thriving workplace ecosystems.'
  },
  '/leadership-deep-dive': {
    title: 'Leadership Deep Dive | Executive Offsites & C-Suite Retreats — HQX',
    description:
      'High-impact leadership immersions and executive retreats personally facilitated by Manny Anchan and HQX multidisciplinary faculty.'
  },
  '/engaging-workshops': {
    title: 'Engaging Workshops | Interactive Corporate Masterclasses — HQX',
    description:
      'Interactive corporate workshops on strategic thinking, mindfulness, grit, conscious parenting, and energy architecture grounded in Happiness Decoded.'
  },
  '/keynotes': {
    title: 'Keynotes & Friday Talks | Manny Anchan — 4x TEDx Speaker',
    description:
      'Book 4x TEDx speaker Manny Anchan for transformative corporate keynotes, townhalls, and Friday Talks across global conferences.'
  },
  '/micro-courses': {
    title: '100-Day Micro Courses | Mini Masteries & Self-Paced Blueprints — HQX',
    description:
      '100-day daily micro-rituals and self-paced masteries on Ikigai, Happiness in Money, and emotional resilience for enterprise teams.'
  },
  '/happyu-app': {
    title: 'HappyU App | Digital Well-Being Companion (iOS & Android) — HQX',
    description:
      'Scale daily eudaimonic habits across your enterprise with HappyU — trusted by 50,000+ users for guided mindfulness and habit streaks.'
  },
  '/team': {
    title: 'Global Faculty & Advisory Board | HQX',
    description:
      'Meet HQX’s multidisciplinary advisory faculty of Olympic medalists, C-suite veterans, authors, and well-being practitioners.'
  },
  '/podcast': {
    title: 'HQX Podcast & Print Media | Stories, Mindset and Insights',
    description:
      'Fortnightly dialogues hosted by Manny Anchan featuring founders, leaders, and creators, plus national and global editorial coverage.'
  },
  '/books': {
    title: 'Books by Manny Anchan (2020–2025) | Happiness Samurai Series — HQX',
    description:
      'Explore Happiness Habits, Happiness Decoded, Happiness in Money, Happiness Conversations, Happiness Memoir, and Happiness Samurai.'
  },
  '/contact': {
    title: 'Book Manny Anchan | Initiate Corporate Intervention — HQX',
    description:
      'Connect with Manny Anchan’s executive desk for corporate workshops, C-suite offsites, keynotes, and enterprise well-being deployments.'
  }
};

export default function RouteSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalized = pathname === '/about' ? '/about-us' : pathname;
    const meta = ROUTE_META[normalized] || ROUTE_META['/'];
    document.title = meta.title;

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (el) {
        el.setAttribute(attr, value);
      }
    };

    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', `${SITE_URL}${normalized}`);
    setMeta('meta[name="twitter:title"]', 'content', meta.title);
    setMeta('meta[name="twitter:description"]', 'content', meta.description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_URL}${normalized}`);
  }, [pathname]);

  return null;
}

