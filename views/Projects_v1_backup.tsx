
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Paperclip, X, Maximize2, ShieldCheck, ArrowUpRight, Zap, Target, Database, Lock, Globe, Image as ImageIcon, Users, Sparkles } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  desc: string;
  rotation: number;
  imageUrl: string | null;
  thumbnailUrl: string | null;
  videoUrl?: string | null;
  tags: string[];
  stats: { label: string; value: string; icon: any }[];
  span?: 1 | 2; // Grid column span
}

const projects: Project[] = [
  { 
    id: '01', 
    title: 'Quick AWS Agentic Assistant', 
    category: 'Conversational AI', 
    year: '2024', 
    desc: 'The centralized agentic interface for AWS. Engineered the interaction model for multi-agent synthesis, allowing seamless transitions between natural language queries and complex cloud infrastructure tasks.', 
    rotation: -0.5,
    imageUrl: null,
    thumbnailUrl: null,
    videoUrl: '/chat-example.mp4',
    tags: ['Agents', 'LLM UX', 'Orchestration'],
    stats: [
      { label: 'Latency_Core', value: '420ms', icon: Zap },
      { label: 'Agent_Trust', value: '99.8%', icon: ShieldCheck }
    ],
    span: 2
  },
  { 
    id: '02', 
    title: 'Social Lite FTUE', 
    category: 'Onboarding', 
    year: '2024', 
    desc: 'First-time user experience design for Social Lite. Crafted an intuitive onboarding flow that reduces time-to-value while establishing trust through progressive disclosure and contextual guidance.', 
    rotation: 1.2,
    imageUrl: null,
    thumbnailUrl: null,
    tags: ['Onboarding', 'FTUE', 'Engagement'],
    stats: [
      { label: 'Activation', value: '87%', icon: Users },
      { label: 'Time_to_Value', value: '<2min', icon: Sparkles }
    ]
  },
  { 
    id: '03', 
    title: 'Artifact Lifecycle', 
    category: 'Asset Governance', 
    year: '2024', 
    desc: 'Proprietary system for the end-to-end management of AI-generated assets. Includes provenance tracking, human-in-the-loop verification, and automated deprecation protocols.', 
    rotation: 1.5,
    imageUrl: null,
    thumbnailUrl: null,
    tags: ['Governance', 'Provenance', 'NDA'],
    stats: [
      { label: 'Security', value: 'Level_5', icon: Lock },
      { label: 'Audit_Log', value: 'Immutable', icon: Database }
    ]
  },
  { 
    id: '04', 
    title: 'Gen-AI App Evaluation', 
    category: 'Model Strategy', 
    year: '2023', 
    desc: 'Visual framework for evaluating enterprise Gen-AI deployments. Translated complex mathematical benchmarks into interpretable dashboards for technical leadership.', 
    rotation: 0.8,
    imageUrl: 'https://cdn.jsdelivr.net/gh/guoyuhan1220/Portfolio@da2008b402fb2fcc17b25add4d15207d4628b0c4/evaluation.png',
    thumbnailUrl: 'https://cdn.jsdelivr.net/gh/guoyuhan1220/Portfolio@da2008b402fb2fcc17b25add4d15207d4628b0c4/evaluation.png',
    tags: ['Evaluation', 'Benchmarking', 'Dashboards'],
    stats: [
      { label: 'Drift_Detection', value: 'Active', icon: Target },
      { label: 'Recall_Rate', value: 'Verified', icon: Database }
    ]
  },
  { 
    id: '05', 
    title: 'Q Business Action', 
    category: 'Enterprise Intelligence', 
    year: '2023', 
    desc: 'Strategic integration of conversational AI with business application ecosystems. Enabling automated workflows across Slack, Teams, and standard enterprise toolkits.', 
    rotation: -0.5,
    imageUrl: 'https://cdn.jsdelivr.net/gh/guoyuhan1220/Portfolio@da2008b402fb2fcc17b25add4d15207d4628b0c4/action.png',
    thumbnailUrl: 'https://cdn.jsdelivr.net/gh/guoyuhan1220/Portfolio@da2008b402fb2fcc17b25add4d15207d4628b0c4/action.png',
    tags: ['Actions', 'Integration', 'Workflows'],
    stats: [
      { label: 'Throughput', value: 'Enterprise', icon: Zap },
      { label: 'Precision', value: '94.2%', icon: Target }
    ]
  },
  { 
    id: '06', 
    title: 'SageMaker Geospatial', 
    category: 'Industrial ML', 
    year: '2021', 
    desc: 'Founding platform for AWS Geospatial intelligence. Designed the visual interaction layers for satellite imagery processing and large-scale environmental monitoring.', 
    rotation: 0.4,
    imageUrl: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200',
    thumbnailUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    tags: ['Mapping', 'ML Ops', 'Visualization'],
    stats: [
      { label: 'Resolution', value: 'Sub-Meter', icon: Globe },
      { label: 'Data_Scale', value: 'Petabytes', icon: Database }
    ]
  },
];

const SafeImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-zinc-50 text-zinc-300 space-y-2 ${className}`}>
        <ImageIcon className="w-8 h-8 opacity-20" />
        <span className="text-[8px] font-mono uppercase tracking-widest">Exhibit_Unavailable</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className} bg-zinc-50 overflow-hidden`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-50">
           <div className="w-4 h-4 border border-zinc-200 border-t-zinc-800 rounded-full animate-spin" />
        </div>
      )}
      <img 
        src={src} 
        alt={alt} 
        className={`${className} transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
      />
    </div>
  );
};

const SafeVideo: React.FC<{ src: string; className?: string; autoPlay?: boolean; controls?: boolean }> = ({ 
  src, 
  className, 
  autoPlay = true, 
  controls = false 
}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (error) {
    return (
      <div className={`flex flex-col items-center justify-center bg-zinc-50 text-zinc-300 space-y-2 ${className}`}>
        <ImageIcon className="w-8 h-8 opacity-20" />
        <span className="text-[8px] font-mono uppercase tracking-widest">Video_Unavailable</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className} bg-zinc-50 overflow-hidden`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-50">
           <div className="w-4 h-4 border border-zinc-200 border-t-zinc-800 rounded-full animate-spin" />
        </div>
      )}
      <video 
        src={src}
        autoPlay={autoPlay}
        loop
        muted
        playsInline
        controls={controls}
        className={`${className} transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
        onLoadedData={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
      />
    </div>
  );
};

// Component that shows thumbnail/video preview by default and plays video on hover
const HoverVideoCard: React.FC<{ 
  videoUrl: string; 
  thumbnailUrl: string | null;
  title: string;
  className?: string;
  isHovered?: boolean;
}> = ({ videoUrl, thumbnailUrl, title, className, isHovered = false }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Effect to handle play/pause based on hover state and video loaded state
  React.useEffect(() => {
    if (!videoRef.current) return;
    
    if (isHovered && videoLoaded) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isHovered, videoLoaded]);

  // If no thumbnail and video error, show placeholder
  if (videoError && (imageError || !thumbnailUrl)) {
    return (
      <div className={`flex flex-col items-center justify-center bg-zinc-50 text-zinc-300 space-y-2 ${className}`}>
        <ImageIcon className="w-8 h-8 opacity-20" />
        <span className="text-[8px] font-mono uppercase tracking-widest">Media_Unavailable</span>
      </div>
    );
  }

  // Determine if we should show the video frame as preview (when no thumbnail)
  const showVideoAsPreview = !thumbnailUrl || imageError;

  return (
    <div className={`relative ${className} bg-zinc-50 overflow-hidden`}>
      {/* Loading spinner - show while content is loading */}
      {!imageLoaded && !videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-zinc-50 z-10">
          <div className="w-4 h-4 border border-zinc-200 border-t-zinc-800 rounded-full animate-spin" />
        </div>
      )}

      {/* Thumbnail Image Layer - show when available and not hovered */}
      {thumbnailUrl && !imageError && (
        <img
          src={thumbnailUrl}
          alt={title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovered && videoLoaded ? 'opacity-0' : 'opacity-100'
          } ${imageLoaded ? '' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      )}

      {/* Video Layer - always visible when no thumbnail, plays on hover */}
      <video
        ref={videoRef}
        src={videoUrl}
        loop
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          showVideoAsPreview ? 'opacity-100' : (isHovered && videoLoaded ? 'opacity-100' : 'opacity-0')
        }`}
        onLoadedData={() => setVideoLoaded(true)}
        onError={() => setVideoError(true)}
      />
    </div>
  );
};

// Individual project card component with hover state tracking
const ProjectCard: React.FC<{
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}> = ({ project, index, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isWide = project.span === 2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      className={`group relative ${isWide ? 'md:col-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        onClick={() => onSelect(project)}
        className={`${isWide ? 'aspect-[16/9]' : 'aspect-[4/5]'} bg-white mb-4 overflow-hidden relative shadow-[0_15px_30px_-10px_rgba(0,0,0,0.06)] border border-zinc-100 cursor-zoom-in group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 ease-out p-4`}
        style={{ transform: `rotate(${project.rotation * 0.3}deg)` }}
      >
        <div className="w-full h-full flex flex-col">
          <div className="flex justify-between items-center mb-3 border-b border-zinc-50 pb-2">
            <span className="text-[8px] font-mono text-zinc-300 uppercase tracking-wider">LOG_NO.{project.id} // {project.year}</span>
            <div className={`w-1.5 h-1.5 rounded-full ${(project.imageUrl || project.videoUrl) ? 'bg-zinc-200' : 'bg-red-500 animate-pulse'}`} />
          </div>

          <div className="flex-1 min-h-0 bg-zinc-50 overflow-hidden relative flex flex-col rounded-sm">
             {project.videoUrl ? (
               <>
                 <div className="flex-1 min-h-0" aria-hidden="true" />
                 <div className="absolute inset-0 rounded-sm">
                   <HoverVideoCard 
                     videoUrl={project.videoUrl}
                     thumbnailUrl={project.thumbnailUrl}
                     title={project.title}
                     isHovered={isHovered}
                     className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isHovered ? 'scale-105' : ''}`}
                   />
                 </div>
               </>
             ) : project.thumbnailUrl ? (
               <>
                 <div className="flex-1 min-h-0" aria-hidden="true" />
                 <div className="absolute inset-0 rounded-sm">
                   <SafeImage 
                     src={project.thumbnailUrl} 
                     alt={project.title}
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                   />
                 </div>
               </>
             ) : (
               <div className="flex flex-1 flex-col items-center justify-center space-y-2 text-zinc-300">
                  <Lock className="w-8 h-8 opacity-20" />
                  <span className="text-[8px] font-mono uppercase tracking-[0.3em]">Proprietary</span>
               </div>
             )}
             
             <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
             
             {(project.imageUrl || project.videoUrl) && (
              <div className="absolute bottom-2 right-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75 pointer-events-none">
                  <div className="bg-white/90 backdrop-blur px-2 py-1 border border-zinc-100 flex items-center space-x-1.5">
                    <span className="text-[7px] font-mono uppercase tracking-wider text-zinc-900">{project.videoUrl ? 'Play' : 'View'}</span>
                    <Maximize2 className="w-2.5 h-2.5 text-zinc-400" />
                  </div>
              </div>
             )}
          </div>

          <div className="mt-3 flex justify-between items-end">
            <div className="space-y-0.5">
              <span className="text-[7px] font-mono text-zinc-400 uppercase tracking-[0.2em]">Classification</span>
              <p className="text-[9px] font-mono text-zinc-800 uppercase tracking-wider font-bold leading-tight">{project.category}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-start px-1">
        <div className="space-y-1">
          <h3 className={`${isWide ? 'text-2xl' : 'text-xl'} font-serif text-zinc-900 leading-tight`}>{project.title}</h3>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[8px] font-mono text-zinc-400 uppercase tracking-wider">#{tag}</span>
            ))}
          </div>
        </div>
        <div className="w-8 h-8 flex items-center justify-center text-zinc-200 group-hover:text-zinc-900 transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-zinc-100 pb-8">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-zinc-900 rounded-sm flex items-center justify-center">
              <Paperclip className="w-4 h-4 text-zinc-100" />
            </div>
            <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-[0.3em]">Index: Case_Files</span>
          </div>
          <h2 className="text-4xl font-serif text-zinc-800 tracking-tighter">Principal Enclosures</h2>
          <p className="max-w-md text-zinc-500 font-serif italic text-base">
            A chronological registry of interaction systems built at AWS.
          </p>
        </div>
      </div>

      {/* Grid of Artifacts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-white/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 40, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-white w-full max-w-6xl h-full max-h-[850px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden border border-zinc-100"
              onClick={e => e.stopPropagation()}
            >
              <div className="px-10 py-6 border-b border-zinc-100 flex items-center justify-between bg-white/50 backdrop-blur sticky top-0 z-20">
                <div className="flex items-center space-x-6">
                  <span className={`text-[10px] font-mono px-3 py-1 rounded-full tracking-widest uppercase ${(selectedProject.imageUrl || selectedProject.videoUrl) ? 'bg-zinc-900 text-zinc-100' : 'bg-red-900 text-red-100'}`}>
                    {selectedProject.videoUrl ? 'Video_Active' : selectedProject.imageUrl ? 'Exhibit_Verified' : 'Access_Denied'}
                  </span>
                  <h3 className="text-2xl font-serif text-zinc-900">{selectedProject.title} // AWS</h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-3 hover:bg-zinc-50 rounded-full transition-colors text-zinc-400 hover:text-zinc-900"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                {/* Visual Area */}
                <div className="flex-1 bg-zinc-100 relative group overflow-hidden flex items-center justify-center">
                   {selectedProject.videoUrl ? (
                     <>
                      <SafeVideo 
                        src={selectedProject.videoUrl}
                        className="w-full h-full object-cover"
                        controls={true}
                      />
                      <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                      
                      {/* HUD Overlays */}
                      <div className="absolute top-8 left-8 flex flex-col space-y-4 pointer-events-none">
                          {selectedProject.stats.map((stat, idx) => {
                            const Icon = stat.icon;
                            return (
                              <div key={idx} className="bg-white/95 backdrop-blur-md p-4 border border-zinc-100 flex items-center space-x-4 shadow-sm w-48">
                                <Icon className="w-5 h-5 text-zinc-900" />
                                <div className="flex flex-col">
                                  <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest">{stat.label}</span>
                                  <span className="text-[11px] font-mono font-bold text-zinc-900 tracking-tighter">{stat.value}</span>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                     </>
                   ) : selectedProject.imageUrl ? (
                     <>
                      <SafeImage 
                        src={selectedProject.imageUrl} 
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                      
                      {/* HUD Overlays */}
                      <div className="absolute top-8 left-8 flex flex-col space-y-4">
                          {selectedProject.stats.map((stat, idx) => {
                            const Icon = stat.icon;
                            return (
                              <div key={idx} className="bg-white/95 backdrop-blur-md p-4 border border-zinc-100 flex items-center space-x-4 shadow-sm w-48">
                                <Icon className="w-5 h-5 text-zinc-900" />
                                <div className="flex flex-col">
                                  <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest">{stat.label}</span>
                                  <span className="text-[11px] font-mono font-bold text-zinc-900 tracking-tighter">{stat.value}</span>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                     </>
                   ) : (
                     <div className="flex flex-col items-center space-y-8 max-w-md text-center">
                        <div className="w-24 h-24 rounded-sm border-2 border-dashed border-zinc-200 flex items-center justify-center">
                           <ShieldCheck className="w-10 h-10 text-zinc-200" />
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-2xl font-serif italic text-zinc-800 tracking-tight">Encryption Active</h4>
                          <p className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest leading-relaxed">
                            Visual artifacts for this enclosure are classified. Principal review is restricted to secure briefing sessions.
                          </p>
                        </div>
                     </div>
                   )}
                </div>

                {/* Narrative Panel */}
                <div className="w-full md:w-[420px] p-12 bg-white border-l border-zinc-100 space-y-12 overflow-y-auto">
                   <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em] block mb-4">Core Interaction</span>
                      <p className="text-zinc-700 font-serif italic text-2xl leading-snug">
                        "{selectedProject.desc}"
                      </p>
                   </div>
                   
                   <div className="space-y-6">
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em] block">Technical Architecture</span>
                      <div className="space-y-4">
                         {((selectedProject.imageUrl || selectedProject.videoUrl) ? 
                           ['Dynamic Prompt Synthesis', 'Context-Aware Graph Logic', 'Distributed Multi-Agent Consensus'] : 
                           ['E2E Encryption Standards', 'Provenance Logging', 'Policy-Based Masking']
                         ).map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                               <div className={`w-1 h-1 rounded-full mt-2 ${(selectedProject.imageUrl || selectedProject.videoUrl) ? 'bg-zinc-900' : 'bg-red-900'}`} />
                               <span className="text-[10px] font-mono text-zinc-600 leading-relaxed uppercase tracking-widest">{item}</span>
                            </div>
                          ))}
                      </div>
                   </div>

                   <div className="pt-12 border-t border-zinc-100">
                      <div className="flex flex-col space-y-6">
                        <button className={`w-full py-4 text-white text-[11px] font-mono uppercase tracking-[0.3em] flex items-center justify-center space-x-2 transition-colors rounded-sm ${(selectedProject.imageUrl || selectedProject.videoUrl) ? 'bg-zinc-900 hover:bg-zinc-800' : 'bg-red-950 hover:bg-red-900'}`}>
                           <ShieldCheck className="w-4 h-4" />
                           <span>Request Secure Briefing</span>
                        </button>
                        <p className="text-[9px] font-mono text-center text-zinc-300 uppercase tracking-[0.4em] leading-relaxed">
                          Archive Registry: AWS-AI-{selectedProject.id}<br/>
                          Verification: 2025 // Seattle_HQ
                        </p>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
