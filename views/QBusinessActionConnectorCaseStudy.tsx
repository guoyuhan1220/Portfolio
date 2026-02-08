import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/** Placeholder for case study images — replace with <img> when you have final assets. */
const PlaceholderImage: React.FC<{ label: string; className?: string }> = ({ label, className = '' }) => (
  <div className={`rounded-[16px] overflow-hidden bg-[#1C1C1C] aspect-[16/10] flex items-center justify-center border border-white/10 ${className}`}>
    <span className="text-white/50 text-[13px] font-mono px-4 text-center">[Image: {label}]</span>
  </div>
);

const QBusinessActionConnectorCaseStudy: React.FC = () => {
  const accent = '#a78bfa'; // lighter violet for better contrast on dark

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
    <div className="min-h-screen bg-[#0F0F0F] font-sans text-[#A3A3A3]">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-[#0F0F0F]/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-[80px] py-4 flex items-center justify-between">
          <Link
            to="/#work"
            className="text-[11px] font-mono text-[#A3A3A3] uppercase tracking-[1.5px] hover:text-white transition-colors"
          >
            ← Back to Works
          </Link>
          <span className="text-[11px] font-mono text-[#A3A3A3] uppercase tracking-[1.5px]">
            Case Study // Action Connectors
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#1A1A1A] to-[#2D2D2D] text-white py-[120px] px-[80px]">
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
            <h1 className="text-[72px] font-serif font-medium leading-[1.1]" style={{ fontFamily: 'Newsreader, serif' }}>
              Q Business Action Connectors
            </h1>
            <p className="text-[24px] font-sans font-normal text-white/80 leading-[1.5] max-w-[800px]">
              From insight to action. Enabling business users to act on AI answers instantly — without leaving the conversation.
            </p>
            <div className="flex gap-6 pt-8">
              <div className="text-sm">
                <div className="text-white/60 text-[11px] font-mono uppercase tracking-[1.5px] mb-2">Role</div>
                <div className="text-white">Lead Designer</div>
              </div>
              <div className="text-sm">
                <div className="text-white/60 text-[11px] font-mono uppercase tracking-[1.5px] mb-2">Timeline</div>
                <div className="text-white">Q4 2024 (3 months)</div>
              </div>
              <div className="text-sm">
                <div className="text-white/60 text-[11px] font-mono uppercase tracking-[1.5px] mb-2">Launch</div>
                <div className="text-white">GA at re:Invent 2024</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual — replace with final hero image */}
        <div className="max-w-[1440px] mx-auto mt-16">
          <div className="w-full rounded-[24px] overflow-hidden aspect-[16/9] min-h-[380px] bg-[#FAFAFA] flex items-center justify-center">
            <img src="/Q business action connector/Integration.png?v=2" alt="Q Business Action Connectors — integration experience" className="w-full h-full object-contain" />
          </div>
        </div>
      </section>

      {/* Article: scannable structure — Problem → What I did → 4 phases → Design → Impact */}
      <article className="py-[80px] px-[80px]">
        {/* 1. What I did (TL;DR so readers get it fast) */}
        <div className="max-w-[720px] mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-mono uppercase tracking-[1.5px] mb-3" style={{ color: accent }}>What I did</p>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.7]">
              I led design for <strong className="text-white">Q Business Action Connectors</strong>: from three stalled teams and no shared vision to <strong className="text-white">GA at re:Invent 2024</strong> in 3 months. I aligned stakeholders, defined the product strategy, designed a scalable action framework for 50+ API types, and shipped the in-chat action experience. Result: <strong className="text-white">50+ actions across 11+ apps</strong> — users act on AI answers without leaving the conversation.
            </p>
          </motion.div>
        </div>

        {/* 2. The problem */}
        <div className="max-w-[720px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-mono uppercase tracking-[1.5px] mb-6" style={{ color: accent }}>The challenge</p>
            <h2 className="text-[36px] font-serif font-medium text-white leading-[1.2] mb-6" style={{ fontFamily: 'Newsreader, serif' }}>
              The answer was there. Acting on it wasn't.
            </h2>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.8] mb-4">
              Business users juggle 8+ apps and spend ~40% of their time on repetitive, cross-app tasks. Q Business could find answers — but to <em>do</em> something with them (create a Jira ticket, send a Slack message, update Salesforce), users had to leave the conversation. We had a 3‑month timeline to GA, multiple teams building in parallel with no shared direction, and unclear product scope.
            </p>
            <div className="rounded-[16px] overflow-hidden mt-8 bg-[#FAFAFA] p-6 md:p-8">
              <img src="/Q business action connector/challenge.png" alt="The challenge — gap between answer and action" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>

        <div className="my-16 h-px bg-white/10 max-w-[720px] mx-auto" />

        {/* 3. My approach — 4 phases (overview) */}
        <div className="max-w-[720px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-mono uppercase tracking-[1.5px] mb-6" style={{ color: accent }}>My approach</p>
            <h2 className="text-[36px] font-serif font-medium text-white leading-[1.2] mb-4" style={{ fontFamily: 'Newsreader, serif' }}>
              Four phases: align → define → detail → scale
            </h2>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.8] mb-8">
              I took the team from stalled to shipped in six weeks by running a clear process: get everyone aligned on one map, decide what to ship first, detail the experience under leadership pressure, then scale the system so 50+ connectors didn't require 50+ designs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { step: '1', title: 'Align', desc: '3 teams, 1 shared map' },
                { step: '2', title: 'Define', desc: 'Strategy & phase 1 scope' },
                { step: '3', title: 'Detail', desc: '20 workflows, 5 reviews' },
                { step: '4', title: 'Scale', desc: 'One framework, 50+ APIs' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="border border-white/10 rounded-[12px] p-4 bg-[#1A1A1A]">
                  <span className="text-[11px] font-mono text-white/50">Phase {step}</span>
                  <p className="font-serif font-medium text-white mt-1" style={{ fontFamily: 'Newsreader, serif' }}>{title}</p>
                  <p className="text-[13px] text-[#A3A3A3] mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 4. Phase 1: Align */}
        <div className="max-w-[720px] mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] mb-2" style={{ color: accent }}>Phase 1</p>
            <h3 className="text-[24px] font-serif font-medium text-white leading-[1.3] mb-4" style={{ fontFamily: 'Newsreader, serif' }}>Align</h3>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.8] mb-6">
              I ran <strong>3 working sessions across 3 teams</strong>, mapping 18 key flows: connector setup, chat-based actions, and Q Apps integration. That shared map became the single source of truth so we could see overlaps and gaps instead of each team designing their own "take action."
            </p>
            <div className="rounded-[16px] overflow-hidden bg-[#FAFAFA] p-6 md:p-8">
              <img src="/Q business action connector/week 3.png" alt="Phase 1 — Cross-team flow map (18 flows)" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>

        {/* 5. Phase 2: Define */}
        <div className="max-w-[720px] mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] mb-2" style={{ color: accent }}>Phase 2</p>
            <h3 className="text-[24px] font-serif font-medium text-white leading-[1.3] mb-4" style={{ fontFamily: 'Newsreader, serif' }}>Define strategy</h3>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.8] mb-6">
              I developed <strong>2 design approaches</strong>, validated them with solution architects and engineers, and landed on a phased plan: <strong>Phase 1 — ship core actions in Q Business for re:Invent. Phase 2 — expand to QBS in Q1 2025.</strong>
            </p>
            <div className="rounded-[16px] overflow-hidden bg-[#FAFAFA] p-6 md:p-8">
              <img src="/Q business action connector/week 2.png" alt="Phase 2 — Design directions & chosen strategy" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>

        {/* 6. Phase 3: Detail */}
        <div className="max-w-[720px] mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] mb-2" style={{ color: accent }}>Phase 3</p>
            <h3 className="text-[24px] font-serif font-medium text-white leading-[1.3] mb-4" style={{ fontFamily: 'Newsreader, serif' }}>Pivot & detail</h3>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.8] mb-6">
              We pivoted to focus on Q Business for re:Invent. I produced <strong>20 detailed workflows</strong> (admin setup, end-user actions, app-builder config) and went through <strong>5 leadership reviews in 8 days</strong> — 2 VPs, 3 Directors — iterating fast while keeping the vision intact.
            </p>
            <div className="rounded-[16px] overflow-hidden bg-[#FAFAFA] p-6 md:p-8">
              <img src="/Q business action connector/multi action (1).png" alt="Phase 3 — Workflows & leadership review" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>

        {/* 7. Phase 4: Scale */}
        <div className="max-w-[720px] mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] mb-2" style={{ color: accent }}>Phase 4</p>
            <h3 className="text-[24px] font-serif font-medium text-white leading-[1.3] mb-4" style={{ fontFamily: 'Newsreader, serif' }}>Scale the system</h3>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.8] mb-6">
              Every connector has different APIs and error states. I partnered with a Principal Engineer to build a <strong>unified taxonomy for 50+ API types</strong>, designed <strong>one interaction pattern</strong> (Search/Read, Create, Update, Delete), collaborated with Data Science on dynamic forms and validation, and designed <strong>10+ fallback and error scenarios</strong> so users always have a path forward.
            </p>
            <div className="rounded-[16px] overflow-hidden bg-[#FAFAFA] p-6 md:p-8">
              <img src="/Q business action connector/Action frame work.png" alt="Phase 4 — Action framework & scale (taxonomy, patterns, errors)" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>

        <div className="my-16 h-px bg-white/10 max-w-[720px] mx-auto" />

        {/* 8. Design that scaled */}
        <div className="max-w-[720px] mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-[11px] font-mono uppercase tracking-[1.5px] mb-6" style={{ color: accent }}>Design that scaled</p>
            <h2 className="text-[36px] font-serif font-medium text-white leading-[1.2] mb-6" style={{ fontFamily: 'Newsreader, serif' }}>One framework, fifty connectors</h2>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.8] mb-4">
              The core challenge wasn't any single connector — it was a system that could handle <strong>all of them without bespoke design per connector</strong>. Every action follows the same flow: <strong>discover → configure → confirm → execute</strong>. Type-ahead search, dynamic forms from API schemas, inline validation, and clear error recovery. Engineering could onboard new connectors in days; users got a consistent experience across Jira, Slack, Salesforce, and more.
            </p>
            <div className="rounded-[16px] overflow-hidden bg-[#FAFAFA]">
              <img src="/Q business action connector/action connector.png" alt="Action framework — discover, configure, confirm, execute" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>

        {/* 9. Making setup invisible */}
        <div className="max-w-[720px] mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-[11px] font-mono uppercase tracking-[1.5px] mb-6" style={{ color: accent }}>Making setup invisible</p>
            <h2 className="text-[36px] font-serif font-medium text-white leading-[1.2] mb-6" style={{ fontFamily: 'Newsreader, serif' }}>Two-tier auth, one-click connect</h2>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.8] mb-6">
              Admins do the complex OAuth/API setup once; end users see a simple "Connect" toggle. For tools like Slack and Gmail, managed OAuth meant one-click connect. <strong>What used to take IT tickets and days now happens in seconds.</strong> The chat input supports type-ahead so users find and trigger actions as naturally as asking a question.
            </p>
          </motion.div>
        </div>

        <div className="my-16 h-px bg-white/10 max-w-[720px] mx-auto" />

        {/* 10. The experience */}
        <div className="max-w-[720px] mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-[11px] font-mono uppercase tracking-[1.5px] mb-6" style={{ color: accent }}>The experience</p>
            <h2 className="text-[36px] font-serif font-medium text-white leading-[1.2] mb-6" style={{ fontFamily: 'Newsreader, serif' }}>Actions inside the conversation</h2>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.8] mb-6">
              Ask a question, get an answer, act on it — in the same thread. No context switching. <strong>50+ actions across 11+ apps</strong> (Jira, Salesforce, ServiceNow, Slack, PagerDuty, etc.) surface contextually so the right actions appear when they're relevant.
            </p>
            <div className="rounded-[16px] overflow-hidden bg-[#FAFAFA]">
              <video
                src="/Q business action connector/invoke action.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                aria-label="In-conversation action flow"
              />
            </div>
          </motion.div>
        </div>

        <div className="my-16 h-px bg-white/10 max-w-[720px] mx-auto" />

        {/* 11. Impact */}
        <div className="max-w-[720px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-[11px] font-mono uppercase tracking-[1.5px] mb-6" style={{ color: accent }}>Impact</p>
            <h2 className="text-[36px] font-serif font-medium text-white leading-[1.2] mb-6" style={{ fontFamily: 'Newsreader, serif' }}>Shipped at re:Invent, featured in CEO keynote</h2>
            <p className="text-[16px] text-[#D4D4D4] leading-[1.8] mb-6">
              Action Connectors went GA at re:Invent 2024 and was featured in the Matt Garman keynote. Business users can now act on Q Business answers without leaving the conversation — create tickets, send Slack updates, update CRM records from a single thread.
            </p>
            <div className="grid grid-cols-3 gap-4 my-10">
              <div className="text-center py-6 border border-white/10 rounded-[12px] bg-[#1A1A1A]">
                <p className="text-[28px] font-serif font-medium text-white" style={{ fontFamily: 'Newsreader, serif' }}>50+</p>
                <p className="text-[13px] text-[#A3A3A3] mt-1">Actions</p>
              </div>
              <div className="text-center py-6 border border-white/10 rounded-[12px] bg-[#1A1A1A]">
                <p className="text-[28px] font-serif font-medium text-white" style={{ fontFamily: 'Newsreader, serif' }}>11+</p>
                <p className="text-[13px] text-[#A3A3A3] mt-1">Apps</p>
              </div>
              <div className="text-center py-6 border border-white/10 rounded-[12px] bg-[#1A1A1A]">
                <p className="text-[28px] font-serif font-medium text-white" style={{ fontFamily: 'Newsreader, serif' }}>3 mo</p>
                <p className="text-[13px] text-[#A3A3A3] mt-1">Concept to GA</p>
              </div>
            </div>
            <div className="rounded-[16px] overflow-hidden mb-10 bg-[#FAFAFA]">
              <img src="/Q business action connector/reinvent launch.png" alt="re:Invent 2024 launch / keynote" className="w-full h-auto" />
            </div>
            <blockquote className="border-l-2 pl-8" style={{ borderColor: accent }}>
              <p className="text-[20px] font-serif italic text-white leading-[1.6]" style={{ fontFamily: 'Newsreader, serif' }}>
                "Customers saved on average 30 minutes per incident."
              </p>
              <p className="text-[14px] text-[#A3A3A3] mt-3">— Jennifer Tejada, Chairperson & CEO, PagerDuty</p>
            </blockquote>
          </motion.div>
        </div>
      </article>

      {/* Footer */}
      <section className="py-[60px] px-[80px] bg-[#0F0F0F] border-t border-white/10">
        <div className="max-w-[1440px] mx-auto text-center">
          <Link
            to="/#work"
            className="text-[11px] font-mono text-[#A3A3A3] uppercase tracking-[1.5px] hover:text-white transition-colors"
          >
            ← Back to Works
          </Link>
        </div>
      </section>
    </div>
  );
};

export default QBusinessActionConnectorCaseStudy;
