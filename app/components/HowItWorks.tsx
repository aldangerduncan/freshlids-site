const steps = [
    {
        title: "Subscribe",
        description: "Choose your interest: Vending updates or Moto digest.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Receive",
        description: "Get curated, high-value insights delivered to your inbox.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        title: "Stay Ahead",
        description: "Be the first to know about industry shifts and new gear.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
    },
];

export default function HowItWorks() {
    return (
        <section className="py-20 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>

            <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center space-y-4 hover:scale-105 transition-transform duration-300"
                    >
                        <div className="p-4 rounded-full bg-primary/10 text-primary">
                            {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <p className="text-secondary">{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
