import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const QBusinessActionConnectorCaseStudy: React.FC = () => {
  const accent = '#7c3aed';
  const accentSoft = '#f3e8ff';
  const accentBorder = '#e9d5ff';

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
            Case Study // Q Business Actions
          </span>
        </div>

        <section className="space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif text-zinc-900 tracking-tight"
          >
            Q Business Action Connector
          </motion.h1>
          <p className="text-zinc-700 text-lg md:text-xl font-serif italic max-w-3xl leading-8">
            Enabling 50+ third‑party actions through a unified connector experience.
          </p>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
            <div className="space-y-4">
              <div
                className="text-[10px] font-mono uppercase tracking-[0.35em]"
                style={{ color: accent }}
              >
                About the project
              </div>
              <h2 className="text-2xl font-serif text-zinc-900">From app overload to action</h2>
              <p className="leading-8">
                Business users juggle 8+ apps daily and spend ~40% of their time on repetitive tasks.
                The goal was to unify Q Business, Q Apps, Q Automation, and QuickSight into a single
                action experience.
              </p>
              <div className="pl-4 border-l-2 text-sm" style={{ borderColor: accent }}>
                Lead Q Business Actions GA launch at re:Invent 2024 with a 3‑month timeline.
              </div>
            </div>
            <div
              className="border border-dashed p-6 text-sm text-zinc-500 h-64 flex items-center justify-center"
              style={{ borderColor: accentBorder, backgroundColor: accentSoft }}
            >
              Hero mock placeholder (Q Business Actions)
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-sm">
            {[
              ['Role', 'Lead Designer'],
              ['Time', 'Q4 2024'],
              ['Scope', 'Connector setup + action execution'],
              ['Scale', '50+ actions • 11+ apps'],
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
          <h2 className="text-3xl font-serif text-zinc-900">Strategic context & challenge</h2>
          <p>
            In Q2 2024, the business priority was to unify “find information, generate insights, and take
            actions” across Q Business Suite. The team faced a 3‑month GA timeline and unclear product
            direction.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">Timeline</p>
              <p className="mt-2">3 months to GA, teams stalled in September.</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">Complexity</p>
              <p className="mt-2">Unify Q Business, Q Apps, Q Automation, QuickSight.</p>
            </div>
            <div>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">Requirement</p>
              <p className="mt-2">Enable 50+ third‑party actions via one connector UX.</p>
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
          <h2 className="text-3xl font-serif text-zinc-900">Execution timeline</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-medium text-zinc-800">Week 1: Rapid alignment</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>3 working sessions across 3 teams</li>
                <li>18 key user flows documented</li>
                <li>4 connector setup flows, 8 chat action flows, 6 Q Apps flows</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-zinc-800">Week 2–3: Strategic clarity</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>2 design approaches validated with SAs and engineers</li>
                <li>Phase 1: launch in Q Business (re:Invent)</li>
                <li>Phase 2: expand to QBS in Q1 2025</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-zinc-800">Week 4: Pivot to Q Business</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>20 detailed workflows (admin + end‑user + app‑builder)</li>
                <li>5 leadership reviews in 8 days (2 VP, 3 Director)</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-zinc-800">Week 5–6: Scale & solve</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Standardized patterns for 50+ API types</li>
                <li>Search/Read, Create, Update, Delete UX patterns</li>
                <li>Fallback scenarios + smart defaults</li>
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
          <h2 className="text-3xl font-serif text-zinc-900">Impact</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: accent }}>
                Launch
              </p>
              <p className="mt-2">GA at re:Invent 2024 in 3 months</p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: accent }}>
                Scale
              </p>
              <p className="mt-2">50+ actions across 11+ applications</p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: accent }}>
                Outcome
              </p>
              <p className="mt-2">Featured in Matt Garman keynote</p>
            </div>
          </div>
          <div className="pl-4 border-l-2 italic text-sm" style={{ borderColor: accent }}>
            “Customers saved on average 30 minutes per incident.” — Jennifer Tejada, Chairperson & CEO,
            PagerDuty
          </div>
        </section>
      </div>
    </div>
  );
};

export default QBusinessActionConnectorCaseStudy;
