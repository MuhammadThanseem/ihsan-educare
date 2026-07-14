"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero-top", label: "Home" },
  { id: "memory", label: "In Memory" },
  { id: "flagship", label: "Career Finder" },
  { id: "about", label: "About" },
  { id: "plus-two", label: "Plus Two Stream" },
  { id: "streams", label: "Streams" },
  { id: "goals", label: "Goals" },
];

export default function SectionNav() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 xl:flex"
    >
      {sections.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center gap-3"
            aria-current={isActive}
          >
            <span
              className={`text-xs font-medium uppercase tracking-wide opacity-0 transition-opacity group-hover:opacity-100 ${
                isActive ? "text-brand-900" : "text-brand-900/60"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all ${
                isActive
                  ? "h-2.5 w-2.5 bg-gold-500"
                  : "h-1.5 w-1.5 bg-brand-900/25 group-hover:bg-brand-900/50"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
