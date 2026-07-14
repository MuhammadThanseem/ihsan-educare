import Link from "next/link";
import { featuredExams, getStreamBySlug } from "@/lib/data";

export default function FeaturedExams() {
  return (
    <div>
      <div className="max-w-xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
          Featured
        </span>
        <h2 className="mt-2 font-display text-3xl font-semibold text-brand-950">
          Featured Entrance Exams
        </h2>
        <p className="mt-2 text-brand-900/60">
          A quick look at some of the most-searched entrance exams after Plus
          Two.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredExams.map((exam) => {
          const stream = getStreamBySlug(exam.streamSlug);
          if (!stream) return null;
          return (
            <Link
              key={exam.name}
              href={`/streams/${stream.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-brand-900/8 bg-white px-5 py-4 shadow-sm transition-all hover:border-gold-300 hover:shadow-md"
            >
              <div>
                <p className="font-display text-base font-semibold text-brand-950 group-hover:text-brand-700">
                  {exam.name}
                </p>
                <p className="text-xs text-brand-900/50">{stream.name}</p>
              </div>
              <span className="text-gold-500 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
