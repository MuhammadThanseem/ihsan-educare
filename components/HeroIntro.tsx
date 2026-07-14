"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Children } from "react";
import type { ReactNode } from "react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroIntro({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative mx-auto flex max-w-5xl flex-col items-center gap-7 px-4 py-24 text-center sm:px-6"
    >
      {Children.map(children, (child) => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  );
}
