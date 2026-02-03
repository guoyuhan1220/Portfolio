import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const QuickSuiteCaseStudy: React.FC = () => {
  const accent = '#3b5bfd';
  const accentSoft = '#eef2ff';
  const accentBorder = '#c7d2fe';

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
    <div className="min-h-screen bg-[#FAFAFA] py-[60px] px-[80px] font-sans text-[#666666]">
      <div className="max-w-[1440px] mx-auto space-y-[40px]">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px] hover:text-[#1A1A1A] transition-colors"
          >
            ← Back to Portfolio
          </Link>
          <span className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px]">
            Case Study // Quick Suite
          </span>
        </div>

        <section className="space-y-[40px]">
          <div className="inline-block px-4 py-2 border border-[#E5E5E5] rounded-[20px] bg-[#0D6E6E10] text-[#0D6E6E] text-[11px] font-mono font-semibold uppercase tracking-[1.5px] mb-6">
            CASE STUDY
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[56px] font-serif font-medium text-[#1A1A1A] leading-[1.2]"
            style={{ fontFamily: 'Newsreader, serif' }}
          >
            Amazon Quick Suite
          </motion.h1>
          <p className="text-[18px] font-sans font-normal text-[#666666] leading-[1.5] max-w-[700px]">
            From fragmented AI tools to a unified AI operating system for enterprise employees.
          </p>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
            <div className="space-y-4">
              <div
                className="text-[11px] font-mono uppercase tracking-[1.5px]"
                style={{ color: accent }}
              >
                About the project
              </div>
              <h2 className="text-[20px] font-serif font-medium text-[#1A1A1A]">Unifying five AI products</h2>
              <p className="text-[16px] font-sans text-[#666666] leading-[1.6]">
                Quick Suite combines chat, agents, data, and artifacts into a single conversational
                assistant. The goal was to replace product‑by‑product decision making with a coherent,
                intent‑first workflow.
              </p>
              <div className="pl-4 border-l-2 text-[14px] font-sans text-[#666666] leading-[1.5]" style={{ borderColor: accent }}>
                How I unified five enterprise AI products through a single conversational assistant and
                shared human‑AI interaction model.
              </div>
            </div>
            <div
              className="border border-dashed p-6 text-sm text-[#666666] h-64 flex items-center justify-center rounded-[16px]"
              style={{ borderColor: accentBorder, backgroundColor: accentSoft }}
            >
              Hero mock placeholder (Quick Suite)
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-[24px] text-sm">
            {[
              ['Role', 'Lead Principal Designer'],
              ['Time', '2024.09 – Present'],
              ['Scope', 'Conversational AI + Cross‑product UX'],
              ['Highlights', '1000+ app integrations • Unification'],
            ].map(([label, value]) => (
              <div key={label} className="p-8 border border-[#E5E5E5] bg-white rounded-[16px]">
                <p className="text-[11px] font-mono uppercase tracking-[1.5px]" style={{ color: accent }}>
                  {label}
                </p>
                <p className="text-[#1A1A1A] mt-2">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-[40px] border-t border-[#E5E5E5] pt-12">
          <div
            className="text-[11px] font-mono uppercase tracking-[1.5px]"
            style={{ color: accent }}
          >
            Section 01
          </div>
          <h2 className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]" style={{ fontFamily: 'Newsreader, serif' }}>The crisis of unification</h2>
          <p className="text-[16px] font-sans text-[#666666] leading-[1.6]">
            Quick Suite launched with powerful capabilities, but the experience was fragmented across
            QuickSight, QuickFlow, Quick Research, Quick Space, and Quick Integration.
          </p>
          <div className="grid md:grid-cols-3 gap-[24px] text-sm">
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px]">
              <p className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px]">Fragmentation</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-[14px] font-sans text-[#666666] leading-[1.5]">
                <li>BI, research, workflows, and integrations lived separately.</li>
                <li>Users had to pick tools before deciding what to do.</li>
              </ul>
            </div>
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px]">
              <p className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px]">Ephemeral AI</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-[14px] font-sans text-[#666666] leading-[1.5]">
                <li>Chat created value that disappeared after the session.</li>
                <li>Insights died when conversations ended.</li>
              </ul>
            </div>
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px]">
              <p className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px]">Cognitive Load</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-[14px] font-sans text-[#666666] leading-[1.5]">
                <li>Users thought in intent; products demanded selection.</li>
                <li>Context was lost across surfaces.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-[40px] border-t border-[#E5E5E5] pt-12">
          <div
            className="text-[11px] font-mono uppercase tracking-[1.5px]"
            style={{ color: accent }}
          >
            Section 02
          </div>
          <h2 className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]" style={{ fontFamily: 'Newsreader, serif' }}>Research & insights</h2>
          <div className="grid md:grid-cols-2 gap-[24px] text-sm">
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px]">
              <p className="text-[11px] font-mono uppercase tracking-[1.5px]" style={{ color: accent }}>
                Methods
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-[14px] font-sans text-[#666666] leading-[1.5]">
                <li>Survey dashboard tracking 3,968 responses (CSAT trends).</li>
                <li>Slack community of 25,000+ employees + feedback agent.</li>
                <li>Deep‑dive interviews to map workflows and context switching.</li>
              </ul>
            </div>
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px]">
              <p className="text-[11px] font-mono uppercase tracking-[1.5px]" style={{ color: accent }}>
                Key insights
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-[14px] font-sans text-[#666666] leading-[1.5]">
                <li>Feature overload and blank‑slate paralysis.</li>
                <li>Setup tax for connectors (auth + configuration friction).</li>
                <li>Strong demand to convert chat into persistent artifacts.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-10 border-t border-zinc-200/70 pt-10">
          <div
            className="text-[10px] font-mono uppercase tracking-[0.35em]"
            style={{ color: accent }}
          >
            Section 03
          </div>
          <h2 className="text-3xl font-serif text-zinc-900">From features to flows</h2>
          <p>
            Goal: define a unified mental model that connects Chat, Agents, Data, and Artifacts into
            seamless workflows with progressive disclosure for onboarding.
          </p>
          <div className="pl-4 border-l-2 text-sm" style={{ borderColor: accent }}>
            Step 1: capture intent + context → Step 2: curated pathways → Step 3: less than 5 minutes to a
            “wow” moment via a starter artifact or automation flow.
          </div>
        </section>

        <section className="space-y-[40px] border-t border-[#E5E5E5] pt-12">
          <div
            className="text-[11px] font-mono uppercase tracking-[1.5px]"
            style={{ color: accent }}
          >
            Section 04
          </div>
          <h2 className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]" style={{ fontFamily: 'Newsreader, serif' }}>The artifact lifecycle</h2>
          <div className="grid md:grid-cols-2 gap-[24px] text-sm">
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px]">
              <p className="font-medium text-[#1A1A1A]">Initiation (Chat)</p>
              <p className="mt-2 text-[14px] font-sans text-[#666666] leading-[1.5]">Ideas begin in chat: fast, messy, iterative.</p>
            </div>
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px]">
              <p className="font-medium text-[#1A1A1A]">Crystallization (Canvas)</p>
              <p className="mt-2 text-[14px] font-sans text-[#666666] leading-[1.5]">Ideas mature into artifacts on a deep‑work canvas.</p>
            </div>
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px]">
              <p className="font-medium text-[#1A1A1A]">Collaboration (Space)</p>
              <p className="mt-2 text-[14px] font-sans text-[#666666] leading-[1.5]">Artifacts live in a team space for shared iteration.</p>
            </div>
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px]">
              <p className="font-medium text-[#1A1A1A]">Feedback loop</p>
              <p className="mt-2 text-[14px] font-sans text-[#666666] leading-[1.5]">Pin as knowledge to feed future AI context.</p>
            </div>
          </div>
        </section>

        <section className="space-y-10 border-t border-zinc-200/70 pt-10">
          <div
            className="text-[10px] font-mono uppercase tracking-[0.35em]"
            style={{ color: accent }}
          >
            Section 05
          </div>
          <h2 className="text-3xl font-serif text-zinc-900">Frictionless connectivity</h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <p className="font-medium text-zinc-800">Abstracting authentication</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Admin sets OAuth/API handshake once for complex apps.</li>
                <li>Users see a simple “Connect” toggle that just works.</li>
                <li>Managed OAuth for personal productivity tools.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-zinc-800">Ephemeral → persistent</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Chat with data instantly for one‑off tasks.</li>
                <li>AI nudges indexing into a Space for streaming updates.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-10 border-t border-zinc-200/70 pt-10">
          <div
            className="text-[10px] font-mono uppercase tracking-[0.35em]"
            style={{ color: accent }}
          >
            Section 06
          </div>
          <h2 className="text-3xl font-serif text-zinc-900">Impact</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: accent }}>
                Adoption
              </p>
              <p className="mt-2">607,000 users</p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: accent }}>
                Retention
              </p>
              <p className="mt-2">84.3% weekly retention</p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: accent }}>
                Outcomes
              </p>
              <p className="mt-2">40% faster time to value • 3.2× feature discovery • 85% artifact retention</p>
            </div>
          </div>
          <div className="pl-4 border-l-2 italic" style={{ borderColor: accent }}>
            “Before I felt like a database administrator. Now, I feel like a strategist. The flow just
            happens.” — Jonathan, Lead marketing manager
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuickSuiteCaseStudy;
