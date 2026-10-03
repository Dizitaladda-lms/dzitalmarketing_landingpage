'use client';

import React from 'react';

export default function ToolsGrid() {
  const tools = [
    { name: 'Google Ads',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
    { name: 'Meta Ads',       logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png' },
    { name: 'SEMrush',        logo: 'https://cdn.worldvectorlogo.com/logos/semrush.svg' },
    { name: 'Google Analytics',logo: 'https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg' },
    { name: 'Canva',          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
    { name: 'ChatGPT / AI',   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/512px-ChatGPT_logo.svg.png' },
    { name: 'WordPress',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
    { name: 'Google Tag Mgr', logo: 'https://www.vectorlogo.zone/logos/google_tag_manager/google_tag_manager-icon.svg' },
    { name: 'Ahrefs',         logo: 'https://cdn.worldvectorlogo.com/logos/ahrefs.svg' },
    { name: 'Mailchimp',      logo: 'https://www.vectorlogo.zone/logos/mailchimp/mailchimp-icon.svg' },
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
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-12 h-12 mx-auto mb-3 object-contain group-hover:scale-110 transition-transform duration-200"
                onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0.3'; }}
              />
              <p className="text-xs sm:text-sm font-bold text-[#200e30]">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
