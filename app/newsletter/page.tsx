import Image from "next/image";
import SignupForm from "../components/SignupForm";

export default function NewsletterPage() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            {/* Logo in top right */}
            <header className="absolute top-8 right-8 z-10">
                <div className="relative w-32 h-12 md:w-40 md:h-16">
                    <Image
                        src="/assets/logo.png"
                        alt="FreshLids"
                        fill
                        className="object-contain dark:invert"
                        priority
                    />
                </div>
            </header>

            {/* Centered content */}
            <div className="flex-1 flex items-center justify-center px-4 py-20">
                <div className="max-w-2xl w-full space-y-12">
                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground text-center">
                        The vending industry, summarised daily
                    </h1>

                    {/* Paragraph */}
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg md:text-xl text-foreground leading-relaxed">
                            I spend a lot of time reading vending-related Facebook groups and Reddit threads to stay across what's actually happening in the industry. Every day, I run a process that scans those discussions and uses an AI agent to summarise what matters. What's actionable, what's real industry intel, and what's probably noise you can ignore. The result is a short daily digest that saves time and keeps you across the things that actually affect operators and venue owners.
                        </p>
                    </div>

                    {/* Signup Form */}
                    <SignupForm
                        segment="vending"
                        title="Get the daily digest"
                        description=""
                        variant="newsletter"
                        ctaText="GET THE DAILY DIGEST"
                        showSubtext={true}
                    />
                </div>
            </div>
        </main>
    );
}
