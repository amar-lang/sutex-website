import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Sutex's core services: Zero-to-One product engineering, legacy modernization, high-velocity systems engineering, and strategic technical consultancy.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | Sutex Solutions Portfolio",
    description:
      "Industrial-grade engineering fused with Agentic AI. We architect results-oriented digital ecosystems with 3x faster deployment.",
    url: "https://sutex.in/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
