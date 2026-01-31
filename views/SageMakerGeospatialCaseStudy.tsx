import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SageMakerGeospatialCaseStudy: React.FC = () => {
  const accent = '#0f766e';
  const accentSoft = '#e6f6f2';
  const accentBorder = '#bfe8df';

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
            Case Study // SageMaker Geospatial
          </span>
        </div>

        <section className="space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif text-zinc-900 tracking-tight"
          >
            SageMaker Geospatial
          </motion.h1>
          <p className="text-zinc-700 text-lg md:text-xl font-serif italic max-w-3xl leading-8">
            Build, train, and deploy ML models faster using geospatial data.
          </p>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
            <div className="space-y-4">
              <div
                className="text-[10px] font-mono uppercase tracking-[0.35em]"
                style={{ color: accent }}
              >
                About the project
              </div>
              <h2 className="text-2xl font-serif text-zinc-900">Unlocking geospatial ML</h2>
              <p className="leading-8">
                Over 60% of data collected daily contains geospatial signals, but only 3% is used in ML.
                The mission was to simplify geospatial workflows across data query, visualization, and
                model development.
              </p>
              <div className="pl-4 border-l-2 text-sm" style={{ borderColor: accent }}>
                Tier‑1 GA launch with 6 Tier‑2 features and 76 usability issues addressed.
              </div>
            </div>
            <div
              className="border border-dashed p-6 text-sm text-zinc-500 h-64 flex items-center justify-center"
              style={{ borderColor: accentBorder, backgroundColor: accentSoft }}
            >
              Hero mock placeholder (Geospatial)
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-sm">
            {[
              ['Role', 'Tier‑1 GA launch owner'],
              ['Time', '2022 Q4 – 2023 Q4'],
              ['Partners', 'Foursquare • Planet • Arup'],
              ['Teams', 'SageMaker • Amazon Location • Axis'],
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
          <h2 className="text-3xl font-serif text-zinc-900">Challenges</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-medium text-zinc-800">Specialized domain</p>
              <p className="mt-2">80% of data scientists struggled with geospatial data.</p>
            </div>
            <div>
              <p className="font-medium text-zinc-800">Fragmented vision</p>
              <p className="mt-2">3 PRDs, 4 PM turnovers, no cohesive roadmap.</p>
            </div>
            <div>
              <p className="font-medium text-zinc-800">Scattered tooling</p>
              <p className="mt-2">Notebook usability, data catalog, visualization gaps.</p>
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
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: accent }}>
                Research
              </p>
              <p className="mt-2">20+ sessions • 200 surveys • multi‑partner studies</p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: accent }}>
                Insights
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Data exploration roadblocks delay ML development.</li>
                <li>Pre‑trained models save significant time.</li>
                <li>Notebooks are essential for custom work.</li>
                <li>Visualization needed across the workflow.</li>
              </ul>
            </div>
          </div>
          <div className="pl-4 border-l-2 text-sm" style={{ borderColor: accent }}>
            “It takes me weeks to query through multiple vendors before I can actually focus on
            development.” — Yunshi, Data Scientist
          </div>
        </section>

        <section className="space-y-10 border-t border-zinc-200/70 pt-10">
          <div
            className="text-[10px] font-mono uppercase tracking-[0.35em]"
            style={{ color: accent }}
          >
            Section 03
          </div>
          <h2 className="text-3xl font-serif text-zinc-900">Vision & redesigned architecture</h2>
          <p>Simplify the geospatial ML workflow across data query, pre‑trained models, notebooks, and visualization.</p>
          <div
            className="border border-dashed p-6 h-48 flex items-center justify-center text-sm text-zinc-500"
            style={{ borderColor: accentBorder, backgroundColor: accentSoft }}
          >
            Architecture mock placeholder (data catalog → models → notebook → visualization)
          </div>
        </section>

        <section className="space-y-10 border-t border-zinc-200/70 pt-10">
          <div
            className="text-[10px] font-mono uppercase tracking-[0.35em]"
            style={{ color: accent }}
          >
            Section 04
          </div>
          <h2 className="text-3xl font-serif text-zinc-900">Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="font-medium text-zinc-800">Data catalog</p>
              <p className="mt-2">
                Query, filter, and visualize datasets in one place; reduced setup from days to minutes.
              </p>
            </div>
            <div>
              <p className="font-medium text-zinc-800">Pre‑trained models</p>
              <p className="mt-2">
                Built‑in models for common tasks (cloud removal, NDVI, road extraction).
              </p>
            </div>
            <div>
              <p className="font-medium text-zinc-800">Interactive visualization</p>
              <p className="mt-2">Integrated map widget for analysis and validation.</p>
            </div>
            <div>
              <p className="font-medium text-zinc-800">Notebook workflow</p>
              <p className="mt-2">Deep‑work environment for custom pipelines and experiments.</p>
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
          <h2 className="text-3xl font-serif text-zinc-900">Launch & impact</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: accent }}>
                Launch
              </p>
              <p className="mt-2">re:Invent 2022 keynote demo</p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: accent }}>
                Efficiency
              </p>
              <p className="mt-2">Setup and testing reduced to 1–2 weeks</p>
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.25em]" style={{ color: accent }}>
                Adoption
              </p>
              <p className="mt-2">Geospatial notebook drove 90% of revenue</p>
            </div>
          </div>
          <div className="pl-4 border-l-2 text-sm" style={{ borderColor: accent }}>
            “We improved efficiency by almost 50% and cut costs by 600%.” — Customer impact quote
          </div>
        </section>
      </div>
    </div>
  );
};

export default SageMakerGeospatialCaseStudy;
