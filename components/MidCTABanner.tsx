'use client';

import React from 'react';

interface MidCTABannerProps {
  onOpenModal: () => void;
}

export default function MidCTABanner({ onOpenModal }: MidCTABannerProps) {
  return (
    <section className="py-12 md:py-16 bg-[#faf7fc] border-b border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#ebdcf5] rounded-2xl p-5 sm:p-8 md:p-12 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] mb-3 sm:mb-4 tracking-tight">
            Get the <span className="heading-gradient">Course Syllabus</span>
          </h2>
          <p className="text-xs sm:text-base text-[#5e4b6d] max-w-2xl mx-auto mb-6 sm:mb-8 font-medium leading-relaxed">
            Take the first step towards a <strong className="text-[#4b1864] font-bold">high-paying career in Digital Marketing</strong>. Explore all <strong className="text-[#4b1864] font-bold">70 modules, AI tools, and live projects</strong> covered in the course.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="/dizitaladda-digital-marketing-brochure.pdf"
              download="DizitalAdda-Digital-Marketing-Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 rounded-xl bg-[#4b1864] hover:bg-[#38104c] text-white font-extrabold text-sm sm:text-base shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-flex items-center justify-center text-center"
            >
              Download Syllabus (PDF)
            </a>
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-[#f5edfa] hover:bg-[#ebdcf5] border border-[#ebdcf5] text-[#4b1864] font-extrabold text-sm sm:text-base transition-all cursor-pointer text-center"
            >
              Request Free Demo Class
            </button>
          </div>
          <p className="text-[#4b1864] text-xs sm:text-sm font-bold mt-4">
            Joined by 25,000+ Learners
          </p>
        </div>
      </div>
    </section>
  );
}
