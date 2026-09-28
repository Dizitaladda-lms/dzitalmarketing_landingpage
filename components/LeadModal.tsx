'use client';

import React, { useState } from 'react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  sourceTag?: string;
  onSubmitSuccess: (data: any) => void;
}

export default function LeadModal({
  isOpen,
  onClose,
  title = 'Book Free 1-on-1 Career Counselling',
  subtitle = 'Get personalized career roadmap + 70-module AI syllabus on WhatsApp',
  sourceTag = 'Modal CTA',
  onSubmitSuccess,
}: LeadModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: 'Expert in Digital Marketing (12 Months)',
    mode: 'Offline Classroom (GK-II, New Delhi)',
    experience: 'Student / Fresh Graduate',
    wantsSyllabus: true,
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

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
      setErrorMessage(`1 minute ke andar maximum 2 leads submit ho sakti hain. Kripya ${waitSeconds} second baad try karein.`);
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
        source: sourceTag,
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

      // Record successful submission
      recentSubmissions.push(now);
      localStorage.setItem('da_lead_sub_times', JSON.stringify(recentSubmissions));

      const existingLeads = JSON.parse(localStorage.getItem('da_leads') || '[]');
      existingLeads.unshift({
        ...payload,
        submittedAt: new Date().toLocaleString('en-IN'),
      });
      localStorage.setItem('da_leads', JSON.stringify(existingLeads));

      setLoading(false);
      onClose();
      onSubmitSuccess(payload);
    } catch (err: any) {
      setErrorMessage('Something went wrong. Please check your connection.');
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl bg-white border-2 border-[#ebdcf5] p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#faf7fc] hover:bg-[#f3e8fa] border border-[#ebdcf5] text-[#200e30] font-bold text-sm flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Header */}
        <div className="space-y-1.5 mb-5 text-left pr-8">
          <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#f3e8fa] border border-[#ebdcf5] text-[#4b1864] text-[10px] font-extrabold uppercase">
            Instant WhatsApp Confirmation
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#200e30] tracking-tight">
            {title}
          </h3>
          <p className="text-xs text-[#5e4b6d]">
            {subtitle}
          </p>
        </div>

        {errorMessage && (
          <div className="p-3 mb-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs text-left">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
          <div>
            <label className="block text-xs font-semibold text-[#5e4b6d] mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ankit Verma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7fc] border border-[#ebdcf5] text-[#200e30] text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-[#4b1864]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#5e4b6d] mb-1">
              WhatsApp Mobile Number *
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-[#ebdcf5] bg-[#f8f3fa] text-xs font-semibold text-[#4b1864]">
                +91
              </span>
              <input
                type="tel"
                required
                maxLength={10}
                placeholder="10-digit phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                className="w-full px-3.5 py-2.5 rounded-r-xl bg-[#faf7fc] border border-[#ebdcf5] text-[#200e30] text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-[#4b1864]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#5e4b6d] mb-1">
              Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="ankit@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7fc] border border-[#ebdcf5] text-[#200e30] text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-[#4b1864]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#5e4b6d] mb-1">
                Select Course Track
              </label>
              <select
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className="w-full px-2.5 py-2 rounded-xl bg-[#faf7fc] border border-[#ebdcf5] text-[#200e30] text-xs focus:outline-none focus:border-[#4b1864]"
              >
                <option value="Expert in Digital Marketing (12 Months)">Expert (12M - 70 Modules)</option>
                <option value="Advanced Digital Marketing (6 Months)">Advanced (6M - 60 Modules)</option>
                <option value="Digital Marketing For Professionals (4 Months)">Professionals (4M Track)</option>
                <option value="Digital Marketing For Beginners (3 Months)">Beginners (3M Track)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#5e4b6d] mb-1">
                Preferred Mode
              </label>
              <select
                value={formData.mode}
                onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                className="w-full px-2.5 py-2 rounded-xl bg-[#faf7fc] border border-[#ebdcf5] text-[#200e30] text-xs focus:outline-none focus:border-[#4b1864]"
              >
                <option value="Offline Classroom (GK-II, New Delhi)">Offline (GK-II South Delhi)</option>
                <option value="Online Live Interactive Batch">Online Interactive Live</option>
                <option value="Hybrid (Weekend Offline + Online)">Hybrid Mode</option>
              </select>
            </div>
          </div>

          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              id="modal-syllabus-check"
              checked={formData.wantsSyllabus}
              onChange={(e) => setFormData({ ...formData, wantsSyllabus: e.target.checked })}
              className="mt-0.5 rounded text-[#4b1864] focus:ring-[#4b1864] border-[#ebdcf5]"
            />
            <label htmlFor="modal-syllabus-check" className="text-[11px] text-[#5e4b6d] leading-tight">
              Send me detailed module PDF &amp; early bird scholarship details on WhatsApp.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-[#4b1864] hover:bg-[#3d1252] text-white font-extrabold text-sm sm:text-base shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center cursor-pointer disabled:opacity-70 mt-2"
          >
            {loading ? 'Submitting Application...' : 'Claim Early Bird Seat Now'}
          </button>

          <div className="flex items-center justify-center gap-3 text-[10px] text-[#8a7a99] pt-1">
            <span>100% Privacy</span>
            <span>•</span>
            <span>Zero Spam Policy</span>
          </div>
        </form>
      </div>
    </div>
  );
}
