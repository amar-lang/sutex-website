import Link from "next/link";
import { Rocket, RefreshCcw, Gauge, Compass, ArrowRight } from "lucide-react";

const points = [
    {
        icon: Rocket,
        title: "New product?",
        text: "You bring the idea; we hand you the launched product.",
    },
    {
        icon: RefreshCcw,
        title: "Old software?",
        text: "Reborn on modern tech — nothing your business depends on gets lost.",
    },
    {
        icon: Gauge,
        title: "Custom platform?",
        text: "Delivered in months, not years.",
    },
    {
        icon: Compass,
        title: "Not sure yet?",
        text: "We audit first and give you an honest roadmap.",
    },
];

export function WhySutex() {
    return (
        <section className="bg-sutex-navy text-white relative overflow-hidden">
            {/* Industrial dot-grid, matching the Hero */}
            <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
                    backgroundSize: "32px 32px",
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center gap-10">
                    <div className="lg:w-1/4">
                        <p className="text-xs font-bold uppercase tracking-[0.4em] text-sutex-orange mb-3">
                            Why Sutex
                        </p>
                        <h2 className="text-3xl font-black tracking-tight leading-tight mb-4">
                            In 15 seconds
                        </h2>
                        <div className="inline-block border border-sutex-orange/40 bg-sutex-orange/10 px-4 py-3">
                            <p className="text-3xl font-black text-sutex-orange leading-none">100%</p>
                            <p className="text-[11px] uppercase tracking-widest text-white/70 mt-1">
                                business-logic precision in every migration
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {points.map((point) => (
                            <div key={point.title} className="flex items-start gap-4">
                                <div className="shrink-0 w-10 h-10 border border-white/15 bg-white/5 flex items-center justify-center">
                                    <point.icon size={18} className="text-sutex-orange" strokeWidth={2} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm uppercase tracking-widest mb-1">
                                        {point.title}
                                    </h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">{point.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-400">
                        We run our own live product — <strong className="text-white">MeterMint</strong> — on the
                        same engineering we sell. We eat our own cooking.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center text-xs font-black uppercase tracking-widest text-sutex-orange hover:text-white transition-colors shrink-0"
                    >
                        <span>Talk to us</span>
                        <ArrowRight size={14} className="ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
