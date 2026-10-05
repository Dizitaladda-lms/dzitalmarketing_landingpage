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
      className="hidden sm:flex fixed bottom-6 right-6 z-40 items-center gap-2 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-xl transition-all hover:scale-105 active:scale-95 group cursor-pointer"
    >
      <span className="font-bold">WhatsApp</span>
    </a>
  );
}
