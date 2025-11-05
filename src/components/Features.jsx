import React from 'react';
import { Rocket, Brain, Shield, Sparkles, Check } from 'lucide-react';

const showcase = [
  {
    title: 'Upload & Parse',
    desc: 'Drag-and-drop PDFs or DOCX. We auto-detect clauses and structure.',
    Icon: Rocket,
  },
  {
    title: 'AI Insights',
    desc: 'Summaries that surface obligations, data use, and negotiation levers.',
    Icon: Brain,
  },
  {
    title: 'Risk Radar',
    desc: 'Clear severity tags for unusual or one-sided provisions.',
    Icon: Shield,
  },
  {
    title: 'Smart Highlights',
    desc: 'Color-coded highlights to scan what matters in seconds.',
    Icon: Sparkles,
  },
];

const bullets = [
  'Private by default — no training on your data',
  'OCR for scanned PDFs',
  'Export to PDF, Markdown, or Notion',
  'Team spaces with roles and permissions',
  'Custom clause alerts and watchlists',
  'Slack notifications for risk thresholds',
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-[#121212] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Feature Showcase */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            Powerful features, simple flow
          </h2>
          <p className="mt-3 text-white/70">Built for AI speed with enterprise-grade guardrails.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {showcase.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:bg-white/[0.06]"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.35),transparent_60%)] blur-2xl" />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-[#6A0DAD]/30 to-[#8B5CF6]/30 p-3 text-white ring-1 ring-white/10">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Expanded Features Section */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#20104a] via-[#1a0f3f] to-[#0f0a20] p-8 sm:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.55),transparent_60%)] blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(106,13,173,0.55),transparent_60%)] blur-3xl" />
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <h3 className="bg-gradient-to-r from-white to-violet-200 bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
                Everything you need to go from upload to insight
              </h3>
              <p className="mt-3 text-white/70">
                AGBklar combines analysis, risk scoring, and export into a single streamlined experience.
              </p>
              <ul className="mt-6 grid gap-3 text-sm">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/85">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-violet-300 ring-1 ring-white/10">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.3),transparent_60%)] blur-2xl" />
              <div className="relative h-64 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="h-full w-full rounded-xl bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
