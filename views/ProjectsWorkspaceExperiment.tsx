import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, MailCard, ProjectModal, Project } from './Projects';

const workspaceLayout = [
  { top: '4%', left: '6%', width: '42%', rotate: -3 },
  { top: '8%', left: '52%', width: '32%', rotate: 2 },
  { top: '36%', left: '8%', width: '30%', rotate: -6 },
  { top: '34%', left: '46%', width: '38%', rotate: 4 },
  { top: '68%', left: '18%', width: '34%', rotate: -2 },
  { top: '62%', left: '66%', width: '26%', rotate: 3 },
];

const ProjectsWorkspaceExperiment: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 border border-zinc-200 rounded-sm mb-6 bg-white/70"
        >
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">
            Portfolio • Workspace Experiment
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-serif text-zinc-800 mb-3"
        >
          The Project Worktable
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-500 font-serif italic text-base max-w-xl mx-auto"
        >
          A tactile layout of postcards dropped onto a neutral surface. Hover to lean in.
        </motion.p>
      </div>

      <div
        className="relative min-h-[920px] md:min-h-[980px] rounded-2xl border border-zinc-200/70 bg-[#f4f2ec] p-6 md:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
        style={{ perspective: '1400px' }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.18]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 4px)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.7), transparent 55%), radial-gradient(circle at 80% 10%, rgba(255,255,255,0.5), transparent 45%)',
          }}
        />

        {projects.map((project, index) => {
          const layout = workspaceLayout[index % workspaceLayout.length];
          return (
            <div
              key={project.id}
              className="absolute"
              style={{ top: layout.top, left: layout.left, width: layout.width }}
            >
              <div className="relative">
                <MailCard
                  project={{ ...project, rotation: layout.rotate }}
                  index={index}
                  onSelect={setSelectedProject}
                  stackOffset={0}
                  hoverEffect="tilt"
                  zIndexBase={index + 10}
                />
              </div>
            </div>
          );
        })}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default ProjectsWorkspaceExperiment;
