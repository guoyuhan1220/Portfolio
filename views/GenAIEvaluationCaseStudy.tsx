import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const GenAIEvaluationCaseStudy: React.FC = () => {
  const accent = '#f97316';
  const accentSoft = '#ffedd5';
  const accentBorder = '#fed7aa';

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
            Case Study // GenAI Evaluation
          </span>
        </div>

        <section className="space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif text-zinc-900 tracking-tight"
          >
            Unified GenAI Application Evaluation
          </motion.h1>
          <p className="text-zinc-700 text-lg md:text-xl font-serif italic max-w-3xl leading-8">
            A cross‑team evaluation framework for Bedrock and Q Business GenAI apps.
          </p>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
            <div className="space-y-4">
              <div
                className="text-[10px] font-mono uppercase tracking-[0.35em]"
                style={{ color: accent }}
              >
                About the project
              </div>
              <h2 className="text-2xl font-serif text-zinc-900">Envisioning unified evaluation</h2>
              <p className="leading-8">
                In late 2023, AWS lacked a systematic way to evaluate GenAI applications. I led the
                end‑to‑end evaluation initiative to align HIL, Bedrock, and Q Business teams around a
                shared framework.
              </p>
              <div className="pl-4 border-l-2 text-sm" style={{ borderColor: accent }}>
                Designed a 4‑component evaluation framework and influenced multiple Tier‑2 feature
                launches and roadmaps across teams.
              </div>
            </div>
            <div
              className="border border-dashed p-6 text-sm text-zinc-500 h-64 flex items-center justify-center"
              style={{ borderColor: accentBorder, backgroundColor: accentSoft }}
            >
              Hero mock placeholder (GenAI evaluation)
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-sm">
            {[
              ['Role', 'Lead Designer'],
              ['Time', '2024 Q1 – Q2'],
              ['Scope', 'Evaluation framework + workflows'],
              ['Teams', 'HIL • Bedrock • Q Business'],
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
          <h2 className="text-3xl font-serif text-zinc-900">Problem & wake‑up call</h2>
          <p>
            GenAI applications were shipping without a consistent evaluation system. The AtoZ app showed
            inconsistent responses, exposing a critical gap across teams.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-medium text-zinc-800">Challenge 1</p>
              <p className="mt-2">
                Rapidly evolving field with limited standards. GenAI evaluation requires continuous,
                iterative cycles and multi‑component validation (RAG, plugins, guardrails).
              </p>
            </div>
            <div>
              <p className="font-medium text-zinc-800">Challenge 2</p>
              <p className="mt-2">
                Diverging product ideas across teams; disconnected roadmaps and no shared understanding
                of evaluation.
              </p>
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
          <h2 className="text-3xl font-serif text-zinc-900">Research & alignment</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: accent }}>
                Quant
              </p>
              <p className="mt-2">330 survey responses • 9 prototype tests • 18 exploratory studies</p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: accent }}>
                Workshop
              </p>
              <p className="mt-2">2‑day workshop • 80+ participants across HIL, Bedrock, Q Business</p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: accent }}>
                Outcome
              </p>
              <p className="mt-2">Persona + journey alignment, pain points, and ownership clarity</p>
            </div>
          </div>
          <div className="pl-4 border-l-2 text-sm" style={{ borderColor: accent }}>
            “My knowledge of GenAI evaluation raised from 10 to 80.” — Niral Trivedi, DevOps Engineer
          </div>
        </section>

        <section className="space-y-10 border-t border-zinc-200/70 pt-10">
          <div
            className="text-[10px] font-mono uppercase tracking-[0.35em]"
            style={{ color: accent }}
          >
            Section 03
          </div>
          <h2 className="text-3xl font-serif text-zinc-900">Framework: four pillars</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-medium text-zinc-800">Prompt data management</p>
              <p className="mt-2">AI + human ground truth creation and dataset versioning.</p>
            </div>
            <div>
              <p className="font-medium text-zinc-800">Pre‑production evaluation</p>
              <p className="mt-2">Standard + custom metrics with clear definitions and review UI.</p>
            </div>
            <div>
              <p className="font-medium text-zinc-800">Accuracy traceability</p>
              <p className="mt-2">
                Trace views across components, root‑cause analysis, live debugging UI.
              </p>
            </div>
            <div>
              <p className="font-medium text-zinc-800">Post‑production monitoring</p>
              <p className="mt-2">
                Workflow integration, engagement analytics, feedback signals, telemetry.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-10 border-t border-zinc-200/70 pt-10">
          <div
            className="text-[10px] font-mono uppercase tracking-[0.35em]"
            style={{ color: accent }}
          >
            Section 04
          </div>
          <h2 className="text-3xl font-serif text-zinc-900">Impact</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: accent }}>
                Deliverables
              </p>
              <p className="mt-2">Influenced 4 Tier‑2 features across Bedrock and Q Business</p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: accent }}>
                Alignment
              </p>
              <p className="mt-2">Unified vision across HIL, Bedrock, and Q Business teams</p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: accent }}>
                Strategic
              </p>
              <p className="mt-2">4‑component evaluation framework + PRFAQ for Q Business</p>
            </div>
          </div>
          <div className="pl-4 border-l-2 text-sm" style={{ borderColor: accent }}>
            “Your ability to connect user needs with technical solutions is top notch.” — Alex Williams,
            Senior Applied Scientist
          </div>
        </section>
      </div>
    </div>
  );
};

export default GenAIEvaluationCaseStudy;
