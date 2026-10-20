import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sutex to discuss your product engineering, legacy modernization, or digital transformation project. Based in Karnataka, India.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Start Your Project | Contact Sutex",
    description:
      "Ready to modernize your legacy systems or build a high-performance mobile ecosystem? Contact Sutex today.",
    url: "https://sutex.in/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
