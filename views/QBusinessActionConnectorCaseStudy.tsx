import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const QBusinessActionConnectorCaseStudy: React.FC = () => {
  const accent = '#7c3aed';

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
    <div className="min-h-screen bg-[#F8F7F4] font-sans text-[#666666]">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-[#F8F7F4]/80 backdrop-blur-sm border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-[80px] py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px] hover:text-[#1A1A1A] transition-colors"
          >
            ← Back to Portfolio
          </Link>
          <span className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px]">
            Case Study // Action Connectors
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#1A1A1A] to-[#2D2D2D] text-white py-[120px] px-[80px]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 border border-white/20 rounded-[20px] bg-white/10 text-[11px] font-mono font-semibold uppercase tracking-[1.5px]">
              CASE STUDY
            </div>
            <h1 className="text-[72px] font-serif font-medium leading-[1.1]" style={{ fontFamily: 'Newsreader, serif' }}>
              Q Business Action Connectors
            </h1>
            <p className="text-[24px] font-sans font-normal text-white/80 leading-[1.5] max-w-[800px]">
              From insight to action. Enabling business users to act on AI answers instantly — without leaving the conversation.
            </p>
            <div className="flex gap-6 pt-8">
              <div className="text-sm">
                <div className="text-white/60 text-[11px] font-mono uppercase tracking-[1.5px] mb-2">Role</div>
                <div className="text-white">Lead Designer</div>
              </div>
              <div className="text-sm">
                <div className="text-white/60 text-[11px] font-mono uppercase tracking-[1.5px] mb-2">Timeline</div>
                <div className="text-white">Q4 2024 (3 months)</div>
              </div>
              <div className="text-sm">
                <div className="text-white/60 text-[11px] font-mono uppercase tracking-[1.5px] mb-2">Launch</div>
                <div className="text-white">GA at re:Invent 2024</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <div className="max-w-[1440px] mx-auto mt-16">
          <div className="w-full h-[600px] rounded-[24px] overflow-hidden bg-white/5">
            <img
              src="/action new.png"
              alt="Q Business Action Connectors"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Blog-style article body */}
      <article className="py-[80px] px-[80px]">
        <div className="max-w-[720px] mx-auto">

          {/* The problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-mono uppercase tracking-[1.5px] mb-6" style={{ color: accent }}>
              The Challenge
            </p>

            <h2 className="text-[36px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-8" style={{ fontFamily: 'Newsreader, serif' }}>
              The answer was there. Acting on it wasn't.
            </h2>

            <div className="space-y-6 text-[18px] text-[#444] leading-[1.8]">
              <p>
                Business users juggle 8+ applications every day. They spend roughly 40% of their time on repetitive tasks — copying data between tools, switching context, re-entering information they already have.
              </p>
              <p>
                Q Business was good at finding answers. But the moment a user got one, they hit a wall: to actually <em>do</em> something with that answer — create a Jira ticket, send a Slack message, update a Salesforce record — they had to leave the conversation and go somewhere else.
              </p>
              <p>
                The business priority in Q2 2024 was clear: unify "find information, generate insights, and take actions" across Q Business, Q Apps, Q Automation, and QuickSight into a single experience. The challenge was that we had a 3-month timeline to GA, multiple teams were stalled, and the product direction was unclear.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Challenge visuals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[1000px] mx-auto my-12"
        >
          <div className="rounded-[16px] overflow-hidden">
            <img
              src="/Q business action connector/challenge.png"
              alt="The challenge landscape"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        <div className="max-w-[720px] mx-auto">

          {/* Divider */}
          <div className="my-16 h-px bg-[#E5E5E5]" />

          {/* The Process — section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-mono uppercase tracking-[1.5px] mb-6" style={{ color: accent }}>
              The Process
            </p>

            <h2 className="text-[36px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-4" style={{ fontFamily: 'Newsreader, serif' }}>
              From stalled to shipped in six weeks
            </h2>

            <p className="text-[18px] text-[#444] leading-[1.8] mb-16">
              When I joined in September, three teams were building in parallel but hadn't aligned on a shared vision. Here's how we went from stalled to shipped.
            </p>
          </motion.div>

          {/* Week 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>Week 1</p>
            <h3 className="text-[24px] font-serif font-medium text-[#1A1A1A] leading-[1.3] mb-4" style={{ fontFamily: 'Newsreader, serif' }}>
              Rapid alignment
            </h3>
            <p className="text-[18px] text-[#444] leading-[1.8] mb-8">
              My first move was to get everyone in the same room. I ran <strong>3 working sessions across 3 teams</strong>, mapping out 18 key user flows — 4 for connector setup, 8 for chat-based actions, and 6 for Q Apps integration.
            </p>
            <div className="rounded-[16px] overflow-hidden">
              <img src="/Q business action connector/week1.png" alt="Week 1 — Rapid alignment" className="w-full h-auto" />
            </div>
          </motion.div>

          {/* Week 2–3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>Week 2–3</p>
            <h3 className="text-[24px] font-serif font-medium text-[#1A1A1A] leading-[1.3] mb-4" style={{ fontFamily: 'Newsreader, serif' }}>
              Design exploration & strategic clarity
            </h3>
            <p className="text-[18px] text-[#444] leading-[1.8] mb-8">
              That shared map changed the conversation. Instead of each team designing their own version of "take action," we could see the overlaps and gaps. I developed <strong>2 design approaches and validated them with solution architects and engineers</strong>. We landed on a phased strategy: <strong>Phase 1 — ship the core action experience in Q Business for re:Invent. Phase 2 — expand to QBS in Q1 2025.</strong>
            </p>
            <div className="rounded-[16px] overflow-hidden">
              <img src="/Q business action connector/week 3.png" alt="Week 2–3 — Design exploration & strategic clarity" className="w-full h-auto" />
            </div>
          </motion.div>

          {/* Week 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>Week 4</p>
            <h3 className="text-[24px] font-serif font-medium text-[#1A1A1A] leading-[1.3] mb-4" style={{ fontFamily: 'Newsreader, serif' }}>
              Pivot to Q Business
            </h3>
            <p className="text-[18px] text-[#444] leading-[1.8] mb-4">
              The most intense week. I produced <strong>20 detailed workflows</strong> covering admin setup, end-user actions, and app-builder configuration. In 8 days, we went through <strong>5 leadership reviews — 2 VPs and 3 Directors</strong> — iterating fast based on feedback while keeping the core vision intact.
            </p>

            {/* Step 1 */}
            <p className="text-[13px] font-mono uppercase tracking-[0.15em] text-[#999] mt-10 mb-2">Step 1</p>
            <p className="text-[18px] text-[#444] leading-[1.8] mb-6">
              <strong>Partnered with a Principal Engineer to analyze 50+ API types</strong> and map their parameters, required fields, and response shapes into a unified taxonomy.
            </p>
            <div className="rounded-[16px] overflow-hidden mb-10">
              <img src="/Q business action connector/Week 5_ Design for scale.png" alt="Analyzing 50+ API types with Principal Engineer" className="w-full h-auto" />
            </div>

            {/* Step 2 */}
            <p className="text-[13px] font-mono uppercase tracking-[0.15em] text-[#999] mb-2">Step 2</p>
            <p className="text-[18px] text-[#444] leading-[1.8] mb-6">
              <strong>Created UX patterns for core API operations</strong> — Search/Read, Post/Create, Put/Update, and Delete — so every connector follows a consistent interaction model regardless of the underlying API.
            </p>
            <div className="rounded-[16px] overflow-hidden mb-10">
              <img src="/Q business action connector/Action frame work.png" alt="UX patterns for core API operations" className="w-full h-auto" />
            </div>

            {/* Step 3 */}
            <p className="text-[13px] font-mono uppercase tracking-[0.15em] text-[#999] mb-2">Step 3</p>
            <p className="text-[18px] text-[#444] leading-[1.8] mb-6">
              <strong>Collaborated with the Data Science team to design enhanced forms</strong> — dynamic field generation, smart defaults, and contextual validation based on API schemas.
            </p>
            <div className="rounded-[16px] overflow-hidden mb-10">
              <img src={`/Q business action connector/week4.png?v=${Date.now()}`} alt="Enhanced forms with Data Science team" className="w-full h-auto" />
            </div>

            {/* Step 4 */}
            <p className="text-[13px] font-mono uppercase tracking-[0.15em] text-[#999] mb-2">Step 4</p>
            <p className="text-[18px] text-[#444] leading-[1.8] mb-6">
              <strong>Partnered with data scientists to test and design 10+ fallback scenarios</strong> for possible edge cases and error states — ensuring users always have a clear path forward when things go wrong.
            </p>
            <div className="rounded-[16px] overflow-hidden">
              <img src="/Q business action connector/Error.png" alt="Fallback scenarios and error handling" className="w-full h-auto" />
            </div>
          </motion.div>

          {/* Week 5–6 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] mb-3" style={{ color: accent }}>Week 5–6</p>
            <h3 className="text-[24px] font-serif font-medium text-[#1A1A1A] leading-[1.3] mb-4" style={{ fontFamily: 'Newsreader, serif' }}>
              Scale & solve
            </h3>
            <p className="text-[18px] text-[#444] leading-[1.8] mb-8">
              The final stretch was about scale. Every connector has different API shapes, different required fields, different error states. I designed <strong>standardized UX patterns for 50+ API types</strong> — Search/Read, Create, Update, Delete — with smart defaults and fallback scenarios so that adding a new connector didn't mean starting the design from scratch.
            </p>
            <div className="rounded-[16px] overflow-hidden mb-6">
              <img src="/Q business action connector/week5.png" alt="Week 5–6 — Scale & solve" className="w-full h-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[16px] overflow-hidden">
                <img src="/Q business action connector/Week 5_ Action design framework.png" alt="Week 5 — Action design framework" className="w-full h-auto" />
              </div>
              <div className="rounded-[16px] overflow-hidden">
                <img src="/Q business action connector/Week 5_ Design for scale.png" alt="Week 5 — Design for scale" className="w-full h-auto" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-[720px] mx-auto">
          {/* Divider */}
          <div className="my-16 h-px bg-[#E5E5E5]" />

          {/* Key Design Patterns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-mono uppercase tracking-[1.5px] mb-6" style={{ color: accent }}>
              Key Design Patterns
            </p>

            <h2 className="text-[36px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-8" style={{ fontFamily: 'Newsreader, serif' }}>
              One framework, fifty connectors
            </h2>

            <div className="space-y-6 text-[18px] text-[#444] leading-[1.8]">
              <p>
                The core design challenge wasn't any single connector — it was building a system that could handle <strong>all of them without bespoke design work for each one</strong>. I created a unified action framework that maps any third-party API into a consistent interaction pattern.
              </p>
              <p>
                Every action — whether it's creating a Jira ticket, sending a Slack message, or updating a Salesforce record — follows the same flow: <strong>discover → configure → confirm → execute</strong>. The framework handles type-ahead search for resources, dynamic form generation based on API schemas, inline validation, and graceful error recovery.
              </p>
              <p>
                This meant the engineering team could onboard a new connector in days instead of weeks, while users always knew what to expect regardless of which app they were acting on.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Framework + error visuals — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[1000px] mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="rounded-[16px] overflow-hidden">
            <img
              src="/Q business action connector/Action frame work.png"
              alt="Action framework"
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-[16px] overflow-hidden">
            <img
              src="/Q business action connector/Error.png"
              alt="Error handling patterns"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        <div className="max-w-[720px] mx-auto">
          {/* Divider */}
          <div className="my-16 h-px bg-[#E5E5E5]" />

          {/* Frictionless Connectivity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-mono uppercase tracking-[1.5px] mb-6" style={{ color: accent }}>
              Frictionless Connectivity
            </p>

            <h2 className="text-[36px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-8" style={{ fontFamily: 'Newsreader, serif' }}>
              Making setup invisible
            </h2>

            <div className="space-y-6 text-[18px] text-[#444] leading-[1.8]">
              <p>
                The biggest friction was connector setup. Enterprise apps require OAuth handshakes, API keys, and complex configuration that most end users can't — and shouldn't have to — handle.
              </p>
              <p>
                I designed a <strong>two-tier authentication model</strong>: admins configure the complex OAuth/API handshake once for enterprise apps, and end users see a simple "Connect" toggle that just works. For personal productivity tools (Slack, Gmail), we used managed OAuth so users could connect in one click.
              </p>
              <p>
                The result: <strong>what used to take IT tickets and days of back-and-forth now happens in seconds</strong>. The chat input supports type-ahead discovery so users can find and trigger actions as naturally as asking a question.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Chat + type-ahead visuals — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[1000px] mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="rounded-[16px] overflow-hidden">
            <img
              src="/Q business action connector/chat input.png"
              alt="Chat input with action suggestions"
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-[16px] overflow-hidden">
            <img
              src="/Q business action connector/Type ahead.png"
              alt="Type-ahead connector discovery"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        <div className="max-w-[720px] mx-auto">
          {/* Divider */}
          <div className="my-16 h-px bg-[#E5E5E5]" />

          {/* The Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-mono uppercase tracking-[1.5px] mb-6" style={{ color: accent }}>
              The Experience
            </p>

            <h2 className="text-[36px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-8" style={{ fontFamily: 'Newsreader, serif' }}>
              Actions that live inside the conversation
            </h2>

            <div className="space-y-6 text-[18px] text-[#444] leading-[1.8]">
              <p>
                The final experience feels deceptively simple. A user asks Q Business a question, gets an answer, and — right there in the conversation — can act on it. No context switching, no copy-pasting, no "open in new tab."
              </p>
              <p>
                Behind that simplicity is a connector library with <strong>50+ pre-built actions across 11+ applications</strong> — Jira, Salesforce, ServiceNow, Slack, PagerDuty, and more. Each connector surfaces contextually: if you're discussing a support issue, the relevant ServiceNow and PagerDuty actions appear. If you're reviewing sales data, Salesforce actions surface automatically.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Interactive demos — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[1000px] mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="rounded-[16px] overflow-hidden">
            <img
              src="/Q business action connector/q business.gif"
              alt="Action connector in conversation"
              className="w-full h-auto"
            />
          </div>
          <div className="rounded-[16px] overflow-hidden">
            <img
              src="/Q business action connector/library.gif"
              alt="Connector library"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        <div className="max-w-[720px] mx-auto">

          {/* Divider */}
          <div className="my-16 h-px bg-[#E5E5E5]" />

          {/* Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-mono uppercase tracking-[1.5px] mb-6" style={{ color: accent }}>
              The Impact
            </p>

            <h2 className="text-[36px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-8" style={{ fontFamily: 'Newsreader, serif' }}>
              Shipped at re:Invent, featured in the CEO keynote
            </h2>

            <div className="space-y-6 text-[18px] text-[#444] leading-[1.8]">
              <p>
                We launched on time. Action Connectors went GA at re:Invent 2024 and was featured in the Matt Garman keynote — with <strong>50+ third-party actions across 11+ connected applications</strong> available from day one.
              </p>
              <p>
                The change was immediate. Business users could now ask Q Business a question and act on the answer without ever switching apps. Create a support ticket from a conversation summary. Send a Slack update from a generated insight. Update a CRM record from a data analysis. The loop from insight to action closed.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 my-12">
              <div className="text-center py-8 border border-[#E5E5E5] rounded-[12px] bg-white">
                <p className="text-[32px] font-serif font-medium text-[#1A1A1A]" style={{ fontFamily: 'Newsreader, serif' }}>50+</p>
                <p className="text-[13px] text-[#666] mt-1">Third-party actions</p>
              </div>
              <div className="text-center py-8 border border-[#E5E5E5] rounded-[12px] bg-white">
                <p className="text-[32px] font-serif font-medium text-[#1A1A1A]" style={{ fontFamily: 'Newsreader, serif' }}>11+</p>
                <p className="text-[13px] text-[#666] mt-1">Connected apps</p>
              </div>
              <div className="text-center py-8 border border-[#E5E5E5] rounded-[12px] bg-white">
                <p className="text-[32px] font-serif font-medium text-[#1A1A1A]" style={{ fontFamily: 'Newsreader, serif' }}>3 mo</p>
                <p className="text-[13px] text-[#666] mt-1">Concept to GA</p>
              </div>
            </div>

            {/* re:Invent launch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="my-12 rounded-[16px] overflow-hidden"
            >
              <img
                src="/Q business action connector/reinvent launch.png"
                alt="re:Invent 2024 launch"
                className="w-full h-auto"
              />
            </motion.div>

            {/* Quote */}
            <blockquote className="border-l-2 pl-8 my-12" style={{ borderColor: accent }}>
              <p className="text-[22px] font-serif italic text-[#1A1A1A] leading-[1.6]" style={{ fontFamily: 'Newsreader, serif' }}>
                "Customers saved on average 30 minutes per incident."
              </p>
              <p className="text-[14px] text-[#666] mt-4">
                — Jennifer Tejada, Chairperson & CEO, PagerDuty
              </p>
            </blockquote>
          </motion.div>
        </div>
      </article>

      {/* Footer */}
      <section className="py-[60px] px-[80px] bg-[#F8F7F4] border-t border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto text-center">
          <Link
            to="/"
            className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px] hover:text-[#1A1A1A] transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
};

export default QBusinessActionConnectorCaseStudy;
