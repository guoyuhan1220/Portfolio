import React, { useLayoutEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const accent = '#0D6E6E';

const VibeCodingCaseStudy: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeContextFile, setActiveContextFile] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useLayoutEffect(() => {
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    resetScroll();
    requestAnimationFrame(resetScroll);
    setTimeout(resetScroll, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F7F4] font-sans text-[#666666]">
      <Link
        to="/#work"
        className="fixed bottom-6 right-6 z-50 rounded-full border border-[#E5E5E5] bg-white/90 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1A1A1A] shadow-[0_8px_24px_rgba(15,23,42,0.12)] backdrop-blur-sm hover:border-[#1A1A1A] transition-colors"
      >
        ← Back to Works
      </Link>

      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-[#F8F7F4]/80 backdrop-blur-sm border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-[80px] py-4 flex items-center justify-between">
          <Link
            to="/#work"
            className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px] hover:text-[#1A1A1A] transition-colors"
          >
            ← Back to Works
          </Link>
          <span className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px]">
            Case Study // AI Design Playbook
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#1A1A1A] to-[#2D2D2D] text-white py-[120px] px-6 md:px-[80px]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 border border-white/20 rounded-[20px] bg-white/10 text-[11px] font-mono font-semibold uppercase tracking-[1.5px]">
              CASE STUDY
            </div>
            <h1
              className="text-[48px] md:text-[72px] font-serif font-medium leading-[1.1]"
              style={{ fontFamily: 'Newsreader, serif' }}
            >
              My AI Design Playbook
            </h1>
            <p className="text-[20px] md:text-[24px] font-sans font-normal text-white/80 leading-[1.5] max-w-[800px]">
              The exact workflow — context files, critique agents, custom skills, and decision tracking — I use to go from product vision to near-production prototype in hours, not weeks.
            </p>
            <div className="flex gap-6 pt-8">
              <div className="text-sm">
                <div className="text-white/60 text-[11px] font-mono uppercase tracking-[1.5px] mb-2">
                  Role
                </div>
                <div className="text-white">Lead Principal Designer</div>
              </div>
              <div className="text-sm">
                <div className="text-white/60 text-[11px] font-mono uppercase tracking-[1.5px] mb-2">
                  Timeline
                </div>
                <div className="text-white">2026</div>
              </div>
              <div className="text-sm">
                <div className="text-white/60 text-[11px] font-mono uppercase tracking-[1.5px] mb-2">
                  Tools
                </div>
                <div className="text-white">Kiro, Claude Code, Custom Agents</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Demo Video */}
        <div className="max-w-[1440px] mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full rounded-[24px] overflow-hidden bg-white/5 relative cursor-pointer group"
            onClick={toggleVideo}
          >
            <video
              ref={videoRef}
              src="/New%20vision.mp4"
              poster="/morning%20brief.png?v=1"
              className="w-full h-auto"
              playsInline
              onEnded={() => setIsPlaying(false)}
            />
            {/* Play/Pause overlay */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
              } bg-black/10 group-hover:bg-black/20`}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform border border-[#E5E5E5]">
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-[#1A1A1A]" strokeWidth={2} fill="currentColor" />
                ) : (
                  <Play className="w-7 h-7 text-[#1A1A1A] ml-0.5" strokeWidth={2} fill="currentColor" />
                )}
              </div>
            </div>
          </motion.div>
          <p className="text-center text-white/40 text-[12px] font-mono uppercase tracking-[1.5px] mt-4">
            The vision prototype — built in a few hours with the workflow below
          </p>
        </div>
      </section>

      {/* The Setup */}
      <section className="py-[100px] px-6 md:px-[80px] bg-[#F8F7F4]">
        <div className="max-w-[800px] mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="text-[11px] font-mono uppercase tracking-[1.5px] mb-4"
              style={{ color: accent }}
            >
              The Setup
            </div>
            <h2
              className="text-[48px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-6"
              style={{ fontFamily: 'Newsreader, serif' }}
            >
              The interesting part isn't the output
            </h2>
            <p className="text-[18px] font-sans text-[#666666] leading-[1.7] mb-5">
              The demo above is a product vision for AI that follows you everywhere — on phone, desktop,
              in meetings, on the go. It's designed around how work actually happens when autonomous agents
              and real people collaborate together. Simple, always with you, habit-forming.
            </p>
            <p className="text-[18px] font-sans text-[#666666] leading-[1.7] mb-5">
              Most of the conversation around AI in design right now is about what it can generate. I'm
              more interested in what happens before generation — the thinking, the framing, the setup
              that determines whether the output is useful or just impressive-looking.
            </p>
            <p className="text-[18px] font-sans text-[#666666] leading-[1.7]">
              I've been building a workflow over the past few months that treats AI less like a tool I
              operate and more like a collaborator I brief. The difference matters. When I brief well, I
              get output I can actually use. When I don't, I get polished garbage that takes longer to
              fix than it would've taken to build from scratch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 01 — Conversation First */}
      <section className="py-[100px] px-6 md:px-[80px] bg-[#F5F4F1]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[800px] mx-auto space-y-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="text-[11px] font-mono uppercase tracking-[1.5px] mb-4"
                style={{ color: accent }}
              >
                01 — Start with a conversation
              </div>
              <h2
                className="text-[48px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-6"
                style={{ fontFamily: 'Newsreader, serif' }}
              >
                Start with a conversation, not a file
              </h2>
              <p className="text-[18px] font-sans text-[#666666] leading-[1.7] mb-5">
                I didn't open Figma first. I didn't start with a brief or a PRD. I opened Kiro and just
                talked through the problem — why users feel overwhelmed, why fragmented features don't
                stick, what we're actually trying to solve versus what we've been asked to ship.
              </p>
              <p className="text-[18px] font-sans text-[#666666] leading-[1.7]">
                That conversation shaped everything that came after. Not because AI gave me a
                breakthrough insight, but because talking through the problem forced me to articulate what
                I actually believed — and what I was still fuzzy on.
              </p>
            </motion.div>
          </div>

          {/* Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[800px] mx-auto bg-white rounded-[16px] border border-[#E5E5E5] p-8"
          >
            <p className="text-[13px] font-mono uppercase tracking-[1.5px] mb-4" style={{ color: accent }}>
              Three things came out of that conversation
            </p>
            <div className="space-y-3">
              {[
                'Focus on what users are trying to get done — not individual features.',
                'Pick a few high-value moments the audience can immediately feel.',
                'Build a narrative. Follow one person through their day. Go deep, not broad.',
              ].map((line, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-[9px] flex-shrink-0"
                    style={{ backgroundColor: accent }}
                  />
                  <p className="text-[16px] text-[#666666] leading-[1.6]">{line}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 — Critique Before Building */}
      <section className="py-[100px] px-6 md:px-[80px] bg-[#F8F7F4]">
        <div className="max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div
              className="text-[11px] font-mono uppercase tracking-[1.5px] mb-4"
              style={{ color: accent }}
            >
              02 — Critique before you build
            </div>
            <h2
              className="text-[48px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-6"
              style={{ fontFamily: 'Newsreader, serif' }}
            >
              Run a critique before you build anything
            </h2>
            <p className="text-[18px] font-sans text-[#666666] leading-[1.7] mb-5">
              Before I touched any UI, I ran a critique agent on the story. I created a custom agent
              called <span className="font-mono text-[15px] text-[#1A1A1A] bg-[#F5F4F1] px-1.5 py-0.5 rounded">design-critic</span> that
              thinks like three people at once:
            </p>
            <div className="space-y-3 mb-8">
              {[
                { role: 'A skeptical VP', desc: 'who has seen too many half-baked proposals and checks out the moment something wastes their time.' },
                { role: 'A senior engineer', desc: 'who spots logic gaps, undefined edge cases, and anything that would require a "follow-up meeting" to actually build.' },
                { role: 'A user', desc: 'with zero patience for unclear intent, buried actions, or confusing flows.' },
              ].map((persona, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-[9px] flex-shrink-0"
                    style={{ backgroundColor: accent }}
                  />
                  <p className="text-[18px] text-[#666666] leading-[1.7]">
                    <span className="font-medium text-[#1A1A1A]">{persona.role}</span> {persona.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[18px] font-sans text-[#666666] leading-[1.7] mb-8">
              I asked it to poke holes. What's missing, what's unclear, where does the logic break. It
              caught things I'd rationalized past. I iterated the narrative until it held up. Only then
              did I start building.
            </p>
          </motion.div>

          {/* Critique agent screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 rounded-[16px] overflow-hidden border border-[#E5E5E5] shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          >
            <img
              src="/critic%20agent.png"
              alt="The design-critic agent definition in Kiro — configured to think like a VP, engineer, and user simultaneously"
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-[16px] border border-[#E5E5E5] p-8"
          >
            <p className="text-[13px] font-mono uppercase tracking-[1.5px] mb-4" style={{ color: accent }}>
              Why this matters
            </p>
            <p className="text-[16px] text-[#666666] leading-[1.7]">
              This step sounds slow. It's actually what made everything faster, because I wasn't
              redesigning mid-build. The story held up, so the screens I built held up. No last-minute
              pivots, no "wait, does this even make sense?" moments at 2 AM.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 03 — The Context Stack */}
      <section className="py-[100px] px-6 md:px-[80px] bg-[#F5F4F1]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[800px] mx-auto space-y-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="text-[11px] font-mono uppercase tracking-[1.5px] mb-4"
                style={{ color: accent }}
              >
                03 — Load the context
              </div>
              <h2
                className="text-[48px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-6"
                style={{ fontFamily: 'Newsreader, serif' }}
              >
                Three files changed everything
              </h2>
              <p className="text-[18px] font-sans text-[#666666] leading-[1.7] mb-5">
                The quality gap between "AI that generates code" and "AI that builds what I actually want"
                comes down to context. Most people prompt with what they want to see. I prompt with who I
                am, how I think, and what the project needs.
              </p>
              <p className="text-[18px] font-sans text-[#666666] leading-[1.7]">
                Once Kiro had the full context, I fed it the story script and let it build. It wasn't just
                generating screens — it was building a flow that made sense, because it understood the
                design philosophy behind every decision.
              </p>
            </motion.div>
          </div>

          {/* Context file cards — clickable */}
          {(() => {
            const contextFiles = [
              {
                name: 'Yuhan.md',
                label: 'Personality file',
                desc: 'How I think, how I want AI to work with me, my voice, my design judgment priority order.',
                color: '#0D6E6E',
                image: '/Yuhan%20steering%20doc.png',
                caption: 'Inside Yuhan.md — the personality file that shapes every AI interaction',
              },
              {
                name: 'Design-system.md',
                label: 'Design tokens',
                desc: 'Actual tokens — colors, spacing, typography, shadows. What makes output look near-production instead of prototype-y.',
                color: '#E07B54',
                image: '/Design%20system.png',
                caption: 'Inside Design-system.md — actual tokens that make output look near-production',
              },
              {
                name: 'Quick-Suite-Vision.md',
                label: 'Project context',
                desc: 'Key tenets, open questions, tensions, what\'s been decided and what hasn\'t. The shared understanding file.',
                color: '#1A1A1A',
                image: '/Quick%20suite%20doc.png',
                caption: 'Inside Quick-Suite-Vision.md — the shared understanding file',
              },
            ];
            return (
              <>
                <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                  {contextFiles.map((file, i) => (
                    <motion.div
                      key={file.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      onClick={() => setActiveContextFile(i)}
                      className={`rounded-[16px] border p-6 cursor-pointer transition-all duration-300 ${
                        activeContextFile === i
                          ? 'bg-white border-[#1A1A1A] shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
                          : 'bg-white border-[#E5E5E5] hover:border-[#999999]'
                      }`}
                    >
                      <div
                        className="text-[10px] font-mono uppercase tracking-[1.5px] mb-3"
                        style={{ color: file.color }}
                      >
                        {file.label}
                      </div>
                      <p
                        className="text-[18px] font-mono font-medium text-[#1A1A1A] mb-3"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {file.name}
                      </p>
                      <p className="text-[14px] text-[#666666] leading-[1.6]">{file.desc}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Screenshot carousel */}
                <div className="max-w-[800px] mx-auto mt-12">
                  <div className="relative rounded-[16px] overflow-hidden border border-[#E5E5E5] shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                    {contextFiles.map((file, i) => (
                      <img
                        key={file.name}
                        src={file.image}
                        alt={file.caption}
                        className={`w-full h-auto transition-opacity duration-500 ${
                          activeContextFile === i ? 'block' : 'hidden'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Nav dots */}
                  <div className="flex items-center justify-center gap-2 mt-6">
                    {contextFiles.map((file, i) => (
                      <button
                        key={file.name}
                        onClick={() => setActiveContextFile(i)}
                        className={`rounded-full transition-all duration-300 ${
                          activeContextFile === i
                            ? 'w-6 h-2 bg-[#1A1A1A]'
                            : 'w-2 h-2 bg-[#D4D4D4] hover:bg-[#999999]'
                        }`}
                        aria-label={`View ${file.name}`}
                      />
                    ))}
                  </div>
                  <p className="text-center text-[#999999] text-[12px] font-mono uppercase tracking-[1.5px] mt-3">
                    {contextFiles[activeContextFile].caption}
                  </p>
                </div>
              </>
            );
          })()}
        </div>
      </section>

      {/* 04 — The Loop */}
      <section className="py-[100px] px-6 md:px-[80px] bg-[#F8F7F4]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[800px] mx-auto space-y-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="text-[11px] font-mono uppercase tracking-[1.5px] mb-4"
                style={{ color: accent }}
              >
                04 — The iteration loop
              </div>
              <h2
                className="text-[48px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-6"
                style={{ fontFamily: 'Newsreader, serif' }}
              >
                Prompt, build, critique, refine
              </h2>
              <p className="text-[18px] font-sans text-[#666666] leading-[1.7] mb-5">
                With context loaded and the story validated, I moved into the build cycle. But I didn't
                just type vague prompts and hope for the best. I used two custom Kiro skills to stay
                sharp — one to make my prompts more precise before they hit the model, and one to ensure
                the code respected my design system instead of improvising.
              </p>
              <p className="text-[18px] font-sans text-[#666666] leading-[1.7]">
                Then I ran the critique agent again to review what Kiro built against the original design
                intent. That loop — prompt, build, critique, refine — is what got me from "interesting
                prototype" to "this looks real" in a few hours.
              </p>
            </motion.div>
          </div>

          {/* Workflow loop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[800px] mx-auto flex flex-wrap items-center justify-center gap-3 py-8"
          >
            {['Prompt', 'Build', 'Critique', 'Refine'].map((step, i) => (
              <React.Fragment key={step}>
                <div
                  className="px-5 py-2.5 rounded-full text-[13px] font-mono font-medium text-white"
                  style={{ backgroundColor: accent }}
                >
                  {step}
                </div>
                {i < 3 && (
                  <span className="text-[#E5E5E5] text-lg">→</span>
                )}
              </React.Fragment>
            ))}
            <span className="text-[#999] text-lg ml-1">↻</span>
          </motion.div>

          {/* Kiro skills */}
          <div className="max-w-[800px] mx-auto mt-12 space-y-4">
            <p className="text-[10px] font-mono uppercase tracking-[1.5px] text-[#666666] mb-4">
              Kiro skills used
            </p>
            {[
              {
                name: 'enhance-prompt',
                trigger: '/enhance-prompt',
                desc: 'Transforms vague UI prompts into structured, implementation-ready design briefs. Forces specificity about role, constraint, and the emotional moment you\'re designing for.',
              },
              {
                name: 'vibe-code',
                trigger: '/vibe-code',
                desc: 'Design-first coding skill. Translates design intent into clean, faithful code — respects Figma specs, design tokens, and my design philosophy. No improvised visual decisions.',
              },
            ].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-[16px] border border-[#E5E5E5] p-6 flex items-start gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-[14px] font-medium text-[#1A1A1A]"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {skill.name}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#F5F4F1] text-[#666666] font-mono">
                      {skill.trigger}
                    </span>
                  </div>
                  <p className="text-[14px] text-[#666666] leading-[1.6]">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Tracking */}
      <section className="py-[100px] px-6 md:px-[80px] bg-[#F5F4F1]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[800px] mx-auto space-y-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="text-[11px] font-mono uppercase tracking-[1.5px] mb-4"
                style={{ color: accent }}
              >
                05 — Track as you go
              </div>
              <h2
                className="text-[48px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-6"
                style={{ fontFamily: 'Newsreader, serif' }}
              >
                The piece easiest to skip when you're in flow
              </h2>
              <p className="text-[18px] font-sans text-[#666666] leading-[1.7] mb-5">
                I keep a decision log. Two ways I add to it: manually when something feels like a real
                turning point, and through hooks that remind me to capture things mid-session.
              </p>
              <p className="text-[18px] font-sans text-[#666666] leading-[1.7]">
                Those logs sync back into my project context file and into Yuhan.md, tagged by project.
                So the next session, Kiro isn't starting cold. And honestly, neither am I. The failure log
                is just as important — it prevents me from trying the same bad idea twice.
              </p>
            </motion.div>
          </div>

          {/* Tracking log cards */}
          <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'decisions.jsonl',
                label: 'Decision Log',
                desc: 'Append-only record of what I decided and why.',
                entries: [
                  {
                    decision: 'Reframe as autonomous AI teammate vs feature tool',
                    reasoning: 'Feature parity is a losing battle',
                  },
                  {
                    decision: 'Progressive disclosure as core interaction pattern',
                    reasoning: 'Reduces overwhelm, creates space for AI',
                  },
                ],
              },
              {
                name: 'failures.jsonl',
                label: 'Failure Log',
                desc: 'What I tried that didn\'t work and what I learned.',
                entries: [
                  {
                    decision: 'Full product tour approach',
                    reasoning: 'Too broad — audience lost the thread',
                  },
                  {
                    decision: 'Feature-first home screen',
                    reasoning: 'Felt like a dashboard, not a teammate',
                  },
                ],
              },
            ].map((log, li) => (
              <motion.div
                key={log.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: li * 0.1 }}
                className="bg-white rounded-[16px] border border-[#E5E5E5] overflow-hidden"
              >
                <div className="px-6 py-4 border-b border-[#E5E5E5]">
                  <p className="text-[16px] font-medium text-[#1A1A1A]">{log.label}</p>
                  <p
                    className="text-[11px] text-[#666666] mt-0.5"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {log.name}
                  </p>
                </div>
                <div className="px-6 py-4">
                  <p className="text-[13px] text-[#666666] leading-relaxed mb-4">{log.desc}</p>
                  <div className="space-y-3">
                    {log.entries.map((entry, ei) => (
                      <div key={ei} className="rounded-[8px] bg-[#F5F4F1] p-3">
                        <p className="text-[13px] font-medium text-[#1A1A1A] leading-snug">
                          {entry.decision}
                        </p>
                        <p className="text-[11px] text-[#666666] mt-1">{entry.reasoning}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Decision log hook screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-[800px] mx-auto mt-12 rounded-[16px] overflow-hidden border border-[#E5E5E5] shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          >
            <img
              src="/decision%20log.png"
              alt="The session-decision-log hook in Kiro — automatically captures decisions and failures at the end of each session"
              className="w-full h-auto"
            />
          </motion.div>
          <p className="text-center text-[#999999] text-[12px] font-mono uppercase tracking-[1.5px] mt-4 max-w-[800px] mx-auto">
            The session hook that captures decisions and failures automatically
          </p>
        </div>
      </section>

      {/* Closing */}
      <section className="py-[100px] px-6 md:px-[80px] bg-[#F8F7F4]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[800px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div
                className="text-[11px] font-mono uppercase tracking-[1.5px] mb-4"
                style={{ color: accent }}
              >
                Reflection
              </div>
              <h2
                className="text-[48px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-6"
                style={{ fontFamily: 'Newsreader, serif' }}
              >
                The whole thing took a few hours
              </h2>
              <p className="text-[18px] font-sans text-[#666666] leading-[1.7] mb-5">
                Not because I'm fast. Because I stopped treating AI like a tool I operate and started
                treating it like a collaborator I brief. The context files, the critique loop, the
                decision tracking — none of that is complicated. It's just deliberate.
              </p>
              <p className="text-[18px] font-sans text-[#666666] leading-[1.7] mb-5">
                The setup took real time upfront. Writing Yuhan.md, building the critique agent, creating
                the design system file — that was an investment. But it pays back on every single session.
                Each project starts where the last one left off instead of from zero.
              </p>
              <p className="text-[18px] font-sans text-[#666666] leading-[1.7]">
                If you're ever staring down a vision demo with not enough time, this is the playbook I'd
                hand you. Not the tools — the workflow. The tools will change. The habit of briefing well,
                critiquing early, and tracking decisions won't.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-16 bg-[#F5F4F1] rounded-[24px] p-12 border border-[#E5E5E5]"
            >
              <p
                className="text-[20px] font-serif italic text-[#1A1A1A] leading-[1.6] text-center"
                style={{ fontFamily: 'Newsreader, serif' }}
              >
                "I stopped treating AI like a tool I operate and started treating it like a collaborator
                I brief."
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VibeCodingCaseStudy;
