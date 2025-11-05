import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    highlight: false,
    features: ['1 document / day', 'AI summary', 'Basic risk flags', 'Email export'],
  },
  {
    name: 'Pro',
    price: '$19',
    period: '/mo',
    highlight: true,
    features: [
      'Unlimited documents',
      'Advanced risk analysis',
      'Custom clause alerts',
      'Priority processing',
      'Slack/Notion export',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    highlight: false,
    features: ['SSO & SCIM', 'Audit logs', 'Dedicated support', 'On-prem options'],
  },
];

const faqs = [
  {
    q: 'Is my data secure?',
    a: 'Yes. Your files are encrypted in transit and at rest. We never use your documents to train models.',
  },
  {
    q: 'Which formats are supported?',
    a: 'PDF, DOCX, and TXT. Scanned PDFs are supported with OCR.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely. You can manage or cancel your subscription from your account settings at any time.',
  },
  {
    q: 'Do you offer team plans?',
    a: 'Yes. Contact us for custom pricing for larger teams with SSO and audit logs.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03]">
      <button
        className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-white">{q}</span>
        <span
          className={`inline-block h-5 w-5 rotate-0 transform rounded-full bg-white/10 text-center text-xs leading-5 text-white transition ${open ? 'rotate-45' : ''}`}
        >
          +
        </span>
      </button>
      {open && <div className="px-5 pb-4 text-sm text-white/70">{a}</div>}
    </div>
  );
}

export default function PricingFAQ() {
  return (
    <section id="pricing" className="w-full bg-[#121212] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Pricing */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            Simple pricing
          </h2>
          <p className="mt-3 text-white/70">Start free, upgrade when you need more power.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border bg-white/[0.03] p-6 backdrop-blur transition ${
                tier.highlight
                  ? 'border-violet-400/60 shadow-[0_10px_50px_rgba(139,92,246,0.25)]'
                  : 'border-white/10'
              }`}
            >
              {tier.highlight && (
                <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-violet-400/10 px-3 py-1 text-[10px] font-medium text-violet-300 ring-1 ring-violet-400/40">
                  <Info className="h-3 w-3" /> Best value
                </div>
              )}
              <h3 className="text-lg font-medium text-white">{tier.name}</h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-3xl font-semibold text-white">{tier.price}</span>
                {tier.period && <span className="mb-1 text-white/60">{tier.period}</span>}
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-white/85">
                    <Check className="h-4 w-4 text-violet-300" /> {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 w-full rounded-xl px-4 py-3 text-sm font-medium transition ${
                  tier.highlight
                    ? 'bg-gradient-to-r from-[#6A0DAD] to-[#8B5CF6] text-white shadow-[0_10px_40px_rgba(139,92,246,0.35)]'
                    : 'border border-white/10 bg-white/5 text-white/90 hover:bg-white/10'
                }`}
              >
                {tier.highlight ? 'Go Pro' : 'Get started'}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
              Frequently asked questions
            </h3>
            <p className="mt-3 text-white/70">Everything you need to know about AGBklar.</p>
          </div>
          <div className="mx-auto mt-8 grid max-w-3xl gap-3">
            {faqs.map((i) => (
              <FAQItem key={i.q} q={i.q} a={i.a} />
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#6A0DAD]/30 to-[#8B5CF6]/30 p-6 text-center backdrop-blur">
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.6),transparent_60%)] blur-2xl" />
          <h4 className="text-xl font-semibold">AI-driven contract clarity for everyone.</h4>
          <p className="mt-2 text-sm text-white/80">Sign up to get early access and product updates.</p>
          <form className="mx-auto mt-4 flex max-w-md gap-2">
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none backdrop-blur focus:ring-2 focus:ring-violet-400/50"
            />
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-[#6A0DAD] to-[#8B5CF6] px-4 py-3 text-sm font-medium text-white shadow-[0_10px_40px_rgba(139,92,246,0.35)]"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
