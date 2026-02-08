import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const DataLabelingCaseStudy: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const heroImageY = useTransform(scrollYProgress, [0, 0.6], [0, -60]);
  const heroImageScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.03]);

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
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-[#666666]">
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-sm border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-[80px] py-4 flex items-center justify-between">
          <Link
            to="/#work"
            className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px] hover:text-[#1A1A1A] transition-colors"
          >
            ← Back to Works
          </Link>
          <span className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px]">
            Case Study // Annotation Platform
          </span>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-[80px] py-[60px] space-y-[40px] [&_p:not(.font-mono)]:leading-[1.6] [&_p:not(.font-mono)]:text-[#666666]">
        <section className="space-y-[40px]">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="inline-block px-4 py-2 border border-[#E5E5E5] rounded-[20px] bg-[#0D6E6E10] text-[#0D6E6E] text-[11px] font-mono font-semibold uppercase tracking-[1.5px] mb-6">
                Case Study
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[56px] font-serif font-medium text-[#1A1A1A] leading-[1.2]"
                style={{ fontFamily: 'Newsreader, serif' }}
              >
                Annotation Platform
              </motion.h1>
            </div>

            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
              <div className="space-y-3">
                <p className="text-[18px] font-sans font-normal text-[#666666] leading-[1.5] pr-6 md:pr-10">
                  Led end‑to‑end design for SageMaker Ground Truth data labeling (image, video, text, 3D
                  point cloud) to meet the complex needs of clients like Torc and the NFL. Strategic
                  workflow redesigns accelerated ML model development, delivering an estimated 70%
                  reduction in manual labeling effort and a 65% reduction in annotation time.
                </p>
              </div>
              <div className="grid gap-[24px] text-sm">
                {[
                  ['Role', 'Lead Designer'],
                  ['Timeline', 'Mar 2019 – Feb 2021'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between border-b border-[#E5E5E5] pb-3">
                    <p className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px]">
                      {label}
                    </p>
                    <p className="text-[#1A1A1A]">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="mt-4 overflow-hidden rounded-[16px] border border-[#E5E5E5] bg-white shadow-[0_30px_80px_-60px_rgba(15,23,42,0.18)]"
            style={{ y: heroImageY, scale: heroImageScale }}
          >
            <img
              src="/ground truth cover.gif"
              alt="Annotation platform hero"
              className="w-full h-[520px] object-cover"
            />
          </motion.div>
        </section>

        <section className="space-y-[40px] border-t border-[#E5E5E5] pt-12">
          <h2 className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]" style={{ fontFamily: 'Newsreader, serif' }}>My Role</h2>
          <div className="grid md:grid-cols-3 gap-[24px] text-sm">
            <div className="space-y-3">
              <p className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px]">
                Research & Insights
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#666666]">
                <li>Conducted customer interviews and synthesized personas and journeys.</li>
                <li>Partnered with PM to define requirements and scope.</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px]">
                Design & Systems
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#666666]">
                <li>Led platform design from inception through launch and expansion.</li>
                <li>Created a new design system with light/dark themes.</li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px]">
                Validation & Leadership
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#666666]">
                <li>Ran usability studies and drove ongoing improvements.</li>
                <li>Presented work to senior leadership and supported PRFAQ discussions.</li>
                <li>Collaborated with science to build assistive labeling features.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-10 border-t border-zinc-200/70 pt-12">
          <h2 className="text-3xl font-serif text-zinc-900">Discover</h2>
          <div className="space-y-6 text-sm">
            <div className="space-y-4">
              <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-[0.25em]">
                Customer Insights
              </p>
              <p>
                SageMaker Ground Truth supports video, text, image, and 3D point cloud annotation. Work is
                routed to public workforces, private teams, or specialized vendors, each with different
                expectations around speed, guidance, and quality. I organized users into two primary
                personas: amateurs and professionals.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-zinc-200/80 bg-zinc-50/60 p-6 rounded-2xl shadow-sm space-y-4">
                  <p className="text-[11px] font-mono font-semibold text-zinc-500 uppercase tracking-[0.25em]">
                    Amateurs
                  </p>
                  <p className="text-zinc-600">
                    Occasional workers who need clear guidance, fewer decisions per step, and confidence
                    that they’re labeling correctly. They rely on defaults, examples, and inline instructions
                    to move quickly without making mistakes.
                  </p>
                </div>
                <div className="border border-zinc-200/80 bg-zinc-50/60 p-6 rounded-2xl shadow-sm space-y-4">
                  <p className="text-[11px] font-mono font-semibold text-zinc-500 uppercase tracking-[0.25em]">
                    Professionals
                  </p>
                  <p className="text-zinc-600">
                    Power users who prioritize speed, consistency, and keyboard-driven workflows. They want
                    bulk actions, hotkeys, and minimal friction so they can maintain high throughput while
                    meeting strict quality requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-8 items-start text-sm">
            <div className="space-y-4">
              <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-[0.25em]">
                Feature Analysis
              </p>
              <p>
                Launch use cases included bounding box, semantic segmentation, image classification, and
                document annotation. A focused competitor review surfaced gaps and informed which modalities
                should ship first.
              </p>
            </div>
            <div className="border border-zinc-200/80 bg-zinc-50/60 p-4 rounded-2xl overflow-hidden max-w-4xl mx-auto w-full shadow-sm">
              <img
                src="/Feature analysis.png"
                alt="Feature analysis"
                className="w-full h-80 object-contain bg-white"
              />
            </div>
          </div>
        </section>

        <section className="space-y-[40px] border-t border-[#E5E5E5] pt-12">
          <h2 className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]" style={{ fontFamily: 'Newsreader, serif' }}>Define</h2>
          <p className="text-[16px] font-sans text-[#666666] leading-[1.6]">
            Since most revenue comes from private or vendor labeling, we optimized for professional
            annotators while still supporting occasional workers. Two primary goals guided the design:
          </p>
          <div className="grid md:grid-cols-2 gap-[24px] text-sm">
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px] shadow-sm space-y-2">
              <p className="font-semibold text-[#1A1A1A]">Improve labeling efficiency</p>
              <p className="text-[14px] font-sans text-[#666666] leading-[1.5]">Robust, user‑friendly tools optimized for throughput.</p>
            </div>
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px] shadow-sm space-y-2">
              <p className="font-semibold text-[#1A1A1A]">Improve labeling quality</p>
              <p className="text-[14px] font-sans text-[#666666] leading-[1.5]">Reduce mistakes and support higher‑quality annotations.</p>
            </div>
          </div>
        </section>

        <section className="space-y-[40px] border-t border-[#E5E5E5] pt-12">
          <h2 className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]" style={{ fontFamily: 'Newsreader, serif' }}>Challenge</h2>
          <div className="space-y-4 text-sm">
            <div className="space-y-3">
              <p className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px]">
                Efficiency vs. Quality
              </p>
              <h3 className="text-[20px] font-serif font-medium text-[#1A1A1A]">Balancing speed and accuracy</h3>
              <p className="text-[16px] font-sans text-[#666666] leading-[1.6]">
                I partnered with scientist team to create several labeling experiments to test the
                annotation task UI. For the initial test, we revealed one major UI issue that leads to bad
                annotation results: Default label category assignment.
              </p>
              <p className="text-[16px] font-sans text-[#666666] leading-[1.6]">
                From the results we can see user assigned the first default label category to many objects,
                this means that an unfamiliar or less attentive worker might draw a good annotation around
                the object of interests but assign a wrong label.
              </p>
              <img
                src="/quality .avif"
                alt="Efficiency vs. quality experiment"
                className="w-full max-h-[520px] object-contain max-w-4xl mx-auto"
              />
              <div className="space-y-3">
                <p className="text-[16px] font-sans text-[#666666] leading-[1.6]">
                  To address this problem, I redesigned to UI and ask user to make a deliberate selection
                  for each new object. The new approach (Version 2) increases the label quality by 33%,
                  however decrease the labeling speed dramatically.
                </p>
                <p className="text-[16px] font-sans text-[#666666] leading-[1.6]">
                  Then I explored a third design option that keeps the default label category with an
                  in‑context pop over to remind user to review the label and provide required attributes.
                  The new approach works much better to help improve efficiency with good quality.
                </p>
              </div>
              <img
                src="/CHANGE 1.avif"
                alt="In-context label review"
                className="w-full max-h-[520px] object-contain max-w-4xl mx-auto"
              />
            </div>
            <div className="space-y-3">
              <p className="mt-4 text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px]">
                Assistive labeling
              </p>
              <h3 className="text-[20px] font-serif font-medium text-[#1A1A1A]">AI‑assisted workflows</h3>
              <p className="text-[16px] font-sans text-[#666666] leading-[1.6]">
                I partnered with the science team to deliver AI‑assistive features for time‑consuming tasks
                such as video tracking, 3D point cloud labeling, and semantic segmentation.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <img
                  src="/assistive labeling.gif"
                  alt="Assistive labeling"
                  className="w-full h-64 object-contain"
                />
                <img
                  src="/3d point cloud.gif"
                  alt="3D point cloud labeling"
                  className="w-full h-64 object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-[40px] border-t border-[#E5E5E5] pt-12">
          <h2 className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]" style={{ fontFamily: 'Newsreader, serif' }}>Usability Research</h2>
          <p className="text-[16px] font-sans text-[#666666] leading-[1.6]">
            I ran 60‑minute sessions with 20 annotators on Mechanical Turk across multiple regions. I
            observed how people actually worked, where they hesitated, and what slowed them down. The
            biggest opportunities were cutting context switches and making power‑user workflows faster
            without adding cognitive load.
          </p>
          <div className="grid md:grid-cols-3 gap-[24px] text-sm">
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px] shadow-sm space-y-3">
              <p className="font-semibold text-[#1A1A1A]">Less cursor movement</p>
              <p className="text-[14px] font-sans text-[#666666] leading-[1.5]">
                I kept seeing people jump to the right panel after every label. The in‑context pop‑over
                keeps the question near the work, which saved time and kept focus.
              </p>
              <img
                src="/pdf.avif"
                alt="Pop-over design details"
                className="w-full max-h-64 object-contain"
              />
            </div>
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px] shadow-sm space-y-3">
              <p className="font-semibold text-[#1A1A1A]">Display hotkeys</p>
              <p className="text-[14px] font-sans text-[#666666] leading-[1.5]">
                Many annotators were keyboard‑driven but didn’t know the shortcuts. I surfaced the most
                used hotkeys on screen so speed didn’t require memorization.
              </p>
              <div className="bg-zinc-900 rounded-md p-2">
                <img
                  src="/multi-image.avif"
                  alt="Hotkey shortcuts"
                  className="w-full max-h-64 object-contain mix-blend-screen"
                />
              </div>
            </div>
            <div className="p-8 border border-[#E5E5E5] bg-white rounded-[16px] shadow-sm space-y-3">
              <p className="font-semibold text-[#1A1A1A]">Instruction panel</p>
              <p className="text-[14px] font-sans text-[#666666] leading-[1.5]">
                Instructions are critical for quality. I added a left panel so people could read guidance
                in context instead of hunting for it in a separate view.
              </p>
              <img
                src="/instruction.avif"
                alt="Instruction panel"
                className="w-full max-h-64 object-contain"
              />
            </div>
          </div>
        </section>

        <section className="space-y-[40px] border-t border-[#E5E5E5] pt-12">
          <h2 className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]" style={{ fontFamily: 'Newsreader, serif' }}>Launch & Voice of Customer</h2>
          <p className="text-[16px] font-sans text-[#666666] leading-[1.6]">
            In 2018, we launched an end‑to‑end annotation portal where private or vendor labeling
            workforces can log in and perform annotation tasks. I designed the annotation task overlays to
            be applied across all task UI modalities and created more than 20 annotation task UI templates
            for different types of labeling tasks, including 2D image, 3D point cloud, video, and text.
          </p>
          <div className="grid md:grid-cols-2 gap-[24px] text-sm">
            <div className="border border-[#E5E5E5] bg-white p-2 rounded-[16px] overflow-hidden">
              <img
                src="/semantic-segmentation_002620aa7ca6a9fd5de03247b18bb6f3ccbcb63a.avif"
                alt="Semantic segmentation"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="border border-[#E5E5E5] bg-white p-2 rounded-[16px] overflow-hidden">
              <img
                src="/Video object tracking_ebf90993af897146d8fa1e33f4640ed5ef53e5ef.avif"
                alt="Video object tracking"
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="border border-[#E5E5E5] bg-white p-2 rounded-[16px] overflow-hidden">
              <img src="/lidar.gif" alt="3D point cloud annotation" className="w-full h-56 object-cover" />
            </div>
            <div className="border border-[#E5E5E5] bg-white p-2 rounded-[16px] overflow-hidden">
              <img src="/launch image 1.avif" alt="Launch UI" className="w-full h-56 object-cover" />
            </div>
          </div>
        </section>

        <section className="space-y-[40px] border-t border-[#E5E5E5] pt-12">
          <h2 className="text-[32px] font-serif font-medium text-[#1A1A1A] leading-[1.2]" style={{ fontFamily: 'Newsreader, serif' }}>Impact</h2>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div className="space-y-6">
              <p className="text-[16px] font-sans text-[#666666] leading-[1.6]">
                I designed 15 annotation tools from scratch and supported 30+ tools overall. Reusable
                components (instruction panel, shortcuts, toolbar, canvas) scaled across AWS services and
                shortened delivery cycles for adjacent teams.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                {[
                  ['30+', 'Annotation tools supported'],
                  ['15', 'New tools designed end‑to‑end'],
                  ['6.5% → 0.3%', 'Prime Air error rate reduction'],
                  ['65%', 'Amazon Go labeling time reduced'],
                ].map(([value, label]) => (
                  <div key={label} className="p-8 border border-[#E5E5E5] bg-white rounded-[16px]">
                    <p className="text-2xl font-serif text-[#1A1A1A]">{value}</p>
                    <p className="text-[11px] uppercase tracking-[1.5px] text-[#666666] mt-2 font-mono">{label}</p>
                  </div>
                ))}
              </div>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[#666666]">
                <li>Adopted by AWS Custom Label and Lookout for Vision.</li>
                <li>Enabled SageMaker Ground Truth Plus launch (2021 re:Invent).</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-center">
                <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">Customer Impact</p>
                <p className="text-2xl font-serif text-zinc-900 mt-4">
                  “Quality improved while throughput stayed high.”
                </p>
                <p className="text-xs text-zinc-500 mt-3">Summary of field feedback</p>
              </div>
              <div className="border border-zinc-200 bg-white p-6 rounded-2xl">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center">
                  {[
                    '/logos/amazon go.png',
                    '/logos/pinterest.png',
                    '/logos/nfl.png',
                    '/logos/Rivian.png',
                    '/logos/sony.png',
                    '/logos/prime air.png',
                    '/logos/amazon fresh.png',
                  ].map((src) => (
                    <div key={src} className="flex items-center justify-center">
                      <img
                        src={src}
                        alt="Customer logo"
                        className="h-10 w-auto object-contain opacity-90"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10 border-t border-zinc-200/70 pt-12">
          <h2 className="text-3xl font-serif text-zinc-900">What’s Next</h2>
          <p className="text-sm text-zinc-600">
            Our work never ends at launch. As the design lead, I kept capturing, analyzing, and reporting
            on customer feedback to hold teams accountable to customer‑centric product development. I set
            up bi‑weekly and monthly calls with product customers and end users to uncover pain points and
            feature requests, and I ran moderated and unmoderated usability studies through UserTesting
            and Chime to validate new concepts. PM, UX, and Research led grooming sessions to review the
            usability tracker, assign priority rankings, and define action plans (JIRA tickets, deep dives,
            research plans). In 2021, we established periodic UX/usability checkups for each launched
            product, led by GM, UX, and UX managers to review the tracker, research roadmap, and telemetry
            topics.
          </p>
        </section>

        {/* Footer */}
        <section className="py-[60px] px-[80px] bg-[#F8F7F4] border-t border-[#E5E5E5]">
          <div className="max-w-[1440px] mx-auto text-center">
            <Link
              to="/#work"
              className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px] hover:text-[#1A1A1A] transition-colors"
            >
              ← Back to Works
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DataLabelingCaseStudy;
