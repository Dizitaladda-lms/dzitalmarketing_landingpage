'use client';

import React from 'react';

export default function HiringPartners() {
  const partners = [
    {
      name: 'Accenture',
      logo: '/partners/accenture.svg',
    },
    {
      name: 'TCS',
      logo: '/partners/tcs.webp',
    },
    {
      name: 'Cognizant',
      logo: '/partners/cognizant.svg',
    },
    {
      name: 'Tech Mahindra',
      logo: '/partners/tech-mahindra.webp',
    },
    {
      name: 'Infosys',
      logo: '/partners/infosys.svg',
    },
    {
      name: 'Wipro',
      logo: '/partners/wipro.svg',
    },
    {
      name: 'Rapido',
      logo: '/partners/rapido.webp',
    },
    {
      name: 'NoBroker',
      logo: '/partners/nobroker.webp',
    },
    {
      name: 'Haptik',
      logo: '/partners/haptik.webp',
    },
    {
      name: 'IQVIA',
      logo: '/partners/iqvia.webp',
    },
    {
      name: 'Brillio',
      logo: '/partners/brillio.webp',
    },
    {
      name: 'Performics',
      logo: null,
      fallbackText: 'Performics',
    },
    {
      name: 'HiveMinds',
      logo: null,
      fallbackText: 'HiveMinds',
    },
    {
      name: 'Dentsu',
      logo: null,
      fallbackText: 'Dentsu',
    },
  ];

  return (
    <section id="placements" className="py-14 bg-[#faf7fc] border-y border-[#ebdcf5] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center space-y-2">
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
      <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-6 animate-marquee shrink-0 items-center py-2">
          {partners.concat(partners).map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center px-5 py-3 rounded-xl bg-white border border-[#ebdcf5] hover:border-[#4b1864] transition-all shrink-0 shadow-sm min-w-[160px] h-16"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-9 max-w-[130px] object-contain"
                />
              ) : (
                <span className="font-extrabold text-sm text-[#200e30] tracking-wide text-center">
                  {partner.fallbackText || partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
