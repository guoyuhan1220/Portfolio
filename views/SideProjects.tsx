import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const stamps = [
  {
    id: 'I-001',
    title: 'INKLING',
    subtitle: 'Idea Workspace',
    date: 'MAY 2025',
    fullDate: 'May 2025',
    color: '#2f2f2f',
    icon: '✦',
    rotation: 1,
    description: 'reflect on each day, with daily journal entries',
    link: 'https://inkling-119225638578.us-west1.run.app/',
    imageUrl: '/inking logo.png'
  },
  {
    id: 'A-220',
    title: 'LLM_DYNAMICS',
    subtitle: 'Interaction Models',
    date: 'MAR 2025',
    fullDate: 'March 15, 2025',
    color: '#3b3b3b',
    icon: '◈',
    rotation: -2,
    description: 'Exploring natural language interaction patterns for AI systems'
  },
  {
    id: 'G-101',
    title: 'GEO_SPATIAL',
    subtitle: 'Data Visualization',
    date: 'JUN 2023',
    fullDate: 'June 8, 2023',
    color: '#4a4a4a',
    icon: '⊕',
    rotation: 3,
    description: 'Mapping complex geospatial data into intuitive visual interfaces'
  },
  {
    id: 'M-44',
    title: 'GEN_ARTIFACTS',
    subtitle: 'Prompt Systems',
    date: 'JAN 2024',
    fullDate: 'January 22, 2024',
    color: '#2d2d2d',
    icon: '◰',
    rotation: -1,
    description: 'Designing prompt engineering frameworks for creative outputs'
  }
];

const Stamp: React.FC<{ data: typeof stamps[0] }> = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Magnifying glass cursor as data URL
  const magnifyingGlassCursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='1.5'%3E%3Ccircle cx='11' cy='11' r='6'/%3E%3Cline x1='16' y1='16' x2='20' y2='20'/%3E%3C/svg%3E") 12 12, pointer`;

  const card = (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -12, scale: 1.05, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      style={{ rotate: data.rotation, cursor: magnifyingGlassCursor }}
      className="relative w-full max-w-[240px] aspect-[4/5] group"
    >
      {/* Perforated Edge Effect */}
      <div className="absolute -inset-1 z-0">
        <svg className="w-full h-full" viewBox="0 0 100 125" preserveAspectRatio="none">
          <defs>
            <pattern id={`perf-${data.id}`} patternUnits="userSpaceOnUse" width="8" height="8">
              <circle cx="4" cy="4" r="2" fill="white" />
            </pattern>
            <mask id={`mask-${data.id}`}>
              <rect width="100%" height="100%" fill="white" />
              <rect x="0" y="0" width="100%" height="100%" fill={`url(#perf-${data.id})`} />
            </mask>
          </defs>
          <rect 
            x="2" y="2" 
            width="96" height="121" 
            fill="#f5f5f5" 
            mask={`url(#mask-${data.id})`}
            className="drop-shadow-lg"
          />
        </svg>
      </div>

      {/* Main Stamp Body */}
      <div className="relative h-full w-full bg-white border-2 border-zinc-200 flex flex-col p-4 overflow-hidden shadow-lg z-10">
        {/* Vintage Inking Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
        
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider">Experimental</span>
          <span className="text-[10px] font-mono text-zinc-300">{data.id}</span>
        </div>

        {/* Center Illustration Area */}
        <div 
          className="flex-1 border-2 border-dashed border-zinc-100 flex items-center justify-center relative bg-zinc-50/50 group-hover:bg-zinc-100/50 transition-colors duration-300"
        >
          {data.imageUrl ? (
            <img
              src={data.imageUrl}
              alt={data.title}
              className="max-h-[70%] max-w-[80%] object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            />
          ) : (
            <div 
              className="text-5xl opacity-20 group-hover:scale-110 group-hover:opacity-30 transition-all duration-500" 
              style={{ color: data.color }}
            >
              {data.icon}
            </div>
          )}
          
          {/* Postmark Cancellation Stamp - Appears on Hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
                animate={{ opacity: 0.7, scale: 1, rotate: -15 }}
                exit={{ opacity: 0, scale: 0.8, rotate: -30 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="relative">
                  {/* Outer circle */}
                  <div className="w-28 h-28 border-[3px] border-red-900 rounded-full flex items-center justify-center">
                    {/* Inner content */}
                    <div className="text-center">
                      <p className="text-[7px] font-mono font-black text-red-900 uppercase tracking-wider">
                        Completed
                      </p>
                      <p className="text-[10px] font-mono font-bold text-red-900 mt-0.5">
                        {data.fullDate}
                      </p>
                      <div className="w-16 h-px bg-red-900 mx-auto my-1" />
                      <p className="text-[6px] font-mono text-red-900 uppercase tracking-[0.2em]">
                        AWS • Seattle
                      </p>
                    </div>
                  </div>
                  {/* Wavy cancellation lines */}
                  <div className="absolute -left-4 -right-4 top-1/2 -translate-y-1/2 space-y-1">
                    <div className="h-[2px] bg-red-900 opacity-60" style={{ 
                      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                      background: 'repeating-linear-gradient(90deg, #7f1d1d 0px, #7f1d1d 8px, transparent 8px, transparent 12px)'
                    }} />
                    <div className="h-[2px] bg-red-900 opacity-60" style={{ 
                      background: 'repeating-linear-gradient(90deg, transparent 0px, transparent 4px, #7f1d1d 4px, #7f1d1d 12px)'
                    }} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Typography */}
        <div className="mt-4 space-y-1">
          <h4 className="text-sm font-mono font-black tracking-tighter text-zinc-800 leading-none">
            {data.title}
          </h4>
          <p className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
            {data.subtitle}
          </p>
          <div className="pt-2 flex justify-between items-center border-t border-zinc-100 mt-2">
            <span className="text-[8px] font-mono text-zinc-300">{data.date}</span>
            <span className="text-[8px] font-mono text-zinc-300">AWS_AI</span>
          </div>
        </div>

        {/* Stamp denomination */}
        <div className="absolute top-2 right-2 text-[10px] font-mono font-bold text-zinc-200">
          ★
        </div>
      </div>
      
      {/* Shadow enhancement for paper lift */}
      <motion.div 
        className="absolute -bottom-4 left-4 right-4 h-8 bg-black/5 blur-xl -z-10"
        animate={{ opacity: isHovered ? 0.2 : 0.1 }}
      />

      {/* Hover tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 text-center"
          >
            <p className="text-[10px] text-zinc-500 font-serif italic leading-relaxed">
              {data.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  if (data.link) {
    return (
      <a href={data.link} target="_blank" rel="noopener noreferrer" className="block">
        {card}
      </a>
    );
  }

  return card;
};

const SideProjects: React.FC = () => {
  return (
    <div className="py-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14 space-y-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="px-4 py-2 border border-zinc-200 rounded-sm text-zinc-400 text-[9px] font-mono uppercase tracking-[0.4em]"
        >
          Collection Series • Experimental
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-serif text-zinc-800 tracking-tight"
        >
          The Stamp Collection
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-xl text-zinc-500 font-light text-base leading-relaxed font-serif italic"
        >
          "A philatelist's archive of micro-experiments—hover to inspect the postmark of completion."
        </motion.p>

        {/* Magnifying glass hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center space-x-2 text-zinc-300"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <span className="text-[9px] font-mono uppercase tracking-wider">Hover to inspect</span>
        </motion.div>
      </div>

      {/* The Stamps Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-12 pb-8">
        {stamps.map((stamp, i) => (
          <motion.div
            key={stamp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <Stamp data={stamp} />
          </motion.div>
        ))}
      </div>

      {/* Collector's Album Edge */}
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      {/* Background Details */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-100/50 -z-10" />
      <div className="absolute top-1/2 left-10 text-[8px] font-mono text-zinc-200 uppercase tracking-[0.5em] -translate-y-6">
        Album Page // 001
      </div>
      
      {/* Section Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center space-x-4 opacity-20">
          <div className="w-12 h-px bg-zinc-400" />
          <span className="text-[10px] font-mono uppercase tracking-[0.5em]">End of Collection</span>
          <div className="w-12 h-px bg-zinc-400" />
        </div>
      </motion.div>
    </div>
  );
};

export default SideProjects;
