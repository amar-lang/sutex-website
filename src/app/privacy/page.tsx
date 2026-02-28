import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center text-sutex-navy hover:text-sutex-orange mb-8 transition-colors font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>

                <Card className="border-none shadow-xl bg-white p-8 md:p-12">
                    <CardHeader className="px-0 pt-0">
                        <CardTitle className="text-3xl md:text-4xl font-extrabold text-sutex-navy">Privacy Policy</CardTitle>
                        <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Last Updated: February 2026</p>
                    </CardHeader>
                    <CardContent className="px-0 prose prose-slate max-w-none text-gray-600 leading-relaxed space-y-8">
                        <section>
                            <h2 className="text-xl font-bold text-sutex-navy mb-4">1. Introduction</h2>
                            <p>Welcome to Sutex. We value your privacy and are committed to protecting your personal data. This policy outlines how we handle information when you visit our website or use our services.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-sutex-navy mb-4">2. Data Collection</h2>
                            <p>We may collect personal information such as your name, email address, and phone number when you contact us for business inquiries. We also collect technical data like IP addresses for analytics purposes.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-sutex-navy mb-4">3. Use of Information</h2>
                            <p>Your data is used exclusively to:
                                <ul className="list-disc pl-6 mt-2 space-y-2">
                                    <li>Provide and maintain our custom software services.</li>
                                    <li>Communicate with you regarding project inquiries.</li>
                                    <li>Comply with legal obligations under Indian law.</li>
                                </ul>
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-sutex-navy mb-4">4. Legal Identification</h2>
                            <p>Sutex is a registered entity under Udyam Registration Number: <strong>UDYAM-KR-14-0029139</strong>. Our official registered office is located in <strong>Ron, Gadag, Karnataka, India</strong>.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-sutex-navy mb-4">5. Contact</h2>
                            <p>For any privacy-related concerns, please contact our Data Protection Officer at <strong>sutexsolutions@gmail.com</strong>.</p>
                        </section>
                    </CardContent>
                </Card>
            </div>
            <Footer />
        </main>
    );
}
