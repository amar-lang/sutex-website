import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Smartphone, Database, Globe, Lightbulb, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Zero-to-One Product Engineering",
        slug: "ecosystems",
        description: "Launching high-performance mobile and web ecosystems from scratch. We specialize in building mission-critical products with architectural scalability and cross-platform continuity.",
        icon: Globe,
        color: "text-sutex-orange",
        ai: true
    },
    {
        title: "Legacy Modernization & Migration",
        slug: "modernization",
        description: "Specialist decoupling and AI-driven porting of complex business logic from legacy systems to modern, high-performance architectural stacks.",
        icon: Database,
        color: "text-sutex-navy",
        ai: true
    },
    {
        title: "High-Velocity Systems Engineering",
        slug: "ai-engineering",
        description: "Engineering bespoke strategic platforms and greenfield architectures. High-speed delivery is achieved through our proprietary internal frameworks and expert architectural oversight.",
        icon: Sparkles,
        color: "text-sutex-orange",
        ai: false
    },
    {
        title: "Strategic Technical Consultancy",
        slug: "consultancy",
        description: "Deep-dive technical audits, architectural roadmaps, and modernization strategies designed for measurable business outcomes.",
        icon: Lightbulb,
        color: "text-sutex-navy",
        ai: false
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-black text-sutex-navy uppercase tracking-widest mb-4">Core Services</h2>
                    <div className="h-1 w-20 bg-sutex-orange mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-none bg-white relative group overflow-hidden flex flex-col h-full">
                            {service.ai && (
                                <div className="absolute top-4 right-4 text-sutex-orange opacity-40 group-hover:opacity-100 transition-opacity">
                                    <Sparkles size={16} />
                                </div>
                            )}
                            <CardHeader className="pb-4">
                                <div className={`${service.color} mb-4 group-hover:scale-110 transition-transform duration-500`}>
                                    <service.icon size={40} strokeWidth={1.5} />
                                </div>
                                <CardTitle className="text-lg font-bold text-sutex-navy leading-tight">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <CardDescription className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                            <div className="px-6 pb-8 mt-auto">
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="inline-flex items-center text-xs font-black uppercase tracking-widest text-sutex-navy group-hover:text-sutex-orange transition-colors"
                                >
                                    <span>Learn More</span>
                                    <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
