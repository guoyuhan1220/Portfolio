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
    description: 'Unified five fragmented AI tools into one agentic platform serving 639k users with 92.5% weekly retention. Led design of artifact lifecycle, action connectors, and onboarding — shipping document, slide, image, podcast, and spreadsheet creation at enterprise scale.'
  },
  { 
    company: 'AWS GenAI Evaluation', 
    role: 'Senior Product Designer', 
    period: '2023 — 2024',
    year: '2023',
    location: 'Seattle, WA',
    description: 'Led the design vision that unified AWS\'s GenAI evaluation strategy across Bedrock and Q Business. Work was selected as a top 3 Op1 idea, leading to a PRFAQ that secured funding for a dedicated team of 1 PM, 1 SDM, and 9 engineers.'
  },
  { 
    company: 'SageMaker Geospatial', 
    role: 'Senior Product Designer', 
    period: '2021 — 2023',
    year: '2021',
    location: 'Seattle, WA',
    description: 'Founding designer for SageMaker Geospatial. Designed industry-first collaborative map visualization (patent filed 2023), delivered 600% cost savings for DataFarming, and scaled design to Earth on AWS Viewer serving 1,500+ organizations.'
  },
  { 
    company: 'SageMaker Ground Truth', 
    role: 'Product Designer', 
    period: '2019 — 2021',
    year: '2019',
    location: 'Seattle, WA',
    description: 'Led end-to-end design for SageMaker Ground Truth data labeling across image, video, text, and 3D point cloud — delivering 70% reduction in manual labeling effort and 65% faster annotation time for clients like Torc and the NFL.'
  },
  { 
    company: 'Azuqua (acquired by Okta)', 
    role: 'User Experience Designer', 
    period: '2015 — 2017',
    year: '2015',
    location: 'Seattle, WA',
    description: 'Led end-to-end design of a no-code integration platform with drag-and-drop workflow canvas, supporting growth through Azuqua\'s $52.5M acquisition by Okta.'
  },
];

const CareerRow: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
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

        <p className="mt-3 text-[13px] text-zinc-500 leading-relaxed">
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
          <h2 className="text-4xl font-serif text-zinc-800 tracking-tight">Career Path</h2>
          <div className="h-px flex-1 bg-zinc-100 opacity-80" />
          <span className="text-[10px] font-mono text-zinc-300 tracking-widest uppercase">Experience</span>
        </div>

      </div>

      {/* Compact list */}
      <div className="grid grid-cols-1 gap-3">
        {experiences.map((exp) => (
          <CareerRow key={exp.company} experience={exp} />
        ))}
      </div>

      {/* Education — own section header + card, mirroring Career Path */}
      <div className="mt-16 mb-10">
        <div className="flex items-center space-x-5 mb-8">
          <h2 className="text-4xl font-serif text-zinc-800 tracking-tight">Education</h2>
          <div className="h-px flex-1 bg-zinc-100 opacity-80" />
          <span className="text-[10px] font-mono text-zinc-300 tracking-widest uppercase">Academic</span>
        </div>
      </div>

      <motion.div
        whileHover={{ y: -2 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="group rounded-sm border border-zinc-100 bg-white/30 hover:bg-white/70 hover:border-zinc-200 transition-colors"
      >
        <div className="px-4 py-4 md:px-5 md:py-5">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-6">
            <div className="min-w-0">
              <h3 className="text-[22px] md:text-[26px] leading-tight font-serif text-zinc-900">
                University of Washington
              </h3>
              <p className="mt-1 text-[11px] font-mono text-zinc-600 uppercase tracking-[0.18em]">
                Master of Information Management
              </p>
            </div>
            <div className="md:text-right">
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-[0.22em] whitespace-nowrap">
                2013 – 2015
              </span>
            </div>
          </div>
          <p className="mt-3 text-[13px] text-zinc-500 leading-relaxed">
            Seattle, WA
          </p>
        </div>
      </motion.div>

    </div>
  );
};

export default Resume;
