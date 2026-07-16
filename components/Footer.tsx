import Link from "next/link";
import Logo from "./Logo";
import Parallax from "./Parallax";
import { orgTagline } from "@/lib/data";

const links = [
  { href: "/career-finder", label: "Career Finder" },
  { href: "/streams", label: "Career Streams" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold-900/40 bg-brand-950 text-sand-100">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <Parallax speed={0.15}>
          <span className="select-none font-display text-[9rem] font-semibold leading-none tracking-tight text-white/[0.03] lg:text-[12rem]">
            IHSAN EDUCARE
          </span>
        </Parallax>
      </div>
      <div className="relative mx-auto max-w-6xl px-4 pb-28 pt-14 sm:px-6 lg:pb-14">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <Logo inverted />
            <p className="mt-4 max-w-xs text-sm text-sand-100/70">
              A career, entrance &amp; scholarship guidance initiative — in
              loving memory of Muhammed Ihsan.
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-gold-300/80">
              {orgTagline}
            </p>
          </div>
          <ul className="flex flex-wrap gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-sand-100/75 transition-colors hover:text-gold-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 border-t border-sand-100/10 pt-6 text-sm text-sand-100/50">
          © {new Date().getFullYear()} IHSAN EDUCARE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
