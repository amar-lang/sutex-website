import Link from "next/link";

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
                                width="250"
                                height="82"
                                className="h-16 md:h-20 w-auto object-contain brightness-0 invert"
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
                            <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
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
                                <a href="tel:+919483932100" className="hover:text-white transition-colors">+91 9483932100</a>
                            </p>
                        </div>
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
