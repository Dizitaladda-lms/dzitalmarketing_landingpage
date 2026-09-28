'use client';

import React, { useState, useEffect } from 'react';
import TopUrgencyBanner from '@/components/TopUrgencyBanner';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TechMarquee from '@/components/TechMarquee';
import KeyHighlights from '@/components/KeyHighlights';
import ComparisonTable from '@/components/ComparisonTable';
import CurriculumSection from '@/components/CurriculumSection';
import ProjectsSection from '@/components/ProjectsSection';
import AudienceSection from '@/components/AudienceSection';
import JourneySection from '@/components/JourneySection';
import MentorsSection from '@/components/MentorsSection';
import CertificationSection from '@/components/CertificationSection';
import SuccessStories from '@/components/SuccessStories';
import BookDemoSection from '@/components/BookDemoSection';
import HiringPartners from '@/components/HiringPartners';
import FAQSection from '@/components/FAQSection';
import PreFooterCTA from '@/components/PreFooterCTA';
import Footer from '@/components/Footer';
import LeadModal from '@/components/LeadModal';
import SuccessModal from '@/components/SuccessModal';
import AdminLeadViewer from '@/components/AdminLeadViewer';
import MobileStickyBar from '@/components/MobileStickyBar';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function DigitalMarketingLandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<any>(null);
  const [modalConfig, setModalConfig] = useState({
    title: 'Book Free 1-on-1 Career Counselling',
    subtitle: 'Get personalized career roadmap + 70-module AI syllabus on WhatsApp',
    source: 'General Header CTA',
  });

  // Global Keyboard Shortcut: Ctrl + Shift + L to open Admin Leads Viewer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'L' || e.key === 'l')) {
        e.preventDefault();
        setAdminOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openCustomModal = (title?: string, subtitle?: string, source?: string) => {
    setModalConfig({
      title: title || 'Book Free 1-on-1 Career Counselling',
      subtitle: subtitle || 'Get personalized career roadmap + 70-module AI syllabus on WhatsApp',
      source: source || 'CTA Button',
    });
    setModalOpen(true);
  };

  const handleLeadSuccess = (leadData: any) => {
    setSubmittedLead(leadData);
  };

  return (
    <main id="top" className="min-h-screen bg-[#faf7fc] text-[#200e30] flex flex-col selection:bg-[#4b1864] selection:text-white">
      {/* 1. Urgency Countdown Top Banner */}
      <TopUrgencyBanner onOpenModal={() => openCustomModal('Claim Early Bird Scholarship', 'Avail up to ₹40,000 discount on upcoming cohort', 'Top Urgency Bar')} />

      {/* 2. Isolated High-Conversion Navbar */}
      <Navbar onOpenModal={() => openCustomModal('Book Free Demo Class', 'Reserve your 1-hour live session slot (online/offline)', 'Navbar CTA')} />

      {/* 3. Hero Section with Above-the-fold Lead Form & Trust Badges */}
      <HeroSection onLeadSuccess={handleLeadSuccess} />

      {/* 4. Tech & 60+ AI Tools Looping Marquee */}
      <TechMarquee />

      {/* 5. Key Highlights & Quantified Metrics (Highest CTC ₹10.05 LPA) */}
      <KeyHighlights onOpenModal={() => openCustomModal('Download Verified Placement Report', 'Inspect recent alumni company offer letters & salary slips', 'Highlights CTA')} />

      {/* 6. Head-to-Head Comparison Matrix (DizitalAdda vs Others) */}
      <ComparisonTable onOpenModal={() => openCustomModal('Request Personal Course Recommendation', 'Speak with a senior advisor to select the right learning path', 'Comparison CTA')} />

      {/* 8. 2026 AI-Infused 70-Module Curriculum Section */}
      <CurriculumSection onDownloadSyllabus={() => openCustomModal('Download Complete 70-Module Syllabus (PDF)', 'Receive the complete module notes and project briefs directly on WhatsApp', 'Curriculum PDF CTA')} />

      {/* 9. Real Brand Live Projects Showcase (4.8x ROAS, ₹42L Revenue) */}
      <ProjectsSection onOpenModal={() => openCustomModal('Request Project Portfolio Details', 'Learn how students run live campaigns on actual ad accounts', 'Projects CTA')} />

      {/* 10. "Who Can Join" Audience Section with Animated Visual Bars */}
      <AudienceSection onOpenModal={() => openCustomModal('Start With Free 1-Hour Demo', 'Experience the curriculum and meet trainers with zero obligation', 'Audience CTA')} />

      {/* 11. 6-Step Career Journey Roadmap */}
      <JourneySection onOpenModal={() => openCustomModal('Start Your 6-Step Journey', 'Book your 1-on-1 career mapping consultation with senior trainer', 'Journey CTA')} />

      {/* 12. Learn from 8 Active Agency Mentors */}
      <MentorsSection onOpenModal={() => openCustomModal('Book Mentorship Session with Dr. Gulshan Kumar', 'Discuss your digital marketing transition directly with our founder', 'Mentors CTA')} />

      {/* 13. Industry Recognized Certifications (Google, Meta Blueprint, HubSpot) */}
      <CertificationSection onOpenModal={() => openCustomModal('Certification Eligibility & Syllabus', 'Check eligibility criteria for DizitalAdda verified credentials', 'Certifications CTA')} />

      {/* 14. Real Alumni Reviews & YouTube Video Testimonials */}
      <SuccessStories />

      {/* 15. Free Demo Class Booking with Interactive Date Picker */}
      <BookDemoSection onSuccess={handleLeadSuccess} />

      {/* 16. 250+ Domestic & Global Recruiting Partners Carousel */}
      <HiringPartners />

      {/* 17. Objection-Handling 12 FAQs */}
      <FAQSection onOpenModal={() => openCustomModal('Have a Specific Admission Query?', 'Our academic team will call you within 15 minutes', 'FAQ Help CTA')} />

      {/* 18. Pre-Footer High-Impact Conversion Banner */}
      <PreFooterCTA onOpenModal={() => openCustomModal('Apply for Next Cohort', 'Limited seats available in Delhi GK-II & Online cohorts', 'PreFooter CTA')} />

      {/* 19. Zero-Leak Footer with Greater Kailash II South Delhi Campus Details */}
      <Footer
        onOpenModal={() => openCustomModal('Admission Helpline Callback', 'Get immediate guidance from senior counselor', 'Footer CTA')}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Universal Pop-up Lead Capture Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalConfig.title}
        subtitle={modalConfig.subtitle}
        sourceTag={modalConfig.source}
        onSubmitSuccess={handleLeadSuccess}
      />

      {/* Success / WhatsApp Redirect Modal */}
      <SuccessModal
        leadData={submittedLead}
        onClose={() => setSubmittedLead(null)}
      />

      {/* Internal Admin Leads Portal (Ctrl+Shift+L) */}
      <AdminLeadViewer
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
      />

      {/* Mobile Sticky Bottom Conversion Bar */}
      <MobileStickyBar onOpenModal={() => openCustomModal('Book Free Demo & Syllabus', 'Get 2026 AI syllabus on WhatsApp', 'Mobile Sticky CTA')} />

      {/* Floating WhatsApp CTA Button */}
      <WhatsAppButton />
    </main>
  );
}
