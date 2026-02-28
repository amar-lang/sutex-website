import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center text-sutex-navy hover:text-sutex-orange mb-8 transition-colors font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>

                <Card className="border-none shadow-xl bg-white p-8 md:p-12">
                    <CardHeader className="px-0 pt-0">
                        <CardTitle className="text-3xl md:text-4xl font-extrabold text-sutex-navy">Terms of Service</CardTitle>
                        <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Last Updated: February 2026</p>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-slate max-w-none text-gray-600 leading-relaxed space-y-8">
                        <section>
                            <h2 className="text-xl font-bold text-sutex-navy mb-4">1. Agreement to Terms</h2>
                            <p>By accessing the Sutex website and services, you agree to be bound by these Terms of Service. If you do not agree, please refrain from using our services.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-sutex-navy mb-4">2. Services</h2>
                            <p>Sutex provides high-performance Computer Programming services, including mobile ecosystem development and legacy logic modernization. All service agreements are subject to separate master service contracts.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-sutex-navy mb-4">3. Intellectual Property</h2>
                            <p>All content on this website, including logos, text, and graphics, is the property of Sutex unless otherwise stated. Unauthorized use is prohibited.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-sutex-navy mb-4">4. Governing Law</h2>
                            <p>These terms are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in <strong>Gadag, Karnataka</strong>.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-sutex-navy mb-4">5. Entity Information</h2>
                            <p>Registered Entity Address: Ron, Gadag, Karnataka. Udyam Reg No: UDYAM-KR-14-0029139.</p>
                        </section>
                    </CardContent>
                </Card>
            </div>
            <Footer />
        </main>
    );
}
