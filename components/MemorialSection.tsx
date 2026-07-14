import { memorial } from "@/lib/data";

export default function MemorialSection() {
  return (
    <div className="bg-grain relative overflow-hidden rounded-[2rem] bg-brand-950 p-8 text-center shadow-lg shadow-brand-950/20 sm:p-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-gold-500/15 blur-3xl"
      />
      <div className="relative">
        <span className="text-2xl text-gold-400" aria-hidden>
          ♥
        </span>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
          In Loving Memory Of
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-sand-50 sm:text-4xl">
          {memorial.name}
        </h2>
        <p
          lang="ml"
          className="mx-auto mt-5 max-w-2xl text-brand-100/85"
        >
          {memorial.dedication.ml}
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-brand-100/60">
          {memorial.dedication.en}
        </p>
      </div>
    </div>
  );
}
