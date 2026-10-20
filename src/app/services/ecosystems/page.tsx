"use client";

import { Globe } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export default function EcosystemsPage() {
    return (
        <ServicePageLayout
            title="Multi-Platform Digital Ecosystems"
            description="Engineering unified architectural frameworks that ensure seamless continuity across mobile, web, and desktop environments."
            icon={Globe}
            isAiAugmented={true}
            problem="Organizations often struggle with fragmented digital experiences, where mobile and web platforms operate in silos. This leads to redundant codebases, inconsistent business logic, and high maintenance costs that stifle architectural scalability."
            solution="Sutex architects unified digital ecosystems using a single-source-of-truth logic layer. By decoupling business logic from UI-specific code, we ensure that every platform—whether a Flutter mobile app or a React web portal—delivers identical performance and reliability."
            process={[
                {
                    title: "Architectural Audit",
                    description: "Mapping existing digital touchpoints and identifying logic duplication across platforms."
                },
                {
                    title: "Unified Logic Core",
                    description: "Developing a shared business logic layer (BNoC) that powers all ecosystem endpoints."
                },
                {
                    title: "Multi-Endpoint Dev",
                    description: "Parallel deployment of high-performance mobile (Flutter) and web (Next.js) interfaces."
                },
                {
                    title: "Sync & Scale",
                    description: "Continuous synchronization of logic updates and industrial-grade cloud scaling."
                }
            ]}
            outcome="A unified engineering ecosystem that reduces maintenance overhead by 40% while ensuring 100% logic parity across all user platforms."
        />
    );
}
