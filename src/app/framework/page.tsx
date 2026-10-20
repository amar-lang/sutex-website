"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlobalHUD } from "@/components/GlobalHUD";
import {
    Compass,
    Workflow,
    Share2,
    Cloud,
    Sparkles,
    ShieldCheck,
    Zap,
    Network,
    ArrowRight,
    Cpu,
    Lock,
    Scale
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const frameworkStages = [
    {
        id: "01",
        title: "Strategic Discovery",
        label: "Blueprinting & Auditing",
        icon: Compass,
        description: "We begin with a strategic deep-dive into your objectives—whether auditing existing infrastructure or blueprinting a new project from scratch. We map the architectural DNA required for industrial-grade scaling.",
        details: [
            "New Venture Blueprinting",
            "Infrastructure Vulnerability Audit",
            "Scalability Roadmap Design",
            "Resource Optimization Strategy"
        ],
        aiNote: "Expert-led discovery reinforced by proprietary auditing frameworks."
    },
    {
        id: "02",
        title: "Logic Extraction",
        label: "Decoupling & Migration",
        icon: Network,
        description: "The core of the Sutex Engine. We systematically decouple complex business logic from legacy systems (Groovy, legacy Node, obsolete PHP) and port it to modern, type-safe architectures with industrial-grade precision.",
        details: [
            "High-Fidelity Logic Auditing",
            "Proprietary extraction framework",
            "Type-Safe Porting (TypeScript/Next.js)",
            "Automated Verification Suites"
        ],
        aiNote: "Expert-led logic porting reinforced by high-velocity frameworks.",
        isAiHeavy: true
    },
    {
        id: "03",
        title: "Multi-Platform Deployment",
        label: "Ecosystem Engineering",
        icon: Share2,
        description: "We build unified digital ecosystems. Using shared business logic, we deploy high-performance applications across mobile (Flutter) and web (React/Next.js) simultaneously.",
        details: [
            "Unified Business Logic Layer (BNoC)",
            "Cross-Platform UI Continuity",
            "High-Performance Native Bridges",
            "Omni-Channel Sync Architecture"
        ],
        aiNote: "Accelerated build pipelines for 3x faster deployment."
    },
    {
        id: "04",
        title: "Industrial Scaling",
        label: "Cloud Reliability",
        icon: Cloud,
        description: "Deployment is just the beginning. We architect for the 'Industrial Future,' ensuring your system expands seamlessly on cloud infrastructure with mission-critical reliability.",
        details: [
            "Auto-Scaling Cloud Infrastructure",
            "Real-Time Reliability Auditing",
            "Security Hardening & Encapsulation",
            "Self-Healing Architecture Design"
        ],
        aiNote: "AI-driven reliability monitoring and stress testing."
    }
];

export default function FrameworkPage() {
    const heroRef = useRef<HTMLElement>(null);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section ref={heroRef} className="pt-32 pb-24 bg-sutex-navy text-white relative overflow-hidden group/section">
                <GlobalHUD
                    sectionRef={heroRef}
                    theme="dark"
                    nodes={[
                        { top: '15%', left: '15%', color: 'orange', delay: '0.5s' },
                        { top: '65%', left: '75%', color: 'orange', delay: '1.5s' },
                        { top: '35%', left: '85%', color: 'navy', delay: '2s' }
                    ]}
                />
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                    <Network size={800} />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-sutex-orange mb-4">Engineering Standard</h2>
                        <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tight">
                            The Sutex <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">Engineering Framework</span>
                        </h1>
                        <p className="max-w-2xl text-xl text-slate-400 font-medium leading-relaxed">
                            Architecting the future through senior-led engineering and high-velocity development frameworks. Our 4-stage process is built for mission-critical precision, speed, and reliability.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Scrolling Story / Stages */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-32">
                        {frameworkStages.map((stage, idx) => (
                            <div key={stage.id} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Visual Side */}
                                <div className="w-full lg:w-1/2">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className="relative p-12 bg-slate-50 rounded-[3rem] border border-slate-100 overflow-hidden group"
                                    >
                                        <div className="absolute -top-10 -right-10 text-[12rem] font-black text-white group-hover:text-sutex-orange/5 transition-colors select-none">
                                            {stage.id}
                                        </div>
                                        <div className="relative z-10">
                                            <div className="w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                                                <stage.icon className="text-sutex-navy group-hover:text-sutex-orange transition-colors" size={40} />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                {stage.details.map((detail, dIdx) => (
                                                    <div key={dIdx} className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-100 flex items-start space-x-3">
                                                        <ShieldCheck className="text-green-500 w-4 h-4 mt-0.5 shrink-0" />
                                                        <span className="text-[10px] font-bold uppercase tracking-widest text-sutex-navy opacity-80">{detail}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2 space-y-8">
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-sutex-orange mb-4 block">{stage.label}</span>
                                        <h3 className="text-3xl md:text-4xl font-black text-sutex-navy mb-6">{stage.title}</h3>
                                        <p className="text-lg text-gray-500 leading-relaxed font-medium">
                                            {stage.description}
                                        </p>
                                    </div>

                                    <div className="bg-sutex-navy/5 p-6 rounded-2xl border-l-4 border-sutex-orange flex items-center space-x-4">
                                        <div className="p-2 bg-sutex-orange/20 rounded-lg">
                                            <Sparkles className="text-sutex-orange w-5 h-5" />
                                        </div>
                                        <p className="text-xs font-black uppercase tracking-widest text-sutex-navy">
                                            {stage.aiNote}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industrial Stats / Why it works */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-3xl font-black text-sutex-navy mb-16 uppercase tracking-widest">Architectural Advantage</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-12 bg-white rounded-3xl shadow-sm border border-slate-100">
                            <Zap className="text-sutex-orange w-10 h-10 mx-auto mb-6" />
                            <h4 className="text-4xl font-black mb-2">3X</h4>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Faster Deployment</p>
                        </div>
                        <div className="p-12 bg-white rounded-3xl shadow-sm border border-slate-100">
                            <Scale className="text-sutex-orange w-10 h-10 mx-auto mb-6" />
                            <h4 className="text-4xl font-black mb-2">100%</h4>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Logic Accuracy</p>
                        </div>
                        <div className="p-12 bg-white rounded-3xl shadow-sm border border-slate-100">
                            <Lock className="text-sutex-orange w-10 h-10 mx-auto mb-6" />
                            <h4 className="text-4xl font-black mb-2">Industrial</h4>
                            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Grade Security</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="p-16 bg-sutex-navy rounded-[4rem] text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                            <Cpu size={300} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-5xl font-black mb-8 tracking-tight">Ready to Blueprint <br />Your Industrial Future?</h3>
                            <p className="text-slate-400 mb-12 max-w-xl mx-auto font-medium">
                                Start with Stage 01. Every great architecture begins with a strategic audit and requirement mapping.
                            </p>
                            <Link href="/contact">
                                <Button className="bg-sutex-orange hover:bg-sutex-orange/90 text-white font-black py-8 px-12 rounded-none uppercase tracking-[0.2em] text-sm group">
                                    Initiate Stage 01 Audit
                                    <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
