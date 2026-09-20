const { chromium } = require("playwright");

const URL = process.env.TEST_URL || "http://127.0.0.1:43123";

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.addInitScript(() => {
    sessionStorage.removeItem("narciss-hair-demo-dismissed");
  });
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(URL, { waitUntil: "networkidle" });

  await page.getByRole("button", { name: "看 Demo" }).waitFor({ state: "visible", timeout: 15000 });
  const modal = page.locator("#demo-gate");

  const htmlLocked = await page.evaluate(() =>
    document.documentElement.classList.contains("demo-gate-locked")
  );
  const bodyLocked = await page.evaluate(() =>
    document.body.classList.contains("demo-gate-locked")
  );
  const shellLocked = await page.evaluate(() =>
    document.getElementById("site-shell")?.classList.contains("demo-gate-locked")
  );

  const ctas = ["tel", "line"];
  const blocked = {};
  for (const cta of ctas) {
    const el = page.locator(`[data-cta="${cta}"]`).first();
    blocked[cta] = await el.evaluate((node) => {
      const rect = node.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const top = document.elementFromPoint(x, y);
      return top !== node && !node.contains(top);
    });
  }

  const title = await page.locator("#demo-gate-title").textContent();
  const scrollYStart = await page.evaluate(() => window.scrollY);
  await page.mouse.wheel(0, 400);
  await page.waitForTimeout(150);
  const scrollYAfterWheel = await page.evaluate(() => window.scrollY);

  await page.getByRole("button", { name: "看 Demo" }).click();
  await page.locator("#demo-gate").waitFor({ state: "detached", timeout: 5000 });

  const aboveFold = {};
  for (const cta of ["tel", "line", "ig"]) {
    const el = page.locator(`[data-cta="${cta}"]`).first();
    aboveFold[cta] = await el.evaluate((node) => {
      const rect = node.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    });
  }

  const h1 = await page.locator("#hero-title").isVisible();
  const screenshotPath = process.env.SCREENSHOT_PATH || "/opt/cursor/artifacts/hero-375.png";
  await page.screenshot({ path: screenshotPath, fullPage: false });

  console.log(
    JSON.stringify({
      url: URL,
      htmlLocked,
      bodyLocked,
      shellLocked,
      scrollLocked: scrollYStart === 0 && scrollYAfterWheel === 0,
      blockedUntilClick: blocked,
      allBlocked: Object.values(blocked).every(Boolean),
      titleIncludesDemo: title?.includes("僅供 Demo"),
      aboveFoldAfterDismiss: aboveFold,
      dualCtaAboveFold: aboveFold.tel && aboveFold.line,
      heroTitleVisible: h1,
      screenshotPath,
    })
  );

  await browser.close();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
