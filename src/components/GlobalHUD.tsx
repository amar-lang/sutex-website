"use client";

import { useState, useEffect, useRef, useMemo } from "react";

interface NodeData {
    top: string;
    left: string;
    color?: "orange" | "navy";
    delay?: string;
}

interface GlobalHUDProps {
    nodes?: NodeData[];
    sectionRef: React.RefObject<HTMLElement | null>;
    theme?: "dark" | "light"; // dark = bg-navy (white text), light = bg-white (navy text)
}

export function GlobalHUD({ nodes = [], sectionRef, theme = "dark" }: GlobalHUDProps) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        const currentSection = sectionRef.current;
        if (currentSection) {
            currentSection.addEventListener("mousemove", handleMouseMove);
            currentSection.addEventListener("mouseenter", handleMouseEnter);
            currentSection.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (currentSection) {
                currentSection.removeEventListener("mousemove", handleMouseMove);
                currentSection.removeEventListener("mouseenter", handleMouseEnter);
                currentSection.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, [sectionRef]);

    const dotColor = theme === "dark" ? "bg-white/20" : "bg-sutex-navy/10";
    const crosshairColor = theme === "dark" ? "bg-white/10" : "bg-sutex-navy/5";
    const reticleTextColor = theme === "dark" ? "text-sutex-orange" : "text-sutex-navy";

    return (
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes sonar-global {
                    0% { transform: scale(1); opacity: 0.6; }
                    100% { transform: scale(4); opacity: 0; }
                }
                @keyframes float-global {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(1deg); }
                }
            `}} />

            {/* Mouse Tracking Reticle */}
            <div
                className="absolute z-20 transition-opacity duration-300 pointer-events-none"
                style={{
                    left: mousePos.x,
                    top: mousePos.y,
                    opacity: isHovering ? 1 : 0,
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <div className="relative">
                    {/* Reticle Circle */}
                    <div className="w-12 h-12 border border-sutex-orange/30 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-sutex-orange rounded-full shadow-[0_0_8px_rgba(255,107,0,0.5)]"></div>
                    </div>
                    {/* Label */}
                    <div className={`absolute top-6 left-6 font-mono text-[9px] ${reticleTextColor} whitespace-nowrap bg-white/10 backdrop-blur-md px-1.5 py-0.5 rounded border border-white/20 shadow-sm`}>
                        Sutex
                    </div>
                </div>
            </div>

            {/* Global Nodes */}
            {nodes.map((node, i) => (
                <div
                    key={i}
                    className="absolute opacity-40"
                    style={{ top: node.top, left: node.left }}
                >
                    <div className="relative flex items-center justify-center">
                        <div className={`w-1 h-1 rounded-full ${node.color === 'orange' ? 'bg-sutex-orange' : (theme === 'dark' ? 'bg-white' : 'bg-sutex-navy')} z-10`}></div>
                        <div
                            className={`absolute w-full h-full border rounded-full ${node.color === 'orange' ? 'border-sutex-orange' : (theme === 'dark' ? 'border-white' : 'border-sutex-navy')}`}
                            style={{
                                animation: `sonar-global 3s linear infinite`,
                                animationDelay: node.delay || '0s',
                                width: '1.5rem',
                                height: '1.5rem',
                                opacity: 0
                            }}
                        ></div>
                    </div>
                </div>
            ))}

            {/* Decorative Crosshairs - Predefined positions for stability */}
            {[
                { top: '15%', left: '80%' },
                { top: '60%', left: '15%' },
                { top: '85%', left: '70%' },
                { top: '40%', left: '5%' }
            ].map((pos, i) => (
                <div
                    key={i}
                    className="absolute hidden lg:block"
                    style={{ top: pos.top, left: pos.left, animation: `float-global ${7 + i}s ease-in-out infinite -${i}s` }}
                >
                    <div className={`w-8 h-8 relative opacity-10`}>
                        <div className={`absolute top-1/2 left-0 w-full h-px ${theme === 'dark' ? 'bg-white' : 'bg-sutex-navy'}`}></div>
                        <div className={`absolute left-1/2 top-0 w-px h-full ${theme === 'dark' ? 'bg-white' : 'bg-sutex-navy'}`}></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
