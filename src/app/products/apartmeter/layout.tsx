import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ApartMeter — Metering & Billing for Apartment Societies",
  description:
    "ApartMeter bills every flat for what it actually used — photo-verified meter readings, one audit-ready statement for water, gas, maintenance and arrears, and UPI collections. ₹20 per flat per month. Live in Karnataka.",
  alternates: {
    canonical: "/products/apartmeter",
  },
  openGraph: {
    title: "ApartMeter — Metering & Billing for Apartment Societies | Sutex",
    description:
      "Stop splitting bills. Meter every flat. Collect on time. Per-flat utility metering, maintenance billing and UPI collections for apartment societies.",
    url: "https://sutex.in/products/apartmeter",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ApartMeter",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Android, Web",
  description:
    "Metering and billing SaaS for apartment societies: photo-verified meter self-reading, OCR dial reading, one audit-ready statement for water, gas, maintenance and arrears, and UPI collections.",
  url: "https://sutex.in/apartmeter/",
  offers: {
    "@type": "Offer",
    price: "20",
    priceCurrency: "INR",
    description: "₹20 per flat per month, ₹400 minimum. 30-day free trial.",
  },
  creator: {
    "@type": "Organization",
    name: "Sutex",
    url: "https://sutex.in",
  },
};

export default function ApartMeterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
