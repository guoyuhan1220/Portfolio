import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GitBranch, HelpCircle, TrendingDown, ArrowUpRight, Play } from 'lucide-react';

const QuickSuiteCaseStudy: React.FC = () => {
  const accent = '#8B5CF6'; // Purple
  const accentSoft = '#F3E8FF';
  const accentBorder = '#DDD6FE';
  const [showVideo, setShowVideo] = useState(false);

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
      <Link
        to="/#work"
        className="fixed bottom-6 right-6 z-50 rounded-full border border-[#E5E5E5] bg-white/90 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[#1A1A1A] shadow-[0_8px_24px_rgba(15,23,42,0.12)] backdrop-blur-sm hover:border-[#1A1A1A] transition-colors"
      >
        ← Back to Works
      </Link>
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-[#F8F7F4]/80 backdrop-blur-sm border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-[80px] py-4 flex items-center justify-between">
          <Link
            to="/#work"
            className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px] hover:text-[#1A1A1A] transition-colors"
          >
            ← Back to Works
          </Link>
          <span className="text-[11px] font-mono text-[#666666] uppercase tracking-[1.5px]">
            Case Study // Quick Suite
          </span>
        </div>
      </div>

      {/* Hero Section - Big Visual */}
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
              Amazon Quick Suite
            </h1>
            <p className="text-[24px] font-sans font-normal text-white/80 leading-[1.5] max-w-[800px]">
              From complicated to coherent. Transforming five overlapping AI tools into one seamless, conversation-first experience.
            </p>
            <div className="flex gap-6 pt-8">
              <div className="text-sm">
                <div className="text-white/60 text-[11px] font-mono uppercase tracking-[1.5px] mb-2">Role</div>
                <div className="text-white">Lead Principal Designer</div>
              </div>
              <div className="text-sm">
                <div className="text-white/60 text-[11px] font-mono uppercase tracking-[1.5px] mb-2">Timeline</div>
                <div className="text-white">2024.09 – Present</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Hero Visual - YouTube Video with Thumbnail */}
        <div className="max-w-[1440px] mx-auto mt-16">
          <div className="w-full h-[600px] rounded-[24px] overflow-hidden bg-white/5 relative">
            {!showVideo ? (
              <div 
                className="w-full h-full cursor-pointer relative group"
                onClick={() => setShowVideo(true)}
              >
                {/* Thumbnail Image */}
                <img
                  src="/quick suite project/thumbnail.png"
                  alt="Quick Suite Home Redesign Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all border border-[#E5E5E5]">
                    <Play className="w-7 h-7 text-[#1A1A1A] ml-0.5" strokeWidth={2} fill="currentColor" />
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/duccb_K1seQ?autoplay=1"
                title="Quick Suite home redesign - unified interface"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-[100px] px-[80px] bg-[#F5F4F1]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[800px] mx-auto text-center space-y-6 mb-16">
            <div className="text-[11px] font-mono uppercase tracking-[1.5px]" style={{ color: accent }}>
              The Challenge
            </div>
            <h2 className="text-[48px] font-serif font-medium text-[#1A1A1A] leading-[1.2]" style={{ fontFamily: 'Newsreader, serif' }}>
              "It's too complicated. I can't figure out where to start."
            </h2>
            <p className="text-[20px] font-sans text-[#666666] leading-[1.6]">
              Amazon Quick Suite had five AI tools with overlapping features. Users had to learn five different tools and figure out which one to use before they could accomplish anything. The complexity was driving people away.
            </p>
          </div>

          {/* Problem Visual */}
          <div className="w-full min-h-[400px] md:h-[500px] rounded-[24px] overflow-hidden mb-16 relative flex items-center justify-center">
            <img
              src="/quick suite project/issue.png"
              alt="Five fragmented tools showing user confusion and complexity"
              className="w-full h-full object-contain"
              key={`issue-${Date.now()}`}
            />
          </div>
        </div>
      </section>

      {/* The Solution - Big Visual */}
      <section className="py-[100px] px-[80px] bg-[#F8F7F4]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[800px] mx-auto text-center space-y-6 mb-16">
            <div className="text-[11px] font-mono uppercase tracking-[1.5px]" style={{ color: accent }}>
              The Solution
            </div>
            <h2 className="text-[48px] font-serif font-medium text-[#1A1A1A] leading-[1.2]" style={{ fontFamily: 'Newsreader, serif' }}>
              From features to flows
            </h2>
            <p className="text-[20px] font-sans text-[#666666] leading-[1.6]">
              I transformed Quick Suite from a collection of features into one seamless, conversation-first experience that keeps users engaged.
            </p>
          </div>

          {/* Solution Visual */}
          <div className="w-full mb-20">
            <div className="w-full">
              <div className="flex items-center justify-center overflow-hidden">
                <img
                  src="/quick suite project/redesign.png"
                  alt="Unified interface redesign"
                  className="w-full max-w-[90%] h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Five Key Solutions */}
          <div className="space-y-12 max-w-[1000px] mx-auto">
            {[
              {
                number: '01',
                title: 'First Time CX',
                description: 'Redesigned the first-time experience to quickly capture user goal and role, recommending highly relevant job-to-be-done tasks to let users quickly run a research, create an artifact, or run a workflow to get value in the first 5 minutes.',
                videoUrl: '/FTUX short.mp4',
              },
              {
                number: '02',
                title: 'Chat-led homepage',
                description: 'Redesigned the entry point around conversation. Instead of confronting users with feature options, we now ask: "What do you want to accomplish?" The interface adapts based on their answer.',
              },
              {
                number: '03',
                title: 'Smart suggestions based on intent',
                description: 'Working with data science, I designed a system that understands what users are trying to do and surfaces the right capabilities. Users express intent; Quick Suite figures out whether they need analytics, automation, research, or something else.',
              },
              {
                number: '04',
                title: 'Simplified connector setup',
                description: 'The biggest friction was connecting enterprise apps—authentication, API keys, complex configuration. I worked with the design team to redesign the connector experience to prioritize most frequently used connectors, enable enterprise setup with admin configuration, support managed OAuth for most third-party tools, improve action connector discovery, and allow users to take action directly inside the flow.',
              },
              {
                number: '05',
                title: 'Artifact lifecycle',
                description: 'Chat insights used to disappear when conversations ended. I designed an artifact system that transforms ephemeral conversations into persistent, useful assets—dashboards, reports, workflows. This keeps users engaged and coming back.',
                link: '/case-study/artifact-lifecycle',
              },
              {
                number: '06',
                title: '"Build with AI" pattern system',
                description: 'I led the initiative to unify AI interaction patterns across Quick Suite. Established over 30 patterns that drive consistency across 20+ projects and guide 30+ designers.',
              },
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-8 items-start"
              >
                <div className="text-[48px] font-serif font-medium text-[#1A1A1A]/20" style={{ fontFamily: 'Newsreader, serif' }}>
                  {solution.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-[24px] font-serif font-medium text-[#1A1A1A] mb-3" style={{ fontFamily: 'Newsreader, serif' }}>
                    {solution.title}
                  </h3>
                  <p className="text-[16px] font-sans text-[#666666] leading-[1.6]">
                    {solution.description}
                    {solution.link && (
                      <>
                        {' '}
                        <Link
                          to={solution.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#6D28D9] hover:text-[#5B21B6] underline font-medium transition-colors inline-flex items-center gap-1"
                        >
                          View detailed case study
                          <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                        </Link>
                      </>
                    )}
                  </p>
                  {solution.videoUrl && (
                    <div className="mt-6">
                      <video
                        src={solution.videoUrl}
                        className="w-full h-auto rounded-lg"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>
                  )}
                  {solution.number === '02' && (
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <img
                        src="/quick suite project/Home page Chat tab.png"
                        alt="Home page Chat tab"
                        className="w-full h-auto object-contain rounded-lg bg-transparent"
                      />
                      <img
                        src="/quick suite project/Home page For you tab.jpg"
                        alt="Home page For you tab"
                        className="w-full h-auto object-contain rounded-lg bg-transparent"
                      />
                    </div>
                  )}
                  {solution.number === '03' && (
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="h-[400px] flex items-center justify-center bg-transparent rounded-lg overflow-hidden">
                        <img
                          src={`/quick suite project/Research%20in%20chat%20Prototyp%201/research%20recommendation.png?t=${Date.now()}`}
                          alt="Research recommendation"
                          className="w-full h-full object-contain rounded-lg"
                          key={`research-recommendation-${Date.now()}`}
                        />
                      </div>
                      <div className="h-[400px] flex items-center justify-center bg-transparent rounded-lg overflow-hidden">
                        <img
                          src={`/quick suite project/smart suggestion.gif?t=${Date.now()}`}
                          alt="Smart suggestion"
                          className="w-full h-full object-contain rounded-lg"
                          key={`smart-suggestion-${Date.now()}`}
                        />
                      </div>
                    </div>
                  )}
                  {solution.number === '04' && (
                    <div className="mt-6 grid grid-cols-5 gap-4">
                      <div className="col-span-2 w-full h-[300px] rounded-lg overflow-hidden flex items-center justify-center bg-transparent">
                        <img
                          src="/quick suite project/action awareness.png"
                          alt="Action connector resource picker"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="col-span-3 w-full h-[300px] rounded-lg overflow-hidden flex items-center justify-center bg-transparent">
                        <img
                          src="/quick suite project/action.png"
                          alt="Action form"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  )}
                  {solution.number === '05' && (
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <div className="text-[10px] font-mono uppercase tracking-[1.5px] text-[#666666] mb-2">Artifact hub</div>
                        <img
                          src="/Artifact/Artifact%20hub/Featured.jpg"
                          alt="Artifact hub"
                          className="w-full h-auto object-contain rounded-lg bg-transparent"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="text-[10px] font-mono uppercase tracking-[1.5px] text-[#666666] mb-2">Inline edit</div>
                        <img
                          src="/Artifact/inline%20edit/Inline-edi.gif"
                          alt="Inline edit"
                          className="w-full h-auto object-contain rounded-lg bg-transparent"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="text-[10px] font-mono uppercase tracking-[1.5px] text-[#666666] mb-2">Preview with style</div>
                        <img
                          src="/Artifact/Export%20style.png"
                          alt="Preview with style"
                          className="w-full h-auto object-contain rounded-lg bg-transparent"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="text-[10px] font-mono uppercase tracking-[1.5px] text-[#666666] mb-2">Auto suggestion</div>
                        <img
                          src="/Artifact/smart suggestion 2.jpg"
                          alt="Auto suggestion"
                          className="w-full h-auto object-contain rounded-lg bg-transparent"
                        />
                      </div>
                    </div>
                  )}
                  {solution.number === '06' && (
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#E5E5E5] hover:shadow-md transition-shadow">
                        <div className="h-[200px] bg-gradient-to-br from-[#F3E8FF] via-[#F8F8F8] to-[#E0E7FF] flex items-center justify-center p-4">
                          <img
                            src="/quick suite project/Build with ai/ai canvas.png"
                            alt="AI Canvas"
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div className="p-5">
                          <h4 className="text-[18px] font-semibold text-[#1A1A1A] mb-2">AI Canvas</h4>
                          <p className="text-[14px] text-[#666666] leading-relaxed">Visual workspace for AI-powered content creation and editing</p>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#E5E5E5] hover:shadow-md transition-shadow">
                        <div className="h-[200px] bg-gradient-to-br from-[#F3E8FF] via-[#F8F8F8] to-[#E0E7FF] flex items-center justify-center p-4">
                          <img
                            src="/quick suite project/Build with ai/ai summary.png"
                            alt="AI Summary"
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div className="p-5">
                          <h4 className="text-[18px] font-semibold text-[#1A1A1A] mb-2">AI Summary</h4>
                          <p className="text-[14px] text-[#666666] leading-relaxed">Intelligent summarization of complex information and documents</p>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#E5E5E5] hover:shadow-md transition-shadow">
                        <div className="h-[200px] bg-gradient-to-br from-[#F3E8FF] via-[#F8F8F8] to-[#E0E7FF] flex items-center justify-center p-4">
                          <img
                            src="/quick suite project/Build with ai/asset picker.png"
                            alt="Asset Picker"
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div className="p-5">
                          <h4 className="text-[18px] font-semibold text-[#1A1A1A] mb-2">Asset Picker</h4>
                          <p className="text-[14px] text-[#666666] leading-relaxed">Contextual selection interface for resources and media</p>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#E5E5E5] hover:shadow-md transition-shadow">
                        <div className="h-[200px] bg-gradient-to-br from-[#F3E8FF] via-[#F8F8F8] to-[#E0E7FF] flex items-center justify-center p-4">
                          <img
                            src="/quick suite project/Build with ai/exploration card.png"
                            alt="Exploration Card"
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div className="p-5">
                          <h4 className="text-[18px] font-semibold text-[#1A1A1A] mb-2">Exploration Card</h4>
                          <p className="text-[14px] text-[#666666] leading-relaxed">Interactive discovery of AI capabilities and suggestions</p>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#E5E5E5] hover:shadow-md transition-shadow">
                        <div className="h-[200px] bg-gradient-to-br from-[#F3E8FF] via-[#F8F8F8] to-[#E0E7FF] flex items-center justify-center p-4">
                          <img
                            src="/quick suite project/Build with ai/inline edit.png"
                            alt="Inline Edit"
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div className="p-5">
                          <h4 className="text-[18px] font-semibold text-[#1A1A1A] mb-2">Inline Edit</h4>
                          <p className="text-[14px] text-[#666666] leading-relaxed">Seamless editing within existing content context</p>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#E5E5E5] hover:shadow-md transition-shadow">
                        <div className="h-[200px] bg-gradient-to-br from-[#F3E8FF] via-[#F8F8F8] to-[#E0E7FF] flex items-center justify-center p-4">
                          <img
                            src="/quick suite project/Build with ai/magic builder.png"
                            alt="Magic Builder"
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div className="p-5">
                          <h4 className="text-[18px] font-semibold text-[#1A1A1A] mb-2">Magic Builder</h4>
                          <p className="text-[14px] text-[#666666] leading-relaxed">Guided construction of AI-generated content and workflows</p>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#E5E5E5] hover:shadow-md transition-shadow">
                        <div className="h-[200px] bg-gradient-to-br from-[#F3E8FF] via-[#F8F8F8] to-[#E0E7FF] flex items-center justify-center p-4">
                          <img
                            src={`/quick suite project/Build with ai/Prompt pill.png?t=${Date.now()}`}
                            alt="Prompt Pill"
                            className="max-w-full max-h-full object-contain"
                            key={`prompt-pill-${Date.now()}`}
                          />
                        </div>
                        <div className="p-5">
                          <h4 className="text-[18px] font-semibold text-[#1A1A1A] mb-2">Prompt Pill</h4>
                          <p className="text-[14px] text-[#666666] leading-relaxed">Compact prompt input with intelligent suggestions</p>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#E5E5E5] hover:shadow-md transition-shadow">
                        <div className="h-[200px] bg-gradient-to-br from-[#F3E8FF] via-[#F8F8F8] to-[#E0E7FF] flex items-center justify-center p-4">
                          <img
                            src="/quick suite project/Build with ai/toast.png"
                            alt="Toast"
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div className="p-5">
                          <h4 className="text-[18px] font-semibold text-[#1A1A1A] mb-2">Toast</h4>
                          <p className="text-[14px] text-[#666666] leading-relaxed">Non-intrusive notifications for AI actions and status</p>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#E5E5E5] hover:shadow-md transition-shadow">
                        <div className="h-[200px] bg-gradient-to-br from-[#F3E8FF] via-[#F8F8F8] to-[#E0E7FF] flex items-center justify-center p-4">
                          <img
                            src="/quick suite project/Build with ai/toolbar.png"
                            alt="Toolbar"
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div className="p-5">
                          <h4 className="text-[18px] font-semibold text-[#1A1A1A] mb-2">Toolbar</h4>
                          <p className="text-[14px] text-[#666666] leading-relaxed">Quick access to AI tools and contextual features</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Impact - Big Visual */}
      <section className="py-[100px] px-[80px] bg-[#F8F7F4]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-[800px] mx-auto text-center space-y-6 mb-16">
            <div className="text-[11px] font-mono uppercase tracking-[1.5px]" style={{ color: accent }}>
              The Impact
            </div>
            <h2 className="text-[48px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-4" style={{ fontFamily: 'Newsreader, serif' }}>
              639k users, 92.5% returning weekly
            </h2>
            <p className="text-[20px] font-sans text-[#666666] leading-[1.6] mb-8">
              Since launch, Quick Suite has grown +1151% with users averaging 3 days per week active and 92.8% chat adoption. Users stop asking "which tool should I use?" and start focusing on what they're trying to accomplish. The experience is simple to start but sticky—artifact creation and smart recommendations bring users back.
            </p>
          </div>

          <div className="max-w-[1000px] mx-auto">
            <div className="bg-[#F5F4F1] rounded-[24px] p-12 border border-[#E5E5E5]">
              <p className="text-[20px] font-serif italic text-[#1A1A1A] leading-[1.6] text-center" style={{ fontFamily: 'Newsreader, serif' }}>
                "I unified the conversational AI experience, established the design system that drives consistency across all our AI products, and transformed complexity into coherence. Quick Suite now feels like one intelligent assistant, not five competing tools."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuickSuiteCaseStudy;
