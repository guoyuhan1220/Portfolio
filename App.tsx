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

const ScrollManager: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetScroll();
    requestAnimationFrame(resetScroll);
    setTimeout(resetScroll, 0);
    setTimeout(resetScroll, 100);
    setTimeout(resetScroll, 300);

    if (location.pathname.startsWith('/case-study')) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.9,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      normalizeWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [location.pathname]);

  return <div key={location.pathname}>{children}</div>;
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'work', 'playground', 'resume', 'contact'];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

        <section id="playground" className="bg-zinc-50/50">
          <SideProjects />
        </section>

        <section id="resume">
          <Resume />
        </section>

        <section id="contact" className="pb-40">
          <Contact />
        </section>
      </main>

      {/* Subtle UI Accents */}
      <div className="fixed top-8 left-8 z-50 pointer-events-none hidden lg:block">
        <p className="text-[9px] font-mono uppercase tracking-[0.2em] opacity-30">Dossier // 2026</p>
      </div>
      
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