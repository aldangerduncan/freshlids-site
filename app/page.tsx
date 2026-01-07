import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import SignupForm from "./components/SignupForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center">
      <Hero />

      <HowItWorks />

      <section className="w-full py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-wide">Be First To Know</h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <SignupForm
              segment="vending"
              title="Vending Updates"
              description="Be the first to know where machines launch."
            />

            <SignupForm
              segment="moto"
              title="Rider Alerts"
              description="New locations and daily digests."
            />
          </div>
        </div>
      </section>

      <footer className="w-full py-8 text-center text-secondary text-sm font-mono uppercase">
        <p>&copy; {new Date().getFullYear()} FreshLids. Detailed for riders.</p>
      </footer>
    </main>
  );
}
