"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { CategoryGroup } from "@/lib/data";
import Icon from "./Icon";

export default function CategoryCard({ category }: { category: CategoryGroup }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Link
        href={`/streams#${category.slug}`}
        className="group flex h-full flex-col items-start rounded-2xl border border-brand-900/8 bg-white p-6 shadow-sm transition-all hover:border-gold-300 hover:shadow-xl hover:shadow-brand-900/5"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-lg text-brand-700 transition-colors group-hover:bg-gold-100">
          <Icon name={category.icon} />
        </span>
        <h3 className="mt-4 font-display text-base font-semibold text-brand-950 group-hover:text-brand-700">
          {category.name}
        </h3>
        <p className="mt-1.5 text-sm text-brand-900/60">
          {category.description}
        </p>
        <span className="mt-4 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-gold-600 opacity-0 transition-opacity group-hover:opacity-100">
          Explore <span aria-hidden>→</span>
        </span>
      </Link>
    </motion.div>
  );
}
