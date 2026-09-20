const STORAGE_KEY = "narciss-hair-demo-dismissed";

function lockScroll() {
  document.documentElement.classList.add("demo-gate-locked");
  document.body.classList.add("demo-gate-locked");
  document.getElementById("site-shell")?.classList.add("demo-gate-locked");
}

function unlockScroll() {
  document.documentElement.classList.remove("demo-gate-locked");
  document.body.classList.remove("demo-gate-locked");
  document.getElementById("site-shell")?.classList.remove("demo-gate-locked");
}

function preventScroll(e: Event) {
  e.preventDefault();
}

function attachScrollBlockers() {
  window.addEventListener("wheel", preventScroll, { passive: false });
  window.addEventListener("touchmove", preventScroll, { passive: false });
}

function detachScrollBlockers() {
  window.removeEventListener("wheel", preventScroll);
  window.removeEventListener("touchmove", preventScroll);
}

function init() {
  const gate = document.getElementById("demo-gate");
  const enter = document.getElementById("demo-gate-enter");
  if (!gate || !enter) return;

  if (sessionStorage.getItem(STORAGE_KEY) === "1") {
    gate.remove();
    return;
  }

  lockScroll();
  attachScrollBlockers();

  enter.addEventListener("click", () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    detachScrollBlockers();
    unlockScroll();
    gate.remove();
  });
}

init();

export {};
