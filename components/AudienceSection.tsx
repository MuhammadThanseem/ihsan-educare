import { audience } from "@/lib/data";
import Icon from "./Icon";

export default function AudienceSection() {
  return (
    <div className="rounded-[2rem] border border-brand-900/8 bg-white p-8 shadow-sm sm:p-10">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
        Who It&apos;s For
      </span>
      <h2 className="mt-2 flex items-center gap-3 font-display text-2xl font-semibold text-brand-950">
        <Icon name="users" className="text-xl text-brand-700" />
        ആർക്കുവേണ്ടിയാണ്?
      </h2>
      <p className="text-sm text-brand-900/50">Who is IHSAN EDUCARE for?</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {audience.map((item) => (
          <li
            key={item.en}
            className="flex items-start gap-2.5 rounded-xl bg-brand-50/60 px-4 py-3"
          >
            <span className="mt-0.5 text-gold-600" aria-hidden>
              »
            </span>
            <div>
              <p lang="ml" className="text-sm font-medium text-brand-900">
                {item.ml}
              </p>
              <p className="text-xs text-brand-900/50">{item.en}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
