"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

export default function AnimatedHeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 h-[520px] overflow-hidden"
    >
      <motion.div
        style={reduceMotion ? undefined : { y: scrollY }}
        className="absolute inset-0"
      >
        <motion.div
          className="absolute -left-16 top-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_var(--color-brand-100)_0%,_transparent_70%)] blur-2xl"
          animate={
            reduceMotion
              ? undefined
              : { x: [0, 40, 0], y: [0, 24, 0], scale: [1, 1.08, 1] }
          }
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-6 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,_var(--color-gold-100)_0%,_transparent_65%)] blur-2xl"
          animate={
            reduceMotion
              ? undefined
              : { x: [0, -30, 0], y: [0, -18, 0], scale: [1, 1.1, 1] }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </motion.div>
    </div>
  );
}
