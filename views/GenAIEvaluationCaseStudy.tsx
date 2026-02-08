import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';

const GenAIEvaluationCaseStudy: React.FC = () => {
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

  const pillarSteps = [
    {
      title: 'Prompt data management',
      problem:
        "As the Gen‑AI builder, I'm working on generating a Ground Truth dataset to evaluate my application. However, the process takes weeks or months over multiple iterations because I'm unsure of the most relevant questions to prepare. Additionally, finding content owners to create this dataset is time‑consuming, which makes me feel like my productivity is hindered.",
      solutions: [
        'AI + Human: Collaborate AI with human to generate the “ground truth” data.',
        'Dataset versioning management.',
      ],
      media: '/Evaluation/4 pillar/Dataset generation.png',
    },
    {
      title: 'Pre‑production evaluation',
      problem:
        "As the Gen‑AI builder, I'm trying to evaluate my application's performance. However, I'm new to this area and unsure of the best metrics to choose for my use case. I find it challenging to understand the meaning of each criterion and determine which works best. This makes me worry that I might not be measuring the most important metrics and may end up with less insightful results.",
      solutions: [
        'Standard metrics: Offer a set of recommended metrics.',
        'Custom metrics: Allow customers to define their own metrics.',
        'Metric definitions: Provide clear and detailed definitions of each metric.',
        'Review UI: Enhance the review UI instruction.',
      ],
      media: '/Evaluation/4 pillar/Preproduction.gif',
    },
    {
      title: 'Accuracy traceability',
      problem:
        "As the Gen‑AI builder, I'm trying to troubleshoot why my application's accuracy is low. However, it feels like a black box because I lack visibility into how the Q Business set up the entire workflow, the components involved, and the traceability. This makes me feel at a loss to find the root cause of the problem.",
      solutions: [
        'Traceability view to show the app execution flow.',
        'Evaluate each key component of the entire flow (Guardrail, Retriever, Plug in etc).',
        'Root cause analysis for live data/ test data.',
        'Recommendations or insights to improve performance.',
        'Dynamic/ live debugging UI.',
      ],
      media: '/Evaluation/4 pillar/accuracy tracebility.gif',
    },
    {
      title: 'Post‑production monitoring',
      problem:
        'After launch, teams need visibility into how the app behaves in real usage and where it fails.',
      solutions: [
        'Analyze live user feedback and app responses.',
        'Refine testing prompts and app configs based on production signals.',
      ],
      media: '/Evaluation/4 pillar/monitor.gif',
    },
  ];
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#666666]">
      <Link
        to="/#work"
        className="fixed bottom-6 right-6 z-50 rounded-full border border-[#E5E5E5] bg-white/90 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1A1A1A] shadow-[0_8px_24px_rgba(15,23,42,0.12)] backdrop-blur-sm hover:border-[#1A1A1A] transition-colors"
      >
        Back to Work
      </Link>
      <div className="py-[60px] px-[80px]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px] hover:text-[#1A1A1A] transition-colors"
            >
              ← Back to Portfolio
            </Link>
            <span className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px]">
              Case Study // GenAI Evaluation
            </span>
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden bg-[#fcf7e9] rounded-[32px] mx-[80px] my-[40px] px-12 md:px-16 py-16 md:py-20">
        <div className="relative z-10 max-w-[1440px] mx-auto">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="space-y-6">
            <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#9ca3af]">Overview</p>
            <h1 className="text-[48px] md:text-[64px] font-serif font-medium text-[#16161d] leading-[1.05]">
              Envisioning unified GenAI application evaluation
            </h1>
            <p className="text-[18px] md:text-[20px] font-sans text-[#4b4b54] leading-[1.6] max-w-[720px]">
              A unified evaluation framework that aligned Bedrock and Q Business teams on how to measure,
              diagnose, and improve GenAI application quality at scale.
            </p>
            <div className="flex flex-wrap gap-8 text-[15px] text-[#1f2937]">
              <div>
                <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#9ca3af]">Categories</p>
                <p className="mt-2">Enterprise AI, Evaluation</p>
              </div>
              <div>
                <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#9ca3af]">Date</p>
                <p className="mt-2">2024 Q1 – Q2</p>
              </div>
              <div>
                <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#9ca3af]">Role</p>
                <p className="mt-2">Lead designer</p>
              </div>
            </div>
          </div>
          <div className="relative min-h-[420px] -mr-12 md:-mr-16">
            <img
              src="/Evaluation/hero.png"
              alt="GenAI evaluation hero"
              className="w-full h-[420px] object-cover rounded-l-[24px] rounded-r-none"
            />
          </div>
        </div>
        </div>
      </section>

      <div className="py-[60px] px-[80px]">
        <div className="max-w-[1440px] mx-auto space-y-[64px]">
          <section className="space-y-8 border-t border-[#E5E5E5] pt-12 max-w-[1000px] mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#9ca3af]">
                Problem
              </div>
            </div>
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
              <div className="space-y-6">
                <h2
                  className="text-[24px] md:text-[30px] lg:text-[36px] font-serif font-normal text-[#16161d] tracking-[-0.02em] leading-[1.4]"
                  style={{ fontFamily: 'Newsreader, serif' }}
                >
                  The GenAI app evaluation Wake-Up call
                </h2>
                <p className="text-[16px] font-sans text-[#666666] leading-[1.7]">
                  In late 2023, AWS faced a critical inflection point in our GenAI journey. While our
                  Bedrock infrastructure and Q Business were powering major enterprises to create GenAI
                  applications, we lacked a systematic way to evaluate these applications. Q4 2023, the
                  AtoZ app (powered by Q Business) showed inconsistent responses, and the HIL
                  (human-in-the-loop) team partnered with Q Business to evaluate the AtoZ application.
                  Multiple challenges in the evaluation process were revealed, prompting the creation
                  of a universal evaluation framework for AWS GenAI apps.
                </p>
              </div>
              <div className="space-y-5">
                <div className="overflow-hidden rounded-[20px] border border-[#EDEDED] shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
                  <img
                    src="/Evaluation/problem.png"
                    alt="GenAI evaluation problem"
                    className="h-[220px] w-full object-contain px-6"
                  />
                </div>
              </div>
            </div>
            <div className="rounded-[20px] border border-[#E5E5E5] bg-[#fbfbfb] p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-[20px] font-serif font-medium text-[#1A1A1A]">
                  Challenges
                </h3>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#9ca3af]">
                  Why it was hard
                </span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 text-sm">
                <div className="rounded-[16px] bg-white p-6">
                  <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#9ca3af]">
                    Challenge 1
                  </p>
                  <img
                    src="/Evaluation/challenge 1.png"
                    alt="Challenge 1"
                    className="mt-4 h-[140px] w-full rounded-[12px] object-contain bg-[#fafafa]"
                  />
                  <p className="mt-3 text-[14px] font-sans text-[#666666] leading-[1.6]">
                    Rapidly evolving field with limited standards. Evaluation required iterative cycles
                    and multi‑component validation (RAG, plugins, guardrails).
                  </p>
                </div>
                <div className="rounded-[16px] bg-white p-6">
                  <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#9ca3af]">
                    Challenge 2
                  </p>
                  <img
                    src="/Evaluation/challenge 2.png"
                    alt="Challenge 2"
                    className="mt-4 h-[140px] w-full rounded-[12px] object-contain bg-[#fafafa]"
                  />
                  <p className="mt-3 text-[14px] font-sans text-[#666666] leading-[1.6]">
                    Diverging product ideas across teams, disconnected roadmaps, and no shared
                    understanding of evaluation quality.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative left-1/2 right-1/2 w-screen -mx-[50vw] bg-[#fcf7e9] px-[80px] py-12 text-center md:py-16">
            <div className="max-w-[1440px] mx-auto">
              <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#9ca3af]">
                Goal
              </p>
              <h4
                className="mt-6 max-w-[1000px] mx-auto text-[32px] md:text-[44px] lg:text-[60px] font-serif font-normal text-[#e77625] leading-[1.2]"
                style={{ fontFamily: 'Newsreader, serif' }}
              >
                Design a unified GenAI application evaluation framework that serves multiple AWS teams.
              </h4>
            </div>
          </section>

          <section className="space-y-10 border-t border-zinc-200/70 pt-10 max-w-[1000px] mx-auto">
          <div className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#9ca3af]">
            Research
          </div>
          <h2
            className="text-[24px] md:text-[30px] lg:text-[36px] font-serif font-normal text-[#16161d] tracking-[-0.02em] leading-[1.4]"
            style={{ fontFamily: 'Newsreader, serif' }}
          >
            Research & alignment
          </h2>
          <div className="grid gap-[120px] text-sm">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#9ca3af]">
                Quant
              </p>
              <div className="mt-4 grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center gap-3 text-center">
                  <img
                    src="/Evaluation/Research/research 1.png"
                    alt="Survey research"
                    className="h-[160px] w-full rounded-[12px] object-contain bg-[#fafafa]"
                  />
                  <p>330 survey responses</p>
                </div>
                <div className="flex flex-col items-center gap-3 text-center">
                  <img
                    src="/Evaluation/Research/research 2.png"
                    alt="Prototype testing"
                    className="h-[160px] w-full rounded-[12px] object-contain bg-[#fafafa]"
                  />
                  <p>9 prototype tests</p>
                </div>
                <div className="flex flex-col items-center gap-3 text-center">
                  <img
                    src="/Evaluation/Research/research 3.png"
                    alt="Exploratory studies"
                    className="h-[160px] w-full rounded-[12px] object-contain bg-[#fafafa]"
                  />
                  <p>18 exploratory studies</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#9ca3af]">
                  Workshop
                </p>
                <h3 className="text-[20px] font-serif font-medium text-[#1A1A1A]">
                  2‑day workshop • 80+ participants
                </h3>
                <p className="text-[14px] font-sans text-[#666666] leading-[1.6]">
                  Cross‑functional alignment across HIL, Bedrock, and Q Business teams.
                </p>
                <img
                  src="/Evaluation/Research/workshop/workshop.png"
                  alt="Workshop"
                  className="h-[260px] w-full rounded-[16px] object-contain bg-[#fafafa]"
                />
              </div>
              <div className="space-y-4">
                <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#9ca3af]">
                  Outcomes
                </p>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-[16px] border border-[#EFEFEF] bg-[#fbfbfb] p-5 text-center">
                    <img
                      src="/Evaluation/Research/workshop/outcome 1.png"
                      alt="Persona and journey insights"
                      className="h-[140px] w-full rounded-[12px] object-contain bg-white"
                    />
                    <p className="mt-4 text-[13px] text-[#4b4b54] leading-[1.6]">
                      Understanding our customer personas and their evaluation journeys
                    </p>
                  </div>
                  <div className="rounded-[16px] border border-[#EFEFEF] bg-[#fbfbfb] p-5 text-center">
                    <img
                      src="/Evaluation/Research/workshop/outcome 2.png"
                      alt="Evaluation pain points"
                      className="h-[140px] w-full rounded-[12px] object-contain bg-white"
                    />
                    <p className="mt-4 text-[13px] text-[#4b4b54] leading-[1.6]">
                      Identifying key pain points in current evaluation processes
                    </p>
                  </div>
                  <div className="rounded-[16px] border border-[#EFEFEF] bg-[#fbfbfb] p-5 text-center">
                    <img
                      src="/Evaluation/Research/workshop/outcome 3.png"
                      alt="Solution exploration"
                      className="h-[140px] w-full rounded-[12px] object-contain bg-white"
                    />
                    <p className="mt-4 text-[13px] text-[#4b4b54] leading-[1.6]">
                      Exploring potential solutions and defining clear team ownership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style>{`
            @keyframes quote-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .quote-marquee {
              animation: quote-marquee 22s linear infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .quote-marquee {
                animation: none;
              }
            }
          `}</style>
          <div className="relative overflow-hidden">
            <div className="quote-marquee flex w-max gap-4">
              <img
                src="/Evaluation/Research/workshop/quote 1.png"
                alt="Workshop quote 1"
                className="h-[180px] w-[360px] flex-none rounded-[12px] object-contain"
              />
              <img
                src="/Evaluation/Research/workshop/quote 2.png"
                alt="Workshop quote 2"
                className="h-[180px] w-[360px] flex-none rounded-[12px] object-contain"
              />
              <img
                src="/Evaluation/Research/workshop/quote 3.png"
                alt="Workshop quote 3"
                className="h-[180px] w-[360px] flex-none rounded-[12px] object-contain"
              />
              <img
                src="/Evaluation/Research/workshop/quote 1.png"
                alt="Workshop quote 1 duplicate"
                className="h-[180px] w-[360px] flex-none rounded-[12px] object-contain"
              />
              <img
                src="/Evaluation/Research/workshop/quote 2.png"
                alt="Workshop quote 2 duplicate"
                className="h-[180px] w-[360px] flex-none rounded-[12px] object-contain"
              />
              <img
                src="/Evaluation/Research/workshop/quote 3.png"
                alt="Workshop quote 3 duplicate"
                className="h-[180px] w-[360px] flex-none rounded-[12px] object-contain"
              />
            </div>
          </div>
        </section>

          <section className="relative left-1/2 right-1/2 w-screen -mx-[50vw] bg-[#fcf7e9] px-[80px] py-16 md:py-20 min-h-[480px] text-left">
            <div className="max-w-[1440px] mx-auto">
              <div className="max-w-[1000px] mx-auto space-y-10 flex flex-col justify-center items-start min-h-[480px]">
                <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#16161d]/50">
                  Research outcome
                </p>
                <h2
                  className="text-[24px] md:text-[30px] lg:text-[36px] font-serif font-normal text-[#16161d] tracking-[-0.02em] leading-[1.4]"
                  style={{ fontFamily: 'Newsreader, serif' }}
                >
                  Key insights: The four pillars of GenAI app evaluation
                </h2>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="text-[#e77625]"
                  >
                    <ellipse cx="12" cy="5" rx="7" ry="3" />
                    <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
                    <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
                  </svg>
                  <h3 className="text-[20px] md:text-[22px] font-serif font-normal text-[#e77625] leading-[1.2]">
                    Prompt data management
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#1A1A1A] leading-[1.5]">
                    Create and manage prompt and ground truth datasets.
                  </p>
                </div>
                <div className="space-y-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M18.666 2.66666V10.6667C18.6658 11.114 18.7781 11.5541 18.9926 11.9467L26.3393 25.3867C26.5615 25.7928 26.6742 26.2498 26.6662 26.7127C26.6582 27.1756 26.5298 27.6284 26.2937 28.0267C26.0576 28.4249 25.7219 28.7548 25.3196 28.9839C24.9173 29.213 24.4623 29.3334 23.9993 29.3333H7.99932C7.53635 29.3334 7.08133 29.213 6.67904 28.9839C6.27674 28.7548 5.94101 28.4249 5.7049 28.0267C5.46879 27.6284 5.34042 27.1756 5.33243 26.7127C5.32444 26.2498 5.43709 25.7928 5.65932 25.3867L13.006 11.9467C13.2205 11.5541 13.3328 11.114 13.3326 10.6667V2.66666"
                      stroke="#E77625"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.60352 20H23.3955"
                      stroke="#E77625"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.334 2.66666H20.6673"
                      stroke="#E77625"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="text-[20px] md:text-[22px] font-serif font-normal text-[#e77625] leading-[1.2]">
                    Pre‑production evaluation
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#1A1A1A] leading-[1.5]">
                    Define evaluation metrics and methods.
                  </p>
                </div>
                <div className="space-y-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 32 33"
                    fill="none"
                  >
                    <path
                      d="M1.5 5H22C25.0376 5 27.5 7.46243 27.5 10.5C27.5 13.5376 25.0376 16 22 16H6.5C3.73858 16 1.5 18.2386 1.5 21C1.5 23.7614 3.73858 26 6.5 26H14.5H29.5"
                      stroke="#E77625"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M27 20.5L30 25L27 31"
                      stroke="#E77625"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="10.5"
                      cy="5"
                      r="3.5"
                      fill="#FCF7E9"
                      stroke="#E77625"
                      strokeWidth="3"
                    />
                    <circle
                      cx="20.5"
                      cy="16"
                      r="3.5"
                      fill="#FCF7E9"
                      stroke="#E77625"
                      strokeWidth="3"
                    />
                    <circle
                      cx="9.5"
                      cy="26"
                      r="3.5"
                      fill="#FCF7E9"
                      stroke="#E77625"
                      strokeWidth="3"
                    />
                  </svg>
                  <h3 className="text-[20px] md:text-[22px] font-serif font-normal text-[#e77625] leading-[1.2]">
                    Accuracy traceability
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#1A1A1A] leading-[1.5]">
                    Provide trace views to inspect the data flow across each component in the application.
                  </p>
                </div>
                <div className="space-y-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M25.3333 4H6.66667C5.19391 4 4 5.19391 4 6.66667V25.3333C4 26.8061 5.19391 28 6.66667 28H25.3333C26.8061 28 28 26.8061 28 25.3333V6.66667C28 5.19391 26.8061 4 25.3333 4Z"
                      stroke="#E77625"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.6673 16H20.0007L17.334 22.6667L14.6673 9.33334L12.0007 16H9.33398"
                      stroke="#E77625"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h3 className="text-[20px] md:text-[22px] font-serif font-normal text-[#e77625] leading-[1.2]">
                    Post‑production monitoring
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#1A1A1A] leading-[1.5]">
                    Analyze live user feedback and app responses to refine testing prompts and app configs.
                  </p>
                </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative left-1/2 right-1/2 w-screen -mx-[50vw] px-[80px] py-16 md:py-20">
            <div className="max-w-[1440px] mx-auto space-y-12">
              <div className="space-y-4 max-w-[1000px] mx-auto">
                <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#16161d]/50">
                  Solution
                </p>
                <h2
                  className="text-[28px] md:text-[36px] font-serif font-normal text-[#16161d] leading-[1.25]"
                  style={{ fontFamily: 'Newsreader, serif' }}
                >
                  A unified evaluation system built around four pillars
                </h2>
              </div>
              <div className="space-y-16 max-w-[1000px] mx-auto">
                {pillarSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="grid gap-12 lg:grid-cols-[1fr_2fr] items-center"
                  >
                    <div className="space-y-5 text-center lg:text-left">
                      <h3 className="text-[20px] md:text-[22px] font-serif text-[#e77625] leading-[1.2]">
                        {step.title}
                      </h3>
                      <div>
                        <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#9ca3af]">
                          Problem
                        </p>
                        <p className="mt-2 text-[14px] text-[#1A1A1A] leading-[1.6] max-w-[560px] mx-auto lg:mx-0">
                          {step.problem}
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#9ca3af]">
                          Solution
                        </p>
                        <ul className="mt-2 space-y-2 text-[14px] text-[#1A1A1A] leading-[1.6] max-w-[560px] mx-auto lg:mx-0">
                          {step.solutions.map(solution => (
                            <li key={solution} className="flex gap-2 lg:items-start justify-center lg:justify-start">
                              <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-[#e77625]" />
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="w-full rounded-[24px] p-0 flex justify-center">
                      <img
                        src={step.media}
                        alt={step.title}
                        className="h-[480px] w-full max-w-[760px] object-contain mx-auto"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        <section className="relative left-1/2 right-1/2 w-screen -mx-[50vw] px-[80px] py-16 md:py-20">
          <div className="max-w-[1440px] mx-auto space-y-[100px] pb-[60px]">
            <div className="space-y-4 max-w-[1000px] mx-auto">
              <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#16161d]/50">
                Impact
              </p>
              <h2
                className="text-[24px] md:text-[30px] lg:text-[36px] font-serif font-normal text-[#16161d] tracking-[-0.02em] leading-[1.4]"
                style={{ fontFamily: 'Newsreader, serif' }}
              >
                Roadmap &amp; Resource impact
              </h2>
              <div className="grid gap-10 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-[24px] font-serif text-[#e77625]">HIL: Reshaped 2024 roadmap</h3>
                  <ul className="list-disc pl-5 space-y-2 text-[16px] text-[#1A1A1A] leading-[1.6]">
                    <li>Prioritizing LLM as a judge and Curated Workforce</li>
                    <li>Delegating core evaluation to Bedrock/Q Business</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[24px] font-serif text-[#e77625]">
                    Q Business: Funding a dedicated team
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-[16px] text-[#1A1A1A] leading-[1.6]">
                    <li>Selected as top 3 Op1 idea and led to a PRFQA</li>
                    <li>
                      Secure funding for 1 PM, 1 SDM, and 9 engineers, with additional data science
                      partnership support
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid gap-10 md:grid-cols-2">
                <img
                  src="/Evaluation/impact 1.png"
                  alt="Roadmap impact illustration"
                  className="h-[180px] w-full object-contain"
                />
                <img
                  src="/Evaluation/impact 2.png"
                  alt="Resource impact illustration"
                  className="h-[180px] w-full object-contain"
                />
              </div>
            </div>

            <div className="space-y-6 max-w-[1000px] mx-auto">
              <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#16161d]/50">
                Cross-team alignment
              </p>
              <h2
                className="text-[24px] md:text-[30px] lg:text-[36px] font-serif font-normal text-[#16161d] tracking-[-0.02em] leading-[1.4]"
                style={{ fontFamily: 'Newsreader, serif' }}
              >
                A unified vision with strategic launch plan across teams
              </h2>
              <div className="grid gap-8 md:grid-cols-4 text-center">
                {[
                  { team: 'HIL', title: 'Prompt data management' },
                  { team: 'Bedrock', title: 'Pre‑production evaluation' },
                  { team: 'Bedrock & Q Business', title: 'Accuracy traceability' },
                  { team: 'Q Business', title: 'Post‑production monitoring' },
                ].map(item => (
                  <div key={item.title} className="space-y-3">
                    <p className="text-[16px] font-serif text-[#16161d]">{item.team}</p>
                    <div className="mx-auto h-16 w-[1px] bg-[#cbd5e1]" />
                    <p className="text-[20px] font-serif text-[#e77625] leading-[1.2]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6 max-w-[1000px] mx-auto">
              <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#16161d]/50">
                Impact
              </p>
              <h2
                className="text-[24px] md:text-[30px] lg:text-[36px] font-serif font-normal text-[#16161d] tracking-[-0.02em] leading-[1.4]"
                style={{ fontFamily: 'Newsreader, serif' }}
              >
                Force‑multiplier
              </h2>
              <p className="text-[18px] text-[#1A1A1A] leading-[1.6]">
                Influenced delivery of 4 Tier 2 projects and 3 Tier 2 roadmap items across Bedrock and Q
                Business teams.
              </p>
              <img
                src="/Evaluation/forcemultiplayer.png"
                alt="Force multiplier timeline"
                className="w-full rounded-[24px] object-contain"
              />
            </div>

            <div className="space-y-6 max-w-[1000px] mx-auto">
              <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#16161d]/50">
                Impact
              </p>
              <h2
                className="text-[24px] md:text-[30px] lg:text-[36px] font-serif font-normal text-[#16161d] tracking-[-0.02em] leading-[1.4]"
                style={{ fontFamily: 'Newsreader, serif' }}
              >
                Pattern scalability
              </h2>
              <p className="text-[18px] text-[#1A1A1A] leading-[1.6]">
                <span className="text-[#e77625]">Traceability design pattern</span> was adopted by Bedrock, Q
                Business and CloudWatch team for tracing features.
              </p>
              <div className="grid gap-8 md:grid-cols-3 text-center">
                {[
                  { title: 'Q Business — Trace details', image: '/Evaluation/pattern scale1.png' },
                  { title: 'Bedrock — Observability', image: '/Evaluation/pattern scale 2.png' },
                  { title: 'CloudWatch — Prompt tracing', image: '/Evaluation/pattern scale 3.png' },
                ].map(card => (
                  <div key={card.title} className="space-y-4">
                    <div className="rounded-[20px] border border-[#1A1A1A] bg-white overflow-hidden">
                      <img src={card.image} alt={card.title} className="h-[260px] w-full object-cover" />
                    </div>
                    <p className="text-[14px] text-[#232f3e]">{card.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 max-w-[1000px] mx-auto">
              <p className="text-[12px] font-mono uppercase tracking-[0.25em] text-[#16161d]/50">
                Quote
              </p>
              <div className="grid gap-8 lg:grid-cols-2 text-[16px] text-[#16161d] leading-[1.6]">
                <div className="space-y-4">
                  <p className="text-[64px] font-serif opacity-50">“</p>
                  <p>
                    Yuhan and I collaborated on a strategic work‑stream focused on evaluations, integrating
                    efforts across the Human‑in‑the‑Loop, Bedrock, and Business Q teams. Over 3 months, Yuhan
                    conducted in‑depth customer research that clarified key problems, opportunities, and
                    requirements, forming the foundation for what needed to be delivered and why. This
                    groundwork informed a cross‑team workshop we organized to align priorities, define a
                    clear roadmap, and improve delivery efficiency.{' '}
                    <span className="text-[#e77625] font-semibold">
                      Yuhan&apos;s contributions directly supported the launch of features like RAG and model
                      evaluation and laid the groundwork for future advancements such as tracing and synthetic
                      data generation.
                    </span>
                  </p>
                  <p className="text-[12px] font-mono uppercase">— Shubha, Principle UX Designer Bedrock (L7)</p>
                </div>
                <div className="space-y-4">
                  <p className="text-[64px] font-serif opacity-50">“</p>
                  <p>
                    Yuhan&apos;s strategic framework aligned cross‑functional leadership and laid the foundation
                    for a key Q1 2025 release that addresses this fundamental customer need.{' '}
                    <span className="text-[#e77625] font-semibold">
                      I can easily leverage her design and speed up the whole team for a success delivery.
                    </span>
                  </p>
                  <p className="text-[12px] font-mono uppercase">
                    — Akanksha, Sr. UX Designer Q Business (L6)
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-[64px] font-serif opacity-50">“</p>
                  <p>
                    Yuhan&apos;s experience on RAG evaluations for Q Business influenced Bedrock&apos;s evaluations
                    launched at Reinvent 2024 (LLM as a Judge and RAG evaluations), and will continue to play
                    an inspiring role in Agents evaluations we are launching in 2025, especially the
                    visualization of traces, and elements of visualizing LLM as a Judge. When she first showed
                    me her UX/UI at an all‑day workshop in SJC25 that joined Bedrock, SageMaker and Q, she gave
                    me a tour of the experience not just from a visual design elements perspective, but from a
                    real understanding of how customers build apps with our building blocks and how they need
                    to evaluate each piece. Her work reaches beyond her own team, onto other teams, bridging
                    organizational divides.
                  </p>
                  <p className="text-[12px] font-mono uppercase">— Jesse, Sr. TPM Bedrock (L6)</p>
                </div>
                <div className="space-y-4">
                  <p className="text-[64px] font-serif opacity-50">“</p>
                  <p>
                    Yuhan&apos;s leadership in mapping the customer journey was crucial, from prompt management to
                    human‑in‑the‑loop evaluation. Her design encompasses comprehensive evaluation processes,
                    insightful dashboards, and observability frameworks.{' '}
                    <span className="text-[#e77625] font-semibold">
                      This system not only enables real‑time performance monitoring but also lays the
                      groundwork for self‑tuning applications, creating a feedback flywheel for continuous
                      improvement. She is the best designer I’ve ever worked with.
                    </span>
                  </p>
                  <p className="text-[12px] font-mono uppercase">— Morgan, TPM Amazon Q Business (L6)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
};

export default GenAIEvaluationCaseStudy;
