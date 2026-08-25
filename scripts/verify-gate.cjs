const { chromium } = require("playwright");

const URL = process.env.TEST_URL || "http://127.0.0.1:43123";

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.addInitScript(() => {
    localStorage.removeItem("narciss-hair-demo-dismissed");
  });
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(URL, { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "看 Demo" }).waitFor({ state: "visible", timeout: 15000 });
  const modal = page.locator('[role="dialog"][aria-modal="true"]');

  const overlayZ = await page.locator(".z-\\[10000\\]").evaluate((el) =>
    getComputedStyle(el).zIndex
  );
  const galleryZ = await page.locator("#works").evaluate((el) =>
    getComputedStyle(el).zIndex
  );

  const bodyOverflow = await page.evaluate(() => document.body.style.overflow);
  const pointerBlocked = await page.evaluate(() => {
    const wrap = document.querySelector(".pointer-events-none");
    return wrap !== null;
  });

  const ctas = ["tel", "fb", "line", "ig"];
  const blocked = {};
  for (const cta of ctas) {
    const el = page.locator(`[data-cta="${cta}"]`);
    blocked[cta] = await el.evaluate((node) => {
      const rect = node.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const top = document.elementFromPoint(x, y);
      return top !== node && !node.contains(top);
    });
  }

  const copy = await page.locator("#demo-gate-title").textContent();
  const hasButton = await page.getByRole("button", { name: "看 Demo" }).isVisible();
  const hasClose = await page.locator('[aria-label="關閉"]').count();

  await page.keyboard.press("Escape");
  const stillVisible = await modal.isVisible();

  const scrollYStart = await page.evaluate(() => window.scrollY);

  await page.mouse.wheel(0, 400);
  await page.waitForTimeout(150);
  const scrollYAfterWheel = await page.evaluate(() => window.scrollY);

  await page.evaluate(() => window.scrollTo(0, 400));
  await page.waitForTimeout(50);
  const scrollYAfterForce = await page.evaluate(() => window.scrollY);

  await page.evaluate(() => {
    const body = document.body;
    const touch = new Touch({
      identifier: 1,
      target: body,
      clientX: 187,
      clientY: 500,
      pageX: 187,
      pageY: 500,
    });
    body.dispatchEvent(
      new TouchEvent("touchmove", {
        bubbles: true,
        cancelable: true,
        touches: [touch],
      })
    );
  });
  await page.waitForTimeout(100);
  const scrollYAfterTouch = await page.evaluate(() => window.scrollY);

  await page.getByRole("button", { name: "看 Demo" }).click();
  await page.locator('[role="dialog"][aria-modal="true"]').waitFor({ state: "detached", timeout: 5000 });

  const aboveFold = {};
  for (const cta of ctas) {
    const el = page.locator(`[data-cta="${cta}"]`);
    aboveFold[cta] = await el.evaluate((node) => {
      const rect = node.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    });
  }

  const aboveFoldCount = Object.values(aboveFold).filter(Boolean).length;

  console.log(
    JSON.stringify({
      url: URL,
      overlayZ,
      galleryZ,
      modalAboveGallery: Number(overlayZ) > Number(galleryZ || 0),
      bodyOverflow,
      pointerBlocked,
      copy,
      hasButton,
      hasClose,
      escBlocked: stillVisible,
      scrollYStart,
      scrollYAfterWheel,
      scrollYAfterForce,
      scrollYAfterTouch,
      scrollLocked:
        scrollYStart === 0 &&
        scrollYAfterWheel === 0 &&
        scrollYAfterForce === 0 &&
        scrollYAfterTouch === 0,
      blockedUntilClick: blocked,
      allBlocked: Object.values(blocked).every(Boolean),
      aboveFoldAfterDismiss: aboveFold,
      aboveFoldCount,
      twoAboveFold: aboveFoldCount >= 2,
    })
  );

  await browser.close();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
