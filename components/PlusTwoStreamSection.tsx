import Link from "next/link";
import { plusTwoStreams, getStreamsByPlusTwoStream } from "@/lib/data";
import Icon from "./Icon";
import TiltCard from "./TiltCard";

export default function PlusTwoStreamSection() {
  return (
    <div>
      <div className="max-w-xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
          Choose Your Path
        </span>
        <h2 className="mt-2 font-display text-3xl font-semibold text-brand-950">
          Browse by Plus Two Stream
        </h2>
        <p className="mt-2 text-brand-900/60">
          Science, Commerce or Humanities — see which career paths are
          realistically open to your Plus Two stream.
        </p>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {plusTwoStreams.map((stream) => {
          const count = getStreamsByPlusTwoStream(stream.slug).length;
          return (
            <TiltCard key={stream.slug}>
              <Link
                href={`/streams?ptStream=${stream.slug}`}
                className="group flex h-full flex-col items-start rounded-2xl border border-brand-900/8 bg-white p-6 shadow-sm transition-all hover:border-gold-300 hover:shadow-xl hover:shadow-brand-900/5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-lg text-brand-700 transition-colors group-hover:bg-gold-100">
                  <Icon name={stream.icon} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-brand-950 group-hover:text-brand-700">
                  {stream.name}
                </h3>
                <p className="mt-1.5 text-sm text-brand-900/60">
                  {stream.description}
                </p>
                <span className="mt-4 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-gold-600">
                  {count} career streams <span aria-hidden>→</span>
                </span>
              </Link>
            </TiltCard>
          );
        })}
      </div>
    </div>
  );
}
