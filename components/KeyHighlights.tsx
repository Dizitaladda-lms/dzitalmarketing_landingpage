'use client';

import React from 'react';

interface KeyHighlightsProps {
  onOpenModal: () => void;
}

export default function KeyHighlights({ onOpenModal }: KeyHighlightsProps) {
  const highlights = [
    {
      value: '₹10.05 LPA',
      label: 'Highest CTC Package',
      sub: 'Achieved by DizitalAdda Alumni',
      color: 'text-[#b45309]',
      badge: 'Record High',
    },
    {
      value: '250+ Partners',
      label: 'Hiring Ecosystem',
      sub: 'Performics, HiveMinds, Dentsu & TATA CLiQ',
      color: 'text-[#0369a1]',
      badge: 'Active Hiring',
    },
    {
      value: '60% Avg Hike',
      label: 'Career Transition',
      sub: 'For Working Professionals Switching Careers',
      color: 'text-[#047857]',
      badge: 'Verified Outcome',
    },
    {
      value: '97% Placed',
      label: '100% Placement Support',
      sub: 'Continuous drives until final placement',
      color: 'text-[#4b1864]',
      badge: 'Dedicated Team',
    },
    {
      value: '70 Modules',
      label: '2026 AI-Infused Curriculum',
      sub: 'SEO, SEM, Meta Ads, GA4 & Automation',
      color: 'text-[#9d174d]',
      badge: 'Industry Standard',
    },
    {
      value: 'Max 15 Students',
      label: 'Micro-Batch Size',
      sub: 'Guaranteed 1-on-1 mentor guidance',
      color: 'text-[#6b21a8]',
      badge: 'Personal Focus',
    },
  ];

  return (
    <section id="highlights" className="py-16 bg-[#faf7fc] relative border-b border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#f5edfa] border border-[#ebdcf5] text-[#4b1864] text-xs font-bold uppercase tracking-wider">
            Measurable Career Outcomes
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight">
            Numbers That Define <br />
            <span className="heading-gradient">
              DizitalAdda Excellence
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#554266]">
            Delhi&apos;s leading digital marketing institute with proven metrics, verified student salaries, and high-impact industry credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="da-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a4e6]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold text-[#665675] uppercase tracking-wider">
                  Metric #{idx + 1}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#f5edfa] text-[#4b1864] border border-[#ebdcf5]">
                  {item.badge}
                </span>
              </div>

              <div className={`text-3xl sm:text-4xl font-black ${item.color} tracking-tight`}>
                {item.value}
              </div>
              <h3 className="text-base font-bold text-[#200e30] mt-1.5">
                {item.label}
              </h3>
              <p className="text-xs text-[#665675] mt-1 leading-relaxed">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Quick CTA strip */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-[#ebdcf5] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-[#200e30]">
              Want to see actual placement proof &amp; company offer letters?
            </h4>
            <p className="text-xs text-[#554266]">
              Download our Placement Verification Report with alumni salary slips &amp; roles.
            </p>
          </div>
          <button
            onClick={onOpenModal}
            className="shrink-0 px-6 py-3 rounded-xl bg-[#4b1864] hover:bg-[#38104c] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all hover:scale-105 cursor-pointer"
          >
            Download Placement Report (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
