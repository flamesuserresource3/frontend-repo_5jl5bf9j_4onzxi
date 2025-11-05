import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0A0A0A] text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/40 to-[#0A0A0A]" />
      <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-72 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.35),transparent_60%)] blur-2xl" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center md:pt-36">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400 shadow-[0_0_20px_2px_rgba(167,139,250,0.9)]" />
          New: Neon dashboard theme
        </span>

        <h1 className="max-w-5xl bg-gradient-to-br from-white via-white to-violet-300 bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl md:leading-[1.08]">
          AGBklar — Futuristic Neon AI Dashboard for Contracts
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">
          Turn dense legal terms into actionable, prioritized insights with AI. Blazing fast, privacy-first, and built for teams.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <button
            onClick={onPrimary}
            className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#6A0DAD] to-[#8B5CF6] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_40px_rgba(139,92,246,0.35)] transition hover:shadow-[0_14px_50px_rgba(139,92,246,0.5)]"
          >
            Start for free
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>
          <button
            onClick={onSecondary}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/80 backdrop-blur transition hover:bg-white/10"
          >
            Watch demo
          </button>
        </div>

        {/* Glass mock dashboard */}
        <div className="relative mt-12 w-full max-w-4xl">
          <div className="pointer-events-none absolute -inset-x-20 -bottom-8 h-32 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.35),transparent_60%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="flex items-center gap-2 pb-3 text-xs text-white/50">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-2 h-2 w-px bg-white/10" />
              <span>AGBklar — Preview</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="col-span-2 rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.04] p-4">
                <div className="mb-3 h-4 w-1/2 rounded bg-white/20" />
                <div className="space-y-2">
                  <div className="h-3 w-full rounded bg-white/10" />
                  <div className="h-3 w-5/6 rounded bg-white/10" />
                  <div className="h-3 w-2/3 rounded bg-white/10" />
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent p-4">
                <div className="mb-2 h-3 w-2/3 rounded bg-white/20" />
                <div className="space-y-2">
                  <div className="h-2.5 w-full rounded bg-white/10" />
                  <div className="h-2.5 w-5/6 rounded bg-white/10" />
                  <div className="h-2.5 w-1/2 rounded bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client logos row */}
        <div className="mt-12 w-full max-w-5xl opacity-80">
          <div className="grid grid-cols-2 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur sm:grid-cols-4">
            {['Notion','Linear','Vercel','Stripe'].map((name) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-lg border border-transparent px-3 py-2 text-sm text-white/70 transition hover:border-[#8B5CF6]/40 hover:text-white"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
