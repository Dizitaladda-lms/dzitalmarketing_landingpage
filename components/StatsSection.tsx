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
    <section className="py-10 bg-white border-y border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i} className="px-2">
              <p className="text-2xl sm:text-3xl font-black text-[#4b1864] mb-1">{s.value}</p>
              <p className="text-sm font-bold text-[#200e30]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
