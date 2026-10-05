'use client';

import React from 'react';

interface MobileStickyBarProps {
  onOpenModal: () => void;
}

export default function MobileStickyBar({ onOpenModal }: MobileStickyBarProps) {
  const whatsappMessage = encodeURIComponent(
    'Hi DizitalAdda! I am interested in the Digital Marketing Course. Please share syllabus and fee details.'
  );

  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#ebdcf5] py-2 px-3 flex items-center justify-between gap-2 shadow-[0_-4px_20px_rgba(75,24,100,0.1)]">
      {/* Call Button */}
      <a
        href="tel:+918810606010"
        aria-label="Call Admissions"
        className="flex-1 py-2.5 rounded-xl bg-[#faf7fc] border border-[#ebdcf5] text-[#4b1864] text-xs font-bold flex items-center justify-center active:scale-95 transition-transform"
      >
        Call
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/918810606010?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Us"
        className="flex-1 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold flex items-center justify-center shadow-sm active:scale-95 transition-transform"
      >
        WhatsApp
      </a>

      {/* Apply Now Button */}
      <button
        onClick={onOpenModal}
        className="flex-[1.5] py-2.5 rounded-xl bg-[#4b1864] hover:bg-[#38104c] text-white text-xs font-extrabold flex items-center justify-center shadow-md active:scale-95 transition-transform cursor-pointer"
      >
        Apply Now
      </button>
    </div>
  );
}
