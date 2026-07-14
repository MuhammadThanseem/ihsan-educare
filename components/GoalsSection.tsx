import { goals } from "@/lib/data";
import Icon from "./Icon";

export default function GoalsSection() {
  return (
    <div className="rounded-[2rem] border border-brand-900/8 bg-white p-8 shadow-sm sm:p-10">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
        Roadmap
      </span>
      <h2 className="mt-2 flex items-center gap-3 font-display text-2xl font-semibold text-brand-950">
        <Icon name="rocket" className="text-xl text-brand-700" />
        അടുത്ത 1 വർഷത്തെ ലക്ഷ്യങ്ങൾ
      </h2>
      <p className="text-sm text-brand-900/50">Our goals for the next 1 year</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {goals.map((item) => (
          <li key={item.en} className="flex items-start gap-2.5">
            <Icon name="circle-check" className="mt-0.5 text-brand-600" />
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
