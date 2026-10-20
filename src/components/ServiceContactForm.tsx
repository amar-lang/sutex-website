"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

interface ServiceContactFormProps {
    defaultService: string;
}

export function ServiceContactForm({ defaultService }: ServiceContactFormProps) {
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
            setError("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card className="border-none shadow-2xl bg-white p-8 max-w-4xl mx-auto">
            {isSuccess ? (
                <div className="text-center py-12">
                    <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-sutex-navy mb-2">Inquiry Received</h3>
                    <p className="text-gray-600 mb-8">One of our architects will contact you shortly regarding <strong>{defaultService}</strong>.</p>
                    <Button
                        onClick={() => setIsSuccess(false)}
                        className="bg-sutex-navy hover:bg-sutex-navy/90 text-white"
                    >
                        Send Another Message
                    </Button>
                </div>
            ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-black text-sutex-navy uppercase tracking-tight">Discuss {defaultService}</h3>
                        <p className="text-gray-500 text-sm mt-2">Scale your infrastructure with Sutex engineering.</p>
                    </div>

                    {/* Hidden Service Type Input */}
                    <input type="hidden" name="service_interest" value={defaultService} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-sutex-navy opacity-70">Name</label>
                            <Input
                                name="from_name"
                                required
                                placeholder="Full Name"
                                className="bg-slate-50 border-slate-200 focus:ring-sutex-orange h-12"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-sutex-navy opacity-70">Work Email</label>
                            <Input
                                name="from_email"
                                type="email"
                                required
                                placeholder="name@company.com"
                                className="bg-slate-50 border-slate-200 focus:ring-sutex-orange h-12"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-sutex-navy opacity-70">Project Details</label>
                        <Textarea
                            name="message"
                            required
                            defaultValue={`I am interested in ${defaultService} for my organization. `}
                            placeholder="Tell us about your requirements..."
                            className="min-h-[150px] bg-slate-50 border-slate-200 focus:ring-sutex-orange"
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-sutex-navy hover:bg-sutex-navy/90 text-white font-bold py-6 rounded-none transition-all transform hover:scale-[1.01] uppercase tracking-widest text-xs"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Processing...
                            </>
                        ) : (
                            "Initiate Architectural Audit"
                        )}
                    </Button>
                </form>
            )}
        </Card>
    );
}
