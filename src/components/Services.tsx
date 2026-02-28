import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Smartphone, Database, Globe } from "lucide-react";

const services = [
    {
        title: "Mobile Ecosystems",
        description: "Specialist Flutter development for high-performance, native-quality applications that scale across all mobile platforms.",
        icon: Smartphone,
        color: "text-sutex-orange",
    },
    {
        title: "Logic Modernization",
        description: "Expert extraction and porting of legacy business logic from outdated systems like Groovy to modern, robust architectural stacks.",
        icon: Database,
        color: "text-sutex-navy",
    },
    {
        title: "Strategic Platforms",
        description: "Bespoke CRM solutions and marketplace architectures engineered for industrial-grade performance and reliability.",
        icon: Globe,
        color: "text-sutex-navy",
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-shadow rounded-none bg-white">
                            <CardHeader className="pb-4">
                                <div className={`${service.color} mb-4`}>
                                    <service.icon size={40} strokeWidth={1.5} />
                                </div>
                                <CardTitle className="text-xl font-bold text-sutex-navy">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600 text-base leading-relaxed">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
