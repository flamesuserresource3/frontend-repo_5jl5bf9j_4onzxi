import React, { useRef } from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import PricingFAQ from './components/PricingFAQ';

export default function App() {
  const howItWorksRef = useRef(null);

  const handleCTAClick = () => {
    // Smooth scroll to how it works for this demo; in product, this would open file picker
    howItWorksRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleHowItWorksClick = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#0a0b10] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0b10]/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-md bg-gradient-to-br from-lime-400 to-emerald-500 shadow-[0_0_20px_2px_rgba(163,230,53,0.6)]" />
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-sm font-semibold tracking-wide text-transparent">
              AGBklar
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#how-it-works" className="hover:text-white">How it works</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </nav>
          <button className="rounded-xl bg-white/10 px-4 py-2 text-xs text-white/80 hover:bg-white/15">Sign in</button>
        </div>
      </header>

      <main className="pt-16">
        <Hero onCTAClick={handleCTAClick} onHowItWorksClick={handleHowItWorksClick} />
        <div ref={howItWorksRef}>
          <HowItWorks />
        </div>
        <Testimonials />
        <div id="pricing">
          <PricingFAQ />
        </div>
      </main>

      <footer className="border-t border-white/10 bg-[#0a0b10] py-10 text-center text-xs text-white/60">
        <div className="mx-auto max-w-7xl px-6">
          <p>
            © {new Date().getFullYear()} AGBklar. Built for clarity — dark, neon, and fast.
          </p>
        </div>
      </footer>
    </div>
  );
}
