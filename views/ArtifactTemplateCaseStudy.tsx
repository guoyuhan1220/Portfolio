import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ArtifactTemplateCaseStudy: React.FC = () => {
  const [activeFlow, setActiveFlow] = useState('documents');

  const flowOptions = [
    { id: 'documents', label: 'Documents' },
    { id: 'presentations', label: 'Presentations' },
    { id: 'spreadsheets', label: 'Spreadsheets' },
    { id: 'visuals', label: 'Visuals' },
    { id: 'audio', label: 'Audio' },
  ];

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

        <article className="space-y-10" data-page="artifact-case-study">
          <header className="space-y-4" data-section="hero">
            <h1 className="text-5xl md:text-6xl font-serif text-zinc-900 tracking-tight">
              AI‑Powered Document Creation System
            </h1>
            <h2 className="text-xl md:text-2xl font-serif italic text-zinc-700">
              Helping users get started and stay in flow
            </h2>
            <div className="text-sm text-zinc-600 space-y-1">
              <p>
                <strong>My Role:</strong> Lead Product Designer
              </p>
              <p>
                <strong>Timeline:</strong> 3 months (Research to Specification)
              </p>
              <p>
                <strong>Team:</strong> Me, 2 PMs, 4 Engineers, 1 Researcher
              </p>
            </div>
          </header>

          <hr className="border-zinc-200/70" />

          <section className="space-y-6" data-section="problem">
            <h2 className="text-3xl font-serif text-zinc-900">The Problem I Was Solving</h2>
            <p>
              I joined the team to tackle a frustrating problem: our users were creating documents,
              presentations, and reports constantly, but the tools weren&apos;t helping them. I watched
              people struggle with three specific issues:
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-zinc-900">Blank pages with no direction</h3>
                <p>
                  Users would open the tool and just... stare. &quot;What sections do I need? How should I
                  organize this? Am I forgetting something?&quot; There was no guidance, no scaffolding.
                  Just a blinking cursor.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-serif text-zinc-900">Formatting that breaks your flow</h3>
                <p>
                  Generated documents only delivered content, users had to leave the tool to manually apply
                  brand styles, then return and continue writing. That constant context switch broke focus
                  and had to be repeated every time they created something new.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-serif text-zinc-900">Starting from scratch, every time</h3>
                <p>
                  The most frustrating thing I saw: a marketing manager creating her 6th weekly report,
                  manually typing out the same structure she&apos;d used the previous 5 weeks. The tool had no
                  memory. It learned nothing.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-serif text-zinc-900">What users told me</h3>
              <blockquote className="relative rounded-2xl border border-zinc-200/70 bg-white/80 p-5 italic shadow-sm">
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">
                  PM + Engineering
                </div>
                <p>
                  &quot;There&apos;s no memory and no frequently used company templates to guide me. I end up
                  recreating structure every time.&quot;
                </p>
              </blockquote>
              <blockquote className="relative rounded-2xl border border-zinc-200/70 bg-white/80 p-5 italic shadow-sm">
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">Marketing</div>
                <p>
                  &quot;After I finish writing, I have to stop and go apply our brand theme. It completely
                  breaks my flow. And next week? I&apos;ll do this exact same setup again.&quot;
                </p>
              </blockquote>
            </div>

            <p>
              This wasn&apos;t about small friction—people were wasting hours on setup instead of doing
              their actual work.
            </p>
          </section>

          <hr className="border-zinc-200/70" />

          <section className="space-y-6" data-section="approach">
            <h2 className="text-3xl font-serif text-zinc-900">How I Approached It</h2>
            <p>
              I analyzed over 2,000 documents generated with the current tool to find patterns and
              breakdowns in the creation flow.
            </p>

            <div className="space-y-6">
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-400">
                Key Learnings
              </div>
              <h3 className="text-xl font-serif text-zinc-900">What I learned</h3>
              <div className="grid gap-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-2xl border border-zinc-200/70 bg-white p-5 shadow-sm space-y-3">
                    <p className="font-medium text-zinc-900">
                      People already tell you what they want—if you listen
                    </p>
                    <p className="text-zinc-600">
                      I noticed users would say things like &quot;Create a brief PRD&quot; or &quot;Quick deck for executives.&quot;
                      They were literally telling me: brief = short, quick = high-level, for executives = less
                      detail. But the tool ignored all those signals.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-zinc-200/70 bg-white p-5 shadow-sm space-y-3">
                    <p className="font-medium text-zinc-900">Templates mean two different things</p>
                    <p className="text-zinc-600">People kept saying &quot;template&quot; but meant different things:</p>
                    <p className="text-zinc-600">
                      Sometimes: <em>&quot;What sections should be in a PRD?&quot;</em> (structure)
                    </p>
                    <p className="text-zinc-600">
                      Other times: <em>&quot;Make this look executive-appropriate&quot;</em> (styling)
                    </p>
                    <p className="text-zinc-600">
                      I realized these were two separate problems that needed separate solutions.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-zinc-200/70 bg-white p-5 shadow-sm space-y-3">
                    <p className="font-medium text-zinc-900">Configuration screens kill momentum</p>
                    <p className="text-zinc-600">I ran an A/B test:</p>
                    <ul className="list-disc pl-5 space-y-1 text-zinc-600">
                      <li>
                        Version A: Asked 12 configuration questions before generating anything → 45% of people
                        gave up
                      </li>
                      <li>
                        Version B: Asked 3 simple questions, used smart defaults for the rest → Only 8% gave up
                      </li>
                    </ul>
                    <p className="text-zinc-600">
                      People just wanted to start. They didn&apos;t want to fill out forms.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-zinc-200/70 bg-white p-5 shadow-sm space-y-3">
                  <p className="font-medium text-zinc-900">
                    Different content types need completely different approaches
                  </p>
                  <div className="overflow-auto border border-zinc-200">
                    <table className="w-full text-[13px] md:text-sm text-zinc-600 leading-6">
                      <thead className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 bg-zinc-50">
                        <tr>
                          <th className="text-left p-4">What they&apos;re making</th>
                          <th className="text-left p-4">Content vs. Style</th>
                          <th className="text-left p-4">What they actually need</th>
                        </tr>
                      </thead>
                      <tbody className="[&>tr:not(:last-child)]:border-b [&>tr:not(:last-child)]:border-zinc-100">
                        <tr>
                          <td className="p-4 font-medium">Documents</td>
                          <td className="p-4">Separate things</td>
                          <td className="p-4">Let me write first, I&apos;ll worry about styling later</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium">Presentations</td>
                          <td className="p-4">Connected</td>
                          <td className="p-4">I need to see the layout to know how much text fits</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium">Spreadsheets</td>
                          <td className="p-4">Style doesn&apos;t matter</td>
                          <td className="p-4">Just let me focus on the data and formulas</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium">Visuals</td>
                          <td className="p-4">Style IS the content</td>
                          <td className="p-4">I can&apos;t even start until I choose a visual style</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-medium">Audio / Podcasts</td>
                          <td className="p-4">No visual styling</td>
                          <td className="p-4">Script first, voice decisions later</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-zinc-600">
                    When I tested a &quot;one size fits all&quot; approach, it failed. But when I designed different
                    flows for each type, completion rates jumped 34%.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-zinc-200/70" />

          <section className="space-y-16" data-section="solution">
            <h2 className="text-3xl font-serif text-zinc-900">My Design Solution</h2>
            <p>I designed six core solutions to solve these problems:</p>

            <div className="grid gap-10 lg:gap-12 lg:grid-cols-[7fr_3fr] items-start pt-20">
              <div className="min-h-[280px] rounded-2xl border border-dashed border-zinc-200 bg-white/70 p-6 text-sm text-zinc-400 flex items-center justify-center">
                Smart suggestion mock (placeholder)
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif text-zinc-900">
                  1. Smart suggestions as you type
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Remember what template they used last time</li>
                  <li>Auto-fill the date range (it&apos;s Monday, so &quot;last week&quot; means Jan 20-26)</li>
                  <li>
                    Pull in their usual data source (Google Analytics, because that&apos;s what they used the
                    last 6 times)
                  </li>
                  <li>Include their common metrics</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-10 lg:gap-12 lg:grid-cols-[1fr_auto_1.2fr] items-start pt-24">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif text-zinc-900">
                  2. Different workflows for different content types
                </h3>
                {activeFlow === 'documents' && (
                  <div className="space-y-3">
                    <p>
                      <strong>For documents (like PRDs, reports):</strong>
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Light styling during creation (just logo and brand colors, nothing distracting)</li>
                      <li>Focus stays on writing</li>
                      <li>
                        At export: &quot;Here&apos;s a full preview. Like it? Export. Want to try a different
                        style? Here are your options.&quot;
                      </li>
                      <li>78% kept the default style, 22% explored alternatives</li>
                    </ul>
                  </div>
                )}

                {activeFlow === 'presentations' && (
                  <div className="space-y-3">
                    <p>
                      <strong>For presentations:</strong>
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Show them fully-styled slides from the start</li>
                      <li>
                        Why? Because I learned the hard way: when users see the layout, they know how much
                        text fits. Without seeing it styled, 60% had to rewrite content later.
                      </li>
                      <li>At export: Minor tweaks only</li>
                    </ul>
                  </div>
                )}

                {activeFlow === 'spreadsheets' && (
                  <div className="space-y-3">
                    <p>
                      <strong>For spreadsheets:</strong>
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Just give them a grid with column headers and formula support</li>
                      <li>No styling beyond basic borders</li>
                      <li>89% of their time is spent on data, not formatting</li>
                    </ul>
                  </div>
                )}

                {activeFlow === 'visuals' && (
                  <div className="space-y-3">
                    <p>
                      <strong>For visuals like infographics:</strong>
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Force them to pick a style first (you literally can&apos;t create a timeline without
                        knowing the layout)
                      </li>
                      <li>Generate a fully-designed visual</li>
                      <li>At export: Focus on technical specs (PNG or SVG? 72 DPI or 300 DPI?)</li>
                    </ul>
                  </div>
                )}

                {activeFlow === 'audio' && (
                  <div className="space-y-3">
                    <p>
                      <strong>For audio / podcasts:</strong>
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Start with a script template and lightweight structure</li>
                      <li>No visual styling beyond basic formatting</li>
                      <li>Voice and export settings are handled at the end</li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2 text-[11px] font-mono uppercase tracking-[0.2em]">
                {flowOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setActiveFlow(option.id)}
                    className={`px-3 py-2 border rounded-sm text-left transition-colors ${
                      activeFlow === option.id
                        ? 'border-zinc-900 text-zinc-900 bg-white'
                        : 'border-zinc-200 text-zinc-500 hover:text-zinc-900'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <div className="min-h-[280px] rounded-2xl border border-dashed border-zinc-200 bg-white/70 p-6 text-sm text-zinc-400 flex items-center justify-center">
                Workflow variations mock (placeholder)
              </div>
            </div>

            <div className="grid gap-10 lg:gap-12 lg:grid-cols-[7fr_3fr] items-start pt-24">
              <div className="min-h-[280px] rounded-2xl border border-dashed border-zinc-200 bg-white/70 p-6 text-sm text-zinc-400 flex items-center justify-center">
                In-context editing mock (placeholder)
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif text-zinc-900">
                  3. In-context editing experience
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Edit directly where the content appears</li>
                  <li>Inline suggestions and quick fixes without leaving the flow</li>
                  <li>Keep context and structure visible while revising</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-10 lg:gap-12 lg:grid-cols-[7fr_3fr] items-start pt-24">
              <div className="min-h-[280px] rounded-2xl border border-dashed border-zinc-200 bg-white/70 p-6 text-sm text-zinc-400 flex items-center justify-center">
                Export styling preview mock (placeholder)
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif text-zinc-900">
                  4. Export with styling
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Full visual styling applied at export</li>
                  <li>Preview multiple styles before finalizing</li>
                  <li>Clear handoff formats without extra rework</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-10 lg:gap-12 lg:grid-cols-[7fr_3fr] items-start pt-24">
              <div className="min-h-[280px] rounded-2xl border border-dashed border-zinc-200 bg-white/70 p-6 text-sm text-zinc-400 flex items-center justify-center">
                Three-tier brand system mock (placeholder)
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif text-zinc-900">
                  5. Three-tier brand system
                </h3>
                <p>
                  This solved a hard problem: how do you enforce brand compliance without making users feel
                  restricted?
                </p>
                <p>I designed three layers:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Company brand (automatic): logo, core colors, required fonts</li>
                  <li>Team brand kit (suggested): accent colors, common sections</li>
                  <li>Personal style (full control): saved preferences within guidelines</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-10 lg:gap-12 lg:grid-cols-[7fr_3fr] items-start pt-24">
              <div className="min-h-[280px] rounded-2xl border border-dashed border-zinc-200 bg-white/70 p-6 text-sm text-zinc-400 flex items-center justify-center">
                Artifact library mock (placeholder)
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif text-zinc-900">
                  6. Artifact Library
                </h3>
                <p>
                  After the initial launch, we saw a pattern: people created documents, downloaded them, and
                  then lost track of what they had produced. The tool had no memory of past work.
                </p>
                <p>
                  We needed to close the loop and make this a true end-to-end lifecycle, not a one-way creation
                  tool.
                </p>

                <div className="space-y-4">
                </div>

              </div>
              <div className="space-y-3 border-t border-zinc-200/70 pt-6 lg:col-span-2">
                <p>
                  An <strong>Artifact Library</strong> that&apos;s not just storage, but an active workspace. Think
                  of it as your personal knowledge hub where everything you&apos;ve created lives and can be reused.
                </p>
              </div>
            </div>

            <div className="space-y-6 border-t border-zinc-200/70 pt-10">
              <h4 className="text-xl font-serif text-zinc-900">Lifecycle overview</h4>
              <div className="rounded-2xl border border-zinc-200 bg-white/80 p-6">
                <div className="grid gap-4 md:grid-cols-5 text-sm">
                  <div className="rounded-xl border border-zinc-200 bg-white p-4 space-y-2">
                    <p className="font-medium text-zinc-900">Create</p>
                    <p className="text-zinc-600">
                      Browse templates, preview styles, and start from a smart suggestion.
                    </p>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-white p-4 space-y-2">
                    <p className="font-medium text-zinc-900">Store</p>
                    <p className="text-zinc-600">
                      Auto-saved artifacts from chat and Quick Suite, searchable and tagged with context.
                    </p>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-white p-4 space-y-2">
                    <p className="font-medium text-zinc-900">Resume</p>
                    <p className="text-zinc-600">
                      Resume quickly with recent artifacts and pick up exactly where you left off.
                    </p>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-white p-4 space-y-2">
                    <p className="font-medium text-zinc-900">Reuse</p>
                    <p className="text-zinc-600">
                      Use as reference to start a new conversation or generate a fresh artifact.
                    </p>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-white p-4 space-y-2">
                    <p className="font-medium text-zinc-900">Share</p>
                    <p className="text-zinc-600">
                      Share with teammates and open in extensions for fast collaboration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-zinc-200/70" />

          <section className="space-y-6" data-section="example">
            <h2 className="text-3xl font-serif text-zinc-900">Walking Through an Example</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="min-h-[320px] rounded-2xl border border-dashed border-zinc-200 bg-white/70 p-6 text-sm text-zinc-400 flex items-center justify-center">
                Example flow screen 1 (placeholder)
              </div>
              <div className="min-h-[320px] rounded-2xl border border-dashed border-zinc-200 bg-white/70 p-6 text-sm text-zinc-400 flex items-center justify-center">
                Example flow screen 2 (placeholder)
              </div>
              <div className="min-h-[320px] rounded-2xl border border-dashed border-zinc-200 bg-white/70 p-6 text-sm text-zinc-400 flex items-center justify-center">
                Example flow screen 3 (placeholder)
              </div>
              <div className="min-h-[320px] rounded-2xl border border-dashed border-zinc-200 bg-white/70 p-6 text-sm text-zinc-400 flex items-center justify-center">
                Example flow screen 4 (placeholder)
              </div>
            </div>
          </section>

          <hr className="border-zinc-200/70" />

          <section className="space-y-6" data-section="impact">
            <h2 className="text-3xl font-serif text-zinc-900">What Happened</h2>
            <p>After we rolled this out:</p>
            <p>
              <strong>Time savings were dramatic:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Documents: 4-6 hours → 35 minutes (87% reduction)</li>
              <li>Presentations: 3-4 hours → 50 minutes (79% reduction)</li>
              <li>Overall: Each person saved 8-10 hours per month</li>
            </ul>
            <p>
              <strong>Quality improved:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Brand compliance: 60% → 94%</li>
              <li>People actually using templates: 23% → 95%</li>
              <li>Finishing what they started: 42% → 78%</li>
            </ul>
            <p>
              <strong>In 3 months:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>3,200 people actively using it</li>
              <li>18,500 documents created</li>
              <li>4.6/5 satisfaction rating</li>
            </ul>
            <p>
              <strong>What users said:</strong>
            </p>
            <blockquote className="border-l-2 border-zinc-200 pl-4 italic">
              <p>
                &quot;I type &apos;Create weekly&apos; and everything is filled in. I just verify the dates and go.
                Saves me 5 minutes every single Monday.&quot; - Marketing Manager
              </p>
            </blockquote>
            <blockquote className="border-l-2 border-zinc-200 pl-4 italic">
              <p>
                &quot;The pre-filled prompts taught me what details to include. Now I&apos;m better at creating any
                document type.&quot; - Product Manager
              </p>
            </blockquote>
            <blockquote className="border-l-2 border-zinc-200 pl-4 italic">
              <p>
                &quot;I used to dread Monday reports. Now they&apos;re actually pleasant—the tool does the heavy
                lifting.&quot; - Engineering Lead
              </p>
            </blockquote>
          </section>

          <hr className="border-zinc-200/70" />

          <section className="space-y-10" data-section="learnings">
            <div className="space-y-2">
              <h2 className="text-3xl font-serif text-zinc-900">What I Learned</h2>
              <p className="text-zinc-600">
                Key insights from the work, grouped for faster scanning.
              </p>
            </div>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-white/80 p-6 space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                  <span>Insight 01</span>
                  <span className="rounded-full border border-zinc-200 px-2 py-1 text-[9px]">Signal</span>
                </div>
                <h3 className="text-xl font-serif text-zinc-900">
                  Designing for different artifact types was crucial
                </h3>
                <p className="text-zinc-600 border-l-2 border-zinc-200 pl-4">
                  I almost made the mistake of building one unified workflow. When I tested that, it failed.
                  Documents aren&apos;t presentations. Presentations aren&apos;t spreadsheets. Respecting those
                  differences led to 34% higher completion rates.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white/80 p-6 space-y-3">
                <p className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-400">Insight 02</p>
                <h3 className="text-xl font-serif text-zinc-900">Smart suggestions changed everything</h3>
                <p className="text-zinc-600">
                  Pre-filling 70% of the prompt based on history eliminated so much friction. This became the
                  most-loved feature. The key insight: people already have patterns—the tool just needs to
                  recognize them.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white/80 p-6 space-y-3">
                <p className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-400">Insight 03</p>
                <h3 className="text-xl font-serif text-zinc-900">
                  The three-tier system solved an “impossible” problem
                </h3>
                <p className="text-zinc-600">
                  Brand teams wanted control. Users wanted freedom. By creating layers (company = required,
                  team = suggested, personal = free), I gave both groups what they needed. 94% brand compliance
                  with high user satisfaction—previously these seemed incompatible.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white/80 p-6 space-y-3">
                <p className="text-sm font-mono uppercase tracking-[0.2em] text-zinc-400">Insight 04</p>
                <h3 className="text-xl font-serif text-zinc-900">
                  Export became a design moment, not just a technical step
                </h3>
                <p className="text-zinc-600">
                  I initially thought export was just &quot;choose a format.&quot; But I realized: this is when people
                  finally see the full styled output. Making this a moment to explore alternative styles added
                  value without adding complexity earlier.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white/80 p-6 space-y-4">
              <h3 className="text-xl font-serif text-zinc-900">What I&apos;d do differently</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-600">
                <li>
                  Test edge cases earlier, including 100-page documents and multi-format exports.
                </li>
                <li>
                  Build collaboration from day one—this was the first question after launch.
                </li>
                <li>
                  Instrument granular analytics immediately to understand where people get stuck.
                </li>
              </ul>
            </div>
          </section>


          <hr className="border-zinc-200/70" />

          <section className="space-y-6" data-section="wrap-up">
            <h2 className="text-3xl font-serif text-zinc-900">Wrapping Up</h2>
            <p>
              This project taught me that the best solutions come from deeply understanding the specific problem. The breakthrough wasn&apos;t &quot;make document creation faster&quot;—it was realizing that:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>People need guidance at the exact moment they start typing</li>
              <li>Different content types fundamentally need different approaches</li>
              <li>Brand compliance works best when it&apos;s invisible</li>
              <li>Styling should happen when users are ready, not when the system demands it</li>
            </ul>
            <p>
              The system doesn&apos;t just save time. It makes starting easier, removes formatting friction, and learns from what people do.
            </p>
            <p>
              75-80% time reduction. 94% brand compliance. 18,500 documents in 3 months. But more than numbers—people actually <em>enjoy</em> creating content now.
            </p>
          </section>

          <hr className="border-zinc-200/70" />

          <section className="space-y-3" data-section="tools-status">
            <p>
              <strong>Tools I used:</strong> Figma for design, Miro for workshops, UserTesting for research, Amplitude for analytics
            </p>
            <p>
              <strong>Current status:</strong> Specification complete, engineering team building MVP focused on documents and presentations first
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default ArtifactTemplateCaseStudy;
