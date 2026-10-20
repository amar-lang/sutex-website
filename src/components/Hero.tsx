"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const nodes = useMemo(() => [
        { t: '15%', l: '5%', x: 0.1, y: 0.15, c: 'navy' },
        { t: '25%', l: '85%', x: 0.85, y: 0.25, c: 'orange' },
        { t: '65%', l: '12%', x: 0.12, y: 0.65, c: 'navy' },
        { t: '80%', l: '75%', x: 0.75, y: 0.8, c: 'orange' },
        { t: '45%', l: '40%', x: 0.4, y: 0.45, c: 'navy' },
        { t: '10%', l: '60%', x: 0.6, y: 0.1, c: 'orange' },
        { t: '85%', l: '30%', x: 0.3, y: 0.85, c: 'navy' },
        { t: '50%', l: '90%', x: 0.9, y: 0.5, c: 'orange' },
        { t: '30%', l: '20%', x: 0.2, y: 0.3, c: 'navy' },
        { t: '70%', l: '55%', x: 0.55, y: 0.7, c: 'orange' },
        { t: '40%', l: '10%', x: 0.1, y: 0.4, c: 'navy' },
        { t: '20%', l: '75%', x: 0.75, y: 0.2, c: 'orange' },
        { t: '90%', l: '60%', x: 0.6, y: 0.9, c: 'navy' },
        { t: '15%', l: '45%', x: 0.45, y: 0.15, c: 'navy' },
        { t: '60%', l: '80%', x: 0.8, y: 0.6, c: 'orange' }
    ], []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        const section = sectionRef.current;
        if (section) {
            section.addEventListener("mousemove", handleMouseMove);
            section.addEventListener("mouseenter", () => setIsHovering(true));
            section.addEventListener("mouseleave", () => setIsHovering(false));
        }

        return () => {
            if (section) {
                section.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white group/section cursor-none lg:cursor-default"
        >
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scan {
                    0% { top: 0%; opacity: 0; }
                    50% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
                @keyframes flicker {
                    0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% { opacity: 0.99; }
                    20%, 21.999%, 63%, 63.999%, 65%, 69.999% { opacity: 0.4; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(1deg); }
                }
                @keyframes sonar {
                    0% { transform: scale(1); opacity: 0.8; }
                    100% { transform: scale(4); opacity: 0; }
                }
            `}} />

            {/* Interactive Mouse Pointer - HUD Style */}
            <div
                className="absolute z-50 pointer-events-none transition-opacity duration-300 hidden lg:block"
                style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    opacity: isHovering ? 1 : 0,
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <div className="relative">
                    <div className="w-6 h-6 border border-sutex-orange/30 rounded-full animate-ping"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-sutex-orange rounded-full shadow-[0_0_8px_rgba(255,107,0,0.5)]"></div>
                    </div>
                    <div className="absolute top-6 left-6 font-mono text-[9px] text-sutex-orange/80 whitespace-nowrap bg-white/10 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/20 shadow-sm">
                        {/* SEC_TRK: [{Math.round(mousePos.x)}, {Math.round(mousePos.y)}] */}
                        Sutex
                    </div>
                </div>
            </div>

            {/* Global HUD Layer - Cover entire section */}
            <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden sm:block">
                {/* SVG Constellation Lines */}
                <svg className="absolute inset-0 w-full h-full">
                    {sectionRef.current && nodes.map((node, i) => {
                        const rect = sectionRef.current!.getBoundingClientRect();
                        const nodeX = node.x * rect.width;
                        const nodeY = node.y * rect.height;
                        const dx = mousePos.x - nodeX;
                        const dy = mousePos.y - nodeY;
                        const distance = Math.sqrt(dx * dx + dy * dy);

                        if (distance < 300 && isHovering) {
                            const opacity = (1 - distance / 300) * 0.4;
                            return (
                                <line
                                    key={i}
                                    x1={nodeX}
                                    y1={nodeY}
                                    x2={mousePos.x}
                                    y2={mousePos.y}
                                    stroke={node.c === 'orange' ? '#ff6600' : '#0a192f'}
                                    strokeWidth="0.5"
                                    strokeOpacity={opacity}
                                />
                            );
                        }
                        return null;
                    })}
                </svg>

                {/* Dense Technical Nodes */}
                {nodes.map((node, i) => (
                    <div
                        key={i}
                        className="absolute opacity-0 group-hover/section:opacity-60 transition-opacity duration-1000"
                        style={{ top: node.t, left: node.l, transitionDelay: `${i * 100}ms` }}
                    >
                        <div className="relative flex items-center justify-center">
                            {/* Central Core */}
                            <div className={`w-1.5 h-1.5 rounded-full ${node.c === 'orange' ? 'bg-sutex-orange' : 'bg-sutex-navy'} z-10`}></div>

                            {/* Sonar Wave */}
                            <div
                                className={`absolute w-full h-full border rounded-full ${node.c === 'orange' ? 'border-sutex-orange' : 'border-sutex-navy'}`}
                                style={{
                                    animation: `sonar 3s linear infinite`,
                                    opacity: 0
                                }}
                            ></div>
                        </div>
                    </div>
                ))}

                {/* Section-Wide Floating Crosshairs */}
                <div className="absolute top-1/3 left-1/4 hidden lg:block" style={{ animation: 'float 6s ease-in-out infinite' }}>
                    <div className="w-8 h-8 relative opacity-10 group-hover/section:opacity-30 transition-opacity duration-1000">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-sutex-navy"></div>
                        <div className="absolute left-1/2 top-0 w-px h-full bg-sutex-navy"></div>
                    </div>
                </div>

                <div className="absolute bottom-1/4 left-1/2 hidden lg:block" style={{ animation: 'float 8s ease-in-out infinite -2s' }}>
                    <div className="w-12 h-12 relative opacity-5 group-hover/section:opacity-20 transition-opacity duration-1000">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-sutex-orange"></div>
                        <div className="absolute left-1/2 top-0 w-px h-full bg-sutex-orange"></div>
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-sutex-orange"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-sutex-orange"></div>
                    </div>
                </div>

                {/* Additional Decorative HUD Elements */}
                <div className="absolute top-[15%] right-[20%] hidden lg:block" style={{ animation: 'float 7s ease-in-out infinite -1s' }}>
                    <div className="w-6 h-6 relative opacity-5 group-hover/section:opacity-15 transition-opacity duration-1000">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-sutex-navy"></div>
                        <div className="absolute left-1/2 top-0 w-px h-full bg-sutex-navy"></div>
                    </div>
                </div>

                <div className="absolute top-[50%] right-[10%] hidden lg:block" style={{ animation: 'float 9s ease-in-out infinite -3s' }}>
                    <div className="w-8 h-8 relative opacity-5 group-hover/section:opacity-20 transition-opacity duration-1000">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-sutex-orange"></div>
                        <div className="absolute left-1/2 top-0 w-px h-full bg-sutex-orange"></div>
                    </div>
                </div>

                <div className="absolute bottom-[10%] left-[10%] hidden lg:block" style={{ animation: 'float 6s ease-in-out infinite -4s' }}>
                    <div className="w-6 h-6 relative opacity-5 group-hover/section:opacity-15 transition-opacity duration-1000">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-sutex-navy"></div>
                        <div className="absolute left-1/2 top-0 w-px h-full bg-sutex-navy"></div>
                    </div>
                </div>

                <div className="absolute top-[40%] left-[5%] hidden lg:block" style={{ animation: 'float 10s ease-in-out infinite -5s' }}>
                    <div className="w-10 h-10 relative opacity-5 group-hover/section:opacity-20 transition-opacity duration-1000">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-sutex-orange"></div>
                        <div className="absolute left-1/2 top-0 w-px h-full bg-sutex-orange"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-sutex-orange"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-sutex-orange"></div>
                    </div>
                </div>
            </div>

            {/* Industrial Dot-Grid Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#0a192f 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-none">
                            <span className="bg-clip-text text-transparent bg-linear-to-b from-sutex-navy to-sutex-navy/80">
                                Innovate.
                            </span>{" "}
                            <span className="relative inline-block text-sutex-orange italic">
                                Build.
                                <span className="absolute -inset-1 bg-sutex-orange/10 blur-xl rounded-full -z-10 animate-pulse"></span>
                            </span>{" "}
                            <span className="bg-clip-text text-transparent bg-linear-to-b from-sutex-navy to-sutex-navy/80">
                                Scale.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-900 font-bold mb-4 tracking-tight">
                            Engineering the future through human architectural wisdom and high-velocity frameworks.
                        </p>
                        <p className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed">
                            Sutex is a premier IT startup specializing in <strong className="text-sutex-navy">Zero-to-One product engineering</strong>, high-performance solution ecosystems, and industrial-grade modernization.
                        </p>
                        <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-4">
                            <Link href="#services">
                                <Button className="bg-sutex-navy hover:bg-sutex-navy/90 text-white font-bold px-8 py-6 text-lg rounded-xl transition-all w-full sm:w-auto shadow-lg shadow-sutex-navy/20">
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

                    <div className="relative hidden lg:block">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 group">
                            <Image
                                src="/hero.png"
                                alt="Sutex Industrial Future"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-linear-to-tr from-sutex-navy/40 to-transparent mix-blend-overlay"></div>

                            {/* Localized Image HUD */}
                            <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                                <div className="w-full h-px bg-linear-to-r from-transparent via-sutex-orange/50 to-transparent absolute top-0" style={{ animation: 'scan 4s ease-in-out infinite' }}></div>
                            </div>

                            <div className="absolute top-1/4 left-1/4 z-30">
                                <div className="relative">
                                    <div className="w-3 h-3 bg-sutex-orange rounded-full"></div>
                                    <div className="absolute -inset-2 border border-sutex-orange/50 rounded-full animate-ping"></div>
                                </div>
                            </div>

                            <div className="absolute top-10 right-10 z-30 font-mono text-[10px] text-sutex-orange/80 space-y-1 select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div style={{ animation: 'flicker 2s infinite' }}>PHASE: ZERO-TO-ONE</div>
                                <div style={{ animation: 'flicker 3s infinite 0.5s' }}>STRCT: OPTIMIZED</div>
                                <div style={{ animation: 'flicker 1.5s infinite 1s' }}>VELOCITY: HIGH</div>
                            </div>

                            <div className="absolute bottom-10 left-10 z-30 font-mono text-[10px] text-white/40 space-y-1 select-none pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="animate-pulse">BUILDING_ECOSYSTEMS...</div>
                                <div className="animate-pulse delay-75">MODERNIZING_LEGACY...</div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 border-t-8 border-r-8 border-sutex-orange opacity-20 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-8 border-l-8 border-sutex-navy opacity-10 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                </div>
            </div>

            {/* Decorative vertical lines */}
            <div className="absolute top-0 right-0 h-full w-1/3 border-l border-gray-100 hidden lg:block opacity-30"></div>
        </section>
    );
}
