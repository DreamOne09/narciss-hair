const GATE_ID = "entry-gate";
const LOCK_CLASS = "entry-gate-locked";

function isInsideGate(target: EventTarget | null): boolean {
  const gate = document.getElementById(GATE_ID);
  if (!gate || !(target instanceof Node)) return false;
  return gate.contains(target);
}

export function lockEntryGate(contentEl: HTMLElement | null): () => void {
  const html = document.documentElement;
  const body = document.body;

  html.classList.add(LOCK_CLASS);
  body.classList.add(LOCK_CLASS);
  if (contentEl) {
    contentEl.classList.add(LOCK_CLASS);
  }

  window.scrollTo(0, 0);

  const blockScrollEvents = (e: Event) => {
    if (!document.getElementById(GATE_ID)) return;
    if (isInsideGate(e.target)) return;
    e.preventDefault();
    e.stopPropagation();
  };

  const pinScroll = () => {
    if (document.getElementById(GATE_ID) && window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  };

  const passiveFalse = { passive: false } as AddEventListenerOptions;

  window.addEventListener("wheel", blockScrollEvents, passiveFalse);
  window.addEventListener("touchmove", blockScrollEvents, passiveFalse);
  document.addEventListener("wheel", blockScrollEvents, passiveFalse);
  document.addEventListener("touchmove", blockScrollEvents, passiveFalse);
  window.addEventListener("scroll", pinScroll, passiveFalse);
  document.addEventListener("scroll", pinScroll, passiveFalse);

  return () => {
    html.classList.remove(LOCK_CLASS);
    body.classList.remove(LOCK_CLASS);
    if (contentEl) {
      contentEl.classList.remove(LOCK_CLASS);
    }

    window.removeEventListener("wheel", blockScrollEvents);
    window.removeEventListener("touchmove", blockScrollEvents);
    document.removeEventListener("wheel", blockScrollEvents);
    document.removeEventListener("touchmove", blockScrollEvents);
    window.removeEventListener("scroll", pinScroll);
    document.removeEventListener("scroll", pinScroll);
  };
}
