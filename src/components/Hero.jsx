import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onCTAClick, onHowItWorksClick }) {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0b10] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b10]/40 to-[#0a0b10]" />
      <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-64 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-2xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-lime-400 shadow-[0_0_20px_2px_rgba(163,230,53,0.8)]" />
          AI-powered risk insights
        </span>

        <h1 className="max-w-3xl bg-gradient-to-br from-white via-white to-lime-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl md:leading-[1.1]">
          AGBklar — Understand contracts instantly
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">
          Upload your terms and conditions and get a clear summary with highlighted risks. Fast, reliable, and built for modern teams.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button
            onClick={onCTAClick}
            className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lime-400 to-emerald-400 px-6 py-3 text-sm font-medium text-black shadow-[0_8px_30px_rgba(163,230,53,0.35)] transition hover:shadow-[0_12px_40px_rgba(163,230,53,0.45)]"
          >
            Upload & Analyze
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>
          <button
            onClick={onHowItWorksClick}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/80 backdrop-blur transition hover:bg-white/10"
          >
            How it works
          </button>
        </div>

        <div className="mt-10 flex items-center gap-6 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            No data is used to train models
          </div>
          <div className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            SOC2-ready processing
          </div>
        </div>
      </div>
    </section>
  );
}
