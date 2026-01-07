import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center py-12 md:py-16 text-center px-4">
            <div className="relative z-10 max-w-4xl flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">

                {/* Logo */}
                <div className="relative w-64 h-24 md:w-80 md:h-32">
                    <Image
                        src="/assets/logo.png"
                        alt="FreshLids Logo"
                        fill
                        className="object-contain dark:invert"
                        priority
                    />
                </div>

                {/* Blunt Copy */}
                <div className="space-y-2">
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground uppercase">
                        Clean your helmet.<br />Fast.
                    </h1>
                    <p className="text-lg md:text-2xl text-secondary font-medium max-w-xl mx-auto">
                        Removes sweat, odour, and bacteria.<br />No booking. No waiting.
                    </p>
                </div>
            </div>
        </section>
    );
}
