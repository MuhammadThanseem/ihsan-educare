import Link from "next/link";
import type { CategoryGroup, Stream } from "@/lib/data";

export default function FeaturedCategoryCard({
  category,
  streams,
}: {
  category: CategoryGroup;
  streams: Stream[];
}) {
  return (
    <Link
      href={`/streams#${category.slug}`}
      className="bg-grain group relative flex flex-col overflow-hidden rounded-[2rem] bg-brand-950 p-8 shadow-lg shadow-brand-950/20 sm:p-10 lg:flex-row lg:items-center lg:gap-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 z-0 h-64 w-64 rounded-full bg-gold-500/20 blur-3xl transition-transform duration-500 group-hover:scale-125"
      />
      <div className="relative z-[2] flex-1">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
          Most explored
        </span>
        <h3 className="mt-3 font-display text-2xl font-semibold text-sand-50 sm:text-3xl">
          {category.emoji} {category.name}
        </h3>
        <p className="mt-3 max-w-md text-brand-100/70">{category.description}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300">
          View all streams <span aria-hidden>→</span>
        </span>
      </div>
      <div className="relative z-[2] mt-8 flex flex-wrap gap-2 lg:mt-0 lg:max-w-xs lg:justify-end">
        {streams.slice(0, 6).map((s) => (
          <span
            key={s.slug}
            className="rounded-full border border-sand-100/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-sand-100/80"
          >
            {s.name}
          </span>
        ))}
      </div>
    </Link>
  );
}
