import Image from "next/image";
import { Camera, ReceiptText, IndianRupee, ArrowRight } from "lucide-react";

const highlights = [
    {
        title: "Photo-verified self-reading",
        description: "Residents snap their own meter; on-device OCR reads the dial and flags anomalies for committee review.",
        icon: Camera,
    },
    {
        title: "One bill for everything",
        description: "Metered water & gas, maintenance and arrears on a single immutable, audit-ready statement.",
        icon: ReceiptText,
    },
    {
        title: "Collections built in",
        description: "Pay-by-UPI links, automatic reminders and a live dues board; money settles directly into the society's own account.",
        icon: IndianRupee,
    },
];

export function FeaturedProduct() {
    return (
        <section id="product" className="py-24 bg-sutex-navy text-white relative overflow-hidden">
            {/* Subtle grid texture */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black uppercase tracking-widest mb-4">Our Product</h2>
                    <div className="h-1 w-20 bg-sutex-orange mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Copy */}
                    <div>
                        <span className="inline-flex items-center px-4 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                            <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                            Live in Karnataka
                        </span>
                        <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tight leading-tight">
                            ApartMeter — the money system for{" "}
                            <span className="text-sutex-orange">apartment societies.</span>
                        </h3>
                        <p className="text-lg text-slate-400 leading-relaxed mb-10">
                            Most societies split one bulk bill equally and chase dues on WhatsApp.
                            ApartMeter bills every flat for what it actually used — and collects the money.
                        </p>

                        <div className="space-y-6 mb-10">
                            {highlights.map((item) => (
                                <div key={item.title} className="flex items-start space-x-4">
                                    <div className="p-2.5 bg-sutex-orange/15 rounded-xl shrink-0">
                                        <item.icon className="text-sutex-orange" size={22} strokeWidth={1.75} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-sm text-slate-500 leading-relaxed border-l-2 border-sutex-orange/40 pl-4 mb-10">
                            ApartMeter is our own proof of craft — the same engineering framework we offer
                            clients, applied to a live multi-tenant SaaS: mobile + web ecosystems,
                            offline-first sync, ML-driven OCR and payment infrastructure, all in production.
                        </p>

                        {/* Plain anchor: /apartmeter/ is served by the ApartMeter app via Nginx, not this Next.js site */}
                        <a
                            href="/apartmeter/"
                            className="inline-flex items-center bg-sutex-orange hover:bg-sutex-orange/90 text-white font-black uppercase tracking-wider text-xs px-8 py-4 transition-colors group"
                        >
                            <span>Explore ApartMeter</span>
                            <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

                    {/* Product visuals */}
                    <div className="relative hidden sm:block">
                        <div className="relative ml-auto max-w-xl">
                            <Image
                                src="/apartmeter/panel-dashboard.png"
                                alt="ApartMeter committee dashboard showing billing cycle, flagged readings and top dues"
                                width={750}
                                height={470}
                                className="rounded-xl border border-white/10 shadow-2xl w-full h-auto"
                            />
                            <div className="absolute -bottom-10 -left-6 w-[30%] min-w-[140px]">
                                <Image
                                    src="/apartmeter/app-resident-home.png"
                                    alt="ApartMeter resident app showing dues and monthly water and gas usage"
                                    width={270}
                                    height={590}
                                    className="rounded-2xl border border-white/20 shadow-2xl w-full h-auto"
                                />
                            </div>
                        </div>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-14 text-right">
                            Committee web panel · Resident Android app
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
