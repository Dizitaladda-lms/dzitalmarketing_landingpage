'use client';

import React from 'react';

interface ProjectsSectionProps {
  onOpenModal: () => void;
}

export default function ProjectsSection({ onOpenModal }: ProjectsSectionProps) {
  const projects = [
    {
      id: '01',
      title: 'Full-Funnel Integrated Growth Strategy',
      desc: (
        <>
          Build a complete integrated growth plan covering <strong className="text-[#4b1864]">paid acquisition</strong>, <strong className="text-[#4b1864]">organic marketing</strong>, and <strong className="text-[#4b1864]">retention systems</strong>.
        </>
      ),
      tools: ['Funnel Architecture', 'Meta Ads', 'Retention CRM', 'Growth Loops'],
    },
    {
      id: '02',
      title: 'AI-Powered Content Engine & Social Media Execution Calendar',
      desc: (
        <>
          Create a 30-day AI content engine with <strong className="text-[#4b1864]">structured prompts</strong>, content matrices, and <strong className="text-[#4b1864]">platform audience mapping</strong>.
        </>
      ),
      tools: ['ChatGPT-4o', 'Canva AI', 'Content Matrix', 'Audience Mapping'],
    },
    {
      id: '03',
      title: 'Google Ads Campaign Architecture & Media Planning',
      desc: (
        <>
          Design a complete Google Search campaign structure including <strong className="text-[#4b1864]">keyword mapping</strong>, <strong className="text-[#4b1864]">media budgeting</strong>, and <strong className="text-[#4b1864]">RSA ads</strong>.
        </>
      ),
      tools: ['Google Search Ads', 'Keyword Planner', 'Media Budgeting', 'RSA Ads'],
    },
    {
      id: '04',
      title: 'Conversion Tracking & Performance Optimization Blueprint',
      desc: (
        <>
          Implement pixel tracking and <strong className="text-[#4b1864]">GA4 event setup</strong> to measure campaign CPA, <strong className="text-[#4b1864]">ROAS scaling</strong>, and funnel conversions.
        </>
      ),
      tools: ['GA4', 'Tag Manager (GTM)', 'Conversion API', 'ROAS Scaling'],
    },
    {
      id: '05',
      title: 'Marketing Performance Dashboard & Analytics Report',
      desc: (
        <>
          Create a live marketing dashboard visualizing <strong className="text-[#4b1864]">CAC, ROAS</strong>, retention metrics, and <strong className="text-[#4b1864]">campaign KPIs</strong>.
        </>
      ),
      tools: ['Looker Studio', 'CAC Tracking', 'KPI Dashboards', 'Client Reporting'],
    },
  ];

  return (
    <section id="projects" className="py-14 md:py-20 bg-[#faf7fc] relative border-b border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight">
            Build Projects from <span className="heading-gradient">Scratch</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5e4b6d] font-medium">
            Gain real-world experience by building these comprehensive industry projects that hiring managers love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 sm:p-7 flex flex-col justify-between border border-[#ebdcf5] hover:border-[#4b1864] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 group text-left"
            >
              <div>
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#f3e8fa] border border-[#ebdcf5] flex items-center justify-center text-[#4b1864] font-black text-sm sm:text-base mb-4 sm:mb-5 group-hover:bg-[#4b1864] group-hover:text-white transition-colors">
                  {proj.id}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#111827] mb-2 sm:mb-3 leading-snug">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5e4b6d] leading-relaxed mb-5 sm:mb-6 font-normal">
                  {proj.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#ebdcf5] flex flex-wrap gap-1.5">
                {proj.tools.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-[#faf7fc] text-[10px] sm:text-[11px] font-semibold text-[#4b1864] border border-[#ebdcf5]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* 6th Card: Join Next Batch CTA Card (No Icons) */}
          <div className="bg-gradient-to-br from-[#4b1864] to-[#300c40] rounded-2xl p-6 sm:p-8 flex flex-col justify-center items-center text-center shadow-xl text-white relative overflow-hidden">
            <span className="px-3.5 py-1 rounded-full bg-white/20 text-white font-extrabold text-[11px] uppercase tracking-wider mb-4">
              Live Portfolio
            </span>
            <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3">
              Ready to build your portfolio?
            </h3>
            <p className="text-xs sm:text-sm text-purple-200 mb-5 sm:mb-6 max-w-xs leading-relaxed">
              Work on live campaigns and build portfolio assets that recruiters directly ask for in interviews.
            </p>
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-[#4b1864] font-extrabold text-sm shadow-md transition-all hover:bg-[#faf7fc] hover:scale-105 active:scale-95 cursor-pointer"
            >
              Join Next Batch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
