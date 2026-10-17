import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { ThemeProvider } from './context/ThemeContext';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

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

// Scroll to top on route change (preserve hash navigation)
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
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
          <div className="flex flex-col min-h-screen bg-hq-white dark:bg-[#07080B] text-hq-black dark:text-white transition-colors duration-200">
            <Navbar />
          <main className="flex-1">
            <Routes>
              {/* Only Home page is active as requested — all paths render Home directly without redirecting */}
              <Route path="/" element={<Home />} />
              {/* 
                Temporarily disabled other routes (pages preserved):
                /about-us, /about, /founder, /why-hqx -> <AboutUs />
                /eudaimonic-transformation -> <EudaimonicTransformation />
                /well-being-ethos -> <WellBeingEthos />
                /leadership-deep-dive -> <LeadershipDeepDive />
                /engaging-workshops -> <EngagingWorkshops />
                /keynotes -> <Keynotes />
                /micro-courses -> <MicroCourses />
                /happyu-app -> <HappyUApp />
                /team -> <Team />
                /podcast -> <Podcast />
                /books -> <Books />
                /contact -> <Contact />
                /admin -> <AdminCMS />
              */}
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
