import { Navbar } from "@/components";
import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import Script from "next/script";
import Head from "next/head";

import { Footer, FloatingContactWidget, TawkToWidget } from "@/components";
import { LearningStatsSection } from "@/components/HomePageSections";
import CopyrightSection from "@/components/HomePageSections/CopyrightSection";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

export const metadata: Metadata = {
  title: "Best AI-Powered Online Learning Platform | Shiksha Nation",
  description:
    "Best AI-based Online courses for classes 6–12, JEE, NEET & CUET. Learn with expert teachers anytime, anywhere to improve academic performance.",
  keywords: "online learning, AI education, JEE preparation, NEET coaching, class 6-12 courses, expert teachers",
  authors: [{ name: "Shiksha Nation" }],
  creator: "Shiksha Nation",
  publisher: "Shiksha Nation",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Shikshanation",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shikshanation.com/",
    title: "Best AI-Powered Online Learning Platform | Shiksha Nation",
    description: "Best AI-based Online courses for classes 6–12, JEE, NEET & CUET. Learn with expert teachers anytime, anywhere.",
    siteName: "Shiksha Nation",
    images: [
      {
        url: "/home/ShikshaBase.png",
        width: 1200,
        height: 630,
        alt: "Shiksha Nation - AI-Powered Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shikshanation",
    creator: "@shikshanation",
    title: "Best AI-Powered Online Learning Platform | Shiksha Nation",
    description: "Best AI-based Online courses for classes 6–12, JEE, NEET & CUET.",
    images: ["/home/ShikshaBase.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Shiksha Nation",
    alternateName: "Shiksha Nation",
    url: "https://shikshanation.com/",
    logo: "https://shikshanation.com/_next/image?url=%2Fhome%2Flogo.webp&w=256&q=75",
    sameAs: [
      "https://www.facebook.com/shikshanation24/",
      "https://x.com/shikshanation",
      "https://www.instagram.com/shikshanation/",
      "https://www.youtube.com/@Shiksha_Nation",
      "https://www.linkedin.com/company/shikshanation/",
    ],
  };
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="SqOv08EL3rVNZLaQhI5gjSYn9J8-XDevKVDsdyUKK0g"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Shikshanation" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        {/* Resource Hints for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/home/ShikshaBase.png" as="image" type="image/png" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://embed.tawk.to" />

        {/* JSON-LD Structured Data */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgSchema),
          }}
        />
      </head>

      <body className={`${lexendDeca.className}`}>
        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T75L3CTC');`,
          }}
        />

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T75L3CTC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <Toaster position="bottom-center" />
        {children}
        <LearningStatsSection />
        <Footer />
        <CopyrightSection />
        <FloatingContactWidget />
        <TawkToWidget />
      </body>
    </html>
  );
}
