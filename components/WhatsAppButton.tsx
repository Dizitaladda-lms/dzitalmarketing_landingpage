'use client';

import React from 'react';

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    'Hi DizitalAdda! I am exploring your Digital Marketing Courses. Please share the 70-module syllabus PDF, current early bird fee discount, and upcoming batch timings.'
  );

  return (
    <a
      href={`https://wa.me/918810606010?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with DizitalAdda Counsellor on WhatsApp"
      className="hidden sm:flex fixed bottom-6 right-6 z-40 items-center gap-2 px-5 py-3 rounded-full bg-[#4b1864] hover:bg-[#38104c] text-white font-bold text-sm shadow-xl border border-white/20 transition-all hover:scale-105 active:scale-95 group cursor-pointer"
    >
      <span className="font-bold">WhatsApp</span>
    </a>
  );
}
