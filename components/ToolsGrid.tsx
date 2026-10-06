'use client';

import React from 'react';

export default function ToolsGrid() {
  const aiTools = [
    { name: 'ChatGPT-4o',    logo: '/tools/chatgpt.svg' },
    { name: 'Claude AI',      logo: '/tools/claude.png' },
    { name: 'Google Gemini',  logo: '/tools/gemini.svg' },
    { name: 'Canva AI',       logo: '/tools/canva.svg' },
  ];

  const digitalTools = [
    { name: 'Google Ads',     logo: '/tools/google-ads.svg' },
    { name: 'Analytics (GA4)', logo: '/tools/ga4.svg' },
    { name: 'Tag Manager',    logo: '/tools/gtm.png' },
    { name: 'Meta Business',  logo: '/tools/meta.png' },
    { name: 'SEMrush',        logo: '/tools/semrush.png' },
    { name: 'WordPress',      logo: '/tools/wordpress.svg' },
    { name: 'WooCommerce',    logo: '/tools/woocommerce.webp' },
    { name: 'MS Clarity',     logo: '/tools/ms-clarity.png' },
  ];

  return (
    <section id="tools" className="py-14 md:py-20 bg-white border-b border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 space-y-2">
          <span className="text-[#4b1864] font-bold tracking-wider uppercase text-xs block">
            Future-Proof Curriculum
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight">
            Master <span className="heading-gradient">Industry Leading Tools</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5e4b6d] max-w-2xl mx-auto">
            Master the most in-demand <strong className="text-[#4b1864] font-bold">AI &amp; Digital Marketing Tools</strong> used by top agencies and global brands across India.
          </p>
        </div>

        {/* 2-Column Split: AI Tools on One Side, Google & Other Tools on the Other Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Side 1: AI Tools */}
          <div className="lg:col-span-5 bg-[#faf7fc] border border-[#ebdcf5] rounded-2xl p-5 sm:p-7 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#ebdcf5]">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-[#200e30]">
                    AI &amp; Automation Tools
                  </h3>
                  <p className="text-xs text-[#5e4b6d] mt-0.5">
                    For 10x Content, Copywriting &amp; Workflows
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#f3e8fa] text-[#4b1864] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider shrink-0">
                  AI Tools
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {aiTools.map((tool, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#ebdcf5] rounded-xl p-3.5 sm:p-4 text-center hover:border-[#4b1864] hover:-translate-y-1 transition-all duration-200 shadow-sm flex flex-col items-center justify-center group"
                  >
                    <div className="w-12 h-12 mx-auto mb-2.5 flex items-center justify-center">
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="max-h-10 max-w-10 object-contain group-hover:scale-110 transition-transform duration-200"
                      />
                    </div>
                    <p className="text-xs font-bold text-[#200e30]">{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-[#ebdcf5] text-left">
              <p className="text-[11px] text-[#5e4b6d]">
                Integrated hands-on prompt engineering &amp; generative AI workflows.
              </p>
            </div>
          </div>

          {/* Side 2: Google & Other Digital Marketing Tools */}
          <div className="lg:col-span-7 bg-[#faf7fc] border border-[#ebdcf5] rounded-2xl p-5 sm:p-7 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#ebdcf5]">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-[#200e30]">
                    Google &amp; Marketing Tools
                  </h3>
                  <p className="text-xs text-[#5e4b6d] mt-0.5">
                    For Search, Performance Ads, Analytics &amp; Web
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#f3e8fa] text-[#4b1864] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider shrink-0">
                  Google &amp; Core
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {digitalTools.map((tool, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#ebdcf5] rounded-xl p-3.5 sm:p-4 text-center hover:border-[#4b1864] hover:-translate-y-1 transition-all duration-200 shadow-sm flex flex-col items-center justify-center group"
                  >
                    <div className="w-12 h-12 mx-auto mb-2.5 flex items-center justify-center">
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="max-h-10 max-w-10 object-contain group-hover:scale-110 transition-transform duration-200"
                      />
                    </div>
                    <p className="text-xs font-bold text-[#200e30]">{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-[#ebdcf5] text-left">
              <p className="text-[11px] text-[#5e4b6d]">
                Live budget practice on real Google Ads, Meta Ads &amp; GA4 accounts.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
