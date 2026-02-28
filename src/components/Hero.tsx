import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center lg:text-left lg:max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-sutex-navy mb-6 tracking-tight leading-none">
                        Innovate. <span className="text-sutex-orange">Build.</span> Scale.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
                        Sutex is a premier IT startup specializing in high-performance Computer Programming, automated mobile ecosystems, and modernized business logic extraction.
                    </p>
                    <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-4">
                        <Link href="#services">
                            <Button className="bg-sutex-navy hover:bg-sutex-navy/90 text-white font-bold px-8 py-6 text-lg rounded-xl transition-all w-full sm:w-auto">
                                Explore Our Services
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="border-sutex-navy text-sutex-navy hover:bg-slate-50 font-bold px-8 py-6 text-lg rounded-xl transition-all w-full sm:w-auto">
                                Start Project
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative vertical lines for "Industrial Future" look */}
            <div className="absolute top-0 right-0 h-full w-1/3 border-l border-gray-100 hidden lg:block opacity-50"></div>
            <div className="absolute top-0 right-1/4 h-full w-px bg-gray-100 hidden lg:block opacity-50"></div>
        </section>
    );
}
