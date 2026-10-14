import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Digital Marketing Course in Delhi | SEO, Ads, 60+ AI Tools | DizitalAdda',
  description: "Join Delhi's #1 most recommended digital marketing programme — 4 course levels (3–12 months), 70 modules, 60+ AI tools, 10 live brand projects, paid internship & 97% placement rate. Book your free demo class today.",
  keywords: [
    'Digital Marketing Course in Delhi',
    'Best Digital Marketing Institute in Delhi',
    'Digital Marketing with AI',
    'SEO Course in Delhi',
    'Google Ads Training',
    'Meta Ads Course',
    'Performance Marketing Institute',
    'DizitalAdda Digital Marketing',
  ],
  authors: [{ name: 'DizitalAdda Academy' }],
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Digital Marketing Course in Delhi | 4 Levels, AI Tools, 97% Placement | DizitalAdda',
    description: 'Master SEO, Google Ads, Meta Ads & 60+ AI tools with 10 live brand campaigns, paid internship and 100% placement support at DizitalAdda Delhi.',
    url: 'https://dizitaladda.com/digital-marketing',
    siteName: 'DizitalAdda',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <meta name="googlebot" content="noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="icon" href="https://dizitaladda.com/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Nunito+Sans:wght@400;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#faf7fc] text-[#200e30] antialiased selection:bg-[#4b1864] selection:text-white">
        {children}
      </body>
    </html>
  );
}
