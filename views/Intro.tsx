import React, { useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion';

const Intro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const envelopeRef = useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = useState(false);
  
  // Base isometric angle (viewing from slightly above)
  const baseRotateX = 8;
  
  // Hover tilt state (subtle, adds to base angle)
  const [hoverTilt, setHoverTilt] = useState({ x: 0, y: 0 });
  
  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Click-triggered progress
  const clickProgress = useMotionValue(0);

  // Combine scroll and click progress
  const combinedProgress = useTransform(
    [scrollYProgress, clickProgress],
    ([scroll, click]: number[]) => Math.max(scroll, click)
  );

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!envelopeRef.current || isClicked) return;
    
    const rect = envelopeRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Subtle tilt - max 8 degrees in any direction
    const xPercent = (e.clientX - centerX) / (rect.width / 2);
    const yPercent = (e.clientY - centerY) / (rect.height / 2);
    
    // Clamp values between -1 and 1
    const clampedX = Math.max(-1, Math.min(1, xPercent));
    const clampedY = Math.max(-1, Math.min(1, yPercent));
    
    setHoverTilt({ 
      x: clampedY * -8,  // Tilt up/down based on Y position
      y: clampedX * 8    // Tilt left/right based on X position
    });
  }, [isClicked]);

  const handleMouseLeave = useCallback(() => {
    setHoverTilt({ x: 0, y: 0 });
  }, []);

  const handleClick = useCallback(() => {
    if (isClicked) return;
    setIsClicked(true);
    setHoverTilt({ x: 0, y: 0 });
    // Trigger the reveal animation
    animate(clickProgress, 0.45, {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    });
  }, [isClicked, clickProgress]);

  // Simple envelope fade out
  const envelopeOpacity = useTransform(combinedProgress, [0.06, 0.28], [1, 0]);
  const envelopeScale = useTransform(combinedProgress, [0.06, 0.28], [1, 0.95]);
  const sealOpacity = useTransform(combinedProgress, [0, 0.12], [1, 0]);
  const sealScale = useTransform(combinedProgress, [0, 0.12], [1, 1.2]);

  // Letter fades in
  const letterOpacity = useTransform(combinedProgress, [0.12, 0.32], [0, 1]);
  const letterY = useTransform(combinedProgress, [0.12, 0.32], [24, 0]);
  const letterScale = useTransform(combinedProgress, [0.12, 0.32], [0.96, 1]);

  const hintOpacity = useTransform(combinedProgress, [0, 0.04], [1, 0]);
  const letterPointerEvents = useTransform(combinedProgress, (v) => (v < 0.26 ? 'none' : 'auto'));

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });

  const paperTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`;

  return (
    <div ref={containerRef} className="min-h-[150vh] relative">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden" style={{ perspective: '1200px' }}>
        
        {/* ========== ENVELOPE - Faux 3D Isometric View ========== */}
        <motion.div
          ref={envelopeRef}
          className="absolute cursor-pointer"
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onPointerMove={handleMouseMove}
          onPointerLeave={handleMouseLeave}
          initial={{ 
            rotateX: baseRotateX, 
            rotateY: 0,
          }}
          animate={{
            rotateX: baseRotateX + hoverTilt.x,
            rotateY: hoverTilt.y,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
          }}
          style={{ 
            opacity: envelopeOpacity,
            scale: envelopeScale,
            transformPerspective: 800,
            transformStyle: 'preserve-3d',
            zIndex: 10,
          }}
        >
          <div className="relative w-[85vw] max-w-xl">
            {/* Dynamic Shadow - shifts opposite to tilt */}
            <motion.div 
              className="absolute left-2 right-2 h-8 rounded-full -z-10"
              initial={{
                bottom: -20,
                opacity: 0.2,
              }}
              animate={{
                x: hoverTilt.y * -2,
                bottom: -20 + hoverTilt.x * 0.5,
                scaleX: 1 + Math.abs(hoverTilt.y) * 0.02,
                opacity: 0.15 + Math.abs(hoverTilt.x + hoverTilt.y) * 0.01,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
              }}
              style={{
                background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, transparent 70%)',
                filter: 'blur(12px)',
              }}
            />

            {/* Complete Envelope with integrated flap */}
            <div 
              className="relative rounded-sm overflow-visible"
              style={{
                aspectRatio: '4/3',
              }}
            >
              {/* Envelope flap (top triangle) - integrated, not separate */}
              <div 
                className="absolute -top-[1px] left-0 right-0 z-0"
                style={{
                  aspectRatio: '2/1',
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  background: 'linear-gradient(180deg, #ece6dc 0%, #e0d9cd 100%)',
                }}
              >
                <div 
                  className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply"
                  style={{ backgroundImage: paperTexture }}
                />
              </div>

              {/* Envelope body */}
              <div 
                className="relative w-full h-full rounded-sm overflow-hidden z-10"
                style={{
                  background: 'linear-gradient(135deg, #f5efe7 0%, #e8e2d8 50%, #ddd6ca 100%)',
                  boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15), 0 12px 24px -8px rgba(0,0,0,0.1)',
                }}
              >
                {/* Paper texture */}
                <div 
                  className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply"
                  style={{ backgroundImage: paperTexture }}
                />

                {/* Lighting */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(0,0,0,0.05) 100%)',
                  }}
                />

                {/* V-fold lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 75">
                  <line x1="0" y1="0" x2="50" y2="55" stroke="#c4b8a8" strokeWidth="0.4" opacity="0.5" />
                  <line x1="100" y1="0" x2="50" y2="55" stroke="#c4b8a8" strokeWidth="0.4" opacity="0.5" />
                </svg>

                {/* Wax Seal */}
                <motion.div
                  className="absolute z-20"
                  style={{ 
                    bottom: '26%',
                    right: '43%',
                    opacity: sealOpacity,
                    scale: sealScale,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <div className="relative">
                      <div 
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center"
                        style={{
                          background: 'radial-gradient(circle at 30% 30%, #c44b4b 0%, #a31515 40%, #7a0f0f 100%)',
                          boxShadow: '0 4px 15px rgba(139, 0, 0, 0.4), inset 0 2px 4px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(0,0,0,0.2)',
                        }}
                      >
                        <span 
                          className="text-xl md:text-2xl font-serif italic font-bold select-none"
                          style={{ color: 'rgba(255,220,220,0.9)', textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                        >
                          Y
                        </span>
                      </div>
                      <div 
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2.5 h-3 rounded-full"
                        style={{ background: 'linear-gradient(180deg, #a31515 0%, #7a0f0f 100%)' }}
                      />
                      <div className="absolute top-1.5 left-2.5 w-4 h-2 bg-white/30 rounded-full blur-[2px] -rotate-45" />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Postal markings */}
                <div className="absolute bottom-3 left-4 text-[8px] font-mono text-amber-900/20 uppercase tracking-wider">
                  <p>Priority Mail</p>
                  <p>Seattle, WA</p>
                </div>
              </div>
            </div>

            {/* Hint */}
            <motion.p 
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-[9px] font-mono text-zinc-400 uppercase tracking-[0.2em] whitespace-nowrap"
              style={{ opacity: hintOpacity }}
            >
              Click or scroll to open
            </motion.p>
          </div>
        </motion.div>

        {/* ========== THE LETTER ========== */}
        <motion.div
          className="relative w-full max-w-3xl mx-auto px-4"
          style={{
            opacity: letterOpacity,
            y: letterY,
            scale: letterScale,
            pointerEvents: letterPointerEvents,
            zIndex: 5,
          }}
        >
          <div
            className="relative bg-white rounded-sm overflow-hidden"
            style={{
              boxShadow: '0 35px 90px -20px rgba(0,0,0,0.18), 0 15px 40px -15px rgba(0,0,0,0.1)',
            }}
          >
            {/* Paper texture */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{ backgroundImage: paperTexture }}
            />

            {/* Notebook lines */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.025]"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 28px)',
                backgroundPosition: '0 82px'
              }}
            />

            {/* Red margin line */}
            <div className="absolute left-12 md:left-20 top-0 bottom-0 w-[1px] bg-red-400/10" />

            {/* Letter Content */}
            <div className="p-6 md:p-10 lg:p-12">
              {/* Header */}
              <div className="flex justify-between items-start border-b border-zinc-100 pb-5 mb-8">
                <div>
                  <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em]">Date</p>
                  <p className="text-sm font-mono text-zinc-600 mt-1">{formattedDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em]">From</p>
                  <p className="text-sm font-serif italic text-zinc-800 mt-1">Yuhan Guo</p>
                  <p className="text-[10px] font-mono text-zinc-400 mt-1">Seattle, WA</p>
                </div>
              </div>

              {/* Letter Body */}
              <div className="space-y-5 ml-4 md:ml-8">
                <p className="text-2xl md:text-3xl font-serif italic text-zinc-400">
                  Hello there,
                </p>
                
                <div className="space-y-5 font-serif text-base md:text-lg leading-relaxed text-zinc-600">
                  <p>
                    I’m <span className="text-zinc-900 font-medium">Yuhan Guo</span>, a
                    <span className="text-zinc-900 font-medium"> Principal Product Designer</span> leading
                    <span className="text-zinc-900 font-medium"> enterprise AI products at AWS</span>.
                  </p>
                  <p>
                    I specialize in designing
                    <span className="text-zinc-900 font-medium"> interaction models for AI systems</span>—where
                    <span className="text-zinc-900 font-medium"> chat, agents, data, and actions converge</span>—so complex capabilities feel
                    <span className="text-zinc-900 font-medium"> simple, usable, and decisive</span>.
                  </p>
                </div>

                <p className="text-sm text-zinc-400 italic pt-3 font-serif">
                  Scroll down to unpack my recent work.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-10 pt-6 border-t border-zinc-100 ml-4 md:ml-8">
                <p className="text-zinc-500 font-serif italic mb-4">Yours truly,</p>
                <p className="text-4xl md:text-5xl font-hand text-zinc-900 -rotate-2 -ml-2">
                  Yuhan Guo
                </p>
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] mt-6">
                  Principal Product Designer • AWS AI Platform
                </p>
              </div>
            </div>

            {/* Seal watermark */}
            <div className="absolute top-6 right-6 opacity-[0.04]">
              <div className="w-16 h-16 rounded-full border-4 border-red-900 flex items-center justify-center">
                <span className="text-lg font-serif italic text-red-900 font-bold">Y</span>
              </div>
            </div>
          </div>

          {/* Shadow */}
          <div className="absolute -bottom-10 left-8 right-8 h-20 bg-black/8 blur-3xl -z-10 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
