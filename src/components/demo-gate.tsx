"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { DEMO_DISCLAIMER } from "@/lib/site-data";
import { lockPageScroll } from "@/lib/scroll-lock";

const STORAGE_KEY = "narciss-hair-demo-dismissed";

export function DemoGate({ children }: { children: React.ReactNode }) {
  const [locked, setLocked] = useState(true);
  const [showBadge, setShowBadge] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      setLocked(false);
      setShowBadge(true);
    }
  }, []);

  useLayoutEffect(() => {
    if (!locked) return;
    return lockPageScroll();
  }, [locked]);

  useEffect(() => {
    if (!locked) return;
    const blockEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    window.addEventListener("keydown", blockEscape, true);
    return () => window.removeEventListener("keydown", blockEscape, true);
  }, [locked]);

  useEffect(() => {
    const node = contentRef.current;
    if (!node) return;
    if (locked) {
      node.setAttribute("inert", "");
    } else {
      node.removeAttribute("inert");
    }
  }, [locked]);

  const dismiss = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "1");
    setLocked(false);
    setShowBadge(true);
  }, []);

  return (
    <>
      <div
        ref={contentRef}
        className={
          locked
            ? "pointer-events-none select-none overflow-hidden overscroll-none touch-none"
            : undefined
        }
        aria-hidden={locked ? true : undefined}
      >
        {children}
      </div>

      {locked && (
        <div
          data-demo-gate-overlay
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-charcoal/88 px-5 backdrop-blur-sm pointer-events-auto touch-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-gate-title"
        >
          <div className="w-full max-w-sm rounded-2xl border border-cream/15 bg-charcoal px-6 py-5 shadow-2xl">
            <p
              id="demo-gate-title"
              className="text-sm leading-relaxed text-cream/90"
            >
              {DEMO_DISCLAIMER}
            </p>
            <button
              type="button"
              onClick={dismiss}
              className="mt-4 w-full rounded-lg bg-gold py-2.5 text-sm font-medium text-charcoal transition-colors hover:bg-gold/90"
            >
              看 Demo
            </button>
          </div>
        </div>
      )}

      {showBadge && (
        <div
          className="fixed bottom-4 left-3 z-[9999] rounded-full border border-gold/40 bg-charcoal/90 px-3 py-1.5 text-[11px] font-semibold tracking-widest text-gold shadow-lg backdrop-blur-sm"
          aria-label="Demo 網站標示"
        >
          DEMO
        </div>
      )}
    </>
  );
}
