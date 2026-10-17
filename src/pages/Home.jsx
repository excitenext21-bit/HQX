import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowDownRight, 
  ArrowRight, 
  ArrowUpRight,
  Brain, 
  Heart, 
  Users, 
  Activity, 
  Coins, 
  Crown, 
  GitMerge, 
  Shield, 
  Target, 
  Move, 
  Smartphone, 
  MonitorPlay, 
  Sparkles, 
  Compass, 
  Wallet, 
  Mic, 
  Quote, 
  Play, 
  CheckCircle, 
  Check, 
  ExternalLink,
  Calendar,
  Clock,
  Building,
  Award,
  Globe2,
  MapPin,
  Flame,
  CheckCircle2,
  Layers,
  Radio,
  Newspaper,
  Dumbbell,
  Timer,
  Sprout,
  HeartPulse,
  Apple,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  X
} from 'lucide-react';
import { useData } from '../context/DataContext';
import { useTheme } from '../context/ThemeContext';
import RotatingGlobe from '../components/common/RotatingGlobe';

// Sleek Long-Tail 20px Arrow (1px stroke) for complete page consistency
function LongArrow({ direction = 'right', className = '' }) {
  if (direction === 'left') {
    return (
      <svg 
        className={`w-[20px] h-[10px] inline-block flex-shrink-0 transition-transform duration-300 ${className}`} 
        viewBox="0 0 20 10" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="20" y1="5" x2="0" y2="5" stroke="currentColor" strokeWidth="1" />
        <polyline points="5 1, 0 5, 5 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg 
      className={`w-[20px] h-[10px] inline-block flex-shrink-0 transition-transform duration-300 ${className}`} 
      viewBox="0 0 20 10" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="1" />
      <polyline points="15 1, 20 5, 15 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  const { 
    faculty, 
    courses, 
    books, 
    podcasts, 
    engagements, 
    cmsRichText,
    founderProfile,
    keyThemes,
    wellbeingPillars,
    engagementBenefits,
    statesCovered,
    globalCountries
  } = useData();

  // Theme Icons mapping for The 10 Key Themes
  const themeIcons = {
    ikigai: <Compass className="w-5 h-5 stroke-[1.8]" />,
    finance: <Coins className="w-5 h-5 stroke-[1.8]" />,
    stress: <Shield className="w-5 h-5 stroke-[1.8]" />,
    fitness: <Activity className="w-5 h-5 stroke-[1.8]" />,
    leadership: <Award className="w-5 h-5 stroke-[1.8]" />,
    values: <Heart className="w-5 h-5 stroke-[1.8]" />,
    balance: <Timer className="w-5 h-5 stroke-[1.8]" />,
    meditation: <Sparkles className="w-5 h-5 stroke-[1.8]" />,
    'psychology-wealth': <Brain className="w-5 h-5 stroke-[1.8]" />,
    'habit-building': <Target className="w-5 h-5 stroke-[1.8]" />,
    healing: <HeartPulse className="w-5 h-5 stroke-[1.8]" />,
    nutrition: <Apple className="w-5 h-5 stroke-[1.8]" />
  };

  // Active pillar state for Balance Within Worklife
  const [activeWorklifePillar, setActiveWorklifePillar] = useState('resilience');

  // Selected active podcast for the Spotlight Player in HQX Podcast section
  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const activePodcast = selectedPodcast || (podcasts && podcasts.length > 0 ? podcasts[0] : null);

  // Current pair index for The 12 Key Themes (displays 2 themes at a time, fit-to-screen: 0 to 5)
  const [currentPairIdx, setCurrentPairIdx] = useState(0);
  const keyThemesSectionRef = useRef(null);
  const isThemeWheelThrottled = useRef(false);

  // Selected faculty member for team modal & auto-slider state
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [isTeamHovered, setIsTeamHovered] = useState(false);
  const teamScrollContainerRef = useRef(null);

  // Mouse drag-to-scroll state for OUR TEAM section
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragScrollLeft, setDragScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only primary mouse button
    const container = teamScrollContainerRef.current;
    if (!container) return;
    setIsMouseDown(true);
    setHasDragged(false);
    setDragStartX(e.pageX - container.offsetLeft);
    setDragScrollLeft(container.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    const container = teamScrollContainerRef.current;
    if (!container) return;
    e.preventDefault();
    const currentX = e.pageX - container.offsetLeft;
    const distance = (currentX - dragStartX) * 1.25;
    if (Math.abs(distance) > 5) {
      setHasDragged(true);
    }
    container.scrollLeft = dragScrollLeft - distance;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    setTimeout(() => {
      setHasDragged(false);
    }, 60);
  };

  const handleMouseLeave = () => {
    if (isMouseDown) {
      setIsMouseDown(false);
      setTimeout(() => {
        setHasDragged(false);
      }, 60);
    }
    setIsTeamHovered(false);
  };

  // Window mouseup listener to catch releases outside the container
  useEffect(() => {
    if (!isMouseDown) return;
    const handleGlobalMouseUp = () => {
      setIsMouseDown(false);
      setTimeout(() => setHasDragged(false), 60);
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, [isMouseDown]);

  // Ensure team scroller starts from Bijay Anand (first card) on mount
  useEffect(() => {
    if (teamScrollContainerRef.current) {
      teamScrollContainerRef.current.scrollLeft = 0;
    }
  }, []);

  // Auto-scroll effect for OUR TEAM section: scrolls automatically every 2.8s, pauses on hover or drag
  useEffect(() => {
    if (isTeamHovered || isMouseDown) return;

    const interval = setInterval(() => {
      const container = teamScrollContainerRef.current;
      if (!container) return;

      const cardStep = 420;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 30) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardStep, behavior: 'smooth' });
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isTeamHovered, isMouseDown]);

  // Wheel scroll interaction for The 12 Key Themes:
  // When scrolling mouse wheel over this section, smoothly transitions between pairs:
  // 1-2 -> 3-4 -> 5-6 -> 7-8 -> 9-10 -> 11-12
  useEffect(() => {
    const el = keyThemesSectionRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      const rect = el.getBoundingClientRect();
      // Check if section is substantially in view
      const inView = rect.top <= 140 && rect.bottom >= window.innerHeight - 140;
      if (!inView) return;

      if (e.deltaY > 20) {
        // Scrolling down: advance pair if not on last pair
        if (currentPairIdx < 5) {
          e.preventDefault();
          if (!isThemeWheelThrottled.current) {
            isThemeWheelThrottled.current = true;
            setCurrentPairIdx(p => Math.min(p + 1, 5));
            setTimeout(() => {
              isThemeWheelThrottled.current = false;
            }, 420);
          }
        }
      } else if (e.deltaY < -20) {
        // Scrolling up: go back if not on first pair
        if (currentPairIdx > 0) {
          e.preventDefault();
          if (!isThemeWheelThrottled.current) {
            isThemeWheelThrottled.current = true;
            setCurrentPairIdx(p => Math.max(p - 1, 0));
            setTimeout(() => {
              isThemeWheelThrottled.current = false;
            }, 420);
          }
        }
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [currentPairIdx]);

  const scrollTeam = (direction) => {
    if (teamScrollContainerRef.current) {
      const scrollAmount = 420;
      teamScrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const worklifePillars = [
    {
      id: 'leadership',
      title: 'Leadership',
      left: '13%',
      top: '80%',
      iconType: 'leader',
    },
    {
      id: 'adaptability',
      title: 'Adaptability',
      left: '27.5%',
      top: '38%',
      iconType: 'adaptability',
    },
    {
      id: 'resilience',
      title: 'Resilience',
      left: '50%',
      top: '18%',
      iconType: 'resilience',
    },
    {
      id: 'discipline',
      title: 'Discipline',
      left: '72.5%',
      top: '38%',
      iconType: 'discipline',
    },
    {
      id: 'flexibility',
      title: 'Flexibility',
      left: '87%',
      top: '80%',
      iconType: 'flexibility',
    }
  ];

  const activeWorklifeData = worklifePillars.find(p => p.id === activeWorklifePillar) || worklifePillars[2];

  const renderWorklifeIcon = (type) => {
    switch (type) {
      case 'leader':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-hq-black">
            <line x1="12" y1="2" x2="12" y2="4.5" strokeWidth="2.5" />
            <line x1="6.5" y1="4.5" x2="8" y2="6.5" strokeWidth="2.5" />
            <line x1="17.5" y1="4.5" x2="16" y2="6.5" strokeWidth="2.5" />
            <circle cx="12" cy="11.5" r="3.5" fill="currentColor" />
            <path d="M6 21v-1.5a4.5 4.5 0 0 1 9 0V21" fill="currentColor" />
          </svg>
        );
      case 'adaptability':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-hq-black">
            <line x1="3" y1="10" x2="7" y2="10" strokeWidth="2" />
            <line x1="2" y1="14" x2="6" y2="14" strokeWidth="2" />
            <line x1="4" y1="18" x2="8" y2="18" strokeWidth="2" />
            <circle cx="15" cy="14" r="6.5" strokeWidth="2" />
            <polyline points="15 11 15 14 17.5 15.5" strokeWidth="2" />
            <path d="M13 4.5h4M15 4.5v3" strokeWidth="2" />
          </svg>
        );
      case 'resilience':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-hq-black">
            <path d="M12 21V10" strokeWidth="2.5" />
            <path d="M12 10a4 4 0 0 0-4-4 4 4 0 0 0 0 8 4 4 0 0 0 4-4Z" strokeWidth="2" fill="currentColor" />
            <path d="M12 14a4 4 0 0 1 4-4 4 4 0 0 1 0 8 4 4 0 0 1-4-4Z" strokeWidth="2" fill="currentColor" />
            <path d="M6.5 21c1.8-1.5 3.6-1.5 5.5 0s3.6 1.5 5.5 0" strokeWidth="2.5" />
          </svg>
        );
      case 'discipline':
        return <Brain className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-hq-black stroke-[2]" />;
      case 'flexibility':
        return <Dumbbell className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-hq-black stroke-[2]" />;
      default:
        return <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-hq-black" />;
    }
  };

  const homeTeamMembers = [
    {
      id: 'f-meera',
      name: 'MEERA CHAUHAN',
      category: 'Mindfulness',
      title: 'Director at Tricolite Electrical Industries | Warwick & Yale Fellow',
      areaExpertise: 'Mindfulness & Industrial Relations',
      bio: "Meera Chauhan is a Director with Tricolite Electrical Industries. She has done her Master's Degree in Industrial Relations and Personnel Management from Warwick Business School and also a mid career Fellowship at Yale University",
      image: '/team/meera-chauhan.png'
    },
    {
      id: 'f-bijay',
      name: 'BIJAY ANAND',
      category: 'Kundalini Yoga',
      title: 'Esteemed Kundalini Yoga Instructor & Holistic Wellness Mentor',
      areaExpertise: 'Kundalini Yoga, Ancient Wisdom & Breath Science',
      bio: "Esteemed Kundalini Yoga instructor Bijay Anand fosters holistic wellness, integrating ancient wisdom and contemporary insights for a balanced, transformative practice.",
      image: '/team/bijay-anand.png'
    },
    {
      id: 'f-rajiv',
      name: 'RAJIV GUPTA',
      category: 'Japanese Life lessons',
      title: 'Manufacturing CEO & Author | HBS Alumnus & Ex-VP Honda Cars',
      areaExpertise: 'Japanese Management Philosophy & Corporate Culture',
      bio: 'Mr. Gupta is currently the CEO of a leading manufacturing company. Author of "The Good Indian Employee\'s Guide to Surviving a Lala Company." Ex-VP and National Head of Sales & Marketing at Honda Cars. Alumnus of HBS.',
      image: '/team/rajiv-gupta.png'
    },
    {
      id: 'f-soha',
      name: 'SOHA ALI KHAN',
      category: 'Parenting',
      title: 'Acclaimed Author & Modern Family Mentor | Oxford & LSE Alumna',
      areaExpertise: 'Work-Life Integration & Emotional Intelligence',
      bio: 'Soha Ali Khan, Indian actress from a noble lineage, blends regal charm with cinematic brilliance, symbolizing cultural richness in Bollywood. She also the author to the book "The Perils of being Moderately Famous"',
      image: '/team/soha-ali-khan.png'
    },
    {
      id: 'f-sanjay',
      name: 'SANJAY ARORA',
      category: 'Entrepreneurship Leader',
      title: 'Healthcare Pioneer & Founder of Suburban Diagnostics',
      areaExpertise: 'Diagnostic Innovation, Entrepreneurial Scaling & Patient Care',
      bio: "Dr. Sanjay Arora, healthcare pioneer, founded Suburban Diagnostics, prioritizing precision and patient care. Awards recognize his leadership, innovation, and entrepreneurial excellence.",
      image: '/team/sanjay-arora.png'
    },
    {
      id: 'f-bharati',
      name: 'BHARATI JAISINGH',
      category: 'Well Being Practitioner',
      title: 'Well Being Practitioner & Founder of IDHA',
      areaExpertise: 'Dance & Expressive Movement Therapy',
      bio: "Bharati K. Jaisingh, Well Being Practitioner and founder of IDHA, utilizes dance and expressive arts to foster therapeutic experiences for individuals and communities.",
      image: '/team/bharati-jaisingh.png'
    },
    {
      id: 'f-manny',
      name: 'MANNY ANCHAN',
      category: 'Founder & Chief Happiness Officer',
      title: 'Founder & Chief Happiness Officer | Harvard & Columbia Alum',
      areaExpertise: 'Personal Leadership, Ikigai & Purpose Alignment',
      bio: '25 years in global management at GE Capital, HDFC Bank, ABN AMRO, Barclays, AUB, and FAB. Researched Ikigai, Hygge, Lagom, Sisu, and Gross National Happiness.',
      image: '/team/manny-anchan.png'
    },
    {
      id: 'f-anil',
      name: 'ANIL KUMAR',
      category: 'Personal Leadership',
      title: "Recipient of 'SHAURYA CHAKRA' | LBS & ISB Alumnus",
      areaExpertise: 'Personal Leadership & High-Stakes Resilience',
      bio: "Anil, recipient of 'SHAURYA CHAKRA' award is a former military officer, motivational speaker, leadership expert, and fundraiser for alternative investment funds. Alumnus of London Business School and ISB.",
      image: '/team/anil-kumar.png'
    },
    {
      id: 'f-carolin',
      name: 'CAROLIN NYTRA',
      category: 'Spirituality',
      title: 'Retired German Olympic Hurdler & Holistic Well-Being Advocate',
      areaExpertise: 'Spirituality, Mindset & Cacao Guidance',
      bio: "Carolin Nytra is a retired German Olympic hurdler, now a holistic well-being advocate. Now, a Cacao Priestess, she empowers others through mindset and spiritual guidance.",
      image: '/team/carolin-nytra.png'
    },
    {
      id: 'f-ajay',
      name: 'AJAY SRINIVASAN',
      category: 'Business Leadership',
      title: 'Seasoned Business Leader & Strategic Advisor',
      areaExpertise: 'Enterprise Scaling & Executive Resilience',
      bio: "Ajay Srinivasan is a seasoned business leader with a diverse career, founding and expanding businesses in India and abroad, showcasing leadership across different organizational structures and industries.",
      image: '/team/ajay-srinivasan.png'
    },
    {
      id: 'f-rupinder',
      name: 'RUPINDER SINGH',
      category: 'Sports',
      title: 'Olympic Field Hockey Star & International Champion',
      areaExpertise: 'Athletic Tenacity & Clutch Mindset Under Pressure',
      bio: "Rupinder Pal Singh, born on Nov 11, 1990, in Faridkot, Punjab, is an Indian hockey star known for powerful drag-flicks, international victories, and inspiring young players.",
      image: '/team/rupinder-singh.png'
    },
    {
      id: 'f-parvej',
      name: 'PARVEJ MANTRRI',
      category: 'Fit Panda',
      title: 'Versatile Entertainer & Celebrity Fitness Coach',
      areaExpertise: 'Physical Fitness, Motivation & Creative Energy',
      bio: "Parvej, a versatile entertainer, excels as an actor, host, voice-over artist, and celebrity fitness coach, earning acclaim in various roles.",
      image: '/team/parvej-mantrri.png'
    },
    {
      id: 'f-bhakti',
      name: 'BHAKTI KAPOOR',
      category: 'HealthTech professional',
      title: 'Founder of HEALTHY HIGH & Nutritional Wellness Advisor',
      areaExpertise: 'Clinical Nutrition & Metabolic Vitality',
      bio: "Bhakti is the founder of HEALTHY HIGH a virtual nutrition counselling platform. She is also on the advisory panel for Vitalyse wellness strips and Green Protein.",
      image: '/team/bhakti-kapoor.png'
    }
  ];

  // Active pillar state for "Feel Better Work Better"
  const [activeWellbeingPillar, setActiveWellbeingPillar] = useState('mental');

  // Active pillar for Eudaimonic Transformation
  const [selectedModelPillar, setSelectedModelPillar] = useState(null);

  // Theme & Fixed Back to Top State
  const { isDark } = useTheme();
  const [showSideRails, setShowSideRails] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);

  // Monitor scroll for Back to Top:
  // 1. Appears after scrolling past the 4 reasons section
  // 2. Automatically hides when footer comes into view so it NEVER overlaps in footer
  // 3. Adapts contrast based on current section
  useEffect(() => {
    const handleScroll = () => {
      const reasonsEl = document.getElementById('reasons-section');
      const footerEl = document.getElementById('contact');
      if (!reasonsEl) return;

      const reasonsRect = reasonsEl.getBoundingClientRect();
      const footerRect = footerEl ? footerEl.getBoundingClientRect() : null;

      // Appears after scrolling into 4 reasons section
      const isPastReasons = reasonsRect.top <= window.innerHeight * 0.7;
      // In footer: REMOVE fixed back to top button completely!
      const isBeforeFooter = footerRect ? footerRect.top > window.innerHeight * 0.92 : true;

      if (isPastReasons && isBeforeFooter) {
        setShowSideRails(true);
      } else {
        setShowSideRails(false);
      }

      // Section contrast detection at bottom corner position
      const buttonY = window.innerHeight - 80;
      const sections = [
        { id: 'worklife-section', isDarkSection: true },
        { id: 'team-section', isDarkSection: true },
        { id: 'footprint-section', isDarkSection: true },
        { id: 'books', isDarkSection: true },
        { id: 'reasons-section', isDarkSection: isDark },
        { id: 'key-themes-section', isDarkSection: isDark },
        { id: 'benefits-section', isDarkSection: isDark },
        { id: 'podcast', isDarkSection: isDark },
      ];

      let detectedDark = isDark;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= buttonY && rect.bottom >= buttonY) {
            detectedDark = sec.isDarkSection;
            break;
          }
        }
      }
      setIsDarkBg(detectedDark);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDark]);

  // Section On-Load & Scroll Reveal Animations
  useEffect(() => {
    const revealElements = document.querySelectorAll('.section-reveal');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
        el.classList.add('section-revealed');
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const [interactionFilter, setInteractionFilter] = useState('All');
  const filteredEngagements = (engagements || []).filter(e => interactionFilter === 'All' || e.scope === interactionFilter);

  const wellbeingDetails = {
    mental: {
      title: 'Mental Clarity & Cognitive Ergonomics',
      desc: 'Eliminating cognitive overload and decision fatigue through structured reflection, focus blocks, and neuro-ergonomic working routines.',
      stat: '+34%',
      statLabel: 'Sustained strategic focus'
    },
    emotional: {
      title: 'Emotional Fortitude & Psychological Safety',
      desc: 'Building high trust cultures where leaders manage stress without emotional contagion, fostering innovation without fear of reprisal.',
      stat: '-42%',
      statLabel: 'Executive burnout index'
    },
    social: {
      title: 'Social Cohesion & Shared Purpose',
      desc: 'Transcending siloed departments by grounding collaborative efforts in authentic mutual respect, shared triumphs, and vulnerability.',
      stat: '+28%',
      statLabel: 'Cross-functional speed'
    },
    physical: {
      title: 'Physical Vitality & Somatic Balance',
      desc: 'Optimizing circadian rhythm, posture, stress-resilient breathing, and energy replenishment across demanding global schedules.',
      stat: '-31%',
      statLabel: 'Unplanned corporate sick days'
    },
    financial: {
      title: 'Financial Peace of Mind & Value Stewardship',
      desc: 'De-stigmatizing money conversations, aligning material incentives with personal legacy, and cultivating healthy financial boundaries.',
      stat: '+45%',
      statLabel: 'Long-term talent retention'
    }
  };

  const modelPillars = [
    {
      num: '01',
      title: 'Leadership',
      icon: Crown,
      tag: 'Vision & Stewardship',
      desc: 'Empowers leaders to inspire authentic commitment rather than compliance. Anchored in personal sovereignty and self-awareness.',
      quote: 'True leadership is the capacity to translate vision into reality through shared purpose.'
    },
    {
      num: '02',
      title: 'Adaptability',
      icon: GitMerge,
      tag: 'Agility & Neuroplasticity',
      desc: 'The agility to thrive in volatile, unpredictable market disruptions without organizational paralysis or reactive panic.',
      quote: 'Adaptability is not mere survival; it is the deliberate art of reinvention.'
    },
    {
      num: '03',
      title: 'Resilience',
      icon: Shield,
      tag: 'Stress Recovery & Grit',
      desc: 'The bounce-back capacity to withstand corporate pressures, setbacks, and systemic crises while preserving vitality.',
      quote: 'Resilience turns adversity into high-octane organizational fuel.'
    },
    {
      num: '04',
      title: 'Discipline',
      icon: Target,
      tag: 'Daily Micro-Habits',
      desc: 'Structured daily habits, systematic prioritization, and the elimination of wasteful emotional friction.',
      quote: 'Discipline is the bridge between executive ambition and verified execution.'
    },
    {
      num: '05',
      title: 'Flexibility',
      icon: Move,
      tag: 'Dynamic Cohesion',
      desc: 'Cultivating emotional agility, cognitive openness, and fluid collaboration across diverse generational workforce tiers.',
      quote: 'Flexibility softens rigidity without diluting uncompromising standards.'
    }
  ];

  const corporatePartners = [
    {
      name: 'TATA Motors',
      monogram: (
        <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16 3C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm0 2.4c5.85 0 10.6 4.75 10.6 10.6S21.85 26.6 16 26.6 5.4 21.85 5.4 16 10.15 5.4 16 5.4zm-6.2 5.2c.4 1.8 1.9 6.2 3.8 9.8h4.8c1.9-3.6 3.4-8 3.8-9.8-1.8-.5-4.2-.8-6.2-.8s-4.4.3-6.2.8zm3.6 2.1c.8-.1 1.7-.2 2.6-.2s1.8.1 2.6.2c-.6 1.8-1.5 4.3-2.6 6.5-1.1-2.2-2-4.7-2.6-6.5z" />
        </svg>
      )
    },
    {
      name: 'Barclays',
      monogram: (
        <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5c-.8 0-1.5.7-1.5 1.5 0 .3.1.5.2.7L7 7.5l-4-1 2 4.5-3 2 4.5 1L7 19h10l.5-5 4.5-1-3-2 2-4.5-4 1-3.7-2.8c.1-.2.2-.4.2-.7 0-.8-.7-1.5-1.5-1.5zm0 4.5l2 2.5h-4l2-2.5zm-3 4h6l1.5 3h-9l1.5-3zm.5 4.5h5l.5 2h-6l.5-2z"/>
        </svg>
      )
    },
    {
      name: 'HDFC Life',
      monogram: (
        <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <rect x="2.5" y="2.5" width="19" height="19" rx="2" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <path d="M7 7h10v3h-3.5v4H17v3H7v-3h3.5v-4H7V7z" />
        </svg>
      )
    },
    {
      name: 'Cipla',
      monogram: (
        <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M12 6v12M6 12h12M8 8l8 8M8 16l8-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: 'Harvard Club',
      monogram: (
        <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 5v6c0 5.5 3.5 10.2 8 11 4.5-.8 8-5.5 8-11V5l-8-3zm-3 6h2v3h2V8h2v8h-2v-3h-2v3H9V8z" />
        </svg>
      )
    },
    {
      name: 'IndiGo Airlines',
      monogram: (
        <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="5" cy="16" r="1.5" />
          <circle cx="9" cy="14" r="1.5" />
          <circle cx="13" cy="12" r="1.5" />
          <circle cx="17" cy="10" r="1.5" />
          <circle cx="21" cy="8" r="1.5" />
          <circle cx="9" cy="18" r="1.5" />
          <circle cx="13" cy="16" r="1.5" />
          <circle cx="17" cy="14" r="1.5" />
          <circle cx="13" cy="20" r="1.5" />
          <circle cx="17" cy="18" r="1.5" />
        </svg>
      )
    },
    {
      name: 'HDFC ERGO',
      monogram: (
        <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <rect x="2.5" y="2.5" width="19" height="19" rx="2" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <path d="M7 7h10v3h-3.5v4H17v3H7v-3h3.5v-4H7V7z" />
        </svg>
      )
    },
    {
      name: 'Absa Bank',
      monogram: (
        <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="800" fontFamily="sans-serif" fill="currentColor">a</text>
        </svg>
      )
    },
    {
      name: 'Ageas Federal',
      monogram: (
        <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.5 6.5L21 11l-5.5 4.5L17 22l-5-3.5L7 22l1.5-6.5L3 11l6.5-2.5L12 2z" />
        </svg>
      )
    },
    {
      name: 'Burns & McDonnell',
      monogram: (
        <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2.5" y="2.5" width="19" height="19" rx="3" />
          <path d="M7 7h4a2 2 0 010 4H7v6h5a2.5 2.5 0 000-5H7M15 7l2 5 2-5v10" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: 'Shardul Amarchand',
      monogram: (
        <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3v18M6 8h12M4 14l2-6 2 6a2 2 0 01-4 0zm12 0l2-6 2 6a2 2 0 01-4 0zM9 21h6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: 'Tricolite',
      monogram: (
        <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 20h20L12 2zm0 4.5L18.5 18H5.5L12 6.5zm-1 4.5v3.5h2V11h-2zm0 4.5v1.5h2v-1.5h-2z" />
        </svg>
      )
    },
    {
      name: 'TATA AIG',
      monogram: (
        <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16 3C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3zm0 2.4c5.85 0 10.6 4.75 10.6 10.6S21.85 26.6 16 26.6 5.4 21.85 5.4 16 10.15 5.4 16 5.4zm-6.2 5.2c.4 1.8 1.9 6.2 3.8 9.8h4.8c1.9-3.6 3.4-8 3.8-9.8-1.8-.5-4.2-.8-6.2-.8s-4.4.3-6.2.8zm3.6 2.1c.8-.1 1.7-.2 2.6-.2s1.8.1 2.6.2c-.6 1.8-1.5 4.3-2.6 6.5-1.1-2.2-2-4.7-2.6-6.5z" />
        </svg>
      )
    },
    {
      name: 'GE Capital',
      monogram: (
        <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M9.5 8.5C8 9.5 7.5 11 7.5 12.5c0 2 1.5 3.5 3.5 3.5 1.5 0 2.5-.8 3-1.8h-2.5v-1.2h4v.5c0 2.5-2 3.8-4.5 3.8-3 0-4.8-2-4.8-4.8 0-2.5 1.8-4.5 4.5-4.5 1.2 0 2.2.4 2.8 1l-.9.9c-.5-.5-1.1-.7-1.9-.7zm4 0h3.5v1.3H15v1.8h1.8v1.3H15v2h2.2v1.3h-3.7V8.5z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-hq-white dark:bg-[#07080B] text-hq-black dark:text-white transition-colors duration-200 relative">
      {/* FIXED BACK TO TOP WITH 1.5PX LONG-TAIL ARROW (POSITIONED AT BOTTOM-RIGHT TO PREVENT OVERLAPPING SECTION CONTENT, COMPLETELY REMOVED IN FOOTER) */}
      <div 
        className={`fixed right-4 sm:right-6 lg:right-8 bottom-8 z-40 hidden md:flex flex-col items-center gap-2 transition-all duration-300 pointer-events-auto select-none ${
          showSideRails ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`group flex flex-col items-center gap-2 transition-all duration-300 hover:-translate-y-1 p-2 cursor-pointer bg-transparent border-none shadow-none ${
            isDarkBg ? 'text-white hover:text-hq-yellow' : 'text-[#0A0A0A] hover:text-hq-yellow'
          }`}
          aria-label="Back to top"
          title="Back to top"
        >
          {/* Long tail 1.5px arrow pointing upside */}
          <svg 
            width="14" 
            height="46" 
            viewBox="0 0 14 46" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:-translate-y-1.5 flex-shrink-0"
          >
            {/* Long 1.5px stem pointing straight down from arrow tip */}
            <line 
              x1="7" 
              y1="4" 
              x2="7" 
              y2="44" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
            />
            {/* 1.5px arrow head pointing upwards */}
            <polyline 
              points="2,11 7,3 12,11" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>

          {/* Vertical text: Back to top */}
          <span 
            className="font-display uppercase text-[10px] tracking-[0.25em] font-bold select-none group-hover:text-hq-yellow transition-colors duration-300"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Back to top
          </span>
        </button>
      </div>

      {/* 1. LUXURY EDITORIAL HERO SECTION (INSPIRED BY REFERENCE) */}
      <header className="relative w-full min-h-screen min-h-[820px] lg:h-[96vh] flex flex-col justify-end pb-12 overflow-hidden bg-[#111213]">
        {/* Ambient Warm Studio Lighting Behind Manny (With Onload Glow Animation) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[44%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] md:w-[900px] h-[450px] md:h-[650px] bg-hq-yellow/[0.08] rounded-full blur-[130px] animate-hero-glow"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#161719]/40 via-transparent to-[#0A0A0A]"></div>
        </div>

        {/* GIANT MONUMENTAL TYPOGRAPHY LAYER: "MANNY" & "ANCHAN" (MOVED 15% DOWN BELOW NAVIGATION, FRAMING CUTOUT) */}
        <div className="absolute inset-x-0 top-[41%] sm:top-[42%] md:top-[43%] -translate-y-1/2 z-10 px-6 sm:px-10 md:px-14 lg:px-20 pointer-events-none select-none max-w-[1550px] mx-auto animate-hero-name">
          {/* Accessible H1 for SEO */}
          <h1 className="sr-only">Manny Anchan - The Happiness Samurai</h1>
          
          <div className="w-full flex justify-between items-center">
            {/* MANNY (Brought 10% closer to center) */}
            <span 
              className="font-semibold tracking-tight select-none text-[#FFEFD6] drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)] inline-block translate-x-2 sm:translate-x-4 md:translate-x-7"
              style={{
                fontFamily: '"Bebas Neue", "Anton", "Oswald", sans-serif',
                fontSize: 'clamp(4.2rem, 14vw, 14.5rem)',
                lineHeight: 0.88,
                transform: 'scaleY(1.08)',
                transformOrigin: 'bottom left',
                WebkitTextStroke: '0.4px #FFEFD6',
                letterSpacing: '0.02em'
              }}
            >
              MANNY
            </span>

            {/* ANCHAN (Brought 10% closer to center) */}
            <span 
              className="font-semibold tracking-tight select-none text-[#FFEFD6] drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)] inline-block -translate-x-2 sm:-translate-x-4 md:-translate-x-7"
              style={{
                fontFamily: '"Bebas Neue", "Anton", "Oswald", sans-serif',
                fontSize: 'clamp(4.2rem, 14vw, 14.5rem)',
                lineHeight: 0.88,
                transform: 'scaleY(1.08)',
                transformOrigin: 'bottom right',
                WebkitTextStroke: '0.4px #FFEFD6',
                letterSpacing: '0.02em'
              }}
            >
              ANCHAN
            </span>
          </div>
        </div>

        {/* FOREGROUND FULL-SIZE MANNY ANCHAN CUTOUT (ONLOAD 3D DEPTH RISE) */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex justify-center pointer-events-none animate-hero-manny">
          <img 
            src="/manny-cutout.png" 
            alt="Manny Anchan - The Happiness Samurai" 
            className="h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[86vh] max-h-[850px] w-auto object-contain object-bottom filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] transition-transform duration-700" 
          />
        </div>

        {/* BOTTOM EDITORIAL CONTENT (LEFT & RIGHT OF MANNY'S TORSO - CLEANLY BELOW GIANT LETTERS) */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end gap-8">
          {/* Left Column: Core Message & Primary CTA (Onload Reveal) */}
          <div className="w-full md:w-5/12 lg:w-4/12 flex flex-col items-start text-left animate-hero-left">
            <h2 className="font-prata text-xl sm:text-2xl lg:text-[1.76rem] text-[#F3EFEA] font-normal leading-snug mb-3 tracking-wide" style={{ fontFamily: '"Prata", serif' }}>
              Feel Better. Work Better. Live Better.
            </h2>
            <p className="font-body text-white/70 text-xs sm:text-sm leading-relaxed mb-6 font-light max-w-sm">
              Enterprise well-being and peak performance interventions designed to eradicate executive burnout, instill psychological safety, and drive measurable organizational happiness.
            </p>
            
            <Link 
              to="#key-themes-section" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('key-themes-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center justify-between gap-6 py-3.5 px-1 font-display font-medium text-xs tracking-widest text-white hover:text-hq-yellow transition-colors duration-300"
            >
              {/* Top border line: 1.25px, white by default, on hover width decreases to 20% at right edge and turns theme yellow */}
              <span className="absolute top-0 right-0 w-full group-hover:w-1/5 group-hover:w-[20%] h-[1.25px] bg-white group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none"></span>

              <span className="relative z-10">Explore Interventions</span>

              <svg 
                className="w-[20px] h-[10px] inline-block transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" 
                viewBox="0 0 20 10" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="0" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="1" />
                <polyline points="15 1, 20 5, 15 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Bottom border line: 1.25px, white by default, on hover width decreases to 20% at right edge and turns theme yellow */}
              <span className="absolute bottom-0 right-0 w-full group-hover:w-1/5 group-hover:w-[20%] h-[1.25px] bg-white group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none"></span>
            </Link>
          </div>

          {/* Right Column: Credentials & Secondary CTA (Onload Reveal) */}
          <div className="w-full md:w-5/12 lg:w-4/12 flex flex-col items-start md:items-end text-left md:text-right animate-hero-right">
            <div className="font-display text-white text-base sm:text-lg font-normal mb-2">
              25+ Years Corporate Stewardship
            </div>
            <p className="font-body text-white/70 text-xs sm:text-sm leading-relaxed mb-5 font-light max-w-xs">
              Harvard & Columbia alum. Former executive at GE Capital, HDFC, Barclays & ABN AMRO. Trusted across 16 states & 9 countries.
            </p>
            
            <Link 
              to="#team-section" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('team-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex items-center justify-between gap-6 py-3.5 px-1 font-display text-xs tracking-widest text-white hover:text-hq-yellow transition-colors duration-300"
            >
              {/* Top border line: 1.25px, white by default, on hover width decreases to 20% at right edge and turns theme yellow */}
              <span className="absolute top-0 right-0 w-full group-hover:w-1/5 group-hover:w-[20%] h-[1.25px] bg-white group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none"></span>

              <span className="relative z-10">Know more</span>

              <svg 
                className="w-[20px] h-[10px] inline-block transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" 
                viewBox="0 0 20 10" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="0" y1="5" x2="20" y2="5" stroke="currentColor" strokeWidth="1" />
                <polyline points="15 1, 20 5, 15 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              {/* Bottom border line: 1.25px, white by default, on hover width decreases to 20% at right edge and turns theme yellow */}
              <span className="absolute bottom-0 right-0 w-full group-hover:w-1/5 group-hover:w-[20%] h-[1.25px] bg-white group-hover:bg-hq-yellow transition-all duration-300 ease-out pointer-events-none"></span>
            </Link>
          </div>
        </div>
      </header>

      {/* 2. DYNAMIC CORPORATE PARTNERS INFINITE MARQUEE WITH MONOGRAM & TEXT LOGO OF IDENTICAL UNIFORM SIZE */}
      <div className="w-full bg-hq-yellow py-5 overflow-hidden relative shadow-inner text-[#0A0A0A] dark:text-[#0A0A0A]">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-hq-yellow to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-hq-yellow to-transparent z-10 pointer-events-none"></div>
        
        <div className="marquee-partners-track animate-marquee whitespace-nowrap inline-flex gap-10 md:gap-14 items-center px-4 select-none text-[#0A0A0A] dark:text-[#0A0A0A]">
          {[...corporatePartners, ...corporatePartners].map((partner, idx) => (
            <div key={idx} className="inline-flex items-center gap-2.5 h-8 flex-shrink-0 group text-[#0A0A0A] dark:text-[#0A0A0A]">
              <span className="flex items-center justify-center text-[#0A0A0A] dark:text-[#0A0A0A] group-hover:scale-110 transition-transform duration-200">
                {partner.monogram}
              </span>
              <span className="font-display uppercase tracking-widest text-[#0A0A0A] dark:text-[#0A0A0A] font-bold text-xs sm:text-sm md:text-base leading-none whitespace-nowrap">
                {partner.name}
              </span>
              <span className="marquee-partners-dot ml-8 md:ml-10 text-[#0A0A0A]/40 dark:text-[#0A0A0A]/40 font-light">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. 4 REASONS WHY MANNY WILL MAKE YOUR EMPLOYEE PRODUCTIVE */}
      <section id="reasons-section" className="section-reveal py-20 lg:py-24 bg-hq-white dark:bg-[#07080B] border-b border-hq-black/10 dark:border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header - Zero bottom margin to remove excessive vertical gap */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-0 pb-6 border-b border-hq-black/15 dark:border-white/15">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-hq-black dark:text-white leading-[1.1]">
                4 reason why Manny will make your Employee Productive
              </h2>
            </div>
            <div className="lg:text-right">
              <p className="font-serif italic text-2xl md:text-3xl text-hq-black/85 dark:text-white/85 leading-tight">
                "Hands-on. Immersive. <br className="hidden lg:inline" />Experiential. Disciplined."
              </p>
            </div>
          </div>

          {/* Architectural 1px Line Rows (Open, Unboxed Editorial Style - Gap Removed) */}
          <div>
            {wellbeingPillars.map((p, idx) => (
              <div 
                key={idx} 
                className="group py-6 md:py-7 border-b border-hq-black/15 dark:border-white/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-16 hover:bg-hq-gray/40 dark:hover:bg-white/[0.02] px-4 md:px-8 -mx-4 md:-mx-8 transition-colors duration-300"
              >
                {/* Number & Title (Font Size 20% Smaller) */}
                <div className="flex items-start sm:items-center gap-6 md:gap-10 w-full lg:w-5/12">
                  <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-hq-black/25 dark:text-white/25 group-hover:text-hq-yellow font-normal transition-colors shrink-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl md:text-2xl lg:text-[27px] tracking-tight font-semibold text-hq-black dark:text-white group-hover:translate-x-2 transition-transform duration-300">
                      {p.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="w-full lg:w-6/12 font-body text-xs sm:text-sm md:text-[15px] text-hq-black/75 dark:text-white/70 font-light leading-relaxed">
                  {p.desc}
                </div>

                {/* Subtle Indicator */}
                <div className="w-full lg:w-1/12 flex lg:justify-end text-xs font-mono uppercase text-hq-black/40 dark:text-white/40 group-hover:text-hq-black dark:group-hover:text-white font-semibold transition-colors">
                  <span className="hidden lg:inline-block group-hover:translate-x-1.5 transition-transform text-lg">
                    <LongArrow />
                  </span>
                  <span className="lg:hidden inline-flex items-center gap-1.5 text-[11px] text-hq-black/60 dark:text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-hq-yellow inline-block"></span>
                    Verified Metric
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Accent Note */}
          <div className="pt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono text-hq-black/50 dark:text-white/50">
            <span>Clinical & Corporate Productivity Benchmarks • Page 3 Profile Integration</span>
            <Link 
              to="#worklife-section" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('worklife-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-display font-semibold uppercase tracking-wider text-hq-black dark:text-white hover:text-hq-yellow transition-colors flex items-center gap-1.5"
            >
              <span>Explore The 5-Pillar Ethos Model</span>
              <LongArrow />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. BALANCE WITHIN WORKLIFE (AESTHETIC ARCHED HORIZON SECTION - FIT TO SCREEN & BOTTOM ATTACHED) */}
      <section id="worklife-section" className="section-reveal relative bg-[#000000] text-hq-white min-h-screen min-h-[660px] lg:h-screen flex flex-col justify-between pt-14 sm:pt-16 md:pt-20 pb-0 overflow-hidden border-b border-white/10 select-none">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-hq-yellow/[0.08] rounded-full blur-[140px]"></div>
        </div>

        {/* Top Header Text (Single Tone - No Dual Tone) */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full text-center relative z-10 pt-2 sm:pt-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-semibold tracking-tight text-white mb-4 sm:mb-5">
              BALANCE WITHIN WORKLIFE
            </h2>
            <p className="font-body text-xs sm:text-sm md:text-base text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Perpetual employee evolution is a comprehensive notion that acknowledges the interrelation between various facets of an employee's life within a corporate setting. Here are pivotal elements contributing to employee well-being:
            </p>
          </div>
        </div>

        {/* Semicircular Arched Orbit Horizon Container Attached to Bottom */}
        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 aspect-[16/8] sm:aspect-[16/7.5] md:aspect-[16/7] flex items-end justify-center mt-auto overflow-hidden">
          {/* SVG Arc and Concentric Glowing Horizon Layers */}
          <svg 
            viewBox="0 0 1000 500" 
            className="absolute inset-0 w-full h-full overflow-visible select-none pointer-events-none"
            preserveAspectRatio="xMidYMax meet"
          >
            <defs>
              <radialGradient id="horizonGlow1" cx="50%" cy="100%" r="90%">
                <stop offset="0%" stopColor="#E5A93C" stopOpacity="0.35" />
                <stop offset="40%" stopColor="#9C731A" stopOpacity="0.20" />
                <stop offset="75%" stopColor="#4A380A" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="horizonGlow2" cx="50%" cy="100%" r="65%">
                <stop offset="0%" stopColor="#FFD15C" stopOpacity="0.50" />
                <stop offset="45%" stopColor="#B3861E" stopOpacity="0.26" />
                <stop offset="85%" stopColor="#4A380A" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="horizonCore" cx="50%" cy="100%" r="42%">
                <stop offset="0%" stopColor="#FFC72C" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#B3861E" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="cleanArcShine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E5A93C" stopOpacity="0.6" />
                <stop offset="25%" stopColor="#FFD15C" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="75%" stopColor="#FFD15C" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#E5A93C" stopOpacity="0.6" />
              </linearGradient>
            </defs>

            {/* Concentric Horizon Semicircles touching baseline y=500 */}
            <path d="M 40 500 A 460 410 0 0 1 960 500 Z" fill="url(#horizonGlow1)" />
            <path d="M 140 500 A 360 320 0 0 1 860 500 Z" fill="url(#horizonGlow2)" />
            <path d="M 260 500 A 240 200 0 0 1 740 500 Z" fill="url(#horizonCore)" />

            {/* Connecting arc curve line - Clean metallic shine without outer glow or rotation */}
            <path 
              d="M 80 500 A 430 380 0 0 1 920 500" 
              fill="none" 
              stroke="rgba(255, 255, 255, 0.28)" 
              strokeWidth="1.75" 
              strokeLinecap="round" 
            />
            <path 
              d="M 80 500 A 430 380 0 0 1 920 500" 
              fill="none" 
              stroke="url(#cleanArcShine)" 
              strokeWidth="2" 
              strokeLinecap="round" 
              className="animate-line-clean-shine" 
            />

            {/* Subtle outer dashed orbit track */}
            <path 
              d="M 50 500 A 460 410 0 0 1 950 500" 
              fill="none" 
              stroke="rgba(229, 169, 60, 0.22)" 
              strokeWidth="1" 
              strokeDasharray="4 6" 
            />
          </svg>

          {/* 5 Positioned Circular Nodes with Labels */}
          {worklifePillars.map((pillar) => {
            const isActive = activeWorklifePillar === pillar.id;
            return (
              <div
                key={pillar.id}
                style={{ left: pillar.left, top: pillar.top }}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer z-20"
                onMouseEnter={() => setActiveWorklifePillar(pillar.id)}
                onClick={() => setActiveWorklifePillar(pillar.id)}
              >
                {/* Label above badge */}
                <span 
                  className={`font-display text-xs sm:text-sm md:text-base font-semibold tracking-wide mb-2 sm:mb-3 transition-all duration-300 select-none whitespace-nowrap ${
                    isActive 
                      ? 'text-hq-yellow scale-105 drop-shadow-[0_0_14px_rgba(255,199,44,0.7)] font-bold' 
                      : 'text-white/90 group-hover:text-hq-yellow'
                  }`}
                >
                  {pillar.title}
                </span>

                {/* Circular Yellow Badge */}
                <div 
                  className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-hq-yellow text-hq-black flex items-center justify-center transition-all duration-300 relative ${
                    isActive 
                      ? 'scale-110 shadow-[0_0_35px_rgba(255,204,0,0.85)] ring-4 ring-hq-yellow/40' 
                      : 'shadow-[0_0_20px_rgba(255,204,0,0.35)] group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(255,204,0,0.6)]'
                  }`}
                >
                  {renderWorklifeIcon(pillar.iconType)}

                  {/* Subtle pulse wave on active */}
                  {isActive && (
                    <span className="absolute inset-0 rounded-full border-2 border-hq-yellow animate-ping opacity-30 pointer-events-none"></span>
                  )}
                </div>
              </div>
            );
          })}

          {/* Bottom baseline touch line */}
          <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-hq-yellow/60 to-transparent pointer-events-none"></div>
        </div>
      </section>


      {/* 5. THE 12 KEY THEMES (FIT-TO-SCREEN WITH 2-THEME SCROLL / NEXT-PREV ARROWS) */}
      <section 
        id="key-themes-section" 
        ref={keyThemesSectionRef} 
        className="section-reveal py-12 lg:py-0 bg-white dark:bg-[#07080B] border-b border-hq-black/10 dark:border-white/10 relative overflow-hidden lg:h-screen lg:max-h-[950px] lg:min-h-[700px] flex items-center"
      >
        
        {/* Ambient curved divider path background */}
        <div className="absolute inset-0 pointer-events-none hidden lg:flex items-center justify-center opacity-25 dark:opacity-20 z-0">
          <svg 
            viewBox="0 0 96 1762" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-full w-auto max-w-none text-hq-yellow/40 dark:text-hq-yellow/30"
            style={{
              maskImage: 'linear-gradient(180deg, transparent 5%, #000 25%, #000 75%, transparent 95%)',
              WebkitMaskImage: 'linear-gradient(180deg, transparent 5%, #000 25%, #000 75%, transparent 95%)'
            }}
          >
            <path 
              d="M95.5 1762V726.469C95.5 691.615 77.6743 659.182 48.25 640.5C18.8257 621.818 0.999998 589.385 1 554.531L1.00002 0" 
              stroke="currentColor" 
              strokeWidth="2" 
              className="text-hq-yellow blur-[2px]"
            />
            <path 
              d="M95.5 1762V726.469C95.5 691.615 77.6743 659.182 48.25 640.5C18.8257 621.818 0.999998 589.385 1 554.531L1.00002 0" 
              stroke="currentColor" 
              strokeWidth="1" 
              className="text-hq-black/15 dark:text-white/15"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: Section Anchor with Monumental "12 Key Theme" */}
            <div className="lg:col-span-5">
              <div className="space-y-6 sm:space-y-8">

                {/* Monumental "12 Key Theme" Display (12 in black color, not gradient) */}
                <div className="select-none">
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="font-display text-[100px] sm:text-[135px] lg:text-[155px] font-black leading-[0.8] tracking-tighter text-black dark:text-white drop-shadow-sm">
                      12
                    </span>
                    <div className="flex flex-col justify-end pb-3">
                      <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-black dark:text-white leading-none">
                        Key
                      </span>
                      <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-hq-yellow leading-none mt-1">
                        Theme
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-hq-black/50 dark:text-white/50 mt-2 font-semibold">
                        Systemic Well-Being
                      </span>
                    </div>
                  </div>

                  {/* Description placed directly under 12 Key Theme heading */}
                  <p className="font-body text-[16px] font-[400] text-hq-black/75 dark:text-white/70 leading-relaxed mt-4 max-w-md">
                    Through the seamless integration of our 12 Key Themes, we cultivate executive endurance, emotional equilibrium, and measurable enterprise thriving.
                  </p>
                </div>

                {/* Section Action CTA Button */}
                <div className="pt-2">
                  <Link
                    to="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-3 bg-hq-black text-white dark:bg-white dark:text-black dark:hover:bg-hq-yellow dark:hover:text-black font-display text-xs uppercase tracking-widest px-7 py-3.5 rounded-full hover:bg-hq-yellow hover:text-hq-black transition-all font-semibold shadow-lg group"
                  >
                    <span>Book Modular Workshop Track</span>
                    <LongArrow className="group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Exactly 2 Themes rendered at the same place + Long Arrow Nav */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              {/* Dynamic 2-Theme display container with smooth fade transition */}
              <div 
                key={currentPairIdx} 
                className="space-y-4 sm:space-y-6 transition-all duration-400 ease-out"
              >
                {/* 1st Theme of the Active Pair */}
                {keyThemes[currentPairIdx * 2] && (
                  <div className="relative py-5 sm:py-6 border-t border-hq-black/10 dark:border-white/10 group">
                    {/* Title & Numbering Header (No dot, 2rem Google Sans number) */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3.5 sm:gap-4 flex-wrap">
                        {/* Numbering: 2rem Google Sans */}
                        <span 
                          className="text-[2rem] font-bold text-hq-yellow shrink-0 leading-none"
                          style={{ fontFamily: '"Google Sans", "Product Sans", sans-serif' }}
                        >
                          {String(currentPairIdx * 2 + 1).padStart(2, '0')}.
                        </span>

                        {/* Theme Name */}
                        <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-hq-black dark:text-white">
                          {keyThemes[currentPairIdx * 2].title}
                        </h3>
                      </div>

                      {/* Lucide Icon */}
                      <div className="p-2 rounded-xl text-hq-black dark:text-white bg-hq-yellow/15 scale-110 shrink-0">
                        {themeIcons[keyThemes[currentPairIdx * 2].id] || <Sparkles className="w-5 h-5 stroke-[1.8]" />}
                      </div>
                    </div>

                    {/* Open Description (16px, weight 400) */}
                    <div className="mt-3.5 max-w-2xl">
                      <p className="font-body text-[16px] font-[400] text-hq-black/75 dark:text-white/70 leading-relaxed">
                        {keyThemes[currentPairIdx * 2].desc}
                      </p>

                      <div className="mt-3.5">
                        <Link
                          to="#contact"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider font-semibold text-hq-black dark:text-white hover:text-hq-yellow transition-all group/btn"
                        >
                          <span>Explore Intervention Track</span>
                          <LongArrow className="text-hq-yellow group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2nd Theme of the Active Pair */}
                {keyThemes[currentPairIdx * 2 + 1] && (
                  <div className="relative py-5 sm:py-6 border-t border-hq-black/10 dark:border-white/10 group">
                    {/* Header (No dot, 2rem Google Sans number) */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3.5 sm:gap-4 flex-wrap">
                        {/* Numbering: 2rem Google Sans */}
                        <span 
                          className="text-[2rem] font-bold text-hq-yellow shrink-0 leading-none"
                          style={{ fontFamily: '"Google Sans", "Product Sans", sans-serif' }}
                        >
                          {String(currentPairIdx * 2 + 2).padStart(2, '0')}.
                        </span>

                        {/* Theme Name */}
                        <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-hq-black/90 dark:text-white/90 group-hover:text-hq-black dark:group-hover:text-white transition-colors">
                          {keyThemes[currentPairIdx * 2 + 1].title}
                        </h3>
                      </div>

                      {/* Lucide Icon */}
                      <div className="p-2 rounded-xl text-hq-black/40 dark:text-white/40 group-hover:text-hq-black dark:group-hover:text-white group-hover:bg-hq-yellow/15 transition-all shrink-0">
                        {themeIcons[keyThemes[currentPairIdx * 2 + 1].id] || <Sparkles className="w-5 h-5 stroke-[1.8]" />}
                      </div>
                    </div>

                    {/* Open Description (16px, weight 400) */}
                    <div className="mt-3.5 max-w-2xl">
                      <p className="font-body text-[16px] font-[400] text-hq-black/75 dark:text-white/70 leading-relaxed">
                        {keyThemes[currentPairIdx * 2 + 1].desc}
                      </p>

                      <div className="mt-3.5">
                        <Link
                          to="#contact"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider font-semibold text-hq-black dark:text-white hover:text-hq-yellow transition-all group/btn"
                        >
                          <span>Explore Intervention Track</span>
                          <LongArrow className="text-hq-yellow group-hover/btn:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Next / Prev Navigation with Long Arrow Icons */}
              <div className="mt-6 pt-5 border-t border-hq-black/10 dark:border-white/10 flex items-center justify-between">
                
                {/* Prev Button with Long Arrow Icon */}
                <button
                  type="button"
                  onClick={() => setCurrentPairIdx(p => Math.max(p - 1, 0))}
                  disabled={currentPairIdx === 0}
                  className={`inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest font-semibold transition-all group py-2 select-none ${
                    currentPairIdx === 0 
                      ? 'opacity-20 cursor-not-allowed text-hq-black/40 dark:text-white/40' 
                      : 'text-hq-black dark:text-white hover:text-hq-yellow cursor-pointer'
                  }`}
                  aria-label="Previous 2 Themes"
                >
                  <LongArrow direction="left" className="group-hover:-translate-x-1" />
                  <span>Prev</span>
                </button>

                {/* Current Pair Tracker */}
                <div className="flex items-center gap-2 font-mono text-xs select-none">
                  <span className="uppercase tracking-[0.2em] font-bold text-hq-yellow">
                    {String(currentPairIdx * 2 + 1).padStart(2, '0')}&ndash;{String(currentPairIdx * 2 + 2).padStart(2, '0')}
                  </span>
                  <span className="text-hq-black/40 dark:text-white/40">/ 12</span>
                </div>

                {/* Next Button with Long Arrow Icon */}
                <button
                  type="button"
                  onClick={() => setCurrentPairIdx(p => Math.min(p + 1, 5))}
                  disabled={currentPairIdx === 5}
                  className={`inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest font-semibold transition-all group py-2 select-none ${
                    currentPairIdx === 5 
                      ? 'opacity-20 cursor-not-allowed text-hq-black/40 dark:text-white/40' 
                      : 'text-hq-black dark:text-white hover:text-hq-yellow cursor-pointer'
                  }`}
                  aria-label="Next 2 Themes"
                >
                  <span>Next</span>
                  <LongArrow direction="right" className="group-hover:translate-x-1" />
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. OUR TEAM (HORIZONTAL EDITORIAL SCROLLER) */}
      <section id="team-section" className="section-reveal py-24 bg-[#0A0A0A] text-hq-white border-b border-white/10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-white mb-2 leading-[1.1]">
              Our <span className="text-hq-yellow">Team</span>
            </h2>
            <p className="font-body text-[16px] text-white/70 font-light max-w-xl">
              World champions, Olympic medalists, seasoned business leaders, and renowned wellness authorities collaborating to cultivate enterprise potential.
            </p>
          </div>

          {/* Left/Right manual scroll controls & View All */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTeam('left')}
              className="p-3 rounded-full border border-white/20 text-white hover:bg-hq-yellow hover:text-hq-black hover:border-hq-yellow transition-all duration-200"
              aria-label="Scroll left"
            >
              <LongArrow direction="left" />
            </button>
            <button
              onClick={() => scrollTeam('right')}
              className="p-3 rounded-full border border-white/20 text-white hover:bg-hq-yellow hover:text-hq-black hover:border-hq-yellow transition-all duration-200"
              aria-label="Scroll right"
            >
              <LongArrow direction="right" />
            </button>
            <Link
              to="#team-section"
              className="ml-2 font-display text-xs uppercase tracking-widest font-semibold text-white/80 hover:text-hq-yellow transition-colors underline underline-offset-4"
            >
              VIEW ALL
            </Link>
          </div>
        </div>

        {/* Horizontal Scrolling Track - Auto Slider with Mouse Drag and Scroll */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div 
            ref={teamScrollContainerRef}
            onMouseEnter={() => setIsTeamHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={() => setIsTeamHovered(true)}
            onTouchEnd={() => setIsTeamHovered(false)}
            className={`flex gap-8 sm:gap-12 md:gap-16 overflow-x-auto no-scrollbar py-4 select-none ${
              isMouseDown ? 'cursor-grabbing scroll-auto' : 'cursor-grab scroll-smooth'
            }`}
            style={{ userSelect: 'none' }}
          >
            {homeTeamMembers.map((member) => (
              <div 
                key={member.id}
                className="flex items-center gap-5 sm:gap-6 flex-shrink-0 group cursor-pointer select-none"
                onClick={() => {
                  if (!hasDragged) {
                    setSelectedTeamMember(member);
                  }
                }}
              >
                {/* Member Image (Square/Editorial with color by default, radius: 3px) */}
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-[3px] bg-neutral-900 overflow-hidden flex-shrink-0 border border-white/10 group-hover:border-hq-yellow transition-colors pointer-events-none">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    draggable="false"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500 pointer-events-none select-none rounded-[3px]" 
                  />
                </div>

                {/* Member Details */}
                <div className="flex flex-col justify-center text-left max-w-[220px] sm:max-w-[260px] md:max-w-[290px] select-none">
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl font-medium font-[500] uppercase tracking-tight text-white mb-1 group-hover:text-hq-yellow transition-colors leading-tight">
                    {member.name}
                  </h3>
                  <div className="text-[16px] font-body text-white/70 font-light leading-snug mb-1 line-clamp-2">
                    {member.title}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-hq-yellow uppercase tracking-wider mb-3 line-clamp-1">
                    {member.areaExpertise || member.category}
                  </div>
                  
                  {/* Know More Option with Arrow & Underline matching previous design */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!hasDragged) {
                        setSelectedTeamMember(member);
                      }
                    }}
                    className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-widest font-bold text-white group-hover:text-hq-yellow transition-colors pb-0.5 border-b border-white group-hover:border-hq-yellow w-fit mt-1"
                  >
                    <span>KNOW MORE</span>
                    <LongArrow className="group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BENEFITS & IMPORTANCE OF ENGAGEMENT (STYLED WITH ASYMMETRIC 2-COLUMN PLACEMENT & LITE BG) */}
      <section id="benefits-section" className="section-reveal py-20 lg:py-28 bg-[#FAF7F2] dark:bg-[#0D0E12] border-b border-hq-black/10 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 lg:items-center">
            
            {/* Left Column: Heading, Subtitle & Pill Button (Vertically Centered) */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-hq-black dark:text-white leading-[1.1] mb-4">
                Benefits of <br className="hidden sm:inline" />
                <span className="text-hq-yellow">Engagement</span>
              </h2>

              <p className="font-body text-[16px] font-[400] text-hq-black/75 dark:text-white/70 leading-relaxed mb-8 max-w-md">
                The compounding power of immersive, experiential learning.
              </p>

              <div>
                <Link
                  to="#key-themes-section"
                  className="inline-flex items-center gap-3 bg-[#1E2024] text-white hover:bg-hq-yellow hover:text-hq-black dark:bg-white dark:text-black dark:hover:bg-hq-yellow dark:hover:text-black font-display text-xs uppercase tracking-widest font-semibold px-8 py-3.5 rounded-full transition-all shadow-md group"
                >
                  <span>Explore Interventions</span>
                  <LongArrow className="group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: 2 Parallel Columns of Benefits (Normal Case, Font Weight 400, +20% font size 19.2px, 20px x 1.5px Line Bullet) */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 sm:gap-y-6">
                
                {/* Column 1 */}
                <div className="space-y-4 sm:space-y-5">
                  {engagementBenefits.slice(0, 5).map((benefit, idx) => (
                    <div 
                      key={idx}
                      className="group flex items-center gap-3.5 cursor-default select-none py-1 sm:py-1.5"
                    >
                      <span className="w-[20px] h-[1.5px] bg-hq-yellow shrink-0 group-hover:w-[26px] transition-all duration-200 rounded-full" />
                      <span className="font-body text-[19.2px] font-[400] text-hq-black/85 dark:text-white/85 group-hover:text-hq-black dark:group-hover:text-white transition-colors leading-normal">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-4 sm:space-y-5">
                  {engagementBenefits.slice(5, 10).map((benefit, idx) => (
                    <div 
                      key={idx}
                      className="group flex items-center gap-3.5 cursor-default select-none py-1 sm:py-1.5"
                    >
                      <span className="w-[20px] h-[1.5px] bg-hq-yellow shrink-0 group-hover:w-[26px] transition-all duration-200 rounded-full" />
                      <span className="font-body text-[19.2px] font-[400] text-hq-black/85 dark:text-white/85 group-hover:text-hq-black dark:group-hover:text-white transition-colors leading-normal">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. NATIONWIDE & GLOBAL FOOTPRINT (COMPLETE DARK MODE - FIT TO SCREEN WITH RIGHT-ALIGNED GLOBE) */}
      <section id="footprint-section" className="section-reveal bg-[#07080B] text-white overflow-hidden relative lg:h-screen lg:min-h-[700px] lg:max-h-[950px] flex items-center py-16 lg:py-0 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Header text with description */}
            <div className="lg:col-span-5 flex flex-col items-start space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-hq-yellow font-semibold mb-3 block">
                  Corporate Interactions
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.1]">
                  Global <br className="hidden sm:inline" />
                  <span className="text-hq-yellow">Footprint</span>
                </h2>
              </div>

              <p className="font-body text-[16px] font-[400] text-white/70 max-w-md leading-relaxed">
                Nationwide presence across 16 Indian states and international executive engagements spanning 9 countries.
              </p>

              {/* Key Metric Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-2 w-full max-w-xs">
                <div className="border border-white/10 rounded-2xl p-4 bg-white/[0.02]">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-white mb-0.5">
                    16
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-hq-yellow font-medium">
                    Indian States
                  </div>
                </div>
                <div className="border border-white/10 rounded-2xl p-4 bg-white/[0.02]">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-white mb-0.5">
                    9+
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-hq-yellow font-medium">
                    Global Hubs
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="#key-themes-section"
                  className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-widest font-semibold text-white hover:text-hq-yellow transition-colors group"
                >
                  <span>Explore Nationwide Summits</span>
                  <LongArrow className="text-hq-yellow group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: Globe right-aligned */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end items-center">
              <div className="w-full max-w-[640px]">
                <RotatingGlobe heightClass="h-[420px] sm:h-[480px] lg:h-[540px] xl:h-[600px]" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. HQX PODCAST (LITE BG & CONTRACTED LAYOUT - SPOTLIGHT VIDEO ON LEFT & THUMBNAILS ON RIGHT) */}
      <section id="podcast" className="section-reveal py-20 lg:py-24 bg-[#FAF7F2] dark:bg-[#0D0E12] text-hq-black dark:text-white border-b border-hq-black/10 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-hq-yellow font-semibold mb-2 block">
                Stories, Mindset and Insights
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] tracking-tight font-bold text-hq-black dark:text-white leading-[1.1]">
                HQX <span className="text-hq-yellow">Podcast</span>
              </h2>
            </div>
            <Link 
              to="#podcast" 
              className="inline-flex items-center gap-2.5 text-xs font-display tracking-widest uppercase text-hq-black dark:text-white hover:text-hq-yellow dark:hover:text-hq-yellow font-semibold group"
            >
              <span>View All 10 Episodes & Channels</span>
              <LongArrow className="text-hq-yellow group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Interactive Split Player & Thumbnail Gallery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Big Spotlight Video Preview Player */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              {/* 16:9 Responsive Video Frame */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-xl border border-hq-black/15 dark:border-white/15 group">
                {activePodcast ? (
                  <iframe
                    key={activePodcast.id}
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${activePodcast.youtubeId}?autoplay=0&rel=0`}
                    title={activePodcast.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : null}
              </div>

              {/* Video Details Card */}
              {activePodcast && (
                <div className="p-6 bg-white dark:bg-white/[0.03] border border-hq-black/10 dark:border-white/10 rounded-2xl shadow-sm transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-hq-yellow font-bold bg-hq-black px-2.5 py-1 rounded">
                      <Radio className="w-3 h-3 text-hq-yellow" />
                      <span>{activePodcast.category || 'Featured Episode'}</span>
                    </span>
                    <div className="flex items-center gap-3 text-xs text-hq-black/60 dark:text-white/60">
                      <span className="flex items-center gap-1 font-mono"><Calendar className="w-3.5 h-3.5 text-hq-yellow" /> {activePodcast.date}</span>
                      <span className="flex items-center gap-1 font-mono"><Clock className="w-3.5 h-3.5 text-hq-yellow" /> {activePodcast.duration}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-hq-black dark:text-white mb-1.5 leading-snug">
                    {activePodcast.title}
                  </h3>

                  <div className="text-sm font-semibold text-hq-yellow mb-3 font-display">
                    Guest: {activePodcast.guest}
                  </div>

                  <p className="font-body text-[15px] font-[400] text-hq-black/75 dark:text-white/70 leading-relaxed mb-4">
                    {activePodcast.summary}
                  </p>

                  <div className="flex items-center gap-4 pt-1">
                    <Link
                      to="#podcast"
                      className="inline-flex items-center gap-2 bg-hq-black text-white hover:bg-hq-yellow hover:text-hq-black dark:bg-white dark:text-black dark:hover:bg-hq-yellow text-xs font-display uppercase tracking-widest font-semibold px-6 py-2.5 rounded-full transition-all group/btn shadow"
                    >
                      <span>Full Episode Notes</span>
                      <LongArrow className="group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Other Episodes Thumbnails with Video Preview */}
            <div className="lg:col-span-5 flex flex-col space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-hq-black/10 dark:border-white/10">
                <span className="text-xs font-mono uppercase tracking-widest text-hq-black/60 dark:text-white/60 font-semibold">
                  Select Episode Preview
                </span>
                <span className="text-xs font-mono text-hq-yellow font-bold">
                  {podcasts.length} Episodes
                </span>
              </div>

              {/* Scrollable list of thumbnails */}
              <div className="space-y-3 max-h-[580px] overflow-y-auto pr-1 select-none no-scrollbar">
                {podcasts.map((pod) => {
                  const isSelected = activePodcast?.id === pod.id;
                  return (
                    <div
                      key={pod.id}
                      onClick={() => setSelectedPodcast(pod)}
                      className={`p-3 rounded-2xl border flex items-center gap-4 cursor-pointer transition-all duration-300 group ${
                        isSelected
                          ? 'bg-hq-yellow/20 dark:bg-hq-yellow/15 border-hq-yellow ring-2 ring-hq-yellow/60 shadow-lg shadow-hq-yellow/15 scale-[1.02]'
                          : 'bg-white dark:bg-white/[0.03] border-hq-black/10 dark:border-white/10 hover:border-hq-yellow hover:bg-hq-yellow/[0.06]'
                      }`}
                    >
                      {/* 16:9 Thumbnail Image with YouTube video poster & play overlay */}
                      <div className={`relative w-28 sm:w-32 aspect-video bg-black rounded-xl overflow-hidden shrink-0 shadow-sm border transition-all ${
                        isSelected ? 'border-hq-yellow ring-2 ring-hq-yellow/50' : 'border-black/10'
                      }`}>
                        <img
                          src={`https://img.youtube.com/vi/${pod.youtubeId}/mqdefault.jpg`}
                          alt={pod.guest}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                          <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                            isSelected ? 'bg-hq-yellow text-hq-black scale-110' : 'bg-black/70 text-white group-hover:bg-hq-yellow group-hover:text-hq-black'
                          }`}>
                            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                          </div>
                        </div>
                        <span className="absolute bottom-1 right-1 text-[9px] bg-black/80 text-white px-1.5 py-0.5 rounded font-mono">
                          {pod.duration}
                        </span>
                      </div>

                      {/* Thumbnail Meta */}
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] uppercase tracking-wider text-hq-yellow font-bold truncate mb-0.5">
                          {pod.category || pod.publication}
                        </div>
                        <h4 className={`font-display text-sm sm:text-base font-bold truncate leading-tight transition-colors ${
                          isSelected ? 'text-hq-yellow font-extrabold' : 'text-hq-black dark:text-white group-hover:text-hq-yellow'
                        }`}>
                          {pod.guest}
                        </h4>
                        <p className="text-xs text-hq-black/60 dark:text-white/60 line-clamp-1 font-body mt-0.5">
                          {pod.title}
                        </p>
                        {isSelected && (
                          <span className="inline-block mt-1 text-[9px] font-mono uppercase tracking-wider font-bold text-hq-yellow">
                            ● Now Playing on Left
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. AUTHORSHIP ROADMAP (FROM PAGE 17 OF PROFILE) */}
      <section id="books" className="section-reveal py-24 bg-[#0A0A0A] text-white border-b border-white/10 relative overflow-hidden">
        {/* Subtle Ambient Background Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-hq-yellow/[0.03] rounded-full blur-[140px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Section Header - Symmetrical with Other Major Sections */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-hq-yellow font-semibold mb-3">
                6 Seminal Publications • 2020 to 2025
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-white leading-[1.1]">
                Books on <span className="text-hq-yellow">Well-Being & Happiness</span>
              </h2>
              <p className="font-body text-sm sm:text-base text-white/70 font-light max-w-xl mt-2">
                From Happiness Samurai (2020) to Happiness Habits (2025) — practical behavioral frameworks for sustained enterprise performance and personal thriving.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <Link 
                to="#books" 
                className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-widest font-semibold text-white/80 hover:text-hq-yellow transition-colors group/nav"
              >
                <span>Explore All Books</span>
                <LongArrow className="group-hover/nav:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {books.map((b) => {
              const isLatest = b.year === '2025';
              const bookThumbnails = {
                'Happiness Samurai': '/books/4.jpg',
                'Happiness Memoir': '/books/2.jpg',
                'Happiness Conversations': '/books/5.jpg',
                'Happiness & Money': '/books/3.jpg',
                'Happiness Decoded': '/books/1.jpg',
                'Happiness Habits': '/books/6.jpg',
                '2020': '/books/4.jpg',
                '2021': '/books/2.jpg',
                '2022': '/books/5.jpg',
                '2023': '/books/3.jpg',
                '2024': '/books/1.jpg',
                '2025': '/books/6.jpg',
              };
              const coverImg = bookThumbnails[b.title] || bookThumbnails[b.year] || b.cover || '/books/1.jpg';
              return (
                <div 
                  key={b.id}
                  className={`p-3.5 sm:p-4 rounded-2xl border flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-2xl ${
                    isLatest 
                      ? 'bg-[#15161A] text-white border-hq-yellow/60 shadow-xl ring-1 ring-hq-yellow/50' 
                      : 'bg-[#121316] hover:bg-[#181920] text-white border-white/10 hover:border-hq-yellow/50 shadow-md'
                  }`}
                >
                  <div>
                    {/* Book Cover Thumbnail Image */}
                    <div className="relative aspect-[3/4] w-full mb-3 rounded-xl overflow-hidden shadow-md">
                      <img 
                        src={coverImg} 
                        alt={b.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        loading="lazy"
                      />
                      {/* Year Badge */}
                      <span className={`absolute top-2 left-2 text-[10px] sm:text-[11px] font-display font-bold px-2.5 py-0.5 rounded-full shadow-md ${
                        isLatest ? 'bg-hq-yellow text-hq-black' : 'bg-black/75 backdrop-blur-sm text-hq-yellow border border-hq-yellow/30'
                      }`}>
                        {b.year}
                      </span>
                    </div>

                    <h4 className="font-display text-sm sm:text-base font-bold leading-tight mb-1 text-white group-hover:text-hq-yellow transition-colors line-clamp-1">
                      {b.title}
                    </h4>
                    <p className="font-body text-[11px] font-light leading-relaxed mb-3 line-clamp-2 text-white/60 group-hover:text-white/80 transition-colors">
                      {b.subtitle}
                    </p>
                  </div>

                  <Link 
                    to="#books" 
                    className="text-[10px] sm:text-[11px] font-display uppercase font-bold tracking-wider pt-2 border-t border-white/10 inline-flex items-center gap-2 group/bk text-white/70 group-hover:text-hq-yellow transition-colors"
                  >
                    <span>View Details</span>
                    <LongArrow className="group-hover/bk:translate-x-1" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* John Abraham Endorsement Quote Box */}
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#141416] to-[#0A0A0C] text-white p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl text-center relative overflow-hidden group hover:border-hq-yellow/40 transition-colors">
            {/* Subtle Yellow Ambient Radial Background Glow */}
            <div className="absolute inset-0 bg-radial-gradient from-hq-yellow/[0.08] via-transparent to-transparent opacity-60 pointer-events-none"></div>
            
            <Quote className="w-10 h-10 mx-auto mb-4 stroke-1 text-hq-yellow opacity-80" />
            <blockquote className="font-serif italic text-2xl md:text-3xl font-semibold leading-snug text-white/95">
              "Defining Book of The Moment. A Must Read!"
            </blockquote>
            <div className="font-display uppercase tracking-widest text-xs mt-4 font-bold text-hq-yellow">
              — John Abraham, Celebrated Actor & Youth Fitness Icon
            </div>
          </div>
        </div>
      </section>


      {/* TEAM MEMBER BIOGRAPHY MODAL */}
      {selectedTeamMember && (
        <div 
          className="fixed inset-0 z-50 bg-hq-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedTeamMember(null)}
        >
          <div 
            className="bg-white text-slate-900 max-w-2xl w-full p-6 sm:p-8 md:p-10 rounded-3xl border border-slate-200 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedTeamMember(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Photo with radius: 3px */}
              <div className="relative w-32 sm:w-40 aspect-square rounded-[3px] overflow-hidden bg-slate-100 flex-shrink-0 shadow-md border border-slate-200">
                <img 
                  src={selectedTeamMember.image} 
                  alt={selectedTeamMember.name} 
                  className="w-full h-full object-cover object-center rounded-[3px]" 
                />
              </div>

              {/* Bio & Details */}
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs font-bold bg-[#141B2D] text-white px-3 py-1 rounded-full shadow-sm">
                    {selectedTeamMember.category}
                  </span>
                  {selectedTeamMember.areaExpertise && (
                    <span className="text-[11px] font-mono text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full font-semibold">
                      {selectedTeamMember.areaExpertise}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#141B2D] mb-1">
                  {selectedTeamMember.name}
                </h3>
                <div className="text-xs font-mono text-slate-500 mb-4 leading-relaxed">
                  {selectedTeamMember.title}
                </div>
                <p className="font-body text-sm text-slate-700 font-normal leading-relaxed mb-6">
                  {selectedTeamMember.bio}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link 
                    to="#contact" 
                    onClick={() => {
                      setSelectedTeamMember(null);
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-[#141B2D] text-white hover:bg-amber-500 hover:text-black text-xs font-display uppercase tracking-widest px-5 py-2.5 font-bold rounded-full transition-colors shadow-sm"
                  >
                    Request Advisory Session
                  </Link>
                  <Link 
                    to="#team-section" 
                    onClick={() => {
                      setSelectedTeamMember(null);
                      const el = document.getElementById('team-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-display uppercase tracking-widest px-5 py-2.5 font-bold rounded-full transition-colors"
                  >
                    View Faculty Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
