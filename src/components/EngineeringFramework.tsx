"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Compass,
    Workflow,
    Share2,
    Cloud,
    ChevronRight,
    ShieldCheck,
    Zap,
    Box,
    Sparkles,
    Network,
    ArrowUpRight
} from "lucide-react";

/**
 * 01 Discovery: Technical Audits and Requirement Mapping.
 * 02 Logic Extraction: Port complex legacy business logic to modern architectures.
 * 03 Multi-Platform Deployment: Unified ecosystems for mobile and web.
 * 04 Scaling: Industrial-grade cloud expansion and system reliability.
 */
const frameworkSteps = [
    {
        id: "01",
        label: "Discovery",
        title: "Intelligence & Audit",
        icon: Compass,
        description: "Deep-dive technical audits and requirement mapping to align architectural vision with business objectives.",
        result: "Comprehensive Technical Blueprint",
        isAiAugmented: false
    },
    {
        id: "02",
        label: "Logic Extraction",
        title: "AI-Driven Migration",
        icon: Network, // Use Network for AI logic extraction
        description: "Decoupling complex legacy logic and porting it to modern stacks with 100% precision using our proprietary AI-augmented tools.",
        result: "Verified Scalable Logic",
        isAiAugmented: true
    },
    {
        id: "03",
        label: "Deployment",
        title: "Unified Ecosystem",
        icon: Share2,
        description: "Architecting multi-platform deployment strategies that ensure high-performance continuity across mobile and web.",
        result: "Omni-Platform Performance",
        isAiAugmented: true
    },
    {
        id: "04",
        label: "Scaling",
        title: "Industrial Reliability",
        icon: Cloud,
        description: "Industrial-grade cloud expansion and rigorous reliability testing for mission-critical system resilience.",
        result: "Infinite Scalability",
        isAiAugmented: false
    }
];

export function EngineeringFramework() {
    return (
        <section id="framework" className="py-24 bg-white text-sutex-navy">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-sutex-orange mb-4">The Sutex Engineering Framework</h2>
                        <Link href="/framework" className="group inline-block">
                            <p className="text-4xl md:text-5xl font-black mb-6 tracking-tight group-hover:text-sutex-orange transition-colors">
                                Architecting the Future
                                <ArrowUpRight className="inline-block ml-4 w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </p>
                        </Link>
                        <p className="max-w-3xl mx-auto text-gray-500 text-lg md:text-xl font-medium">
                            Moving beyond coding. We build proprietary engineering frameworks focused on result-oriented scalability and modernization.
                        </p>
                    </motion.div>
                </div>

                {/* Horizontal Timeline / Architectural Flow */}
                <div className="relative mt-20">
                    {/* Connecting Line */}
                    <div className="absolute top-14 left-[10%] right-[10%] h-0.5 bg-slate-100 hidden lg:block"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {frameworkSteps.map((step, idx) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.15 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-500 hover:bg-slate-50 border border-transparent hover:border-slate-100 relative overflow-hidden">
                                    {/* AI Marker */}
                                    {step.isAiAugmented && (
                                        <div className="absolute top-4 right-4 text-sutex-orange opacity-40 group-hover:opacity-100 transition-opacity">
                                            <Sparkles size={16} />
                                        </div>
                                    )}

                                    {/* Number & Icon Circle */}
                                    <div className="w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center mb-8 relative z-10 border border-slate-50 group-hover:border-sutex-orange transition-all duration-500">
                                        <span className="absolute -top-1 -right-1 text-4xl font-black text-slate-100 group-hover:text-sutex-orange/10 select-none transition-colors">
                                            {step.id}
                                        </span>
                                        <step.icon className="w-12 h-12 text-sutex-navy group-hover:text-sutex-orange transition-colors duration-500" />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-4 text-center">
                                        <span className="text-xs font-bold uppercase tracking-widest text-sutex-orange">{step.label}</span>
                                        <h3 className="text-xl font-black">{step.title}</h3>
                                        <p className="text-gray-500 leading-relaxed text-sm">
                                            {step.description}
                                        </p>

                                        {/* Result Badge */}
                                        <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-center space-x-2">
                                            <ShieldCheck className="w-4 h-4 text-green-500" />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-sutex-navy opacity-70">
                                                {step.result}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Progress Indicator (Connecting Arrow) */}
                                    {idx < frameworkSteps.length - 1 && (
                                        <div className="absolute top-14 -right-4 hidden lg:block z-20">
                                            <ChevronRight className="w-5 h-5 text-slate-200 group-hover:text-sutex-orange transition-colors" />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-32 p-12 bg-sutex-navy rounded-[3rem] text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <Box className="w-48 h-48 text-white" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-6">Proprietary Engineering Standard</h3>
                        <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                            Our framework is designed for industrial-grade reliability, ensuring that every modernization project delivers measurable results in scalability and performance.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <div className="flex flex-wrap justify-center gap-4">
                                <div className="px-6 py-3 bg-white/10 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-white flex items-center space-x-2">
                                    <Zap className="w-4 h-4 text-sutex-orange" />
                                    <span>Modernization-First</span>
                                </div>
                                <div className="px-6 py-3 bg-white/10 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-white flex items-center space-x-2">
                                    <ShieldCheck className="w-4 h-4 text-sutex-orange" />
                                    <span>Industrial Reliability</span>
                                </div>
                            </div>
                            <Link href="/framework">
                                <div className="px-8 py-3 bg-sutex-orange text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-sutex-orange/90 transition-colors cursor-pointer">
                                    Deep-Dive into Framework
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
