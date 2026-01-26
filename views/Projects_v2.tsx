import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  tags: string[];
  description: string;
  imageUrl: string | null;
  videoUrl: string | null;
  thumbnailUrl: string | null;
  rotation: number;
  span?: number;
  role: string;
  impact: string;
}

const projects: Project[] = [
  {
    id: '001',
    title: 'Quick chat assistant',
    category: 'Conversational AI',
    year: '2024',
    tags: ['Agents', 'LLM UX', 'Orchestration'],
    description: 'The centralized agentic interface for AWS. Engineered the interaction model for multi-agent synthesis, allowing seamless transitions between natural language queries and complex cloud infrastructure tasks.',
    imageUrl: '/quick-chat-thumb.svg',
    videoUrl: '/Quick%20chat.mp4',
    thumbnailUrl: null,
    rotation: 2,
    span: 2,
    role: 'Principal Product Designer',
    impact: 'Latency core: 420ms • Agent trust: 99.8%'
  },
  {
    id: '002',
    title: 'Artifact lifecycle',
    category: 'Asset Governance',
    year: '2024',
    tags: ['Governance', 'Provenance', 'NDA'],
    description: 'End-to-end management of artifacts with provenance tracking, human-in-the-loop verification, and automated lifecycle policies. (Placeholder — visuals coming soon.)',
    imageUrl: '/artifact-placeholder.svg',
    videoUrl: null,
    thumbnailUrl: '/artifact-placeholder.svg',
    rotation: -1,
    role: 'Senior Product Designer',
    impact: 'Policy-driven lifecycle • Audit-ready metadata'
  },
  {
    id: '003',
    title: 'First time UX',
    category: 'Onboarding',
    year: '2024',
    tags: ['FTUX', 'Onboarding', 'Guidance'],
    description: 'First-time user experience for a new product surface. Designed a low-friction onboarding journey with progressive disclosure and clear moments of value.',
    imageUrl: '/ftux-thumb.svg',
    videoUrl: '/FTUX.mp4',
    thumbnailUrl: null,
    rotation: 1,
    role: 'Senior Product Designer',
    impact: 'Faster time-to-value • Higher activation'
  },
  {
    id: '004',
    title: 'Q Business action connector',
    category: 'Enterprise Intelligence',
    year: '2023',
    tags: ['Actions', 'Integration', 'Workflows'],
    description: 'Strategic integration of conversational AI with business application ecosystems. Enabling automated workflows across Slack, Teams, and standard enterprise toolkits.',
    imageUrl: '/action.png',
    videoUrl: null,
    thumbnailUrl: '/action.png',
    rotation: -2,
    role: 'Senior Product Designer',
    impact: 'Enterprise throughput • Precision 94.2%'
  },
  {
    id: '005',
    title: 'GenAI Evaluation',
    category: 'Model Strategy',
    year: '2023',
    tags: ['Evaluation', 'Benchmarking', 'Dashboards'],
    description: 'Visual framework for evaluating enterprise GenAI deployments. Translated complex benchmarks into interpretable dashboards for technical leadership.',
    imageUrl: '/evaluation.png',
    videoUrl: null,
    thumbnailUrl: '/evaluation.png',
    rotation: 2,
    role: 'Senior Product Designer',
    impact: 'Recall rate verified • Drift detection active'
  },
  {
    id: '006',
    title: 'SageMaker Geospatial',
    category: 'Industrial ML',
    year: '2021',
    tags: ['Mapping', 'ML Ops', 'Visualization'],
    description: 'Founding platform for AWS Geospatial intelligence. Designed the visual interaction layers for satellite imagery processing and large-scale environmental monitoring.',
    imageUrl: '/geospatial.png',
    videoUrl: null,
    thumbnailUrl: '/geospatial.png',
    rotation: -1,
    role: 'Senior Product Designer',
    impact: 'Petabyte scale • Sub-meter resolution'
  },
];

// Mail Card Component (single-face postcard: preview + details)
const MailCard: React.FC<{
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
  stackOffset: number;
}> = ({ project, index, onSelect, stackOffset }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [thumbError, setThumbError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: project.rotation }}
      animate={{ opacity: 1, y: 0, rotate: project.rotation }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
      style={{ 
        zIndex: 10 - index,
        marginTop: index === 0 ? 0 : -stackOffset
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <motion.div
        animate={{ 
          y: isHovered ? -20 : 0,
          rotate: isHovered ? 0 : project.rotation,
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="relative w-full max-w-5xl mx-auto cursor-pointer"
        onClick={() => onSelect(project)}
      >
        {/* Single-face postcard */}
        <div className="relative w-full rounded-sm overflow-hidden shadow-xl bg-white">
          <div className="p-3 md:p-4">
            <div className="grid grid-cols-1 md:grid-cols-[1.35fr_0.65fr] gap-4">
              {/* Left: visual preview */}
              <div className="relative bg-zinc-100 overflow-hidden rounded-sm border border-zinc-100 aspect-[16/10] md:aspect-auto md:min-h-[360px]">
                {project.thumbnailUrl && !thumbError ? (
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={() => setThumbError(true)}
                  />
                ) : project.videoUrl ? (
                  <video
                    src={project.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={() => setThumbError(true)}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center">
                    <span className="text-7xl text-zinc-400/30 font-serif italic">{project.id}</span>
                  </div>
                )}

                {/* Subtle overlay to support text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

                {/* Corner label */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/35 backdrop-blur-sm px-3 py-2 rounded-sm border border-white/10">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/80">Project</p>
                    <p className="text-2xl font-serif italic text-white leading-tight">{project.title}</p>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/70 mt-1">
                      {project.category}
                    </p>
                  </div>
                </div>

                {project.videoUrl && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-sm border border-white/30">
                    <span className="text-[9px] font-mono uppercase tracking-wider">Video</span>
                  </div>
                )}
              </div>

              {/* Right: postcard message */}
              <div className="relative bg-[#f8f5f0] rounded-sm border border-zinc-200/60 overflow-hidden">
                {/* lines */}
                <div
                  className="absolute inset-0 opacity-[0.035]"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 26px)',
                    backgroundPosition: '0 88px',
                  }}
                />

                <div className="relative p-5 md:p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[9px] font-mono text-zinc-400 uppercase tracking-[0.22em]">
                        Project #{project.id} • {project.year}
                      </p>
                      <h3 className="text-2xl font-serif text-zinc-900 mt-2">{project.title}</h3>
                      <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mt-1">
                        {project.category}
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelect(project);
                      }}
                      className="relative w-20 aspect-[3/4] bg-gradient-to-br from-red-800 to-red-900 p-1 shadow-md shrink-0"
                      style={{
                        clipPath: `polygon(
                          4px 0, calc(100% - 4px) 0,
                          calc(100% - 4px) 4px, 100% 4px,
                          100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px),
                          calc(100% - 4px) 100%, 4px 100%,
                          4px calc(100% - 4px), 0 calc(100% - 4px),
                          0 4px, 4px 4px
                        )`,
                      }}
                      aria-label={`Open ${project.title}`}
                    >
                      <div className="w-full h-full border border-red-100/30 flex flex-col items-center justify-center text-center p-2">
                        <span className="text-[8px] font-mono text-red-100/70 uppercase tracking-wider">Open</span>
                        <span className="text-sm font-serif italic text-white mt-1">Details</span>
                        <ArrowUpRight className="w-4 h-4 text-red-100/70 mt-2" />
                      </div>
                    </motion.button>
                  </div>

                  <div className="mt-5">
                    <p className="text-sm text-zinc-600 leading-relaxed font-serif">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider px-2 py-1 bg-white/60 border border-zinc-200/60 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-zinc-200/60">
                    <div className="space-y-2">
                      <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        Role: <span className="text-zinc-800">{project.role}</span>
                      </p>
                      <p className="text-[10px] font-mono text-zinc-500">
                        Impact: <span className="text-zinc-800">{project.impact}</span>
                      </p>
                    </div>

                    <div className="mt-5 space-y-1 text-right opacity-60">
                      <div className="ml-auto w-28 h-px bg-zinc-300" />
                      <div className="ml-auto w-24 h-px bg-zinc-300" />
                      <div className="ml-auto w-32 h-px bg-zinc-300" />
                    </div>
                  </div>

                  {/* Postmark */}
                  <div className="absolute bottom-5 right-5 opacity-15 pointer-events-none">
                    <div className="w-16 h-16 border-2 border-zinc-800 rounded-full flex items-center justify-center -rotate-12">
                      <div className="text-center">
                        <p className="text-[6px] font-mono font-bold uppercase">AWS</p>
                        <p className="text-[8px] font-mono">{project.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card shadow */}
        <div 
          className="absolute -bottom-4 left-4 right-4 h-8 bg-black/10 blur-xl -z-10 transition-all duration-300"
          style={{ opacity: isHovered ? 0.3 : 0.15 }}
        />
      </motion.div>
    </motion.div>
  );
};

// Project Detail Modal
const ProjectModal: React.FC<{
  project: Project | null;
  onClose: () => void;
}> = ({ project, onClose }) => {
  if (!project) return null;
  const [heroMediaError, setHeroMediaError] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative bg-white rounded-sm shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-zinc-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Media */}
          <div className="aspect-video bg-zinc-100 relative">
            {project.videoUrl && !heroMediaError ? (
              <video
                src={project.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                onError={() => setHeroMediaError(true)}
              />
            ) : project.thumbnailUrl && !heroMediaError ? (
              <img 
                src={project.thumbnailUrl} 
                alt={project.title}
                className="w-full h-full object-cover"
                onError={() => setHeroMediaError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-200 to-zinc-300">
                <span className="text-8xl text-zinc-400/30 font-serif italic">{project.id}</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider px-2 py-1 bg-zinc-100 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-4xl font-serif text-zinc-900 mb-4">{project.title}</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">Category</p>
                <p className="text-zinc-800">{project.category}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">Role</p>
                <p className="text-zinc-800">{project.role}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">Year</p>
                <p className="text-zinc-800">{project.year}</p>
              </div>
            </div>

            <div className="prose prose-zinc max-w-none">
              <p className="text-lg text-zinc-600 leading-relaxed">
                {project.description}
              </p>
              <p className="text-zinc-600 mt-4">
                <strong>Impact:</strong> {project.impact}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="py-24 px-6 md:px-12 max-w-5xl mx-auto" ref={containerRef}>
      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 border border-zinc-200 rounded-sm mb-6"
        >
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">
            Portfolio • Mail Collection
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl font-serif text-zinc-800 mb-4"
        >
          Postcards from Projects
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-500 font-serif italic text-lg max-w-xl mx-auto"
        >
          Each postcard includes a preview and the key story—click any card (or the stamp) to dive deeper.
        </motion.p>
      </div>

      {/* Stacked Mail Cards */}
      <div className="relative space-y-8">
        {projects.map((project, i) => (
          <MailCard
            key={project.id}
            project={project}
            index={i}
            onSelect={setSelectedProject}
            stackOffset={0}
          />
        ))}
      </div>

      {/* Decorative footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <div className="inline-flex items-center space-x-4 opacity-30">
          <div className="w-12 h-px bg-zinc-400" />
          <span className="text-[10px] font-mono uppercase tracking-[0.5em]">End of Correspondence</span>
          <div className="w-12 h-px bg-zinc-400" />
        </div>
      </motion.div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default Projects;
