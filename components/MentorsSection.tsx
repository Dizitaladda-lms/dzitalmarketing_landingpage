'use client';

import React from 'react';

interface MentorsSectionProps {
  onOpenModal: () => void;
}

export default function MentorsSection({ onOpenModal }: MentorsSectionProps) {
  const mentors = [
    {
      name: 'Dr. Gulshan Kumar',
      role: 'Founder & Head Trainer',
      domain: 'Digital Marketing & Strategy',
      exp: '10+ Years Experience',
      award: 'Indian Icon Award by Dr. Kiran Bedi',
      desc: 'Recipient of the Indian Icon Award & Bharat Business Award by Ashneer Grover. Specializes in brand architecture, strategic marketing funnels, and AI in business growth.',
      tags: ['Marketing Strategy', 'Brand Scaling', 'Data Science', 'AI in Marketing'],
      image: 'https://dizitaladda.com/courses/images/trainer/Gulshan.png',
    },
    {
      name: 'Mr. Ram Kumar',
      role: 'Lead Trainer',
      domain: 'WordPress Web & E-Commerce',
      exp: '12+ Years Experience',
      award: '1,200+ Websites Launched',
      desc: 'Expert in full-stack WordPress architecture, WooCommerce scaling, conversion design, and high-earning affiliate marketing funnels.',
      tags: ['WordPress', 'WooCommerce', 'Affiliate Marketing', 'CRO Design'],
      image: 'https://dizitaladda.com/courses/images/trainer/Ram.png',
    },
    {
      name: 'k Saurabh ',
      role: 'Performance Lead Trainer',
      domain: 'Paid Ads & Media Buying',
      exp: '15+ Years Experience',
      award: '₹10 Crore+ Ad Spend Managed',
      desc: 'Veteran performance marketer managing high-budget ad campaigns on Hotstar, Google, and LinkedIn. Focuses strictly on ROAS and scalable CAC reduction.',
      tags: ['Google Ads', 'Meta Ads', 'Media Buying', 'LinkedIn Ads', 'ROAS Optimization'],
      image: 'https://dizitaladda.com/courses/images/trainer/Saurabh.png',
    },
    {
      name: 'Miss Shagun Srivastava',
      role: 'AI & Data Specialist',
      domain: 'Generative AI & Automation',
      exp: '7+ Years Experience',
      award: 'AI Workflow Architect',
      desc: 'Specializes in training students on prompt engineering, autonomous marketing agents, generative AI tools, and enterprise no-code automations.',
      tags: ['Generative AI', 'AI Automation', 'ChatGPT-4o', 'AI Agents', 'Analytics'],
      image: 'https://dizitaladda.com/courses/images/trainer/shagun.png',
    },
    {
      name: 'Mr. Ravi Kumar',
      role: 'SEO Specialist Trainer',
      domain: 'Technical SEO & GA4',
      exp: '7+ Years Experience',
      award: '10M+ Organic Clicks Driven',
      desc: 'Deep expert in search engine algorithms, technical Core Web Vitals audits, keyword clustering, and event tracking in Google Analytics 4.',
      tags: ['Technical SEO', 'Keyword Research', 'GA4', 'Search Console'],
      image: 'https://dizitaladda.com/courses/images/trainer/Ravi.png',
    },
    {
      name: 'Mr. Kaushal',
      role: 'Local Marketing Trainer',
      domain: 'Local SEO & Google Business Profile',
      exp: '5+ Years Experience',
      award: 'Top-Ranked Local Strategist',
      desc: 'Master of Google Business Profile (GBP) 3-pack rankings, local search ads, automated review funnels, and hyper-targeted lead generation.',
      tags: ['Google Business Profile', 'Local SEO', 'Lead Generation', 'Local Ads'],
      image: '/trainers/kaushal.png',
    },
    {
      name: 'Mr. Deepanshu Soni',
      role: 'Analytics & Web Trainer',
      domain: 'Data Analytics & Marketing Web',
      exp: '5+ Years Experience',
      award: 'Full-Stack Data Trainer',
      desc: 'Guides students on SQL, Python for marketers, Looker Studio automated client reporting, and social media data mining.',
      tags: ['SQL', 'Python', 'Looker Studio', 'Social Analytics'],
      image: '/trainers/deepanshu.png',
    },
    {
      name: 'Mr. Govind Bisht',
      role: 'Search AI Specialist',
      domain: 'AEO, GEO & LLM Optimization',
      exp: '3+ Years Experience',
      award: 'AI Search Innovator',
      desc: 'Pioneering Search AI optimization for Google AI Overviews, Perplexity search citations, and generative engine optimization (GEO).',
      tags: ['Search AI', 'AI Overviews', 'AEO', 'GEO', 'LLMO'],
      image: '/trainers/govind.png',
    },
  ];

  return (
    <section id="mentors" className="py-14 md:py-20 bg-white relative overflow-hidden border-t border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Left-aligned like PW Skills */}
        <div className="mb-8 sm:mb-12 text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight mb-2">
            Learn From <span className="heading-gradient">Top Industry Leaders</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5e4b6d] font-medium">
            Learn directly from experts who have managed multi-crore ad budgets and scaled global brands.
          </p>
        </div>

        {/* Carousel on Mobile & Grid on Desktop matching PW Skills */}
        <div className="flex lg:grid lg:grid-cols-4 overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none hide-scrollbar gap-4 sm:gap-6 pb-6 lg:pb-0 scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0">
          {mentors.map((m, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-[290px] sm:w-[320px] lg:w-auto bg-[#faf7fc] rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-[#ebdcf5] hover:border-[#4b1864] transition-all duration-300 shadow-sm hover:shadow-md group text-left"
            >
              <div>
                {/* Avatar & Name side-by-side like PW Skills */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#4b1864]/20 shrink-0 bg-white shadow-sm">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-black text-[#200e30] tracking-tight truncate">
                      {m.name}
                    </h3>
                    <p className="text-xs font-bold text-[#4b1864] truncate">
                      {m.role}
                    </p>
                    <p className="text-[11px] text-[#5e4b6d] truncate">
                      {m.domain}
                    </p>
                  </div>
                </div>

                {/* 2-Column Experience Box like PW Skills */}
                <div className="border-t border-[#ebdcf5] pt-3 mb-3 grid grid-cols-2 gap-2 text-left">
                  <div>
                    <p className="text-xs font-bold text-[#200e30]">{m.exp}</p>
                    <p className="text-[10px] text-[#5e4b6d]">Experience</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#200e30] truncate">{m.award}</p>
                    <p className="text-[10px] text-[#5e4b6d]">Recognition</p>
                  </div>
                </div>

                <p className="text-xs text-[#5e4b6d] leading-relaxed text-left pt-2 border-t border-[#ebdcf5]">
                  {m.desc}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-[#ebdcf5]">
                <div className="flex flex-wrap gap-1 justify-start">
                  {m.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-semibold text-[#4b1864] px-2 py-0.5 rounded bg-white border border-[#ebdcf5]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center px-2">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-xl bg-[#4b1864] hover:bg-[#3d1252] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer leading-tight text-center"
          >
            Book a 1-on-1 Mentorship Session with Dr. Gulshan Kumar
          </button>
        </div>
      </div>
    </section>
  );
}
