"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/streams", label: "Streams" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-brand-900/10 bg-sand-50/85 shadow-[0_1px_0_0_rgba(0,0,0,0.02)] backdrop-blur-md"
          : "border-transparent bg-sand-50/0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-brand-900"
                    : "text-brand-800/70 hover:text-brand-900"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-gold-500" />
                )}
              </Link>
            );
          })}
          <Link
            href="/career-finder"
            className="ml-3 flex items-center gap-2 rounded-full bg-brand-900 px-5 py-2 text-sm font-semibold text-sand-50 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-lg hover:shadow-brand-900/20"
          >
            <Icon name="robot" />
            Career Finder
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-900/15 bg-sand-50/80 text-brand-900 lg:hidden"
        >
          <span className="sr-only">Menu</span>
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-brand-900/10 bg-sand-50 px-4 py-3 lg:hidden">
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  active
                    ? "bg-brand-900 text-sand-50"
                    : "text-brand-800/80 hover:bg-brand-100"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/career-finder"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center gap-2 rounded-lg bg-brand-900 px-3 py-2 text-sm font-semibold text-sand-50"
          >
            <Icon name="robot" />
            Career Finder
          </Link>
        </nav>
      )}
    </header>
  );
}
