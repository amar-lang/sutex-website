"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceContactForm } from "@/components/ServiceContactForm";
import { ChevronRight, ShieldCheck, Sparkles, LucideIcon } from "lucide-react";
import { GlobalHUD } from "@/components/GlobalHUD";

interface ProcessStep {
    title: string;
    description: string;
}

interface ServicePageLayoutProps {
    title: string;
    description: string;
    icon: LucideIcon;
    problem: string;
    solution: string;
    process: ProcessStep[];
    outcome: string;
    isAiAugmented?: boolean;
}

export function ServicePageLayout({
    title,
    description,
    icon: Icon,
    problem,
    solution,
    process,
    outcome,
    isAiAugmented = false
}: ServicePageLayoutProps) {
    const heroRef = useRef<HTMLElement>(null);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section ref={heroRef} className="pt-32 pb-20 bg-sutex-navy text-white relative overflow-hidden group/section">
                <GlobalHUD
                    sectionRef={heroRef}
                    theme="dark"
                    nodes={[
                        { top: '25%', left: '15%', color: 'orange', delay: '0.2s' },
                        { top: '75%', left: '85%', color: 'navy', delay: '1s' },
                        { top: '45%', left: '50%', color: 'orange', delay: '2s' }
                    ]}
                />
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
                    <Icon size={400} />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="p-3 bg-sutex-orange/20 rounded-xl">
                                <Icon className="text-sutex-orange" size={32} />
                            </div>
                            {isAiAugmented && (
                                <span className="px-4 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center">
                                    <Sparkles className="w-3 h-3 mr-2 text-sutex-orange" />
                                    AI-Augmented
                                </span>
                            )}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">{title}</h1>
                        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
                            {description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Problem & Solution */}
            <section className="py-24 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-sutex-orange mb-6">The Challenge</h2>
                            <p className="text-2xl font-bold text-sutex-navy leading-relaxed">
                                {problem}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-sutex-navy mb-6">The Sutex Approach</h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                {solution}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-black text-sutex-navy text-center mb-16 uppercase tracking-widest">The Implementation Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative group">
                                <span className="text-5xl font-black text-slate-50 absolute top-4 right-4 group-hover:text-sutex-orange/10 transition-colors">
                                    0{idx + 1}
                                </span>
                                <h3 className="text-lg font-bold mb-4 relative z-10">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                                    {step.description}
                                </p>
                                {idx < process.length - 1 && (
                                    <div className="absolute top-1/2 -right-4 hidden lg:block text-slate-200">
                                        <ChevronRight size={24} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Business Outcome */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex p-4 bg-green-50 rounded-2xl mb-8">
                        <ShieldCheck className="text-green-500 w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-black text-sutex-navy mb-6 uppercase tracking-tight">The Measured Outcome</h2>
                    <p className="text-2xl text-gray-600 font-medium leading-relaxed italic">
                        "{outcome}"
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ServiceContactForm defaultService={title} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
