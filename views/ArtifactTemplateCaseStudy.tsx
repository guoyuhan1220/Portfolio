import React, { useState, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const ArtifactTemplateCaseStudy: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Hero image animations - full screen, scales down and moves up on scroll
  const heroScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.85]);
  const heroY = useTransform(scrollYProgress, [0, 0.6], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.7]);

  const [activeFlow, setActiveFlow] = useState('documents');

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
              <strong className="text-[#1A1A1A]">Timeline:</strong> 3 months
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
              src="/Artifact/Artifact%20hub/Upload.jpg"
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
              <div className="max-w-[800px] mx-auto space-y-6">
                <div className="text-[11px] font-mono uppercase tracking-[1.5px]" style={{ color: '#8B5CF6' }}>
                  The Challenge
                </div>
                <h2
                  className="text-[48px] font-serif font-medium text-[#1A1A1A] leading-[1.2]"
                  style={{ fontFamily: 'Newsreader, serif' }}
                >
                  Documents disappeared when conversations ended.
                </h2>
                <div className="space-y-4 text-[16px] font-sans text-[#666666] leading-[1.7]">
                  <p>
                    I joined the team to tackle a frustrating problem: our users were creating documents, presentations, and reports constantly, but the tools weren't helping them. I watched people struggle with three specific issues that were wasting hours of their time.
                  </p>
                  <p>
                    First, blank pages with no direction. Users would open the tool and just stare. "What sections do I need? How should I organize this? Am I forgetting something?" There was no guidance, no scaffolding. Just a blinking cursor waiting for them to figure it out on their own.
                  </p>
                  <p>
                    Second, formatting that broke their flow. Generated documents only delivered content—users had to leave the tool to manually apply brand styles, then return and continue writing. That constant context switch broke focus and had to be repeated every time they created something new. A marketing manager told me: "After I finish writing, I have to stop and go apply our brand theme. It completely breaks my flow. And next week? I'll do this exact same setup again."
                  </p>
                  <p>
                    Third, starting from scratch every time. The most frustrating thing I saw: a marketing manager creating her 6th weekly report, manually typing out the same structure she'd used the previous 5 weeks. The tool had no memory. It learned nothing. Users were recreating the same work patterns week after week, and the system never got smarter.
                  </p>
                  <p>
                    This wasn't about small friction—people were wasting hours on setup instead of doing their actual work. The tool was supposed to help them create faster, but it was actually making things slower.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-[#E5E5E5]" />

            <section className="space-y-6" data-section="approach">
              <div className="max-w-[800px] mx-auto space-y-6">
                <div className="text-[11px] font-mono uppercase tracking-[1.5px]" style={{ color: '#8B5CF6' }}>
                  How I Approached It
                </div>
                <h2
                  className="text-[48px] font-serif font-medium text-[#1A1A1A] leading-[1.2]"
                  style={{ fontFamily: 'Newsreader, serif' }}
                >
                  Analyzing patterns to understand what users really need.
                </h2>
                <div className="space-y-4 text-[16px] font-sans text-[#666666] leading-[1.7]">
                  <p>
                    I started by analyzing over 2,000 documents that users had generated with the current tool. I wanted to understand the patterns—what worked, what didn't, and where people got stuck. The data revealed something important: users were already telling us what they wanted, but we weren't listening carefully enough.
                  </p>
                  <p>
                    When someone says "Create a brief PRD" or "Quick deck for executives," those phrases carry clear intent. The system should map these signals automatically. When the prompt is vague, we should ask one clarification question before generating, not present a long configuration form that kills momentum.
                  </p>
                  <p>
                    I also discovered that "template" meant two completely different things to users. Sometimes they meant structure—"What sections should be in a PRD?" Other times they meant styling—"Make this look executive-appropriate." I realized these were two separate problems that needed separate solutions.
                  </p>
                  <p>
                    Most importantly, I learned that different content types need fundamentally different approaches. Documents aren't presentations. Presentations aren't spreadsheets. When I tested a "one size fits all" workflow, it failed. But when I designed different flows for each type—respecting how people actually work with each format—completion rates jumped 34%.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-[#E5E5E5]" />

            <section className="space-y-[40px]" data-section="solution">
              <div className="max-w-[800px] mx-auto">
                <h2
                  className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]"
                  style={{ fontFamily: 'Newsreader, serif' }}
                >
                  My Design Solution
                </h2>
                <p className="text-[16px] font-sans text-[#666666] leading-[1.6]">
                  Six core solutions to solve these problems:
                </p>

                <div className="grid gap-[40px] lg:grid-cols-[3fr_7fr] items-start pt-[100px]">
                <div className="space-y-4">
                  <h3 className="text-[22px] font-serif font-medium text-[#1A1A1A]">
                    1. Smart suggestions as you type
                  </h3>
                  <p className="text-[14px] font-sans text-[#666666] leading-[1.5]">
                    Remember templates, auto-fill date ranges, and pull in common data sources based on history.
                  </p>
                </div>
                <div className="rounded-[16px] overflow-hidden h-[400px] lg:h-[480px] flex items-center justify-center p-4 bg-white">
                  <img
                    src="/Artifact/smart%20suggestion.gif"
                    alt="Smart suggestion"
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                  />
                </div>
              </div>

              <div className="pt-[100px] space-y-8">
                <h3 className="text-[22px] font-serif font-medium text-[#1A1A1A]">
                  2. Different workflows for different content types
                </h3>
                <div className="space-y-4">
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
                    <div className="rounded-[16px] overflow-hidden flex items-center justify-center h-[400px] lg:h-[480px] p-4">
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
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-[40px] lg:grid-cols-[3fr_7fr] items-start pt-[100px]">
                <div className="space-y-4">
                  <h3 className="text-[22px] font-serif font-medium text-[#1A1A1A]">
                    3. In-context editing experience
                  </h3>
                  <p className="text-[14px] font-sans text-[#666666] leading-[1.5]">
                    Edit directly where content appears, with inline suggestions and quick fixes.
                  </p>
                </div>
                <div className="rounded-[16px] overflow-hidden h-[400px] lg:h-[480px] flex items-center justify-center p-4 bg-white">
                  <img
                    src="/Artifact/inline%20edit/Inline-edi.gif"
                    alt="Inline edit"
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                  />
                </div>
              </div>

              <div className="grid gap-[40px] lg:grid-cols-[3fr_7fr] items-start pt-[100px]">
                <div className="space-y-4">
                  <h3 className="text-[22px] font-serif font-medium text-[#1A1A1A]">
                    4. Export with styling
                  </h3>
                  <p className="text-[14px] font-sans text-[#666666] leading-[1.5]">
                    Full visual styling applied at export. Preview multiple styles before finalizing.
                  </p>
                </div>
                <div className="rounded-[16px] overflow-hidden h-[400px] lg:h-[480px] flex items-center justify-center p-4 bg-white">
                  <img
                    src="/Artifact/Export%20style.png"
                    alt="Export styling preview"
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                  />
                </div>
              </div>

              <div className="grid gap-[40px] lg:grid-cols-[3fr_7fr] items-start pt-[100px]">
                <div className="space-y-4">
                  <h3 className="text-[22px] font-serif font-medium text-[#1A1A1A]">
                    5. Three-tier brand system
                  </h3>
                  <p className="text-[14px] font-sans text-[#666666] leading-[1.5]">
                    Company brand (automatic), team brand kit (suggested), personal style (full control). 94% brand compliance with high user satisfaction.
                  </p>
                </div>
                <div className="rounded-[16px] overflow-hidden h-[400px] lg:h-[480px] flex items-center justify-center p-4 bg-white">
                  <img
                    src="/Artifact/Theme.png"
                    alt="Three-tier brand system"
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                  />
                </div>
              </div>

              <div className="grid gap-[40px] lg:gap-12 lg:grid-cols-[3fr_7fr] items-start pt-[100px]">
                <div className="space-y-4">
                  <h3 className="text-[22px] font-serif font-medium text-[#1A1A1A]">
                    6. Artifact Library
                  </h3>
                  <p className="text-[14px] font-sans text-[#666666] leading-[1.5]">
                    A workspace where everything you've created lives and can be reused, not just storage.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#666666] mb-2">User created artifact</div>
                    <div className="rounded-[16px] overflow-hidden h-[300px] lg:h-[360px] flex items-center justify-center p-4 bg-white">
                      <img
                        src="/Artifact/Artifact%20hub/Upload.jpg"
                        alt="User created artifact"
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#666666] mb-2">Inspiration</div>
                    <div className="rounded-[16px] overflow-hidden h-[300px] lg:h-[360px] flex items-center justify-center p-4 bg-white">
                      <img
                        src="/Artifact/Artifact%20hub/Featured.jpg"
                        alt="Inspiration"
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#666666] mb-2">Templates</div>
                    <div className="rounded-[16px] overflow-hidden h-[300px] lg:h-[360px] flex items-center justify-center p-4 bg-white">
                      <img
                        src="/Artifact/Artifact%20hub/Catogories%20and%20Inspired%20by%20your%20conversations-1.jpg"
                        alt="Templates"
                        className="max-w-full max-h-full w-auto h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </section>

            <hr className="border-[#E5E5E5]" />

            <section className="space-y-[40px]" data-section="learnings">
              <div className="max-w-[800px] mx-auto">
                <h2 className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-8" style={{ fontFamily: 'Newsreader, serif' }}>
                  What I Learned
                </h2>

                <div className="space-y-8 text-[16px] font-sans text-[#666666] leading-[1.7]">
                  <p>
                    When I started this project, I almost made a critical mistake: I was going to build one unified workflow for all artifact types. It seemed logical—one system, one pattern, easier to maintain. But when I tested that approach, it failed. Documents aren't presentations. Presentations aren't spreadsheets. Each type has fundamentally different needs, and respecting those differences led to 34% higher completion rates.
                  </p>

                  <p>
                    The biggest surprise was how much users loved smart suggestions. Pre-filling 70% of the prompt based on their history eliminated so much friction that it became the most-loved feature. The key insight here: people already have patterns—the tool just needs to recognize them. A marketing manager creating her weekly report doesn't want to start from scratch every time. She wants the system to remember that she uses Google Analytics, focuses on these specific metrics, and needs it formatted for executives.
                  </p>

                  <p>
                    The three-tier brand system solved what seemed like an impossible problem. Brand teams wanted control and compliance. Users wanted freedom and flexibility. By creating layers—company brand (automatic), team brand kit (suggested), personal style (full control)—I gave both groups what they needed. We achieved 94% brand compliance with high user satisfaction. Previously, these seemed incompatible.
                  </p>

                  <p>
                    Export became a design moment, not just a technical step. I initially thought export was just "choose a format." But I realized: this is when people finally see the full styled output. Making this a moment to explore alternative styles added value without adding complexity earlier in the flow. Users could focus on writing first, then explore styling options when they were ready.
                  </p>

                  <p>
                    If I were to do this again, I'd test edge cases earlier—100-page documents, multi-format exports, collaboration scenarios. I'd also instrument granular analytics from day one to understand exactly where people get stuck. But the core lesson remains: the best solutions come from deeply understanding the specific problem, not from applying generic patterns.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-[#E5E5E5]" />

            <section className="space-y-6" data-section="wrap-up">
              <div className="max-w-[800px] mx-auto">
                <h2 className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]">Wrapping Up</h2>
                <p className="text-[16px] font-sans text-[#666666] leading-[1.6]">
                  The breakthrough wasn't "make document creation faster"—it was realizing that people need guidance at the exact moment they start typing, different content types need different approaches, and styling should happen when users are ready.
                </p>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArtifactTemplateCaseStudy;
