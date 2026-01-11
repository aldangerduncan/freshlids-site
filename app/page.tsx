import HeroCarousel from "./components/HeroCarousel";
import SignupForm from "./components/SignupForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center">
      <HeroCarousel />

      <section className="w-full py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 uppercase tracking-wide">Industry Intel</h2>
          <p className="text-center text-secondary mb-12 max-w-2xl mx-auto">
            Daily digest of what's happening in vending. Real operator insights, not marketing.
          </p>

          <div className="flex justify-center">
            <SignupForm
              segment="vending"
              title="Vending Industry Brief"
              description="Get the daily digest of what matters in vending."
              variant="newsletter"
              ctaText="GET THE DAILY VENDING INDUSTRY BRIEF"
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
