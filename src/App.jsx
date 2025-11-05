import React, { useRef } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import PricingFAQ from './components/PricingFAQ';

export default function App() {
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-md bg-gradient-to-br from-[#6A0DAD] to-[#8B5CF6] shadow-[0_0_25px_rgba(139,92,246,0.6)]" />
            <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-sm font-semibold tracking-wide text-transparent">
              AGBklar
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </nav>
          <button className="rounded-xl bg-white/10 px-4 py-2 text-xs text-white/80 hover:bg-white/15">Sign in</button>
        </div>
      </header>

      <main className="pt-16">
        <Hero onPrimary={scrollToFeatures} onSecondary={scrollToFeatures} />
        <div ref={featuresRef} id="features">
          <Features />
        </div>
        <Testimonials />
        <PricingFAQ />
      </main>

      <footer className="border-t border-white/10 bg-[#0A0A0A] py-10 text-center text-xs text-white/60">
        <div className="mx-auto max-w-7xl px-6">
          <p>© {new Date().getFullYear()} AGBklar. Futuristic Neon AI Dashboard.</p>
          <div className="mt-3 flex items-center justify-center gap-4">
            <a className="hover:text-white" href="#">Privacy</a>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <a className="hover:text-white" href="#">Terms</a>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <a className="hover:text-white" href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
