import Link from "next/link";
import SignupForm from "../components/SignupForm";

export default function HowItWorks() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row gap-12 md:gap-12">

                {/* Left Column: Text Content */}
                <div className="flex-1 flex flex-col justify-center max-w-lg">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-none uppercase">
                        Dirty, smelly helmet linings are a real hygiene problem.
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary font-medium mb-4 leading-tight">
                        Helmet interiors absorb sweat, heat and bacteria with every ride.
                    </p>
                </div>

                {/* Right Column: Timeline UI */}
                <div className="flex-1 hidden md:flex flex-col justify-center items-center relative">

                    {/* Main Line Container */}
                    <div className="relative h-[600px] w-full max-w-[2px] flex flex-col items-center">

                        {/* Static Background Line */}
                        <div className="absolute top-0 bottom-0 w-1 bg-gray-200"></div>

                        {/* Animated Foreground Line */}
                        <div className="absolute top-0 w-1 bg-[#2fa6c7] animate-fill-line"></div>

                        {/* Steps Container (Absolute positioning relative to the line) */}
                        <div className="absolute inset-0 w-full">

                            {/* Step 1 - Top Left */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4">
                                {/* Label - To the Left */}
                                <div className="absolute right-8 top-1/2 -translate-y-1/2 w-48 text-right">
                                    <span className="inline-block px-4 py-3 rounded border-2 font-bold text-sm tracking-widest uppercase animate-step-1">Step 01</span>
                                </div>
                                {/* Dot */}
                                <div className="w-4 h-4 rounded-full border-2 bg-white z-10 animate-step-1 absolute inset-0"></div>
                            </div>

                            {/* Step 2 - Middle Right */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4">
                                {/* Label - To the Right */}
                                <div className="absolute left-8 top-1/2 -translate-y-1/2 w-48 text-left">
                                    <span className="inline-block px-4 py-3 rounded border-2 font-bold text-sm tracking-widest uppercase animate-step-2">Step 02</span>
                                </div>
                                {/* Dot */}
                                <div className="w-4 h-4 rounded-full border-2 bg-white z-10 animate-step-2 absolute inset-0"></div>
                            </div>

                            {/* Step 3 - Bottom Left */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4">
                                {/* Label - To the Left */}
                                <div className="absolute right-8 top-1/2 -translate-y-1/2 w-48 text-right">
                                    <span className="inline-block px-4 py-3 rounded border-2 font-bold text-sm tracking-widest uppercase animate-step-3">Step 03</span>
                                </div>
                                {/* Dot */}
                                <div className="w-4 h-4 rounded-full border-2 bg-white z-10 animate-step-3 absolute inset-0"></div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            {/* Detailed Steps Container */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

                <div className="flex flex-col gap-12 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-12 md:gap-y-0 text-center md:text-left">

                    {/* === Step 01 === */}

                    {/* Left: Text */}
                    <div className="flex flex-col items-center md:items-end md:text-right justify-center order-2 md:order-none md:col-start-1 md:row-start-1">
                        <span className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-4">
                            01
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight uppercase">
                            Place helmet in the machine
                        </h2>
                        <p className="text-lg text-secondary/80 leading-relaxed max-w-md">
                            Open the door and place your helmet into the compartment.
                        </p>
                    </div>

                    {/* Middle: Line & Dot */}
                    <div className="hidden md:flex relative justify-center md:col-start-2 md:row-start-1 w-0">
                        {/* Line from Center Down */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 bottom-0 w-1 bg-gray-200"></div>
                        {/* Dot */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-blue rounded-full border-4 border-white box-content z-10"></div>
                    </div>

                    {/* Right: Image */}
                    <div className="flex justify-center items-center order-1 md:order-none md:col-start-3 md:row-start-1">
                        <div className="relative w-full max-w-lg aspect-square bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
                            <img
                                src="/images/helmet-graphic.png"
                                alt="Place helmet in machine"
                                className="w-full h-auto object-contain drop-shadow-lg"
                            />
                        </div>
                    </div>

                    {/* === Gap 1-2 === */}
                    <div className="hidden md:flex justify-center md:col-start-2 md:row-start-2 w-0 h-32 relative">
                        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-gray-200"></div>
                    </div>


                    {/* === Step 02 === */}

                    {/* Left: Image */}
                    <div className="flex justify-center items-center order-1 md:order-none md:col-start-1 md:row-start-3">
                        <div className="relative w-full max-w-lg aspect-square bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
                            <img
                                src="/images/vending-machine-graphic.png"
                                alt="Select cycle and pay"
                                className="w-full h-auto object-contain drop-shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Middle: Line & Dot */}
                    <div className="hidden md:flex relative justify-center md:col-start-2 md:row-start-3 w-0">
                        {/* Line Full Height */}
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gray-200"></div>
                        {/* Dot */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-blue rounded-full border-4 border-white box-content z-10"></div>
                    </div>

                    {/* Right: Text */}
                    <div className="flex flex-col items-center md:items-start md:text-left justify-center order-2 md:order-none md:col-start-3 md:row-start-3">
                        <span className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-4">
                            02
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight uppercase">
                            Select cycle and pay
                        </h2>
                        <p className="text-lg text-secondary/80 leading-relaxed max-w-md">
                            Choose a quick, standard, or deep cycle depending on how thorough you want the refresh to be.
                        </p>
                    </div>

                    {/* === Gap 2-3 === */}
                    <div className="hidden md:flex justify-center md:col-start-2 md:row-start-4 w-0 h-32 relative">
                        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1 bg-gray-200"></div>
                    </div>


                    {/* === Step 03 === */}

                    {/* Left: Text */}
                    <div className="flex flex-col items-center md:items-end md:text-right justify-center order-2 md:order-none md:col-start-1 md:row-start-5">
                        <span className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-4">
                            03
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight uppercase">
                            Remove helmet
                        </h2>
                        <p className="text-lg text-secondary/80 leading-relaxed max-w-md">
                            Once the cycle finishes, remove your helmet; dry, refreshed, and ready to wear.
                        </p>
                    </div>

                    {/* Middle: Line & Dot */}
                    <div className="hidden md:flex relative justify-center md:col-start-2 md:row-start-5 w-0">
                        {/* Line from Top to Center */}
                        <div className="absolute top-0 bottom-1/2 left-1/2 -translate-x-1/2 w-1 bg-gray-200"></div>
                        {/* Dot */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-blue rounded-full border-4 border-white box-content z-10"></div>
                    </div>

                    {/* Right: Image */}
                    <div className="flex justify-center items-center order-1 md:order-none md:col-start-3 md:row-start-5">
                        <div className="relative w-full max-w-lg aspect-square bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
                            <img
                                src="/images/freshness.png"
                                alt="Remove helmet"
                                className="w-full h-auto object-contain drop-shadow-lg"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* Venue Inquiry CTA */}
            <section className="w-full py-20 bg-muted">
                <div className="max-w-6xl mx-auto px-4 flex justify-center">
                    <SignupForm
                        segment="venue"
                        title={`Bring FreshLids to\nYOUR VENUE`}
                        description={`Leave your email and we’ll get in touch\nto discuss placement and options.`}
                        ctaText="I'd like to know more"
                        buttonColor="bg-[#2fa6c7]"
                        variant="newsletter"
                        centerText={true}
                    />
                </div>
            </section>

        </main>
    );
}
