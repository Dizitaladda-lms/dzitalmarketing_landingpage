'use client';

import React from 'react';

export default function ToolsGrid() {
  const tools = [
    {
      name: 'Canva',
      logo: '/tools/canva.svg',
    },
    {
      name: 'Claude AI',
      logo: '/tools/claude.png',
    },
    {
      name: 'Google Ads',
      logo: '/tools/google-ads.svg',
    },
    {
      name: 'Meta Business',
      logo: '/tools/meta.png',
    },
    {
      name: 'SEMrush',
      logo: '/tools/semrush.png',
    },
    {
      name: 'WordPress',
      logo: '/tools/wordpress.svg',
    },
    {
      name: 'Tag Manager',
      logo: '/tools/gtm.png',
    },
    {
      name: 'Analytics (GA4)',
      logo: '/tools/ga4.svg',
    },
    {
      name: 'MS Clarity',
      logo: '/tools/ms-clarity.png',
    },
    {
      name: 'WooCommerce',
      logo: '/tools/woocommerce.webp',
    },
  ];

  return (
    <section id="tools" className="py-14 md:py-20 bg-white border-b border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-2">
          <span className="text-[#4b1864] font-bold tracking-wider uppercase text-xs block">
            Future-Proof Curriculum
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight">
            Master <span className="heading-gradient">10+ Industry Leading Tools</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5e4b6d] max-w-2xl mx-auto">
            Master the most in-demand AI and digital marketing tools used by top agencies and global brands across India.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="bg-[#faf7fc] border border-[#ebdcf5] rounded-xl p-5 text-center hover:border-[#4b1864] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md group flex flex-col items-center justify-center"
            >
              <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="max-h-12 max-w-12 object-contain group-hover:scale-110 transition-transform duration-200"
                />
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#200e30]">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
