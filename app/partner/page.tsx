import PartnerForm from "./PartnerForm";
import ROICalculator from "./ROICalculator";

export const metadata = {
    title: "Partner | FreshLids",
    description: "Earn passive revenue from every helmet you already service. Install a FreshLids machine and generate recurring income.",
};

export default function Partner() {
    return (
        <main className="min-h-screen bg-background text-foreground">

            {/* ── Hero ── */}
            <section className="w-full bg-foreground text-background">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Headline + bullets */}
                    <div>
                        <span className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-4 block">
                            Revenue opportunity
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none mb-6">
                            Earn Passive Revenue From Every Helmet You Already Service
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            Turn helmet hygiene into a new income stream. Install a FreshLids machine at your location and generate recurring revenue from every clean.
                        </p>
                        <ul className="space-y-3 mb-8">
                            {[
                                "No inventory required",
                                "Simple setup",
                                "Recurring income opportunity",
                                "Suitable for retailers, clubs, gyms and venues",
                            ].map(point => (
                                <li key={point} className="flex items-center gap-3 text-gray-300">
                                    <span className="w-2 h-2 rounded-full bg-brand-blue flex-shrink-0"></span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Lead form */}
                    <div className="bg-white text-foreground rounded-2xl p-8">
                        <PartnerForm
                            headline="Get the Partner Overview"
                            microcopy="We respect your privacy. No obligations."
                            buttonText="Send Me The Details"
                        />
                    </div>
                </div>
            </section>

            {/* ── The Problem ── */}
            <section className="w-full py-20 bg-muted">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">
                            The problem
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-6">
                            Most Helmets Are Never Properly Cleaned
                        </h2>
                        <p className="text-secondary text-lg leading-relaxed mb-4">
                            Sweat, bacteria and odour build up quickly inside helmets. Most riders rarely clean the internal lining properly, if at all.
                        </p>
                        <p className="text-secondary font-bold mb-4">That leads to:</p>
                        <ul className="space-y-3 mb-6">
                            {[
                                "Hygiene concerns",
                                "Odour complaints",
                                "Reduced helmet lifespan",
                                "Poor customer experience",
                            ].map(item => (
                                <li key={item} className="flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                                    <span className="text-secondary">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-secondary leading-relaxed">
                            FreshLids provides a simple, visible solution that riders understand immediately.
                        </p>
                    </div>
                    <div className="bg-background rounded-2xl p-8 flex items-center justify-center">
                        <img
                            src="/images/helmet-graphic.png"
                            alt="Helmet hygiene problem"
                            className="w-full max-w-xs h-auto object-contain drop-shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* ── The Opportunity ── */}
            <section className="w-full py-20 bg-foreground text-background">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-4 block">
                            The opportunity
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
                            Turn Hygiene Into Revenue
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Helmet cleaning is not just a service. It is an ongoing revenue opportunity. You already have the traffic. This monetises it.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { n: "01", title: "New revenue stream", body: "A new in-store revenue source that runs independently alongside your existing business." },
                            { n: "02", title: "Recurring usage", body: "Existing customers return to clean their helmets — generating repeat income automatically." },
                            { n: "03", title: "Increased return frequency", body: "Customers visit more often, increasing your opportunity to sell across your full range." },
                            { n: "04", title: "Hygiene positioning", body: "Stronger brand association with quality, care and rider wellbeing." },
                        ].map(card => (
                            <div key={card.n} className="border border-gray-700 rounded-2xl p-6">
                                <div className="text-brand-blue font-black text-3xl mb-3">{card.n}</div>
                                <h3 className="font-black uppercase text-lg mb-2">{card.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{card.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── How It Works ── */}
            <section className="w-full py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-4 block">
                            Simple by design
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
                            How It Works
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { n: "1", title: "Install the machine", body: "Choose to purchase, lease, or host. We handle delivery and setup." },
                            { n: "2", title: "Customers clean their helmets", body: "Simple, self-service operation. No staff involvement required." },
                            { n: "3", title: "You generate revenue", body: "Earn per clean with minimal operational effort. Monitor performance easily." },
                        ].map(step => (
                            <div key={step.n} className="text-center">
                                <div className="w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center font-black text-2xl mx-auto mb-6">
                                    {step.n}
                                </div>
                                <h3 className="font-black uppercase text-xl mb-3">{step.title}</h3>
                                <p className="text-secondary leading-relaxed">{step.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Partnership Options ── */}
            <section className="w-full py-20 bg-muted">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-4 block">
                            Partnership models
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
                            Flexible Models To Suit Your Business
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Purchase */}
                        <div className="bg-background rounded-2xl p-8 border-2 border-transparent">
                            <h3 className="font-black uppercase text-2xl mb-2">Purchase</h3>
                            <p className="text-secondary text-sm mb-6">Best suited for businesses wanting full control and long-term return.</p>
                            <ul className="space-y-3 mb-6">
                                {[
                                    "Highest long-term profit potential",
                                    "Full ownership",
                                    "Maximum revenue retention",
                                    "Payback period based on usage",
                                ].map(item => (
                                    <li key={item} className="flex items-start gap-2 text-sm">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span>
                                        <span className="text-secondary">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Lease - Recommended */}
                        <div className="bg-brand-blue text-white rounded-2xl p-8 border-2 border-brand-blue relative">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-white text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full">
                                Recommended
                            </div>
                            <h3 className="font-black uppercase text-2xl mb-2">Monthly Lease</h3>
                            <p className="text-white/70 text-sm mb-6">Ideal for businesses wanting strong returns with minimal risk.</p>
                            <ul className="space-y-3 mb-6">
                                {[
                                    "No large upfront investment",
                                    "Fixed monthly lease cost",
                                    "Cashflow positive potential from month one",
                                    "Full revenue beyond lease cost",
                                ].map(item => (
                                    <li key={item} className="flex items-start gap-2 text-sm">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></span>
                                        <span className="text-white/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Hosted */}
                        <div className="bg-background rounded-2xl p-8 border-2 border-transparent">
                            <h3 className="font-black uppercase text-2xl mb-2">Hosted by FreshLids</h3>
                            <p className="text-secondary text-sm mb-6">Best for locations wanting passive income without involvement.</p>
                            <ul className="space-y-3 mb-6">
                                {[
                                    "No capital required",
                                    "No maintenance responsibility",
                                    "No operational management",
                                    "Revenue share model",
                                ].map(item => (
                                    <li key={item} className="flex items-start gap-2 text-sm">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"></span>
                                        <span className="text-secondary">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── ROI Calculator ── */}
            <section className="w-full py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <span className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-4 block">
                            Run the numbers
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-3">
                            Estimate Your Revenue Potential
                        </h2>
                        <p className="text-secondary text-lg max-w-2xl">
                            Adjust the numbers to reflect your location and see projected returns across each partnership model.
                        </p>
                    </div>
                    <ROICalculator />
                </div>
            </section>

            {/* ── Final CTA ── */}
            <section className="w-full py-24 bg-foreground text-background">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
                            Ready To Add A New Revenue Stream?
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            FreshLids transforms a hygiene problem into a visible, recurring income opportunity. Enter your details to receive full partner information and earning projections.
                        </p>
                    </div>
                    <div className="bg-white text-foreground rounded-2xl p-8">
                        <PartnerForm
                            headline="Become a FreshLids Partner"
                            microcopy="No pressure. Just clear numbers and partnership details."
                            buttonText="Become A FreshLids Partner"
                        />
                    </div>
                </div>
            </section>

        </main>
    );
}
