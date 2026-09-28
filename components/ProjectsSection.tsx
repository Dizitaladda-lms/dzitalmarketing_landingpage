'use client';

import React from 'react';

interface ProjectsSectionProps {
  onOpenModal: () => void;
}

export default function ProjectsSection({ onOpenModal }: ProjectsSectionProps) {
  const projects = [
    {
      title: 'D2C Fashion E-Commerce Scaling',
      category: 'Performance Marketing',
      brand: 'Apparel & Lifestyle Brand',
      metrics: '₹42 Lakh Revenue • 4.8x ROAS',
      challenge: 'High cost-per-purchase and low retargeting conversion rates on Meta and Google.',
      solution: 'Constructed full-funnel Advantage+ Shopping campaigns on Meta coupled with Google Performance Max and automated WhatsApp abandoned cart recovery.',
      tools: ['Meta Ads', 'Google PMax', 'Shopify', 'Klaviyo', 'Looker Studio'],
      tags: ['ROAS Scaling', 'CBO Strategy', 'Creative Hooks'],
    },
    {
      title: 'Real Estate B2C Lead Generation',
      category: 'Google Ads & Lead Gen',
      brand: 'NCR Luxury Villa Developer',
      metrics: '840+ Buyer Leads • ₹185 CPL',
      challenge: 'Junk leads and high cost per lead (₹420) from broad Facebook ad targeting.',
      solution: 'Re-engineered high-intent Google Search campaigns with exact match negative keyword lists, 2-step qualification landing pages, and instant CRM webhook routing.',
      tools: ['Google Search Ads', 'WordPress', 'Google Tag Manager', 'Make.com'],
      tags: ['CPL Reduction', 'Search Intent', 'Landing Page CRO'],
    },
    {
      title: 'Healthcare Organic Traffic Turnaround',
      category: 'Technical SEO & Content',
      brand: 'Health & Wellness Portal',
      metrics: '+340% Organic Visits • 280K/Mo',
      challenge: 'Website hit by Google algorithm update; zero keyword rankings on page 1.',
      solution: 'Conducted a 500-page Screaming Frog crawl audit, fixed Core Web Vitals, created comprehensive medical content silos, and earned high-authority DA 60+ backlinks.',
      tools: ['Semrush', 'Ahrefs', 'Screaming Frog', 'GA4', 'Search Console'],
      tags: ['Core Web Vitals', 'Content Silos', 'AEO Optimization'],
    },
    {
      title: 'Hyper-Local Google 3-Pack Domination',
      category: 'Local SEO & GBP',
      brand: 'Multi-Branch Delhi Clinic',
      metrics: '#1 on 48 Keywords • 650 Calls/Mo',
      challenge: 'Zero local visibility outside a 500-meter radius; competitors dominating Google Maps.',
      solution: 'Optimized Google Business Profile categories, built 200+ NAP citations, automated review collection workflows, and localized landing pages for South Delhi clusters.',
      tools: ['Google Business Profile', 'BrightLocal', 'Canva AI', 'Local Citations'],
      tags: ['Local 3-Pack', 'GBP Ranking', 'Review Funnels'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#faf7fc] relative border-b border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#f5edfa] border border-[#ebdcf5] text-[#4b1864] text-xs font-bold uppercase tracking-wider">
            Real Brand Portfolios
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#111827] tracking-tight">
            Work on Real Brand Campaigns <br />
            <span className="heading-gradient">
              With Actual Budgets &amp; Live Accounts
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#554266]">
            No dummy PowerPoint slides. At DizitalAdda, you execute real ad spend on verified brand accounts so you have tangible case studies that recruiters immediately respect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="da-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#4b1864] transition-all duration-300 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase px-3 py-1 rounded-full bg-[#f5edfa] text-[#4b1864] border border-[#ebdcf5]">
                    {proj.category}
                  </span>
                  <span className="text-xs text-[#665675] font-semibold">
                    {proj.brand}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#200e30] tracking-tight">
                    {proj.title}
                  </h3>
                  <div className="inline-block px-3 py-1 rounded-lg bg-[#dcfce7] border border-[#bbf7d0] text-[#15803d] text-xs font-bold mt-2">
                    Outcome: {proj.metrics}
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#554266] pt-1">
                  <p>
                    <strong className="text-[#200e30]">The Challenge:</strong> {proj.challenge}
                  </p>
                  <p>
                    <strong className="text-[#200e30]">Strategic Execution:</strong> {proj.solution}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#4b1864] block mb-2">
                    Tools Used:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tools.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[#faf7fc] text-[11px] font-semibold text-[#200e30] border border-[#ebdcf5]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-[#ebdcf5] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] text-[#665675] font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onOpenModal}
                  className="text-xs font-bold text-[#4b1864] hover:text-[#38104c] underline transition-colors cursor-pointer"
                >
                  Build This Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
