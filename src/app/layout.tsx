import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { personal } from "@/data/portfolio";
import MotionProvider from "@/components/MotionProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const BASE_URL = "https://vamsidharreddy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: `${personal.name} — ${personal.title}`,
  description: personal.siteDescription,
  keywords: [
    "Vamsidhar Reddy Poothi",
    "Senior Software Engineer",
    "Distributed Systems",
    "Cloud Native",
    "Platform Engineering",
    "Microsoft",
    "Azure",
    "AWS",
    "Full Stack Developer",
    "Dallas TX",
  ],
  authors: [{ name: personal.name, url: personal.github }],
  openGraph: {
    title: `${personal.name} — ${personal.title}`,
    description: personal.siteDescription,
    url: BASE_URL,
    siteName: `${personal.name} Portfolio`,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.title}`,
    description: personal.siteDescription,
    creator: "@vamsidhar12",
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  jobTitle: personal.title,
  url: BASE_URL,
  address: { "@type": "PostalAddress", addressLocality: "Dallas", addressRegion: "TX", addressCountry: "US" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Texas Tech University" },
    { "@type": "CollegeOrUniversity", name: "Andhra University" },
  ],
  sameAs: [personal.github, personal.linkedin, personal.leetcode],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* Inline script prevents flash of wrong theme before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');})();`,
          }}
        />
      </head>
      <body className="antialiased min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-indigo-600 focus:text-white"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>{children}</MotionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
