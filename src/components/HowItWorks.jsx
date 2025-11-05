import React from 'react';
import { Upload, Brain, ShieldAlert, Download } from 'lucide-react';

const steps = [
  {
    title: 'Upload your document',
    desc: 'Add your T&Cs in PDF, DOCX, or text format. We support multi-page files.',
    Icon: Upload,
    color: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'AI analysis',
    desc: 'Our models parse clauses, obligations, data use, and termination details.',
    Icon: Brain,
    color: 'from-fuchsia-400 to-purple-500',
  },
  {
    title: 'Risk flags',
    desc: 'Identify unusual, one-sided, or sensitive clauses with clear indicators.',
    Icon: ShieldAlert,
    color: 'from-amber-400 to-orange-500',
  },
  {
    title: 'Actionable summary',
    desc: 'Download a concise summary and share with your team or counsel.',
    Icon: Download,
    color: 'from-lime-400 to-emerald-500',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative w-full bg-[#0b0c12] py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-white/70">
            From upload to insights in under a minute. Designed for clarity and speed.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, desc, Icon, color }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:bg-white/[0.05]"
            >
              <div
                className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${color} opacity-30 blur-2xl`}
              />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
