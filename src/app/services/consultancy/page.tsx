"use client";

import { Lightbulb } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export default function ConsultancyPage() {
    return (
        <ServicePageLayout
            title="Strategic Technical Consultancy"
            description="Outcome-driven architectural advisory focusing on technical audits, scalability roadmaps, and modernization strategy."
            icon={Lightbulb}
            isAiAugmented={false}
            problem="Many organizations invest heavily in technology without a clear architectural roadmap. This leads to misaligned systems, scalability failures under load, and wasted investment in tools that don't scale with business growth."
            solution="Our consultancy goes beyond advice; we deliver a Project Blueprint. We perform deep-dive technical audits of your current stack, identify scale bottlenecks, and architect a multi-year modernization roadmap focused on measurable ROI and industrial reliability."
            process={[
                {
                    title: "Technical Audit",
                    description: "Comprehensive review of code quality, architecture patterns, and infrastructure scalability."
                },
                {
                    title: "Bottleneck ID",
                    description: "Identifying technical debt and architectural friction points slowing your growth."
                },
                {
                    title: "The Project Blueprint",
                    description: "Architecting a step-by-step modernization roadmap with clear business outcomes."
                },
                {
                    title: "Execution Advisory",
                    description: "Ongoing strategic guidance to ensure the blueprint is implemented with 100% fidelity."
                }
            ]}
            outcome="A validated technical roadmap that aligns engineering efforts with business goals, ensuring 100% investment efficiency."
        />
    );
}
