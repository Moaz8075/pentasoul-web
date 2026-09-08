"use client";

import { motion, useReducedMotion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

export function LineReveal({
  lines,
  className,
  delay = 0,
}: {
  lines: Array<{ content: React.ReactNode; className?: string }>;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <h1 className={className}>
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden">
          <motion.span
            className={`block ${line.className ?? ""}`}
            initial={reduced ? false : { y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, delay: delay + index * 0.12, ease }}
          >
            {line.content}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
