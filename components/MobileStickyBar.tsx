'use client';

import React from 'react';

interface MobileStickyBarProps {
  onOpenModal: () => void;
}

export default function MobileStickyBar({ onOpenModal }: MobileStickyBarProps) {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-[#ebdcf5] p-2.5 px-4 flex items-center justify-between gap-3 shadow-lg">
      <a
        href="tel:+918810606010"
        className="flex-1 py-2.5 rounded-xl bg-[#faf7fc] border border-[#ebdcf5] text-[#4b1864] text-xs font-bold flex items-center justify-center active:scale-95 transition-transform"
      >
        Call
      </a>

      <button
        onClick={onOpenModal}
        className="flex-[2] py-2.5 rounded-xl bg-[#4b1864] text-white text-xs font-extrabold flex items-center justify-center shadow-md active:scale-95 transition-transform cursor-pointer"
      >
        Get Syllabus &amp; Demo
      </button>
    </div>
  );
}
