import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ArtifactTemplateCaseStudy: React.FC = () => {
  const [activeArtifact, setActiveArtifact] = useState('document');

  return (
    <div className="min-h-screen bg-[#f7f7f5] py-24 md:py-28 px-6 md:px-12 font-sans text-zinc-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <Link
            to="/"
            className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em] hover:text-zinc-900 transition-colors"
          >
            ← Back to Portfolio
          </Link>
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em]">
            Case Study // Artifact Lifecycle
          </span>
        </div>

        <section className="space-y-12">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif text-zinc-900 tracking-tight"
          >
            AI‑Powered Enterprise Document Creation
          </motion.h1>
          <p className="text-zinc-700 text-lg md:text-xl font-serif italic max-w-3xl leading-8">
            A design case study on template management and multi‑artifact creation that balances automation
            with user control and brand compliance.
          </p>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div className="space-y-6">
              <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.35em]">
                Project Summary
              </div>
              <p className="text-zinc-700 leading-8">
                Designed an end‑to‑end system that uses AI to help business users create professional
                documents, presentations, spreadsheets, visuals, and audio content through conversation.
                The challenge was balancing intelligent automation with user control, brand compliance with
                creative flexibility, and speed with quality across diverse artifact types.
              </p>
              <div className="pl-4 border-l border-zinc-200 text-sm text-zinc-700">
                Created a three‑tier style system and artifact‑specific workflows that reduced document
                creation time by 70% while maintaining 95% brand compliance.
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-dashed border-zinc-200 bg-white p-6 text-sm text-zinc-500 h-64 flex items-center justify-center">
                Hero mock placeholder (replace with high‑fi)
              </div>
              <div className="grid gap-4 text-sm">
                {[
                  ['Role', 'Lead Product Designer'],
                  ['Time', '3 months (concept to specification)'],
                  ['Platform', 'Web & Mobile'],
                  ['Users', 'PMs, Marketing, Engineering Managers'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start justify-between gap-6 border-b border-zinc-200/70 pb-3">
                    <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.3em]">
                      {label}
                    </p>
                    <p className="text-zinc-800 text-right">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      <div className="mt-20 space-y-20 text-[15px] md:text-[17px] leading-8 text-zinc-700">
        <section id="problem" className="space-y-10 border-t border-zinc-200/70 pt-10">
          <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.35em]">Section 01</div>
          <h2 className="text-3xl font-serif text-zinc-900">Problem</h2>
          <p>
            Enterprise users create documents, presentations, spreadsheets, visuals, and audio content daily.
            Current tools fail them in three critical ways: they don’t guide users on how to get started, they
            force formatting to happen outside the creation flow, and they make users repeat the same setup
            work over and over.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-medium text-zinc-900">No guidance to get started</p>
              <p className="mt-2">
                Blank pages, no prompts, and no structure leave users wondering what sections to include and
                how to organize their content.
              </p>
            </div>
            <div>
              <p className="font-medium text-zinc-900">Formatting happens outside the flow</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Stop work to switch context.</li>
                <li>Apply brand colors, fonts, and layouts manually.</li>
                <li>Repeat for every new document.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-zinc-900">Repetitive setup every time</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Rebuild identical structures weekly.</li>
                <li>Reapply the same brand choices.</li>
                <li>Copy from old docs as a workaround.</li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="pl-4 border-l border-zinc-200 italic">
              “I create PRDs every week, but each time I’m wondering: did I include all the right sections?”
            </div>
            <div className="pl-4 border-l border-zinc-200 italic">
              “The first 10 minutes of every campaign brief is spent recreating the same structure.”
            </div>
            <div className="pl-4 border-l border-zinc-200 italic">
              “I set up the same sprint tracking columns every week. Same work, over and over.”
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">
                What’s actually wrong
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>No intelligence: no suggestions, no structure, no guidance.</li>
                <li>No flow integration: formatting is disruptive.</li>
                <li>No memory: every document starts from scratch.</li>
                <li>No adaptation: same interface for all artifact types.</li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">
                What users need
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Guided starts with scaffolding and prompts.</li>
                <li>Integrated styling during creation.</li>
                <li>Memory of repeated structures and preferences.</li>
                <li>Artifact‑specific workflows and smart defaults.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="research" className="space-y-10 border-t border-zinc-200/70 pt-10">
          <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.35em]">Section 02</div>
          <h2 className="text-3xl font-serif text-zinc-900">Research Insights</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">Methods</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>24 user interviews (8 PMs, 8 Marketing, 8 Engineering Managers)</li>
                <li>2‑week diary study with 15 participants</li>
                <li>Competitive analysis across 8 tools</li>
                <li>Document analysis of 500+ company artifacts</li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">Key insights</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Users already communicate intent in natural language.</li>
                <li>Artifact types need different relationships with style.</li>
                <li>Templates require two separate dimensions.</li>
                <li>Smart defaults beat heavy configuration.</li>
                <li>Brand compliance should be automatic.</li>
              </ul>
            </div>
          </div>
          <div className="overflow-auto border border-zinc-200 bg-white">
            <table className="w-full text-[13px] md:text-sm text-zinc-600 leading-6">
              <thead className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 bg-zinc-50">
                <tr>
                  <th className="text-left p-4">Artifact</th>
                  <th className="text-left p-4">Content‑Style Relationship</th>
                  <th className="text-left p-4">User Need</th>
                </tr>
              </thead>
              <tbody className="[&>tr:not(:last-child)]:border-b [&>tr:not(:last-child)]:border-zinc-100">
                <tr>
                  <td className="p-4 font-medium">Documents</td>
                  <td className="p-4">Independent</td>
                  <td className="p-4">Write first, style later</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Presentations</td>
                  <td className="p-4">Interdependent</td>
                  <td className="p-4">Need layout to write appropriately</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Spreadsheets</td>
                  <td className="p-4">Style irrelevant</td>
                  <td className="p-4">Focus on data and formulas</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Visuals</td>
                  <td className="p-4">Style is content</td>
                  <td className="p-4">Choose style first</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Audio</td>
                  <td className="p-4">No visual styling</td>
                  <td className="p-4">Script first, voice at export</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="concepts" className="space-y-10 border-t border-zinc-200/70 pt-10">
          <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.35em]">Section 03</div>
          <h2 className="text-3xl font-serif text-zinc-900">Key Concepts</h2>
          <div className="space-y-6 text-sm">
            <div>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">
                Concept 1 — Artifact types define workflow
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-3">
                <div className="p-4 border border-zinc-200 bg-white">
                  <p className="font-medium text-zinc-900">Documents</p>
                  <p className="mt-2">Content first, light style during creation, full style at export.</p>
                </div>
                <div className="p-4 border border-zinc-200 bg-white">
                  <p className="font-medium text-zinc-900">Presentations</p>
                  <p className="mt-2">Layout determines content amount; full styling during creation.</p>
                </div>
                <div className="p-4 border border-zinc-200 bg-white">
                  <p className="font-medium text-zinc-900">Spreadsheets</p>
                  <p className="mt-2">Function over form; styling is minimal and functional only.</p>
                </div>
                <div className="p-4 border border-zinc-200 bg-white">
                  <p className="font-medium text-zinc-900">Visuals</p>
                  <p className="mt-2">Style is content; choose visual style before content.</p>
                </div>
                <div className="p-4 border border-zinc-200 bg-white">
                  <p className="font-medium text-zinc-900">Audio</p>
                  <p className="mt-2">Script focus; voice selection at export only.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">
                Concept 2 — Two dimensions of templates
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 border border-zinc-200 bg-white">
                  <p className="font-medium text-zinc-900">Content templates (structure)</p>
                  <p className="mt-2 text-zinc-600">
                    Define what to include and how to organize it. Example: PRD → Problem → Users →
                    Requirements → Success Metrics → Timeline.
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Section structure and order</li>
                    <li>Required vs. optional content</li>
                    <li>Information hierarchy</li>
                  </ul>
                </div>
                <div className="p-4 border border-zinc-200 bg-white">
                  <p className="font-medium text-zinc-900">Style templates (appearance)</p>
                  <p className="mt-2 text-zinc-600">
                    Define how content looks visually and how branding is enforced.
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Typography, layout density, and hierarchy</li>
                    <li>Brand rules and compliance</li>
                    <li>Export presentation</li>
                  </ul>
                </div>
              </div>
              <div className="border border-zinc-200 bg-white p-6">
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">
                  Three‑tier style hierarchy
                </p>
                <div className="mt-4 overflow-auto">
                  <svg
                    viewBox="0 0 520 220"
                    className="w-full max-w-md h-36 mx-auto"
                    role="img"
                    aria-label="Style hierarchy from company to team to personal"
                  >
                    <rect x="30" y="30" width="460" height="60" rx="10" fill="#f4f4f5" stroke="#e4e4e7" />
                    <rect x="60" y="95" width="400" height="60" rx="10" fill="#f8fafc" stroke="#e4e4e7" />
                    <rect x="90" y="160" width="340" height="48" rx="10" fill="#ffffff" stroke="#e4e4e7" />

                    <text x="260" y="65" textAnchor="middle" fontSize="13" fill="#3f3f46">
                      Company Brand (Required)
                    </text>
                    <text x="260" y="130" textAnchor="middle" fontSize="13" fill="#3f3f46">
                      Team Brand Kit (Suggested)
                    </text>
                    <text x="260" y="190" textAnchor="middle" fontSize="13" fill="#3f3f46">
                      Personal Style (Flexible)
                    </text>

                    <line x1="260" y1="90" x2="260" y2="95" stroke="#d4d4d8" strokeWidth="2" />
                    <line x1="260" y1="155" x2="260" y2="160" stroke="#d4d4d8" strokeWidth="2" />
                  </svg>
                </div>
                <div className="mt-3 text-sm text-zinc-600">
                  Company brand is enforced by default, team kits guide consistency, and personal styles
                  allow flexibility within guardrails.
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="p-4 border border-zinc-200 bg-white">
                  <p className="font-medium text-zinc-900">Before separation</p>
                  <p className="mt-2">“Choose a template” mixed structure and appearance, creating confusion.</p>
                </div>
                <div className="p-4 border border-zinc-200 bg-white">
                  <p className="font-medium text-zinc-900">After separation</p>
                  <p className="mt-2">Structure and style can be mixed independently for clarity and speed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="design-questions" className="space-y-10 border-t border-zinc-200/70 pt-10">
          <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.35em]">Section 04</div>
          <h2 className="text-3xl font-serif text-zinc-900">Key Design Questions</h2>

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-serif text-zinc-900">How do we capture user intent better?</h3>
              <p className="text-sm">
                Solution: three‑layer intent capture using natural language, one targeted clarification, and
                progressive refinement.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 border border-zinc-200 bg-white">
                  <p className="font-medium text-zinc-900">Layer 1: NLP</p>
                  <p className="mt-2">Detect artifact, length, audience, and depth from natural phrasing.</p>
                </div>
                <div className="p-4 border border-zinc-200 bg-white">
                  <p className="font-medium text-zinc-900">Layer 2: One question</p>
                  <p className="mt-2">Ask a single clarification only when ambiguous.</p>
                </div>
                <div className="p-4 border border-zinc-200 bg-white">
                  <p className="font-medium text-zinc-900">Layer 3: Refinement</p>
                  <p className="mt-2">Allow adjustments during editing without restart.</p>
                </div>
              </div>
              <div className="overflow-auto border border-zinc-200 bg-white">
                <table className="w-full text-[13px] md:text-sm text-zinc-600 leading-6">
                  <thead className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 bg-zinc-50">
                    <tr>
                      <th className="text-left p-4">User signal</th>
                      <th className="text-left p-4">Interpretation</th>
                      <th className="text-left p-4">Result</th>
                    </tr>
                  </thead>
                  <tbody className="[&>tr:not(:last-child)]:border-b [&>tr:not(:last-child)]:border-zinc-100">
                    <tr>
                      <td className="p-4">“brief”, “short”, “quick”</td>
                      <td className="p-4">Length modifier</td>
                      <td className="p-4">20–40% of standard</td>
                    </tr>
                    <tr>
                      <td className="p-4">“detailed”, “comprehensive”</td>
                      <td className="p-4">Length modifier</td>
                      <td className="p-4">150–200% of standard</td>
                    </tr>
                    <tr>
                      <td className="p-4">“for executives”</td>
                      <td className="p-4">Audience signal</td>
                      <td className="p-4">Brief, strategic</td>
                    </tr>
                    <tr>
                      <td className="p-4">“for engineers”</td>
                      <td className="p-4">Audience signal</td>
                      <td className="p-4">Technical, detailed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-serif text-zinc-900">When should we apply styling?</h3>
              <p className="text-sm">
                Styling varies by artifact type. The goal is to minimize distraction while avoiding export
                surprises.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="p-4 border border-zinc-200 bg-white">
                  <p className="font-medium text-zinc-900">Documents</p>
                  <p className="mt-2">Light styling during creation, full preview at export.</p>
                </div>
                <div className="p-4 border border-zinc-200 bg-white">
                  <p className="font-medium text-zinc-900">Presentations</p>
                  <p className="mt-2">Full styling during creation so content fits the layout.</p>
                </div>
                <div className="p-4 border border-zinc-200 bg-white">
                  <p className="font-medium text-zinc-900">Spreadsheets</p>
                  <p className="mt-2">Functional styling only; no decorative options.</p>
                </div>
                <div className="p-4 border border-zinc-200 bg-white">
                  <p className="font-medium text-zinc-900">Visuals</p>
                  <p className="mt-2">Style first, content adapts to the visual system.</p>
                </div>
                <div className="p-4 border border-zinc-200 bg-white">
                  <p className="font-medium text-zinc-900">Audio</p>
                  <p className="mt-2">Script focus; voice selection at export.</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-serif text-zinc-900">How do we balance automation with control?</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="p-4 border border-zinc-200 bg-white">
                  <p className="font-medium text-zinc-900">Level 1: Smart defaults</p>
                  <p className="mt-2">80% of users accept recommended templates and brand settings.</p>
                </div>
                <div className="p-4 border border-zinc-200 bg-white">
                  <p className="font-medium text-zinc-900">Level 2: Quick customization</p>
                  <p className="mt-2">Optional tuning for length, tone, and sections.</p>
                </div>
                <div className="p-4 border border-zinc-200 bg-white">
                  <p className="font-medium text-zinc-900">Level 3: Advanced control</p>
                  <p className="mt-2">Full configuration for power users behind “Advanced.”</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="journeys" className="space-y-10 border-t border-zinc-200/70 pt-10">
          <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.35em]">Section 05</div>
          <h2 className="text-3xl font-serif text-zinc-900">Artifact‑Specific Journeys</h2>
          <div className="flex flex-wrap gap-2 text-xs font-mono uppercase tracking-[0.2em]">
            {[
              ['document', 'Document'],
              ['presentation', 'Presentation'],
              ['visual', 'Visual'],
              ['audio', 'Audio'],
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => setActiveArtifact(id)}
                className={`px-3 py-1.5 border rounded-sm transition-colors ${
                  activeArtifact === id
                    ? 'border-zinc-900 text-zinc-900 bg-white'
                    : 'border-zinc-200 text-zinc-500 hover:text-zinc-900'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {activeArtifact === 'document' && (
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-zinc-900">Documents</h3>
                <p className="text-sm italic text-zinc-600">Fast to first word, fewer surprises at export.</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Intent capture from natural prompt.</li>
                  <li>Template recommendation (Modern PRD with alternatives).</li>
                  <li>Draft generation with 3–5 content questions.</li>
                  <li>Auto‑applied light styling (logo, subtle color, clean font).</li>
                  <li>Refinement with inline editing and AI expansion.</li>
                  <li>Export with fast path + optional style exploration.</li>
                </ol>
                <ul className="list-disc pl-5 text-sm text-zinc-500">
                  <li>Time to first edit: under 30 seconds</li>
                  <li>Users keeping default style: 80%</li>
                </ul>
              </div>
              <div className="space-y-4 text-sm">
                <div className="border border-dashed border-zinc-200 bg-white p-6 h-36 flex items-center justify-center">
                  Document journey mock placeholder
                </div>
                <div className="p-0">
                  <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">
                    Key UI Moments
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Style dropdown exists but is not prominent.</li>
                    <li>Preview shows brand‑compliant default.</li>
                    <li>Export prioritizes fast path.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeArtifact === 'presentation' && (
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-zinc-900">Presentations</h3>
                <p className="text-sm italic text-zinc-600">Visual style and layout first, content draft next.</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Intent capture for audience + narrative goals.</li>
                  <li>Template + style selected together with preview.</li>
                  <li>Slides generated with full layout and hierarchy.</li>
                  <li>Refine content to fit layout.</li>
                  <li>Export with minor refinements only.</li>
                </ol>
                <ul className="list-disc pl-5 text-sm text-zinc-500">
                  <li>Users keeping initial style: 70%</li>
                </ul>
              </div>
              <div className="space-y-4 text-sm">
                <div className="border border-dashed border-zinc-200 bg-white p-6 h-36 flex items-center justify-center">
                  Presentation journey mock placeholder
                </div>
                <div className="p-0">
                  <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">
                    Key UI Moments
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Template + style paired in selection.</li>
                    <li>Thumbnail strip + full preview.</li>
                    <li>Export warns that style changes need edits.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeArtifact === 'visual' && (
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-zinc-900">Visuals</h3>
                <p className="text-sm italic text-zinc-600">Style is content, choose visual first.</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Intent capture for format + channel.</li>
                  <li>Visual style required before content input.</li>
                  <li>Structured input defines data and labels.</li>
                  <li>Design generated with style locked.</li>
                  <li>Export with resolution presets.</li>
                </ol>
                <ul className="list-disc pl-5 text-sm text-zinc-500">
                  <li>Style locked at creation: 100%</li>
                </ul>
              </div>
              <div className="space-y-4 text-sm">
                <div className="border border-dashed border-zinc-200 bg-white p-6 h-36 flex items-center justify-center">
                  Visual journey mock placeholder
                </div>
                <div className="p-0">
                  <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">
                    Key UI Moments
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Style selection is mandatory.</li>
                    <li>Text edits must fit layout constraints.</li>
                    <li>Export provides social/web/print presets.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeArtifact === 'audio' && (
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-zinc-900">Audio</h3>
                <p className="text-sm italic text-zinc-600">Script first, voice later.</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Intent capture and template selection.</li>
                  <li>Script generation with cues.</li>
                  <li>Edit script and preview snippets.</li>
                  <li>Export script and pick voices.</li>
                </ol>
                <ul className="list-disc pl-5 text-sm text-zinc-500">
                  <li>Voice selection only at export.</li>
                </ul>
              </div>
              <div className="space-y-4 text-sm">
                <div className="border border-dashed border-zinc-200 bg-white p-6 h-36 flex items-center justify-center">
                  Audio journey mock placeholder
                </div>
                <div className="p-0">
                  <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">
                    Key UI Moments
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Script editor with cue tags.</li>
                    <li>Voice picker per speaker.</li>
                    <li>Export to script and audio.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </section>

        <section id="impact" className="space-y-10 border-t border-zinc-200/70 pt-10">
          <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.35em]">Section 06</div>
          <h2 className="text-3xl font-serif text-zinc-900">Business Impact</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">
                Efficiency gains
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Documents: 87% reduction (35 min vs. 4–6 hours)</li>
                <li>Presentations: 79% reduction (50 min vs. 3–4 hours)</li>
                <li>Spreadsheets: 80% reduction (30 min vs. 2–3 hours)</li>
                <li>Visuals: 80% reduction (25 min vs. 2–4 hours)</li>
                <li>Audio: 80% reduction (35 min vs. 3–5 hours)</li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">
                Quality improvements
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Brand compliance: 60% → 94%</li>
                <li>Completion rate: 78% (vs. 42% before)</li>
                <li>User satisfaction: 4.6/5</li>
                <li>Template reuse: 4.2x per template</li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 border border-zinc-200 bg-white">
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">
                Adoption after 3 months
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>3,200 active users</li>
                <li>18,500+ artifacts created</li>
                <li>1,800 custom styles saved</li>
                <li>70% recommendation acceptance</li>
              </ul>
            </div>
            <div className="pl-4 border-l border-zinc-200 italic">
              “I used to spend a full day on PRDs. Now it’s done in an hour.”
            </div>
            <div className="pl-4 border-l border-zinc-200 italic">
              “Our campaign briefs finally look consistent. Everyone was doing their own thing before.”
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="p-4 border border-zinc-200 bg-white">
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">
                ROI per user annually
              </p>
              <p className="mt-2">96–120 hours saved per year</p>
              <p className="mt-1">Value: $4.8k–$9k per user</p>
            </div>
            <div className="p-4 border border-zinc-200 bg-white">
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">
                ROI at scale
              </p>
              <p className="mt-2">Total value: $15.4M–$28.8M</p>
              <p className="mt-1">ROI: 7.7x–14.4x in Year 1</p>
            </div>
          </div>
        </section>

        <section id="learnings" className="space-y-10 border-t border-zinc-200/70 pt-10">
          <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.35em]">Section 07</div>
          <h2 className="text-3xl font-serif text-zinc-900">Key Learnings</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">What worked</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Artifact‑specific workflows improved clarity.</li>
                <li>Three‑tier style hierarchy resolved compliance vs. flexibility.</li>
                <li>Natural language intent reduced abandonment.</li>
                <li>Smart defaults supported 80% of users.</li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">
                What I’d do differently
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Ship multi‑format export earlier.</li>
                <li>Visualize style inheritance from day one.</li>
                <li>Design collaboration first, not as Phase 2.</li>
                <li>Instrument granular analytics immediately.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="conclusion" className="space-y-10 border-t border-zinc-200/70 pt-10">
          <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.35em]">Section 08</div>
          <h2 className="text-3xl font-serif text-zinc-900">Conclusion & Next Steps</h2>
          <p>
            This project proved that great AI tools don’t just automate—they fundamentally rethink
            workflows. By respecting artifact differences and applying intelligent defaults, we achieved
            75–80% time savings while improving brand compliance by 34 points.
          </p>
          <p>
            The most important outcome: users now focus on what they want to say, not how to format it.
            The system handles compliance, structure, and styling automatically—while keeping control
            available for power users.
          </p>
          <div className="pl-4 border-l border-zinc-200 text-sm">
            <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.25em]">Next steps</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Phase 2: Real‑time collaboration and version history</li>
              <li>Phase 3: Cross‑format workflows and advanced personalization</li>
              <li>Future: Predictive suggestions and AI content assistance</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
};

export default ArtifactTemplateCaseStudy;
