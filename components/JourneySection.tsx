'use client';

import React from 'react';

interface JourneySectionProps {
  onOpenModal: () => void;
}

export default function JourneySection({ onOpenModal }: JourneySectionProps) {
  const steps = [
    {
      num: '01',
      title: 'Personalized Counselling & Enrollment',
      desc: 'Meet your dedicated career advisor, map your current skills, pick the right batch (offline GK-II or online), and get your custom learning roadmap.',
      pills: ['Course Selection', '1-on-1 Counselling', 'Flexible Batches'],
    },
    {
      num: '02',
      title: '70-Module Expert Training & AI Lab',
      desc: 'Attend interactive live classes taught by full-time agency practitioners. Hands-on daily practice with 60+ AI tools and lifetime LMS class recording vault.',
      pills: ['Live Expert Classes', '70 Modules', '60+ AI Tools'],
    },
    {
      num: '03',
      title: 'Live Brand Accounts Execution',
      desc: 'Run actual paid campaigns with live budgets on Google Ads and Meta Ads Manager. Build a verified case study portfolio recruiters can inspect.',
      pills: ['Real Brand Campaigns', 'Verified Portfolio', 'Mentor Reviews'],
    },
    {
      num: '04',
      title: '10+ Global Certifications',
      desc: 'Earn verified credentials from Google Ads, Meta Blueprint, HubSpot, Semrush, Skill India, and DizitalAdda Executive Certificate with QR verification.',
      pills: ['Google Certified', 'Meta Blueprint', '10+ Certificates'],
    },
    {
      num: '05',
      title: 'Paid In-House Agency Internship',
      desc: 'Work inside DizitalAdda’s own digital marketing agency in Delhi. Handle live client accounts, manage real client retainers, and gain commercial agency experience.',
      pills: ['Paid Internship', 'Live Client Accounts', 'Agency Experience'],
    },
    {
      num: '06',
      title: '100% Placement or Freelance Retainers',
      desc: 'Get connected with 250+ recruiting partners, undergo rigorous mock interviews, resume optimization, and receive job drive invites until you are placed.',
      pills: ['100% Placement Support', '250+ Recruiters', 'Freelance Mentorship'],
    },
  ];

  return (
    <section id="journey" className="py-20 bg-[#faf7fc] relative overflow-hidden border-t border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#f3e8fa] border border-[#ebdcf5] text-[#4b1864] text-xs font-bold uppercase tracking-wider">
            Your Path to Success
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#111827] tracking-tight">
            Your 6-Step Journey <br />
            <span className="heading-gradient">
              From Day One to Dream Career
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#5e4b6d]">
            Here is the step-by-step roadmap from your first counselling session to working in top performance agencies or managing international freelance retainers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#ebdcf5] hover:border-[#4b1864] flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#4b1864] uppercase tracking-wider px-3 py-1 rounded-full bg-[#f3e8fa] border border-[#ebdcf5]">
                    Step {st.num}
                  </span>
                  <span className="text-2xl font-black text-[#ebdcf5]">
                    {st.num}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-[#200e30] tracking-tight leading-snug">
                  {st.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5e4b6d] leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#ebdcf5]">
                <div className="flex flex-wrap gap-1.5">
                  {st.pills.map((pill, i) => (
                    <span
                      key={i}
                      className="text-[10px] sm:text-[11px] font-semibold text-[#4b1864] px-2.5 py-1 rounded-md bg-[#faf7fc] border border-[#ebdcf5]"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-[#4b1864] hover:bg-[#3d1252] text-white font-extrabold text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            Begin Your Journey Today • Book Free Counselling
          </button>
        </div>
      </div>
    </section>
  );
}
