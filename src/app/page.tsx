import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhySutex } from "@/components/WhySutex";
import { Services } from "@/components/Services";
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
      <WhySutex />
      <Services />
      <EngineeringFramework />
      <About />
      <Footer />
    </main>
  );
}
