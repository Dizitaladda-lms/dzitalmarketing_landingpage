'use client';

import React, { useState } from 'react';

interface HeroSectionProps {
  onLeadSuccess: (data: any) => void;
}

export default function HeroSection({ onLeadSuccess }: HeroSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: 'Digital Marketing For Beginners (3 Months)',
    mode: 'Offline — GK-II, South Delhi',
    experience: 'Student / Fresh Graduate',
    wantsSyllabus: true,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Device rate limiter: Max 2 submissions per 60 seconds
    const now = Date.now();
    let subTimes: number[] = [];
    try {
      subTimes = JSON.parse(localStorage.getItem('da_lead_sub_times') || '[]');
    } catch {
      subTimes = [];
    }
    const recentSubmissions = subTimes.filter((t: number) => now - t < 60000);
    if (recentSubmissions.length >= 2) {
      const waitSeconds = Math.max(1, Math.ceil((recentSubmissions[0] + 60000 - now) / 1000));
      setErrorMessage(`1 minute ke andar same device se maximum 2 leads submit ho sakti hain. Kripya ${waitSeconds} second baad try karein.`);
      return;
    }

    setLoading(true);

    try {
      let deviceId = '';
      try {
        deviceId = localStorage.getItem('da_device_id') || '';
        if (!deviceId) {
          deviceId = 'dev_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
          localStorage.setItem('da_device_id', deviceId);
        }
      } catch {
        // Fallback
      }

      const urlParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;

      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        course: formData.course,
        mode: formData.mode,
        experience: formData.experience,
        deviceId,
        source: 'Hero Above-The-Fold Form',
        utm_source: urlParams?.get('utm_source') || undefined,
        utm_medium: urlParams?.get('utm_medium') || undefined,
        utm_campaign: urlParams?.get('utm_campaign') || undefined,
        landing_page_url: typeof window !== 'undefined' ? window.location.href : 'https://dizitaladda.com/digital-marketing',
        timestamp: new Date().toISOString(),
      };

      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const resData = await res.json().catch(() => null);

      if (res.status === 429) {
        setErrorMessage(resData?.message || 'Rate limit reached. Please wait a minute.');
        setLoading(false);
        return;
      }

      if (!res.ok) {
        setErrorMessage(resData?.error || 'Form submission failed. Please try again.');
        setLoading(false);
        return;
      }

      recentSubmissions.push(now);
      localStorage.setItem('da_lead_sub_times', JSON.stringify(recentSubmissions));

      const existingLeads = JSON.parse(localStorage.getItem('da_leads') || '[]');
      existingLeads.unshift({
        ...payload,
        submittedAt: new Date().toLocaleString('en-IN'),
      });
      localStorage.setItem('da_leads', JSON.stringify(existingLeads));

      setSubmitted(true);
      setLoading(false);
      onLeadSuccess(payload);
    } catch (err: any) {
      setErrorMessage('Something went wrong. Please check connection and try again.');
      setLoading(false);
    }
  };

  return (
    <section className="relative pt-6 pb-12 sm:pt-8 sm:pb-14 bg-gradient-to-b from-[#faf7fc] via-[#f7f1fb] to-[#faf7fc] border-b border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Left Column: Headlines & Subheading (PW Skills Text & Alignment) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            {/* Single Continuous Running Line Ticker for Skill India & Awards (Clean Text - No Icons) */}
            <div className="w-full overflow-hidden select-none py-1 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
              <div className="flex gap-2.5 sm:gap-3 animate-marquee shrink-0 items-center whitespace-nowrap">
                {[
                  { label: 'Skill India • Govt. Recognized', isGovt: true },
                  { label: 'Indian Icon Award — by Dr. Kiran Bedi', isGovt: false },
                  { label: 'Bharat Business Award — by Ashneer Grover', isGovt: false },
                  { label: 'The Excellence Award — Hotel School', isGovt: false },
                  { label: 'Skill India • Govt. Recognized', isGovt: true },
                  { label: 'Indian Icon Award — by Dr. Kiran Bedi', isGovt: false },
                  { label: 'Bharat Business Award — by Ashneer Grover', isGovt: false },
                  { label: 'The Excellence Award — Hotel School', isGovt: false },
                  { label: 'Skill India • Govt. Recognized', isGovt: true },
                  { label: 'Indian Icon Award — by Dr. Kiran Bedi', isGovt: false },
                  { label: 'Bharat Business Award — by Ashneer Grover', isGovt: false },
                  { label: 'The Excellence Award — Hotel School', isGovt: false },
                  { label: 'Skill India • Govt. Recognized', isGovt: true },
                  { label: 'Indian Icon Award — by Dr. Kiran Bedi', isGovt: false },
                  { label: 'Bharat Business Award — by Ashneer Grover', isGovt: false },
                  { label: 'The Excellence Award — Hotel School', isGovt: false },
                ].map((badge, idx) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center text-[11px] sm:text-xs font-bold px-3 py-1 sm:py-1.5 rounded-full border shadow-sm whitespace-nowrap shrink-0 ${
                      badge.isGovt
                        ? 'bg-[#f5edfa] border-[#ebdcf5] text-[#4b1864]'
                        : 'bg-white border-[#ebdcf5] text-[#4b1864]'
                    }`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111827] leading-tight tracking-tight">
              Master <span className="heading-gradient">Digital Marketing</span> with AI
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#554266] leading-relaxed font-medium">
              Learn <strong className="text-[#4b1864] font-bold">AI-Powered Marketing Tools</strong>, work on <strong className="text-[#4b1864] font-bold">Real-World Client Projects</strong>, and grow your career with <strong className="text-[#4b1864] font-bold">100% Placement Assistance</strong> through the <strong className="text-[#200e30] font-black">DizitalAdda</strong> Certified Digital Marketing Course.
            </p>

            {/* Key Benefits List with Highlighted Keywords (No Icons) */}
            <ul className="space-y-3 pt-2 text-left">
              <li className="flex items-start gap-2.5 text-sm sm:text-base lg:text-lg text-[#200e30]">
                <span className="text-[#4b1864] font-black text-lg leading-none mt-0.5">•</span>
                <span><strong className="text-[#4b1864] font-extrabold">Generative AI Integrated</strong> Curriculum (70 Modules)</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm sm:text-base lg:text-lg text-[#200e30]">
                <span className="text-[#4b1864] font-black text-lg leading-none mt-0.5">•</span>
                <span><strong className="text-[#4b1864] font-extrabold">3 Months Duration</strong> | Live Interactive + Classroom Batches</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm sm:text-base lg:text-lg text-[#200e30]">
                <span className="text-[#4b1864] font-black text-lg leading-none mt-0.5">•</span>
                <span><strong className="text-[#4b1864] font-extrabold">100% Placement Support</strong> with Dedicated Career Drives</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Clean Light Theme Lead Capture Form */}
          <div className="lg:col-span-5">
            <div className="bg-white border-2 border-[#ebdcf5] rounded-2xl p-5 sm:p-7 shadow-xl shadow-[#4b1864]/5 relative form-card-shadow">
              <div className="text-left mb-5">
                <h3 className="text-xl sm:text-2xl font-black text-[#200e30] tracking-tight leading-snug">
                  Start Your <span className="heading-gradient">AI + Digital Marketing</span> Journey
                </h3>
                <p className="text-xs sm:text-sm text-[#554266] font-medium mt-1">
                  Get course details, syllabus and a free demo session.
                </p>
              </div>

              {submitted ? (
                <div className="bg-[#f5edfa] border border-[#ebdcf5] rounded-xl p-6 text-center space-y-3">
                  <h4 className="text-lg font-bold text-[#4b1864]">Application Received!</h4>
                  <p className="text-xs text-[#554266]">
                    Our Senior Academic Counsellor will contact you within 15 minutes. We are also sending the syllabus to your WhatsApp number.
                  </p>
                  <a
                    href="https://wa.me/918810606010?text=Hi%20DizitalAdda,%20I%20just%20submitted%20the%20Digital%20Marketing%20form.%20Please%20send%20me%20the%20curriculum%20and%20fee%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full py-2.5 rounded-lg bg-[#4b1864] hover:bg-[#38104c] text-white font-bold text-xs shadow-md transition-colors"
                  >
                    Open WhatsApp Chat Directly
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#38264a] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-full bg-[#faf7fc] border border-[#ebdcf5] focus:border-[#4b1864] text-[#200e30] text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#4b1864]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#38264a] mb-1.5">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                      className="w-full px-4 py-2.5 rounded-full bg-[#faf7fc] border border-[#ebdcf5] focus:border-[#4b1864] text-[#200e30] text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#4b1864]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#38264a] mb-1.5">
                      Select Course *
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-full bg-[#faf7fc] border border-[#ebdcf5] focus:border-[#4b1864] text-[#200e30] text-xs sm:text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-[#4b1864]"
                    >
                      <option value="Digital Marketing For Beginners (3 Months)">Beginners (3 Months)</option>
                      <option value="Digital Marketing For Professionals (4 Months)">Professionals (4 Months)</option>
                      <option value="Advanced Digital Marketing (6 Months)">Advanced (6 Months - 60 Modules)</option>
                      <option value="Expert in Digital Marketing (12 Months)">Expert (12 Months - 70 Modules)</option>
                      <option value="Graduation in Dizital Marketing (3 years)">Graduation in Dizital Marketing (3 years)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-[#38264a] mb-2">
                      Preferred Learning Mode *
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2.5 cursor-pointer text-xs sm:text-sm font-bold text-[#200e30]">
                        <input
                          type="radio"
                          name="hero-learning-mode"
                          value="Offline — GK-II, South Delhi"
                          checked={formData.mode === 'Offline — GK-II, South Delhi'}
                          onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                          className="w-4 h-4 accent-[#4b1864] cursor-pointer"
                        />
                        <span>Offline — GK-II, South Delhi</span>
                      </label>
                      <label className="flex items-center gap-2.5 cursor-pointer text-xs sm:text-sm font-bold text-[#200e30]">
                        <input
                          type="radio"
                          name="hero-learning-mode"
                          value="Online"
                          checked={formData.mode === 'Online'}
                          onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                          className="w-4 h-4 accent-[#4b1864] cursor-pointer"
                        />
                        <span>Online</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="hero-syllabus-check"
                      required
                      checked={formData.wantsSyllabus}
                      onChange={(e) => setFormData({ ...formData, wantsSyllabus: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded accent-[#4b1864] border-[#ebdcf5] cursor-pointer shrink-0"
                    />
                    <label htmlFor="hero-syllabus-check" className="text-xs sm:text-sm font-semibold text-[#200e30] leading-snug cursor-pointer">
                      I agree to receive course information and follow-up messages on WhatsApp.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-full bg-[#4b1864] hover:bg-[#38104c] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-[#4b1864]/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center cursor-pointer disabled:opacity-70 mt-2"
                  >
                    {loading ? 'Submitting...' : 'Book A Free Demo Session'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
