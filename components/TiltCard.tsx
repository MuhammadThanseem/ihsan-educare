"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { MouseEvent, ReactNode } from "react";

export default function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
  const rotateX = useSpring(
    useTransform(mouseY, [0, 1], [7, -7]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [0, 1], [-7, 7]),
    springConfig
  );
  const translateY = useSpring(0, springConfig);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseEnter() {
    translateY.set(-4);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
    translateY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, y: translateY, transformPerspective: 800 }}
      className={`h-full ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
