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

const ProjectPreview: React.FC<{
  project: Project;
  onMediaError: () => void;
}> = ({ project, onMediaError }) => {
  const poster = project.imageUrl ?? undefined;

  return (
    <div className="absolute inset-0 bg-white p-2">
      <div className="relative w-full h-full bg-zinc-100 overflow-hidden">
        {project.thumbnailUrl ? (
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={onMediaError}
          />
        ) : project.videoUrl ? (
          <video
            src={project.videoUrl}
            poster={poster}
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={onMediaError}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center">
            <span className="text-6xl text-zinc-400/30 font-serif italic">{project.id}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 max-w-[80%]">
          <div className="inline-block bg-black/40 backdrop-blur-sm px-3 py-2 rounded-sm border border-white/10">
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/80">Project</p>
            <p className="text-xl font-serif italic text-white leading-tight">{project.title}</p>
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/70 mt-1">
              {project.category}
            </p>
          </div>
        </div>

        {project.videoUrl && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded-sm">
            <span className="text-[9px] font-mono uppercase tracking-wider">Video</span>
          </div>
        )}
      </div>
    </div>
  );
};

// Mail Card Component (Version 1): click → morph into big postcard + 180° flip
const MailCard: React.FC<{
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
  stackOffset: number;
}> = ({ project, index, onSelect, stackOffset }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
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
        className="relative w-full max-w-lg mx-auto cursor-pointer"
        onClick={() => setIsFlipped((v) => !v)}
      >
        {/* Small postcard: two faces, flips on click (Chrome-safe) */}
        <div
          className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-xl bg-white"
          style={{ perspective: '1400px', WebkitPerspective: '1400px' }}
        >
          <div
            className="absolute inset-0"
            style={{
              transformStyle: 'preserve-3d',
              WebkitTransformStyle: 'preserve-3d',
            }}
          >
            {/* Front face (visual) */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotateY: isFlipped ? 180 : 0, opacity: isFlipped ? 0 : 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'translateZ(0.1px)',
                WebkitTransform: 'translateZ(0.1px)',
                pointerEvents: isFlipped ? 'none' : 'auto',
                willChange: 'transform',
              }}
            >
              {thumbError ? (
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center">
                  <span className="text-6xl text-zinc-400/30 font-serif italic">{project.id}</span>
                </div>
              ) : (
                <ProjectPreview project={project} onMediaError={() => setThumbError(true)} />
              )}

              {/* Postcard corner cuts */}
              <div className="absolute top-0 left-0 w-4 h-4 bg-zinc-50" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
              <div className="absolute top-0 right-0 w-4 h-4 bg-zinc-50" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} />
            </motion.div>

            {/* Back face (message + stamp) */}
            <motion.div
              className="absolute inset-0 bg-[#f8f5f0]"
              animate={{ rotateY: isFlipped ? 0 : -180, opacity: isFlipped ? 1 : 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'translateZ(0px)',
                WebkitTransform: 'translateZ(0px)',
                pointerEvents: isFlipped ? 'auto' : 'none',
                willChange: 'transform',
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.035] pointer-events-none"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 26px)',
                  backgroundPosition: '0 88px',
                }}
              />

              <div className="relative h-full p-5 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[9px] font-mono text-zinc-400 uppercase tracking-[0.22em]">
                      Project #{project.id} • {project.year}
                    </p>
                    <h3 className="text-2xl font-serif text-zinc-900 mt-2 truncate">{project.title}</h3>
                    <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mt-1">
                      {project.role}
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsFlipped(false);
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
                      <span className="text-[8px] font-mono text-red-100/70 uppercase tracking-wider">Read</span>
                      <span className="text-sm font-serif italic text-white mt-1">Case</span>
                      <span className="text-sm font-serif italic text-white -mt-1">Study</span>
                      <ArrowUpRight className="w-4 h-4 text-red-100/70 mt-2" />
                    </div>
                  </motion.button>
                </div>

                <div className="mt-5">
                  <p className="text-sm text-zinc-600 leading-relaxed font-serif">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-zinc-200/60 space-y-2">
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    Impact: <span className="text-zinc-800">{project.impact}</span>
                  </p>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    Click anywhere to flip back
                  </p>
                </div>
              </div>
            </motion.div>
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
        
        {/* Text-only modal (no preview media) */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 18 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 18 }}
          transition={{ type: 'spring', damping: 24, stiffness: 240 }}
          className="relative w-full max-w-3xl bg-[#f8f5f0] rounded-sm shadow-2xl overflow-hidden border border-zinc-200/60"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-zinc-100 transition-colors border border-zinc-200/60"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 28px)',
              backgroundPosition: '0 96px',
            }}
          />

          <div className="relative p-7 md:p-10 space-y-8">
            <div className="space-y-2">
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.22em]">
                Project #{project.id}
              </p>
              <h2 className="text-3xl font-serif text-zinc-900">{project.title}</h2>
              <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                {project.category} • {project.year}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-mono text-zinc-600 uppercase tracking-wider px-2 py-1 bg-white/60 border border-zinc-200/60 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose prose-zinc max-w-none">
              <p className="text-base text-zinc-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-200/60 space-y-3">
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                Role: <span className="text-zinc-800">{project.role}</span>
              </p>
              <p className="text-[10px] font-mono text-zinc-500">
                Impact: <span className="text-zinc-800">{project.impact}</span>
              </p>
            </div>

            <div className="pt-2">
              <button
                className="w-full py-4 bg-zinc-900 text-white text-[11px] font-mono uppercase tracking-[0.3em] rounded-sm hover:bg-zinc-800 transition-colors"
              >
                Request Secure Briefing
              </button>
              <p className="text-[9px] font-mono text-center text-zinc-300 uppercase tracking-[0.4em] leading-relaxed mt-4">
                Archive Registry: AWS-AI-{project.id}<br/>
                Verification: {project.year} // Seattle_HQ
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
    <div className="py-16 px-6 md:px-12 max-w-5xl mx-auto" ref={containerRef}>
      {/* Section Header */}
      <div className="text-center mb-12">
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
          className="text-4xl font-serif text-zinc-800 mb-3"
        >
          Postcards from Projects
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-500 font-serif italic text-base max-w-xl mx-auto"
        >
          Flip each card to read the story behind the work. Click the stamp to dive deeper.
        </motion.p>
      </div>

      {/* Stacked Mail Cards */}
      <div className="relative space-y-6">
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
        className="mt-16 text-center"
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
