"use client";

import { motion } from "framer-motion";
import {
    Smartphone,
    Server,
    Database,
    Cpu,
    Layers,
    TrendingUp,
    Search,
    Code2,
    Box,
    Rocket
} from "lucide-react";

const techStack = [
    { name: "Flutter", icon: Smartphone, category: "Mobile", description: "High-performance cross-platform ecosystems" },
    { name: "Dart", icon: Cpu, category: "Mobile", description: "Reactive programming for seamless UI" },
    { name: "Node.js", icon: Server, category: "Backend", description: "Scalable event-driven architectures" },
    { name: "TypeScript", icon: Code2, category: "Backend", description: "Type-safe industrial-grade logic" },
    { name: "Groovy", icon: Layers, category: "Modernization", description: "Legacy logic extraction & porting" },
    { name: "PostgreSQL", icon: Database, category: "Infrastructure", description: "Robust relational data management" },
];

const workflow = [
    { step: "Discovery", icon: Search, desc: "Technical audit & requirement mapping" },
    { step: "Logic Extraction", icon: Code2, desc: "Porting legacy Groovy/Business logic" },
    { step: "Multi-Platform Deployment", icon: Box, desc: "Unified Flutter ecosystems" },
    { step: "Scaling", icon: TrendingUp, desc: "Industrial-grade cloud expansion" },
];

export function TechStack() {
    return (
        <section id="engine" className="py-24 bg-slate-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-sutex-orange mb-4">The Sutex Engine</h2>
                    <p className="text-4xl md:text-5xl font-black mb-6">Our Tech Stack</p>
                    <div className="h-1.5 w-24 bg-sutex-orange mx-auto mb-8"></div>
                    <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                        Engineering-first approach to complex modernization and high-performance mobile ecosystems.
                    </p>
                </div>

                {/* Honeycomb-like Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-32">
                    {techStack.map((tech, idx) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="aspect-square bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 group-hover:border-sutex-orange group-hover:bg-slate-800/50">
                                <tech.icon className="w-12 h-12 text-sutex-orange mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold text-lg mb-1">{tech.name}</h3>
                                <span className="text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">{tech.category}</span>

                                {/* Tooltip-like Info */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-sutex-orange text-sutex-navy p-3 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 pointer-events-none transition-all z-20">
                                    {tech.description}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full border-8 border-transparent border-b-sutex-orange"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Engineering Narrative Diagram */}
                <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 hidden lg:block"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {workflow.map((item, idx) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-slate-900 lg:bg-transparent border border-slate-800 lg:border-none p-8 lg:p-0 rounded-2xl flex flex-col items-center text-center"
                            >
                                <div className="w-16 h-16 bg-sutex-navy border-2 border-slate-700 rounded-full flex items-center justify-center mb-6 relative hover:border-sutex-orange transition-colors">
                                    <span className="absolute -top-2 -left-2 w-6 h-6 bg-sutex-orange rounded-full text-sutex-navy text-xs font-black flex items-center justify-center">
                                        0{idx + 1}
                                    </span>
                                    <item.icon className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-bold mb-3">{item.step}</h4>
                                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <p className="text-xs text-slate-500 uppercase tracking-[0.4em] font-medium border border-slate-800 inline-block px-8 py-4 rounded-full">
                        Industrial Activity: Computer Programming (NIC 6201)
                    </p>
                </div>
            </div>
        </section>
    );
}
