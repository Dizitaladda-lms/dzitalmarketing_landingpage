'use client';

import React from 'react';

export default function StatsSection() {
  const stats = [
    { value: '25,000+', label: 'Learners Trained' },
    { value: '250+',    label: 'Hiring Partners' },
    { value: '₹10.05 LPA', label: 'Highest Salary' },
    { value: '4.9 ★',  label: 'Average Rating' },
  ];

  return (
    <section className="py-12 bg-white border-y border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* 4 Core Numbers Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i} className="px-2 py-1">
              <p className="text-2xl sm:text-3xl font-black text-[#4b1864] mb-1">{s.value}</p>
              <p className="text-xs sm:text-sm font-bold text-[#200e30]">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Program Highlights & Student Trust Proof Card */}
        <div className="bg-[#faf7fc] border border-[#ebdcf5] rounded-2xl p-4 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          
          {/* 3 Key Benefits */}
          <ul className="space-y-3.5 text-left w-full lg:w-auto">
            <li className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4b1864] shrink-0" />
              <span className="text-sm sm:text-base font-bold text-[#200e30]">
                Generative AI Integrated Curriculum <span className="font-normal text-[#5e4b6d]">(70 Industry Modules)</span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4b1864] shrink-0" />
              <span className="text-sm sm:text-base font-bold text-[#200e30]">
                Classroom (GK-II New Delhi) &amp; Live Online Interactive Batches
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4b1864] shrink-0" />
              <span className="text-sm sm:text-base font-bold text-[#200e30]">
                100% Placement Support with Dedicated Career Drives
              </span>
            </li>
          </ul>

          {/* Social Proof Strip with Avatars & Verified Ratings */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-5 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#ebdcf5] lg:pl-8 w-full lg:w-auto shrink-0 justify-center">
            
            {/* Overlapping Student Avatars */}
            <div className="flex items-center">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-11 w-11 rounded-full ring-2 ring-white object-cover"
                  src="https://dizitaladda.com/profilepic01.webp"
                  alt="Student 1"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <img
                  className="inline-block h-11 w-11 rounded-full ring-2 ring-white object-cover"
                  src="https://dizitaladda.com/profilepic00123.webp"
                  alt="Student 2"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <img
                  className="inline-block h-11 w-11 rounded-full ring-2 ring-white object-cover"
                  src="https://dizitaladda.com/profilepic00122.webp"
                  alt="Student 3"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="h-11 w-11 rounded-full bg-[#4b1864] ring-2 ring-white flex items-center justify-center text-xs font-bold text-white">
                  25k+
                </div>
              </div>
              <div className="ml-3 text-left">
                <div className="text-sm font-bold text-[#200e30]">25,000+ Students</div>
                <div className="text-xs text-[#5e4b6d]">Trained since 2009</div>
              </div>
            </div>

            {/* Google Verified Rating */}
            <div className="pl-0 sm:pl-4 border-t sm:border-t-0 sm:border-l border-[#ebdcf5] text-left">
              <div className="text-sm font-extrabold text-[#b45309]">
                ★ 4.9 out of 5.0
              </div>
              <div className="text-xs text-[#5e4b6d]">
                12,872 Verified Google Reviews
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
