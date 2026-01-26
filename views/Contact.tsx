import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="py-28 px-6 md:px-12 max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-10"
      >
        <div className="inline-block p-4 bg-white border border-zinc-100 letter-shadow -rotate-2">
           <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em]">End of Correspondence</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-serif italic text-zinc-800 leading-tight">
          "Translating advanced AI capabilities into intuitive, trustworthy human experiences."
        </h2>
        
        <div className="flex flex-col items-center space-y-8">
          <a 
            href="mailto:guoyuhan1220@gmail.com" 
            className="text-xl font-light border-b border-zinc-200 pb-2 hover:border-zinc-900 transition-colors italic font-serif"
          >
            guoyuhan1220@gmail.com
          </a>
          
          <div className="flex justify-center space-x-12 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
            <a href="https://www.linkedin.com/in/yuhan-guo-33bba296/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-black transition-colors">Read.cv</a>
          </div>
        </div>

        <div className="pt-16">
           <span className="text-[8px] font-mono text-zinc-200 uppercase tracking-[0.6em]">
             Lead Product Design // AWS AI Platform // 2025
           </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;