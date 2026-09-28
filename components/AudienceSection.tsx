'use client';

import React from 'react';

interface AudienceSectionProps {
  onOpenModal: () => void;
}

export default function AudienceSection({ onOpenModal }: AudienceSectionProps) {
  const segments = [
    {
      label: 'Job Seekers & Fresh Graduates',
      percent: 83,
      desc: 'Looking to start their corporate career in high-demand roles with 3–6 LPA packages.',
    },
    {
      label: 'Working Professionals & Switchers',
      percent: 71,
      desc: 'Moving from sales, BPO, traditional marketing or operations for faster salary growth.',
    },
    {
      label: 'Business Owners & Startups',
      percent: 87,
      desc: 'Wanting to scale their brand organically and manage paid ad campaigns without agency dependency.',
    },
    {
      label: 'Freelancers & Housewives',
      percent: 63,
      desc: 'Desiring flexible, work-from-home freelance client retainers earning ₹30,000–₹1,50,000+/mo.',
    },
    {
      label: '12th Pass Students & Skill Seekers',
      percent: 81,
      desc: 'Building modern practical digital skills early alongside graduation for a head start.',
    },
  ];

  return (
    <section id="audience" className="py-20 bg-white relative border-b border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & CTA */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#f5edfa] border border-[#ebdcf5] text-[#4b1864] text-xs font-bold uppercase tracking-wider">
              Designed for Everyone
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight leading-tight">
              Who Can Join Our <br />
              <span className="heading-gradient">
                Digital Marketing Course?
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#554266] leading-relaxed">
              At DizitalAdda, our programs are tailor-made for <strong className="text-[#200e30]">Students who have cleared 12th, Pursuing Graduation, Graduates, Job Seekers, Working Professionals, Business Owners, Housewives, and Freelancers.</strong>
            </p>

            <div className="space-y-2 text-xs text-[#38264a]">
              <div className="flex items-center gap-2">
                <span className="text-[#047857] font-bold">✓</span>
                <span>Zero technical or coding background needed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#047857] font-bold">✓</span>
                <span>Weekend &amp; evening batches available for working execs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#047857] font-bold">✓</span>
                <span>Personal mentor support for career roadmaps &amp; doubts</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenModal}
                className="px-7 py-3.5 rounded-xl bg-[#4b1864] hover:bg-[#38104c] text-white font-extrabold text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                Start With Free 1-Hour Demo
              </button>
            </div>
          </div>

          {/* Right Progress Percentage Bars */}
          <div className="lg:col-span-7 space-y-5">
            {segments.map((item, idx) => (
              <div
                key={idx}
                className="da-card rounded-2xl p-5 border border-[#ebdcf5] bg-[#faf7fc] space-y-2.5"
              >
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#200e30]">
                  <span>{item.label}</span>
                  <span className="text-base font-black text-[#4b1864]">
                    {item.percent}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-3 w-full bg-[#ebdcf5] rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#6b2d8a] to-[#4b1864] transition-all duration-1000"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>

                <p className="text-[11px] text-[#665675]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
