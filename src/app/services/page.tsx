"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Zap, ShieldCheck, Target } from "lucide-react";
import { GlobalHUD } from "@/components/GlobalHUD";

export default function ServicesPage() {
    const heroRef = useRef<HTMLElement>(null);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Services Hero */}
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
                    <Target size={600} />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-sutex-orange mb-4">Solutions Ecosystem</h2>
                        <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tight">
                            Our Solutions <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">Portfolio</span>
                        </h1>
                        <p className="max-w-2xl text-xl text-slate-400 font-medium leading-relaxed">
                            Industrial-grade engineering fused with Agentic AI.
                            We don't just build software; we architect results-oriented digital ecosystems.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Component (The 4 cards) */}
            <Services />

            {/* Detailed Solutions Narrative */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:shadow-lg">
                            <div className="w-12 h-12 bg-sutex-orange/10 rounded-2xl flex items-center justify-center">
                                <Zap className="text-sutex-orange w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black text-sutex-navy">3x Delivery Speed</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                By augmenting our human architects with proprietary Agentic AI models, we deliver complex modernization projects up to 3 times faster than traditional agencies.
                            </p>
                        </div>
                        <div className="space-y-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:shadow-lg">
                            <div className="w-12 h-12 bg-sutex-navy/10 rounded-2xl flex items-center justify-center">
                                <ShieldCheck className="text-sutex-navy w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black text-sutex-navy">Zero-Fault Logic</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Our AI-driven migration tools ensure 100% precision when porting legacy business logic, eliminating the risks associated with manual extraction.
                            </p>
                        </div>
                        <div className="space-y-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 transition-all hover:shadow-lg">
                            <div className="w-12 h-12 bg-sutex-orange/10 rounded-2xl flex items-center justify-center">
                                <Target className="text-sutex-orange w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-black text-sutex-navy">Industrial Scale</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Every architectural blueprint we design is built for infinite scalability, supporting mission-critical operations with industrial-grade reliability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
