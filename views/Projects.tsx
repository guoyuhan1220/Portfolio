import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Play, Pause } from 'lucide-react';

export interface Project {
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

const GEOSPATIAL_DEMO_URL = 'https://youtube.com/watch?t=2450&v=TL2HtX-FmiQ&feature=youtu.be';

const renderProjectDescription = (project: Project, includeLink: boolean = true) => {
  if (project.id !== '006') {
    return project.description;
  }

  if (!includeLink) {
    return project.description;
  }

  return (
    <>
      {project.description}{' '}
      <a
        href={GEOSPATIAL_DEMO_URL}
        target="_blank"
        rel="noreferrer"
        className="text-zinc-900 underline decoration-zinc-300 hover:decoration-zinc-600"
      >
        View demo
      </a>
      .
    </>
  );
};

export const projects: Project[] = [
  {
    id: '001',
    title: 'Amazon Quick Suite: Leading the Design of an Enterprise AI Platform',
    category: 'Conversational AI',
    year: '2025',
    tags: ['Agents', 'LLM UX', 'Orchestration'],
    description: 'Designed the centralized agentic interface unifying five fragmented tools into one conversational experience, serving 639k users with 92.5% weekly retention.',
    imageUrl: '/quick%20suite%20project/redesign.png',
    videoUrl: '/Quick%20chat.mp4',
    thumbnailUrl: '/quick%20suite%20project/redesign.png',
    rotation: 2,
    span: 2,
    role: 'Principal Product Designer',
    impact: 'Latency core: 420ms • Agent trust: 99.8%'
  },
  {
    id: '002',
    title: 'AI-Powered Document Creation and Management for Business Teams',
    category: 'Asset Governance',
    year: '2024',
    tags: ['Governance', 'Provenance', 'NDA'],
    description: 'Led the design of an AI artifact lifecycle that helps business users turn generated content into trusted, reusable documents—improving clarity, collaboration, and downstream execution at scale.',
    imageUrl: '/Artifact/Artifact%20hub/Featured.jpg',
    videoUrl: null,
    thumbnailUrl: '/Artifact/Artifact%20hub/Featured.jpg',
    rotation: -1,
    role: 'Senior Product Designer',
    impact: 'Policy-driven lifecycle • Audit-ready metadata'
  },
  {
    id: '003',
    title: 'Onboarding that delivers value in 5 minutes',
    category: 'Onboarding',
    year: '2024',
    tags: ['FTUX', 'Onboarding', 'Guidance'],
    description: 'First-time user experience for a new product surface. Designed a low-friction onboarding journey with progressive disclosure and clear moments of value.',
    imageUrl: '/FTUX video cover.png',
    videoUrl: '/FTUX.mp4',
    thumbnailUrl: '/FTUX video cover.png',
    rotation: 1,
    role: 'Senior Product Designer',
    impact: 'Faster time-to-value • Higher activation'
  },
  {
    id: '004',
    title: 'From Insight to Action: Shipping Action Connectors',
    category: 'Act on AI Insights',
    year: '2024',
    tags: ['Actions', 'Integration', 'Workflows'],
    description: 'Led the design of a scalable action-connector framework, streamlining MCP-based setup and integrating connectors into conversational flows so business users can act instantly, without leaving context.',
    imageUrl: '/Q business action connector/Integration.png',
    videoUrl: null,
    thumbnailUrl: '/Q business action connector/Integration.png',
    rotation: -2,
    role: 'Senior Product Designer',
    impact: 'Enterprise throughput • Precision 94.2%'
  },
  {
    id: '005',
    title: 'Unifying GenAI evaluation across AWS',
    category: 'GenAI App Evaluation',
    year: '2023',
    tags: ['Evaluation', 'Benchmarking', 'Dashboards'],
    description: 'Led the design vision that unified AWS\'s GenAI evaluation strategy across Bedrock and Q Business, aligning multiple teams under one framework — reshaping the 2024 roadmap and securing funding for a dedicated team of 12.',
    imageUrl: '/evaluation.png',
    videoUrl: null,
    thumbnailUrl: '/evaluation.png',
    rotation: 2,
    role: 'Lead Designer',
    impact: 'Selected as top 3 Op1 idea • Secured funding for team of 12'
  },
  {
    id: '006',
    title: 'Geospatial ML for 1,500+ organizations',
    category: 'Industrial ML',
    year: '2022',
    tags: ['Mapping', 'ML Ops', 'Visualization'],
    description:
      'Founding designer for SageMaker Geospatial, transformed enterprise geospatial ML adoption from 3% to production-ready solution. Designed industry-first collaborative map visualization (patent filed 2023), delivered 600% cost savings for DataFarming, and scaled design to Earth on AWS Viewer serving 1,500+ organizations.',
    imageUrl: '/Geospatial/map.gif',
    videoUrl: null,
    thumbnailUrl: '/Geospatial/map.gif',
    rotation: -1,
    role: 'Senior Product Designer',
    impact: 'Petabyte scale • Sub-meter resolution'
  },
  {
    id: '007',
    title: 'Scalable data labeling for ML training',
    category: 'Data Operations',
    year: '2021',
    tags: ['Labeling', 'Quality', 'Workflow'],
    description: 'Built ground-truth pipelines and review workflows to scale high-quality labels for ML training and evaluation.',
    imageUrl: '/data.avif',
    videoUrl: null,
    thumbnailUrl: '/data.avif',
    rotation: 1,
    role: 'Senior Product Designer',
    impact: 'Higher label quality • Faster throughput'
  },
  {
    id: '008',
    title: 'No-code workflow automation platform',
    category: 'Identity Automation',
    year: '2017',
    tags: ['Okta', 'Automation', 'Provisioning'],
    description:
      "Led the end-to-end design of Okta’s enterprise-grade no-code integration platform, empowering users to automate complex business processes without writing a single line of code. The solution centers on an intuitive drag-and-drop canvas where users can connect third-party applications to build robust, trigger-based workflows that execute automatically.",
    imageUrl: '/Okta/Okta.png',
    videoUrl: null,
    thumbnailUrl: '/Okta/Okta.png',
    rotation: -2,
    role: 'Senior Product Designer',
    impact: 'Faster access changes • Reduced admin overhead'
  },
];

const ProjectPreview: React.FC<{
  project: Project;
  onMediaError: () => void;
  isHovered?: boolean;
  showOverlay?: boolean;
}> = ({ project, onMediaError, isHovered = false, showOverlay = true }) => {
  const poster = project.imageUrl ?? undefined;
  const isGeospatial = project.id === '006';
  const isArtifactLifecycle = project.id === '002';
  const isFtux = project.id === '003';
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isFtux || !videoRef.current) return;
    if (isHovered) {
      videoRef.current.play().catch(() => undefined);
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered, isFtux]);

  return (
    <div className="absolute inset-0 bg-white p-2">
      <div className="relative w-full h-full bg-zinc-100 overflow-hidden">
        {project.thumbnailUrl ? (
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            className={`w-full h-full ${
              isGeospatial
                ? 'object-contain bg-zinc-900'
                : isArtifactLifecycle
                  ? 'object-contain bg-white'
                  : 'object-cover'
            }`}
            onError={onMediaError}
          />
        ) : project.videoUrl ? (
          <video
            ref={videoRef}
            src={project.videoUrl}
            poster={poster}
            preload="metadata"
            autoPlay={!isFtux}
            loop
            muted
            playsInline
            className={`w-full h-full ${isGeospatial ? 'object-contain bg-zinc-900' : 'object-cover'}`}
            onError={onMediaError}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center">
            <span className="text-6xl text-zinc-400/30 font-serif italic">{project.id}</span>
          </div>
        )}

        {showOverlay && (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-white/45 via-white/5 to-transparent" />
            <div className="absolute bottom-4 left-4 max-w-[80%]">
              <div className="inline-block bg-black/40 backdrop-blur-sm px-3 py-2 rounded-sm border border-white/10">
                <p className="text-xl font-serif italic text-white leading-tight">{project.title}</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-white/70 mt-1">
                  {project.category}
                </p>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

// Mail Card Component (Version 1): click → morph into big postcard + 180° flip
export const MailCard: React.FC<{
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
  stackOffset: number;
  hoverEffect?: 'lift' | 'tilt';
  zIndexBase?: number;
  showShadow?: boolean;
  disableFlip?: boolean;
  frontVariant?: 'full' | 'image-top';
  onCardClick?: (project: Project) => void;
}> = ({
  project,
  index,
  onSelect,
  stackOffset,
  hoverEffect = 'lift',
  zIndexBase,
  showShadow = true,
  disableFlip = false,
  frontVariant = 'full',
  onCardClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [thumbError, setThumbError] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const isTilt = hoverEffect === 'tilt';

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / rect.height) * 10;
    const rotateY = (x / rect.width) * 12;
    setTilt({ x: rotateX, y: rotateY });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: project.rotation }}
        animate={{ opacity: 1, y: 0, rotate: project.rotation }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`relative ${isFlipped ? 'opacity-0 pointer-events-none' : ''}`}
        style={{
          zIndex: isFlipped ? 100 : isHovered && isTilt ? 60 : (zIndexBase ?? 10 - index),
          marginTop: index === 0 ? 0 : -stackOffset,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          if (isTilt) setTilt({ x: 0, y: 0 });
        }}
      >
        <motion.div
        animate={{ 
          y: isHovered ? (isTilt ? -12 : -20) : 0,
          rotate: isTilt ? project.rotation : (isHovered ? 0 : project.rotation),
          scale: isFlipped ? 1.04 : isHovered ? (isTilt ? 1.04 : 1.02) : 1,
          rotateX: isTilt ? tilt.x : 0,
          rotateY: isTilt ? tilt.y : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className={`relative w-full cursor-pointer ${isFlipped ? 'max-w-4xl' : ''} mx-auto`}
        style={{ transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onClick={() => {
          if (disableFlip) {
            (onCardClick ?? onSelect)(project);
            return;
          }
          if (project.id === '003') {
            onSelect(project);
            return;
          }
          setIsFlipped((v) => !v);
        }}
        ref={cardRef}
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
              {frontVariant === 'image-top' ? (
                <div className="absolute inset-0 bg-[#f8f5f0]">
                  <div className="relative w-full h-full">
                    {thumbError ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center">
                        <span className="text-5xl text-zinc-400/30 font-serif italic">{project.id}</span>
                      </div>
                    ) : (
                      <ProjectPreview
                        project={project}
                        onMediaError={() => setThumbError(true)}
                        isHovered={isHovered}
                        showOverlay={false}
                      />
                    )}
                    <div className="absolute inset-x-0 bottom-0 bg-[#f8f5f0]/95 border-t border-zinc-200/80 px-4 py-3">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="text-sm font-serif text-zinc-900 leading-snug line-clamp-1">{project.title}</p>
                        <p className="text-[9px] font-mono uppercase tracking-[0.24em] text-zinc-500 shrink-0 mt-0.5">
                          {project.year}
                        </p>
                      </div>
                      <p className="text-[11px] text-zinc-500 leading-relaxed line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </div>
              ) : thumbError ? (
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center">
                  <span className="text-6xl text-zinc-400/30 font-serif italic">{project.id}</span>
                </div>
              ) : (
                <ProjectPreview
                  project={project}
                  onMediaError={() => setThumbError(true)}
                  isHovered={isHovered}
                />
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
                    {renderProjectDescription(project)}
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
        {showShadow && (
          <div
            className="absolute -bottom-4 left-4 right-4 h-8 bg-black/10 blur-xl -z-10 transition-all duration-300"
            style={{ opacity: isHovered ? 0.3 : 0.15 }}
          />
        )}
        </motion.div>
      </motion.div>

      {isFlipped && typeof document !== 'undefined' &&
        createPortal(
          <div className="fixed inset-0 z-[1000] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={() => setIsFlipped(false)} />
            <motion.div
              animate={{ scale: 1 }}
              initial={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="relative w-full max-w-4xl px-4"
            >
              <div className="relative w-full cursor-pointer mx-auto">
                {/* Small postcard: two faces, flips on click (Chrome-safe) */}
                <div
                  className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-xl bg-white"
                  style={{ perspective: '1400px', WebkitPerspective: '1400px' }}
                  onClick={() => setIsFlipped(false)}
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
                      <ProjectPreview
                        project={project}
                        isHovered={isHovered}
                        onMediaError={() => setThumbError(true)}
                      />
                    </motion.div>

                    {/* Back face (text) */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{ rotateY: isFlipped ? 0 : -180, opacity: isFlipped ? 1 : 0 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg) translateZ(0.1px)',
                        WebkitTransform: 'rotateY(180deg) translateZ(0.1px)',
                        pointerEvents: isFlipped ? 'auto' : 'none',
                        willChange: 'transform',
                      }}
                    >
                      <div className="absolute inset-0 bg-white">
                        <div className="h-full p-6 flex flex-col">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                                {project.category}
                              </p>
                              <h3 className="text-2xl font-serif text-zinc-800 mt-1">{project.title}</h3>
                              <p className="text-xs font-mono text-zinc-500 mt-1">{project.year}</p>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsFlipped(false);
                              }}
                              className="p-2 rounded-full hover:bg-zinc-100 transition-colors"
                              aria-label="Close"
                            >
                              <X className="w-4 h-4 text-zinc-500" />
                            </button>
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

                          <div className="prose prose-zinc max-w-none mt-4">
                            <p className="text-base text-zinc-600 leading-relaxed">
                              {renderProjectDescription(project)}
                            </p>
                          </div>

                          <div className="mt-auto pt-6 border-t border-zinc-200/60 space-y-2">
                            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                              Impact: <span className="text-zinc-800">{project.impact}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>,
          document.body
        )}
    </>
  );
};

// Project Detail Modal
export const ProjectModal: React.FC<{
  project: Project | null;
  onClose: () => void;
}> = ({ project, onClose }) => {
  if (!project) return null;
  const navigate = useNavigate();
  const caseStudyRoute = project ? caseStudyRoutes[project.id] : undefined;

  const isFtux = project.id === '003';
  const isGeospatialModal = project.id === '006';
  const isAutomationWorkflow = project.id === '008';
  const ftuxModalVideo = '/FTUX short.mp4';
  const ftuxModalPoster = '/FTUX video cover.png';
  const ftuxVideoRef = useRef<HTMLVideoElement>(null);
  const [ftuxPlaying, setFtuxPlaying] = useState(false);
  const [ftuxProgress, setFtuxProgress] = useState(0);
  const [ftuxDuration, setFtuxDuration] = useState(0);

  const toggleFtuxPlayback = () => {
    const video = ftuxVideoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  };

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
          className={`relative w-full ${isFtux || isGeospatialModal || isAutomationWorkflow ? 'max-w-5xl' : 'max-w-3xl'} max-h-[95vh] bg-[#f8f5f0] rounded-sm shadow-2xl overflow-hidden border border-zinc-200/60`}
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

          <div className="relative p-7 md:p-10 space-y-8 overflow-y-auto max-h-[95vh]">
            {isFtux ? (
              <div className="grid md:grid-cols-[1.25fr_0.75fr] gap-8 items-start">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-sm border border-zinc-200 bg-zinc-900">
                    <video
                      ref={ftuxVideoRef}
                      src={ftuxModalVideo}
                      poster={ftuxModalPoster}
                      playsInline
                      className="w-full h-full object-contain bg-zinc-900"
                      onLoadedMetadata={(event) => {
                        const target = event.currentTarget;
                        setFtuxDuration(target.duration || 0);
                      }}
                      onTimeUpdate={(event) => setFtuxProgress(event.currentTarget.currentTime)}
                      onPlay={() => setFtuxPlaying(true)}
                      onPause={() => setFtuxPlaying(false)}
                    />
                    <button
                      type="button"
                      onClick={toggleFtuxPlayback}
                      className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                        ftuxPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
                      }`}
                      aria-label={ftuxPlaying ? 'Pause' : 'Play'}
                    >
                      <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/90 text-zinc-900 shadow-md border border-white/70">
                        <Play className="w-5 h-5 ml-0.5" />
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center gap-3 rounded-sm border border-zinc-200 bg-white/90 px-3 py-2 text-xs text-zinc-600">
                    <button
                      type="button"
                      onClick={toggleFtuxPlayback}
                      className="w-7 h-7 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-700 hover:text-zinc-900 hover:border-zinc-300 transition-colors"
                      aria-label={ftuxPlaying ? 'Pause' : 'Play'}
                    >
                      {ftuxPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    </button>
                    <input
                      type="range"
                      min={0}
                      max={ftuxDuration || 0}
                      step={0.1}
                      value={ftuxProgress}
                      onChange={(event) => {
                        const value = Number(event.target.value);
                        setFtuxProgress(value);
                        if (ftuxVideoRef.current) {
                          ftuxVideoRef.current.currentTime = value;
                        }
                      }}
                      className="flex-1 accent-zinc-700"
                    />
                    <span className="tabular-nums text-[11px] text-zinc-500">
                      {Math.floor(ftuxProgress / 60)
                        .toString()
                        .padStart(2, '0')}
                      :
                      {Math.floor(ftuxProgress % 60)
                        .toString()
                        .padStart(2, '0')}
                      /{' '}
                      {Math.floor(ftuxDuration / 60)
                        .toString()
                        .padStart(2, '0')}
                      :
                      {Math.floor(ftuxDuration % 60)
                        .toString()
                        .padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
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
                  <p className="text-base text-zinc-600 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="pt-4 border-t border-zinc-200/60 space-y-2">
                    <p className="text-[10px] font-mono text-zinc-500">
                      Impact: <span className="text-zinc-800">{project.impact}</span>
                    </p>
                  </div>
                </div>
              </div>
            ) : isGeospatialModal ? (
              <div className="grid md:grid-cols-[1fr_1fr] gap-8 items-start">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-sm border border-zinc-200 bg-zinc-900">
                    <img
                      src="/Geospatial/map.gif"
                      alt={project.title}
                      className="w-full h-full object-contain bg-zinc-900"
                    />
                  </div>
                </div>
                <div className="space-y-4">
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
                  <p className="text-base text-zinc-600 leading-relaxed">
                    {renderProjectDescription(project, false)}
                  </p>
                  <a
                    href={GEOSPATIAL_DEMO_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block w-full py-4 bg-zinc-900 text-white text-[11px] font-mono uppercase tracking-[0.3em] rounded-sm hover:bg-zinc-800 transition-colors text-center"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            ) : isAutomationWorkflow ? (
              <div className="grid md:grid-cols-[1fr_1fr] gap-8 items-start">
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-sm border border-zinc-200 bg-transparent">
                    <img
                      src="/Okta/cover.png"
                      alt={project.title}
                      className="w-full h-full object-contain bg-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-4">
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
                  <p className="text-base text-zinc-600 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href="https://www.okta.com/products/workflows/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block w-full py-4 bg-zinc-900 text-white text-[11px] font-mono uppercase tracking-[0.3em] rounded-sm hover:bg-zinc-800 transition-colors text-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ) : (
              <>
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
                    {renderProjectDescription(project)}
                  </p>
                </div>

                <div className="pt-2" />

                <div className="pt-2">
                  {caseStudyRoute ? (
                    <button
                      onClick={() => {
                        onClose();
                        navigate(caseStudyRoute);
                      }}
                      className="w-full py-4 bg-zinc-900 text-white text-[11px] font-mono uppercase tracking-[0.3em] rounded-sm hover:bg-zinc-800 transition-colors"
                    >
                      Open Case Study
                    </button>
                  ) : project.id === '006' ? (
                    <a
                      href={GEOSPATIAL_DEMO_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full py-4 bg-zinc-900 text-white text-[11px] font-mono uppercase tracking-[0.3em] rounded-sm hover:bg-zinc-800 transition-colors text-center"
                    >
                      View Demo
                    </a>
                  ) : project.id === '008' ? (
                    <a
                      href="https://www.okta.com/products/workflows/"
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full py-4 bg-zinc-900 text-white text-[11px] font-mono uppercase tracking-[0.3em] rounded-sm hover:bg-zinc-800 transition-colors text-center"
                    >
                      Learn More
                    </a>
                  ) : (
                    <button className="w-full py-4 bg-zinc-900 text-white text-[11px] font-mono uppercase tracking-[0.3em] rounded-sm hover:bg-zinc-800 transition-colors">
                      Request Secure Briefing
                    </button>
                  )}
                  <p className="text-[9px] font-mono text-center text-zinc-300 uppercase tracking-[0.4em] leading-relaxed mt-4">
                    Archive Registry: AWS-AI-{project.id}<br/>
                    Verification: {project.year} // Seattle_HQ
                  </p>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const caseStudyRoutes: Record<string, string> = {
  '001': '/case-study/quick-suite',
  '002': '/case-study/artifact-lifecycle',
  '004': '/case-study/q-business-action-connector',
  '005': '/case-study/genai-evaluation',
  '007': '/case-study/data-labeling-ground-truth',
};

// Impact highlights per project
const impactHighlights: Record<string, string> = {
  '001': '639k users • 92.5% retention',
  '002': 'Document • Slide • Image • Podcast • Spreadsheet',
  '004': 'Enterprise connector platform',
  '003': 'Value in first 5 minutes',
  '005': 'Funded dedicated team of 12',
  '006': '600% cost savings • Patent filed',
  '007': 'Higher label quality at scale',
  '008': 'No-code enterprise automation',
};

// Paper texture for physical card feel
const cardPaperTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;

// Featured project card — physical card with tilt hover
const FeaturedCard: React.FC<{
  project: Project;
  onClick: (project: Project) => void;
  index: number;
}> = ({ project, onClick, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isHovered) {
      videoRef.current.play().catch(() => undefined);
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (-y / rect.height) * 8,
      y: (x / rect.width) * 10,
    });
  };

  const impact = impactHighlights[project.id] ?? project.impact;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -120px 0px', amount: 0.2 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="cursor-pointer"
      style={{ perspective: '1200px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setTilt({ x: 0, y: 0 }); }}
    >
      <motion.div
        ref={cardRef}
        animate={{
          y: isHovered ? -10 : 0,
          scale: isHovered ? 1.02 : 1,
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onMouseMove={handleMouseMove}
        onClick={() => onClick(project)}
        className="relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Dynamic shadow */}
        <motion.div
          className="absolute left-3 right-3 -bottom-3 h-8 rounded-full -z-10"
          animate={{
            opacity: isHovered ? 0.2 : 0.08,
            scaleX: 1 + Math.abs(tilt.y) * 0.015,
            x: tilt.y * -1.5,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.35) 0%, transparent 70%)',
            filter: 'blur(10px)',
          }}
        />

        <div
          className="relative rounded-sm overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #f8f5f0 0%, #efe9e0 100%)',
            boxShadow: isHovered
              ? '0 25px 50px -12px rgba(0,0,0,0.15), 0 12px 24px -8px rgba(0,0,0,0.08)'
              : '0 8px 24px -6px rgba(0,0,0,0.08), 0 4px 10px -4px rgba(0,0,0,0.04)',
          }}
        >
          {/* Paper texture overlay — fades on hover so image is clean */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-multiply z-10 transition-opacity duration-300"
            style={{ backgroundImage: cardPaperTexture, opacity: isHovered ? 0 : 0.3 }}
          />

          {/* Top edge — postal markings */}
          <div className="relative z-20 flex items-center justify-between px-4 py-2.5 border-b border-amber-900/15">
            <span className="text-[9px] font-mono text-amber-900/60 uppercase tracking-[0.25em]">
              {project.category}
            </span>
            <span className="text-[9px] font-mono text-amber-900/55">{project.year}</span>
          </div>

          {/* Image area */}
          <div className={`relative overflow-hidden h-[240px] md:h-[280px] z-0 ${project.id === '004' ? '' : project.id === '005' ? 'bg-[#F5F6F9]' : ''}`}>
            {project.videoUrl && project.id !== '003' ? (
              <>
                {project.thumbnailUrl && (
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className={`absolute inset-0 w-full h-full object-cover object-left-top transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                  />
                )}
                <video
                  ref={videoRef}
                  src={project.videoUrl}
                  muted
                  loop
                  playsInline
                  className={`w-full h-full object-cover ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                />
              </>
            ) : project.thumbnailUrl ? (
              <img
                src={project.thumbnailUrl}
                alt={project.title}
                className={`w-full h-full ${project.id === '005' ? 'object-contain' : 'object-cover object-left-top'}`}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-zinc-100 to-zinc-200" />
            )}
          </div>

          {/* Content area — message side of postcard */}
          <div className="relative z-20 px-5 py-4 border-t border-amber-900/15">
            <h3 className="text-[17px] font-serif text-zinc-800 mb-2 leading-snug">{project.title}</h3>
            <p className="text-[12px] text-zinc-600 leading-relaxed line-clamp-2 mb-3">{project.description}</p>
            <div className="flex items-center justify-between pt-2.5 border-t border-amber-900/12">
              <span className="text-[9px] font-mono text-amber-900/60 uppercase tracking-wider">{impact}</span>
              <span className="text-[9px] font-mono text-amber-900/45 italic">Read case study →</span>
            </div>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleProjectClick = (project: Project) => {
    const route = caseStudyRoutes[project.id];
    if (route) {
      navigate(route);
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'auto' }), 0);
      });
      return;
    }
    setSelectedProject(project);
  };

  // Primary: the 4 case studies you want prominent
  const primaryIds = new Set(['001', '002', '004', '005']);
  const primaryProjects = projects.filter((p) => primaryIds.has(p.id));
  const secondaryProjects = projects.filter((p) => !primaryIds.has(p.id));

  return (
    <div className="py-20 px-6 md:px-12 lg:px-16 max-w-[1200px] mx-auto" ref={containerRef}>
      {/* Section Header */}
      <div className="mb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          className="text-[11px] font-mono text-zinc-400 uppercase tracking-[0.3em] mb-4"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          transition={{ delay: 0.05 }}
          className="text-4xl md:text-5xl font-serif text-zinc-900 leading-[1.1] mb-4"
        >
          Designing AI products at scale
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          transition={{ delay: 0.1 }}
          className="text-lg text-zinc-500 max-w-[640px] mx-auto leading-relaxed"
        >
          From conversational AI to enterprise automation — designing how millions interact with intelligent systems.
        </motion.p>
      </div>

      {/* Primary: Featured project cards — 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {primaryProjects.map((project, i) => (
          <FeaturedCard
            key={project.id}
            project={project}
            onClick={handleProjectClick}
            index={i}
          />
        ))}
      </div>

      {/* Secondary: Clean grid */}
      <div className="mb-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '0px 0px -80px 0px' }}
          className="flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-zinc-200" />
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em] shrink-0">
            More Projects
          </span>
          <div className="h-px flex-1 bg-zinc-200" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {secondaryProjects.map((project, index) => {
          const hasCaseStudy = Boolean(caseStudyRoutes[project.id]);
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -80px 0px' }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group cursor-pointer"
              onClick={() => {
                if (hasCaseStudy) handleProjectClick(project);
                else setSelectedProject(project);
              }}
            >
              <div className="relative rounded-lg overflow-hidden bg-zinc-100 border border-zinc-200/60 transition-all duration-300 hover:shadow-lg hover:border-zinc-300/80 hover:-translate-y-1">
                {/* Image */}
                <div className={`relative overflow-hidden h-[200px] sm:h-[240px] ${
                  project.id === '008' ? 'bg-[#F0EBE3]' : ''
                }`}>
                  {project.thumbnailUrl && (
                    <img
                      src={project.thumbnailUrl}
                      alt={project.title}
                      className={`w-full h-full transition-transform duration-500 group-hover:scale-[1.03] ${
                        project.id === '008' ? 'object-contain p-4' : 'object-cover'
                      }`}
                    />
                  )}
                </div>
                {/* Info */}
                <div className="p-5 bg-white">
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h3 className="text-[15px] font-semibold text-zinc-900 leading-snug line-clamp-1">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider shrink-0 mt-0.5">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-[13px] text-zinc-500 leading-relaxed line-clamp-2">
                    {renderProjectDescription(project, true)}
                  </p>
                  <div className="flex items-center gap-1.5 mt-3 text-zinc-400 group-hover:text-zinc-900 transition-colors">
                    <span className="text-[11px] font-medium">
                      {hasCaseStudy ? 'View case study' : 'View details'}
                    </span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default Projects;
