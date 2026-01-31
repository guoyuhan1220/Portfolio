import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const QuickSuiteCaseStudy: React.FC = () => {
  const accent = '#3b5bfd';
  const accentSoft = '#eef2ff';
  const accentBorder = '#c7d2fe';

  return (
    <div className="min-h-screen bg-[#f8f7f3] py-24 md:py-28 px-6 md:px-12 font-sans text-zinc-700">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em] hover:text-zinc-900 transition-colors"
          >
            ← Back to Portfolio
          </Link>
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em]">
            Case Study // Quick Suite
          </span>
        </div>

        <section className="space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif text-zinc-900 tracking-tight"
          >
            Amazon Quick Suite
          </motion.h1>
          <p className="text-zinc-700 text-lg md:text-xl font-serif italic max-w-3xl leading-8">
            From fragmented AI tools to a unified AI operating system for enterprise employees.
          </p>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
            <div className="space-y-4">
              <div
                className="text-[10px] font-mono uppercase tracking-[0.35em]"
                style={{ color: accent }}
              >
                About the project
              </div>
              <h2 className="text-2xl font-serif text-zinc-900">Unifying five AI products</h2>
              <p className="leading-8">
                Quick Suite combines chat, agents, data, and artifacts into a single conversational
                assistant. The goal was to replace product‑by‑product decision making with a coherent,
                intent‑first workflow.
              </p>
              <div className="pl-4 border-l-2 text-sm" style={{ borderColor: accent }}>
                How I unified five enterprise AI products through a single conversational assistant and
                shared human‑AI interaction model.
              </div>
            </div>
            <div
              className="border border-dashed p-6 text-sm text-zinc-500 h-64 flex items-center justify-center"
              style={{ borderColor: accentBorder, backgroundColor: accentSoft }}
            >
              Hero mock placeholder (Quick Suite)
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-sm">
            {[
              ['Role', 'Lead Principal Designer'],
              ['Time', '2024.09 – Present'],
              ['Scope', 'Conversational AI + Cross‑product UX'],
              ['Highlights', '1000+ app integrations • Unification'],
            ].map(([label, value]) => (
              <div key={label} className="p-4 border border-zinc-200/80 bg-white/80">
                <p className="text-[10px] font-mono uppercase tracking-[0.3em]" style={{ color: accent }}>
                  {label}
                </p>
                <p className="text-zinc-800 mt-2">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10 border-t border-zinc-200/70 pt-10">
          <div
            className="text-[10px] font-mono uppercase tracking-[0.35em]"
            style={{ color: accent }}
          >
            Section 01
          </div>
          <h2 className="text-3xl font-serif text-zinc-900">The crisis of unification</h2>
          <p>
            Quick Suite launched with powerful capabilities, but the experience was fragmented across
            QuickSight, QuickFlow, Quick Research, Quick Space, and Quick Integration.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">Fragmentation</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>BI, research, workflows, and integrations lived separately.</li>
                <li>Users had to pick tools before deciding what to do.</li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">Ephemeral AI</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Chat created value that disappeared after the session.</li>
                <li>Insights died when conversations ended.</li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">Cognitive Load</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Users thought in intent; products demanded selection.</li>
                <li>Context was lost across surfaces.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-10 border-t border-zinc-200/70 pt-10">
          <div
            className="text-[10px] font-mono uppercase tracking-[0.35em]"
            style={{ color: accent }}
          >
            Section 02
          </div>
          <h2 className="text-3xl font-serif text-zinc-900">Research & insights</h2>
          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: accent }}>
                Methods
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Survey dashboard tracking 3,968 responses (CSAT trends).</li>
                <li>Slack community of 25,000+ employees + feedback agent.</li>
                <li>Deep‑dive interviews to map workflows and context switching.</li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: accent }}>
                Key insights
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
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

        <section className="space-y-10 border-t border-zinc-200/70 pt-10">
          <div
            className="text-[10px] font-mono uppercase tracking-[0.35em]"
            style={{ color: accent }}
          >
            Section 04
          </div>
          <h2 className="text-3xl font-serif text-zinc-900">The artifact lifecycle</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-medium text-zinc-800">Initiation (Chat)</p>
              <p className="mt-2">Ideas begin in chat: fast, messy, iterative.</p>
            </div>
            <div>
              <p className="font-medium text-zinc-800">Crystallization (Canvas)</p>
              <p className="mt-2">Ideas mature into artifacts on a deep‑work canvas.</p>
            </div>
            <div>
              <p className="font-medium text-zinc-800">Collaboration (Space)</p>
              <p className="mt-2">Artifacts live in a team space for shared iteration.</p>
            </div>
            <div>
              <p className="font-medium text-zinc-800">Feedback loop</p>
              <p className="mt-2">Pin as knowledge to feed future AI context.</p>
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
