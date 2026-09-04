"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { company } from "@/data/company";

export function WatchStory() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-3 text-[15px] font-medium text-ink"
      >
        <span className="grid size-11 place-items-center rounded-full border border-ink/15">
          <Play size={14} fill="currentColor" className="ml-0.5" />
        </span>
        Watch Our Story
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="story-title"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/80 p-6 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-[28px] bg-white"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 grid size-10 place-items-center rounded-full bg-white/90 text-ink"
            >
              <X size={18} />
              <span className="sr-only">Close</span>
            </button>
            <div className="relative aspect-video">
              <Image
                src="/images/about-interior.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="px-8 py-7">
              <p id="story-title" className="text-2xl font-semibold tracking-tight">
                {company.wallLine}
              </p>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
                {company.aboutBody}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
