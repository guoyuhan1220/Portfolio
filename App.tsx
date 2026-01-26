import React, { useState, useEffect } from 'react';
import FloatingNav from './components/FloatingNav';
import Intro from './views/Intro';
import Projects from './views/Projects';
import SideProjects from './views/SideProjects';
import Resume from './views/Resume';
import Contact from './views/Contact';

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

  return (
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
};

export default App;