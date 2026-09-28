'use client';

import React, { useState } from 'react';

interface CourseLevelsSectionProps {
  onSelectCourse: (courseName: string) => void;
}

export default function CourseLevelsSection({ onSelectCourse }: CourseLevelsSectionProps) {
  const [mode, setMode] = useState<'offline' | 'online'>('offline');

  const courses = [
    {
      id: 'expert',
      title: 'Expert in Digital Marketing',
      level: 'Master Flagship Track',
      duration: '12 Months',
      modules: '70 Modules',
      aiTools: '60+ AI Tools',
      projects: '10 Live Brand Projects',
      ratings: '4.9 Rating (4,337 reviews)',
      popular: true,
      role: 'Digital Marketing Strategist / CMO',
      description: 'India\'s most comprehensive 12-month program. Master end-to-end digital strategy, agency workflows, paid ad scaling with ₹10+ Lakh budgets, and paid in-house agency internship.',
      pricing: {
        offline: { actual: '₹1,35,000', discount: '₹95,000', save: '₹40,000' },
        online: { actual: '₹95,000', discount: '₹90,000', save: '₹5,000' },
      },
      highlights: [
        '70 Comprehensive Modules with 60+ AI Tools',
        'Guaranteed Paid In-House Agency Internship',
        '10 Live Brand Campaigns with Real Ad Budgets',
        '10+ Global Certifications (Google, Meta, HubSpot)',
        '1-on-1 Mentorship with Agency Directors',
        '100% Placement Assistance until placed',
        'Weekend & Weekday Flexible Batches',
      ],
    },
    {
      id: 'advanced',
      title: 'Advanced Digital Marketing Course',
      level: 'Career Switcher Track',
      duration: '6 Months',
      modules: '60 Modules',
      aiTools: '54+ AI Tools',
      projects: '7 Live Brand Campaigns',
      ratings: '4.9 Rating (7,310 reviews)',
      popular: false,
      role: 'Performance Marketer / SEO Specialist',
      description: 'Ideal for graduates and career switchers looking to build verified portfolio expertise across SEO, Google Ads, Meta Ads, and AI automation in 6 months.',
      pricing: {
        offline: { actual: '₹65,000', discount: '₹50,000', save: '₹15,000' },
        online: { actual: '₹50,000', discount: '₹45,000', save: '₹5,000' },
      },
      highlights: [
        '60 Detailed Modules & 54+ AI Tools',
        'Live Client Ad Accounts Execution',
        'Advanced Technical SEO & Looker Studio GA4',
        'Social Media Growth & Reel Marketing',
        'Dedicated Placement Drive Connections',
        'Small Batches (Max 15 Students)',
      ],
    },
    {
      id: 'professionals',
      title: 'Digital Marketing For Professionals',
      level: 'Fast-Track Working Execs',
      duration: '4 Months',
      modules: '40 Modules',
      aiTools: '50+ AI Tools',
      projects: '5 Live Projects',
      ratings: '4.9 Rating (5,400 reviews)',
      popular: false,
      role: 'Growth Marketing Manager',
      description: 'Designed for working professionals in sales, IT, or traditional marketing who want to master modern digital ROI, lead gen funnels, and AI automation on weekends.',
      pricing: {
        offline: { actual: '₹40,000', discount: '₹35,000', save: '₹5,000' },
        online: { actual: '₹35,000', discount: '₹30,000', save: '₹5,000' },
      },
      highlights: [
        '40 High-Impact Modules + 50+ AI Tools',
        'Weekend Saturday/Sunday Special Batches',
        'Performance Marketing & CRO Optimization',
        'Resume Reconstruction & Salary Hike Guidance',
        'Recorded Class Vault on Advanced LMS',
      ],
    },
    {
      id: 'beginners',
      title: 'Digital Marketing For Beginners',
      level: 'Foundation Track',
      duration: '3 Months',
      modules: '30 Modules',
      aiTools: '40+ AI Tools',
      projects: '4 Guided Projects',
      ratings: '4.9 Rating (2,349 reviews)',
      popular: false,
      role: 'Digital Marketing Executive / Trainee',
      description: 'Zero technical or coding background needed. Start from digital fundamentals, content creation, Canva design, basic SEO, and beginner ad campaigns.',
      pricing: {
        offline: { actual: '₹35,000', discount: '₹30,000', save: '₹5,000' },
        online: { actual: '₹30,000', discount: '₹25,000', save: '₹5,000' },
      },
      highlights: [
        '30 Foundational Modules & 40+ AI Tools',
        'Zero Prior Experience or Coding Needed',
        'Website Creation with WordPress & Elementor',
        'Google & Meta Certification Preparation',
        'Mock Interview Drills & Resume Building',
      ],
    },
  ];

  return (
    <section id="courses" className="py-20 bg-white relative border-b border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#f5edfa] border border-[#ebdcf5] text-[#4b1864] text-xs font-bold uppercase tracking-wider">
            Choose Your Learning Path
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#200e30] tracking-tight">
            4 Comprehensive Course Levels <br />
            <span className="text-[#4b1864]">
              Tailored For Your Career Goal
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#554266]">
            Compare duration, modules, AI tools coverage, and fees to find the perfect fit. All programs include live brand campaigns &amp; verified certifications.
          </p>

          {/* Mode Switcher */}
          <div className="inline-flex items-center bg-[#f5edfa] p-1.5 rounded-2xl border border-[#ebdcf5] mt-3">
            <button
              onClick={() => setMode('offline')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                mode === 'offline'
                  ? 'bg-[#4b1864] text-white shadow-md'
                  : 'text-[#4b1864] hover:text-[#200e30]'
              }`}
            >
              Offline Classroom (Delhi GK-II)
            </button>
            <button
              onClick={() => setMode('online')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                mode === 'online'
                  ? 'bg-[#4b1864] text-white shadow-md'
                  : 'text-[#4b1864] hover:text-[#200e30]'
              }`}
            >
              Online Live Interactive Batch
            </button>
          </div>
        </div>

        {/* 4 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => {
            const price = course.pricing[mode];
            return (
              <div
                key={course.id}
                className={`da-card rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#4b1864] ${
                  course.popular ? 'border-2 border-[#4b1864] shadow-xl' : ''
                }`}
              >
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-[#f5edfa] text-[#4b1864] border border-[#ebdcf5]">
                      {course.level}
                    </span>
                    {course.popular && (
                      <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-[#fef3c7] text-[#92400e]">
                        Most Recommended
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#200e30] tracking-tight">
                      {course.title}
                    </h3>
                    <p className="text-xs text-[#b45309] font-bold mt-1">
                      Target Role: {course.role} • {course.ratings}
                    </p>
                  </div>

                  {/* Badges Strip without icons */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="px-3 py-1 rounded-lg bg-[#faf7fc] text-[11px] font-bold text-[#4b1864] border border-[#ebdcf5]">
                      Duration: {course.duration}
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-[#faf7fc] text-[11px] font-bold text-[#4b1864] border border-[#ebdcf5]">
                      {course.modules}
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-[#faf7fc] text-[11px] font-bold text-[#4b1864] border border-[#ebdcf5]">
                      {course.aiTools}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#554266] leading-relaxed">
                    {course.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2 pt-2 border-t border-[#ebdcf5]">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#4b1864] block">
                      Key Highlights:
                    </span>
                    <div className="space-y-1.5">
                      {course.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#38264a]">
                          <span className="text-[#047857] font-bold">✓</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing Box & CTA */}
                <div className="p-6 bg-[#faf7fc] border-t border-[#ebdcf5] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-black text-[#200e30]">
                        {price.discount}
                      </span>
                      <span className="text-sm line-through text-slate-400">
                        {price.actual}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#047857] font-bold">
                      Save {price.save} with Early Bird Offer ({mode.toUpperCase()})
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectCourse(course.title)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#4b1864] hover:bg-[#38104c] text-white font-extrabold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    Enroll in {course.duration}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Special Initiative Cards in Light Theme */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-[#faf7fc] border border-[#ebdcf5] flex flex-col justify-between space-y-4 hover:border-[#4b1864] transition-all">
            <div className="space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#fef3c7] text-[#92400e] text-[10px] font-extrabold uppercase">
                100% Free Offer
              </span>
              <h4 className="text-xl font-black text-[#200e30] tracking-tight">
                1 Month Free Module
              </h4>
              <p className="text-xs text-[#554266] leading-relaxed">
                Get started with our foundational digital marketing module completely free. Experience the trainer quality and campus with zero risk or fee commitment.
              </p>
            </div>
            <button
              onClick={() => onSelectCourse('1 Month Free Starter Module')}
              className="w-full py-2.5 rounded-xl bg-white hover:bg-[#f5edfa] border border-[#ebdcf5] text-[#4b1864] font-bold text-xs transition-colors"
            >
              Claim Free 1-Month Module
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-[#faf7fc] border border-[#ebdcf5] flex flex-col justify-between space-y-4 hover:border-[#4b1864] transition-all">
            <div className="space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#e0f2fe] text-[#0369a1] text-[10px] font-extrabold uppercase">
                Agency Internship
              </span>
              <h4 className="text-xl font-black text-[#200e30] tracking-tight">
                1–3 Month Agency Internship
              </h4>
              <p className="text-xs text-[#554266] leading-relaxed">
                Join our certified in-house digital marketing agency internship. Work on live client accounts, manage campaign optimization, and earn a verified work experience certificate.
              </p>
            </div>
            <button
              onClick={() => onSelectCourse('Summer Agency Internship')}
              className="w-full py-2.5 rounded-xl bg-white hover:bg-[#f5edfa] border border-[#ebdcf5] text-[#4b1864] font-bold text-xs transition-colors"
            >
              Apply for Internship
            </button>
          </div>

          <div className="p-6 rounded-2xl bg-[#faf7fc] border border-[#ebdcf5] flex flex-col justify-between space-y-4 hover:border-[#4b1864] transition-all">
            <div className="space-y-2">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#dcfce7] text-[#15803d] text-[10px] font-extrabold uppercase">
                Every Week Live
              </span>
              <h4 className="text-xl font-black text-[#200e30] tracking-tight">
                Weekly Masterclasses
              </h4>
              <p className="text-xs text-[#554266] leading-relaxed">
                Attend open weekly live workshops on trending topics — AI SEO updates, Google Gemini prompts, Meta Advantage+ bidding, and career roadmaps with Dr. Gulshan Kumar.
              </p>
            </div>
            <button
              onClick={() => onSelectCourse('Weekly Free Live Workshop')}
              className="w-full py-2.5 rounded-xl bg-white hover:bg-[#f5edfa] border border-[#ebdcf5] text-[#4b1864] font-bold text-xs transition-colors"
            >
              Register for Next Workshop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
