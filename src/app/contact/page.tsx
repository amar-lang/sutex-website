"use client";

import { useState, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSubmitting(true);
        setError(null);

        try {
            await emailjs.sendForm(
                "service_9kctd8i",
                "template_srefn0q",
                formRef.current,
                "yFgi_XrZSpDVrqyK1"
            );
            setIsSuccess(true);
            formRef.current.reset();
        } catch (err) {
            console.error("EmailJS Error:", err);
            setError("Failed to send message. Please try again or contact us directly via email.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-sutex-navy mb-4">Start Your Project</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to modernize your legacy systems or build a high-performance mobile ecosystem? Let's discuss your vision.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <Card className="border-none shadow-lg bg-white/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-sutex-navy flex items-center">
                                    <Mail className="w-5 h-5 mr-3 text-sutex-orange" />
                                    Email Us
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <a href="mailto:sutexsolutions@gmail.com" className="text-lg font-medium hover:text-sutex-orange transition-colors">
                                    sutexsolutions@gmail.com
                                </a>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg bg-white/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-sutex-navy flex items-center">
                                    <Phone className="w-5 h-5 mr-3 text-sutex-orange" />
                                    Call Us
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <a href="tel:+919448556091" className="text-lg font-medium hover:text-sutex-orange transition-colors">
                                    +91 9448556091
                                </a>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg bg-white/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-sutex-navy flex items-center">
                                    <MapPin className="w-5 h-5 mr-3 text-sutex-orange" />
                                    Visit Us
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-medium leading-relaxed">
                                    Ron, Gadag,<br />
                                    Karnataka, India
                                </p>
                                <p className="text-xs text-gray-500 mt-2 uppercase tracking-widest">
                                    Udyam: UDYAM-KR-14-0029139
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="border-none shadow-2xl bg-white p-8">
                            {isSuccess ? (
                                <div className="text-center py-12">
                                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
                                    <h3 className="text-2xl font-bold text-sutex-navy mb-2">Message Sent!</h3>
                                    <p className="text-gray-600 mb-8">We've received your inquiry and will get back to you shortly.</p>
                                    <Button
                                        onClick={() => setIsSuccess(false)}
                                        className="bg-sutex-navy hover:bg-sutex-navy/90 text-white"
                                    >
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold uppercase tracking-wider text-sutex-navy">Full Name</label>
                                            <Input
                                                name="from_name"
                                                required
                                                placeholder="John Doe"
                                                className="bg-slate-50 border-slate-200 focus:ring-sutex-orange"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold uppercase tracking-wider text-sutex-navy">Work Email</label>
                                            <Input
                                                name="from_email"
                                                type="email"
                                                required
                                                placeholder="john@company.com"
                                                className="bg-slate-50 border-slate-200 focus:ring-sutex-orange"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold uppercase tracking-wider text-sutex-navy">Phone Number</label>
                                        <Input
                                            name="phone_number"
                                            required
                                            placeholder="+91 XXXXX XXXXX"
                                            className="bg-slate-50 border-slate-200 focus:ring-sutex-orange"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold uppercase tracking-wider text-sutex-navy">Message</label>
                                        <Textarea
                                            name="message"
                                            required
                                            placeholder="Tell us about your requirements..."
                                            className="min-h-[150px] bg-slate-50 border-slate-200 focus:ring-sutex-orange"
                                        />
                                    </div>

                                    {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-sutex-navy hover:bg-sutex-navy/90 text-white font-bold py-6 rounded-lg transition-all transform hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            "Send Inquiry"
                                        )}
                                    </Button>
                                </form>
                            )}
                        </Card>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
