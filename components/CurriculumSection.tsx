'use client';

import React, { useState } from 'react';

interface CurriculumSectionProps {
  onDownloadSyllabus: () => void;
}

export default function CurriculumSection({ onDownloadSyllabus }: CurriculumSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    {
      id: 'seo',
      num: '01',
      title: 'SEO & Search AI (AEO / GEO)',
      shortTitle: 'SEO & AEO',
      badge: 'Modules 01 - 12',
      headline: 'Master Technical SEO, Local SEO & AI Overviews (AEO)',
      desc: 'Rank #1 on Google Organic & AI Search engines (Perplexity, Google AI Overviews). Learn keyword intent, technical crawlability, and backlink authority.',
      tools: ['Semrush', 'Ahrefs', 'Google Search Console', 'Screaming Frog', 'Yoast SEO', 'Perplexity'],
      topics: [
        'Advanced Keyword Research & Search Intent Mapping',
        'On-Page SEO Optimization & Schema Markup (JSON-LD)',
        'Technical SEO: Core Web Vitals, Crawl Budget & Indexing',
        'Google Business Profile (GBP) & Local 3-Pack Domination',
        'Answer Engine Optimization (AEO) & LLM Optimization (LLMO)',
        'High-Authority Link Building & Outreach Strategy',
      ],
    },
    {
      id: 'google-ads',
      num: '02',
      title: 'Google Ads & Performance SEM',
      shortTitle: 'Google Ads',
      badge: 'Modules 13 - 22',
      headline: 'Run High-ROI Search, Display & Performance Max Campaigns',
      desc: 'Learn how to spend ad budgets profitably. Set up smart bidding, keyword match types, negative lists, conversion tracking, and YouTube video ads.',
      tools: ['Google Ads', 'Google Tag Manager', 'Google Merchant Center', 'SpyFu'],
      topics: [
        'Search Campaigns: Match Types, Ad Copy & Quality Score (10/10)',
        'Performance Max (PMax) Campaigns for E-Commerce & Leads',
        'Display Network & YouTube Video Action Campaigns',
        'Google Shopping Ads & Feed Management',
        'Conversion Tracking via Google Tag Manager (GTM)',
        'Negative Keyword Funnels & ROAS Maximization',
      ],
    },
    {
      id: 'meta-ads',
      num: '03',
      title: 'Meta Ads & Social Media Growth',
      shortTitle: 'Meta Ads',
      badge: 'Modules 23 - 32',
      headline: 'Scale Facebook & Instagram Ads with Advantage+ & CBO',
      desc: 'Master Meta Ads Manager. Create high-converting creative hooks, retargeting funnels, custom lookalike audiences, and organic viral reels.',
      tools: ['Meta Ads Manager', 'Meta Business Suite', 'Canva Pro', 'CapCut Pro'],
      topics: [
        'Meta Ads Structure: TOFU, MOFU, BOFU Funnel Architecture',
        'Advantage+ Shopping Campaigns & Campaign Budget Optimization (CBO)',
        'High-Converting Ad Creatives, Hooks & Scriptwriting',
        'Custom Audiences, Lookalikes & Conversions API (CAPI)',
        'Instagram Algorithm Hacking & Viral Reel Strategies',
        'LinkedIn Ads for B2B Lead Generation & Account-Based Marketing',
      ],
    },
    {
      id: 'ai-marketing',
      num: '04',
      title: 'Generative AI & Marketing Automation',
      shortTitle: 'AI Tools',
      badge: 'Modules 33 - 42',
      headline: 'Leverage 60+ AI Tools to Automate Content & Campaigns',
      desc: 'Stop doing manual repetitive work. Learn prompt engineering, autonomous marketing agents, AI visual generation, and automated CRM workflows.',
      tools: ['ChatGPT-4o', 'Google Gemini', 'Perplexity', 'Midjourney', 'Make.com', 'Zapier'],
      topics: [
        'Advanced Prompt Engineering for Copywriting & Marketing Strategy',
        'AI-Powered Competitor Analysis & Market Research with Gemini',
        'Automated Visual & Banner Creation with Midjourney & Canva AI',
        'No-Code Marketing Automations with Make.com & Zapier',
        'Building Custom AI Agents for Customer Support & Lead Qualification',
        'AI Voiceovers & Video Generation for TikTok/Reels/Shorts',
      ],
    },
    {
      id: 'analytics',
      num: '05',
      title: 'Google Analytics 4 & Data Tracking',
      shortTitle: 'Analytics GA4',
      badge: 'Modules 43 - 50',
      headline: 'Data-Driven Marketing Decisions with GA4 & Looker Studio',
      desc: 'Master modern event-based tracking. Measure user journeys, drop-offs, attribution models, and build automated client reporting dashboards.',
      tools: ['Google Analytics 4', 'Google Tag Manager', 'Looker Studio', 'Excel / Sheets'],
      topics: [
        'GA4 Architecture: Events, Parameters & User Properties',
        'Cross-Domain Tracking & E-Commerce Purchase Funnels',
        'Multi-Touch Attribution Modeling & Assisted Conversions',
        'Google Tag Manager Advanced Server-Side Tracking',
        'Building Automated Client Dashboards in Looker Studio',
        'Cohort Analysis & Retention Metrics for Growth',
      ],
    },
    {
      id: 'wordpress-web',
      num: '06',
      title: 'WordPress Web & E-Commerce',
      shortTitle: 'Web & Store',
      badge: 'Modules 51 - 58',
      headline: 'Build High-Converting Landing Pages & Online Stores',
      desc: 'No coding required. Learn drag-and-drop website architecture, conversion-focused landing pages, WooCommerce setup, and payment gateway integration.',
      tools: ['WordPress', 'Elementor Pro', 'WooCommerce', 'Shopify', 'Razorpay'],
      topics: [
        'Domain, Hosting, SSL & WordPress Installation',
        'Landing Page Design Principles for 15%+ Conversion Rates',
        'Elementor Pro Drag-and-Drop Page Builder Mastery',
        'WooCommerce Store Setup, Product Catalogs & Shipping',
        'Razorpay & PayU Payment Gateway Integration',
        'Website Speed Optimization (Under 1.5s Load Time)',
      ],
    },
    {
      id: 'content-email',
      num: '07',
      title: 'Content Writing & Email Funnels',
      shortTitle: 'Content & Email',
      badge: 'Modules 59 - 64',
      headline: 'Copywriting That Converts & Automated Email Sequences',
      desc: 'Write compelling sales letters, high-converting ad copy, engaging newsletters, and automated drip sequences that nurture cold leads into paid clients.',
      tools: ['HubSpot', 'Mailchimp', 'Grammarly AI', 'Hemingway'],
      topics: [
        'Direct-Response Copywriting Frameworks: AIDA, PAS & BAB',
        'Email Deliverability: SPF, DKIM, DMARC & Spam Prevention',
        'Automated Welcome & Abandoned Cart Drip Campaigns',
        'Lead Magnets Creation & List Building Strategies',
        'WhatsApp Marketing & Automated Broadcast Workflows',
      ],
    },
    {
      id: 'performance-strategy',
      num: '08',
      title: 'Performance Marketing & Freelancing',
      shortTitle: 'Agency & Career',
      badge: 'Modules 65 - 70',
      headline: 'Agency Operations, Client Acquisition & Freelance Career',
      desc: 'How to land high-paying clients, pitch proposals, calculate blended CAC and LTV, and launch your own digital marketing agency or freelance profile.',
      tools: ['Upwork', 'Fiverr', 'LinkedIn', 'Pitch Decks', 'Notion'],
      topics: [
        'Unit Economics: CAC, LTV, ROAS & Blended MER Calculation',
        'Agency Client Pitch Deck & Retainer Proposal Creation',
        'Freelancing on Upwork & Fiverr: Bidding & Profile Optimization',
        'Personal Branding on LinkedIn to Attract Inbound Leads',
        'Managing Paid Ad Budgets of ₹10 Lakh+ Safely',
        'Mock Interview Drills with Industry Hiring Managers',
      ],
    },
  ];

  const currentCategory = categories[activeTab];

  return (
    <section id="curriculum" className="py-20 bg-white relative border-b border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-block px-3.5 py-1 rounded-full bg-[#f5edfa] border border-[#ebdcf5] text-[#4b1864] text-xs font-bold uppercase tracking-wider">
            2026 AI-Integrated Syllabus
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight">
            Explore The Comprehensive <br />
            <span className="heading-gradient">
              70-Module Curriculum
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#554266]">
            Designed by industry practitioners to match current agency requirements. Click across categories to preview what you will master.
          </p>

          <div className="pt-2">
            <button
              onClick={onDownloadSyllabus}
              className="px-6 py-3 rounded-xl bg-[#4b1864] hover:bg-[#38104c] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Download Detailed 70-Module PDF Syllabus
            </button>
          </div>
        </div>

        {/* Category Tabs without icons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
          {categories.map((cat, idx) => {
            const isSelected = activeTab === idx;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(idx)}
                className={`p-3 rounded-xl flex flex-col items-center text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#4b1864] text-white shadow-md'
                    : 'bg-[#faf7fc] border border-[#ebdcf5] text-[#4b1864] hover:bg-[#f5edfa]'
                }`}
              >
                <span className={`text-[11px] font-mono font-bold mb-0.5 ${isSelected ? 'text-[#fde047]' : 'text-[#665675]'}`}>
                  {cat.num}
                </span>
                <span className="text-xs font-bold leading-tight">
                  {cat.shortTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Deep Dive Panel */}
        <div className="da-card rounded-2xl p-6 sm:p-9 border border-[#ebdcf5] relative bg-[#faf7fc]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#ebdcf5]">
            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase px-3 py-1 rounded-full bg-white text-[#4b1864] border border-[#ebdcf5]">
                {currentCategory.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#200e30] tracking-tight">
                {currentCategory.headline}
              </h3>
              <p className="text-xs sm:text-sm text-[#554266] max-w-3xl leading-relaxed">
                {currentCategory.desc}
              </p>
            </div>

            <button
              onClick={onDownloadSyllabus}
              className="shrink-0 px-5 py-2.5 rounded-xl bg-white hover:bg-[#f5edfa] border border-[#ebdcf5] text-[#4b1864] text-xs font-bold transition-colors cursor-pointer shadow-sm"
            >
              Get Module Notes (PDF)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {/* Left: Topics Covered */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#4b1864]">
                Core Topics &amp; Practical Competencies:
              </h4>
              <div className="space-y-2.5">
                {currentCategory.topics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#38264a]">
                    <span className="text-[#047857] font-bold">✓</span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Tools & Deliverables */}
            <div className="space-y-4 bg-white p-5 sm:p-6 rounded-xl border border-[#ebdcf5]">
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#4b1864] mb-2">
                  Tools &amp; Platforms Mastered in this Track:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentCategory.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-[#faf7fc] border border-[#ebdcf5] text-xs font-semibold text-[#200e30]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#ebdcf5] space-y-1">
                <span className="text-[11px] font-bold text-[#b45309] uppercase tracking-wider">
                  Live Portfolio Project:
                </span>
                <p className="text-xs text-[#554266] leading-relaxed">
                  Every module concludes with a verified brand assignment submitted to your mentor for review and added to your recruiter-ready portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
