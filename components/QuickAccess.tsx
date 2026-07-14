import Link from "next/link";

const items = [
  { href: "/career-finder", label: "Career Finder", emoji: "🤖" },
  { href: "/streams", label: "Streams", emoji: "📚" },
  { href: "#exams", label: "Entrance Exams", emoji: "🎯" },
  { href: "#scholarships", label: "Scholarships", emoji: "💰" },
  { href: "#notifications", label: "Notifications", emoji: "🔔" },
  { href: "/contact", label: "Contact", emoji: "📞" },
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
          <span>{item.emoji}</span>
          {item.label}
        </Link>
      ))}
    </div>
  );
}
