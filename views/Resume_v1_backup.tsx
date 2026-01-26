import React from 'react';
import { motion } from 'framer-motion';

const Resume: React.FC = () => {
  const experiences = [
    { company: 'Amazon Quick Suite (AWS)', role: 'Principal Product Designer', period: '24 — PRS', accent: 'border-zinc-200 bg-zinc-50/20' },
    { company: 'AWS GenAI Evaluation', role: 'Senior Product Designer', period: '23 — 24', accent: 'border-zinc-100' },
    { company: 'SageMaker Geospatial', role: 'Senior Product Designer', period: '21 — 23', accent: 'border-zinc-100' },
    { company: 'SageMaker Ground Truth', role: 'Product Designer', period: '19 — 21', accent: 'border-zinc-100' },
  ];

  return (
    <div className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="mb-20">
        <div className="flex items-center space-x-5 mb-12">
          <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-[11px] font-mono font-bold text-zinc-500">
            02
          </div>
          <h2 className="text-4xl font-serif text-zinc-800 tracking-tight">Career Archive</h2>
          <div className="h-px flex-1 bg-zinc-100 opacity-80"></div>
          <span className="text-[10px] font-mono text-zinc-300 tracking-widest uppercase">Lead UX Log</span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group flex flex-col md:flex-row items-center justify-between p-7 border rounded-sm transition-all duration-300 ${exp.accent} hover:border-zinc-300 hover:shadow-sm`}
            >
              <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-12 flex-1">
                <span className="text-[11px] font-mono font-bold text-zinc-400 w-16 tracking-widest">{exp.period}</span>
                <div className="space-y-1">
                  <h3 className="text-2xl font-serif text-zinc-900 group-hover:italic transition-all">{exp.company}</h3>
                  <p className="text-zinc-500 font-mono text-[11px] uppercase tracking-[0.15em]">{exp.role}</p>
                </div>
              </div>
              <div className="hidden md:block opacity-0 group-hover:opacity-10 transition-opacity">
                <span className="text-[10px] font-mono font-black rotate-90 inline-block translate-x-4">VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-zinc-100 flex flex-col md:flex-row gap-16">
           <div className="flex-1 grid grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em] font-bold">Specialties</h4>
                <ul className="text-sm font-light space-y-2 text-zinc-600 font-mono">
                  <li>— LLM Interaction</li>
                  <li>— Agentic Systems</li>
                  <li>— Data Strategy</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em] font-bold">Toolkit</h4>
                <ul className="text-sm font-light space-y-2 text-zinc-600 font-mono">
                  <li>— Figma / Kiro</li>
                  <li>— VS Code</li>
                  <li>— MCP Systems</li>
                </ul>
              </div>
           </div>
           
           <div className="w-px h-24 bg-zinc-50 hidden md:block" />

           <div className="flex-1">
              <h4 className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em] font-bold mb-4">Academic Background</h4>
              <div className="text-sm text-zinc-600">
                <p className="font-serif italic text-xl text-zinc-900 leading-tight">Master of Information Management</p>
                <p className="mt-2 font-mono text-[11px] text-zinc-500">University of Washington</p>
                <p className="text-[10px] font-mono text-zinc-300 mt-1 uppercase tracking-tighter">Class of 2013 // Seattle, WA</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;