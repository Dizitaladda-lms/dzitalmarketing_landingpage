'use client';

import React, { useState } from 'react';

interface FAQSectionProps {
  onOpenModal: () => void;
}

export default function FAQSection({ onOpenModal }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is a digital marketing course and what does it include?',
      a: 'A digital marketing course teaches how to promote businesses and generate customers online. It includes Search Engine Optimisation (SEO), social media marketing, Google Ads, Meta Ads, content marketing, email marketing, Google Analytics 4, and 60+ AI tools to help brands scale on digital platforms.',
    },
    {
      q: 'Who should join a digital marketing training program?',
      a: 'Anyone can join — including college students, freshers, working professionals from sales/IT, business owners, and freelancers. No coding knowledge or IT technical background is required to learn digital marketing.',
    },
    {
      q: 'What digital marketing jobs are available after completing a course?',
      a: 'After completing the course, you can apply for high-demand roles such as Digital Marketing Executive, SEO Specialist, PPC / Performance Marketing Specialist, Social Media Manager, Content Strategist, Growth Marketer, or Email Automation Specialist.',
    },
    {
      q: 'Is digital marketing an IT job or a non-technical career?',
      a: 'Digital marketing is primarily a non-technical career. It focuses on marketing strategy, psychology, creative campaign building, and analytical data interpretation. Modern tools and AI are used, but programming or coding is not required.',
    },
    {
      q: 'Is digital marketing a good long-term career in India?',
      a: 'Yes, digital marketing is one of the fastest growing careers in India. As businesses shift their entire marketing budgets online, demand for skilled performance marketers who understand AI tools continues to outpace supply across every industry.',
    },
    {
      q: 'What is the average digital marketing salary in India for freshers?',
      a: 'The average starting salary for freshers in digital marketing ranges from ₹3 LPA to ₹6 LPA. Mid-level specialists earn ₹7–12 LPA, while senior marketing leaders and performance managers earn ₹15–25+ LPA. At DizitalAdda, our placed students have achieved up to ₹10.05 LPA highest CTC with an average salary hike of 60%.',
    },
    {
      q: 'What is a digital marketing course with AI and how is it useful?',
      a: 'A digital marketing course with AI teaches you how to utilize 60+ modern AI tools (ChatGPT-4o, Google Gemini, Perplexity, Canva AI, Midjourney, Make.com) for prompt engineering, automated ad copy, audience segmentation, predictive analytics, and Answer Engine Optimisation (AEO). AI helps marketers deliver 5x faster work and achieve higher ROAS.',
    },
    {
      q: 'Does DizitalAdda offer 100% placement support in India?',
      a: 'Yes. DizitalAdda provides structured 100% placement assistance — including profile optimization, resume reconstruction, portfolio review, mock interviews with hiring managers, and direct interview connections to 250+ recruiting partners across India. We also include a guaranteed in-house paid agency internship.',
    },
    {
      q: 'How much does a digital marketing course cost in Delhi?',
      a: 'Course fees range according to depth and duration. At DizitalAdda (GK-II South Delhi), the 3-Month Beginner course starts at ₹25,000–₹30,000; the 4-Month Professional course is ₹30,000–₹35,000; the 6-Month Advanced course is ₹45,000–₹50,000; and the 12-Month Expert Master track (with 70 modules, 10 live projects, and paid internship) is ₹90,000–₹95,000. Flexible no-cost EMI options are available.',
    },
    {
      q: 'Can I learn digital marketing online from outside Delhi?',
      a: 'Yes! DizitalAdda offers both modes — students can attend live interactive online classes from anywhere in India, or attend classroom sessions at our Greater Kailash II campus in South Delhi, or combine both in hybrid format. Online learners get the exact same curriculum, live brand projects, and 100% placement support.',
    },
    {
      q: 'What is the difference between SEO, SEM, and PPC?',
      a: 'SEO (Search Engine Optimisation) is the practice of ranking organically on search engines without paying for clicks. SEM (Search Engine Marketing) is the umbrella term covering both organic and paid search. PPC (Pay-Per-Click) is the paid advertising model where you pay per click on Google Search Ads. DizitalAdda teaches all three in depth with live budget practice.',
    },
    {
      q: 'Can beginners start without any prior marketing experience?',
      a: 'Yes! All DizitalAdda courses are designed step-by-step from absolute scratch to advanced agency workflows. You will be guided by dedicated mentors through live practical exercises, website creation, and portfolio building.',
    },
  ];

  return (
    <section id="faqs" className="py-20 bg-white relative overflow-hidden border-t border-[#ebdcf5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 space-y-3">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#f3e8fa] border border-[#ebdcf5] text-[#4b1864] text-xs font-bold uppercase tracking-wider">
            Frequently Asked Questions
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight">
            Got Questions? <br />
            <span className="heading-gradient">
              We&apos;ve Got Clear Answers
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#5e4b6d]">
            Everything you need to know about course levels, AI tools, fees, batch timings, and placement guarantees.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#faf7fc] rounded-2xl border border-[#ebdcf5] hover:border-[#4b1864] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#200e30] tracking-tight flex items-center gap-2">
                    <span className="text-[#4b1864] font-mono text-xs">Q{idx + 1}.</span>
                    {faq.q}
                  </span>
                  <span className="text-lg font-bold text-[#4b1864] shrink-0">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5e4b6d] leading-relaxed border-t border-[#ebdcf5] animate-fadeIn">
                    <p className="pl-4 border-l-2 border-[#4b1864]">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-[#faf7fc] border border-[#ebdcf5] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-[#200e30]">
              Still confused about your career roadmap?
            </h4>
            <p className="text-xs text-[#5e4b6d]">
              Speak directly with an academic counsellor for 100% unbiased guidance.
            </p>
          </div>
          <button
            onClick={onOpenModal}
            className="px-6 py-3 rounded-xl bg-[#4b1864] hover:bg-[#3d1252] text-white font-extrabold text-xs sm:text-sm shadow-sm transition-all hover:scale-105 cursor-pointer shrink-0"
          >
            Speak to Counsellor Now
          </button>
        </div>
      </div>
    </section>
  );
}
