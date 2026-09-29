'use client';

import React, { useState } from 'react';

export default function SuccessStories() {
  const [activeTab, setActiveTab] = useState<'reviews' | 'videos'>('reviews');
  const [videoIndex, setVideoIndex] = useState(0);

  const videos = [
    { src: '/videos/WhatsApp_Video.mp4', title: 'Student Story — Digital Marketing Journey' },
    { src: '/videos/Naina.MP4', title: 'Naina on Digital Marketing Career Transition' },
    { src: '/videos/IMG_0941.MP4', title: 'Student Story — Live Campaign Experience' },
    { src: '/videos/IMG_0944.MP4', title: 'Student Story — Placement & Freelance Journey' },
    { src: '/videos/IMG_0945.MP4', title: 'Student Story — SEO & Performance Marketing' },
  ];

  const studentReviews = [
    {
      name: 'Abhinav Sharma',
      course: 'Advanced Digital Marketing Course',
      image: 'https://dizitaladda.com/courses/images/Students/Abhinav.webp',
      rating: '5.0 / 5.0',
      review: 'I enrolled in the Advanced Digital Marketing Course to improve my practical skills, and the hands-on campaign execution was honestly better than I expected. The live brand projects helped me understand real agency work.',
      role: 'Placed at Performance Agency • ₹5.8 LPA',
    },
    {
      name: 'Shiv Kalra',
      course: 'Expert Digital Marketing Course',
      image: 'https://dizitaladda.com/courses/images/Students/Shiv.webp',
      rating: '5.0 / 5.0',
      review: 'The Expert Digital Marketing Course completely changed my career direction. I joined as a college student with zero practical knowledge, and now I confidently manage SEO and Google Ads projects for clients with 4x ROAS.',
      role: 'Growth Specialist • ₹7.2 LPA',
    },
    {
      name: 'Tulika Biswas',
      course: 'Digital Marketing for Professionals',
      image: 'https://dizitaladda.com/courses/images/Students/Tulika.webp',
      rating: '5.0 / 5.0',
      review: 'As a working professional, I needed a course that was practical and updated with current 2026 trends. The Digital Marketing Course for Professionals helped me switch into a high-growth marketing role with a 70% hike.',
      role: 'Digital Marketing Lead • ₹8.5 LPA',
    },
    {
      name: 'Harvinder Singh',
      course: 'Expert Digital Marketing Course',
      image: 'https://dizitaladda.com/courses/images/Students/Harvinder.webp',
      rating: '5.0 / 5.0',
      review: 'The trainers explained everything in a very simple way, even advanced SEO, GA4 funnels, and programmatic ads. I started freelancing within 3 months and now earn regular monthly client retainers.',
      role: 'Independent Freelancer • ₹1.2L/month',
    },
    {
      name: 'Harsh Kanojia',
      course: 'Expert Digital Marketing Course',
      image: 'https://dizitaladda.com/courses/images/Students/Harsh.webp',
      rating: '5.0 / 5.0',
      review: 'The AI marketing tools and automation sessions were my favorite part. I now save hours every day while managing social media, content calendars, and Meta ad creatives for brands.',
      role: 'SEO & Performance Executive • ₹5.2 LPA',
    },
    {
      name: 'Neha Singh',
      course: 'Advanced Digital Marketing Course',
      image: 'https://dizitaladda.com/courses/images/Students/Neha.webp',
      rating: '5.0 / 5.0',
      review: 'What I liked most was the focus on real projects instead of only theory. We worked on live campaigns with actual ad budgets and learned tools that top agencies in India actually use.',
      role: 'Digital Marketing Strategist • ₹6.4 LPA',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-white relative overflow-hidden border-t border-[#ebdcf5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#f3e8fa] border border-[#ebdcf5] text-[#4b1864] text-xs font-bold uppercase tracking-wider">
            Real Alumni Feedback
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight">
            Loved By Over 25,000+ Learners <br />
            <span className="heading-gradient">
              With 4.9 Average Rating
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#5e4b6d]">
            Read honest reviews from students who landed high-paying digital marketing roles, switched careers, or launched successful freelance businesses.
          </p>

          {/* Toggle between Text Reviews and Video Testimonials */}
          <div className="inline-flex items-center bg-[#faf7fc] p-1.5 rounded-2xl border border-[#ebdcf5] mt-2">
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'reviews'
                  ? 'bg-[#4b1864] text-white shadow-sm'
                  : 'text-[#5e4b6d] hover:text-[#200e30]'
              }`}
            >
              Student Reviews (4.9 Rating)
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'videos'
                  ? 'bg-[#4b1864] text-white shadow-sm'
                  : 'text-[#5e4b6d] hover:text-[#200e30]'
              }`}
            >
              Video Interviews
            </button>
          </div>
        </div>

        {activeTab === 'reviews' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentReviews.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#faf7fc] rounded-2xl p-6 flex flex-col justify-between border border-[#ebdcf5] hover:border-[#4b1864] transition-all duration-300 shadow-sm hover:shadow-md text-left"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#4b1864] px-2 py-0.5 rounded bg-[#f3e8fa] border border-[#ebdcf5]">
                      Rating: {item.rating}
                    </span>
                    <span className="text-xs font-semibold text-[#8a7a99]">Verified Student</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#3b234d] leading-relaxed">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#ebdcf5] flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#ebdcf5] bg-white"
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#200e30] tracking-tight">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-[#4b1864] font-semibold">
                      {item.role}
                    </p>
                    <p className="text-[10px] text-[#5e4b6d]">
                      {item.course}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-[#faf7fc] rounded-2xl p-4 sm:p-6 border border-[#ebdcf5] shadow-md">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black shadow-inner">
              <video
                key={videos[videoIndex].src}
                controls
                playsInline
                preload="metadata"
                className="w-full h-full object-contain bg-black"
              >
              <source src={videos[videoIndex].src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

               
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
                <div className="text-left">
                  <h4 className="text-base sm:text-lg font-bold text-[#200e30]">
                    {videos[videoIndex].title}
                  </h4>
                  <p className="text-xs text-[#5e4b6d]">
                    Recorded live with DizitalAdda Alumni at Greater Kailash II, New Delhi
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)}
                    className="px-3 py-1.5 rounded-xl bg-white hover:bg-[#f3e8fa] border border-[#ebdcf5] text-[#200e30] text-xs font-bold"
                    aria-label="Previous video"
                  >
                    Prev
                  </button>
                  <span className="text-xs text-[#5e4b6d] font-mono">
                    {videoIndex + 1} / {videos.length}
                  </span>
                  <button
                    onClick={() => setVideoIndex((prev) => (prev + 1) % videos.length)}
                    className="px-3 py-1.5 rounded-xl bg-white hover:bg-[#f3e8fa] border border-[#ebdcf5] text-[#200e30] text-xs font-bold"
                    aria-label="Next video"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnail Pickers */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {videos.map((v, i) => (
                <button
                  key={i}
                  onClick={() => setVideoIndex(i)}
                  className={`p-2.5 rounded-xl text-left border transition-all ${
                    videoIndex === i
                      ? 'bg-white border-[#4b1864] text-[#4b1864] shadow-sm'
                      : 'bg-[#faf7fc] border-[#ebdcf5] text-[#5e4b6d] hover:bg-white'
                  }`}
                >
                  <div className="text-[10px] font-bold uppercase text-[#4b1864]">Story #{i + 1}</div>
                  <div className="text-xs font-semibold line-clamp-1 mt-0.5">{v.title}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
