'use client';

import React from 'react';

interface WhyChooseProps {
  onOpenModal: () => void;
}

export default function WhyChoose({ onOpenModal }: WhyChooseProps) {
  const features = [
    {
      title: 'Hands-on Industry Projects',
      desc: 'Work on real-world case studies including SEO audits, 10 live ad campaigns with actual budgets, and social media growth strategies.',
    },
    {
      title: 'Placement Support',
      desc: (
        <>
          Dedicated career coaches, resume building, mock interviews, and direct access to 250+ hiring partners with highest CTC of <strong className="text-[#4b1864] font-bold">₹10.05 LPA</strong>.
        </>
      ),
    },
    {
      title: 'Dual Certification',
      desc: 'Earn recognized certificates from DizitalAdda & NSDC, plus complete preparation for official Google & Meta certifications.',
    },
    {
      title: 'Pioneering Hybrid Model & 60+ AI Tools',
      desc: 'Attend interactive offline batches at Greater Kailash-II South Delhi campus or join live online from anywhere, mastering ChatGPT-4o, Gemini & Automations.',
    },
  ];

  return (
    <section id="highlights" className="py-14 md:py-20 bg-[#faf7fc] border-b border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Features from the user request */}
          <div className="text-left">
            <span className="text-[#4b1864] font-bold text-xs uppercase tracking-wider mb-2 block">
              Why Choose DizitalAdda
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight mb-4">
              Why Choose <span className="heading-gradient">DizitalAdda Digital Marketing Course?</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5e4b6d] mb-8 font-medium">
              A comprehensive online and classroom digital marketing course designed for high-paying career transitions.
            </p>

            <div className="space-y-5">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-xl bg-[#f3e8fa] border border-[#ebdcf5] flex items-center justify-center shrink-0 font-black text-[#4b1864] text-sm mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#200e30] mb-1">
                      {f.title}
                    </h4>
                    <p className="text-sm text-[#5e4b6d] leading-relaxed">
                      {f.desc}
                    </p>
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
          <div className="relative mt-6 lg:mt-0">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f3e8fa] to-[#ebdcf5] rounded-2xl rotate-2 opacity-60 pointer-events-none" />

            <div className="relative grid grid-cols-2 gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-2xl border border-[#ebdcf5] shadow-xl">
              {[
                { val: '₹10.05 LPA', label: 'Highest CTC Package', color: 'text-[#4b1864]' },
                { val: '97%',        label: 'Placement Rate',       color: 'text-[#4b1864]' },
                { val: '60%',        label: 'Avg. Salary Hike',     color: 'text-[#4b1864]' },
                { val: '70 Modules', label: 'AI-Infused Curriculum', color: 'text-[#4b1864]' },
                { val: '15 Max',     label: 'Micro-Batch Size',     color: 'text-[#4b1864]' },
                { val: '60+ Tools',  label: 'AI Tools Covered',     color: 'text-[#4b1864]' },
              ].map((stat, i) => (
                <div key={i} className="bg-[#faf7fc] rounded-xl p-3 sm:p-4 border border-[#ebdcf5] text-center">
                  <div className={`text-xl sm:text-2xl font-black ${stat.color}`}>{stat.val}</div>
                  <div className="text-[10px] sm:text-[11px] text-[#5e4b6d] font-semibold mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Floating badge (safe position on mobile to prevent overflow) */}
            <div className="absolute -bottom-4 left-2 sm:-left-4 bg-white border border-[#ebdcf5] rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-lg flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#f3e8fa] flex items-center justify-center text-[#4b1864] font-black text-xs sm:text-sm">
                55%
              </div>
              <div>
                <p className="text-[9px] sm:text-[10px] text-[#5e4b6d] font-bold">Avg. Hike</p>
                <p className="text-xs sm:text-sm font-black text-[#4b1864]">55% – 80%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
