import Link from "next/link";
import type { Stream } from "@/lib/data";
import Icon from "./Icon";
import TiltCard from "./TiltCard";

export default function StreamCard({ stream }: { stream: Stream }) {
  return (
    <TiltCard>
      <Link
        href={`/streams/${stream.slug}`}
        className="group flex h-full flex-col rounded-2xl border border-brand-900/8 bg-white p-6 shadow-sm transition-all hover:border-gold-300 hover:shadow-xl hover:shadow-brand-900/5"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-lg text-brand-700 transition-colors group-hover:bg-gold-100">
          <Icon name={stream.categoryIcon} />
        </span>
        <h3 className="mt-4 font-display text-base font-semibold text-brand-950 group-hover:text-brand-700">
          {stream.name}
        </h3>
        <p className="mt-1.5 text-sm text-brand-900/60">{stream.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stream.exams.slice(0, 3).map((exam) => (
            <span
              key={exam}
              className="rounded-full bg-gold-50 px-2.5 py-1 text-xs font-medium text-gold-700"
            >
              {exam}
            </span>
          ))}
        </div>
      </Link>
    </TiltCard>
  );
}
