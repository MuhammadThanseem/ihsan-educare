import type { Metadata } from "next";
import { categories, getStreamsByCategory } from "@/lib/data";
import StreamCard from "@/components/StreamCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Career Streams — IHSAN EDUCARE",
  description:
    "All career streams after Plus Two — Medical, Engineering, Commerce, Law, Aviation, Defence, Teaching, Government Jobs and Central University Admissions.",
};

export default function StreamsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Explore
          </span>
          <h1 className="mt-2 font-display text-4xl font-semibold text-brand-950">
            Career Streams
          </h1>
          <p className="mt-3 text-brand-900/60">
            Every major path after Plus Two, grouped by field. Open a stream to
            see its entrance exam, required documents and official website.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 flex flex-col gap-16">
        {categories.map((category) => {
          const items = getStreamsByCategory(category.slug);
          if (items.length === 0) return null;
          return (
            <section key={category.slug} id={category.slug} className="scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-xl">
                    {category.emoji}
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-brand-950">
                      {category.name}
                    </h2>
                    <p className="text-sm text-brand-900/60">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Reveal>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((stream, i) => (
                  <Reveal key={stream.slug} delay={i * 0.04}>
                    <StreamCard stream={stream} />
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
