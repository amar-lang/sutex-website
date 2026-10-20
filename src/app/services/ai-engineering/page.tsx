"use client";

import { Sparkles } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export default function AiEngineeringPage() {
    return (
        <ServicePageLayout
            title="High-Velocity Systems Engineering"
            description="Accelerating the software lifecycle—from zero-to-one greenfield builds to the scaling of existing strategic platforms."
            icon={Sparkles}
            isAiAugmented={true}
            problem="Modern software demand often outpaces manual engineering capacity. Standard development cycles for new products are slow, and scaling existing platforms requires high-precision logic that traditional firms struggle to deliver at speed."
            solution="At Sutex, we utilize high-velocity systems engineering to launch new ventures and scale existing ones 3 components faster. By leveraging proprietary internal frameworks for testing and logic generation, we ensure every architectural decision is made by senior engineers. Whether building from scratch or expanding an enterprise, speed never comes at the cost of precision."
            process={[
                {
                    title: "Requirement Mapping",
                    description: "Fusing human architectural vision with AI-driven requirement analysis and gap detection."
                },
                {
                    title: "Agentic Dev Loop",
                    description: "Rapid logic generation and unit-testing powered by our proprietary Agentic AI framework."
                },
                {
                    title: "Reliability Auditing",
                    description: "Automated, AI-driven stress tests and security audits to ensure mission-critical stability."
                },
                {
                    title: "Accelerated Launch",
                    description: "Deployment cycles reduced from months to weeks through AI-augmented CI/CD pipelines."
                }
            ]}
            outcome="Production-ready architectures delivered 3x faster, featuring 99.9% automated test coverage and industrial-grade resilience."
        />
    );
}
