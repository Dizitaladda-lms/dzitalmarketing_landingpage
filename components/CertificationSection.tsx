'use client';

import React, { useState, useEffect } from 'react';

interface CertificationSectionProps {
  onOpenModal: () => void;
}

export default function CertificationSection({ onOpenModal }: CertificationSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const certificates = [
    {
      id: 1,
      title: 'DizitalAdda Executive Certificate in Digital Marketing & AI',
      issuer: 'DizitalAdda Academy (Govt. Recognized)',
      desc: 'Demonstrates end-to-end campaign execution across 70 modules with verified portfolio score & QR authenticity verification.',
      image: 'https://dizitaladda.com/courses/images/certificates/1.webp',
    },
    {
      id: 2,
      title: 'Google Ads Search Certification',
      issuer: 'Google Skillshop',
      desc: 'Validates mastery of Google Search campaigns, smart bidding, keyword architecture, and quality score optimization.',
      image: 'https://dizitaladda.com/courses/images/certificates/2.webp',
    },
    {
      id: 3,
      title: 'Meta Certified Digital Marketing Associate',
      issuer: 'Meta Blueprint',
      desc: 'Global certification confirming expertise in Meta advertising across Facebook, Instagram, and Advantage+ campaigns.',
      image: 'https://dizitaladda.com/courses/images/certificates/3.webp',
    },
    {
      id: 4,
      title: 'HubSpot Inbound Marketing Certification',
      issuer: 'HubSpot Academy',
      desc: 'Industry standard in content marketing, lead generation funnels, email nurturing, and customer lifecycle management.',
      image: 'https://dizitaladda.com/courses/images/certificates/4.webp',
    },
    {
      id: 5,
      title: 'Semrush SEO Toolkit Professional',
      issuer: 'Semrush Academy',
      desc: 'Proves advanced competency in competitor keyword gap analysis, backlink audits, and on-page technical optimization.',
      image: 'https://dizitaladda.com/courses/images/certificates/5.webp',
    },
    {
      id: 6,
      title: 'Skill India & Digital India Certificate',
      issuer: 'NSDC / Govt. of India',
      desc: 'Government recognized skill certification verifying job-readiness for private and public sector opportunities.',
      image: 'https://dizitaladda.com/courses/images/certificates/6.webp',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % certificates.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [certificates.length]);

  return (
    <section id="certifications" className="py-20 bg-[#faf7fc] relative overflow-hidden border-t border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#f3e8fa] border border-[#ebdcf5] text-[#4b1864] text-xs font-bold uppercase tracking-wider">
              Industry Recognized Credentials
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight leading-tight">
              DizitalAdda&apos;s Certification <br />
              <span className="heading-gradient">
                Helps You Get Hired!
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#5e4b6d] leading-relaxed">
              DizitalAdda&apos;s <strong className="text-[#200e30]">Expert Digital Marketing Certification</strong> is awarded with a verified portfolio of real campaign results, not just a score on a multiple-choice quiz. Backed by live project evidence that every recruiter can verify online.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-[#5e4b6d] text-left">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#4b1864] shrink-0 mt-1.5" />
                <span><strong className="text-[#200e30]">10+ Verified Credentials:</strong> Google Ads, Meta Blueprint, HubSpot, Semrush, Skill India, and DizitalAdda.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#4b1864] shrink-0 mt-1.5" />
                <span><strong className="text-[#200e30]">QR Code Verified:</strong> Recruiters can scan the QR code to view your verified live campaign metrics and portfolio.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#4b1864] shrink-0 mt-1.5" />
                <span><strong className="text-[#200e30]">LinkedIn Credential Integration:</strong> Direct 1-click addition to your LinkedIn profile licenses &amp; certifications.</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#4b1864] hover:bg-[#3d1252] text-white font-extrabold text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                Check Your Certificate Eligibility
              </button>
            </div>
          </div>

          {/* Right Certificate Showcase Carousel */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#ebdcf5] shadow-lg relative">
              <div className="relative rounded-xl overflow-hidden bg-[#faf7fc] border border-[#ebdcf5] aspect-[4/3] flex items-center justify-center">
                <img
                  src={certificates[currentSlide].image}
                  alt={certificates[currentSlide].title}
                  className="w-full h-full object-contain p-2"
                  onError={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-sm border-t border-[#ebdcf5] p-4 text-left">
                  <span className="text-[10px] uppercase font-bold text-[#4b1864] px-2 py-0.5 rounded bg-[#f3e8fa] border border-[#ebdcf5] inline-block mb-1">
                    {certificates[currentSlide].issuer}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-[#200e30] tracking-tight">
                    {certificates[currentSlide].title}
                  </h4>
                  <p className="text-[11px] text-[#5e4b6d] mt-1 line-clamp-2">
                    {certificates[currentSlide].desc}
                  </p>
                </div>
              </div>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between pt-4 mt-2">
                <button
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + certificates.length) % certificates.length)}
                  className="px-3 py-1.5 rounded-lg bg-[#faf7fc] hover:bg-[#f3e8fa] border border-[#ebdcf5] text-[#200e30] text-sm font-bold"
                  aria-label="Previous certificate"
                >
                  Prev
                </button>

                <div className="flex gap-1.5">
                  {certificates.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-2 rounded-full transition-all ${
                        currentSlide === i ? 'w-6 bg-[#4b1864]' : 'w-2 bg-[#ebdcf5]'
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % certificates.length)}
                  className="px-3 py-1.5 rounded-lg bg-[#faf7fc] hover:bg-[#f3e8fa] border border-[#ebdcf5] text-[#200e30] text-sm font-bold"
                  aria-label="Next certificate"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
