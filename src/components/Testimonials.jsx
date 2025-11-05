import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'AGBklar distilled a 24-page contract into a one-page brief with clear risk flags. It saved us hours before a vendor call.',
    name: 'Lea Sommer',
    role: 'Head of Operations, FintechCo',
  },
  {
    quote:
      'As in-house counsel, I use it to triage vendor terms. The summaries are accurate and the risk indicators are practical.',
    name: 'Jonas Meier',
    role: 'Legal Counsel, Growth SaaS',
  },
  {
    quote:
      'The clarity is outstanding. Our PMs finally understand contract impact without reading legalese.',
    name: 'Mara Klein',
    role: 'Product Lead, RetailTech',
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-amber-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-[#0A0A0A] py-20 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            Loved by legal and ops teams
          </h2>
          <p className="mt-3 text-white/70">Real feedback from teams using AGBklar daily.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:bg-white/[0.05]"
            >
              <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.45),transparent_60%)] blur-xl" />
              <Stars />
              <p className="mt-4 text-sm italic text-white/85">“{t.quote}”</p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-white/60">{t.role}</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#6A0DAD] to-[#8B5CF6] opacity-80 shadow-[0_0_40px_rgba(139,92,246,0.35)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
