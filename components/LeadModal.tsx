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
  title = 'Start Your AI + Digital Marketing Journey',
  subtitle = 'Get course details, syllabus and a free demo session.',
  sourceTag = 'Modal CTA',
  onSubmitSuccess,
}: LeadModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: 'Digital Marketing For Beginners (3 Months)',
    mode: 'Offline — GK-II, South Delhi',
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl bg-white border-2 border-[#ebdcf5] p-4 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto">
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
          <h3 className="text-xl sm:text-2xl font-black text-[#200e30] tracking-tight leading-snug">
            Start Your <span className="heading-gradient">AI + Digital Marketing</span> Journey
          </h3>
          <p className="text-xs sm:text-sm text-[#554266] font-medium">
            Get course details, syllabus and a free demo session.
          </p>
        </div>

        {errorMessage && (
          <div className="p-3 mb-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs text-left">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
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
              className="w-full px-4 py-2.5 rounded-full bg-[#faf7fc] border border-[#ebdcf5] text-[#200e30] text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-[#4b1864] focus:ring-1 focus:ring-[#4b1864]"
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
              className="w-full px-4 py-2.5 rounded-full bg-[#faf7fc] border border-[#ebdcf5] text-[#200e30] text-xs sm:text-sm placeholder-gray-400 focus:outline-none focus:border-[#4b1864] focus:ring-1 focus:ring-[#4b1864]"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-semibold text-[#38264a] mb-1.5">
              Select Course *
            </label>
            <select
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              className="w-full px-4 py-2.5 rounded-full bg-[#faf7fc] border border-[#ebdcf5] text-[#200e30] text-xs sm:text-sm font-semibold focus:outline-none focus:border-[#4b1864] focus:ring-1 focus:ring-[#4b1864]"
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
                  name="modal-learning-mode"
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
                  name="modal-learning-mode"
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
              id="modal-syllabus-check"
              required
              checked={formData.wantsSyllabus}
              onChange={(e) => setFormData({ ...formData, wantsSyllabus: e.target.checked })}
              className="mt-1 w-4 h-4 rounded accent-[#4b1864] border-[#ebdcf5] cursor-pointer shrink-0"
            />
            <label htmlFor="modal-syllabus-check" className="text-xs sm:text-sm font-semibold text-[#200e30] leading-snug cursor-pointer">
              I agree to receive course information and follow-up messages on WhatsApp.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-full bg-[#4b1864] hover:bg-[#3d1252] text-white font-extrabold text-sm sm:text-base shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center cursor-pointer disabled:opacity-70 mt-2"
          >
            {loading ? 'Submitting...' : 'Book A Free Demo Session'}
          </button>
        </form>
      </div>
    </div>
  );
}
