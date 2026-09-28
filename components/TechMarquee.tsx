'use client';

import React from 'react';

const tools = [
  { name: 'Google Ads', category: 'PPC & SEM' },
  { name: 'Meta Ads Manager', category: 'Social Paid' },
  { name: 'Google Analytics 4', category: 'Analytics' },
  { name: 'ChatGPT-4o', category: 'Generative AI' },
  { name: 'Google Gemini', category: 'AI Research' },
  { name: 'Perplexity AI', category: 'Answer Engine' },
  { name: 'Semrush', category: 'SEO Suite' },
  { name: 'Ahrefs', category: 'Backlinks & Rank' },
  { name: 'Canva Pro AI', category: 'Design Automation' },
  { name: 'WordPress', category: 'CMS & Web' },
  { name: 'Shopify', category: 'E-Commerce' },
  { name: 'HubSpot', category: 'Inbound & CRM' },
  { name: 'Mailchimp', category: 'Email Automation' },
  { name: 'Midjourney', category: 'AI Visuals' },
  { name: 'Claude 3.5', category: 'AI Copywriting' },
  { name: 'Looker Studio', category: 'BI Dashboards' },
  { name: 'Make / Zapier', category: 'AI Automations' },
  { name: 'Screaming Frog', category: 'Technical SEO' },
  { name: 'ElevenLabs', category: 'AI Voiceovers' },
  { name: 'CapCut Pro', category: 'Video Editing' },
];

export default function TechMarquee() {
  return (
    <section className="py-6 bg-[#f7f0fb] border-y border-[#ebdcf5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-3 flex items-center justify-between text-xs font-bold text-[#4b1864]">
        <span className="uppercase tracking-wider">
          Industry Tech Stack &amp; 60+ AI Tools Covered
        </span>
        <span className="hidden sm:inline text-[#665675] font-normal">
          Hands-on live credentials &amp; licenses included
        </span>
      </div>

      <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-3 animate-marquee shrink-0 items-center">
          {tools.concat(tools).map((tool, idx) => (
            <div
              key={idx}
              className="flex flex-col text-left px-4 py-2 rounded-xl bg-white border border-[#ebdcf5] hover:border-[#c9a4e6] transition-all shrink-0 shadow-sm"
            >
              <span className="font-bold text-xs text-[#200e30] tracking-tight">{tool.name}</span>
              <span className="text-[10px] text-[#665675]">{tool.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
