"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DEMO_DISCLAIMER } from "@/lib/site-data";

const STORAGE_KEY = "narciss-hair-demo-dismissed";

export function DemoOverlay() {
  const [showModal, setShowModal] = useState(false);
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setShowModal(true);
    } else {
      setShowBadge(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setShowModal(false);
    setShowBadge(true);
  };

  return (
    <>
      {showModal && (
        <div
          className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4 pointer-events-none"
          style={{ bottom: "7.5rem" }}
        >
          <div
            className="pointer-events-auto w-full max-w-sm rounded-2xl border border-white/20 bg-charcoal/92 px-5 py-4 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-500"
            role="dialog"
            aria-labelledby="demo-modal-title"
          >
            <p
              id="demo-modal-title"
              className="text-sm leading-relaxed text-cream/90"
            >
              {DEMO_DISCLAIMER}
            </p>
            <Button
              onClick={dismiss}
              className="mt-3 w-full bg-gold text-charcoal hover:bg-gold/90 font-medium"
            >
              看 Demo
            </Button>
          </div>
        </div>
      )}

      {showBadge && (
        <div
          className="fixed bottom-20 left-3 z-50 rounded-full border border-gold/40 bg-charcoal/90 px-3 py-1.5 text-[11px] font-semibold tracking-widest text-gold shadow-lg backdrop-blur-sm"
          aria-label="Demo 網站標示"
        >
          DEMO
        </div>
      )}
    </>
  );
}
