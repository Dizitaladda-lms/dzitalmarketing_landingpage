import re, sys

sys.stdout.reconfigure(encoding='utf-8')

active_files = [
    'components/TopUrgencyBanner.tsx',
    'components/Navbar.tsx',
    'components/HeroSection.tsx',
    'components/StatsSection.tsx',
    'components/HiringPartners.tsx',
    'components/ToolsGrid.tsx',
    'components/MidCTABanner.tsx',
    'components/WhyChoose.tsx',
    'components/ProjectsSection.tsx',
    'components/MentorsSection.tsx',
    'components/MobileStickyBar.tsx',
    'components/FAQSection.tsx',
    'components/Footer.tsx',
    'components/LeadModal.tsx',
    'components/SuccessModal.tsx',
    'components/WhatsAppButton.tsx',
    'app/globals.css'
]

# Color patterns: hex colors or tailwind color classes that aren't purple, violet, fuchsia, white, slate/gray/black
color_regex = re.compile(r'(#[0-9a-fA-F]{3,8}|bg-(?:yellow|amber|green|emerald|blue|cyan|orange|red|teal|lime)-\d+|text-(?:yellow|amber|green|emerald|blue|cyan|orange|teal|lime)-\d+|border-(?:yellow|amber|green|emerald|blue|cyan|orange|teal|lime)-\d+)')

for fpath in active_files:
    lines = open(fpath, encoding='utf-8').readlines()
    for idx, line in enumerate(lines, 1):
        found = color_regex.findall(line)
        for c in found:
            # Check if hex is purple/white/gray/black
            # #faf7fc, #4b1864, #6b2d8a, #7c3aed, #f5edfa, #ebdcf5, #200e30, #5e4b6d, #ffffff, #111827, #374151, #ffffff, #c724e1, #a52ee7
            c_low = c.lower()
            if c_low in ['#fff', '#ffffff', '#faf7fc', '#4b1864', '#6b2d8a', '#7c3aed', '#f5edfa', '#ebdcf5', '#200e30', '#5e4b6d', '#111827', '#374151', '#c724e1', '#a52ee7', '#2e0e3e', '#340f47', '#f4ecf8', '#c5a6de', '#e8d8f5', '#665675', '#8a7a99', '#f3e8fa', '#f7f1fb', '#38104c', '#300c40', '#3d1252', '#4a2e5d', '#2e103d', '#554266', '#3d224d', '#6b2d8a', '#e9d5ff', '#9333ea', '#c9a4e6']:
                continue
            print(f"{fpath}:{idx}: {c} -> {line.strip()[:100]}")
