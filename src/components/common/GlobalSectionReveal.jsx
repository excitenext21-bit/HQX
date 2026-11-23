import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * GlobalSectionReveal
 * Automatically attaches smooth luxury reveal animations to every <section> 
 * across all pages on initial page load and as sections scroll into view.
 */
export default function GlobalSectionReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    let observer;
    let mutationObserver;

    const attachRevealObserver = () => {
      // Find all sections inside <main>, plus any manually marked .section-reveal
      const sections = document.querySelectorAll(
        'main section, main > div > section, main > header, .section-reveal'
      );

      if (!sections.length) return;

      if (observer) {
        observer.disconnect();
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('section-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px -40px 0px'
        }
      );

      sections.forEach((sec, idx) => {
        if (!sec.classList.contains('section-reveal')) {
          sec.classList.add('section-reveal');
        }

        const rect = sec.getBoundingClientRect();
        // If already visible in viewport on initial load, reveal with gentle stagger
        if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
          setTimeout(() => {
            sec.classList.add('section-revealed');
          }, idx * 60);
        } else {
          observer.observe(sec);
        }
      });
    };

    // Run after DOM has painted for current route
    const timer = setTimeout(attachRevealObserver, 50);

    // Also observe mutations in case of lazy-loaded route chunks
    mutationObserver = new MutationObserver(() => {
      attachRevealObserver();
    });

    const mainEl = document.querySelector('main');
    if (mainEl) {
      mutationObserver.observe(mainEl, { childList: true, subtree: true });
    }

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
