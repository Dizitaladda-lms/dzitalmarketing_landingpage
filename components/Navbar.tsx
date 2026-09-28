'use client';

import React, { useState } from 'react';

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#ebdcf5] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo & Tag */}
          <div className="flex items-center gap-3">
            <a href="#top" className="flex items-center gap-2 group">
              <img
                src="https://dizitaladda.com/logo.png"
                alt="DizitalAdda Logo"
                className="h-9 sm:h-11 w-auto object-contain filter contrast-125"
                onError={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
              />
              
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs xl:text-sm font-semibold text-[#4a2e5d]">
            <button
              onClick={() => scrollTo('curriculum')}
              className="hover:text-[#4b1864] transition-colors py-1 cursor-pointer"
            >
              70 Modules
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="hover:text-[#4b1864] transition-colors py-1 cursor-pointer"
            >
              Live Projects
            </button>
            <button
              onClick={() => scrollTo('placements')}
              className="hover:text-[#4b1864] transition-colors py-1 cursor-pointer"
            >
              100% Placement
            </button>
            <button
              onClick={() => scrollTo('mentors')}
              className="hover:text-[#4b1864] transition-colors py-1 cursor-pointer"
            >
              Mentors
            </button>
            <button
              onClick={() => scrollTo('reviews')}
              className="hover:text-[#4b1864] transition-colors py-1 cursor-pointer"
            >
              Reviews (4.9 Rating)
            </button>
            <button
              onClick={() => scrollTo('faqs')}
              className="hover:text-[#4b1864] transition-colors py-1 cursor-pointer"
            >
              FAQs
            </button>
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+918810606010"
              className="text-xs font-bold text-[#4b1864] px-3 py-2 rounded-xl bg-[#f5edfa] hover:bg-[#ebdcf5] border border-[#e8d8f5] transition-colors"
            >
              +91 8810606010
            </a>

            <button
              onClick={onOpenModal}
              className="px-5 py-2.5 rounded-xl bg-[#4b1864] hover:bg-[#38104c] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              Book Free Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenModal}
              className="px-3 py-1.5 rounded-lg bg-[#4b1864] text-white font-bold text-[11px]"
            >
              Book Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-3 py-1.5 rounded-lg bg-[#f5edfa] border border-[#ebdcf5] text-[#4b1864] font-bold text-xs"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-[#ebdcf5] px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold text-[#2e103d]">
            <button
              onClick={() => scrollTo('projects')}
              className="p-2.5 rounded-lg bg-[#faf7fc] text-left hover:bg-[#f5edfa] border border-[#ebdcf5]"
            >
              Live Projects
            </button>
            <button
              onClick={() => scrollTo('curriculum')}
              className="p-2.5 rounded-lg bg-[#faf7fc] text-left hover:bg-[#f5edfa] border border-[#ebdcf5]"
            >
              70 Modules &amp; AI
            </button>
            <button
              onClick={() => scrollTo('placements')}
              className="p-2.5 rounded-lg bg-[#faf7fc] text-left hover:bg-[#f5edfa] border border-[#ebdcf5]"
            >
              100% Placement
            </button>
            <button
              onClick={() => scrollTo('mentors')}
              className="p-2.5 rounded-lg bg-[#faf7fc] text-left hover:bg-[#f5edfa] border border-[#ebdcf5]"
            >
              Expert Mentors
            </button>
            <button
              onClick={() => scrollTo('reviews')}
              className="p-2.5 rounded-lg bg-[#faf7fc] text-left hover:bg-[#f5edfa] border border-[#ebdcf5]"
            >
              Reviews (4.9 Rating)
            </button>
            <button
              onClick={() => scrollTo('faqs')}
              className="p-2.5 rounded-lg bg-[#faf7fc] text-left hover:bg-[#f5edfa] border border-[#ebdcf5]"
            >
              FAQs
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:+918810606010"
              className="flex items-center justify-center py-2.5 rounded-xl bg-[#f5edfa] border border-[#ebdcf5] text-xs font-bold text-[#4b1864]"
            >
              Call Counsellor: +91 8810606010
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full py-3 rounded-xl bg-[#4b1864] text-white font-bold text-xs shadow-md"
            >
              Book Free Demo &amp; Download Syllabus
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
