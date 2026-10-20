"use client";

interface SonarNodeProps {
    top: string;
    left: string;
    color?: "orange" | "navy";
    delay?: string;
    className?: string;
}

export function SonarNode({ top, left, color = "orange", delay = "0s", className = "" }: SonarNodeProps) {
    return (
        <div
            className={`absolute pointer-events-none select-none z-10 ${className}`}
            style={{ top, left }}
        >
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes sonar-ripple {
                    0% { transform: scale(1); opacity: 0.8; }
                    100% { transform: scale(4); opacity: 0; }
                }
            `}} />
            <div className="relative flex items-center justify-center">
                {/* Central Core */}
                <div className={`w-1.5 h-1.5 rounded-full ${color === 'orange' ? 'bg-sutex-orange' : 'bg-sutex-navy'} z-10`}></div>

                {/* Sonar Wave */}
                <div
                    className={`absolute w-full h-full border rounded-full ${color === 'orange' ? 'border-sutex-orange' : 'border-sutex-navy'}`}
                    style={{
                        animation: `sonar-ripple 3s linear infinite`,
                        animationDelay: delay,
                        opacity: 0
                    }}
                ></div>
            </div>
        </div>
    );
}
