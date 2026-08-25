const OVERLAY_SELECTOR = "[data-demo-gate-overlay]";
const LOCK_CLASS = "demo-gate-locked";

function isInsideOverlay(target: EventTarget | null): boolean {
  const overlay = document.querySelector(OVERLAY_SELECTOR);
  if (!overlay || !(target instanceof Node)) return false;
  return overlay.contains(target);
}

export function lockPageScroll(): () => void {
  const scrollY = window.scrollY;
  const html = document.documentElement;
  const body = document.body;

  const prev = {
    htmlOverflow: html.style.overflow,
    bodyOverflow: body.style.overflow,
    bodyPosition: body.style.position,
    bodyTop: body.style.top,
    bodyWidth: body.style.width,
    bodyLeft: body.style.left,
    bodyRight: body.style.right,
    htmlHeight: html.style.height,
    bodyHeight: body.style.height,
    htmlPosition: html.style.position,
    htmlWidth: html.style.width,
    htmlTop: html.style.top,
  };

  html.classList.add(LOCK_CLASS);
  body.classList.add(LOCK_CLASS);

  html.style.position = "fixed";
  html.style.top = "0";
  html.style.left = "0";
  html.style.right = "0";
  html.style.width = "100%";
  html.style.overflow = "hidden";
  html.style.height = "100%";

  body.style.position = "fixed";
  body.style.top = `${-scrollY}px`;
  body.style.left = "0";
  body.style.right = "0";
  body.style.width = "100%";
  body.style.overflow = "hidden";
  body.style.height = "100%";

  window.scrollTo(0, 0);

  const blockScrollEvents = (e: Event) => {
    if (isInsideOverlay(e.target)) return;
    e.preventDefault();
    e.stopPropagation();
  };

  const pinScroll = () => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  };

  const blockKeyScroll = (e: KeyboardEvent) => {
    const keys = [
      "ArrowUp",
      "ArrowDown",
      "PageUp",
      "PageDown",
      "Home",
      "End",
      " ",
      "Spacebar",
    ];
    if (keys.includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const passiveFalse = { passive: false } as AddEventListenerOptions;

  window.addEventListener("wheel", blockScrollEvents, passiveFalse);
  window.addEventListener("touchmove", blockScrollEvents, passiveFalse);
  document.addEventListener("wheel", blockScrollEvents, passiveFalse);
  document.addEventListener("touchmove", blockScrollEvents, passiveFalse);
  window.addEventListener("scroll", pinScroll, passiveFalse);
  document.addEventListener("scroll", pinScroll, passiveFalse);
  window.addEventListener("keydown", blockKeyScroll, passiveFalse);

  return () => {
    html.classList.remove(LOCK_CLASS);
    body.classList.remove(LOCK_CLASS);

    html.style.overflow = prev.htmlOverflow;
    body.style.overflow = prev.bodyOverflow;
    body.style.position = prev.bodyPosition;
    body.style.top = prev.bodyTop;
    body.style.width = prev.bodyWidth;
    body.style.left = prev.bodyLeft;
    body.style.right = prev.bodyRight;
    html.style.height = prev.htmlHeight;
    body.style.height = prev.bodyHeight;
    html.style.position = prev.htmlPosition;
    html.style.width = prev.htmlWidth;
    html.style.top = prev.htmlTop;

    window.removeEventListener("wheel", blockScrollEvents);
    window.removeEventListener("touchmove", blockScrollEvents);
    document.removeEventListener("wheel", blockScrollEvents);
    document.removeEventListener("touchmove", blockScrollEvents);
    window.removeEventListener("scroll", pinScroll);
    document.removeEventListener("scroll", pinScroll);
    window.removeEventListener("keydown", blockKeyScroll);

    window.scrollTo(0, scrollY);
  };
}
