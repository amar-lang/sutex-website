"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Boxes, ArrowRight, Sparkles } from "lucide-react";
import { GlobalHUD } from "@/components/GlobalHUD";

const products = [
    {
        name: "ApartMeter",
        // Served by the ApartMeter app itself via Nginx — plain anchor, not a Next route
        href: "/apartmeter/",
        tagline: "Metering & billing for apartment societies",
        description:
            "Our flagship SaaS: per-flat utility metering, maintenance billing and UPI collections for apartment societies. Live in Karnataka.",
        image: "/apartmeter/panel-dashboard.png",
        imageAlt: "ApartMeter committee dashboard showing billing cycle, outstanding dues and flagged readings",
        badge: "Live in Karnataka",
    },
];

export default function ProductsPage() {
    const heroRef = useRef<HTMLElement>(null);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Products Hero */}
            <section ref={heroRef} className="pt-32 pb-24 bg-sutex-navy text-white relative overflow-hidden group/section">
                <GlobalHUD
                    sectionRef={heroRef}
                    theme="dark"
                    nodes={[
                        { top: '15%', left: '10%', color: 'orange', delay: '0s' },
                        { top: '60%', left: '85%', color: 'navy', delay: '1.2s' },
                        { top: '30%', left: '50%', color: 'orange', delay: '2.8s' }
                    ]}
                />
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
                    <Boxes size={600} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-sutex-orange mb-4">Built & Operated by Sutex</h2>
                        <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tight">
                            Our Product <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">Portfolio</span>
                        </h1>
                        <p className="max-w-2xl text-xl text-slate-400 font-medium leading-relaxed">
                            We don't just build for clients — we ship and operate our own products.
                            Every one runs on the same engineering framework we offer the world.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Product Cards */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {products.map((product) => (
                            <a
                                key={product.name}
                                href={product.href}
                                className="group bg-white rounded-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
                            >
                                <div className="relative bg-sutex-navy p-8 pb-0 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.imageAlt}
                                        width={750}
                                        height={470}
                                        className="rounded-t-xl border border-white/10 shadow-2xl w-[88%] ml-auto h-auto translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                                    />
                                    {/* Secondary focus: resident app peeking over the panel */}
                                    <div className="absolute -bottom-10 left-6 w-[24%] min-w-[110px] group-hover:-translate-y-2 transition-transform duration-500">
                                        <Image
                                            src="/apartmeter/app-resident-home.png"
                                            alt="ApartMeter resident Android app showing dues and monthly water and gas usage"
                                            width={270}
                                            height={590}
                                            className="rounded-2xl border border-white/20 shadow-2xl w-full h-auto"
                                        />
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <h3 className="text-2xl font-black text-sutex-navy">{product.name}</h3>
                                        <span className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                                            {product.badge}
                                        </span>
                                    </div>
                                    <p className="text-sm font-bold uppercase tracking-widest text-sutex-orange mb-3">{product.tagline}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">{product.description}</p>
                                    <span className="inline-flex items-center text-xs font-black uppercase tracking-widest text-sutex-navy group-hover:text-sutex-orange transition-colors">
                                        <span>Explore ApartMeter</span>
                                        <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </a>
                        ))}

                        {/* Placeholder for upcoming products */}
                        <div className="border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center p-12 min-h-[320px]">
                            <div className="p-4 bg-sutex-orange/10 rounded-2xl mb-6">
                                <Sparkles className="text-sutex-orange w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-black text-sutex-navy mb-3">More in the Works</h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                                New products are being engineered on the same framework that powers ApartMeter. Watch this space.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
