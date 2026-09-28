'use client';

import React, { useState } from 'react';

interface BookDemoSectionProps {
  onSuccess: (data: any) => void;
}

export default function BookDemoSection({ onSuccess }: BookDemoSectionProps) {
  const [selectedDate, setSelectedDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: 'Expert in Digital Marketing (12 Months)',
    mode: 'Offline Classroom (GK-II, New Delhi)',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.fullName || !formData.phone) {
      setError('Please provide your name and phone number.');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        ...formData,
        date: selectedDate,
        source: 'Free Demo Class Section',
        landing_page_url: typeof window !== 'undefined' ? window.location.href : 'https://dizitaladda.com/digital-marketing',
        timestamp: new Date().toISOString(),
      };

      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const resData = await res.json().catch(() => null);
        setError(resData?.message || 'Booking submission failed. Please try again.');
        setLoading(false);
        return;
      }

      setSubmitted(true);
      setLoading(false);
      onSuccess(payload);
    } catch (err: any) {
      setError('Something went wrong. Please check your connection.');
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="py-20 bg-[#faf7fc] relative overflow-hidden border-t border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#f3e8fa] border border-[#ebdcf5] text-[#4b1864] text-xs font-bold uppercase tracking-wider">
            100% Free 1-Hour Live Experience
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#111827] tracking-tight">
            Book a Free Demo Class <br />
            <span className="heading-gradient">
              Online or at Greater Kailash II Campus
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#5e4b6d]">
            Pick your preferred date and experience the trainers, curriculum, and live AI tools before making any enrollment commitment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Demo Features & Date Picker Box */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[#ebdcf5] shadow-sm space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#200e30]">
                Select Preferred Date
              </h3>

              <div className="space-y-2">
                <label className="block text-xs font-semibold text-[#5e4b6d]">
                  Pick Demo Date:
                </label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#faf7fc] border border-[#ebdcf5] text-[#200e30] text-sm focus:outline-none focus:border-[#4b1864]"
                />
              </div>

              {/* Guarantees */}
              <div className="space-y-3 pt-3">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#5e4b6d]">
                  <span className="w-2 h-2 rounded-full bg-[#4b1864] shrink-0 mt-1.5" />
                  <span><strong className="text-[#200e30]">1-Hour Live Session:</strong> Actual live training with real campaign workflows, not a high-pressure sales pitch.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#5e4b6d]">
                  <span className="w-2 h-2 rounded-full bg-[#4b1864] shrink-0 mt-1.5" />
                  <span><strong className="text-[#200e30]">100% Free:</strong> Zero obligation, zero registration fees, zero hidden conditions.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#5e4b6d]">
                  <span className="w-2 h-2 rounded-full bg-[#4b1864] shrink-0 mt-1.5" />
                  <span><strong className="text-[#200e30]">1-on-1 Guidance:</strong> Dedicated 15-minute doubt-clearing session with senior trainer right after class.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#5e4b6d]">
                  <span className="w-2 h-2 rounded-full bg-[#4b1864] shrink-0 mt-1.5" />
                  <span><strong className="text-[#200e30]">Campus or Online:</strong> Attend in person at Spacetime Design House, GK-II or join live on Google Meet.</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#faf7fc] border border-[#ebdcf5] text-xs text-[#5e4b6d] space-y-1">
              <span className="font-bold text-[#200e30] block">Delhi Campus Address:</span>
              <p>
                2nd Floor, Spacetime Management Pvt Ltd Design House, Savitri Cinema Complex, Greater Kailash II, New Delhi 110048
              </p>
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 flex flex-col justify-center border border-[#ebdcf5] shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#f3e8fa] text-[#4b1864] font-bold text-2xl flex items-center justify-center mx-auto">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-[#200e30]">
                  Demo Class Reserved for {selectedDate}!
                </h3>
                <p className="text-sm text-[#5e4b6d] max-w-md mx-auto">
                  Our coordinator will reach out to confirm your session timing (morning or evening slot) and share the meeting link / campus pass on WhatsApp.
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/918810606010?text=Hi%20DizitalAdda,%20I%20have%20booked%20my%20demo%20class.%20Please%20confirm%20my%20slot."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm shadow-sm"
                  >
                    Confirm Immediately via WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-4 text-left">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-black text-[#200e30] tracking-tight">
                    Confirm Your Attendee Details
                  </h3>
                  <p className="text-xs text-[#5e4b6d]">
                    We will send the demo access pass directly to your WhatsApp
                  </p>
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#5e4b6d] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7fc] border border-[#ebdcf5] text-[#200e30] text-xs sm:text-sm focus:outline-none focus:border-[#4b1864]"
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
                        placeholder="10-digit number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                        className="w-full px-3.5 py-2.5 rounded-r-xl bg-[#faf7fc] border border-[#ebdcf5] text-[#200e30] text-xs sm:text-sm focus:outline-none focus:border-[#4b1864]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#5e4b6d] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="priya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7fc] border border-[#ebdcf5] text-[#200e30] text-xs sm:text-sm focus:outline-none focus:border-[#4b1864]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5e4b6d] mb-1">
                      Preferred Mode
                    </label>
                    <select
                      value={formData.mode}
                      onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7fc] border border-[#ebdcf5] text-[#200e30] text-xs focus:outline-none focus:border-[#4b1864]"
                    >
                      <option value="Offline Classroom (GK-II, New Delhi)">In-Person (Delhi GK-II Campus)</option>
                      <option value="Online Live Interactive Batch">Online (Google Meet Live)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5e4b6d] mb-1">
                    Course Interest
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf7fc] border border-[#ebdcf5] text-[#200e30] text-xs focus:outline-none focus:border-[#4b1864]"
                  >
                    <option value="Expert in Digital Marketing (12 Months)">Expert in Digital Marketing (12 Months - 70 Modules)</option>
                    <option value="Advanced Digital Marketing (6 Months)">Advanced Digital Marketing (6 Months - 60 Modules)</option>
                    <option value="Digital Marketing For Professionals (4 Months)">Digital Marketing For Professionals (4 Months)</option>
                    <option value="Digital Marketing For Beginners (3 Months)">Digital Marketing For Beginners (3 Months)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#5e4b6d] mb-1">
                    Anything you&apos;d like us to know? (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. I want to transition from sales to performance marketing..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#faf7fc] border border-[#ebdcf5] text-[#200e30] text-xs placeholder-gray-400 focus:outline-none focus:border-[#4b1864]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-[#4b1864] hover:bg-[#3d1252] text-white font-extrabold text-sm sm:text-base shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center cursor-pointer disabled:opacity-70"
                >
                  {loading ? 'Confirming Demo Slot...' : 'Reserve My Free Demo Slot Now'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
