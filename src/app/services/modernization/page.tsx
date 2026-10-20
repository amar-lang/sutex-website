"use client";

import { Database } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export default function ModernizationPage() {
    return (
        <ServicePageLayout
            title="Legacy Modernization & Migration"
            description="Systematic decoupling and AI-accelerated porting of mission-critical legacy logic to high-performance modern architectures."
            icon={Database}
            isAiAugmented={true}
            problem="Legacy systems (Groovy, legacy Node, etc.) often become bottlenecks for innovation. The risk of data loss or logic corruption during manual porting frequently prevents organizations from migrating to faster, more reliable modern stacks."
            solution="Our proprietary 'Sutex Logic Extractor' uses Agentic AI to perform high-fidelity audits of legacy codebases. We decouple complex business rules with 100% precision, ensuring a safe and rapid transition to TypeScript-based modern architectures without downtime."
            process={[
                {
                    title: "Logic Extraction",
                    description: "Using AI-driven tools to identify and decouple core business rules from legacy code."
                },
                {
                    title: "Precision Porting",
                    description: "Translating extracted logic into modern, type-safe architectures with automated verification."
                },
                {
                    title: "Data Integrity Check",
                    description: "Rigorous testing of migration paths to ensure zero data loss and logic parity."
                },
                {
                    title: "Cutover & Launch",
                    description: "Phased migration to the modern stack with industrial-grade reliability monitoring."
                }
            ]}
            outcome="A successful migration that eliminates legacy technical debt, resulting in a 5x increase in system performance and 0% logic regression."
        />
    );
}
