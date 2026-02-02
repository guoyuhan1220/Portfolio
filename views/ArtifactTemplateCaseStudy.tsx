import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const ArtifactTemplateCaseStudy: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Hero image animations - full screen, scales down and moves up on scroll
  const heroScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.85]);
  const heroY = useTransform(scrollYProgress, [0, 0.6], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.7]);

  const [activeFlow, setActiveFlow] = useState('documents');
  const [activeLibraryView, setActiveLibraryView] = useState(1);

  const flowOptions = [
    { id: 'documents', label: 'Documents' },
    { id: 'presentations', label: 'Presentations' },
    { id: 'spreadsheets', label: 'Spreadsheets' },
    { id: 'visuals', label: 'Visuals' },
    { id: 'audio', label: 'Audio' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#1A1A1A]">
      {/* Fixed Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 px-[80px] pt-[30px]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px] hover:text-[#1A1A1A] transition-colors backdrop-blur-sm bg-white/80 px-3 py-1.5 rounded"
          >
            ← Back to Portfolio
          </Link>
          <span className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px] backdrop-blur-sm bg-white/80 px-3 py-1.5 rounded">
            Case Study // Artifact Lifecycle
          </span>
        </div>
      </div>

      {/* Full Screen Hero Section */}
      <div
        ref={heroRef}
        className="relative w-full overflow-hidden flex flex-col items-center justify-start pt-[140px] pb-[24px]"
      >
        {/* Header */}
        <div className="text-center px-[80px] max-w-[1200px] mb-8 mt-0">
          <h1
            className="text-[56px] md:text-[72px] font-serif font-medium text-[#1A1A1A] leading-[1.1] mb-4"
            style={{ fontFamily: 'Newsreader, serif' }}
          >
            Designing the Complete Document Lifecycle
          </h1>
          <h2 className="text-[18px] md:text-[22px] font-sans font-normal text-[#666666] leading-[1.5] max-w-[700px] mx-auto">
            Helping users get started and stay in flow
          </h2>
          <div className="text-[14px] font-sans text-[#666666] space-y-1 pt-4">
            <p>
              <strong className="text-[#1A1A1A]">My Role:</strong> Lead Product Designer
            </p>
            <p>
              <strong className="text-[#1A1A1A]">Timeline:</strong> 3 months (Research to Specification)
            </p>
          </div>
        </div>

        {/* Hero Image - Scroll Animation */}
        <motion.div
          className="relative w-full flex items-start justify-center"
          style={{
            scale: heroScale,
            y: heroY,
            opacity: heroOpacity,
          }}
        >
          <div className="relative w-full bg-[#FAFAFA] flex items-center justify-center">
            <motion.img
              src="/Artifact/galleryGrid.png"
              alt="Artifact Types Gallery - Documents, Presentations, Spreadsheets, Visuals, and Audio"
              className="w-full h-auto object-contain px-[80px]"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/artifact-placeholder.svg';
              }}
            />
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFA]/60 via-transparent to-[#FAFAFA]/80 pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="relative bg-[#FAFAFA] py-[60px] px-[80px]">
        <div className="max-w-[1440px] mx-auto">
          <article className="space-y-[40px]" data-page="artifact-case-study">
            <section className="space-y-6" data-section="problem">
              <h2
                className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]"
                style={{ fontFamily: 'Newsreader, serif' }}
              >
                The Problem I Was Solving
              </h2>
              <p className="text-[16px] font-sans text-[#666666] leading-[1.6]">
                I joined the team to tackle a frustrating problem: our users were creating documents,
                presentations, and reports constantly, but the tools weren&apos;t helping them. I watched people
                struggle with three specific issues:
              </p>

              <div className="grid gap-[24px] md:grid-cols-3">
                <div className="space-y-4 pt-8 rounded-[16px] border border-[#E5E5E5] bg-white p-8">
                  <h3 className="text-[20px] font-serif font-medium text-[#1A1A1A]">Blank pages with no direction</h3>
                  <p className="text-[14px] font-sans text-[#666666] leading-[1.5]">
                    Users would open the tool and just... stare. &quot;What sections do I need? How should I
                    organize this? Am I forgetting something?&quot; There was no guidance, no scaffolding. Just a
                    blinking cursor.
                  </p>
                </div>

                <div className="space-y-4 rounded-[16px] border border-[#E5E5E5] bg-white p-8">
                  <h3 className="text-[20px] font-serif font-medium text-[#1A1A1A]">
                    Formatting that breaks your flow
                  </h3>
                  <p className="text-[14px] font-sans text-[#666666] leading-[1.5]">
                    Generated documents only delivered content, users had to leave the tool to manually apply
                    brand styles, then return and continue writing. That constant context switch broke focus
                    and had to be repeated every time they created something new.
                  </p>
                </div>

                <div className="space-y-4 rounded-[16px] border border-[#E5E5E5] bg-white p-8">
                  <h3 className="text-[20px] font-serif font-medium text-[#1A1A1A]">
                    Starting from scratch, every time
                  </h3>
                  <p className="text-[14px] font-sans text-[#666666] leading-[1.5]">
                    The most frustrating thing I saw: a marketing manager creating her 6th weekly report,
                    manually typing out the same structure she&apos;d used the previous 5 weeks. The tool had no
                    memory. It learned nothing.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-[20px] font-serif font-medium text-[#1A1A1A]">What users told me</h3>
                <div className="grid gap-[24px] md:grid-cols-2">
                  <blockquote className="relative border-l-2 border-[#E5E5E5] pl-6 pr-4 py-4 bg-transparent">
                    <div className="text-[11px] font-mono uppercase tracking-[1.5px] text-[#666666] mb-2">
                      PM + Engineering
                    </div>
                    <p className="text-[14px] font-sans text-[#666666] leading-[1.6] italic">
                      &quot;There&apos;s no memory and no frequently used company templates to guide me. I end up
                      recreating structure every time.&quot;
                    </p>
                  </blockquote>
                  <blockquote className="relative border-l-2 border-[#E5E5E5] pl-6 pr-4 py-4 bg-transparent">
                    <div className="text-[11px] font-mono uppercase tracking-[1.5px] text-[#666666] mb-2">
                      Marketing
                    </div>
                    <p className="text-[14px] font-sans text-[#666666] leading-[1.6] italic">
                      &quot;After I finish writing, I have to stop and go apply our brand theme. It completely
                      breaks my flow. And next week? I&apos;ll do this exact same setup again.&quot;
                    </p>
                  </blockquote>
                </div>
              </div>

              <p className="text-[16px] font-sans text-[#666666] leading-[1.6]">
                This wasn&apos;t about small friction—people were wasting hours on setup instead of doing their
                actual work.
              </p>
            </section>

            <hr className="border-[#E5E5E5]" />

            <section className="space-y-6" data-section="approach">
              <h2
                className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]"
                style={{ fontFamily: 'Newsreader, serif' }}
              >
                How I Approached It
              </h2>
              <p className="text-[16px] font-sans text-[#666666] leading-[1.6]">
                I analyzed over 2,000 documents generated with the current tool to find patterns and
                breakdowns in the creation flow.
              </p>

              <div className="space-y-6">
                <h3 className="text-[20px] font-serif font-medium text-[#1A1A1A]">What I learned</h3>
                <div className="grid gap-[24px]">
                  <div className="grid gap-[24px] md:grid-cols-3">
                    <div className="rounded-[16px] border border-[#E5E5E5] bg-white p-8 space-y-3 flex flex-col justify-start min-h-[220px]">
                      <p className="font-medium text-[#1A1A1A] text-[16px]">
                        People already tell you what they want—if you listen
                      </p>
                      <p className="text-[14px] font-sans leading-[1.5] text-[#666666]">
                        I noticed users would say things like &quot;Create a brief PRD&quot; or &quot;Quick deck for
                        executives.&quot; Those phrases already carry intent. The system should map clear signals
                        automatically, and when the prompt is vague, ask one clarification before generating.
                      </p>
                    </div>

                    <div className="rounded-[16px] border border-[#E5E5E5] bg-white p-8 space-y-3">
                      <p className="font-medium text-[#1A1A1A] text-[16px]">
                        Templates mean two different things
                      </p>
                      <p className="text-[14px] font-sans leading-[1.5] text-[#666666]">
                        People kept saying &quot;template&quot; but meant different things:
                      </p>
                      <p className="text-[14px] font-sans leading-[1.5] text-[#666666]">
                        Sometimes: <em>&quot;What sections should be in a PRD?&quot;</em> (structure)
                      </p>
                      <p className="text-[14px] font-sans leading-[1.5] text-[#666666]">
                        Other times: <em>&quot;Make this look executive-appropriate&quot;</em> (styling)
                      </p>
                      <p className="text-[14px] font-sans leading-[1.5] text-[#666666]">
                        I realized these were two separate problems that needed separate solutions.
                      </p>
                    </div>

                    <div className="rounded-[16px] border border-[#E5E5E5] bg-white p-8 space-y-3">
                      <p className="font-medium text-[#1A1A1A] text-[16px]">
                        Configuration screens kill momentum
                      </p>
                      <p className="text-[14px] font-sans leading-[1.5] text-[#666666]">I ran an A/B test:</p>
                      <ul className="list-disc pl-5 space-y-1 text-[14px] font-sans leading-[1.5] text-[#666666]">
                        <li>
                          Version A: Asked a specific configuration form with 4–6 questions before generating
                        </li>
                        <li>Version B: Asked 1 simple question, used smart defaults for the rest</li>
                      </ul>
                      <p className="text-[14px] font-sans leading-[1.5] text-[#666666]">
                        80% of users preferred Version A.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[16px] border border-[#E5E5E5] bg-white p-8 space-y-3">
                    <p className="font-medium text-[#1A1A1A] text-[16px]">
                      Different content types need completely different approaches
                    </p>
                    <div className="overflow-auto border border-[#E5E5E5] rounded-[12px]">
                      <table className="w-full text-[14px] font-sans text-[#666666] leading-[1.5]">
                        <thead className="text-[11px] font-mono uppercase tracking-[1.5px] text-[#666666] bg-[#FAFAFA]">
                          <tr>
                            <th className="text-left p-6">What they&apos;re making</th>
                            <th className="text-left p-6">Content vs. Style</th>
                            <th className="text-left p-6">What they actually need</th>
                          </tr>
                        </thead>
                        <tbody className="[&>tr:not(:last-child)]:border-b [&>tr:not(:last-child)]:border-[#E5E5E5]">
                          <tr>
                            <td className="p-6 font-medium text-[#1A1A1A]">Documents</td>
                            <td className="p-6">Separate things</td>
                            <td className="p-6">Let me write first, I&apos;ll worry about styling later</td>
                          </tr>
                          <tr>
                            <td className="p-6 font-medium text-[#1A1A1A]">Presentations</td>
                            <td className="p-6">Connected</td>
                            <td className="p-6">I need to see the layout to know how much text fits</td>
                          </tr>
                          <tr>
                            <td className="p-6 font-medium text-[#1A1A1A]">Spreadsheets</td>
                            <td className="p-6">Style doesn&apos;t matter</td>
                            <td className="p-6">Just let me focus on the data and formulas</td>
                          </tr>
                          <tr>
                            <td className="p-6 font-medium text-[#1A1A1A]">Visuals</td>
                            <td className="p-6">Style IS the content</td>
                            <td className="p-6">I can&apos;t even start until I choose a visual style</td>
                          </tr>
                          <tr>
                            <td className="p-6 font-medium text-[#1A1A1A]">Audio / Podcasts</td>
                            <td className="p-6">No visual styling</td>
                            <td className="p-6">Script first, voice decisions later</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[14px] font-sans leading-[1.5] text-[#666666]">
                      When I tested a &quot;one size fits all&quot; approach, it failed. But when I designed different
                      flows for each type, completion rates jumped 34%.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-[#E5E5E5]" />

            <section className="space-y-[40px]" data-section="solution">
              <h2
                className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]"
                style={{ fontFamily: 'Newsreader, serif' }}
              >
                My Design Solution
              </h2>
              <p className="text-[16px] font-sans text-[#666666] leading-[1.6]">
                I designed six core solutions to solve these problems:
              </p>

              <div className="grid gap-[40px] lg:grid-cols-[7fr_3fr] items-start pt-[40px]">
                <div className="rounded-[16px] border border-[#E5E5E5] bg-white overflow-hidden">
                  <img
                    src="/Artifact/smart%20suggestion.gif"
                    alt="Smart suggestion"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-[22px] font-serif font-medium text-[#1A1A1A]">
                    1. Smart suggestions as you type
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-[14px] font-sans text-[#666666] leading-[1.5]">
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

              <div className="pt-[40px] space-y-8">
                <h3 className="text-[22px] font-serif font-medium text-[#1A1A1A]">
                  2. Different workflows for different content types
                </h3>
                <div className="space-y-4">
                  <div className="space-y-4">
                    {activeFlow === 'documents' && (
                      <div className="space-y-3">
                        <p className="text-[16px] font-sans text-[#1A1A1A]">
                          <strong>For documents (like PRDs, reports):</strong>
                        </p>
                        <p className="text-[14px] font-sans text-[#666666] leading-[1.5] mb-6">
                          Light styling during creation keeps focus on writing, then export provides a full
                          preview with optional style exploration; 78% keep the default while 22% try
                          alternatives.
                        </p>
                      </div>
                    )}

                    {activeFlow === 'presentations' && (
                      <div className="space-y-3">
                        <p className="text-[16px] font-sans text-[#1A1A1A]">
                          <strong>For presentations:</strong>
                        </p>
                        <p className="text-[14px] font-sans text-[#666666] leading-[1.5]">
                          Slides are fully styled from the start so content fits the layout; without this, 60%
                          had to rewrite later, and export focuses on minor tweaks only.
                        </p>
                      </div>
                    )}

                    {activeFlow === 'spreadsheets' && (
                      <div className="space-y-3">
                        <p className="text-[16px] font-sans text-[#1A1A1A]">
                          <strong>For spreadsheets:</strong>
                        </p>
                        <p className="text-[14px] font-sans text-[#666666] leading-[1.5]">
                          Start with a structured grid, headers, and formula support; styling stays minimal so
                          89% of effort remains on data, not formatting.
                        </p>
                      </div>
                    )}

                    {activeFlow === 'visuals' && (
                      <div className="space-y-3">
                        <p className="text-[16px] font-sans text-[#1A1A1A]">
                          <strong>For visuals like infographics:</strong>
                        </p>
                        <p className="text-[14px] font-sans text-[#666666] leading-[1.5]">
                          Style selection comes first because layout drives content; the system generates a
                          finished visual and export focuses on the right output format.
                        </p>
                      </div>
                    )}

                    {activeFlow === 'audio' && (
                      <div className="space-y-3">
                        <p className="text-[16px] font-sans text-[#1A1A1A]">
                          <strong>For audio / podcasts:</strong>
                        </p>
                        <p className="text-[14px] font-sans text-[#666666] leading-[1.5]">
                          Begin with a script template and lightweight structure; visual styling stays minimal
                          and voice/export settings are handled at the end.
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="grid gap-[40px] lg:grid-cols-[auto_1fr] items-start mt-[60px]">
                    <div className="flex flex-col gap-2 text-[11px] font-mono uppercase tracking-[1.5px]">
                      {flowOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setActiveFlow(option.id)}
                          className={`px-3 py-2 border rounded-[8px] text-left transition-colors ${
                            activeFlow === option.id
                              ? 'border-[#0D6E6E] text-[#0D6E6E] bg-[#0D6E6E10] font-semibold'
                              : 'border-[#E5E5E5] text-[#666666] hover:text-[#1A1A1A] hover:border-[#1A1A1A]'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                    <div className="rounded-[16px] border border-[#E5E5E5] bg-white overflow-hidden flex items-center justify-center">
                      <img
                        src={
                          activeFlow === 'documents'
                            ? '/Artifact/Artifact%20type%20flow/document.png'
                            : activeFlow === 'presentations'
                              ? '/Artifact/Artifact%20type%20flow/Slide.png'
                              : activeFlow === 'spreadsheets'
                                ? '/Artifact/Artifact%20type%20flow/Spreadsheet.png'
                                : activeFlow === 'visuals'
                                  ? '/Artifact/Artifact%20type%20flow/Image.png'
                                  : '/Artifact/Artifact%20type%20flow/Audio.png'
                        }
                        alt="Artifact workflow variation"
                        className="w-[92%] h-auto object-contain my-4"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-[40px] lg:grid-cols-[7fr_3fr] items-start pt-[40px]">
                <div className="space-y-4">
                  <h3 className="text-[22px] font-serif font-medium text-[#1A1A1A]">
                    3. In-context editing experience
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-[14px] font-sans text-[#666666] leading-[1.5]">
                    <li>Edit directly where the content appears</li>
                    <li>Inline suggestions and quick fixes without leaving the flow</li>
                    <li>Keep context and structure visible while revising</li>
                  </ul>
                  <div className="rounded-[16px] border border-[#E5E5E5] bg-white overflow-hidden">
                    <img
                      src="/Artifact/inline%20edit/Inline-edi.gif"
                      alt="Inline edit"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-[40px] lg:grid-cols-[7fr_3fr] items-start pt-[40px]">
                <div className="rounded-[16px] border border-[#E5E5E5] bg-white overflow-hidden">
                  <img
                    src="/Artifact/Export%20style.png"
                    alt="Export styling preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-[22px] font-serif font-medium text-[#1A1A1A]">
                    4. Export with styling
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-[14px] font-sans text-[#666666] leading-[1.5]">
                    <li>Full visual styling applied at export</li>
                    <li>Preview multiple styles before finalizing</li>
                    <li>Clear handoff formats without extra rework</li>
                  </ul>
                </div>
              </div>

              <div className="grid gap-[40px] lg:grid-cols-[7fr_3fr] items-start pt-[40px]">
                <div className="rounded-[16px] border border-[#E5E5E5] bg-white overflow-hidden">
                  <img
                    src="/Artifact/Theme.png"
                    alt="Three-tier brand system"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-[22px] font-serif font-medium text-[#1A1A1A]">
                    5. Three-tier brand system
                  </h3>
                  <p className="text-[14px] font-sans text-[#666666] leading-[1.5]">
                    This solved a hard problem: how do you enforce brand compliance without making users feel
                    restricted?
                  </p>
                  <p className="text-[14px] font-sans text-[#666666] leading-[1.5]">I designed three layers:</p>
                  <ul className="list-disc pl-5 space-y-1 text-[14px] font-sans text-[#666666] leading-[1.5]">
                    <li>Company brand (automatic): logo, core colors, required fonts</li>
                    <li>Team brand kit (suggested): accent colors, common sections</li>
                    <li>Personal style (full control): saved preferences within guidelines</li>
                  </ul>
                </div>
              </div>

              <div className="grid gap-[40px] lg:gap-12 lg:grid-cols-[7fr_3fr] items-start pt-[40px]">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[#666666]">
                    {['Templates', 'Card hover'].map((label, index) => {
                      const view = index + 1;
                      return (
                        <button
                          key={label}
                          type="button"
                          onClick={() => setActiveLibraryView(view)}
                          className={`px-3 py-1.5 border rounded-sm transition-colors ${
                            activeLibraryView === view
                              ? 'border-zinc-900 text-[#1A1A1A] bg-white'
                              : 'border-[#E5E5E5] text-zinc-500 hover:text-[#1A1A1A]'
                          }`}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                  <div className="rounded-[16px] border border-[#E5E5E5] bg-white overflow-hidden">
                    <img
                      src={
                        activeLibraryView === 1
                          ? '/Artifact/Artifact%20hub/Templates.jpg'
                          : '/Artifact/Artifact%20hub/Card%20hover.jpg'
                      }
                      alt={activeLibraryView === 1 ? 'Artifact library templates' : 'Artifact library card hover'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[22px] font-serif font-medium text-[#1A1A1A]">
                    6. Artifact Library
                  </h3>
                  <p>
                    After the initial launch, we saw a pattern: people created documents, downloaded them, and
                    then lost track of what they had produced. The tool had no memory of past work.
                  </p>
                  <p>
                    We needed to close the loop and make this a true end-to-end lifecycle, not a one-way
                    creation tool.
                  </p>

                  <div className="space-y-4" />
                </div>
                <div className="space-y-3 border-t border-[#E5E5E5] pt-6 lg:col-span-2">
                  <p>
                    An <strong>Artifact Library</strong> that&apos;s not just storage, but an active workspace.
                    Think of it as your personal knowledge hub where everything you&apos;ve created lives and can be
                    reused.
                  </p>
                </div>
              </div>

              <div className="space-y-6 border-t border-[#E5E5E5] pt-10">
                <h4 className="text-[20px] font-serif font-medium text-[#1A1A1A]">Lifecycle overview</h4>
                <div className="rounded-[16px] border border-[#E5E5E5] bg-white p-8">
                  <div className="grid gap-6 md:grid-cols-5 text-[14px] font-sans">
                    <div className="rounded-[12px] border border-[#E5E5E5] bg-white p-6 space-y-2">
                      <p className="font-medium text-[#1A1A1A]">Create</p>
                      <p className="text-[#666666]">
                        Browse templates, preview styles, and start from a smart suggestion.
                      </p>
                    </div>
                    <div className="rounded-[12px] border border-[#E5E5E5] bg-white p-6 space-y-2">
                      <p className="font-medium text-[#1A1A1A]">Store</p>
                      <p className="text-[#666666]">
                        Auto-saved artifacts from chat and Quick Suite, searchable and tagged with context.
                      </p>
                    </div>
                    <div className="rounded-[12px] border border-[#E5E5E5] bg-white p-6 space-y-2">
                      <p className="font-medium text-[#1A1A1A]">Resume</p>
                      <p className="text-[#666666]">
                        Resume quickly with recent artifacts and pick up exactly where you left off.
                      </p>
                    </div>
                    <div className="rounded-[12px] border border-[#E5E5E5] bg-white p-6 space-y-2">
                      <p className="font-medium text-[#1A1A1A]">Reuse</p>
                      <p className="text-[#666666]">
                        Use as reference to start a new conversation or generate a fresh artifact.
                      </p>
                    </div>
                    <div className="rounded-[12px] border border-[#E5E5E5] bg-white p-6 space-y-2">
                      <p className="font-medium text-[#1A1A1A]">Share</p>
                      <p className="text-[#666666]">
                        Share with teammates and open in extensions for fast collaboration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-[#E5E5E5]" />

            <section className="space-y-6" data-section="example">
              <h2 className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]">
                Design Screens Overview
              </h2>
              <div className="grid gap-[24px] lg:grid-cols-2">
                <div className="min-h-[320px] rounded-2xl border border-dashed border-[#E5E5E5] bg-white p-8 text-[14px] font-sans text-[#666666] flex items-center justify-center">
                  Example flow screen 1 (placeholder)
                </div>
                <div className="min-h-[320px] rounded-2xl border border-dashed border-[#E5E5E5] bg-white p-8 text-[14px] font-sans text-[#666666] flex items-center justify-center">
                  Example flow screen 2 (placeholder)
                </div>
                <div className="min-h-[320px] rounded-2xl border border-dashed border-[#E5E5E5] bg-white p-8 text-[14px] font-sans text-[#666666] flex items-center justify-center">
                  Example flow screen 3 (placeholder)
                </div>
                <div className="min-h-[320px] rounded-2xl border border-dashed border-[#E5E5E5] bg-white p-8 text-[14px] font-sans text-[#666666] flex items-center justify-center">
                  Example flow screen 4 (placeholder)
                </div>
              </div>
            </section>

            <hr className="border-[#E5E5E5]" />

            <section className="space-y-6" data-section="impact">
              <h2 className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]">What Happened</h2>
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
              <blockquote className="border-l-2 border-[#E5E5E5] pl-4 italic">
                <p>
                  &quot;I type &apos;Create weekly&apos; and everything is filled in. I just verify the dates and go.
                  Saves me 5 minutes every single Monday.&quot; - Marketing Manager
                </p>
              </blockquote>
              <blockquote className="border-l-2 border-[#E5E5E5] pl-4 italic">
                <p>
                  &quot;The pre-filled prompts taught me what details to include. Now I&apos;m better at creating any
                  document type.&quot; - Product Manager
                </p>
              </blockquote>
              <blockquote className="border-l-2 border-[#E5E5E5] pl-4 italic">
                <p>
                  &quot;I used to dread Monday reports. Now they&apos;re actually pleasant—the tool does the heavy
                  lifting.&quot; - Engineering Lead
                </p>
              </blockquote>
            </section>

            <hr className="border-[#E5E5E5]" />

            <section className="space-y-[40px]" data-section="learnings">
              <div className="space-y-2">
                <h2 className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]">
                  What I Learned
                </h2>
                <p className="text-[14px] font-sans leading-[1.5] text-[#666666]">
                  Key insights from the work, grouped for faster scanning.
                </p>
              </div>

              <div className="grid gap-[24px] grid-cols-1 md:grid-cols-2">
                <div className="rounded-[16px] border border-[#E5E5E5] bg-white p-8 space-y-4">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#666666]">
                    <span>Insight 01</span>
                    <span className="rounded-full border border-[#E5E5E5] px-2 py-1 text-[9px]">Signal</span>
                  </div>
                  <h3 className="text-[20px] font-serif font-medium text-[#1A1A1A]">
                    Designing for different artifact types was crucial
                  </h3>
                  <p className="text-[14px] font-sans leading-[1.5] text-[#666666] border-l-2 border-[#E5E5E5] pl-4">
                    I almost made the mistake of building one unified workflow. When I tested that, it failed.
                    Documents aren&apos;t presentations. Presentations aren&apos;t spreadsheets. Respecting those
                    differences led to 34% higher completion rates.
                  </p>
                </div>

                <div className="rounded-[16px] border border-[#E5E5E5] bg-white p-8 space-y-3">
                  <p className="text-[14px] font-sans font-mono uppercase tracking-[0.2em] text-[#666666]">
                    Insight 02
                  </p>
                  <h3 className="text-[20px] font-serif font-medium text-[#1A1A1A]">
                    Smart suggestions changed everything
                  </h3>
                  <p className="text-[14px] font-sans leading-[1.5] text-[#666666]">
                    Pre-filling 70% of the prompt based on history eliminated so much friction. This became
                    the most-loved feature. The key insight: people already have patterns—the tool just needs
                    to recognize them.
                  </p>
                </div>

                <div className="rounded-[16px] border border-[#E5E5E5] bg-white p-8 space-y-3">
                  <p className="text-[14px] font-sans font-mono uppercase tracking-[0.2em] text-[#666666]">
                    Insight 03
                  </p>
                  <h3 className="text-[20px] font-serif font-medium text-[#1A1A1A]">
                    The three-tier system solved an “impossible” problem
                  </h3>
                  <p className="text-[14px] font-sans leading-[1.5] text-[#666666]">
                    Brand teams wanted control. Users wanted freedom. By creating layers (company = required,
                    team = suggested, personal = free), I gave both groups what they needed. 94% brand
                    compliance with high user satisfaction—previously these seemed incompatible.
                  </p>
                </div>

                <div className="rounded-[16px] border border-[#E5E5E5] bg-white p-8 space-y-3">
                  <p className="text-[14px] font-sans font-mono uppercase tracking-[0.2em] text-[#666666]">
                    Insight 04
                  </p>
                  <h3 className="text-[20px] font-serif font-medium text-[#1A1A1A]">
                    Export became a design moment, not just a technical step
                  </h3>
                  <p className="text-[14px] font-sans leading-[1.5] text-[#666666]">
                    I initially thought export was just &quot;choose a format.&quot; But I realized: this is when
                    people finally see the full styled output. Making this a moment to explore alternative
                    styles added value without adding complexity earlier.
                  </p>
                </div>
              </div>

              <div className="rounded-[16px] border border-[#E5E5E5] bg-white p-8 space-y-4">
                <h3 className="text-[20px] font-serif font-medium text-[#1A1A1A]">What I&apos;d do differently</h3>
                <ul className="list-disc pl-5 space-y-2 text-[14px] font-sans leading-[1.5] text-[#666666]">
                  <li>Test edge cases earlier, including 100-page documents and multi-format exports.</li>
                  <li>Build collaboration from day one—this was the first question after launch.</li>
                  <li>Instrument granular analytics immediately to understand where people get stuck.</li>
                </ul>
              </div>
            </section>

            <hr className="border-[#E5E5E5]" />

            <section className="space-y-6" data-section="wrap-up">
              <h2 className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]">Wrapping Up</h2>
              <p>
                This project taught me that the best solutions come from deeply understanding the specific
                problem. The breakthrough wasn&apos;t &quot;make document creation faster&quot;—it was realizing that:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>People need guidance at the exact moment they start typing</li>
                <li>Different content types fundamentally need different approaches</li>
                <li>Brand compliance works best when it&apos;s invisible</li>
                <li>Styling should happen when users are ready, not when the system demands it</li>
              </ul>
              <p>
                The system doesn&apos;t just save time. It makes starting easier, removes formatting friction,
                and learns from what people do.
              </p>
              <p>
                75-80% time reduction. 94% brand compliance. 18,500 documents in 3 months. But more than
                numbers—people actually <em>enjoy</em> creating content now.
              </p>
            </section>

            <hr className="border-[#E5E5E5]" />

            <section className="space-y-3" data-section="tools-status">
              <p>
                <strong>Tools I used:</strong> Figma for design, Miro for workshops, UserTesting for research,
                Amplitude for analytics
              </p>
              <p>
                <strong>Current status:</strong> Specification complete, engineering team building MVP focused
                on documents and presentations first
              </p>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArtifactTemplateCaseStudy;
