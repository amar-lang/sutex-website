import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { FeaturedProduct } from "@/components/FeaturedProduct";
import { EngineeringFramework } from "@/components/EngineeringFramework";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <FeaturedProduct />
      <EngineeringFramework />
      <About />
      <Footer />
    </main>
  );
}
