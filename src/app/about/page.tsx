"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlobalHUD } from "@/components/GlobalHUD";
import {
    ShieldCheck,
    Sparkles,
    Zap,
    Globe,
    Database,
    Smartphone,
    Code2,
    ArrowRight,
    MapPin,
    FileCheck,
    Users,
    History
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const timelineEvents = [
    {
        date: "June 2025",
        title: "Incorporation",
        description: "Sutex was founded with a mission to bridge the gap between legacy systems and modern cross-platform ecosystems."
    },
    {
        date: "Late 2025",
        title: "Scaling Engineering",
        description: "Focus on Flutter and Node.js specialization, delivering high-performance mobile and web solutions for early partners."
    },
    {
        date: "2026 Model",
        title: "AI-Augmented Transition",
        description: "Transitioned to a proprietary AI-augmented workflow, fusing human architectural oversight with Agentic AI acceleration."
    },
    {
        date: "Today",
        title: "The Sutex Standard",
        description: "Positions as a high-authority architectural partner, delivering industrial-grade reliability and 3x faster deployment."
    }
];

export default function AboutPage() {
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
                        { top: '20%', left: '10%', color: 'orange', delay: '0s' },
                        { top: '70%', left: '80%', color: 'navy', delay: '1s' },
                        { top: '40%', left: '60%', color: 'orange', delay: '2.5s' }
                    ]}
                />
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
                    <Users size={600} />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-sutex-orange mb-4">Our Identity</h2>
                        <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tight">
                            Heritage Meets <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">Intelligent Architecture</span>
                        </h1>
                        <p className="max-w-2xl text-xl text-slate-400 font-medium leading-relaxed">
                            Established in 2025, Sutex represents the shift from traditional coding to high-authority architectural engineering.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Founder's Message */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-sm border border-slate-100 relative">
                        <div className="absolute top-10 left-10 text-sutex-orange/10 pointer-events-none">
                            <span className="text-9xl font-serif">"</span>
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-sm font-black uppercase tracking-widest text-sutex-orange mb-10">Message from the Founder</h2>
                            <blockquote className="text-2xl md:text-4xl font-serif italic text-sutex-navy leading-relaxed mb-12">
                                "The inefficiencies of traditional coding are the bottlenecks of 2026. At Sutex, we realized that the future isn't just about writing code; it's about architecting systems that scale. By fusing human architectural wisdom with Agentic AI, we don't just build software—we deliver industrial-grade reliability at the speed of thought."
                            </blockquote>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-1 bg-sutex-orange"></div>
                                <p className="font-bold text-sutex-navy uppercase tracking-widest text-sm">Founder & Lead Architect, Sutex</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Engineering Excellence */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-3xl font-black text-sutex-navy mb-8 uppercase tracking-tight">Engineering Excellence</h2>
                            <div className="space-y-6 text-gray-600 leading-relaxed font-medium capitalize">
                                <p>
                                    Our technical DNA is rooted in <strong className="text-sutex-navy">Greenfield Product Engineering</strong> and <strong className="text-sutex-navy">Complex Logic Migration</strong>. We specialize in building cross-platform ecosystems using <strong className="text-sutex-navy">Flutter</strong> and <strong className="text-sutex-navy">Next.js</strong>, ensuring that your mobile and web infrastructure share a single, robust source of truth.
                                </p>
                                <p>
                                    Beyond new builds, we are specialists in <strong className="text-sutex-navy">Legacy Porting</strong>. We have extensive experience extracting business logic from established systems—including those built on <strong className="text-sutex-navy">Groovy</strong> and legacy backends—and refactoring them into modern, high-performance architectures.
                                </p>
                            </div>
                            <div className="space-y-6 mt-8">
                                {[
                                    { icon: Smartphone, title: "Flutter & Mobile Ecosystems", desc: "Native-grade performance for iOS and Android." },
                                    { icon: Code2, title: "Next.js & Web Architecture", desc: "High-authority, SEO-optimized web platforms." },
                                    { icon: Database, title: "Legacy System Porting", desc: "Safe logic extraction from Groovy and legacy Node." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start space-x-4 group">
                                        <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-sutex-orange/10 transition-colors">
                                            <item.icon className="text-sutex-navy group-hover:text-sutex-orange transition-colors" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sutex-navy">{item.title}</h4>
                                            <p className="text-sm text-gray-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-sutex-navy p-12 rounded-[3rem] text-white relative overflow-hidden">
                            <div className="absolute -bottom-10 -right-10 opacity-10">
                                <Sparkles size={300} />
                            </div>
                            <h3 className="text-2xl font-black mb-8">The Human-AI Synergy</h3>
                            <div className="space-y-8 relative z-10">
                                <div className="flex items-center space-x-6">
                                    <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center font-black text-xl">H</div>
                                    <div className="h-0.5 w-12 bg-white/20"></div>
                                    <div className="p-4 bg-sutex-orange rounded-2xl font-black text-xs uppercase tracking-widest">Architectural Oversight</div>
                                </div>
                                <div className="flex items-center space-x-6 ml-8">
                                    <div className="w-16 h-16 rounded-full border-2 border-sutex-orange/40 flex items-center justify-center text-sutex-orange"><Sparkles size={24} /></div>
                                    <div className="h-0.5 w-12 bg-sutex-orange/20"></div>
                                    <div className="p-4 bg-white/10 rounded-2xl font-black text-[10px] uppercase tracking-widest">Agentic AI Acceleration</div>
                                </div>
                                <div className="pt-8 border-t border-white/10 mt-8">
                                    <p className="text-slate-400 text-sm italic">"AI handles the repetition; Sutex Engineers handle the vision."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth Timeline */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-3xl font-black text-sutex-navy mb-20 uppercase tracking-widest">The Growth Curve</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-slate-200 hidden md:block"></div>
                        <div className="space-y-16">
                            {timelineEvents.map((event, idx) => (
                                <div key={idx} className={`flex flex-col md:flex-row items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="w-full md:w-1/2 px-8 py-4 text-center md:text-left">
                                        <div className={`p-8 bg-white rounded-3xl shadow-sm border border-slate-100 ${idx % 2 === 1 ? 'md:text-right' : ''}`}>
                                            <span className="text-xs font-black text-sutex-orange uppercase tracking-[0.3em] mb-2 block">{event.date}</span>
                                            <h4 className="text-xl font-bold text-sutex-navy mb-4 font-serif">{event.title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{event.description}</p>
                                        </div>
                                    </div>
                                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-sutex-orange border-4 border-white shadow-md hidden md:block"></div>
                                    <div className="w-full md:w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Official Credentials */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="p-12 md:p-16 border-2 border-sutex-navy/10 rounded-[4rem] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-black text-sutex-navy mb-6 uppercase tracking-tight">Legal Identity</h2>
                            <p className="text-gray-500 font-medium mb-10">
                                As a registered MSME under the laws of India, Sutex operates with full transparency and industrial protection.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-green-50 rounded-xl">
                                        <FileCheck className="text-green-600" size={24} />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">Udyam Registration</span>
                                        <p className="font-mono text-sutex-navy font-bold tracking-tighter">UDYAM-KR-14-0029139</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-blue-50 rounded-xl">
                                        <MapPin className="text-blue-600" size={24} />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">Official Address</span>
                                        <p className="font-bold text-sutex-navy">Mannat, Ron, Gadag, Karnataka, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-12 rounded-[3rem] text-center">
                            <ShieldCheck className="w-16 h-16 text-sutex-orange mx-auto mb-6" />
                            <h4 className="text-xl font-black text-sutex-navy mb-4">Industrial Grade Trust</h4>
                            <p className="text-sm text-gray-500 leading-relaxed mb-8">
                                Our MSME status ensures rigorous compliance and delivery standards for all government and industrial contracts.
                            </p>
                            <Link href="/contact">
                                <Button className="bg-sutex-navy hover:bg-sutex-navy/90 text-white font-bold uppercase tracking-widest text-xs px-8 h-12 rounded-none">
                                    Verify Documentation
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
