import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Products built and operated by Sutex — starting with ApartMeter, our flagship metering & billing SaaS for apartment societies, live in Karnataka.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Products | Sutex",
    description:
      "Products built and operated by Sutex on the same engineering framework we offer clients.",
    url: "https://sutex.in/products",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
