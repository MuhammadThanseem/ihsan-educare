import Link from "next/link";
import { notifications } from "@/lib/data";
import Icon from "./Icon";

const tagStyles: Record<string, string> = {
  "Exam Alert": "bg-brand-50 text-brand-700",
  "Scholarship Alert": "bg-gold-50 text-gold-700",
  "Admission Alert": "bg-rose-50 text-rose-700",
};

export default function NotificationsWidget() {
  return (
    <div className="rounded-[2rem] border border-brand-900/8 bg-white p-8 shadow-sm sm:p-10">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Stay Updated
          </span>
          <h2 className="mt-2 flex items-center gap-3 font-display text-2xl font-semibold text-brand-950">
            <Icon name="bell" className="text-xl text-brand-700" />
            Latest Notifications
          </h2>
        </div>
        <Link
          href="/contact"
          className="text-sm font-medium text-brand-700 hover:text-gold-600 hover:underline"
        >
          Get real alerts →
        </Link>
      </div>
      <ul className="mt-6 flex flex-col divide-y divide-brand-900/8">
        {notifications.map((n) => (
          <li key={n.title} className="flex items-start gap-3 py-4">
            <span
              className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${tagStyles[n.tag]}`}
            >
              {n.tag}
            </span>
            <div>
              <p className="text-sm text-brand-900/80">{n.title}</p>
              <p className="mt-0.5 text-xs text-brand-900/40">{n.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
