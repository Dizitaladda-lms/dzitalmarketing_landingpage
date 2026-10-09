'use client';

import React from 'react';

interface FooterProps {
  onOpenModal: () => void;
  onOpenAdmin: () => void;
}

export default function Footer({ onOpenModal, onOpenAdmin }: FooterProps) {
  return (
    <footer className="bg-white border-t border-[#ebdcf5] pt-12 pb-24 sm:pb-12 text-[#5e4b6d] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://dizitaladda.com/logo.png"
                alt="DizitalAdda Logo"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>

            <p className="text-[#5e4b6d] leading-relaxed text-xs max-w-sm">
              Delhi&apos;s #1 most recommended digital marketing training institute since 2009. Training 25,000+ students in SEO, Google Ads, Meta Ads, GA4, and 60+ AI tools with a 97% placement record.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-[#4b1864]">
              <span className="px-2.5 py-1 rounded-md bg-[#f3e8fa] border border-[#ebdcf5] font-semibold">
                Indian Icon Awardee
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#f3e8fa] border border-[#ebdcf5] font-semibold">
                Rated 4.9/5 on Google
              </span>
            </div>
          </div>

          {/* Col 2: Campus Details */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-sm font-bold text-[#200e30] uppercase tracking-wider">
              Delhi Campus &amp; Training Center
            </h4>
            <div className="text-xs text-[#5e4b6d] leading-relaxed">
              2nd Floor, Spacetime Management Pvt Ltd Design House, Savitri Cinema Complex, Greater Kailash II, New Delhi 110048
            </div>
            <div className="text-xs text-[#200e30] font-medium pt-1">
              Phone: <a href="tel:+918810606010" className="hover:text-[#4b1864] transition-colors underline">+91 8810606010</a></div>
            <div className="text-xs text-[#5e4b6d]">
              Email: info@dizitaladda.com
            </div>
          </div>

          {/* Col 3: Quick Action & Counselling */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#200e30] uppercase tracking-wider">
              Admission Helpline
            </h4>
            <p className="text-xs text-[#5e4b6d]">
              Batches fill on a first-come, first-served basis (max 15 seats per cohort).
            </p>
            <button
              onClick={onOpenModal}
              className="w-full py-2.5 rounded-xl bg-[#4b1864] hover:bg-[#3d1252] text-white font-bold text-xs shadow-sm transition-all hover:scale-105 cursor-pointer"
            >
              Request Fast Callback
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[11px] text-[#8a7a99] leading-relaxed border-t border-[#ebdcf5] pt-4">
          Empowering careers through industry-aligned education and cutting-edge technology.
        </p>

        <p className="text-[11px] text-[#8a7a99] leading-relaxed border-t border-[#ebdcf5] pt-4">
          Disclaimer: Program outcomes and salary hikes depend on student dedication, project submissions, technical assessment performance, and interview preparation. 100% placement support indicates continuous mentorship, profile optimization, and referral drives through our network of 250+ hiring partners.
        </p>

        {/* Bottom Bar with Admin Lead Viewer Trigger & Policy Links */}
        <div className="pt-4 border-t border-[#ebdcf5] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#8a7a99]">
          <div className="flex flex-wrap items-center gap-4">
            <span>&copy; {new Date().getFullYear()} DizitalAdda. All rights reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <a href="https://dizitaladda.com/terms-of-use" className="hover:text-[#4b1864] transition-colors">Terms of Service</a>
            <span className="hidden sm:inline">&bull;</span>
            <a href="https://dizitaladda.com/privacy-policy" className="hover:text-[#4b1864] transition-colors">Privacy Policy</a>
            <span className="hidden sm:inline">&bull;</span>
            <a href="#" className="hover:text-[#4b1864] transition-colors">Contact Us</a>
          </div>

          <div className="flex items-center gap-4">
          </div>
        </div>
      </div>
    </footer>
  );
}
