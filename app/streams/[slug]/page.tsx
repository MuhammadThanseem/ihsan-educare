import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStreamBySlug, streams } from "@/lib/data";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return streams.map((stream) => ({ slug: stream.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const stream = getStreamBySlug(slug);
  if (!stream) return {};
  return {
    title: `${stream.name} — IHSAN EDUCARE`,
    description: stream.summary,
  };
}

export default async function StreamDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stream = getStreamBySlug(slug);
  if (!stream) notFound();

  const sections = [
    stream.eligibility && { title: "Eligibility", body: <p className="text-sm text-brand-900/80">{stream.eligibility}</p> },
    {
      title: "Entrance Exam",
      body: (
        <ul className="list-disc space-y-1 pl-5 text-sm text-brand-900/80">
          {stream.exams.map((exam) => (
            <li key={exam}>{exam}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Documents Required",
      body: (
        <ul className="list-disc space-y-1 pl-5 text-sm text-brand-900/80">
          {stream.documents.map((doc) => (
            <li key={doc}>{doc}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Application Date",
      body: (
        <p className="text-sm text-brand-900/80">
          {stream.applicationWindow ?? "To be announced by the conducting authority."}
        </p>
      ),
    },
    {
      title: "Official Website",
      body: (
        <ul className="space-y-1">
          {stream.officialWebsites.map((site) => (
            <li key={site.label}>
              <a
                href={site.url}
                className="text-sm font-medium text-brand-700 hover:text-gold-600 hover:underline"
              >
                {site.label} →
              </a>
            </li>
          ))}
        </ul>
      ),
    },
  ].filter(Boolean) as { title: string; body: React.ReactNode }[];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Link
        href="/streams"
        className="text-sm font-medium text-brand-700 hover:text-gold-600 hover:underline"
      >
        ← All Career Streams
      </Link>

      <Reveal className="mt-5">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-50 text-3xl">
            {stream.categoryEmoji}
          </span>
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-gold-600">
              {stream.category}
            </p>
            <h1 className="font-display text-3xl font-semibold text-brand-950">
              {stream.name}
            </h1>
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-brand-900/70">{stream.summary}</p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {sections.map((section, i) => (
          <Reveal key={section.title} delay={i * 0.05}>
            <Section index={String(i + 1).padStart(2, "0")} title={section.title}>
              {section.body}
            </Section>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function Section({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="h-full rounded-2xl border border-brand-900/8 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="font-display text-xs font-semibold text-gold-600">
          {index}
        </span>
        <h2 className="font-display text-sm font-semibold text-brand-950">
          {title}
        </h2>
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}
