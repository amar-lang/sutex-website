import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zero-to-One Product Engineering",
  description:
    "Launch high-performance mobile and web ecosystems from scratch. Sutex specializes in mission-critical products with Flutter and Next.js for cross-platform continuity.",
  alternates: {
    canonical: "/services/ecosystems",
  },
  openGraph: {
    title: "Zero-to-One Product Engineering | Sutex",
    description:
      "Building mission-critical mobile and web products with architectural scalability and cross-platform continuity.",
    url: "https://sutex.in/services/ecosystems",
  },
};

export default function EcosystemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
