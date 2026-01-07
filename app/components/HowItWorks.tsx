import Image from "next/image";

export default function HowItWorks() {
    return (
        <section className="py-20 px-4 bg-muted">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-wide">The Reality</h2>

                <div className="flex justify-center">
                    <div className="relative w-full max-w-4xl aspect-[4/3] md:aspect-[16/9]">
                        <Image
                            src="/assets/The unpleasant reality of helmet hygiene.png"
                            alt="The unpleasant reality of helmet hygiene"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
                    <div className="box-panel p-6">
                        <h3 className="text-xl font-bold mb-2 uppercase">Deep Clean</h3>
                        <p className="text-secondary">Targets sweat, odour, and bacteria in existing linings.</p>
                    </div>
                    <div className="box-panel p-6">
                        <h3 className="text-xl font-bold mb-2 uppercase">Fast Turnaround</h3>
                        <p className="text-secondary">Minutes, not hours. Get back on the road instantly.</p>
                    </div>
                    <div className="box-panel p-6">
                        <h3 className="text-xl font-bold mb-2 uppercase">Public Access</h3>
                        <p className="text-secondary">Designed for high-traffic venues. No specialist staff needed.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
