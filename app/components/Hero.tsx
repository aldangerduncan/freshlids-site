export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-[60vh] text-center px-4 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
            </div>

            <div className="relative z-10 max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-secondary">
                    FreshLids
                </h1>
                <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto">
                    Innovating the vending and motorcycling experience.
                    <span className="block mt-2 text-foreground font-medium">Join the revolution.</span>
                </p>
            </div>
        </section>
    );
}
