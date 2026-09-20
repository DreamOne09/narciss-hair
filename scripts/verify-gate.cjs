const { chromium } = require("playwright");

const testUrl = process.env.TEST_URL || "http://127.0.0.1:43123";
const STORAGE_KEY = "narciss-proposal-unlocked";

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.addInitScript((key) => {
    sessionStorage.removeItem(key);
  }, STORAGE_KEY);
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(testUrl, { waitUntil: "networkidle" });

  const robotsMeta = await page.evaluate(() => {
    const robots = document.querySelector('meta[name="robots"]')?.getAttribute("content") || "";
    const googlebot =
      document.querySelector('meta[name="googlebot"]')?.getAttribute("content") || "";
    return { robots, googlebot };
  });

  const pageUrl = new URL(testUrl);
  const robotsTxtUrl = new URL(
    "robots.txt",
    pageUrl.href.endsWith("/") ? pageUrl.href : `${pageUrl.href}/`
  ).href;
  let robotsTxt = "";
  try {
    const res = await page.request.get(robotsTxtUrl);
    robotsTxt = res.ok() ? await res.text() : "";
  } catch {
    robotsTxt = "";
  }

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

  const noindexOk =
    robotsMeta.robots.includes("noindex") &&
    robotsMeta.googlebot.includes("noindex") &&
    robotsTxt.includes("Disallow: /");

  console.log(
    JSON.stringify({
      url: testUrl,
      robotsMeta,
      robotsTxtUrl,
      robotsDisallowAll: robotsTxt.includes("Disallow: /"),
      noindexPresent: noindexOk,
      htmlLocked,
      blockedUntilUnlock: blocked,
      wrongPasswordShowsError: errorVisible,
      legalBannerIncludes: legalBanner?.includes("未授權公開"),
      dualCtaAboveFold: aboveFold.tel && aboveFold.line,
    })
  );

  if (!noindexOk) {
    throw new Error("noindex / robots.txt acceptance failed");
  }

  await browser.close();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
