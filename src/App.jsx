import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { ThemeProvider } from './context/ThemeContext';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FluexaPageTransition from './components/common/FluexaPageTransition';
import BrandLoader from './components/common/BrandLoader';
import GlobalSectionReveal from './components/common/GlobalSectionReveal';
import ConnectDrawer from './components/common/ConnectDrawer';
import BackToTop from './components/common/BackToTop';
import RouteSEO from './components/common/RouteSEO';

// Eager load Home for fastest initial FCP & LCP
import Home from './pages/Home';

// Route-based code splitting for secondary pages
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Founder = lazy(() => import('./pages/Founder'));
const WhyHQX = lazy(() => import('./pages/WhyHQX'));
const EudaimonicTransformation = lazy(() => import('./pages/EudaimonicTransformation'));
const WellBeingEthos = lazy(() => import('./pages/WellBeingEthos'));
const LeadershipDeepDive = lazy(() => import('./pages/LeadershipDeepDive'));
const EngagingWorkshops = lazy(() => import('./pages/EngagingWorkshops'));
const Keynotes = lazy(() => import('./pages/Keynotes'));
const MicroCourses = lazy(() => import('./pages/MicroCourses'));
const HappyUApp = lazy(() => import('./pages/HappyUApp'));
const Team = lazy(() => import('./pages/Team'));
const Podcast = lazy(() => import('./pages/Podcast'));
const Books = lazy(() => import('./pages/Books'));
const Contact = lazy(() => import('./pages/Contact'));
const AdminCMS = lazy(() => import('./pages/AdminCMS'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <Router>
          <RouteSEO />
          <ScrollToTop />
          <FluexaPageTransition />
          <GlobalSectionReveal />
          <div className="flex flex-col min-h-screen bg-hq-white dark:bg-[#07080B] text-hq-black dark:text-white transition-colors duration-200">
            <Navbar />
            <main className="flex-1">
              <Suspense fallback={<div className="min-h-screen bg-[#07080B]" />}>
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
              </Suspense>
            </main>
            <Footer />
            <BackToTop />
            <ConnectDrawer />
          </div>
        </Router>
      </DataProvider>
    </ThemeProvider>
  );
}
