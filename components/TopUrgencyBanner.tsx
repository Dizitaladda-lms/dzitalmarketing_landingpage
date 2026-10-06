'use client';

import React from 'react';

interface TopUrgencyBannerProps {
  onOpenModal: () => void;
}

export default function TopUrgencyBanner({ onOpenModal }: TopUrgencyBannerProps) {
  const keywords = [
    'digital marketing courses Offilne',
    'Offline digital marketing course',
    'best digital marketing course in india',
    'digital marketing online course',
    'digital marketing course Offilne',
    'digital marketing course',
    'dizitaladda digital marketing course',
  ];

  return (
    <div className="bg-[#4b1864] text-white py-2 overflow-hidden border-b border-[#6b2d8a] relative z-50">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        <div className="flex shrink-0 items-center gap-4 px-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/90">
          {keywords.map((k, i) => (
            <React.Fragment key={i}>
              <span>{k}</span>
              <span className="text-[#e9d5ff]">|</span>
            </React.Fragment>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-4 px-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/90" aria-hidden="true">
          {keywords.map((k, i) => (
            <React.Fragment key={i}>
              <span>{k}</span>
              <span className="text-[#e9d5ff]">|</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
