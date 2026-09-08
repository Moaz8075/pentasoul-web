"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "motion/react";

export function HeroCrystal() {
  const reduced = useReducedMotion();
  const raw = useId().replace(/:/g, "");
  const stroke = `crystal-stroke-${raw}`;
  const fill = `crystal-fill-${raw}`;
  const glow = `crystal-glow-${raw}`;

  return (
    <div className="relative mx-auto aspect-[120/138] w-[min(100%,420px)]">
      <div className="pulse-glow pointer-events-none absolute top-1/2 left-1/2 size-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.38)_0%,transparent_70%)] blur-3xl" />
      <motion.svg
        viewBox="0 0 120 138"
        className="relative z-10 h-full w-full overflow-visible"
        aria-hidden="true"
        initial={reduced ? false : { opacity: 0, scale: 0.86, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <defs>
          <linearGradient id={stroke} x1="12" y1="8" x2="108" y2="124" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ede9fe" />
            <stop offset="45%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id={fill} x1="60" y1="8" x2="60" y2="124" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(196,181,253,0.22)" />
            <stop offset="100%" stopColor="rgba(99,102,241,0.05)" />
          </linearGradient>
          <filter id={glow} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="1.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.g
          filter={`url(#${glow})`}
          animate={reduced ? undefined : { rotate: [0, 3, 0, -3, 0], y: [0, -6, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "60px 70px" }}
        >
          <path
            d="M60 8 L112 38 L112 94 L60 124 L8 94 L8 38 Z"
            fill={`url(#${fill})`}
            stroke={`url(#${stroke})`}
            strokeWidth="1.6"
          />
          <path
            d="M60 8 L112 38 L60 68 L8 38 Z"
            fill="rgba(255,255,255,0.06)"
            stroke={`url(#${stroke})`}
            strokeWidth="1.1"
          />
          <path d="M60 68 L60 108" stroke={`url(#${stroke})`} strokeWidth="1.1" />
          <path d="M22 42 L60 64 L98 42" stroke="#c4b5fd" strokeWidth="0.9" opacity="0.85" />
          <path d="M32 36 L60 52 L88 36" stroke="#c4b5fd" strokeWidth="0.8" opacity="0.65" />
          <path d="M40 30 L60 42 L80 30" stroke="#ede9fe" strokeWidth="0.7" opacity="0.5" />
          <path d="M48 24 L60 31 L72 24" stroke="#ede9fe" strokeWidth="0.6" opacity="0.4" />
          <path d="M18 44 L18 90 L50 108" stroke={`url(#${stroke})`} strokeWidth="0.9" opacity="0.7" />
          <path d="M28 50 L28 86 L50 99" stroke="#a78bfa" strokeWidth="0.8" opacity="0.55" />
          <path d="M38 56 L38 82 L50 89" stroke="#a78bfa" strokeWidth="0.7" opacity="0.4" />
          <path d="M102 44 L102 90 L70 108" stroke={`url(#${stroke})`} strokeWidth="0.9" opacity="0.7" />
          <path d="M92 50 L92 86 L70 99" stroke="#a78bfa" strokeWidth="0.8" opacity="0.55" />
          <path d="M82 56 L82 82 L70 89" stroke="#a78bfa" strokeWidth="0.7" opacity="0.4" />
          <path
            d="M60 22 L94 42 L94 82 L60 102 L26 82 L26 42 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <circle cx="60" cy="68" r="2.2" fill="#ede9fe" />
        </motion.g>
      </motion.svg>
    </div>
  );
}
