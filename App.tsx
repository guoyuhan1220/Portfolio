import React, { useState, useEffect, useLayoutEffect } from 'react';
import Lenis from 'lenis';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import FloatingNav from './components/FloatingNav';
import Intro from './views/Intro';
import Projects from './views/Projects';
import ProjectsWorkspaceExperiment from './views/ProjectsWorkspaceExperiment';
import SideProjects from './views/SideProjects';
import Resume from './views/Resume';
import Contact from './views/Contact';
import ArtifactTemplateCaseStudy from './views/ArtifactTemplateCaseStudy';
import ArtifactTemplateCaseStudyExperiment from './views/ArtifactTemplateCaseStudyExperiment';
import QuickSuiteCaseStudy from './views/QuickSuiteCaseStudy';
import QBusinessActionConnectorCaseStudy from './views/QBusinessActionConnectorCaseStudy';
import GenAIEvaluationCaseStudy from './views/GenAIEvaluationCaseStudy';
import SageMakerGeospatialCaseStudy from './views/SageMakerGeospatialCaseStudy';
import DataLabelingCaseStudy from './views/DataLabelingCaseStudy';

if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

const resetScrollToTop = () => {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};

const ScrollManager: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Landing page: always start from top (envelope) on load/refresh
  useEffect(() => {
    if (location.pathname !== '/' || location.hash === '#work') return;
    resetScrollToTop();
    const t1 = setTimeout(resetScrollToTop, 0);
    const t2 = setTimeout(resetScrollToTop, 100);
    const t3 = setTimeout(resetScrollToTop, 300);
    const onLoad = () => resetScrollToTop();
    window.addEventListener('load', onLoad);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('load', onLoad);
    };
  }, [location.pathname, location.hash]);

  useLayoutEffect(() => {
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    const isWorkHash = location.pathname === '/' && location.hash === '#work';
    if (isWorkHash) {
      const scrollToWork = () => {
        const el = document.getElementById('work');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      requestAnimationFrame(() => requestAnimationFrame(scrollToWork));
      setTimeout(scrollToWork, 100);
    } else {
      resetScroll();
      requestAnimationFrame(resetScroll);
    }

    if (location.pathname.startsWith('/case-study')) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.5,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      normalizeWheel: true,
    });

    const onScrollToWork = () => {
      const el = document.getElementById('work');
      if (el) {
        lenis.scrollTo(el, { programmatic: true });
        window.history.replaceState(null, '', '/#work');
      }
    };

    window.addEventListener('scroll-to-work', onScrollToWork);

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('scroll-to-work', onScrollToWork);
      lenis.destroy();
    };
  }, [location.pathname, location.hash]);

  return <div key={location.pathname}>{children}</div>;
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      if (rafId != null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const sections = ['intro', 'work', 'playground', 'resume', 'contact'];
        const scrollPos = window.scrollY + window.innerHeight / 3;

        let found = false;
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
            setActiveSection(section);
            found = true;
            break;
          }
        }
        // When scrolled to bottom, ensure contact (Reach) is active
        if (!found) {
          const contactEl = document.getElementById('contact');
          if (contactEl && window.scrollY + window.innerHeight > contactEl.offsetTop + contactEl.offsetHeight * 0.5) {
            setActiveSection('contact');
          }
        }
        rafId = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, []);

  const MainLayout = () => (
    <div className="bg-paper text-zinc-900 min-h-screen font-sans selection:bg-zinc-200 selection:text-black">
      <FloatingNav activeSection={activeSection} />
      <main className="relative">
        <section id="intro">
          <Intro />
        </section>

        <section id="work">
          <Projects />
        </section>

        {/* <section id="playground" className="bg-zinc-50/50">
          <SideProjects />
        </section> */}

        <section id="resume">
          <Resume />
        </section>

        <section id="contact" className="pb-40">
          <Contact />
        </section>
      </main>

      {/* Subtle UI Accents */}
      <div className="fixed top-8 right-8 z-50 pointer-events-none hidden lg:block text-right">
        <p className="text-[9px] font-mono uppercase tracking-[0.2em] opacity-30">Seattle Local Time</p>
        <p className="text-[10px] font-mono opacity-40">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
      </div>
    </div>
  );

  return (
    <BrowserRouter>
      <ScrollManager>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/work-experiment" element={<ProjectsWorkspaceExperiment />} />
          <Route path="/case-study/artifact-lifecycle" element={<ArtifactTemplateCaseStudy />} />
          <Route path="/case-study/artifact-lifecycle-experiment" element={<ArtifactTemplateCaseStudyExperiment />} />
          <Route path="/case-study/quick-suite" element={<QuickSuiteCaseStudy />} />
          <Route path="/case-study/q-business-action-connector" element={<QBusinessActionConnectorCaseStudy />} />
          <Route path="/case-study/genai-evaluation" element={<GenAIEvaluationCaseStudy />} />
          <Route path="/case-study/sagemaker-geospatial" element={<SageMakerGeospatialCaseStudy />} />
          <Route path="/case-study/data-labeling-ground-truth" element={<DataLabelingCaseStudy />} />
        </Routes>
      </ScrollManager>
    </BrowserRouter>
  );
};

export default App;