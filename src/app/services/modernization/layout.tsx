import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legacy Modernization & Migration",
  description:
    "Specialist decoupling and AI-driven porting of complex business logic from legacy systems (Groovy, PHP, Node) to modern, high-performance architectural stacks.",
  alternates: {
    canonical: "/services/modernization",
  },
  openGraph: {
    title: "Legacy Modernization & Migration | Sutex",
    description:
      "AI-driven legacy system migration with 100% precision. Decoupling complex business logic to modern architectures.",
    url: "https://sutex.in/services/modernization",
  },
};

export default function ModernizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
