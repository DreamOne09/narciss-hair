# NARCISS HAIR — 靜態行銷 Demo（Astro-Chalet 家）

台北中山區 **NARCISS HAIR** 的美業行銷站 Demo。**純靜態** `astro build`，無資料庫、無 CMS。

> **僅供 Demo 使用** · 公開來源整理 · **非店家委託** · **由琢奧科技製作**

## 搜尋引擎（硬條件：不收錄）

- 全站 `<meta name="robots" content="noindex, nofollow, noarchive">`（含 `googlebot`），解鎖前後皆同
- `public/robots.txt`：`User-agent: *` · `Disallow: /`（並含 `/narciss-hair/` 供 GitHub Pages）
- **未**產生 sitemap；請勿在 Search Console 提交此 Demo

## 提案預覽密碼（門禁）

冷啟動一律顯示**全屏提案門**；同分頁輸入密碼 **`demo`**（區分大小寫）後以 `sessionStorage` 解鎖，關閉分頁需重輸。此為客端防誤入，**非正式資安**。

## GitHub Pages（Project site）

公開網址：`https://dreamone09.github.io/narciss-hair/`

建置時**必須**帶 base path，否則 `/_astro` 與 `/gallery` 會 404：

```bash
npm run build:pages
# 等同 PUBLIC_BASE=/narciss-hair astro build
```

Vercel／根網域部署維持預設：

```bash
npm run build   # PUBLIC_BASE 未設 → base '/'
```

內部連結與 public 資源請透過 `src/lib/paths.ts`（`asset()`、`route()`、`anchor()`），勿寫死 `/` 開頭路徑。

## 官方 alias（Vercel）

`https://narciss-hair.vercel.app` · `./scripts/deploy-official.sh`

## 改文案

```text
src/config/site.ts
```

## 本地

```bash
npm install
npm run dev
npm run build:pages && npx astro preview --port 43123
# 開啟 http://127.0.0.1:43123/narciss-hair/
npm run verify:g5
```

## 區塊順序（DESIGN-PLAN）

Hero（immersive）→ **作品 Gallery** → 關於 → 評價與信任 → 服務（精簡）→ 到店 → FAQ → CTA

## 技術

Astro 6 · VI tokens · CSS scroll reveal ≤1 · HairSalon JSON-LD
