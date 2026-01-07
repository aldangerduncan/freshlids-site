import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import SignupForm from "./components/SignupForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center">
      <Hero />

      <HowItWorks />

      <section className="w-full py-20 bg-secondary/5">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Join the Community</h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <SignupForm
              segment="vending"
              title="Vending Industry Updates"
              description="Deep dives into the vending machine business. Market trends, tech, and opportunities."
            />

            <SignupForm
              segment="moto"
              title="Motorcycling Daily Digest"
              description="Daily dose of two-wheeled culture. Reviews, rides, and route recommendations."
            />
          </div>
        </div>
      </section>

      <footer className="w-full py-8 text-center text-secondary text-sm">
        <p>&copy; {new Date().getFullYear()} FreshLids. All rights reserved.</p>
      </footer>
    </main>
  );
}
