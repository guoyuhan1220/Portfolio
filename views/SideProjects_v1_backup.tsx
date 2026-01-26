import React from 'react';
import { motion } from 'framer-motion';

const stamps = [
  {
    id: 'A-220',
    title: 'LLM_DYNAMICS',
    subtitle: 'Interaction Models',
    date: 'MAR 2025',
    color: '#3b3b3b',
    icon: '◈',
    rotation: -2
  },
  {
    id: 'G-101',
    title: 'GEO_SPATIAL',
    subtitle: 'Data Visualization',
    date: 'JUN 2023',
    color: '#4a4a4a',
    icon: '⊕',
    rotation: 3
  },
  {
    id: 'M-44',
    title: 'GEN_ARTIFACTS',
    subtitle: 'Prompt Systems',
    date: 'JAN 2024',
    color: '#2d2d2d',
    icon: '◰',
    rotation: -1
  }
];

const Stamp: React.FC<{ data: typeof stamps[0] }> = ({ data }) => {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.05, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      style={{ rotate: data.rotation }}
      className="relative w-full max-w-[240px] aspect-[4/5] p-2 bg-white shadow-lg cursor-pointer group"
    >
      {/* Perforated Edge Effect */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          padding: '2px',
          background: `radial-gradient(circle, transparent 70%, white 72%)`,
          backgroundSize: '16px 16px',
          backgroundPosition: '-8px -8px',
          WebkitMaskImage: 'radial-gradient(circle, white 70%, transparent 72%)',
          maskImage: 'radial-gradient(circle, white 70%, transparent 72%)',
        }}
      />

      {/* Main Stamp Body */}
      <div className="relative h-full w-full bg-white border border-zinc-100 flex flex-col p-4 overflow-hidden">
        {/* Vintage Inking Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
        
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-mono font-bold text-zinc-400">OFFICIAL</span>
          <span className="text-[10px] font-mono text-zinc-300">{data.id}</span>
        </div>

        {/* Center Illustration Area */}
        <div 
          className="flex-1 border-2 border-zinc-100 flex items-center justify-center relative bg-zinc-50 group-hover:bg-zinc-100 transition-colors"
          style={{ borderColor: `${data.color}22` }}
        >
          <div className="text-4xl opacity-20 group-hover:scale-110 transition-transform duration-500" style={{ color: data.color }}>
            {data.icon}
          </div>
          
          {/* Postmark Overstamp */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none -rotate-12 group-hover:rotate-0 transition-all">
             <div className="border-4 border-zinc-900 rounded-full w-24 h-24 flex items-center justify-center text-[8px] font-mono font-black text-center p-2 uppercase">
                Laboratory // Verified
             </div>
          </div>
        </div>

        {/* Footer Typography */}
        <div className="mt-4 space-y-1">
          <h4 className="text-sm font-mono font-black tracking-tighter text-zinc-800 leading-none">
            {data.title}
          </h4>
          <p className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">
            {data.subtitle}
          </p>
          <div className="pt-2 flex justify-between items-center border-t border-zinc-50 mt-2">
            <span className="text-[8px] font-mono text-zinc-300">{data.date}</span>
            <span className="text-[8px] font-mono text-zinc-300">AWS_AI</span>
          </div>
        </div>
      </div>
      
      {/* Shadow enhancement for paper lift */}
      <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/5 blur-xl -z-10 group-hover:bg-black/10 transition-all" />
    </motion.div>
  );
};

const SideProjects: React.FC = () => {
  return (
    <div className="py-48 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden relative">
      <div className="flex flex-col items-center text-center mb-24 space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="px-4 py-1 border border-zinc-200 text-zinc-400 text-[9px] font-mono uppercase tracking-[0.4em] rotate-1"
        >
          Archive Section 02 // The Laboratory
        </motion.div>
        
        <h2 className="text-5xl font-serif text-zinc-800 tracking-tight">Experimental Post</h2>
        <p className="max-w-xl text-zinc-500 font-light text-lg leading-relaxed font-serif italic">
          "A collection of micro-studies in agentic behavior and spatial design, stamped and logged for the archive."
        </p>
      </div>

      {/* The Stamps Row */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        {stamps.map((stamp) => (
          <Stamp key={stamp.id} data={stamp} />
        ))}
      </div>

      {/* Background Ledger Details */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-zinc-100 -z-10" />
      <div className="absolute top-1/2 left-10 text-[8px] font-mono text-zinc-200 uppercase tracking-[1em] -translate-y-6">
        Log Entry Page // 042
      </div>
      
      <div className="mt-40 text-center">
        <div className="inline-flex items-center space-x-4 opacity-20">
           <div className="w-12 h-px bg-zinc-400" />
           <span className="text-[10px] font-mono uppercase tracking-[0.5em]">End of Lab Records</span>
           <div className="w-12 h-px bg-zinc-400" />
        </div>
      </div>
    </div>
  );
};

export default SideProjects;