import Link from "next/link";
import Icon from "./Icon";
import type { IconName } from "@/lib/icons";

const items: { href: string; label: string; icon: IconName }[] = [
  { href: "/career-finder", label: "Career Finder", icon: "robot" },
  { href: "/streams", label: "Streams", icon: "book-open" },
  { href: "#exams", label: "Entrance Exams", icon: "bullseye" },
  { href: "#scholarships", label: "Scholarships", icon: "sack-dollar" },
  { href: "#notifications", label: "Notifications", icon: "bell" },
  { href: "/contact", label: "Contact", icon: "phone" },
];

export default function QuickAccess() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="flex items-center gap-2 rounded-full border border-brand-900/10 bg-white px-4 py-2.5 text-sm font-medium text-brand-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-md"
        >
          <Icon name={item.icon} className="text-brand-700" />
          {item.label}
        </Link>
      ))}
    </div>
  );
}
