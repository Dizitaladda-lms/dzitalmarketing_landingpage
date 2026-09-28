'use client';

import React from 'react';

export default function HiringPartners() {
  const partners = [
    { name: 'Performics', role: 'Performance Agency' },
    { name: 'HiveMinds', role: 'Madison World' },
    { name: 'Growisto', role: 'E-Commerce Tech' },
    { name: 'TATA CLiQ', role: 'D2C Retail' },
    { name: 'Coursera', role: 'EdTech' },
    { name: 'Dentsu', role: 'Global Media Network' },
    { name: 'Adyog', role: 'Growth Agency' },
    { name: 'Accenture', role: 'Consulting & Tech' },
    { name: 'The Souled Store', role: 'D2C Apparel' },
    { name: 'LAVA International', role: 'Consumer Electronics' },
    { name: 'Avishkaar', role: 'Robotics & AI' },
    { name: 'Sunhill', role: 'Digital Media' },
    { name: 'Brainwork Technologies', role: 'SEO & Web' },
    { name: 'Technovia', role: 'Software & Media' },
    { name: 'Fact Education', role: 'Education Network' },
  ];

  return (
    <section id="placements" className="py-14 bg-[#faf7fc] border-y border-[#ebdcf5] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center space-y-2">
        <div className="inline-block px-3 py-1 rounded-full bg-[#f3e8fa] border border-[#ebdcf5] text-[#4b1864] text-xs font-bold uppercase tracking-wider">
          250+ Domestic &amp; Global Hiring Partners
        </div>
        <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-[#111827] tracking-tight">
          Where DizitalAdda Alumni <span className="heading-gradient">Work &amp; Lead</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#5e4b6d]">
          Our graduates receive direct referrals and off-campus placement drives across top agencies, funded startups, and enterprises.
        </p>
      </div>

      {/* Marquee Row */}
      <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-4 animate-marquee shrink-0 items-center">
          {partners.concat(partners).map((partner, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center px-6 py-3 rounded-xl bg-white border border-[#ebdcf5] hover:border-[#4b1864] transition-all shrink-0 shadow-sm min-w-[170px]"
            >
              <span className="font-extrabold text-sm text-[#200e30] tracking-wide">
                {partner.name}
              </span>
              <span className="text-[10px] text-[#5e4b6d]">
                {partner.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
