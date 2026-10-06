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
    course: 'Expert in Digital Marketing (12 Months)',
    mode: 'Offline Classroom (GK-II, New Delhi)',
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
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#f5edfa] border border-[#ebdcf5] text-[#4b1864] text-[11px] sm:text-xs font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#4b1864] animate-pulse" />
                Skill India &bull; Govt. Recognized
              </div>
            </div>

            {/* Award Recognition Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-0.5">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full bg-white border border-[#ebdcf5] text-[#4b1864] shadow-sm">
                🏆 Indian Icon Award &mdash; by Dr. Kiran Bedi
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full bg-white border border-[#ebdcf5] text-[#4b1864] shadow-sm">
                🏆 Bharat Business Award &mdash; by Ashneer Grover
              </span>
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full bg-white border border-[#ebdcf5] text-[#4b1864] shadow-sm">
                🏆 The Excellence Award &mdash; Hotel School
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111827] leading-tight tracking-tight">
              Master <span className="heading-gradient">Digital Marketing</span> with AI
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#554266] leading-relaxed font-medium">
              Learn AI-powered marketing tools, work on real-world projects, and grow your career with placement assistance through the <strong className="text-[#200e30]">DizitalAdda</strong> Certified Digital Marketing Course.
            </p>

            {/* Key Benefits List with Emojis from PW Skills Reference */}
            <ul className="space-y-3 pt-2 text-left">
              <li className="flex items-center gap-3 text-sm sm:text-base lg:text-lg font-bold text-[#111827]">
                <span className="text-xl sm:text-2xl shrink-0">🤖</span>
                <span>Generative AI Integrated Curriculum</span>
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base lg:text-lg font-bold text-[#111827]">
                <span className="text-xl sm:text-2xl shrink-0">⏳</span>
                <span>3 Months Duration | Live + Recorded Classes</span>
              </li>
              <li className="flex items-center gap-3 text-sm sm:text-base lg:text-lg font-bold text-[#111827]">
                <span className="text-xl sm:text-2xl shrink-0">💼</span>
                <span>Job Assistance</span>
              </li>
            </ul>
          </div>

          {/* Right Column: Clean Light Theme Lead Capture Form (PW Skills Text) */}
          <div className="lg:col-span-5">
            <div className="bg-white border-2 border-[#ebdcf5] rounded-2xl p-4 sm:p-7 shadow-xl shadow-[#4b1864]/5 relative form-card-shadow">
              <div className="text-center mb-5">
                <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-[#f5edfa] border border-[#ebdcf5] text-[#4b1864] inline-block mb-1.5 shadow-sm">
                  Limited Seats!
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#200e30] tracking-tight">
                  Speak To Our Counsellor
                </h3>
                <p className="text-xs sm:text-sm text-[#665675] mt-0.5">
                  Fill details to download curriculum &amp; speak to experts.
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
                <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-[#38264a] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7fc] border border-[#ebdcf5] focus:border-[#4b1864] text-[#200e30] text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#4b1864]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#38264a] mb-1">
                      WhatsApp Mobile Number *
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-[#ebdcf5] bg-[#f5edfa] text-xs font-semibold text-[#4b1864]">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="10-digit phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                        className="w-full px-3.5 py-2.5 rounded-r-xl bg-[#faf7fc] border border-[#ebdcf5] focus:border-[#4b1864] text-[#200e30] text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#4b1864]"
                      />
                    </div>
                  </div>

                  

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="block text-xs font-semibold text-[#38264a] mb-1">
                        Select Program
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full px-2.5 py-2 rounded-xl bg-[#faf7fc] border border-[#ebdcf5] focus:border-[#4b1864] text-[#200e30] text-xs focus:outline-none"
                      >
                        <option value="Graduation in Dizital Marketing (3 years)">Graduation in Dizital Marketing (3 years)</option>
                        <option value="Expert in Digital Marketing (12 Months)">Expert (12 Months - 70 Modules)</option>
                        <option value="Advanced Digital Marketing (6 Months)">Advanced (6 Months - 60 Modules)</option>
                        <option value="Digital Marketing For Professionals (4 Months)">Professionals (4 Months)</option>
                        <option value="Digital Marketing For Beginners (3 Months)">Beginners (3 Months)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#38264a] mb-1">
                        Learning Mode
                      </label>
                      <select
                        value={formData.mode}
                        onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                        className="w-full px-2.5 py-2 rounded-xl bg-[#faf7fc] border border-[#ebdcf5] focus:border-[#4b1864] text-[#200e30] text-xs focus:outline-none"
                      >
                        <option value="Offline Classroom (GK-II, New Delhi)">Offline (GK-II South Delhi)</option>
                        <option value="Online Live Interactive Batch">Online Interactive Live</option>
                        <option value="Hybrid (Weekend Offline + Online)">Hybrid Mode</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#38264a] mb-1">
                      Current Background
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-2.5 py-2 rounded-xl bg-[#faf7fc] border border-[#ebdcf5] focus:border-[#4b1864] text-[#200e30] text-xs focus:outline-none"
                    >
                      <option value="Student / Fresh Graduate">College Student / Fresh Graduate</option>
                      <option value="Working Professional">Working Professional (Career Switcher)</option>
                      <option value="Business Owner / Entrepreneur">Business Owner / Startup Founder</option>
                      <option value="Freelancer / Housewife">Freelancer / Housewife</option>
                      <option value="12th Pass Student">12th Pass / School Student</option>
                    </select>
                  </div>

                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="hero-syllabus-check"
                      checked={formData.wantsSyllabus}
                      onChange={(e) => setFormData({ ...formData, wantsSyllabus: e.target.checked })}
                      className="mt-0.5 rounded text-[#4b1864] focus:ring-[#4b1864] border-[#ebdcf5]"
                    />
                    <label htmlFor="hero-syllabus-check" className="text-[11px] text-[#554266] leading-tight">
                      Send me 2026 AI-integrated syllabus PDF &amp; fee discounts on WhatsApp.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-[#4b1864] hover:bg-[#38104c] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-[#4b1864]/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center cursor-pointer disabled:opacity-70 mt-2"
                  >
                    {loading ? 'Submitting...' : 'Book A Free Session'}
                  </button>

                  <div className="text-center text-[11px] text-[#665675] pt-1">
                    By submitting, you agree to our Terms &amp; Privacy Policy.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
