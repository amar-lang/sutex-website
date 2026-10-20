import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Framework",
  description:
    "The Sutex 4-stage engineering framework: Strategic Discovery, Logic Extraction, Multi-Platform Deployment, and Industrial Scaling. Built for mission-critical precision.",
  alternates: {
    canonical: "/framework",
  },
  openGraph: {
    title: "The Sutex Engineering Framework | Architecting the Future",
    description:
      "Our proprietary 4-stage process delivers 3x faster deployment, 100% logic accuracy, and industrial-grade security.",
    url: "https://sutex.in/framework",
  },
};

export default function FrameworkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
