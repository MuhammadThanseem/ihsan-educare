"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { whatsappCourseNumber, whatsappNumber } from "@/lib/data";
import Icon from "./Icon";
import type { IconName } from "@/lib/icons";

const options: {
  label: string;
  icon: IconName;
  number: string;
  message: string;
}[] = [
  {
    label: "Website related query",
    icon: "link",
    number: whatsappNumber,
    message: "Hi, I have a website related query.",
  },
  {
    label: "Course related query",
    icon: "graduation-cap",
    number: whatsappCourseNumber,
    message: "Hi, I have a course related query.",
  },
];

export default function WhatsAppFloatingButton() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(e: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-24 right-4 z-50 flex flex-col items-end gap-3 lg:bottom-6 lg:right-6"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col gap-1.5 rounded-2xl border border-brand-900/8 bg-white p-2 shadow-xl shadow-black/10"
          >
            {options.map((option) => (
              <a
                key={option.label}
                href={`https://wa.me/${option.number}?text=${encodeURIComponent(option.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 whitespace-nowrap rounded-xl px-3 py-2.5 text-sm font-medium text-brand-900 transition-colors hover:bg-brand-50"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#128C4A]">
                  <Icon name={option.icon} className="text-sm" />
                </span>
                {option.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat with us on WhatsApp"
        aria-expanded={open}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-xl text-white shadow-lg shadow-black/20 transition-transform hover:scale-110 lg:h-14 lg:w-14 lg:text-2xl"
      >
        <Icon name={open ? "xmark" : "whatsapp"} className={open ? "text-lg" : ""} />
      </button>
    </div>
  );
}
