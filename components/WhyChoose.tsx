'use client';

import React from 'react';

interface WhyChooseProps {
  onOpenModal: () => void;
}

export default function WhyChoose({ onOpenModal }: WhyChooseProps) {
  const features = [
    {
      title: 'Hands-On Live Brand Projects',
      desc: 'Work on 10 real client campaigns with actual ad budgets on Google Ads & Meta Ads — not dummy simulations. Build a portfolio that hiring managers actually want.',
    },
    {
      title: '97% Placement Support',
      desc: 'Dedicated placement cell with resume building, mock interviews, and direct access to 250+ hiring partners including Performics, HiveMinds, Dentsu & TATA CLiQ.',
    },
    {
      title: 'Dual Certification + 11 Google Badges',
      desc: 'Earn DizitalAdda certification recognized by industry + prep for all official Google, Meta & HubSpot certifications. Awarded Indian Icon Award by Dr. Kiran Bedi.',
    },
  ];

  return (
    <section id="highlights" className="py-14 md:py-20 bg-[#faf7fc] border-b border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Features */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight mb-4">
              Why Choose <span className="heading-gradient">DizitalAdda?</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5e4b6d] mb-8">
              Delhi's most rigorous AI-integrated digital marketing program — built for high-paying career transitions and real business impact.
            </p>

            <div className="space-y-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#f3e8fa] border border-[#ebdcf5] flex items-center justify-center shrink-0 font-black text-[#4b1864] text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#200e30] mb-1">{f.title}</h4>
                    <p className="text-sm text-[#5e4b6d] leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#4b1864] hover:bg-[#38104c] text-white font-extrabold text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer w-full md:w-auto"
              >
                Download Full Curriculum
              </button>
            </div>
          </div>

          {/* Right: Stats cards visual */}
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f3e8fa] to-[#ebdcf5] rounded-2xl rotate-2 opacity-60" />

            <div className="relative grid grid-cols-2 gap-4 p-6 bg-white rounded-2xl border border-[#ebdcf5] shadow-xl">
              {[
                { val: '₹10.05 LPA', label: 'Highest CTC Package', color: 'text-[#b45309]' },
                { val: '97%',        label: 'Placement Rate',       color: 'text-[#047857]' },
                { val: '60%',        label: 'Avg. Salary Hike',     color: 'text-[#0369a1]' },
                { val: '70 Modules', label: 'AI-Infused Curriculum', color: 'text-[#4b1864]' },
                { val: '15 Max',     label: 'Micro-Batch Size',     color: 'text-[#9d174d]' },
                { val: '60+ Tools',  label: 'AI Tools Covered',     color: 'text-[#6b21a8]' },
              ].map((stat, i) => (
                <div key={i} className="bg-[#faf7fc] rounded-xl p-4 border border-[#ebdcf5] text-center">
                  <div className={`text-2xl font-black ${stat.color}`}>{stat.val}</div>
                  <div className="text-[11px] text-[#5e4b6d] font-semibold mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-[#ebdcf5] rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f3e8fa] flex items-center justify-center text-[#4b1864] font-black text-sm">
                55%
              </div>
              <div>
                <p className="text-[10px] text-[#5e4b6d] font-bold">Avg. Hike</p>
                <p className="text-sm font-black text-[#4b1864]">55% – 80%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
