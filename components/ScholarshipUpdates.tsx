import Link from "next/link";
import { scholarshipUpdates } from "@/lib/data";

export default function ScholarshipUpdates() {
  return (
    <div className="rounded-[2rem] border border-gold-300/40 bg-gold-50 p-8 shadow-sm sm:p-10">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-700">
            Funding
          </span>
          <h2 className="mt-2 font-display text-2xl font-semibold text-brand-950">
            💰 Scholarship Updates
          </h2>
        </div>
        <Link
          href="/contact"
          className="text-sm font-medium text-brand-700 hover:text-gold-700 hover:underline"
        >
          Ask about scholarships →
        </Link>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {scholarshipUpdates.map((s) => (
          <div
            key={s.name}
            className="rounded-2xl border border-gold-300/30 bg-white p-5 shadow-sm"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-gold-600">
              {s.category}
            </span>
            <h3 className="mt-2 font-display text-sm font-semibold text-brand-950">
              {s.name}
            </h3>
            <p className="mt-1.5 text-sm text-brand-900/60">{s.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
