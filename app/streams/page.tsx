import type { Metadata } from "next";
import Link from "next/link";
import {
  categories,
  getStreamsByCategory,
  plusTwoStreams,
  type PlusTwoStreamSlug,
} from "@/lib/data";
import StreamCard from "@/components/StreamCard";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Career Streams — IHSAN EDUCARE",
  description:
    "All career streams after Plus Two — Medical, Engineering, Commerce, Law, Aviation, Defence, Teaching, Government Jobs and Central University Admissions.",
};

function isPlusTwoStreamSlug(value: string): value is PlusTwoStreamSlug {
  return plusTwoStreams.some((s) => s.slug === value);
}

export default async function StreamsPage({
  searchParams,
}: {
  searchParams: Promise<{ ptStream?: string }>;
}) {
  const { ptStream } = await searchParams;
  const activeStream = ptStream && isPlusTwoStreamSlug(ptStream) ? ptStream : undefined;

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

      <Reveal delay={0.05} className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/streams"
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
            !activeStream
              ? "border-brand-900 bg-brand-900 text-sand-50"
              : "border-brand-900/15 bg-white text-brand-900/70 hover:border-gold-400 hover:text-brand-900"
          }`}
        >
          All Streams
        </Link>
        {plusTwoStreams.map((s) => (
          <Link
            key={s.slug}
            href={`/streams?ptStream=${s.slug}`}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              activeStream === s.slug
                ? "border-brand-900 bg-brand-900 text-sand-50"
                : "border-brand-900/15 bg-white text-brand-900/70 hover:border-gold-400 hover:text-brand-900"
            }`}
          >
            <Icon name={s.icon} />
            {s.name}
          </Link>
        ))}
      </Reveal>

      <div className="mt-10 flex flex-col gap-16">
        {categories.map((category) => {
          const items = getStreamsByCategory(category.slug).filter(
            (stream) => !activeStream || stream.plusTwoStreams.includes(activeStream)
          );
          if (items.length === 0) return null;
          return (
            <section key={category.slug} id={category.slug} className="scroll-mt-24">
              <Reveal>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-lg text-brand-700">
                    <Icon name={category.icon} />
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
