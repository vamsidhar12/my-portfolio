import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { personal } from "@/data/portfolio";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const BASE_URL = "https://vamsidharreddy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: `${personal.name} — ${personal.title}`,
  description: personal.tagline,
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
    description: personal.tagline,
    url: BASE_URL,
    siteName: `${personal.name} Portfolio`,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.title}`,
    description: personal.tagline,
    creator: "@vamsidhar12",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
