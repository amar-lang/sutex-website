import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/sutexlogo.png"
                                alt="Sutex Logo"
                                width={300}
                                height={100}
                                className="h-14 md:h-20 w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-sutex-orange transition-colors">
                            Services
                        </Link>
                        <Link href="/framework" className="text-sm font-medium text-gray-700 hover:text-sutex-orange transition-colors">
                            Framework
                        </Link>
                        <div className="relative group">
                            <button className="flex items-center text-sm font-medium text-gray-700 group-hover:text-sutex-orange transition-colors">
                                Products
                                <ChevronDown size={14} className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
                            </button>
                            {/* pt-4 keeps the hover bridge between trigger and panel */}
                            <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="bg-white border border-gray-100 shadow-xl min-w-[240px] py-2">
                                    <a href="/apartmeter/" className="block px-5 py-3 hover:bg-gray-50 transition-colors">
                                        <span className="block text-sm font-bold text-sutex-navy">ApartMeter</span>
                                        <span className="block text-xs text-gray-500 mt-0.5">
                                            Metering & billing for apartment societies
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-sutex-orange transition-colors">
                            About
                        </Link>
                        <Link href="/contact">
                            <Button variant="default" className="bg-sutex-orange hover:bg-sutex-orange/90 text-white rounded-none font-bold uppercase tracking-wider text-xs px-6">
                                Start Project
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden flex items-center">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-sutex-navy">
                                    <Menu size={24} />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-white p-8">
                                <SheetTitle className="text-sutex-navy font-bold mb-8">Sutex Menu</SheetTitle>
                                <div className="flex flex-col space-y-6 mt-4">
                                    <Link href="/services" className="text-lg font-bold text-sutex-navy hover:text-sutex-orange">
                                        Services
                                    </Link>
                                    <Link href="/framework" className="text-lg font-bold text-sutex-navy hover:text-sutex-orange">
                                        Framework
                                    </Link>
                                    <div>
                                        <p className="text-lg font-bold text-sutex-navy mb-3">Products</p>
                                        <a href="/apartmeter/" className="block pl-4 border-l-2 border-sutex-orange/40 text-base font-medium text-gray-700 hover:text-sutex-orange">
                                            ApartMeter
                                        </a>
                                    </div>
                                    <Link href="/about" className="text-lg font-bold text-sutex-navy hover:text-sutex-orange">
                                        About
                                    </Link>
                                    <Link href="/contact" className="w-full">
                                        <Button className="w-full bg-sutex-orange hover:bg-sutex-orange/90 text-white rounded-none font-bold uppercase tracking-wider text-sm h-12">
                                            Start Project
                                        </Button>
                                    </Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}

