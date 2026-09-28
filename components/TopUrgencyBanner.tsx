'use client';

import React, { useState, useEffect } from 'react';

interface TopUrgencyBannerProps {
  onOpenModal: () => void;
}

export default function TopUrgencyBanner({ onOpenModal }: TopUrgencyBannerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 32,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="bg-[#4b1864] text-white py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium border-b border-[#6b2d8a] relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-[#fef3c7] text-[#92400e] font-extrabold px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs uppercase tracking-wider">
            Admissions Alert
          </span>
        
          <span className="text-white font-semibold">
            Only <span className="text-[#fde047] font-bold">3 Seats</span> Left in GK-II &amp; Online Batch
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs bg-black/25 px-3 py-1 rounded-lg border border-purple-300/30">
          <span className="text-purple-200 text-[11px] hidden md:inline">Offer Closes In:</span>
          <span className="font-bold text-[#fde047]">
            {pad(timeLeft.hours)}h : {pad(timeLeft.minutes)}m : {pad(timeLeft.seconds)}s
          </span>
        </div>

             </div>
    </div>
  );
}
