"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceContactForm } from "@/components/ServiceContactForm";
import { GlobalHUD } from "@/components/GlobalHUD";
import {
    Camera,
    ScanLine,
    CheckCircle2,
    ReceiptText,
    IndianRupee,
    Smartphone,
    LayoutDashboard,
    ShieldCheck,
    MessageCircle,
    Landmark,
    Lock,
} from "lucide-react";

const stats = [
    { value: "₹20", label: "per flat / month" },
    { value: "30 days", label: "free trial, full product" },
    { value: "20 sec", label: "to photo-submit a reading" },
    { value: "100%", label: "readings backed by photo proof" },
];

const flow = [
    {
        title: "Resident photo-reads the meter",
        description: "Residents snap their own meter in the app — no reader visits, no manual registers.",
        icon: Camera,
    },
    {
        title: "OCR reads the dial",
        description: "On-device ML reads the dial and flags anomalies — spikes, rollbacks, blurry shots — for review.",
        icon: ScanLine,
    },
    {
        title: "Committee approves",
        description: "Flagged readings land in the web panel; the committee reviews with photo proof and approves.",
        icon: CheckCircle2,
    },
    {
        title: "One-click statements",
        description: "Water, gas, maintenance and arrears generate into one immutable, audit-ready statement per flat.",
        icon: ReceiptText,
    },
    {
        title: "UPI pay-link & live dues",
        description: "Every statement carries a pay-by-UPI link; reminders go out automatically and the dues board updates live.",
        icon: IndianRupee,
    },
];

const features = [
    {
        eyebrow: "For Residents",
        title: "Photo-verified self-reading",
        description:
            "Residents snap their own meter; on-device OCR reads the dial and flags anomalies for committee review. Every reading is backed by a photo — no disputes, no estimates. Works offline-first, so patchy connectivity in the meter room doesn't matter.",
        image: "/apartmeter/app-capture-screen.png",
        imageAlt: "ApartMeter app capturing a photo of a gas meter with last month's reading shown",
        phone: true,
    },
    {
        eyebrow: "For the Committee",
        title: "Review, approve, generate — in minutes",
        description:
            "The web panel shows the whole billing cycle at a glance: who has submitted, what's flagged, and which flats owe. Resolve flagged readings with photo proof, set tariffs once, and generate every flat's statement in one click.",
        image: "/apartmeter/panel-review.png",
        imageAlt: "ApartMeter committee panel showing self-read submissions and flagged readings ready to generate",
        phone: false,
    },
    {
        eyebrow: "Collections",
        title: "A live dues board that collects for you",
        description:
            "Pay-by-UPI links on every statement, automatic reminders for defaulters, and ageing on every balance. Cash and offline payments can be recorded too — one screen shows exactly where the society's money stands.",
        image: "/apartmeter/panel-dues.png",
        imageAlt: "ApartMeter dues and payments board showing per-flat balances, ageing and payment recording",
        phone: false,
    },
];

const stack = ["Flutter", "Laravel", "PostgreSQL · Row-Level Security", "ML Kit OCR", "Offline-First Sync", "Razorpay-Ready"];

const WHATSAPP_URL =
    "https://wa.me/919448556091?text=Hi%20Sutex%2C%20I%27d%20like%20a%20demo%20of%20ApartMeter%20for%20my%20society.";

export default function ApartMeterPage() {
    const heroRef = useRef<HTMLElement>(null);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section ref={heroRef} className="pt-32 pb-20 bg-sutex-navy text-white relative overflow-hidden group/section">
                <GlobalHUD
                    sectionRef={heroRef}
                    theme="dark"
                    nodes={[
                        { top: "20%", left: "10%", color: "orange", delay: "0.2s" },
                        { top: "70%", left: "90%", color: "navy", delay: "1s" },
                        { top: "50%", left: "45%", color: "orange", delay: "2s" },
                    ]}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-flex items-center px-4 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest mb-8">
                                <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                                Sutex Product · Live in Karnataka
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-[1.05]">
                                Stop splitting bills.
                                <br />
                                Meter every flat.
                                <br />
                                <span className="text-sutex-orange">Collect on time.</span>
                            </h1>
                            <p className="text-xl text-slate-400 max-w-xl leading-relaxed mb-10">
                                Most societies split one bulk bill equally and chase dues on WhatsApp.
                                ApartMeter bills every flat for what it actually used — and collects the money.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center bg-sutex-orange hover:bg-sutex-orange/90 text-white font-black uppercase tracking-wider text-xs px-8 py-4 transition-colors"
                                >
                                    <MessageCircle size={16} className="mr-2" />
                                    Get a Demo on WhatsApp
                                </a>
                                <a
                                    href="/apartmeter/"
                                    className="inline-flex items-center justify-center border border-white/20 hover:border-white/50 text-white font-black uppercase tracking-wider text-xs px-8 py-4 transition-colors"
                                >
                                    Visit Product Site
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <Image
                                src="/apartmeter/panel-dashboard.png"
                                alt="ApartMeter committee dashboard showing billing cycle progress, outstanding dues and flagged readings"
                                width={750}
                                height={470}
                                priority
                                className="rounded-xl border border-white/10 shadow-2xl w-full h-auto"
                            />
                            <div className="absolute -bottom-12 -left-8 w-[30%] min-w-[150px]">
                                <Image
                                    src="/apartmeter/app-resident-home.png"
                                    alt="ApartMeter resident app showing outstanding dues and monthly water and gas usage"
                                    width={270}
                                    height={590}
                                    priority
                                    className="rounded-2xl border border-white/20 shadow-2xl w-full h-auto"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats strip */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-10 border-t border-white/10">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-3xl font-black text-sutex-orange mb-1">{stat.value}</p>
                                <p className="text-xs text-slate-400 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The flow */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-sutex-navy uppercase tracking-widest mb-4">
                            From Meter to Money
                        </h2>
                        <div className="h-1 w-20 bg-sutex-orange mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {flow.map((step, idx) => (
                            <div key={step.title} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative group">
                                <span className="text-5xl font-black text-slate-50 absolute top-4 right-4 group-hover:text-sutex-orange/10 transition-colors">
                                    0{idx + 1}
                                </span>
                                <div className="text-sutex-orange mb-4 relative z-10">
                                    <step.icon size={28} strokeWidth={1.75} />
                                </div>
                                <h3 className="text-base font-bold text-sutex-navy mb-3 relative z-10 leading-snug">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature rows with screenshots */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
                    {features.map((feature, idx) => (
                        <div
                            key={feature.title}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                                idx % 2 === 1 ? "lg:[direction:rtl]" : ""
                            }`}
                        >
                            <div className="lg:[direction:ltr]">
                                <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-sutex-orange mb-6">
                                    {feature.eyebrow}
                                </h2>
                                <h3 className="text-3xl font-black text-sutex-navy mb-6 tracking-tight">{feature.title}</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                            <div className="lg:[direction:ltr] flex justify-center">
                                {feature.phone ? (
                                    <Image
                                        src={feature.image}
                                        alt={feature.imageAlt}
                                        width={300}
                                        height={640}
                                        className="rounded-3xl border border-slate-200 shadow-2xl w-64 h-auto"
                                    />
                                ) : (
                                    <Image
                                        src={feature.image}
                                        alt={feature.imageAlt}
                                        width={750}
                                        height={470}
                                        className="rounded-xl border border-slate-200 shadow-2xl w-full h-auto"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Two apps, one system */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-sutex-navy uppercase tracking-widest mb-4">
                            Two Apps, One System
                        </h2>
                        <div className="h-1 w-20 bg-sutex-orange mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
                            <div className="p-3 bg-sutex-orange/10 rounded-xl inline-flex mb-6">
                                <Smartphone className="text-sutex-orange" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-sutex-navy mb-4">Residents & Readers · Android App</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Submit photo readings in seconds, track your flat's usage month over month,
                                see exactly what you owe and pay by UPI. Readers get a guided walk mode to
                                cover every meter in the building.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
                            <div className="p-3 bg-sutex-navy/10 rounded-xl inline-flex mb-6">
                                <LayoutDashboard className="text-sutex-navy" size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-sutex-navy mb-4">Committee & Operator · Web Panel</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Run the billing cycle end to end: review flagged readings, set tariffs,
                                generate statements, record payments and watch collections on a live dues
                                board — with a full audit trail behind every number.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust: money handling */}
            <section className="py-24 bg-sutex-navy text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex p-4 bg-sutex-orange/15 rounded-2xl mb-8">
                        <Landmark className="text-sutex-orange w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">
                        The Society's Money Stays the Society's
                    </h2>
                    <p className="text-xl text-slate-400 leading-relaxed mb-12">
                        Payments settle directly into the society's own UPI or bank account —
                        Sutex never holds funds. Every statement is immutable once issued, so the
                        books stand up to any audit or AGM question.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <IndianRupee className="text-sutex-orange mb-4" size={24} />
                            <p className="text-sm text-slate-300 leading-relaxed">
                                <span className="font-bold text-white block mb-1">Direct settlement</span>
                                UPI payments land in the society's account, not ours.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <Lock className="text-sutex-orange mb-4" size={24} />
                            <p className="text-sm text-slate-300 leading-relaxed">
                                <span className="font-bold text-white block mb-1">Immutable statements</span>
                                Issued statements can't be quietly edited — ever.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <ShieldCheck className="text-sutex-orange mb-4" size={24} />
                            <p className="text-sm text-slate-300 leading-relaxed">
                                <span className="font-bold text-white block mb-1">Audit-ready books</span>
                                Photo proof and a full trail behind every charge.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-black text-sutex-navy uppercase tracking-widest mb-4">
                        One Simple Price
                    </h2>
                    <div className="h-1 w-20 bg-sutex-orange mx-auto mb-16"></div>
                    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-12 shadow-sm">
                        <p className="text-6xl font-black text-sutex-navy mb-2">
                            ₹20
                            <span className="text-xl text-gray-500 font-bold"> / flat / month</span>
                        </p>
                        <p className="text-gray-500 mb-8">₹400 minimum per society</p>
                        <div className="inline-flex items-center px-5 py-2 bg-green-50 text-green-700 rounded-full text-sm font-bold mb-10">
                            <CheckCircle2 size={16} className="mr-2" />
                            30-day free trial — full product, no card required
                        </div>
                        <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
                            Everything included: Android app for every resident, the committee web panel,
                            statements, UPI collections and support. Built for societies of 10–100 flats.
                        </p>
                    </div>
                </div>
            </section>

            {/* Built by Sutex */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-sutex-orange mb-6">
                        Built End-to-End by Sutex
                    </h2>
                    <p className="text-2xl font-bold text-sutex-navy leading-relaxed mb-10">
                        ApartMeter is our own proof of craft — the same engineering framework we offer
                        clients, applied to a live multi-tenant SaaS, running production billing cycles
                        with societies in Karnataka.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {stack.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold uppercase tracking-wider text-sutex-navy"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact-form" className="py-24 bg-white border-t border-slate-100 scroll-mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-sutex-navy uppercase tracking-widest mb-4">
                            Bring ApartMeter to Your Society
                        </h2>
                        <div className="h-1 w-20 bg-sutex-orange mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            Fastest way: message us on{" "}
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sutex-orange font-bold hover:underline"
                            >
                                WhatsApp (+91 94485 56091)
                            </a>{" "}
                            for a live demo. Or send us your details below.
                        </p>
                    </div>
                    <ServiceContactForm defaultService="ApartMeter" />
                </div>
            </section>

            <Footer />
        </main>
    );
}
