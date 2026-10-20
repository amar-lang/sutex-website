import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sutex | Innovate. Build. Scale.",
    template: "%s | Sutex",
  },
  description:
    "Premier IT startup specializing in Zero-to-One product engineering, high-performance solution ecosystems, and industrial-grade modernization.",
  keywords: [
    "Sutex",
    "product engineering",
    "legacy modernization",
    "Flutter development",
    "Next.js development",
    "AI engineering",
    "cross-platform apps",
    "software consultancy",
    "MSME India",
    "mobile app development",
    "web development",
    "digital transformation",
  ],
  authors: [{ name: "Sutex", url: "https://sutex.in" }],
  creator: "Sutex",
  publisher: "Sutex",
  metadataBase: new URL("https://sutex.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sutex.in",
    siteName: "Sutex",
    title: "Sutex | Innovate. Build. Scale.",
    description:
      "Premier IT startup specializing in Zero-to-One product engineering, high-performance solution ecosystems, and industrial-grade modernization.",
    images: [
      {
        url: "/sutexlogo.png",
        width: 300,
        height: 100,
        alt: "Sutex - Innovate. Build. Scale.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sutex | Innovate. Build. Scale.",
    description:
      "Premier IT startup specializing in Zero-to-One product engineering, high-performance solution ecosystems, and industrial-grade modernization.",
    images: ["/sutexlogo.png"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sutex",
  url: "https://sutex.in",
  logo: "https://sutex.in/sutexlogo.png",
  description:
    "Premier IT startup specializing in Zero-to-One product engineering, high-performance solution ecosystems, and industrial-grade modernization.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ron, Gadag",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9448556091",
    contactType: "sales",
    email: "sutexsolutions@gmail.com",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
