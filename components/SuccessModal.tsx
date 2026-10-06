'use client';

import React from 'react';

interface SuccessModalProps {
  leadData: any;
  onClose: () => void;
}

export default function SuccessModal({ leadData, onClose }: SuccessModalProps) {
  if (!leadData) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi DizitalAdda! I just submitted my application for the ${leadData.course || 'Digital Marketing Course'} on your website. My name is ${leadData.fullName || 'Learner'}. Please share the syllabus PDF and batch timings with me.`
  );

  const whatsappUrl = `https://wa.me/918810606010?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md rounded-2xl bg-white border-2 border-[#ebdcf5] p-6 sm:p-8 shadow-2xl text-center space-y-5">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#faf7fc] hover:bg-[#f3e8fa] border border-[#ebdcf5] text-[#200e30] font-bold text-sm flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="w-14 h-14 rounded-full bg-[#f3e8fa] text-[#4b1864] font-bold text-2xl flex items-center justify-center mx-auto">
          ✓
        </div>

        <div className="space-y-2">
          <div className="inline-block px-3 py-1 rounded-full bg-[#f3e8fa] border border-[#ebdcf5] text-[#4b1864] text-xs font-bold uppercase tracking-wider">
            Application Received Successfully
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#111827] tracking-tight">
            Welcome, <span className="heading-gradient">{leadData.fullName || 'Learner'}</span>!
          </h3>
          <p className="text-xs sm:text-sm text-[#5e4b6d]">
            Your free counselling session and 2026 AI syllabus request has been prioritized with our senior academic team.
          </p>
        </div>

        {/* Lead summary card */}
        <div className="p-3.5 rounded-xl bg-[#faf7fc] border border-[#ebdcf5] text-xs text-left space-y-1.5 text-[#5e4b6d]">
          <div className="flex justify-between">
            <span className="text-[#8a7a99]">Selected Track:</span>
            <span className="font-bold text-[#200e30] text-right">{leadData.course}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#8a7a99]">Learning Mode:</span>
            <span className="font-semibold text-[#200e30]">{leadData.mode}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#8a7a99]">Mobile:</span>
            <span className="font-mono text-[#4b1864] font-bold">+91 {leadData.phone}</span>
          </div>
        </div>

        {/* Instant WhatsApp Action */}
        <div className="space-y-2 pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl bg-[#4b1864] hover:bg-[#38104c] text-white font-extrabold text-sm sm:text-base shadow-md flex items-center justify-center transition-all hover:scale-[1.02]"
          >
            Open WhatsApp for Instant Syllabus PDF
          </a>

          <a
            href="tel:+918810606010"
            className="w-full py-2.5 rounded-xl bg-[#faf7fc] hover:bg-[#f3e8fa] border border-[#ebdcf5] text-[#4b1864] text-xs font-bold flex items-center justify-center transition-colors"
          >
            Or Call Admission Head: +91 8810606010
          </a>
        </div>
      </div>
    </div>
  );
}
