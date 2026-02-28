export function About() {
    return (
        <section id="about" className="py-24 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-black text-sutex-navy mb-8 uppercase tracking-tighter">
                            Authority in <br />
                            <span className="text-sutex-orange italic underline decoration-2 underline-offset-8">Innovation</span>
                        </h2>
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                Sutex is not just another development agency. We are architects of digital resilience. In an era where business logic is the most valuable asset, we specialize in the delicate art of modernization.
                            </p>
                            <p>
                                Our philosophy is simple: <strong>Innovate. Build. Scale.</strong> We take the industrial precision of engineering and apply it to the fast-paced world of startups, ensuring your foundations are as strong as your vision.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-sutex-navy relative flex items-center justify-center overflow-hidden">
                            <div className="text-white text-9xl font-black opacity-10 absolute -right-10 -bottom-10 select-none">SUTEX</div>
                            <div className="z-10 p-12 text-center border border-white/20 w-4/5 h-4/5 flex flex-col justify-center">
                                <h3 className="text-white text-3xl font-bold mb-4">Industrial Future</h3>
                                <p className="text-white/80 uppercase tracking-widest text-sm">Crafting Global Benchmarks since 2025</p>
                            </div>
                        </div>
                        {/* Decorative orange corner */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-8 border-r-8 border-sutex-orange"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
