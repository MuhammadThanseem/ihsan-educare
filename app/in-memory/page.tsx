import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { memorial, memorialTribute } from "@/lib/data";

export const metadata: Metadata = {
  title: "In Loving Memory of Muhammed Ihsan — IHSAN EDUCARE",
  description: "A tribute to our dear friend Muhammed Ihsan, in whose memory IHSAN EDUCARE was started.",
};

export default function InMemoryPage() {
  return (
    <div className="bg-grain relative overflow-hidden bg-brand-950">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-500/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <Reveal>
          <Image
            src="/Logo.png"
            alt="IHSAN EDUCARE logo"
            width={72}
            height={72}
            className="mx-auto h-[72px] w-[72px] rounded-full object-cover shadow-lg ring-4 ring-white/10"
          />
          <Icon name="heart" className="mt-6 text-2xl text-gold-400" />
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
            In Loving Memory Of
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-sand-50 sm:text-4xl">
            {memorial.name}
          </h1>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 lang="ml" className="mt-10 font-display text-2xl font-semibold text-gold-200 sm:text-3xl">
            🕊️ {memorialTribute.title}
          </h2>
        </Reveal>

        <div lang="ml" className="mt-8 space-y-6 text-left text-brand-100/85 sm:text-lg">
          {memorialTribute.paragraphs.map((paragraph, i) => (
            <Reveal key={i} delay={0.05 + i * 0.03}>
              <p className="leading-relaxed">{paragraph}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <blockquote
            lang="ml"
            className="mx-auto mt-10 max-w-xl font-display text-xl text-gold-200 sm:text-2xl"
          >
            &ldquo;{memorialTribute.quote}&rdquo;
          </blockquote>
        </Reveal>

        <Reveal delay={0.12}>
          <p lang="ml" className="mx-auto mt-10 max-w-xl text-brand-100/70">
            🤍 {memorialTribute.closing} 🕊️
          </p>
        </Reveal>
      </div>
    </div>
  );
}
