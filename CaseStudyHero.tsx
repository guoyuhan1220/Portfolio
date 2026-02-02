import React from 'react';

// Illustration assets (valid for 7 days from Figma)
const illustrationAssets = {
  vector3574: "https://www.figma.com/api/mcp/asset/0daec69e-611c-45f0-a3e7-ef2bd3cc5e4c",
  group1321319333: "https://www.figma.com/api/mcp/asset/9598919f-71e6-4f84-bc06-22e4df70110d",
  vector3575: "https://www.figma.com/api/mcp/asset/c66f54e6-42eb-48ea-b1f8-29e7b6dab993",
  vector3576: "https://www.figma.com/api/mcp/asset/eefcdd2b-316a-4820-a292-9e4cff39ed6f",
  group9: "https://www.figma.com/api/mcp/asset/cb6d19fd-7ad3-4cb7-bdc3-eec8eedd7145",
  group1321319339: "https://www.figma.com/api/mcp/asset/49a05315-4253-4535-b9ff-dd760f5041d2",
  ellipse1: "https://www.figma.com/api/mcp/asset/acd10bb1-252a-4835-b3cd-61056e8e820f",
  group1321319334: "https://www.figma.com/api/mcp/asset/2da3355d-d689-4c7a-a752-8c9390409f40",
  group1321319335: "https://www.figma.com/api/mcp/asset/f33bc925-56ea-4772-b94f-df87a66599d8",
};

interface CaseStudyHeroProps {
  caption?: string;
  title?: string;
  timeframe?: string;
  role?: string;
}

export default function CaseStudyHero({
  caption = "Case study 2",
  title = "Envisioning unified GenAI application evaluation",
  timeframe = "2024 Q1 - 2024 Q2",
  role = "Lead designer to drive AWS GenAI application evaluation initiative"
}: CaseStudyHeroProps) {
  return (
    <section className="relative w-full h-[1080px] bg-[#fcf7e9] overflow-hidden">
      {/* Caption */}
      <p className="absolute top-20 left-[100px] w-[720px] 
                    font-['Source_Sans_Pro'] font-semibold text-[28px] 
                    text-[#16161d] opacity-50 uppercase tracking-wide">
        {caption}
      </p>

      {/* Main Title */}
      <div className="absolute left-[100px] top-1/2 -translate-y-[186px] w-[873px]">
        <h1 className="font-['Source_Serif_Pro'] text-[100px] leading-[1.2] text-black">
          {title}
        </h1>
      </div>

      {/* Metadata Section */}
      <div className="absolute left-[100px] top-[628px] flex gap-[421px]">
        {/* Time */}
        <div className="w-[362px] font-['Source_Serif_Pro']">
          <p className="text-[36px] text-[#636367] tracking-tight mb-6">
            Time
          </p>
          <p className="text-[32px] text-[#16161d] tracking-tight">
            {timeframe}
          </p>
        </div>

        {/* Role */}
        <div className="w-[411px] font-['Source_Serif_Pro']">
          <p className="text-[36px] text-[#636367] tracking-tight mb-6">
            My role
          </p>
          <p className="text-[36px] text-[#16161d] tracking-tight leading-[1.6]">
            {role}
          </p>
        </div>
      </div>

      {/* Illustration - Right Side */}
      <Illustration />
    </section>
  );
}

// Separate illustration component for better organization
function Illustration() {
  return (
    <div className="absolute left-[973px] top-[18px] w-[1147px] h-[982px]">
      {/* Frame placeholder */}
      <div className="absolute left-[449px] top-0 w-[123.667px] h-[123.667px]" />
      
      {/* Large curved shape */}
      <img 
        src={illustrationAssets.vector3574} 
        alt=""
        className="absolute left-[83px] top-[540px] w-[976px] h-[368px]"
      />

      {/* Main card elements */}
      <div className="absolute left-[255px] top-[472px] w-[167px] h-[113px] 
                      bg-[#fcf7e9] border border-black rounded">
        <img 
          src={illustrationAssets.group1321319333} 
          alt=""
          className="absolute left-[1px] top-[1px] w-[165px] h-[89px]"
        />
      </div>
      <div className="absolute left-[255px] top-[557px] w-[167px] h-[28px] 
                      bg-[#16161d] border border-black" />

      {/* Secondary cards */}
      <div className="absolute left-[701px] top-[234px] w-[167px] h-[122px] 
                      bg-[#fefbf4] border border-black">
        <div className="absolute top-0 left-0 w-full h-[24px] bg-[#e77625] border-b border-black" />
      </div>

      {/* Connecting lines */}
      <img 
        src={illustrationAssets.vector3575} 
        alt=""
        className="absolute left-[339px] top-[354px] w-[452px] h-[118px]"
      />
      
      <img 
        src={illustrationAssets.vector3576} 
        alt=""
        className="absolute left-[791px] top-[354px] w-[142px] h-[143.5px] transform scale-y-[-1] rotate-180"
      />

      {/* Small card with orange accent */}
      <div className="absolute left-[558px] top-[512px] w-[167px] h-[45px] 
                      bg-[#fefbf4] border border-black">
        <div className="absolute left-0 top-0 w-[46px] h-full bg-[#e77625] border-r border-black" />
      </div>

      {/* Gray card */}
      <div className="absolute left-[980px] top-[665px] w-[167px] h-[122px] 
                      bg-[#d9d9d9] border border-black" />

      {/* Orange button */}
      <div className="absolute left-0 top-[745px] w-[166px] h-[51px] 
                      bg-[#e77625] border border-black" />

      {/* Small icons */}
      <img 
        src={illustrationAssets.group9} 
        alt=""
        className="absolute left-[813px] top-[805px] w-[16.674px] h-[16.674px]"
      />
      <img 
        src={illustrationAssets.group9} 
        alt=""
        className="absolute left-[299px] top-[439px] w-[16.674px] h-[16.674px]"
      />
      <img 
        src={illustrationAssets.group1321319339} 
        alt=""
        className="absolute left-[440px] top-[558px] w-[23.58px] h-[23.58px] -rotate-45"
      />

      {/* Dots */}
      <img 
        src={illustrationAssets.ellipse1} 
        alt=""
        className="absolute left-[178px] top-[804px] w-[18px] h-[18px]"
      />
      <img 
        src={illustrationAssets.ellipse1} 
        alt=""
        className="absolute left-[633px] top-[295px] w-[18px] h-[18px]"
      />

      {/* Bottom cards with data visualizations */}
      <div className="absolute left-[274px] top-[860px] w-[167px] h-[122px]">
        <div className="bg-[#fefbf4] border border-black w-full h-full rounded">
          <img 
            src={illustrationAssets.group1321319334} 
            alt=""
            className="absolute left-[1px] top-[32px] w-[165px] h-[90px]"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-[33px] bg-[#16161d] border border-black" />
      </div>

      <div className="absolute left-[720px] top-[860px] w-[130px] h-[94.97px]">
        <div className="bg-[#fefbf4] border border-black w-full h-full rounded">
          <img 
            src={illustrationAssets.group1321319335} 
            alt=""
            className="absolute left-[0.78px] top-[24.91px] w-[128.443px] h-[70.06px]"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-[25.689px] bg-[#e77625] border border-black" />
      </div>

      <div className="absolute left-[850px] top-[496px] w-[130px] h-[94.97px]">
        <div className="bg-[#fefbf4] border border-black w-full h-full rounded">
          <img 
            src={illustrationAssets.group1321319335} 
            alt=""
            className="absolute left-[0.78px] top-[24.91px] w-[128.443px] h-[70.06px]"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-[25.689px] bg-[#16161d] border border-black" />
      </div>
    </div>
  );
}
