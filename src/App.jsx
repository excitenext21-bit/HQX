import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { ThemeProvider } from './context/ThemeContext';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FluexaPageTransition from './components/common/FluexaPageTransition';

import Home from './pages/Home';
import EudaimonicTransformation from './pages/EudaimonicTransformation';
import WellBeingEthos from './pages/WellBeingEthos';
import LeadershipDeepDive from './pages/LeadershipDeepDive';
import EngagingWorkshops from './pages/EngagingWorkshops';
import Keynotes from './pages/Keynotes';
import MicroCourses from './pages/MicroCourses';
import HappyUApp from './pages/HappyUApp';
import Team from './pages/Team';
import Podcast from './pages/Podcast';
import Books from './pages/Books';
import Contact from './pages/Contact';
import AdminCMS from './pages/AdminCMS';

import AboutUs from './pages/AboutUs';
import Founder from './pages/Founder';
import WhyHQX from './pages/WhyHQX';

// Scroll to top on route change (preserve hash navigation)
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const navbarHeight = 80;
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <Router>
          <ScrollToTop />
          <FluexaPageTransition />
          <div className="flex flex-col min-h-screen bg-hq-white dark:bg-[#07080B] text-hq-black dark:text-white transition-colors duration-200">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/founder" element={<Founder />} />
                <Route path="/why-hqx" element={<WhyHQX />} />
                <Route path="/eudaimonic-transformation" element={<EudaimonicTransformation />} />
                <Route path="/well-being-ethos" element={<WellBeingEthos />} />
                <Route path="/leadership-deep-dive" element={<LeadershipDeepDive />} />
                <Route path="/engaging-workshops" element={<EngagingWorkshops />} />
                <Route path="/keynotes" element={<Keynotes />} />
                <Route path="/micro-courses" element={<MicroCourses />} />
                <Route path="/happyu-app" element={<HappyUApp />} />
                <Route path="/team" element={<Team />} />
                <Route path="/podcast" element={<Podcast />} />
                <Route path="/books" element={<Books />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<AdminCMS />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </DataProvider>
    </ThemeProvider>
  );
}
