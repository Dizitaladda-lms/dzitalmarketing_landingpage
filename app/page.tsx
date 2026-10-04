'use client';

import React, { useState, useEffect } from 'react';
import TopUrgencyBanner   from '@/components/TopUrgencyBanner';
import Navbar             from '@/components/Navbar';
import HeroSection        from '@/components/HeroSection';
import StatsSection       from '@/components/StatsSection';
import HiringPartners     from '@/components/HiringPartners';
import ToolsGrid          from '@/components/ToolsGrid';
import MidCTABanner       from '@/components/MidCTABanner';
import WhyChoose          from '@/components/WhyChoose';
import ProjectsSection    from '@/components/ProjectsSection';
import MentorsSection     from '@/components/MentorsSection';
import FAQSection         from '@/components/FAQSection';
import Footer             from '@/components/Footer';
import LeadModal          from '@/components/LeadModal';
import SuccessModal       from '@/components/SuccessModal';
import AdminLeadViewer    from '@/components/AdminLeadViewer';
import MobileStickyBar    from '@/components/MobileStickyBar';
import WhatsAppButton     from '@/components/WhatsAppButton';

export default function DigitalMarketingLandingPage() {
  const [modalOpen, setModalOpen]     = useState(false);
  const [adminOpen, setAdminOpen]     = useState(false);
  const [submittedLead, setSubmittedLead] = useState<any>(null);
  const [modalConfig, setModalConfig] = useState({
    title:    'Book Free 1-on-1 Career Counselling',
    subtitle: 'Get personalized career roadmap + 70-module AI syllabus on WhatsApp',
    source:   'General Header CTA',
  });

  // Global Keyboard Shortcut: Ctrl+Shift+L → open Admin Leads Viewer
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

  const openModal = (title?: string, subtitle?: string, source?: string) => {
    setModalConfig({
      title:    title    || 'Speak To Our Counsellor',
      subtitle: subtitle || 'Fill details to download curriculum & speak to experts.',
      source:   source   || 'CTA Button',
    });
    setModalOpen(true);
  };

  const handleLeadSuccess = (leadData: any) => setSubmittedLead(leadData);

  return (
    <main id="top" className="min-h-screen bg-[#faf7fc] text-[#200e30] flex flex-col selection:bg-[#4b1864] selection:text-white">

      {/* 1. Urgency Top Banner */}
      <TopUrgencyBanner
        onOpenModal={() => openModal('Claim Early Bird Scholarship', 'Avail up to ₹40,000 discount on upcoming cohort', 'Top Urgency Bar')}
      />

      {/* 2. Navbar */}
      <Navbar
        onOpenModal={() => openModal('Book Free Demo Class', 'Reserve your 1-hour live session slot (online/offline)', 'Navbar CTA')}
      />

      {/* 3. Hero — 2-column with inline lead form */}
      <HeroSection onLeadSuccess={handleLeadSuccess} />

      {/* 4. Stats Bar — 4 numbers */}
      <StatsSection />

      {/* 5. Hiring Partners Marquee */}
      <HiringPartners />

      {/* 6. Tools Grid — 10+ AI & DM tools */}
      <ToolsGrid />

      {/* 7. Mid-page Syllabus CTA */}
      <MidCTABanner
        onOpenModal={() => openModal('Download Full Course Syllabus', 'Receive the complete 70-module curriculum PDF on WhatsApp', 'Mid CTA Banner')}
      />

      {/* 8. Why Choose DizitalAdda — 2-col features + stats grid */}
      <WhyChoose
        onOpenModal={() => openModal('Download Full Curriculum', 'Get detailed module breakdown + fee structure on WhatsApp', 'Why Choose CTA')}
      />

      {/* 9. Live Projects Showcase */}
      <ProjectsSection
        onOpenModal={() => openModal('Request Project Portfolio Details', 'Learn how students run live campaigns on actual ad accounts', 'Projects CTA')}
      />

      {/* 10. Expert Mentors Carousel */}
      <MentorsSection
        onOpenModal={() => openModal('Book Mentorship Session with Dr. Gulshan Kumar', 'Discuss your digital marketing transition directly with our founder', 'Mentors CTA')}
      />

      {/* 11. Mobile Sticky Bottom Bar */}
      <MobileStickyBar
        onOpenModal={() => openModal('Book Free Demo & Syllabus', 'Get 2026 AI syllabus on WhatsApp', 'Mobile Sticky CTA')}
      />

      {/* 12. FAQ — 3 key questions */}
      <FAQSection
        onOpenModal={() => openModal('Have a Specific Admission Query?', 'Our academic team will call you within 15 minutes', 'FAQ Help CTA')}
      />

      {/* 13. Footer */}
      <Footer
        onOpenModal={() => openModal('Admission Helpline Callback', 'Get immediate guidance from senior counselor', 'Footer CTA')}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Universal Lead Capture Modal */}
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

      {/* Admin Leads Portal (Ctrl+Shift+L) */}
      <AdminLeadViewer
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
      />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
}
