import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SageMakerGeospatialCaseStudy: React.FC = () => {
  const accent = '#0f766e';
  const accentSoft = '#e6f6f2';
  const accentBorder = '#bfe8df';

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
            Case Study // SageMaker Geospatial
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
            SageMaker Geospatial
          </motion.h1>
          <p className="text-[18px] font-sans font-normal text-[#666666] leading-[1.5] max-w-[700px]">
            Build, train, and deploy ML models faster using geospatial data.
          </p>
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
            <div className="space-y-4">
              <div
                className="text-[11px] font-mono uppercase tracking-[1.5px]"
                style={{ color: accent }}
              >
                About the project
              </div>
              <h2 className="text-[20px] font-serif font-medium text-[#1A1A1A]">Unlocking geospatial ML</h2>
              <p className="text-[16px] font-sans text-[#666666] leading-[1.6]">
                Over 60% of data collected daily contains geospatial signals, but only 3% is used in ML.
                The mission was to simplify geospatial workflows across data query, visualization, and
                model development.
              </p>
              <div className="pl-4 border-l-2 text-[14px] font-sans text-[#666666] leading-[1.5]" style={{ borderColor: accent }}>
                Tier‑1 GA launch with 6 Tier‑2 features and 76 usability issues addressed.
              </div>
            </div>
            <div
              className="border border-dashed p-6 text-sm text-[#666666] h-64 flex items-center justify-center rounded-[16px]"
              style={{ borderColor: accentBorder, backgroundColor: accentSoft }}
            >
              Hero mock placeholder (Geospatial)
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-[24px] text-sm">
            {[
              ['Role', 'Tier‑1 GA launch owner'],
              ['Time', '2022 Q4 – 2023 Q4'],
              ['Partners', 'Foursquare • Planet • Arup'],
              ['Teams', 'SageMaker • Amazon Location • Axis'],
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
          <h2 className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]" style={{ fontFamily: 'Newsreader, serif' }}>Challenges</h2>
          <div className="grid md:grid-cols-3 gap-[24px] text-sm">
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px]">
              <p className="font-medium text-[#1A1A1A]">Specialized domain</p>
              <p className="mt-2 text-[14px] font-sans text-[#666666] leading-[1.5]">80% of data scientists struggled with geospatial data.</p>
            </div>
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px]">
              <p className="font-medium text-[#1A1A1A]">Fragmented vision</p>
              <p className="mt-2 text-[14px] font-sans text-[#666666] leading-[1.5]">3 PRDs, 4 PM turnovers, no cohesive roadmap.</p>
            </div>
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px]">
              <p className="font-medium text-[#1A1A1A]">Scattered tooling</p>
              <p className="mt-2 text-[14px] font-sans text-[#666666] leading-[1.5]">Notebook usability, data catalog, visualization gaps.</p>
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

        <section className="space-y-[40px] border-t border-[#E5E5E5] pt-12">
          <div
            className="text-[11px] font-mono uppercase tracking-[1.5px]"
            style={{ color: accent }}
          >
            Section 03
          </div>
          <h2 className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]" style={{ fontFamily: 'Newsreader, serif' }}>Vision & redesigned architecture</h2>
          <p className="text-[16px] font-sans text-[#666666] leading-[1.6]">Simplify the geospatial ML workflow across data query, pre‑trained models, notebooks, and visualization.</p>
          <div
            className="border border-dashed p-6 h-48 flex items-center justify-center text-sm text-[#666666] rounded-[16px]"
            style={{ borderColor: accentBorder, backgroundColor: accentSoft }}
          >
            Architecture mock placeholder (data catalog → models → notebook → visualization)
          </div>
        </section>

        <section className="space-y-[40px] border-t border-[#E5E5E5] pt-12">
          <div
            className="text-[11px] font-mono uppercase tracking-[1.5px]"
            style={{ color: accent }}
          >
            Section 04
          </div>
          <h2 className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]" style={{ fontFamily: 'Newsreader, serif' }}>Solutions</h2>
          <div className="grid md:grid-cols-2 gap-[24px] text-sm">
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px]">
              <p className="font-medium text-[#1A1A1A]">Data catalog</p>
              <p className="mt-2 text-[14px] font-sans text-[#666666] leading-[1.5]">
                Query, filter, and visualize datasets in one place; reduced setup from days to minutes.
              </p>
            </div>
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px]">
              <p className="font-medium text-[#1A1A1A]">Pre‑trained models</p>
              <p className="mt-2 text-[14px] font-sans text-[#666666] leading-[1.5]">
                Built‑in models for common tasks (cloud removal, NDVI, road extraction).
              </p>
            </div>
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px]">
              <p className="font-medium text-[#1A1A1A]">Interactive visualization</p>
              <p className="mt-2 text-[14px] font-sans text-[#666666] leading-[1.5]">Integrated map widget for analysis and validation.</p>
            </div>
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px]">
              <p className="font-medium text-[#1A1A1A]">Notebook workflow</p>
              <p className="mt-2 text-[14px] font-sans text-[#666666] leading-[1.5]">Deep‑work environment for custom pipelines and experiments.</p>
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
