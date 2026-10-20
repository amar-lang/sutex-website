import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Sutex is a registered MSME founded in 2025, specializing in architectural engineering that bridges legacy systems and modern cross-platform ecosystems using AI-augmented workflows.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Sutex | Heritage Meets Intelligent Architecture",
    description:
      "Founded in 2025, Sutex represents the shift from traditional coding to high-authority architectural engineering with AI-augmented workflows.",
    url: "https://sutex.in/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
