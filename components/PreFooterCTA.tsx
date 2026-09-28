'use client';

import React from 'react';

interface PreFooterCTAProps {
  onOpenModal: () => void;
}

export default function PreFooterCTA({ onOpenModal }: PreFooterCTAProps) {
  return (
    <section className="py-20 bg-[#faf7fc] border-t border-[#ebdcf5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#f3e8fa] border border-[#ebdcf5] text-[#4b1864] text-xs font-bold uppercase tracking-wider">
          Admissions Closing for Upcoming Batch
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight leading-tight">
          Ready to Accelerate Your Career with <br />
          <span className="heading-gradient">
            Delhi&apos;s #1 Digital Marketing Institute?
          </span>
        </h2>

        <p className="text-sm sm:text-base text-[#5e4b6d] max-w-2xl mx-auto leading-relaxed">
          Join 25,000+ successful alumni who transformed their career trajectories. Attend offline interactive sessions at our Greater Kailash II South Delhi campus or join live online from anywhere.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#4b1864] hover:bg-[#3d1252] text-white font-extrabold text-sm sm:text-base shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Apply Now &amp; Book Free Counselling
          </button>

          <a
            href="tel:+918810606010"
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white hover:bg-[#f8f3fa] border border-[#ebdcf5] text-[#4b1864] font-bold text-sm sm:text-base transition-colors"
          >
            Call: +91 8810606010
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#5e4b6d] pt-4">
          <span>100% Placement Support</span>
          <span>•</span>
          <span>Flexible Weekend &amp; Evening Batches</span>
          <span>•</span>
          <span>South Delhi GK-II Campus + Online</span>
        </div>
      </div>
    </section>
  );
}
