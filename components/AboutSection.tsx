import { aboutContent } from "@/lib/data";

const cards = [
  { emoji: "💡", ...aboutContent.whatIs },
  { emoji: "🎯", ...aboutContent.why },
];

export default function AboutSection() {
  return (
    <div>
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
          About Us
        </span>
        <h2 className="mt-2 font-display text-3xl font-semibold text-brand-950">
          About IHSAN EDUCARE
        </h2>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {cards.map((card) => (
          <div
            key={card.heading.en}
            className="rounded-[2rem] border border-brand-900/8 bg-white p-8 shadow-sm"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-xl">
              {card.emoji}
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-brand-950">
              {card.heading.en}
            </h3>
            <p lang="ml" className="mt-3 text-brand-900/70">
              {card.body.ml}
            </p>
            <p className="mt-3 text-sm text-brand-900/50">{card.body.en}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
