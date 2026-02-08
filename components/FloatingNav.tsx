import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'intro', label: 'Intro' },
  { id: 'work', label: 'Works' },
  { id: 'resume', label: 'Career' },
  { id: 'contact', label: 'Reach' },
];

const FloatingNav: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:block"
    >
      <div className="bg-white/80 backdrop-blur-xl border border-black/5 rounded-full px-2 py-3 flex flex-col items-center gap-1 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`
              relative px-3 py-2 rounded-full text-[9px] font-medium uppercase tracking-widest transition-all w-full
              ${activeSection === item.id ? 'text-white' : 'text-zinc-400 hover:text-zinc-900'}
            `}
          >
            {activeSection === item.id && (
              <motion.div 
                layoutId="nav-pill"
                className="absolute inset-0 bg-zinc-900 rounded-full z-0"
                transition={{ type: 'spring', duration: 0.5, bounce: 0.15 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default FloatingNav;
