import Link from "next/link";
import { Sparkles, ShieldCheck } from "lucide-react";

export function Footer() {
    return (
        <footer id="contact" className="bg-sutex-navy text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="mb-6">
                            <img
                                src="/sutexlogo.png"
                                alt="Sutex Logo"
                                width={350}
                                height={115}
                                className="h-20 md:h-24 w-auto object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
                            The Industrial Future of Software Development. We build high-performance mobile ecosystems and modernize legacy systems for the global stage.
                        </p>
                        <div className="text-xs text-gray-500 space-y-1 uppercase tracking-widest font-medium">
                            <p>Udyam Registration: UDYAM-KR-14-0029139</p>
                            <p>Ron, Gadag, Karnataka, India</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Platform</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="/#services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/framework" className="hover:text-white transition-colors">Engineering Framework</Link></li>
                            <li><Link href="/#products" className="hover:text-white transition-colors">Products</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Get in Touch</h4>
                        <div className="space-y-4 text-gray-400 text-sm">
                            <p className="flex flex-col">
                                <span className="text-white/50 text-[10px] uppercase font-bold mb-1">Email</span>
                                <a href="mailto:sutexsolutions@gmail.com" className="hover:text-white transition-colors">sutexsolutions@gmail.com</a>
                            </p>
                            <p className="flex flex-col">
                                <span className="text-white/50 text-[10px] uppercase font-bold mb-1">Phone</span>
                                <a href="tel:+919448556091" className="hover:text-white transition-colors">+91 9448556091</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Engineering Authority Note */}
                <div className="mt-16 pt-8 border-t border-white/5">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-full bg-sutex-orange/20 flex items-center justify-center">
                                <ShieldCheck className="w-5 h-5 text-sutex-orange" />
                            </div>
                            <div>
                                <h5 className="font-bold text-sm tracking-tight">Expert-Led Development</h5>
                                <p className="text-xs text-gray-500">Every solution is manually audited by senior architects.</p>
                            </div>
                        </div>
                        <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-medium text-center md:text-right">
                            Our proprietary frameworks ensure <span className="text-white font-bold">3x faster deployment</span> without compromising on industrial-grade security.
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
                    <p>© 2025 Sutex Inc. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 space-x-6">
                        <Link href="/privacy" className="hover:text-white">Privacy</Link>
                        <Link href="/terms" className="hover:text-white">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
