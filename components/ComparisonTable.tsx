'use client';

import React, { useState } from 'react';

interface ComparisonTableProps {
  onOpenModal: () => void;
}

export default function ComparisonTable({ onOpenModal }: ComparisonTableProps) {
  const [activeTab, setActiveTab] = useState<'vsOthers' | 'levels'>('vsOthers');

  const comparisonData = [
    {
      feature: 'Total Modules',
      expert: '70 Comprehensive Modules',
      advanced: '60 Detailed Modules',
      professional: '40 Focused Modules',
      beginner: '30 Basic Modules',
    },
    {
      feature: 'AI Tools Integrated',
      expert: '60+ AI Tools (GenAI, LLMs, Automation)',
      advanced: '54+ AI Tools Coverage',
      professional: '50+ AI Tools Overview',
      beginner: '40+ AI Tools Intro',
    },
    {
      feature: 'Live Brand Projects',
      expert: '10 Real Brand Projects (Live Budgets)',
      advanced: '7 Live Brand Campaigns',
      professional: '5 Real-World Case Projects',
      beginner: '4 Guided Practice Projects',
    },
    {
      feature: 'In-House Paid Internship',
      expert: 'Guaranteed In-House Agency Paid Internship',
      advanced: 'Agency Shadowing & Live Client Work',
      professional: 'Agency Case Study Sprint',
      beginner: 'Capstone Guided Work',
    },
    {
      feature: 'Industry Certifications',
      expert: '10+ Global Certificates (Google, Meta, HubSpot)',
      advanced: '8+ Global Certificates',
      professional: '6+ Industry Certificates',
      beginner: '4+ Foundational Certificates',
    },
    {
      feature: 'Mentorship Model',
      expert: '1-on-1 Personal Mentorship by Agency Head',
      advanced: 'Dedicated Mentor Review & Feedback',
      professional: 'Weekend Mentor Office Hours',
      beginner: 'Group Mentor Guidance',
    },
    {
      feature: 'Placement & Freelance Support',
      expert: '100% Dedicated Placement Drive (Unlimited)',
      advanced: '100% Placement Drives & Mock Interviews',
      professional: 'Career Transition & Salary Hike Prep',
      beginner: 'Job Portal Access & Resume Building',
    },
    {
      feature: 'Ideal For',
      expert: 'Future Digital Marketing Leaders & Founders',
      advanced: 'Marketing Career Switchers & Grads',
      professional: 'Working Professionals on Weekends',
      beginner: 'Freshers, 12th Pass & Housewives',
    },
  ];

  const vsOthersData = [
    {
      metric: 'Live Client Ad Budgets',
      dizitalAdda: 'Yes — Real ₹10k–₹50k ad spends managed on actual accounts',
      others: 'Only theoretical mock simulations & slide presentations',
      youtube: 'No live accounts or hands-on ad spend access',
    },
    {
      metric: 'AI Integration (2026 Ready)',
      dizitalAdda: '60+ AI Tools: ChatGPT-4o, Gemini, Perplexity, Canva AI, Make',
      others: 'Outdated slides without prompt engineering or AI workflows',
      youtube: 'Scattered 5-minute tutorials without end-to-end strategy',
    },
    {
      metric: 'Paid In-House Internship',
      dizitalAdda: 'Guaranteed paid in-house internship at DizitalAdda Agency',
      others: 'Fake internship letter without actual live client work',
      youtube: 'No internship or practical verification',
    },
    {
      metric: 'Batch Size & 1-on-1 Focus',
      dizitalAdda: 'Max 15 students per batch for direct mentor attention',
      others: 'Crowded batches of 40–100 students where doubts get lost',
      youtube: 'One-way broadcast with zero personalized feedback',
    },
    {
      metric: 'Verified Placement Ecosystem',
      dizitalAdda: '250+ active recruiter partners, ₹10.05 LPA highest CTC',
      others: 'Only job alerts forwarded on WhatsApp without referrals',
      youtube: 'Zero placement assistance or interview coaching',
    },
    {
      metric: 'Campus + Online Flexibility',
      dizitalAdda: 'Both offline (GK-II South Delhi) & interactive live online',
      others: 'Only pre-recorded videos or single rigid format',
      youtube: 'Passive video watching with high dropout rates',
    },
  ];

  return (
    <section className="py-20 bg-[#faf7fc] relative border-b border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#f5edfa] border border-[#ebdcf5] text-[#4b1864] text-xs font-bold uppercase tracking-wider">
            Side-By-Side Comparison Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
            Compare &amp; Choose With <br />
            <span className="heading-gradient">
              100% Clarity &amp; Transparency
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#554266]">
            See exactly how our 4 course levels differ and why DizitalAdda is rated #1 in Delhi NCR.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex items-center bg-[#f5edfa] p-1.5 rounded-2xl border border-[#ebdcf5] mt-4">
            <button
              onClick={() => setActiveTab('levels')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'levels'
                  ? 'bg-[#4b1864] text-white shadow-sm'
                  : 'text-[#4b1864] hover:text-[#200e30]'
              }`}
            >
              Compare 4 Course Levels
            </button>
            <button
              onClick={() => setActiveTab('vsOthers')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'vsOthers'
                  ? 'bg-[#4b1864] text-white shadow-sm'
                  : 'text-[#4b1864] hover:text-[#200e30]'
              }`}
            >
              DizitalAdda vs Other Institutes
            </button>
          </div>
        </div>

        {activeTab === 'levels' ? (
          <div className="overflow-x-auto rounded-2xl border border-[#ebdcf5] shadow-sm bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#f5edfa] border-b border-[#ebdcf5] text-[#200e30]">
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-[#4b1864] w-1/4">
                    Program Feature
                  </th>
                  <th className="p-4 sm:p-5 font-black text-[#4b1864] bg-[#ebdcf5]/50 border-x border-[#ebdcf5]">
                    <span className="block text-base sm:text-lg">Expert</span>
                    <span className="text-xs font-semibold text-[#665675]">12 Months Track</span>
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-[#200e30]">
                    <span className="block text-base sm:text-lg">Advanced</span>
                    <span className="text-xs font-semibold text-[#665675]">6 Months Track</span>
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-[#200e30]">
                    <span className="block text-base sm:text-lg">Professional</span>
                    <span className="text-xs font-semibold text-[#665675]">4 Months Track</span>
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-[#200e30]">
                    <span className="block text-base sm:text-lg">Beginners</span>
                    <span className="text-xs font-semibold text-[#665675]">3 Months Track</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0e4f7] bg-white">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#faf7fc] transition-colors">
                    <td className="p-4 font-semibold text-[#4b1864]">{row.feature}</td>
                    <td className="p-4 font-bold text-[#200e30] bg-[#ebdcf5]/20 border-x border-[#ebdcf5]">
                      {row.expert}
                    </td>
                    <td className="p-4 text-[#554266]">{row.advanced}</td>
                    <td className="p-4 text-[#554266]">{row.professional}</td>
                    <td className="p-4 text-[#554266]">{row.beginner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-[#ebdcf5] shadow-sm bg-white">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#f5edfa] border-b border-[#ebdcf5] text-[#200e30]">
                  <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-[#4b1864] w-1/4">
                    Evaluation Criteria
                  </th>
                  <th className="p-4 sm:p-5 font-black text-[#4b1864] bg-[#ebdcf5]/50 border-x border-[#ebdcf5] w-1/3">
                    <span className="block text-base sm:text-lg">DizitalAdda Delhi</span>
                    <span className="text-xs font-bold text-[#047857]">Recommended Choice</span>
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-slate-500">
                    <span className="block text-base sm:text-lg">Traditional Institutes</span>
                    <span className="text-xs font-semibold text-slate-400">Old Syllabus</span>
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-slate-500">
                    <span className="block text-base sm:text-lg">Free YouTube Videos</span>
                    <span className="text-xs font-semibold text-slate-400">Unstructured</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f0e4f7] bg-white">
                {vsOthersData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#faf7fc] transition-colors">
                    <td className="p-4 font-semibold text-[#4b1864]">{row.metric}</td>
                    <td className="p-4 font-bold text-[#200e30] bg-[#ebdcf5]/20 border-x border-[#ebdcf5]">
                      <span className="text-[#047857] mr-1.5 font-bold">✓</span>
                      {row.dizitalAdda}
                    </td>
                    <td className="p-4 text-slate-500">
                      <span className="text-red-500 mr-1.5 font-bold">✕</span>
                      {row.others}
                    </td>
                    <td className="p-4 text-slate-500">
                      <span className="text-red-500 mr-1.5 font-bold">✕</span>
                      {row.youtube}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={onOpenModal}
            className="px-8 py-3.5 rounded-xl bg-[#4b1864] hover:bg-[#38104c] text-white font-extrabold text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Need Help Deciding? Speak with Senior Counsellor
          </button>
        </div>
      </div>
    </section>
  );
}
