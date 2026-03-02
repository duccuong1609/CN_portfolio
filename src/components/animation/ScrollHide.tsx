"use client";

import { motion } from "framer-motion";

import { useScrollDirection } from "@/hooks/useScrollDirection";

interface ScrollAnimationProps {
  children?: React.ReactNode;
  className?: string;
  direction?: "up" | "down";
}

export default function ScrollAnimation({
  children,
  className,
  direction = "up",
}: ScrollAnimationProps) {
  const scrollDirection = useScrollDirection();
  const isHidden = scrollDirection === "down";

  return (
    <motion.div
      animate={{
        y: isHidden ? (direction === "up" ? "-100%" : "100%") : "0%",
        opacity: isHidden ? 0 : 1,
        pointerEvents: isHidden ? "none" : "auto",
      }}
      className={className}
      initial={false}
      transition={{
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
