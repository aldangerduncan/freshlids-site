import Link from "next/link";
import SignupForm from "../components/SignupForm";

export const metadata = {
    title: "Why? | FreshLids",
    description: "The science behind helmet hygiene. Why helmet linings are a real biological problem — and why regular cleaning matters.",
};

export default function Why() {
    return (
        <main className="min-h-screen bg-background text-foreground">

            {/* ── Hero ── */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 flex flex-col justify-center">
                    <span className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-4">
                        The science
                    </span>
                    <h1 className="text-7xl md:text-9xl font-black leading-none uppercase mb-6">
                        WHY?
                    </h1>
                    <p className="text-xl md:text-2xl font-medium leading-snug max-w-lg">
                        Every time you put on a helmet, you create a warm, dark, humid microclimate.
                    </p>
                    <p className="text-lg text-secondary mt-4 max-w-lg leading-relaxed">
                        Your scalp heats up quickly. Sweat builds. Airflow is limited. The lining absorbs moisture and holds it close to your skin. From a microbiology perspective, that environment is ideal.
                    </p>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div className="relative w-full max-w-lg rounded-2xl overflow-hidden bg-gray-50">
                        <img
                            src="/images/helmet-inside.webp"
                            alt="Inside view of a motorbike helmet"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* ── What a helmet absorbs ── */}
            <section className="w-full py-20 bg-foreground text-background">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-4 text-center">
                        The real biological action
                    </p>
                    <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-center mb-4">
                        The lining sits against your head.<br className="hidden md:block" /> It absorbs everything.
                    </h2>
                    <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-lg leading-relaxed">
                        Most people think of helmets as hard shells. The real problem is inside — the foam and fabric lining that absorbs everything your body produces during use.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {/* Sweat */}
                        <div className="flex flex-col items-center p-6 md:p-8 border border-gray-700 rounded-2xl">
                            <div className="mb-4 text-brand-blue">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 4C20 4 8 18 8 26C8 32.627 13.373 38 20 38C26.627 38 32 32.627 32 26C32 18 20 4 20 4Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                                    <path d="M14 28C14.5 31 17 33 20 33" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <span className="text-xl md:text-2xl font-black uppercase tracking-wide text-center">Sweat</span>
                        </div>

                        {/* Oils */}
                        <div className="flex flex-col items-center p-6 md:p-8 border border-gray-700 rounded-2xl">
                            <div className="mb-4 text-primary">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="22" r="12" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M20 10V6M15 12L12 9M25 12L28 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M15 22C15.5 25 17.5 27 20 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <span className="text-xl md:text-2xl font-black uppercase tracking-wide text-center">Scalp oils</span>
                        </div>

                        {/* Dead skin */}
                        <div className="flex flex-col items-center p-6 md:p-8 border border-gray-700 rounded-2xl">
                            <div className="mb-4 text-gray-400">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="8" y="8" width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M14 20L18 24L26 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
                                    <circle cx="14" cy="14" r="2" fill="currentColor" opacity="0.5"/>
                                    <circle cx="26" cy="14" r="1.5" fill="currentColor" opacity="0.3"/>
                                    <circle cx="20" cy="26" r="2" fill="currentColor" opacity="0.4"/>
                                    <circle cx="26" cy="26" r="1" fill="currentColor" opacity="0.2"/>
                                </svg>
                            </div>
                            <span className="text-xl md:text-2xl font-black uppercase tracking-wide text-center">Dead skin cells</span>
                        </div>

                        {/* Pollutants */}
                        <div className="flex flex-col items-center p-6 md:p-8 border border-gray-700 rounded-2xl">
                            <div className="mb-4 text-gray-500">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 28C10 22 16 24 20 20C24 16 26 10 34 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M6 34C12 28 18 30 22 26C26 22 28 16 36 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                                    <circle cx="12" cy="18" r="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
                                    <circle cx="28" cy="22" r="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5"/>
                                </svg>
                            </div>
                            <span className="text-xl md:text-2xl font-black uppercase tracking-wide text-center">Dust &amp; pollutants</span>
                        </div>
                    </div>

                    <p className="text-center text-gray-400 mt-10 text-lg">
                        That combination becomes fuel for microbial growth. Left alone, the lining becomes a reservoir.
                    </p>
                </div>
            </section>

            {/* ── Temperature stat ── */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row gap-12 md:gap-20 items-center">

                {/* Big stat */}
                <div className="flex-shrink-0 text-center md:text-left">
                    <div className="text-[clamp(5rem,15vw,9rem)] font-black leading-none text-brand-blue">
                        20–40°C
                    </div>
                    <p className="text-lg text-secondary uppercase font-bold tracking-widest mt-2">
                        The inside of a worn helmet
                    </p>
                </div>

                {/* Text */}
                <div className="flex-1">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">
                        Sweat is not the problem. Bacteria is.
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-6">
                        Moisture + Time = Microbial Growth
                    </h2>
                    <p className="text-lg text-secondary leading-relaxed mb-6">
                        Most bacteria thrive between 20 and 40°C. Add humidity from sweat and poor ventilation and you have conditions that support rapid microbial multiplication. Foam and fabric padding are porous — they trap moisture and provide surface area for organisms to cling to and grow.
                    </p>
                    <p className="text-base text-secondary/80 leading-relaxed mb-2">
                        Fresh sweat is mostly water and salt — it does not smell. Odour develops when bacteria break down sweat into volatile compounds. The main culprits: <span className="font-bold">Staphylococcus</span> and <span className="font-bold">Corynebacterium</span> species, both common on human skin.
                    </p>
                </div>
            </section>

            {/* ── Consequences ── */}
            <section className="w-full py-16 bg-muted">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-3 text-center">Over time, this leads to</p>
                    <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-12">What builds up inside your helmet</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="bg-background rounded-2xl p-6 border-l-4 border-brand-blue">
                            <div className="text-brand-blue font-black text-3xl mb-2">01</div>
                            <h3 className="font-black uppercase text-lg mb-2">Persistent odour</h3>
                            <p className="text-secondary text-sm leading-relaxed">An established microbial community embedded in fabric and foam. Surface sprays mask it temporarily — they don&apos;t remove it.</p>
                        </div>

                        <div className="bg-background rounded-2xl p-6 border-l-4 border-primary">
                            <div className="text-primary font-black text-3xl mb-2">02</div>
                            <h3 className="font-black uppercase text-lg mb-2">Discolouration</h3>
                            <p className="text-secondary text-sm leading-relaxed">Lining staining caused by accumulated organic material and microbial activity over months of use.</p>
                        </div>

                        <div className="bg-background rounded-2xl p-6 border-l-4 border-primary">
                            <div className="text-primary font-black text-3xl mb-2">03</div>
                            <h3 className="font-black uppercase text-lg mb-2">Skin irritation</h3>
                            <p className="text-secondary text-sm leading-relaxed">Repeated exposure to high bacterial loads increases the chance of irritation or infection — especially for sensitive skin, eczema, or minor scalp abrasions.</p>
                        </div>

                        <div className="bg-background rounded-2xl p-6 border-l-4 border-gray-400">
                            <div className="text-secondary font-black text-3xl mb-2">04</div>
                            <h3 className="font-black uppercase text-lg mb-2">Material degradation</h3>
                            <p className="text-secondary text-sm leading-relaxed">Persistent moisture and microbial activity breaks down foam and fabric faster, shortening the life of the lining.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── Quote callout ── */}
            <section className="w-full py-24 bg-foreground text-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="text-brand-blue text-5xl font-black leading-none mb-6">&ldquo;</div>
                    <blockquote className="text-2xl md:text-4xl font-black uppercase leading-tight mb-6">
                        You wouldn&apos;t wear the same unwashed hat every day for a year.
                    </blockquote>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Yet many people effectively do that with their helmet lining. Most wipe the shell. Some spray the exterior. Very few remove liners, wash them thoroughly, dry them correctly, and disinfect them at a level that meaningfully reduces bacteria.
                    </p>
                </div>
            </section>

            {/* ── Odour is a signal ── */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row gap-12 md:gap-20 items-center">

                {/* Warning icon column */}
                <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4">
                    <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 8L50 46H6L28 8Z" fill="#FF4500" fillOpacity="0.15" stroke="#FF4500" strokeWidth="2.5" strokeLinejoin="round"/>
                            <line x1="28" y1="22" x2="28" y2="35" stroke="#FF4500" strokeWidth="3" strokeLinecap="round"/>
                            <circle cx="28" cy="41" r="2" fill="#FF4500"/>
                        </svg>
                    </div>
                    <span className="text-primary font-black text-xs uppercase tracking-widest">Warning light</span>
                </div>

                {/* Text */}
                <div className="flex-1">
                    <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">
                        Smell is not the root problem
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-6">
                        Odour Is a Signal
                    </h2>
                    <p className="text-lg text-secondary leading-relaxed mb-6">
                        Persistent odour indicates an established microbial community embedded in the fabric and foam. Surface sprays may mask smell temporarily, but without proper treatment, bacteria remain in the deeper layers.
                    </p>
                    <p className="text-base font-bold uppercase tracking-wide mb-3">True hygiene requires:</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="mt-1 w-2 h-2 rounded-full bg-brand-blue flex-shrink-0"></span>
                            <span className="text-secondary">Effective antimicrobial action</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 w-2 h-2 rounded-full bg-brand-blue flex-shrink-0"></span>
                            <span className="text-secondary">Penetration into porous materials</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 w-2 h-2 rounded-full bg-brand-blue flex-shrink-0"></span>
                            <span className="text-secondary">Adequate drying to prevent regrowth</span>
                        </li>
                    </ul>
                    <p className="text-sm text-secondary/60 mt-6 italic">Anything less is cosmetic.</p>
                </div>

                {/* Image */}
                <div className="flex-shrink-0 hidden lg:flex w-56 xl:w-72">
                    <div className="w-full rounded-2xl bg-gray-50 p-6 flex items-center justify-center">
                        <img
                            src="/images/freshness.png"
                            alt="Helmet freshness"
                            className="w-full h-auto object-contain drop-shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* ── The key point ── */}
            <section className="w-full py-20 bg-muted">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12 items-center">

                    <div className="flex-1">
                        <span className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-4 block">
                            Why it matters
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-6">
                            The hard shell protects you from impact. The lining needs protection from biology.
                        </h2>
                        <p className="text-lg text-secondary leading-relaxed mb-6">
                            Your helmet protects your brain. The lining sits directly against your scalp and absorbs everything your body produces during use. If the inside is not cleaned and disinfected regularly, bacteria continue to accumulate, odour worsens, skin irritation risk increases, and the material degrades faster.
                        </p>
                        <p className="text-lg text-secondary leading-relaxed">
                            Regular internal cleaning breaks the cycle. It reduces bacterial load, removes built-up organic material, and restores the helmet to a more hygienic state.
                        </p>
                    </div>

                    <div className="flex-shrink-0 w-full md:w-80 lg:w-96">
                        <div className="bg-background rounded-2xl p-8 flex items-center justify-center">
                            <img
                                src="/images/helmet-graphic.png"
                                alt="Helmet lining biology"
                                className="w-full h-auto object-contain drop-shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Resolution ── */}
            <section className="w-full py-24 bg-foreground text-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-6">The answer</p>
                    <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-8">
                        FreshLids exists to fix that.
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                        And that lining is the part that almost never gets properly cleaned.
                    </p>
                    <Link
                        href="/how-it-works"
                        className="inline-block px-10 py-4 bg-brand-blue text-white font-black uppercase tracking-widest text-sm rounded-full hover:opacity-90 transition-opacity"
                    >
                        See how it works
                    </Link>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="w-full py-20 bg-muted">
                <div className="max-w-6xl mx-auto px-4 flex justify-center">
                    <SignupForm
                        segment="venue"
                        title={`Bring FreshLids to\nYOUR VENUE`}
                        description={`Leave your email and we'll get in touch\nto discuss placement and options.`}
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
