'use client';

import React from 'react';

export default function ToolsGrid() {
  const tools = [
    {
      name: 'Google Ads',
      logo: 'https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg',
    },
    {
      name: 'Meta Ads',
      logo: 'https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg',
    },
    {
      name: 'SEMrush',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/SEMrush_logo.png/320px-SEMrush_logo.png',
    },
    {
      name: 'Google Analytics',
      logo: 'https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg',
    },
    {
      name: 'Canva',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
    },
    {
      name: 'ChatGPT',
      logo: 'https://www.vectorlogo.zone/logos/openai/openai-icon.svg',
    },
    {
      name: 'WordPress',
      logo: 'https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg',
    },
    {
      name: 'Google Tag Mgr',
      logo: 'https://www.vectorlogo.zone/logos/google_tag_manager/google_tag_manager-icon.svg',
    },
    {
      name: 'Ahrefs',
      logo: 'https://static.ahrefs.com/static/assets/img/header/logo.svg',
    },
    {
      name: 'Mailchimp',
      logo: 'https://www.vectorlogo.zone/logos/mailchimp/mailchimp-icon.svg',
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
            Master <span className="heading-gradient">10+ Industry Tools</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5e4b6d] max-w-2xl mx-auto">
            Master the most in-demand AI and digital marketing tools used by top agencies and global brands across India.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="bg-[#faf7fc] border border-[#ebdcf5] rounded-xl p-5 text-center hover:border-[#4b1864] hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              {/* Logo with fallback to colored initial */}
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-200"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback: colored initial circle */}
                <div
                  style={{ display: 'none' }}
                  className="w-12 h-12 rounded-full bg-[#f3e8fa] border border-[#ebdcf5] items-center justify-center text-[#4b1864] font-black text-lg"
                >
                  {tool.name[0]}
                </div>
              </div>
              <p className="text-xs sm:text-sm font-bold text-[#200e30]">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
