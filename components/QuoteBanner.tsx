import { quote } from "@/lib/data";

export default function QuoteBanner() {
  return (
    <div className="rounded-[2rem] border border-gold-300/40 bg-gold-50 p-8 text-center shadow-sm sm:p-12">
      <span className="font-display text-4xl text-gold-400" aria-hidden>
        &ldquo;
      </span>
      <p lang="ml" className="mx-auto -mt-2 max-w-2xl font-display text-xl text-brand-950 sm:text-2xl">
        {quote.ml}
      </p>
      <p className="mx-auto mt-3 max-w-xl text-sm text-brand-900/60">
        {quote.en}
      </p>
    </div>
  );
}
