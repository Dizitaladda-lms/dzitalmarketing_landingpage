'use client';

import React from 'react';

interface MidCTABannerProps {
  onOpenModal: () => void;
}

export default function MidCTABanner({ onOpenModal }: MidCTABannerProps) {
  return (
    <section className="py-12 md:py-16 bg-[#faf7fc] border-b border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#ebdcf5] rounded-2xl p-8 md:p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] mb-4 tracking-tight">
            Get the <span className="heading-gradient">Full Course Syllabus</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5e4b6d] max-w-2xl mx-auto mb-8">
            Take the first step towards a high-paying career in Digital Marketing. Explore every module, tool, and live project covered in our 70-module curriculum.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#4b1864] hover:bg-[#38104c] text-white font-extrabold text-base shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Download Syllabus PDF
            </button>
            <p className="text-[#4b1864] text-sm font-bold">
              Join 25,000+ Learners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
