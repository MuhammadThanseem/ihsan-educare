"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import type { IconName } from "@/lib/icons";

const navItems: { href: string; label: string; icon: IconName }[] = [
  { href: "/", label: "Home", icon: "house" },
  { href: "/streams", label: "Streams", icon: "book-open" },
  { href: "/contact", label: "Contact", icon: "phone" },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-between rounded-full border border-brand-900/10 bg-white/90 px-2 py-2 shadow-lg shadow-brand-950/15 backdrop-blur-md lg:hidden"
    >
      {navItems.slice(0, 2).map((item) => (
        <NavItem key={item.href} item={item} pathname={pathname} />
      ))}

      <Link
        href="/career-finder"
        aria-label="Career Finder"
        className="-mt-8 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-900 text-lg text-sand-50 shadow-lg shadow-brand-900/30 ring-4 ring-sand-50 transition-transform active:scale-95"
      >
        <Icon name="robot" />
      </Link>

      {navItems.slice(2).map((item) => (
        <NavItem key={item.href} item={item} pathname={pathname} />
      ))}
    </nav>
  );
}

function NavItem({
  item,
  pathname,
}: {
  item: { href: string; label: string; icon: IconName };
  pathname: string;
}) {
  const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

  return (
    <Link
      href={item.href}
      className={`flex flex-1 flex-col items-center gap-0.5 rounded-full px-2 py-1.5 text-[11px] font-medium transition-colors ${
        active ? "text-brand-900" : "text-brand-900/45"
      }`}
    >
      <Icon name={item.icon} className={`text-base ${active ? "text-gold-500" : ""}`} />
      {item.label}
    </Link>
  );
}
