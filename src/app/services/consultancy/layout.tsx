import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Technical Consultancy",
  description:
    "Deep-dive technical audits, architectural roadmaps, and modernization strategies designed for measurable business outcomes by Sutex's senior engineers.",
  alternates: {
    canonical: "/services/consultancy",
  },
  openGraph: {
    title: "Strategic Technical Consultancy | Sutex",
    description:
      "Expert technical audits and architectural roadmaps for measurable business outcomes.",
    url: "https://sutex.in/services/consultancy",
  },
};

export default function ConsultancyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
