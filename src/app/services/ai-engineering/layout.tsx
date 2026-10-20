import { Metadata } from "next";

export const metadata: Metadata = {
  title: "High-Velocity Systems Engineering",
  description:
    "Engineering bespoke strategic platforms and greenfield architectures. High-speed delivery through proprietary internal frameworks and expert architectural oversight.",
  alternates: {
    canonical: "/services/ai-engineering",
  },
  openGraph: {
    title: "High-Velocity Systems Engineering | Sutex",
    description:
      "Bespoke strategic platforms delivered 3x faster through proprietary frameworks and expert architectural oversight.",
    url: "https://sutex.in/services/ai-engineering",
  },
};

export default function AIEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
