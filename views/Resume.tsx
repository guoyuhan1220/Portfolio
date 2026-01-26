import React from 'react';
import { motion } from 'framer-motion';
// (icons kept minimal on this view)

interface Experience {
  company: string;
  role: string;
  period: string;
  year: string;
  location: string;
  description: string;
}

const experiences: Experience[] = [
  { 
    company: 'Amazon Quick Suite (AWS)', 
    role: 'Principal Product Designer', 
    period: '2024 — Present',
    year: '2024',
    location: 'Seattle, WA',
    description: 'Leading AI platform design strategy for enterprise workflows'
  },
  { 
    company: 'AWS GenAI Evaluation', 
    role: 'Senior Product Designer', 
    period: '2023 — 2024',
    year: '2023',
    location: 'Seattle, WA',
    description: 'Designed evaluation frameworks for generative AI models'
  },
  { 
    company: 'SageMaker Geospatial', 
    role: 'Senior Product Designer', 
    period: '2021 — 2023',
    year: '2021',
    location: 'Seattle, WA',
    description: 'Built geospatial ML tools processing 10TB+ daily'
  },
  { 
    company: 'SageMaker Ground Truth', 
    role: 'Product Designer', 
    period: '2019 — 2021',
    year: '2019',
    location: 'Seattle, WA',
    description: 'Created enterprise data labeling solutions'
  },
];

const CareerRow: React.FC<{
  experience: Experience;
  index: number;
}> = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      whileHover={{ y: -2 }}
      className="group rounded-sm border border-zinc-100 bg-white/30 hover:bg-white/70 hover:border-zinc-200 transition-colors"
    >
      <div className="px-4 py-4 md:px-5 md:py-5">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-6">
          <div className="min-w-0">
            <h3 className="text-[22px] md:text-[26px] leading-tight font-serif text-zinc-900 truncate">
              {experience.company}
            </h3>
            <p className="mt-1 text-[11px] font-mono text-zinc-600 uppercase tracking-[0.18em]">
              {experience.role}
            </p>
          </div>

          <div className="md:text-right">
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-[0.22em] whitespace-nowrap">
              {experience.period}
            </span>
          </div>
        </div>

        <p className="mt-3 text-[13px] text-zinc-500 leading-relaxed line-clamp-1 group-hover:line-clamp-3 transition-all">
          {experience.description}
        </p>
      </div>
    </motion.div>
  );
};

const Resume: React.FC = () => {
  return (
    <div className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
      {/* Section Header - compact */}
      <div className="mb-10">
        <div className="flex items-center space-x-5 mb-8">
          <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-[11px] font-mono font-bold text-zinc-500">
            04
          </div>
          <h2 className="text-4xl font-serif text-zinc-800 tracking-tight">Career Path</h2>
          <div className="h-px flex-1 bg-zinc-100 opacity-80" />
          <span className="text-[10px] font-mono text-zinc-300 tracking-widest uppercase">Experience</span>
        </div>

        <p className="text-zinc-500 font-serif italic max-w-2xl">
          A compact record of roles and systems shipped.
        </p>
      </div>

      {/* Compact list */}
      <div className="grid grid-cols-1 gap-3">
        {experiences.map((exp, i) => (
          <CareerRow key={exp.company} experience={exp} index={i} />
        ))}
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="mt-8 pt-6 border-t border-zinc-100"
      >
        <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em] mb-3">
          Education
        </p>
        <p className="font-serif italic text-xl text-zinc-900 leading-tight">
          Master of Information Management
        </p>
        <p className="mt-2 font-mono text-[11px] text-zinc-500">
          University of Washington
        </p>
        <p className="text-[10px] font-mono text-zinc-300 mt-1 uppercase tracking-tighter">
          Class of 2013 // Seattle, WA
        </p>
      </motion.div>

    </div>
  );
};

export default Resume;
