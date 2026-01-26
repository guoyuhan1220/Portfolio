
import React, { useRef } from 'react';
import { motion, useTransform, useMotionValue, useSpring, Variants } from 'framer-motion';

const Intro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [1.5, -1.5]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-1.5, 1.5]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15,
        delayChildren: 0.5
      }
    }
  };

  const lineVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-6 py-12 md:py-20 perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      ref={containerRef}
    >
      <svg className="hidden">
        <filter id="ink-bleed-heavy">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
          <feGaussianBlur stdDeviation="0.4" />
          <feComponentTransfer>
             <feFuncA type="discrete" tableValues="0 1 1 1 1 1" />
          </feComponentTransfer>
        </filter>
      </svg>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ 
          rotateX, 
          rotateY,
          backgroundImage: 'linear-gradient(#f9f9f9 1.5px, transparent 1.5px)',
          backgroundSize: '100% 2.8rem',
          backgroundPosition: '0 4.5rem'
        }}
        className="relative bg-white w-full max-w-4xl p-8 md:p-16 letter-shadow rounded-sm border border-zinc-100 overflow-hidden"
      >
        {/* Decorative Side Margin Line - Matching Screenshot */}
        <div className="absolute left-10 md:left-20 top-0 bottom-0 w-[1px] bg-red-400/20 z-20" />

        {/* Header Metadata - Exactly like screenshot */}
        <div className="flex justify-between items-start mb-24 relative z-10">
          <div className="space-y-1">
             <div className="text-[10px] font-mono font-medium text-zinc-400 uppercase tracking-[0.4em]">Official Communication</div>
             <div className="text-[9px] font-mono text-zinc-300 italic tracking-wider">REF: YG_2025_ARCHIVE</div>
          </div>
          <div className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest text-right leading-tight">
             SEATTLE<br/>WA 98101
          </div>
        </div>

        <div className="space-y-10 max-w-2xl relative z-10 ml-8 md:ml-12">
          <motion.h2 variants={lineVariants} className="text-5xl font-serif italic text-zinc-400 mb-4">
            Salutations,
          </motion.h2>

          <div className="space-y-8 font-serif text-[26px] leading-[3.2rem] text-zinc-600">
            <motion.p variants={lineVariants}>
              I am a <span className="text-zinc-900 font-medium italic underline decoration-zinc-200 underline-offset-8">Principal Product Designer</span> with 
              over <span className="text-zinc-900 font-medium">10 years</span> of specialized focus in AI/ML interaction systems.
            </motion.p>
            
            <motion.p variants={lineVariants}>
              Currently leading strategy for <span className="text-zinc-900 font-medium italic">AWS’s AI Platform</span>, 
              defining the interaction models for high-stakes agentic workflows and generative product ecosystems.
            </motion.p>

            <motion.p variants={lineVariants} className="text-[22px] text-zinc-400 font-light italic mt-12">
              "Focusing on the intersection of human trust and automated precision."
            </motion.p>
          </div>
        </div>

        {/* Signature Area */}
        <div className="mt-32 pt-12 border-t border-zinc-100 flex flex-col md:flex-row md:items-end justify-between items-start gap-12 relative z-10">
           <div className="relative flex flex-col">
             <span className="text-[8px] font-mono text-zinc-300 uppercase tracking-[0.4em] mb-4">Identity Verified</span>
             <span className="text-6xl md:text-7xl font-hand text-zinc-900 -rotate-2 ml-[-10px] select-none hover:rotate-0 transition-all duration-1000 opacity-90"
                   style={{ filter: 'url(#ink-bleed-heavy)' }}>
               Yuhan Guo
             </span>
           </div>
           
           <div className="relative group self-center md:self-auto">
              <div className="absolute inset-0 bg-red-950/5 blur-xl rounded-full scale-125 -z-10" />
              
              <div className="relative border-[2.5px] border-red-950 rounded-sm p-4 w-60 rotate-1 mix-blend-multiply opacity-90 transition-all duration-700 hover:rotate-0"
                   style={{ filter: 'url(#ink-bleed-heavy)' }}>
                <div className="border border-red-950/40 p-2.5 flex flex-col items-center justify-center text-center space-y-0.5">
                   <div className="text-[9px] font-mono font-black text-red-950 uppercase tracking-[0.1em] leading-tight">
                     Principal Product Designer
                   </div>
                   
                   <div className="w-full flex items-center justify-center space-x-1.5 py-1">
                      <div className="h-px flex-1 bg-red-950/30" />
                      <div className="text-[7px] font-mono font-bold text-red-950/50">ARCHIVE</div>
                      <div className="h-px flex-1 bg-red-950/30" />
                   </div>
                   
                   <div className="text-[11px] font-serif italic font-black text-red-950 tracking-wide uppercase">
                     AWS AI Platform
                   </div>
                   
                   <div className="pt-1.5 text-[6px] font-mono text-red-950/60 uppercase tracking-[0.4em] font-bold">
                     Registry Verified: 2025
                   </div>
                </div>
              </div>
           </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center space-y-2 text-zinc-400"
      >
        <span className="text-[8px] font-mono uppercase tracking-[0.4em]">Scroll to Unfold</span>
        <div className="w-px h-8 bg-zinc-200" />
      </motion.div>
    </div>
  );
};

export default Intro;
