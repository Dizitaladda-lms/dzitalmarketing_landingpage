'use client';

import React, { useState } from 'react';

interface FAQSectionProps {
  onOpenModal: () => void;
}

export default function FAQSection({ onOpenModal }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do you provide placement support after the digital marketing online course?',
      a: 'Yes, we provide placement assistance. Our dedicated placement cell helps with resume building, mock interviews, and scheduling interviews with our 250+ hiring partners.',
    },
    {
      q: 'Is this the best digital marketing course in India for beginners?',
      a: 'Absolutely. The curriculum is designed from scratch, making it perfect for beginners, college students, and professionals looking to transition their careers into digital marketing.',
    },
    {
      q: 'Will I get hands-on experience with AI tools?',
      a: 'Yes, our digital marketing with AI course integrates hands-on modules for ChatGPT, Claude, Midjourney, and other generative AI tools to make you 10x more productive.',
    },
  ];

  return (
    <section id="faq" className="py-14 md:py-20 bg-white border-t border-[#ebdcf5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight">
            Frequently Asked <span className="heading-gradient">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5e4b6d] font-medium">
            Everything you need to know about the best digital marketing course in India.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-[#ebdcf5] rounded-xl bg-[#faf7fc] overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none cursor-pointer"
              >
                <span className="font-bold text-[#200e30] text-sm sm:text-base pr-4">
                  {faq.q}
                </span>
                <span className="text-[#4b1864] font-black text-xl shrink-0">
                  {openIndex === idx ? '−' : '+'}
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5 text-sm text-[#5e4b6d] leading-relaxed border-t border-[#ebdcf5] pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-[#5e4b6d] mb-4">Still have questions? Talk to our counsellor directly.</p>
          <button
            onClick={onOpenModal}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#4b1864] hover:bg-[#38104c] text-white font-extrabold text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Speak To Our Counsellor
          </button>
        </div>
      </div>
    </section>
  );
}
