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
      name: 'Mr. Saurabh Kumar',
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
      image: 'https://dizitaladda.com/courses/images/trainer/Kaushal.png',
    },
    {
      name: 'Mr. Deepanshu Soni',
      role: 'Analytics & Web Trainer',
      domain: 'Data Analytics & Marketing Web',
      exp: '5+ Years Experience',
      award: 'Full-Stack Data Trainer',
      desc: 'Guides students on SQL, Python for marketers, Looker Studio automated client reporting, and social media data mining.',
      tags: ['SQL', 'Python', 'Looker Studio', 'Social Analytics'],
      image: 'https://dizitaladda.com/courses/images/trainer/deepanshu.jpeg',
    },
    {
      name: 'Mr. Govind Bisht',
      role: 'Search AI Specialist',
      domain: 'AEO, GEO & LLM Optimization',
      exp: '3+ Years Experience',
      award: 'AI Search Innovator',
      desc: 'Pioneering Search AI optimization for Google AI Overviews, Perplexity search citations, and generative engine optimization (GEO).',
      tags: ['Search AI', 'AI Overviews', 'AEO', 'GEO', 'LLMO'],
      image: 'https://dizitaladda.com/courses/images/trainer/Govind.png',
    },
  ];

  return (
    <section id="mentors" className="py-20 bg-white relative overflow-hidden border-t border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#f3e8fa] border border-[#ebdcf5] text-[#4b1864] text-xs font-bold uppercase tracking-wider">
            Learn From Active Agency Practitioners
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#111827] tracking-tight">
            Meet Your Expert <br />
            <span className="heading-gradient">
              Digital Marketing Mentors
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#5e4b6d]">
            At DizitalAdda, you don&apos;t learn from textbook instructors. Your trainers are active agency practitioners who manage live campaigns, real client budgets, and deliver commercial results every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((m, idx) => (
            <div
              key={idx}
              className="bg-[#faf7fc] rounded-2xl p-6 flex flex-col justify-between border border-[#ebdcf5] hover:border-[#4b1864] transition-all duration-300 shadow-sm hover:shadow-md group text-center"
            >
              <div className="space-y-3">
                <div className="relative mx-auto w-24 h-24">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-[#4b1864] shadow-sm bg-white"
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>

                <div>
                  <h3 className="text-base font-black text-[#200e30] tracking-tight">
                    {m.name}
                  </h3>
                  <p className="text-xs font-bold text-[#4b1864] mt-0.5">
                    {m.role}
                  </p>
                  <p className="text-[11px] text-[#5e4b6d] mt-0.5">
                    {m.domain}
                  </p>
                </div>

                <div className="space-y-1 pt-1">
                  <span className="inline-block text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-[#f3e8fa] text-[#4b1864] border border-[#ebdcf5]">
                    {m.exp}
                  </span>
                  <div className="text-[11px] text-[#200e30] font-semibold">
                    {m.award}
                  </div>
                </div>

                <p className="text-xs text-[#5e4b6d] leading-relaxed text-left pt-2 border-t border-[#ebdcf5]">
                  {m.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#ebdcf5]">
                <div className="flex flex-wrap gap-1 justify-center">
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

        <div className="mt-12 text-center">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#4b1864] hover:bg-[#3d1252] text-white font-extrabold text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Book a 1-on-1 Mentorship Session with Dr. Gulshan Kumar
          </button>
        </div>
      </div>
    </section>
  );
}
