import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
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
                                width={240}
                                height={80}
                                className="h-12 md:h-16 w-auto object-contain"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="#services" className="text-sm font-medium text-gray-700 hover:text-sutex-orange transition-colors">
                            Services
                        </Link>
                        <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-sutex-orange transition-colors">
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
                                    <Link href="#services" className="text-lg font-bold text-sutex-navy hover:text-sutex-orange">
                                        Services
                                    </Link>
                                    <Link href="#about" className="text-lg font-bold text-sutex-navy hover:text-sutex-orange">
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

