const { chromium } = require("playwright");

const URL = process.env.TEST_URL || "http://127.0.0.1:43123";
const STORAGE_KEY = "narciss-proposal-unlocked";

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.addInitScript((key) => {
    sessionStorage.removeItem(key);
  }, STORAGE_KEY);
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(URL, { waitUntil: "networkidle" });

  await page.getByRole("heading", { name: "提案預覽須知" }).waitFor({ state: "visible", timeout: 15000 });

  const htmlLocked = await page.evaluate(() =>
    document.documentElement.classList.contains("demo-gate-locked")
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

  await page.locator("#proposal-password").fill("wrong");
  await page.getByRole("button", { name: "進入提案" }).click();
  const errorVisible = await page.locator("#proposal-gate-error").isVisible();

  await page.locator("#proposal-password").fill("demo");
  await page.getByRole("button", { name: "進入提案" }).click();
  await page.locator("#demo-gate").waitFor({ state: "detached", timeout: 5000 });

  const legalBanner = await page.locator(".legal-chrome-banner").textContent();

  const aboveFold = {};
  for (const cta of ["tel", "line", "ig"]) {
    const el = page.locator(`[data-cta="${cta}"]`).first();
    aboveFold[cta] = await el.evaluate((node) => {
      const rect = node.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    });
  }

  console.log(
    JSON.stringify({
      url: URL,
      htmlLocked,
      blockedUntilUnlock: blocked,
      wrongPasswordShowsError: errorVisible,
      legalBannerIncludes: legalBanner?.includes("未授權公開"),
      dualCtaAboveFold: aboveFold.tel && aboveFold.line,
    })
  );

  await browser.close();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
